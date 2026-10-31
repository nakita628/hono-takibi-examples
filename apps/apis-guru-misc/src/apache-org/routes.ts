import { createRoute, z } from '@hono/zod-openapi'

const ActionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the permission "action"' }),
  })
  .openapi({ description: 'An action Item.\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('Action')

const CollectionInfoSchema = z
  .object({
    total_entries: z
      .int()
      .exactOptional()
      .openapi({ description: 'Count of objects in the current result set.' }),
  })
  .openapi({ description: 'Metadata about collection.', required: [] })
  .openapi('CollectionInfo')

const ActionCollectionSchema = z
  .object({ actions: z.array(ActionSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'A collection of actions.\n\n*New in version 2.1.0*\n' })
  .openapi('ActionCollection')

const ResourceSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'The name of the resource' }) })
  .openapi({
    description: 'A resource on which permissions are granted.\n\n*New in version 2.1.0*\n',
    required: [],
  })
  .openapi('Resource')

const ActionResourceSchema = z
  .object({
    action: ActionSchema.exactOptional().openapi({ description: 'The permission action' }),
    resource: ResourceSchema.exactOptional().openapi({ description: 'The permission resource' }),
  })
  .openapi({ description: 'The Action-Resource item.\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('ActionResource')

const DagStateSchema = z
  .enum(['queued', 'running', 'success', 'failed'])
  .openapi({
    description:
      "DAG State.\n\n*Changed in version 2.1.3*&#58; 'queued' is added as a possible value.\n",
  })
  .openapi('DagState')

const BasicDAGRunSchema = z
  .object({
    dag_id: z.string().exactOptional().openapi({ readOnly: true }),
    data_interval_end: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    data_interval_start: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    end_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    logical_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The logical date (previously called execution date). This is the time or interval covered by\nthis DAG run, according to the DAG definition.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n\nThis together with DAG_ID are a unique key.\n\n*New in version 2.2.0*\n',
      }),
    run_id: z.string().exactOptional().openapi({ description: 'Run ID.\n' }),
    start_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The start time. The time when DAG run was actually created.\n\n*Changed in version 2.1.3*&#58; Field becomes nullable.\n',
        readOnly: true,
      }),
    state: DagStateSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('BasicDAGRun')

const ClassReferenceSchema = z
  .object({
    class_name: z.string().exactOptional().openapi({ readOnly: true }),
    module_path: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'Class reference', required: [] })
  .openapi('ClassReference')

const ClearDagRunSchema = z
  .object({
    dry_run: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "If set, don't actually run this operation. The response will contain a list of task instances\nplanned to be cleaned, but not modified in any way.\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('ClearDagRun')

const ClearTaskInstancesSchema = z
  .object({
    dag_run_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DagRun ID for this task instance' }),
    dry_run: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "If set, don't actually run this operation. The response will contain a list of task instances\nplanned to be cleaned, but not modified in any way.\n",
      }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum execution date to clear.' }),
    include_downstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If set to true, downstream tasks are also affected.' }),
    include_future: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If set to True, also tasks from future DAG Runs are affected.' }),
    include_parentdag: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Clear tasks in the parent dag of the subdag.' }),
    include_past: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If set to True, also tasks from past DAG Runs are affected.' }),
    include_subdags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Clear tasks in subdags and clear external tasks indicated by ExternalTaskMarker.',
      }),
    include_upstream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If set to true, upstream tasks are also affected.' }),
    only_failed: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Only clear failed tasks.' }),
    only_running: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Only clear running tasks.' }),
    reset_dag_runs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set state of DAG runs to RUNNING.' }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The minimum execution date to clear.' }),
    task_ids: z
      .array(z.string())
      .min(1)
      .exactOptional()
      .openapi({ description: 'A list of task ids to clear.\n\n*New in version 2.1.0*\n' }),
  })
  .openapi({ required: [] })
  .openapi('ClearTaskInstances')

const ColorSchema = z
  .string()
  .regex(/^#[a-fA-F0-9]{3,6}$/)
  .openapi({ description: 'Color in hexadecimal notation.' })
  .openapi('Color')

const ConfigOptionSchema = z
  .object({
    key: z.string().exactOptional().openapi({ readOnly: true }),
    value: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'The option of configuration.', required: [] })
  .openapi('ConfigOption')

const ConfigSectionSchema = z
  .object({
    name: z.string().exactOptional().openapi({ readOnly: true }),
    options: z.array(ConfigOptionSchema).exactOptional(),
  })
  .openapi({ description: 'The section of configuration.', required: [] })
  .openapi('ConfigSection')

const ConfigSchema = z
  .object({ sections: z.array(ConfigSectionSchema).exactOptional() })
  .openapi({ description: 'The configuration.', required: [] })
  .openapi('Config')

const ConnectionCollectionItemSchema = z
  .object({
    conn_type: z.string().exactOptional().openapi({ description: 'The connection type.' }),
    connection_id: z.string().exactOptional().openapi({ description: 'The connection ID.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the connection.' }),
    host: z.string().nullable().exactOptional().openapi({ description: 'Host of the connection.' }),
    login: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Login of the connection.' }),
    port: z.int().nullable().exactOptional().openapi({ description: 'Port of the connection.' }),
    schema: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Schema of the connection.' }),
  })
  .openapi({
    description:
      'Connection collection item.\nThe password and extra fields are only available when retrieving a single object due to the sensitivity of this data.\n',
    required: [],
  })
  .openapi('ConnectionCollectionItem')

const ConnectionSchema = ConnectionCollectionItemSchema.and(
  z
    .object({
      extra: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'Other values that cannot be put into another field, e.g. RSA keys.',
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({ description: 'Password of the connection.', writeOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Full representation of the connection.' })
  .openapi('Connection')

const ConnectionCollectionSchema = z
  .object({ connections: z.array(ConnectionCollectionItemSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of connections.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('ConnectionCollection')

const ConnectionTestSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The success or failure message of the request.' }),
    status: z.boolean().exactOptional().openapi({ description: 'The status of the request.' }),
  })
  .openapi({ description: 'Connection test results.\n\n*New in version 2.2.0*\n', required: [] })
  .openapi('ConnectionTest')

const CronExpressionSchema = z
  .object({ __type: z.string(), value: z.string() })
  .nullable()
  .openapi({ description: 'Cron expression', required: ['__type', 'value'] })
  .openapi('CronExpression')

const TimeDeltaSchema = z
  .object({ __type: z.string(), days: z.int(), microseconds: z.int(), seconds: z.int() })
  .openapi({ description: 'Time delta', required: ['__type', 'days', 'seconds', 'microseconds'] })
  .openapi('TimeDelta')

const RelativeDeltaSchema = z
  .object({
    __type: z.string(),
    day: z.int(),
    days: z.int(),
    hour: z.int(),
    hours: z.int(),
    leapdays: z.int(),
    microsecond: z.int(),
    microseconds: z.int(),
    minute: z.int(),
    minutes: z.int(),
    month: z.int(),
    months: z.int(),
    second: z.int(),
    seconds: z.int(),
    year: z.int(),
    years: z.int(),
  })
  .openapi({
    description: 'Relative delta',
    required: [
      '__type',
      'years',
      'months',
      'days',
      'leapdays',
      'hours',
      'minutes',
      'seconds',
      'microseconds',
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
      'microsecond',
    ],
  })
  .openapi('RelativeDelta')

const ScheduleIntervalSchema = z
  .union([TimeDeltaSchema, RelativeDeltaSchema, CronExpressionSchema])
  .nullable()
  .openapi({
    description:
      "Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's\nexecution_date to figure out the next schedule.\n",
    discriminator: { propertyName: '__type' },
    readOnly: true,
  })
  .openapi('ScheduleInterval')

const TagSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: 'Tag', required: [] })
  .openapi('Tag')

const DAGSchema = z
  .object({
    dag_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the DAG.', readOnly: true }),
    default_view: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Default view of the DAG inside the webserver\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents.\n',
        readOnly: true,
      }),
    file_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change.\n',
        readOnly: true,
      }),
    fileloc: z
      .string()
      .exactOptional()
      .openapi({ description: 'The absolute path to the file.', readOnly: true }),
    has_import_errors: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the DAG has import errors\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    has_task_concurrency_limits: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the DAG has task concurrency limits\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    is_active: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether the DAG is currently seen by the scheduler(s).\n\n*New in version 2.1.1*\n\n*Changed in version 2.2.0*&#58; Field is read-only.\n',
        readOnly: true,
      }),
    is_paused: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the DAG is paused.' }),
    is_subdag: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the DAG is SubDAG.', readOnly: true }),
    last_expired: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Time when the DAG last received a refresh signal\n(e.g. the DAG\'s "refresh" button was clicked in the web UI)\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    last_parsed_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The last time the DAG was parsed.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    last_pickled: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The last time the DAG was pickled.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    max_active_runs: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Maximum number of active DAG runs for the DAG\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    max_active_tasks: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of active tasks that can be run on the DAG\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    next_dagrun: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The logical date of the next dag run.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    next_dagrun_create_after: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Earliest time at which this ``next_dagrun`` can be created.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    next_dagrun_data_interval_end: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The end of the interval of the next dag run.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    next_dagrun_data_interval_start: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The start of the interval of the next dag run.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    owners: z.array(z.string()).exactOptional().openapi({ readOnly: true }),
    pickle_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Foreign key to the latest pickle_id\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    root_dag_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null.',
        readOnly: true,
      }),
    schedule_interval: ScheduleIntervalSchema.exactOptional(),
    scheduler_lock: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether (one of) the scheduler is scheduling this DAG at the moment\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
    tags: z
      .array(TagSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of tags.', readOnly: true }),
    timetable_description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timetable/Schedule Interval description.\n\n*New in version 2.3.0*\n',
        readOnly: true,
      }),
  })
  .openapi({ description: 'DAG', required: [] })
  .openapi('DAG')

const DAGCollectionSchema = z
  .object({ dags: z.array(DAGSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of DAGs.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('DAGCollection')

const TimezoneSchema = z.string().openapi('Timezone')

const DAGDetailSchema = DAGSchema.and(
  z
    .object({
      catchup: z.boolean().exactOptional().openapi({ readOnly: true }),
      concurrency: z.number().exactOptional().openapi({ readOnly: true }),
      dag_run_timeout: TimeDeltaSchema.nullable().exactOptional(),
      default_view: z.string().exactOptional().openapi({ readOnly: true }),
      doc_md: z.string().nullable().exactOptional().openapi({ readOnly: true }),
      end_date: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description: "The DAG's end date.\n\n*New in version 2.3.0*.\n",
          readOnly: true,
        }),
      is_paused_upon_creation: z
        .boolean()
        .nullable()
        .exactOptional()
        .openapi({
          description: 'Whether the DAG is paused upon creation.\n\n*New in version 2.3.0*\n',
          readOnly: true,
        }),
      last_parsed: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description: 'The last time the DAG was parsed.\n\n*New in version 2.3.0*\n',
          readOnly: true,
        }),
      orientation: z.string().exactOptional().openapi({ readOnly: true }),
      params: z
        .object({})
        .exactOptional()
        .openapi({
          description: 'User-specified DAG params.\n\n*New in version 2.0.1*\n',
          readOnly: true,
        }),
      render_template_as_native_obj: z
        .boolean()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'Whether to render templates as native Python objects.\n\n*New in version 2.3.0*\n',
          readOnly: true,
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            "The DAG's start date.\n\n*Changed in version 2.0.1*&#58; Field becomes nullable.\n",
          readOnly: true,
        }),
      template_search_path: z
        .array(z.string())
        .nullable()
        .exactOptional()
        .openapi({ description: 'The template search path.\n\n*New in version 2.3.0*\n' }),
      timezone: TimezoneSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'DAG details.\n\nFor details see:\n[airflow.models.DAG](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.DAG)\n',
  })
  .openapi('DAGDetail')

const DAGRunSchema = z
  .object({
    conf: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'JSON object describing additional configuration parameters.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n',
      }),
    dag_id: z.string().exactOptional().openapi({ readOnly: true }),
    dag_run_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Run ID.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n\nIf not provided, a value will be generated based on execution_date.\n\nIf the specified dag_run_id is in use, the creation request fails with an ALREADY_EXISTS error.\n\nThis together with DAG_ID are a unique key.\n',
      }),
    data_interval_end: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    data_interval_start: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    end_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    execution_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "The execution date. This is the same as logical_date, kept for backwards compatibility.\nIf both this field and logical_date are provided but with different values, the request\nwill fail with an BAD_REQUEST error.\n\n*Changed in version 2.2.0*&#58; Field becomes nullable.\n\n*Deprecated since version 2.2.0*&#58; Use 'logical_date' instead.\n",
      }),
    external_trigger: z.boolean().default(true).exactOptional().openapi({ readOnly: true }),
    last_scheduling_decision: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    logical_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The logical date (previously called execution date). This is the time or interval covered by\nthis DAG run, according to the DAG definition.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n\nThis together with DAG_ID are a unique key.\n\n*New in version 2.2.0*\n',
      }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contains manually entered notes by the user about the DagRun.\n\n*New in version 2.5.0*\n',
      }),
    run_type: z
      .enum(['backfill', 'manual', 'scheduled', 'dataset_triggered'])
      .exactOptional()
      .openapi({ readOnly: true }),
    start_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The start time. The time when DAG run was actually created.\n\n*Changed in version 2.1.3*&#58; Field becomes nullable.\n',
        readOnly: true,
      }),
    state: DagStateSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DAGRun')

const DAGRunCollectionSchema = z
  .object({ dag_runs: z.array(DAGRunSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of DAG runs.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('DAGRunCollection')

const DagScheduleDatasetReferenceSchema = z
  .object({
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dataset reference creation time' }),
    dag_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DAG ID that depends on the dataset.' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dataset reference update time' }),
  })
  .openapi({
    description: 'A datasets reference to a downstream DAG.\n\n*New in version 2.4.0*\n',
    required: [],
  })
  .openapi('DagScheduleDatasetReference')

const DagWarningSchema = z
  .object({
    dag_id: z.string().exactOptional().openapi({ description: 'The dag_id.', readOnly: true }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message for the dag warning.', readOnly: true }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when this warning was logged.', readOnly: true }),
    warning_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The warning type for the dag warning.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DagWarning')

const DagWarningCollectionSchema = z
  .object({ import_errors: z.array(DagWarningSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'Collection of DAG warnings.\n' })
  .openapi('DagWarningCollection')

const TaskOutletDatasetReferenceSchema = z
  .object({
    created_at: z.string().exactOptional().openapi({ description: 'The dataset creation time' }),
    dag_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DAG ID that updates the dataset.' }),
    task_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The task ID that updates the dataset.' }),
    updated_at: z.string().exactOptional().openapi({ description: 'The dataset update time' }),
  })
  .openapi({
    description: 'A datasets reference to an upstream task.\n\n*New in version 2.4.0*\n',
    required: [],
  })
  .openapi('TaskOutletDatasetReference')

const DatasetSchema = z
  .object({
    consuming_dags: z.array(DagScheduleDatasetReferenceSchema).exactOptional(),
    created_at: z.string().exactOptional().openapi({ description: 'The dataset creation time' }),
    extra: z.object({}).nullable().exactOptional().openapi({ description: 'The dataset extra' }),
    id: z.int().exactOptional().openapi({ description: 'The dataset id' }),
    producing_tasks: z.array(TaskOutletDatasetReferenceSchema).exactOptional(),
    updated_at: z.string().exactOptional().openapi({ description: 'The dataset update time' }),
    uri: z.string().exactOptional().openapi({ description: 'The dataset uri' }),
  })
  .openapi({ description: 'A dataset item.\n\n*New in version 2.4.0*\n', required: [] })
  .openapi('Dataset')

const DatasetCollectionSchema = z
  .object({ datasets: z.array(DatasetSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'A collection of datasets.\n\n*New in version 2.4.0*\n' })
  .openapi('DatasetCollection')

const DatasetEventSchema = z
  .object({
    created_dagruns: z.array(BasicDAGRunSchema).exactOptional(),
    dataset_id: z.int().exactOptional().openapi({ description: 'The dataset id' }),
    dataset_uri: z.string().exactOptional().openapi({ description: 'The URI of the dataset' }),
    extra: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The dataset event extra' }),
    source_dag_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DAG ID that updated the dataset.' }),
    source_map_index: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The task map index that updated the dataset.' }),
    source_run_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DAG run ID that updated the dataset.' }),
    source_task_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The task ID that updated the dataset.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dataset event creation time' }),
  })
  .openapi({ description: 'A dataset event.\n\n*New in version 2.4.0*\n', required: [] })
  .openapi('DatasetEvent')

const DatasetEventCollectionSchema = z
  .object({ dataset_events: z.array(DatasetEventSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'A collection of dataset events.\n\n*New in version 2.4.0*\n' })
  .openapi('DatasetEventCollection')

const ErrorSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI reference that identifies the specific occurrence of the problem. It may or may\nnot yield further information if dereferenced.\n',
      }),
    status: z
      .number()
      .openapi({
        description:
          'The HTTP status code generated by the API server for this occurrence of the problem.',
      }),
    title: z
      .string()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type. This specification\nencourages that, when dereferenced, it provide human-readable documentation for\nthe problem type.\n',
      }),
  })
  .openapi({
    description: '[RFC7807](https://tools.ietf.org/html/rfc7807) compliant response.\n',
    required: ['type', 'title', 'status'],
  })
  .openapi('Error')

const EventLogSchema = z
  .object({
    dag_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DAG ID', readOnly: true }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'A key describing the type of event.', readOnly: true }),
    event_log_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The event log ID', readOnly: true }),
    execution_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When the event was dispatched for an object having execution_date, the value of this field.\n',
        readOnly: true,
      }),
    extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Other information that was not included in the other fields, e.g. the complete CLI command.\n',
        readOnly: true,
      }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the user who triggered these events a.', readOnly: true }),
    task_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The DAG ID', readOnly: true }),
    when: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when these events happened.', readOnly: true }),
  })
  .openapi({ description: 'Log of user operations via CLI or Web UI.', required: [] })
  .openapi('EventLog')

const EventLogCollectionSchema = z
  .object({ event_logs: z.array(EventLogSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of event logs.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('EventLogCollection')

const ExtraLinkSchema = z
  .object({
    class_ref: ClassReferenceSchema.exactOptional(),
    href: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    description: 'Additional links containing additional information about the task.',
    required: [],
  })
  .openapi('ExtraLink')

const ExtraLinkCollectionSchema = z
  .object({ extra_links: z.array(ExtraLinkSchema).exactOptional() })
  .openapi({ description: 'The collection of extra links.', required: [] })
  .openapi('ExtraLinkCollection')

const HealthStatusSchema = z
  .enum(['healthy', 'unhealthy'])
  .openapi({ description: 'Health status' })
  .openapi('HealthStatus')

const MetadatabaseStatusSchema = z
  .object({ status: HealthStatusSchema.exactOptional() })
  .openapi({ description: 'The status of the metadatabase.', required: [] })
  .openapi('MetadatabaseStatus')

const SchedulerStatusSchema = z
  .object({
    latest_scheduler_heartbeat: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The time the scheduler last do a heartbeat.', readOnly: true }),
    status: HealthStatusSchema.exactOptional(),
  })
  .openapi({ description: 'The status and the latest scheduler heartbeat.', required: [] })
  .openapi('SchedulerStatus')

const HealthInfoSchema = z
  .object({
    metadatabase: MetadatabaseStatusSchema.exactOptional(),
    scheduler: SchedulerStatusSchema.exactOptional(),
  })
  .openapi({ description: 'Instance status information.', required: [] })
  .openapi('HealthInfo')

const ImportErrorSchema = z
  .object({
    filename: z.string().exactOptional().openapi({ description: 'The filename', readOnly: true }),
    import_error_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The import error ID.', readOnly: true }),
    stack_trace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full stackstrace..', readOnly: true }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when this error was created.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ImportError')

const ImportErrorCollectionSchema = z
  .object({ import_errors: z.array(ImportErrorSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of import errors.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('ImportErrorCollection')

const JobSchema = z
  .object({
    dag_id: z.string().nullable().exactOptional(),
    end_date: z.string().nullable().exactOptional(),
    executor_class: z.string().nullable().exactOptional(),
    hostname: z.string().nullable().exactOptional(),
    id: z.int().exactOptional(),
    job_type: z.string().nullable().exactOptional(),
    latest_heartbeat: z.string().nullable().exactOptional(),
    start_date: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    unixname: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Job')

const ListDagRunsFormSchema = z
  .object({
    dag_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Return objects with specific DAG IDs.\nThe value can be repeated to retrieve multiple matching values (OR condition).',
      }),
    end_date_gte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater or equal the specified date.\n\nThis can be combined with end_date_lte parameter to receive only the selected period.\n',
      }),
    end_date_lte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects less than or equal to the specified date.\n\nThis can be combined with end_date_gte parameter to receive only the selected period.\n',
      }),
    execution_date_gte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater or equal to the specified date.\n\nThis can be combined with execution_date_lte key to receive only the selected period.\n',
      }),
    execution_date_lte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects less than or equal to the specified date.\n\nThis can be combined with execution_date_gte key to receive only the selected period.\n',
      }),
    order_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field to order the results by. Prefix a field name\nwith `-` to reverse the sort order.\n\n*New in version 2.1.0*\n',
      }),
    page_limit: z
      .int()
      .min(1)
      .default(100)
      .exactOptional()
      .openapi({ description: 'The numbers of items to return.' }),
    page_offset: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'The number of items to skip before starting to collect the result set.',
      }),
    start_date_gte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte key to receive only the selected period.\n',
      }),
    start_date_lte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects less or equal the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period\n',
      }),
    states: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Return objects with specific states.\nThe value can be repeated to retrieve multiple matching values (OR condition).',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListDagRunsForm')

const TaskStateSchema = z
  .enum([
    'success',
    'running',
    'failed',
    'upstream_failed',
    'skipped',
    'up_for_retry',
    'up_for_reschedule',
    'queued',
    'none',
    'scheduled',
    'deferred',
    'removed',
    'restarting',
  ])
  .openapi({
    description:
      "Task state.\n\n*Changed in version 2.0.2*&#58; 'removed' is added as a possible value.\n\n*Changed in version 2.2.0*&#58; 'deferred' is added as a possible value.\n\n*Changed in version 2.4.0*&#58; 'sensing' state has been removed.\n*Changed in version 2.4.2*&#58; 'restarting' is added as a possible value\n",
  })
  .openapi('TaskState')

const ListTaskInstanceFormSchema = z
  .object({
    dag_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Return objects with specific DAG IDs.\nThe value can be repeated to retrieve multiple matching values (OR condition).',
      }),
    duration_gte: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater than or equal to the specified values.\n\nThis can be combined with duration_lte parameter to receive only the selected period.\n',
      }),
    duration_lte: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Returns objects less than or equal to the specified values.\n\nThis can be combined with duration_gte parameter to receive only the selected range.\n',
      }),
    end_date_gte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n',
      }),
    end_date_lte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects less than or equal to the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n',
      }),
    execution_date_gte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater or equal to the specified date.\n\nThis can be combined with execution_date_lte parameter to receive only the selected period.\n',
      }),
    execution_date_lte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects less than or equal to the specified date.\n\nThis can be combined with execution_date_gte parameter to receive only the selected period.\n',
      }),
    pool: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The value can be repeated to retrieve multiple matching values (OR condition).',
      }),
    queue: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The value can be repeated to retrieve multiple matching values (OR condition).',
      }),
    start_date_gte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n',
      }),
    start_date_lte: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Returns objects less or equal the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n',
      }),
    state: z
      .array(TaskStateSchema)
      .exactOptional()
      .openapi({
        description:
          'The value can be repeated to retrieve multiple matching values (OR condition).',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListTaskInstanceForm')

const PluginCollectionItemSchema = z
  .object({
    appbuilder_menu_items: z
      .array(z.object({}).nullable())
      .exactOptional()
      .openapi({ description: 'The Flask Appbuilder menu items' }),
    appbuilder_views: z
      .array(z.object({}).nullable())
      .exactOptional()
      .openapi({ description: 'The appuilder views' }),
    executors: z
      .array(z.string().nullable())
      .exactOptional()
      .openapi({ description: 'The plugin executors' }),
    flask_blueprints: z
      .array(z.object({}).nullable())
      .exactOptional()
      .openapi({ description: 'The flask blueprints' }),
    global_operator_extra_links: z
      .array(z.object({}).nullable())
      .exactOptional()
      .openapi({ description: 'The global operator extra links' }),
    hooks: z
      .array(z.string().nullable())
      .exactOptional()
      .openapi({ description: 'The plugin hooks' }),
    macros: z
      .array(z.object({}).nullable())
      .exactOptional()
      .openapi({ description: 'The plugin macros' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the plugin' }),
    operator_extra_links: z
      .array(z.object({}).nullable())
      .exactOptional()
      .openapi({ description: 'Operator extra links' }),
    source: z.string().nullable().exactOptional().openapi({ description: 'The plugin source' }),
  })
  .openapi({ description: 'A plugin Item.\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('PluginCollectionItem')

const PluginCollectionSchema = z
  .object({ plugins: z.array(PluginCollectionItemSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'A collection of plugin.\n\n*New in version 2.1.0*\n' })
  .openapi('PluginCollection')

const PoolSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the pool.\n\n*New in version 2.3.0*\n' }),
    name: z.string().exactOptional().openapi({ description: 'The name of pool.' }),
    occupied_slots: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of slots used by running/queued tasks at the moment.',
        readOnly: true,
      }),
    open_slots: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of free slots at the moment.', readOnly: true }),
    queued_slots: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of slots used by queued tasks at the moment.',
        readOnly: true,
      }),
    slots: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of slots that can be assigned to tasks. One job may occupy one or more slots.\n',
      }),
    used_slots: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of slots used by running tasks at the moment.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The pool', required: [] })
  .openapi('Pool')

const PoolCollectionSchema = z
  .object({ pools: z.array(PoolSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of pools.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('PoolCollection')

const ProviderSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the provider.' }),
    package_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the provider.' }),
    version: z.string().exactOptional().openapi({ description: 'The version of the provider.' }),
  })
  .openapi({ description: 'The provider\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('Provider')

const ProviderCollectionSchema = z
  .object({ providers: z.array(ProviderSchema).exactOptional() })
  .openapi({ description: 'Collection of providers.\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('ProviderCollection')

const RoleSchema = z
  .object({
    actions: z.array(ActionResourceSchema).exactOptional(),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The name of the role\n\n*Changed in version 2.3.0*&#58; A minimum character length requirement ('minLength') is added.\n",
      }),
  })
  .openapi({ description: 'a role item.\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('Role')

const RoleCollectionSchema = z
  .object({ roles: z.array(RoleSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'A collection of roles.\n\n*New in version 2.1.0*\n' })
  .openapi('RoleCollection')

const SLAMissSchema = z
  .object({
    dag_id: z.string().exactOptional().openapi({ description: 'The DAG ID.' }),
    description: z.string().nullable().exactOptional(),
    email_sent: z.boolean().exactOptional(),
    execution_date: z.string().exactOptional(),
    notification_sent: z.boolean().exactOptional(),
    task_id: z.string().exactOptional().openapi({ description: 'The task ID.', readOnly: true }),
    timestamp: z.string().exactOptional(),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('SLAMiss')

const SetDagRunNoteSchema = z
  .object({
    note: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom notes left by users for this Dag Run.' }),
  })
  .openapi({ required: [] })
  .openapi('SetDagRunNote')

const SetTaskInstanceNoteSchema = z
  .object({
    note: z.string().openapi({ description: 'The custom note to set for this Task Instance.' }),
  })
  .openapi({ required: ['note'] })
  .openapi('SetTaskInstanceNote')

const TriggerRuleSchema = z
  .enum([
    'all_success',
    'all_failed',
    'all_done',
    'one_success',
    'one_failed',
    'none_failed',
    'none_skipped',
    'none_failed_or_skipped',
    'none_failed_min_one_success',
    'dummy',
  ])
  .openapi({
    description:
      "Trigger rule.\n\n*Changed in version 2.2.0*&#58; 'none_failed_min_one_success' is added as a possible value.\n",
  })
  .openapi('TriggerRule')

const WeightRuleSchema = z
  .enum(['downstream', 'upstream', 'absolute'])
  .openapi({ description: 'Weight rule.' })
  .openapi('WeightRule')

const TaskSchema = z
  .object({
    class_ref: ClassReferenceSchema.exactOptional(),
    depends_on_past: z.boolean().exactOptional().openapi({ readOnly: true }),
    downstream_task_ids: z.array(z.string()).exactOptional().openapi({ readOnly: true }),
    end_date: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
    execution_timeout: TimeDeltaSchema.nullable().exactOptional(),
    extra_links: z
      .array(
        z.object({ class_ref: ClassReferenceSchema.exactOptional() }).openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
    is_mapped: z.boolean().exactOptional().openapi({ readOnly: true }),
    owner: z.string().exactOptional().openapi({ readOnly: true }),
    pool: z.string().exactOptional().openapi({ readOnly: true }),
    pool_slots: z.number().exactOptional().openapi({ readOnly: true }),
    priority_weight: z.number().exactOptional().openapi({ readOnly: true }),
    queue: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    retries: z.number().exactOptional().openapi({ readOnly: true }),
    retry_delay: TimeDeltaSchema.nullable().exactOptional(),
    retry_exponential_backoff: z.boolean().exactOptional().openapi({ readOnly: true }),
    start_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    sub_dag: DAGSchema.exactOptional(),
    task_id: z.string().exactOptional().openapi({ readOnly: true }),
    template_fields: z.array(z.string()).exactOptional().openapi({ readOnly: true }),
    trigger_rule: TriggerRuleSchema.exactOptional(),
    ui_color: ColorSchema.exactOptional(),
    ui_fgcolor: ColorSchema.exactOptional(),
    wait_for_downstream: z.boolean().exactOptional().openapi({ readOnly: true }),
    weight_rule: WeightRuleSchema.exactOptional(),
  })
  .openapi({
    description:
      'For details see:\n[airflow.models.BaseOperator](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.BaseOperator)\n',
    required: [],
  })
  .openapi('Task')

const TaskCollectionSchema = z
  .object({ tasks: z.array(TaskSchema).exactOptional() })
  .openapi({ description: 'Collection of tasks.', required: [] })
  .openapi('TaskCollection')

const TriggerSchema = z
  .object({
    classpath: z.string().exactOptional(),
    created_date: z.string().exactOptional(),
    id: z.int().exactOptional(),
    kwargs: z.string().exactOptional(),
    triggerer_id: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Trigger')

const TaskInstanceSchema = z
  .object({
    dag_id: z.string().exactOptional(),
    dag_run_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DagRun ID for this task instance\n\n*New in version 2.3.0*\n' }),
    duration: z.number().nullable().exactOptional(),
    end_date: z.string().nullable().exactOptional(),
    execution_date: z.string().exactOptional(),
    executor_config: z.string().exactOptional(),
    hostname: z.string().exactOptional(),
    map_index: z.int().exactOptional(),
    max_tries: z.int().exactOptional(),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Contains manually entered notes by the user about the TaskInstance.\n\n*New in version 2.5.0*\n',
      }),
    operator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '*Changed in version 2.1.1*&#58; Field becomes nullable.\n' }),
    pid: z.int().nullable().exactOptional(),
    pool: z.string().exactOptional(),
    pool_slots: z.int().exactOptional(),
    priority_weight: z.int().nullable().exactOptional(),
    queue: z.string().nullable().exactOptional(),
    queued_when: z.string().nullable().exactOptional(),
    rendered_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'JSON object describing rendered fields.\n\n*New in version 2.3.0*\n',
      }),
    sla_miss: SLAMissSchema.nullable().exactOptional(),
    start_date: z.string().nullable().exactOptional(),
    state: TaskStateSchema.nullable().exactOptional(),
    task_id: z.string().exactOptional(),
    trigger: TriggerSchema.nullable().exactOptional(),
    triggerer_job: JobSchema.nullable().exactOptional(),
    try_number: z.int().exactOptional(),
    unixname: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskInstance')

const TaskInstanceCollectionSchema = z
  .object({ task_instances: z.array(TaskInstanceSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of task instances.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('TaskInstanceCollection')

const TaskInstanceReferenceSchema = z
  .object({
    dag_id: z.string().exactOptional().openapi({ description: 'The DAG ID.', readOnly: true }),
    dag_run_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The DAG run ID.', readOnly: true }),
    execution_date: z.string().exactOptional().openapi({ readOnly: true }),
    task_id: z.string().exactOptional().openapi({ description: 'The task ID.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TaskInstanceReference')

const TaskInstanceReferenceCollectionSchema = z
  .object({ task_instances: z.array(TaskInstanceReferenceSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TaskInstanceReferenceCollection')

const UpdateDagRunStateSchema = z
  .object({
    state: z
      .enum(['success', 'failed', 'queued'])
      .exactOptional()
      .openapi({ description: 'The state to set this DagRun' }),
  })
  .openapi({
    description: 'Modify the state of a DAG run.\n\n*New in version 2.2.0*\n',
    required: [],
  })
  .openapi('UpdateDagRunState')

const UpdateTaskInstanceSchema = z
  .object({
    dry_run: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "If set, don't actually run this operation. The response will contain the task instance\nplanned to be affected, but won't be modified in any way.\n",
      }),
    new_state: z
      .enum(['success', 'failed'])
      .exactOptional()
      .openapi({ description: 'Expected new state.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTaskInstance')

const UpdateTaskInstancesStateSchema = z
  .object({
    dag_run_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The task instance's DAG run ID. Either set this or execution_date but not both.\n\n*New in version 2.3.0*\n",
      }),
    dry_run: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "If set, don't actually run this operation. The response will contain a list of task instances\nplanned to be affected, but won't be modified in any way.\n",
      }),
    execution_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The execution date. Either set this or dag_run_id but not both.' }),
    include_downstream: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, downstream tasks are also affected.' }),
    include_future: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to True, also tasks from future DAG Runs are affected.' }),
    include_past: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to True, also tasks from past DAG Runs are affected.' }),
    include_upstream: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, upstream tasks are also affected.' }),
    new_state: z
      .enum(['success', 'failed'])
      .exactOptional()
      .openapi({ description: 'Expected new state.' }),
    task_id: z.string().exactOptional().openapi({ description: 'The task ID.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTaskInstancesState')

const UserCollectionItemSchema = z
  .object({
    active: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the user is active', readOnly: true }),
    changed_on: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date user was changed', readOnly: true }),
    created_on: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date user was created', readOnly: true }),
    email: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The user's email.\n\n*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.\n",
      }),
    failed_login_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The number of times the login failed', readOnly: true }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's first name.\n\n*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.\n",
      }),
    last_login: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The last user login', readOnly: true }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's last name.\n\n*Changed in version 2.4.0*&#58; The requirement for this to be non-empty was removed.\n",
      }),
    login_count: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The login count', readOnly: true }),
    roles: z
      .array(z.object({ name: z.string().exactOptional() }).nullable().openapi({ required: [] }))
      .exactOptional()
      .openapi({
        description:
          'User roles.\n\n*Changed in version 2.2.0*&#58; Field is no longer read-only.\n',
      }),
    username: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The username.\n\n*Changed in version 2.2.0*&#58; A minimum character length requirement ('minLength') is added.\n",
      }),
  })
  .openapi({ description: 'A user object.\n\n*New in version 2.1.0*\n', required: [] })
  .openapi('UserCollectionItem')

const UserSchema = UserCollectionItemSchema.and(
  z
    .object({ password: z.string().exactOptional().openapi({ writeOnly: true }) })
    .openapi({ required: [] }),
)
  .openapi({ description: 'A user object with sensitive data.\n\n*New in version 2.1.0*\n' })
  .openapi('User')

const UserCollectionSchema = z
  .object({ users: z.array(UserCollectionItemSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({ description: 'Collection of users.\n\n*New in version 2.1.0*\n' })
  .openapi('UserCollection')

const VariableCollectionItemSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the variable.\n\n*New in version 2.4.0*\n' }),
    key: z.string().exactOptional(),
  })
  .openapi({
    description:
      'XCom entry collection item.\nThe value field are only available when retrieving a single object due to the sensitivity of this data.',
    required: [],
  })
  .openapi('VariableCollectionItem')

const VariableSchema = VariableCollectionItemSchema.and(
  z.object({ value: z.string().exactOptional() }).openapi({ required: [] }),
)
  .openapi({ description: 'Full representation of Variable' })
  .openapi('Variable')

const VariableCollectionSchema = z
  .object({ variables: z.array(VariableCollectionItemSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of variables.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('VariableCollection')

const VersionInfoSchema = z
  .object({
    git_version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The git version (including git commit hash)' }),
    version: z.string().exactOptional().openapi({ description: 'The version of Airflow' }),
  })
  .openapi({ description: 'Version information.', required: [] })
  .openapi('VersionInfo')

const XComCollectionItemSchema = z
  .object({
    dag_id: z.string().exactOptional(),
    execution_date: z.string().exactOptional(),
    key: z.string().exactOptional(),
    task_id: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
  })
  .openapi({
    description:
      'XCom entry collection item.\n\nThe value field is only available when reading a single object due to the size of the value.\n',
    required: [],
  })
  .openapi('XComCollectionItem')

const XComSchema = XComCollectionItemSchema.and(
  z
    .object({ value: z.string().exactOptional().openapi({ description: 'The value' }) })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Full representations of XCom entry.' })
  .openapi('XCom')

const XComCollectionSchema = z
  .object({ xcom_entries: z.array(XComCollectionItemSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CollectionInfoSchema)
  .openapi({
    description:
      "Collection of XCom entries.\n\n*Changed in version 2.1.0*&#58; 'total_entries' field is added.\n",
  })
  .openapi('XComCollection')

const AlreadyExistsResponse = {
  description: 'An existing resource conflicts with the request.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const BadRequestResponse = {
  description: 'Client specified an invalid argument.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const MethodNotAllowedResponse = {
  description: 'Request method is known by the server but is not supported by the target resource.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const NotAcceptableResponse = {
  description: 'A specified Accept header is not allowed.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const NotFoundResponse = {
  description: 'A specified resource is not found.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const PermissionDeniedResponse = {
  description: 'Client does not have sufficient permission.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const UnauthenticatedResponse = {
  description: 'Request not authenticated due to missing, invalid, authentication info.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const UnknownResponse = {
  description: 'Unknown server error.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ConnectionIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The connection ID.',
      in: 'path',
      name: 'connection_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ContinuationTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A token that allows you to continue fetching logs.\nIf passed, it will specify the location from which the download should be continued.\n',
      in: 'query',
      name: 'token',
      required: false,
      schema: { type: 'string' },
    },
  })

const DAGIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The DAG ID.',
      in: 'path',
      name: 'dag_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const DAGRunIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The DAG run ID.',
      in: 'path',
      name: 'dag_run_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const DatasetURIParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The encoded Dataset URI',
      in: 'path',
      name: 'uri',
      required: true,
      schema: { format: 'path', type: 'string' },
    },
  })

const EventLogIDParamsSchema = z
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
      description: 'The event log ID.',
      in: 'path',
      name: 'event_log_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const FileTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The key containing the encrypted path to the file. Encryption and decryption take place only on\nthe server. This prevents the client from reading an non-DAG file. This also ensures API\nextensibility, because the format of encrypted data may change.\n',
      in: 'path',
      name: 'file_token',
      required: true,
      schema: { type: 'string' },
    },
  })

const FilterDatasetIDParamsSchema = z
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
      description: 'The Dataset ID that updated the dataset.',
      in: 'query',
      name: 'dataset_id',
      schema: { type: 'integer' },
      required: false,
    },
  })

const FilterDurationGTEParamsSchema = z
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
      description:
        'Returns objects greater than or equal to the specified values.\n\nThis can be combined with duration_lte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'duration_gte',
      required: false,
      schema: { type: 'number' },
    },
  })

const FilterDurationLTEParamsSchema = z
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
      description:
        'Returns objects less than or equal to the specified values.\n\nThis can be combined with duration_gte parameter to receive only the selected range.\n',
      in: 'query',
      name: 'duration_lte',
      required: false,
      schema: { type: 'number' },
    },
  })

const FilterEndDateGTEParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'end_date_gte',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const FilterEndDateLTEParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns objects less than or equal to the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'end_date_lte',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const FilterExecutionDateGTEParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns objects greater or equal to the specified date.\n\nThis can be combined with execution_date_lte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'execution_date_gte',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const FilterExecutionDateLTEParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns objects less than or equal to the specified date.\n\nThis can be combined with execution_date_gte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'execution_date_lte',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const FilterMapIndexParamsSchema = z
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
      description: 'Filter on map index for mapped task.',
      in: 'query',
      name: 'map_index',
      schema: { type: 'integer' },
      required: false,
    },
  })

const FilterPoolParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'The value can be repeated to retrieve multiple matching values (OR condition).',
      in: 'query',
      name: 'pool',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
    },
  })

const FilterQueueParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'The value can be repeated to retrieve multiple matching values (OR condition).',
      in: 'query',
      name: 'queue',
      schema: { items: { type: 'string' }, type: 'array' },
      required: false,
    },
  })

const FilterSourceDAGIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The DAG ID that updated the dataset.',
      in: 'query',
      name: 'source_dag_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const FilterSourceMapIndexParamsSchema = z
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
      description: 'The map index that updated the dataset.',
      in: 'query',
      name: 'source_map_index',
      schema: { type: 'integer' },
      required: false,
    },
  })

const FilterSourceRunIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The DAG run ID that updated the dataset.',
      in: 'query',
      name: 'source_run_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const FilterSourceTaskIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The task ID that updated the dataset.',
      in: 'query',
      name: 'source_task_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const FilterStartDateGTEParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'start_date_gte',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const FilterStartDateLTEParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns objects less or equal the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n',
      in: 'query',
      name: 'start_date_lte',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const FilterStateParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'The value can be repeated to retrieve multiple matching values (OR condition).',
      in: 'query',
      name: 'state',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
    },
  })

const FilterTagsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'List of tags to filter results.\n\n*New in version 2.2.0*\n',
      in: 'query',
      name: 'tags',
      schema: { items: { type: 'string' }, type: 'array' },
      required: false,
    },
  })

const FullContentParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A full content will be returned.\nBy default, only the first fragment will be returned.\n',
      in: 'query',
      name: 'full_content',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ImportErrorIDParamsSchema = z
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
      description: 'The import error ID.',
      in: 'path',
      name: 'import_error_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const MapIndexParamsSchema = z
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
      description: 'The map index.',
      in: 'path',
      name: 'map_index',
      required: true,
      schema: { type: 'integer' },
    },
  })

const OnlyActiveParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Only filter active DAGs.\n\n*New in version 2.1.1*\n',
      in: 'query',
      name: 'only_active',
      required: false,
      schema: { default: true, type: 'boolean' },
    },
  })

const OrderByParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The name of the field to order the results by.\nPrefix a field name with `-` to reverse the sort order.\n\n*New in version 2.1.0*\n',
      in: 'query',
      name: 'order_by',
      required: false,
      schema: { type: 'string' },
    },
  })

const PageLimitParamsSchema = z
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
      description: 'The numbers of items to return.',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { default: 100, type: 'integer' },
    },
  })

const PageOffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of items to skip before starting to collect the result set.',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { minimum: 0, type: 'integer' },
    },
  })

const PoolNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The pool name.',
      in: 'path',
      name: 'pool_name',
      required: true,
      schema: { type: 'string' },
    },
  })

const RoleNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The role name',
      in: 'path',
      name: 'role_name',
      required: true,
      schema: { type: 'string' },
    },
  })

const TaskIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The task ID.',
      in: 'path',
      name: 'task_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const TaskTryNumberParamsSchema = z
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
      description: 'The task try number.',
      in: 'path',
      name: 'task_try_number',
      required: true,
      schema: { type: 'integer' },
    },
  })

const UpdateMaskParamsSchema = z
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
      description:
        'The fields to update on the resource. If absent or empty, all modifiable fields are updated.\nA comma-separated list of fully qualified names of fields.\n',
      explode: false,
      in: 'query',
      name: 'update_mask',
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const UsernameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The username of the user.\n\n*New in version 2.1.0*\n',
      in: 'path',
      name: 'username',
      required: true,
      schema: { type: 'string' },
    },
  })

const VariableKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The variable Key.',
      in: 'path',
      name: 'variable_key',
      required: true,
      schema: { format: 'path', type: 'string' },
    },
  })

const XComKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The XCom key.',
      in: 'path',
      name: 'xcom_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const BasicSecurityScheme = { scheme: 'basic', type: 'http' }

const GoogleOpenIdSecurityScheme = {
  openIdConnectUrl: 'https://accounts.google.com/.well-known/openid-configuration',
  type: 'openIdConnect',
}

const KerberosSecurityScheme = { scheme: 'negotiate', type: 'http' }

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Config'],
  summary: 'Get current configuration',
  operationId: 'get_config',
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: ConfigSchema,
          example: {
            sections: [
              {
                name: 'core',
                options: [{ key: 'dags_folder', value: '/home/user/my-dags-folder' }],
              },
              {
                name: 'smtp',
                options: [
                  { key: 'smtp_host', value: 'localhost' },
                  { key: 'smtp_mail_from', value: 'airflow@example.com' },
                ],
              },
            ],
          },
        },
        'text/plain': {
          schema: z.string(),
          example:
            '[core]\ndags_folder = /home/user/my-dags-folder\n[smtp]\nsmtp_host = localhost\nsmtp_mail_from =  airflow@example.com\n',
        },
      },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/connections',
  tags: ['Connection'],
  summary: 'List connections',
  operationId: 'get_connections',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ConnectionCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postConnectionsRoute = createRoute({
  method: 'post',
  path: '/connections',
  tags: ['Connection'],
  summary: 'Create a connection',
  operationId: 'post_connection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: ConnectionSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postConnectionsTestRoute = createRoute({
  method: 'post',
  path: '/connections/test',
  tags: ['Connection'],
  summary: 'Test a connection',
  description: 'Test a connection.\n\n*New in version 2.2.0*\n',
  operationId: 'test_connection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ConnectionTestSchema } },
    },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/connections/{connection_id}',
  tags: ['Connection'],
  summary: 'Get a connection',
  operationId: 'get_connection',
  request: { params: z.object({ connection_id: ConnectionIDParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: ConnectionSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deleteConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/connections/{connection_id}',
  tags: ['Connection'],
  summary: 'Delete a connection',
  operationId: 'delete_connection',
  request: { params: z.object({ connection_id: ConnectionIDParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/connections/{connection_id}',
  tags: ['Connection'],
  summary: 'Update a connection',
  operationId: 'patch_connection',
  request: {
    params: z.object({ connection_id: ConnectionIDParamsSchema }),
    query: z.object({ update_mask: UpdateMaskParamsSchema }),
    body: { content: { 'application/json': { schema: ConnectionSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: ConnectionSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagSourcesFileTokenRoute = createRoute({
  method: 'get',
  path: '/dagSources/{file_token}',
  tags: ['DAG'],
  summary: 'Get a source code',
  description: 'Get a source code using file token.\n',
  operationId: 'get_dag_source',
  request: { params: z.object({ file_token: FileTokenParamsSchema }) },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: z.object({ content: z.string().exactOptional() }).openapi({ required: [] }),
        },
        'plain/text': { schema: z.string() },
      },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
    406: NotAcceptableResponse,
  },
})

export const getDagWarningsRoute = createRoute({
  method: 'get',
  path: '/dagWarnings',
  tags: ['DagWarning'],
  summary: 'List dag warnings',
  operationId: 'get_dag_warnings',
  request: {
    query: z.object({
      dag_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, only return DAG warnings with this dag_id.',
            in: 'query',
            name: 'dag_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      warning_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, only return DAG warnings with this type.',
            in: 'query',
            name: 'warning_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DagWarningCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getDagsRoute = createRoute({
  method: 'get',
  path: '/dags',
  tags: ['DAG'],
  summary: 'List DAGs',
  description:
    'List DAGs in the database.\n`dag_id_pattern` can be set to match dags of a specific pattern\n',
  operationId: 'get_dags',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
      tags: FilterTagsParamsSchema,
      only_active: OnlyActiveParamsSchema,
      dag_id_pattern: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, only return DAGs with dag_ids matching this pattern.\n',
            in: 'query',
            name: 'dag_id_pattern',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DAGCollectionSchema } },
    },
    401: UnauthenticatedResponse,
  },
})

export const patchDagsRoute = createRoute({
  method: 'patch',
  path: '/dags',
  tags: ['DAG'],
  summary: 'Update DAGs',
  description:
    'Update DAGs of a given dag_id_pattern using UpdateMask.\nThis endpoint allows specifying `~` as the dag_id_pattern to update all DAGs.\n*New in version 2.3.0*\n',
  operationId: 'patch_dags',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      tags: FilterTagsParamsSchema,
      update_mask: UpdateMaskParamsSchema,
      only_active: OnlyActiveParamsSchema,
      dag_id_pattern: z
        .string()
        .openapi({
          param: {
            description: 'If set, only update DAGs with dag_ids matching this pattern.\n',
            in: 'query',
            name: 'dag_id_pattern',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DAGSchema, example: { is_paused: true } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DAGCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}',
  tags: ['DAG'],
  summary: 'Get basic information about a DAG',
  description:
    'Presents only information available in database (DAGModel).\nIf you need detailed information, consider using GET /dags/{dag_id}/details.\n',
  operationId: 'get_dag',
  request: { params: z.object({ dag_id: DAGIDParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deleteDagsDagIdRoute = createRoute({
  method: 'delete',
  path: '/dags/{dag_id}',
  tags: ['DAG'],
  summary: 'Delete a DAG',
  description:
    'Deletes all metadata related to the DAG, including finished DAG Runs and Tasks.\nLogs are not deleted. This action cannot be undone.\n\n*New in version 2.2.0*\n',
  operationId: 'delete_dag',
  request: { params: z.object({ dag_id: DAGIDParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
    409: AlreadyExistsResponse,
  },
})

export const patchDagsDagIdRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}',
  tags: ['DAG'],
  summary: 'Update a DAG',
  operationId: 'patch_dag',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema }),
    query: z.object({ update_mask: UpdateMaskParamsSchema }),
    body: {
      content: { 'application/json': { schema: DAGSchema, example: { is_paused: true } } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const postDagsDagIdClearTaskInstancesRoute = createRoute({
  method: 'post',
  path: '/dags/{dag_id}/clearTaskInstances',
  tags: ['DAG'],
  summary: 'Clear a set of task instances',
  description:
    'Clears a set of task instances associated with the DAG for a specified date range.\n',
  operationId: 'post_clear_task_instances',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema }),
    body: {
      description: 'Parameters of action',
      content: { 'application/json': { schema: ClearTaskInstancesSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceReferenceCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns',
  tags: ['DAGRun'],
  summary: 'List DAG runs',
  description:
    'This endpoint allows specifying `~` as the dag_id to retrieve DAG runs for all DAGs.\n',
  operationId: 'get_dag_runs',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema }),
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      execution_date_gte: FilterExecutionDateGTEParamsSchema,
      execution_date_lte: FilterExecutionDateLTEParamsSchema,
      start_date_gte: FilterStartDateGTEParamsSchema,
      start_date_lte: FilterStartDateLTEParamsSchema,
      end_date_gte: FilterEndDateGTEParamsSchema,
      end_date_lte: FilterEndDateLTEParamsSchema,
      state: FilterStateParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of DAG runs.',
      content: { 'application/json': { schema: DAGRunCollectionSchema } },
    },
    401: UnauthenticatedResponse,
  },
})

export const postDagsDagIdDagRunsRoute = createRoute({
  method: 'post',
  path: '/dags/{dag_id}/dagRuns',
  tags: ['DAGRun'],
  summary: 'Trigger a new DAG run',
  operationId: 'post_dag_run',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema }),
    body: { content: { 'application/json': { schema: DAGRunSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGRunSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
    409: AlreadyExistsResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}',
  tags: ['DAGRun'],
  summary: 'Get a DAG run',
  operationId: 'get_dag_run',
  request: { params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGRunSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deleteDagsDagIdDagRunsDagRunIdRoute = createRoute({
  method: 'delete',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}',
  tags: ['DAGRun'],
  summary: 'Delete a DAG run',
  operationId: 'delete_dag_run',
  request: { params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchDagsDagIdDagRunsDagRunIdRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}',
  tags: ['DAGRun'],
  summary: 'Modify a DAG run',
  description: 'Modify a DAG run.\n\n*New in version 2.2.0*\n',
  operationId: 'update_dag_run_state',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateDagRunStateSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGRunSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const postDagsDagIdDagRunsDagRunIdClearRoute = createRoute({
  method: 'post',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/clear',
  tags: ['DAGRun'],
  summary: 'Clear a DAG run',
  description: 'Clear a DAG run.\n\n*New in version 2.4.0*\n',
  operationId: 'clear_dag_run',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }),
    body: { content: { 'application/json': { schema: ClearDagRunSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGRunSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchDagsDagIdDagRunsDagRunIdSetNoteRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/setNote',
  tags: ['DAGRun'],
  summary: 'Update the DagRun note.',
  description: 'Update the manual user note of a DagRun.\n\n*New in version 2.5.0*\n',
  operationId: 'set_dag_run_note',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }),
    body: {
      description: 'Parameters of set DagRun note.',
      content: { 'application/json': { schema: SetDagRunNoteSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGRunSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances',
  tags: ['TaskInstance'],
  summary: 'List task instances',
  description:
    'This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs.\n',
  operationId: 'get_task_instances',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }),
    query: z.object({
      execution_date_gte: FilterExecutionDateGTEParamsSchema,
      execution_date_lte: FilterExecutionDateLTEParamsSchema,
      start_date_gte: FilterStartDateGTEParamsSchema,
      start_date_lte: FilterStartDateLTEParamsSchema,
      end_date_gte: FilterEndDateGTEParamsSchema,
      end_date_lte: FilterEndDateLTEParamsSchema,
      duration_gte: FilterDurationGTEParamsSchema,
      duration_lte: FilterDurationLTEParamsSchema,
      state: FilterStateParamsSchema,
      pool: FilterPoolParamsSchema,
      queue: FilterQueueParamsSchema,
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
  tags: ['TaskInstance'],
  summary: 'Get a task instance',
  operationId: 'get_task_instance',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
  tags: ['TaskInstance'],
  summary: 'Updates the state of a task instance',
  description: 'Updates the state for single task instance.\n*New in version 2.5.0*\n',
  operationId: 'patch_task_instance',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
    }),
    body: {
      description: 'Parameters of action',
      content: { 'application/json': { schema: UpdateTaskInstanceSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceReferenceSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links',
  tags: ['TaskInstance'],
  summary: 'List extra links',
  description: 'List extra links for task instance.\n',
  operationId: 'get_extra_links',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ExtraLinkCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped',
  tags: ['TaskInstance'],
  summary: 'List mapped task instances',
  description: 'Get details of all mapped task instances.\n\n*New in version 2.3.0*\n',
  operationId: 'get_mapped_task_instances',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
    }),
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      execution_date_gte: FilterExecutionDateGTEParamsSchema,
      execution_date_lte: FilterExecutionDateLTEParamsSchema,
      start_date_gte: FilterStartDateGTEParamsSchema,
      start_date_lte: FilterStartDateLTEParamsSchema,
      end_date_gte: FilterEndDateGTEParamsSchema,
      end_date_lte: FilterEndDateLTEParamsSchema,
      duration_gte: FilterDurationGTEParamsSchema,
      duration_lte: FilterDurationLTEParamsSchema,
      state: FilterStateParamsSchema,
      pool: FilterPoolParamsSchema,
      queue: FilterQueueParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number}',
  tags: ['TaskInstance'],
  summary: 'Get logs',
  description: 'Get logs for a specific task instance and its try number.',
  operationId: 'get_log',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
      task_try_number: TaskTryNumberParamsSchema,
    }),
    query: z.object({
      full_content: FullContentParamsSchema,
      map_index: FilterMapIndexParamsSchema,
      token: ContinuationTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: z
            .object({
              content: z.string().exactOptional(),
              continuation_token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/plain': { schema: z.string() },
      },
    },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/setNote',
  tags: ['TaskInstance'],
  summary: 'Update the TaskInstance note.',
  description:
    'Update the manual user note of a non-mapped Task Instance.\n\n*New in version 2.5.0*\n',
  operationId: 'set_task_instance_note',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
    }),
    body: {
      description: 'Parameters of set Task Instance note.',
      content: { 'application/json': { schema: SetTaskInstanceNoteSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceSchema } },
    },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries',
  tags: ['XCom'],
  summary: 'List XCom entries',
  description:
    "This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCOM entries for for all DAGs, DAG runs and task instances. XCom values won't be returned as they can be large. Use this endpoint to get a list of XCom entries and then fetch individual entry to get value.",
  operationId: 'get_xcom_entries',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
    }),
    query: z.object({ limit: PageLimitParamsSchema, offset: PageOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: XComCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}',
  tags: ['XCom'],
  summary: 'Get an XCom entry',
  operationId: 'get_xcom_entry',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
      xcom_key: XComKeyParamsSchema,
    }),
    query: z.object({
      deserialize: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to deserialize an XCom value when using a custom XCom backend.\n\nThe XCom API endpoint calls `orm_deserialize_value` by default since an XCom may contain value\nthat is potentially expensive to deserialize in the web server. Setting this to true overrides\nthe consideration, and calls `deserialize_value` instead.\n\nThis parameter is not meaningful when using the default XCom backend.\n\n*New in version 2.4.0*\n',
            in: 'query',
            name: 'deserialize',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: XComSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}',
  tags: ['TaskInstance'],
  summary: 'Get a mapped task instance',
  description: 'Get details of a mapped task instance.\n\n*New in version 2.3.0*\n',
  operationId: 'get_mapped_task_instance',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
      map_index: MapIndexParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}',
  tags: ['TaskInstance'],
  summary: 'Updates the state of a mapped task instance',
  description: 'Updates the state for single mapped task instance.\n*New in version 2.5.0*\n',
  operationId: 'patch_mapped_task_instance',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
      map_index: MapIndexParamsSchema,
    }),
    body: {
      description: 'Parameters of action',
      content: { 'application/json': { schema: UpdateTaskInstanceSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceReferenceSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRoute = createRoute({
  method: 'patch',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/setNote',
  tags: ['TaskInstance'],
  summary: 'Update the TaskInstance note.',
  description: 'Update the manual user note of a mapped Task Instance.\n\n*New in version 2.5.0*\n',
  operationId: 'set_mapped_task_instance_note',
  request: {
    params: z.object({
      dag_id: DAGIDParamsSchema,
      dag_run_id: DAGRunIDParamsSchema,
      task_id: TaskIDParamsSchema,
      map_index: MapIndexParamsSchema,
    }),
    body: {
      description: 'Parameters of set Task Instance note.',
      content: { 'application/json': { schema: SetTaskInstanceNoteSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceSchema } },
    },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents',
  tags: ['DAGRun', 'Dataset'],
  summary: 'Get dataset events for a DAG run',
  description: 'Get datasets for a dag run.\n\n*New in version 2.4.0*\n',
  operationId: 'get_upstream_dataset_events',
  request: { params: z.object({ dag_id: DAGIDParamsSchema, dag_run_id: DAGRunIDParamsSchema }) },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DatasetEventCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdDetailsRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/details',
  tags: ['DAG'],
  summary: 'Get a simplified representation of DAG',
  description:
    'The response contains many DAG attributes, so the response can be large. If possible, consider using GET /dags/{dag_id}.\n',
  operationId: 'get_dag_details',
  request: { params: z.object({ dag_id: DAGIDParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DAGDetailSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdTasksRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/tasks',
  tags: ['DAG'],
  summary: 'Get tasks for DAG',
  operationId: 'get_tasks',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema }),
    query: z.object({ order_by: OrderByParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDagsDagIdTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/dags/{dag_id}/tasks/{task_id}',
  tags: ['DAG'],
  summary: 'Get simplified representation of a task',
  operationId: 'get_task',
  request: { params: z.object({ dag_id: DAGIDParamsSchema, task_id: TaskIDParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: TaskSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const postDagsDagIdUpdateTaskInstancesStateRoute = createRoute({
  method: 'post',
  path: '/dags/{dag_id}/updateTaskInstancesState',
  tags: ['DAG'],
  summary: 'Set a state of task instances',
  description: 'Updates the state for multiple task instances simultaneously.\n',
  operationId: 'post_set_task_instances_state',
  request: {
    params: z.object({ dag_id: DAGIDParamsSchema }),
    body: {
      description: 'Parameters of action',
      content: { 'application/json': { schema: UpdateTaskInstancesStateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceReferenceCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const postDagsTildeDagRunsListRoute = createRoute({
  method: 'post',
  path: '/dags/~/dagRuns/list',
  tags: ['DAGRun'],
  summary: 'List DAG runs (batch)',
  description:
    'This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limit.\n',
  operationId: 'get_dag_runs_batch',
  request: {
    body: { content: { 'application/json': { schema: ListDagRunsFormSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DAGRunCollectionSchema } },
    },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postDagsTildeDagRunsTildeTaskInstancesListRoute = createRoute({
  method: 'post',
  path: '/dags/~/dagRuns/~/taskInstances/list',
  tags: ['TaskInstance'],
  summary: 'List task instances (batch)',
  description:
    'List task instances from all DAGs and DAG runs.\nThis endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits.\n',
  operationId: 'get_task_instances_batch',
  request: {
    body: {
      content: { 'application/json': { schema: ListTaskInstanceFormSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: TaskInstanceCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDatasetsRoute = createRoute({
  method: 'get',
  path: '/datasets',
  tags: ['Dataset'],
  summary: 'List datasets',
  operationId: 'get_datasets',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
      uri_pattern: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, only return datasets with uris matching this pattern.\n',
            in: 'query',
            name: 'uri_pattern',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DatasetCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getDatasetsEventsRoute = createRoute({
  method: 'get',
  path: '/datasets/events',
  tags: ['Dataset'],
  summary: 'Get dataset events',
  description: 'Get dataset events',
  operationId: 'get_dataset_events',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
      dataset_id: FilterDatasetIDParamsSchema,
      source_dag_id: FilterSourceDAGIDParamsSchema,
      source_task_id: FilterSourceTaskIDParamsSchema,
      source_run_id: FilterSourceRunIDParamsSchema,
      source_map_index: FilterSourceMapIndexParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: DatasetEventCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getDatasetsUriRoute = createRoute({
  method: 'get',
  path: '/datasets/{uri}',
  tags: ['Dataset'],
  summary: 'Get a dataset',
  description: 'Get a dataset by uri.',
  operationId: 'get_dataset',
  request: { params: z.object({ uri: DatasetURIParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: DatasetSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getEventLogsRoute = createRoute({
  method: 'get',
  path: '/eventLogs',
  tags: ['EventLog'],
  summary: 'List log entries',
  description: 'List log entries from event log.',
  operationId: 'get_event_logs',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: EventLogCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getEventLogsEventLogIdRoute = createRoute({
  method: 'get',
  path: '/eventLogs/{event_log_id}',
  tags: ['EventLog'],
  summary: 'Get a log entry',
  operationId: 'get_event_log',
  request: { params: z.object({ event_log_id: EventLogIDParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: EventLogSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Monitoring'],
  summary: 'Get instance status',
  description:
    "Get the status of Airflow's metadatabase and scheduler. It includes info about\nmetadatabase and last heartbeat of scheduler.\n",
  operationId: 'get_health',
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: HealthInfoSchema } } },
  },
})

export const getImportErrorsRoute = createRoute({
  method: 'get',
  path: '/importErrors',
  tags: ['ImportError'],
  summary: 'List import errors',
  operationId: 'get_import_errors',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ImportErrorCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getImportErrorsImportErrorIdRoute = createRoute({
  method: 'get',
  path: '/importErrors/{import_error_id}',
  tags: ['ImportError'],
  summary: 'Get an import error',
  operationId: 'get_import_error',
  request: { params: z.object({ import_error_id: ImportErrorIDParamsSchema }) },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ImportErrorSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getPermissionsRoute = createRoute({
  method: 'get',
  path: '/permissions',
  tags: ['Permission'],
  summary: 'List permissions',
  description: 'Get a list of permissions.\n\n*New in version 2.1.0*\n',
  operationId: 'get_permissions',
  request: { query: z.object({ limit: PageLimitParamsSchema, offset: PageOffsetParamsSchema }) },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ActionCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getPluginsRoute = createRoute({
  method: 'get',
  path: '/plugins',
  tags: ['Plugin'],
  summary: 'Get a list of loaded plugins',
  description: 'Get a list of loaded plugins.\n\n*New in version 2.1.0*\n',
  operationId: 'get_plugins',
  request: { query: z.object({ limit: PageLimitParamsSchema, offset: PageOffsetParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PluginCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getPoolsRoute = createRoute({
  method: 'get',
  path: '/pools',
  tags: ['Pool'],
  summary: 'List pools',
  operationId: 'get_pools',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of pools.',
      content: { 'application/json': { schema: PoolCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postPoolsRoute = createRoute({
  method: 'post',
  path: '/pools',
  tags: ['Pool'],
  summary: 'Create a pool',
  operationId: 'post_pool',
  request: { body: { content: { 'application/json': { schema: PoolSchema } }, required: true } },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: PoolSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getPoolsPoolNameRoute = createRoute({
  method: 'get',
  path: '/pools/{pool_name}',
  tags: ['Pool'],
  summary: 'Get a pool',
  operationId: 'get_pool',
  request: { params: z.object({ pool_name: PoolNameParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: PoolSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deletePoolsPoolNameRoute = createRoute({
  method: 'delete',
  path: '/pools/{pool_name}',
  tags: ['Pool'],
  summary: 'Delete a pool',
  operationId: 'delete_pool',
  request: { params: z.object({ pool_name: PoolNameParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchPoolsPoolNameRoute = createRoute({
  method: 'patch',
  path: '/pools/{pool_name}',
  tags: ['Pool'],
  summary: 'Update a pool',
  operationId: 'patch_pool',
  request: {
    params: z.object({ pool_name: PoolNameParamsSchema }),
    query: z.object({ update_mask: UpdateMaskParamsSchema }),
    body: { content: { 'application/json': { schema: PoolSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: PoolSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
    409: AlreadyExistsResponse,
  },
})

export const getProvidersRoute = createRoute({
  method: 'get',
  path: '/providers',
  tags: ['Provider'],
  summary: 'List providers',
  description: 'Get a list of providers.\n\n*New in version 2.1.0*\n',
  operationId: 'get_providers',
  responses: {
    200: {
      description: 'List of providers.',
      content: {
        'application/json': { schema: ProviderCollectionSchema.and(CollectionInfoSchema) },
      },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getRolesRoute = createRoute({
  method: 'get',
  path: '/roles',
  tags: ['Role'],
  summary: 'List roles',
  description: 'Get a list of roles.\n\n*New in version 2.1.0*\n',
  operationId: 'get_roles',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: RoleCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postRolesRoute = createRoute({
  method: 'post',
  path: '/roles',
  tags: ['Role'],
  summary: 'Create a role',
  description: 'Create a new role.\n\n*New in version 2.1.0*\n',
  operationId: 'post_role',
  request: { body: { content: { 'application/json': { schema: RoleSchema } }, required: true } },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: RoleSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getRolesRoleNameRoute = createRoute({
  method: 'get',
  path: '/roles/{role_name}',
  tags: ['Role'],
  summary: 'Get a role',
  description: 'Get a role.\n\n*New in version 2.1.0*\n',
  operationId: 'get_role',
  request: { params: z.object({ role_name: RoleNameParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: RoleSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deleteRolesRoleNameRoute = createRoute({
  method: 'delete',
  path: '/roles/{role_name}',
  tags: ['Role'],
  summary: 'Delete a role',
  description: 'Delete a role.\n\n*New in version 2.1.0*\n',
  operationId: 'delete_role',
  request: { params: z.object({ role_name: RoleNameParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchRolesRoleNameRoute = createRoute({
  method: 'patch',
  path: '/roles/{role_name}',
  tags: ['Role'],
  summary: 'Update a role',
  description: 'Update a role.\n\n*New in version 2.1.0*\n',
  operationId: 'patch_role',
  request: {
    params: z.object({ role_name: RoleNameParamsSchema }),
    query: z.object({ update_mask: UpdateMaskParamsSchema }),
    body: { content: { 'application/json': { schema: RoleSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: RoleSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['User'],
  summary: 'List users',
  description: 'Get a list of users.\n\n*New in version 2.1.0*\n',
  operationId: 'get_users',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: UserCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['User'],
  summary: 'Create a user',
  description: 'Create a new user with unique username and email.\n\n*New in version 2.2.0*\n',
  operationId: 'post_user',
  request: { body: { content: { 'application/json': { schema: UserSchema } }, required: true } },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: UserSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    409: AlreadyExistsResponse,
  },
})

export const getUsersUsernameRoute = createRoute({
  method: 'get',
  path: '/users/{username}',
  tags: ['User'],
  summary: 'Get a user',
  description: 'Get a user with a specific username.\n\n*New in version 2.1.0*\n',
  operationId: 'get_user',
  request: { params: z.object({ username: UsernameParamsSchema }) },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: UserCollectionItemSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deleteUsersUsernameRoute = createRoute({
  method: 'delete',
  path: '/users/{username}',
  tags: ['User'],
  summary: 'Delete a user',
  description: 'Delete a user with a specific username.\n\n*New in version 2.2.0*\n',
  operationId: 'delete_user',
  request: { params: z.object({ username: UsernameParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchUsersUsernameRoute = createRoute({
  method: 'patch',
  path: '/users/{username}',
  tags: ['User'],
  summary: 'Update a user',
  description: 'Update fields for a user.\n\n*New in version 2.2.0*\n',
  operationId: 'patch_user',
  request: {
    params: z.object({ username: UsernameParamsSchema }),
    query: z.object({ update_mask: UpdateMaskParamsSchema }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: RoleSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getVariablesRoute = createRoute({
  method: 'get',
  path: '/variables',
  tags: ['Variable'],
  summary: 'List variables',
  description: 'The collection does not contain data. To get data, you must get a single entity.',
  operationId: 'get_variables',
  request: {
    query: z.object({
      limit: PageLimitParamsSchema,
      offset: PageOffsetParamsSchema,
      order_by: OrderByParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: VariableCollectionSchema } },
    },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const postVariablesRoute = createRoute({
  method: 'post',
  path: '/variables',
  tags: ['Variable'],
  summary: 'Create a variable',
  operationId: 'post_variables',
  request: {
    body: { content: { 'application/json': { schema: VariableSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: VariableSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
  },
})

export const getVariablesVariableKeyRoute = createRoute({
  method: 'get',
  path: '/variables/{variable_key}',
  tags: ['Variable'],
  summary: 'Get a variable',
  description: 'Get a variable by key.',
  operationId: 'get_variable',
  request: { params: z.object({ variable_key: VariableKeyParamsSchema }) },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: VariableSchema } } },
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const deleteVariablesVariableKeyRoute = createRoute({
  method: 'delete',
  path: '/variables/{variable_key}',
  tags: ['Variable'],
  summary: 'Delete a variable',
  operationId: 'delete_variable',
  request: { params: z.object({ variable_key: VariableKeyParamsSchema }) },
  responses: {
    204: { description: 'Success.' },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const patchVariablesVariableKeyRoute = createRoute({
  method: 'patch',
  path: '/variables/{variable_key}',
  tags: ['Variable'],
  summary: 'Update a variable',
  description: 'Update a variable by key.',
  operationId: 'patch_variable',
  request: {
    params: z.object({ variable_key: VariableKeyParamsSchema }),
    query: z.object({ update_mask: UpdateMaskParamsSchema }),
    body: { content: { 'application/json': { schema: VariableSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: VariableSchema } } },
    400: BadRequestResponse,
    401: UnauthenticatedResponse,
    403: PermissionDeniedResponse,
    404: NotFoundResponse,
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['Monitoring'],
  summary: 'Get version information',
  operationId: 'get_version',
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: VersionInfoSchema } },
    },
  },
})
