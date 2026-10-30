import { createRoute, z } from '@hono/zod-openapi'

const AssetExpressionAliasInfoSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    group: z.string().openapi({ title: 'Group' }),
  })
  .openapi({
    required: ['name', 'group'],
    title: 'AssetExpressionAliasInfo',
    description: 'Body of an ``alias`` leaf node.',
  })
  .openapi('AssetExpressionAliasInfo')

type AssetExpressionAliasType = { alias: z.infer<typeof AssetExpressionAliasInfoSchema> }

const AssetExpressionAssetInfoSchema = z
  .object({
    uri: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Uri' }),
    name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Name' }),
    group: z.string().openapi({ title: 'Group' }),
    id: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Id' }),
    hidden: z.boolean().default(false).exactOptional().openapi({ title: 'Hidden' }),
  })
  .openapi({
    required: ['uri', 'name', 'group'],
    title: 'AssetExpressionAssetInfo',
    description:
      'Body of an ``asset`` leaf node.\n\n``id`` is injected by ``DagModelOperation.update_dag_asset_expression`` when the expression is\npersisted; ``BaseAsset.as_expression()`` itself only emits ``uri``/``name``/``group``. It is left\noptional so a row persisted before id-enrichment (or migrated from the pre-3.0 dataset format)\ndegrades gracefully instead of failing response validation.\n\nA leaf the caller is not authorized to read is served with ``hidden`` set and ``uri``, ``name``\nand ``id`` blanked (see ``airflow.api_fastapi.common.asset_expression``), so the shape of the\nschedule stays visible without revealing which asset it waits on.',
  })
  .openapi('AssetExpressionAssetInfo')

type AssetExpressionAssetType = { asset: z.infer<typeof AssetExpressionAssetInfoSchema> }

const AssetExpressionAssetSchema: z.ZodType<AssetExpressionAssetType> = z
  .object({ asset: AssetExpressionAssetInfoSchema })
  .openapi({
    required: ['asset'],
    title: 'AssetExpressionAsset',
    description: 'An asset leaf: ``{"asset": {"uri": ..., "name": ..., "group": ...}}``.',
  })
  .openapi('AssetExpressionAsset')

const AssetExpressionAliasSchema: z.ZodType<AssetExpressionAliasType> = z
  .object({ alias: AssetExpressionAliasInfoSchema })
  .openapi({
    required: ['alias'],
    title: 'AssetExpressionAlias',
    description: 'An asset alias leaf: ``{"alias": {"name": ..., "group": ...}}``.',
  })
  .openapi('AssetExpressionAlias')

type AssetExpressionRefType = { asset_ref: { [key: string]: string } }

const AssetExpressionRefSchema: z.ZodType<AssetExpressionRefType> = z
  .object({ asset_ref: z.record(z.string(), z.string()).openapi({ title: 'Asset Ref' }) })
  .openapi({
    required: ['asset_ref'],
    title: 'AssetExpressionRef',
    description:
      'An unresolved asset reference leaf: ``{"asset_ref": {"name": ...}}`` or ``{"asset_ref": {"uri": ...}}``.',
  })
  .openapi('AssetExpressionRef')

const AssetExpressionAnySchema: z.ZodType<AssetExpressionAnyType> = z
  .lazy(() =>
    z
      .object({
        any: z
          .array(
            z.xor([
              AssetExpressionAssetSchema,
              AssetExpressionAliasSchema,
              AssetExpressionRefSchema,
              AssetExpressionAnySchema,
              AssetExpressionAllSchema,
            ]),
          )
          .openapi({ title: 'Any' }),
      })
      .openapi({
        required: ['any'],
        title: 'AssetExpressionAny',
        description: 'An "or" node: ``{"any": [...]}`` -- satisfied when any child is satisfied.',
      }),
  )
  .openapi('AssetExpressionAny')

type AssetExpressionAllType = {
  all: (
    | z.infer<typeof AssetExpressionAssetSchema>
    | z.infer<typeof AssetExpressionAliasSchema>
    | z.infer<typeof AssetExpressionRefSchema>
    | z.infer<typeof AssetExpressionAnySchema>
    | AssetExpressionAllType
  )[]
}

const AssetExpressionAllSchema: z.ZodType<AssetExpressionAllType> = z
  .lazy(() =>
    z
      .object({
        all: z
          .array(
            z.xor([
              AssetExpressionAssetSchema,
              AssetExpressionAliasSchema,
              AssetExpressionRefSchema,
              AssetExpressionAnySchema,
              AssetExpressionAllSchema,
            ]),
          )
          .openapi({ title: 'All' }),
      })
      .openapi({
        required: ['all'],
        title: 'AssetExpressionAll',
        description:
          'An "and" node: ``{"all": [...]}`` -- satisfied when all children are satisfied.',
      }),
  )
  .openapi('AssetExpressionAll')

type AssetExpressionAnyType = {
  any: (
    | z.infer<typeof AssetExpressionAssetSchema>
    | z.infer<typeof AssetExpressionAliasSchema>
    | z.infer<typeof AssetExpressionRefSchema>
    | AssetExpressionAnyType
    | z.infer<typeof AssetExpressionAllSchema>
  )[]
}

const AppBuilderMenuItemResponseSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    href: z.string().openapi({ title: 'Href' }),
    category: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Category' }),
  })
  .openapi({
    required: ['name', 'href'],
    title: 'AppBuilderMenuItemResponse',
    description: 'Serializer for AppBuilder Menu Item responses.',
  })
  .openapi('AppBuilderMenuItemResponse')

const AppBuilderViewResponseSchema = z
  .looseObject({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    category: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Category' }),
    view: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'View' }),
    label: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Label' }),
  })
  .openapi({
    title: 'AppBuilderViewResponse',
    description: 'Serializer for AppBuilder View responses.',
    required: [],
  })
  .openapi('AppBuilderViewResponse')

const AssetAliasResponseSchema = z
  .object({
    id: z.int().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    group: z.string().openapi({ title: 'Group' }),
  })
  .openapi({
    required: ['id', 'name', 'group'],
    title: 'AssetAliasResponse',
    description: 'Asset alias serializer for responses.',
  })
  .openapi('AssetAliasResponse')

const AssetAliasCollectionResponseSchema = z
  .object({
    asset_aliases: z.array(AssetAliasResponseSchema).openapi({ title: 'Asset Aliases' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['asset_aliases', 'total_entries'],
    title: 'AssetAliasCollectionResponse',
    description: 'Asset alias collection response.',
  })
  .openapi('AssetAliasCollectionResponse')

const JsonValueSchema = z.any().openapi('JsonValue')

const DagScheduleAssetReferenceSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: ['dag_id', 'created_at', 'updated_at'],
    title: 'DagScheduleAssetReference',
    description: 'Dag schedule reference serializer for assets.',
  })
  .openapi('DagScheduleAssetReference')

const TaskOutletAssetReferenceSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: ['dag_id', 'task_id', 'created_at', 'updated_at'],
    title: 'TaskOutletAssetReference',
    description: 'Task outlet reference serializer for assets.',
  })
  .openapi('TaskOutletAssetReference')

const TaskInletAssetReferenceSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: ['dag_id', 'task_id', 'created_at', 'updated_at'],
    title: 'TaskInletAssetReference',
    description: 'Task inlet reference serializer for assets.',
  })
  .openapi('TaskInletAssetReference')

const AssetWatcherResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    trigger_id: z.int().openapi({ title: 'Trigger Id' }),
    created_date: z.iso.datetime({ offset: true }).openapi({ title: 'Created Date' }),
  })
  .openapi({
    required: ['name', 'trigger_id', 'created_date'],
    title: 'AssetWatcherResponse',
    description: 'Asset watcher serializer for responses.',
  })
  .openapi('AssetWatcherResponse')

const LastAssetEventResponseSchema = z
  .object({
    id: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Id' }),
    timestamp: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Timestamp' }),
  })
  .openapi({
    title: 'LastAssetEventResponse',
    description: 'Last asset event response serializer.',
    required: [],
  })
  .openapi('LastAssetEventResponse')

const AssetResponseSchema = z
  .object({
    id: z.int().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    uri: z.string().openapi({ title: 'Uri' }),
    group: z.string().openapi({ title: 'Group' }),
    extra: z
      .union([z.record(z.string(), JsonValueSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Extra' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    scheduled_dags: z.array(DagScheduleAssetReferenceSchema).openapi({ title: 'Scheduled Dags' }),
    producing_tasks: z.array(TaskOutletAssetReferenceSchema).openapi({ title: 'Producing Tasks' }),
    consuming_tasks: z.array(TaskInletAssetReferenceSchema).openapi({ title: 'Consuming Tasks' }),
    aliases: z.array(AssetAliasResponseSchema).openapi({ title: 'Aliases' }),
    watchers: z.array(AssetWatcherResponseSchema).openapi({ title: 'Watchers' }),
    last_asset_event: z.union([LastAssetEventResponseSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'name',
      'uri',
      'group',
      'created_at',
      'updated_at',
      'scheduled_dags',
      'producing_tasks',
      'consuming_tasks',
      'aliases',
      'watchers',
    ],
    title: 'AssetResponse',
    description: 'Asset serializer for responses.',
  })
  .openapi('AssetResponse')

const AssetCollectionResponseSchema = z
  .object({
    assets: z.array(AssetResponseSchema).openapi({ title: 'Assets' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['assets', 'total_entries'],
    title: 'AssetCollectionResponse',
    description: 'Asset collection response.',
  })
  .openapi('AssetCollectionResponse')

const AssetEventAccessControlSchema = z
  .strictObject({
    consumer_teams: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Consumer Teams' }),
    allow_global: z.boolean().default(true).exactOptional().openapi({ title: 'Allow Global' }),
  })
  .openapi({
    title: 'AssetEventAccessControl',
    description: 'Access control settings for asset event consumer team filtering.',
    required: [],
  })
  .openapi('AssetEventAccessControl')

const DagRunAssetReferenceSchema = z
  .object({
    run_id: z.string().openapi({ title: 'Run Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    state: z.string().openapi({ title: 'State' }),
    data_interval_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Data Interval Start' }),
    data_interval_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Data Interval End' }),
    partition_key: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Partition Key' }),
    triggering: z
      .boolean()
      .openapi({
        title: 'Triggering',
        description:
          "Whether this asset event triggered the referenced dag run. Only a run's most recent consumed asset event triggers it; earlier consumed events are included in the run but did not trigger it.",
      }),
  })
  .openapi({
    required: [
      'run_id',
      'dag_id',
      'logical_date',
      'start_date',
      'end_date',
      'state',
      'data_interval_start',
      'data_interval_end',
      'partition_key',
      'triggering',
    ],
    title: 'DagRunAssetReference',
    description: 'DagRun serializer for asset responses.',
  })
  .openapi('DagRunAssetReference')

const AssetEventResponseSchema = z
  .object({
    id: z.int().openapi({ title: 'Id' }),
    asset_id: z.int().openapi({ title: 'Asset Id' }),
    uri: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Uri' }),
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    group: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Group' }),
    extra: z
      .union([z.record(z.string(), JsonValueSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Extra' }),
    source_task_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Task Id' }),
    source_dag_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Dag Id' }),
    source_run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Run Id' }),
    source_map_index: z.int().openapi({ title: 'Source Map Index' }),
    source_task_instance_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Task Instance Id' }),
    created_dagruns: z.array(DagRunAssetReferenceSchema).openapi({ title: 'Created Dagruns' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    partition_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Partition Key' }),
  })
  .openapi({
    required: ['id', 'asset_id', 'source_map_index', 'created_dagruns', 'timestamp'],
    title: 'AssetEventResponse',
    description: 'Asset event serializer for responses.',
  })
  .openapi('AssetEventResponse')

const AssetEventCollectionResponseSchema = z
  .object({
    asset_events: z.array(AssetEventResponseSchema).openapi({ title: 'Asset Events' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['asset_events', 'total_entries'],
    title: 'AssetEventCollectionResponse',
    description: 'Asset event collection response.',
  })
  .openapi('AssetEventCollectionResponse')

const AssetStateStoreBodySchema = z
  .strictObject({ value: JsonValueSchema })
  .openapi({
    required: ['value'],
    title: 'AssetStateStoreBody',
    description: 'Request body for setting an asset state store value.',
  })
  .openapi('AssetStateStoreBody')

const AssetStateStoreWriterKindSchema = z
  .enum(['task', 'watcher', 'api'])
  .openapi({
    title: 'AssetStateStoreWriterKind',
    description:
      'Identifies what kind of writer last updated an asset state store entry.\n\n``TASK`` — written by a task via the execution API.\n``WATCHER`` — written by a ``BaseEventTrigger`` (no task instance).\n``API`` — written directly through the Core API (e.g. manual admin write).',
  })
  .openapi('AssetStateStoreWriterKind')

const AssetStateStoreLastUpdatedBySchema = z
  .object({
    kind: AssetStateStoreWriterKindSchema,
    dag_id: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Dag Id' }),
    run_id: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Run Id' }),
    task_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Task Id' }),
    map_index: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Map Index' }),
    task_instance_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Task Instance Id' }),
    region_id: z.uuid().exactOptional().openapi({ title: 'Region Id' }),
    region_index: z.int().exactOptional().openapi({ title: 'Region Index' }),
    try_number: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Try Number' }),
  })
  .openapi({
    required: ['kind'],
    title: 'AssetStateStoreLastUpdatedBy',
    description: 'Writer info for the last write to an asset state store entry.',
  })
  .openapi('AssetStateStoreLastUpdatedBy')

const AssetStateStoreResponseSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    value: JsonValueSchema,
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    last_updated_by: z
      .union([AssetStateStoreLastUpdatedBySchema, z.null().nullable()])
      .exactOptional(),
  })
  .openapi({
    required: ['key', 'value', 'updated_at'],
    title: 'AssetStateStoreResponse',
    description: 'A single asset state store key/value pair with metadata.',
  })
  .openapi('AssetStateStoreResponse')

const AssetStateStoreCollectionResponseSchema = z
  .object({
    asset_state_store: z
      .array(AssetStateStoreResponseSchema)
      .openapi({ title: 'Asset State Store' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['asset_state_store', 'total_entries'],
    title: 'AssetStateStoreCollectionResponse',
    description: 'All asset state store entries for an asset.',
  })
  .openapi('AssetStateStoreCollectionResponse')

const AsyncConnectionTestResponseSchema = z
  .object({
    token: z.string().openapi({ title: 'Token' }),
    connection_id: z.string().openapi({ title: 'Connection Id' }),
    state: z.string().openapi({ title: 'State' }),
    result_message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Result Message' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
  })
  .openapi({
    required: ['token', 'connection_id', 'state', 'created_at'],
    title: 'AsyncConnectionTestResponse',
    description: 'Response returned when polling for the status of an enqueued connection test.',
  })
  .openapi('AsyncConnectionTestResponse')

const ReprocessBehaviorSchema = z
  .enum(['failed', 'completed', 'none'])
  .openapi({
    title: 'ReprocessBehavior',
    description: 'Internal enum for setting reprocess behavior in a backfill.\n\n:meta private:',
  })
  .openapi('ReprocessBehavior')

const BackfillResponseSchema = z
  .object({
    id: z.int().min(0).openapi({ title: 'Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    from_date: z.iso.datetime({ offset: true }).openapi({ title: 'From Date' }),
    to_date: z.iso.datetime({ offset: true }).openapi({ title: 'To Date' }),
    dag_run_conf: z
      .union([z.looseObject({}), z.null().nullable()])
      .openapi({ title: 'Dag Run Conf' }),
    is_paused: z.boolean().openapi({ title: 'Is Paused' }),
    reprocess_behavior: ReprocessBehaviorSchema,
    max_active_runs: z.int().openapi({ title: 'Max Active Runs' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Completed At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
  })
  .openapi({
    required: [
      'id',
      'dag_id',
      'from_date',
      'to_date',
      'dag_run_conf',
      'is_paused',
      'reprocess_behavior',
      'max_active_runs',
      'created_at',
      'completed_at',
      'updated_at',
      'dag_display_name',
    ],
    title: 'BackfillResponse',
    description: 'Base serializer for Backfill.',
  })
  .openapi('BackfillResponse')

const BackfillCollectionResponseSchema = z
  .object({
    backfills: z.array(BackfillResponseSchema).openapi({ title: 'Backfills' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['backfills', 'total_entries'],
    title: 'BackfillCollectionResponse',
    description: 'Backfill Collection serializer for responses.',
  })
  .openapi('BackfillCollectionResponse')

const DagRunStateSchema = z
  .enum(['queued', 'running', 'success', 'failed'])
  .openapi({
    title: 'DagRunState',
    description:
      'All possible states that a DagRun can be in.\n\nThese are "shared" with TaskInstanceState in some parts of the code,\nso please ensure that their values always match the ones with the\nsame name in TaskInstanceState.',
  })
  .openapi('DagRunState')

const BackfillDagRunResponseSchema = z
  .object({
    id: z.int().min(0).openapi({ title: 'Id' }),
    backfill_id: z.int().min(0).openapi({ title: 'Backfill Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Id' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    partition_key: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Partition Key' }),
    sort_ordinal: z.int().openapi({ title: 'Sort Ordinal' }),
    exception_reason: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Exception Reason' }),
    dag_run_state: z.union([DagRunStateSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'backfill_id',
      'dag_id',
      'logical_date',
      'partition_key',
      'sort_ordinal',
      'exception_reason',
    ],
    title: 'BackfillDagRunResponse',
    description: 'Serializer for a single BackfillDagRun entry with joined DagRun state.',
  })
  .openapi('BackfillDagRunResponse')

const BackfillDagRunCollectionResponseSchema = z
  .object({
    backfill_dag_runs: z
      .array(BackfillDagRunResponseSchema)
      .openapi({ title: 'Backfill Dag Runs' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['backfill_dag_runs', 'total_entries'],
    title: 'BackfillDagRunCollectionResponse',
    description: 'BackfillDagRun Collection serializer for responses.',
  })
  .openapi('BackfillDagRunCollectionResponse')

const BackfillPostBodySchema = z
  .strictObject({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    from_date: z.iso.datetime({ offset: true }).openapi({ title: 'From Date' }),
    to_date: z.iso.datetime({ offset: true }).openapi({ title: 'To Date' }),
    run_backwards: z.boolean().default(false).exactOptional().openapi({ title: 'Run Backwards' }),
    dag_run_conf: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Conf' }),
    reprocess_behavior: ReprocessBehaviorSchema.default('none').exactOptional(),
    max_active_runs: z
      .int()
      .min(1)
      .default(10)
      .exactOptional()
      .openapi({ title: 'Max Active Runs' }),
    run_on_latest_version: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Run On Latest Version',
        description:
          'Run on the latest bundle version of the Dag for each backfilled run. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``True`` (the historical default for backfills).',
      }),
    drain_dag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Drain Dag',
        description:
          'Drain the Dag together with the backfill. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag. Ignored by the dry-run endpoint.',
      }),
  })
  .openapi({
    required: ['dag_id', 'from_date', 'to_date'],
    title: 'BackfillPostBody',
    description: 'Object used for create backfill request.',
  })
  .openapi('BackfillPostBody')

const HealthStatusSchema = z
  .enum(['healthy', 'unhealthy'])
  .openapi({
    title: 'HealthStatus',
    description: 'Aggregate health of a component: whether it has at least one live instance.',
  })
  .openapi('HealthStatus')

const BaseInfoResponseSchema = z
  .object({ status: z.union([HealthStatusSchema, z.null().nullable()]) })
  .openapi({
    required: ['status'],
    title: 'BaseInfoResponse',
    description: 'Base info serializer for responses.',
  })
  .openapi('BaseInfoResponse')

const BulkActionNotOnExistenceSchema = z
  .enum(['fail', 'skip'])
  .openapi({
    title: 'BulkActionNotOnExistence',
    description: 'Bulk Action to be taken if the entity does not exist.',
  })
  .openapi('BulkActionNotOnExistence')

const BulkActionOnExistenceSchema = z
  .enum(['fail', 'skip', 'overwrite'])
  .openapi({
    title: 'BulkActionOnExistence',
    description: 'Bulk Action to be taken if the entity already exists or not.',
  })
  .openapi('BulkActionOnExistence')

const BulkActionResponseSchema = z
  .object({
    success: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        title: 'Success',
        description: 'A list of unique id/key representing successful operations.',
      }),
    errors: z
      .array(z.looseObject({}))
      .default([])
      .exactOptional()
      .openapi({
        title: 'Errors',
        description:
          'A list of errors encountered during the operation, each containing details about the issue.',
      }),
  })
  .openapi({
    title: 'BulkActionResponse',
    description:
      'Serializer for individual bulk action responses.\n\nRepresents the outcome of a single bulk operation (create, update, or delete).\nThe response includes a list of successful keys and any errors encountered during the operation.\nThis structure helps users understand which key actions succeeded and which failed.',
    required: [],
  })
  .openapi('BulkActionResponse')

const DagSchedulingStateSchema = z
  .enum(['active', 'draining', 'paused'])
  .openapi({
    title: 'DagSchedulingState',
    description: 'States controlling whether a Dag can create and schedule work.',
  })
  .openapi('DagSchedulingState')

const BulkDAGBodySchema = z
  .strictObject({
    is_paused: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Is Paused' }),
    scheduling_state: z.union([DagSchedulingStateSchema, z.null().nullable()]).exactOptional(),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
  })
  .openapi({
    required: ['dag_id'],
    title: 'BulkDAGBody',
    description: 'Request body for bulk update of Dags.',
  })
  .openapi('BulkDAGBody')

const BulkCreateActionBulkDAGBodySchema = z
  .strictObject({
    action: z
      .literal('create')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(BulkDAGBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be created.' }),
    action_on_existence: BulkActionOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkCreateAction[BulkDAGBody]' })
  .openapi('BulkCreateActionBulkDAGBody')

const BulkUpdateActionBulkDAGBodySchema = z
  .strictObject({
    action: z
      .literal('update')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(BulkDAGBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be updated.' }),
    update_mask: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Update Mask',
        description:
          'A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkUpdateAction[BulkDAGBody]' })
  .openapi('BulkUpdateActionBulkDAGBody')

const BulkDeleteActionBulkDAGBodySchema = z
  .strictObject({
    action: z
      .literal('delete')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(z.union([z.string(), BulkDAGBodySchema]))
      .openapi({
        title: 'Entities',
        description: 'A list of entity id/key or entity objects to be deleted.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkDeleteAction[BulkDAGBody]' })
  .openapi('BulkDeleteActionBulkDAGBody')

const BulkBodyBulkDAGBodySchema = z
  .strictObject({
    actions: z
      .array(
        z.xor([
          BulkCreateActionBulkDAGBodySchema,
          BulkUpdateActionBulkDAGBodySchema,
          BulkDeleteActionBulkDAGBodySchema,
        ]),
      )
      .openapi({ title: 'Actions' }),
  })
  .openapi({ required: ['actions'], title: 'BulkBody[BulkDAGBody]' })
  .openapi('BulkBodyBulkDAGBody')

const DagRunMutableStatesSchema = z
  .enum(['queued', 'success', 'failed'])
  .openapi({
    title: 'DagRunMutableStates',
    description: 'Dag Run states from which the run may be mutated (patched, deleted).',
  })
  .openapi('DagRunMutableStates')

const BulkDAGRunBodySchema = z
  .strictObject({
    dag_run_id: z.string().openapi({ title: 'Dag Run Id' }),
    dag_id: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Dag Id' }),
    state: z.union([DagRunMutableStatesSchema, z.null().nullable()]).exactOptional(),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
  })
  .openapi({
    required: ['dag_run_id'],
    title: 'BulkDAGRunBody',
    description: 'Request body for bulk operations on Dag Runs.',
  })
  .openapi('BulkDAGRunBody')

const BulkCreateActionBulkDAGRunBodySchema = z
  .strictObject({
    action: z
      .literal('create')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(BulkDAGRunBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be created.' }),
    action_on_existence: BulkActionOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkCreateAction[BulkDAGRunBody]' })
  .openapi('BulkCreateActionBulkDAGRunBody')

const BulkUpdateActionBulkDAGRunBodySchema = z
  .strictObject({
    action: z
      .literal('update')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(BulkDAGRunBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be updated.' }),
    update_mask: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Update Mask',
        description:
          'A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkUpdateAction[BulkDAGRunBody]' })
  .openapi('BulkUpdateActionBulkDAGRunBody')

const BulkDeleteActionBulkDAGRunBodySchema = z
  .strictObject({
    action: z
      .literal('delete')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(z.union([z.string(), BulkDAGRunBodySchema]))
      .openapi({
        title: 'Entities',
        description: 'A list of entity id/key or entity objects to be deleted.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkDeleteAction[BulkDAGRunBody]' })
  .openapi('BulkDeleteActionBulkDAGRunBody')

const BulkBodyBulkDAGRunBodySchema = z
  .strictObject({
    actions: z
      .array(
        z.xor([
          BulkCreateActionBulkDAGRunBodySchema,
          BulkUpdateActionBulkDAGRunBodySchema,
          BulkDeleteActionBulkDAGRunBodySchema,
        ]),
      )
      .openapi({ title: 'Actions' }),
  })
  .openapi({ required: ['actions'], title: 'BulkBody[BulkDAGRunBody]' })
  .openapi('BulkBodyBulkDAGRunBody')

const TaskInstanceStateSchema = z
  .enum([
    'removed',
    'scheduled',
    'queued',
    'running',
    'success',
    'restarting',
    'failed',
    'up_for_retry',
    'up_for_reschedule',
    'upstream_failed',
    'skipped',
    'deferred',
    'awaiting_input',
  ])
  .openapi({
    title: 'TaskInstanceState',
    description:
      'All possible states that a Task Instance can be in.\n\nNote that None is also allowed, so always use this in a type hint with Optional.',
  })
  .openapi('TaskInstanceState')

const BulkTaskInstanceBodySchema = z
  .strictObject({
    new_state: z.union([TaskInstanceStateSchema, z.null().nullable()]).exactOptional(),
    region_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Id' }),
    region_index: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Index' }),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
    include_upstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Upstream' }),
    include_downstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Downstream' }),
    include_future: z.boolean().default(false).exactOptional().openapi({ title: 'Include Future' }),
    include_past: z.boolean().default(false).exactOptional().openapi({ title: 'Include Past' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    map_index: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Map Index' }),
    dag_id: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Dag Id' }),
    dag_run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Id' }),
  })
  .openapi({
    required: ['task_id'],
    title: 'BulkTaskInstanceBody',
    description: 'Request body for bulk update, and delete task instances.',
  })
  .openapi('BulkTaskInstanceBody')

const BulkCreateActionBulkTaskInstanceBodySchema = z
  .strictObject({
    action: z
      .literal('create')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(BulkTaskInstanceBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be created.' }),
    action_on_existence: BulkActionOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkCreateAction[BulkTaskInstanceBody]' })
  .openapi('BulkCreateActionBulkTaskInstanceBody')

const BulkUpdateActionBulkTaskInstanceBodySchema = z
  .strictObject({
    action: z
      .literal('update')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(BulkTaskInstanceBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be updated.' }),
    update_mask: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Update Mask',
        description:
          'A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkUpdateAction[BulkTaskInstanceBody]' })
  .openapi('BulkUpdateActionBulkTaskInstanceBody')

const BulkDeleteActionBulkTaskInstanceBodySchema = z
  .strictObject({
    action: z
      .literal('delete')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(z.union([z.string(), BulkTaskInstanceBodySchema]))
      .openapi({
        title: 'Entities',
        description: 'A list of entity id/key or entity objects to be deleted.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkDeleteAction[BulkTaskInstanceBody]' })
  .openapi('BulkDeleteActionBulkTaskInstanceBody')

const BulkBodyBulkTaskInstanceBodySchema = z
  .strictObject({
    actions: z
      .array(
        z.xor([
          BulkCreateActionBulkTaskInstanceBodySchema,
          BulkUpdateActionBulkTaskInstanceBodySchema,
          BulkDeleteActionBulkTaskInstanceBodySchema,
        ]),
      )
      .openapi({ title: 'Actions' }),
  })
  .openapi({ required: ['actions'], title: 'BulkBody[BulkTaskInstanceBody]' })
  .openapi('BulkBodyBulkTaskInstanceBody')

const ConnectionBodySchema = z
  .strictObject({
    connection_id: z
      .string()
      .regex(/^[\w.-]+$/)
      .max(200)
      .openapi({ title: 'Connection Id' }),
    conn_type: z.string().openapi({ title: 'Conn Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    host: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Host' }),
    login: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Login' }),
    schema: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Schema' }),
    port: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Port' }),
    password: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Password' }),
    extra: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Extra' }),
    team_name: z
      .union([z.string().max(50), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: ['connection_id', 'conn_type'],
    title: 'ConnectionBody',
    description: 'Connection Serializer for requests body.',
  })
  .openapi('ConnectionBody')

const BulkCreateActionConnectionBodySchema = z
  .strictObject({
    action: z
      .literal('create')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(ConnectionBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be created.' }),
    action_on_existence: BulkActionOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkCreateAction[ConnectionBody]' })
  .openapi('BulkCreateActionConnectionBody')

const BulkUpdateActionConnectionBodySchema = z
  .strictObject({
    action: z
      .literal('update')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(ConnectionBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be updated.' }),
    update_mask: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Update Mask',
        description:
          'A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkUpdateAction[ConnectionBody]' })
  .openapi('BulkUpdateActionConnectionBody')

const BulkDeleteActionConnectionBodySchema = z
  .strictObject({
    action: z
      .literal('delete')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(z.union([z.string(), ConnectionBodySchema]))
      .openapi({
        title: 'Entities',
        description: 'A list of entity id/key or entity objects to be deleted.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkDeleteAction[ConnectionBody]' })
  .openapi('BulkDeleteActionConnectionBody')

const BulkBodyConnectionBodySchema = z
  .strictObject({
    actions: z
      .array(
        z.xor([
          BulkCreateActionConnectionBodySchema,
          BulkUpdateActionConnectionBodySchema,
          BulkDeleteActionConnectionBodySchema,
        ]),
      )
      .openapi({ title: 'Actions' }),
  })
  .openapi({ required: ['actions'], title: 'BulkBody[ConnectionBody]' })
  .openapi('BulkBodyConnectionBody')

const PoolBodySchema = z
  .strictObject({
    name: z.string().regex(/\S/).max(256).openapi({ title: 'Name' }),
    slots: z
      .int()
      .min(-1)
      .openapi({ title: 'Slots', description: 'Number of slots. Use -1 for unlimited.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    include_deferred: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Deferred' }),
    team_name: z
      .union([z.string().max(50), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: ['name', 'slots'],
    title: 'PoolBody',
    description: 'Pool serializer for post bodies.',
  })
  .openapi('PoolBody')

const BulkCreateActionPoolBodySchema = z
  .strictObject({
    action: z
      .literal('create')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(PoolBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be created.' }),
    action_on_existence: BulkActionOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkCreateAction[PoolBody]' })
  .openapi('BulkCreateActionPoolBody')

const BulkUpdateActionPoolBodySchema = z
  .strictObject({
    action: z
      .literal('update')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(PoolBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be updated.' }),
    update_mask: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Update Mask',
        description:
          'A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkUpdateAction[PoolBody]' })
  .openapi('BulkUpdateActionPoolBody')

const BulkDeleteActionPoolBodySchema = z
  .strictObject({
    action: z
      .literal('delete')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(z.union([z.string(), PoolBodySchema]))
      .openapi({
        title: 'Entities',
        description: 'A list of entity id/key or entity objects to be deleted.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkDeleteAction[PoolBody]' })
  .openapi('BulkDeleteActionPoolBody')

const BulkBodyPoolBodySchema = z
  .strictObject({
    actions: z
      .array(
        z.xor([
          BulkCreateActionPoolBodySchema,
          BulkUpdateActionPoolBodySchema,
          BulkDeleteActionPoolBodySchema,
        ]),
      )
      .openapi({ title: 'Actions' }),
  })
  .openapi({ required: ['actions'], title: 'BulkBody[PoolBody]' })
  .openapi('BulkBodyPoolBody')

const VariableBodySchema = z
  .strictObject({
    key: z.string().regex(/\S/).max(250).openapi({ title: 'Key' }),
    value: JsonValueSchema,
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    team_name: z
      .union([z.string().max(50), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: ['key', 'value'],
    title: 'VariableBody',
    description: 'Variable serializer for bodies.',
  })
  .openapi('VariableBody')

const BulkCreateActionVariableBodySchema = z
  .strictObject({
    action: z
      .literal('create')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(VariableBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be created.' }),
    action_on_existence: BulkActionOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkCreateAction[VariableBody]' })
  .openapi('BulkCreateActionVariableBody')

const BulkUpdateActionVariableBodySchema = z
  .strictObject({
    action: z
      .literal('update')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(VariableBodySchema)
      .openapi({ title: 'Entities', description: 'A list of entities to be updated.' }),
    update_mask: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Update Mask',
        description:
          'A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkUpdateAction[VariableBody]' })
  .openapi('BulkUpdateActionVariableBody')

const BulkDeleteActionVariableBodySchema = z
  .strictObject({
    action: z
      .literal('delete')
      .openapi({ title: 'Action', description: 'The action to be performed on the entities.' }),
    entities: z
      .array(z.union([z.string(), VariableBodySchema]))
      .openapi({
        title: 'Entities',
        description: 'A list of entity id/key or entity objects to be deleted.',
      }),
    action_on_non_existence: BulkActionNotOnExistenceSchema.default('fail').exactOptional(),
  })
  .openapi({ required: ['action', 'entities'], title: 'BulkDeleteAction[VariableBody]' })
  .openapi('BulkDeleteActionVariableBody')

const BulkBodyVariableBodySchema = z
  .strictObject({
    actions: z
      .array(
        z.xor([
          BulkCreateActionVariableBodySchema,
          BulkUpdateActionVariableBodySchema,
          BulkDeleteActionVariableBodySchema,
        ]),
      )
      .openapi({ title: 'Actions' }),
  })
  .openapi({ required: ['actions'], title: 'BulkBody[VariableBody]' })
  .openapi('BulkBodyVariableBody')

const BulkDAGRunClearBodySchema = z
  .strictObject({
    partition_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Partition Key',
        description:
          'Select runs by exact partition key match. Mutually exclusive with the other partition selectors.',
      }),
    partition_date_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Partition Date Start',
        description:
          "Inclusive start of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.",
      }),
    partition_date_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Partition Date End',
        description:
          "Inclusive end of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.",
      }),
    dry_run: z.boolean().default(true).exactOptional().openapi({ title: 'Dry Run' }),
    only_failed: z.boolean().default(false).exactOptional().openapi({ title: 'Only Failed' }),
    only_new: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Only New',
        description:
          'Only queue newly added tasks in the latest Dag version without clearing existing tasks.',
      }),
    run_on_latest_version: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Run On Latest Version',
        description:
          '(Experimental) Run on the latest bundle version of the Dag after clearing. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False``.',
      }),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
    dag_runs: z.array(BulkDAGRunBodySchema).exactOptional().openapi({ title: 'Dag Runs' }),
  })
  .openapi({
    title: 'BulkDAGRunClearBody',
    description: 'Request body for the bulk clear Dag Runs endpoint.',
    required: [],
  })
  .openapi('BulkDAGRunClearBody')

const BulkResponseSchema = z
  .object({
    create: z
      .union([BulkActionResponseSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'Details of the bulk create operation, including successful keys and errors.',
      }),
    update: z
      .union([BulkActionResponseSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'Details of the bulk update operation, including successful keys and errors.',
      }),
    delete: z
      .union([BulkActionResponseSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'Details of the bulk delete operation, including successful keys and errors.',
      }),
  })
  .openapi({
    title: 'BulkResponse',
    description:
      'Serializer for responses to bulk entity operations.\n\nThis represents the results of create, update, and delete actions performed on entity in bulk.\nEach action (if requested) is represented as a field containing details about successful keys and any encountered errors.\nFields are populated in the response only if the respective action was part of the request, else are set None.',
    required: [],
  })
  .openapi('BulkResponse')

const ClearPartitionsBodySchema = z
  .strictObject({
    partition_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Partition Key',
        description:
          'Select runs by exact partition key match. Mutually exclusive with the other partition selectors.',
      }),
    partition_date_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Partition Date Start',
        description:
          "Inclusive start of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.",
      }),
    partition_date_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Partition Date End',
        description:
          "Inclusive end of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.",
      }),
    run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Run Id',
        description:
          'Select runs by exact run_id. Mutually exclusive with ``partition_key`` and partition date window.',
      }),
    clear_task_instances: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Clear Task Instances',
        description: 'Also clear task instances on the matched runs.',
      }),
    dry_run: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Dry Run',
        description: 'If True, compute counts without writing any changes.',
      }),
  })
  .openapi({
    title: 'ClearPartitionsBody',
    description:
      'Request body for the clearPartitions endpoint (column-reset: set partition fields to None).',
    required: [],
  })
  .openapi('ClearPartitionsBody')

const ClearPartitionsResponseSchema = z
  .object({
    dag_runs_cleared: z.int().openapi({ title: 'Dag Runs Cleared' }),
    task_instances_cleared: z.int().openapi({ title: 'Task Instances Cleared' }),
    dry_run: z.boolean().openapi({ title: 'Dry Run' }),
  })
  .openapi({
    required: ['dag_runs_cleared', 'task_instances_cleared', 'dry_run'],
    title: 'ClearPartitionsResponse',
    description: 'Response for the clearPartitions endpoint.',
  })
  .openapi('ClearPartitionsResponse')

const LoopIterationResponseSchema = z
  .object({
    loop_id: z.string().openapi({ title: 'Loop Id' }),
    iteration: z
      .int()
      .min(1)
      .openapi({
        title: 'Iteration',
        description: 'Position in the enclosing loop, counting from one.',
      }),
  })
  .openapi({
    required: ['loop_id', 'iteration'],
    title: 'LoopIterationResponse',
    description: "A task execution's position in an enclosing loop.",
  })
  .openapi('LoopIterationResponse')

const TriggerResponseSchema = z
  .object({
    id: z.int().openapi({ title: 'Id' }),
    classpath: z.string().openapi({ title: 'Classpath' }),
    kwargs: z.string().openapi({ title: 'Kwargs', deprecated: true }),
    created_date: z.iso.datetime({ offset: true }).openapi({ title: 'Created Date' }),
    queue: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Queue' }),
    triggerer_id: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Triggerer Id' }),
  })
  .openapi({
    required: ['id', 'classpath', 'kwargs', 'created_date', 'queue', 'triggerer_id'],
    title: 'TriggerResponse',
    description: 'Trigger serializer for responses.',
  })
  .openapi('TriggerResponse')

const JobResponseSchema = z
  .object({
    id: z.int().openapi({ title: 'Id' }),
    dag_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Dag Id' }),
    state: z.union([z.string(), z.null().nullable()]).openapi({ title: 'State' }),
    job_type: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Job Type' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    latest_heartbeat: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Latest Heartbeat' }),
    executor_class: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Executor Class' }),
    hostname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hostname' }),
    unixname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Unixname' }),
    team_names: z.array(z.string()).exactOptional().openapi({ title: 'Team Names' }),
    bundle_names: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Bundle Names' }),
    dag_display_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Display Name' }),
  })
  .openapi({
    required: [
      'id',
      'dag_id',
      'state',
      'job_type',
      'start_date',
      'end_date',
      'latest_heartbeat',
      'executor_class',
      'hostname',
      'unixname',
    ],
    title: 'JobResponse',
    description: 'Job serializer for responses.',
  })
  .openapi('JobResponse')

const DagVersionResponseSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    version_number: z.int().openapi({ title: 'Version Number' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    bundle_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Name' }),
    bundle_version: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Version' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    bundle_url: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Url' }),
  })
  .openapi({
    required: [
      'id',
      'version_number',
      'dag_id',
      'bundle_name',
      'bundle_version',
      'created_at',
      'dag_display_name',
      'bundle_url',
    ],
    title: 'DagVersionResponse',
    description: 'Dag Version serializer for responses.',
  })
  .openapi('DagVersionResponse')

const TaskInstanceResponseSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_run_id: z.string().openapi({ title: 'Dag Run Id' }),
    map_index: z.int().openapi({ title: 'Map Index' }),
    region_id: z.uuid().exactOptional().openapi({ title: 'Region Id' }),
    region_index: z.int().exactOptional().openapi({ title: 'Region Index' }),
    in_loop: z.boolean().openapi({ title: 'In Loop' }),
    loop_iteration: z.union([LoopIterationResponseSchema, z.null().nullable()]).exactOptional(),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    run_after: z.iso.datetime({ offset: true }).openapi({ title: 'Run After' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    duration: z.union([z.number(), z.null().nullable()]).openapi({ title: 'Duration' }),
    state: z.union([TaskInstanceStateSchema, z.null().nullable()]),
    try_number: z.int().openapi({ title: 'Try Number' }),
    max_tries: z.int().openapi({ title: 'Max Tries' }),
    task_display_name: z.string().openapi({ title: 'Task Display Name' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    hostname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hostname' }),
    unixname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Unixname' }),
    pool: z.string().openapi({ title: 'Pool' }),
    pool_slots: z.int().openapi({ title: 'Pool Slots' }),
    queue: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Queue' }),
    priority_weight: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Priority Weight' }),
    operator: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Operator' }),
    operator_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Operator Name' }),
    queued_when: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Queued When' }),
    scheduled_when: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Scheduled When' }),
    pid: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Pid' }),
    executor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Executor' }),
    executor_config: z.string().openapi({ title: 'Executor Config' }),
    note: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Note' }),
    rendered_map_index: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Rendered Map Index' }),
    rendered_fields: z.looseObject({}).exactOptional().openapi({ title: 'Rendered Fields' }),
    trigger: z.union([TriggerResponseSchema, z.null().nullable()]),
    triggerer_job: z.union([JobResponseSchema, z.null().nullable()]),
    dag_version: z.union([DagVersionResponseSchema, z.null().nullable()]),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
    state_reason: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'State Reason',
        description:
          'The reason the task instance reached its current state, as recorded by a retry policy. May describe a previous attempt: a task waiting to be retried still carries the reason its last attempt ended. It is cleared when the task is cleared and when the next attempt is scheduled or deferred.',
      }),
    retry_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Retry At',
        description:
          'When a task instance waiting to be retried becomes due. Only set in the up_for_retry state.',
      }),
  })
  .openapi({
    required: [
      'id',
      'task_id',
      'dag_id',
      'dag_run_id',
      'map_index',
      'in_loop',
      'logical_date',
      'run_after',
      'start_date',
      'end_date',
      'duration',
      'state',
      'try_number',
      'max_tries',
      'task_display_name',
      'dag_display_name',
      'hostname',
      'unixname',
      'pool',
      'pool_slots',
      'queue',
      'priority_weight',
      'operator',
      'operator_name',
      'queued_when',
      'scheduled_when',
      'pid',
      'executor',
      'executor_config',
      'note',
      'rendered_map_index',
      'trigger',
      'triggerer_job',
      'dag_version',
    ],
    title: 'TaskInstanceResponse',
    description: 'TaskInstance serializer for responses.',
  })
  .openapi('TaskInstanceResponse')

const NewTaskResponseSchema = z
  .object({
    task_id: z.string().openapi({ title: 'Task Id' }),
    task_display_name: z.string().openapi({ title: 'Task Display Name' }),
  })
  .openapi({
    required: ['task_id', 'task_display_name'],
    title: 'NewTaskResponse',
    description: "Lightweight response for new tasks that don't have TaskInstances yet.",
  })
  .openapi('NewTaskResponse')

const ClearTaskInstanceCollectionResponseSchema = z
  .object({
    task_instances: z
      .array(z.xor([TaskInstanceResponseSchema, NewTaskResponseSchema]))
      .openapi({ title: 'Task Instances' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['task_instances', 'total_entries'],
    title: 'ClearTaskInstanceCollectionResponse',
    description:
      'Response for clear dag run dry run, which may contain new tasks without full TaskInstance data.',
  })
  .openapi('ClearTaskInstanceCollectionResponse')

const ClearTaskInstancesBodySchema = z
  .strictObject({
    dry_run: z.boolean().default(true).exactOptional().openapi({ title: 'Dry Run' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date' }),
    only_failed: z.boolean().default(true).exactOptional().openapi({ title: 'Only Failed' }),
    only_running: z.boolean().default(false).exactOptional().openapi({ title: 'Only Running' }),
    reset_dag_runs: z.boolean().default(true).exactOptional().openapi({ title: 'Reset Dag Runs' }),
    task_ids: z
      .union([
        z.array(
          z.union([
            z.string(),
            z
              .array(z.unknown())
              .superRefine((arr, ctx) => {
                const Prefix = [z.string(), z.int()]
                for (const [i, Schema] of Prefix.slice(0, arr.length).entries()) {
                  const result = Schema.safeParse(arr[i])
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [i, ...issue.path] })
                    }
                  }
                }
              })
              .length(2),
          ]),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Task Ids',
        description:
          'A list of `task_id` or [`task_id`, `map_index`]. If only the `task_id` is provided for a mapped task, all of its map indices will be targeted.',
      }),
    task_group_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Task Group Id',
        description:
          "Clear every task in this task group. Mutually exclusive with `task_ids`. The group's tasks are resolved on the server from the dag structure, so all of them are targeted regardless of how many there are.",
      }),
    task_instance_ids: z
      .union([z.array(z.uuid()).min(1), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Task Instance Ids',
        description:
          'Exact current executions in one DAG run. Mutually exclusive with task_ids and task_group_id.',
      }),
    whole_expansion_ids: z
      .array(z.uuid())
      .exactOptional()
      .openapi({
        title: 'Whole Expansion Ids',
        description: 'Selected execution IDs whose entire mapped expansion should be cleared.',
      }),
    include_later_loop_iterations: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Include Later Loop Iterations',
        description: 'Clear later iterations when the selection includes a loop gate.',
      }),
    dag_run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Id' }),
    include_upstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Upstream' }),
    include_downstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Downstream' }),
    include_future: z.boolean().default(false).exactOptional().openapi({ title: 'Include Future' }),
    include_past: z.boolean().default(false).exactOptional().openapi({ title: 'Include Past' }),
    run_on_latest_version: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Run On Latest Version',
        description:
          '(Experimental) Run on the latest bundle version of the dag after clearing the task instances. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False`` (the historical default for clear/rerun).',
      }),
    prevent_running_task: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Prevent Running Task' }),
    keep_task_state: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Keep Task State',
        description:
          'Keep the task state store entries of the cleared task instances so the next attempt resumes from them. By default they are discarded, so the task starts over.',
      }),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
  })
  .openapi({
    title: 'ClearTaskInstancesBody',
    description: 'Request body for Clear Task Instances endpoint.',
    required: [],
  })
  .openapi('ClearTaskInstancesBody')

const CliLoginMetadataResponseSchema = z
  .object({
    grant_types_supported: z.array(z.string()).openapi({ title: 'Grant Types Supported' }),
    code_challenge_methods_supported: z
      .array(z.string())
      .openapi({ title: 'Code Challenge Methods Supported' }),
    authorization_endpoint: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Authorization Endpoint' }),
    device_authorization_endpoint: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Device Authorization Endpoint' }),
    token_endpoint: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Token Endpoint' }),
  })
  .openapi({
    required: [
      'grant_types_supported',
      'code_challenge_methods_supported',
      'authorization_endpoint',
      'device_authorization_endpoint',
      'token_endpoint',
    ],
    title: 'CliLoginMetadataResponse',
    description:
      'Login methods the auth manager offers to command-line clients, named as in RFC 8414.',
  })
  .openapi('CliLoginMetadataResponse')

const ConfigOptionSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    value: z
      .union([
        z.string(),
        z
          .array(z.unknown())
          .superRefine((arr, ctx) => {
            const Prefix = [z.string(), z.string()]
            for (const [i, Schema] of Prefix.slice(0, arr.length).entries()) {
              const result = Schema.safeParse(arr[i])
              if (!result.success) {
                for (const issue of result.error.issues) {
                  ctx.addIssue({ ...issue, path: [i, ...issue.path] })
                }
              }
            }
          })
          .length(2),
      ])
      .openapi({ title: 'Value' }),
  })
  .openapi({ required: ['key', 'value'], title: 'ConfigOption', description: 'Config option.' })
  .openapi('ConfigOption')

const ConfigSectionSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    options: z.array(ConfigOptionSchema).openapi({ title: 'Options' }),
  })
  .openapi({
    required: ['name', 'options'],
    title: 'ConfigSection',
    description: 'Config Section Schema.',
  })
  .openapi('ConfigSection')

const ConfigSchema = z
  .object({ sections: z.array(ConfigSectionSchema).openapi({ title: 'Sections' }) })
  .openapi({
    required: ['sections'],
    title: 'Config',
    description: 'List of config sections with their options.',
  })
  .openapi('Config')

const ConnectionResponseSchema = z
  .object({
    connection_id: z.string().openapi({ title: 'Connection Id' }),
    conn_type: z.string().openapi({ title: 'Conn Type' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    host: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Host' }),
    login: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Login' }),
    schema: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Schema' }),
    port: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Port' }),
    password: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Password' }),
    extra: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Extra' }),
    team_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: [
      'connection_id',
      'conn_type',
      'description',
      'host',
      'login',
      'schema',
      'port',
      'password',
      'extra',
      'team_name',
    ],
    title: 'ConnectionResponse',
    description: 'Connection serializer for responses.',
  })
  .openapi('ConnectionResponse')

const ConnectionCollectionResponseSchema = z
  .object({
    connections: z.array(ConnectionResponseSchema).openapi({ title: 'Connections' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['connections', 'total_entries'],
    title: 'ConnectionCollectionResponse',
    description: 'Connection Collection serializer for responses.',
  })
  .openapi('ConnectionCollectionResponse')

const ConnectionTestQueuedResponseSchema = z
  .object({
    token: z.string().openapi({ title: 'Token' }),
    connection_id: z.string().openapi({ title: 'Connection Id' }),
    state: z.string().openapi({ title: 'State' }),
  })
  .openapi({
    required: ['token', 'connection_id', 'state'],
    title: 'ConnectionTestQueuedResponse',
    description: 'Response returned when a connection test has been enqueued for worker execution.',
  })
  .openapi('ConnectionTestQueuedResponse')

const ConnectionTestRequestBodySchema = z
  .strictObject({
    connection_id: z
      .string()
      .regex(/^[\w.-]+$/)
      .max(200)
      .openapi({ title: 'Connection Id' }),
    conn_type: z.string().openapi({ title: 'Conn Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    host: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Host' }),
    login: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Login' }),
    schema: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Schema' }),
    port: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Port' }),
    password: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Password' }),
    extra: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Extra' }),
    team_name: z
      .union([z.string().max(50), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
    commit_on_success: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Commit On Success',
        description:
          'If True, save or update the connection in the connection table when the test succeeds.',
      }),
    executor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Executor',
        description: 'Executor name to dispatch the connection test to.',
      }),
    queue: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Queue',
        description: 'Worker queue to route the connection test to (executor-dependent).',
      }),
  })
  .openapi({
    required: ['connection_id', 'conn_type'],
    title: 'ConnectionTestRequestBody',
    description:
      'Request body for enqueueing a connection test on a worker.\n\nInherits ``connection_id`` pattern, ``extra`` JSON validation, and\n``team_name`` handling from ``ConnectionBody`` so tested connections share\nthe same input contract as persisted ones.',
  })
  .openapi('ConnectionTestRequestBody')

const ConnectionTestResponseSchema = z
  .object({
    status: z.boolean().openapi({ title: 'Status' }),
    message: z.string().openapi({ title: 'Message' }),
  })
  .openapi({
    required: ['status', 'message'],
    title: 'ConnectionTestResponse',
    description: 'Connection Test serializer for synchronous test responses.',
  })
  .openapi('ConnectionTestResponse')

const CreateAssetEventsBodySchema = z
  .strictObject({
    asset_id: z.int().openapi({ title: 'Asset Id' }),
    partition_key: z
      .union([z.string().regex(/\S/).max(250), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Partition Key' }),
    extra: z.looseObject({}).exactOptional().openapi({ title: 'Extra' }),
    access_control: z.union([AssetEventAccessControlSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: ['asset_id'],
    title: 'CreateAssetEventsBody',
    description: 'Create asset events request.',
  })
  .openapi('CreateAssetEventsBody')

const DagTagResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
  })
  .openapi({
    required: ['name', 'dag_id', 'dag_display_name'],
    title: 'DagTagResponse',
    description: 'Dag Tag serializer for responses.',
  })
  .openapi('DagTagResponse')

const DagRunTypeSchema = z
  .enum([
    'backfill',
    'scheduled',
    'manual',
    'operator_triggered',
    'asset_triggered',
    'asset_materialization',
  ])
  .openapi({ title: 'DagRunType', description: 'Class with DagRun types.' })
  .openapi('DagRunType')

const DAGResponseSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    is_paused: z.boolean().openapi({ title: 'Is Paused' }),
    scheduling_state: DagSchedulingStateSchema.default('active').exactOptional(),
    is_stale: z.boolean().openapi({ title: 'Is Stale' }),
    last_parsed_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Last Parsed Time' }),
    last_parse_duration: z
      .union([z.number(), z.null().nullable()])
      .openapi({ title: 'Last Parse Duration' }),
    last_expired: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Last Expired' }),
    bundle_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Name' }),
    bundle_version: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Version' }),
    relative_fileloc: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Relative Fileloc' }),
    fileloc: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Fileloc' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    timetable_summary: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Timetable Summary' }),
    timetable_description: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Timetable Description' }),
    timetable_partitioned: z.boolean().openapi({ title: 'Timetable Partitioned' }),
    timetable_periodic: z.boolean().openapi({ title: 'Timetable Periodic' }),
    tags: z.array(DagTagResponseSchema).openapi({ title: 'Tags' }),
    max_active_tasks: z.int().openapi({ title: 'Max Active Tasks' }),
    max_active_runs: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Max Active Runs' }),
    max_consecutive_failed_dag_runs: z.int().openapi({ title: 'Max Consecutive Failed Dag Runs' }),
    has_task_concurrency_limits: z.boolean().openapi({ title: 'Has Task Concurrency Limits' }),
    has_import_errors: z.boolean().openapi({ title: 'Has Import Errors' }),
    next_dagrun_logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Logical Date' }),
    next_dagrun_data_interval_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Data Interval Start' }),
    next_dagrun_data_interval_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Data Interval End' }),
    next_dagrun_run_after: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Run After' }),
    allowed_run_types: z
      .union([z.array(DagRunTypeSchema), z.null().nullable()])
      .openapi({ title: 'Allowed Run Types' }),
    owners: z.array(z.string()).openapi({ title: 'Owners' }),
    is_backfillable: z
      .boolean()
      .openapi({
        title: 'Is Backfillable',
        description: "Whether this Dag's schedule supports backfilling.",
        readOnly: true,
      }),
    file_token: z
      .string()
      .openapi({ title: 'File Token', description: 'Return file token.', readOnly: true }),
  })
  .openapi({
    required: [
      'dag_id',
      'dag_display_name',
      'is_paused',
      'is_stale',
      'last_parsed_time',
      'last_parse_duration',
      'last_expired',
      'bundle_name',
      'bundle_version',
      'relative_fileloc',
      'fileloc',
      'description',
      'timetable_summary',
      'timetable_description',
      'timetable_partitioned',
      'timetable_periodic',
      'tags',
      'max_active_tasks',
      'max_active_runs',
      'max_consecutive_failed_dag_runs',
      'has_task_concurrency_limits',
      'has_import_errors',
      'next_dagrun_logical_date',
      'next_dagrun_data_interval_start',
      'next_dagrun_data_interval_end',
      'next_dagrun_run_after',
      'allowed_run_types',
      'owners',
      'is_backfillable',
      'file_token',
    ],
    title: 'DAGResponse',
    description: 'Dag serializer for responses.',
  })
  .openapi('DAGResponse')

const DAGCollectionResponseSchema = z
  .object({
    dags: z.array(DAGResponseSchema).openapi({ title: 'Dags' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['dags', 'total_entries'],
    title: 'DAGCollectionResponse',
    description: 'Dag Collection serializer for responses.',
  })
  .openapi('DAGCollectionResponse')

const DAGDetailsResponseSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    is_paused: z.boolean().openapi({ title: 'Is Paused' }),
    scheduling_state: DagSchedulingStateSchema.default('active').exactOptional(),
    is_stale: z.boolean().openapi({ title: 'Is Stale' }),
    last_parsed_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Last Parsed Time' }),
    last_parse_duration: z
      .union([z.number(), z.null().nullable()])
      .openapi({ title: 'Last Parse Duration' }),
    last_expired: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Last Expired' }),
    bundle_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Name' }),
    bundle_version: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Version' }),
    relative_fileloc: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Relative Fileloc' }),
    fileloc: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Fileloc' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    timetable_summary: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Timetable Summary' }),
    timetable_description: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Timetable Description' }),
    timetable_partitioned: z.boolean().openapi({ title: 'Timetable Partitioned' }),
    timetable_periodic: z.boolean().openapi({ title: 'Timetable Periodic' }),
    tags: z.array(DagTagResponseSchema).openapi({ title: 'Tags' }),
    max_active_tasks: z.int().openapi({ title: 'Max Active Tasks' }),
    max_active_runs: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Max Active Runs' }),
    max_consecutive_failed_dag_runs: z.int().openapi({ title: 'Max Consecutive Failed Dag Runs' }),
    has_task_concurrency_limits: z.boolean().openapi({ title: 'Has Task Concurrency Limits' }),
    has_import_errors: z.boolean().openapi({ title: 'Has Import Errors' }),
    next_dagrun_logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Logical Date' }),
    next_dagrun_data_interval_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Data Interval Start' }),
    next_dagrun_data_interval_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Data Interval End' }),
    next_dagrun_run_after: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Next Dagrun Run After' }),
    allowed_run_types: z
      .union([z.array(DagRunTypeSchema), z.null().nullable()])
      .openapi({ title: 'Allowed Run Types' }),
    owners: z.array(z.string()).openapi({ title: 'Owners' }),
    catchup: z.boolean().openapi({ title: 'Catchup' }),
    dag_run_timeout: z
      .union([z.iso.duration(), z.null().nullable()])
      .openapi({ title: 'Dag Run Timeout' }),
    asset_expression: z
      .union([
        z.xor([
          AssetExpressionAssetSchema,
          AssetExpressionAliasSchema,
          AssetExpressionRefSchema,
          AssetExpressionAnySchema,
          AssetExpressionAllSchema,
        ]),
        z.null().nullable(),
      ])
      .openapi({ title: 'Asset Expression' }),
    doc_md: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Doc Md' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    is_paused_upon_creation: z
      .union([z.boolean(), z.null().nullable()])
      .openapi({ title: 'Is Paused Upon Creation' }),
    params: z.union([z.looseObject({}), z.null().nullable()]).openapi({ title: 'Params' }),
    render_template_as_native_obj: z.boolean().openapi({ title: 'Render Template As Native Obj' }),
    template_search_path: z
      .union([z.array(z.string()), z.null().nullable()])
      .openapi({ title: 'Template Search Path' }),
    timezone: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Timezone' }),
    last_parsed: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Last Parsed' }),
    default_args: z
      .union([z.looseObject({}), z.null().nullable()])
      .openapi({ title: 'Default Args' }),
    rerun_with_latest_version: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Rerun With Latest Version' }),
    owner_links: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Owner Links' }),
    is_favorite: z.boolean().default(false).exactOptional().openapi({ title: 'Is Favorite' }),
    active_runs_count: z.int().default(0).exactOptional().openapi({ title: 'Active Runs Count' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
    latest_dag_version: z.union([DagVersionResponseSchema, z.null().nullable()]),
    is_backfillable: z
      .boolean()
      .openapi({
        title: 'Is Backfillable',
        description: "Whether this Dag's schedule supports backfilling.",
        readOnly: true,
      }),
    file_token: z
      .string()
      .openapi({ title: 'File Token', description: 'Return file token.', readOnly: true }),
    concurrency: z
      .int()
      .openapi({
        title: 'Concurrency',
        description:
          'Return max_active_tasks as concurrency.\n\nDeprecated: Use max_active_tasks instead.',
        deprecated: true,
        readOnly: true,
      }),
  })
  .openapi({
    required: [
      'dag_id',
      'dag_display_name',
      'is_paused',
      'is_stale',
      'last_parsed_time',
      'last_parse_duration',
      'last_expired',
      'bundle_name',
      'bundle_version',
      'relative_fileloc',
      'fileloc',
      'description',
      'timetable_summary',
      'timetable_description',
      'timetable_partitioned',
      'timetable_periodic',
      'tags',
      'max_active_tasks',
      'max_active_runs',
      'max_consecutive_failed_dag_runs',
      'has_task_concurrency_limits',
      'has_import_errors',
      'next_dagrun_logical_date',
      'next_dagrun_data_interval_start',
      'next_dagrun_data_interval_end',
      'next_dagrun_run_after',
      'allowed_run_types',
      'owners',
      'catchup',
      'dag_run_timeout',
      'asset_expression',
      'doc_md',
      'start_date',
      'end_date',
      'is_paused_upon_creation',
      'params',
      'render_template_as_native_obj',
      'template_search_path',
      'timezone',
      'last_parsed',
      'default_args',
      'latest_dag_version',
      'is_backfillable',
      'file_token',
      'concurrency',
    ],
    title: 'DAGDetailsResponse',
    description: 'Specific serializer for Dag Details responses.',
  })
  .openapi('DAGDetailsResponse')

const DAGPatchBodySchema = z
  .strictObject({
    is_paused: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Is Paused' }),
    scheduling_state: z.union([DagSchedulingStateSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    title: 'DAGPatchBody',
    description: 'Dag Serializer for updatable bodies.',
    required: [],
  })
  .openapi('DAGPatchBody')

const DAGRunClearBodySchema = z
  .strictObject({
    dry_run: z.boolean().default(true).exactOptional().openapi({ title: 'Dry Run' }),
    only_failed: z.boolean().default(false).exactOptional().openapi({ title: 'Only Failed' }),
    only_new: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Only New',
        description:
          'Only queue newly added tasks in the latest Dag version without clearing existing tasks.',
      }),
    run_on_latest_version: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Run On Latest Version',
        description:
          '(Experimental) Run on the latest bundle version of the Dag after clearing. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False``.',
      }),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
  })
  .openapi({
    title: 'DAGRunClearBody',
    description: 'Dag Run serializer for clear endpoint body.',
    required: [],
  })
  .openapi('DAGRunClearBody')

const DagRunTriggeredByTypeSchema = z
  .enum(['cli', 'operator', 'rest_api', 'ui', 'test', 'timetable', 'asset', 'backfill'])
  .openapi({
    title: 'DagRunTriggeredByType',
    description: 'Class with TriggeredBy types for DagRun.',
  })
  .openapi('DagRunTriggeredByType')

const DAGRunResponseSchema = z
  .object({
    dag_run_id: z.string().openapi({ title: 'Dag Run Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    queued_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Queued At' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    duration: z.union([z.number(), z.null().nullable()]).openapi({ title: 'Duration' }),
    data_interval_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Data Interval Start' }),
    data_interval_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Data Interval End' }),
    run_after: z.iso.datetime({ offset: true }).openapi({ title: 'Run After' }),
    last_scheduling_decision: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Last Scheduling Decision' }),
    run_type: DagRunTypeSchema,
    state: DagRunStateSchema,
    triggered_by: z.union([DagRunTriggeredByTypeSchema, z.null().nullable()]),
    triggering_user_name: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Triggering User Name' }),
    conf: z.union([z.looseObject({}), z.null().nullable()]).openapi({ title: 'Conf' }),
    note: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Note' }),
    dag_versions: z.array(DagVersionResponseSchema).openapi({ title: 'Dag Versions' }),
    bundle_version: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Version' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    partition_key: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Partition Key' }),
    partition_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Partition Date' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: [
      'dag_run_id',
      'dag_id',
      'logical_date',
      'queued_at',
      'start_date',
      'end_date',
      'duration',
      'data_interval_start',
      'data_interval_end',
      'run_after',
      'last_scheduling_decision',
      'run_type',
      'state',
      'triggered_by',
      'triggering_user_name',
      'conf',
      'note',
      'dag_versions',
      'bundle_version',
      'dag_display_name',
      'partition_key',
      'partition_date',
    ],
    title: 'DAGRunResponse',
    description: 'Dag Run serializer for responses.',
  })
  .openapi('DAGRunResponse')

const DAGRunCollectionResponseSchema = z
  .object({
    dag_runs: z.array(DAGRunResponseSchema).openapi({ title: 'Dag Runs' }),
    total_entries: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Entries',
        description:
          'Number of matching items. For offset pagination this is the exact total. For cursor pagination it is capped at ``total_entries_limit``; a value equal to that limit means at least that many items match.',
      }),
    total_entries_limit: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Entries Limit',
        description:
          'Cap applied to ``total_entries`` under cursor pagination. ``null`` for offset pagination, where ``total_entries`` is exact.',
      }),
    next_cursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Next Cursor',
        description:
          'Token pointing to the next page. Populated for cursor pagination, ``null`` when using offset pagination or when there is no next page.',
      }),
    previous_cursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Previous Cursor',
        description:
          'Token pointing to the previous page. Populated for cursor pagination, ``null`` when using offset pagination or when on the first page.',
      }),
  })
  .openapi({
    required: ['dag_runs'],
    title: 'DAGRunCollectionResponse',
    description:
      'Dag Run collection response supporting both offset and cursor pagination.\n\nA single flat model is used instead of a discriminated union\n(``Annotated[Offset | Cursor, Field(discriminator=...)]``) because\nthe OpenAPI ``oneOf`` + ``discriminator`` construct is not handled\ncorrectly by ``@hey-api/openapi-ts`` / ``@7nohe/openapi-react-query-codegen``:\nreturn types degrade to ``unknown`` in JSDoc and can produce\nincorrect TypeScript types (see hey-api/openapi-ts#1613, #3270).',
  })
  .openapi('DAGRunCollectionResponse')

const DAGRunPatchBodySchema = z
  .strictObject({
    state: z.union([DagRunMutableStatesSchema, z.null().nullable()]).exactOptional(),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
  })
  .openapi({
    title: 'DAGRunPatchBody',
    description: 'Dag Run Serializer for PATCH requests.',
    required: [],
  })
  .openapi('DAGRunPatchBody')

const DAGRunsBatchBodySchema = z
  .strictObject({
    order_by: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Order By' }),
    page_offset: z.int().min(0).default(0).exactOptional().openapi({ title: 'Page Offset' }),
    page_limit: z.int().min(0).default(100).exactOptional().openapi({ title: 'Page Limit' }),
    dag_ids: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Ids' }),
    states: z
      .union([z.array(z.union([DagRunStateSchema, z.null().nullable()])), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'States' }),
    run_after_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Gte' }),
    run_after_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Gt' }),
    run_after_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Lte' }),
    run_after_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Lt' }),
    logical_date_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Gte' }),
    logical_date_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Gt' }),
    logical_date_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Lte' }),
    logical_date_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Lt' }),
    start_date_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Gte' }),
    start_date_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Gt' }),
    start_date_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Lte' }),
    start_date_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Lt' }),
    end_date_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Gte' }),
    end_date_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Gt' }),
    end_date_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Lte' }),
    end_date_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Lt' }),
    duration_gte: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Gte' }),
    duration_gt: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Gt' }),
    duration_lte: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Lte' }),
    duration_lt: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Lt' }),
    conf_contains: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Conf Contains' }),
  })
  .openapi({
    title: 'DAGRunsBatchBody',
    description: 'List Dag Runs body for batch endpoint.',
    required: [],
  })
  .openapi('DAGRunsBatchBody')

const DAGSourceResponseSchema = z
  .object({
    content: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Content' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    version_number: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Version Number' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    language: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Language' }),
  })
  .openapi({
    required: ['content', 'dag_id', 'version_number', 'dag_display_name'],
    title: 'DAGSourceResponse',
    description: 'Dag Source serializer for responses.',
  })
  .openapi('DAGSourceResponse')

const DAGTagCollectionResponseSchema = z
  .object({
    tags: z.array(z.string()).openapi({ title: 'Tags' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['tags', 'total_entries'],
    title: 'DAGTagCollectionResponse',
    description: 'Dag Tags Collection serializer for responses.',
  })
  .openapi('DAGTagCollectionResponse')

const DAGVersionCollectionResponseSchema = z
  .object({
    dag_versions: z.array(DagVersionResponseSchema).openapi({ title: 'Dag Versions' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['dag_versions', 'total_entries'],
    title: 'DAGVersionCollectionResponse',
    description: 'Dag Version Collection serializer for responses.',
  })
  .openapi('DAGVersionCollectionResponse')

const DagWarningTypeSchema = z
  .enum([
    'asset conflict',
    'duplicate dag id',
    'non-existent pool',
    'runtime varying value',
    'task group cycle',
  ])
  .openapi({
    title: 'DagWarningType',
    description:
      'Enum for DAG warning types.\n\nThis is the set of allowable values for the ``warning_type`` field\nin the DagWarning model.',
  })
  .openapi('DagWarningType')

const DAGWarningResponseSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    warning_type: z
      .union([
        DagWarningTypeSchema,
        z
          .string()
          .regex(/^[a-z][a-z0-9_]*:[a-z0-9_.\-]+$/)
          .max(50),
      ])
      .openapi({ title: 'Warning Type' }),
    message: z.string().openapi({ title: 'Message' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
  })
  .openapi({
    required: ['dag_id', 'warning_type', 'message', 'timestamp', 'dag_display_name'],
    title: 'DAGWarningResponse',
    description: 'Dag Warning serializer for responses.',
  })
  .openapi('DAGWarningResponse')

const DAGWarningCollectionResponseSchema = z
  .object({
    dag_warnings: z.array(DAGWarningResponseSchema).openapi({ title: 'Dag Warnings' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['dag_warnings', 'total_entries'],
    title: 'DAGWarningCollectionResponse',
    description: 'Dag warning collection serializer for responses.',
  })
  .openapi('DAGWarningCollectionResponse')

const DagBundleResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    active: z
      .union([z.boolean(), z.null().nullable()])
      .openapi({
        title: 'Active',
        description: "Whether the bundle is still present in this deployment's configuration.",
      }),
    version: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Version',
        description:
          'The latest version Airflow has seen for the bundle. Null when the bundle does not support versioning, or when no Dag processor has refreshed it successfully yet.',
      }),
    last_refreshed: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'Last Refreshed',
        description:
          'When a Dag processor last successfully refreshed the bundle. It advances even when the version did not change, and a failed refresh leaves it untouched.',
      }),
    bundle_url: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Bundle Url',
        description:
          'A link to view the bundle at ``version``, when one is configured and the caller may read Dag versions.',
      }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Team Name',
        description: 'The team owning the bundle, in a multi-team deployment.',
      }),
    import_error_count: z
      .union([z.int(), z.null().nullable()])
      .openapi({
        title: 'Import Error Count',
        description:
          'Number of Dag import errors recorded against this bundle that the caller is permitted to see, counted on the same terms as ``GET /importErrors``. Null when the caller may not read import errors.',
      }),
  })
  .openapi({
    required: [
      'name',
      'active',
      'version',
      'last_refreshed',
      'bundle_url',
      'team_name',
      'import_error_count',
    ],
    title: 'DagBundleResponse',
    description: 'Dag bundle serializer for responses.',
  })
  .openapi('DagBundleResponse')

const DagBundleCollectionResponseSchema = z
  .object({
    dag_bundles: z.array(DagBundleResponseSchema).openapi({ title: 'Dag Bundles' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['dag_bundles', 'total_entries'],
    title: 'DagBundleCollectionResponse',
    description: 'Dag bundle collection response.',
  })
  .openapi('DagBundleCollectionResponse')

const DagBundleDetailResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    active: z
      .union([z.boolean(), z.null().nullable()])
      .openapi({
        title: 'Active',
        description: "Whether the bundle is still present in this deployment's configuration.",
      }),
    version: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Version',
        description:
          'The latest version Airflow has seen for the bundle. Null when the bundle does not support versioning, or when no Dag processor has refreshed it successfully yet.',
      }),
    last_refreshed: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'Last Refreshed',
        description:
          'When a Dag processor last successfully refreshed the bundle. It advances even when the version did not change, and a failed refresh leaves it untouched.',
      }),
    bundle_url: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Bundle Url',
        description:
          'A link to view the bundle at ``version``, when one is configured and the caller may read Dag versions.',
      }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Team Name',
        description: 'The team owning the bundle, in a multi-team deployment.',
      }),
    import_error_count: z
      .union([z.int(), z.null().nullable()])
      .openapi({
        title: 'Import Error Count',
        description:
          'Number of Dag import errors recorded against this bundle that the caller is permitted to see, counted on the same terms as ``GET /importErrors``. Null when the caller may not read import errors.',
      }),
    dag_count: z
      .int()
      .openapi({
        title: 'Dag Count',
        description:
          'Number of live Dags recorded against the bundle that the caller is permitted to see, counted on the same terms as ``GET /dags``.',
      }),
  })
  .openapi({
    required: [
      'name',
      'active',
      'version',
      'last_refreshed',
      'bundle_url',
      'team_name',
      'import_error_count',
      'dag_count',
    ],
    title: 'DagBundleDetailResponse',
    description: 'Dag bundle serializer for the single-bundle response.',
  })
  .openapi('DagBundleDetailResponse')

const DagBundleFileResponseSchema = z
  .object({
    relative_fileloc: z.string().openapi({ title: 'Relative Fileloc' }),
    dag_count: z
      .int()
      .openapi({
        title: 'Dag Count',
        description: 'Number of live Dags the file defines that the caller may read.',
      }),
    last_parsed_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'Last Parsed Time',
        description: 'When the file was last parsed, or null if it has never parsed successfully.',
      }),
    last_parse_duration: z
      .union([z.number(), z.null().nullable()])
      .openapi({
        title: 'Last Parse Duration',
        description: 'How long the last successful parse of the file took, in seconds.',
      }),
    import_error_count: z
      .union([z.int(), z.null().nullable()])
      .openapi({
        title: 'Import Error Count',
        description:
          'Number of import errors recorded against the file, which is at most one. Null when the caller may not read import errors -- deliberately not zero, which would read as a file with nothing wrong.',
      }),
  })
  .openapi({
    required: [
      'relative_fileloc',
      'dag_count',
      'last_parsed_time',
      'last_parse_duration',
      'import_error_count',
    ],
    title: 'DagBundleFileResponse',
    description: 'A file in a Dag bundle, as the Dag processor last saw it.',
  })
  .openapi('DagBundleFileResponse')

const DagBundleFileCollectionResponseSchema = z
  .object({
    dag_bundle_files: z.array(DagBundleFileResponseSchema).openapi({ title: 'Dag Bundle Files' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['dag_bundle_files', 'total_entries'],
    title: 'DagBundleFileCollectionResponse',
    description: 'Dag bundle file collection response.',
  })
  .openapi('DagBundleFileCollectionResponse')

const DetailedHealthStatusSchema = z
  .enum(['healthy', 'degraded', 'down'])
  .openapi({
    title: 'DetailedHealthStatus',
    description: "How much of a component's work has a live instance covering it.",
  })
  .openapi('DetailedHealthStatus')

const DagProcessorInstanceInfoResponseSchema = z
  .object({
    hostname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hostname' }),
    latest_dag_processor_heartbeat: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Latest Dag Processor Heartbeat' }),
    bundle_names: z
      .union([z.array(z.string()), z.null().nullable()])
      .openapi({ title: 'Bundle Names' }),
  })
  .openapi({
    required: ['hostname', 'latest_dag_processor_heartbeat', 'bundle_names'],
    title: 'DagProcessorInstanceInfoResponse',
    description: 'Dag processor instance info serializer for responses.',
  })
  .openapi('DagProcessorInstanceInfoResponse')

const DagProcessorInfoResponseSchema = z
  .object({
    status: z.union([HealthStatusSchema, z.null().nullable()]),
    latest_dag_processor_heartbeat: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Latest Dag Processor Heartbeat' }),
    detailed_status: z.union([DetailedHealthStatusSchema, z.null().nullable()]),
    instances: z
      .union([z.array(DagProcessorInstanceInfoResponseSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Instances' }),
  })
  .openapi({
    required: ['status', 'latest_dag_processor_heartbeat', 'detailed_status'],
    title: 'DagProcessorInfoResponse',
    description: 'DagProcessor info serializer for responses.',
  })
  .openapi('DagProcessorInfoResponse')

const DagStatsStateResponseSchema = z
  .object({ state: DagRunStateSchema, count: z.int().openapi({ title: 'Count' }) })
  .openapi({
    required: ['state', 'count'],
    title: 'DagStatsStateResponse',
    description: 'DagStatsState serializer for responses.',
  })
  .openapi('DagStatsStateResponse')

const DagStatsResponseSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    stats: z.array(DagStatsStateResponseSchema).openapi({ title: 'Stats' }),
  })
  .openapi({
    required: ['dag_id', 'dag_display_name', 'stats'],
    title: 'DagStatsResponse',
    description: 'Dag Stats serializer for responses.',
  })
  .openapi('DagStatsResponse')

const DagStatsCollectionResponseSchema = z
  .object({
    dags: z.array(DagStatsResponseSchema).openapi({ title: 'Dags' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['dags', 'total_entries'],
    title: 'DagStatsCollectionResponse',
    description: 'Dag Stats Collection serializer for responses.',
  })
  .openapi('DagStatsCollectionResponse')

const DagVersionDiffCategorySchema = z
  .enum([
    'asset',
    'authorization',
    'callback',
    'deadline',
    'dependency',
    'metadata',
    'param',
    'provenance',
    'schedule',
    'task',
    'unknown',
  ])
  .openapi({
    title: 'DagVersionDiffCategory',
    description: 'What part of a Dag a difference belongs to. Mirrors ``DiffCategory``.',
  })
  .openapi('DagVersionDiffCategory')

const DagVersionDiffOperationSchema = z
  .enum(['added', 'removed', 'changed'])
  .openapi({
    title: 'DagVersionDiffOperation',
    description: 'How a difference presents at its path.',
  })
  .openapi('DagVersionDiffOperation')

const DagVersionDiffImpactSchema = z
  .enum(['authorization', 'execution', 'metadata', 'provenance', 'unknown'])
  .openapi({
    title: 'DagVersionDiffImpact',
    description: 'What a difference affects. Mirrors ``DiffImpact``.',
  })
  .openapi('DagVersionDiffImpact')

const DagVersionDiffChangeResponseSchema = z
  .object({
    path: z.string().openapi({ title: 'Path' }),
    operation: DagVersionDiffOperationSchema,
    category: DagVersionDiffCategorySchema,
    impact: DagVersionDiffImpactSchema,
    occurrence_count: z
      .int()
      .openapi({
        title: 'Occurrence Count',
        description:
          'How many underlying changes this record stands for. Always 1 when values are disclosed, since each change is then its own record; a redacted record merges every change sharing its path and operation.',
      }),
    before_digest: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Before Digest',
        description:
          'SHA-256 over the canonical JSON of `before_value`. Present only when values are disclosed, and null when the change has no before side.',
      }),
    after_digest: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'After Digest',
        description:
          'SHA-256 over the canonical JSON of `after_value`. Present only when values are disclosed, and null when the change has no after side.',
      }),
    before_value: z
      .any()
      .exactOptional()
      .openapi({
        title: 'Before Value',
        description:
          'The value this path held in the base version. Present only when values are disclosed, and omitted entirely when the change has no before side — which is how an absent side is told apart from a stored null.',
      }),
    after_value: z
      .any()
      .exactOptional()
      .openapi({
        title: 'After Value',
        description:
          'The value this path holds in the target version. Present only when values are disclosed, and omitted entirely when the change has no after side — which is how an absent side is told apart from a stored null.',
      }),
  })
  .openapi({
    required: ['path', 'operation', 'category', 'impact', 'occurrence_count'],
    title: 'DagVersionDiffChangeResponse',
    description: 'One structural difference between two stored Dag versions.',
  })
  .openapi('DagVersionDiffChangeResponse')

const DagVersionDiffModeSchema = z
  .enum(['observed_state', 'unavailable'])
  .openapi({
    title: 'DagVersionDiffMode',
    description: 'Whether a comparison could be made at all.',
  })
  .openapi('DagVersionDiffMode')

const DagVersionDiffSerializerVersionsSchema = z
  .object({
    base: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Base' }),
    target: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Target' }),
  })
  .openapi({
    required: ['base', 'target'],
    title: 'DagVersionDiffSerializerVersions',
    description:
      'Which Dag serializer format each compared version was stored under.\n\nUnrelated to ``diff_schema_version``, which versions this payload rather than the\nserialized Dags it describes.',
  })
  .openapi('DagVersionDiffSerializerVersions')

const DagVersionDiffValuesStatusSchema = z
  .enum(['available', 'unavailable'])
  .openapi({
    title: 'DagVersionDiffValuesStatus',
    description: 'Whether values were disclosed. Mirrors ``ValuesStatus``.',
  })
  .openapi('DagVersionDiffValuesStatus')

const DagVersionDiffResponseSchema = z
  .object({
    diff_schema_version: z
      .int()
      .openapi({
        title: 'Diff Schema Version',
        description: 'Wire format of this payload. Incremented when its shape changes.',
      }),
    base_version_number: z.int().openapi({ title: 'Base Version Number' }),
    target_version_number: z.int().openapi({ title: 'Target Version Number' }),
    serializer_versions: DagVersionDiffSerializerVersionsSchema,
    mode: DagVersionDiffModeSchema,
    unavailable_reason: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Unavailable Reason',
        description:
          'Why no comparison could be made. Populated only when `mode` is `unavailable`.',
      }),
    values_status: DagVersionDiffValuesStatusSchema,
    truncated: z
      .boolean()
      .openapi({
        title: 'Truncated',
        description:
          'Whether a change at a path not already in `changes` was dropped to stay within `max_changes`. Paths that are absent are absent, not unchanged.',
      }),
    total_changes: z
      .int()
      .openapi({
        title: 'Total Changes',
        description:
          'Underlying changes across every disclosed path, not the number of records. Exact when `truncated` is false; a lower bound when it is true, because the changes at dropped paths are not counted.',
      }),
    changes: z.array(DagVersionDiffChangeResponseSchema).openapi({ title: 'Changes' }),
  })
  .openapi({
    required: [
      'diff_schema_version',
      'base_version_number',
      'target_version_number',
      'serializer_versions',
      'mode',
      'values_status',
      'truncated',
      'total_changes',
      'changes',
    ],
    title: 'DagVersionDiffResponse',
    description: 'Observed-state difference between two stored Dag versions.',
  })
  .openapi('DagVersionDiffResponse')

const DryRunBackfillResponseSchema = z
  .object({
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    partition_key: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Partition Key' }),
    partition_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Partition Date' }),
  })
  .openapi({
    required: ['logical_date', 'partition_key', 'partition_date'],
    title: 'DryRunBackfillResponse',
    description: 'Backfill serializer for responses in dry-run mode.',
  })
  .openapi('DryRunBackfillResponse')

const DryRunBackfillCollectionResponseSchema = z
  .object({
    backfills: z.array(DryRunBackfillResponseSchema).openapi({ title: 'Backfills' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['backfills', 'total_entries'],
    title: 'DryRunBackfillCollectionResponse',
    description: 'Backfill collection serializer for responses in dry-run mode.',
  })
  .openapi('DryRunBackfillCollectionResponse')

const EventLogResponseSchema = z
  .object({
    event_log_id: z.int().openapi({ title: 'Event Log Id' }),
    when: z.iso.datetime({ offset: true }).openapi({ title: 'When' }),
    task_instance_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Task Instance Id' }),
    dag_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Dag Id' }),
    task_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Task Id' }),
    run_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Run Id' }),
    map_index: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Map Index' }),
    try_number: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Try Number' }),
    event: z.string().openapi({ title: 'Event' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    owner: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Owner' }),
    owner_display_name: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Owner Display Name' }),
    extra: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Extra' }),
    dag_display_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Display Name' }),
    task_display_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Task Display Name' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: [
      'event_log_id',
      'when',
      'dag_id',
      'task_id',
      'run_id',
      'map_index',
      'try_number',
      'event',
      'logical_date',
      'owner',
      'owner_display_name',
      'extra',
    ],
    title: 'EventLogResponse',
    description: 'Event Log Response.',
  })
  .openapi('EventLogResponse')

const EventLogCollectionResponseSchema = z
  .object({
    event_logs: z.array(EventLogResponseSchema).openapi({ title: 'Event Logs' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['event_logs', 'total_entries'],
    title: 'EventLogCollectionResponse',
    description: 'Event Log Collection Response.',
  })
  .openapi('EventLogCollectionResponse')

const ExternalLogUrlResponseSchema = z
  .object({ url: z.string().openapi({ title: 'Url' }) })
  .openapi({
    required: ['url'],
    title: 'ExternalLogUrlResponse',
    description: 'Response for the external log URL endpoint.',
  })
  .openapi('ExternalLogUrlResponse')

const PluginAppliesToResponseSchema = z
  .record(z.string(), z.array(z.string()))
  .openapi({
    title: 'PluginAppliesToResponse',
    description:
      'Serializer for the optional scoping criteria of a UI plugin.\n\nAn open map of dotted field path to the values that path may take -- not a closed set of\ncriteria. ``{"state": ["failed"], "dag.tags.name": ["ml"]}`` scopes to failed entities of\nml-tagged Dags. An unqualified path is rooted at the entity the ``destination`` is about;\na path may instead name a related record (``dag``, ``dag_run``, ``task``, ``task_instance``)\nas its first segment. Matching is equality against the listed values, OR within a path and\nAND across paths, and is evaluated client-side.',
  })
  .openapi('PluginAppliesToResponse')

const ExternalViewResponseSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    icon: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Icon' }),
    icon_dark_mode: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Icon Dark Mode' }),
    url_route: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Url Route' }),
    category: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Category' }),
    nav_top_level: z
      .union([z.boolean(), z.null().nullable()])
      .default(false)
      .exactOptional()
      .openapi({ title: 'Nav Top Level' }),
    applies_to: z.union([PluginAppliesToResponseSchema, z.null().nullable()]).exactOptional(),
    href: z.string().openapi({ title: 'Href' }),
    destination: z
      .enum(['nav', 'dag', 'dag_run', 'task', 'task_instance', 'asset', 'base'])
      .default('nav')
      .exactOptional()
      .openapi({ title: 'Destination' }),
  })
  .openapi({
    required: ['name', 'href'],
    title: 'ExternalViewResponse',
    description: 'Serializer for External View Plugin responses.',
  })
  .openapi('ExternalViewResponse')

const ExtraLinkCollectionResponseSchema = z
  .object({
    extra_links: z
      .record(z.string(), z.union([z.string(), z.null().nullable()]))
      .openapi({ title: 'Extra Links' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['extra_links', 'total_entries'],
    title: 'ExtraLinkCollectionResponse',
    description: 'Extra Links Response.',
  })
  .openapi('ExtraLinkCollectionResponse')

const FastAPIAppResponseSchema = z
  .looseObject({
    app: z.string().openapi({ title: 'App' }),
    url_prefix: z.string().openapi({ title: 'Url Prefix' }),
    name: z.string().openapi({ title: 'Name' }),
  })
  .openapi({
    required: ['app', 'url_prefix', 'name'],
    title: 'FastAPIAppResponse',
    description: 'Serializer for Plugin FastAPI App responses.',
  })
  .openapi('FastAPIAppResponse')

const FastAPIRootMiddlewareResponseSchema = z
  .looseObject({
    middleware: z.string().openapi({ title: 'Middleware' }),
    name: z.string().openapi({ title: 'Name' }),
  })
  .openapi({
    required: ['middleware', 'name'],
    title: 'FastAPIRootMiddlewareResponse',
    description: 'Serializer for Plugin FastAPI root middleware responses.',
  })
  .openapi('FastAPIRootMiddlewareResponse')

const HITLUserSchema = z
  .object({ id: z.string().openapi({ title: 'Id' }), name: z.string().openapi({ title: 'Name' }) })
  .openapi({
    required: ['id', 'name'],
    title: 'HITLUser',
    description: 'Schema for a Human-in-the-loop users.',
  })
  .openapi('HITLUser')

const HITLDetailSchema = z
  .object({
    options: z.array(z.string()).min(1).openapi({ title: 'Options' }),
    subject: z.string().openapi({ title: 'Subject' }),
    body: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Body' }),
    defaults: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Defaults' }),
    multiple: z.boolean().default(false).exactOptional().openapi({ title: 'Multiple' }),
    params: z.looseObject({}).exactOptional().openapi({ title: 'Params' }),
    assigned_users: z.array(HITLUserSchema).exactOptional().openapi({ title: 'Assigned Users' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    responded_by_user: z.union([HITLUserSchema, z.null().nullable()]).exactOptional(),
    responded_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Responded At' }),
    chosen_options: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Chosen Options' }),
    params_input: z.looseObject({}).exactOptional().openapi({ title: 'Params Input' }),
    response_received: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Response Received' }),
    task_instance: TaskInstanceResponseSchema,
  })
  .openapi({
    required: ['options', 'subject', 'created_at', 'task_instance'],
    title: 'HITLDetail',
    description: 'Schema for Human-in-the-loop detail.',
  })
  .openapi('HITLDetail')

const HITLDetailCollectionSchema = z
  .object({
    hitl_details: z.array(HITLDetailSchema).openapi({ title: 'Hitl Details' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['hitl_details', 'total_entries'],
    title: 'HITLDetailCollection',
    description: 'Schema for a collection of Human-in-the-loop details.',
  })
  .openapi('HITLDetailCollection')

const TaskInstanceHistoryResponseSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    dag_run_id: z.string().openapi({ title: 'Dag Run Id' }),
    map_index: z.int().openapi({ title: 'Map Index' }),
    region_id: z.uuid().exactOptional().openapi({ title: 'Region Id' }),
    region_index: z.int().exactOptional().openapi({ title: 'Region Index' }),
    loop_iteration: z.union([LoopIterationResponseSchema, z.null().nullable()]).exactOptional(),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    duration: z.union([z.number(), z.null().nullable()]).openapi({ title: 'Duration' }),
    state: z.union([TaskInstanceStateSchema, z.null().nullable()]),
    try_number: z.int().openapi({ title: 'Try Number' }),
    max_tries: z.int().openapi({ title: 'Max Tries' }),
    task_display_name: z.string().openapi({ title: 'Task Display Name' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    hostname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hostname' }),
    unixname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Unixname' }),
    pool: z.string().openapi({ title: 'Pool' }),
    pool_slots: z.int().openapi({ title: 'Pool Slots' }),
    queue: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Queue' }),
    priority_weight: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Priority Weight' }),
    operator: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Operator' }),
    operator_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Operator Name' }),
    queued_when: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Queued When' }),
    scheduled_when: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Scheduled When' }),
    pid: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Pid' }),
    executor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Executor' }),
    executor_config: z.string().openapi({ title: 'Executor Config' }),
    dag_version: z.union([DagVersionResponseSchema, z.null().nullable()]),
    note: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Note' }),
    state_reason: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'State Reason',
        description: 'The reason this try ended, as recorded by a retry policy.',
      }),
    retry_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Retry At',
        description:
          'When a task instance waiting to be retried becomes due. Only set in the up_for_retry state.',
      }),
  })
  .openapi({
    required: [
      'id',
      'task_id',
      'dag_id',
      'dag_run_id',
      'map_index',
      'start_date',
      'end_date',
      'duration',
      'state',
      'try_number',
      'max_tries',
      'task_display_name',
      'dag_display_name',
      'hostname',
      'unixname',
      'pool',
      'pool_slots',
      'queue',
      'priority_weight',
      'operator',
      'operator_name',
      'queued_when',
      'scheduled_when',
      'pid',
      'executor',
      'executor_config',
      'dag_version',
    ],
    title: 'TaskInstanceHistoryResponse',
    description: 'TaskInstanceHistory serializer for responses.',
  })
  .openapi('TaskInstanceHistoryResponse')

const HITLDetailHistorySchema = z
  .object({
    options: z.array(z.string()).min(1).openapi({ title: 'Options' }),
    subject: z.string().openapi({ title: 'Subject' }),
    body: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Body' }),
    defaults: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Defaults' }),
    multiple: z.boolean().default(false).exactOptional().openapi({ title: 'Multiple' }),
    params: z.looseObject({}).exactOptional().openapi({ title: 'Params' }),
    assigned_users: z.array(HITLUserSchema).exactOptional().openapi({ title: 'Assigned Users' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    responded_by_user: z.union([HITLUserSchema, z.null().nullable()]).exactOptional(),
    responded_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Responded At' }),
    chosen_options: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Chosen Options' }),
    params_input: z.looseObject({}).exactOptional().openapi({ title: 'Params Input' }),
    response_received: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Response Received' }),
    task_instance: TaskInstanceHistoryResponseSchema,
  })
  .openapi({
    required: ['options', 'subject', 'created_at', 'task_instance'],
    title: 'HITLDetailHistory',
    description: 'Schema for Human-in-the-loop detail history.',
  })
  .openapi('HITLDetailHistory')

const HITLDetailResponseSchema = z
  .object({
    responded_by: HITLUserSchema,
    responded_at: z.iso.datetime({ offset: true }).openapi({ title: 'Responded At' }),
    chosen_options: z.array(z.string()).min(1).openapi({ title: 'Chosen Options' }),
    params_input: z.looseObject({}).exactOptional().openapi({ title: 'Params Input' }),
  })
  .openapi({
    required: ['responded_by', 'responded_at', 'chosen_options'],
    title: 'HITLDetailResponse',
    description: 'Response of updating a Human-in-the-loop detail.',
  })
  .openapi('HITLDetailResponse')

const HTTPExceptionResponseSchema = z
  .object({ detail: z.union([z.string(), z.looseObject({})]).openapi({ title: 'Detail' }) })
  .openapi({
    required: ['detail'],
    title: 'HTTPExceptionResponse',
    description: 'HTTPException Model used for error response.',
  })
  .openapi('HTTPExceptionResponse')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
    input: z.any().exactOptional().openapi({ title: 'Input' }),
    ctx: z.object({}).exactOptional().openapi({ title: 'Context' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const SchedulerInstanceInfoResponseSchema = z
  .object({
    hostname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hostname' }),
    latest_scheduler_heartbeat: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Latest Scheduler Heartbeat' }),
  })
  .openapi({
    required: ['hostname', 'latest_scheduler_heartbeat'],
    title: 'SchedulerInstanceInfoResponse',
    description: 'Scheduler instance info serializer for responses.',
  })
  .openapi('SchedulerInstanceInfoResponse')

const SchedulerInfoResponseSchema = z
  .object({
    status: z.union([HealthStatusSchema, z.null().nullable()]),
    latest_scheduler_heartbeat: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Latest Scheduler Heartbeat' }),
    detailed_status: z.union([DetailedHealthStatusSchema, z.null().nullable()]),
    instances: z
      .union([z.array(SchedulerInstanceInfoResponseSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Instances' }),
  })
  .openapi({
    required: ['status', 'latest_scheduler_heartbeat', 'detailed_status'],
    title: 'SchedulerInfoResponse',
    description: 'Scheduler info serializer for responses.',
  })
  .openapi('SchedulerInfoResponse')

const TriggererInstanceInfoResponseSchema = z
  .object({
    hostname: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hostname' }),
    latest_triggerer_heartbeat: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Latest Triggerer Heartbeat' }),
    team_names: z.array(z.string()).openapi({ title: 'Team Names' }),
  })
  .openapi({
    required: ['hostname', 'latest_triggerer_heartbeat', 'team_names'],
    title: 'TriggererInstanceInfoResponse',
    description: 'Triggerer instance info serializer for responses.',
  })
  .openapi('TriggererInstanceInfoResponse')

const TriggererInfoResponseSchema = z
  .object({
    status: z.union([HealthStatusSchema, z.null().nullable()]),
    latest_triggerer_heartbeat: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Latest Triggerer Heartbeat' }),
    detailed_status: z.union([DetailedHealthStatusSchema, z.null().nullable()]),
    instances: z
      .union([z.array(TriggererInstanceInfoResponseSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Instances' }),
  })
  .openapi({
    required: ['status', 'latest_triggerer_heartbeat', 'detailed_status'],
    title: 'TriggererInfoResponse',
    description: 'Triggerer info serializer for responses.',
  })
  .openapi('TriggererInfoResponse')

const HealthInfoResponseSchema = z
  .object({
    metadatabase: BaseInfoResponseSchema,
    scheduler: SchedulerInfoResponseSchema,
    triggerer: TriggererInfoResponseSchema,
    dag_processor: z.union([DagProcessorInfoResponseSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: ['metadatabase', 'scheduler', 'triggerer'],
    title: 'HealthInfoResponse',
    description: 'Health serializer for responses.',
  })
  .openapi('HealthInfoResponse')

const ImportErrorResponseSchema = z
  .object({
    import_error_id: z.int().openapi({ title: 'Import Error Id' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    filename: z.string().openapi({ title: 'Filename' }),
    source_reference: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Source Reference' }),
    bundle_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Bundle Name' }),
    stack_trace: z.string().openapi({ title: 'Stack Trace' }),
    file_token: z
      .string()
      .openapi({
        title: 'File Token',
        description: 'Return a signed token identifying the file, used to request its reparse.',
        readOnly: true,
      }),
  })
  .openapi({
    required: [
      'import_error_id',
      'timestamp',
      'filename',
      'source_reference',
      'bundle_name',
      'stack_trace',
      'file_token',
    ],
    title: 'ImportErrorResponse',
    description: 'Import Error Response.',
  })
  .openapi('ImportErrorResponse')

const ImportErrorCollectionResponseSchema = z
  .object({
    import_errors: z.array(ImportErrorResponseSchema).openapi({ title: 'Import Errors' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['import_errors', 'total_entries'],
    title: 'ImportErrorCollectionResponse',
    description: 'Import Error Collection Response.',
  })
  .openapi('ImportErrorCollectionResponse')

const JobCollectionResponseSchema = z
  .object({
    jobs: z.array(JobResponseSchema).openapi({ title: 'Jobs' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['jobs', 'total_entries'],
    title: 'JobCollectionResponse',
    description: 'Job Collection Response.',
  })
  .openapi('JobCollectionResponse')

const MaterializeAssetBodySchema = z
  .strictObject({
    dag_run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Id' }),
    data_interval_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Data Interval Start' }),
    data_interval_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Data Interval End' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date' }),
    run_after: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After' }),
    conf: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Conf' }),
    note: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Note' }),
    partition_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Partition Key' }),
    bundle_version: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Bundle Version' }),
    drain_dag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Drain Dag',
        description:
          'Drain the Dag together with this run. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag.',
      }),
  })
  .openapi({
    title: 'MaterializeAssetBody',
    description: 'Materialize asset request.',
    required: [],
  })
  .openapi('MaterializeAssetBody')

const PatchTaskInstanceBodySchema = z
  .strictObject({
    new_state: z.union([TaskInstanceStateSchema, z.null().nullable()]).exactOptional(),
    region_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Id' }),
    region_index: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Index' }),
    note: z
      .union([z.string().max(1000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Note' }),
    include_upstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Upstream' }),
    include_downstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Include Downstream' }),
    include_future: z.boolean().default(false).exactOptional().openapi({ title: 'Include Future' }),
    include_past: z.boolean().default(false).exactOptional().openapi({ title: 'Include Past' }),
  })
  .openapi({
    title: 'PatchTaskInstanceBody',
    description: 'Request body for patching task instance state.',
    required: [],
  })
  .openapi('PatchTaskInstanceBody')

const ReactAppResponseSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    icon: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Icon' }),
    icon_dark_mode: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Icon Dark Mode' }),
    url_route: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Url Route' }),
    category: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Category' }),
    nav_top_level: z
      .union([z.boolean(), z.null().nullable()])
      .default(false)
      .exactOptional()
      .openapi({ title: 'Nav Top Level' }),
    applies_to: z.union([PluginAppliesToResponseSchema, z.null().nullable()]).exactOptional(),
    bundle_url: z.string().openapi({ title: 'Bundle Url' }),
    destination: z
      .enum([
        'nav',
        'dag',
        'dag_run',
        'task',
        'task_instance',
        'asset',
        'base',
        'dashboard',
        'dag_overview',
        'task_overview',
      ])
      .default('nav')
      .exactOptional()
      .openapi({ title: 'Destination' }),
  })
  .openapi({
    required: ['name', 'bundle_url'],
    title: 'ReactAppResponse',
    description: 'Serializer for React App Plugin responses.',
  })
  .openapi('ReactAppResponse')

const PluginLinkActionResponseSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    destination: z.enum(['dag', 'dag_run', 'task_instance']).openapi({ title: 'Destination' }),
    icon: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Icon' }),
    icon_dark_mode: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Icon Dark Mode' }),
    applies_to: z.union([PluginAppliesToResponseSchema, z.null().nullable()]).exactOptional(),
    action_type: z.literal('link').openapi({ title: 'Action Type' }),
    href: z.string().openapi({ title: 'Href' }),
  })
  .openapi({
    required: ['name', 'destination', 'action_type', 'href'],
    title: 'PluginLinkActionResponse',
    description: 'Serializer for a UI action that opens a URL.',
  })
  .openapi('PluginLinkActionResponse')

const PluginReactActionResponseSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    destination: z.enum(['dag', 'dag_run', 'task_instance']).openapi({ title: 'Destination' }),
    icon: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Icon' }),
    icon_dark_mode: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Icon Dark Mode' }),
    applies_to: z.union([PluginAppliesToResponseSchema, z.null().nullable()]).exactOptional(),
    action_type: z.literal('react').openapi({ title: 'Action Type' }),
    bundle_url: z.string().openapi({ title: 'Bundle Url' }),
  })
  .openapi({
    required: ['name', 'destination', 'action_type', 'bundle_url'],
    title: 'PluginReactActionResponse',
    description: 'Serializer for a UI action that mounts a React component behind a button.',
  })
  .openapi('PluginReactActionResponse')

const PluginResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
    macros: z.array(z.string()).openapi({ title: 'Macros' }),
    flask_blueprints: z.array(z.string()).openapi({ title: 'Flask Blueprints' }),
    fastapi_apps: z.array(FastAPIAppResponseSchema).openapi({ title: 'Fastapi Apps' }),
    fastapi_root_middlewares: z
      .array(FastAPIRootMiddlewareResponseSchema)
      .openapi({ title: 'Fastapi Root Middlewares' }),
    external_views: z
      .array(ExternalViewResponseSchema)
      .openapi({
        title: 'External Views',
        description:
          "Aggregate all external views. Both 'external_views' and 'appbuilder_menu_items' are included here.",
      }),
    react_apps: z.array(ReactAppResponseSchema).openapi({ title: 'React Apps' }),
    ui_actions: z
      .array(
        z
          .discriminatedUnion('action_type', [
            PluginLinkActionResponseSchema,
            PluginReactActionResponseSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'action_type',
              mapping: {
                link: '#/components/schemas/PluginLinkActionResponse',
                react: '#/components/schemas/PluginReactActionResponse',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        title: 'Ui Actions',
        description:
          'User-defined actions rendered on Dag, Dag Run, and Task Instance table rows and header cards.',
      }),
    appbuilder_views: z.array(AppBuilderViewResponseSchema).openapi({ title: 'Appbuilder Views' }),
    appbuilder_menu_items: z
      .array(AppBuilderMenuItemResponseSchema)
      .openapi({ title: 'Appbuilder Menu Items', deprecated: true }),
    global_operator_extra_links: z
      .array(z.string())
      .openapi({ title: 'Global Operator Extra Links' }),
    operator_extra_links: z.array(z.string()).openapi({ title: 'Operator Extra Links' }),
    source: z.string().openapi({ title: 'Source' }),
    listeners: z.array(z.string()).openapi({ title: 'Listeners' }),
    timetables: z.array(z.string()).openapi({ title: 'Timetables' }),
  })
  .openapi({
    required: [
      'name',
      'macros',
      'flask_blueprints',
      'fastapi_apps',
      'fastapi_root_middlewares',
      'external_views',
      'react_apps',
      'appbuilder_views',
      'appbuilder_menu_items',
      'global_operator_extra_links',
      'operator_extra_links',
      'source',
      'listeners',
      'timetables',
    ],
    title: 'PluginResponse',
    description: 'Plugin serializer.',
  })
  .openapi('PluginResponse')

const PluginCollectionResponseSchema = z
  .object({
    plugins: z.array(PluginResponseSchema).openapi({ title: 'Plugins' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['plugins', 'total_entries'],
    title: 'PluginCollectionResponse',
    description: 'Plugin Collection serializer.',
  })
  .openapi('PluginCollectionResponse')

const PluginImportErrorResponseSchema = z
  .object({
    source: z.string().openapi({ title: 'Source' }),
    error: z.string().openapi({ title: 'Error' }),
  })
  .openapi({
    required: ['source', 'error'],
    title: 'PluginImportErrorResponse',
    description: 'Plugin Import Error serializer for responses.',
  })
  .openapi('PluginImportErrorResponse')

const PluginImportErrorCollectionResponseSchema = z
  .object({
    import_errors: z.array(PluginImportErrorResponseSchema).openapi({ title: 'Import Errors' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['import_errors', 'total_entries'],
    title: 'PluginImportErrorCollectionResponse',
    description: 'Plugin Import Error Collection serializer.',
  })
  .openapi('PluginImportErrorCollectionResponse')

const PoolResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    slots: z
      .int()
      .min(-1)
      .openapi({ title: 'Slots', description: 'Number of slots. Use -1 for unlimited.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    include_deferred: z.boolean().openapi({ title: 'Include Deferred' }),
    occupied_slots: z.int().openapi({ title: 'Occupied Slots' }),
    running_slots: z.int().openapi({ title: 'Running Slots' }),
    queued_slots: z.int().openapi({ title: 'Queued Slots' }),
    scheduled_slots: z.int().openapi({ title: 'Scheduled Slots' }),
    open_slots: z.int().openapi({ title: 'Open Slots' }),
    deferred_slots: z.int().openapi({ title: 'Deferred Slots' }),
    team_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: [
      'name',
      'slots',
      'include_deferred',
      'occupied_slots',
      'running_slots',
      'queued_slots',
      'scheduled_slots',
      'open_slots',
      'deferred_slots',
      'team_name',
    ],
    title: 'PoolResponse',
    description: 'Pool serializer for responses.',
  })
  .openapi('PoolResponse')

const PoolCollectionResponseSchema = z
  .object({
    pools: z.array(PoolResponseSchema).openapi({ title: 'Pools' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['pools', 'total_entries'],
    title: 'PoolCollectionResponse',
    description: 'Pool Collection serializer for responses.',
  })
  .openapi('PoolCollectionResponse')

const PoolPatchBodySchema = z
  .strictObject({
    pool: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Pool' }),
    slots: z
      .union([
        z.int().min(-1).openapi({ description: 'Number of slots. Use -1 for unlimited.' }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Slots' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    include_deferred: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Include Deferred' }),
    team_name: z
      .union([z.string().max(50), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    title: 'PoolPatchBody',
    description: 'Pool serializer for patch bodies.',
    required: [],
  })
  .openapi('PoolPatchBody')

const ProviderAssetUriInfoSchema = z
  .object({
    schemes: z.array(z.string()).openapi({ title: 'Schemes' }),
    handler: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Handler' }),
    factory: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Factory' }),
    to_openlineage_converter: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'To Openlineage Converter' }),
  })
  .openapi({
    required: ['schemes'],
    title: 'ProviderAssetUriInfo',
    description: 'Asset URI scheme handling provided by a provider.',
  })
  .openapi('ProviderAssetUriInfo')

const ProviderResponseSchema = z
  .object({
    package_name: z.string().openapi({ title: 'Package Name' }),
    description: z.string().openapi({ title: 'Description' }),
    version: z.string().openapi({ title: 'Version' }),
    documentation_url: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Documentation Url' }),
  })
  .openapi({
    required: ['package_name', 'description', 'version', 'documentation_url'],
    title: 'ProviderResponse',
    description: 'Provider serializer for responses.',
  })
  .openapi('ProviderResponse')

const ProviderCollectionResponseSchema = z
  .object({
    providers: z.array(ProviderResponseSchema).openapi({ title: 'Providers' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['providers', 'total_entries'],
    title: 'ProviderCollectionResponse',
    description: 'Provider Collection serializer for responses.',
  })
  .openapi('ProviderCollectionResponse')

const ProviderConfigOptionInfoSchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    version_added: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Version Added' }),
    type: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Type' }),
    example: z
      .union([z.string(), z.int(), z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Example' }),
    default: z
      .union([z.string(), z.int(), z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Default' }),
    sensitive: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Sensitive' }),
    is_template: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Is Template' }),
    see_also: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'See Also' }),
  })
  .openapi({
    title: 'ProviderConfigOptionInfo',
    description: 'Configuration option contributed by a provider.',
    required: [],
  })
  .openapi('ProviderConfigOptionInfo')

const ProviderConfigSectionInfoSchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    options: z
      .record(z.string(), ProviderConfigOptionInfoSchema)
      .exactOptional()
      .openapi({ title: 'Options' }),
  })
  .openapi({
    title: 'ProviderConfigSectionInfo',
    description: 'Configuration section contributed by a provider.',
    required: [],
  })
  .openapi('ProviderConfigSectionInfo')

const ProviderConnectionFieldInfoSchema = z
  .object({
    label: z.string().openapi({ title: 'Label' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    schema: z.looseObject({}).openapi({ title: 'Schema' }),
  })
  .openapi({
    required: ['label', 'schema'],
    title: 'ProviderConnectionFieldInfo',
    description: 'Custom connection field a connection type stores in ``Connection.extra``.',
  })
  .openapi('ProviderConnectionFieldInfo')

const ProviderConnectionUiFieldBehaviourInfoSchema = z
  .object({
    hidden_fields: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Hidden Fields' }),
    relabeling: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Relabeling' }),
    placeholders: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Placeholders' }),
  })
  .openapi({
    title: 'ProviderConnectionUiFieldBehaviourInfo',
    description: 'Customizations a connection type applies to the standard connection form fields.',
    required: [],
  })
  .openapi('ProviderConnectionUiFieldBehaviourInfo')

const ProviderConnectionTypeInfoSchema = z
  .object({
    connection_type: z.string().openapi({ title: 'Connection Type' }),
    hook_class_name: z.string().openapi({ title: 'Hook Class Name' }),
    hook_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Hook Name' }),
    ui_field_behaviour: z
      .union([ProviderConnectionUiFieldBehaviourInfoSchema, z.null().nullable()])
      .exactOptional(),
    conn_fields: z
      .union([z.record(z.string(), ProviderConnectionFieldInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Conn Fields' }),
    external_services: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'External Services' }),
  })
  .openapi({
    required: ['connection_type', 'hook_class_name'],
    title: 'ProviderConnectionTypeInfo',
    description: 'Connection type provided by a provider.',
  })
  .openapi('ProviderConnectionTypeInfo')

const ProviderIntegrationInfoSchema = z
  .object({
    integration_name: z.string().openapi({ title: 'Integration Name' }),
    external_doc_url: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'External Doc Url' }),
    how_to_guide: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'How To Guide' }),
    logo: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Logo' }),
    tags: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tags' }),
  })
  .openapi({
    required: ['integration_name'],
    title: 'ProviderIntegrationInfo',
    description: 'Integration provided by a provider.',
  })
  .openapi('ProviderIntegrationInfo')

const ProviderIntegrationModulesInfoSchema = z
  .object({
    integration_name: z.string().openapi({ title: 'Integration Name' }),
    python_modules: z.array(z.string()).openapi({ title: 'Python Modules' }),
  })
  .openapi({
    required: ['integration_name', 'python_modules'],
    title: 'ProviderIntegrationModulesInfo',
    description: 'Python modules an integration contributes for one kind of functionality.',
  })
  .openapi('ProviderIntegrationModulesInfo')

const ProviderDialectInfoSchema = z
  .object({
    dialect_type: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dialect Type' }),
    dialect_class_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dialect Class Name' }),
  })
  .openapi({
    title: 'ProviderDialectInfo',
    description: 'SQL dialect provided by a provider.',
    required: [],
  })
  .openapi('ProviderDialectInfo')

const ProviderTransferInfoSchema = z
  .object({
    source_integration_name: z.string().openapi({ title: 'Source Integration Name' }),
    target_integration_name: z.string().openapi({ title: 'Target Integration Name' }),
    python_module: z.string().openapi({ title: 'Python Module' }),
    how_to_guide: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'How To Guide' }),
  })
  .openapi({
    required: ['source_integration_name', 'target_integration_name', 'python_module'],
    title: 'ProviderTransferInfo',
    description: 'Transfer operator provided by a provider.',
  })
  .openapi('ProviderTransferInfo')

const ProviderRemoteLoggingInfoSchema = z
  .object({
    classpath: z.string().openapi({ title: 'Classpath' }),
    scheme: z.string().openapi({ title: 'Scheme' }),
  })
  .openapi({
    required: ['classpath', 'scheme'],
    title: 'ProviderRemoteLoggingInfo',
    description: 'Remote logging IO handler provided by a provider.',
  })
  .openapi('ProviderRemoteLoggingInfo')

const ProviderTaskDecoratorInfoSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    class_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Class Name' }),
  })
  .openapi({
    title: 'ProviderTaskDecoratorInfo',
    description: 'TaskFlow decorator provided by a provider.',
    required: [],
  })
  .openapi('ProviderTaskDecoratorInfo')

const ProviderPluginInfoSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    plugin_class: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Plugin Class' }),
  })
  .openapi({
    title: 'ProviderPluginInfo',
    description: 'Plugin provided by a provider.',
    required: [],
  })
  .openapi('ProviderPluginInfo')

const ProviderInfoResponseSchema = z
  .object({
    package_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Package Name' }),
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    documentation_url: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Documentation Url' }),
    filesystems: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Filesystems' }),
    integrations: z
      .union([z.array(ProviderIntegrationInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Integrations' }),
    operators: z
      .union([z.array(ProviderIntegrationModulesInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Operators' }),
    sensors: z
      .union([z.array(ProviderIntegrationModulesInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Sensors' }),
    hooks: z
      .union([z.array(ProviderIntegrationModulesInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Hooks' }),
    triggers: z
      .union([z.array(ProviderIntegrationModulesInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Triggers' }),
    bundles: z
      .union([z.array(ProviderIntegrationModulesInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Bundles' }),
    asset_uris: z
      .union([z.array(ProviderAssetUriInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Asset Uris' }),
    dialects: z
      .union([z.array(ProviderDialectInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dialects' }),
    transfers: z
      .union([z.array(ProviderTransferInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Transfers' }),
    connection_types: z
      .union([z.array(ProviderConnectionTypeInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Connection Types' }),
    extra_links: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Extra Links' }),
    secrets_backends: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Secrets Backends' }),
    email_backends: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Email Backends' }),
    logging: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logging' }),
    remote_logging: z
      .union([z.array(ProviderRemoteLoggingInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Remote Logging' }),
    auth_backends: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Auth Backends' }),
    auth_managers: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Auth Managers' }),
    notifications: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Notifications' }),
    executors: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Executors' }),
    db_managers: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Db Managers' }),
    cli: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Cli' }),
    config: z
      .union([z.record(z.string(), ProviderConfigSectionInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Config' }),
    task_decorators: z
      .union([z.array(ProviderTaskDecoratorInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Task Decorators' }),
    plugins: z
      .union([z.array(ProviderPluginInfoSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Plugins' }),
    queues: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Queues' }),
  })
  .openapi({
    title: 'ProviderInfoResponse',
    description: 'Typed provider metadata (from ``provider.yaml``) exposed by the API.',
    required: [],
  })
  .openapi('ProviderInfoResponse')

const ProviderDetailsResponseSchema = z
  .object({
    package_name: z.string().openapi({ title: 'Package Name' }),
    description: z.string().openapi({ title: 'Description' }),
    version: z.string().openapi({ title: 'Version' }),
    documentation_url: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Documentation Url' }),
    provider_info: ProviderInfoResponseSchema,
  })
  .openapi({
    required: ['package_name', 'description', 'version', 'documentation_url', 'provider_info'],
    title: 'ProviderDetailsResponse',
    description: 'Detailed provider serializer for responses.',
  })
  .openapi('ProviderDetailsResponse')

const QueuedEventResponseSchema = z
  .object({
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    asset_id: z.int().openapi({ title: 'Asset Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
  })
  .openapi({
    required: ['dag_id', 'asset_id', 'created_at', 'dag_display_name'],
    title: 'QueuedEventResponse',
    description: 'Queued Event serializer for responses..',
  })
  .openapi('QueuedEventResponse')

const QueuedEventCollectionResponseSchema = z
  .object({
    queued_events: z.array(QueuedEventResponseSchema).openapi({ title: 'Queued Events' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['queued_events', 'total_entries'],
    title: 'QueuedEventCollectionResponse',
    description: 'Queued Event Collection serializer for responses.',
  })
  .openapi('QueuedEventCollectionResponse')

const StructuredLogMessageSchema = z
  .looseObject({
    timestamp: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Timestamp' }),
    event: z.string().openapi({ title: 'Event' }),
  })
  .openapi({
    required: ['event'],
    title: 'StructuredLogMessage',
    description: 'An individual log message.',
  })
  .openapi('StructuredLogMessage')

const TimeDeltaSchema = z
  .object({
    __type: z.string().default('TimeDelta').exactOptional().openapi({ title: 'Type' }),
    days: z.int().openapi({ title: 'Days' }),
    seconds: z.int().openapi({ title: 'Seconds' }),
    microseconds: z.int().openapi({ title: 'Microseconds' }),
  })
  .openapi({
    required: ['days', 'seconds', 'microseconds'],
    title: 'TimeDelta',
    description: 'TimeDelta can be used to interact with datetime.timedelta objects.',
  })
  .openapi('TimeDelta')

const TaskResponseSchema = z
  .object({
    task_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Task Id' }),
    task_display_name: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Task Display Name' }),
    owner: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Owner' }),
    start_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Start Date' }),
    end_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'End Date' }),
    trigger_rule: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Trigger Rule' }),
    depends_on_past: z.boolean().openapi({ title: 'Depends On Past' }),
    wait_for_downstream: z.boolean().openapi({ title: 'Wait For Downstream' }),
    retries: z.union([z.number(), z.null().nullable()]).openapi({ title: 'Retries' }),
    queue: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Queue' }),
    pool: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Pool' }),
    pool_slots: z.union([z.number(), z.null().nullable()]).openapi({ title: 'Pool Slots' }),
    execution_timeout: z.union([TimeDeltaSchema, z.null().nullable()]),
    retry_delay: z.union([TimeDeltaSchema, z.null().nullable()]),
    retry_exponential_backoff: z.number().openapi({ title: 'Retry Exponential Backoff' }),
    priority_weight: z
      .union([z.number(), z.null().nullable()])
      .openapi({ title: 'Priority Weight' }),
    weight_rule: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Weight Rule' }),
    ui_color: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Ui Color' }),
    ui_fgcolor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Ui Fgcolor' }),
    template_fields: z
      .union([z.array(z.string()), z.null().nullable()])
      .openapi({ title: 'Template Fields' }),
    downstream_task_ids: z
      .union([z.array(z.string()), z.null().nullable()])
      .openapi({ title: 'Downstream Task Ids' }),
    doc_md: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Doc Md' }),
    operator_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Operator Name' }),
    params: z.union([z.looseObject({}), z.null().nullable()]).openapi({ title: 'Params' }),
    class_ref: z.union([z.looseObject({}), z.null().nullable()]).openapi({ title: 'Class Ref' }),
    is_mapped: z.union([z.boolean(), z.null().nullable()]).openapi({ title: 'Is Mapped' }),
    extra_links: z
      .array(z.string())
      .openapi({
        title: 'Extra Links',
        description: 'Extract and return extra_links.',
        readOnly: true,
      }),
  })
  .openapi({
    required: [
      'task_id',
      'task_display_name',
      'owner',
      'start_date',
      'end_date',
      'trigger_rule',
      'depends_on_past',
      'wait_for_downstream',
      'retries',
      'queue',
      'pool',
      'pool_slots',
      'execution_timeout',
      'retry_delay',
      'retry_exponential_backoff',
      'priority_weight',
      'weight_rule',
      'ui_color',
      'ui_fgcolor',
      'template_fields',
      'downstream_task_ids',
      'doc_md',
      'operator_name',
      'params',
      'class_ref',
      'is_mapped',
      'extra_links',
    ],
    title: 'TaskResponse',
    description: 'Task serializer for responses.',
  })
  .openapi('TaskResponse')

const TaskCollectionResponseSchema = z
  .object({
    tasks: z.array(TaskResponseSchema).openapi({ title: 'Tasks' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['tasks', 'total_entries'],
    title: 'TaskCollectionResponse',
    description: 'Task collection serializer for responses.',
  })
  .openapi('TaskCollectionResponse')

const TaskDependencyResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    reason: z.string().openapi({ title: 'Reason' }),
  })
  .openapi({
    required: ['name', 'reason'],
    title: 'TaskDependencyResponse',
    description: 'Task Dependency serializer for responses.',
  })
  .openapi('TaskDependencyResponse')

const TaskDependencyCollectionResponseSchema = z
  .object({
    dependencies: z.array(TaskDependencyResponseSchema).openapi({ title: 'Dependencies' }),
  })
  .openapi({
    required: ['dependencies'],
    title: 'TaskDependencyCollectionResponse',
    description: 'Task scheduling dependencies collection serializer for responses.',
  })
  .openapi('TaskDependencyCollectionResponse')

const TaskInstanceCollectionResponseSchema = z
  .object({
    task_instances: z.array(TaskInstanceResponseSchema).openapi({ title: 'Task Instances' }),
    total_entries: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Entries',
        description:
          'Number of matching items. For offset pagination this is the exact total. For cursor pagination it is capped at ``total_entries_limit``; a value equal to that limit means at least that many items match.',
      }),
    total_entries_limit: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Entries Limit',
        description:
          'Cap applied to ``total_entries`` under cursor pagination. ``null`` for offset pagination, where ``total_entries`` is exact.',
      }),
    next_cursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Next Cursor',
        description:
          'Token pointing to the next page. Populated for cursor pagination, ``null`` when using offset pagination or when there is no next page.',
      }),
    previous_cursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Previous Cursor',
        description:
          'Token pointing to the previous page. Populated for cursor pagination, ``null`` when using offset pagination or when on the first page.',
      }),
  })
  .openapi({
    required: ['task_instances'],
    title: 'TaskInstanceCollectionResponse',
    description:
      'Task instance collection response supporting both offset and cursor pagination.\n\nA single flat model is used instead of a discriminated union\n(``Annotated[Offset | Cursor, Field(discriminator=...)]``) because\nthe OpenAPI ``oneOf`` + ``discriminator`` construct is not handled\ncorrectly by ``@hey-api/openapi-ts`` / ``@7nohe/openapi-react-query-codegen``:\nreturn types degrade to ``unknown`` in JSDoc and can produce\nincorrect TypeScript types (see hey-api/openapi-ts#1613, #3270).',
  })
  .openapi('TaskInstanceCollectionResponse')

const TaskInstanceHistoryCollectionResponseSchema = z
  .object({
    task_instances: z.array(TaskInstanceHistoryResponseSchema).openapi({ title: 'Task Instances' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['task_instances', 'total_entries'],
    title: 'TaskInstanceHistoryCollectionResponse',
    description: 'TaskInstanceHistory Collection serializer for responses.',
  })
  .openapi('TaskInstanceHistoryCollectionResponse')

const TaskInstancesBatchBodySchema = z
  .strictObject({
    dag_ids: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Ids' }),
    dag_run_ids: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Ids' }),
    task_ids: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Task Ids' }),
    state: z
      .union([
        z.array(z.union([TaskInstanceStateSchema, z.null().nullable()])),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'State' }),
    run_after_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Gte' }),
    run_after_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Gt' }),
    run_after_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Lte' }),
    run_after_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After Lt' }),
    logical_date_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Gte' }),
    logical_date_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Gt' }),
    logical_date_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Lte' }),
    logical_date_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Logical Date Lt' }),
    start_date_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Gte' }),
    start_date_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Gt' }),
    start_date_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Lte' }),
    start_date_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start Date Lt' }),
    end_date_gte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Gte' }),
    end_date_gt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Gt' }),
    end_date_lte: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Lte' }),
    end_date_lt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End Date Lt' }),
    duration_gte: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Gte' }),
    duration_gt: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Gt' }),
    duration_lte: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Lte' }),
    duration_lt: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Duration Lt' }),
    pool: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Pool' }),
    queue: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Queue' }),
    executor: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Executor' }),
    page_offset: z.int().min(0).default(0).exactOptional().openapi({ title: 'Page Offset' }),
    page_limit: z.int().min(0).default(100).exactOptional().openapi({ title: 'Page Limit' }),
    order_by: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Order By' }),
  })
  .openapi({
    title: 'TaskInstancesBatchBody',
    description: 'Task Instance body for get batch.',
    required: [],
  })
  .openapi('TaskInstancesBatchBody')

const TaskInstancesLogResponseSchema = z
  .object({
    content: z
      .union([z.array(StructuredLogMessageSchema), z.array(z.string())])
      .openapi({ title: 'Content' }),
    continuation_token: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Continuation Token' }),
  })
  .openapi({
    required: ['content', 'continuation_token'],
    title: 'TaskInstancesLogResponse',
    description: 'Log serializer for responses.',
  })
  .openapi('TaskInstancesLogResponse')

const TaskStateStoreBodySchema = z
  .strictObject({
    value: JsonValueSchema,
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.literal('default'), z.null().nullable()])
      .default('default')
      .exactOptional()
      .openapi({ title: 'Expires At' }),
  })
  .openapi({
    required: ['value'],
    title: 'TaskStateStoreBody',
    description:
      'Request body for setting a task state store value.\n\n``expires_at`` controls expiry:\n\n- ``"default"``: apply the configured ``[state_store] default_retention_days``.\n- ``null``: never expire.\n- aware datetime: expire at that time.',
  })
  .openapi('TaskStateStoreBody')

const TaskStateStoreResponseSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    value: JsonValueSchema,
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Expires At' }),
  })
  .openapi({
    required: ['key', 'value', 'updated_at', 'expires_at'],
    title: 'TaskStateStoreResponse',
    description: 'A single task state store key/value pair with metadata.',
  })
  .openapi('TaskStateStoreResponse')

const TaskStateStoreCollectionResponseSchema = z
  .object({
    task_state_store: z.array(TaskStateStoreResponseSchema).openapi({ title: 'Task State Store' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['task_state_store', 'total_entries'],
    title: 'TaskStateStoreCollectionResponse',
    description: 'All task state store entries for a task instance.',
  })
  .openapi('TaskStateStoreCollectionResponse')

const TaskStateStorePatchBodySchema = z
  .strictObject({ value: JsonValueSchema })
  .openapi({
    required: ['value'],
    title: 'TaskStateStorePatchBody',
    description: 'Request body for patching only the value of an existing task state store key.',
  })
  .openapi('TaskStateStorePatchBody')

const TriggerDAGRunPostBodySchema = z
  .strictObject({
    dag_run_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dag Run Id' }),
    data_interval_start: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Data Interval Start' }),
    data_interval_end: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Data Interval End' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    run_after: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run After' }),
    conf: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Conf' }),
    note: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Note' }),
    partition_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Partition Key' }),
    bundle_version: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Bundle Version' }),
    drain_dag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Drain Dag',
        description:
          'Drain the Dag together with this run. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag.',
      }),
  })
  .openapi({
    required: ['logical_date'],
    title: 'TriggerDAGRunPostBody',
    description: 'Trigger Dag Run Serializer for POST body.',
  })
  .openapi('TriggerDAGRunPostBody')

const UpdateHITLDetailPayloadSchema = z
  .object({
    chosen_options: z.array(z.string()).min(1).openapi({ title: 'Chosen Options' }),
    params_input: z.looseObject({}).exactOptional().openapi({ title: 'Params Input' }),
    request_created_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Request Created At',
        description:
          'The ``created_at`` of the request this response answers, exactly as the GET endpoint returned it. When the task has since replaced its request (it asked again after a resume, retry or clear), the response is refused with 409 instead of answering a request the user did not see. Leave it out to answer whatever request is waiting.',
      }),
  })
  .openapi({
    required: ['chosen_options'],
    title: 'UpdateHITLDetailPayload',
    description: 'Schema for updating the content of a Human-in-the-loop detail.',
  })
  .openapi('UpdateHITLDetailPayload')

const VariableResponseSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    value: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Value' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    is_encrypted: z.boolean().openapi({ title: 'Is Encrypted' }),
    team_name: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: ['key', 'description', 'is_encrypted', 'team_name'],
    title: 'VariableResponse',
    description: 'Variable serializer for responses.',
  })
  .openapi('VariableResponse')

const VariableCollectionResponseSchema = z
  .object({
    variables: z.array(VariableResponseSchema).openapi({ title: 'Variables' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['variables', 'total_entries'],
    title: 'VariableCollectionResponse',
    description: 'Variable Collection serializer for responses.',
  })
  .openapi('VariableCollectionResponse')

const VersionInfoSchema = z
  .object({
    version: z.string().openapi({ title: 'Version' }),
    git_version: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Git Version' }),
  })
  .openapi({
    required: ['version', 'git_version'],
    title: 'VersionInfo',
    description: 'Version information serializer for responses.',
  })
  .openapi('VersionInfo')

const XComResponseSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    map_index: z.int().openapi({ title: 'Map Index' }),
    region_id: z.uuid().exactOptional().openapi({ title: 'Region Id' }),
    region_index: z.int().exactOptional().openapi({ title: 'Region Index' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    run_id: z.string().openapi({ title: 'Run Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    task_display_name: z.string().openapi({ title: 'Task Display Name' }),
    run_after: z.iso.datetime({ offset: true }).openapi({ title: 'Run After' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
  })
  .openapi({
    required: [
      'key',
      'timestamp',
      'logical_date',
      'map_index',
      'task_id',
      'dag_id',
      'run_id',
      'dag_display_name',
      'task_display_name',
      'run_after',
    ],
    title: 'XComResponse',
    description: 'Serializer for a xcom item.',
  })
  .openapi('XComResponse')

const XComCollectionResponseSchema = z
  .object({
    xcom_entries: z.array(XComResponseSchema).openapi({ title: 'Xcom Entries' }),
    total_entries: z.int().openapi({ title: 'Total Entries' }),
  })
  .openapi({
    required: ['xcom_entries', 'total_entries'],
    title: 'XComCollectionResponse',
    description: 'XCom Collection serializer for responses.',
  })
  .openapi('XComCollectionResponse')

const XComCreateBodySchema = z
  .strictObject({
    key: z.string().openapi({ title: 'Key' }),
    value: z.any().openapi({ title: 'Value' }),
    map_index: z.int().default(-1).exactOptional().openapi({ title: 'Map Index' }),
    region_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Id' }),
    region_index: z
      .union([z.int().min(-1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Index' }),
  })
  .openapi({
    required: ['key', 'value'],
    title: 'XComCreateBody',
    description: 'Payload serializer for creating an XCom entry.',
  })
  .openapi('XComCreateBody')

const XComResponseNativeSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    map_index: z.int().openapi({ title: 'Map Index' }),
    region_id: z.uuid().exactOptional().openapi({ title: 'Region Id' }),
    region_index: z.int().exactOptional().openapi({ title: 'Region Index' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    run_id: z.string().openapi({ title: 'Run Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    task_display_name: z.string().openapi({ title: 'Task Display Name' }),
    run_after: z.iso.datetime({ offset: true }).openapi({ title: 'Run After' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
    value: z.any().openapi({ title: 'Value' }),
  })
  .openapi({
    required: [
      'key',
      'timestamp',
      'logical_date',
      'map_index',
      'task_id',
      'dag_id',
      'run_id',
      'dag_display_name',
      'task_display_name',
      'run_after',
      'value',
    ],
    title: 'XComResponseNative',
    description: 'XCom response serializer with native return type.',
  })
  .openapi('XComResponseNative')

const XComResponseStringSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    logical_date: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Logical Date' }),
    map_index: z.int().openapi({ title: 'Map Index' }),
    region_id: z.uuid().exactOptional().openapi({ title: 'Region Id' }),
    region_index: z.int().exactOptional().openapi({ title: 'Region Index' }),
    task_id: z.string().openapi({ title: 'Task Id' }),
    dag_id: z.string().openapi({ title: 'Dag Id' }),
    run_id: z.string().openapi({ title: 'Run Id' }),
    dag_display_name: z.string().openapi({ title: 'Dag Display Name' }),
    task_display_name: z.string().openapi({ title: 'Task Display Name' }),
    run_after: z.iso.datetime({ offset: true }).openapi({ title: 'Run After' }),
    team_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Team Name' }),
    value: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Value' }),
  })
  .openapi({
    required: [
      'key',
      'timestamp',
      'logical_date',
      'map_index',
      'task_id',
      'dag_id',
      'run_id',
      'dag_display_name',
      'task_display_name',
      'run_after',
      'value',
    ],
    title: 'XComResponseString',
    description: 'XCom response serializer with string return type.',
  })
  .openapi('XComResponseString')

const XComUpdateBodySchema = z
  .strictObject({
    value: z.any().openapi({ title: 'Value' }),
    map_index: z.int().default(-1).exactOptional().openapi({ title: 'Map Index' }),
    region_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Id' }),
    region_index: z
      .union([z.int().min(-1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Region Index' }),
  })
  .openapi({
    required: ['value'],
    title: 'XComUpdateBody',
    description: 'Payload serializer for updating an XCom entry.',
  })
  .openapi('XComUpdateBody')

const OAuth2PasswordBearerSecurityScheme = {
  type: 'oauth2',
  description:
    'To authenticate Airflow API requests, clients must include a JWT (JSON Web Token) in the Authorization header of each request. This token is used to verify the identity of the client and ensure that they have the appropriate permissions to access the requested resources. You can use the endpoint ``POST /auth/token`` in order to generate a JWT token. Upon successful authentication, the server will issue a JWT token that contains the necessary information (such as user identity and scope) to authenticate subsequent requests. To learn more about Airflow public API authentication, please read https://airflow.apache.org/docs/apache-airflow/stable/security/api.html.',
  flows: { password: { scopes: {}, tokenUrl: '/auth/token' } },
}

const HTTPBearerSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getApiV2AssetsRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets',
  tags: ['Asset'],
  summary: 'Get Assets',
  description: 'Get assets.',
  operationId: 'get_assets',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Name Pattern',
        }),
      name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Name Prefix Pattern',
        }),
      uri: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'uri',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Exact-match filter on the full asset URI. Compiles to an indexed equality comparison (``uri = ...``). Repeat the parameter (``?uri=a&uri=b``) to match multiple assets.',
              title: 'Uri',
            },
            description:
              'Exact-match filter on the full asset URI. Compiles to an indexed equality comparison (``uri = ...``). Repeat the parameter (``?uri=a&uri=b``) to match multiple assets.',
          },
          description:
            'Exact-match filter on the full asset URI. Compiles to an indexed equality comparison (``uri = ...``). Repeat the parameter (``?uri=a&uri=b``) to match multiple assets.',
          title: 'Uri',
        }),
      uri_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'uri_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `uri_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Uri Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `uri_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `uri_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Uri Pattern',
        }),
      uri_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'uri_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Uri Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Uri Prefix Pattern',
        }),
      dag_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_ids',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Dag Ids' },
          },
          title: 'Dag Ids',
        }),
      only_active: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'only_active',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: true, title: 'Only Active' },
          },
          title: 'Only Active',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name, uri, created_at, updated_at`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name, uri, created_at, updated_at`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name, uri, created_at, updated_at`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsAliasesRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/aliases',
  tags: ['Asset'],
  summary: 'Get Asset Aliases',
  description: 'Get asset aliases.',
  operationId: 'get_asset_aliases',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Name Pattern',
        }),
      name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Name Prefix Pattern',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetAliasCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsAliasesAssetAliasIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/aliases/{asset_alias_id}',
  tags: ['Asset'],
  summary: 'Get Asset Alias',
  description: 'Get an asset alias.',
  operationId: 'get_asset_alias',
  request: {
    params: z.object({
      asset_alias_id: z
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
            name: 'asset_alias_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Alias Id' },
          },
          title: 'Asset Alias Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsEventsRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/events',
  tags: ['Asset'],
  summary: 'Get Asset Events',
  description: 'Get asset events.',
  operationId: 'get_asset_events',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['timestamp'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `source_task_id, source_dag_id, source_run_id, source_map_index, timestamp`',
              default: ['timestamp'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `source_task_id, source_dag_id, source_run_id, source_map_index, timestamp`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `source_task_id, source_dag_id, source_run_id, source_map_index, timestamp`',
          title: 'Order By',
        }),
      asset_id: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'asset_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
      source_dag_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'source_dag_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Source Dag Id' },
          },
          title: 'Source Dag Id',
        }),
      source_task_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'source_task_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Source Task Id' },
          },
          title: 'Source Task Id',
        }),
      source_task_instance_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'source_task_instance_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Source Task Instance Id',
            },
          },
          title: 'Source Task Instance Id',
        }),
      source_run_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'source_run_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Source Run Id' },
          },
          title: 'Source Run Id',
        }),
      source_map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'source_map_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Source Map Index' },
          },
          title: 'Source Map Index',
        }),
      partition_key: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'partition_key',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Partition Key' },
          },
          title: 'Partition Key',
        }),
      partition_key_regexp_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'partition_key_regexp_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Filter results by matching this regular expression against the field value.',
              title: 'Partition Key Regexp Pattern',
            },
            description:
              'Filter results by matching this regular expression against the field value.',
          },
          description:
            'Filter results by matching this regular expression against the field value.',
          title: 'Partition Key Regexp Pattern',
        }),
      name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Name Pattern',
        }),
      name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Name Prefix Pattern',
        }),
      extra: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'extra',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Filter by JSON key-value pairs. Repeat for multiple conditions (AND logic). Format: key=value (e.g. extra=region=us&extra=env=prod).',
              title: 'Extra',
            },
            description:
              'Filter by JSON key-value pairs. Repeat for multiple conditions (AND logic). Format: key=value (e.g. extra=region=us&extra=env=prod).',
          },
          description:
            'Filter by JSON key-value pairs. Repeat for multiple conditions (AND logic). Format: key=value (e.g. extra=region=us&extra=env=prod).',
          title: 'Extra',
        }),
      timestamp_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Timestamp Gte',
            },
          },
          title: 'Timestamp Gte',
        }),
      timestamp_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Timestamp Gt',
            },
          },
          title: 'Timestamp Gt',
        }),
      timestamp_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Timestamp Lte',
            },
          },
          title: 'Timestamp Lte',
        }),
      timestamp_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Timestamp Lt',
            },
          },
          title: 'Timestamp Lt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetEventCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2AssetsEventsRoute = createRoute({
  method: 'post',
  path: '/api/v2/assets/events',
  tags: ['Asset'],
  summary: 'Create Asset Event',
  description: 'Create asset events.',
  operationId: 'create_asset_event',
  request: {
    body: {
      content: { 'application/json': { schema: CreateAssetEventsBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetEventResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2AssetsAssetIdMaterializeRoute = createRoute({
  method: 'post',
  path: '/api/v2/assets/{asset_id}/materialize',
  tags: ['Asset'],
  summary: 'Materialize Asset',
  description: 'Materialize an asset by triggering a Dag run that produces it.',
  operationId: 'materialize_asset',
  request: {
    params: z.object({
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: MaterializeAssetBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGRunResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsAssetIdQueuedEventsRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/{asset_id}/queuedEvents',
  tags: ['Asset'],
  summary: 'Get Asset Queued Events',
  description: 'Get queued asset events for an asset.',
  operationId: 'get_asset_queued_events',
  request: {
    params: z.object({
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
    query: z.object({
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: QueuedEventCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2AssetsAssetIdQueuedEventsRoute = createRoute({
  method: 'delete',
  path: '/api/v2/assets/{asset_id}/queuedEvents',
  tags: ['Asset'],
  summary: 'Delete Asset Queued Events',
  description: 'Delete queued asset events for an asset.',
  operationId: 'delete_asset_queued_events',
  request: {
    params: z.object({
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
    query: z.object({
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/{asset_id}',
  tags: ['Asset'],
  summary: 'Get Asset',
  description: 'Get an asset.',
  operationId: 'get_asset',
  request: {
    params: z.object({
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdAssetsQueuedEventsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/assets/queuedEvents',
  tags: ['Asset'],
  summary: 'Get Dag Asset Queued Events',
  description: 'Get queued asset events for a Dag.',
  operationId: 'get_dag_asset_queued_events',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: QueuedEventCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdAssetsQueuedEventsRoute = createRoute({
  method: 'delete',
  path: '/api/v2/dags/{dag_id}/assets/queuedEvents',
  tags: ['Asset'],
  summary: 'Delete Dag Asset Queued Events',
  operationId: 'delete_dag_asset_queued_events',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/assets/{asset_id}/queuedEvents',
  tags: ['Asset'],
  summary: 'Get Dag Asset Queued Event',
  description: 'Get a queued asset event for a Dag.',
  operationId: 'get_dag_asset_queued_event',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
    query: z.object({
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: QueuedEventResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute = createRoute({
  method: 'delete',
  path: '/api/v2/dags/{dag_id}/assets/{asset_id}/queuedEvents',
  tags: ['Asset'],
  summary: 'Delete Dag Asset Queued Event',
  description: 'Delete a queued asset event for a Dag.',
  operationId: 'delete_dag_asset_queued_event',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
    query: z.object({
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Before' },
          },
          title: 'Before',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2BackfillsRoute = createRoute({
  method: 'get',
  path: '/api/v2/backfills',
  tags: ['Backfill'],
  summary: 'List Backfills',
  operationId: 'list_backfills',
  request: {
    query: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2BackfillsRoute = createRoute({
  method: 'post',
  path: '/api/v2/backfills',
  tags: ['Backfill'],
  summary: 'Create Backfill',
  operationId: 'create_backfill',
  request: {
    body: { content: { 'application/json': { schema: BackfillPostBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    503: {
      description: 'Service Unavailable',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2BackfillsBackfillIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/backfills/{backfill_id}',
  tags: ['Backfill'],
  summary: 'Get Backfill',
  operationId: 'get_backfill',
  request: {
    params: z.object({
      backfill_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'backfill_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 0, title: 'Backfill Id' },
          },
          title: 'Backfill Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2BackfillsBackfillIdDagRunsRoute = createRoute({
  method: 'get',
  path: '/api/v2/backfills/{backfill_id}/dag_runs',
  tags: ['Backfill'],
  summary: 'List Backfill Dag Runs',
  description: 'List Dag runs associated with a backfill, including skipped slots.',
  operationId: 'list_backfill_dag_runs',
  request: {
    params: z.object({
      backfill_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'backfill_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 0, title: 'Backfill Id' },
          },
          title: 'Backfill Id',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['sort_ordinal'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, sort_ordinal`',
              default: ['sort_ordinal'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, sort_ordinal`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, sort_ordinal`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillDagRunCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const putApiV2BackfillsBackfillIdPauseRoute = createRoute({
  method: 'put',
  path: '/api/v2/backfills/{backfill_id}/pause',
  tags: ['Backfill'],
  summary: 'Pause Backfill',
  operationId: 'pause_backfill',
  request: {
    params: z.object({
      backfill_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'backfill_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 0, title: 'Backfill Id' },
          },
          title: 'Backfill Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const putApiV2BackfillsBackfillIdUnpauseRoute = createRoute({
  method: 'put',
  path: '/api/v2/backfills/{backfill_id}/unpause',
  tags: ['Backfill'],
  summary: 'Unpause Backfill',
  operationId: 'unpause_backfill',
  request: {
    params: z.object({
      backfill_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'backfill_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 0, title: 'Backfill Id' },
          },
          title: 'Backfill Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const putApiV2BackfillsBackfillIdCancelRoute = createRoute({
  method: 'put',
  path: '/api/v2/backfills/{backfill_id}/cancel',
  tags: ['Backfill'],
  summary: 'Cancel Backfill',
  operationId: 'cancel_backfill',
  request: {
    params: z.object({
      backfill_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'backfill_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 0, title: 'Backfill Id' },
          },
          title: 'Backfill Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackfillResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2BackfillsDryRunRoute = createRoute({
  method: 'post',
  path: '/api/v2/backfills/dry_run',
  tags: ['Backfill'],
  summary: 'Create Backfill Dry Run',
  operationId: 'create_backfill_dry_run',
  request: {
    body: { content: { 'application/json': { schema: BackfillPostBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DryRunBackfillCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    503: {
      description: 'Service Unavailable',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/connections/{connection_id}',
  tags: ['Connection'],
  summary: 'Get Connection',
  description: 'Get a connection entry.',
  operationId: 'get_connection',
  request: {
    params: z.object({
      connection_id: z
        .string()
        .openapi({
          param: {
            name: 'connection_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connection Id' },
          },
          title: 'Connection Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2ConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/connections/{connection_id}',
  tags: ['Connection'],
  summary: 'Delete Connection',
  description: 'Delete a connection entry.',
  operationId: 'delete_connection',
  request: {
    params: z.object({
      connection_id: z
        .string()
        .openapi({
          param: {
            name: 'connection_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connection Id' },
          },
          title: 'Connection Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2ConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/api/v2/connections/{connection_id}',
  tags: ['Connection'],
  summary: 'Patch Connection',
  description: 'Update a connection entry.',
  operationId: 'patch_connection',
  request: {
    params: z.object({
      connection_id: z
        .string()
        .openapi({
          param: {
            name: 'connection_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connection Id' },
          },
          title: 'Connection Id',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectionBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ConnectionsEnqueueTestRoute = createRoute({
  method: 'get',
  path: '/api/v2/connections/enqueue-test',
  tags: ['Connection'],
  summary: 'Get Connection Test',
  description:
    'Poll for the status of an enqueued connection test by its token (passed as a header).',
  operationId: 'get_connection_test',
  request: {
    headers: z.object({
      'Airflow-Connection-Test-Token': z
        .string()
        .openapi({
          param: {
            name: 'Airflow-Connection-Test-Token',
            in: 'header',
            required: true,
            schema: { type: 'string', title: 'Airflow-Connection-Test-Token' },
          },
          title: 'Airflow-Connection-Test-Token',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AsyncConnectionTestResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2ConnectionsEnqueueTestRoute = createRoute({
  method: 'post',
  path: '/api/v2/connections/enqueue-test',
  tags: ['Connection'],
  summary: 'Enqueue Connection Test',
  description:
    'Enqueue a connection test for deferred execution on a worker; returns a polling token.',
  operationId: 'enqueue_connection_test',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionTestRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectionTestQueuedResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ConnectionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/connections',
  tags: ['Connection'],
  summary: 'Get Connections',
  description: 'Get all connection entries.',
  operationId: 'get_connections',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `conn_id, conn_type, description, host, port, id, team_name, connection_id`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `conn_id, conn_type, description, host, port, id, team_name, connection_id`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `conn_id, conn_type, description, host, port, id, team_name, connection_id`',
          title: 'Order By',
        }),
      connection_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'connection_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `connection_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Connection Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `connection_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `connection_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Connection Id Pattern',
        }),
      connection_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'connection_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Connection Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Connection Id Prefix Pattern',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectionCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2ConnectionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/connections',
  tags: ['Connection'],
  summary: 'Post Connection',
  description: 'Create connection entry.',
  operationId: 'post_connection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2ConnectionsRoute = createRoute({
  method: 'patch',
  path: '/api/v2/connections',
  tags: ['Connection'],
  summary: 'Bulk Connections',
  description: 'Bulk create, update, and delete connections.',
  operationId: 'bulk_connections',
  request: {
    body: {
      content: { 'application/json': { schema: BulkBodyConnectionBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2ConnectionsTestRoute = createRoute({
  method: 'post',
  path: '/api/v2/connections/test',
  tags: ['Connection'],
  summary: 'Test Connection',
  description:
    'Test an API connection.\n\nThis method first creates an in-memory transient conn_id & exports that to an env var,\nas some hook classes tries to find out the `conn` from their __init__ method & errors out if not found.\nIt also deletes the conn id env connection after the test.',
  operationId: 'test_connection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectionTestResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2ConnectionsDefaultsRoute = createRoute({
  method: 'post',
  path: '/api/v2/connections/defaults',
  tags: ['Connection'],
  summary: 'Create Default Connections',
  description: 'Create default connections.',
  operationId: 'create_default_connections',
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}',
  tags: ['DagRun'],
  summary: 'Get Dag Run',
  operationId: 'get_dag_run',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGRunResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdDagRunsDagRunIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}',
  tags: ['DagRun'],
  summary: 'Delete Dag Run',
  description: 'Delete a Dag Run entry.',
  operationId: 'delete_dag_run',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}',
  tags: ['DagRun'],
  summary: 'Patch Dag Run',
  description: 'Modify a Dag Run.',
  operationId: 'patch_dag_run',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
    }),
    body: { content: { 'application/json': { schema: DAGRunPatchBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGRunResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns',
  tags: ['DagRun'],
  summary: 'Get Dag Runs',
  description:
    'Get all Dag Runs.\n\nThis endpoint allows specifying `~` as the dag_id to retrieve Dag Runs for all Dags.\n\nSupports two pagination modes:\n\n**Offset (default):** use `limit` and `offset` query parameters. Returns `total_entries`.\n\n**Cursor:** pass `cursor` (empty string for the first page, then `next_cursor` from the response).\nWhen `cursor` is provided, `offset` is ignored and `total_entries` is capped at\n`total_entries_limit` (a value equal to that limit means at least that many runs match).\n``next_cursor`` is ``null`` when there are no more pages; ``previous_cursor`` is ``null``\non the first page.',
  operationId: 'get_dag_runs',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      partition_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.date(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'partition_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date' }, { type: 'null' }],
              description:
                "Inclusive lower bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. Runs from the start of this day onwards match.",
              title: 'Partition Date Gte',
            },
            description:
              "Inclusive lower bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. Runs from the start of this day onwards match.",
          },
          description:
            "Inclusive lower bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. Runs from the start of this day onwards match.",
          title: 'Partition Date Gte',
        }),
      partition_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.date(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'partition_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date' }, { type: 'null' }],
              description:
                "Inclusive upper bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. The whole day is included: runs up to the end of this day match.",
              title: 'Partition Date Lte',
            },
            description:
              "Inclusive upper bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. The whole day is included: runs up to the end of this day match.",
          },
          description:
            "Inclusive upper bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. The whole day is included: runs up to the end of this day match.",
          title: 'Partition Date Lte',
        }),
      cursor: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.',
              title: 'Cursor',
            },
            description:
              'Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.',
          },
          description:
            'Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      run_after_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gte',
            },
          },
          title: 'Run After Gte',
        }),
      run_after_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gt',
            },
          },
          title: 'Run After Gt',
        }),
      run_after_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lte',
            },
          },
          title: 'Run After Lte',
        }),
      run_after_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lt',
            },
          },
          title: 'Run After Lt',
        }),
      logical_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gte',
            },
          },
          title: 'Logical Date Gte',
        }),
      logical_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gt',
            },
          },
          title: 'Logical Date Gt',
        }),
      logical_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lte',
            },
          },
          title: 'Logical Date Lte',
        }),
      logical_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lt',
            },
          },
          title: 'Logical Date Lt',
        }),
      start_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gte',
            },
          },
          title: 'Start Date Gte',
        }),
      start_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gt',
            },
          },
          title: 'Start Date Gt',
        }),
      start_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lte',
            },
          },
          title: 'Start Date Lte',
        }),
      start_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lt',
            },
          },
          title: 'Start Date Lt',
        }),
      end_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gte',
            },
          },
          title: 'End Date Gte',
        }),
      end_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gt',
            },
          },
          title: 'End Date Gt',
        }),
      end_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lte',
            },
          },
          title: 'End Date Lte',
        }),
      end_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lt',
            },
          },
          title: 'End Date Lt',
        }),
      duration_gte: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_gte',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Gte' },
          },
          title: 'Duration Gte',
        }),
      duration_gt: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_gt',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Gt' },
          },
          title: 'Duration Gt',
        }),
      duration_lte: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_lte',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Lte' },
          },
          title: 'Duration Lte',
        }),
      duration_lt: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_lt',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Lt' },
          },
          title: 'Duration Lt',
        }),
      updated_at_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Gte',
            },
          },
          title: 'Updated At Gte',
        }),
      updated_at_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Gt',
            },
          },
          title: 'Updated At Gt',
        }),
      updated_at_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Lte',
            },
          },
          title: 'Updated At Lte',
        }),
      updated_at_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Lt',
            },
          },
          title: 'Updated At Lt',
        }),
      conf_contains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'conf_contains',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Conf Contains' },
          },
          title: 'Conf Contains',
        }),
      run_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_type',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Run Type' },
          },
          title: 'Run Type',
        }),
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'State' },
          },
          title: 'State',
        }),
      dag_version: z
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
            name: 'dag_version',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Dag Version' },
          },
          title: 'Dag Version',
        }),
      bundle_version: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'bundle_version',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Bundle Version' },
          },
          title: 'Bundle Version',
        }),
      teams: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teams',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Teams' },
          },
          title: 'Teams',
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Tags' },
          },
          title: 'Tags',
        }),
      tags_match_mode: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum(['any', 'all']),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags_match_mode',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ enum: ['any', 'all'], type: 'string' }, { type: 'null' }],
              title: 'Tags Match Mode',
            },
          },
          title: 'Tags Match Mode',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, dag_id, run_id, logical_date, partition_date, run_after, start_date, end_date, updated_at, conf, duration, dag_run_id`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, dag_id, run_id, logical_date, partition_date, run_after, start_date, end_date, updated_at, conf, duration, dag_run_id`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, dag_id, run_id, logical_date, partition_date, run_after, start_date, end_date, updated_at, conf, duration, dag_run_id`',
          title: 'Order By',
        }),
      run_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Run Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Run Id Pattern',
        }),
      run_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Run Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Run Id Prefix Pattern',
        }),
      triggering_user_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'triggering_user_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `triggering_user_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Triggering User Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `triggering_user_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `triggering_user_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Triggering User Name Pattern',
        }),
      triggering_user_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'triggering_user_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Triggering User Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Triggering User Name Prefix Pattern',
        }),
      dag_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Id Pattern',
        }),
      dag_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Id Prefix Pattern',
        }),
      partition_key_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'partition_key_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Here `|` is matched literally, not as OR. Slower than `partition_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Partition Key Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Here `|` is matched literally, not as OR. Slower than `partition_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Here `|` is matched literally, not as OR. Slower than `partition_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Partition Key Pattern',
        }),
      partition_key_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'partition_key_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. Here `|` is matched literally, not as OR. See "Filtering with pattern parameters".',
              title: 'Partition Key Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. Here `|` is matched literally, not as OR. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. Here `|` is matched literally, not as OR. See "Filtering with pattern parameters".',
          title: 'Partition Key Prefix Pattern',
        }),
      consuming_asset_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'consuming_asset_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match against the consuming asset name or URI. Unlike the wildcard `*_pattern` parameters, `%` and `_` are matched literally, `|` is not an OR separator, and `~` does not match everything.',
              title: 'Consuming Asset Pattern',
            },
            description:
              'Case-insensitive substring match against the consuming asset name or URI. Unlike the wildcard `*_pattern` parameters, `%` and `_` are matched literally, `|` is not an OR separator, and `~` does not match everything.',
          },
          description:
            'Case-insensitive substring match against the consuming asset name or URI. Unlike the wildcard `*_pattern` parameters, `%` and `_` are matched literally, `|` is not an OR separator, and `~` does not match everything.',
          title: 'Consuming Asset Pattern',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGRunCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdDagRunsRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/dagRuns',
  tags: ['DagRun'],
  summary: 'Trigger Dag Run',
  description: 'Trigger a Dag.',
  operationId: 'trigger_dag_run',
  request: {
    params: z.object({
      dag_id: z
        .any()
        .openapi({
          param: { name: 'dag_id', in: 'path', required: true, schema: { title: 'Dag Id' } },
          title: 'Dag Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TriggerDAGRunPostBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGRunResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns',
  tags: ['DagRun'],
  summary: 'Bulk Dag Runs',
  description: 'Bulk update or delete Dag Runs.',
  operationId: 'bulk_dag_runs',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BulkBodyBulkDAGRunBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEventsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/upstreamAssetEvents',
  tags: ['DagRun'],
  summary: 'Get Upstream Asset Events',
  description: 'If dag run is asset-triggered, return the asset events that triggered it.',
  operationId: 'get_upstream_asset_events',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetEventCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdDagRunsDagRunIdClearRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/clear',
  tags: ['DagRun'],
  summary: 'Clear Dag Run',
  operationId: 'clear_dag_run',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    body: { content: { 'application/json': { schema: DAGRunClearBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([ClearTaskInstanceCollectionResponseSchema, DAGRunResponseSchema])
            .openapi({ title: 'Response Clear Dag Run' }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdWaitRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/wait',
  tags: ['DagRun', 'experimental'],
  summary: 'Experimental: Wait for a dag run to complete, and return task results if requested.',
  description:
    '🚧 This is an experimental endpoint and may change or be removed without notice.Successful response are streamed as newline-delimited JSON (NDJSON). Each line is a JSON object representing the Dag run state.',
  operationId: 'wait_dag_run_until_finished',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    query: z.object({
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().gt(0),
        )
        .openapi({
          param: {
            name: 'interval',
            in: 'query',
            required: true,
            schema: {
              type: 'number',
              exclusiveMinimum: 0,
              description: 'Seconds to wait between dag run state checks',
              title: 'Interval',
            },
            description: 'Seconds to wait between dag run state checks',
          },
          description: 'Seconds to wait between dag run state checks',
          title: 'Interval',
        }),
      result: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'result',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Collect result XCom from task. Can be set multiple times. If unset, return value of the return task as specified in the dag (in present) is returned by default.',
              title: 'Result',
            },
            description:
              'Collect result XCom from task. Can be set multiple times. If unset, return value of the return task as specified in the dag (in present) is returned by default.',
          },
          description:
            'Collect result XCom from task. Can be set multiple times. If unset, return value of the return task as specified in the dag (in present) is returned by default.',
          title: 'Result',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: z.any() },
        'application/x-ndjson': {
          schema: z
            .string()
            .openapi({
              example: '{"state": "running"}\n{"state": "success", "results": {"op": 42}}\n',
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdDagRunsListRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/dagRuns/list',
  tags: ['DagRun'],
  summary: 'Get List Dag Runs Batch',
  description: 'Get a list of Dag Runs.',
  operationId: 'get_list_dag_runs_batch',
  request: {
    params: z.object({
      dag_id: z
        .literal('~')
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { const: '~', type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    body: { content: { 'application/json': { schema: DAGRunsBatchBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGRunCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdClearDagRunsRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/clearDagRuns',
  tags: ['DagRun'],
  summary: 'Clear Dag Runs',
  description: 'Clear multiple Dag Runs in a single request.',
  operationId: 'clear_dag_runs',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BulkDAGRunClearBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([ClearTaskInstanceCollectionResponseSchema, DAGRunCollectionResponseSchema])
            .openapi({ title: 'Response Clear Dag Runs' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdClearPartitionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/clearPartitions',
  tags: ['DagRun'],
  summary: 'Clear Dag Run Partitions',
  description: 'Reset partition_key and partition_date fields on matching Dag Runs.',
  operationId: 'clear_dag_run_partitions',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClearPartitionsBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ClearPartitionsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagSourcesDagIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagSources/{dag_id}',
  tags: ['DagSource'],
  summary: 'Get Dag Source',
  description: 'Get source code using file token.',
  operationId: 'get_dag_source',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      version_number: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_number',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Version Number' },
          },
          title: 'Version Number',
        }),
    }),
    headers: z.object({
      accept: z
        .enum(['application/json', 'text/plain', '*/*'])
        .default('*/*')
        .exactOptional()
        .openapi({
          param: {
            name: 'accept',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              enum: ['application/json', 'text/plain', '*/*'],
              default: '*/*',
              title: 'Accept',
            },
          },
          title: 'Accept',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: DAGSourceResponseSchema },
        'text/plain': { schema: z.string().openapi({ example: 'dag code' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    406: {
      description: 'Not Acceptable',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagBundlesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagBundles',
  tags: ['Dag Bundle'],
  summary: 'Get Dag Bundles',
  description:
    "List the Dag bundles Airflow knows about.\n\nReports the version of each bundle Airflow currently holds and when a Dag processor last\nrefreshed it, so whoever deployed the code can tell whether it has been picked up yet.\n\nA bundle is visible to a user who can read at least one Dag recorded against it. A bundle\nholding no registered Dag at all has nothing to authorize against, so it is listed only for a\nuser holding the admin-by-default ``AccessView.IMPORT_ERRORS_ALL`` for that bundle's team --\nthe same view, scoped the same way, that governs import errors for a file that never\nregistered a Dag.",
  operationId: 'get_dag_bundles',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name, version, last_refreshed, active`',
              default: ['name'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name, version, last_refreshed, active`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name, version, last_refreshed, active`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DagBundleCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagBundlesBundleNameRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagBundles/{bundle_name}',
  tags: ['Dag Bundle'],
  summary: 'Get Dag Bundle',
  description: 'Get a Dag bundle.',
  operationId: 'get_dag_bundle',
  request: {
    params: z.object({
      bundle_name: z
        .string()
        .openapi({
          param: {
            name: 'bundle_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Bundle Name' },
          },
          title: 'Bundle Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DagBundleDetailResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagBundlesBundleNameFilesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagBundles/{bundle_name}/files',
  tags: ['Dag Bundle'],
  summary: 'Get Dag Bundle Files',
  description:
    'List the files in a Dag bundle, ordered by path.\n\nA file is listed when the caller can read at least one Dag it defines. A file that recorded an\nimport error without registering any Dag is listed too, on the same admin-by-default terms as\n``GET /importErrors`` -- a file that fails before defining a Dag has no Dag to authorize on,\nand it is the case this page most needs to show.\n\n``dag_count`` counts live Dags only. Dag rows are never deleted: a file that fails to import\nhas every Dag in it marked stale, and so does a file dropped from the bundle. A file therefore\nstays listed on the strength of a live Dag *or* an import error, so a file that has just broken\ndoes not vanish from the page someone opened to find out why, while a file deleted long ago\ndrops out instead of lingering forever.\n\nParse times come from the Dags in the file rather than the file itself, which is the only\nrecord Airflow keeps: a file whose every Dag was removed keeps no parse time of its own.',
  operationId: 'get_dag_bundle_files',
  request: {
    params: z.object({
      bundle_name: z
        .string()
        .openapi({
          param: {
            name: 'bundle_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Bundle Name' },
          },
          title: 'Bundle Name',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DagBundleFileCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagStatsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagStats',
  tags: ['DagStats'],
  summary: 'Get Dag Stats',
  description: 'Get Dag statistics.',
  operationId: 'get_dag_stats',
  request: {
    query: z.object({
      dag_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_ids',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Dag Ids' },
          },
          title: 'Dag Ids',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DagStatsCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ConfigRoute = createRoute({
  method: 'get',
  path: '/api/v2/config',
  tags: ['Config'],
  summary: 'Get Config',
  operationId: 'get_config',
  request: {
    query: z.object({
      section: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'section',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Section' },
          },
          title: 'Section',
        }),
    }),
    headers: z.object({
      accept: z
        .enum(['application/json', 'text/plain', '*/*'])
        .default('*/*')
        .exactOptional()
        .openapi({
          param: {
            name: 'accept',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              enum: ['application/json', 'text/plain', '*/*'],
              default: '*/*',
              title: 'Accept',
            },
          },
          title: 'Accept',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: ConfigSchema },
        'text/plain': {
          schema: z
            .string()
            .openapi({
              example:
                '[core]\ndags_folder = /opt/airflow/dags\nbase_log_folder = /opt/airflow/logs\n\n[smtp]\nsmtp_host = localhost\nsmtp_mail_from = airflow@example.com\n',
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    406: {
      description: 'Not Acceptable',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ConfigSectionSectionOptionOptionRoute = createRoute({
  method: 'get',
  path: '/api/v2/config/section/{section}/option/{option}',
  tags: ['Config'],
  summary: 'Get Config Value',
  operationId: 'get_config_value',
  request: {
    params: z.object({
      section: z
        .string()
        .openapi({
          param: {
            name: 'section',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Section' },
          },
          title: 'Section',
        }),
      option: z
        .string()
        .openapi({
          param: {
            name: 'option',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Option' },
          },
          title: 'Option',
        }),
    }),
    headers: z.object({
      accept: z
        .enum(['application/json', 'text/plain', '*/*'])
        .default('*/*')
        .exactOptional()
        .openapi({
          param: {
            name: 'accept',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              enum: ['application/json', 'text/plain', '*/*'],
              default: '*/*',
              title: 'Accept',
            },
          },
          title: 'Accept',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: ConfigSchema },
        'text/plain': {
          schema: z
            .string()
            .openapi({
              example:
                '[core]\ndags_folder = /opt/airflow/dags\nbase_log_folder = /opt/airflow/logs\n',
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    406: {
      description: 'Not Acceptable',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagWarningsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagWarnings',
  tags: ['DagWarning'],
  summary: 'List Dag Warnings',
  description: 'Get a list of Dag warnings.',
  operationId: 'list_dag_warnings',
  request: {
    query: z.object({
      dag_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      warning_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          DagWarningTypeSchema,
          z
            .string()
            .regex(/^[a-z][a-z0-9_]*:[a-z0-9_.\-]+$/)
            .max(50),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'warning_type',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/DagWarningType' },
                { type: 'string', maxLength: 50, pattern: '^[a-z][a-z0-9_]*:[a-z0-9_.\\-]+$' },
                { type: 'null' },
              ],
              title: 'Warning Type',
            },
          },
          title: 'Warning Type',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['dag_id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, warning_type, message, timestamp`',
              default: ['dag_id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, warning_type, message, timestamp`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, warning_type, message, timestamp`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGWarningCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags',
  tags: ['DAG'],
  summary: 'Get Dags',
  description: 'Get all Dags.',
  operationId: 'get_dags',
  request: {
    query: z.object({
      is_scheduled: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'is_scheduled',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              description: 'Filter Dags by whether their timetable can create scheduled runs.',
              title: 'Is Scheduled',
            },
            description: 'Filter Dags by whether their timetable can create scheduled runs.',
          },
          description: 'Filter Dags by whether their timetable can create scheduled runs.',
          title: 'Is Scheduled',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Tags' },
          },
          title: 'Tags',
        }),
      tags_match_mode: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum(['any', 'all']),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags_match_mode',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ enum: ['any', 'all'], type: 'string' }, { type: 'null' }],
              title: 'Tags Match Mode',
            },
          },
          title: 'Tags Match Mode',
        }),
      owners: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'owners',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Owners' },
          },
          title: 'Owners',
        }),
      dag_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Id Pattern',
        }),
      dag_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Id Prefix Pattern',
        }),
      dag_display_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_display_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Display Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Display Name Pattern',
        }),
      dag_display_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_display_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Display Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Display Name Prefix Pattern',
        }),
      exclude_stale: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_stale',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: true, title: 'Exclude Stale' },
          },
          title: 'Exclude Stale',
        }),
      paused: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'paused',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Paused' },
          },
          title: 'Paused',
        }),
      has_import_errors: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_import_errors',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              description:
                'Filter Dags by having import errors. Only Dags that have been successfully loaded before will be returned.',
              title: 'Has Import Errors',
            },
            description:
              'Filter Dags by having import errors. Only Dags that have been successfully loaded before will be returned.',
          },
          description:
            'Filter Dags by having import errors. Only Dags that have been successfully loaded before will be returned.',
          title: 'Has Import Errors',
        }),
      last_dag_run_state: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          DagRunStateSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'last_dag_run_state',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ $ref: '#/components/schemas/DagRunState' }, { type: 'null' }],
              title: 'Last Dag Run State',
            },
          },
          title: 'Last Dag Run State',
        }),
      bundle_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'bundle_name',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Bundle Name' },
          },
          title: 'Bundle Name',
        }),
      bundle_version: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'bundle_version',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Bundle Version' },
          },
          title: 'Bundle Version',
        }),
      has_asset_schedule: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'has_asset_schedule',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              description: 'Filter Dags with asset-based scheduling',
              title: 'Has Asset Schedule',
            },
            description: 'Filter Dags with asset-based scheduling',
          },
          description: 'Filter Dags with asset-based scheduling',
          title: 'Has Asset Schedule',
        }),
      asset_dependency: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'asset_dependency',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Filter Dags by asset dependency (name or URI)',
              title: 'Asset Dependency',
            },
            description: 'Filter Dags by asset dependency (name or URI)',
          },
          description: 'Filter Dags by asset dependency (name or URI)',
          title: 'Asset Dependency',
        }),
      dag_run_start_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_start_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run Start Date Gte',
            },
          },
          title: 'Dag Run Start Date Gte',
        }),
      dag_run_start_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_start_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run Start Date Gt',
            },
          },
          title: 'Dag Run Start Date Gt',
        }),
      dag_run_start_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_start_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run Start Date Lte',
            },
          },
          title: 'Dag Run Start Date Lte',
        }),
      dag_run_start_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_start_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run Start Date Lt',
            },
          },
          title: 'Dag Run Start Date Lt',
        }),
      dag_run_end_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_end_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run End Date Gte',
            },
          },
          title: 'Dag Run End Date Gte',
        }),
      dag_run_end_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_end_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run End Date Gt',
            },
          },
          title: 'Dag Run End Date Gt',
        }),
      dag_run_end_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_end_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run End Date Lte',
            },
          },
          title: 'Dag Run End Date Lte',
        }),
      dag_run_end_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_end_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Dag Run End Date Lt',
            },
          },
          title: 'Dag Run End Date Lt',
        }),
      dag_run_state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_run_state',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Dag Run State' },
          },
          title: 'Dag Run State',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['dag_id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, dag_display_name, next_dagrun, last_run_state, last_run_start_date`',
              default: ['dag_id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, dag_display_name, next_dagrun, last_run_state, last_run_start_date`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, dag_display_name, next_dagrun, last_run_state, last_run_start_date`',
          title: 'Order By',
        }),
      is_favorite: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'is_favorite',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Is Favorite' },
          },
          title: 'Is Favorite',
        }),
      timetable_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timetable_type',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Timetable Type' },
          },
          title: 'Timetable Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags',
  tags: ['DAG'],
  summary: 'Patch Dags',
  description:
    'Patch multiple Dags.\n\nIf neither `dag_id_pattern` nor `dag_id_prefix_pattern` is provided, no Dags will be\nmatched regardless of other filters. To match all Dags, pass a wildcard value such as\n`~` or `%` for `dag_id_pattern`.',
  operationId: 'patch_dags',
  request: {
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Tags' },
          },
          title: 'Tags',
        }),
      tags_match_mode: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum(['any', 'all']),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags_match_mode',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ enum: ['any', 'all'], type: 'string' }, { type: 'null' }],
              title: 'Tags Match Mode',
            },
          },
          title: 'Tags Match Mode',
        }),
      owners: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'owners',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Owners' },
          },
          title: 'Owners',
        }),
      dag_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Id Pattern',
        }),
      dag_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Id Prefix Pattern',
        }),
      exclude_stale: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_stale',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: true, title: 'Exclude Stale' },
          },
          title: 'Exclude Stale',
        }),
      paused: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'paused',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Paused' },
          },
          title: 'Paused',
        }),
    }),
    body: { content: { 'application/json': { schema: DAGPatchBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}',
  tags: ['DAG'],
  summary: 'Get Dag',
  description: 'Get basic information about a Dag.',
  operationId: 'get_dag',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/dags/{dag_id}',
  tags: ['DAG'],
  summary: 'Delete Dag',
  description: 'Delete the specific Dag.',
  operationId: 'delete_dag',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}',
  tags: ['DAG'],
  summary: 'Patch Dag',
  description: 'Patch the specific Dag.',
  operationId: 'patch_dag',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
    }),
    body: { content: { 'application/json': { schema: DAGPatchBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDetailsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/details',
  tags: ['DAG'],
  summary: 'Get Dag Details',
  description: 'Get details of Dag.',
  operationId: 'get_dag_details',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGDetailsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsBulkRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/bulk',
  tags: ['DAG'],
  summary: 'Bulk Dags',
  description: 'Bulk pause, resume, or drain Dags by id.',
  operationId: 'bulk_dags',
  request: {
    body: {
      content: { 'application/json': { schema: BulkBodyBulkDAGBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdFavoriteRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/favorite',
  tags: ['DAG'],
  summary: 'Favorite Dag',
  description: 'Mark the Dag as favorite.',
  operationId: 'favorite_dag',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdUnfavoriteRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/unfavorite',
  tags: ['DAG'],
  summary: 'Unfavorite Dag',
  description: 'Unmark the Dag as favorite.',
  operationId: 'unfavorite_dag',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2EventLogsEventLogIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/eventLogs/{event_log_id}',
  tags: ['Event Log'],
  summary: 'Get Event Log',
  operationId: 'get_event_log',
  request: {
    params: z.object({
      event_log_id: z
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
            name: 'event_log_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Event Log Id' },
          },
          title: 'Event Log Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventLogResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2EventLogsRoute = createRoute({
  method: 'get',
  path: '/api/v2/eventLogs',
  tags: ['Event Log'],
  summary: 'Get Event Logs',
  description: 'Get all Event Logs.',
  operationId: 'get_event_logs',
  request: {
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dttm, dag_id, task_id, run_id, event, logical_date, owner, owner_display_name, extra, when, event_log_id`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dttm, dag_id, task_id, run_id, event, logical_date, owner, owner_display_name, extra, when, event_log_id`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dttm, dag_id, task_id, run_id, event, logical_date, owner, owner_display_name, extra, when, event_log_id`',
          title: 'Order By',
        }),
      dag_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      task_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      task_instance_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_instance_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Task Instance Id',
            },
          },
          title: 'Task Instance Id',
        }),
      run_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Run Id' },
          },
          title: 'Run Id',
        }),
      map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      try_number: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'try_number',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Try Number' },
          },
          title: 'Try Number',
        }),
      owner: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Owner' },
          },
          title: 'Owner',
        }),
      event: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'event',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Event' },
          },
          title: 'Event',
        }),
      excluded_events: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'excluded_events',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Excluded Events',
            },
          },
          title: 'Excluded Events',
        }),
      included_events: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'included_events',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Included Events',
            },
          },
          title: 'Included Events',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Before',
            },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'After',
            },
          },
          title: 'After',
        }),
      dag_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Id Pattern',
        }),
      task_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Task Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Task Id Pattern',
        }),
      run_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Run Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Run Id Pattern',
        }),
      owner_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'owner_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Owner Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Owner Pattern',
        }),
      owner_display_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'owner_display_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Owner Display Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Owner Display Name Pattern',
        }),
      event_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'event_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `event_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Event Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `event_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `event_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Event Pattern',
        }),
      dag_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Id Prefix Pattern',
        }),
      task_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Task Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Task Id Prefix Pattern',
        }),
      run_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Run Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Run Id Prefix Pattern',
        }),
      owner_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'owner_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Owner Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Owner Prefix Pattern',
        }),
      owner_display_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'owner_display_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Owner Display Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Owner Display Name Prefix Pattern',
        }),
      event_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'event_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Event Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Event Prefix Pattern',
        }),
      teams: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teams',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Teams' },
          },
          title: 'Teams',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventLogCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links',
  tags: ['Extra Links', 'Task Instance'],
  summary: 'Get Extra Links',
  description: 'Get extra links for task instance.',
  operationId: 'get_extra_links',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      try_number: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'try_number',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Try Number' },
          },
          title: 'Try Number',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExtraLinkCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ImportErrorsImportErrorIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/importErrors/{import_error_id}',
  tags: ['Import Error'],
  summary: 'Get Import Error',
  description: 'Get an import error.',
  operationId: 'get_import_error',
  request: {
    params: z.object({
      import_error_id: z
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
            name: 'import_error_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Import Error Id' },
          },
          title: 'Import Error Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ImportErrorResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ImportErrorsRoute = createRoute({
  method: 'get',
  path: '/api/v2/importErrors',
  tags: ['Import Error'],
  summary: 'Get Import Errors',
  description: 'Get all import errors.',
  operationId: 'get_import_errors',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, timestamp, filename, source_reference, bundle_name, stacktrace, import_error_id`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, timestamp, filename, source_reference, bundle_name, stacktrace, import_error_id`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, timestamp, filename, source_reference, bundle_name, stacktrace, import_error_id`',
          title: 'Order By',
        }),
      filename_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filename_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `filename_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Filename Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `filename_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `filename_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Filename Pattern',
        }),
      filename_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filename_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Filename Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Filename Prefix Pattern',
        }),
      filename: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filename',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Exact filename match. Returns only the import error for this specific file path.',
              title: 'Filename',
            },
            description:
              'Exact filename match. Returns only the import error for this specific file path.',
          },
          description:
            'Exact filename match. Returns only the import error for this specific file path.',
          title: 'Filename',
        }),
      bundle_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'bundle_name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Exact bundle name match. Returns only import errors from this specific bundle.',
              title: 'Bundle Name',
            },
            description:
              'Exact bundle name match. Returns only import errors from this specific bundle.',
          },
          description:
            'Exact bundle name match. Returns only import errors from this specific bundle.',
          title: 'Bundle Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ImportErrorCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2JobsRoute = createRoute({
  method: 'get',
  path: '/api/v2/jobs',
  tags: ['Job'],
  summary: 'Get Jobs',
  description: 'Get all jobs.',
  operationId: 'get_jobs',
  request: {
    query: z.object({
      start_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gte',
            },
          },
          title: 'Start Date Gte',
        }),
      start_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gt',
            },
          },
          title: 'Start Date Gt',
        }),
      start_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lte',
            },
          },
          title: 'Start Date Lte',
        }),
      start_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lt',
            },
          },
          title: 'Start Date Lt',
        }),
      end_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gte',
            },
          },
          title: 'End Date Gte',
        }),
      end_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gt',
            },
          },
          title: 'End Date Gt',
        }),
      end_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lte',
            },
          },
          title: 'End Date Lte',
        }),
      end_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lt',
            },
          },
          title: 'End Date Lt',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dag_id, state, job_type, start_date, end_date, latest_heartbeat, executor_class, hostname, unixname`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dag_id, state, job_type, start_date, end_date, latest_heartbeat, executor_class, hostname, unixname`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dag_id, state, job_type, start_date, end_date, latest_heartbeat, executor_class, hostname, unixname`',
          title: 'Order By',
        }),
      job_state: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'job_state',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Job State' },
          },
          title: 'Job State',
        }),
      dag_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      job_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'job_type',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Job Type' },
          },
          title: 'Job Type',
        }),
      hostname: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'hostname',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Hostname' },
          },
          title: 'Hostname',
        }),
      executor_class: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'executor_class',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Executor Class' },
          },
          title: 'Executor Class',
        }),
      teams: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teams',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Teams' },
          },
          title: 'Teams',
        }),
      is_alive: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'is_alive',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Is Alive' },
          },
          title: 'Is Alive',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JobCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2PluginsRoute = createRoute({
  method: 'get',
  path: '/api/v2/plugins',
  tags: ['Plugin'],
  summary: 'Get Plugins',
  operationId: 'get_plugins',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PluginCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2PluginsImportErrorsRoute = createRoute({
  method: 'get',
  path: '/api/v2/plugins/importErrors',
  tags: ['Plugin'],
  summary: 'Import Errors',
  operationId: 'import_errors',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PluginImportErrorCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2PoolsPoolNameRoute = createRoute({
  method: 'get',
  path: '/api/v2/pools/{pool_name}',
  tags: ['Pool'],
  summary: 'Get Pool',
  description: 'Get a pool.',
  operationId: 'get_pool',
  request: {
    params: z.object({
      pool_name: z
        .string()
        .openapi({
          param: {
            name: 'pool_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Pool Name' },
          },
          title: 'Pool Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PoolResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2PoolsPoolNameRoute = createRoute({
  method: 'delete',
  path: '/api/v2/pools/{pool_name}',
  tags: ['Pool'],
  summary: 'Delete Pool',
  description: 'Delete a pool entry.',
  operationId: 'delete_pool',
  request: {
    params: z.object({
      pool_name: z
        .string()
        .openapi({
          param: {
            name: 'pool_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Pool Name' },
          },
          title: 'Pool Name',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2PoolsPoolNameRoute = createRoute({
  method: 'patch',
  path: '/api/v2/pools/{pool_name}',
  tags: ['Pool'],
  summary: 'Patch Pool',
  description: 'Update a Pool.',
  operationId: 'patch_pool',
  request: {
    params: z.object({
      pool_name: z
        .string()
        .openapi({
          param: {
            name: 'pool_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Pool Name' },
          },
          title: 'Pool Name',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
    }),
    body: { content: { 'application/json': { schema: PoolPatchBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PoolResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2PoolsRoute = createRoute({
  method: 'get',
  path: '/api/v2/pools',
  tags: ['Pool'],
  summary: 'Get Pools',
  description: 'Get all pools entries.',
  operationId: 'get_pools',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, pool, name`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, pool, name`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, pool, name`',
          title: 'Order By',
        }),
      pool_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Pool Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Pool Name Pattern',
        }),
      pool_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Pool Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Pool Name Prefix Pattern',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PoolCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2PoolsRoute = createRoute({
  method: 'post',
  path: '/api/v2/pools',
  tags: ['Pool'],
  summary: 'Post Pool',
  description: 'Create a Pool.',
  operationId: 'post_pool',
  request: {
    body: { content: { 'application/json': { schema: PoolBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PoolResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2PoolsRoute = createRoute({
  method: 'patch',
  path: '/api/v2/pools',
  tags: ['Pool'],
  summary: 'Bulk Pools',
  description: 'Bulk create, update, and delete pools.',
  operationId: 'bulk_pools',
  request: {
    body: { content: { 'application/json': { schema: BulkBodyPoolBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ProvidersRoute = createRoute({
  method: 'get',
  path: '/api/v2/providers',
  tags: ['Provider'],
  summary: 'Get Providers',
  description: 'Get providers.',
  operationId: 'get_providers',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ProviderCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2ProvidersProviderNameRoute = createRoute({
  method: 'get',
  path: '/api/v2/providers/{provider_name}',
  tags: ['Provider'],
  summary: 'Get Provider',
  description: 'Get detailed information about an installed provider.',
  operationId: 'get_provider',
  request: {
    params: z.object({
      provider_name: z
        .string()
        .openapi({
          param: {
            name: 'provider_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Provider Name' },
          },
          title: 'Provider Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ProviderDetailsResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsAssetIdStateStoreRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/{asset_id}/state-store',
  tags: ['Asset State Store'],
  summary: 'List Asset State Store',
  description: 'List all state store entries for an asset.',
  operationId: 'list_asset_state_store',
  request: {
    params: z.object({
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetStateStoreCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2AssetsAssetIdStateStoreRoute = createRoute({
  method: 'delete',
  path: '/api/v2/assets/{asset_id}/state-store',
  tags: ['Asset State Store'],
  summary: 'Clear Asset State Store',
  description: 'Delete all state store keys for an asset.',
  operationId: 'clear_asset_state_store',
  request: {
    params: z.object({
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2AssetsAssetIdStateStoreKeyRoute = createRoute({
  method: 'get',
  path: '/api/v2/assets/{asset_id}/state-store/{key}',
  tags: ['Asset State Store'],
  summary: 'Get Asset State Store',
  description: 'Get a single asset state store entry.',
  operationId: 'get_asset_state_store',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Key' },
          },
          title: 'Key',
        }),
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AssetStateStoreResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const putApiV2AssetsAssetIdStateStoreKeyRoute = createRoute({
  method: 'put',
  path: '/api/v2/assets/{asset_id}/state-store/{key}',
  tags: ['Asset State Store'],
  summary: 'Set Asset State Store',
  description: 'Set an asset state store value. Creates or overwrites the key.',
  operationId: 'set_asset_state_store',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Key' },
          },
          title: 'Key',
        }),
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssetStateStoreBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2AssetsAssetIdStateStoreKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v2/assets/{asset_id}/state-store/{key}',
  tags: ['Asset State Store'],
  summary: 'Delete Asset State Store',
  description: 'Delete a single asset state store key. No-op if the key does not exist.',
  operationId: 'delete_asset_state_store',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Key' },
          },
          title: 'Key',
        }),
      asset_id: z
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
            name: 'asset_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Asset Id' },
          },
          title: 'Asset Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store',
  tags: ['Task State Store'],
  summary: 'List Task State Store',
  description: 'List all task state store entries for a task instance.',
  operationId: 'list_task_state_store',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskStateStoreCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreRoute = createRoute({
  method: 'delete',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store',
  tags: ['Task State Store'],
  summary: 'Clear Task State Store',
  description:
    'Delete all task state store keys for a task instance.\n\nWhen ``all_map_indices=true``, state store is cleared for every map index of the task and\nthe ``map_index`` parameter is ignored.',
  operationId: 'clear_task_state_store',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(-1),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: -1, default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      all_map_indices: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'all_map_indices',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'All Map Indices' },
          },
          title: 'All Map Indices',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}',
  tags: ['Task State Store'],
  summary: 'Get Task State Store',
  description: 'Get a single task state store entry.',
  operationId: 'get_task_state_store',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Key' },
          },
          title: 'Key',
        }),
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskStateStoreResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute = createRoute({
  method: 'put',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}',
  tags: ['Task State Store'],
  summary: 'Set Task State Store',
  description: 'Set a task state store value. Creates or overwrites the key.',
  operationId: 'set_task_state_store',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Key' },
          },
          title: 'Key',
        }),
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
    body: { content: { 'application/json': { schema: TaskStateStoreBodySchema } }, required: true },
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute = createRoute(
  {
    method: 'delete',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}',
    tags: ['Task State Store'],
    summary: 'Delete Task State Store',
    description: 'Delete a single task state store key. No-op if the key does not exist.',
    operationId: 'delete_task_state_store',
    request: {
      params: z.object({
        key: z
          .string()
          .openapi({
            param: {
              name: 'key',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Key' },
            },
            title: 'Key',
          }),
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
      }),
      query: z.object({
        map_index: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .default(-1)
          .exactOptional()
          .openapi({
            param: {
              name: 'map_index',
              in: 'query',
              required: false,
              schema: { type: 'integer', default: -1, title: 'Map Index' },
            },
            title: 'Map Index',
          }),
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      204: { description: 'Successful Response' },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  },
)

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKeyRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}',
  tags: ['Task State Store'],
  summary: 'Patch Task State Store',
  description: 'Update the value of an existing task state store key.',
  operationId: 'patch_task_state_store',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Key' },
          },
          title: 'Key',
        }),
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TaskStateStorePatchBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}',
    tags: ['XCom'],
    summary: 'Get Xcom Entry',
    description: 'Get an XCom entry.',
    operationId: 'get_xcom_entry',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        xcom_key: z
          .string()
          .openapi({
            param: {
              name: 'xcom_key',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Xcom Key' },
            },
            title: 'Xcom Key',
          }),
      }),
      query: z.object({
        map_index: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .default(-1)
          .exactOptional()
          .openapi({
            param: {
              name: 'map_index',
              in: 'query',
              required: false,
              schema: { type: 'integer', default: -1, title: 'Map Index' },
            },
            title: 'Map Index',
          }),
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
        deserialize: z
          .stringbool()
          .default(false)
          .exactOptional()
          .openapi({
            param: {
              name: 'deserialize',
              in: 'query',
              required: false,
              schema: { type: 'boolean', default: false, title: 'Deserialize' },
            },
            title: 'Deserialize',
          }),
        stringify: z
          .stringbool()
          .default(false)
          .exactOptional()
          .openapi({
            param: {
              name: 'stringify',
              in: 'query',
              required: false,
              schema: { type: 'boolean', default: false, title: 'Stringify' },
            },
            title: 'Stringify',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: {
          'application/json': {
            schema: z
              .union([XComResponseNativeSchema, XComResponseStringSchema])
              .openapi({ title: 'Response Get Xcom Entry' }),
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute =
  createRoute({
    method: 'delete',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}',
    tags: ['XCom'],
    summary: 'Delete Xcom Entry',
    description: 'Delete an XCom entry.',
    operationId: 'delete_xcom_entry',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        xcom_key: z
          .string()
          .openapi({
            param: {
              name: 'xcom_key',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Xcom Key' },
            },
            title: 'Xcom Key',
          }),
      }),
      query: z.object({
        map_index: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .default(-1)
          .exactOptional()
          .openapi({
            param: {
              name: 'map_index',
              in: 'query',
              required: false,
              schema: { type: 'integer', default: -1, title: 'Map Index' },
            },
            title: 'Map Index',
          }),
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      204: { description: 'Successful Response' },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute =
  createRoute({
    method: 'patch',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}',
    tags: ['XCom'],
    summary: 'Update Xcom Entry',
    description: 'Update an existing XCom entry.',
    operationId: 'update_xcom_entry',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        xcom_key: z
          .string()
          .openapi({
            param: {
              name: 'xcom_key',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Xcom Key' },
            },
            title: 'Xcom Key',
          }),
      }),
      body: { content: { 'application/json': { schema: XComUpdateBodySchema } }, required: true },
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: XComResponseNativeSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries',
  tags: ['XCom'],
  summary: 'Get Xcom Entries',
  description:
    'Get all XCom entries.\n\nThis endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCom entries for all Dags.',
  operationId: 'get_xcom_entries',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      xcom_key: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'xcom_key',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Xcom Key' },
          },
          title: 'Xcom Key',
        }),
      map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Map Index',
            },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      exclude_internal_keys: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_internal_keys',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'Leave out XComs whose keys Airflow reserves for itself, such as loop decision reasons.',
              default: false,
              title: 'Exclude Internal Keys',
            },
            description:
              'Leave out XComs whose keys Airflow reserves for itself, such as loop decision reasons.',
          },
          description:
            'Leave out XComs whose keys Airflow reserves for itself, such as loop decision reasons.',
          title: 'Exclude Internal Keys',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      xcom_key_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'xcom_key_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `xcom_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Xcom Key Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `xcom_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `xcom_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Xcom Key Pattern',
        }),
      xcom_key_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'xcom_key_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Xcom Key Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Xcom Key Prefix Pattern',
        }),
      dag_display_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_display_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Display Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Display Name Pattern',
        }),
      dag_display_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_display_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Display Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Display Name Prefix Pattern',
        }),
      run_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Run Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Run Id Pattern',
        }),
      run_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Run Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Run Id Prefix Pattern',
        }),
      task_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Task Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Task Id Pattern',
        }),
      task_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Task Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Task Id Prefix Pattern',
        }),
      map_index_filter: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index_filter',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index Filter' },
          },
          title: 'Map Index Filter',
        }),
      logical_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gte',
            },
          },
          title: 'Logical Date Gte',
        }),
      logical_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gt',
            },
          },
          title: 'Logical Date Gt',
        }),
      logical_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lte',
            },
          },
          title: 'Logical Date Lte',
        }),
      logical_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lt',
            },
          },
          title: 'Logical Date Lt',
        }),
      run_after_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gte',
            },
          },
          title: 'Run After Gte',
        }),
      run_after_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gt',
            },
          },
          title: 'Run After Gt',
        }),
      run_after_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lte',
            },
          },
          title: 'Run After Lte',
        }),
      run_after_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lt',
            },
          },
          title: 'Run After Lt',
        }),
      teams: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teams',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Teams' },
          },
          title: 'Teams',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['dag_id', 'task_id', 'run_id', 'region_id', 'region_index', 'key'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, dag_id, run_id, task_id, map_index, region_id, region_index, timestamp, run_after`',
              default: ['dag_id', 'task_id', 'run_id', 'region_id', 'region_index', 'key'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, dag_id, run_id, task_id, map_index, region_id, region_index, timestamp, run_after`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, dag_id, run_id, task_id, map_index, region_id, region_index, timestamp, run_after`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: XComCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries',
  tags: ['XCom'],
  summary: 'Create Xcom Entry',
  description: 'Create an XCom entry.',
  operationId: 'create_xcom_entry',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    body: { content: { 'application/json': { schema: XComCreateBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: XComResponseNativeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
  tags: ['Task Instance'],
  summary: 'Get Task Instance',
  description: 'Get task instance.',
  operationId: 'get_task_instance',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
  tags: ['Task Instance'],
  summary: 'Delete Task Instance',
  description: 'Delete a task instance.',
  operationId: 'delete_task_instance',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
  tags: ['Task Instance'],
  summary: 'Patch Task Instance',
  description: 'Update a task instance.',
  operationId: 'patch_task_instance',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
          },
          title: 'Region Index',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchTaskInstanceBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped',
  tags: ['Task Instance'],
  summary: 'Get Mapped Task Instances',
  description: 'Get list of mapped task instances.',
  operationId: 'get_mapped_task_instances',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      run_after_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gte',
            },
          },
          title: 'Run After Gte',
        }),
      run_after_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gt',
            },
          },
          title: 'Run After Gt',
        }),
      run_after_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lte',
            },
          },
          title: 'Run After Lte',
        }),
      run_after_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lt',
            },
          },
          title: 'Run After Lt',
        }),
      logical_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gte',
            },
          },
          title: 'Logical Date Gte',
        }),
      logical_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gt',
            },
          },
          title: 'Logical Date Gt',
        }),
      logical_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lte',
            },
          },
          title: 'Logical Date Lte',
        }),
      logical_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lt',
            },
          },
          title: 'Logical Date Lt',
        }),
      start_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gte',
            },
          },
          title: 'Start Date Gte',
        }),
      start_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gt',
            },
          },
          title: 'Start Date Gt',
        }),
      start_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lte',
            },
          },
          title: 'Start Date Lte',
        }),
      start_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lt',
            },
          },
          title: 'Start Date Lt',
        }),
      end_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gte',
            },
          },
          title: 'End Date Gte',
        }),
      end_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gt',
            },
          },
          title: 'End Date Gt',
        }),
      end_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lte',
            },
          },
          title: 'End Date Lte',
        }),
      end_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lt',
            },
          },
          title: 'End Date Lt',
        }),
      updated_at_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Gte',
            },
          },
          title: 'Updated At Gte',
        }),
      updated_at_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Gt',
            },
          },
          title: 'Updated At Gt',
        }),
      updated_at_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Lte',
            },
          },
          title: 'Updated At Lte',
        }),
      updated_at_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Lt',
            },
          },
          title: 'Updated At Lt',
        }),
      duration_gte: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_gte',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Gte' },
          },
          title: 'Duration Gte',
        }),
      duration_gt: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_gt',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Gt' },
          },
          title: 'Duration Gt',
        }),
      duration_lte: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_lte',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Lte' },
          },
          title: 'Duration Lte',
        }),
      duration_lt: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_lt',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Lt' },
          },
          title: 'Duration Lt',
        }),
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'State' },
          },
          title: 'State',
        }),
      pool: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Pool' },
          },
          title: 'Pool',
        }),
      pool_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Pool Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Pool Name Pattern',
        }),
      pool_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Pool Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Pool Name Prefix Pattern',
        }),
      queue: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Queue' },
          },
          title: 'Queue',
        }),
      queue_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Queue Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Queue Name Pattern',
        }),
      queue_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Queue Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Queue Name Prefix Pattern',
        }),
      executor: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'executor',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Executor' },
          },
          title: 'Executor',
        }),
      version_number: z
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
            name: 'version_number',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Version Number' },
          },
          title: 'Version Number',
        }),
      try_number: z
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
            name: 'try_number',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Try Number' },
          },
          title: 'Try Number',
        }),
      operator: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'operator',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Operator' },
          },
          title: 'Operator',
        }),
      operator_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'operator_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Operator Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Operator Name Pattern',
        }),
      operator_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'operator_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Operator Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Operator Name Prefix Pattern',
        }),
      map_index: z
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
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      rendered_map_index_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'rendered_map_index_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Rendered Map Index Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Rendered Map Index Pattern',
        }),
      rendered_map_index_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'rendered_map_index_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Rendered Map Index Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Rendered Map Index Prefix Pattern',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['map_index'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`',
              default: ['map_index'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependenciesRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/dependencies',
    tags: ['Task Instance'],
    summary: 'Get Task Instance Dependencies',
    description: 'Get dependencies blocking task from getting scheduled.',
    operationId: 'get_task_instance_dependencies_by_map_index',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        map_index: z
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
              name: 'map_index',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Map Index' },
            },
            title: 'Map Index',
          }),
      }),
      query: z.object({
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: TaskDependencyCollectionResponseSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependenciesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/dependencies',
  tags: ['Task Instance'],
  summary: 'Get Task Instance Dependencies',
  description: 'Get dependencies blocking task from getting scheduled.',
  operationId: 'get_task_instance_dependencies',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskDependencyCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries',
  tags: ['Task Instance'],
  summary: 'Get Task Instance Tries',
  description:
    'Get list of task instances history.\n\nTries recorded before the task had regions are not included once it has them.',
  operationId: 'get_task_instance_tries',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceHistoryCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/tries',
  tags: ['Task Instance'],
  summary: 'Get Mapped Task Instance Tries',
  description:
    'Get list of task instances history for a mapped task instance.\n\nTries recorded before the task had regions are not included once it has them.',
  operationId: 'get_mapped_task_instance_tries',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      map_index: z
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
            name: 'map_index',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Map Index' },
          },
          title: 'Map Index',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceHistoryCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}',
  tags: ['Task Instance'],
  summary: 'Get Mapped Task Instance',
  description: 'Get task instance.',
  operationId: 'get_mapped_task_instance',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      map_index: z
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
            name: 'map_index',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Map Index' },
          },
          title: 'Map Index',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}',
  tags: ['Task Instance'],
  summary: 'Patch Task Instance',
  description: 'Update a task instance.',
  operationId: 'patch_task_instance_by_map_index',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .openapi({
          param: {
            name: 'map_index',
            in: 'path',
            required: true,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index' },
          },
          title: 'Map Index',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
          },
          title: 'Region Index',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchTaskInstanceBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances',
  tags: ['Task Instance'],
  summary: 'Get Task Instances',
  description:
    'Get list of task instances.\n\nThis endpoint allows specifying `~` as the dag_id, dag_run_id\nto retrieve task instances for all Dags and Dag runs.\n\nSupports two pagination modes:\n\n**Offset (default):** use `limit` and `offset` query parameters. Returns `total_entries`.\n\n**Cursor:** pass `cursor` (empty string for the first page, then `next_cursor` from the response).\nWhen `cursor` is provided, `offset` is ignored and `total_entries` is capped at\n`total_entries_limit` (a value equal to that limit means at least that many task instances\nmatch). ``next_cursor`` is ``null`` when there are no more pages; ``previous_cursor`` is\n``null`` on the first page.',
  operationId: 'get_task_instances',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      loop_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'loop_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Task group id of a loop; matches every instance it produced.',
              title: 'Loop Id',
            },
            description: 'Task group id of a loop; matches every instance it produced.',
          },
          description: 'Task group id of a loop; matches every instance it produced.',
          title: 'Loop Id',
        }),
      iteration: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'iteration',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: 1 }, { type: 'null' }],
              description:
                'Narrow ``loop_id`` to a single pass of that loop. Iterations count from one.',
              title: 'Iteration',
            },
            description:
              'Narrow ``loop_id`` to a single pass of that loop. Iterations count from one.',
          },
          description:
            'Narrow ``loop_id`` to a single pass of that loop. Iterations count from one.',
          title: 'Iteration',
        }),
      cursor: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.',
              title: 'Cursor',
            },
            description:
              'Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.',
          },
          description:
            'Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.',
          title: 'Cursor',
        }),
      task_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      run_after_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gte',
            },
          },
          title: 'Run After Gte',
        }),
      run_after_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Gt',
            },
          },
          title: 'Run After Gt',
        }),
      run_after_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lte',
            },
          },
          title: 'Run After Lte',
        }),
      run_after_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_after_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Run After Lt',
            },
          },
          title: 'Run After Lt',
        }),
      logical_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gte',
            },
          },
          title: 'Logical Date Gte',
        }),
      logical_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Gt',
            },
          },
          title: 'Logical Date Gt',
        }),
      logical_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lte',
            },
          },
          title: 'Logical Date Lte',
        }),
      logical_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'logical_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Logical Date Lt',
            },
          },
          title: 'Logical Date Lt',
        }),
      start_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gte',
            },
          },
          title: 'Start Date Gte',
        }),
      start_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Gt',
            },
          },
          title: 'Start Date Gt',
        }),
      start_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lte',
            },
          },
          title: 'Start Date Lte',
        }),
      start_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Date Lt',
            },
          },
          title: 'Start Date Lt',
        }),
      end_date_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gte',
            },
          },
          title: 'End Date Gte',
        }),
      end_date_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Gt',
            },
          },
          title: 'End Date Gt',
        }),
      end_date_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lte',
            },
          },
          title: 'End Date Lte',
        }),
      end_date_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Date Lt',
            },
          },
          title: 'End Date Lt',
        }),
      updated_at_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Gte',
            },
          },
          title: 'Updated At Gte',
        }),
      updated_at_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Gt',
            },
          },
          title: 'Updated At Gt',
        }),
      updated_at_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Lte',
            },
          },
          title: 'Updated At Lte',
        }),
      updated_at_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_at_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Updated At Lt',
            },
          },
          title: 'Updated At Lt',
        }),
      duration_gte: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_gte',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Gte' },
          },
          title: 'Duration Gte',
        }),
      duration_gt: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_gt',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Gt' },
          },
          title: 'Duration Gt',
        }),
      duration_lte: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_lte',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Lte' },
          },
          title: 'Duration Lte',
        }),
      duration_lt: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration_lt',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'number' }, { type: 'null' }], title: 'Duration Lt' },
          },
          title: 'Duration Lt',
        }),
      task_display_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_display_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Task Display Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Task Display Name Pattern',
        }),
      task_display_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_display_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive prefix match on task display name (`_task_display_property_value` else `task_id`). Index-friendly alternative to `task_display_name_pattern`; on large databases combine with `dag_id_prefix_pattern` (or a specific Dag in the path) so composite indexes apply. See "Filtering with pattern parameters".',
              title: 'Task Display Name Prefix Pattern',
            },
            description:
              'Case-sensitive prefix match on task display name (`_task_display_property_value` else `task_id`). Index-friendly alternative to `task_display_name_pattern`; on large databases combine with `dag_id_prefix_pattern` (or a specific Dag in the path) so composite indexes apply. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive prefix match on task display name (`_task_display_property_value` else `task_id`). Index-friendly alternative to `task_display_name_pattern`; on large databases combine with `dag_id_prefix_pattern` (or a specific Dag in the path) so composite indexes apply. See "Filtering with pattern parameters".',
          title: 'Task Display Name Prefix Pattern',
        }),
      task_group_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_group_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Filter by exact task group ID. Returns all tasks within the specified task group.',
              title: 'Task Group Id',
            },
            description:
              'Filter by exact task group ID. Returns all tasks within the specified task group.',
          },
          description:
            'Filter by exact task group ID. Returns all tasks within the specified task group.',
          title: 'Task Group Id',
        }),
      dag_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Id Pattern',
        }),
      dag_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Id Prefix Pattern',
        }),
      run_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Run Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Run Id Pattern',
        }),
      run_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'run_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Run Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Run Id Prefix Pattern',
        }),
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'State' },
          },
          title: 'State',
        }),
      pool: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Pool' },
          },
          title: 'Pool',
        }),
      pool_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Pool Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Pool Name Pattern',
        }),
      pool_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'pool_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Pool Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Pool Name Prefix Pattern',
        }),
      queue: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Queue' },
          },
          title: 'Queue',
        }),
      queue_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Queue Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Queue Name Pattern',
        }),
      queue_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Queue Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Queue Name Prefix Pattern',
        }),
      executor: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'executor',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Executor' },
          },
          title: 'Executor',
        }),
      version_number: z
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
            name: 'version_number',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Version Number' },
          },
          title: 'Version Number',
        }),
      teams: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teams',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Teams' },
          },
          title: 'Teams',
        }),
      try_number: z
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
            name: 'try_number',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Try Number' },
          },
          title: 'Try Number',
        }),
      operator: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'operator',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Operator' },
          },
          title: 'Operator',
        }),
      operator_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'operator_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Operator Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Operator Name Pattern',
        }),
      operator_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'operator_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Operator Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Operator Name Prefix Pattern',
        }),
      map_index: z
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
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'integer' }, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      rendered_map_index_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'rendered_map_index_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Rendered Map Index Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Rendered Map Index Pattern',
        }),
      rendered_map_index_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'rendered_map_index_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Rendered Map Index Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Rendered Map Index Prefix Pattern',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['map_index'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`',
              default: ['map_index'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances',
  tags: ['Task Instance'],
  summary: 'Bulk Task Instances',
  description: 'Bulk update, and delete task instances.',
  operationId: 'bulk_task_instances',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BulkBodyBulkTaskInstanceBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesListRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/list',
  tags: ['Task Instance'],
  summary: 'Get Task Instances Batch',
  description: 'Get list of task instances.',
  operationId: 'get_task_instances_batch',
  request: {
    params: z.object({
      dag_id: z
        .literal('~')
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { const: '~', type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .literal('~')
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { const: '~', type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TaskInstancesBatchBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumberRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries/{task_try_number}',
    tags: ['Task Instance'],
    summary: 'Get Task Instance Try Details',
    description: 'Get task instance details by try number.',
    operationId: 'get_task_instance_try_details',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        task_try_number: z
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
              name: 'task_try_number',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Task Try Number' },
            },
            title: 'Task Try Number',
          }),
      }),
      query: z.object({
        map_index: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .default(-1)
          .exactOptional()
          .openapi({
            param: {
              name: 'map_index',
              in: 'query',
              required: false,
              schema: { type: 'integer', default: -1, title: 'Map Index' },
            },
            title: 'Map Index',
          }),
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: TaskInstanceHistoryResponseSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumberRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/tries/{task_try_number}',
    tags: ['Task Instance'],
    summary: 'Get Mapped Task Instance Try Details',
    operationId: 'get_mapped_task_instance_try_details',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        task_try_number: z
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
              name: 'task_try_number',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Task Try Number' },
            },
            title: 'Task Try Number',
          }),
        map_index: z
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
              name: 'map_index',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Map Index' },
            },
            title: 'Map Index',
          }),
      }),
      query: z.object({
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: TaskInstanceHistoryResponseSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const postApiV2DagsDagIdClearTaskInstancesRoute = createRoute({
  method: 'post',
  path: '/api/v2/dags/{dag_id}/clearTaskInstances',
  tags: ['Task Instance'],
  summary: 'Post Clear Task Instances',
  description: 'Clear task instances.',
  operationId: 'post_clear_task_instances',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClearTaskInstancesBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskGroupInstances/{group_id}',
  tags: ['Task Instance'],
  summary: 'Patch Task Group Instances',
  description: 'Update the state of all task instances in a task group.',
  operationId: 'patch_task_group_instances',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      group_id: z
        .string()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Group Id' },
          },
          title: 'Group Id',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
          },
          title: 'Region Index',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchTaskInstanceBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRunRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskGroupInstances/{group_id}/dry_run',
  tags: ['Task Instance'],
  summary: 'Patch Task Group Instances Dry Run',
  description: 'Dry-run of updating the state of all task instances in a task group.',
  operationId: 'patch_task_group_instances_dry_run',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      group_id: z
        .string()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Group Id' },
          },
          title: 'Group Id',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
          },
          title: 'Region Index',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchTaskInstanceBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRunRoute = createRoute(
  {
    method: 'patch',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/dry_run',
    tags: ['Task Instance'],
    summary: 'Patch Task Instance Dry Run',
    description: 'Update a task instance dry_run mode.',
    operationId: 'patch_task_instance_dry_run_by_map_index',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        map_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int(), z.null().nullable()]),
            ),
          )
          .openapi({
            param: {
              name: 'map_index',
              in: 'path',
              required: true,
              schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index' },
            },
            title: 'Map Index',
          }),
      }),
      query: z.object({
        update_mask: z
          .union([
            z.array(z.string()),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ])
          .exactOptional()
          .openapi({
            param: {
              name: 'update_mask',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
                title: 'Update Mask',
              },
            },
            title: 'Update Mask',
          }),
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int(), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
            },
            title: 'Region Index',
          }),
      }),
      body: {
        content: { 'application/json': { schema: PatchTaskInstanceBodySchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  },
)

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRunRoute = createRoute({
  method: 'patch',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/dry_run',
  tags: ['Task Instance'],
  summary: 'Patch Task Instance Dry Run',
  description: 'Update a task instance dry_run mode.',
  operationId: 'patch_task_instance_dry_run',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
          },
          title: 'Region Index',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchTaskInstanceBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskInstanceCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdTasksRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/tasks',
  tags: ['Task'],
  summary: 'Get Tasks',
  description: 'Get tasks for Dag.',
  operationId: 'get_tasks',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      order_by: z
        .string()
        .default('task_id')
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: { type: 'string', default: 'task_id', title: 'Order By' },
          },
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskCollectionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/tasks/{task_id}',
  tags: ['Task'],
  summary: 'Get Task',
  description:
    "Get simplified representation of a task.\n\nPass ``version_number`` (e.g. a task instance's ``dag_version.version_number``) to get the task\nas defined in that Dag version. Without it the latest version is used. Returns 404 if that\nversion of the Dag does not exist.",
  operationId: 'get_task',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      task_id: z
        .any()
        .openapi({
          param: { name: 'task_id', in: 'path', required: true, schema: { title: 'Task Id' } },
          title: 'Task Id',
        }),
    }),
    query: z.object({
      version_number: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_number',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Version Number' },
          },
          title: 'Version Number',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TaskResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2VariablesVariableKeyRoute = createRoute({
  method: 'get',
  path: '/api/v2/variables/{variable_key}',
  tags: ['Variable'],
  summary: 'Get Variable',
  description: 'Get a variable entry.',
  operationId: 'get_variable',
  request: {
    params: z.object({
      variable_key: z
        .string()
        .openapi({
          param: {
            name: 'variable_key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Variable Key' },
          },
          title: 'Variable Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VariableResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const deleteApiV2VariablesVariableKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v2/variables/{variable_key}',
  tags: ['Variable'],
  summary: 'Delete Variable',
  description: 'Delete a variable entry.',
  operationId: 'delete_variable',
  request: {
    params: z.object({
      variable_key: z
        .string()
        .openapi({
          param: {
            name: 'variable_key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Variable Key' },
          },
          title: 'Variable Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2VariablesVariableKeyRoute = createRoute({
  method: 'patch',
  path: '/api/v2/variables/{variable_key}',
  tags: ['Variable'],
  summary: 'Patch Variable',
  description: 'Update a variable by key.',
  operationId: 'patch_variable',
  request: {
    params: z.object({
      variable_key: z
        .string()
        .openapi({
          param: {
            name: 'variable_key',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Variable Key' },
          },
          title: 'Variable Key',
        }),
    }),
    query: z.object({
      update_mask: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'update_mask',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Update Mask',
            },
          },
          title: 'Update Mask',
        }),
    }),
    body: { content: { 'application/json': { schema: VariableBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VariableResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2VariablesRoute = createRoute({
  method: 'get',
  path: '/api/v2/variables',
  tags: ['Variable'],
  summary: 'Get Variables',
  description: 'Get all Variables entries.',
  operationId: 'get_variables',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, id, _val, description, is_encrypted, team_name`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, id, _val, description, is_encrypted, team_name`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, id, _val, description, is_encrypted, team_name`',
          title: 'Order By',
        }),
      variable_key_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'variable_key_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `variable_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Variable Key Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `variable_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `variable_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Variable Key Pattern',
        }),
      variable_key_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'variable_key_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Variable Key Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Variable Key Prefix Pattern',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VariableCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const postApiV2VariablesRoute = createRoute({
  method: 'post',
  path: '/api/v2/variables',
  tags: ['Variable'],
  summary: 'Post Variable',
  description: 'Create a variable.',
  operationId: 'post_variable',
  request: {
    body: { content: { 'application/json': { schema: VariableBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VariableResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const patchApiV2VariablesRoute = createRoute({
  method: 'patch',
  path: '/api/v2/variables',
  tags: ['Variable'],
  summary: 'Bulk Variables',
  description: 'Bulk create, update, and delete variables.',
  operationId: 'bulk_variables',
  request: {
    body: {
      content: { 'application/json': { schema: BulkBodyVariableBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumberRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{try_number}',
  tags: ['Task Instance'],
  summary: 'Get Log',
  description: 'Get logs for a specific task instance.',
  operationId: 'get_log',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
      task_id: z
        .string()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      try_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'try_number',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 0, title: 'Try Number' },
          },
          title: 'Try Number',
        }),
    }),
    query: z.object({
      full_content: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'full_content',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false, title: 'Full Content' },
          },
          title: 'Full Content',
        }),
      token: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Token' },
          },
          title: 'Token',
        }),
      map_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: -1, title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
    }),
    headers: z.object({
      accept: z
        .enum(['application/json', 'application/x-ndjson', '*/*'])
        .default('*/*')
        .exactOptional()
        .openapi({
          param: {
            name: 'accept',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              enum: ['application/json', 'application/x-ndjson', '*/*'],
              default: '*/*',
              title: 'Accept',
            },
          },
          title: 'Accept',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: TaskInstancesLogResponseSchema },
        'application/x-ndjson': {
          schema: z
            .string()
            .openapi({ example: '{"content": "content"}\n{"content": "content"}\n' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumberRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/externalLogUrl/{try_number}',
    tags: ['Task Instance'],
    summary: 'Get External Log Url',
    description: 'Get external log URL for a specific task instance.',
    operationId: 'get_external_log_url',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        try_number: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().gt(0),
          )
          .openapi({
            param: {
              name: 'try_number',
              in: 'path',
              required: true,
              schema: { type: 'integer', exclusiveMinimum: 0, title: 'Try Number' },
            },
            title: 'Try Number',
          }),
      }),
      query: z.object({
        map_index: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .default(-1)
          .exactOptional()
          .openapi({
            param: {
              name: 'map_index',
              in: 'query',
              required: false,
              schema: { type: 'integer', default: -1, title: 'Map Index' },
            },
            title: 'Map Index',
          }),
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int().min(-1), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
                title: 'Region Index',
              },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: ExternalLogUrlResponseSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const putApiV2ParseDagFileFileTokenRoute = createRoute({
  method: 'put',
  path: '/api/v2/parseDagFile/{file_token}',
  tags: ['DAG Parsing'],
  summary: 'Reparse Dag File',
  description: 'Request re-parsing a Dag file.',
  operationId: 'reparse_dag_file',
  request: {
    params: z.object({
      file_token: z
        .string()
        .openapi({
          param: {
            name: 'file_token',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Token' },
          },
          title: 'File Token',
        }),
    }),
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagTagsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dagTags',
  tags: ['DAG'],
  summary: 'Get Dag Tags',
  description: 'Get all Dag tags.',
  operationId: 'get_dag_tags',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['name'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name`',
              default: ['name'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name`',
          title: 'Order By',
        }),
      tag_name_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'tag_name_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `tag_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Tag Name Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `tag_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `tag_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Tag Name Pattern',
        }),
      tag_name_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'tag_name_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Tag Name Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Tag Name Prefix Pattern',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGTagCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagVersionsDiffRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagVersions/diff',
  tags: ['DagVersion', 'experimental'],
  summary: 'Experimental: Compare what two stored versions of a Dag currently hold.',
  description:
    "🚧 This is an experimental endpoint and may change or be removed without notice.\n\nReports observed state — what the two stored versions currently hold — not why a version was created. Version access returns the changed structure with identifying path components masked; the raw values behind those changes, and the paths that name them, are disclosed only to a caller who may also read the Dag's code.",
  operationId: 'get_dag_version_diff',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
    }),
    query: z.object({
      base_version_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .openapi({
          param: {
            name: 'base_version_number',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'Version to compare from.',
              title: 'Base Version Number',
            },
            description: 'Version to compare from.',
          },
          description: 'Version to compare from.',
          title: 'Base Version Number',
        }),
      target_version_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .openapi({
          param: {
            name: 'target_version_number',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'Version to compare to.',
              title: 'Target Version Number',
            },
            description: 'Version to compare to.',
          },
          description: 'Version to compare to.',
          title: 'Target Version Number',
        }),
      max_changes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(5000),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            name: 'max_changes',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 5000,
              exclusiveMinimum: 0,
              description:
                'Largest number of records `changes` may hold. A repeat of a path already recorded does not count towards it, and `truncated` says whether the bound dropped anything.',
              default: 500,
              title: 'Max Changes',
            },
            description:
              'Largest number of records `changes` may hold. A repeat of a path already recorded does not count towards it, and `truncated` says whether the bound dropped anything.',
          },
          description:
            'Largest number of records `changes` may hold. A repeat of a path already recorded does not count towards it, and `truncated` says whether the bound dropped anything.',
          title: 'Max Changes',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DagVersionDiffResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagVersionsVersionNumberRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagVersions/{version_number}',
  tags: ['DagVersion'],
  summary: 'Get Dag Version',
  description: 'Get one Dag Version.',
  operationId: 'get_dag_version',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      version_number: z
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
            name: 'version_number',
            in: 'path',
            required: true,
            schema: { type: 'integer', title: 'Version Number' },
          },
          title: 'Version Number',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DagVersionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagVersionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagVersions',
  tags: ['DagVersion'],
  summary: 'Get Dag Versions',
  description:
    'Get all Dag Versions.\n\nThis endpoint allows specifying `~` as the dag_id to retrieve Dag Versions for all Dags.',
  operationId: 'get_dag_versions',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
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
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      version_number: z
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
            name: 'version_number',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Version Number' },
          },
          title: 'Version Number',
        }),
      bundle_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bundle_name',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Bundle Name' },
          },
          title: 'Bundle Name',
        }),
      bundle_version: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'bundle_version',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Bundle Version' },
          },
          title: 'Bundle Version',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, version_number, bundle_name, bundle_version`',
              default: ['id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, version_number, bundle_name, bundle_version`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, version_number, bundle_name, bundle_version`',
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DAGVersionCollectionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/hitlDetails',
    tags: ['Task Instance'],
    summary: 'Get Hitl Detail',
    description: 'Get a Human-in-the-loop detail of a specific task instance.',
    operationId: 'get_hitl_detail',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        map_index: z
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
              name: 'map_index',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Map Index' },
            },
            title: 'Map Index',
          }),
      }),
      query: z.object({
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int(), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: HITLDetailSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsRoute =
  createRoute({
    method: 'patch',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/hitlDetails',
    tags: ['Task Instance'],
    summary: 'Update Hitl Detail',
    description: 'Update a Human-in-the-loop detail.',
    operationId: 'update_hitl_detail',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        map_index: z
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
              name: 'map_index',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Map Index' },
            },
            title: 'Map Index',
          }),
      }),
      query: z.object({
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int(), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
            },
            title: 'Region Index',
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateHITLDetailPayloadSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: HITLDetailResponseSchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumberRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/hitlDetails/tries/{try_number}',
    tags: ['Task Instance'],
    summary: 'Get Hitl Detail Try Detail',
    description: 'Get a Human-in-the-loop detail of a specific task instance.',
    operationId: 'get_hitl_detail_try_detail',
    request: {
      params: z.object({
        dag_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Id' },
            },
            title: 'Dag Id',
          }),
        dag_run_id: z
          .string()
          .openapi({
            param: {
              name: 'dag_run_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Dag Run Id' },
            },
            title: 'Dag Run Id',
          }),
        task_id: z
          .string()
          .openapi({
            param: {
              name: 'task_id',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Task Id' },
            },
            title: 'Task Id',
          }),
        map_index: z
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
              name: 'map_index',
              in: 'path',
              required: true,
              schema: { type: 'integer', title: 'Map Index' },
            },
            title: 'Map Index',
          }),
        try_number: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int(), z.null().nullable()]),
            ),
          )
          .openapi({
            param: {
              name: 'try_number',
              in: 'path',
              required: true,
              schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Try Number' },
            },
            title: 'Try Number',
          }),
      }),
      query: z.object({
        region_id: ((schema) =>
          z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
          z.union([
            z.uuid(),
            z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
          ]),
        )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_id',
              in: 'query',
              required: false,
              schema: {
                anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
                title: 'Region Id',
              },
            },
            title: 'Region Id',
          }),
        region_index: z
          .preprocess(
            (val) => (val === 'null' ? null : val),
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.int(), z.null().nullable()]),
            ),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'region_index',
              in: 'query',
              required: false,
              schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Region Index' },
            },
            title: 'Region Index',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: HITLDetailHistorySchema } },
      },
      400: {
        description: 'Bad Request',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      409: {
        description: 'Conflict',
        content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
    security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
  })

export const getApiV2DagsDagIdDagRunsDagRunIdHitlDetailsRoute = createRoute({
  method: 'get',
  path: '/api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/hitlDetails',
  tags: ['Task Instance'],
  summary: 'Get Hitl Details',
  description: 'Get Human-in-the-loop details.',
  operationId: 'get_hitl_details',
  request: {
    params: z.object({
      dag_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Id' },
          },
          title: 'Dag Id',
        }),
      dag_run_id: z
        .string()
        .openapi({
          param: {
            name: 'dag_run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dag Run Id' },
          },
          title: 'Dag Run Id',
        }),
    }),
    query: z.object({
      region_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Region Id',
            },
          },
          title: 'Region Id',
        }),
      region_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().min(-1), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'region_index',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', minimum: -1 }, { type: 'null' }],
              title: 'Region Index',
            },
          },
          title: 'Region Index',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 50, title: 'Limit' },
          },
          title: 'Limit',
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 0, title: 'Offset' },
          },
          title: 'Offset',
        }),
      order_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['ti_id'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description:
                'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `ti_id, subject, responded_at, created_at, responded_by_user_id, responded_by_user_name, dag_id, run_id, task_display_name, run_after, rendered_map_index, task_instance_operator, task_instance_state`',
              default: ['ti_id'],
              title: 'Order By',
            },
            description:
              'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `ti_id, subject, responded_at, created_at, responded_by_user_id, responded_by_user_name, dag_id, run_id, task_display_name, run_after, rendered_map_index, task_instance_operator, task_instance_state`',
          },
          description:
            'Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `ti_id, subject, responded_at, created_at, responded_by_user_id, responded_by_user_name, dag_id, run_id, task_display_name, run_after, rendered_map_index, task_instance_operator, task_instance_state`',
          title: 'Order By',
        }),
      dag_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Dag Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Dag Id Pattern',
        }),
      dag_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'dag_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Dag Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Dag Id Prefix Pattern',
        }),
      task_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Task Id' },
          },
          title: 'Task Id',
        }),
      task_id_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
              title: 'Task Id Pattern',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".',
          title: 'Task Id Pattern',
        }),
      task_id_prefix_pattern: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_id_prefix_pattern',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
              title: 'Task Id Prefix Pattern',
            },
            description:
              'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          },
          description:
            'Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".',
          title: 'Task Id Prefix Pattern',
        }),
      map_index: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'map_index',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'null' }], title: 'Map Index' },
          },
          title: 'Map Index',
        }),
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'State' },
          },
          title: 'State',
        }),
      teams: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teams',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Teams' },
          },
          title: 'Teams',
        }),
      response_received: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'response_received',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Response Received' },
          },
          title: 'Response Received',
        }),
      responded_by_user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'responded_by_user_id',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Responded By User Id' },
          },
          title: 'Responded By User Id',
        }),
      responded_by_user_name: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'responded_by_user_name',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, title: 'Responded By User Name' },
          },
          title: 'Responded By User Name',
        }),
      subject_search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'subject_search',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `subject_search` on large tables — see "Filtering with pattern parameters".',
              title: 'Subject Search',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `subject_search` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `subject_search` on large tables — see "Filtering with pattern parameters".',
          title: 'Subject Search',
        }),
      body_search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'body_search',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Case-insensitive substring match (SQL `ILIKE`). Slower than `body_search` on large tables — see "Filtering with pattern parameters".',
              title: 'Body Search',
            },
            description:
              'Case-insensitive substring match (SQL `ILIKE`). Slower than `body_search` on large tables — see "Filtering with pattern parameters".',
          },
          description:
            'Case-insensitive substring match (SQL `ILIKE`). Slower than `body_search` on large tables — see "Filtering with pattern parameters".',
          title: 'Body Search',
        }),
      created_at_gte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_at_gte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created At Gte',
            },
          },
          title: 'Created At Gte',
        }),
      created_at_gt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_at_gt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created At Gt',
            },
          },
          title: 'Created At Gt',
        }),
      created_at_lte: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_at_lte',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created At Lte',
            },
          },
          title: 'Created At Lte',
        }),
      created_at_lt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_at_lt',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created At Lt',
            },
          },
          title: 'Created At Lt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: HITLDetailCollectionSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})

export const getApiV2MonitorHealthRoute = createRoute({
  method: 'get',
  path: '/api/v2/monitor/health',
  tags: ['Monitor'],
  summary: 'Get Health',
  operationId: 'get_health',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: HealthInfoResponseSchema } },
    },
  },
})

export const getApiV2VersionRoute = createRoute({
  method: 'get',
  path: '/api/v2/version',
  tags: ['Version'],
  summary: 'Get Version',
  description: 'Get version information.',
  operationId: 'get_version',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VersionInfoSchema } },
    },
  },
})

export const getApiV2AuthLoginRoute = createRoute({
  method: 'get',
  path: '/api/v2/auth/login',
  tags: ['Login'],
  summary: 'Login',
  description: 'Redirect to the login URL depending on the AuthManager configured.',
  operationId: 'login',
  request: {
    query: z.object({
      next: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'next',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Next' },
          },
          title: 'Next',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    307: {
      description: 'Temporary Redirect',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getApiV2AuthCliMetadataRoute = createRoute({
  method: 'get',
  path: '/api/v2/auth/cli/metadata',
  tags: ['Login'],
  summary: 'Get Cli Login Metadata',
  description:
    'Return the login methods the AuthManager configured offers to command-line clients.',
  operationId: 'get_cli_login_metadata',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CliLoginMetadataResponseSchema } },
    },
  },
})

export const getApiV2AuthLogoutRoute = createRoute({
  method: 'get',
  path: '/api/v2/auth/logout',
  tags: ['Login'],
  summary: 'Logout',
  description: 'Logout the user.',
  operationId: 'logout',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    307: {
      description: 'Temporary Redirect',
      content: { 'application/json': { schema: HTTPExceptionResponseSchema } },
    },
  },
  security: [{ OAuth2PasswordBearer: [] }, { HTTPBearer: [] }],
})
