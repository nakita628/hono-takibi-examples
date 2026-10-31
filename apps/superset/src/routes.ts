import { createRoute, z } from '@hono/zod-openapi'

type FolderType = {
  children?: FolderType[] | null
  description?: string | null
  name?: string
  type?: 'metric' | 'column' | 'folder'
  uuid: string
}

type TabType = { children?: TabType[]; parents?: string[]; title?: string; value?: string }

const ActivityChangedBySchema = z
  .object({
    first_name: z.string().exactOptional(),
    id: z.int().exactOptional(),
    last_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityChangedBy')

const ActivityImpactChartSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Chart id.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Chart name at the change's transaction — it may differ from the live name if the chart was renamed since.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityImpactChart')

const ActivityImpactSchema = z
  .object({
    affected_charts: z
      .array(ActivityImpactChartSchema)
      .exactOptional()
      .openapi({
        description:
          "The affected sibling charts (id + name), sorted by name — the detail behind the ``charts`` count, rendered as the rollup entry's hover tooltip. Capped at 50 entries per record; ``charts`` always carries the full count.",
      }),
    charts: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of sibling charts on the path entity affected by the same related-record change at this transaction.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityImpact')

const ActivityRecordSchema = z
  .object({
    action_kind: z
      .union([z.literal('clone'), z.literal('import'), z.literal('restore'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Transaction-level avenue that produced this record's batch: ``restore`` / ``import`` / ``clone``. ``null`` for ordinary saves. All records sharing a ``transaction_id`` share the same action_kind. The schema's third ``*_kind`` column (entity_kind / kind / action_kind), at transaction scope.",
      }),
    changed_by: ActivityChangedBySchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'User who produced the change, or ``null`` when the saving user no longer exists in ``ab_user``.',
      }),
    creation_kind: z
      .union([
        z.literal('pre_tracking'),
        z.literal('created'),
        z.literal('imported'),
        z.literal('unknown'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set only on the synthetic starting-version record (``kind == "__creation__"``): how the entity came to exist. ``"pre_tracking"`` — a retroactive baseline for an entity that predates versioning; ``"created"`` — a creation with tracking on; ``"imported"`` — an import, attributed to the importing user; ``"unknown"`` — an unstamped starting version whose creation provenance cannot be established. Machine values: display copy is owned by the client.',
      }),
    entity_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True iff the source entity is hard-deleted (no live row by ``entity_id``). False for live and soft-deleted entities.',
      }),
    entity_deletion_state: z
      .union([z.literal('soft_deleted'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Present when the source entity has non-null ``deleted_at`` Absent or ``null`` otherwise.',
      }),
    entity_kind: z
      .enum(['dashboard', 'chart', 'dataset'])
      .exactOptional()
      .openapi({
        description:
          'User-facing kind of the source entity: one of ``"dashboard"`` / ``"chart"`` / ``"dataset"``.',
      }),
    entity_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the source entity *at the time of the change* — denormalized from the validity-strategy shadow row. Survives entity rename / delete.',
      }),
    entity_uuid: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UUID of the source entity; ``null`` only when ``entity_deleted: true`` (the entity has been hard-deleted since the change was recorded).',
      }),
    first_tracked_save: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True when this record's transaction is the entity's FIRST tracked save (first UPDATE after the retroactive baseline). Such transactions can carry dozens of params-normalization records for entities that predate versioning; clients use the marker to collapse them rather than render each delta as a user edit. Matched against the LIVE row's (id, uuid), so it is always false for hard-deleted entities (no live row) and for shadow rows predating the entity's current uuid.",
      }),
    from_value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: "Prior value; ``null`` = didn't exist." }),
    impact: ActivityImpactSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional dependent-count for ``source: "related"`` records — e.g., ``{"charts": 4}`` for a dataset edit that affected 4 charts on the path dashboard at the change\'s transaction. Absent for ``source: "self"`` records and for related records without dependents.',
      }),
    issued_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC timestamp; primary ordering key (DESC).' }),
    kind: z
      .enum([
        'filter',
        'metric',
        'dimension',
        'column',
        'chart',
        'row',
        'tab',
        'tabs',
        'header',
        'markdown',
        'divider',
        'time_range',
        'color_palette',
        'field',
        '__meta__',
        '__creation__',
      ])
      .exactOptional()
      .openapi({
        description:
          'Content category — what kind of thing changed. ``field`` is the fallback for scalar changes without a more specific category. Per-record.',
      }),
    operation: z
      .enum(['add', 'remove', 'move', 'edit', 'update', 'announce'])
      .exactOptional()
      .openapi({
        description:
          'Per-record verb: ``add`` / ``remove`` / ``move`` / ``edit``. Explicit instead of inferred from ``from_value`` / ``to_value`` null-tests. ``move`` only fires for layout records.',
      }),
    path: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Pure navigation address — no verb or kind embedded. Examples: ``['slice_name']``, ``['params', 'adhoc_filters', 'country']``, ``['CHART-x']`` for a layout add/remove/move, ``['HEADER-y', 'text']`` for a layout edit leaf. The verb lives in ``operation``, the element type in ``kind``.",
      }),
    source: z
      .enum(['self', 'related'])
      .exactOptional()
      .openapi({
        description:
          '``"self"`` if ``(entity_kind, entity_id)`` matches the path entity; else ``"related"``. Drives the frontend\'s no-group-under-save rendering rule.',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Synthesized headline for ``source: "related"`` records — e.g., ``"Dataset updated: Sales Transactions"``. Empty string for ``source: "self"`` records, except ``__meta__`` self records (e.g. restore announcements), which carry their own headline.',
      }),
    to_value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New value; ``null`` = removed.' }),
    transaction_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Stable secondary ordering key; never reused.' }),
    version_uuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Stable UUIDv5 identifier for the source version (``derive_version_uuid(entity_uuid, transaction_id)``). Identical to what ``/versions/<version_uuid>/`` would return for the same change.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityRecord')

const ActivityResponseSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Total record count across all pages (the filtered + denormalized stream), not just the current page. When ``truncated`` is true this is a floor (the count within the fetched window), not the absolute total.',
      }),
    result: z.array(ActivityRecordSchema).exactOptional(),
    truncated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the request hit the per-request fetch ceiling and older records exist beyond the returned window. Narrow the time range (``since``/``until``) to see them.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityResponse')

const AdvancedDataTypeSchemaSchema = z
  .object({
    display_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string representation of the parsed values' }),
    error_message: z.string().exactOptional(),
    valid_filter_operators: z.array(z.string()).exactOptional(),
    values: z
      .array(z.string().openapi({ description: 'parsed value (can be any value)' }))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdvancedDataTypeSchema')

const AnnotationLayerSchema = z
  .object({
    annotationType: z
      .enum(['FORMULA', 'INTERVAL', 'EVENT', 'TIME_SERIES'])
      .exactOptional()
      .openapi({ description: 'Type of annotation layer' }),
    color: z.string().nullable().exactOptional().openapi({ description: 'Layer color' }),
    descriptionColumns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Columns to use as the description. If none are provided, all will be shown.',
      }),
    hideLine: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Should line be hidden. Only applies to line annotations' }),
    intervalEndColumn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Column containing end of interval. Only applies to interval layers',
      }),
    name: z.string().openapi({ description: 'Name of layer' }),
    opacity: z
      .union([
        z.literal(''),
        z.literal('opacityLow'),
        z.literal('opacityMedium'),
        z.literal('opacityHigh'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Opacity of layer' }),
    overrides: z
      .record(z.string(), z.any().nullable())
      .nullable()
      .exactOptional()
      .openapi({ description: 'which properties should be overridable' }),
    show: z.boolean().openapi({ description: 'Should the layer be shown' }),
    showLabel: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Should the label always be shown' }),
    showMarkers: z
      .boolean()
      .openapi({ description: 'Should markers be shown. Only applies to line annotations.' }),
    sourceType: z
      .enum(['', 'line', 'NATIVE', 'table'])
      .exactOptional()
      .openapi({ description: 'Type of source for annotation data' }),
    style: z
      .enum(['dashed', 'dotted', 'solid', 'longDashed'])
      .exactOptional()
      .openapi({ description: 'Line style. Only applies to time-series annotations' }),
    timeColumn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Column with event date or interval start date' }),
    titleColumn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Column with title' }),
    value: z
      .any()
      .openapi({
        description:
          'For formula annotations, this contains the formula. For other types, this is the primary key of the source object.',
      }),
    width: z.number().min(0).exactOptional().openapi({ description: 'Width of annotation line' }),
  })
  .openapi({ required: ['name', 'show', 'showMarkers', 'value'] })
  .openapi('AnnotationLayer')

const AnnotationLayerRestApiGetSchema = z
  .object({
    descr: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiGet')

const AnnotationLayerRestApiGetListUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('AnnotationLayerRestApiGetListUser1')

const AnnotationLayerRestApiGetListUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('AnnotationLayerRestApiGetListUser')

const AnnotationLayerRestApiGetListSchema = z
  .object({
    changed_by: AnnotationLayerRestApiGetListUser1Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: AnnotationLayerRestApiGetListUserSchema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    descr: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiGetList')

const AnnotationLayerRestApiPostSchema = z
  .object({
    descr: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Give a description for this annotation layer' }),
    name: z.string().min(1).max(250).openapi({ description: 'The annotation layer name' }),
  })
  .openapi({ required: ['name'] })
  .openapi('AnnotationLayerRestApiPost')

const AnnotationLayerRestApiPutSchema = z
  .object({
    descr: z
      .string()
      .exactOptional()
      .openapi({ description: 'Give a description for this annotation layer' }),
    name: z
      .string()
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({ description: 'The annotation layer name' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiPut')

const AnnotationRestApiGetAnnotationLayerSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(250).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('AnnotationRestApiGetAnnotationLayer')

const AnnotationRestApiGetSchema = z
  .object({
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int().exactOptional(),
    json_metadata: z.string().nullable().exactOptional(),
    layer: AnnotationRestApiGetAnnotationLayerSchema,
    long_descr: z.string().nullable().exactOptional(),
    short_descr: z.string().max(500).nullable().exactOptional(),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['layer'] })
  .openapi('AnnotationRestApiGet')

const AnnotationRestApiGetListUserSchema = z
  .object({ first_name: z.string().max(64), id: z.int().exactOptional() })
  .openapi({ required: ['first_name'] })
  .openapi('AnnotationRestApiGetListUser')

const AnnotationRestApiGetListUser1Schema = z
  .object({ first_name: z.string().max(64), id: z.int().exactOptional() })
  .openapi({ required: ['first_name'] })
  .openapi('AnnotationRestApiGetListUser1')

const AnnotationRestApiGetListSchema = z
  .object({
    changed_by: AnnotationRestApiGetListUserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: AnnotationRestApiGetListUser1Schema.exactOptional(),
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int().exactOptional(),
    long_descr: z.string().nullable().exactOptional(),
    short_descr: z.string().max(500).nullable().exactOptional(),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationRestApiGetList')

const AnnotationRestApiPostSchema = z
  .object({
    end_dttm: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The annotation end date time' }),
    json_metadata: z.string().nullable().exactOptional().openapi({ description: 'JSON metadata' }),
    long_descr: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A long description' }),
    short_descr: z.string().min(1).max(500).openapi({ description: 'A short description' }),
    start_dttm: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The annotation start date time' }),
  })
  .openapi({ required: ['end_dttm', 'short_descr', 'start_dttm'] })
  .openapi('AnnotationRestApiPost')

const AnnotationRestApiPutSchema = z
  .object({
    end_dttm: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The annotation end date time' }),
    json_metadata: z.string().nullable().exactOptional().openapi({ description: 'JSON metadata' }),
    long_descr: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A long description' }),
    short_descr: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'A short description' }),
    start_dttm: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The annotation start date time' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationRestApiPut')

const AvailableDomainsSchemaSchema = z
  .object({ domains: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('AvailableDomainsSchema')

const DatasourceSchema = z
  .object({
    catalog: z.string().nullable().exactOptional().openapi({ description: 'Datasource catalog' }),
    database_name: z.string().exactOptional().openapi({ description: 'Datasource name' }),
    datasource_name: z.string().exactOptional().openapi({ description: 'The datasource name.' }),
    datasource_type: z
      .enum(['table', 'dataset', 'query', 'saved_query', 'view', 'semantic_view'])
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    schema: z.string().exactOptional().openapi({ description: 'Datasource schema' }),
  })
  .openapi({ required: ['datasource_type'] })
  .openapi('Datasource')

const CacheInvalidationRequestSchemaSchema = z
  .object({
    datasource_uids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The uid of the dataset/datasource this new chart will use. A complete datasource identification needs `datasource_uid` ',
      }),
    datasources: z
      .array(DatasourceSchema)
      .exactOptional()
      .openapi({ description: 'A list of the data source and database names' }),
  })
  .openapi({ required: [] })
  .openapi('CacheInvalidationRequestSchema')

const CacheRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiGet')

const CacheRestApiGetListSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiGetList')

const CacheRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiPost')

const CacheRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiPut')

const CatalogsResponseSchemaSchema = z
  .object({
    result: z.array(z.string().openapi({ description: 'A database catalog name' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CatalogsResponseSchema')

const ChartCacheScreenshotResponseSchemaSchema = z
  .object({
    cache_key: z.string().exactOptional().openapi({ description: 'The cache key' }),
    chart_url: z.string().exactOptional().openapi({ description: 'The url to render the chart' }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to fetch the screenshot' }),
    task_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the async screenshot' }),
    task_updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the last change in status' }),
  })
  .openapi({ required: [] })
  .openapi('ChartCacheScreenshotResponseSchema')

const ChartCacheWarmUpRequestSchemaSchema = z
  .object({
    chart_id: z.int().openapi({ description: 'The ID of the chart to warm up cache for' }),
    dashboard_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the dashboard to get filters for when warming cache' }),
    extra_filters: z
      .string()
      .exactOptional()
      .openapi({ description: 'Extra filters to apply when warming up cache' }),
  })
  .openapi({ required: ['chart_id'] })
  .openapi('ChartCacheWarmUpRequestSchema')

const ChartCacheWarmUpResponseSingleSchema = z
  .object({
    chart_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the chart the status belongs to' }),
    viz_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error that occurred when warming cache for chart' }),
    viz_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status of the underlying query for the viz' }),
  })
  .openapi({ required: [] })
  .openapi('ChartCacheWarmUpResponseSingle')

const ChartCacheWarmUpResponseSchemaSchema = z
  .object({
    result: z
      .array(ChartCacheWarmUpResponseSingleSchema)
      .exactOptional()
      .openapi({ description: "A list of each chart's warmup status and errors if any" }),
  })
  .openapi({ required: [] })
  .openapi('ChartCacheWarmUpResponseSchema')

const ChartDataColumnSchema = z
  .object({
    column_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the target column', example: 'mycol' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of target column', example: 'BIGINT' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataColumn')

const ChartDataAdhocMetricSchemaSchema = z
  .object({
    aggregate: z
      .enum([
        'AVG',
        'COUNT',
        'COUNT_DISTINCT',
        'MAX',
        'MIN',
        'SUM',
        'MEDIAN',
        'STDDEV_SAMP',
        'VAR_SAMP',
      ])
      .exactOptional()
      .openapi({ description: 'Aggregation operator.Only required for simple expression types.' }),
    column: ChartDataColumnSchema.exactOptional(),
    expressionType: z
      .enum(['SIMPLE', 'SQL'])
      .openapi({ description: 'Simple or SQL metric', example: 'SQL' }),
    hasCustomLabel: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When false, the label will be automatically generated based on the aggregate expression. When true, a custom label has to be specified.',
        example: true,
      }),
    isExtra: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the filter has been added by a filter component as opposed to being a part of the original query.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for the metric. Is automatically generated unlesshasCustomLabel is true, in which case label must be defined.',
        example: 'Weighted observations',
      }),
    optionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier. Can be any string value, as long as all metrics have a unique identifier. If undefined, a random namewill be generated.',
        example: 'metric_aec60732-fac0-4b17-b736-93f1a5c93e30',
      }),
    sqlExpression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The metric as defined by a SQL aggregate expression. Only required for SQL expression type.',
        example: 'SUM(weight * observations) / SUM(weight)',
      }),
    timeGrain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional time grain for temporal filters', example: 'PT1M' }),
  })
  .openapi({ required: ['expressionType'] })
  .openapi('ChartDataAdhocMetricSchema')

const ChartDataAggregateOptionsSchemaSchema = z
  .object({
    aggregates: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.\n\nIn the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.',
        example: {
          first_quantile: { column: 'my_col', operator: 'percentile', options: { q: 0.25 } },
        },
      }),
    groupby: z.array(z.string().openapi({ description: 'Columns by which to group by' })),
  })
  .openapi({ required: ['groupby'] })
  .openapi('ChartDataAggregateOptionsSchema')

const ChartDataAsyncResponseSchemaSchema = z
  .object({
    cursor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Status-changes recovery cursor captured before any task was created. The client polls `/api/v1/task/status_changes` from it and is guaranteed to observe each task's completion.",
      }),
    tab_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The per-client (e.g. browser-tab) id echoed back when the caller advertised one, so a later cancel detaches exactly that client. Absent when the caller supplied none.',
      }),
    task_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "UUIDs of the scheduled GTF tasks (one per QueryObject that missed the cache), in query order. The client polls `/api/v1/task/status_changes`, aggregates these tasks' statuses, and re-issues this request once they all succeed.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataAsyncResponseSchema')

const ChartDataBoxplotOptionsSchemaSchema = z
  .object({
    groupby: z
      .array(z.string().openapi({ description: 'Columns by which to group the query.' }))
      .nullable()
      .exactOptional(),
    metrics: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics. When metrics is undefined or null, the query is executed without a groupby. However, when metrics is an array (length >= 0), a groupby clause is added to the query.',
      }),
    percentiles: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Upper and lower percentiles for percentile whisker type.',
        example: [1, 99],
      }),
    whisker_type: z
      .enum(['tukey', 'min/max', 'percentile'])
      .openapi({ description: 'Whisker type. Any numpy function will work.', example: 'tukey' }),
  })
  .openapi({ required: ['whisker_type'] })
  .openapi('ChartDataBoxplotOptionsSchema')

const ChartDataContributionOptionsSchemaSchema = z
  .object({
    orientation: z
      .enum(['row', 'column'])
      .openapi({
        description: 'Should cell values be calculated across the row or column.',
        example: 'row',
      }),
  })
  .openapi({ required: ['orientation'] })
  .openapi('ChartDataContributionOptionsSchema')

const ChartDataDatasourceSchema = z
  .object({
    id: z.any().openapi({ description: 'Datasource id or uuid' }),
    type: z
      .enum(['table', 'dataset', 'query', 'saved_query', 'view', 'semantic_view'])
      .exactOptional()
      .openapi({ description: 'Datasource type' }),
  })
  .openapi({ required: ['id'] })
  .openapi('ChartDataDatasource')

const ChartDataExtrasSchema = z
  .object({
    column_order: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Ordered list of column names for result ordering. Used to preserve user's column reordering (including mixed dimension columns and metrics)",
      }),
    having: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HAVING clause to be added to aggregate queries using AND operator.',
      }),
    instant_time_comparison_range: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is only set using the new time comparison controls that is made available in some plugins behind the experimental feature flag.',
      }),
    relative_end: z
      .enum(['today', 'now'])
      .exactOptional()
      .openapi({
        description:
          'End time for relative time deltas. Default: `config["DEFAULT_RELATIVE_START_TIME"]`',
      }),
    relative_start: z
      .enum(['today', 'now'])
      .exactOptional()
      .openapi({
        description:
          'Start time for relative time deltas. Default: `config["DEFAULT_RELATIVE_START_TIME"]`',
      }),
    semantic_selection_version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identity encoding used for semantic member selections.' }),
    time_grain_sqla: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'To what level of granularity should the temporal column be aggregated. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.',
        example: 'P1D',
      }),
    transpile_to_dialect: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true, WHERE/HAVING clauses will be transpiled to the target database dialect using SQLGlot.',
      }),
    where: z
      .string()
      .exactOptional()
      .openapi({ description: 'WHERE clause to be added to queries using AND operator.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataExtras')

const ChartDataFilterSchema = z
  .object({
    col: z
      .any()
      .openapi({
        description:
          'The column to filter by. Can be either a string (physical or saved expression) or an object (adhoc column)',
        example: 'country',
      }),
    grain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional time grain for temporal filters', example: 'PT1M' }),
    isExtra: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the filter has been added by a filter component as opposed to being a part of the original query.',
      }),
    op: z
      .enum([
        '==',
        '!=',
        '>',
        '<',
        '>=',
        '<=',
        'LIKE',
        'NOT LIKE',
        'ILIKE',
        'NOT ILIKE',
        'IS NULL',
        'IS NOT NULL',
        'IN',
        'NOT IN',
        'IS TRUE',
        'IS FALSE',
        'TEMPORAL_RANGE',
        'CONTAINS_ANY',
        'CONTAINS_ALL',
        'IS_EMPTY',
        'IS_NOT_EMPTY',
        'LENGTH_EQUALS',
        'LENGTH_GREATER_THAN',
        'LENGTH_LESS_THAN',
        'LENGTH_GREATER_THAN_OR_EQUALS',
        'LENGTH_LESS_THAN_OR_EQUALS',
      ])
      .openapi({ description: 'The comparison operator.', example: 'IN' }),
    val: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The value or values to compare against. Can be a string, integer, decimal, None or list, depending on the operator.',
        example: ['China', 'France', 'Japan'],
      }),
  })
  .openapi({ required: ['col', 'op'] })
  .openapi('ChartDataFilter')

const ChartDataGeodeticParseOptionsSchemaSchema = z
  .object({
    altitude: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of target column for decoded altitude. If omitted, altitude information in geodetic string is ignored.',
      }),
    geodetic: z
      .string()
      .openapi({ description: 'Name of source column containing geodetic point strings' }),
    latitude: z.string().openapi({ description: 'Name of target column for decoded latitude' }),
    longitude: z.string().openapi({ description: 'Name of target column for decoded longitude' }),
  })
  .openapi({ required: ['geodetic', 'latitude', 'longitude'] })
  .openapi('ChartDataGeodeticParseOptionsSchema')

const ChartDataGeohashDecodeOptionsSchemaSchema = z
  .object({
    geohash: z.string().openapi({ description: 'Name of source column containing geohash string' }),
    latitude: z.string().openapi({ description: 'Name of target column for decoded latitude' }),
    longitude: z.string().openapi({ description: 'Name of target column for decoded longitude' }),
  })
  .openapi({ required: ['geohash', 'latitude', 'longitude'] })
  .openapi('ChartDataGeohashDecodeOptionsSchema')

const ChartDataGeohashEncodeOptionsSchemaSchema = z
  .object({
    geohash: z
      .string()
      .openapi({ description: 'Name of target column for encoded geohash string' }),
    latitude: z.string().openapi({ description: 'Name of source latitude column' }),
    longitude: z.string().openapi({ description: 'Name of source longitude column' }),
  })
  .openapi({ required: ['geohash', 'latitude', 'longitude'] })
  .openapi('ChartDataGeohashEncodeOptionsSchema')

const ChartDataPivotOptionsSchemaSchema = z
  .object({
    aggregates: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.\n\nIn the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.',
        example: {
          first_quantile: { column: 'my_col', operator: 'percentile', options: { q: 0.25 } },
        },
      }),
    column_fill_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value to replace missing pivot columns names with.' }),
    columns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Columns to group by on the table columns' }),
    drop_missing_columns: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do not include columns whose entries are all missing (default: `true`).',
      }),
    index: z
      .array(z.string())
      .min(1)
      .openapi({ description: 'Columns to group by on the table index (=rows)' }),
    marginal_distribution_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of marginal distribution row/column. (default: `All`)' }),
    marginal_distributions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add totals for row/column. (default: `false`)' }),
    metric_fill_value: z
      .number()
      .exactOptional()
      .openapi({ description: 'Value to replace missing values with in aggregate calculations.' }),
  })
  .openapi({ required: ['index'] })
  .openapi('ChartDataPivotOptionsSchema')

const ChartDataPostProcessingOperationSchema = z
  .object({
    operation: z
      .string()
      .openapi({ description: 'Post processing operation type', example: 'aggregate' }),
    options: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Options specifying how to perform the operation. Please refer to the respective post processing operation option schemas. For example, `ChartDataPostProcessingOperationOptions` specifies the required options for the pivot operation.',
        example: {
          aggregates: {
            age_mean: { column: 'age', operator: 'mean' },
            age_q1: { column: 'age', operator: 'percentile', options: { q: 0.25 } },
          },
          groupby: ['country', 'gender'],
        },
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('ChartDataPostProcessingOperation')

const ChartDataProphetOptionsSchemaSchema = z
  .object({
    confidence_interval: z
      .number()
      .min(0)
      .max(1)
      .openapi({ description: 'Width of predicted confidence interval', example: 0.8 }),
    daily_seasonality: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Should daily seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.',
        example: false,
      }),
    index: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the column holding the x-axis data. Defaults to `__timestamp`.',
        example: '__timestamp',
      }),
    periods: z
      .int()
      .openapi({
        description: 'Time periods (in units of `time_grain`) to predict into the future',
        example: 7,
      }),
    time_grain: z
      .enum([
        'PT1S',
        'PT5S',
        'PT30S',
        'PT1M',
        'PT5M',
        'PT10M',
        'PT15M',
        'PT30M',
        'PT0.5H',
        'PT1H',
        'PT6H',
        'P1D',
        'P1W',
        'P1M',
        'P3M',
        'P0.25Y',
        'P1Y',
        '1969-12-28T00:00:00Z/P1W',
        '1969-12-29T00:00:00Z/P1W',
        'P1W/1970-01-03T00:00:00Z',
        'P1W/1970-01-04T00:00:00Z',
      ])
      .openapi({
        description:
          'Time grain used to specify time period increments in prediction. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.',
        example: 'P1D',
      }),
    weekly_seasonality: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.',
        example: false,
      }),
    yearly_seasonality: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.',
        example: false,
      }),
  })
  .openapi({ required: ['confidence_interval', 'periods', 'time_grain'] })
  .openapi('ChartDataProphetOptionsSchema')

const ChartDataQueryObjectSchema = z
  .object({
    annotation_layers: z
      .array(AnnotationLayerSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Annotation layers to apply to chart' }),
    applied_time_extras: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A mapping of temporal extras that have been applied to the query',
        example: { __time_range: '1 year ago : now' },
      }),
    apply_fetch_values_predicate: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Add fetch values predicate (where clause) to query if defined in datasource',
      }),
    columns: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Columns which to select in the query.' }),
    datasource: ChartDataDatasourceSchema.nullable().exactOptional(),
    extras: ChartDataExtrasSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Extra parameters to add to the query.' }),
    filters: z.array(ChartDataFilterSchema).nullable().exactOptional(),
    force_nonce: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Per-query forced-refresh idempotency token: the async task's UUID (as returned in the 202 `task_ids`, in query order). Sent on the synchronous read-back of a forced refresh so it reads the result the task warmed instead of recomputing. Because the token is the task's identity, concurrent refreshes joining the same shared task read back under the same token. Ignored when `force` is false.",
      }),
    granularity: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of temporal column used for time filtering. ' }),
    granularity_sqla: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Name of temporal column used for time filtering for SQL datasources. This field is deprecated, use `granularity` instead.',
      }),
    group_others_when_limit_reached: z
      .boolean()
      .nullable()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "When true, groups remaining series into an 'Others' category when series limit is reached. Prevents incomplete data.",
      }),
    groupby: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Columns by which to group the query. This field is deprecated, use `columns` instead.',
      }),
    grouping_sets: z
      .array(z.array(z.string()))
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Rollup levels for non-additive totals: each entry is the list of groupby columns to group at that level (e.g. the empty list is the grand total). When set and the engine supports it, the levels are computed in a single GROUPING SETS query.',
      }),
    having: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'HAVING clause to be added to aggregate queries using AND operator. This field is deprecated and should be passed to `extras`.',
      }),
    is_rowcount: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Should the rowcount of the actual query be returned' }),
    is_timeseries: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is the `query_object` a timeseries.' }),
    metrics: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics.',
      }),
    order_desc: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reverse order. Default: `false`' }),
    orderby: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Expects a list of lists where the first element is the column name which to sort by, and the second element is a boolean.',
        example: [
          ['my_col_1', false],
          ['my_col_2', true],
        ],
      }),
    post_processing: z
      .array(ChartDataPostProcessingOperationSchema.nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Post processing operations to be applied to the result set. Operations are applied to the result set in sequential order.',
      }),
    result_type: z
      .union([
        z.literal('columns'),
        z.literal('full'),
        z.literal('query'),
        z.literal('results'),
        z.literal('samples'),
        z.literal('timegrains'),
        z.literal('post_processed'),
        z.literal('drill_detail'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional(),
    row_limit: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum row count (0=disabled). Default: `config["ROW_LIMIT"]`' }),
    row_offset: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of rows to skip. Default: `0`' }),
    series_columns: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Columns to use when limiting series count. All columns must be present in the `columns` property. Requires `series_limit` and `series_limit_metric` to be set.',
      }),
    series_limit: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of series. Requires `series` and `series_limit_metric` to be set.',
      }),
    series_limit_metric: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Metric used to limit timeseries queries by. Requires `series` and `series_limit` to be set.',
      }),
    time_compare_full_range: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "When using a time comparison (time_offsets), plot each shifted series across its full time range instead of truncating it to the main series' range. Useful for comparing a partial current period against complete prior periods.",
      }),
    time_offsets: z.array(z.string()).nullable().exactOptional(),
    time_range: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A time rage, either expressed as a colon separated string `since : until` or human readable freeform. Valid formats for `since` and `until` are: \n- ISO 8601\n- X days/years/hours/day/year/weeks\n- X days/years/hours/day/year/weeks ago\n- X days/years/hours/day/year/weeks from now\n\nAdditionally, the following freeform can be used:\n\n- Last day\n- Last week\n- Last month\n- Last quarter\n- Last year\n- No filter\n- Last X seconds/minutes/hours/days/weeks/months/years\n- Next X seconds/minutes/hours/days/weeks/months/years\n',
        example: 'Last week',
      }),
    time_shift: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A human-readable date/time string. Please refer to [parsdatetime](https://github.com/bear/parsedatetime) documentation for details on valid values.',
      }),
    timeseries_limit: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum row count for timeseries queries. This field is deprecated, use `series_limit` instead.Default: `0`',
      }),
    timeseries_limit_metric: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Metric used to limit timeseries queries by. This field is deprecated, use `series_limit_metric` instead.',
      }),
    url_params: z
      .record(z.string(), z.string().openapi({ description: 'The value of the query parameter' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional query parameters passed to a dashboard or Explore  view' }),
    where: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'WHERE clause to be added to queries using AND operator.This field is deprecated and should be passed to `extras`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataQueryObject')

const ChartDataQueryContextSchemaSchema = z
  .object({
    async_mode: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Opt this request into asynchronous execution on the Global Task Framework (requires the GLOBAL_ASYNC_QUERIES feature flag). When true the response is HTTP 202 with the query task ids to poll; when absent or false the query runs synchronously (HTTP 200). Default: `false`.',
      }),
    custom_cache_timeout: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Override the default cache timeout' }),
    datasource: ChartDataDatasourceSchema.exactOptional(),
    force: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Should the queries be forced to load from the source. Default: `false`',
      }),
    force_nonce: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Forced-refresh idempotency token for a single-query request: the async task's UUID (as returned in the 202 `task_ids`). Sent on the synchronous read-back of a forced refresh so it reads the result the task warmed instead of recomputing; concurrent refreshes joining the same shared task read back under the same token. Multi-query requests set the per-query `force_nonce` on each query instead. Ignored when `force` is false.",
      }),
    form_data: z.any().nullable().exactOptional(),
    queries: z.array(ChartDataQueryObjectSchema).exactOptional(),
    result_format: z.enum(['csv', 'json', 'xlsx', 'arrow']).exactOptional(),
    result_type: z
      .enum([
        'columns',
        'full',
        'query',
        'results',
        'samples',
        'timegrains',
        'post_processed',
        'drill_detail',
      ])
      .exactOptional(),
    tab_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Opaque per-browser-tab id (see the frontend `getTabId`). On an async request it ref-counts this tab as a consumer of the shared chart-data task so a cancel/navigate-away from one tab doesn't abort a task another tab still awaits. Read by the API as a request-level routing hint; not part of the query context.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataQueryContextSchema')

const ChartDataQueryTimingSchema = z
  .object({
    cache_resolution_ms: z.number().nullable(),
    data_acquisition_ms: z.number().nullable(),
    payload_assembly_ms: z.number().nullable(),
    query_planning_ms: z.number().nullable(),
    total_ms: z.number(),
  })
  .openapi({
    required: [
      'cache_resolution_ms',
      'data_acquisition_ms',
      'payload_assembly_ms',
      'query_planning_ms',
      'total_ms',
    ],
  })
  .openapi('ChartDataQueryTiming')

const ChartDataTimingSchema = z
  .object({ query: ChartDataQueryTimingSchema, version: z.literal(1) })
  .openapi({ required: ['query', 'version'] })
  .openapi('ChartDataTiming')

const ChartDataResponseResultSchema = z
  .object({
    annotation_data: z
      .array(z.record(z.string(), z.string()))
      .nullable()
      .exactOptional()
      .openapi({ description: 'All requested annotation data' }),
    applied_filters: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'A list with applied filters' }),
    cache_key: z.string().nullable().openapi({ description: 'Unique cache key for query object' }),
    cache_timeout: z
      .int()
      .nullable()
      .openapi({
        description:
          'Cache timeout in following order: custom timeout, datasource timeout, cache default timeout, config default cache timeout.',
      }),
    cached_dttm: z.string().nullable().openapi({ description: 'Cache timestamp' }),
    colnames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of column names' }),
    coltypes: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'A list of generic data types of each column' }),
    data: z.array(z.object({})).exactOptional().openapi({ description: 'A list with results' }),
    detected_currency: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Detected ISO 4217 currency code when AUTO mode is used. Returns the currency code if all filtered data contains a single currency or null if multiple currencies are present.',
      }),
    error: z.string().nullable().exactOptional().openapi({ description: 'Error' }),
    from_dttm: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Start timestamp of time range' }),
    is_cached: z.boolean().openapi({ description: 'Is the result cached' }),
    queried_dttm: z
      .string()
      .nullable()
      .openapi({ description: 'UTC timestamp when the query was executed (ISO 8601 format)' }),
    query: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The executed query statement. May be absent when validation errors occur.',
      }),
    rejected_filters: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'A list with rejected filters' }),
    rowcount: z.int().exactOptional().openapi({ description: 'Amount of rows in result set' }),
    semantic_cache_status: z
      .union([z.literal('HIT'), z.literal('MISS'), z.literal('MIXED'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Semantic containment cache provenance of this query: HIT when every semantic query behind it was served from containment, MISS when none was, MIXED when only some were (for example a time-comparison offset).',
      }),
    stacktrace: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Stacktrace if there was an error' }),
    status: z
      .enum(['stopped', 'failed', 'pending', 'running', 'scheduled', 'success', 'timed_out'])
      .exactOptional()
      .openapi({ description: 'Status of the query' }),
    timing: ChartDataTimingSchema.exactOptional().openapi({
      description:
        'Optional versioned query lifecycle timing breakdown in milliseconds. Present only when CHART_DATA_INCLUDE_TIMING is enabled; disabled by default.',
    }),
    to_dttm: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'End timestamp of time range' }),
    warning: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Warning message when results were truncated' }),
  })
  .openapi({ required: ['cache_key', 'cache_timeout', 'cached_dttm', 'is_cached', 'queried_dttm'] })
  .openapi('ChartDataResponseResult')

const DashboardFilterInfoSchema = z
  .object({
    column: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Target column name for the filter' }),
    id: z.string().openapi({ description: 'The native filter ID' }),
    name: z.string().openapi({ description: 'The native filter name' }),
    status: z
      .string()
      .openapi({
        description:
          "Filter status: 'applied' (default value was included in the query), 'not_applied' (filter had no default value and was omitted, matching dashboard initial-load behavior), or 'not_applied_uses_default_to_first_item_prequery' (filter uses defaultToFirstItem which requires a pre-query to resolve and cannot be applied server-side)",
      }),
  })
  .openapi({ required: ['id', 'name', 'status'] })
  .openapi('DashboardFilterInfo')

const DashboardFiltersResponseSchemaSchema = z
  .object({
    filters: z
      .array(DashboardFilterInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Metadata about each in-scope dashboard native filter and whether its default value was applied to the query',
      }),
  })
  .openapi({ required: [] })
  .openapi('DashboardFiltersResponseSchema')

const ChartDataResponseSchemaSchema = z
  .object({
    dashboard_filters: DashboardFiltersResponseSchemaSchema.exactOptional().openapi({
      description:
        'Metadata about dashboard native filters applied to the query. Only present when filters_dashboard_id is provided.',
    }),
    result: z
      .array(ChartDataResponseResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of results for each corresponding query in the request.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataResponseSchema')

const ChartDataRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ChartDataRestApiGet')

const ChartDataRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ChartDataRestApiGetListUser')

const ChartDataRestApiGetListUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ChartDataRestApiGetListUser1')

const ChartDataRestApiGetListDashboardSchema = z
  .object({
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartDataRestApiGetListDashboard')

const ChartDataRestApiGetListSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ChartDataRestApiGetListSubject')

const ChartDataRestApiGetListUser2Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ChartDataRestApiGetListUser2')

const ChartDataRestApiGetListSqlaTableSchema = z
  .object({
    default_endpoint: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
  })
  .openapi({ required: ['table_name'] })
  .openapi('ChartDataRestApiGetListSqlaTable')

const ChartDataRestApiGetListTagSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartDataRestApiGetListTag')

const ChartDataRestApiGetListSubject1Schema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ChartDataRestApiGetListSubject1')

const ChartDataRestApiGetListSchema = z
  .object({
    cache_timeout: z.int().nullable().exactOptional(),
    certification_details: z.string().nullable().exactOptional(),
    certified_by: z.string().nullable().exactOptional(),
    changed_by: ChartDataRestApiGetListUserSchema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_dttm: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: ChartDataRestApiGetListUser1Schema.exactOptional(),
    created_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    created_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    dashboards: z.array(ChartDataRestApiGetListDashboardSchema).exactOptional(),
    datasource_id: z.int().nullable().exactOptional(),
    datasource_name_text: z.any().exactOptional().openapi({ readOnly: true }),
    datasource_type: z.string().max(200).nullable().exactOptional(),
    datasource_url: z.any().exactOptional().openapi({ readOnly: true }),
    description: z.string().nullable().exactOptional(),
    description_markeddown: z.any().exactOptional().openapi({ readOnly: true }),
    edit_url: z.any().exactOptional().openapi({ readOnly: true }),
    editors: z.array(ChartDataRestApiGetListSubjectSchema).exactOptional(),
    form_data: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional(),
    is_managed_externally: z.boolean().exactOptional(),
    last_saved_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_saved_by: ChartDataRestApiGetListUser2Schema.exactOptional(),
    params: z.string().nullable().exactOptional(),
    slice_name: z.string().max(250).nullable().exactOptional(),
    slice_url: z.any().exactOptional().openapi({ readOnly: true }),
    table: ChartDataRestApiGetListSqlaTableSchema.exactOptional(),
    tags: z.array(ChartDataRestApiGetListTagSchema).exactOptional(),
    thumbnail_url: z.any().exactOptional().openapi({ readOnly: true }),
    url: z.any().exactOptional().openapi({ readOnly: true }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z.array(ChartDataRestApiGetListSubject1Schema).exactOptional(),
    viz_type: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartDataRestApiGetList')

const ChartDataRestApiPostSchema = z
  .object({
    cache_timeout: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    certification_details: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this chart' }),
    dashboards: z
      .array(z.int().openapi({ description: 'A list of dashboards to include this new chart to.' }))
      .exactOptional(),
    datasource_id: z
      .int()
      .openapi({
        description:
          'The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasource_id` and `datasource_type`.',
      }),
    datasource_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The datasource name.' }),
    datasource_type: z
      .enum(['table', 'dataset', 'query', 'saved_query', 'view', 'semantic_view'])
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can alter the chart.',
          }),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.',
      }),
    query_context: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.',
      }),
    query_context_generation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context generation represents whether the query_contextis user generated or not so that it does not update user modifiedstate.',
      }),
    slice_name: z.string().min(1).max(250).openapi({ description: 'The name of the chart.' }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can view the chart.',
          }),
      )
      .exactOptional(),
    viz_type: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description: 'The type of chart visualization used.',
        example: ['bar', 'area', 'table'],
      }),
  })
  .openapi({ required: ['datasource_id', 'datasource_type', 'slice_name'] })
  .openapi('ChartDataRestApiPost')

const ChartDataRestApiPutSchema = z
  .object({
    cache_timeout: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    certification_details: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this chart' }),
    dashboards: z
      .array(z.int().openapi({ description: 'A list of dashboards to include this new chart to.' }))
      .exactOptional(),
    datasource_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasource_id` and `datasource_type`.',
      }),
    datasource_type: z
      .union([
        z.literal('table'),
        z.literal('dataset'),
        z.literal('query'),
        z.literal('saved_query'),
        z.literal('view'),
        z.literal('semantic_view'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can alter the chart.',
          }),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    normalization_changes: z
      .array(
        z
          .object({
            control: z.string().max(256),
            from_present: z.boolean(),
            from_value: z.any().exactOptional(),
            to_present: z.boolean(),
            to_value: z.any().exactOptional(),
          })
          .openapi({ required: ['control', 'from_present', 'to_present'] }),
      )
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional advisory Explore hydration transitions used only to remove exact automatic normalization changes from human-readable version history. Invalid metadata is ignored.',
        writeOnly: true,
      }),
    params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.',
      }),
    query_context: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.',
      }),
    query_context_generation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context generation represents whether the query_contextis user generated or not so that it does not update user modifiedstate.',
      }),
    slice_name: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the chart.' }),
    tags: z
      .array(z.int().openapi({ description: 'Tags to be associated with the chart' }))
      .exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can view the chart.',
          }),
      )
      .exactOptional(),
    viz_type: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of chart visualization used.',
        example: ['bar', 'area', 'table'],
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataRestApiPut')

const ChartDataRollingOptionsSchemaSchema = z
  .object({
    center: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should the label be at the center of the window.Default: `false`',
        example: false,
      }),
    columns: z
      .object({})
      .openapi({
        description:
          "columns on which to perform rolling, mapping source column to target column. For instance, `{'y': 'y'}` will replace the column `y` with the rolling value in `y`, while `{'y': 'y2'}` will add a column `y2` based on rolling values calculated from `y`, leaving the original column `y` unchanged.",
        example: { sales: 'weekly_rolling_sales' },
      }),
    min_periods: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The minimum amount of periods required for a row to be included in the result set.',
        example: 7,
      }),
    rolling_type: z
      .enum([
        'average',
        'argmin',
        'argmax',
        'cumsum',
        'cumprod',
        'max',
        'mean',
        'median',
        'nansum',
        'nanmin',
        'nanmax',
        'nanmean',
        'nanmedian',
        'nanpercentile',
        'min',
        'percentile',
        'prod',
        'product',
        'std',
        'sum',
        'var',
      ])
      .openapi({
        description: 'Type of rolling window. Any numpy function will work.',
        example: 'percentile',
      }),
    rolling_type_options: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Optional options to pass to rolling method. Needed for e.g. quantile operation.',
        example: {},
      }),
    win_type: z
      .enum([
        'boxcar',
        'triang',
        'blackman',
        'hamming',
        'bartlett',
        'parzen',
        'bohman',
        'blackmanharris',
        'nuttall',
        'barthann',
        'kaiser',
        'gaussian',
        'general_gaussian',
        'slepian',
        'exponential',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of window function. See [SciPy window functions](https://docs.scipy.org/doc/scipy/reference /signal.windows.html#module-scipy.signal.windows) for more details. Some window functions require passing additional parameters to `rolling_type_options`. For instance, to use `gaussian`, the parameter `std` needs to be provided.',
      }),
    window: z
      .int()
      .min(1)
      .max(10000)
      .openapi({ description: 'Size of the rolling window in days.', example: 7 }),
  })
  .openapi({ required: ['columns', 'rolling_type', 'window'] })
  .openapi('ChartDataRollingOptionsSchema')

const ChartDataSelectOptionsSchemaSchema = z
  .object({
    columns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Columns which to select from the input data, in the desired order. If columns are renamed, the original column name should be referenced here.',
        example: ['country', 'gender', 'age'],
      }),
    exclude: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Columns to exclude from selection.', example: ['my_temp_column'] }),
    rename: z
      .array(z.object({}))
      .exactOptional()
      .openapi({
        description:
          "columns which to rename, mapping source column to target column. For instance, `{'y': 'y2'}` will rename the column `y` to `y2`.",
        example: [{ age: 'average_age' }],
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataSelectOptionsSchema')

const ChartDataSortOptionsSchemaSchema = z
  .object({
    ascending: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Sort ascending (the default) or descending. A list of booleans may be given to set the direction per entry in `by`.',
        example: true,
      }),
    by: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Name, or list of names, of the columns to sort by. Ignored when `is_sort_index` is set.',
        example: 'country',
      }),
    is_sort_index: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to sort by the index rather than by column values.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataSortOptionsSchema')

const ChartEntityResponseSchemaSchema = z
  .object({
    cache_timeout: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    certification_details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this chart' }),
    changed_on: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The ISO date that the chart was last changed.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    description_markeddown: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sanitized HTML version of the chart description.' }),
    form_data: z
      .object({})
      .exactOptional()
      .openapi({
        description: "Form data from the Explore controls used to form the chart's data query.",
      }),
    id: z.int().exactOptional().openapi({ description: 'The id of the chart.' }),
    slice_name: z.string().exactOptional().openapi({ description: 'The name of the chart.' }),
    slice_url: z.string().exactOptional().openapi({ description: 'The URL of the chart.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartEntityResponseSchema')

const ChartFavStarResponseResultSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'The Chart id' }),
    value: z.boolean().exactOptional().openapi({ description: 'The FaveStar value' }),
  })
  .openapi({ required: [] })
  .openapi('ChartFavStarResponseResult')

const ChartGetDatasourceObjectDataResponseSchema = z
  .object({
    datasource_id: z.int().exactOptional().openapi({ description: 'The datasource identifier' }),
    datasource_type: z.int().exactOptional().openapi({ description: 'The datasource type' }),
  })
  .openapi({ required: [] })
  .openapi('ChartGetDatasourceObjectDataResponse')

const ChartGetDatasourceObjectResponseSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'The name of the datasource' }),
    value: ChartGetDatasourceObjectDataResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartGetDatasourceObjectResponse')

const ChartGetDatasourceResponseSchemaSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'The total number of datasources' }),
    result: ChartGetDatasourceObjectResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartGetDatasourceResponseSchema')

const DashboardSchema = z
  .object({
    dashboard_title: z.string().exactOptional(),
    id: z.int().exactOptional(),
    json_metadata: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dashboard')

const SubjectResponseSchema = z
  .object({
    id: z.int().exactOptional(),
    img: z.string().exactOptional(),
    label: z.string().exactOptional(),
    secondary_label: z.string().exactOptional(),
    type: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubjectResponse')

const TagSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const ChartGetResponseSchemaSchema = z
  .object({
    cache_timeout: z.string().exactOptional(),
    certification_details: z.string().exactOptional(),
    certified_by: z.string().exactOptional(),
    changed_on_delta_humanized: z.string().exactOptional(),
    dashboards: z.array(DashboardSchema).exactOptional(),
    datasource_id: z.int().exactOptional(),
    datasource_name_text: z.any().exactOptional().openapi({ readOnly: true }),
    datasource_type: z.string().exactOptional(),
    datasource_url: z.any().exactOptional().openapi({ readOnly: true }),
    datasource_uuid: z.uuid().exactOptional(),
    description: z.string().exactOptional(),
    editors: z.array(SubjectResponseSchema).exactOptional(),
    id: z.int().exactOptional().openapi({ description: 'The id of the chart.' }),
    is_managed_externally: z.boolean().exactOptional(),
    params: z.string().exactOptional(),
    query_context: z.string().exactOptional(),
    slice_name: z.string().exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
    thumbnail_url: z.string().exactOptional(),
    url: z.string().exactOptional(),
    uuid: z.uuid().exactOptional(),
    viewers: z.array(SubjectResponseSchema).exactOptional(),
    viz_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartGetResponseSchema')

const ChartRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ChartRestApiGet')

const ChartRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ChartRestApiGetListUser')

const ChartRestApiGetListUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ChartRestApiGetListUser1')

const ChartRestApiGetListDashboardSchema = z
  .object({
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiGetListDashboard')

const ChartRestApiGetListSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ChartRestApiGetListSubject')

const ChartRestApiGetListUser2Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ChartRestApiGetListUser2')

const ChartRestApiGetListSqlaTableSchema = z
  .object({
    default_endpoint: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
  })
  .openapi({ required: ['table_name'] })
  .openapi('ChartRestApiGetListSqlaTable')

const ChartRestApiGetListTagSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiGetListTag')

const ChartRestApiGetListSubject1Schema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ChartRestApiGetListSubject1')

const ChartRestApiGetListSchema = z
  .object({
    cache_timeout: z.int().nullable().exactOptional(),
    certification_details: z.string().nullable().exactOptional(),
    certified_by: z.string().nullable().exactOptional(),
    changed_by: ChartRestApiGetListUserSchema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_dttm: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: ChartRestApiGetListUser1Schema.exactOptional(),
    created_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    created_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    dashboards: z.array(ChartRestApiGetListDashboardSchema).exactOptional(),
    datasource_id: z.int().nullable().exactOptional(),
    datasource_name_text: z.any().exactOptional().openapi({ readOnly: true }),
    datasource_type: z.string().max(200).nullable().exactOptional(),
    datasource_url: z.any().exactOptional().openapi({ readOnly: true }),
    description: z.string().nullable().exactOptional(),
    description_markeddown: z.any().exactOptional().openapi({ readOnly: true }),
    edit_url: z.any().exactOptional().openapi({ readOnly: true }),
    editors: z.array(ChartRestApiGetListSubjectSchema).exactOptional(),
    form_data: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional(),
    is_managed_externally: z.boolean().exactOptional(),
    last_saved_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_saved_by: ChartRestApiGetListUser2Schema.exactOptional(),
    params: z.string().nullable().exactOptional(),
    slice_name: z.string().max(250).nullable().exactOptional(),
    slice_url: z.any().exactOptional().openapi({ readOnly: true }),
    table: ChartRestApiGetListSqlaTableSchema.exactOptional(),
    tags: z.array(ChartRestApiGetListTagSchema).exactOptional(),
    thumbnail_url: z.any().exactOptional().openapi({ readOnly: true }),
    url: z.any().exactOptional().openapi({ readOnly: true }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z.array(ChartRestApiGetListSubject1Schema).exactOptional(),
    viz_type: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiGetList')

const ChartRestApiPostSchema = z
  .object({
    cache_timeout: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    certification_details: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this chart' }),
    dashboards: z
      .array(z.int().openapi({ description: 'A list of dashboards to include this new chart to.' }))
      .exactOptional(),
    datasource_id: z
      .int()
      .openapi({
        description:
          'The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasource_id` and `datasource_type`.',
      }),
    datasource_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The datasource name.' }),
    datasource_type: z
      .enum(['table', 'dataset', 'query', 'saved_query', 'view', 'semantic_view'])
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can alter the chart.',
          }),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.',
      }),
    query_context: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.',
      }),
    query_context_generation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context generation represents whether the query_contextis user generated or not so that it does not update user modifiedstate.',
      }),
    slice_name: z.string().min(1).max(250).openapi({ description: 'The name of the chart.' }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can view the chart.',
          }),
      )
      .exactOptional(),
    viz_type: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description: 'The type of chart visualization used.',
        example: ['bar', 'area', 'table'],
      }),
  })
  .openapi({ required: ['datasource_id', 'datasource_type', 'slice_name'] })
  .openapi('ChartRestApiPost')

const ChartRestApiPutSchema = z
  .object({
    cache_timeout: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    certification_details: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this chart' }),
    dashboards: z
      .array(z.int().openapi({ description: 'A list of dashboards to include this new chart to.' }))
      .exactOptional(),
    datasource_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasource_id` and `datasource_type`.',
      }),
    datasource_type: z
      .union([
        z.literal('table'),
        z.literal('dataset'),
        z.literal('query'),
        z.literal('saved_query'),
        z.literal('view'),
        z.literal('semantic_view'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can alter the chart.',
          }),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    normalization_changes: z
      .array(
        z
          .object({
            control: z.string().max(256),
            from_present: z.boolean(),
            from_value: z.any().exactOptional(),
            to_present: z.boolean(),
            to_value: z.any().exactOptional(),
          })
          .openapi({ required: ['control', 'from_present', 'to_present'] }),
      )
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional advisory Explore hydration transitions used only to remove exact automatic normalization changes from human-readable version history. Invalid metadata is ignored.',
        writeOnly: true,
      }),
    params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.',
      }),
    query_context: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.',
      }),
    query_context_generation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context generation represents whether the query_contextis user generated or not so that it does not update user modifiedstate.',
      }),
    slice_name: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the chart.' }),
    tags: z
      .array(z.int().openapi({ description: 'Tags to be associated with the chart' }))
      .exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can view the chart.',
          }),
      )
      .exactOptional(),
    viz_type: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of chart visualization used.',
        example: ['bar', 'area', 'table'],
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiPut')

const CssTemplateRestApiGetUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('CssTemplateRestApiGetUser')

const CssTemplateRestApiGetUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('CssTemplateRestApiGetUser1')

const CssTemplateRestApiGetSchema = z
  .object({
    changed_by: CssTemplateRestApiGetUserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: CssTemplateRestApiGetUser1Schema.exactOptional(),
    css: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiGet')

const CssTemplateRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('CssTemplateRestApiGetListUser')

const CssTemplateRestApiGetListUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('CssTemplateRestApiGetListUser1')

const CssTemplateRestApiGetListSchema = z
  .object({
    changed_by: CssTemplateRestApiGetListUserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: CssTemplateRestApiGetListUser1Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    css: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiGetList')

const CssTemplateRestApiPostSchema = z
  .object({
    css: z.string().nullable().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiPost')

const CssTemplateRestApiPutSchema = z
  .object({
    css: z.string().nullable().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiPut')

const CurrentUserPutSchemaSchema = z
  .object({
    current_password: z
      .string()
      .exactOptional()
      .openapi({
        description: "The current user's existing password; required when the account has one",
        writeOnly: true,
      }),
    first_name: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({ description: "The current user's first name" }),
    last_name: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({ description: "The current user's last name" }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current user's new password; requires current_password when the account already has one",
      }),
  })
  .openapi({ required: [] })
  .openapi('CurrentUserPutSchema')

const DashboardCacheScreenshotResponseSchemaSchema = z
  .object({
    cache_key: z.string().exactOptional().openapi({ description: 'The cache key' }),
    dashboard_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to render the dashboard' }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to fetch the screenshot' }),
    task_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the async screenshot' }),
    task_timeout_seconds: z
      .int()
      .exactOptional()
      .openapi({ description: 'The client wait budget for the Pending and Computing task states' }),
    task_updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the last change in status' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardCacheScreenshotResponseSchema')

const DashboardChartCustomizationsConfigUpdateSchemaSchema = z
  .object({
    deleted: z.array(z.string()).exactOptional(),
    modified: z.array(z.any()).exactOptional(),
    reordered: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardChartCustomizationsConfigUpdateSchema')

const DashboardColorsConfigUpdateSchemaSchema = z
  .object({
    color_namespace: z.string().nullable().exactOptional(),
    color_scheme: z.string().nullable().exactOptional(),
    color_scheme_domain: z.array(z.string()).exactOptional(),
    label_colors: z.object({}).exactOptional(),
    map_label_colors: z.object({}).exactOptional(),
    shared_label_colors: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardColorsConfigUpdateSchema')

const DashboardCopySchemaSchema = z
  .object({
    css: z.string().exactOptional().openapi({ description: 'Override CSS for the dashboard.' }),
    dashboard_title: z
      .string()
      .min(0)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    duplicate_slices: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not to also copy all charts on the dashboard' }),
    json_metadata: z
      .string()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    replace_metadata: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Use json_metadata as the complete copy settings instead of merging with the source dashboard's settings. Defaults to false. Chart-specific settings are pruned and remapped in both modes.",
      }),
  })
  .openapi({ required: ['json_metadata'] })
  .openapi('DashboardCopySchema')

const DatabaseSchema = z
  .object({
    allow_multi_catalog: z.boolean().exactOptional(),
    allows_cost_estimate: z.boolean().exactOptional(),
    allows_subquery: z.boolean().exactOptional(),
    allows_virtual_table_explore: z.boolean().exactOptional(),
    backend: z.string().exactOptional(),
    disable_data_preview: z.boolean().exactOptional(),
    disable_drill_to_detail: z.boolean().exactOptional(),
    explore_database_id: z.int().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Database')

const DashboardDatasetSchemaSchema = z
  .object({
    always_filter_main_dttm: z.boolean().exactOptional(),
    cache_timeout: z.int().exactOptional(),
    chart_display_labels: z
      .record(z.string(), z.record(z.string(), z.string()))
      .exactOptional()
      .openapi({
        description:
          'Display labels keyed by member chart ID, then by the raw column or metric ID that chart uses. Only charts the caller can access and labels configured for their saved dimensions and metrics are included; omitted for semantic views, when there are none, or when the caller has datasource access and already receives verbose_map.',
      }),
    column_formats: z.object({}).exactOptional(),
    column_names: z.array(z.string()).exactOptional(),
    column_types: z.array(z.int()).exactOptional(),
    columns: z.array(z.object({})).exactOptional(),
    currency_code_column: z.string().exactOptional(),
    database: DatabaseSchema.exactOptional(),
    datasource_name: z.string().exactOptional(),
    default_endpoint: z.string().exactOptional(),
    edit_url: z.string().exactOptional(),
    editors: z.array(SubjectResponseSchema).exactOptional(),
    fetch_values_predicate: z.string().exactOptional(),
    filter_select: z.boolean().exactOptional(),
    filter_select_enabled: z.boolean().exactOptional(),
    granularity_sqla: z.array(z.array(z.string())).exactOptional(),
    health_check_message: z.string().exactOptional(),
    id: z.int().exactOptional(),
    is_sqllab_view: z.boolean().exactOptional(),
    main_dttm_col: z.string().exactOptional(),
    metadata_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Validation error for this dataset only.' }),
    metrics: z.array(z.object({})).exactOptional(),
    name: z.string().exactOptional(),
    normalize_columns: z.boolean().exactOptional(),
    offset: z.int().exactOptional(),
    order_by_choices: z.array(z.array(z.string())).exactOptional(),
    params: z.string().exactOptional(),
    parent: z.object({}).exactOptional(),
    partition_column: z.string().nullable().exactOptional(),
    partition_filter_mapping: z.object({}).nullable().exactOptional(),
    partition_mapped_column: z.string().nullable().exactOptional(),
    perm: z.string().exactOptional(),
    schema: z.string().exactOptional(),
    select_star: z.string().exactOptional(),
    semantic_view_features: z.array(z.string()).exactOptional(),
    sql: z.string().exactOptional(),
    supports_drill_to_detail: z.boolean().exactOptional(),
    supports_samples: z.boolean().exactOptional(),
    table_name: z.string().exactOptional(),
    template_params: z.string().exactOptional(),
    time_grain_sqla: z.array(z.array(z.string())).exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    verbose_map: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardDatasetSchema')

const DashboardExportXlsxPostSchemaSchema = z
  .object({
    active_data_mask: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({
        description:
          'Live dashboard filter state keyed by native filter id, each carrying an extraFormData object.',
      }),
    mode: z
      .enum(['data', 'images'])
      .default('data')
      .exactOptional()
      .openapi({
        description:
          "Export mode: 'data' streams each chart's tabular result (default); 'images' embeds non-table charts as rendered images and keeps table charts tabular.",
      }),
  })
  .openapi({ required: [] })
  .openapi('DashboardExportXlsxPostSchema')

const DashboardExportXlsxResponseSchemaSchema = z
  .object({
    job_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Correlation id for the async export task' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardExportXlsxResponseSchema')

const UserSchema = z
  .object({
    first_name: z.string().exactOptional(),
    id: z.int().exactOptional(),
    last_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const Tag1Schema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag1')

const ThemeSchema = z
  .object({
    id: z.int().exactOptional(),
    json_data: z.string().exactOptional(),
    theme_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Theme')

const DashboardGetResponseSchemaSchema = z
  .object({
    certification_details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this dashboard' }),
    changed_by: UserSchema.exactOptional(),
    changed_by_name: z.string().exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).exactOptional(),
    changed_on_delta_humanized: z.string().exactOptional(),
    charts: z
      .array(
        z
          .string()
          .openapi({
            description: "The names of the dashboard's charts. Names are used for legacy reasons.",
          }),
      )
      .exactOptional(),
    created_by: UserSchema.exactOptional(),
    created_on_delta_humanized: z.string().exactOptional(),
    css: z.string().exactOptional().openapi({ description: 'Override CSS for the dashboard.' }),
    custom_tags: z.array(Tag1Schema).exactOptional(),
    dashboard_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    description: z.string().nullable().exactOptional(),
    editors: z.array(SubjectResponseSchema).exactOptional(),
    id: z.int().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    json_metadata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    position_json: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view',
      }),
    published: z.boolean().exactOptional(),
    slug: z.string().exactOptional(),
    tags: z.array(Tag1Schema).exactOptional(),
    theme: ThemeSchema.nullable().exactOptional(),
    thumbnail_url: z.string().nullable().exactOptional(),
    url: z.string().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z.array(SubjectResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardGetResponseSchema')

const DashboardNativeFiltersConfigUpdateSchemaSchema = z
  .object({
    deleted: z.array(z.string()).exactOptional(),
    modified: z.array(z.any()).exactOptional(),
    reordered: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardNativeFiltersConfigUpdateSchema')

const DashboardPermalinkStateSchemaSchema = z
  .object({
    activeTabs: z
      .array(z.string().nullable())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Current active dashboard tabs' }),
    anchor: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional anchor link added to url hash' }),
    chartStates: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Chart-level state for stateful tables (column order, sorting, filtering)',
      }),
    dataMask: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Data mask used for native filter state' }),
    urlParams: z
      .array(z.any().nullable().openapi({ description: 'URL Parameter key-value pair' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL Parameters' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardPermalinkStateSchema')

const DashboardRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DashboardRestApiGet')

const DashboardRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DashboardRestApiGetListUser')

const DashboardRestApiGetListUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DashboardRestApiGetListUser1')

const DashboardRestApiGetListSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('DashboardRestApiGetListSubject')

const DashboardRestApiGetListTagSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiGetListTag')

const DashboardRestApiGetListSubject1Schema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('DashboardRestApiGetListSubject1')

const DashboardRestApiGetListSchema = z
  .object({
    certification_details: z.string().nullable().exactOptional(),
    certified_by: z.string().nullable().exactOptional(),
    changed_by: DashboardRestApiGetListUserSchema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: DashboardRestApiGetListUser1Schema.exactOptional(),
    created_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    editors: z.array(DashboardRestApiGetListSubjectSchema).exactOptional(),
    id: z.int().exactOptional(),
    is_managed_externally: z.boolean().exactOptional(),
    published: z.boolean().nullable().exactOptional(),
    slug: z.string().max(255).nullable().exactOptional(),
    status: z.any().exactOptional().openapi({ readOnly: true }),
    tags: z.array(DashboardRestApiGetListTagSchema).exactOptional(),
    url: z.any().exactOptional().openapi({ readOnly: true }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z.array(DashboardRestApiGetListSubject1Schema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiGetList')

const DashboardRestApiPostSchema = z
  .object({
    certification_details: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this dashboard' }),
    css: z.string().exactOptional().openapi({ description: 'Override CSS for the dashboard.' }),
    dashboard_title: z
      .string()
      .min(0)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description for the dashboard.' }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description:
              'Subject IDs or explicit principal references that can alter the dashboard.',
          }),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    json_metadata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    position_json: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view',
      }),
    published: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether or not this dashboard is visible in the list of all dashboards.',
      }),
    slug: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifying part for the web address of the dashboard.' }),
    theme_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Theme ID for the dashboard' }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description:
              'Subject IDs or explicit principal references that can view the dashboard.',
          }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiPost')

const DashboardRestApiPutSchema = z
  .object({
    certification_details: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the certification' }),
    certified_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this dashboard' }),
    css: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Override CSS for the dashboard.' }),
    dashboard_title: z
      .string()
      .min(0)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description for the dashboard.' }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .nullable()
          .openapi({
            description:
              'Subject IDs or explicit principal references that can alter the dashboard.',
          }),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    json_metadata: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    position_json: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view',
      }),
    published: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Determines whether or not this dashboard is visible in the list of all dashboards.',
      }),
    slug: z
      .string()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifying part for the web address of the dashboard.' }),
    tags: z
      .array(
        z.int().nullable().openapi({ description: 'Tags to be associated with the dashboard' }),
      )
      .exactOptional(),
    theme_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Theme ID for the dashboard' }),
    uuid: z.uuid().nullable().exactOptional(),
    viewers: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .nullable()
          .openapi({
            description:
              'Subject IDs or explicit principal references that can view the dashboard.',
          }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiPut')

const DashboardScreenshotPostSchemaSchema = z
  .object({
    activeTabs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list representing active tabs.' }),
    anchor: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the anchor.' }),
    dataMask: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'An object representing the data mask.' }),
    urlParams: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'A list of tuples, each containing two strings.' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardScreenshotPostSchema')

const Database1Schema = z
  .object({ database_name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Database1')

const IdentifierQuoteSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({ description: 'Character that closes a quoted identifier' }),
    escape_by_doubling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether an embedded closing-quote character is escaped by doubling it (True) or with a backslash escape (False, e.g. BigQuery's GoogleSQL backtick identifiers)",
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({ description: 'Character that opens a quoted identifier' }),
  })
  .openapi({ required: [] })
  .openapi('IdentifierQuote')

const EngineInformationSchema = z
  .object({
    disable_ssh_tunneling: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'SSH tunnel is not available to the database' }),
    identifier_quote: IdentifierQuoteSchema.exactOptional().openapi({
      description: 'Characters used to quote identifiers for this dialect',
    }),
    oauth2_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'OAuth2 authentication is enabled on this connection' }),
    supports_dynamic_catalog: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The database supports multiple catalogs in a single connection' }),
    supports_file_upload: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Users can upload files to the database' }),
    supports_oauth2: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The database supports OAuth2' }),
    supports_offset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The database supports OFFSET in SQL queries. Engines like Elasticsearch SQL return False.',
      }),
    supports_schemas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The database uses schemas to organize tables' }),
  })
  .openapi({ required: [] })
  .openapi('EngineInformation')

const DatabaseSSHTunnelSchema = z
  .object({
    id: z.int().nullable().exactOptional().openapi({ description: 'SSH Tunnel ID (for updates)' }),
    password: z.string().exactOptional().openapi({ writeOnly: true }),
    private_key: z.string().exactOptional().openapi({ writeOnly: true }),
    private_key_password: z.string().exactOptional().openapi({ writeOnly: true }),
    server_address: z
      .string()
      .regex(/^[A-Za-z0-9._:\-\[\]]+$/)
      .min(1)
      .max(256)
      .exactOptional(),
    server_host_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Expected SSH server host key in authorized-key form (e.g. 'ssh-ed25519 AAAA...'). When set, the server's host key is verified against it before the tunnel is opened.",
      }),
    server_port: z.int().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseSSHTunnel')

const DatabaseConnectionSchemaSchema = z
  .object({
    allow_ctas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE TABLE AS option in SQL Lab' }),
    allow_cvas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE VIEW AS option in SQL Lab' }),
    allow_dml: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab',
      }),
    allow_file_upload: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.',
      }),
    allow_run_async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.',
      }),
    backend: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    cache_timeout: z
      .int()
      .min(-1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.',
      }),
    configuration_method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    driver: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy driver to use' }),
    engine_information: EngineInformationSchema.exactOptional(),
    expose_in_sqllab: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Expose this database to SQLLab' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine" rel="noopener noreferrer">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData" rel="noopener noreferrer">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_file_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.<br>7. The <code>disable_drill_to_detail</code> field is a boolean specifying whether or not drill to detail is disabled for the database.<br>8. The <code>allow_multi_catalog</code> indicates if the database allows changing the default catalog when running queries and creating datasets.<br>9. The <code>disable_sampling_read_limit_override</code> field is a boolean specifying whether system-generated sampling queries (filter values, samples/preview, datetime format detection) that an engine rejects with a read-limit error should fail outright instead of being retried once with the engine\'s bounded-read override. Only affects engines that implement such an override.</p>',
      }),
    force_ctas_schema: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema',
      }),
    id: z.int().exactOptional().openapi({ description: 'Database ID (for updates)' }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    masked_encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    parameters_schema: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'JSONSchema for configuring the database by parameters instead of SQLAlchemy URI',
      }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(1)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls" rel="noopener noreferrer">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
    ssh_tunnel: DatabaseSSHTunnelSchema.nullable().exactOptional(),
    uuid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseConnectionSchema')

const DatabaseFunctionNamesResponseSchema = z
  .object({ function_names: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseFunctionNamesResponse')

const DatabaseOAuth2TokensDeleteSchemaSchema = z
  .object({ token_ids: z.array(z.int().min(1)).min(1).max(100) })
  .openapi({ required: ['token_ids'] })
  .openapi('DatabaseOAuth2TokensDeleteSchema')

const DatabaseOAuth2TokensRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseOAuth2TokensRestApiGet')

const DatabaseOAuth2TokensRestApiGetListUserSchema = z
  .object({
    email: z.string().max(320),
    first_name: z.string().max(64),
    last_name: z.string().max(64),
    username: z.string().max(128),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'username'] })
  .openapi('DatabaseOAuth2TokensRestApiGetListUser')

const DatabaseOAuth2TokensRestApiGetListSchema = z
  .object({
    access_token_expiration: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int().exactOptional(),
    user: DatabaseOAuth2TokensRestApiGetListUserSchema,
  })
  .openapi({ required: ['user'] })
  .openapi('DatabaseOAuth2TokensRestApiGetList')

const DatabaseOAuth2TokensRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseOAuth2TokensRestApiPost')

const DatabaseOAuth2TokensRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseOAuth2TokensRestApiPut')

const DatabaseRelatedChartSchema = z
  .object({
    id: z.int().exactOptional(),
    slice_name: z.string().exactOptional(),
    viz_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedChart')

const DatabaseRelatedChartsSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Chart count' }),
    result: z
      .array(DatabaseRelatedChartSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedCharts')

const DatabaseRelatedDashboardSchema = z
  .object({
    id: z.int().exactOptional(),
    json_metadata: z.object({}).exactOptional(),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedDashboard')

const DatabaseRelatedDashboardsSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Dashboard count' }),
    result: z
      .array(DatabaseRelatedDashboardSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedDashboards')

const DatabaseRelatedDatasetSchema = z
  .object({
    id: z.int().exactOptional(),
    schema: z.string().exactOptional(),
    table_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedDataset')

const DatabaseRelatedDatasetsSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Dataset count' }),
    result: z
      .array(DatabaseRelatedDatasetSchema)
      .exactOptional()
      .openapi({ description: 'A list of datasets' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedDatasets')

const DatabaseRelatedObjectsResponseSchema = z
  .object({
    charts: DatabaseRelatedChartsSchema.exactOptional(),
    dashboards: DatabaseRelatedDashboardsSchema.exactOptional(),
    datasets: DatabaseRelatedDatasetsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedObjectsResponse')

const DatabaseRestApiGetSchema = z
  .object({
    allow_ctas: z.boolean().nullable().exactOptional(),
    allow_cvas: z.boolean().nullable().exactOptional(),
    allow_dml: z.boolean().nullable().exactOptional(),
    allow_file_upload: z.boolean().nullable().exactOptional(),
    allow_run_async: z.boolean().nullable().exactOptional(),
    backend: z.any().exactOptional().openapi({ readOnly: true }),
    cache_timeout: z.int().nullable().exactOptional(),
    configuration_method: z.string().max(255).nullable().exactOptional(),
    database_name: z.string().max(250),
    driver: z.any().exactOptional().openapi({ readOnly: true }),
    engine_information: z.any().exactOptional().openapi({ readOnly: true }),
    expose_in_sqllab: z.boolean().nullable().exactOptional(),
    force_ctas_schema: z.string().max(250).nullable().exactOptional(),
    id: z.int().exactOptional(),
    impersonate_user: z.boolean().nullable().exactOptional(),
    is_managed_externally: z.boolean().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatabaseRestApiGet')

const DatabaseRestApiGetListUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DatabaseRestApiGetListUser')

const DatabaseRestApiGetListUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DatabaseRestApiGetListUser1')

const DatabaseRestApiGetListSchema = z
  .object({
    allow_ctas: z.boolean().nullable().exactOptional(),
    allow_cvas: z.boolean().nullable().exactOptional(),
    allow_dml: z.boolean().nullable().exactOptional(),
    allow_file_upload: z.boolean().nullable().exactOptional(),
    allow_multi_catalog: z.any().exactOptional().openapi({ readOnly: true }),
    allow_run_async: z.boolean().nullable().exactOptional(),
    allows_cost_estimate: z.any().exactOptional().openapi({ readOnly: true }),
    allows_subquery: z.any().exactOptional().openapi({ readOnly: true }),
    allows_virtual_table_explore: z.any().exactOptional().openapi({ readOnly: true }),
    backend: z.any().exactOptional().openapi({ readOnly: true }),
    changed_by: DatabaseRestApiGetListUserSchema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    configuration_method: z.string().max(255).nullable().exactOptional(),
    created_by: DatabaseRestApiGetListUser1Schema.exactOptional(),
    database_name: z.string().max(250),
    disable_data_preview: z.any().exactOptional().openapi({ readOnly: true }),
    disable_drill_to_detail: z.any().exactOptional().openapi({ readOnly: true }),
    engine_information: z.any().exactOptional().openapi({ readOnly: true }),
    explore_database_id: z.any().exactOptional().openapi({ readOnly: true }),
    expose_in_sqllab: z.boolean().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    force_ctas_schema: z.string().max(250).nullable().exactOptional(),
    id: z.int().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatabaseRestApiGetList')

const DatabaseRestApiPostSchema = z
  .object({
    allow_ctas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE TABLE AS option in SQL Lab' }),
    allow_cvas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE VIEW AS option in SQL Lab' }),
    allow_dml: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab',
      }),
    allow_file_upload: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.',
      }),
    allow_run_async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.',
      }),
    cache_timeout: z
      .int()
      .min(-1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.',
      }),
    configuration_method: z
      .enum(['sqlalchemy_form', 'dynamic_form'])
      .default('sqlalchemy_form')
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .openapi({ description: 'A database name to identify this connection.' }),
    driver: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy driver to use' }),
    engine: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    expose_in_sqllab: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Expose this database to SQLLab' }),
    external_url: z.string().nullable().exactOptional(),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine" rel="noopener noreferrer">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData" rel="noopener noreferrer">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_file_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.<br>7. The <code>disable_drill_to_detail</code> field is a boolean specifying whether or not drill to detail is disabled for the database.<br>8. The <code>allow_multi_catalog</code> indicates if the database allows changing the default catalog when running queries and creating datasets.<br>9. The <code>disable_sampling_read_limit_override</code> field is a boolean specifying whether system-generated sampling queries (filter values, samples/preview, datetime format detection) that an engine rejects with a read-limit error should fail outright instead of being retried once with the engine\'s bounded-read override. Only affects engines that implement such an override.</p>',
      }),
    force_ctas_schema: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    masked_encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(1)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls" rel="noopener noreferrer">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
    ssh_tunnel: DatabaseSSHTunnelSchema.nullable().exactOptional(),
    uuid: z.string().exactOptional(),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatabaseRestApiPost')

const DatabaseRestApiPutSchema = z
  .object({
    allow_ctas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE TABLE AS option in SQL Lab' }),
    allow_cvas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE VIEW AS option in SQL Lab' }),
    allow_dml: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab',
      }),
    allow_file_upload: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.',
      }),
    allow_run_async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.',
      }),
    cache_timeout: z
      .int()
      .min(-1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.',
      }),
    configuration_method: z
      .enum(['sqlalchemy_form', 'dynamic_form'])
      .default('sqlalchemy_form')
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    driver: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy driver to use' }),
    engine: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    expose_in_sqllab: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Expose this database to SQLLab' }),
    external_url: z.string().nullable().exactOptional(),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine" rel="noopener noreferrer">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData" rel="noopener noreferrer">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_file_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.<br>7. The <code>disable_drill_to_detail</code> field is a boolean specifying whether or not drill to detail is disabled for the database.<br>8. The <code>allow_multi_catalog</code> indicates if the database allows changing the default catalog when running queries and creating datasets.<br>9. The <code>disable_sampling_read_limit_override</code> field is a boolean specifying whether system-generated sampling queries (filter values, samples/preview, datetime format detection) that an engine rejects with a read-limit error should fail outright instead of being retried once with the engine\'s bounded-read override. Only affects engines that implement such an override.</p>',
      }),
    force_ctas_schema: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    masked_encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(0)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls" rel="noopener noreferrer">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
    ssh_tunnel: DatabaseSSHTunnelSchema.nullable().exactOptional(),
    uuid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRestApiPut')

const DatabaseSSHTunnelValidationSchema = z
  .object({
    id: z.int().nullable().exactOptional().openapi({ description: 'SSH Tunnel ID (for updates)' }),
    password: z.string().nullable().exactOptional(),
    private_key: z.string().nullable().exactOptional(),
    private_key_password: z.string().nullable().exactOptional(),
    server_address: z.string().nullable().exactOptional(),
    server_host_key: z.string().nullable().exactOptional(),
    server_port: z.int().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseSSHTunnelValidation')

const DatabaseSchemaAccessForFileUploadResponseSchema = z
  .object({
    schemas: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of schemas allowed for the database to upload information',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseSchemaAccessForFileUploadResponse')

const DatabaseTablesResponseSchema = z
  .object({
    extra: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Extra data used to specify column metadata' }),
    type: z.string().exactOptional().openapi({ description: 'table or view' }),
    value: z.string().exactOptional().openapi({ description: 'The table or view name' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseTablesResponse')

const DatabaseTestConnectionSchemaSchema = z
  .object({
    configuration_method: z
      .enum(['sqlalchemy_form', 'dynamic_form'])
      .default('sqlalchemy_form')
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    driver: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy driver to use' }),
    engine: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine" rel="noopener noreferrer">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData" rel="noopener noreferrer">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_file_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.<br>7. The <code>disable_drill_to_detail</code> field is a boolean specifying whether or not drill to detail is disabled for the database.<br>8. The <code>allow_multi_catalog</code> indicates if the database allows changing the default catalog when running queries and creating datasets.<br>9. The <code>disable_sampling_read_limit_override</code> field is a boolean specifying whether system-generated sampling queries (filter values, samples/preview, datetime format detection) that an engine rejects with a read-limit error should fail outright instead of being retried once with the engine\'s bounded-read override. Only affects engines that implement such an override.</p>',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    masked_encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(1)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls" rel="noopener noreferrer">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
    ssh_tunnel: DatabaseSSHTunnelSchema.nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseTestConnectionSchema')

const DatabaseValidateParametersSchemaSchema = z
  .object({
    catalog: z
      .record(z.string(), z.any().nullable())
      .exactOptional()
      .openapi({ description: 'Gsheets specific column for managing label to sheet urls' }),
    configuration_method: z
      .enum(['sqlalchemy_form', 'dynamic_form'])
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    driver: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy driver to use' }),
    engine: z.string().openapi({ description: 'SQLAlchemy engine to use' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine" rel="noopener noreferrer">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData" rel="noopener noreferrer">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_file_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.<br>7. The <code>disable_drill_to_detail</code> field is a boolean specifying whether or not drill to detail is disabled for the database.<br>8. The <code>allow_multi_catalog</code> indicates if the database allows changing the default catalog when running queries and creating datasets.<br>9. The <code>disable_sampling_read_limit_override</code> field is a boolean specifying whether system-generated sampling queries (filter values, samples/preview, datetime format detection) that an engine rejects with a read-limit error should fail outright instead of being retried once with the engine\'s bounded-read override. Only affects engines that implement such an override.</p>',
      }),
    id: z.int().nullable().exactOptional().openapi({ description: 'Database ID (for updates)' }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    masked_encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    parameters: z
      .record(z.string(), z.any().nullable())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    ssh_tunnel: DatabaseSSHTunnelValidationSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['configuration_method', 'engine'] })
  .openapi('DatabaseValidateParametersSchema')

const RlsRoleSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Role ID.' }),
    name: z.string().exactOptional().openapi({ description: 'Role name.' }),
  })
  .openapi({ required: [] })
  .openapi('RlsRole')

const RlsFilterSchema = z
  .object({
    clause: z.string().nullable().exactOptional().openapi({ description: 'RLS filter clause.' }),
    filter_type: z.string().nullable().exactOptional().openapi({ description: 'RLS filter type.' }),
    group_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'RLS filter group key.' }),
    id: z.int().exactOptional().openapi({ description: 'RLS filter ID.' }),
    inherited: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If the filter is inherited from underlying physical tables.' }),
    name: z.string().exactOptional().openapi({ description: 'RLS filter name.' }),
    roles: z
      .array(RlsRoleSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Roles associated with the RLS filter.' }),
  })
  .openapi({ required: [] })
  .openapi('RlsFilter')

const DatasetSchema = z
  .object({
    cache_timeout: z
      .int()
      .exactOptional()
      .openapi({ description: 'Duration (in seconds) of the caching timeout for this dataset.' }),
    column_formats: z.object({}).exactOptional().openapi({ description: 'Column formats.' }),
    columns: z.array(z.object({})).exactOptional().openapi({ description: 'Columns metadata.' }),
    database: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Database associated with the dataset.' }),
    datasource_name: z.string().exactOptional().openapi({ description: 'Dataset name.' }),
    default_endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default endpoint for the dataset.' }),
    description: z.string().exactOptional().openapi({ description: 'Dataset description.' }),
    edit_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL for editing the dataset.' }),
    editors: z
      .array(SubjectResponseSchema)
      .exactOptional()
      .openapi({ description: 'List of editors' }),
    extra: z
      .object({})
      .exactOptional()
      .openapi({ description: 'JSON string containing extra configuration elements.' }),
    fetch_values_predicate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Predicate used when fetching values from the dataset.' }),
    filter_select: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'SELECT filter applied to the dataset.' }),
    filter_select_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the SELECT filter is enabled.' }),
    granularity_sqla: z
      .array(z.array(z.object({})))
      .exactOptional()
      .openapi({
        description:
          'Name of temporal column used for time filtering for SQL datasources. This field is deprecated, use `granularity` instead.',
      }),
    health_check_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Health check message.' }),
    id: z.int().exactOptional().openapi({ description: 'Dataset ID.' }),
    is_sqllab_view: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the dataset is a SQL Lab view.' }),
    main_dttm_col: z.string().exactOptional().openapi({ description: 'The main temporal column.' }),
    metrics: z.array(z.object({})).exactOptional().openapi({ description: 'Dataset metrics.' }),
    name: z.string().exactOptional().openapi({ description: 'Dataset name.' }),
    offset: z.int().exactOptional().openapi({ description: 'Dataset offset.' }),
    order_by_choices: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'List of order by columns.' }),
    params: z.object({}).exactOptional().openapi({ description: 'Extra params for the dataset.' }),
    perm: z.string().exactOptional().openapi({ description: 'Permission expression.' }),
    rls_filters: z
      .array(RlsFilterSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Row-level security filters applied to this dataset.' }),
    schema: z.string().exactOptional().openapi({ description: 'Dataset schema.' }),
    select_star: z.string().exactOptional().openapi({ description: 'Select all clause.' }),
    sql: z
      .string()
      .exactOptional()
      .openapi({ description: 'A SQL statement that defines the dataset.' }),
    table_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table associated with the dataset.' }),
    template_params: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Table template params.' }),
    time_grain_sqla: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'List of temporal granularities supported by the dataset.' }),
    type: z.string().exactOptional().openapi({ description: 'Dataset type.' }),
    uid: z.string().exactOptional().openapi({ description: 'Dataset unique identifier.' }),
    verbose_map: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Mapping from raw name to verbose name.' }),
  })
  .openapi({ required: [] })
  .openapi('Dataset')

const DatasetCacheWarmUpRequestSchemaSchema = z
  .object({
    dashboard_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the dashboard to get filters for when warming cache' }),
    db_name: z
      .string()
      .openapi({ description: 'The name of the database where the table is located' }),
    extra_filters: z
      .string()
      .exactOptional()
      .openapi({ description: 'Extra filters to apply when warming up cache' }),
    table_name: z.string().openapi({ description: 'The name of the table to warm up cache for' }),
  })
  .openapi({ required: ['db_name', 'table_name'] })
  .openapi('DatasetCacheWarmUpRequestSchema')

const DatasetCacheWarmUpResponseSingleSchema = z
  .object({
    chart_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the chart the status belongs to' }),
    viz_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error that occurred when warming cache for chart' }),
    viz_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status of the underlying query for the viz' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetCacheWarmUpResponseSingle')

const DatasetCacheWarmUpResponseSchemaSchema = z
  .object({
    result: z
      .array(DatasetCacheWarmUpResponseSingleSchema)
      .exactOptional()
      .openapi({ description: "A list of each chart's warmup status and errors if any" }),
  })
  .openapi({ required: [] })
  .openapi('DatasetCacheWarmUpResponseSchema')

const DatasetColumnsPutSchema = z
  .object({
    advanced_data_type: z.string().min(1).max(255).nullable().exactOptional(),
    certification_details: z.string().nullable().exactOptional(),
    certified_by: z.string().nullable().exactOptional(),
    column_name: z.string().min(1).max(255),
    datetime_format: z.string().min(1).max(100).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    filterable: z.boolean().exactOptional(),
    groupby: z.boolean().exactOptional(),
    id: z.int().exactOptional(),
    is_active: z.boolean().nullable().exactOptional(),
    is_certified: z.boolean().nullable().exactOptional(),
    is_dttm: z.boolean().nullable().exactOptional(),
    partition_transform_is_monotonic: z.boolean().nullable().exactOptional(),
    partition_value_transform: z
      .string()
      .min(1)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "SQL expression containing a :value placeholder. Filters on this column are mirrored onto the dataset's partition column with the value passed through this transform.",
      }),
    python_date_format: z.string().min(1).max(255).nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_name: z.string().nullable().exactOptional(),
    warning_markdown: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['column_name'] })
  .openapi('DatasetColumnsPut')

const DatasetColumnsRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiGet')

const DatasetColumnsRestApiGetListSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiGetList')

const DatasetColumnsRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiPost')

const DatasetColumnsRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiPut')

const DatasetDuplicateSchemaSchema = z
  .object({ base_model_id: z.int(), table_name: z.string().min(1).max(250) })
  .openapi({ required: ['base_model_id', 'table_name'] })
  .openapi('DatasetDuplicateSchema')

const DatasetMetricCurrencyPutSchema = z
  .object({
    symbol: z.string().min(1).max(128).exactOptional(),
    symbolPosition: z.string().min(1).max(128).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetMetricCurrencyPut')

const DatasetMetricRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiGet')

const DatasetMetricRestApiGetListSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiGetList')

const DatasetMetricRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiPost')

const DatasetMetricRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiPut')

const DatasetMetricsPutSchema = z
  .object({
    certification_details: z.string().nullable().exactOptional(),
    certified_by: z.string().nullable().exactOptional(),
    currency: DatasetMetricCurrencyPutSchema.nullable().exactOptional(),
    d3format: z.string().min(1).max(128).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string(),
    extra: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    is_certified: z.boolean().nullable().exactOptional(),
    metric_name: z.string().min(1).max(255),
    metric_type: z.string().min(1).max(32).nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_name: z.string().nullable().exactOptional(),
    warning_markdown: z.string().nullable().exactOptional(),
    warning_text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['expression', 'metric_name'] })
  .openapi('DatasetMetricsPut')

const DatasetPurgeImpactObjectSchema = z
  .object({ archived: z.boolean(), name: z.string(), url: z.string().nullable(), uuid: z.uuid() })
  .openapi({ required: ['archived', 'name', 'url', 'uuid'] })
  .openapi('DatasetPurgeImpactObject')

const DatasetPurgeImpactCollectionSchema = z
  .object({
    count: z.int().min(0),
    restricted_count: z.int().min(0),
    result: z.array(DatasetPurgeImpactObjectSchema),
  })
  .openapi({ required: ['count', 'restricted_count', 'result'] })
  .openapi('DatasetPurgeImpactCollection')

const DatasetPurgeImpactSchemaSchema = z
  .object({
    charts: DatasetPurgeImpactCollectionSchema,
    dashboards: DatasetPurgeImpactCollectionSchema,
    impact_token: z.string(),
  })
  .openapi({ required: ['charts', 'dashboards', 'impact_token'] })
  .openapi('DatasetPurgeImpactSchema')

const DatasetPurgeRequestSchemaSchema = z
  .object({ confirmed_impact_token: z.string().min(1) })
  .openapi({ required: ['confirmed_impact_token'] })
  .openapi('DatasetPurgeRequestSchema')

const DatasetRelatedChartSchema = z
  .object({
    id: z.int().exactOptional(),
    slice_name: z.string().exactOptional(),
    viz_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedChart')

const DatasetRelatedChartsSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Chart count' }),
    restricted_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Charts the current user cannot access' }),
    result: z
      .array(DatasetRelatedChartSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedCharts')

const DatasetRelatedDashboardSchema = z
  .object({
    id: z.int().exactOptional(),
    json_metadata: z.object({}).exactOptional(),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedDashboard')

const DatasetRelatedDashboardsSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Dashboard count' }),
    restricted_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Dashboards the current user cannot access' }),
    result: z
      .array(DatasetRelatedDashboardSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedDashboards')

const DatasetRelatedObjectsResponseSchema = z
  .object({
    charts: DatasetRelatedChartsSchema.exactOptional(),
    dashboards: DatasetRelatedDashboardsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedObjectsResponse')

const DatasetRestApiGetUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DatasetRestApiGetUser1')

const DatasetRestApiGetTableColumnSchema = z
  .object({
    advanced_data_type: z.string().max(255).nullable().exactOptional(),
    certification_details: z.any().exactOptional().openapi({ readOnly: true }),
    certified_by: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    column_name: z.string().max(255),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    filterable: z.boolean().nullable().exactOptional(),
    groupby: z.boolean().nullable().exactOptional(),
    id: z.int().exactOptional(),
    is_active: z.boolean().nullable().exactOptional(),
    is_certified: z.any().exactOptional().openapi({ readOnly: true }),
    is_dttm: z.boolean().nullable().exactOptional(),
    partition_transform_is_monotonic: z.boolean().nullable().exactOptional(),
    partition_value_transform: z.string().nullable().exactOptional(),
    python_date_format: z.string().max(255).nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    type_generic: z.any().exactOptional().openapi({ readOnly: true }),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_name: z.string().max(1024).nullable().exactOptional(),
    warning_markdown: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['column_name'] })
  .openapi('DatasetRestApiGetTableColumn')

const DatasetRestApiGetUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DatasetRestApiGetUser')

const DatasetRestApiGetDatabaseSchema = z
  .object({
    allow_multi_catalog: z.any().exactOptional().openapi({ readOnly: true }),
    backend: z.any().exactOptional().openapi({ readOnly: true }),
    database_name: z.string().max(250),
    id: z.int().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatasetRestApiGetDatabase')

const DatasetRestApiGetSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('DatasetRestApiGetSubject')

const DatasetRestApiGetSqlMetricSchema = z
  .object({
    certification_details: z.any().exactOptional().openapi({ readOnly: true }),
    certified_by: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    currency: z.any().nullable().exactOptional(),
    d3format: z.string().max(128).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string(),
    extra: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    is_certified: z.any().exactOptional().openapi({ readOnly: true }),
    metric_name: z.string().max(255),
    metric_type: z.string().max(32).nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_name: z.string().max(1024).nullable().exactOptional(),
    warning_markdown: z.any().exactOptional().openapi({ readOnly: true }),
    warning_text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['expression', 'metric_name'] })
  .openapi('DatasetRestApiGetSqlMetric')

const DatasetRestApiGetSchema = z
  .object({
    always_filter_main_dttm: z.boolean().nullable().exactOptional(),
    cache_timeout: z.any().exactOptional().openapi({ readOnly: true }),
    catalog: z.string().max(256).nullable().exactOptional(),
    changed_by: DatasetRestApiGetUser1Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    column_formats: z.any().exactOptional().openapi({ readOnly: true }),
    columns: z.array(DatasetRestApiGetTableColumnSchema),
    created_by: DatasetRestApiGetUserSchema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_on_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    currency_code_column: z.string().max(250).nullable().exactOptional(),
    database: DatasetRestApiGetDatabaseSchema,
    datasource_name: z.any().exactOptional().openapi({ readOnly: true }),
    datasource_type: z.any().exactOptional().openapi({ readOnly: true }),
    default_endpoint: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    editors: z.array(DatasetRestApiGetSubjectSchema).exactOptional(),
    extra: z.string().nullable().exactOptional(),
    fetch_values_predicate: z.string().nullable().exactOptional(),
    filter_select_enabled: z.boolean().nullable().exactOptional(),
    folders: z.any().nullable().exactOptional(),
    granularity_sqla: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional(),
    is_managed_externally: z.boolean().exactOptional(),
    is_sqllab_view: z.boolean().nullable().exactOptional(),
    kind: z.any().exactOptional().openapi({ readOnly: true }),
    main_dttm_col: z.string().max(250).nullable().exactOptional(),
    metrics: z.array(DatasetRestApiGetSqlMetricSchema),
    name: z.any().exactOptional().openapi({ readOnly: true }),
    normalize_columns: z.boolean().nullable().exactOptional(),
    offset: z.int().nullable().exactOptional(),
    order_by_choices: z.any().exactOptional().openapi({ readOnly: true }),
    partition_column: z.string().max(250).nullable().exactOptional(),
    partition_filter_mapping: z.any().exactOptional().openapi({ readOnly: true }),
    partition_mapped_column: z.string().max(250).nullable().exactOptional(),
    partition_value_transform_default: z.any().exactOptional().openapi({ readOnly: true }),
    schema: z.string().max(255).nullable().exactOptional(),
    select_star: z.any().exactOptional().openapi({ readOnly: true }),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
    template_params: z.string().nullable().exactOptional(),
    time_grain_sqla: z.any().exactOptional().openapi({ readOnly: true }),
    uid: z.any().exactOptional().openapi({ readOnly: true }),
    url: z.any().exactOptional().openapi({ readOnly: true }),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_map: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['columns', 'database', 'metrics', 'table_name'] })
  .openapi('DatasetRestApiGet')

const DatasetRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('DatasetRestApiGetListUser')

const DatasetRestApiGetListDatabaseSchema = z
  .object({
    database_name: z.string().max(250),
    id: z.int().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatasetRestApiGetListDatabase')

const DatasetRestApiGetListSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('DatasetRestApiGetListSubject')

const DatasetRestApiGetListSchema = z
  .object({
    catalog: z.string().max(256).nullable().exactOptional(),
    changed_by: DatasetRestApiGetListUserSchema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    database: DatasetRestApiGetListDatabaseSchema,
    datasource_type: z.any().exactOptional().openapi({ readOnly: true }),
    default_endpoint: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    editors: z.array(DatasetRestApiGetListSubjectSchema).exactOptional(),
    explore_url: z.any().exactOptional().openapi({ readOnly: true }),
    extra: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    kind: z.any().exactOptional().openapi({ readOnly: true }),
    schema: z.string().max(255).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['database', 'table_name'] })
  .openapi('DatasetRestApiGetList')

const DatasetRestApiPostSchema = z
  .object({
    always_filter_main_dttm: z.boolean().default(false).exactOptional(),
    catalog: z.string().min(0).max(250).nullable().exactOptional(),
    currency_code_column: z.string().min(0).max(250).nullable().exactOptional(),
    database: z.int(),
    editors: z
      .array(
        z.xor([
          z.int().openapi({ description: 'Subject ID, not a user ID.' }),
          z
            .strictObject({
              id: z.int().min(1),
              type: z.enum(['user', 'role', 'group', 'subject']),
            })
            .openapi({ required: ['type', 'id'] }),
        ]),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    normalize_columns: z.boolean().default(false).exactOptional(),
    partition_column: z.string().min(0).max(250).nullable().exactOptional(),
    partition_mapped_column: z.string().min(0).max(250).nullable().exactOptional(),
    schema: z.string().min(0).max(250).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().min(1).max(250),
    template_params: z.string().nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['database', 'table_name'] })
  .openapi('DatasetRestApiPost')

const FolderSchema: z.ZodType<FolderType> = z
  .lazy(() =>
    z
      .object({
        children: z.array(FolderSchema).nullable().exactOptional(),
        description: z.string().min(0).max(1000).nullable().exactOptional(),
        name: z.string().min(1).max(250).exactOptional(),
        type: z.enum(['metric', 'column', 'folder']).exactOptional(),
        uuid: z.uuid(),
      })
      .openapi({ required: ['uuid'] }),
  )
  .openapi('Folder')

const DatasetRestApiPutSchema = z
  .object({
    always_filter_main_dttm: z.boolean().default(false).exactOptional(),
    cache_timeout: z.int().nullable().exactOptional(),
    catalog: z.string().min(0).max(250).nullable().exactOptional(),
    columns: z.array(DatasetColumnsPutSchema).exactOptional(),
    currency_code_column: z.string().min(0).max(250).nullable().exactOptional(),
    database_id: z.int().exactOptional(),
    default_endpoint: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    editors: z
      .array(
        z.xor([
          z.int().openapi({ description: 'Subject ID, not a user ID.' }),
          z
            .strictObject({
              id: z.int().min(1),
              type: z.enum(['user', 'role', 'group', 'subject']),
            })
            .openapi({ required: ['type', 'id'] }),
        ]),
      )
      .exactOptional(),
    external_url: z.string().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    fetch_values_predicate: z.string().min(0).max(1000).nullable().exactOptional(),
    filter_select_enabled: z.boolean().nullable().exactOptional(),
    folders: z.array(FolderSchema).exactOptional(),
    is_managed_externally: z.boolean().nullable().exactOptional(),
    is_sqllab_view: z.boolean().nullable().exactOptional(),
    main_dttm_col: z.string().nullable().exactOptional(),
    metrics: z.array(DatasetMetricsPutSchema).exactOptional(),
    normalize_columns: z.boolean().nullable().exactOptional(),
    offset: z.int().nullable().exactOptional(),
    partition_column: z.string().min(0).max(250).nullable().exactOptional(),
    partition_mapped_column: z.string().min(0).max(250).nullable().exactOptional(),
    schema: z.string().min(0).max(255).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().min(1).max(250).nullable().exactOptional(),
    template_params: z.string().nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRestApiPut')

const DatasourceQueryOrderSchema = z
  .object({
    column: z.string().openapi({ description: 'Metric or dimension name to sort by.' }),
    descending: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Sort this column descending.' }),
  })
  .openapi({ required: ['column'] })
  .openapi('DatasourceQueryOrder')

const DatasourceQuerySchemaSchema = z
  .object({
    cache_timeout: z
      .int()
      .min(-1)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Seconds to cache for; -1 disables caching.' }),
    dimensions: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Dimension/column names to group by.' }),
    filters: z
      .array(ChartDataFilterSchema)
      .exactOptional()
      .openapi({ description: 'Filters to apply, AND-ed together.' }),
    force: z.boolean().default(false).exactOptional(),
    limit: z
      .int()
      .min(1)
      .max(50000)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Rows to return. Also clamped server-side by ROW_LIMIT.' }),
    metrics: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Saved metric names, or ad-hoc metric objects (datasets only). See ChartDataAdhocMetricSchema.',
      }),
    offset: z
      .int()
      .min(0)
      .default(0)
      .exactOptional()
      .openapi({ description: 'Rows to skip, for pagination.' }),
    order: z
      .array(DatasourceQueryOrderSchema)
      .exactOptional()
      .openapi({
        description: 'Ordering terms, applied in sequence. Each carries its own direction.',
      }),
    result_format: z
      .enum(['csv', 'json', 'xlsx', 'arrow'])
      .default('json')
      .exactOptional()
      .openapi({ description: "'json' (default) or 'arrow' for an Arrow IPC stream." }),
    semantic_selection_version: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Identity version from datasource metadata, after selecting its current metric and dimension IDs. Never infer legacy IDs.',
      }),
    time_column: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Temporal column the time range applies to. Inferred from the datasource when omitted.',
      }),
    time_grain: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: "ISO 8601 duration, e.g. 'P1D' or 'PT1H'." }),
    time_range: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: "e.g. 'Last 30 days' or '2024-01-01 : 2024-12-31'." }),
    use_cache: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasourceQuerySchema')

const DistinctResultResponseSchema = z
  .object({ text: z.string().exactOptional().openapi({ description: 'The distinct item' }) })
  .openapi({ required: [] })
  .openapi('DistinctResultResponse')

const DistincResponseSchemaSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'The total number of distinct values' }),
    result: z.array(DistinctResultResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DistincResponseSchema')

const EmbeddedDashboardConfigSchema = z
  .object({ allowed_domains: z.array(z.string()) })
  .openapi({ required: ['allowed_domains'] })
  .openapi('EmbeddedDashboardConfig')

const User1Schema = z
  .object({
    first_name: z.string().exactOptional(),
    id: z.int().exactOptional(),
    last_name: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User1')

const EmbeddedDashboardResponseSchemaSchema = z
  .object({
    allowed_domains: z.array(z.string()).exactOptional(),
    changed_by: User1Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).exactOptional(),
    dashboard_id: z.string().exactOptional(),
    uuid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmbeddedDashboardResponseSchema')

const EmbeddedDashboardRestApiGetSchema = z
  .object({ uuid: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('EmbeddedDashboardRestApiGet')

const EmbeddedDashboardRestApiGetListSchema = z
  .object({ uuid: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('EmbeddedDashboardRestApiGetList')

const EmbeddedDashboardRestApiPostSchema = z
  .object({ uuid: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('EmbeddedDashboardRestApiPost')

const EmbeddedDashboardRestApiPutSchema = z
  .object({ uuid: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('EmbeddedDashboardRestApiPut')

const EstimateQueryCostSchemaSchema = z
  .object({
    catalog: z.string().nullable().exactOptional().openapi({ description: 'The database catalog' }),
    database_id: z.int().openapi({ description: 'The database id' }),
    schema: z.string().nullable().exactOptional().openapi({ description: 'The database schema' }),
    sql: z.string().openapi({ description: 'The SQL query to estimate' }),
    template_params: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The SQL query template params' }),
  })
  .openapi({ required: ['database_id', 'sql'] })
  .openapi('EstimateQueryCostSchema')

const ExecutePayloadSchemaSchema = z
  .object({
    catalog: z.string().nullable().exactOptional(),
    client_id: z.string().nullable().exactOptional(),
    ctas_method: z.string().nullable().exactOptional(),
    database_id: z.int(),
    expand_data: z.boolean().nullable().exactOptional(),
    queryLimit: z.int().nullable().exactOptional(),
    runAsync: z.boolean().nullable().exactOptional(),
    schema: z.string().nullable().exactOptional(),
    select_as_cta: z.boolean().nullable().exactOptional(),
    sql: z.string(),
    sql_editor_id: z.string().nullable().exactOptional(),
    tab: z.string().nullable().exactOptional(),
    templateParams: z.string().nullable().exactOptional(),
    tmp_table_name: z
      .string()
      .regex(/^([A-Za-z_][A-Za-z0-9_]*)?\Z/)
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: ['database_id', 'sql'] })
  .openapi('ExecutePayloadSchema')

const SliceSchema = z
  .object({
    cache_timeout: z
      .int()
      .exactOptional()
      .openapi({ description: 'Duration (in seconds) of the caching timeout for this chart.' }),
    certification_details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details of the certification.' }),
    certified_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Person or group that has certified this dashboard.' }),
    changed_on: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the last modification.' }),
    changed_on_humanized: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the last modification in human readable form.' }),
    datasource: z.string().exactOptional().openapi({ description: 'Datasource identifier.' }),
    description: z.string().exactOptional().openapi({ description: 'Slice description.' }),
    description_markeddown: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sanitized HTML version of the chart description.' }),
    edit_url: z.string().exactOptional().openapi({ description: 'The URL for editing the slice.' }),
    editors: z
      .array(SubjectResponseSchema)
      .exactOptional()
      .openapi({ description: 'List of editors' }),
    form_data: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Form data associated with the slice.' }),
    is_managed_externally: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the chart is managed outside externally.' }),
    modified: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last modification in human readable form.' }),
    query_context: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The context associated with the query.' }),
    slice_id: z.int().exactOptional().openapi({ description: 'The slice ID.' }),
    slice_name: z.string().exactOptional().openapi({ description: 'The slice name.' }),
    slice_url: z.string().exactOptional().openapi({ description: 'The slice URL.' }),
  })
  .openapi({ required: [] })
  .openapi('Slice')

const ExploreContextSchemaSchema = z
  .object({
    dataset: DatasetSchema.exactOptional(),
    form_data: z
      .object({})
      .exactOptional()
      .openapi({
        description: "Form data from the Explore controls used to form the chart's data query.",
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any message related to the processed request.' }),
    slice: SliceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExploreContextSchema')

const ExplorePermalinkStateSchemaSchema = z
  .object({
    chartState: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Chart-level state for stateful tables (column filters, sorting, column order)',
      }),
    formData: z.object({}).openapi({ description: 'Chart form data' }),
    urlParams: z
      .array(z.any().nullable().openapi({ description: 'URL Parameter key-value pair' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL Parameters' }),
  })
  .openapi({ required: ['formData'] })
  .openapi('ExplorePermalinkStateSchema')

const FormDataPostSchemaSchema = z
  .object({
    chart_id: z.int().exactOptional().openapi({ description: 'The chart ID' }),
    datasource_id: z.int().openapi({ description: 'The datasource ID' }),
    datasource_type: z
      .enum(['table', 'dataset', 'query', 'saved_query', 'view', 'semantic_view'])
      .openapi({ description: 'The datasource type' }),
    form_data: z.string().openapi({ description: 'Any type of JSON supported text.' }),
  })
  .openapi({ required: ['datasource_id', 'datasource_type', 'form_data'] })
  .openapi('FormDataPostSchema')

const FormDataPutSchemaSchema = z
  .object({
    chart_id: z.int().exactOptional().openapi({ description: 'The chart ID' }),
    datasource_id: z.int().openapi({ description: 'The datasource ID' }),
    datasource_type: z
      .enum(['table', 'dataset', 'query', 'saved_query', 'view', 'semantic_view'])
      .openapi({ description: 'The datasource type' }),
    form_data: z.string().openapi({ description: 'Any type of JSON supported text.' }),
  })
  .openapi({ required: ['datasource_id', 'datasource_type', 'form_data'] })
  .openapi('FormDataPutSchema')

const FormatQueryPayloadSchemaSchema = z
  .object({
    database_id: z.int().nullable().exactOptional().openapi({ description: 'The database id' }),
    engine: z.string().nullable().exactOptional(),
    sql: z.string(),
    template_params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The SQL query template params as JSON string' }),
  })
  .openapi({ required: ['sql'] })
  .openapi('FormatQueryPayloadSchema')

const GetFavStarIdsSchemaSchema = z
  .object({
    result: z
      .array(ChartFavStarResponseResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of results for each corresponding chart in the request' }),
  })
  .openapi({ required: [] })
  .openapi('GetFavStarIdsSchema')

const GetOrCreateDatasetSchemaSchema = z
  .object({
    always_filter_main_dttm: z.boolean().default(false).exactOptional(),
    catalog: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The catalog the table belongs to' }),
    database_id: z.int().openapi({ description: 'ID of database table belongs to' }),
    normalize_columns: z.boolean().default(false).exactOptional(),
    schema: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The schema the table belongs to' }),
    table_name: z.string().openapi({ description: 'Name of table' }),
    template_params: z
      .string()
      .exactOptional()
      .openapi({ description: 'Template params for the table' }),
  })
  .openapi({ required: ['database_id', 'table_name'] })
  .openapi('GetOrCreateDatasetSchema')

const GroupPostSchemaSchema = z
  .object({
    description: z
      .string()
      .min(0)
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group description' }),
    label: z
      .string()
      .min(0)
      .max(150)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group label' }),
    name: z.string().min(1).max(100).openapi({ description: 'Group name' }),
    roles: z.array(z.int()).exactOptional().openapi({ description: 'Group roles' }),
    users: z.array(z.int()).exactOptional().openapi({ description: 'Group users' }),
  })
  .openapi({ required: ['name'] })
  .openapi('GroupPostSchema')

const GroupPutSchemaSchema = z
  .object({
    description: z
      .string()
      .min(0)
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group description' }),
    label: z
      .string()
      .min(0)
      .max(150)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group label' }),
    name: z.string().min(1).max(100).exactOptional().openapi({ description: 'Group name' }),
    roles: z.array(z.int()).exactOptional().openapi({ description: 'Group roles' }),
    users: z.array(z.int()).exactOptional().openapi({ description: 'Group users' }),
  })
  .openapi({ required: [] })
  .openapi('GroupPutSchema')

const ResourceSchema = z
  .object({ id: z.string(), type: z.literal('dashboard') })
  .openapi({ required: ['id', 'type'] })
  .openapi('Resource')

const RlsRuleSchema = z
  .strictObject({ clause: z.string(), dataset: z.int().min(1).exactOptional() })
  .openapi({ required: ['clause'] })
  .openapi('RlsRule')

const User2Schema = z
  .object({
    attributes: z.record(z.string(), z.any().nullable()).nullable().exactOptional(),
    first_name: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User2')

const GuestTokenCreateSchema = z
  .object({
    datasets: z
      .array(z.int())
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Optional allowlist of dataset IDs the guest may access. When omitted all datasets linked to the embedded dashboard are accessible, preserving the default behaviour.',
      }),
    resources: z.array(ResourceSchema),
    rls: z.array(RlsRuleSchema),
    user: User2Schema.exactOptional(),
  })
  .openapi({ required: ['resources', 'rls'] })
  .openapi('GuestTokenCreate')

const LogRestApiGetUserSchema = z
  .object({
    first_name: z.string().max(64),
    last_name: z.string().max(64),
    username: z.string().max(128),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('LogRestApiGetUser')

const LogRestApiGetSchema = z
  .object({
    action: z.string().max(512).nullable().exactOptional(),
    dashboard_id: z.int().nullable().exactOptional(),
    dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    duration_ms: z.int().nullable().exactOptional(),
    json: z.string().nullable().exactOptional(),
    referrer: z.string().max(1024).nullable().exactOptional(),
    slice_id: z.int().nullable().exactOptional(),
    user: LogRestApiGetUserSchema.exactOptional(),
    user_id: z.any().nullable().default(null).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogRestApiGet')

const LogRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    last_name: z.string().max(64),
    username: z.string().max(128),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('LogRestApiGetListUser')

const LogRestApiGetListSchema = z
  .object({
    action: z.string().max(512).nullable().exactOptional(),
    dashboard_id: z.int().nullable().exactOptional(),
    dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    duration_ms: z.int().nullable().exactOptional(),
    json: z.string().nullable().exactOptional(),
    referrer: z.string().max(1024).nullable().exactOptional(),
    slice_id: z.int().nullable().exactOptional(),
    user: LogRestApiGetListUserSchema.exactOptional(),
    user_id: z.any().nullable().default(null).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogRestApiGetList')

const LogRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('LogRestApiPost')

const LogRestApiPutSchema = z
  .object({
    action: z.string().max(512).nullable().exactOptional(),
    dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    json: z.string().nullable().exactOptional(),
    user: z.any().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogRestApiPut')

const PartitionMappingPreviewSchemaSchema = z
  .object({
    is_monotonic: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether the owner has declared the transform order-preserving. Range operators only mirror when they have.',
      }),
    mapped_column: z
      .string()
      .min(1)
      .max(250)
      .openapi({ description: 'Column whose filters would be mirrored' }),
    operator: z
      .enum(['<', '<=', '==', '>', '>=', 'IN'])
      .default('==')
      .exactOptional()
      .openapi({
        description:
          'Filter operator being mirrored. Only operators the preview can construct are accepted: TEMPORAL_RANGE is mirrored by the query path as two bounds decomposed from a since/until pair, which this request has no way to express.',
      }),
    partition_column: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Candidate partition column. The editor previews a mapping before it is saved, so this overrides the stored value; omitted, the stored one is used.',
      }),
    sample_values: z
      .array(z.string().min(1).max(250))
      .min(1)
      .max(50)
      .openapi({
        description:
          'Values to evaluate the transform at. A comparison operator takes one; IN takes the whole list.',
      }),
    value_transform: z
      .string()
      .min(1)
      .max(1024)
      .nullable()
      .openapi({ description: 'SQL expression containing a :value placeholder' }),
  })
  .openapi({ required: ['mapped_column', 'sample_values', 'value_transform'] })
  .openapi('PartitionMappingPreviewSchema')

const PasswordRecoveryRequestSchemaSchema = z
  .object({ email: z.email().min(1).max(320) })
  .openapi({ required: ['email'] })
  .openapi('PasswordRecoveryRequestSchema')

const PasswordRecoveryResetSchemaSchema = z
  .object({ password: z.string().min(1), token: z.string().min(1).max(256) })
  .openapi({ required: ['password', 'token'] })
  .openapi('PasswordRecoveryResetSchema')

const PermissionApiGetSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(100) })
  .openapi({ required: ['name'] })
  .openapi('PermissionApiGet')

const PermissionApiGetListSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(100) })
  .openapi({ required: ['name'] })
  .openapi('PermissionApiGetList')

const PermissionApiPostSchema = z
  .object({ name: z.string().max(100) })
  .openapi({ required: ['name'] })
  .openapi('PermissionApiPost')

const PermissionApiPutSchema = z
  .object({ name: z.string().max(100) })
  .openapi({ required: ['name'] })
  .openapi('PermissionApiPut')

const QueryResultSchema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).exactOptional(),
    ctas: z.boolean().exactOptional(),
    db: z.string().exactOptional(),
    dbId: z.int().exactOptional(),
    endDttm: z.number().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    executedSql: z.string().exactOptional(),
    extra: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    limit: z.int().exactOptional(),
    limitingFactor: z.string().exactOptional(),
    progress: z.int().exactOptional(),
    queryId: z.int().exactOptional(),
    resultsKey: z.string().exactOptional(),
    rows: z.int().exactOptional(),
    schema: z.string().exactOptional(),
    serverId: z.int().exactOptional(),
    sql: z.string().exactOptional(),
    sqlEditorId: z.string().exactOptional(),
    startDttm: z.number().exactOptional(),
    state: z.string().exactOptional(),
    tab: z.string().exactOptional(),
    tempSchema: z.string().nullable().exactOptional(),
    tempTable: z.string().nullable().exactOptional(),
    trackingUrl: z.string().nullable().exactOptional(),
    user: z.string().exactOptional(),
    userId: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryResult')

const QueryExecutionResponseSchemaSchema = z
  .object({
    columns: z.array(z.object({})).exactOptional(),
    data: z.array(z.object({})).exactOptional(),
    expanded_columns: z.array(z.object({})).exactOptional(),
    query: QueryResultSchema.exactOptional(),
    query_id: z.int().exactOptional(),
    selected_columns: z.array(z.object({})).exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryExecutionResponseSchema')

const QueryRestApiGetDatabaseSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryRestApiGetDatabase')

const QueryRestApiGetSchema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    client_id: z.string().max(11),
    database: QueryRestApiGetDatabaseSchema,
    end_result_backend_time: z.number().nullable().exactOptional(),
    end_time: z.number().nullable().exactOptional(),
    error_message: z.string().nullable().exactOptional(),
    executed_sql: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    limit: z.int().nullable().exactOptional(),
    progress: z.int().nullable().exactOptional(),
    results_key: z.string().max(64).nullable().exactOptional(),
    rows: z.int().nullable().exactOptional(),
    schema: z.string().max(256).nullable().exactOptional(),
    select_as_cta: z.boolean().nullable().exactOptional(),
    select_as_cta_used: z.boolean().nullable().exactOptional(),
    select_sql: z.string().nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_editor_id: z.string().max(256).nullable().exactOptional(),
    start_running_time: z.number().nullable().exactOptional(),
    start_time: z.number().nullable().exactOptional(),
    status: z.string().max(16).nullable().exactOptional(),
    tab_name: z.string().max(256).nullable().exactOptional(),
    tmp_schema_name: z.string().max(256).nullable().exactOptional(),
    tmp_table_name: z.string().max(256).nullable().exactOptional(),
    tracking_url: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['client_id', 'database'] })
  .openapi('QueryRestApiGet')

const QueryRestApiGetListSchema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).exactOptional(),
    database: Database1Schema.exactOptional(),
    end_time: z.number().exactOptional(),
    executed_sql: z.string().exactOptional(),
    id: z.int().exactOptional(),
    rows: z.int().exactOptional(),
    schema: z.string().exactOptional(),
    sql: z.string().exactOptional(),
    sql_tables: z.any().exactOptional().openapi({ readOnly: true }),
    start_running_time: z.number().exactOptional(),
    start_time: z.number().exactOptional(),
    status: z.string().exactOptional(),
    tab_name: z.string().exactOptional(),
    tmp_table_name: z.string().exactOptional(),
    tracking_url: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryRestApiGetList')

const QueryRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryRestApiPost')

const QueryRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryRestApiPut')

const TablesSchema = z
  .object({
    id: z.int().exactOptional(),
    schema: z.string().exactOptional(),
    table_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tables')

const RLSRestApiGetSchema = z
  .object({
    clause: z.string().exactOptional().openapi({ description: 'clause_description' }),
    description: z.string().exactOptional().openapi({ description: 'description_description' }),
    filter_type: z
      .enum(['Regular', 'Base'])
      .exactOptional()
      .openapi({ description: 'filter_type_description' }),
    group_key: z.string().exactOptional().openapi({ description: 'group_key_description' }),
    id: z.int().exactOptional().openapi({ description: 'id_description' }),
    name: z.string().exactOptional().openapi({ description: 'name_description' }),
    subjects: z.array(SubjectResponseSchema).exactOptional(),
    tables: z.array(TablesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RLSRestApiGet')

const RLSRestApiGetListSchema = z
  .object({
    changed_by: UserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    clause: z.string().exactOptional().openapi({ description: 'clause_description' }),
    description: z.string().exactOptional().openapi({ description: 'description_description' }),
    filter_type: z
      .enum(['Regular', 'Base'])
      .exactOptional()
      .openapi({ description: 'filter_type_description' }),
    group_key: z.string().exactOptional().openapi({ description: 'group_key_description' }),
    id: z.int().exactOptional().openapi({ description: 'id_description' }),
    name: z.string().exactOptional().openapi({ description: 'name_description' }),
    subjects: z.array(SubjectResponseSchema).exactOptional(),
    tables: z.array(TablesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RLSRestApiGetList')

const RLSRestApiPostSchema = z
  .object({
    clause: z.string().openapi({ description: 'clause_description' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'description_description' }),
    filter_type: z.enum(['Regular', 'Base']).openapi({ description: 'filter_type_description' }),
    group_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'group_key_description' }),
    name: z.string().min(1).max(255).openapi({ description: 'name_description' }),
    subjects: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'Subjects (users, roles, groups) associated with this RLS rule. For regular filters, the rule applies to these subjects. For base filters, these subjects are excluded from the filter.',
      }),
    tables: z.array(z.int()).min(1).openapi({ description: 'tables_description' }),
  })
  .openapi({ required: ['clause', 'filter_type', 'name', 'tables'] })
  .openapi('RLSRestApiPost')

const RLSRestApiPutSchema = z
  .object({
    clause: z.string().exactOptional().openapi({ description: 'clause_description' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'description_description' }),
    filter_type: z
      .enum(['Regular', 'Base'])
      .exactOptional()
      .openapi({ description: 'filter_type_description' }),
    group_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'group_key_description' }),
    name: z.string().min(1).max(255).exactOptional().openapi({ description: 'name_description' }),
    subjects: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'Subjects (users, roles, groups) associated with this RLS rule. For regular filters, the rule applies to these subjects. For base filters, these subjects are excluded from the filter.',
      }),
    tables: z.array(z.int()).min(1).exactOptional().openapi({ description: 'tables_description' }),
  })
  .openapi({ required: [] })
  .openapi('RLSRestApiPut')

const RecentActivitySchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action taken describing type of activity' }),
    item_title: z.string().exactOptional().openapi({ description: 'Title of item' }),
    item_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of item, e.g. slice or dashboard' }),
    item_url: z.string().exactOptional().openapi({ description: 'URL to item' }),
    time: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time of activity, in epoch milliseconds' }),
    time_delta_humanized: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of how long ago activity took place.' }),
  })
  .openapi({ required: [] })
  .openapi('RecentActivity')

const RecentActivityResponseSchemaSchema = z
  .object({
    result: z
      .array(RecentActivitySchema)
      .exactOptional()
      .openapi({ description: 'A list of recent activity objects' }),
  })
  .openapi({ required: [] })
  .openapi('RecentActivityResponseSchema')

const RecentActivitySchemaSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action taken describing type of activity' }),
    item_title: z.string().exactOptional().openapi({ description: 'Title of item' }),
    item_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of item, e.g. slice or dashboard' }),
    item_url: z.string().exactOptional().openapi({ description: 'URL to item' }),
    time: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time of activity, in epoch milliseconds' }),
    time_delta_humanized: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of how long ago activity took place.' }),
  })
  .openapi({ required: [] })
  .openapi('RecentActivitySchema')

const RelatedResultResponseSchema = z
  .object({
    extra: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The extra metadata for related item' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The related item string representation' }),
    value: z.int().exactOptional().openapi({ description: 'The related item identifier' }),
  })
  .openapi({ required: [] })
  .openapi('RelatedResultResponse')

const RelatedResponseSchemaSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'The total number of related values' }),
    result: z.array(RelatedResultResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedResponseSchema')

const ReportConfigImpactedSchemaSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offending e-mail address or crontab' }),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: "Either 'recipient' or 'frequency'" }),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportConfigImpactedSchema')

const ReportConfigurationSchemaSchema = z
  .object({
    alert_minimum_interval: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Minimum interval between alert executions, in seconds. Values below 120 do not restrict schedules. Falls back to ALERT_MINIMUM_INTERVAL only before this setting has been saved.',
        example: 3600,
      }),
    alerts_attach_reports: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether alerts deliver their attachment (screenshot, PDF, CSV or XLSX). When disabled, alerts only send the message and link. Falls back to the FF until a row has first been saved.',
      }),
    allowed_email_domains: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'E-mail domains accepted as recipients. An empty list allows any domain.',
        example: ['example.com', 'superset.com'],
      }),
    date_format_in_email_subject: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Render strftime date placeholders in email subjects. Falls back to the DATE_FORMAT_IN_EMAIL_SUBJECT FF until first saved.',
      }),
    limit_recipients_to_users: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When enabled, only e-mail addresses of existing active users are accepted as recipients.',
      }),
    report_minimum_interval: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Minimum interval between report executions, in seconds. Values below 120 do not restrict schedules. Falls back to REPORT_MINIMUM_INTERVAL only before this setting has been saved.',
        example: 3600,
      }),
  })
  .openapi({ required: [] })
  .openapi('ReportConfigurationSchema')

const ReportExecutionLogRestApiGetSchema = z
  .object({
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    error_message: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    scheduled_dttm: z.iso.datetime({ offset: true }),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    state: z.string().max(50),
    uuid: z.uuid().nullable().exactOptional(),
    value: z.number().nullable().exactOptional(),
    value_row_json: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['scheduled_dttm', 'state'] })
  .openapi('ReportExecutionLogRestApiGet')

const ReportExecutionLogRestApiGetListSchema = z
  .object({
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    error_message: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    scheduled_dttm: z.iso.datetime({ offset: true }),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    state: z.string().max(50),
    uuid: z.uuid().nullable().exactOptional(),
    value: z.number().nullable().exactOptional(),
    value_row_json: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['scheduled_dttm', 'state'] })
  .openapi('ReportExecutionLogRestApiGetList')

const ReportExecutionLogRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportExecutionLogRestApiPost')

const ReportExecutionLogRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportExecutionLogRestApiPut')

const ReportRecipientConfigJSONSchema = z
  .object({
    bccTarget: z.string().exactOptional(),
    ccTarget: z.string().exactOptional(),
    target: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportRecipientConfigJSON')

const ReportRecipientSchema = z
  .object({
    recipient_config_json: ReportRecipientConfigJSONSchema.exactOptional(),
    type: z
      .enum(['Email', 'Slack', 'SlackV2', 'Webhook'])
      .openapi({ description: 'The recipient type, check spec for valid options' }),
  })
  .openapi({ required: ['type'] })
  .openapi('ReportRecipient')

const ReportScheduleRestApiGetSliceSchema = z
  .object({
    id: z.int().exactOptional(),
    slice_name: z.string().max(250).nullable().exactOptional(),
    viz_type: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportScheduleRestApiGetSlice')

const ReportScheduleRestApiGetDashboardSchema = z
  .object({
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportScheduleRestApiGetDashboard')

const ReportScheduleRestApiGetDatabaseSchema = z
  .object({ database_name: z.string().max(250), id: z.int().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('ReportScheduleRestApiGetDatabase')

const ReportScheduleRestApiGetSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ReportScheduleRestApiGetSubject')

const ReportScheduleRestApiGetReportRecipientsSchema = z
  .object({
    id: z.int().exactOptional(),
    recipient_config_json: z.string().nullable().exactOptional(),
    type: z.string().max(50),
  })
  .openapi({ required: ['type'] })
  .openapi('ReportScheduleRestApiGetReportRecipients')

const ReportScheduleRestApiGetUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ReportScheduleRestApiGetUser')

const ReportScheduleRestApiGetUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ReportScheduleRestApiGetUser1')

const ReportScheduleRestApiGetSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    chart: ReportScheduleRestApiGetSliceSchema.exactOptional(),
    context_markdown: z.string().nullable().exactOptional(),
    creation_method: z.string().max(255).nullable().exactOptional(),
    crontab: z.string().max(1000),
    custom_width: z.int().nullable().exactOptional(),
    dashboard: ReportScheduleRestApiGetDashboardSchema.exactOptional(),
    database: ReportScheduleRestApiGetDatabaseSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    editors: z.array(ReportScheduleRestApiGetSubjectSchema).exactOptional(),
    email_subject: z.string().max(255).nullable().exactOptional(),
    extra: z.any().exactOptional().openapi({ readOnly: true }),
    force_screenshot: z.boolean().nullable().exactOptional(),
    grace_period: z.int().nullable().exactOptional(),
    id: z.int().exactOptional(),
    include_cta: z.boolean().nullable().exactOptional(),
    last_eval_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_state: z.string().max(50).nullable().exactOptional(),
    last_value: z.number().nullable().exactOptional(),
    last_value_row_json: z.string().nullable().exactOptional(),
    log_retention: z.int().nullable().exactOptional(),
    name: z.string().max(150),
    recipients: z.array(ReportScheduleRestApiGetReportRecipientsSchema),
    report_format: z.string().max(50).nullable().exactOptional(),
    retry_max_attempts: z.int().exactOptional(),
    retry_notify_owners: z.boolean().exactOptional(),
    retry_notify_recipients: z.boolean().exactOptional(),
    retry_on_failure: z.boolean().exactOptional(),
    run_alert_query_as: ReportScheduleRestApiGetUserSchema.exactOptional(),
    run_alert_query_as_type: z.string().max(50).nullable().exactOptional(),
    run_as: ReportScheduleRestApiGetUser1Schema.exactOptional(),
    run_as_type: z.string().max(50).nullable().exactOptional(),
    send_failed_reports: z.boolean().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    timezone: z.string().max(100).exactOptional(),
    type: z.string().max(50),
    validator_config_json: z.string().nullable().exactOptional(),
    validator_type: z.string().max(100).nullable().exactOptional(),
    working_timeout: z.int().nullable().exactOptional(),
  })
  .openapi({ required: ['crontab', 'name', 'recipients', 'type'] })
  .openapi('ReportScheduleRestApiGet')

const ReportScheduleRestApiGetListUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ReportScheduleRestApiGetListUser')

const ReportScheduleRestApiGetListUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ReportScheduleRestApiGetListUser1')

const ReportScheduleRestApiGetListSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ReportScheduleRestApiGetListSubject')

const ReportScheduleRestApiGetListReportRecipientsSchema = z
  .object({ id: z.int().exactOptional(), type: z.string().max(50) })
  .openapi({ required: ['type'] })
  .openapi('ReportScheduleRestApiGetListReportRecipients')

const ReportScheduleRestApiGetListUser2Schema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportScheduleRestApiGetListUser2')

const ReportScheduleRestApiGetListSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_by: ReportScheduleRestApiGetListUserSchema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    chart_id: z.any().nullable().default(null).exactOptional(),
    created_by: ReportScheduleRestApiGetListUser1Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    creation_method: z.string().max(255).nullable().exactOptional(),
    crontab: z.string().max(1000),
    crontab_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    dashboard_id: z.any().nullable().default(null).exactOptional(),
    description: z.string().nullable().exactOptional(),
    editors: z.array(ReportScheduleRestApiGetListSubjectSchema).exactOptional(),
    extra: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional(),
    last_eval_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_state: z.string().max(50).nullable().exactOptional(),
    name: z.string().max(150),
    recipients: z.array(ReportScheduleRestApiGetListReportRecipientsSchema),
    report_format: z.string().max(50).nullable().exactOptional(),
    retry_max_attempts: z.int().exactOptional(),
    retry_notify_owners: z.boolean().exactOptional(),
    retry_notify_recipients: z.boolean().exactOptional(),
    retry_on_failure: z.boolean().exactOptional(),
    run_as: ReportScheduleRestApiGetListUser2Schema.exactOptional(),
    run_as_type: z.string().max(50).nullable().exactOptional(),
    send_failed_reports: z.boolean().exactOptional(),
    timezone: z.string().max(100).exactOptional(),
    type: z.string().max(50),
  })
  .openapi({ required: ['crontab', 'name', 'recipients', 'type'] })
  .openapi('ReportScheduleRestApiGetList')

const ValidatorConfigJSONSchema = z
  .object({
    op: z
      .enum(['<', '<=', '>', '>=', '==', '!='])
      .exactOptional()
      .openapi({
        description: 'The operation to compare with a threshold to apply to the SQL output\n',
      }),
    threshold: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidatorConfigJSON')

const ReportScheduleRestApiPostSchema = z
  .object({
    active: z.boolean().exactOptional(),
    chart: z.int().nullable().exactOptional(),
    context_markdown: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Markdown description' }),
    creation_method: z
      .enum(['charts', 'dashboards', 'alerts_reports'])
      .exactOptional()
      .openapi({
        description:
          'Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.',
      }),
    crontab: z
      .string()
      .min(1)
      .max(1000)
      .openapi({
        description:
          'A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.',
        example: '*/5 * * * *',
      }),
    custom_width: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom width of the screenshot in pixels', example: 1000 }),
    dashboard: z.int().nullable().exactOptional(),
    database: z.int().exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use a nice description to give context to this Alert/Report',
        example: 'Daily sales dashboard to marketing',
      }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can alter the report.',
          }),
      )
      .exactOptional(),
    email_subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The report schedule subject line',
        example: '[Report]  Report name: Dashboard or chart name',
      }),
    extra: z.object({}).exactOptional(),
    force_screenshot: z.boolean().exactOptional(),
    grace_period: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)',
        example: 14400,
      }),
    include_cta: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Whether to include the call-to-action link back to Superset (e.g. 'Explore in Superset') in the delivered notifications",
      }),
    log_retention: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'How long to keep the logs around for this report (in days)',
        example: 90,
      }),
    name: z
      .string()
      .min(1)
      .max(150)
      .openapi({ description: 'The report schedule name.', example: 'Daily dashboard email' }),
    recipients: z.array(ReportRecipientSchema).exactOptional(),
    report_format: z
      .enum(['PDF', 'PNG', 'CSV', 'XLSX', 'TEXT', 'NONE'])
      .exactOptional()
      .openapi({
        description:
          'Attachment format. NONE disables attachments for alerts and makes chart/dashboard optional. Omitted attachment settings are preserved on update.',
      }),
    retry_max_attempts: z
      .int()
      .min(1)
      .max(10)
      .default(3)
      .exactOptional()
      .openapi({ description: 'Maximum number of retry attempts (1–10)', example: 3 }),
    retry_notify_owners: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Notify report owners on each retry attempt' }),
    retry_notify_recipients: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify report recipients on each retry attempt' }),
    retry_on_failure: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Enable automatic retries on report failure' }),
    run_alert_query_as: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the user whose credentials are used when running the alert condition SQL query, useful when the audience of the alert does not have access to the database. Null inherits the content executor at execution time.',
      }),
    run_alert_query_as_type: z
      .union([z.literal('fixed_user'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Alert query executor type; null inherits run_as.' }),
    run_as: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the user whose credentials (RBAC permissions, database OAuth2 tokens) are used when rendering the content (screenshot, PDF, CSV, XLSX or text). Admins can set any active user; non-admins can only set themselves. Onlyhonored when the ALERT_REPORT_DYNAMIC_EXECUTOR feature flag is enabled. Admins can set this and run_as_type to null to use ALERT_REPORTS_EXECUTORS.',
      }),
    run_as_type: z
      .union([z.literal('fixed_user'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Explicit executor type; fixed_user requires run_as.' }),
    send_failed_reports: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Send the failed report to all recipients after retries are exhausted',
      }),
    sql: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.',
        example: 'SELECT value FROM time_series_table',
      }),
    timezone: z
      .enum([
        'Africa/Abidjan',
        'Africa/Accra',
        'Africa/Addis_Ababa',
        'Africa/Algiers',
        'Africa/Asmara',
        'Africa/Asmera',
        'Africa/Bamako',
        'Africa/Bangui',
        'Africa/Banjul',
        'Africa/Bissau',
        'Africa/Blantyre',
        'Africa/Brazzaville',
        'Africa/Bujumbura',
        'Africa/Cairo',
        'Africa/Casablanca',
        'Africa/Ceuta',
        'Africa/Conakry',
        'Africa/Dakar',
        'Africa/Dar_es_Salaam',
        'Africa/Djibouti',
        'Africa/Douala',
        'Africa/El_Aaiun',
        'Africa/Freetown',
        'Africa/Gaborone',
        'Africa/Harare',
        'Africa/Johannesburg',
        'Africa/Juba',
        'Africa/Kampala',
        'Africa/Khartoum',
        'Africa/Kigali',
        'Africa/Kinshasa',
        'Africa/Lagos',
        'Africa/Libreville',
        'Africa/Lome',
        'Africa/Luanda',
        'Africa/Lubumbashi',
        'Africa/Lusaka',
        'Africa/Malabo',
        'Africa/Maputo',
        'Africa/Maseru',
        'Africa/Mbabane',
        'Africa/Mogadishu',
        'Africa/Monrovia',
        'Africa/Nairobi',
        'Africa/Ndjamena',
        'Africa/Niamey',
        'Africa/Nouakchott',
        'Africa/Ouagadougou',
        'Africa/Porto-Novo',
        'Africa/Sao_Tome',
        'Africa/Timbuktu',
        'Africa/Tripoli',
        'Africa/Tunis',
        'Africa/Windhoek',
        'America/Adak',
        'America/Anchorage',
        'America/Anguilla',
        'America/Antigua',
        'America/Araguaina',
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Catamarca',
        'America/Argentina/ComodRivadavia',
        'America/Argentina/Cordoba',
        'America/Argentina/Jujuy',
        'America/Argentina/La_Rioja',
        'America/Argentina/Mendoza',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Salta',
        'America/Argentina/San_Juan',
        'America/Argentina/San_Luis',
        'America/Argentina/Tucuman',
        'America/Argentina/Ushuaia',
        'America/Aruba',
        'America/Asuncion',
        'America/Atikokan',
        'America/Atka',
        'America/Bahia',
        'America/Bahia_Banderas',
        'America/Barbados',
        'America/Belem',
        'America/Belize',
        'America/Blanc-Sablon',
        'America/Boa_Vista',
        'America/Bogota',
        'America/Boise',
        'America/Buenos_Aires',
        'America/Cambridge_Bay',
        'America/Campo_Grande',
        'America/Cancun',
        'America/Caracas',
        'America/Catamarca',
        'America/Cayenne',
        'America/Cayman',
        'America/Chicago',
        'America/Chihuahua',
        'America/Ciudad_Juarez',
        'America/Coral_Harbour',
        'America/Cordoba',
        'America/Costa_Rica',
        'America/Coyhaique',
        'America/Creston',
        'America/Cuiaba',
        'America/Curacao',
        'America/Danmarkshavn',
        'America/Dawson',
        'America/Dawson_Creek',
        'America/Denver',
        'America/Detroit',
        'America/Dominica',
        'America/Edmonton',
        'America/Eirunepe',
        'America/El_Salvador',
        'America/Ensenada',
        'America/Fort_Nelson',
        'America/Fort_Wayne',
        'America/Fortaleza',
        'America/Glace_Bay',
        'America/Godthab',
        'America/Goose_Bay',
        'America/Grand_Turk',
        'America/Grenada',
        'America/Guadeloupe',
        'America/Guatemala',
        'America/Guayaquil',
        'America/Guyana',
        'America/Halifax',
        'America/Havana',
        'America/Hermosillo',
        'America/Indiana/Indianapolis',
        'America/Indiana/Knox',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Tell_City',
        'America/Indiana/Vevay',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indianapolis',
        'America/Inuvik',
        'America/Iqaluit',
        'America/Jamaica',
        'America/Jujuy',
        'America/Juneau',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Knox_IN',
        'America/Kralendijk',
        'America/La_Paz',
        'America/Lima',
        'America/Los_Angeles',
        'America/Louisville',
        'America/Lower_Princes',
        'America/Maceio',
        'America/Managua',
        'America/Manaus',
        'America/Marigot',
        'America/Martinique',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Mendoza',
        'America/Menominee',
        'America/Merida',
        'America/Metlakatla',
        'America/Mexico_City',
        'America/Miquelon',
        'America/Moncton',
        'America/Monterrey',
        'America/Montevideo',
        'America/Montreal',
        'America/Montserrat',
        'America/Nassau',
        'America/New_York',
        'America/Nipigon',
        'America/Nome',
        'America/Noronha',
        'America/North_Dakota/Beulah',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/Nuuk',
        'America/Ojinaga',
        'America/Panama',
        'America/Pangnirtung',
        'America/Paramaribo',
        'America/Phoenix',
        'America/Port-au-Prince',
        'America/Port_of_Spain',
        'America/Porto_Acre',
        'America/Porto_Velho',
        'America/Puerto_Rico',
        'America/Punta_Arenas',
        'America/Rainy_River',
        'America/Rankin_Inlet',
        'America/Recife',
        'America/Regina',
        'America/Resolute',
        'America/Rio_Branco',
        'America/Rosario',
        'America/Santa_Isabel',
        'America/Santarem',
        'America/Santiago',
        'America/Santo_Domingo',
        'America/Sao_Paulo',
        'America/Scoresbysund',
        'America/Shiprock',
        'America/Sitka',
        'America/St_Barthelemy',
        'America/St_Johns',
        'America/St_Kitts',
        'America/St_Lucia',
        'America/St_Thomas',
        'America/St_Vincent',
        'America/Swift_Current',
        'America/Tegucigalpa',
        'America/Thule',
        'America/Thunder_Bay',
        'America/Tijuana',
        'America/Toronto',
        'America/Tortola',
        'America/Vancouver',
        'America/Virgin',
        'America/Whitehorse',
        'America/Winnipeg',
        'America/Yakutat',
        'America/Yellowknife',
        'Antarctica/Casey',
        'Antarctica/Davis',
        'Antarctica/DumontDUrville',
        'Antarctica/Macquarie',
        'Antarctica/Mawson',
        'Antarctica/McMurdo',
        'Antarctica/Palmer',
        'Antarctica/Rothera',
        'Antarctica/South_Pole',
        'Antarctica/Syowa',
        'Antarctica/Troll',
        'Antarctica/Vostok',
        'Arctic/Longyearbyen',
        'Asia/Aden',
        'Asia/Almaty',
        'Asia/Amman',
        'Asia/Anadyr',
        'Asia/Aqtau',
        'Asia/Aqtobe',
        'Asia/Ashgabat',
        'Asia/Ashkhabad',
        'Asia/Atyrau',
        'Asia/Baghdad',
        'Asia/Bahrain',
        'Asia/Baku',
        'Asia/Bangkok',
        'Asia/Barnaul',
        'Asia/Beirut',
        'Asia/Bishkek',
        'Asia/Brunei',
        'Asia/Calcutta',
        'Asia/Chita',
        'Asia/Choibalsan',
        'Asia/Chongqing',
        'Asia/Chungking',
        'Asia/Colombo',
        'Asia/Dacca',
        'Asia/Damascus',
        'Asia/Dhaka',
        'Asia/Dili',
        'Asia/Dubai',
        'Asia/Dushanbe',
        'Asia/Famagusta',
        'Asia/Gaza',
        'Asia/Harbin',
        'Asia/Hebron',
        'Asia/Ho_Chi_Minh',
        'Asia/Hong_Kong',
        'Asia/Hovd',
        'Asia/Irkutsk',
        'Asia/Istanbul',
        'Asia/Jakarta',
        'Asia/Jayapura',
        'Asia/Jerusalem',
        'Asia/Kabul',
        'Asia/Kamchatka',
        'Asia/Karachi',
        'Asia/Kashgar',
        'Asia/Kathmandu',
        'Asia/Katmandu',
        'Asia/Khandyga',
        'Asia/Kolkata',
        'Asia/Krasnoyarsk',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Asia/Kuwait',
        'Asia/Macao',
        'Asia/Macau',
        'Asia/Magadan',
        'Asia/Makassar',
        'Asia/Manila',
        'Asia/Muscat',
        'Asia/Nicosia',
        'Asia/Novokuznetsk',
        'Asia/Novosibirsk',
        'Asia/Omsk',
        'Asia/Oral',
        'Asia/Phnom_Penh',
        'Asia/Pontianak',
        'Asia/Pyongyang',
        'Asia/Qatar',
        'Asia/Qostanay',
        'Asia/Qyzylorda',
        'Asia/Rangoon',
        'Asia/Riyadh',
        'Asia/Saigon',
        'Asia/Sakhalin',
        'Asia/Samarkand',
        'Asia/Seoul',
        'Asia/Shanghai',
        'Asia/Singapore',
        'Asia/Srednekolymsk',
        'Asia/Taipei',
        'Asia/Tashkent',
        'Asia/Tbilisi',
        'Asia/Tehran',
        'Asia/Tel_Aviv',
        'Asia/Thimbu',
        'Asia/Thimphu',
        'Asia/Tokyo',
        'Asia/Tomsk',
        'Asia/Ujung_Pandang',
        'Asia/Ulaanbaatar',
        'Asia/Ulan_Bator',
        'Asia/Urumqi',
        'Asia/Ust-Nera',
        'Asia/Vientiane',
        'Asia/Vladivostok',
        'Asia/Yakutsk',
        'Asia/Yangon',
        'Asia/Yekaterinburg',
        'Asia/Yerevan',
        'Atlantic/Azores',
        'Atlantic/Bermuda',
        'Atlantic/Canary',
        'Atlantic/Cape_Verde',
        'Atlantic/Faeroe',
        'Atlantic/Faroe',
        'Atlantic/Jan_Mayen',
        'Atlantic/Madeira',
        'Atlantic/Reykjavik',
        'Atlantic/South_Georgia',
        'Atlantic/St_Helena',
        'Atlantic/Stanley',
        'Australia/ACT',
        'Australia/Adelaide',
        'Australia/Brisbane',
        'Australia/Broken_Hill',
        'Australia/Canberra',
        'Australia/Currie',
        'Australia/Darwin',
        'Australia/Eucla',
        'Australia/Hobart',
        'Australia/LHI',
        'Australia/Lindeman',
        'Australia/Lord_Howe',
        'Australia/Melbourne',
        'Australia/NSW',
        'Australia/North',
        'Australia/Perth',
        'Australia/Queensland',
        'Australia/South',
        'Australia/Sydney',
        'Australia/Tasmania',
        'Australia/Victoria',
        'Australia/West',
        'Australia/Yancowinna',
        'Brazil/Acre',
        'Brazil/DeNoronha',
        'Brazil/East',
        'Brazil/West',
        'CET',
        'CST6CDT',
        'Canada/Atlantic',
        'Canada/Central',
        'Canada/Eastern',
        'Canada/Mountain',
        'Canada/Newfoundland',
        'Canada/Pacific',
        'Canada/Saskatchewan',
        'Canada/Yukon',
        'Chile/Continental',
        'Chile/EasterIsland',
        'Cuba',
        'EET',
        'EST',
        'EST5EDT',
        'Egypt',
        'Eire',
        'Etc/GMT',
        'Etc/GMT+0',
        'Etc/GMT+1',
        'Etc/GMT+10',
        'Etc/GMT+11',
        'Etc/GMT+12',
        'Etc/GMT+2',
        'Etc/GMT+3',
        'Etc/GMT+4',
        'Etc/GMT+5',
        'Etc/GMT+6',
        'Etc/GMT+7',
        'Etc/GMT+8',
        'Etc/GMT+9',
        'Etc/GMT-0',
        'Etc/GMT-1',
        'Etc/GMT-10',
        'Etc/GMT-11',
        'Etc/GMT-12',
        'Etc/GMT-13',
        'Etc/GMT-14',
        'Etc/GMT-2',
        'Etc/GMT-3',
        'Etc/GMT-4',
        'Etc/GMT-5',
        'Etc/GMT-6',
        'Etc/GMT-7',
        'Etc/GMT-8',
        'Etc/GMT-9',
        'Etc/GMT0',
        'Etc/Greenwich',
        'Etc/UCT',
        'Etc/UTC',
        'Etc/Universal',
        'Etc/Zulu',
        'Europe/Amsterdam',
        'Europe/Andorra',
        'Europe/Astrakhan',
        'Europe/Athens',
        'Europe/Belfast',
        'Europe/Belgrade',
        'Europe/Berlin',
        'Europe/Bratislava',
        'Europe/Brussels',
        'Europe/Bucharest',
        'Europe/Budapest',
        'Europe/Busingen',
        'Europe/Chisinau',
        'Europe/Copenhagen',
        'Europe/Dublin',
        'Europe/Gibraltar',
        'Europe/Guernsey',
        'Europe/Helsinki',
        'Europe/Isle_of_Man',
        'Europe/Istanbul',
        'Europe/Jersey',
        'Europe/Kaliningrad',
        'Europe/Kiev',
        'Europe/Kirov',
        'Europe/Kyiv',
        'Europe/Lisbon',
        'Europe/Ljubljana',
        'Europe/London',
        'Europe/Luxembourg',
        'Europe/Madrid',
        'Europe/Malta',
        'Europe/Mariehamn',
        'Europe/Minsk',
        'Europe/Monaco',
        'Europe/Moscow',
        'Europe/Nicosia',
        'Europe/Oslo',
        'Europe/Paris',
        'Europe/Podgorica',
        'Europe/Prague',
        'Europe/Riga',
        'Europe/Rome',
        'Europe/Samara',
        'Europe/San_Marino',
        'Europe/Sarajevo',
        'Europe/Saratov',
        'Europe/Simferopol',
        'Europe/Skopje',
        'Europe/Sofia',
        'Europe/Stockholm',
        'Europe/Tallinn',
        'Europe/Tirane',
        'Europe/Tiraspol',
        'Europe/Ulyanovsk',
        'Europe/Uzhgorod',
        'Europe/Vaduz',
        'Europe/Vatican',
        'Europe/Vienna',
        'Europe/Vilnius',
        'Europe/Volgograd',
        'Europe/Warsaw',
        'Europe/Zagreb',
        'Europe/Zaporozhye',
        'Europe/Zurich',
        'GB',
        'GB-Eire',
        'GMT',
        'GMT+0',
        'GMT-0',
        'GMT0',
        'Greenwich',
        'HST',
        'Hongkong',
        'Iceland',
        'Indian/Antananarivo',
        'Indian/Chagos',
        'Indian/Christmas',
        'Indian/Cocos',
        'Indian/Comoro',
        'Indian/Kerguelen',
        'Indian/Mahe',
        'Indian/Maldives',
        'Indian/Mauritius',
        'Indian/Mayotte',
        'Indian/Reunion',
        'Iran',
        'Israel',
        'Jamaica',
        'Japan',
        'Kwajalein',
        'Libya',
        'MET',
        'MST',
        'MST7MDT',
        'Mexico/BajaNorte',
        'Mexico/BajaSur',
        'Mexico/General',
        'NZ',
        'NZ-CHAT',
        'Navajo',
        'PRC',
        'PST8PDT',
        'Pacific/Apia',
        'Pacific/Auckland',
        'Pacific/Bougainville',
        'Pacific/Chatham',
        'Pacific/Chuuk',
        'Pacific/Easter',
        'Pacific/Efate',
        'Pacific/Enderbury',
        'Pacific/Fakaofo',
        'Pacific/Fiji',
        'Pacific/Funafuti',
        'Pacific/Galapagos',
        'Pacific/Gambier',
        'Pacific/Guadalcanal',
        'Pacific/Guam',
        'Pacific/Honolulu',
        'Pacific/Johnston',
        'Pacific/Kanton',
        'Pacific/Kiritimati',
        'Pacific/Kosrae',
        'Pacific/Kwajalein',
        'Pacific/Majuro',
        'Pacific/Marquesas',
        'Pacific/Midway',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Norfolk',
        'Pacific/Noumea',
        'Pacific/Pago_Pago',
        'Pacific/Palau',
        'Pacific/Pitcairn',
        'Pacific/Pohnpei',
        'Pacific/Ponape',
        'Pacific/Port_Moresby',
        'Pacific/Rarotonga',
        'Pacific/Saipan',
        'Pacific/Samoa',
        'Pacific/Tahiti',
        'Pacific/Tarawa',
        'Pacific/Tongatapu',
        'Pacific/Truk',
        'Pacific/Wake',
        'Pacific/Wallis',
        'Pacific/Yap',
        'Poland',
        'Portugal',
        'ROC',
        'ROK',
        'Singapore',
        'Turkey',
        'UCT',
        'US/Alaska',
        'US/Aleutian',
        'US/Arizona',
        'US/Central',
        'US/East-Indiana',
        'US/Eastern',
        'US/Hawaii',
        'US/Indiana-Starke',
        'US/Michigan',
        'US/Mountain',
        'US/Pacific',
        'US/Samoa',
        'UTC',
        'Universal',
        'W-SU',
        'WET',
        'Zulu',
      ])
      .exactOptional()
      .openapi({ description: 'A timezone string that represents the location of the timezone.' }),
    type: z.enum(['Alert', 'Report']).openapi({ description: 'The report schedule type' }),
    validator_config_json: ValidatorConfigJSONSchema.exactOptional(),
    validator_type: z
      .enum(['not null', 'operator'])
      .exactOptional()
      .openapi({
        description:
          'Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:\n- Not Null - When the return value is Not NULL, Empty, or 0\n- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=',
      }),
    working_timeout: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "If an alert is staled at a working state, how long until it's state is reset to error",
        example: 3600,
      }),
  })
  .openapi({ required: ['crontab', 'name', 'type'] })
  .openapi('ReportScheduleRestApiPost')

const ReportScheduleRestApiPutSchema = z
  .object({
    active: z.boolean().exactOptional(),
    chart: z.int().nullable().exactOptional(),
    context_markdown: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Markdown description' }),
    creation_method: z
      .union([
        z.literal('charts'),
        z.literal('dashboards'),
        z.literal('alerts_reports'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.',
      }),
    crontab: z
      .string()
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.',
      }),
    custom_width: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom width of the screenshot in pixels', example: 1000 }),
    dashboard: z.int().nullable().exactOptional(),
    database: z.int().nullable().exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use a nice description to give context to this Alert/Report',
        example: 'Daily sales dashboard to marketing',
      }),
    editors: z
      .array(
        z
          .xor([
            z.int().openapi({ description: 'Subject ID, not a user ID.' }),
            z
              .strictObject({
                id: z.int().min(1),
                type: z.enum(['user', 'role', 'group', 'subject']),
              })
              .openapi({ required: ['type', 'id'] }),
          ])
          .openapi({
            description: 'Subject IDs or explicit principal references that can alter the report.',
          }),
      )
      .exactOptional(),
    email_subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The report schedule subject line',
        example: '[Report]  Report name: Dashboard or chart name',
      }),
    extra: z.object({}).exactOptional(),
    force_screenshot: z.boolean().exactOptional(),
    grace_period: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)',
        example: 14400,
      }),
    include_cta: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Whether to include the call-to-action link back to Superset (e.g. 'Explore in Superset') in the delivered notifications",
      }),
    log_retention: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'How long to keep the logs around for this report (in days)',
        example: 90,
      }),
    name: z
      .string()
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({ description: 'The report schedule name.' }),
    recipients: z.array(ReportRecipientSchema).exactOptional(),
    report_format: z
      .enum(['PDF', 'PNG', 'CSV', 'XLSX', 'TEXT', 'NONE'])
      .exactOptional()
      .openapi({
        description:
          'Attachment format. NONE disables attachments for alerts and makes chart/dashboard optional. Omitted attachment settings are preserved on update.',
      }),
    retry_max_attempts: z
      .int()
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Maximum number of retry attempts (1–10)', example: 3 }),
    retry_notify_owners: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Notify report owners on each retry attempt' }),
    retry_notify_recipients: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Notify report recipients on each retry attempt' }),
    retry_on_failure: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable automatic retries on report failure' }),
    run_alert_query_as: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the user whose credentials are used when running the alert condition SQL query, useful when the audience of the alert does not have access to the database. Null inherits the content executor at execution time.',
      }),
    run_alert_query_as_type: z
      .union([z.literal('fixed_user'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Alert query executor type; null inherits run_as.' }),
    run_as: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the user whose credentials (RBAC permissions, database OAuth2 tokens) are used when rendering the content (screenshot, PDF, CSV, XLSX or text). Admins can set any active user; non-admins can only set themselves. Onlyhonored when the ALERT_REPORT_DYNAMIC_EXECUTOR feature flag is enabled. Admins can set this and run_as_type to null to use ALERT_REPORTS_EXECUTORS.',
      }),
    run_as_type: z
      .union([z.literal('fixed_user'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Explicit executor type; fixed_user requires run_as.' }),
    send_failed_reports: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Send the failed report to all recipients after retries are exhausted',
      }),
    sql: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.',
        example: 'SELECT value FROM time_series_table',
      }),
    timezone: z
      .enum([
        'Africa/Abidjan',
        'Africa/Accra',
        'Africa/Addis_Ababa',
        'Africa/Algiers',
        'Africa/Asmara',
        'Africa/Asmera',
        'Africa/Bamako',
        'Africa/Bangui',
        'Africa/Banjul',
        'Africa/Bissau',
        'Africa/Blantyre',
        'Africa/Brazzaville',
        'Africa/Bujumbura',
        'Africa/Cairo',
        'Africa/Casablanca',
        'Africa/Ceuta',
        'Africa/Conakry',
        'Africa/Dakar',
        'Africa/Dar_es_Salaam',
        'Africa/Djibouti',
        'Africa/Douala',
        'Africa/El_Aaiun',
        'Africa/Freetown',
        'Africa/Gaborone',
        'Africa/Harare',
        'Africa/Johannesburg',
        'Africa/Juba',
        'Africa/Kampala',
        'Africa/Khartoum',
        'Africa/Kigali',
        'Africa/Kinshasa',
        'Africa/Lagos',
        'Africa/Libreville',
        'Africa/Lome',
        'Africa/Luanda',
        'Africa/Lubumbashi',
        'Africa/Lusaka',
        'Africa/Malabo',
        'Africa/Maputo',
        'Africa/Maseru',
        'Africa/Mbabane',
        'Africa/Mogadishu',
        'Africa/Monrovia',
        'Africa/Nairobi',
        'Africa/Ndjamena',
        'Africa/Niamey',
        'Africa/Nouakchott',
        'Africa/Ouagadougou',
        'Africa/Porto-Novo',
        'Africa/Sao_Tome',
        'Africa/Timbuktu',
        'Africa/Tripoli',
        'Africa/Tunis',
        'Africa/Windhoek',
        'America/Adak',
        'America/Anchorage',
        'America/Anguilla',
        'America/Antigua',
        'America/Araguaina',
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Catamarca',
        'America/Argentina/ComodRivadavia',
        'America/Argentina/Cordoba',
        'America/Argentina/Jujuy',
        'America/Argentina/La_Rioja',
        'America/Argentina/Mendoza',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Salta',
        'America/Argentina/San_Juan',
        'America/Argentina/San_Luis',
        'America/Argentina/Tucuman',
        'America/Argentina/Ushuaia',
        'America/Aruba',
        'America/Asuncion',
        'America/Atikokan',
        'America/Atka',
        'America/Bahia',
        'America/Bahia_Banderas',
        'America/Barbados',
        'America/Belem',
        'America/Belize',
        'America/Blanc-Sablon',
        'America/Boa_Vista',
        'America/Bogota',
        'America/Boise',
        'America/Buenos_Aires',
        'America/Cambridge_Bay',
        'America/Campo_Grande',
        'America/Cancun',
        'America/Caracas',
        'America/Catamarca',
        'America/Cayenne',
        'America/Cayman',
        'America/Chicago',
        'America/Chihuahua',
        'America/Ciudad_Juarez',
        'America/Coral_Harbour',
        'America/Cordoba',
        'America/Costa_Rica',
        'America/Coyhaique',
        'America/Creston',
        'America/Cuiaba',
        'America/Curacao',
        'America/Danmarkshavn',
        'America/Dawson',
        'America/Dawson_Creek',
        'America/Denver',
        'America/Detroit',
        'America/Dominica',
        'America/Edmonton',
        'America/Eirunepe',
        'America/El_Salvador',
        'America/Ensenada',
        'America/Fort_Nelson',
        'America/Fort_Wayne',
        'America/Fortaleza',
        'America/Glace_Bay',
        'America/Godthab',
        'America/Goose_Bay',
        'America/Grand_Turk',
        'America/Grenada',
        'America/Guadeloupe',
        'America/Guatemala',
        'America/Guayaquil',
        'America/Guyana',
        'America/Halifax',
        'America/Havana',
        'America/Hermosillo',
        'America/Indiana/Indianapolis',
        'America/Indiana/Knox',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Tell_City',
        'America/Indiana/Vevay',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indianapolis',
        'America/Inuvik',
        'America/Iqaluit',
        'America/Jamaica',
        'America/Jujuy',
        'America/Juneau',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Knox_IN',
        'America/Kralendijk',
        'America/La_Paz',
        'America/Lima',
        'America/Los_Angeles',
        'America/Louisville',
        'America/Lower_Princes',
        'America/Maceio',
        'America/Managua',
        'America/Manaus',
        'America/Marigot',
        'America/Martinique',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Mendoza',
        'America/Menominee',
        'America/Merida',
        'America/Metlakatla',
        'America/Mexico_City',
        'America/Miquelon',
        'America/Moncton',
        'America/Monterrey',
        'America/Montevideo',
        'America/Montreal',
        'America/Montserrat',
        'America/Nassau',
        'America/New_York',
        'America/Nipigon',
        'America/Nome',
        'America/Noronha',
        'America/North_Dakota/Beulah',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/Nuuk',
        'America/Ojinaga',
        'America/Panama',
        'America/Pangnirtung',
        'America/Paramaribo',
        'America/Phoenix',
        'America/Port-au-Prince',
        'America/Port_of_Spain',
        'America/Porto_Acre',
        'America/Porto_Velho',
        'America/Puerto_Rico',
        'America/Punta_Arenas',
        'America/Rainy_River',
        'America/Rankin_Inlet',
        'America/Recife',
        'America/Regina',
        'America/Resolute',
        'America/Rio_Branco',
        'America/Rosario',
        'America/Santa_Isabel',
        'America/Santarem',
        'America/Santiago',
        'America/Santo_Domingo',
        'America/Sao_Paulo',
        'America/Scoresbysund',
        'America/Shiprock',
        'America/Sitka',
        'America/St_Barthelemy',
        'America/St_Johns',
        'America/St_Kitts',
        'America/St_Lucia',
        'America/St_Thomas',
        'America/St_Vincent',
        'America/Swift_Current',
        'America/Tegucigalpa',
        'America/Thule',
        'America/Thunder_Bay',
        'America/Tijuana',
        'America/Toronto',
        'America/Tortola',
        'America/Vancouver',
        'America/Virgin',
        'America/Whitehorse',
        'America/Winnipeg',
        'America/Yakutat',
        'America/Yellowknife',
        'Antarctica/Casey',
        'Antarctica/Davis',
        'Antarctica/DumontDUrville',
        'Antarctica/Macquarie',
        'Antarctica/Mawson',
        'Antarctica/McMurdo',
        'Antarctica/Palmer',
        'Antarctica/Rothera',
        'Antarctica/South_Pole',
        'Antarctica/Syowa',
        'Antarctica/Troll',
        'Antarctica/Vostok',
        'Arctic/Longyearbyen',
        'Asia/Aden',
        'Asia/Almaty',
        'Asia/Amman',
        'Asia/Anadyr',
        'Asia/Aqtau',
        'Asia/Aqtobe',
        'Asia/Ashgabat',
        'Asia/Ashkhabad',
        'Asia/Atyrau',
        'Asia/Baghdad',
        'Asia/Bahrain',
        'Asia/Baku',
        'Asia/Bangkok',
        'Asia/Barnaul',
        'Asia/Beirut',
        'Asia/Bishkek',
        'Asia/Brunei',
        'Asia/Calcutta',
        'Asia/Chita',
        'Asia/Choibalsan',
        'Asia/Chongqing',
        'Asia/Chungking',
        'Asia/Colombo',
        'Asia/Dacca',
        'Asia/Damascus',
        'Asia/Dhaka',
        'Asia/Dili',
        'Asia/Dubai',
        'Asia/Dushanbe',
        'Asia/Famagusta',
        'Asia/Gaza',
        'Asia/Harbin',
        'Asia/Hebron',
        'Asia/Ho_Chi_Minh',
        'Asia/Hong_Kong',
        'Asia/Hovd',
        'Asia/Irkutsk',
        'Asia/Istanbul',
        'Asia/Jakarta',
        'Asia/Jayapura',
        'Asia/Jerusalem',
        'Asia/Kabul',
        'Asia/Kamchatka',
        'Asia/Karachi',
        'Asia/Kashgar',
        'Asia/Kathmandu',
        'Asia/Katmandu',
        'Asia/Khandyga',
        'Asia/Kolkata',
        'Asia/Krasnoyarsk',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Asia/Kuwait',
        'Asia/Macao',
        'Asia/Macau',
        'Asia/Magadan',
        'Asia/Makassar',
        'Asia/Manila',
        'Asia/Muscat',
        'Asia/Nicosia',
        'Asia/Novokuznetsk',
        'Asia/Novosibirsk',
        'Asia/Omsk',
        'Asia/Oral',
        'Asia/Phnom_Penh',
        'Asia/Pontianak',
        'Asia/Pyongyang',
        'Asia/Qatar',
        'Asia/Qostanay',
        'Asia/Qyzylorda',
        'Asia/Rangoon',
        'Asia/Riyadh',
        'Asia/Saigon',
        'Asia/Sakhalin',
        'Asia/Samarkand',
        'Asia/Seoul',
        'Asia/Shanghai',
        'Asia/Singapore',
        'Asia/Srednekolymsk',
        'Asia/Taipei',
        'Asia/Tashkent',
        'Asia/Tbilisi',
        'Asia/Tehran',
        'Asia/Tel_Aviv',
        'Asia/Thimbu',
        'Asia/Thimphu',
        'Asia/Tokyo',
        'Asia/Tomsk',
        'Asia/Ujung_Pandang',
        'Asia/Ulaanbaatar',
        'Asia/Ulan_Bator',
        'Asia/Urumqi',
        'Asia/Ust-Nera',
        'Asia/Vientiane',
        'Asia/Vladivostok',
        'Asia/Yakutsk',
        'Asia/Yangon',
        'Asia/Yekaterinburg',
        'Asia/Yerevan',
        'Atlantic/Azores',
        'Atlantic/Bermuda',
        'Atlantic/Canary',
        'Atlantic/Cape_Verde',
        'Atlantic/Faeroe',
        'Atlantic/Faroe',
        'Atlantic/Jan_Mayen',
        'Atlantic/Madeira',
        'Atlantic/Reykjavik',
        'Atlantic/South_Georgia',
        'Atlantic/St_Helena',
        'Atlantic/Stanley',
        'Australia/ACT',
        'Australia/Adelaide',
        'Australia/Brisbane',
        'Australia/Broken_Hill',
        'Australia/Canberra',
        'Australia/Currie',
        'Australia/Darwin',
        'Australia/Eucla',
        'Australia/Hobart',
        'Australia/LHI',
        'Australia/Lindeman',
        'Australia/Lord_Howe',
        'Australia/Melbourne',
        'Australia/NSW',
        'Australia/North',
        'Australia/Perth',
        'Australia/Queensland',
        'Australia/South',
        'Australia/Sydney',
        'Australia/Tasmania',
        'Australia/Victoria',
        'Australia/West',
        'Australia/Yancowinna',
        'Brazil/Acre',
        'Brazil/DeNoronha',
        'Brazil/East',
        'Brazil/West',
        'CET',
        'CST6CDT',
        'Canada/Atlantic',
        'Canada/Central',
        'Canada/Eastern',
        'Canada/Mountain',
        'Canada/Newfoundland',
        'Canada/Pacific',
        'Canada/Saskatchewan',
        'Canada/Yukon',
        'Chile/Continental',
        'Chile/EasterIsland',
        'Cuba',
        'EET',
        'EST',
        'EST5EDT',
        'Egypt',
        'Eire',
        'Etc/GMT',
        'Etc/GMT+0',
        'Etc/GMT+1',
        'Etc/GMT+10',
        'Etc/GMT+11',
        'Etc/GMT+12',
        'Etc/GMT+2',
        'Etc/GMT+3',
        'Etc/GMT+4',
        'Etc/GMT+5',
        'Etc/GMT+6',
        'Etc/GMT+7',
        'Etc/GMT+8',
        'Etc/GMT+9',
        'Etc/GMT-0',
        'Etc/GMT-1',
        'Etc/GMT-10',
        'Etc/GMT-11',
        'Etc/GMT-12',
        'Etc/GMT-13',
        'Etc/GMT-14',
        'Etc/GMT-2',
        'Etc/GMT-3',
        'Etc/GMT-4',
        'Etc/GMT-5',
        'Etc/GMT-6',
        'Etc/GMT-7',
        'Etc/GMT-8',
        'Etc/GMT-9',
        'Etc/GMT0',
        'Etc/Greenwich',
        'Etc/UCT',
        'Etc/UTC',
        'Etc/Universal',
        'Etc/Zulu',
        'Europe/Amsterdam',
        'Europe/Andorra',
        'Europe/Astrakhan',
        'Europe/Athens',
        'Europe/Belfast',
        'Europe/Belgrade',
        'Europe/Berlin',
        'Europe/Bratislava',
        'Europe/Brussels',
        'Europe/Bucharest',
        'Europe/Budapest',
        'Europe/Busingen',
        'Europe/Chisinau',
        'Europe/Copenhagen',
        'Europe/Dublin',
        'Europe/Gibraltar',
        'Europe/Guernsey',
        'Europe/Helsinki',
        'Europe/Isle_of_Man',
        'Europe/Istanbul',
        'Europe/Jersey',
        'Europe/Kaliningrad',
        'Europe/Kiev',
        'Europe/Kirov',
        'Europe/Kyiv',
        'Europe/Lisbon',
        'Europe/Ljubljana',
        'Europe/London',
        'Europe/Luxembourg',
        'Europe/Madrid',
        'Europe/Malta',
        'Europe/Mariehamn',
        'Europe/Minsk',
        'Europe/Monaco',
        'Europe/Moscow',
        'Europe/Nicosia',
        'Europe/Oslo',
        'Europe/Paris',
        'Europe/Podgorica',
        'Europe/Prague',
        'Europe/Riga',
        'Europe/Rome',
        'Europe/Samara',
        'Europe/San_Marino',
        'Europe/Sarajevo',
        'Europe/Saratov',
        'Europe/Simferopol',
        'Europe/Skopje',
        'Europe/Sofia',
        'Europe/Stockholm',
        'Europe/Tallinn',
        'Europe/Tirane',
        'Europe/Tiraspol',
        'Europe/Ulyanovsk',
        'Europe/Uzhgorod',
        'Europe/Vaduz',
        'Europe/Vatican',
        'Europe/Vienna',
        'Europe/Vilnius',
        'Europe/Volgograd',
        'Europe/Warsaw',
        'Europe/Zagreb',
        'Europe/Zaporozhye',
        'Europe/Zurich',
        'GB',
        'GB-Eire',
        'GMT',
        'GMT+0',
        'GMT-0',
        'GMT0',
        'Greenwich',
        'HST',
        'Hongkong',
        'Iceland',
        'Indian/Antananarivo',
        'Indian/Chagos',
        'Indian/Christmas',
        'Indian/Cocos',
        'Indian/Comoro',
        'Indian/Kerguelen',
        'Indian/Mahe',
        'Indian/Maldives',
        'Indian/Mauritius',
        'Indian/Mayotte',
        'Indian/Reunion',
        'Iran',
        'Israel',
        'Jamaica',
        'Japan',
        'Kwajalein',
        'Libya',
        'MET',
        'MST',
        'MST7MDT',
        'Mexico/BajaNorte',
        'Mexico/BajaSur',
        'Mexico/General',
        'NZ',
        'NZ-CHAT',
        'Navajo',
        'PRC',
        'PST8PDT',
        'Pacific/Apia',
        'Pacific/Auckland',
        'Pacific/Bougainville',
        'Pacific/Chatham',
        'Pacific/Chuuk',
        'Pacific/Easter',
        'Pacific/Efate',
        'Pacific/Enderbury',
        'Pacific/Fakaofo',
        'Pacific/Fiji',
        'Pacific/Funafuti',
        'Pacific/Galapagos',
        'Pacific/Gambier',
        'Pacific/Guadalcanal',
        'Pacific/Guam',
        'Pacific/Honolulu',
        'Pacific/Johnston',
        'Pacific/Kanton',
        'Pacific/Kiritimati',
        'Pacific/Kosrae',
        'Pacific/Kwajalein',
        'Pacific/Majuro',
        'Pacific/Marquesas',
        'Pacific/Midway',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Norfolk',
        'Pacific/Noumea',
        'Pacific/Pago_Pago',
        'Pacific/Palau',
        'Pacific/Pitcairn',
        'Pacific/Pohnpei',
        'Pacific/Ponape',
        'Pacific/Port_Moresby',
        'Pacific/Rarotonga',
        'Pacific/Saipan',
        'Pacific/Samoa',
        'Pacific/Tahiti',
        'Pacific/Tarawa',
        'Pacific/Tongatapu',
        'Pacific/Truk',
        'Pacific/Wake',
        'Pacific/Wallis',
        'Pacific/Yap',
        'Poland',
        'Portugal',
        'ROC',
        'ROK',
        'Singapore',
        'Turkey',
        'UCT',
        'US/Alaska',
        'US/Aleutian',
        'US/Arizona',
        'US/Central',
        'US/East-Indiana',
        'US/Eastern',
        'US/Hawaii',
        'US/Indiana-Starke',
        'US/Michigan',
        'US/Mountain',
        'US/Pacific',
        'US/Samoa',
        'UTC',
        'Universal',
        'W-SU',
        'WET',
        'Zulu',
      ])
      .exactOptional()
      .openapi({ description: 'A timezone string that represents the location of the timezone.' }),
    type: z
      .enum(['Alert', 'Report'])
      .exactOptional()
      .openapi({ description: 'The report schedule type' }),
    validator_config_json: ValidatorConfigJSONSchema.exactOptional(),
    validator_type: z
      .union([z.literal('not null'), z.literal('operator'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:\n- Not Null - When the return value is Not NULL, Empty, or 0\n- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=',
      }),
    working_timeout: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "If an alert is staled at a working state, how long until it's state is reset to error",
        example: 3600,
      }),
  })
  .openapi({ required: [] })
  .openapi('ReportScheduleRestApiPut')

const RoleGroupPutSchemaSchema = z
  .object({ group_ids: z.array(z.int()).openapi({ description: 'List of group ids' }) })
  .openapi({ required: ['group_ids'] })
  .openapi('RoleGroupPutSchema')

const RolePermissionListSchemaSchema = z
  .object({
    id: z.int().exactOptional(),
    permission_name: z.string().exactOptional(),
    view_menu_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RolePermissionListSchema')

const RolePermissionPostSchemaSchema = z
  .object({
    permission_view_menu_ids: z
      .array(z.int())
      .openapi({ description: 'List of permission view menu id' }),
  })
  .openapi({ required: ['permission_view_menu_ids'] })
  .openapi('RolePermissionPostSchema')

const RoleResponseSchemaSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    permission_ids: z.array(z.int()).exactOptional(),
    user_ids: z.array(z.int()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoleResponseSchema')

const RoleUserPutSchemaSchema = z
  .object({ user_ids: z.array(z.int()).openapi({ description: 'List of user ids' }) })
  .openapi({ required: ['user_ids'] })
  .openapi('RoleUserPutSchema')

const RolesResponseSchemaSchema = z
  .object({
    count: z.int().exactOptional(),
    ids: z.array(z.int()).exactOptional(),
    result: z.array(RoleResponseSchemaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RolesResponseSchema')

const SQLLabBootstrapDatabaseSchema = z
  .object({
    allow_ctas: z.boolean().exactOptional(),
    allow_cvas: z.boolean().exactOptional(),
    allow_dml: z.boolean().exactOptional(),
    allow_file_upload: z.boolean().exactOptional(),
    allow_multi_catalog: z.boolean().exactOptional(),
    allow_run_async: z.boolean().exactOptional(),
    allows_cost_estimate: z.boolean().nullable().exactOptional(),
    allows_subquery: z.boolean().exactOptional(),
    allows_virtual_table_explore: z.boolean().exactOptional(),
    backend: z.string().exactOptional().openapi({ description: 'The database backend' }),
    database_name: z.string().exactOptional().openapi({ description: 'The database name' }),
    disable_data_preview: z.boolean().exactOptional(),
    disable_drill_to_detail: z.boolean().exactOptional(),
    engine_information: EngineInformationSchema.exactOptional().openapi({
      description: 'Dialect capabilities, including identifier_quote',
    }),
    expose_in_sqllab: z.boolean().exactOptional(),
    force_ctas_schema: z.string().nullable().exactOptional(),
    id: z.int().exactOptional().openapi({ description: 'The database id' }),
  })
  .openapi({ required: [] })
  .openapi('SQLLabBootstrapDatabase')

const TableSchema = z
  .object({
    database_id: z.int().exactOptional(),
    description: z.string().exactOptional(),
    expanded: z.boolean().exactOptional(),
    id: z.int().exactOptional(),
    schema: z.string().exactOptional(),
    tab_state_id: z.int().exactOptional(),
    table: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Table')

const TabStateSchema = z
  .object({
    active: z.boolean().exactOptional(),
    autorun: z.boolean().exactOptional(),
    database_id: z.int().exactOptional(),
    extra_json: z.object({}).exactOptional(),
    hide_left_bar: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    label: z.string().exactOptional(),
    latest_query: QueryResultSchema.exactOptional(),
    query_limit: z.int().exactOptional(),
    saved_query: z.object({}).nullable().exactOptional(),
    schema: z.string().exactOptional(),
    sql: z.string().exactOptional(),
    table_schemas: z.array(TableSchema).exactOptional(),
    user_id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TabState')

const SQLLabBootstrapSchemaSchema = z
  .object({
    active_tab: TabStateSchema.exactOptional(),
    databases: z.record(z.string(), SQLLabBootstrapDatabaseSchema).exactOptional(),
    queries: z.record(z.string(), QueryResultSchema).exactOptional(),
    tab_state_ids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SQLLabBootstrapSchema')

const SavedQueryRestApiGetUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('SavedQueryRestApiGetUser')

const SavedQueryRestApiGetUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('SavedQueryRestApiGetUser1')

const SavedQueryRestApiGetDatabaseSchema = z
  .object({ database_name: z.string().max(250), id: z.int().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('SavedQueryRestApiGetDatabase')

const SavedQueryRestApiGetSchema = z
  .object({
    catalog: z.string().max(256).nullable().exactOptional(),
    changed_by: SavedQueryRestApiGetUserSchema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: SavedQueryRestApiGetUser1Schema.exactOptional(),
    database: SavedQueryRestApiGetDatabaseSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_tables: z.any().exactOptional().openapi({ readOnly: true }),
    template_parameters: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiGet')

const SavedQueryRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('SavedQueryRestApiGetListUser')

const SavedQueryRestApiGetListUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('SavedQueryRestApiGetListUser1')

const SavedQueryRestApiGetListDatabaseSchema = z
  .object({ database_name: z.string().max(250), id: z.int().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('SavedQueryRestApiGetListDatabase')

const SavedQueryRestApiGetListTagSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiGetListTag')

const SavedQueryRestApiGetListSchema = z
  .object({
    catalog: z.string().max(256).nullable().exactOptional(),
    changed_by: SavedQueryRestApiGetListUserSchema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: SavedQueryRestApiGetListUser1Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    database: SavedQueryRestApiGetListDatabaseSchema.exactOptional(),
    db_id: z.any().nullable().default(null).exactOptional(),
    description: z.string().nullable().exactOptional(),
    extra: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    last_run_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    rows: z.int().nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_tables: z.any().exactOptional().openapi({ readOnly: true }),
    tags: z.array(SavedQueryRestApiGetListTagSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiGetList')

const SavedQueryRestApiPostSchema = z
  .object({
    catalog: z.string().max(256).nullable().exactOptional(),
    db_id: z.any().nullable().default(null).exactOptional(),
    description: z.string().nullable().exactOptional(),
    extra_json: z.string().nullable().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    template_parameters: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiPost')

const SavedQueryRestApiPutSchema = z
  .object({
    catalog: z.string().max(256).nullable().exactOptional(),
    db_id: z.any().nullable().default(null).exactOptional(),
    description: z.string().nullable().exactOptional(),
    extra_json: z.string().nullable().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    template_parameters: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiPut')

const SchemasResponseSchemaSchema = z
  .object({
    result: z.array(z.string().openapi({ description: 'A database schema name' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchemasResponseSchema')

const SelectStarResponseSchemaSchema = z
  .object({ result: z.string().exactOptional().openapi({ description: 'SQL select star' }) })
  .openapi({ required: [] })
  .openapi('SelectStarResponseSchema')

const SemanticViewRestApiGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SemanticViewRestApiGet')

const SemanticViewRestApiGetListSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SemanticViewRestApiGetList')

const SemanticViewRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SemanticViewRestApiPost')

const SemanticViewRestApiPutSchema = z
  .object({
    cache_timeout: z.int().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SemanticViewRestApiPut')

const SqlLabPermalinkSchemaSchema = z
  .object({
    autorun: z.boolean().exactOptional(),
    catalog: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The catalog name of the query' }),
    dbId: z.int().openapi({ description: 'The id of the database' }),
    name: z.string().openapi({ description: 'The label of the editor tab' }),
    schema: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The schema name of the query' }),
    sql: z.string().openapi({ description: 'SQL query text' }),
    templateParams: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'stringfied JSON string for template parameters' }),
  })
  .openapi({ required: ['dbId', 'name', 'sql'] })
  .openapi('SqlLabPermalinkSchema')

const StopQuerySchemaSchema = z
  .object({ client_id: z.string() })
  .openapi({ required: ['client_id'] })
  .openapi('StopQuerySchema')

const SubjectRestApiGetUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('SubjectRestApiGetUser1')

const SubjectRestApiGetGroupSchema = z
  .object({
    description: z.string().max(512).nullable().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().max(150).nullable().exactOptional(),
    name: z.string().max(100),
  })
  .openapi({ required: ['name'] })
  .openapi('SubjectRestApiGetGroup')

const SubjectRestApiGetRoleSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SubjectRestApiGetRole')

const SubjectRestApiGetUserSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    email: z.string().max(320),
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(128),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'username'] })
  .openapi('SubjectRestApiGetUser')

const SubjectRestApiGetSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_by: SubjectRestApiGetUser1Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    extra_search: z.string().max(255).nullable().exactOptional(),
    group: SubjectRestApiGetGroupSchema.exactOptional(),
    group_id: z.any().nullable().default(null).exactOptional(),
    id: z.int().exactOptional(),
    img: z.any().exactOptional().openapi({ readOnly: true }),
    label: z.string().max(255),
    role: SubjectRestApiGetRoleSchema.exactOptional(),
    role_id: z.any().nullable().default(null).exactOptional(),
    secondary_label: z.string().max(255).nullable().exactOptional(),
    type: z.int(),
    user: SubjectRestApiGetUserSchema.exactOptional(),
    user_id: z.any().nullable().default(null).exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['label', 'type'] })
  .openapi('SubjectRestApiGet')

const SubjectRestApiGetListUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('SubjectRestApiGetListUser')

const SubjectRestApiGetListSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_by: SubjectRestApiGetListUserSchema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    extra_search: z.string().max(255).nullable().exactOptional(),
    group_id: z.any().nullable().default(null).exactOptional(),
    id: z.int().exactOptional(),
    img: z.any().exactOptional().openapi({ readOnly: true }),
    label: z.string().max(255),
    role_id: z.any().nullable().default(null).exactOptional(),
    secondary_label: z.string().max(255).nullable().exactOptional(),
    type: z.int(),
    user_id: z.any().nullable().default(null).exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: ['label', 'type'] })
  .openapi('SubjectRestApiGetList')

const SubjectRestApiPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SubjectRestApiPost')

const SubjectRestApiPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SubjectRestApiPut')

const SupersetGroupApiGetRoleSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetGroupApiGetRole')

const SupersetGroupApiGetUserSchema = z
  .object({ id: z.int().exactOptional(), username: z.string().max(128) })
  .openapi({ required: ['username'] })
  .openapi('SupersetGroupApiGetUser')

const SupersetGroupApiGetSchema = z
  .object({
    description: z.string().max(512).nullable().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().max(150).nullable().exactOptional(),
    name: z.string().max(100),
    roles: z.array(SupersetGroupApiGetRoleSchema).exactOptional(),
    users: z.array(SupersetGroupApiGetUserSchema).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('SupersetGroupApiGet')

const SupersetGroupApiGetListRoleSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetGroupApiGetListRole')

const SupersetGroupApiGetListUserSchema = z
  .object({ id: z.int().exactOptional(), username: z.string().max(128) })
  .openapi({ required: ['username'] })
  .openapi('SupersetGroupApiGetListUser')

const SupersetGroupApiGetListSchema = z
  .object({
    description: z.string().max(512).nullable().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().max(150).nullable().exactOptional(),
    name: z.string().max(100),
    roles: z.array(SupersetGroupApiGetListRoleSchema).exactOptional(),
    users: z.array(SupersetGroupApiGetListUserSchema).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('SupersetGroupApiGetList')

const SupersetGroupApiPostSchema = z
  .object({
    description: z
      .string()
      .min(0)
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group description' }),
    label: z
      .string()
      .min(0)
      .max(150)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group label' }),
    name: z.string().min(1).max(100).openapi({ description: 'Group name' }),
    roles: z.array(z.int()).exactOptional().openapi({ description: 'Group roles' }),
    users: z.array(z.int()).exactOptional().openapi({ description: 'Group users' }),
  })
  .openapi({ required: ['name'] })
  .openapi('SupersetGroupApiPost')

const SupersetGroupApiPutSchema = z
  .object({
    description: z
      .string()
      .min(0)
      .max(512)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group description' }),
    label: z
      .string()
      .min(0)
      .max(150)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group label' }),
    name: z.string().min(1).max(100).exactOptional().openapi({ description: 'Group name' }),
    roles: z.array(z.int()).exactOptional().openapi({ description: 'Group roles' }),
    users: z.array(z.int()).exactOptional().openapi({ description: 'Group users' }),
  })
  .openapi({ required: [] })
  .openapi('SupersetGroupApiPut')

const SupersetPermissionViewMenuApiGetPermissionSchema = z
  .object({ name: z.string().max(100) })
  .openapi({ required: ['name'] })
  .openapi('SupersetPermissionViewMenuApiGetPermission')

const SupersetPermissionViewMenuApiGetViewMenuSchema = z
  .object({ name: z.string().max(250) })
  .openapi({ required: ['name'] })
  .openapi('SupersetPermissionViewMenuApiGetViewMenu')

const SupersetPermissionViewMenuApiGetSchema = z
  .object({
    id: z.int().exactOptional(),
    permission: SupersetPermissionViewMenuApiGetPermissionSchema,
    view_menu: SupersetPermissionViewMenuApiGetViewMenuSchema,
  })
  .openapi({ required: ['permission', 'view_menu'] })
  .openapi('SupersetPermissionViewMenuApiGet')

const SupersetPermissionViewMenuApiGetListPermissionSchema = z
  .object({ name: z.string().max(100) })
  .openapi({ required: ['name'] })
  .openapi('SupersetPermissionViewMenuApiGetListPermission')

const SupersetPermissionViewMenuApiGetListViewMenuSchema = z
  .object({ name: z.string().max(250) })
  .openapi({ required: ['name'] })
  .openapi('SupersetPermissionViewMenuApiGetListViewMenu')

const SupersetPermissionViewMenuApiGetListSchema = z
  .object({
    id: z.int().exactOptional(),
    permission: SupersetPermissionViewMenuApiGetListPermissionSchema,
    view_menu: SupersetPermissionViewMenuApiGetListViewMenuSchema,
  })
  .openapi({ required: ['permission', 'view_menu'] })
  .openapi('SupersetPermissionViewMenuApiGetList')

const SupersetPermissionViewMenuApiPostSchema = z
  .object({
    permission_id: z.any().nullable().default(null).exactOptional(),
    view_menu_id: z.any().nullable().default(null).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SupersetPermissionViewMenuApiPost')

const SupersetPermissionViewMenuApiPutSchema = z
  .object({
    permission_id: z.any().nullable().default(null).exactOptional(),
    view_menu_id: z.any().nullable().default(null).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SupersetPermissionViewMenuApiPut')

const SupersetRoleApiGetSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetRoleApiGet')

const SupersetRoleApiGetListSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetRoleApiGetList')

const SupersetRoleApiPostSchema = z
  .object({ name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetRoleApiPost')

const SupersetRoleApiPutSchema = z
  .object({ name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetRoleApiPut')

const SupersetUserApiGetUser1Schema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SupersetUserApiGetUser1')

const SupersetUserApiGetUserSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SupersetUserApiGetUser')

const SupersetUserApiGetGroupSchema = z
  .object({
    description: z.string().max(512).nullable().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().max(150).nullable().exactOptional(),
    name: z.string().max(100),
  })
  .openapi({ required: ['name'] })
  .openapi('SupersetUserApiGetGroup')

const SupersetUserApiGetRoleSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetUserApiGetRole')

const SupersetUserApiGetSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_by: SupersetUserApiGetUser1Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_by: SupersetUserApiGetUserSchema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    email: z.string().max(320),
    fail_login_count: z.int().nullable().exactOptional(),
    first_name: z.string().max(64),
    groups: z.array(SupersetUserApiGetGroupSchema).exactOptional(),
    id: z.int().exactOptional(),
    last_login: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_name: z.string().max(64),
    login_count: z.int().nullable().exactOptional(),
    roles: z.array(SupersetUserApiGetRoleSchema).exactOptional(),
    username: z.string().max(128),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'username'] })
  .openapi('SupersetUserApiGet')

const SupersetUserApiGetListUser1Schema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SupersetUserApiGetListUser1')

const SupersetUserApiGetListUserSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('SupersetUserApiGetListUser')

const SupersetUserApiGetListGroupSchema = z
  .object({
    description: z.string().max(512).nullable().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().max(150).nullable().exactOptional(),
    name: z.string().max(100),
  })
  .openapi({ required: ['name'] })
  .openapi('SupersetUserApiGetListGroup')

const SupersetUserApiGetListRoleSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('SupersetUserApiGetListRole')

const SupersetUserApiGetListSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_by: SupersetUserApiGetListUser1Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_by: SupersetUserApiGetListUserSchema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    email: z.string().max(320),
    fail_login_count: z.int().nullable().exactOptional(),
    first_name: z.string().max(64),
    groups: z.array(SupersetUserApiGetListGroupSchema).exactOptional(),
    id: z.int().exactOptional(),
    last_login: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_name: z.string().max(64),
    login_count: z.int().nullable().exactOptional(),
    roles: z.array(SupersetUserApiGetListRoleSchema).exactOptional(),
    username: z.string().max(128),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'username'] })
  .openapi('SupersetUserApiGetList')

const SupersetUserApiPostSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Is user active?It's not a good policy to remove a user, just make it inactive",
      }),
    email: z.string().openapi({ description: "The user's email" }),
    first_name: z.string().openapi({ description: "The user's first name" }),
    groups: z.array(z.int()).exactOptional().openapi({ description: "The user's roles" }),
    last_name: z.string().openapi({ description: "The user's last name" }),
    password: z.string().openapi({ description: "The user's password for authentication" }),
    roles: z.array(z.int()).exactOptional().openapi({ description: "The user's roles" }),
    username: z.string().min(1).max(250).openapi({ description: "The user's username" }),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'password', 'username'] })
  .openapi('SupersetUserApiPost')

const SupersetUserApiPutSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Is user active?It's not a good policy to remove a user, just make it inactive",
      }),
    email: z.string().exactOptional().openapi({ description: "The user's email" }),
    first_name: z.string().exactOptional().openapi({ description: "The user's first name" }),
    groups: z.array(z.int()).exactOptional().openapi({ description: "The user's roles" }),
    last_name: z.string().exactOptional().openapi({ description: "The user's last name" }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's password for authentication" }),
    roles: z.array(z.int()).exactOptional().openapi({ description: "The user's roles" }),
    username: z
      .string()
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({ description: "The user's username" }),
  })
  .openapi({ required: [] })
  .openapi('SupersetUserApiPut')

const TabSchema: z.ZodType<TabType> = z
  .lazy(() =>
    z
      .object({
        children: z.array(TabSchema).exactOptional(),
        parents: z.array(z.string()).exactOptional(),
        title: z.string().exactOptional(),
        value: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Tab')

const TableExtraMetadataResponseSchemaSchema = z
  .object({
    clustering: z.object({}).exactOptional(),
    metadata: z.object({}).exactOptional(),
    partitions: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableExtraMetadataResponseSchema')

const TableMetadataColumnsResponseSchema = z
  .object({
    duplicates_constraint: z.string().exactOptional(),
    keys: z.array(z.string()).exactOptional().openapi({ description: '' }),
    longType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual backend long type for the column' }),
    name: z.string().exactOptional().openapi({ description: 'The column name' }),
    type: z.string().exactOptional().openapi({ description: 'The column type' }),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataColumnsResponse')

const TableMetadataOptionsResponseSchema = z
  .object({
    deferrable: z.boolean().exactOptional(),
    initially: z.boolean().exactOptional(),
    match: z.boolean().exactOptional(),
    ondelete: z.boolean().exactOptional(),
    onupdate: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataOptionsResponse')

const TableMetadataForeignKeysIndexesResponseSchema = z
  .object({
    column_names: z
      .array(
        z
          .string()
          .openapi({
            description: 'A list of column names that compose the foreign key or  index',
          }),
      )
      .exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the foreign key or index' }),
    options: TableMetadataOptionsResponseSchema.exactOptional(),
    referred_columns: z.array(z.string()).exactOptional(),
    referred_schema: z.string().exactOptional(),
    referred_table: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataForeignKeysIndexesResponse')

const TableMetadataPrimaryKeyResponseSchema = z
  .object({
    column_names: z
      .array(
        z.string().openapi({ description: 'A list of column names that compose the primary key' }),
      )
      .exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The primary key index name' }),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataPrimaryKeyResponse')

const TableMetadataResponseSchemaSchema = z
  .object({
    columns: z
      .array(TableMetadataColumnsResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of columns and their metadata' }),
    foreignKeys: z
      .array(TableMetadataForeignKeysIndexesResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of foreign keys and their metadata' }),
    indexes: z
      .array(TableMetadataForeignKeysIndexesResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of indexes and their metadata' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the table' }),
    primaryKey: TableMetadataPrimaryKeyResponseSchema.exactOptional().openapi({
      description: 'Primary keys metadata',
    }),
    selectStar: z.string().exactOptional().openapi({ description: 'SQL select star' }),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataResponseSchema')

const TabsPayloadSchemaSchema = z
  .object({
    all_tabs: z.record(z.string(), z.string()).exactOptional(),
    tab_tree: z.array(TabSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TabsPayloadSchema')

const TagGetResponseSchemaSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagGetResponseSchema')

const TagObjectSchema = z
  .object({
    description: z.string().nullable().exactOptional(),
    name: z.string().min(1).exactOptional(),
    objects_to_tag: z.array(z.any()).exactOptional().openapi({ description: 'Objects to tag' }),
  })
  .openapi({ required: [] })
  .openapi('TagObject')

const TagPostBulkResponseObjectSchema = z
  .object({
    objects_skipped: z.array(z.any()).exactOptional().openapi({ description: 'Objects to tag' }),
    objects_tagged: z.array(z.any()).exactOptional().openapi({ description: 'Objects to tag' }),
  })
  .openapi({ required: [] })
  .openapi('TagPostBulkResponseObject')

const TagPostBulkResponseSchemaSchema = z
  .object({ result: TagPostBulkResponseObjectSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TagPostBulkResponseSchema')

const TagPostBulkSchemaSchema = z
  .object({ tags: z.array(TagObjectSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TagPostBulkSchema')

const TagRestApiGetUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('TagRestApiGetUser')

const TagRestApiGetUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('TagRestApiGetUser1')

const TagRestApiGetSchema = z
  .object({
    changed_by: TagRestApiGetUserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: TagRestApiGetUser1Schema.exactOptional(),
    created_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    description: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagRestApiGet')

const TagRestApiGetListUserSchema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('TagRestApiGetListUser')

const TagRestApiGetListUser1Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('TagRestApiGetListUser1')

const TagRestApiGetListSchema = z
  .object({
    changed_by: TagRestApiGetListUserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: TagRestApiGetListUser1Schema.exactOptional(),
    created_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    description: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagRestApiGetList')

const TagRestApiPostSchema = z
  .object({
    description: z.string().nullable().exactOptional(),
    name: z.string().min(1).exactOptional(),
    objects_to_tag: z.array(z.any()).exactOptional().openapi({ description: 'Objects to tag' }),
  })
  .openapi({ required: [] })
  .openapi('TagRestApiPost')

const TagRestApiPutSchema = z
  .object({
    description: z.string().nullable().exactOptional(),
    name: z.string().min(1).exactOptional(),
    objects_to_tag: z.array(z.any()).exactOptional().openapi({ description: 'Objects to tag' }),
  })
  .openapi({ required: [] })
  .openapi('TagRestApiPut')

const TaggedObjectEntityResponseSchemaSchema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).exactOptional(),
    created_by: UserSchema.exactOptional(),
    creator: z.string().exactOptional(),
    editors: z.array(SubjectResponseSchema).exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    tags: z.array(TagGetResponseSchemaSchema).exactOptional(),
    type: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaggedObjectEntityResponseSchema')

const TemporaryCachePostSchemaSchema = z
  .object({ value: z.string().openapi({ description: 'Any type of JSON supported text.' }) })
  .openapi({ required: ['value'] })
  .openapi('TemporaryCachePostSchema')

const TemporaryCachePutSchemaSchema = z
  .object({ value: z.string().openapi({ description: 'Any type of JSON supported text.' }) })
  .openapi({ required: ['value'] })
  .openapi('TemporaryCachePutSchema')

const ThemeRestApiGetUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ThemeRestApiGetUser')

const ThemeRestApiGetUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ThemeRestApiGetUser1')

const ThemeRestApiGetSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ThemeRestApiGetSubject')

const ThemeRestApiGetSchema = z
  .object({
    changed_by: ThemeRestApiGetUserSchema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: ThemeRestApiGetUser1Schema.exactOptional(),
    editors: z.array(ThemeRestApiGetSubjectSchema).exactOptional(),
    id: z.int().exactOptional(),
    is_system: z.boolean().exactOptional(),
    is_system_dark: z.boolean().exactOptional(),
    is_system_default: z.boolean().exactOptional(),
    json_data: z.string().nullable().exactOptional(),
    theme_name: z.string().max(250).nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ThemeRestApiGet')

const ThemeRestApiGetListUserSchema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ThemeRestApiGetListUser')

const ThemeRestApiGetListUser1Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('ThemeRestApiGetListUser1')

const ThemeRestApiGetListSubjectSchema = z
  .object({ id: z.int().exactOptional(), label: z.string().max(255), type: z.int() })
  .openapi({ required: ['label', 'type'] })
  .openapi('ThemeRestApiGetListSubject')

const ThemeRestApiGetListSchema = z
  .object({
    changed_by: ThemeRestApiGetListUserSchema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: ThemeRestApiGetListUser1Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    editors: z.array(ThemeRestApiGetListSubjectSchema).exactOptional(),
    id: z.int().exactOptional(),
    is_system: z.boolean().exactOptional(),
    is_system_dark: z.boolean().exactOptional(),
    is_system_default: z.boolean().exactOptional(),
    json_data: z.string().nullable().exactOptional(),
    theme_name: z.string().max(250).nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ThemeRestApiGetList')

const ThemeRestApiPostSchema = z
  .object({
    editors: z
      .array(
        z
          .int()
          .openapi({
            description:
              'A list of subject IDs (users, roles, or groups) that are allowed to edit this theme.',
          }),
      )
      .exactOptional(),
    json_data: z.string(),
    theme_name: z.string(),
  })
  .openapi({ required: ['json_data', 'theme_name'] })
  .openapi('ThemeRestApiPost')

const ThemeRestApiPutSchema = z
  .object({
    editors: z
      .array(
        z
          .int()
          .openapi({
            description:
              'A list of subject IDs (users, roles, or groups) that are allowed to edit this theme.',
          }),
      )
      .exactOptional(),
    json_data: z.string(),
    theme_name: z.string(),
  })
  .openapi({ required: ['json_data', 'theme_name'] })
  .openapi('ThemeRestApiPut')

const UploadFileMetadataItemSchema = z
  .object({
    column_names: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of columns names in the sheet' }),
    sheet_name: z.string().exactOptional().openapi({ description: 'The name of the sheet' }),
  })
  .openapi({ required: [] })
  .openapi('UploadFileMetadataItem')

const UploadFileMetadataSchema = z
  .object({ items: z.array(UploadFileMetadataItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UploadFileMetadata')

const UploadFileMetadataPostSchemaSchema = z
  .object({
    delimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The character used to separate values in the CSV file (e.g., a comma, semicolon, or tab).',
      }),
    file: z.file().openapi({ type: 'string', format: 'binary', description: 'The file to upload' }),
    header_row: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Row containing the headers to use as column names(0 is first line of data). Leave empty if there is no header row.',
      }),
    type: z.enum(['csv', 'excel', 'columnar']).openapi({ description: 'File type to upload' }),
  })
  .openapi({ required: ['file', 'type'] })
  .openapi('UploadFileMetadataPostSchema')

const UploadPostSchemaSchema = z
  .object({
    already_exists: z
      .enum(['fail', 'replace', 'append'])
      .default('fail')
      .exactOptional()
      .openapi({
        description: 'What to do if the table already exists accepts: fail, replace, append',
      }),
    column_data_types: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[CSV only] A dictionary with column names and their data types if you need to change the defaults. Example: {'user_id':'int'}. Check Python Pandas library for supported data types",
      }),
    column_dates: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[CSV and Excel only] A list of column names that should be parsed as dates. Example: date,timestamp',
      }),
    columns_read: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A List of the column names that should be read' }),
    dataframe_index: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Write dataframe index as a column.' }),
    day_first: z
      .boolean()
      .exactOptional()
      .openapi({ description: '[CSV only] DD/MM format dates, international and European format' }),
    decimal_character: z
      .string()
      .exactOptional()
      .openapi({
        description: "[CSV and Excel only] Character to recognize as decimal point. Default is '.'",
      }),
    delimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[CSV only] The character used to separate values in the CSV file (e.g., a comma, semicolon, or tab).',
      }),
    file: z.string().openapi({ description: 'The file to upload' }),
    header_row: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '[CSV and Excel only] Row containing the headers to use as column names (0 is first line of data). Leave empty if there is no header row.',
      }),
    index_column: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[CSV and Excel only] Column to use as the row labels of the dataframe. Leave empty if no index column',
      }),
    index_label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Index label for index column.' }),
    null_values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "[CSV and Excel only] A list of strings that should be treated as null. Examples: '' for empty strings, 'None', 'N/A', Warning: Hive database supports only a single value",
      }),
    rows_to_read: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[CSV and Excel only] Number of rows to read from the file. If None, reads all rows.',
      }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'The schema to upload the data file to.' }),
    sheet_name: z
      .string()
      .exactOptional()
      .openapi({
        description: '[Excel only]] Strings used for sheet names (default is the first sheet).',
      }),
    skip_blank_lines: z
      .boolean()
      .exactOptional()
      .openapi({ description: '[CSV only] Skip blank lines in the CSV file.' }),
    skip_initial_space: z
      .boolean()
      .exactOptional()
      .openapi({ description: '[CSV only] Skip spaces after delimiter.' }),
    skip_rows: z
      .int()
      .exactOptional()
      .openapi({ description: '[CSV and Excel only] Number of rows to skip at start of file.' }),
    table_name: z
      .string()
      .min(1)
      .max(10000)
      .openapi({ description: 'The name of the table to be created/appended' }),
    type: z.enum(['csv', 'excel', 'columnar']).openapi({ description: 'File type to upload' }),
  })
  .openapi({ required: ['file', 'table_name', 'type'] })
  .openapi('UploadPostSchema')

const UserGroupSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserGroup')

const UserRegistrationsRestAPIGetSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserRegistrationsRestAPIGet')

const UserRegistrationsRestAPIGetListSchema = z
  .object({
    email: z.string().max(320),
    first_name: z.string().max(64),
    id: z.int().exactOptional(),
    last_name: z.string().max(64),
    registration_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    username: z.string().max(128),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'username'] })
  .openapi('UserRegistrationsRestAPIGetList')

const UserRegistrationsRestAPIPostSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserRegistrationsRestAPIPost')

const UserRegistrationsRestAPIPutSchema = z
  .object({ id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserRegistrationsRestAPIPut')

const UserResponseSchemaSchema = z
  .object({
    email: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    groups: z.array(UserGroupSchema).exactOptional(),
    id: z.int().exactOptional(),
    is_active: z.boolean().exactOptional(),
    is_anonymous: z.boolean().exactOptional(),
    last_name: z.string().exactOptional(),
    login_count: z.int().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserResponseSchema')

const ValidateSQLRequestSchema = z
  .object({
    catalog: z.string().nullable().exactOptional(),
    schema: z.string().nullable().exactOptional(),
    sql: z.string().openapi({ description: 'SQL statement to validate' }),
    template_params: z.object({}).nullable().exactOptional(),
  })
  .openapi({ required: ['sql'] })
  .openapi('ValidateSQLRequest')

const ValidateSQLResponseSchema = z
  .object({
    end_column: z.int().exactOptional(),
    line_number: z.int().exactOptional(),
    message: z.string().exactOptional(),
    start_column: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidateSQLResponse')

const VersionChangeRecordSchema = z
  .object({
    from_value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Value at path before the save; null when the field did not exist.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Semantic category of the change. First-class values in V1: 'filter', 'metric', 'dimension', 'column', 'chart', 'time_range', 'color_palette'. Falls back to 'field' for generic scalar changes that don't map to a named kind.",
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The verb for this change: 'add', 'remove', 'move', 'edit', 'update' (a collapsed-summary record for a field whose per-leaf changes exceeded the cap), or 'announce' (a synthetic headline record). Surfaced explicitly so consumers need not infer the verb from from_value/to_value null-tests — 'move' in particular cannot be derived that way.",
      }),
    path: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "Array of segments locating the change in the entity's state. Example: ['params', 'adhoc_filters', 'country'].",
      }),
    to_value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Value at path after the save; null when the field was removed.' }),
  })
  .openapi({ required: [] })
  .openapi('VersionChangeRecord')

const VersionChangedBySchema = z
  .object({
    first_name: z.string().exactOptional(),
    id: z.int().exactOptional(),
    last_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VersionChangedBy')

const VersionListItemSchemaSchema = z
  .object({
    changed_by: VersionChangedBySchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'User who produced the version, or null when the commit had no authenticated Flask user (CLI, Celery, import).',
      }),
    changes: z
      .array(VersionChangeRecordSchema)
      .exactOptional()
      .openapi({
        description:
          'Structured diff records describing the atomic field-level changes at this version, ordered by emission sequence. Empty for baseline (op=0) transactions per spec M4.',
      }),
    issued_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC timestamp of the commit that produced the row' }),
    operation_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "One of 'baseline', 'update', or 'delete', derived from the Continuum integer constant. Restore is not a distinct operation_type: a restore surfaces as 'update' carrying ``action_kind='restore'`` (see ACTIVITY_ACTION_KINDS).",
      }),
    transaction_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Underlying Continuum transaction id' }),
    version_number: z
      .int()
      .exactOptional()
      .openapi({ description: '0-based position in the history, oldest first' }),
    version_uuid: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Deterministic UUIDv5 derived from the entity UUID and the Continuum transaction id — stable across replicas and retention pruning. The handle accepted by the get/restore version endpoints.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VersionListItemSchema')

const ViewMenuApiGetSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(250) })
  .openapi({ required: ['name'] })
  .openapi('ViewMenuApiGet')

const ViewMenuApiGetListSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().max(250) })
  .openapi({ required: ['name'] })
  .openapi('ViewMenuApiGetList')

const ViewMenuApiPostSchema = z
  .object({ name: z.string().max(250) })
  .openapi({ required: ['name'] })
  .openapi('ViewMenuApiPost')

const ViewMenuApiPutSchema = z
  .object({ name: z.string().max(250) })
  .openapi({ required: ['name'] })
  .openapi('ViewMenuApiPut')

const AdvancedDataTypeConvertSchemaSchema = z
  .object({ type: z.string().default('port'), values: z.array(z.any().default('http')).min(1) })
  .openapi({ required: ['type', 'values'] })
  .openapi('AdvancedDataTypeConvertSchema')

const ChartGetListSchemaSchema = z
  .object({
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            col: z.string(),
            opr: z.string(),
            value: z.union([
              z.number(),
              z.string(),
              z.boolean(),
              z.array(z.union([z.number(), z.string(), z.boolean()])),
            ]),
          })
          .openapi({ required: ['col', 'opr', 'value'] }),
      )
      .exactOptional(),
    keys: z
      .array(
        z.enum([
          'list_columns',
          'order_columns',
          'label_columns',
          'description_columns',
          'list_title',
          'none',
        ]),
      )
      .exactOptional(),
    order_column: z.string().exactOptional(),
    order_direction: z.enum(['asc', 'desc']).exactOptional(),
    page: z.int().exactOptional(),
    page_size: z.int().exactOptional(),
    select_columns: z.array(z.string()).exactOptional(),
    viz_type_order: z
      .array(z.string().max(250))
      .max(256)
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
          'Visualization type slugs in display-name order. Used only when order_column is viz_type.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartGetListSchema')

const DatabaseCatalogsQuerySchemaSchema = z
  .object({ force: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseCatalogsQuerySchema')

const DatabaseSchemasQuerySchemaSchema = z
  .object({
    catalog: z.string().exactOptional(),
    force: z.boolean().exactOptional(),
    upload_allowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseSchemasQuerySchema')

const DatabaseTablesQuerySchemaSchema = z
  .object({
    catalog_name: z.string().exactOptional(),
    force: z.boolean().exactOptional(),
    schema_name: z.string(),
  })
  .openapi({ required: ['schema_name'] })
  .openapi('DatabaseTablesQuerySchema')

const DeleteTagsSchemaSchema = z.array(z.string()).openapi('DeleteTagsSchema')

const GetDeleteIdsSchemaSchema = z
  .array(z.int())
  .openapi({ example: [1, 2, 3] })
  .openapi('GetDeleteIdsSchema')

const GetExportIdsSchemaSchema = z
  .array(z.int())
  .openapi({ example: [1, 2, 3] })
  .openapi('GetExportIdsSchema')

const GetFavStarIdsSchema2Schema = z
  .array(z.int())
  .openapi({ example: [1, 2, 3] })
  .openapi('GetFavStarIdsSchema2')

const GetInfoSchemaSchema = z
  .object({
    add_columns: z
      .record(
        z.string(),
        z
          .object({ page: z.int().exactOptional(), page_size: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    edit_columns: z
      .record(
        z.string(),
        z
          .object({ page: z.int().exactOptional(), page_size: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    keys: z
      .array(
        z.enum([
          'add_columns',
          'edit_columns',
          'filters',
          'permissions',
          'add_title',
          'edit_title',
          'none',
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInfoSchema')

const GetItemSchemaSchema = z
  .object({
    columns: z.array(z.string()).exactOptional(),
    keys: z
      .array(z.enum(['show_columns', 'description_columns', 'label_columns', 'show_title', 'none']))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetItemSchema')

const GetListSchemaSchema = z
  .object({
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            col: z.string(),
            opr: z.string(),
            value: z.union([
              z.number(),
              z.string(),
              z.boolean(),
              z.array(z.union([z.number(), z.string(), z.boolean()])),
            ]),
          })
          .openapi({ required: ['col', 'opr', 'value'] }),
      )
      .exactOptional(),
    keys: z
      .array(
        z.enum([
          'list_columns',
          'order_columns',
          'label_columns',
          'description_columns',
          'list_title',
          'none',
        ]),
      )
      .exactOptional(),
    order_column: z.string().exactOptional(),
    order_direction: z.enum(['asc', 'desc']).exactOptional(),
    page: z.int().exactOptional(),
    page_size: z.int().exactOptional(),
    select_columns: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetListSchema')

const GetRecentActivitySchemaSchema = z
  .object({
    actions: z.array(z.string()).exactOptional(),
    distinct: z.boolean().exactOptional(),
    page: z.number().exactOptional(),
    page_size: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecentActivitySchema')

const GetRelatedObjectsIdsSchemaSchema = z
  .array(z.int())
  .openapi({ example: [1, 2, 3] })
  .openapi('GetRelatedObjectsIdsSchema')

const GetRelatedSchemaSchema = z
  .object({
    filter: z.string().exactOptional(),
    include_ids: z.array(z.int()).exactOptional(),
    page: z.int().exactOptional(),
    page_size: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelatedSchema')

const GetSlackChannelsSchemaSchema = z
  .object({
    exact_match: z.boolean().exactOptional(),
    force: z.boolean().exactOptional(),
    page: z.int().min(0).exactOptional(),
    page_size: z.int().min(1).exactOptional(),
    search_string: z.string().exactOptional(),
    types: z.array(z.enum(['public_channel', 'private_channel'])).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSlackChannelsSchema')

const QueriesGetUpdatedSinceSchemaSchema = z
  .object({ last_updated_ms: z.number() })
  .openapi({ required: ['last_updated_ms'] })
  .openapi('QueriesGetUpdatedSinceSchema')

const ScreenshotQuerySchemaSchema = z
  .object({
    force: z.boolean().exactOptional(),
    thumb_size: z.array(z.int()).exactOptional(),
    window_size: z.array(z.int()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotQuerySchema')

const SqlLabGetResultsSchemaSchema = z
  .object({ key: z.string() })
  .openapi({ required: ['key'] })
  .openapi('SqlLabGetResultsSchema')

const ThumbnailQuerySchemaSchema = z
  .object({ force: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ThumbnailQuerySchema')

const _400Response = {
  description: 'Bad request',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _401Response = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _403Response = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _404Response = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _410Response = {
  description: 'Gone',
  content: {
    'application/json': {
      schema: z
        .object({
          errors: z
            .array(
              z
                .object({
                  error_type: z
                    .enum([
                      'FRONTEND_CSRF_ERROR',
                      'FRONTEND_NETWORK_ERROR',
                      'FRONTEND_TIMEOUT_ERROR',
                      'GENERIC_DB_ENGINE_ERROR',
                      'COLUMN_DOES_NOT_EXIST_ERROR',
                      'TABLE_DOES_NOT_EXIST_ERROR',
                      'SCHEMA_DOES_NOT_EXIST_ERROR',
                      'CONNECTION_INVALID_USERNAME_ERROR',
                      'CONNECTION_INVALID_PASSWORD_ERROR',
                      'CONNECTION_INVALID_HOSTNAME_ERROR',
                      'CONNECTION_PORT_CLOSED_ERROR',
                      'CONNECTION_INVALID_PORT_ERROR',
                      'CONNECTION_HOST_DOWN_ERROR',
                      'CONNECTION_ACCESS_DENIED_ERROR',
                      'CONNECTION_UNKNOWN_DATABASE_ERROR',
                      'CONNECTION_DATABASE_PERMISSIONS_ERROR',
                      'CONNECTION_MISSING_PARAMETERS_ERROR',
                      'OBJECT_DOES_NOT_EXIST_ERROR',
                      'SYNTAX_ERROR',
                      'CONNECTION_DATABASE_TIMEOUT',
                      'VIZ_GET_DF_ERROR',
                      'UNKNOWN_DATASOURCE_TYPE_ERROR',
                      'FAILED_FETCHING_DATASOURCE_INFO_ERROR',
                      'TABLE_SECURITY_ACCESS_ERROR',
                      'SEMANTIC_EXECUTION_REFUSED_ERROR',
                      'DATASOURCE_SECURITY_ACCESS_ERROR',
                      'DATABASE_SECURITY_ACCESS_ERROR',
                      'QUERY_SECURITY_ACCESS_ERROR',
                      'MISSING_OWNERSHIP_ERROR',
                      'USER_ACTIVITY_SECURITY_ACCESS_ERROR',
                      'DASHBOARD_SECURITY_ACCESS_ERROR',
                      'CHART_SECURITY_ACCESS_ERROR',
                      'OAUTH2_REDIRECT',
                      'OAUTH2_REDIRECT_ERROR',
                      'BACKEND_TIMEOUT_ERROR',
                      'DATABASE_NOT_FOUND_ERROR',
                      'TABLE_NOT_FOUND_ERROR',
                      'MISSING_TEMPLATE_PARAMS_ERROR',
                      'INVALID_TEMPLATE_PARAMS_ERROR',
                      'RESULTS_BACKEND_NOT_CONFIGURED_ERROR',
                      'DML_NOT_ALLOWED_ERROR',
                      'INVALID_CTAS_QUERY_ERROR',
                      'INVALID_CVAS_QUERY_ERROR',
                      'SQLLAB_TIMEOUT_ERROR',
                      'RESULTS_BACKEND_ERROR',
                      'ASYNC_WORKERS_ERROR',
                      'ADHOC_SUBQUERY_NOT_ALLOWED_ERROR',
                      'INVALID_SQL_ERROR',
                      'RESULT_TOO_LARGE_ERROR',
                      'GENERIC_COMMAND_ERROR',
                      'GENERIC_BACKEND_ERROR',
                      'INVALID_PAYLOAD_FORMAT_ERROR',
                      'INVALID_PAYLOAD_SCHEMA_ERROR',
                      'MARSHMALLOW_ERROR',
                      'CSRF_ERROR',
                      'REPORT_NOTIFICATION_ERROR',
                    ])
                    .exactOptional(),
                  extra: z.object({}).exactOptional(),
                  level: z.enum(['info', 'warning', 'error']).exactOptional(),
                  message: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          message: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _422Response = {
  description: 'Could not process entity',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _500Response = {
  description: 'Fatal error',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const ApiKeySecurityScheme = {
  bearerFormat: 'API Key',
  description: 'API key authentication using Bearer token',
  scheme: 'bearer',
  type: 'http',
}

const JwtSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

const JwtRefreshSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getApiV1AdvancedDataTypeConvertRoute = createRoute({
  method: 'get',
  path: '/api/v1/advanced_data_type/convert',
  tags: ['Advanced Data Type'],
  summary: 'Return an AdvancedDataTypeResponse',
  description: 'Returns an AdvancedDataTypeResponse object populated with the passed in args.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          AdvancedDataTypeConvertSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/advanced_data_type_convert_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'AdvancedDataTypeResponse object has been returned.',
      content: { 'application/json': { schema: AdvancedDataTypeSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AdvancedDataTypeTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/advanced_data_type/types',
  tags: ['Advanced Data Type'],
  summary: 'Return a list of available advanced data types',
  responses: {
    200: {
      description: 'a successful return of the available advanced data types has taken place.',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AnnotationLayerIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/annotation_layer/',
  tags: ['Annotation Layers'],
  summary: 'Get a list of annotation layers',
  description:
    'Gets a list of annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(AnnotationLayerRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1AnnotationLayerIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/annotation_layer/',
  tags: ['Annotation Layers'],
  summary: 'Create an annotation layer',
  request: {
    body: {
      description: 'Annotation Layer schema',
      content: { 'application/json': { schema: AnnotationLayerRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Annotation added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationLayerRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1AnnotationLayerIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/annotation_layer/',
  tags: ['Annotation Layers'],
  summary: 'Delete multiple annotation layers in a bulk operation',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'CSS templates bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AnnotationLayerInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/annotation_layer/_info',
  tags: ['Annotation Layers'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AnnotationLayerRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/annotation_layer/related/{column_name}',
  tags: ['Annotation Layers'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AnnotationLayerPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/annotation_layer/{pk}',
  tags: ['Annotation Layers'],
  summary: 'Get an annotation layer',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: AnnotationLayerRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1AnnotationLayerPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/annotation_layer/{pk}',
  tags: ['Annotation Layers'],
  summary: 'Update an annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Annotation schema',
      content: { 'application/json': { schema: AnnotationLayerRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Annotation changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationLayerRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1AnnotationLayerPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/annotation_layer/{pk}',
  tags: ['Annotation Layers'],
  summary: 'Delete annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AnnotationLayerPkAnnotationIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/annotation_layer/{pk}/annotation/',
  tags: ['Annotation Layers'],
  summary: 'Get a list of annotation layers',
  description:
    'Gets a list of annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer id for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Annotations',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of annotation ids' }),
              result: z
                .array(AnnotationRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1AnnotationLayerPkAnnotationIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/annotation_layer/{pk}/annotation/',
  tags: ['Annotation Layers'],
  summary: 'Create an annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Annotation schema',
      content: { 'application/json': { schema: AnnotationRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Annotation added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1AnnotationLayerPkAnnotationIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/annotation_layer/{pk}/annotation/',
  tags: ['Annotation Layers'],
  summary: 'Bulk delete annotation layers',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Annotations bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/annotation_layer/{pk}/annotation/{annotation_id}',
  tags: ['Annotation Layers'],
  summary: 'Get an annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      annotation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation pk',
            in: 'path',
            name: 'annotation_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              result: AnnotationRestApiGetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/annotation_layer/{pk}/annotation/{annotation_id}',
  tags: ['Annotation Layers'],
  summary: 'Update an annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      annotation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation pk for this annotation',
            in: 'path',
            name: 'annotation_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Annotation schema',
      content: { 'application/json': { schema: AnnotationRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Annotation changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/annotation_layer/{pk}/annotation/{annotation_id}',
  tags: ['Annotation Layers'],
  summary: 'Delete annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      annotation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation pk for this annotation',
            in: 'path',
            name: 'annotation_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AssetsExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/assets/export/',
  tags: ['Import/export'],
  summary: 'Export all assets',
  description:
    'Gets a ZIP file with all the Superset assets (databases, datasets, charts, dashboards, saved queries) as YAML files.',
  responses: {
    200: {
      description: 'ZIP file',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1AssetsImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/assets/import/',
  tags: ['Import/export'],
  summary: 'Import multiple assets',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bundle: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'upload file (ZIP or JSON)',
                }),
              encrypted_extra_secrets: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of secret values for masked encrypted_extra fields. Each key is a database file path and the value is a map of JSONPath expressions to secret values. For example: `{"databases/db.yaml": {"$.credentials_info.secret": "foo"}}`.',
                }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'overwrite existing assets? Defaults to ``true`` for backwards compatibility. When ``false``, the import fails if any of the assets already exist.',
                }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              sparse: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'allow sparse update of resources' }),
              ssh_tunnel_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_private_key_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key_password"}`.',
                }),
              ssh_tunnel_private_keys: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key"}`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Assets import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1AvailableDomainsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/available_domains/',
  tags: ['Available Domains'],
  summary: 'Get all available domains',
  responses: {
    200: {
      description: 'a list of available domains',
      content: {
        'application/json': {
          schema: z
            .object({ result: AvailableDomainsSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1CachekeyInvalidateRoute = createRoute({
  method: 'post',
  path: '/api/v1/cachekey/invalidate',
  tags: ['CacheRestApi'],
  summary: 'Invalidate cache records and remove the database records',
  description:
    'Takes a list of datasources, finds and invalidates the associated cache records and removes the database records.',
  request: {
    body: {
      description: 'A list of datasources uuid or the tuples of database and datasource names',
      content: { 'application/json': { schema: CacheInvalidationRequestSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'cache was successfully invalidated' },
    400: _400Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/',
  tags: ['Charts'],
  summary: 'Get a list of charts',
  description:
    'Gets a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          ChartGetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/chart_get_list_schema' },
                },
              },
              description:
                'Rison-encoded list query. viz_type_order may contain up to 256 unique visualization type slugs, each at most 250 characters, in the display-name order to use when sorting by viz_type.',
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Charts',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              ids: z.array(z.int()).exactOptional(),
              result: z.array(ChartRestApiGetListSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/',
  tags: ['Charts'],
  summary: 'Create a new chart',
  request: {
    body: {
      description: 'Chart schema',
      content: { 'application/json': { schema: ChartRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Chart added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ChartRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ChartIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/chart/',
  tags: ['Charts'],
  summary:
    'Bulk delete charts (soft delete, recoverable via restore, when the SOFT_DELETE feature flag is enabled; permanent otherwise)',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Charts bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/_info',
  tags: ['Charts'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartDataRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/data',
  tags: ['Charts'],
  summary: 'Return payload data response for the given query',
  description:
    'Takes a query context constructed in the client and returns payload data response for the given query.',
  request: {
    body: {
      description:
        'A query context consists of a datasource from which to fetch data and one or many query objects.',
      content: { 'application/json': { schema: ChartDataQueryContextSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: ChartDataResponseSchemaSchema } },
    },
    202: {
      description: 'Async job details',
      content: { 'application/json': { schema: ChartDataAsyncResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/export/',
  tags: ['Charts'],
  summary: 'Download multiple charts as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A zip file with chart(s), dataset(s) and database(s) as YAML',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartFavoriteStatusIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/favorite_status/',
  tags: ['Charts'],
  summary: 'Check favorited charts for current user',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetFavStarIdsSchema2Schema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_fav_star_ids_schema2' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'None',
      content: { 'application/json': { schema: GetFavStarIdsSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/import/',
  tags: ['Charts'],
  summary: 'Import chart(s) with associated datasets and databases',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'upload file (ZIP)' }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing charts?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_private_key_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key_password"}`.',
                }),
              ssh_tunnel_private_keys: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key"}`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Chart import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/related/{column_name}',
  tags: ['Charts'],
  summary: 'Get related fields data',
  description:
    'Get a list of all possible related entities for a chart. Use `editors` as the `column_name` parameter',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ChartWarmUpCacheRoute = createRoute({
  method: 'put',
  path: '/api/v1/chart/warm_up_cache',
  tags: ['Charts'],
  summary: 'Warm up the cache for the chart',
  description:
    'Warms up the cache for the chart. Note for slices a force refresh occurs. In terms of the `extra_filters` these can be obtained from records in the JSON encoded `logs.json` column associated with the `explore` action.',
  request: {
    body: {
      description:
        'Identifies the chart to warm up cache for, and any additional dashboard or filter context to use.',
      content: { 'application/json': { schema: ChartCacheWarmUpRequestSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "Each chart's warmup status",
      content: { 'application/json': { schema: ChartCacheWarmUpResponseSchemaSchema } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartIdOrUuidRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{id_or_uuid}',
  tags: ['Charts'],
  summary: 'Get a chart detail information',
  description: 'Get a chart',
  request: {
    params: z.object({
      id_or_uuid: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the chart, or its uuid',
            in: 'path',
            name: 'id_or_uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart',
      content: {
        'application/json': {
          schema: z
            .object({ result: ChartGetResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ChartPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/chart/{pk}',
  tags: ['Charts'],
  summary: 'Update a chart',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Chart schema',
      content: { 'application/json': { schema: ChartRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Chart changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              new_transaction_id: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Continuum transaction_id of the live row after this update. Differs from old_transaction_id when the update produced a new version row.',
                }),
              new_version: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '0-based version_number of the newly-live row after this update. Can equal old_version when no versioned column changed, or when retention pruning dropped an older closed row in the same commit.',
                }),
              new_version_uuid: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deterministic version_uuid of the live row after this update. Null when version capture is disabled.',
                }),
              old_transaction_id: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Continuum transaction_id of the live row before this update. Stable across pruning.',
                }),
              old_version: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '0-based version_number of the live row before this update. Unstable under retention pruning — see old_transaction_id for a stable identifier.',
                }),
              old_version_uuid: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deterministic version_uuid of the live row before this update. Null when version capture is disabled or the entity has no version rows yet.',
                }),
              result: ChartRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ChartPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/chart/{pk}',
  tags: ['Charts'],
  summary:
    'Delete a chart (soft delete, recoverable via restore, when the SOFT_DELETE feature flag is enabled; permanent otherwise)',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartPkCacheScreenshotIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{pk}/cache_screenshot/',
  tags: ['Charts'],
  summary: 'Compute and cache a screenshot',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          ScreenshotQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/screenshot_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Chart async result',
      content: { 'application/json': { schema: ChartCacheScreenshotResponseSchemaSchema } },
    },
    202: {
      description: 'Chart screenshot task created',
      content: { 'application/json': { schema: ChartCacheScreenshotResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartPkDataIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{pk}/data/',
  tags: ['Charts'],
  summary: 'Return payload data response for a chart',
  description:
    "Takes a chart ID and uses the query context stored when the chart was saved to return payload data response. When filters_dashboard_id is provided, the chart's compiled SQL includes in scope dashboard filter default values.",
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The chart ID',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The format in which the data should be returned',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type in which the data should be returned',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Should the queries be forced to load from the source',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      filters_dashboard_id: z
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
              "Dashboard ID whose filter defaults should be applied to the chart's query context. The chart must belong to the specified dashboard. Only in scope filters with static default values are applied; filters that require a database query (I.E. defaultToFirstItem) or have no default are reported in the dashboard_filters response metadata.",
            in: 'query',
            name: 'filters_dashboard_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: ChartDataResponseSchemaSchema } },
    },
    202: {
      description: 'Async job details',
      content: { 'application/json': { schema: ChartDataAsyncResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartPkDeckLayersIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{pk}/deck_layers/',
  tags: ['Charts'],
  summary: 'Get the sub-layer charts declared by a deck.gl Multiple Layers chart',
  description:
    'Multiple Layers charts (viz_type "deck_multi") reference other saved charts as layers via their `deck_slices` config, but those layer charts typically sit on no dashboard of their own, so a per-layer `GET /api/v1/chart/<id>` can 404 for a principal (e.g. an embedded guest) who is only entitled to the container. This endpoint gates on the container chart and resolves the layers it declares, mirroring the access the legacy explore_json pipeline granted server-side.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The id of the Multiple Layers container chart',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The container's declared layer charts",
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(
                  z
                    .object({
                      datasource_id: z.int().exactOptional(),
                      datasource_type: z.string().exactOptional(),
                      params: z.string().exactOptional(),
                      slice_id: z.int().exactOptional(),
                      viz_type: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartPkFavoritesIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/{pk}/favorites/',
  tags: ['Charts'],
  summary: 'Mark the chart as favorite for the current user',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart added to favorites',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ChartPkFavoritesIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/chart/{pk}/favorites/',
  tags: ['Charts'],
  summary: 'Remove the chart from the user favorite list',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart removed from favorites',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartPkScreenshotDigestIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{pk}/screenshot/{digest}/',
  tags: ['Charts'],
  summary: 'Get a computed screenshot from cache',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'digest', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart screenshot image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartPkThumbnailDigestIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{pk}/thumbnail/{digest}/',
  tags: ['Charts'],
  summary: 'Get chart thumbnail',
  description: 'Compute or get already computed chart thumbnail from cache.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: {
            description: 'A hex digest that makes this chart unique',
            in: 'path',
            name: 'digest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart thumbnail image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartUuidStrActivityIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{uuid_str}/activity/',
  tags: ['Charts'],
  summary: 'Activity stream — chart own edits + datasets the chart pointed at during association',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Chart UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      include: z
        .enum(['self', 'related', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: { default: 'all', enum: ['self', 'related', 'all'], type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Case-insensitive search over the full history (summary, entity name, kind, path, values) — applied before pagination, so `count` reflects the matches.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page_size',
            schema: { default: 25, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Activity stream ordered newest-first',
      content: { 'application/json': { schema: ActivityResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartUuidStrVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{uuid_str}/versions/',
  tags: ['Charts'],
  summary: 'Return the version history for a chart',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Chart UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Version history ordered by oldest first',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              result: z.array(VersionListItemSchemaSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/chart/{uuid_str}/versions/{version_uuid_str}/',
  tags: ['Charts'],
  summary: 'Read-only snapshot of the chart at a given version',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Chart UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      version_uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Version UUID as returned by the list endpoint',
            in: 'path',
            name: 'version_uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot of the chart at the target version',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ _version: VersionListItemSchemaSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    "The chart's scalar fields at the target version (entity-specific keys), plus a `_version` block with the version-level metadata.",
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/{uuid_str}/versions/{version_uuid_str}/restore',
  tags: ['Charts'],
  summary: 'Revert a chart to an earlier version (non-destructive)',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Chart UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      version_uuid_str: z
        .uuid()
        .openapi({
          param: {
            description:
              'Version UUID as returned by the list-versions endpoint. Stable across retention pruning.',
            in: 'path',
            name: 'version_uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart was restored',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartUuidPurgeRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/{uuid}/purge',
  tags: ['Charts'],
  summary: 'Permanently delete a soft-deleted chart',
  description:
    'Irreversibly remove an archived chart and its dependents. Limited to owners and admins (same audience as restore).',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart permanently deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ChartUuidRestoreRoute = createRoute({
  method: 'post',
  path: '/api/v1/chart/{uuid}/restore',
  tags: ['Charts'],
  summary: 'Restore a soft-deleted chart',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart restored',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1CssTemplateIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/css_template/',
  tags: ['CSS Templates'],
  summary: 'Get a list of CSS templates',
  description:
    'Gets a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(CssTemplateRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1CssTemplateIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/css_template/',
  tags: ['CSS Templates'],
  summary: 'Create a CSS template',
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: CssTemplateRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: CssTemplateRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1CssTemplateIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/css_template/',
  tags: ['CSS Templates'],
  summary: 'Bulk delete CSS templates',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'CSS templates bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1CssTemplateInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/css_template/_info',
  tags: ['CSS Templates'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1CssTemplateRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/css_template/related/{column_name}',
  tags: ['CSS Templates'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1CssTemplatePkRoute = createRoute({
  method: 'get',
  path: '/api/v1/css_template/{pk}',
  tags: ['CSS Templates'],
  summary: 'Get a CSS template',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: CssTemplateRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1CssTemplatePkRoute = createRoute({
  method: 'put',
  path: '/api/v1/css_template/{pk}',
  tags: ['CSS Templates'],
  summary: 'Update a CSS template',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: CssTemplateRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: CssTemplateRestApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1CssTemplatePkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/css_template/{pk}',
  tags: ['CSS Templates'],
  summary: 'Delete a CSS template',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/',
  tags: ['Dashboards'],
  summary: 'Get a list of dashboards',
  description:
    'Gets a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dashboards',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              ids: z.array(z.int()).exactOptional(),
              result: z.array(DashboardRestApiGetListSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/',
  tags: ['Dashboards'],
  summary: 'Create a new dashboard',
  request: {
    body: {
      description: 'Dashboard schema',
      content: { 'application/json': { schema: DashboardRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Dashboard added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DashboardRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DashboardIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dashboard/',
  tags: ['Dashboards'],
  summary:
    'Bulk delete dashboards (soft delete, recoverable via restore, when the SOFT_DELETE feature flag is enabled; permanent otherwise)',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/_info',
  tags: ['Dashboards'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/export/',
  tags: ['Dashboards'],
  summary: 'Download multiple dashboards as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Dashboard export', content: { 'text/plain': { schema: z.string() } } },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardExportXlsxDownloadJobIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/export_xlsx/download/{job_id}/',
  tags: ['Dashboards'],
  summary: 'Download a completed dashboard Excel export',
  description:
    "Intentionally requires no login: the unguessable job_id, emailed only to the original requester (or handed to their own session via export_xlsx_status), is the credential. The dashboard access check already ran once, when the export was requested -- see security_manager.raise_for_access in export_xlsx. The file streams through Superset with the deployment's own storage credentials instead of redirecting to a signed storage URL, so it works for ambient identities that cannot sign (e.g. workload identity federation) and never mints a bearer URL Superset cannot observe or revoke.",
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The job_id from the export_xlsx response',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The .xlsx file as an attachment' },
    410: { description: 'The link is unknown, expired, or the export failed' },
    501: { description: 'Excel export is not configured on this server' },
  },
  security: [],
})

export const getApiV1DashboardExportXlsxStatusJobIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/export_xlsx/status/{job_id}/',
  tags: ['Dashboards'],
  summary: 'Poll the status of a dashboard Excel export job',
  description:
    'For a session with no email address to be notified at (e.g. an embedded/guest session), the frontend polls this endpoint with the job_id from the export_xlsx response instead of waiting for an email. Behind the same @protect() as the export request itself, unlike the login-free download_xlsx stream (which also has to work when clicked from a plain email link, possibly with no active session at all).',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The job_id from the export_xlsx response',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Job status: {"status": "pending"} while queued, {"status": "running"} once a worker has started executing, {"status": "ready", "download_url": "..."} once the file is available, or {"status": "error", "message": "..."} if the export failed.',
    },
    401: _401Response,
    403: _403Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardFavoriteStatusIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/favorite_status/',
  tags: ['Dashboards'],
  summary: 'Check favorited dashboards for current user',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetFavStarIdsSchema2Schema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_fav_star_ids_schema2' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'None',
      content: { 'application/json': { schema: GetFavStarIdsSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/import/',
  tags: ['Dashboards'],
  summary: 'Import dashboard(s) with associated charts/datasets/databases',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'upload file (ZIP or JSON)',
                }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing dashboards?' }),
              overwrite_all: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite all existing assets within the dashboard?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_private_key_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key_password"}`.',
                }),
              ssh_tunnel_private_keys: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key"}`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardPermalinkKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/permalink/{key}',
  tags: ['Dashboard Permanent Link'],
  summary: "Get dashboard's permanent link state",
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the stored state.',
      content: {
        'application/json': {
          schema: z
            .object({
              state: z.object({}).exactOptional().openapi({ description: 'The stored state' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/related/{column_name}',
  tags: ['Dashboards'],
  summary: 'Get related fields data',
  description: 'Get a list of all possible related entities for a dashboard',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardIdOrSlugRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{id_or_slug}',
  tags: ['Dashboards'],
  summary: 'Get a dashboard detail information',
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the dashboard, or its slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard',
      content: {
        'application/json': {
          schema: z
            .object({ result: DashboardGetResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardIdOrSlugChartsRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{id_or_slug}/charts',
  tags: ['Dashboards'],
  summary: "Get a dashboard's chart definitions.",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'id_or_slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard chart definitions',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(ChartEntityResponseSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardIdOrSlugCopyIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{id_or_slug}/copy/',
  tags: ['Dashboards'],
  summary: 'Create a copy of an existing dashboard',
  description:
    'Settings merge with the source by default. Set replace_metadata to true to use json_metadata as complete settings, as for a version fork. Chart-specific settings are pruned and remapped in both modes.',
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard id or slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DashboardCopySchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Id of new dashboard and last modified time',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              last_modified_time: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardIdOrSlugDatasetsRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{id_or_slug}/datasets',
  tags: ['Dashboards'],
  summary: "Get dashboard's datasets",
  description:
    "Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the dashboard, or its slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard dataset definitions',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(DashboardDatasetSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardIdOrSlugEmbeddedRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{id_or_slug}/embedded',
  tags: ['Dashboards'],
  summary: "Get the dashboard's embedded configuration",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard id or slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result contains the embedded dashboard config',
      content: {
        'application/json': {
          schema: z
            .object({ result: EmbeddedDashboardResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DashboardIdOrSlugEmbeddedRoute = createRoute({
  method: 'put',
  path: '/api/v1/dashboard/{id_or_slug}/embedded',
  tags: ['Dashboards'],
  description: "Sets a dashboard's embedded configuration.",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard id or slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The embedded configuration to set',
      content: { 'application/json': { schema: EmbeddedDashboardConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully set the configuration',
      content: {
        'application/json': {
          schema: z
            .object({ result: EmbeddedDashboardResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardIdOrSlugEmbeddedRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{id_or_slug}/embedded',
  tags: ['Dashboards'],
  summary: "Set a dashboard's embedded configuration",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard id or slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The embedded configuration to set',
      content: { 'application/json': { schema: EmbeddedDashboardConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully set the configuration',
      content: {
        'application/json': {
          schema: z
            .object({ result: EmbeddedDashboardResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DashboardIdOrSlugEmbeddedRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dashboard/{id_or_slug}/embedded',
  tags: ['Dashboards'],
  summary: "Delete a dashboard's embedded configuration",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard id or slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully removed the configuration',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardIdOrSlugTabsRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{id_or_slug}/tabs',
  tags: ['Dashboards'],
  summary: "Get dashboard's tabs",
  description:
    "Returns a list of a dashboard's tabs and dashboard's nested tree structure for associated tabs.",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the dashboard, or its slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard tabs',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DashboardPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/dashboard/{pk}',
  tags: ['Dashboards'],
  summary: 'Update a dashboard',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Dashboard schema',
      content: { 'application/json': { schema: DashboardRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              last_modified_time: z.number().exactOptional(),
              new_transaction_id: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Continuum transaction_id of the live row after this update. Differs from old_transaction_id when the update produced a new version row.',
                }),
              new_version: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '0-based version_number of the newly-live row after this update. Can equal old_version when no versioned column changed, or when retention pruning dropped an older closed row in the same commit.',
                }),
              new_version_uuid: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deterministic version_uuid of the live row after this update. Null when version capture is disabled.',
                }),
              old_transaction_id: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Continuum transaction_id of the live row before this update. Stable across pruning.',
                }),
              old_version: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '0-based version_number of the live row before this update. Unstable under retention pruning — see old_transaction_id for a stable identifier.',
                }),
              old_version_uuid: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deterministic version_uuid of the live row before this update. Null when version capture is disabled or the entity has no version rows yet.',
                }),
              result: DashboardRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DashboardPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dashboard/{pk}',
  tags: ['Dashboards'],
  summary:
    'Delete a dashboard (soft delete, recoverable via restore, when the SOFT_DELETE feature flag is enabled; permanent otherwise)',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardPkCacheDashboardScreenshotIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{pk}/cache_dashboard_screenshot/',
  tags: ['Dashboards'],
  summary: 'Compute and cache a screenshot',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardScreenshotPostSchemaSchema } } },
  },
  responses: {
    200: {
      description: 'Existing dashboard screenshot task status',
      content: { 'application/json': { schema: DashboardCacheScreenshotResponseSchemaSchema } },
    },
    202: {
      description: 'Dashboard async result',
      content: { 'application/json': { schema: DashboardCacheScreenshotResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
    503: { description: 'Screenshot cache unavailable' },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DashboardPkChartCustomizationsRoute = createRoute({
  method: 'put',
  path: '/api/v1/dashboard/{pk}/chart_customizations',
  tags: ['Dashboards'],
  summary: 'Update chart customizations configuration for a dashboard.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Chart customizations configuration',
      content: {
        'application/json': { schema: DashboardChartCustomizationsConfigUpdateSchemaSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard chart customizations updated',
      content: {
        'application/json': {
          schema: z.object({ result: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DashboardPkColorsRoute = createRoute({
  method: 'put',
  path: '/api/v1/dashboard/{pk}/colors',
  tags: ['Dashboards'],
  summary: 'Update colors configuration for a dashboard.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      mark_updated: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'mark_updated',
            schema: {
              description: 'Whether to update the dashboard changed_on field',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Whether to update the dashboard changed_on field',
        }),
    }),
    body: {
      description: 'Colors configuration',
      content: { 'application/json': { schema: DashboardColorsConfigUpdateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard colors updated',
      content: {
        'application/json': {
          schema: z.object({ result: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardPkExportAsExampleIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{pk}/export_as_example/',
  tags: ['Dashboards'],
  summary: 'Export dashboard as example bundle',
  description:
    'Exports a dashboard with its charts and datasets in the example format used by the Superset example loading system. The export includes Parquet data files and YAML configuration files. Charts and native-filter targets that use semantic views are not supported.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dashboard id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      export_data: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include Parquet data files',
            in: 'query',
            name: 'export_data',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      sample_rows: z
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
            description: 'Limit data export to this many rows per dataset',
            in: 'query',
            name: 'sample_rows',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Example bundle ZIP file',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: { description: 'The dashboard contains unsupported semantic-view assets' },
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardPkExportXlsxIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{pk}/export_xlsx/',
  tags: ['Dashboards'],
  summary: 'Export dashboard chart data to Excel',
  description:
    'Writes each chart to a worksheet. With export storage configured, the work is queued: the requesting user is emailed a download link when they have an address on file, and either way the returned job id can be polled at export_xlsx/status/<job_id>/ for status and, once ready, the download link. Without export storage, eligible data workbooks are returned in the response.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dashboard id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardExportXlsxPostSchemaSchema } } },
  },
  responses: {
    200: {
      description: 'The exported workbook, built during this request',
      content: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    202: {
      description: 'Export task accepted',
      content: { 'application/json': { schema: DashboardExportXlsxResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardPkFavoritesIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{pk}/favorites/',
  tags: ['Dashboards'],
  summary: 'Mark the dashboard as favorite for the current user',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard added to favorites',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DashboardPkFavoritesIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dashboard/{pk}/favorites/',
  tags: ['Dashboards'],
  summary: 'Remove the dashboard from the user favorite list',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard removed from favorites',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardPkFilterStateRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{pk}/filter_state',
  tags: ['Dashboard Filter State'],
  summary: "Create a dashboard's filter state",
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      tab_id: z
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
          param: { in: 'query', name: 'tab_id', schema: { type: 'integer' }, required: false },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TemporaryCachePostSchemaSchema,
          examples: {
            numerical_range_filter: {
              summary: 'Numerical Range Filter',
              description: '**This body should be stringified and put into the value field.**',
              value: {
                extraFormData: {
                  filters: [
                    { col: 'tz_offset', op: '>=', val: [1000] },
                    { col: 'tz_offset', op: '<=', val: [2000] },
                  ],
                },
                filterState: { label: '1000 <= x <= 2000', value: [1000, 2000] },
                id: 'NATIVE_FILTER_ID',
              },
            },
            time_grain_filter: {
              summary: 'Time Grain Filter',
              description: '**This body should be stringified and put into the value field.**',
              value: {
                extraFormData: { time_grain_sqla: 'P1W/1970-01-03T00:00:00Z' },
                filterState: { label: 'Week ending Saturday', value: ['P1W/1970-01-03T00:00:00Z'] },
                id: 'NATIVE_FILTER_ID',
              },
            },
            time_range_filter: {
              summary: 'Time Range Filter',
              description: '**This body should be stringified and put into the value field.**',
              value: {
                extraFormData: {
                  time_range:
                    "DATEADD(DATETIME('2025-01-16T00:00:00'), -7, day) : 2025-01-16T00:00:00",
                },
                filterState: {
                  value: "DATEADD(DATETIME('2025-01-16T00:00:00'), -7, day) : 2025-01-16T00:00:00",
                },
                id: 'NATIVE_FILTER_ID',
              },
            },
            timecolumn_filter: {
              summary: 'Time Column Filter',
              description: '**This body should be stringified and put into the value field.**',
              value: {
                extraFormData: { granularity_sqla: 'order_date' },
                filterState: { value: ['order_date'] },
                id: 'NATIVE_FILTER_ID',
              },
            },
            value_filter: {
              summary: 'Value Filter',
              description: '**This body should be stringified and put into the value field.**',
              value: {
                extraFormData: { filters: [{ col: 'real_name', op: 'IN', val: ['John Doe'] }] },
                filterState: { value: ['John Doe'] },
                id: 'NATIVE_FILTER_ID',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The value was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the value.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardPkFilterStateKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{pk}/filter_state/{key}',
  tags: ['Dashboard Filter State'],
  summary: "Get a dashboard's filter state value",
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the stored value.',
      content: {
        'application/json': {
          schema: z
            .object({
              names: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    "A map of native filter id to that filter's human-readable label, for the filter ids present in `value`. Cross-referenced from the dashboard's native filter configuration, since the cached `value` itself has no notion of a filter's label.",
                }),
              value: z.string().exactOptional().openapi({ description: 'The stored value' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DashboardPkFilterStateKeyRoute = createRoute({
  method: 'put',
  path: '/api/v1/dashboard/{pk}/filter_state/{key}',
  tags: ['Dashboard Filter State'],
  summary: "Update a dashboard's filter state value",
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      tab_id: z
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
          param: { in: 'query', name: 'tab_id', schema: { type: 'integer' }, required: false },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TemporaryCachePutSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The value was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the value.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DashboardPkFilterStateKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dashboard/{pk}/filter_state/{key}',
  tags: ['Dashboard Filter State'],
  summary: "Delete a dashboard's filter state value",
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'The value key.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tab_id: z
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
          param: { in: 'query', name: 'tab_id', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the stored value.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'The result of the operation' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DashboardPkFiltersRoute = createRoute({
  method: 'put',
  path: '/api/v1/dashboard/{pk}/filters',
  tags: ['Dashboards'],
  summary: 'Update native filters configuration for a dashboard.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Native filters configuration',
      content: { 'application/json': { schema: DashboardNativeFiltersConfigUpdateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard native filters updated',
      content: {
        'application/json': {
          schema: z.object({ result: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardPkPermalinkRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{pk}/permalink',
  tags: ['Dashboard Permanent Link'],
  summary: "Create a new dashboard's permanent link",
  request: {
    params: z.object({
      pk: z
        .string()
        .openapi({ param: { in: 'path', name: 'pk', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DashboardPermalinkStateSchemaSchema,
          examples: {
            numerical_range_filter: {
              summary: 'Numerical Range Filter',
              value: {
                dataMask: {
                  extraFormData: {
                    filters: [
                      { col: 'tz_offset', op: '>=', val: [1000] },
                      { col: 'tz_offset', op: '<=', val: [2000] },
                    ],
                  },
                  filterState: { label: '1000 <= x <= 200', value: [1000, 2000] },
                  id: 'NATIVE_FILTER_ID',
                },
              },
            },
            time_grain_filter: {
              summary: 'Time Grain Filter',
              value: {
                dataMask: {
                  extraFormData: { time_grain_sqla: 'P1W/1970-01-03T00:00:00Z' },
                  filterState: {
                    label: 'Week ending Saturday',
                    value: ['P1W/1970-01-03T00:00:00Z'],
                  },
                  id: 'NATIVE_FILTER_ID',
                },
              },
            },
            time_range_filter: {
              summary: 'Time Range Filter',
              value: {
                dataMask: {
                  extraFormData: {
                    time_range:
                      'DATEADD(DATETIME("2025-01-16T00:00:00"), -7, day) : 2025-01-16T00:00:00',
                  },
                  filterState: {
                    value:
                      'DATEADD(DATETIME("2025-01-16T00:00:00"), -7, day) : 2025-01-16T00:00:00',
                  },
                  id: 'NATIVE_FILTER_ID',
                },
              },
            },
            timecolumn_filter: {
              summary: 'Time Column Filter',
              value: {
                dataMask: {
                  extraFormData: { granularity_sqla: 'order_date' },
                  filterState: { value: ['order_date'] },
                  id: 'NATIVE_FILTER_ID',
                },
              },
            },
            value_filter: {
              summary: 'Value Filter',
              value: {
                dataMask: {
                  extraFormData: { filters: [{ col: 'real_name', op: 'IN', val: ['John Doe'] }] },
                  filterState: { value: ['John Doe'] },
                  id: 'NATIVE_FILTER_ID',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The permanent link was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the permanent link data.' }),
              url: z.string().exactOptional().openapi({ description: 'permanent link.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardPkScreenshotDigestIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{pk}/screenshot/{digest}/',
  tags: ['Dashboards'],
  summary: 'Get a computed screenshot from cache',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'digest', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      download_format: z
        .enum(['png', 'pdf'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'download_format',
            schema: { enum: ['png', 'pdf'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard thumbnail image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardPkThumbnailDigestIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{pk}/thumbnail/{digest}/',
  tags: ['Dashboards'],
  summary: "Get dashboard's thumbnail",
  description: 'Computes async or get already computed dashboard thumbnail from cache.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: {
            description: 'A hex digest that makes this dashboard unique',
            in: 'path',
            name: 'digest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard thumbnail image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    202: {
      description: 'Thumbnail does not exist on cache, fired async to compute',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardUuidStrActivityIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{uuid_str}/activity/',
  tags: ['Dashboards'],
  summary:
    'Activity stream — dashboard own edits + transitive chart-on-dashboard and dataset-via-chart edits, time-bounded by association windows',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dashboard UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Lower bound on issued_at (ISO 8601, UTC)',
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Upper bound on issued_at (ISO 8601, UTC)',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      include: z
        .enum(['self', 'related', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: { default: 'all', enum: ['self', 'related', 'all'], type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Case-insensitive search over the full history (summary, entity name, kind, path, values) — applied before pagination, so `count` reflects the matches.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page_size',
            schema: { default: 25, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Activity stream ordered newest-first',
      content: { 'application/json': { schema: ActivityResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardUuidStrVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{uuid_str}/versions/',
  tags: ['Dashboards'],
  summary: 'Return the version history for a dashboard',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dashboard UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Version history ordered by oldest first',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              result: z.array(VersionListItemSchemaSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dashboard/{uuid_str}/versions/{version_uuid_str}/',
  tags: ['Dashboards'],
  summary: 'Read-only snapshot of the dashboard at a given version',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dashboard UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      version_uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Version UUID as returned by the list endpoint',
            in: 'path',
            name: 'version_uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot of the dashboard at the target version',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ _version: VersionListItemSchemaSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    "The dashboard's scalar fields at the target version (entity-specific keys), plus a `_version` block with the version-level metadata.",
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{uuid_str}/versions/{version_uuid_str}/restore',
  tags: ['Dashboards'],
  summary: 'Revert a dashboard to an earlier version (non-destructive)',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dashboard UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      version_uuid_str: z
        .uuid()
        .openapi({
          param: {
            description:
              'Version UUID as returned by the list-versions endpoint. Stable across retention pruning.',
            in: 'path',
            name: 'version_uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard was restored',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description:
        'A chart the restore was linking or unlinking was permanently deleted while the restore ran. Nothing was changed; retry the same request.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardUuidPurgeRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{uuid}/purge',
  tags: ['Dashboards'],
  summary: 'Permanently delete a soft-deleted dashboard',
  description:
    'Irreversibly remove an archived dashboard and its dependents. Limited to owners and admins (same audience as restore).',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard permanently deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DashboardUuidRestoreRoute = createRoute({
  method: 'post',
  path: '/api/v1/dashboard/{uuid}/restore',
  tags: ['Dashboards'],
  summary: 'Restore a soft-deleted dashboard',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard restored',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabaseIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/',
  tags: ['Database'],
  summary: 'Get a list of databases',
  description:
    'Gets a list of databases, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(DatabaseRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabaseIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/',
  tags: ['Database'],
  summary: 'Create a new database',
  request: {
    body: {
      description: 'Database schema',
      content: { 'application/json': { schema: DatabaseRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Database added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatabaseRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabaseInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/_info',
  tags: ['Database'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabaseAvailableIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/available/',
  tags: ['Database'],
  summary: 'Get names of databases currently available',
  responses: {
    200: {
      description: 'Database names',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                available_drivers: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'Installed drivers for the engine' }),
                default_driver: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Default driver for the engine' }),
                engine: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Name of the SQLAlchemy engine' }),
                engine_information: z
                  .object({
                    disable_ssh_tunneling: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether the engine supports SSH Tunnels' }),
                    supports_file_upload: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether the engine supports file uploads' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Dict with public properties form the DB Engine',
                    required: [],
                  }),
                name: z.string().exactOptional().openapi({ description: 'Name of the database' }),
                parameters: z
                  .object({})
                  .exactOptional()
                  .openapi({ description: 'JSON schema defining the needed parameters' }),
                preferred: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Is the database preferred?' }),
                sqlalchemy_uri_placeholder: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Example placeholder for the SQLAlchemy URI' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: _400Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabaseExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/export/',
  tags: ['Database'],
  summary: 'Download database(s) and associated dataset(s) as a zip file',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A zip file with database(s) and dataset(s) as YAML',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabaseImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/import/',
  tags: ['Database'],
  summary: 'Import database(s) with associated datasets',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              encrypted_extra_secrets: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of sensitive values for masked_encrypted_extra fields. Keys are file paths (e.g., "databases/db.yaml") and values are JSON objects mapping JSONPath expressions to secrets. (e.g., `{"databases/MyDatabase.yaml": {"$.credentials_info.private_key": "actual_key"}}`).',
                }),
              formData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'upload file (ZIP)' }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing databases?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_private_key_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key_password"}`.',
                }),
              ssh_tunnel_private_keys: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key"}`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabaseOauth2IndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/oauth2/',
  tags: ['Database'],
  summary: 'Receive personal access tokens from OAuth2',
  description:
    '-> Receive and store personal access tokens from OAuth for user-level authorization',
  request: {
    query: z.object({
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'state', schema: { type: 'string' }, required: false },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'code', schema: { type: 'string' }, required: false },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'scope', schema: { type: 'string' }, required: false },
        }),
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'error', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A dummy self-closing HTML page',
      content: { 'text/html': { schema: z.string() } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabaseRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/related/{column_name}',
  tags: ['Database'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabaseTestConnectionIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/test_connection/',
  tags: ['Database'],
  summary: 'Test a database connection',
  request: {
    body: {
      description: 'Database schema',
      content: { 'application/json': { schema: DatabaseTestConnectionSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database Test Connection',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabaseUploadMetadataIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/upload_metadata/',
  tags: ['Database'],
  summary: 'Upload a file and returns file metadata',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              delimiter: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The character used to separate values in the CSV file (e.g., a comma, semicolon, or tab).',
                }),
              file: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'The file to upload' }),
              header_row: z
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
                  description:
                    'Row containing the headers to use as column names(0 is first line of data). Leave empty if there is no header row.',
                }),
              type: z
                .enum(['csv', 'excel', 'columnar'])
                .openapi({ description: 'File type to upload' }),
            })
            .openapi({ required: ['file', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Upload response',
      content: {
        'application/json': {
          schema: z
            .object({ result: UploadFileMetadataSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    413: {
      description: 'Payload too large, file exceeds the maximum allowed size',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabaseValidateParametersIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/validate_parameters/',
  tags: ['Database'],
  summary: 'Validate database connection parameters',
  request: {
    body: {
      description: 'DB-specific parameters',
      content: { 'application/json': { schema: DatabaseValidateParametersSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database Test Connection',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}',
  tags: ['Database'],
  summary: 'Get a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Database', content: { 'application/json': { schema: z.object({}) } } },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DatabasePkRoute = createRoute({
  method: 'put',
  path: '/api/v1/database/{pk}',
  tags: ['Database'],
  summary: 'Change a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Database schema',
      content: { 'application/json': { schema: DatabaseRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatabaseRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DatabasePkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/database/{pk}',
  tags: ['Database'],
  summary: 'Delete a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Database deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkCatalogsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/catalogs/',
  tags: ['Database'],
  summary: 'Get all catalogs from a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          DatabaseCatalogsQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/database_catalogs_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A List of all catalogs from the database',
      content: { 'application/json': { schema: CatalogsResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkConnectionRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/connection',
  tags: ['Database'],
  summary: 'Get a database connection info',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Database with connection info',
      content: { 'application/json': { schema: DatabaseConnectionSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkFunctionNamesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/function_names/',
  tags: ['Database'],
  summary: 'Get function names supported by a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatabaseFunctionNamesResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkOauth2TokensIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/oauth2_tokens/',
  tags: ['Database'],
  summary: 'List OAuth2 credential metadata for a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Paginated OAuth2 credential metadata',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              ids: z.array(z.int()).exactOptional(),
              result: z.array(DatabaseOAuth2TokensRestApiGetListSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabasePkOauth2TokensAllIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/{pk}/oauth2_tokens/all/',
  tags: ['Database'],
  summary: 'Delete all OAuth2 access and refresh tokens  for a DB connection.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'All OAuth2 credentials deleted successfully' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabasePkOauth2TokensDeleteIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/{pk}/oauth2_tokens/delete/',
  tags: ['Database'],
  summary: 'Delete OAuth2 access and refresh tokens for a DB connection.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DatabaseOAuth2TokensDeleteSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OAuth2 credentials deleted successfully' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkRelatedObjectsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/related_objects/',
  tags: ['Database'],
  summary: 'Get charts and dashboards count associated to a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatabaseRelatedObjectsResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkSchemasIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/schemas/',
  tags: ['Database'],
  summary: 'Get all schemas from a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          DatabaseSchemasQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/database_schemas_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A List of all schemas from the database',
      content: { 'application/json': { schema: SchemasResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/schemas_access_for_file_upload/',
  tags: ['Database'],
  summary: 'The list of the database schemas where to upload information',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of the database schemas where to upload information',
      content: { 'application/json': { schema: DatabaseSchemaAccessForFileUploadResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkSelectStarTableNameIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/select_star/{table_name}/',
  tags: ['Database'],
  summary: 'Get database select star for table',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'path',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SQL statement for a select star for table',
      content: { 'application/json': { schema: SelectStarResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/select_star/{table_name}/{schema_name}/',
  tags: ['Database'],
  summary: 'Get database select star for table',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'path',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SQL statement for a select star for table',
      content: { 'application/json': { schema: SelectStarResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabasePkSyncPermissionsIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/{pk}/sync_permissions/',
  tags: ['Database'],
  summary: 'Re-sync all permissions for a database connection',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database connection ID',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task created to sync permissions.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkTableTableNameSchemaNameIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/table/{table_name}/{schema_name}/',
  tags: ['Database'],
  summary: 'Get database table metadata',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'path',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Table metadata information',
      content: { 'application/json': { schema: TableMetadataResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/table_extra/{table_name}/{schema_name}/',
  tags: ['Database'],
  summary: 'Get table extra metadata',
  description: 'Response depends on each DB engine spec normally focused on partitions.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'path',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Table extra metadata information',
      content: { 'application/json': { schema: TableExtraMetadataResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkTableMetadataIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/table_metadata/',
  tags: ['Database'],
  summary: 'Get table metadata',
  description: 'Metadata associated with the table (columns, indexes, etc.)',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional table schema, if not passed default schema will be used',
            in: 'query',
            name: 'schema',
            schema: { type: 'string' },
            required: false,
          },
        }),
      catalog: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional table catalog, if not passed default catalog will be used',
            in: 'query',
            name: 'catalog',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Table metadata information',
      content: { 'application/json': { schema: TableExtraMetadataResponseSchemaSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkTableMetadataExtraIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/table_metadata/extra/',
  tags: ['Database'],
  summary: 'Get table extra metadata',
  description: 'Extra metadata associated with the table (partitions, description, etc.)',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional table schema, if not passed the schema configured in the database will be used',
            in: 'query',
            name: 'schema',
            schema: { type: 'string' },
            required: false,
          },
        }),
      catalog: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional table catalog, if not passed the catalog configured in the database will be used',
            in: 'query',
            name: 'catalog',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Table extra metadata information',
      content: { 'application/json': { schema: TableExtraMetadataResponseSchemaSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatabasePkTablesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/database/{pk}/tables/',
  tags: ['Database'],
  summary: 'Get a list of tables for given database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          DatabaseTablesQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/database_tables_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Tables list',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              result: z
                .array(DatabaseTablesResponseSchema)
                .exactOptional()
                .openapi({ description: 'A List of tables for given database' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabasePkUploadIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/{pk}/upload/',
  tags: ['Database'],
  summary: 'Upload a file to a database table',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              already_exists: z
                .enum(['fail', 'replace', 'append'])
                .default('fail')
                .exactOptional()
                .openapi({
                  description:
                    'What to do if the table already exists accepts: fail, replace, append',
                }),
              column_data_types: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "[CSV only] A dictionary with column names and their data types if you need to change the defaults. Example: {'user_id':'int'}. Check Python Pandas library for supported data types",
                }),
              column_dates: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    '[CSV and Excel only] A list of column names that should be parsed as dates. Example: date,timestamp',
                }),
              columns_read: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({ description: 'A List of the column names that should be read' }),
              dataframe_index: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Write dataframe index as a column.' }),
              day_first: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: '[CSV only] DD/MM format dates, international and European format',
                }),
              decimal_character: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "[CSV and Excel only] Character to recognize as decimal point. Default is '.'",
                }),
              delimiter: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '[CSV only] The character used to separate values in the CSV file (e.g., a comma, semicolon, or tab).',
                }),
              file: z.string().openapi({ description: 'The file to upload' }),
              header_row: z
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
                  description:
                    '[CSV and Excel only] Row containing the headers to use as column names (0 is first line of data). Leave empty if there is no header row.',
                }),
              index_column: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '[CSV and Excel only] Column to use as the row labels of the dataframe. Leave empty if no index column',
                }),
              index_label: z
                .string()
                .exactOptional()
                .openapi({ description: 'Index label for index column.' }),
              null_values: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    "[CSV and Excel only] A list of strings that should be treated as null. Examples: '' for empty strings, 'None', 'N/A', Warning: Hive database supports only a single value",
                }),
              rows_to_read: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(1),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({
                  description:
                    '[CSV and Excel only] Number of rows to read from the file. If None, reads all rows.',
                }),
              schema: z
                .string()
                .exactOptional()
                .openapi({ description: 'The schema to upload the data file to.' }),
              sheet_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '[Excel only]] Strings used for sheet names (default is the first sheet).',
                }),
              skip_blank_lines: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: '[CSV only] Skip blank lines in the CSV file.' }),
              skip_initial_space: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: '[CSV only] Skip spaces after delimiter.' }),
              skip_rows: z
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
                  description: '[CSV and Excel only] Number of rows to skip at start of file.',
                }),
              table_name: z
                .string()
                .min(1)
                .max(10000)
                .openapi({ description: 'The name of the table to be created/appended' }),
              type: z
                .enum(['csv', 'excel', 'columnar'])
                .openapi({ description: 'File type to upload' }),
            })
            .openapi({ required: ['file', 'table_name', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'CSV upload response',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    413: {
      description: 'Payload too large, file exceeds the maximum allowed size',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatabasePkValidateSqlIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/database/{pk}/validate_sql/',
  tags: ['Database'],
  summary: 'Validate arbitrary SQL',
  description: 'Validates that arbitrary SQL is acceptable for the given database.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Validate SQL request',
      content: { 'application/json': { schema: ValidateSQLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Validation result',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(ValidateSQLResponseSchema)
                .exactOptional()
                .openapi({ description: 'A List of SQL errors found on the statement' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/',
  tags: ['Datasets'],
  summary: 'Get a list of datasets',
  description:
    'Gets a list of datasets, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(DatasetRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/',
  tags: ['Datasets'],
  summary: 'Create a new dataset',
  request: {
    body: {
      description: 'Dataset schema',
      content: { 'application/json': { schema: DatasetRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Dataset added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatasetRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DatasetIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dataset/',
  tags: ['Datasets'],
  summary:
    'Bulk delete datasets (soft delete, recoverable via restore, when the SOFT_DELETE feature flag is enabled; permanent otherwise)',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dataset bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/_info',
  tags: ['Datasets'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetDistinctColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/distinct/{column_name}',
  tags: ['Datasets'],
  summary: 'Get distinct values from field data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Distinct field data',
      content: { 'application/json': { schema: DistincResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetDuplicateRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/duplicate',
  tags: ['Datasets'],
  summary: 'Duplicate a dataset',
  request: {
    body: {
      description: 'Dataset schema',
      content: { 'application/json': { schema: DatasetDuplicateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Dataset duplicated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatasetDuplicateSchemaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/export/',
  tags: ['Datasets'],
  summary: 'Download multiple datasets as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Dataset export', content: { 'text/plain': { schema: z.string() } } },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetGetOrCreateIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/get_or_create/',
  tags: ['Datasets'],
  summary: 'Retrieve a table by name, or create it if it does not exist',
  request: {
    body: {
      content: { 'application/json': { schema: GetOrCreateDatasetSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The ID of the table',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ table_id: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/import/',
  tags: ['Datasets'],
  summary: 'Import dataset(s) with associated databases',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'upload file (ZIP or YAML)',
                }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing datasets?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_private_key_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key_password"}`.',
                }),
              ssh_tunnel_private_keys: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key"}`.',
                }),
              sync_columns: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'sync columns?' }),
              sync_metrics: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'sync metrics?' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dataset import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/related/{column_name}',
  tags: ['Datasets'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetRelatedObjectsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/related_objects/',
  tags: ['Datasets'],
  summary: 'Get charts and dashboards associated to multiple datasets',
  description:
    'Aggregates the charts built on any of the requested datasets and the dashboards those charts appear on. Each chart and dashboard is listed once even if it depends on several of the datasets. Requested datasets the user cannot see are ignored; the response is 404 only when none of them are visible.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedObjectsIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_related_objects_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatasetRelatedObjectsResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DatasetWarmUpCacheRoute = createRoute({
  method: 'put',
  path: '/api/v1/dataset/warm_up_cache',
  tags: ['Datasets'],
  summary: 'Warm up the cache for each chart powered by the given table',
  description:
    'Warms up the cache for the table. Note for slices a force refresh occurs. In terms of the `extra_filters` these can be obtained from records in the JSON encoded `logs.json` column associated with the `explore` action.',
  request: {
    body: {
      description:
        'Identifies the database and table to warm up cache for, and any additional dashboard or filter context to use.',
      content: { 'application/json': { schema: DatasetCacheWarmUpRequestSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "Each chart's warmup status",
      content: { 'application/json': { schema: DatasetCacheWarmUpResponseSchemaSchema } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetIdOrUuidRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{id_or_uuid}',
  tags: ['Datasets'],
  summary: 'Get a dataset',
  description: 'Get a dataset by ID',
  request: {
    params: z.object({
      id_or_uuid: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the dataset, or its uuid',
            in: 'path',
            name: 'id_or_uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
      include_rendered_sql: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should Jinja macros from sql, metrics and columns be rendered and included in the response',
            in: 'query',
            name: 'include_rendered_sql',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset object has been returned.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              result: DatasetRestApiGetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetIdOrUuidRelatedObjectsRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{id_or_uuid}/related_objects',
  tags: ['Datasets'],
  summary: 'Get charts and dashboards count associated to a dataset',
  request: {
    params: z.object({
      id_or_uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'id_or_uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatasetRelatedObjectsResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DatasetPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/dataset/{pk}',
  tags: ['Datasets'],
  summary: 'Update a dataset',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      override_columns: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'override_columns',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional optimistic-concurrency guard. Pass the ``ETag`` returned by a prior read of this dataset; the update is rejected with 412 if the dataset has changed since, or with a retryable 409 if a concurrent save won a lock race (see those responses for which action each calls for).',
            in: 'header',
            name: 'If-Match',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Dataset schema',
      content: { 'application/json': { schema: DatasetRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dataset changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              new_transaction_id: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Continuum transaction_id of the live row after this update. When this differs from ``old_transaction_id`` the update produced a new version row (regardless of whether ``new_version`` changed).',
                }),
              new_version: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '0-based version_number of the newly-live row after this update. Can equal ``old_version`` when no versioned column changed, or when retention pruning dropped an older closed row in the same commit.',
                }),
              new_version_uuid: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deterministic version_uuid of the live row after this update. Null when version capture is disabled.',
                }),
              old_transaction_id: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Continuum transaction_id of the live row before this update. Stable across retention pruning.',
                }),
              old_version: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '0-based version_number of the live row before this update (null if the dataset had no prior history). Matches the ``version_number`` field of the list versions endpoint. Unstable under retention pruning — see ``old_transaction_id`` for a stable identifier.',
                }),
              old_version_uuid: z
                .uuid()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deterministic version_uuid of the live row before this update. Null when version capture is disabled or the dataset has no version rows yet.',
                }),
              result: DatasetRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description:
        "A concurrent save on this dataset won a database lock race, so this conditional request could not be applied. The client's ``If-Match`` token is NOT proven stale: unlike a 412, the correct action is to retry the SAME request (with backoff; a few attempts, then surface the conflict) rather than refetch the entity for a new token.",
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    412: {
      description:
        "The dataset changed since the version identified by the request's ``If-Match`` header; the update was not applied. The token is stale: refetch the entity to pick up the current version before retrying — retrying the same request unchanged will fail again (contrast the retryable 409 above).",
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DatasetPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dataset/{pk}',
  tags: ['Datasets'],
  summary:
    'Delete a dataset (soft delete, recoverable via restore, when the SOFT_DELETE feature flag is enabled; permanent otherwise)',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DatasetPkColumnColumnIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dataset/{pk}/column/{column_id}',
  tags: ['Datasets'],
  summary: 'Delete a dataset column',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dataset pk for this column',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      column_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The column id for this dataset',
            in: 'path',
            name: 'column_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Column deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetPkDrillInfoIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{pk}/drill_info/',
  tags: ['Datasets'],
  summary: 'Get dataset drill info',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dataset ID',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset drill info',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1DatasetPkMetricMetricIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/dataset/{pk}/metric/{metric_id}',
  tags: ['Datasets'],
  summary: 'Delete a dataset metric',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dataset pk for this column',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      metric_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The metric id for this dataset',
            in: 'path',
            name: 'metric_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metric deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetPkPartitionMappingPreviewIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/{pk}/partition_mapping/preview/',
  tags: ['Datasets'],
  summary: 'Preview a partition filter mapping',
  description:
    'Evaluate a partition value transform at sample values and return the predicate that would be appended to queries. The predicate is built by the same code the query path uses, so the preview cannot drift from what a chart emits. Parse and denylist checks run before anything reaches the engine, so an unparseable transform costs no query.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dataset ID',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PartitionMappingPreviewSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preview result',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  emitted_predicate: z.string().exactOptional(),
                  error: z.string().exactOptional(),
                  reason: z
                    .enum([
                      'unconfigured',
                      'validation',
                      'parse',
                      'operator',
                      'resolution',
                      'offset',
                      'escaping',
                      'transform_escaping',
                      'engine',
                      'type',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'Why the mapping is not valid. Absent when it is. The editor branches on this to decide how to present the failure.',
                    }),
                  sample_input: z.string().exactOptional(),
                  valid: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: {
      description: 'Too many preview requests for this dataset',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1DatasetPkRefreshRoute = createRoute({
  method: 'put',
  path: '/api/v1/dataset/{pk}/refresh',
  tags: ['Datasets'],
  summary: 'Refresh and update columns of a dataset',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetUuidStrActivityIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{uuid_str}/activity/',
  tags: ['Datasets'],
  summary: "Get a dataset's activity stream",
  description:
    "A dataset's own edits only. Datasets have no transitive layer in V2 — chart and dashboard edits that touch this dataset do NOT appear here. ``?include=self`` and ``?include=all`` return the dataset's own edits; ``?include=related`` returns an empty stream (a dataset has no related entities to fan out to).",
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dataset UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      include: z
        .enum(['self', 'related', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            schema: { default: 'all', enum: ['self', 'related', 'all'], type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Case-insensitive search over the full history (summary, entity name, kind, path, values) — applied before pagination, so `count` reflects the matches.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page_size',
            schema: { default: 25, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Activity stream ordered newest-first',
      content: { 'application/json': { schema: ActivityResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetUuidStrVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{uuid_str}/versions/',
  tags: ['Datasets'],
  summary: 'Return the version history for a dataset',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dataset UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Version history ordered by oldest first',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int().exactOptional(),
              result: z.array(VersionListItemSchemaSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{uuid_str}/versions/{version_uuid_str}/',
  tags: ['Datasets'],
  summary: 'Read-only snapshot of the dataset at a given version',
  description:
    "Returns the dataset's scalar fields plus reconstructed ``columns`` and ``metrics`` lists as they were at the target version. Does not modify live state.",
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dataset UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      version_uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Version UUID as returned by the list endpoint',
            in: 'path',
            name: 'version_uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot of the dataset at the target version',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ _version: VersionListItemSchemaSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    "The dataset's scalar fields at the target version (entity-specific keys), plus `columns` / `metrics` as they were at that version, plus a `_version` block with the version-level metadata.",
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/{uuid_str}/versions/{version_uuid_str}/restore',
  tags: ['Datasets'],
  summary: 'Revert a dataset to an earlier version (non-destructive)',
  request: {
    params: z.object({
      uuid_str: z
        .uuid()
        .openapi({
          param: {
            description: 'Dataset UUID',
            in: 'path',
            name: 'uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      version_uuid_str: z
        .uuid()
        .openapi({
          param: {
            description:
              'Version UUID as returned by the list-versions endpoint. Stable across retention pruning.',
            in: 'path',
            name: 'version_uuid_str',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset was restored',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetUuidPurgeRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/{uuid}/purge',
  tags: ['Datasets'],
  summary: 'Permanently delete a soft-deleted dataset',
  description:
    'Irreversibly remove an archived dataset and its dependents. Limited to owners and admins (same audience as restore).',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Confirmed dependency impact',
      content: { 'application/json': { schema: DatasetPurgeRequestSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dataset permanently deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description: 'Dataset dependency impact changed',
      content: {
        'application/json': {
          schema: z
            .object({
              impact: DatasetPurgeImpactSchemaSchema,
              message: z.string(),
              reason: z.literal('purge_impact_changed'),
            })
            .openapi({ required: ['message', 'reason', 'impact'] }),
        },
      },
    },
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasetUuidPurgeImpactRoute = createRoute({
  method: 'get',
  path: '/api/v1/dataset/{uuid}/purge-impact',
  tags: ['Datasets'],
  summary: 'Preview the dependency impact of purging an archived dataset',
  description:
    'Report the charts and dashboards that depend on an archived dataset, with an impact token that must be echoed back on the purge request. Limited to owners and admins (same audience as restore).',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dependency impact of purging the dataset',
      content: { 'application/json': { schema: DatasetPurgeImpactSchemaSchema } },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasetUuidRestoreRoute = createRoute({
  method: 'post',
  path: '/api/v1/dataset/{uuid}/restore',
  tags: ['Datasets'],
  summary: 'Restore a soft-deleted dataset',
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset restored',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasourceIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/datasource/',
  tags: ['Datasources'],
  summary: 'List datasets and semantic views combined',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Combined list of datasets and semantic views' },
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasourceDatasourceTypeDatasourceIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/datasource/{datasource_type}/{datasource_id}',
  tags: ['Datasources'],
  summary: 'Get datasource metadata and capabilities',
  request: {
    params: z.object({
      datasource_type: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasource_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'datasource_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Datasource metadata plus a capabilities block',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/datasource/{datasource_type}/{datasource_id}/column/{column_name}/values/',
    tags: ['Datasources'],
    summary: 'Get possible values for a datasource column',
    request: {
      params: z.object({
        datasource_type: z
          .string()
          .openapi({
            param: {
              description: 'The type of datasource',
              in: 'path',
              name: 'datasource_type',
              required: true,
              schema: { type: 'string' },
            },
          }),
        datasource_id: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'The id of the datasource',
              in: 'path',
              name: 'datasource_id',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        column_name: z
          .string()
          .openapi({
            param: {
              description: 'The name of the column to get values for',
              in: 'path',
              name: 'column_name',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        q: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Optional substring search for SQL dataset columns and text semantic dimensions. Semantic non-text dimensions return the bounded page without server-side search. Case sensitivity follows the datasource or semantic provider.',
              in: 'query',
              name: 'q',
              schema: { type: 'string' },
              required: false,
            },
          }),
        semantic_selection_version: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Identity version from the saved or explicitly initialized field selections. Required for versioned semantic views; never infer it from current datasource metadata for legacy selections.',
              in: 'query',
              name: 'semantic_selection_version',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'A List of distinct values for the column',
        content: {
          'application/json': {
            schema: z
              .object({
                result: z
                  .array(z.xor([z.string(), z.int(), z.number(), z.boolean(), z.object({})]))
                  .exactOptional(),
                suggestions_status: z
                  .literal('unavailable_versioned_view')
                  .exactOptional()
                  .openapi({
                    description:
                      'Selection provenance is missing or stale for this versioned semantic view; reselect fields or enter values manually.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      400: _400Response,
      401: _401Response,
      403: _403Response,
      404: _404Response,
      500: _500Response,
    },
    security: [{ jwt: [] }, { api_key: [] }],
  })

export const postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute = createRoute({
  method: 'post',
  path: '/api/v1/datasource/{datasource_type}/{datasource_id}/compatible',
  tags: ['Datasources'],
  summary: 'Get compatible metrics and dimensions',
  request: {
    params: z.object({
      datasource_type: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasource_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'datasource_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              selected_dimensions: z.array(z.string()).exactOptional(),
              selected_metrics: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Compatible metrics and dimensions',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  compatible_dimensions: z.array(z.string()).exactOptional(),
                  compatible_metrics: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute = createRoute({
  method: 'post',
  path: '/api/v1/datasource/{datasource_type}/{datasource_id}/query',
  tags: ['Datasources'],
  summary: 'Query a datasource by its semantic definitions',
  request: {
    params: z.object({
      datasource_type: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datasource_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'datasource_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DatasourceQuerySchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query result',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(z.object({})).exactOptional() })
            .openapi({ required: [] }),
        },
        'application/vnd.apache.arrow.stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/datasource/{datasource_type}/{datasource_id}/validate_expression/',
    tags: ['Datasources'],
    summary: 'Validate a SQL expression against a datasource',
    request: {
      params: z.object({
        datasource_type: z
          .string()
          .openapi({
            param: {
              description: 'The type of datasource',
              in: 'path',
              name: 'datasource_type',
              required: true,
              schema: { type: 'string' },
            },
          }),
        datasource_id: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'The id of the datasource',
              in: 'path',
              name: 'datasource_id',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                clause: z
                  .enum(['WHERE', 'HAVING'])
                  .exactOptional()
                  .openapi({ description: 'SQL clause type for filter expressions' }),
                expression: z.string().openapi({ description: 'The SQL expression to validate' }),
                expression_type: z
                  .enum(['column', 'metric', 'where', 'having'])
                  .default('where')
                  .exactOptional()
                  .openapi({ description: 'The type of SQL expression' }),
              })
              .openapi({ required: ['expression'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Validation result',
        content: {
          'application/json': {
            schema: z
              .object({
                result: z
                  .array(
                    z
                      .object({
                        end_column: z.int().exactOptional(),
                        line_number: z.int().exactOptional(),
                        message: z.string().exactOptional(),
                        start_column: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'Empty array for success, errors for failure' }),
              })
              .openapi({ required: [] }),
          },
        },
      },
      400: _400Response,
      401: _401Response,
      403: _403Response,
      404: _404Response,
      500: _500Response,
    },
    security: [{ jwt: [] }, { api_key: [] }],
  })

export const getApiV1EmbeddedDashboardUuidRoute = createRoute({
  method: 'get',
  path: '/api/v1/embedded_dashboard/{uuid}',
  tags: ['Embedded Dashboard'],
  summary: 'Get a report schedule log',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'The embedded configuration uuid',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      uiConfig: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The ui config of embedded dashboard (optional).',
            in: 'query',
            name: 'uiConfig',
            schema: { type: 'number' },
            required: false,
          },
        }),
      show_filters: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show filters (optional).',
            in: 'query',
            name: 'show_filters',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      expand_filters: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Expand filters (optional).',
            in: 'query',
            name: 'expand_filters',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      native_filters_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Native filters key to apply filters. (optional).',
            in: 'query',
            name: 'native_filters_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      permalink_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Permalink key to apply filters. (optional).',
            in: 'query',
            name: 'permalink_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result contains the embedded dashboard configuration',
      content: {
        'application/json': {
          schema: z
            .object({ result: EmbeddedDashboardResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
        'text/html': { schema: z.string() },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ExploreIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/explore/',
  tags: ['Explore'],
  summary: 'Assemble Explore related information in a single endpoint',
  description:
    'Assembles Explore related information (form_data, slice, dataset) in a single endpoint.<br/><br/> The information can be assembled from:<br/> - The cache using a form_data_key<br/> - The metadata database using a permalink_key<br/> - Build from scratch using dataset or slice identifiers.',
  request: {
    query: z.object({
      form_data_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'form_data_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      permalink_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'permalink_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      slice_id: z
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
          param: { in: 'query', name: 'slice_id', schema: { type: 'integer' }, required: false },
        }),
      datasource_id: z
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
            in: 'query',
            name: 'datasource_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      datasource_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'datasource_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the initial context.',
      content: { 'application/json': { schema: ExploreContextSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ExploreFormDataRoute = createRoute({
  method: 'post',
  path: '/api/v1/explore/form_data',
  tags: ['Explore Form Data'],
  summary: 'Create a new form_data',
  request: {
    query: z.object({
      tab_id: z
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
          param: { in: 'query', name: 'tab_id', schema: { type: 'integer' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: FormDataPostSchemaSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The form_data was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the form_data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ExploreFormDataKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/explore/form_data/{key}',
  tags: ['Explore Form Data'],
  summary: 'Get a form_data',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the stored form_data.',
      content: {
        'application/json': {
          schema: z
            .object({
              form_data: z
                .string()
                .exactOptional()
                .openapi({ description: 'The stored form_data' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ExploreFormDataKeyRoute = createRoute({
  method: 'put',
  path: '/api/v1/explore/form_data/{key}',
  tags: ['Explore Form Data'],
  summary: 'Update an existing form_data',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      tab_id: z
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
          param: { in: 'query', name: 'tab_id', schema: { type: 'integer' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: FormDataPutSchemaSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The form_data was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the form_data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ExploreFormDataKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/explore/form_data/{key}',
  tags: ['Explore Form Data'],
  summary: 'Delete a form_data',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The form_data key.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tab_id: z
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
          param: { in: 'query', name: 'tab_id', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted the stored form_data.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'The result of the operation' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ExplorePermalinkRoute = createRoute({
  method: 'post',
  path: '/api/v1/explore/permalink',
  tags: ['Explore Permanent Link'],
  summary: 'Create a new permanent link',
  request: {
    body: {
      content: { 'application/json': { schema: ExplorePermalinkStateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The permanent link was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the permanent link data.' }),
              url: z.string().exactOptional().openapi({ description: 'permanent link.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ExplorePermalinkKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/explore/permalink/{key}',
  tags: ['Explore Permanent Link'],
  summary: "Get chart's permanent link state",
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the stored form_data.',
      content: {
        'application/json': {
          schema: z
            .object({
              state: z.object({}).exactOptional().openapi({ description: 'The stored state' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1LogIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/',
  tags: ['LogRestApi'],
  summary: 'Get a list of logs',
  description:
    'Gets a list of logs, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(LogRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1LogIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/log/',
  tags: ['LogRestApi'],
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: LogRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: LogRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1LogRecentActivityIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/recent_activity/',
  tags: ['LogRestApi'],
  summary: 'Get recent activity data for a user',
  request: {
    params: z.object({
      user_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The id of the user',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRecentActivitySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_recent_activity_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A List of recent activity objects',
      content: { 'application/json': { schema: RecentActivityResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1LogPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/{pk}',
  tags: ['LogRestApi'],
  summary: 'Get a log detail information',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: LogRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1MeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/me/',
  tags: ['Current User'],
  summary: 'Get the user object',
  description:
    'Gets the user object corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.',
  responses: {
    200: {
      description: 'The current user',
      content: {
        'application/json': {
          schema: z
            .object({ result: UserResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1MeIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/me/',
  tags: ['Current User'],
  summary: 'Update the current user',
  description: "Updates the current user's first name, last name, or password.",
  request: {
    body: {
      content: { 'application/json': { schema: CurrentUserPutSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({ result: UserResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1MeRolesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/me/roles/',
  tags: ['Current User'],
  summary: 'Get the user roles',
  description:
    'Gets the user roles corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.',
  responses: {
    200: {
      description: 'The current user',
      content: {
        'application/json': {
          schema: z
            .object({ result: UserResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1MenuIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/menu/',
  tags: ['Menu'],
  description:
    'Get the menu data structure. Returns a forest like structure with the menu the user has access to',
  responses: {
    200: {
      description: 'Get menu data',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(
                  z
                    .object({
                      childs: z.array(z.object({})).exactOptional(),
                      icon: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Icon name to show for this menu item' }),
                      label: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Pretty name for the menu item' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The internal menu item name, maps to permission_name',
                        }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The URL for the menu item' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Menu items in a forest like data structure' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1QueryIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/query/',
  tags: ['Queries'],
  summary: 'Get a list of queries',
  description:
    'Gets a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(QueryRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1QueryDistinctColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/query/distinct/{column_name}',
  tags: ['Queries'],
  summary: 'Get distinct values from field data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Distinct field data',
      content: { 'application/json': { schema: DistincResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1QueryRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/query/related/{column_name}',
  tags: ['Queries'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1QueryStopRoute = createRoute({
  method: 'post',
  path: '/api/v1/query/stop',
  tags: ['Queries'],
  summary: 'Manually stop a query with client_id',
  request: {
    body: {
      description: 'Stop query schema',
      content: { 'application/json': { schema: StopQuerySchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query stopped',
      content: {
        'application/json': {
          schema: z.object({ result: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: {
      description:
        'Query already finished or target transaction committed; includes the recorded query\\n',
    },
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1QueryUpdatedSinceRoute = createRoute({
  method: 'get',
  path: '/api/v1/query/updated_since',
  tags: ['Queries'],
  summary: 'Get a list of queries that changed after last_updated_ms',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueriesGetUpdatedSinceSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/queries_get_updated_since_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Queries list',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(QueryRestApiGetSchema)
                .exactOptional()
                .openapi({ description: 'A List of queries that changed after last_updated_ms' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1QueryPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/query/{pk}',
  tags: ['Queries'],
  summary: 'Get query detail information',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: QueryRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/',
  tags: ['Report Schedules'],
  summary: 'Get a list of report schedules',
  description:
    'Gets a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(ReportScheduleRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ReportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/report/',
  tags: ['Report Schedules'],
  summary: 'Create a report schedule',
  request: {
    body: {
      description: 'Report Schedule schema',
      content: { 'application/json': { schema: ReportScheduleRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Report schedule added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ReportScheduleRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ReportIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/report/',
  tags: ['Report Schedules'],
  summary: 'Bulk delete report schedules',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Report Schedule bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/_info',
  tags: ['Report Schedules'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportConfigurationIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/configuration/',
  tags: ['Report Schedules'],
  summary: 'Get the global Alerts & Reports configuration',
  description:
    'Returns the values in effect for every setting: the stored value when an admin saved one, otherwise the legacy application config or feature flag fallback.',
  responses: {
    200: {
      description: 'Alerts & Reports configuration',
      content: {
        'application/json': {
          schema: z
            .object({ result: ReportConfigurationSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ReportConfigurationIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/report/configuration/',
  tags: ['Report Schedules'],
  summary: 'Update the global Alerts & Reports configuration',
  description:
    'Admin only. Absent fields keep their value and ``null`` clears a field without restoring its legacy fallback. Recipient restrictions and minimum intervals are validated against existing alerts/reports. When any conflicts, the configuration is not saved and the impacted schedules are returned.',
  request: {
    body: {
      description: 'Alerts & Reports configuration',
      content: { 'application/json': { schema: ReportConfigurationSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Configuration updated',
      content: {
        'application/json': {
          schema: z
            .object({ result: ReportConfigurationSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    422: {
      description: 'Existing schedules conflict with the configuration',
      content: {
        'application/json': {
          schema: z
            .object({
              impacted_schedules: z.array(ReportConfigImpactedSchemaSchema).exactOptional(),
              message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/related/{column_name}',
  tags: ['Report Schedules'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportSlackChannelsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/slack_channels/',
  tags: ['Report Schedules'],
  summary: 'Get slack channels',
  description: 'Get slack channels',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetSlackChannelsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_slack_channels_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Slack channels',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(
                  z
                    .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ReportSubscribeRoute = createRoute({
  method: 'post',
  path: '/api/v1/report/subscribe',
  tags: ['Report Schedules'],
  summary: 'Subscribe to a chart or dashboard report',
  description:
    "Creates a report schedule locked to the authenticated user's email. ``creation_method`` is derived server-side from the payload (chart → charts, dashboard → dashboards). ``recipients`` are not accepted and are always set to the requesting user's email address.",
  request: {
    body: {
      description: 'Report schedule subscription schema',
      content: { 'application/json': { schema: ReportScheduleRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Report schedule subscription created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ReportScheduleRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/{pk}',
  tags: ['Report Schedules'],
  summary: 'Get a report schedule',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: ReportScheduleRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ReportPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/report/{pk}',
  tags: ['Report Schedules'],
  summary: 'Update a report schedule',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Report Schedule pk',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Report Schedule schema',
      content: { 'application/json': { schema: ReportScheduleRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Report Schedule changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ReportScheduleRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ReportPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/report/{pk}',
  tags: ['Report Schedules'],
  summary: 'Delete a report schedule',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule pk',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ReportPkExecuteRoute = createRoute({
  method: 'post',
  path: '/api/v1/report/{pk}/execute',
  tags: ['Report Schedules'],
  summary: 'Execute a report schedule immediately',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule pk',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Report schedule execution started',
      content: {
        'application/json': {
          schema: z
            .object({
              execution_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'UUID to track the execution status' }),
              message: z.string().exactOptional().openapi({ description: 'Success message' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
    503: { description: 'Celery backend not configured' },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportPkLogIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/{pk}/log/',
  tags: ['Report Schedules'],
  summary: 'Get a list of report schedule logs',
  description:
    'Gets a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule id for these logs',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from logs',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of log ids' }),
              result: z
                .array(ReportExecutionLogRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ReportPkLogLogIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/report/{pk}/log/{log_id}',
  tags: ['Report Schedules'],
  summary: 'Get a report schedule log',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule pk for log',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      log_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The log pk',
            in: 'path',
            name: 'log_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item log',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ description: 'The log id' }),
              result: ReportExecutionLogRestApiGetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1RowlevelsecurityIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/rowlevelsecurity/',
  tags: ['Row Level Security'],
  summary: 'Get a list of RLS',
  description:
    'Gets a list of RLS, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(RLSRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1RowlevelsecurityIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/rowlevelsecurity/',
  tags: ['Row Level Security'],
  summary: 'Create a new RLS rule',
  request: {
    body: {
      description: 'RLS schema',
      content: { 'application/json': { schema: RLSRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'RLS Rule added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: RLSRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1RowlevelsecurityIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/rowlevelsecurity/',
  tags: ['Row Level Security'],
  summary: 'Bulk delete RLS rules',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'RLS Rule bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1RowlevelsecurityInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/rowlevelsecurity/_info',
  tags: ['Row Level Security'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1RowlevelsecurityRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/rowlevelsecurity/related/{column_name}',
  tags: ['Row Level Security'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1RowlevelsecurityPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/rowlevelsecurity/{pk}',
  tags: ['Row Level Security'],
  summary: 'Get an RLS',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: RLSRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1RowlevelsecurityPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/rowlevelsecurity/{pk}',
  tags: ['Row Level Security'],
  summary: 'Update an RLS rule',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Rule pk',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'RLS schema',
      content: { 'application/json': { schema: RLSRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Rule changed',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.number().exactOptional(), result: RLSRestApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1RowlevelsecurityPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/rowlevelsecurity/{pk}',
  tags: ['Row Level Security'],
  summary: 'Delete an RLS',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SavedQueryIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/saved_query/',
  tags: ['Queries'],
  summary: 'Get a list of saved queries',
  description:
    'Gets a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SavedQueryRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SavedQueryIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/saved_query/',
  tags: ['Queries'],
  summary: 'Create a saved query',
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SavedQueryRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: SavedQueryRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SavedQueryIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/saved_query/',
  tags: ['Queries'],
  summary: 'Bulk delete saved queries',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Saved queries bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SavedQueryInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/saved_query/_info',
  tags: ['Queries'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SavedQueryDistinctColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/saved_query/distinct/{column_name}',
  tags: ['Queries'],
  summary: 'Get distinct values from field data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Distinct field data',
      content: { 'application/json': { schema: DistincResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SavedQueryExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/saved_query/export/',
  tags: ['Queries'],
  summary: 'Download multiple saved queries as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A zip file with saved query(ies) and database(s) as YAML',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SavedQueryImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/saved_query/import/',
  tags: ['Queries'],
  summary: 'Import saved queries with associated databases',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'upload file (ZIP)' }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing saved queries?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{"databases/MyDatabase.yaml": "my_password"}`.',
                }),
              ssh_tunnel_private_key_passwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key_password"}`.',
                }),
              ssh_tunnel_private_keys: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path `databases/MyDatabase.yaml`, the private_key should be provided in the following format: `{"databases/MyDatabase.yaml": "my_private_key"}`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Saved Query import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SavedQueryRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/saved_query/related/{column_name}',
  tags: ['Queries'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SavedQueryPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/saved_query/{pk}',
  tags: ['Queries'],
  summary: 'Get a saved query',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SavedQueryRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SavedQueryPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/saved_query/{pk}',
  tags: ['Queries'],
  summary: 'Update a saved query',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SavedQueryRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: SavedQueryRestApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SavedQueryPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/saved_query/{pk}',
  tags: ['Queries'],
  summary: 'Delete a saved query',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityCsrfTokenIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/csrf_token/',
  tags: ['Security'],
  summary: 'Get the CSRF token',
  responses: {
    200: {
      description: 'Result contains the CSRF token',
      content: {
        'application/json': {
          schema: z.object({ result: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityGroupsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/groups/',
  tags: ['Security Groups'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SupersetGroupApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityGroupsIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/groups/',
  tags: ['Security Groups'],
  responses: {
    201: { description: 'Group created' },
    400: { description: 'Bad request' },
    500: { description: 'Server error' },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityGroupsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/groups/_info',
  tags: ['Security Groups'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityGroupsPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/groups/{pk}',
  tags: ['Security Groups'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SupersetGroupApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityGroupsPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/groups/{pk}',
  tags: ['Security Groups'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Group updated' },
    400: { description: 'Bad request' },
    404: { description: 'Not found' },
    500: { description: 'Server error' },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityGroupsPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/groups/{pk}',
  tags: ['Security Groups'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityGuestTokenIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/guest_token/',
  tags: ['Security'],
  summary: 'Get a guest token',
  request: {
    body: {
      description: 'Parameters for the guest token',
      content: { 'application/json': { schema: GuestTokenCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Result contains the guest token',
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityLoginRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/login',
  tags: ['Security'],
  description: 'Authenticate and get a JWT access and refresh token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The password for authentication',
                  example: 'complex-password',
                }),
              provider: z
                .enum(['db', 'ldap'])
                .exactOptional()
                .openapi({ description: 'Choose an authentication provider', example: 'db' }),
              refresh: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true a refresh token is provided also',
                  example: true,
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'The username for authentication', example: 'admin' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Authentication Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z.string().exactOptional(),
              refresh_token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
})

export const postApiV1SecurityPasswordRecoveryIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/password_recovery/',
  tags: ['Security'],
  summary: 'Request a password reset link',
  description:
    'Emails a single-use password reset link if the address belongs to an active account with a local password. The response is the same whether or not it does.',
  request: {
    body: {
      content: { 'application/json': { schema: PasswordRecoveryRequestSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request accepted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    404: _404Response,
    429: { description: 'Too many requests' },
  },
  security: [],
})

export const postApiV1SecurityPasswordRecoveryResetIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/password_recovery/reset/',
  tags: ['Security'],
  summary: 'Reset a password with a recovery token',
  description:
    "Consumes the single-use token from a password reset link and sets the account's new password. Every existing browser session for the account is signed out.",
  request: {
    body: {
      content: { 'application/json': { schema: PasswordRecoveryResetSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Password reset',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'The new password was rejected (``message.password``) or the token is invalid, expired or already used (``message.token``)',
      content: {
        'application/json': {
          schema: z.object({ message: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    429: { description: 'Too many requests' },
  },
  security: [],
})

export const getApiV1SecurityPermissionsResourcesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/permissions-resources/',
  tags: ['Security Permissions on Resources (View Menus)'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SupersetPermissionViewMenuApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityPermissionsResourcesIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/permissions-resources/',
  tags: ['Security Permissions on Resources (View Menus)'],
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SupersetPermissionViewMenuApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: SupersetPermissionViewMenuApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityPermissionsResourcesInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/permissions-resources/_info',
  tags: ['Security Permissions on Resources (View Menus)'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityPermissionsResourcesPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/permissions-resources/{pk}',
  tags: ['Security Permissions on Resources (View Menus)'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SupersetPermissionViewMenuApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityPermissionsResourcesPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/permissions-resources/{pk}',
  tags: ['Security Permissions on Resources (View Menus)'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SupersetPermissionViewMenuApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: SupersetPermissionViewMenuApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityPermissionsResourcesPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/permissions-resources/{pk}',
  tags: ['Security Permissions on Resources (View Menus)'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityPermissionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/permissions/',
  tags: ['Security Permissions'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(PermissionApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityPermissionsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/permissions/_info',
  tags: ['Security Permissions'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityPermissionsPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/permissions/{pk}',
  tags: ['Security Permissions'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: PermissionApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityRefreshRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/refresh',
  tags: ['Security'],
  description: 'Use the refresh token to get a new JWT access token',
  responses: {
    200: {
      description: 'Refresh Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new refreshed access token' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt_refresh: [] }],
})

export const getApiV1SecurityResourcesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/resources/',
  tags: ['Security Resources (View Menus)'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(ViewMenuApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityResourcesIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/resources/',
  tags: ['Security Resources (View Menus)'],
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: ViewMenuApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: ViewMenuApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityResourcesInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/resources/_info',
  tags: ['Security Resources (View Menus)'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityResourcesPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/resources/{pk}',
  tags: ['Security Resources (View Menus)'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: ViewMenuApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityResourcesPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/resources/{pk}',
  tags: ['Security Resources (View Menus)'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: ViewMenuApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: ViewMenuApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityResourcesPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/resources/{pk}',
  tags: ['Security Resources (View Menus)'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityRolesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/roles/',
  tags: ['Security Roles'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SupersetRoleApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityRolesIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/roles/',
  tags: ['Security Roles'],
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SupersetRoleApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: SupersetRoleApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityRolesInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/roles/_info',
  tags: ['Security Roles'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityRolesSearchIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/roles/search/',
  tags: ['Security Roles'],
  summary: 'List roles',
  description: 'Fetch a paginated list of roles with user and permission IDs.',
  request: {
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
        const spread = new Map<string, string[]>([
          ['filters', ['q']],
          ['order_column', ['q']],
          ['order_direction', ['q']],
          ['page', ['q']],
          ['page_size', ['q']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          q: z
            .object({
              filters: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        col: z.enum(['user_ids', 'permission_ids', 'name']).exactOptional(),
                        value: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              order_column: z.enum(['id', 'name']).default('id').exactOptional(),
              order_direction: z.enum(['asc', 'desc']).default('asc').exactOptional(),
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
                .default(0)
                .exactOptional(),
              page_size: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(10)
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'q',
                schema: {
                  properties: {
                    filters: {
                      items: {
                        properties: {
                          col: { enum: ['user_ids', 'permission_ids', 'name'], type: 'string' },
                          value: { type: 'string' },
                        },
                        type: 'object',
                      },
                      type: 'array',
                    },
                    order_column: { default: 'id', enum: ['id', 'name'], type: 'string' },
                    order_direction: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
                    page: { default: 0, type: 'integer' },
                    page_size: { default: 10, type: 'integer' },
                  },
                  type: 'object',
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Successfully retrieved roles',
      content: { 'application/json': { schema: RolesResponseSchemaSchema } },
    },
    400: {
      description: 'Bad request (invalid input)',
      content: {
        'application/json': {
          schema: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityRolesPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/roles/{pk}',
  tags: ['Security Roles'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SupersetRoleApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityRolesPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/roles/{pk}',
  tags: ['Security Roles'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SupersetRoleApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: SupersetRoleApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityRolesPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/roles/{pk}',
  tags: ['Security Roles'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityRolesRoleIdGroupsRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/roles/{role_id}/groups',
  tags: ['Security Roles'],
  request: {
    params: z.object({
      role_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Update role groups schema',
      content: { 'application/json': { schema: RoleGroupPutSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Role groups updated',
      content: {
        'application/json': {
          schema: z
            .object({ result: RoleGroupPutSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityRolesRoleIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/roles/{role_id}/permissions',
  tags: ['Security Roles'],
  request: {
    params: z.object({
      role_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Add role permissions schema',
      content: { 'application/json': { schema: RolePermissionPostSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Permissions added',
      content: {
        'application/json': {
          schema: z
            .object({ result: RolePermissionPostSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityRolesRoleIdPermissionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/roles/{role_id}/permissions/',
  tags: ['Security Roles'],
  request: {
    params: z.object({
      role_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of permissions',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(RolePermissionListSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityRolesRoleIdUsersRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/roles/{role_id}/users',
  tags: ['Security Roles'],
  request: {
    params: z.object({
      role_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'role_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Update role users schema',
      content: { 'application/json': { schema: RoleUserPutSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Role users updated',
      content: {
        'application/json': {
          schema: z
            .object({ result: RoleUserPutSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecuritySubjectIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/subject/',
  tags: ['Security Subjects'],
  summary: 'Get a list of Subjects',
  description:
    'Gets a list of Subjects, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SubjectRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecuritySubjectInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/subject/_info',
  tags: ['Security Subjects'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecuritySubjectPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/subject/{pk}',
  tags: ['Security Subjects'],
  summary: 'Get a Subject',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SubjectRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityUserRegistrationsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/user_registrations/',
  tags: ['UserRegistrationsRestAPI'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(UserRegistrationsRestAPIGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityUserRegistrationsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/user_registrations/_info',
  tags: ['UserRegistrationsRestAPI'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityUserRegistrationsPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/user_registrations/{pk}',
  tags: ['UserRegistrationsRestAPI'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: UserRegistrationsRestAPIGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityUserRegistrationsPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/user_registrations/{pk}',
  tags: ['UserRegistrationsRestAPI'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityUsersIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/users/',
  tags: ['Security Users'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SupersetUserApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SecurityUsersIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/security/users/',
  tags: ['Security Users'],
  responses: {
    201: { description: 'User created' },
    400: { description: 'Bad request' },
    500: { description: 'Server error' },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityUsersInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/users/_info',
  tags: ['Security Users'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SecurityUsersPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/security/users/{pk}',
  tags: ['Security Users'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SupersetUserApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SecurityUsersPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/security/users/{pk}',
  tags: ['Security Users'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'User updated' },
    400: { description: 'Bad request' },
    404: { description: 'Not found' },
    500: { description: 'Server error' },
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityUsersPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/users/{pk}',
  tags: ['Security Users'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SecurityUsersPkSessionsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/security/users/{pk}/sessions',
  tags: ['Security Users'],
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'Sessions terminated' }, 404: _404Response, 500: _500Response },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SemanticLayerIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/semantic_layer/',
  tags: ['Semantic Layers'],
  summary: 'List all semantic layers',
  responses: { 200: { description: 'A list of semantic layers' }, 401: _401Response },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SemanticLayerIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/semantic_layer/',
  tags: ['Semantic Layers'],
  summary: 'Create a semantic layer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cache_timeout: z.int().exactOptional(),
              configuration: z.object({}).exactOptional(),
              description: z.string().exactOptional(),
              name: z.string().exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Semantic layer created' },
    400: _400Response,
    401: _401Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SemanticLayerConnectionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/semantic_layer/connections/',
  tags: ['Semantic Layers'],
  summary: 'List databases and semantic layers combined',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Combined list of databases and semantic layers' },
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SemanticLayerSchemaConfigurationRoute = createRoute({
  method: 'post',
  path: '/api/v1/semantic_layer/schema/configuration',
  tags: ['Semantic Layers'],
  summary: 'Get configuration schema for a semantic layer type',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configuration: z.object({}).exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Configuration JSON Schema' },
    400: _400Response,
    401: _401Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SemanticLayerTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/semantic_layer/types',
  tags: ['Semantic Layers'],
  summary: 'List available semantic layer types',
  responses: { 200: { description: 'A list of semantic layer types' }, 401: _401Response },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SemanticLayerUuidRoute = createRoute({
  method: 'get',
  path: '/api/v1/semantic_layer/{uuid}',
  tags: ['Semantic Layers'],
  summary: 'Get a semantic layer by UUID',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'A semantic layer' },
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SemanticLayerUuidRoute = createRoute({
  method: 'put',
  path: '/api/v1/semantic_layer/{uuid}',
  tags: ['Semantic Layers'],
  summary: 'Update a semantic layer',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cache_timeout: z.int().exactOptional(),
              configuration: z.object({}).exactOptional(),
              description: z.string().exactOptional(),
              name: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Semantic layer updated' },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SemanticLayerUuidRoute = createRoute({
  method: 'delete',
  path: '/api/v1/semantic_layer/{uuid}',
  tags: ['Semantic Layers'],
  summary: 'Delete a semantic layer',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Semantic layer deleted' },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description: 'Semantic layer has dependent assets',
      content: {
        'application/json': {
          schema: z
            .object({
              archived_count: z
                .int()
                .openapi({
                  description:
                    'Archived dependents are named only to users who could restore them from Recently Archived; the others are included in inaccessible_count. The counts overlap and must not be added together.',
                }),
              dependents: z
                .array(
                  z
                    .object({
                      archived: z.boolean(),
                      id: z.int(),
                      name: z.string(),
                      type: z.enum(['chart', 'dashboard', 'alert', 'report']),
                    })
                    .openapi({ required: ['type', 'id', 'name', 'archived'] }),
                )
                .max(20),
              inaccessible_count: z.int(),
              message: z.string(),
              total: z.int(),
            })
            .openapi({
              required: ['message', 'total', 'dependents', 'inaccessible_count', 'archived_count'],
            }),
        },
      },
    },
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SemanticLayerUuidClearCacheRoute = createRoute({
  method: 'post',
  path: '/api/v1/semantic_layer/{uuid}/clear_cache',
  tags: ['Semantic Layers'],
  summary: "Clear a semantic layer's cache",
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.strictObject({}) } }, required: true },
  },
  responses: {
    200: { description: 'Cache cleared; reload to fetch metadata' },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SemanticLayerUuidSchemaRuntimeRoute = createRoute({
  method: 'post',
  path: '/api/v1/semantic_layer/{uuid}/schema/runtime',
  tags: ['Semantic Layers'],
  summary: 'Get runtime schema for a semantic layer',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ runtime_data: z.object({}).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Runtime JSON Schema' },
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SemanticLayerUuidViewsRoute = createRoute({
  method: 'post',
  path: '/api/v1/semantic_layer/{uuid}/views',
  tags: ['Semantic Layers'],
  summary: 'List available views from a semantic layer',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ runtime_data: z.object({}).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Available views' },
    401: _401Response,
    403: _403Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SemanticViewIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/semantic_view/',
  tags: ['SemanticViewRestApi'],
  summary: 'Create semantic views',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              views: z
                .array(
                  z
                    .object({
                      cache_timeout: z.int().exactOptional(),
                      configuration: z.object({}).exactOptional(),
                      description: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      semantic_layer_uuid: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'At most SEMANTIC_VIEW_BULK_CREATE_MAX_VIEWS views. Views not validated within SEMANTIC_VIEW_BULK_CREATE_TIMEOUT seconds are reported with error_type TIMEOUT.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Semantic views created' },
    400: _400Response,
    401: _401Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SemanticViewIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/semantic_view/',
  tags: ['SemanticViewRestApi'],
  summary: 'Bulk delete semantic views',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Semantic views deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description: 'A semantic view has dependent assets',
      content: {
        'application/json': {
          schema: z
            .object({
              archived_count: z
                .int()
                .openapi({
                  description:
                    'Archived dependents are named only to users who could restore them from Recently Archived; the others are included in inaccessible_count. The counts overlap and must not be added together.',
                }),
              dependents: z
                .array(
                  z
                    .object({
                      archived: z.boolean(),
                      id: z.int(),
                      name: z.string(),
                      type: z.enum(['chart', 'dashboard', 'alert', 'report']),
                    })
                    .openapi({ required: ['type', 'id', 'name', 'archived'] }),
                )
                .max(20),
              inaccessible_count: z.int(),
              message: z.string(),
              total: z.int(),
            })
            .openapi({
              required: ['message', 'total', 'dependents', 'inaccessible_count', 'archived_count'],
            }),
        },
      },
    },
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1SemanticViewPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/semantic_view/{pk}',
  tags: ['SemanticViewRestApi'],
  summary: 'Update a semantic view',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Semantic view schema',
      content: { 'application/json': { schema: SemanticViewRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Semantic view changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: SemanticViewRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1SemanticViewPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/semantic_view/{pk}',
  tags: ['SemanticViewRestApi'],
  summary: 'Delete a semantic view',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Semantic view deleted' },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    409: {
      description: 'Semantic view has dependent assets',
      content: {
        'application/json': {
          schema: z
            .object({
              archived_count: z
                .int()
                .openapi({
                  description:
                    'Archived dependents are named only to users who could restore them from Recently Archived; the others are included in inaccessible_count. The counts overlap and must not be added together.',
                }),
              dependents: z
                .array(
                  z
                    .object({
                      archived: z.boolean(),
                      id: z.int(),
                      name: z.string(),
                      type: z.enum(['chart', 'dashboard', 'alert', 'report']),
                    })
                    .openapi({ required: ['type', 'id', 'name', 'archived'] }),
                )
                .max(20),
              inaccessible_count: z.int(),
              message: z.string(),
              total: z.int(),
            })
            .openapi({
              required: ['message', 'total', 'dependents', 'inaccessible_count', 'archived_count'],
            }),
        },
      },
    },
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SemanticViewPkStructureRoute = createRoute({
  method: 'get',
  path: '/api/v1/semantic_view/{pk}/structure',
  tags: ['SemanticViewRestApi'],
  summary: 'Get semantic view structure',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Semantic view structure' },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SqllabIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/sqllab/',
  tags: ['SQL Lab'],
  summary: 'Get the bootstrap data for SqlLab page',
  description:
    "Assembles SQLLab bootstrap data (active_tab, databases, queries, tab_state_ids) in a single endpoint. The data can be assembled from the current user's id.",
  responses: {
    200: {
      description: 'Returns the initial bootstrap data for SqlLab',
      content: { 'application/json': { schema: SQLLabBootstrapSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SqllabEstimateIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/sqllab/estimate/',
  tags: ['SQL Lab'],
  summary: 'Estimate the SQL query execution cost',
  request: {
    body: {
      description: 'SQL query and params',
      content: { 'application/json': { schema: EstimateQueryCostSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query estimation result',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SqllabExecuteIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/sqllab/execute/',
  tags: ['SQL Lab'],
  summary: 'Execute a SQL query',
  request: {
    body: {
      description: 'SQL query and params',
      content: { 'application/json': { schema: ExecutePayloadSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query execution result',
      content: { 'application/json': { schema: QueryExecutionResponseSchemaSchema } },
    },
    202: {
      description: 'Query execution result, query still running',
      content: { 'application/json': { schema: QueryExecutionResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SqllabExportClientIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/sqllab/export/{client_id}/',
  tags: ['SQL Lab'],
  summary: 'Export the SQL query results to a CSV',
  request: {
    params: z.object({
      client_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The SQL query result identifier',
            in: 'path',
            name: 'client_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'SQL query results', content: { 'text/csv': { schema: z.string() } } },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SqllabExportStreamingIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/sqllab/export_streaming/',
  tags: ['SQL Lab'],
  summary: 'Export SQL query results to CSV with streaming',
  request: {
    body: {
      description: 'Export parameters',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The SQL query result identifier' }),
              expected_rows: z
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
                .openapi({ description: 'Optional expected row count for progress tracking' }),
              filename: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional filename for the export' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Streaming CSV export', content: { 'text/csv': { schema: z.string() } } },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SqllabFormatSqlIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/sqllab/format_sql/',
  tags: ['SQL Lab'],
  summary: 'Format SQL code',
  request: {
    body: {
      description: 'SQL query',
      content: { 'application/json': { schema: FormatQueryPayloadSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Format SQL result',
      content: {
        'application/json': {
          schema: z.object({ result: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1SqllabPermalinkRoute = createRoute({
  method: 'post',
  path: '/api/v1/sqllab/permalink',
  tags: ['SQL Lab Permanent Link'],
  summary: 'Create a new permanent link',
  request: {
    body: {
      content: { 'application/json': { schema: ExplorePermalinkStateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The permanent link was stored successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({ description: 'The key to retrieve the permanent link data.' }),
              url: z.string().exactOptional().openapi({ description: 'permanent link.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SqllabPermalinkKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/sqllab/permalink/{key}',
  tags: ['SQL Lab Permanent Link'],
  summary: 'Get permanent link state for SQLLab editor.',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the stored form_data.',
      content: {
        'application/json': {
          schema: z
            .object({
              state: z.object({}).exactOptional().openapi({ description: 'The stored state' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1SqllabResultsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/sqllab/results/',
  tags: ['SQL Lab'],
  summary: 'Get the result of a SQL query execution',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          SqlLabGetResultsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/sql_lab_get_results_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'SQL query execution result',
      content: { 'application/json': { schema: QueryExecutionResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    410: _410Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1TagIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/',
  tags: ['Tags'],
  summary: 'Get a list of tags',
  description:
    'Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(TagRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1TagIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/tag/',
  tags: ['Tags'],
  summary: 'Create a tag',
  description: 'Create a new Tag',
  request: {
    body: {
      description: 'Tag schema',
      content: { 'application/json': { schema: TagRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Tag added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: TagRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1TagIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tag/',
  tags: ['Tags'],
  summary: 'Bulk delete tags',
  description: 'Bulk deletes tags. This will remove all tagged objects with this tag.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          DeleteTagsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/delete_tags_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Deletes multiple Tags',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1TagInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/_info',
  tags: ['Tags'],
  summary: 'Get metadata information about tag API endpoints',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1TagBulkCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/tag/bulk_create',
  tags: ['Tags'],
  summary: 'Bulk create tags and tagged objects',
  request: {
    body: {
      description: 'Tag schema',
      content: { 'application/json': { schema: TagPostBulkSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bulk created tags and tagged objects',
      content: { 'application/json': { schema: TagPostBulkResponseSchemaSchema } },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1TagFavoriteStatusIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/favorite_status/',
  tags: ['Tags'],
  description: 'Get favorited tags for current user',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetFavStarIdsSchema2Schema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_fav_star_ids_schema2' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'None',
      content: { 'application/json': { schema: GetFavStarIdsSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1TagGetObjectsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/get_objects/',
  tags: ['Tags'],
  summary: 'Get all objects associated with a tag',
  description: 'Get all objects associated with a tag. If tagIds is set, tags will be ignored.',
  request: {
    query: z.object({
      tagIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tagIds',
            schema: { items: { type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'types',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of tagged objects associated with a Tag',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(TaggedObjectEntityResponseSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1TagRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/related/{column_name}',
  tags: ['Tags'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1TagObjectTypeObjectIdIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/tag/{object_type}/{object_id}/',
  tags: ['Tags'],
  summary: 'Add tags to an object',
  description: 'Adds tags to an object. Creates new tags if they do not already exist.',
  request: {
    params: z.object({
      object_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'object_type', required: true, schema: { type: 'integer' } },
        }),
      object_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'object_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Tag schema',
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'list of tag names to add to object' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Tag added' },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1TagObjectTypeObjectIdTagIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tag/{object_type}/{object_id}/{tag}/',
  tags: ['Tags'],
  summary: 'Delete a tagged object',
  request: {
    params: z.object({
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      object_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'object_type', required: true, schema: { type: 'integer' } },
        }),
      object_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'object_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1TagPkRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/{pk}',
  tags: ['Tags'],
  summary: 'Get a tag detail information',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: TagRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1TagPkRoute = createRoute({
  method: 'put',
  path: '/api/v1/tag/{pk}',
  tags: ['Tags'],
  summary: 'Update a tag',
  description: 'Changes a Tag.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Chart schema',
      content: { 'application/json': { schema: TagRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Tag changed',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.number().exactOptional(), result: TagRestApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1TagPkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tag/{pk}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  description: 'Delete a Tag by id. This will remove all tagged objects with this tag.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tag deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1TagPkFavoritesIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/tag/{pk}/favorites/',
  tags: ['Tags'],
  description: 'Marks the tag as favorite for the current user',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tag added to favorites',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1TagPkFavoritesIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tag/{pk}/favorites/',
  tags: ['Tags'],
  description: 'Remove the tag from the user favorite list',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tag removed from favorites',
      content: {
        'application/json': {
          schema: z.object({ result: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ThemeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/theme/',
  tags: ['Themes'],
  summary: 'Get a list of themes',
  description:
    'Gets a list of themes, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(ThemeRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ThemeIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/theme/',
  tags: ['Themes'],
  summary: 'Create a theme',
  request: {
    body: {
      description: 'Theme schema',
      content: { 'application/json': { schema: ThemeRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Theme created',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ThemeRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ThemeIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/theme/',
  tags: ['Themes'],
  summary: 'Bulk delete themes',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Themes bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ThemeInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/theme/_info',
  tags: ['Themes'],
  summary: 'Get metadata information about this API resource',
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ThemeExportIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/theme/export/',
  tags: ['Themes'],
  summary: 'Download multiple themes as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Theme export',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const postApiV1ThemeImportIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/theme/import/',
  tags: ['Themes'],
  summary: 'Import themes from a ZIP file',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              overwrite: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Theme imported',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ThemeRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/theme/related/{column_name}',
  tags: ['Themes'],
  summary: 'Get related fields data',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ThemeSystemRoute = createRoute({
  method: 'get',
  path: '/api/v1/theme/system',
  tags: ['Themes'],
  summary: 'Get the resolved system default and dark themes',
  description:
    'Returns the same processed theme payload embedded in the page bootstrap: the resolved system default and dark themes, the default mode, and the UI theme administration flag. The client uses this to apply system theme changes live without a full page reload, keeping the result identical to what a reload would render.',
  responses: {
    200: {
      description: 'Resolved system theme slice',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  dark: z.object({}).exactOptional(),
                  default: z.object({}).exactOptional(),
                  defaultMode: z.string().exactOptional(),
                  enableUiThemeAdministration: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ThemeUnsetSystemDarkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/theme/unset_system_dark',
  tags: ['Themes'],
  summary: 'Clear the system dark theme',
  responses: {
    200: {
      description: 'System dark theme cleared',
      content: {
        'application/json': {
          schema: z.object({ result: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ThemeUnsetSystemDefaultRoute = createRoute({
  method: 'delete',
  path: '/api/v1/theme/unset_system_default',
  tags: ['Themes'],
  summary: 'Clear the system default theme',
  responses: {
    200: {
      description: 'System default theme cleared',
      content: {
        'application/json': {
          schema: z.object({ result: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1ThemePkRoute = createRoute({
  method: 'get',
  path: '/api/v1/theme/{pk}',
  tags: ['Themes'],
  summary: 'Get a theme',
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: ThemeRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ThemePkRoute = createRoute({
  method: 'put',
  path: '/api/v1/theme/{pk}',
  tags: ['Themes'],
  summary: 'Update a theme',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Theme schema',
      content: { 'application/json': { schema: ThemeRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Theme updated',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ThemeRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const deleteApiV1ThemePkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/theme/{pk}',
  tags: ['Themes'],
  summary: 'Delete a theme',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Theme deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ThemePkSetSystemDarkRoute = createRoute({
  method: 'put',
  path: '/api/v1/theme/{pk}/set_system_dark',
  tags: ['Themes'],
  summary: 'Set a theme as the system dark theme',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The theme id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Theme successfully set as system dark',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.int().exactOptional(), result: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const putApiV1ThemePkSetSystemDefaultRoute = createRoute({
  method: 'put',
  path: '/api/v1/theme/{pk}/set_system_default',
  tags: ['Themes'],
  summary: 'Set a theme as the system default theme',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The theme id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Theme successfully set as system default',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.int().exactOptional(), result: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})

export const getApiV1UserUserIdAvatarPngRoute = createRoute({
  method: 'get',
  path: '/api/v1/user/{user_id}/avatar.png',
  tags: ['User'],
  summary: 'Get the user avatar',
  description:
    'Gets the avatar URL for the user with the given ID, or returns a 401 error if the user is unauthenticated.',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    301: { description: "A redirect to the user's avatar URL" },
    401: _401Response,
    404: _404Response,
  },
  security: [{ jwt: [] }, { api_key: [] }],
})
