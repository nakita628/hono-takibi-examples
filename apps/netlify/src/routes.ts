import { createRoute, z } from '@hono/zod-openapi'

const CreateDatabaseRequestSchema = z
  .object({
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The region where the database should be created. Defaults to the site's functions region if not specified.",
      }),
  })
  .openapi({ description: 'Request body for creating a database', required: [] })
  .openapi('CreateDatabaseRequest')

const DatabaseResponseSchema = z
  .object({
    connection_string: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connection string for the database' }),
  })
  .openapi({ description: 'Response containing the database connection string', required: [] })
  .openapi('DatabaseResponse')

const CreateDatabaseBranchRequestSchema = z
  .object({
    parent_branch_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the parent branch to create the new branch from. Defaults to the production branch if not specified.',
      }),
    branch_id: z.string().openapi({ description: 'The branch identifier' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Arbitrary metadata to associate with the branch' }),
  })
  .openapi({ description: 'Request body for creating a database branch', required: ['branch_id'] })
  .openapi('CreateDatabaseBranchRequest')

const DatabaseBranchResponseSchema = z
  .object({
    connection_string: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connection string for the database branch' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata associated with the branch' }),
  })
  .openapi({
    description: 'Response containing the database branch connection string',
    required: [],
  })
  .openapi('DatabaseBranchResponse')

const DatabaseBranchComputeSchema = z
  .object({
    current_state: z
      .enum(['active', 'idle'])
      .exactOptional()
      .openapi({ description: 'The current state of the compute endpoint' }),
    autoscaling_limit_min_cu: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Minimum compute units for autoscaling' }),
    autoscaling_limit_max_cu: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Maximum compute units for autoscaling' }),
    suspend_timeout_seconds: z
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
        description: 'Seconds of inactivity before the compute endpoint is suspended',
      }),
    last_active: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the compute endpoint was last active' }),
  })
  .openapi({ description: 'Compute endpoint status for a branch', required: [] })
  .openapi('DatabaseBranchCompute')

const DatabaseBranchDetailSchema = z
  .object({
    branch_id: z.string().exactOptional().openapi({ description: 'The branch identifier' }),
    name: z.string().exactOptional().openapi({ description: 'The branch name' }),
    connection_string: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connection string for the branch' }),
    state: z
      .enum(['init', 'creating', 'resetting', 'ready', 'archived'])
      .exactOptional()
      .openapi({ description: 'The current state of the branch' }),
    logical_size_bytes: z
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
        description: 'The logical size of the branch in bytes',
      }),
    created_at: z.string().exactOptional().openapi({ description: 'When the branch was created' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the branch was last updated' }),
    last_active_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the branch was last active' }),
    compute: DatabaseBranchComputeSchema.exactOptional(),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata associated with the branch' }),
  })
  .openapi({ description: 'Detailed information about a database branch', required: [] })
  .openapi('DatabaseBranchDetail')

const DatabaseBranchesResponseSchema = z
  .object({
    branches: z
      .array(DatabaseBranchDetailSchema)
      .exactOptional()
      .openapi({ description: 'List of database branches' }),
  })
  .openapi({ description: 'Response containing a list of database branches', required: [] })
  .openapi('DatabaseBranchesResponse')

const DatabaseSnapshotMetadataSchema = z
  .object({
    deploy: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Deploy information associated with the snapshot' }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source that created the snapshot' }),
  })
  .openapi({ description: 'Metadata associated with a snapshot', required: [] })
  .openapi('DatabaseSnapshotMetadata')

const CreateDatabaseSnapshotRequestSchema = z
  .object({
    branch_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the branch to snapshot. Defaults to "production" if not specified.',
      }),
    name: z.string().exactOptional().openapi({ description: 'A name for the snapshot' }),
    metadata: DatabaseSnapshotMetadataSchema.exactOptional(),
  })
  .openapi({ description: 'Request body for creating a database snapshot', required: [] })
  .openapi('CreateDatabaseSnapshotRequest')

const DatabaseSnapshotSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the snapshot' }),
    source_branch_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the branch that was snapshotted' }),
    manual: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this snapshot was manually created' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the snapshot was created' }),
    expires_at: z.string().exactOptional().openapi({ description: 'When the snapshot expires' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The point-in-time timestamp of the snapshot' }),
    metadata: DatabaseSnapshotMetadataSchema.exactOptional(),
  })
  .openapi({ description: 'A point-in-time snapshot of a database branch', required: [] })
  .openapi('DatabaseSnapshot')

const DatabaseSnapshotsResponseSchema = z
  .object({
    snapshots: z
      .array(DatabaseSnapshotSchema)
      .exactOptional()
      .openapi({ description: 'List of database snapshots' }),
  })
  .openapi({ description: 'Response containing a list of database snapshots', required: [] })
  .openapi('DatabaseSnapshotsResponse')

const RestoreDatabaseSnapshotRequestSchema = z
  .object({
    branch_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the branch to restore the snapshot to. Defaults to "production" if not specified.',
      }),
  })
  .openapi({ description: 'Request body for restoring a database snapshot', required: [] })
  .openapi('RestoreDatabaseSnapshotRequest')

const DatabaseComputeSettingsRequestSchema = z
  .object({
    min_cu: z
      .float64()
      .min(0.25)
      .max(16)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Minimum compute units (0.25 to 16.0). Must be less than or equal to max_cu.',
      }),
    max_cu: z
      .float64()
      .min(0.25)
      .max(16)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum compute units (0.25 to 16.0). Must be greater than or equal to min_cu. max_cu - min_cu must not exceed 8.0.',
      }),
    sleep_timeout_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-1n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: -1,
        description:
          'Seconds of inactivity before the compute endpoint is suspended. Use -1 for always on, or a non-negative value.',
      }),
  })
  .openapi({
    description:
      'Request body for setting compute settings. All fields are optional; only provided fields are updated.',
    required: [],
  })
  .openapi('DatabaseComputeSettingsRequest')

const DatabaseComputeSettingsSchema = z
  .object({
    min_cu: z.float64().exactOptional().openapi({ description: 'Minimum compute units' }),
    max_cu: z.float64().exactOptional().openapi({ description: 'Maximum compute units' }),
    sleep_timeout_seconds: z
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
        description: 'Seconds of inactivity before suspension',
      }),
  })
  .openapi({ description: 'Compute settings for a database or branch', required: [] })
  .openapi('DatabaseComputeSettings')

const RunDatabaseMigrationsRequestSchema = z
  .object({
    dry_run: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, validates migrations without applying them.' }),
  })
  .openapi({ description: 'Request body for running database migrations', required: [] })
  .openapi('RunDatabaseMigrationsRequest')

const ResetDatabaseBranchRequestSchema = z
  .object({
    source_branch_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the branch to re-fork the target branch from. Defaults to "production" if not specified.',
      }),
  })
  .openapi({ description: 'Request body for resetting a database branch', required: [] })
  .openapi('ResetDatabaseBranchRequest')

const ResetDatabaseBranchResponseSchema = z
  .object({
    reset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the branch was actually re-forked. False when the target was already in sync with the source and `force=true` was not set.',
      }),
    connection_string: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connection string for the reset (or unchanged) branch' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata associated with the branch' }),
  })
  .openapi({ description: 'Response for a database branch reset', required: [] })
  .openapi('ResetDatabaseBranchResponse')

const DatabaseMigrationSchema = z
  .object({
    version: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The migration version number' }),
    name: z.string().exactOptional().openapi({ description: 'The migration name' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to the migration file in the deploy bundle' }),
    applied: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this migration has been applied to the branch' }),
  })
  .openapi({ description: 'A migration available to a database branch', required: [] })
  .openapi('DatabaseMigration')

const ListDatabaseMigrationsResponseSchema = z
  .object({
    migrations: z
      .array(DatabaseMigrationSchema)
      .exactOptional()
      .openapi({ description: 'List of migrations' }),
  })
  .openapi({ description: 'Response containing the list of migrations for a branch', required: [] })
  .openapi('ListDatabaseMigrationsResponse')

const DatabaseMigrationDetailSchema = z
  .object({
    version: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The migration version number' }),
    name: z.string().exactOptional().openapi({ description: 'The migration name' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to the migration file in the deploy bundle' }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The raw contents of the migration file' }),
  })
  .openapi({ description: 'A migration with its file contents', required: [] })
  .openapi('DatabaseMigrationDetail')

const DeployValidationsReportSecretScanResultSchema = z
  .object({
    scannedFilesCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of files scanned' }),
    secretsScanMatches: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of secrets scan matches' }),
  })
  .openapi({ required: [] })
  .openapi('DeployValidationsReportSecretScanResult')

const DeployValidationsReportSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the deploy validations report' }),
    deploy_id: z.string().exactOptional().openapi({ description: 'The id of the deploy' }),
    secret_scan_result: DeployValidationsReportSecretScanResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeployValidationsReport')

const SplitTestSetupSchema = z
  .object({ branch_tests: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('SplitTestSetup')

const SplitTestSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    path: z.string().exactOptional(),
    branches: z.array(z.object({})).exactOptional(),
    active: z.boolean().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    unpublished_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SplitTest')

const SplitTestsSchema = z.array(SplitTestSchema).openapi('SplitTests')

const ServiceInstanceSchema = z
  .object({
    id: z.string().exactOptional(),
    url: z.string().exactOptional(),
    config: z.object({}).exactOptional(),
    external_attributes: z.object({}).exactOptional(),
    service_slug: z.string().exactOptional(),
    service_path: z.string().exactOptional(),
    service_name: z.string().exactOptional(),
    env: z.object({}).exactOptional(),
    snippets: z.array(z.object({})).exactOptional(),
    auth_url: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceInstance')

const ServiceSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    service_path: z.string().exactOptional(),
    long_description: z.string().exactOptional(),
    description: z.string().exactOptional(),
    events: z.array(z.object({})).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    icon: z.string().exactOptional(),
    manifest_url: z.string().exactOptional(),
    environments: z.array(z.string()).exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Service')

const FunctionScheduleSchema = z
  .object({ name: z.string().exactOptional(), cron: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('FunctionSchedule')

const DeploySchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    user_id: z.string().exactOptional(),
    build_id: z.string().exactOptional(),
    state: z.string().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
    ssl_url: z.string().exactOptional(),
    admin_url: z.string().exactOptional(),
    deploy_url: z.string().exactOptional(),
    deploy_ssl_url: z.string().exactOptional(),
    screenshot_url: z.string().exactOptional(),
    review_id: z.number().exactOptional(),
    draft: z.boolean().exactOptional(),
    required: z.array(z.string()).exactOptional(),
    required_functions: z.array(z.string()).exactOptional(),
    required_edge_functions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of code_shas for the edge-function bundles that need to be uploaded to\ncomplete the deploy.\n',
      }),
    required_server: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The SHA256 digest of the deploy's Netlify Server bundle, when it still needs to\nbe uploaded to complete the deploy. A deploy has at most one server, so this\nholds either nothing or a single digest.\n",
      }),
    error_message: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    commit_ref: z.string().exactOptional(),
    commit_url: z.string().exactOptional(),
    skipped: z.boolean().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    published_at: z.string().exactOptional(),
    title: z.string().exactOptional(),
    context: z.string().exactOptional(),
    locked: z.boolean().exactOptional(),
    review_url: z.string().exactOptional(),
    framework: z.string().exactOptional(),
    skew_protection_token: z.string().exactOptional(),
    function_schedules: z.array(FunctionScheduleSchema).exactOptional(),
    functions_region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The functions region for this deploy as an airport code.\n' }),
    functions_region_overrides: z
      .array(
        z
          .object({ name: z.string().exactOptional(), region: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Functions in the deploy that explicitly specify their own region\n(airport code).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('Deploy')

const RepoInfoSchema = z
  .object({
    id: z.int().exactOptional(),
    provider: z.string().exactOptional(),
    deploy_key_id: z.string().exactOptional(),
    repo_path: z.string().exactOptional(),
    repo_branch: z.string().exactOptional(),
    dir: z.string().exactOptional(),
    functions_dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The directory where Netlify can find your compiled functions to deploy them. Defaults to netlify/functions if not set. You can also define and override this setting in your project’s netlify.toml file.',
      }),
    cmd: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The build command to run. This is the command that Netlify runs to build your site. If a site has a netlify.toml file with a build command it will override this value.',
      }),
    allowed_branches: z.array(z.string()).exactOptional(),
    public_repo: z.boolean().exactOptional(),
    private_logs: z.boolean().exactOptional(),
    repo_url: z.string().exactOptional(),
    env: z.record(z.string(), z.string()).exactOptional(),
    installation_id: z.int().exactOptional(),
    stop_builds: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, Netlify will not build your project automatically. You can build locally via the CLI and then publish new deploys manually via the CLI or the API.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RepoInfo')

const SiteSchema = z
  .object({
    id: z.string().exactOptional(),
    state: z.string().exactOptional(),
    plan: z.string().exactOptional(),
    name: z.string().exactOptional(),
    custom_domain: z.string().exactOptional(),
    domain_aliases: z.array(z.string()).exactOptional(),
    branch_deploy_custom_domain: z.string().exactOptional(),
    deploy_preview_custom_domain: z.string().exactOptional(),
    password: z.string().exactOptional(),
    notification_email: z.string().exactOptional(),
    url: z.string().exactOptional(),
    ssl_url: z.string().exactOptional(),
    admin_url: z.string().exactOptional(),
    screenshot_url: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    user_id: z.string().exactOptional(),
    session_id: z.string().exactOptional(),
    ssl: z.boolean().exactOptional(),
    force_ssl: z.boolean().exactOptional(),
    managed_dns: z.boolean().exactOptional(),
    deploy_url: z.string().exactOptional(),
    published_deploy: DeploySchema.exactOptional(),
    account_id: z.string().exactOptional(),
    account_name: z.string().exactOptional(),
    account_slug: z.string().exactOptional(),
    git_provider: z.string().exactOptional(),
    deploy_hook: z.string().exactOptional(),
    capabilities: z.record(z.string(), z.object({})).exactOptional(),
    processing_settings: z
      .object({
        html: z
          .object({ pretty_urls: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    build_settings: RepoInfoSchema.exactOptional(),
    id_domain: z.string().exactOptional(),
    default_hooks_data: z
      .object({ access_token: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    build_image: z.string().exactOptional(),
    prerender: z.string().exactOptional(),
    functions_region: z.string().exactOptional(),
    prevent_non_git_prod_deploys: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Site')

const SiteSetupSchema = SiteSchema.and(
  z.object({ repo: RepoInfoSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SiteSetup')

const SubmissionSchema = z
  .object({
    id: z.string().exactOptional(),
    number: z.int32().exactOptional(),
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    company: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    body: z.string().exactOptional(),
    data: z.object({}).exactOptional(),
    created_at: z.string().exactOptional(),
    site_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Submission')

const EnvVarValueSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The environment variable value's universally unique ID",
        'x-faker': 'datatype.uuid',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: "The environment variable's unencrypted value",
        'x-faker': 'internet.password',
      }),
    context: z
      .enum(['all', 'dev', 'dev-server', 'branch-deploy', 'deploy-preview', 'production', 'branch'])
      .exactOptional()
      .openapi({
        description:
          'The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`.',
      }),
    context_parameter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An additional parameter for custom branches. Currently, this is used for specifying a branch name when `context=branch`.',
      }),
  })
  .openapi({ description: 'Environment variable value model definition', required: [] })
  .openapi('EnvVarValue')

const EnvVarUserSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's unique identifier", 'x-faker': 'datatype.number' }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({
        description: "The user's full name (first and last)",
        'x-faker': 'name.findName',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's email address", 'x-faker': 'internet.email' }),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "A URL pointing to the user's avatar",
        'x-faker': 'internet.avatar',
      }),
  })
  .openapi({ required: [] })
  .openapi('EnvVarUser')

const EnvVarSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The environment variable key, like ALGOLIA_ID (case-sensitive)',
        'x-faker': 'commerce.productName',
      }),
    scopes: z
      .array(z.enum(['builds', 'functions', 'runtime', 'post-processing']))
      .exactOptional()
      .openapi({ description: 'The scopes that this environment variable is set to' }),
    values: z
      .array(EnvVarValueSchema)
      .exactOptional()
      .openapi({
        description: 'An array of Value objects containing values and metadata',
        'x-faker': 'internet.password',
      }),
    is_secret: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Secret values are only readable by code running on Netlify's systems. With secrets, only the local development context values are readable from the UI, API, and CLI. By default, environment variable values are not secret.",
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp of when the value was last updated',
        'x-faker': 'date.past',
      }),
    updated_by: EnvVarUserSchema.exactOptional(),
  })
  .openapi({ description: 'Environment variable model definition', required: [] })
  .openapi('EnvVar')

const FormSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    paths: z.array(z.string()).exactOptional(),
    submission_count: z.int32().exactOptional(),
    fields: z.array(z.object({})).exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Form')

const HookTypeSchema = z
  .object({
    name: z.string().exactOptional(),
    events: z.array(z.string()).exactOptional(),
    fields: z.array(z.object({})).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HookType')

const HookSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    type: z.string().exactOptional(),
    event: z.string().exactOptional(),
    data: z.object({}).exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    disabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Hook')

const FileSchema = z
  .object({
    id: z.string().exactOptional(),
    path: z.string().exactOptional(),
    sha: z.string().exactOptional(),
    mime_type: z.string().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('File')

const FunctionSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    sha: z.string().exactOptional(),
    region: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Function')

const SnippetSchema = z
  .object({
    id: z.int32().exactOptional(),
    site_id: z.string().exactOptional(),
    title: z.string().exactOptional(),
    general: z.string().exactOptional(),
    general_position: z.string().exactOptional(),
    goal: z.string().exactOptional(),
    goal_position: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Snippet')

const PurgeSchema = z
  .object({
    site_id: z.string().exactOptional(),
    site_slug: z.string().exactOptional(),
    cache_tags: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Purge')

const DeployEnvironmentVariableSchema = z
  .object({
    key: z.string(),
    value: z.string(),
    is_secret: z.boolean(),
    scopes: z.array(z.enum(['builds', 'functions', 'runtime', 'post-processing'])),
  })
  .openapi({ required: ['key', 'value', 'scopes', 'is_secret'] })
  .openapi('DeployEnvironmentVariable')

const FunctionRouteSchema = z
  .object({
    pattern: z.string().exactOptional(),
    literal: z.string().exactOptional(),
    expression: z.string().exactOptional(),
    methods: z.array(z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'])).exactOptional(),
    prefer_static: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FunctionRoute')

const ExcludedFunctionRouteSchema = z
  .object({
    pattern: z.string().exactOptional(),
    literal: z.string().exactOptional(),
    expression: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExcludedFunctionRoute')

const TrafficRulesRateLimitConfigSchema = z
  .object({
    algorithm: z.literal('sliding_window').exactOptional(),
    window_size: z.int().exactOptional(),
    window_limit: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrafficRulesRateLimitConfig')

const TrafficRulesAggregateConfigSchema = z
  .object({
    keys: z
      .array(z.object({ type: z.enum(['ip', 'domain']).exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrafficRulesAggregateConfig')

const TrafficRulesConfigSchema = z
  .object({
    action: z
      .object({
        type: z.string().exactOptional(),
        config: z
          .object({
            to: z.string().exactOptional(),
            rate_limit_config: TrafficRulesRateLimitConfigSchema.exactOptional(),
            aggregate: TrafficRulesAggregateConfigSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TrafficRulesConfig')

const FunctionConfigSchema = z
  .object({
    display_name: z.string().exactOptional(),
    generator: z.string().exactOptional(),
    build_data: z.object({}).exactOptional(),
    memory: z
      .int()
      .exactOptional()
      .openapi({
        description: "The function's memory allocation in MB. Mutually exclusive with `vcpu`.\n",
      }),
    routes: z.array(FunctionRouteSchema).exactOptional(),
    excluded_routes: z.array(ExcludedFunctionRouteSchema).exactOptional(),
    priority: z.int().exactOptional(),
    region: z.string().exactOptional(),
    traffic_rules: TrafficRulesConfigSchema.exactOptional(),
    vcpu: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Number of vCPUs to provision for the function. Allowed range is\n0.5–2.\n',
      }),
    event_subscriptions: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FunctionConfig')

const DeployFilesSchema = z
  .object({
    files: z
      .object({})
      .exactOptional()
      .openapi({ description: 'A hash mapping file paths to SHA1 digests of the file contents.' }),
    zip: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          "A zip file containing the site files to deploy. Alternative to 'files'.\nTo use this field, set Content-Type to 'application/json' and include the zip content here.\nAlternatively, you can set Content-Type to 'application/zip' and send the zip as the raw request body (not as JSON).\n",
      }),
    draft: z.boolean().exactOptional(),
    async: z.boolean().exactOptional(),
    functions: z.object({}).exactOptional(),
    edge_functions: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "A hash mapping edge-function bundle formats to the code_sha of each bundle. The\nresponse's required_edge_functions lists which of these still need to be uploaded.\n",
      }),
    server: z
      .object({
        sha: z.string().openapi({ description: 'The SHA256 digest of the server bundle.' }),
        region: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Where the server runs. Defaults to the region configured at the site level\nwhen absent.\n',
          }),
        instance_size: z
          .enum(['small', 'medium', 'large'])
          .exactOptional()
          .openapi({
            description:
              'The size of the instances the server runs on. A default size is used when\nabsent.\n',
          }),
        routes: z
          .array(FunctionRouteSchema)
          .exactOptional()
          .openapi({ description: 'The paths the server handles.', 'x-omitempty': true }),
        excluded_routes: z
          .array(ExcludedFunctionRouteSchema)
          .exactOptional()
          .openapi({
            description: 'Paths within `routes` that the server does not handle.',
            'x-omitempty': true,
          }),
        runtime_version: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The runtime version the server was built for, such as `nodejs24.x`. A\ndefault version is used when absent.\n',
          }),
        scale: z
          .object({
            min: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 0,
                description:
                  'The minimum number of instances the server keeps running. Defaults to 0\nwhen absent.\n',
              }),
            max: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 1,
                description:
                  "The maximum number of instances the server scales to. Defaults to the\nhighest the account's plan allows when absent.\n",
              }),
          })
          .exactOptional()
          .openapi({ description: 'How many instances of the server run.', required: [] }),
      })
      .exactOptional()
      .openapi({
        description:
          "The deploy's Netlify Server. A deploy has at most one. The response's\nrequired_server says whether it still needs to be uploaded.\n",
        required: ['sha'],
      }),
    function_schedules: z.array(FunctionScheduleSchema).exactOptional(),
    functions_config: z.record(z.string(), FunctionConfigSchema).exactOptional(),
    branch: z.string().exactOptional(),
    framework: z.string().exactOptional(),
    framework_version: z.string().exactOptional(),
    environment: z
      .array(DeployEnvironmentVariableSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of deploy-specific environment variable data. Data specified this way applies only\nto this specific deploy and is merged into any existing environment variables set on the\naccount and site.\n\nDeploy-specific environment variable data takes precedence over account and site\nenvironment variable data: For example, a deploy-specific variable with the key `NODE_ENV`\nwill take priority over any existing site- and account-level environment variable data\nwith the key `NODE_ENV`.\n\nEnvironment variable data may be provided at one of two times:\n\n- When creating a new Deploy with deploy files (most common)\n- When finalizing an existing Deploy with deploy files\n\nOnce set, environment variables for a specific deploy cannot be modified. Subsequent\nattempts to modify environment variable data for a deploy will be ignored.\n',
      }),
  })
  .openapi({
    description:
      "Deploy files can be provided in two ways:\n1. As a JSON object using 'files' (a hash mapping file paths to SHA1 digests), OR\n2. As a zip file using one of these methods:\n   - Set Content-Type to 'application/zip' and send the zip file as the raw request body\n   - Include the zip file content in the 'zip' field of this JSON object with Content-Type 'application/json'\n",
    required: [],
  })
  .openapi('DeployFiles')

const PluginParamsSchema = z
  .object({ pinned_version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PluginParams')

const PluginSchema = z
  .object({ package: z.string().exactOptional(), pinned_version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Plugin')

const BuildStatusSchema = z
  .object({
    active: z.int().exactOptional(),
    pending_concurrency: z.int().exactOptional(),
    enqueued: z.int().exactOptional(),
    build_count: z.int().exactOptional(),
    minutes: z
      .object({
        current: z.int().exactOptional(),
        current_average_sec: z.int().exactOptional(),
        previous: z.int().exactOptional(),
        period_start_date: z.string().exactOptional(),
        period_end_date: z.string().exactOptional(),
        last_updated_at: z.string().exactOptional(),
        included_minutes: z.string().exactOptional(),
        included_minutes_with_packs: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('BuildStatus')

const BuildSchema = z
  .object({
    id: z.string().exactOptional(),
    deploy_id: z.string().exactOptional(),
    sha: z.string().exactOptional(),
    done: z.boolean().exactOptional(),
    error: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Build')

const BuildLogMsgSchema = z
  .object({
    message: z.string().exactOptional(),
    error: z.boolean().exactOptional(),
    section: z
      .enum(['initializing', 'building', 'deploying', 'cleanup', 'postprocessing'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuildLogMsg')

const PluginRunDataSchema = z
  .object({
    package: z.string().exactOptional(),
    version: z.string().exactOptional(),
    state: z.string().exactOptional(),
    reporting_event: z.string().exactOptional(),
    title: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PluginRunData')

const PluginRunSchema = PluginRunDataSchema.and(
  z.object({ deploy_id: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('PluginRun')

const MetadataSchema = z.object({}).openapi('Metadata')

const DnsZoneSetupSchema = z
  .object({
    account_slug: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DnsZoneSetup')

const DnsRecordSchema = z
  .object({
    id: z.string().exactOptional(),
    hostname: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.string().exactOptional(),
    ttl: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    priority: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    dns_zone_id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    flag: z.int().exactOptional(),
    tag: z.string().exactOptional(),
    managed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DnsRecord')

const DnsZoneSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    errors: z.array(z.string()).exactOptional(),
    supported_record_types: z.array(z.string()).exactOptional(),
    user_id: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    records: z.array(DnsRecordSchema).exactOptional(),
    dns_servers: z.array(z.string()).exactOptional(),
    account_id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    account_slug: z.string().exactOptional(),
    account_name: z.string().exactOptional(),
    domain: z.string().exactOptional(),
    ipv6_enabled: z.boolean().exactOptional(),
    dedicated: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DnsZone')

const DnsZonesSchema = z.array(DnsZoneSchema).openapi('DnsZones')

const DnsRecordCreateSchema = z
  .object({
    type: z.string().exactOptional(),
    hostname: z.string().exactOptional(),
    value: z.string().exactOptional(),
    ttl: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    priority: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    weight: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    port: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    flag: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    tag: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DnsRecordCreate')

const DnsRecordsSchema = z.array(DnsRecordSchema).openapi('DnsRecords')

const SniCertificateSchema = z
  .object({
    state: z.string().exactOptional(),
    domains: z.array(z.string()).exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    expires_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SniCertificate')

const TicketSchema = z
  .object({
    id: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    authorized: z.boolean().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Ticket')

const AccessTokenSchema = z
  .object({
    id: z.string().exactOptional(),
    access_token: z.string().exactOptional(),
    user_id: z.string().exactOptional(),
    user_email: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessToken')

const AssetSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    creator_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    state: z.string().exactOptional(),
    content_type: z.string().exactOptional(),
    url: z.string().exactOptional(),
    key: z.string().exactOptional(),
    visibility: z.string().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Asset')

const AssetFormSchema = z
  .object({
    url: z.string().exactOptional(),
    fields: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssetForm')

const AssetSignatureSchema = z
  .object({ form: AssetFormSchema.exactOptional(), asset: AssetSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AssetSignature')

const AssetPublicSignatureSchema = z
  .object({ url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AssetPublicSignature')

const DeployKeySchema = z
  .object({
    id: z.string().exactOptional(),
    public_key: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeployKey')

const MemberSchema = z
  .object({
    id: z.string().exactOptional(),
    full_name: z.string().exactOptional(),
    email: z.string().exactOptional(),
    avatar: z.string().exactOptional(),
    role: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Member')

const PaymentMethodSchema = z
  .object({
    id: z.string().exactOptional(),
    method_name: z.string().exactOptional(),
    type: z.string().exactOptional(),
    state: z.string().exactOptional(),
    data: z
      .object({
        card_type: z.string().exactOptional(),
        last4: z.string().exactOptional(),
        email: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentMethod')

const AccountTypeSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    capabilities: z.object({}).exactOptional(),
    monthly_dollar_price: z.int().exactOptional(),
    yearly_dollar_price: z.int().exactOptional(),
    monthly_seats_addon_dollar_price: z.int().exactOptional(),
    yearly_seats_addon_dollar_price: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountType')

const AccountSetupSchema = z
  .object({
    name: z.string(),
    type_id: z.string(),
    payment_method_id: z.string().exactOptional(),
    period: z.enum(['monthly', 'yearly']).exactOptional(),
    extra_seats_block: z.int().exactOptional(),
  })
  .openapi({ required: ['name', 'type_id'] })
  .openapi('AccountSetup')

const AccountUpdateSetupSchema = z
  .object({
    name: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    type_id: z.string().exactOptional(),
    extra_seats_block: z.int().exactOptional(),
    billing_name: z.string().exactOptional(),
    billing_email: z.string().exactOptional(),
    billing_details: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountUpdateSetup')

const AccountAddMemberSetupSchema = z
  .object({
    role: z.enum(['Owner', 'Developer', 'Billing Admin', 'Reviewer']).exactOptional(),
    email: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountAddMemberSetup')

const AccountUpdateMemberSetupSchema = z
  .object({
    role: z.enum(['Owner', 'Developer', 'Billing Admin', 'Reviewer']).exactOptional(),
    site_access: z.enum(['all', 'none', 'selected']).exactOptional(),
    site_ids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountUpdateMemberSetup')

const AccountUsageCapabilitySchema = z
  .object({ included: z.int().exactOptional(), used: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccountUsageCapability')

const AccountMembershipSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    type: z.string().exactOptional(),
    capabilities: z
      .object({
        sites: AccountUsageCapabilitySchema.exactOptional(),
        collaborators: AccountUsageCapabilitySchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    billing_name: z.string().exactOptional(),
    billing_email: z.string().exactOptional(),
    billing_details: z.string().exactOptional(),
    billing_period: z.string().exactOptional(),
    payment_method_id: z.string().exactOptional(),
    type_name: z.string().exactOptional(),
    type_id: z.string().exactOptional(),
    owner_ids: z.array(z.string()).exactOptional(),
    roles_allowed: z.array(z.string()).exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountMembership')

const AuditLogSchema = z
  .object({
    id: z.string().exactOptional(),
    account_id: z.string().exactOptional(),
    payload: z
      .object({
        actor_id: z.string().exactOptional(),
        actor_name: z.string().exactOptional(),
        actor_email: z.string().exactOptional(),
        action: z.string().exactOptional(),
        timestamp: z.string().exactOptional(),
        log_type: z.string().exactOptional(),
      })
      .catchall(z.object({}))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuditLog')

const AgentRunnerUserSchema = z
  .object({
    id: z.string().exactOptional(),
    full_name: z.string().exactOptional(),
    email: z.string().exactOptional(),
    avatar_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerUser')

const AgentRunnerSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    parent_agent_runner_id: z.string().exactOptional(),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One of `new`, `running`, `await_input`, `interrupted`, `error`, `done`, `cancelled` or `archived`.',
      }),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    done_at: z.string().exactOptional(),
    title: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    result_branch: z.string().exactOptional(),
    pr_url: z.string().exactOptional(),
    pr_branch: z.string().exactOptional(),
    pr_state: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of `open`, `draft`, `merged` or `closed`.' }),
    pr_number: z.int().exactOptional(),
    pr_is_being_created: z.boolean().exactOptional(),
    pr_error: z.string().exactOptional(),
    current_task: z
      .string()
      .exactOptional()
      .openapi({ description: 'What the agent is working on in the active session.' }),
    result_diff: z.string().exactOptional(),
    sha: z.string().exactOptional(),
    merge_commit_sha: z.string().exactOptional(),
    merge_commit_error: z.string().exactOptional(),
    merge_commit_is_being_created: z.boolean().exactOptional(),
    base_deploy_id: z.string().exactOptional(),
    attached_file_keys: z.array(z.string()).exactOptional(),
    active_session_created_at: z.string().exactOptional(),
    has_result_diff: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the run has changes, available from `GET /agent_runners/{agent_runner_id}/diff`.',
      }),
    latest_session_deploy_id: z.string().exactOptional(),
    latest_session_deploy_url: z.string().exactOptional(),
    preview_state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'State of the deploy building the latest preview. Null until that deploy exists; `ready` once the preview is live.',
      }),
    user: AgentRunnerUserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentRunner')

const AgentRunnerSetupSchema = z
  .object({
    prompt: z.string(),
    branch: z
      .string()
      .exactOptional()
      .openapi({ description: "Branch to start from. Defaults to the site's production branch." }),
    deploy_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deploy to start from. Takes precedence over `branch`.' }),
    agent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Agent to run, for example `claude` or `codex`.' }),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model for the agent to use. Omit to let Netlify choose.' }),
    effort: z
      .enum(['low', 'medium', 'high'])
      .exactOptional()
      .openapi({ description: 'Reasoning effort. Omit to let the agent decide.' }),
    mode: z
      .enum(['normal', 'ask'])
      .exactOptional()
      .openapi({
        description:
          '`normal` (the default) changes code; `ask` answers questions without changing code.',
      }),
  })
  .openapi({ required: ['prompt'] })
  .openapi('AgentRunnerSetup')

const AgentRunnerSessionConfigSchema = z
  .object({ agent: z.string().exactOptional(), model: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AgentRunnerSessionConfig')

const AgentRunnerSessionUsageSchema = z
  .object({
    total_input_tokens: z.int().exactOptional(),
    total_output_tokens: z.int().exactOptional(),
    total_cached_input_tokens: z.int().exactOptional(),
    total_cached_output_tokens: z.int().exactOptional(),
    total_tokens: z.int().exactOptional(),
    total_credits_cost: z
      .number()
      .exactOptional()
      .openapi({ description: 'Credits the session used.' }),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerSessionUsage')

const AgentRunnerSessionInteractionSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One of `question`, `authorization` or `setup_request`. Only questions can be answered; the others can only be skipped.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of `pending`, `answered` or `skipped`.' }),
    payload: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'For a question, an array of questions, each with `question`, an optional `header`, `multiSelect` and `options` (each with `label` and an optional `description`). For `authorization` and `setup_request`, an object describing the request.',
      }),
    response: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Answers aligned to `payload`; null entries were skipped.' }),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerSessionInteraction')

const AgentRunnerSessionStepSchema = z
  .object({ title: z.string().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AgentRunnerSessionStep')

const AgentRunnerSessionSchema = z
  .object({
    id: z.string().exactOptional(),
    agent_runner_id: z.string().exactOptional(),
    dev_server_id: z.string().exactOptional(),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One of `new`, `running`, `await_input`, `interrupted`, `error`, `done` or `cancelled`.',
      }),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    done_at: z.string().exactOptional(),
    paused_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the session paused waiting on an interaction. Null once it resumes.',
      }),
    title: z.string().exactOptional(),
    prompt: z.string().exactOptional(),
    agent_config: AgentRunnerSessionConfigSchema.exactOptional(),
    result: z
      .string()
      .exactOptional()
      .openapi({ description: "The agent's summary of what it did." }),
    result_diff: z.string().exactOptional(),
    commit_sha: z.string().exactOptional(),
    deploy_id: z.string().exactOptional(),
    deploy_url: z
      .string()
      .exactOptional()
      .openapi({ description: "URL of the session's deploy preview." }),
    duration: z.int().exactOptional(),
    usage: AgentRunnerSessionUsageSchema.exactOptional(),
    interactions: z
      .record(z.string(), AgentRunnerSessionInteractionSchema)
      .exactOptional()
      .openapi({
        description:
          "Questions and requests from the agent, keyed by reference ID. A pending one pauses the session in `await_input` until it's answered or skipped.",
      }),
    steps: z.array(AgentRunnerSessionStepSchema).exactOptional(),
    user: AgentRunnerUserSchema.exactOptional(),
    attached_file_keys: z.array(z.string()).exactOptional(),
    result_zip_file_name: z.string().exactOptional(),
    is_published: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerSession')

const AgentRunnerSessionSetupSchema = z
  .object({
    prompt: z
      .string()
      .exactOptional()
      .openapi({ description: 'What the agent should do. Required.' }),
    agent: z.string().exactOptional(),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model for the agent to use. Omit to let Netlify choose.' }),
    mode: z
      .enum(['normal', 'ask'])
      .exactOptional()
      .openapi({
        description:
          '`normal` (the default) changes code; `ask` answers questions without changing code.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerSessionSetup')

const AgentRunnerSessionAnswerSchema = z
  .object({
    refId: z
      .string()
      .openapi({ description: "Key of the pending interaction in the session's `interactions`." }),
    response: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          "One entry per question in the interaction's `payload`: a string, an array of strings for a multi-select question, or null to skip that question.",
      }),
    skipped: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Skip the whole interaction instead of answering it.' }),
    instruction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instruction for the agent when skipping.' }),
  })
  .openapi({ required: ['refId'] })
  .openapi('AgentRunnerSessionAnswer')

const ErrorSchema = z
  .object({
    code: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string(),
  })
  .openapi({ required: ['message'] })
  .openapi('Error')

const AgentRunnerErrorSchema = ErrorSchema.and(
  z
    .object({
      error_code: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Machine-readable reason. Each operation lists the codes it can return.',
        }),
    })
    .openapi({ required: [] }),
).openapi('AgentRunnerError')

const AgentRunnerHookSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    title: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    prompt: z.string().exactOptional(),
    agent: z.string().exactOptional(),
    url: z.string().exactOptional(),
    msg: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerHook')

const AgentRunnerHookSetupSchema = z
  .object({
    title: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    prompt: z.string().exactOptional(),
    agent: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentRunnerHookSetup')

const AgentRunnerHookCreatedSchema = AgentRunnerHookSchema.and(
  z.object({ secret: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('AgentRunnerHookCreated')

const BuildSetupSchema = z
  .object({ image: z.string().exactOptional(), clear_cache: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('BuildSetup')

const BuildHookSetupSchema = z
  .object({ title: z.string().exactOptional(), branch: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BuildHookSetup')

const BuildHookSchema = z
  .object({
    id: z.string().exactOptional(),
    title: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    url: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuildHook')

const DeployedBranchSchema = z
  .object({
    id: z.string().exactOptional(),
    deploy_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    url: z.string().exactOptional(),
    ssl_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeployedBranch')

const UserSchema = z
  .object({
    id: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    full_name: z.string().exactOptional(),
    avatar_url: z.string().exactOptional(),
    email: z.string().exactOptional(),
    affiliate_id: z.string().exactOptional(),
    site_count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    created_at: z.string().exactOptional(),
    last_login: z.string().exactOptional(),
    login_providers: z.array(z.string()).exactOptional(),
    onboarding_progress: z
      .object({ slides: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('User')

const SiteFunctionSchema = z
  .object({
    branch: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    functions: z.array(z.object({})).exactOptional(),
    id: z.string().exactOptional(),
    log_type: z.string().exactOptional(),
    provider: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SiteFunction')

const DevServerSchema = z
  .object({
    id: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    url: z.string().exactOptional(),
    state: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    starting_at: z.string().exactOptional(),
    error_at: z.string().exactOptional(),
    live_at: z.string().exactOptional(),
    done_at: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DevServer')

const DevServerHookSchema = z
  .object({
    id: z.string().exactOptional(),
    title: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    url: z.string().exactOptional(),
    site_id: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    type: z.enum(['new_dev_server', 'content_refresh']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DevServerHook')

const DevServerHookSetupSchema = z
  .object({
    title: z.string().exactOptional(),
    branch: z.string().exactOptional(),
    type: z.enum(['new_dev_server', 'content_refresh']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DevServerHookSetup')

const ProviderDefinitionSchema = z
  .object({
    token_env_var: z.string().exactOptional(),
    url_env_var: z.string().exactOptional(),
    models: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderDefinition')

const AiGatewayTokenSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The AI Gateway authentication token' }),
    url: z.string().exactOptional().openapi({ description: 'AI gateway base url' }),
    expires_at: z
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
        description: 'Unix timestamp when the token expires',
      }),
  })
  .openapi({ required: [] })
  .openapi('AiGatewayToken')

const ErrorResponse = {
  description: 'error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const PageParamsSchema = z
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
      name: 'page',
      required: false,
      in: 'query',
      schema: { type: 'integer', format: 'int32' },
    },
  })

const PerPageParamsSchema = z
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
      name: 'per_page',
      required: false,
      in: 'query',
      schema: { type: 'integer', format: 'int32' },
    },
  })

const RetryCountParamsSchema = z
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
    param: { name: 'X-Nf-Retry-Count', in: 'header', schema: { type: 'integer' }, required: false },
  })

const DevServerHookSetupRequestBody = {
  content: { 'application/json': { schema: DevServerHookSetupSchema } },
  required: true,
}

const CreateServiceInstanceConfigRequestBody = {
  content: { 'application/json': { schema: z.object({}) } },
  required: true,
}

const SnippetRequestBody = {
  content: { 'application/json': { schema: SnippetSchema } },
  required: true,
}

const DeployFilesRequestBody = {
  content: { 'application/json': { schema: DeployFilesSchema } },
  required: true,
}

const UploadDeployFileFileBodyRequestBody = {
  content: {
    'application/octet-stream': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
  },
  required: true,
}

const SiteSetupRequestBody = {
  content: { 'application/json': { schema: SiteSetupSchema } },
  required: true,
}

const BuildHookSetupRequestBody = {
  content: { 'application/json': { schema: BuildHookSetupSchema } },
  required: true,
}

const HookRequestBody = { content: { 'application/json': { schema: HookSchema } }, required: true }

const SplitTestSetupRequestBody = {
  content: { 'application/json': { schema: SplitTestSetupSchema } },
  required: true,
}

const DatabaseComputeSettingsRequestRequestBody = {
  content: { 'application/json': { schema: DatabaseComputeSettingsRequestSchema } },
  required: true,
}

const NetlifyAuthSecurityScheme = {
  type: 'oauth2',
  flows: { implicit: { authorizationUrl: 'https://app.netlify.com/authorize', scopes: {} } },
}

export const getSitesRoute = createRoute({
  method: 'get',
  path: '/sites',
  tags: ['site'],
  summary: 'List sites',
  description:
    '**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.',
  operationId: 'listSites',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filter: z
        .enum(['all', 'owner', 'guest'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            schema: { type: 'string', enum: ['all', 'owner', 'guest'] },
            required: false,
          },
        }),
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(SiteSchema) } } },
    default: ErrorResponse,
  },
})

export const postSitesRoute = createRoute({
  method: 'post',
  path: '/sites',
  tags: ['site'],
  summary: 'Create a site',
  description:
    '**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [createEnvVars](#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.',
  operationId: 'createSite',
  request: {
    query: z.object({
      configure_dns: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'configure_dns',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: SiteSetupRequestBody,
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: SiteSchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}',
  tags: ['site'],
  summary: 'Get a site',
  description:
    '**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.',
  operationId: 'getSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SiteSchema } } },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}',
  tags: ['site'],
  summary: 'Delete a site',
  operationId: 'deleteSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const patchSitesSiteIdRoute = createRoute({
  method: 'patch',
  path: '/sites/{site_id}',
  tags: ['site'],
  summary: 'Update a site',
  description:
    "**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [updateEnvVar](#tag/environmentVariables/operation/updateEnvVar) to update a site's environment variables.",
  operationId: 'updateSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: SiteSetupRequestBody,
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SiteSchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdSslRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/ssl',
  tags: ['sniCertificate'],
  summary: "Get a site's TLS certificate",
  operationId: 'showSiteTLSCertificate',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SniCertificateSchema } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdSslRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/ssl',
  tags: ['sniCertificate'],
  summary: "Provision or update a site's TLS certificate",
  description:
    "Provisions or updates a TLS certificate for the site.\n\n**Creating a certificate (site has no certificate):**\n- Omit certificate params to initiate Let's Encrypt provisioning\n- Provide certificate, key, and ca_certificates to upload a custom certificate\n\n**Updating a certificate (site already has a certificate):**\n- REQUIRES certificate, key, and ca_certificates to replace with a new custom certificate\n- Use POST /api/v1/sites/{site_id}/ssl/renew to renew an existing Let's Encrypt certificate",
  operationId: 'provisionSiteTLSCertificate',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      certificate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'certificate',
            in: 'query',
            description: 'PEM-encoded certificate. Required when updating an existing certificate.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            description: 'PEM-encoded private key. Required when updating an existing certificate.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ca_certificates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ca_certificates',
            in: 'query',
            description:
              'PEM-encoded CA certificate chain. Required when updating an existing certificate.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SniCertificateSchema } } },
    422: {
      description:
        'Unprocessable Entity. Returns errors such as: "certificate parameter is required when updating an existing certificate" (when updating without params), "No custom domain configured", or "bad dns for custom domain"',
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdSslCertificatesRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/ssl/certificates',
  tags: ['sniCertificate'],
  summary: "List TLS certificates for a site's domain",
  description:
    'Returns details about the certificates associated with a domain. The site must be using the domain.',
  operationId: 'getAllCertificates',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      domain: z
        .string()
        .openapi({
          param: { name: 'domain', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Array of SNI Certificates',
      content: { 'application/json': { schema: z.array(SniCertificateSchema) } },
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
  },
})

export const getAccountsAccountIdEnvRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/env',
  tags: ['environmentVariables'],
  summary: 'List environment variables for a team or site',
  description:
    'Returns all environment variables for an account or site. An account corresponds to a team in the Netlify UI.',
  operationId: 'getEnvVars',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      context_name: z
        .enum(['all', 'dev', 'dev-server', 'branch-deploy', 'deploy-preview', 'production'])
        .exactOptional()
        .openapi({
          param: {
            name: 'context_name',
            description: 'Filter by deploy context',
            required: false,
            in: 'query',
            schema: {
              type: 'string',
              enum: ['all', 'dev', 'dev-server', 'branch-deploy', 'deploy-preview', 'production'],
            },
          },
        }),
      scope: z
        .enum(['builds', 'functions', 'runtime', 'post-processing'])
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            description: 'Filter by scope',
            required: false,
            in: 'query',
            schema: { type: 'string', enum: ['builds', 'functions', 'runtime', 'post-processing'] },
          },
        }),
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description: 'If specified, only return environment variables set on this site',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(EnvVarSchema) } } },
    default: ErrorResponse,
  },
})

export const postAccountsAccountIdEnvRoute = createRoute({
  method: 'post',
  path: '/accounts/{account_id}/env',
  tags: ['environmentVariables'],
  summary: 'Create environment variables',
  description:
    'Creates new environment variables. Granular scopes are available on Pro plans and above.',
  operationId: 'createEnvVars',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description:
              'If provided, create an environment variable on the site level, not the account level',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                key: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The existing or new name of the key, if you wish to rename it (case-sensitive)',
                  }),
                scopes: z
                  .array(z.enum(['builds', 'functions', 'runtime', 'post-processing']))
                  .exactOptional()
                  .openapi({
                    description:
                      'The scopes that this environment variable is set to (Pro plans and above)',
                  }),
                values: z.array(EnvVarValueSchema).exactOptional(),
                is_secret: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      "Secret values are only readable by code running on Netlify's systems. With secrets, only the local development context values are readable from the UI, API, and CLI. By default, environment variable values are not secret.",
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: z.array(EnvVarSchema) } } },
    default: ErrorResponse,
  },
})

export const getApiV1SitesSiteIdEnvRoute = createRoute({
  method: 'get',
  path: '/api/v1/sites/{site_id}/env',
  tags: ['environmentVariables'],
  summary: 'List environment variables for a site',
  description:
    "Returns all environment variables for a site. This convenience method behaves the same as `getEnvVars` but doesn't require an `account_id` as input.",
  operationId: 'getSiteEnvVars',
  request: {
    query: z.object({
      context_name: z
        .enum(['all', 'dev', 'dev-server', 'branch-deploy', 'deploy-preview', 'production'])
        .exactOptional()
        .openapi({
          param: {
            name: 'context_name',
            description: 'Filter by deploy context',
            required: false,
            in: 'query',
            schema: {
              type: 'string',
              enum: ['all', 'dev', 'dev-server', 'branch-deploy', 'deploy-preview', 'production'],
            },
          },
        }),
      scope: z
        .enum(['builds', 'functions', 'runtime', 'post_processing'])
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            description: 'Filter by scope',
            required: false,
            in: 'query',
            schema: { type: 'string', enum: ['builds', 'functions', 'runtime', 'post_processing'] },
          },
        }),
    }),
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            name: 'site_id',
            description: 'Scope response to site_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(EnvVarSchema) } } },
    default: ErrorResponse,
  },
})

export const getAccountsAccountIdEnvKeyRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/env/{key}',
  tags: ['environmentVariables'],
  summary: 'Get an environment variable',
  description: 'Returns an individual environment variable.',
  operationId: 'getEnvVar',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'The environment variable key (case-sensitive)',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description:
              'If provided, return the environment variable for a specific site (no merging is performed)',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    default: ErrorResponse,
  },
})

export const putAccountsAccountIdEnvKeyRoute = createRoute({
  method: 'put',
  path: '/accounts/{account_id}/env/{key}',
  tags: ['environmentVariables'],
  summary: 'Update an environment variable',
  description:
    'Updates an existing environment variable and all of its values. Existing values will be replaced by values provided.',
  operationId: 'updateEnvVar',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'The existing environment variable key name (case-sensitive)',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description: 'If provided, update an environment variable set on this site',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The existing or new name of the key, if you wish to rename it (case-sensitive)',
                }),
              scopes: z
                .array(z.enum(['builds', 'functions', 'runtime', 'post-processing']))
                .exactOptional()
                .openapi({
                  description:
                    'The scopes that this environment variable is set to (Pro plans and above)',
                }),
              values: z.array(EnvVarValueSchema).exactOptional(),
              is_secret: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Secret values are only readable by code running on Netlify's systems. With secrets, only the local development context values are readable from the UI, API, and CLI. By default, environment variable values are not secret.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EnvVarSchema } } },
    default: ErrorResponse,
  },
})

export const deleteAccountsAccountIdEnvKeyRoute = createRoute({
  method: 'delete',
  path: '/accounts/{account_id}/env/{key}',
  tags: ['environmentVariables'],
  summary: 'Delete an environment variable',
  description: 'Deletes an environment variable',
  operationId: 'deleteEnvVar',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'The environment variable key (case-sensitive)',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description: 'If provided, delete the environment variable from this site',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content (success)' }, default: ErrorResponse },
})

export const patchAccountsAccountIdEnvKeyRoute = createRoute({
  method: 'patch',
  path: '/accounts/{account_id}/env/{key}',
  tags: ['environmentVariables'],
  summary: 'Set a value on an environment variable',
  description: 'Updates or creates a new value for an existing environment variable.',
  operationId: 'setEnvVarValue',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'The existing environment variable key name (case-sensitive)',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description: 'If provided, update an environment variable set on this site',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              context: z
                .enum([
                  'all',
                  'dev',
                  'dev-server',
                  'branch-deploy',
                  'deploy-preview',
                  'production',
                  'branch',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`. `branch` must be provided with a value in `context_parameter`.',
                }),
              context_parameter: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An additional parameter for custom branches. Currently, this is used for providing a branch name when `context=branch`.',
                }),
              value: z
                .string()
                .exactOptional()
                .openapi({ description: "The environment variable's unencrypted value" }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created (success)',
      content: { 'application/json': { schema: EnvVarSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteAccountsAccountIdEnvKeyValueIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{account_id}/env/{key}/value/{id}',
  tags: ['environmentVariables'],
  summary: 'Delete an environment variable value',
  description: 'Deletes a specific environment variable value.',
  operationId: 'deleteEnvVarValue',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            description: 'Scope response to account_id',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            description: "The environment variable value's ID",
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            description: 'The environment variable key name (case-sensitive)',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            description: 'If provided, delete the value from an environment variable on this site',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content (success)' }, default: ErrorResponse },
})

export const getSitesSiteIdFunctionsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/functions',
  tags: ['function'],
  summary: "Search a site's functions",
  operationId: 'searchSiteFunctions',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filter', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SiteFunctionSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdFormsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/forms',
  tags: ['form'],
  summary: "List a site's forms",
  operationId: 'listSiteForms',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(FormSchema) } } },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdFormsFormIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/forms/{form_id}',
  tags: ['form'],
  summary: 'Delete a form',
  description: 'Deletes a form and all of its submissions.',
  operationId: 'deleteSiteForm',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      form_id: z
        .string()
        .openapi({
          param: { name: 'form_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const getSitesSiteIdSubmissionsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/submissions',
  tags: ['submission'],
  summary: "List a site's form submissions",
  operationId: 'listSiteSubmissions',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema, per_page: PerPageParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SubmissionSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdFilesRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/files',
  tags: ['file'],
  summary: "List a site's files",
  operationId: 'listSiteFiles',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(FileSchema) } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdAssetsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/assets',
  tags: ['asset'],
  summary: "List a site's assets",
  description: '_This endpoint is only available to certain sites._',
  operationId: 'listSiteAssets',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(AssetSchema) } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdAssetsRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/assets',
  tags: ['asset'],
  summary: 'Create a site asset',
  description: '_This endpoint is only available to certain sites._',
  operationId: 'createSiteAsset',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'query', required: true, schema: { type: 'string' } },
        }),
      size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      content_type: z
        .string()
        .openapi({
          param: { name: 'content_type', in: 'query', required: true, schema: { type: 'string' } },
        }),
      visibility: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'visibility', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AssetSignatureSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdAssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/assets/{asset_id}',
  tags: ['asset'],
  summary: 'Get a site asset',
  description: '_This endpoint is only available to certain sites._',
  operationId: 'getSiteAssetInfo',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      asset_id: z
        .string()
        .openapi({
          param: { name: 'asset_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AssetSchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdAssetsAssetIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/assets/{asset_id}',
  tags: ['asset'],
  summary: "Update a site asset's state",
  description: '_This endpoint is only available to certain sites._',
  operationId: 'updateSiteAsset',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      asset_id: z
        .string()
        .openapi({
          param: { name: 'asset_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      state: z
        .string()
        .openapi({
          param: { name: 'state', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: AssetSchema } } },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/assets/{asset_id}',
  tags: ['asset'],
  summary: 'Delete a site asset',
  description: '_This endpoint is only available to certain sites._',
  operationId: 'deleteSiteAsset',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      asset_id: z
        .string()
        .openapi({
          param: { name: 'asset_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const getSitesSiteIdAssetsAssetIdPublicSignatureRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/assets/{asset_id}/public_signature',
  tags: ['assetPublicSignature'],
  summary: "Get a site asset's URL",
  description:
    "Returns the URL of the asset. If the asset isn't publicly visible, returns a signed URL. _This endpoint is only available to certain sites._",
  operationId: 'getSiteAssetPublicSignature',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      asset_id: z
        .string()
        .openapi({
          param: { name: 'asset_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AssetPublicSignatureSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdFilesFilePathRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/files/{file_path}',
  tags: ['file'],
  summary: 'Get a site file by path',
  operationId: 'getSiteFileByPathName',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      file_path: z
        .string()
        .openapi({
          param: { name: 'file_path', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FileSchema } } },
    default: ErrorResponse,
  },
})

export const postPurgeRoute = createRoute({
  method: 'post',
  path: '/purge',
  tags: ['purge'],
  summary: 'Purge cached content',
  description: "Purges cached content from Netlify's CDN. Supports purging by Cache-Tag.",
  operationId: 'purgeCache',
  request: { body: { content: { 'application/json': { schema: PurgeSchema } }, required: true } },
  responses: {
    202: {
      description:
        'Accepted. The purge is queued and propagates across the CDN asynchronously. The response has no body and there is no status resource to poll for completion.',
    },
    400: { description: 'Invalid request parameters' },
    404: { description: 'Site not found' },
  },
})

export const getSitesSiteIdSnippetsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/snippets',
  tags: ['snippet'],
  summary: "List a site's snippets",
  operationId: 'listSiteSnippets',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(SnippetSchema) } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdSnippetsRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/snippets',
  tags: ['snippet'],
  summary: 'Create a snippet',
  operationId: 'createSiteSnippet',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: SnippetRequestBody,
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: SnippetSchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdSnippetsSnippetIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/snippets/{snippet_id}',
  tags: ['snippet'],
  summary: 'Get a snippet',
  operationId: 'getSiteSnippet',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      snippet_id: z
        .string()
        .openapi({
          param: { name: 'snippet_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SnippetSchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdSnippetsSnippetIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/snippets/{snippet_id}',
  tags: ['snippet'],
  summary: 'Update a snippet',
  operationId: 'updateSiteSnippet',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      snippet_id: z
        .string()
        .openapi({
          param: { name: 'snippet_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: SnippetRequestBody,
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const deleteSitesSiteIdSnippetsSnippetIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/snippets/{snippet_id}',
  tags: ['snippet'],
  summary: 'Delete a snippet',
  operationId: 'deleteSiteSnippet',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      snippet_id: z
        .string()
        .openapi({
          param: { name: 'snippet_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getSitesSiteIdMetadataRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/metadata',
  tags: ['metadata'],
  summary: "Get a site's metadata",
  operationId: 'getSiteMetadata',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MetadataSchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdMetadataRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/metadata',
  tags: ['metadata'],
  summary: "Update a site's metadata",
  operationId: 'updateSiteMetadata',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataSchema } }, required: true },
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getSitesSiteIdBuildHooksRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/build_hooks',
  tags: ['buildHook'],
  summary: "List a site's build hooks",
  operationId: 'listSiteBuildHooks',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(BuildHookSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdBuildHooksRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/build_hooks',
  tags: ['buildHook'],
  summary: 'Create a build hook',
  operationId: 'createSiteBuildHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: BuildHookSetupRequestBody,
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: BuildHookSchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdBuildHooksIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/build_hooks/{id}',
  tags: ['buildHook'],
  summary: 'Get a build hook',
  operationId: 'getSiteBuildHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BuildHookSchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdBuildHooksIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/build_hooks/{id}',
  tags: ['buildHook'],
  summary: 'Update a build hook',
  operationId: 'updateSiteBuildHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: BuildHookSetupRequestBody,
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const deleteSitesSiteIdBuildHooksIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/build_hooks/{id}',
  tags: ['buildHook'],
  summary: 'Delete a build hook',
  operationId: 'deleteSiteBuildHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getSitesSiteIdDeploysRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/deploys',
  tags: ['deploy'],
  summary: "List a site's deploys",
  operationId: 'listSiteDeploys',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'deploy-previews': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'deploy-previews',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      production: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'production', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      state: z
        .enum([
          'new',
          'pending_review',
          'accepted',
          'rejected',
          'enqueued',
          'building',
          'uploading',
          'uploaded',
          'preparing',
          'prepared',
          'processing',
          'processed',
          'ready',
          'error',
          'retrying',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'new',
                'pending_review',
                'accepted',
                'rejected',
                'enqueued',
                'building',
                'uploading',
                'uploaded',
                'preparing',
                'prepared',
                'processing',
                'processed',
                'ready',
                'error',
                'retrying',
              ],
            },
            required: false,
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'branch', in: 'query', schema: { type: 'string' }, required: false },
        }),
      'latest-published': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'latest-published',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(DeploySchema) } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDeploysRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/deploys',
  tags: ['deploy'],
  summary: 'Create a deploy',
  operationId: 'createSiteDeploy',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'deploy-previews': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'deploy-previews',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      production: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'production', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      state: z
        .enum([
          'new',
          'pending_review',
          'accepted',
          'rejected',
          'enqueued',
          'building',
          'uploading',
          'uploaded',
          'preparing',
          'prepared',
          'processing',
          'processed',
          'ready',
          'error',
          'retrying',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'new',
                'pending_review',
                'accepted',
                'rejected',
                'enqueued',
                'building',
                'uploading',
                'uploaded',
                'preparing',
                'prepared',
                'processing',
                'processed',
                'ready',
                'error',
                'retrying',
              ],
            },
            required: false,
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'branch', in: 'query', schema: { type: 'string' }, required: false },
        }),
      'latest-published': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'latest-published',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: DeployFilesRequestBody,
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDeploysDeployIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/deploys/{deploy_id}',
  tags: ['deploy'],
  summary: "Get a site's deploy",
  operationId: 'getSiteDeploy',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdDeploysDeployIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/deploys/{deploy_id}',
  tags: ['deploy'],
  summary: 'Update a deploy',
  operationId: 'updateSiteDeploy',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      commit_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'commit_ref', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: DeployFilesRequestBody,
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdDeploysDeployIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/deploys/{deploy_id}',
  tags: ['deploy'],
  summary: "Delete a site's deploy",
  description: 'Marks a deploy for deletion.',
  operationId: 'deleteSiteDeploy',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const postDeploysDeployIdCancelRoute = createRoute({
  method: 'post',
  path: '/deploys/{deploy_id}/cancel',
  tags: ['deploy'],
  summary: 'Cancel a deploy',
  operationId: 'cancelSiteDeploy',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    201: { description: 'Cancelled', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDeploysDeployIdRestoreRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/deploys/{deploy_id}/restore',
  tags: ['deploy'],
  summary: 'Restore a previous deploy',
  description: 'Publishes a previous deploy of the site.',
  operationId: 'restoreSiteDeploy',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdBuildsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/builds',
  tags: ['build'],
  summary: "List a site's builds",
  operationId: 'listSiteBuilds',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema, per_page: PerPageParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(BuildSchema) } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdBuildsRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/builds',
  tags: ['build'],
  summary: 'Start a build',
  description:
    "Runs a build for a site. The build will be scheduled to run at the first opportunity, but it might not start immediately if insufficient account build capacity is available.\n\nFiles for build can be uploaded as a zipped site using one of these methods:\n1. Set Content-Type to 'application/zip' and send the zip file as the raw request body\n2. Set Content-Type to 'multipart/form-data' and include the zip file in the 'zip' field\n",
  operationId: 'createSiteBuild',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'branch',
            description:
              "If no branch is specified, it is treated as a production deploy If a branch IS specified and matches the main branch, it is also production If a branch is specified and doesn't match the main branch, it is a branch deploy",
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
      clear_cache: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'clear_cache',
            description: 'Whether to clear the build cache before building',
            required: false,
            in: 'query',
            schema: { type: 'boolean' },
          },
        }),
      commit_sha: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'commit_sha',
            description:
              'The commit SHA to build; when omitted, the head of the branch or pull request is fetched from the git host. Ignored for zip uploads',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
      draft: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'draft',
            description:
              'Whether to create a draft deploy, which uses the deploy-preview context and is never published; review_id builds are always drafts',
            required: false,
            in: 'query',
            schema: { type: 'boolean' },
          },
        }),
      image: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'image',
            description: 'The build image tag to use for the build',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
      review_id: z
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
            name: 'review_id',
            description:
              'The merge/pull request ID to build; triggers a deploy preview. Ignored for zip uploads',
            required: false,
            in: 'query',
            schema: { type: 'integer' },
          },
        }),
      template_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'template_id',
            description: 'The build template to use for the build',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'title',
            description: 'The title of the build',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              zip: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    "A zip file containing the site files to build.\nOnly used with Content-Type 'multipart/form-data'.\nAlternatively, set Content-Type to 'application/zip' and send the zip as the raw request body (no 'zip' parameter needed).\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BuildSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDeployedBranchesRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/deployed-branches',
  tags: ['deployedBranch'],
  summary: "List a site's deployed branches",
  operationId: 'listSiteDeployedBranches',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DeployedBranchSchema) } },
    },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdUnlinkRepoRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/unlink_repo',
  tags: ['site'],
  summary: "Unlink a site's repository",
  description:
    "[Beta] Unlinks the repo from the site.\n\nThis action will also:\n- Delete associated deploy keys\n- Delete outgoing webhooks for the repo\n- Delete the site's build hooks",
  operationId: 'unlinkSiteRepo',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SiteSchema } } },
    404: { description: 'Site not found' },
  },
})

export const putSitesSiteIdEnableRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/enable',
  tags: ['site'],
  summary: 'Enable a site',
  description:
    'Re-enables a site that was previously disabled by the user. Sites that were disabled for usage exceeded or marked as spam cannot be re-enabled via this endpoint.',
  operationId: 'enableSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No content' },
    422: {
      description: 'Cannot enable this site',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdDisableRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/disable',
  tags: ['site'],
  summary: 'Disable a site',
  description:
    'Disables a site, preventing it from serving content. The site can be re-enabled later using the enable endpoint.',
  operationId: 'disableSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      reason: z
        .string()
        .openapi({
          param: {
            name: 'reason',
            in: 'query',
            required: true,
            description: 'Reason for disabling the site',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getBuildsBuildIdRoute = createRoute({
  method: 'get',
  path: '/builds/{build_id}',
  tags: ['build'],
  summary: 'Get a build',
  operationId: 'getSiteBuild',
  request: {
    params: z.object({
      build_id: z
        .string()
        .openapi({
          param: { name: 'build_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BuildSchema } } },
    default: ErrorResponse,
  },
})

export const postBuildsBuildIdLogRoute = createRoute({
  method: 'post',
  path: '/builds/{build_id}/log',
  tags: ['buildLogMsg'],
  summary: 'Add a message to a build log',
  operationId: 'updateSiteBuildLog',
  request: {
    params: z.object({
      build_id: z
        .string()
        .openapi({
          param: { name: 'build_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const postBuildsBuildIdStartRoute = createRoute({
  method: 'post',
  path: '/builds/{build_id}/start',
  tags: ['build'],
  summary: 'Mark a build as started',
  operationId: 'notifyBuildStart',
  request: {
    params: z.object({
      build_id: z
        .string()
        .openapi({
          param: { name: 'build_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      buildbot_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'buildbot_version',
            in: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      build_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'build_version',
            in: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      task_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'task_id', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getAccountIdBuildsStatusRoute = createRoute({
  method: 'get',
  path: '/{account_id}/builds/status',
  tags: ['build'],
  summary: "Get a team's build status",
  description:
    "Returns the team's counts of active, concurrency-pending, and enqueued builds, and its build minutes usage.",
  operationId: 'getAccountBuildStatus',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { name: 'account_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(BuildStatusSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDnsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/dns',
  tags: ['dnsZone'],
  summary: "Get a site's DNS configuration",
  operationId: 'getDNSForSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(DnsZoneSchema) } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdDnsRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/dns',
  tags: ['dnsZone'],
  summary: "Configure a site's DNS",
  description:
    "Creates any missing DNS zones and records for the site's custom domain and domain aliases. This usually runs automatically when the custom domain is set.",
  operationId: 'configureDNSForSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(DnsZoneSchema) } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdRollbackRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/rollback',
  tags: ['deploy'],
  summary: "Roll back a site's production deploy",
  description:
    'Rolls back the production deploy to the deploy referenced by its `rollback_id`. Does nothing if the current production deploy has no `rollback_id`.',
  operationId: 'rollbackSiteDeploy',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getDeploysDeployIdRoute = createRoute({
  method: 'get',
  path: '/deploys/{deploy_id}',
  tags: ['deploy'],
  summary: 'Get a deploy',
  operationId: 'getDeploy',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const deleteDeploysDeployIdRoute = createRoute({
  method: 'delete',
  path: '/deploys/{deploy_id}',
  tags: ['deploy'],
  summary: 'Delete a deploy',
  description: 'Marks a deploy for deletion.',
  operationId: 'deleteDeploy',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const postDeploysDeployIdLockRoute = createRoute({
  method: 'post',
  path: '/deploys/{deploy_id}/lock',
  tags: ['deploy'],
  summary: 'Lock a deploy',
  description:
    "Locks a deploy so that subsequent deploys are built but not published. If the deploy is not the site's published deploy, locking publishes it first. When publishing is gated, the publish and lock are queued and the API responds with 202 Accepted and the deploy; poll `getDeploy` to follow it.",
  operationId: 'lockDeploy',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const postDeploysDeployIdUnlockRoute = createRoute({
  method: 'post',
  path: '/deploys/{deploy_id}/unlock',
  tags: ['deploy'],
  summary: 'Unlock a deploy',
  operationId: 'unlockDeploy',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeploySchema } } },
    default: ErrorResponse,
  },
})

export const putDeploysDeployIdFilesPathRoute = createRoute({
  method: 'put',
  path: '/deploys/{deploy_id}/files/{path}',
  tags: ['file'],
  summary: 'Upload a deploy file',
  operationId: 'uploadDeployFile',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
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
          param: { name: 'size', in: 'query', schema: { type: 'integer' }, required: false },
        }),
    }),
    body: UploadDeployFileFileBodyRequestBody,
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FileSchema } } },
    default: ErrorResponse,
  },
})

export const putDeploysDeployIdFunctionsNameRoute = createRoute({
  method: 'put',
  path: '/deploys/{deploy_id}/functions/{name}',
  tags: ['function'],
  summary: 'Upload a deploy function',
  operationId: 'uploadDeployFunction',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runtime: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'runtime', in: 'query', schema: { type: 'string' }, required: false },
        }),
      invocation_mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'invocation_mode',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timeout: z
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
          param: { name: 'timeout', in: 'query', schema: { type: 'integer' }, required: false },
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
          param: { name: 'size', in: 'query', schema: { type: 'integer' }, required: false },
        }),
    }),
    headers: z.object({ 'X-Nf-Retry-Count': RetryCountParamsSchema }),
    body: UploadDeployFileFileBodyRequestBody,
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FunctionSchema } } },
    default: ErrorResponse,
  },
})

export const putDeploysDeployIdServerCodeShaRoute = createRoute({
  method: 'put',
  path: '/deploys/{deploy_id}/server/{code_sha}',
  tags: ['deploy'],
  summary: "Upload a deploy's Netlify Server bundle",
  description:
    "Uploads the deploy's Netlify Server bundle, addressed by the digest the deploy\ndeclared in its `server` property.\n",
  operationId: 'uploadDeployServer',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      code_sha: z
        .string()
        .openapi({
          param: { name: 'code_sha', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
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
          param: { name: 'size', in: 'query', schema: { type: 'integer' }, required: false },
        }),
    }),
    headers: z.object({ 'X-Nf-Retry-Count': RetryCountParamsSchema }),
    body: UploadDeployFileFileBodyRequestBody,
  },
  responses: { 200: { description: 'OK' }, default: ErrorResponse },
})

export const putDeploysDeployIdEdgeFunctionsCodeShaRoute = createRoute({
  method: 'put',
  path: '/deploys/{deploy_id}/edge_functions/{code_sha}',
  tags: ['edgeFunction'],
  summary: "Upload a deploy's edge functions bundle",
  operationId: 'uploadDeployEdgeFunction',
  request: {
    params: z.object({
      deploy_id: z
        .string()
        .openapi({
          param: { name: 'deploy_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      code_sha: z
        .string()
        .openapi({
          param: { name: 'code_sha', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'X-Nf-Retry-Count': RetryCountParamsSchema }),
    body: UploadDeployFileFileBodyRequestBody,
  },
  responses: { 200: { description: 'OK' }, default: ErrorResponse },
})

export const getFormsFormIdSubmissionsRoute = createRoute({
  method: 'get',
  path: '/forms/{form_id}/submissions',
  tags: ['submission'],
  summary: "List a form's submissions",
  operationId: 'listFormSubmissions',
  request: {
    params: z.object({
      form_id: z
        .string()
        .openapi({
          param: { name: 'form_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema, per_page: PerPageParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SubmissionSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getHooksRoute = createRoute({
  method: 'get',
  path: '/hooks',
  tags: ['hook'],
  summary: "List a site's outgoing hooks",
  description:
    'Returns the outgoing hooks for a site. Pass `form_id` or `event` to filter the results.',
  operationId: 'listHooksBySiteId',
  request: {
    query: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      form_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'form_id',
            in: 'query',
            description: 'Only return hooks attached to this form.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      event: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'event',
            in: 'query',
            description: 'Only return hooks for this event name.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(HookSchema) } } },
    default: ErrorResponse,
  },
})

export const postHooksRoute = createRoute({
  method: 'post',
  path: '/hooks',
  tags: ['hook'],
  summary: 'Create an outgoing hook',
  operationId: 'createHookBySiteId',
  request: {
    query: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
    body: HookRequestBody,
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: HookSchema } } },
    default: ErrorResponse,
  },
})

export const getHooksHookIdRoute = createRoute({
  method: 'get',
  path: '/hooks/{hook_id}',
  tags: ['hook'],
  summary: 'Get an outgoing hook',
  operationId: 'getHook',
  request: {
    params: z.object({
      hook_id: z
        .string()
        .openapi({
          param: { name: 'hook_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: HookSchema } } },
    default: ErrorResponse,
  },
})

export const putHooksHookIdRoute = createRoute({
  method: 'put',
  path: '/hooks/{hook_id}',
  tags: ['hook'],
  summary: 'Update an outgoing hook',
  operationId: 'updateHook',
  request: {
    params: z.object({
      hook_id: z
        .string()
        .openapi({
          param: { name: 'hook_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: HookRequestBody,
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: HookSchema } } },
    default: ErrorResponse,
  },
})

export const deleteHooksHookIdRoute = createRoute({
  method: 'delete',
  path: '/hooks/{hook_id}',
  tags: ['hook'],
  summary: 'Delete an outgoing hook',
  operationId: 'deleteHook',
  request: {
    params: z.object({
      hook_id: z
        .string()
        .openapi({
          param: { name: 'hook_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
})

export const postHooksHookIdEnableRoute = createRoute({
  method: 'post',
  path: '/hooks/{hook_id}/enable',
  tags: ['hook'],
  summary: 'Re-enable an outgoing hook',
  description: 'Re-enables an outgoing hook that was disabled after repeated delivery errors.',
  operationId: 'enableHook',
  request: {
    params: z.object({
      hook_id: z
        .string()
        .openapi({
          param: { name: 'hook_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: HookSchema } } },
    default: ErrorResponse,
  },
})

export const getHooksTypesRoute = createRoute({
  method: 'get',
  path: '/hooks/types',
  tags: ['hookType'],
  summary: 'List outgoing hook types',
  description:
    'Returns the available outgoing hook types. When `site_id` is given, returns only the types available to that site.',
  operationId: 'listHookTypes',
  request: {
    query: z.object({
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'site_id',
            in: 'query',
            description: 'Only return the hook types available to this site.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HookTypeSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postOauthTicketsRoute = createRoute({
  method: 'post',
  path: '/oauth/tickets',
  tags: ['ticket'],
  summary: 'Create an OAuth ticket',
  operationId: 'createTicket',
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: { name: 'client_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: TicketSchema } } },
    401: {
      description: 'OAuth application not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponse,
  },
})

export const getOauthTicketsTicketIdRoute = createRoute({
  method: 'get',
  path: '/oauth/tickets/{ticket_id}',
  tags: ['ticket'],
  summary: 'Get an OAuth ticket',
  operationId: 'showTicket',
  request: {
    params: z.object({
      ticket_id: z
        .string()
        .openapi({
          param: { name: 'ticket_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'ok', content: { 'application/json': { schema: TicketSchema } } },
    default: ErrorResponse,
  },
})

export const postOauthTicketsTicketIdExchangeRoute = createRoute({
  method: 'post',
  path: '/oauth/tickets/{ticket_id}/exchange',
  tags: ['accessToken'],
  summary: 'Exchange an OAuth ticket for an access token',
  operationId: 'exchangeTicket',
  request: {
    params: z.object({
      ticket_id: z
        .string()
        .openapi({
          param: { name: 'ticket_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    201: { description: 'ok', content: { 'application/json': { schema: AccessTokenSchema } } },
    default: ErrorResponse,
  },
})

export const getDeployKeysRoute = createRoute({
  method: 'get',
  path: '/deploy_keys',
  tags: ['deployKey'],
  summary: 'List deploy keys',
  operationId: 'listDeployKeys',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DeployKeySchema) } },
    },
    default: ErrorResponse,
  },
})

export const postDeployKeysRoute = createRoute({
  method: 'post',
  path: '/deploy_keys',
  tags: ['deployKey'],
  summary: 'Create a deploy key',
  operationId: 'createDeployKey',
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: DeployKeySchema } } },
    default: ErrorResponse,
  },
})

export const getDeployKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/deploy_keys/{key_id}',
  tags: ['deployKey'],
  summary: 'Get a deploy key',
  operationId: 'getDeployKey',
  request: {
    params: z.object({
      key_id: z
        .string()
        .openapi({
          param: { name: 'key_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeployKeySchema } } },
    default: ErrorResponse,
  },
})

export const deleteDeployKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/deploy_keys/{key_id}',
  tags: ['deployKey'],
  summary: 'Delete a deploy key',
  operationId: 'deleteDeployKey',
  request: {
    params: z.object({
      key_id: z
        .string()
        .openapi({
          param: { name: 'key_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Not Content' }, default: ErrorResponse },
})

export const getAccountSlugSitesRoute = createRoute({
  method: 'get',
  path: '/{account_slug}/sites',
  tags: ['site'],
  summary: "List a team's sites",
  description:
    '**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.',
  operationId: 'listSitesForAccount',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(SiteSchema) } } },
    default: ErrorResponse,
  },
})

export const postAccountSlugSitesRoute = createRoute({
  method: 'post',
  path: '/{account_slug}/sites',
  tags: ['site'],
  summary: 'Create a site in a team',
  description:
    '**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [createEnvVars](#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.',
  operationId: 'createSiteInTeam',
  request: {
    query: z.object({
      configure_dns: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'configure_dns',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: SiteSetupSchema } } },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: SiteSchema } } },
    default: ErrorResponse,
  },
})

export const getAccountSlugMembersRoute = createRoute({
  method: 'get',
  path: '/{account_slug}/members',
  tags: ['member'],
  summary: "List a team's members",
  operationId: 'listMembersForAccount',
  request: {
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(MemberSchema) } } },
    default: ErrorResponse,
  },
})

export const postAccountSlugMembersRoute = createRoute({
  method: 'post',
  path: '/{account_slug}/members',
  tags: ['member'],
  summary: 'Add a member to a team',
  operationId: 'addMemberToAccount',
  request: {
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AccountAddMemberSetupSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(MemberSchema) } } },
    default: ErrorResponse,
  },
})

export const getAccountSlugMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/{account_slug}/members/{member_id}',
  tags: ['member'],
  summary: 'Get a team member',
  operationId: 'getAccountMember',
  request: {
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
      member_id: z
        .string()
        .openapi({
          param: { name: 'member_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemberSchema } } },
    default: ErrorResponse,
  },
})

export const putAccountSlugMembersMemberIdRoute = createRoute({
  method: 'put',
  path: '/{account_slug}/members/{member_id}',
  tags: ['member'],
  summary: 'Update a team member',
  operationId: 'updateAccountMember',
  request: {
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
      member_id: z
        .string()
        .openapi({
          param: { name: 'member_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AccountUpdateMemberSetupSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemberSchema } } },
    default: ErrorResponse,
  },
})

export const deleteAccountSlugMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/{account_slug}/members/{member_id}',
  tags: ['member'],
  summary: 'Remove a team member',
  operationId: 'removeAccountMember',
  request: {
    params: z.object({
      account_slug: z
        .string()
        .openapi({
          param: { name: 'account_slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
      member_id: z
        .string()
        .openapi({
          param: { name: 'member_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Not Content' }, default: ErrorResponse },
})

export const getBillingPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/billing/payment_methods',
  tags: ['paymentMethod'],
  summary: 'List payment methods',
  operationId: 'listPaymentMethodsForUser',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(PaymentMethodSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getAccountsTypesRoute = createRoute({
  method: 'get',
  path: '/accounts/types',
  tags: ['accountType'],
  summary: 'List plans available for new teams',
  operationId: 'listAccountTypesForUser',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccountTypeSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['accountMembership'],
  summary: "List the current user's teams",
  operationId: 'listAccountsForUser',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccountMembershipSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  tags: ['accountMembership'],
  summary: 'Create a team',
  operationId: 'createAccount',
  request: {
    body: { content: { 'application/json': { schema: AccountSetupSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AccountMembershipSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}',
  tags: ['accountMembership'],
  summary: 'Get a team',
  operationId: 'getAccount',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { name: 'account_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AccountMembershipSchema } },
    },
    default: ErrorResponse,
  },
})

export const putAccountsAccountIdRoute = createRoute({
  method: 'put',
  path: '/accounts/{account_id}',
  tags: ['accountMembership'],
  summary: 'Update a team',
  operationId: 'updateAccount',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { name: 'account_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountUpdateSetupSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AccountMembershipSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteAccountsAccountIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{account_id}',
  tags: ['accountMembership'],
  summary: 'Cancel a team',
  operationId: 'cancelAccount',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { name: 'account_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Not Content' }, default: ErrorResponse },
})

export const getAccountsAccountIdAuditRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/audit',
  tags: ['auditLog'],
  summary: "List a team's audit log events",
  operationId: 'listAccountAuditEvents',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { name: 'account_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
      log_type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'log_type', in: 'query', schema: { type: 'string' }, required: false },
        }),
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AuditLogSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getAgentRunnersRoute = createRoute({
  method: 'get',
  path: '/agent_runners',
  tags: ['agentRunner'],
  summary: "List a site's agent runs",
  description:
    "Lists a site's agent runs, most recently active first. Archived runs are left out unless `state` is `archived`.",
  operationId: 'listAgentRunners',
  request: {
    query: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      account_id: z
        .string()
        .openapi({
          param: { name: 'account_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description:
              'Only runs in this state: `new`, `running`, `await_input`, `interrupted`, `error`, `done`, `cancelled` or `archived`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', in: 'query', schema: { type: 'string' }, required: false },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'branch', in: 'query', schema: { type: 'string' }, required: false },
        }),
      result_branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'result_branch',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            description: 'Only runs started by this user.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
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
            name: 'from',
            in: 'query',
            description: 'Unix timestamp. Only runs created at or after this time.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      to: z
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
            name: 'to',
            in: 'query',
            description: 'Unix timestamp. Only runs created before this time.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AgentRunnerSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postAgentRunnersRoute = createRoute({
  method: 'post',
  path: '/agent_runners',
  tags: ['agentRunner'],
  summary: 'Start an agent run',
  operationId: 'createAgentRunner',
  request: {
    query: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      deploy_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'deploy_id', in: 'query', schema: { type: 'string' }, required: false },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'branch', in: 'query', schema: { type: 'string' }, required: false },
        }),
      prompt: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'prompt', in: 'query', schema: { type: 'string' }, required: false },
        }),
      agent: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'agent', in: 'query', schema: { type: 'string' }, required: false },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'model', in: 'query', schema: { type: 'string' }, required: false },
        }),
      parent_agent_runner_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parent_agent_runner_id',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dev_server_image: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dev_server_image',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file_keys: z
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
            name: 'file_keys',
            in: 'query',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AgentRunnerSchema } } },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdAgentRunnersRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/agent_runners',
  tags: ['agentRunner'],
  summary: 'Start an agent run on a site',
  description: 'Starts an agent run on the site.',
  operationId: 'createSiteAgentRunner',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            name: 'site_id',
            in: 'path',
            required: true,
            description: "The site's ID or one of its hostnames.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AgentRunnerSetupSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AgentRunnerSchema } } },
    400: {
      description: '`prompt_required` or `invalid_request`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    403: {
      description: '`plan_not_eligible` or `ai_credit_limit_disabled`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    404: {
      description:
        "The site or deploy wasn't found (`deploy_not_found`), the deploy's files are no longer available (`deploy_zip_unavailable`), or agent runners aren't enabled for the site.",
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    422: {
      description: '`deploy_zip_unavailable`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    429: {
      description:
        '`concurrency_limit_reached`, `ai_credit_limit_exceeded` or `ai_credit_limit_reached`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAgentRunnersAgentRunnerIdRoute = createRoute({
  method: 'get',
  path: '/agent_runners/{agent_runner_id}',
  tags: ['agentRunner'],
  summary: 'Get an agent run',
  operationId: 'getAgentRunner',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AgentRunnerSchema } } },
    default: ErrorResponse,
  },
})

export const deleteAgentRunnersAgentRunnerIdRoute = createRoute({
  method: 'delete',
  path: '/agent_runners/{agent_runner_id}',
  tags: ['hiddenAgentRunner'],
  summary: 'Stop an agent run (alias)',
  description: "Same as `POST /agent_runners/{agent_runner_id}/stop`. Doesn't delete the run.",
  operationId: 'deleteAgentRunner',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        "Accepted. Same behavior as `stopAgentRunner`: the response has no body, the run's active sessions are set to `cancelled` before it returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.",
    },
    default: ErrorResponse,
  },
})

export const patchAgentRunnersAgentRunnerIdRoute = createRoute({
  method: 'patch',
  path: '/agent_runners/{agent_runner_id}',
  tags: ['agentRunner'],
  summary: 'Update an agent run',
  operationId: 'updateAgentRunner',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AgentRunnerSchema } } },
    default: ErrorResponse,
  },
})

export const postAgentRunnersAgentRunnerIdStopRoute = createRoute({
  method: 'post',
  path: '/agent_runners/{agent_runner_id}/stop',
  tags: ['agentRunner'],
  summary: 'Stop an agent run',
  description: "Stops the run's active session. Stopping happens in the background.",
  operationId: 'stopAgentRunner',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        "Accepted. The response has no body. The run's active sessions are set to `cancelled` before this returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.",
    },
    default: ErrorResponse,
  },
})

export const getAgentRunnersAgentRunnerIdDiffRoute = createRoute({
  method: 'get',
  path: '/agent_runners/{agent_runner_id}/diff',
  tags: ['agentRunner'],
  summary: "Get an agent run's diff",
  description:
    "Returns the run's changes as a unified diff. With `page`, returns that page of changed files and sets pagination headers.",
  operationId: 'getAgentRunnerDiff',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      strip_binary: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'strip_binary',
            in: 'query',
            description:
              'Replace binary file contents with a placeholder, keeping the file headers.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'The run has no changes.' },
    default: ErrorResponse,
  },
})

export const postAgentRunnersAgentRunnerIdArchiveRoute = createRoute({
  method: 'post',
  path: '/agent_runners/{agent_runner_id}/archive',
  tags: ['agentRunner'],
  summary: 'Archive an agent run',
  operationId: 'archiveAgentRunner',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        'Accepted. The response has no body. The archive is applied before this returns: `getAgentRunner` (`GET /agent_runners/{agent_runner_id}`) reports `state` as `archived`.',
    },
    404: { description: 'Not Found' },
    422: { description: 'Unprocessable Entity' },
    default: ErrorResponse,
  },
})

export const getAgentRunnersAgentRunnerIdSessionsRoute = createRoute({
  method: 'get',
  path: '/agent_runners/{agent_runner_id}/sessions',
  tags: ['agentRunnerSession'],
  summary: "List an agent run's sessions",
  operationId: 'listAgentRunnerSessions',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description:
              'Only sessions in this state: `new`, `running`, `await_input`, `interrupted`, `error`, `done` or `cancelled`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
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
            name: 'from',
            in: 'query',
            description: 'Unix timestamp. Only sessions created at or after this time.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      to: z
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
            name: 'to',
            in: 'query',
            description: 'Unix timestamp. Only sessions created before this time.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      order_by: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            schema: { type: 'string', enum: ['asc', 'desc'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AgentRunnerSessionSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postAgentRunnersAgentRunnerIdSessionsRoute = createRoute({
  method: 'post',
  path: '/agent_runners/{agent_runner_id}/sessions',
  tags: ['agentRunnerSession'],
  summary: 'Start a follow-up agent run session',
  description: 'Starts a follow-up session on the run.',
  operationId: 'createAgentRunnerSession',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      prompt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'prompt',
            in: 'query',
            description: 'Use the request body instead.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      agent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'agent',
            in: 'query',
            description: 'Use the request body instead.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description: 'Use the request body instead.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      file_keys: z
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
            name: 'file_keys',
            in: 'query',
            description: 'Use the request body instead.',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AgentRunnerSessionSetupSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AgentRunnerSessionSchema } },
    },
    400: {
      description: '`prompt_required` or `invalid_request`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    403: {
      description: '`plan_not_eligible` or `ai_credit_limit_disabled`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    409: {
      description:
        '`active_session_exists` while a session is still running, or `follow_up_unavailable` once the run is publishing or published.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    422: {
      description: '`deploy_zip_unavailable`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    429: {
      description:
        '`concurrency_limit_reached`, `ai_credit_limit_exceeded` or `ai_credit_limit_reached`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    default: ErrorResponse,
  },
})

export const getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute = createRoute({
  method: 'get',
  path: '/agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}',
  tags: ['agentRunnerSession'],
  summary: 'Get an agent run session',
  operationId: 'getAgentRunnerSession',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_runner_session_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_session_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AgentRunnerSessionSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute = createRoute({
  method: 'delete',
  path: '/agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}',
  tags: ['hiddenAgentRunner'],
  summary: 'Stop an agent run session (alias)',
  description:
    "Same as `POST /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}/stop`. Doesn't delete the session.",
  operationId: 'deleteAgentRunnerSession',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_runner_session_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_session_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        'Accepted. Same behavior as `stopAgentRunnerSession`: the response has no body, the session is set to `cancelled` before it returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.',
    },
    default: ErrorResponse,
  },
})

export const patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute = createRoute({
  method: 'patch',
  path: '/agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}',
  tags: ['agentRunnerSession'],
  summary: 'Update an agent run session',
  operationId: 'updateAgentRunnerSession',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_runner_session_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_session_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      is_published: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'is_published',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AgentRunnerSessionSchema } },
    },
    default: ErrorResponse,
  },
})

export const postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute = createRoute({
  method: 'post',
  path: '/agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}/stop',
  tags: ['agentRunnerSession'],
  summary: 'Stop an agent run session',
  description: 'Stops the session. Stopping happens in the background.',
  operationId: 'stopAgentRunnerSession',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_runner_session_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_session_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        'Accepted. The response has no body. The session is set to `cancelled` before this returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.',
    },
    default: ErrorResponse,
  },
})

export const postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute = createRoute({
  method: 'post',
  path: '/agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}/answers',
  tags: ['agentRunnerSession'],
  summary: "Answer an agent run session's pending interaction",
  description:
    'Answers or skips a pending interaction and resumes the session. A session waiting on an interaction is in the `await_input` state.',
  operationId: 'answerAgentRunnerSession',
  request: {
    params: z.object({
      agent_runner_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_runner_session_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_runner_session_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AgentRunnerSessionAnswerSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AgentRunnerSessionSchema } },
    },
    400: {
      description:
        '`ref_id_required`, `invalid_response`, or `interaction_can_only_be_skipped` when answering an `authorization` or `setup_request` interaction.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    422: {
      description: '`interaction_not_found` or `interaction_not_pending`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    429: {
      description: '`concurrency_limit_reached`.',
      content: { 'application/json': { schema: AgentRunnerErrorSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSubmissionsSubmissionIdRoute = createRoute({
  method: 'get',
  path: '/submissions/{submission_id}',
  tags: ['submission'],
  summary: 'Get a form submission',
  operationId: 'listFormSubmission',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: { name: 'submission_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SubmissionSchema) } },
    },
    default: ErrorResponse,
  },
})

export const deleteSubmissionsSubmissionIdRoute = createRoute({
  method: 'delete',
  path: '/submissions/{submission_id}',
  tags: ['submission'],
  summary: 'Delete a form submission',
  operationId: 'deleteSubmission',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: { name: 'submission_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const getSitesSiteIdServiceInstancesRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/service-instances',
  tags: ['serviceInstance'],
  summary: "List a site's add-on instances",
  operationId: 'listServiceInstancesForSite',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ServiceInstanceSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdServicesAddonInstancesRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/services/{addon}/instances',
  tags: ['serviceInstance'],
  summary: 'Create an add-on instance',
  operationId: 'createServiceInstance',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      addon: z
        .string()
        .openapi({
          param: { name: 'addon', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: CreateServiceInstanceConfigRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ServiceInstanceSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdServicesAddonInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/services/{addon}/instances/{instance_id}',
  tags: ['serviceInstance'],
  summary: 'Get an add-on instance',
  operationId: 'showServiceInstance',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      addon: z
        .string()
        .openapi({
          param: { name: 'addon', in: 'path', required: true, schema: { type: 'string' } },
        }),
      instance_id: z
        .string()
        .openapi({
          param: { name: 'instance_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ServiceInstanceSchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdServicesAddonInstancesInstanceIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/services/{addon}/instances/{instance_id}',
  tags: ['serviceInstance'],
  summary: 'Update an add-on instance',
  operationId: 'updateServiceInstance',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      addon: z
        .string()
        .openapi({
          param: { name: 'addon', in: 'path', required: true, schema: { type: 'string' } },
        }),
      instance_id: z
        .string()
        .openapi({
          param: { name: 'instance_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: CreateServiceInstanceConfigRequestBody,
  },
  responses: { 204: { description: 'No Content' }, default: ErrorResponse },
})

export const deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/services/{addon}/instances/{instance_id}',
  tags: ['serviceInstance'],
  summary: 'Delete an add-on instance',
  operationId: 'deleteServiceInstance',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      addon: z
        .string()
        .openapi({
          param: { name: 'addon', in: 'path', required: true, schema: { type: 'string' } },
        }),
      instance_id: z
        .string()
        .openapi({
          param: { name: 'instance_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const getServicesIndexRoute = createRoute({
  method: 'get',
  path: '/services/',
  tags: ['service'],
  summary: 'List add-on services',
  operationId: 'getServices',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'services',
      content: { 'application/json': { schema: z.array(ServiceSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getServicesAddonNameRoute = createRoute({
  method: 'get',
  path: '/services/{addonName}',
  tags: ['service'],
  summary: 'Get an add-on service',
  operationId: 'showService',
  request: {
    params: z.object({
      addonName: z
        .string()
        .openapi({
          param: { name: 'addonName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'services', content: { 'application/json': { schema: ServiceSchema } } },
    default: ErrorResponse,
  },
})

export const getServicesAddonNameManifestRoute = createRoute({
  method: 'get',
  path: '/services/{addonName}/manifest',
  tags: ['service'],
  summary: "Get an add-on service's manifest",
  operationId: 'showServiceManifest',
  request: {
    params: z.object({
      addonName: z
        .string()
        .openapi({
          param: { name: 'addonName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    201: {
      description: 'retrieving from provider',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponse,
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['user'],
  summary: 'Get the current user',
  operationId: 'getCurrentUser',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdTrafficSplitsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/traffic_splits',
  tags: ['splitTest'],
  summary: "List a site's split tests",
  operationId: 'getSplitTests',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'split_tests',
      content: { 'application/json': { schema: SplitTestsSchema } },
    },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdTrafficSplitsRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/traffic_splits',
  tags: ['splitTest'],
  summary: 'Create a split test',
  operationId: 'createSplitTest',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: SplitTestSetupRequestBody,
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: SplitTestSchema } } },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdTrafficSplitsSplitTestIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/traffic_splits/{split_test_id}',
  tags: ['splitTest'],
  summary: 'Get a split test',
  operationId: 'getSplitTest',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      split_test_id: z
        .string()
        .openapi({
          param: { name: 'split_test_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'split_test',
      content: { 'application/json': { schema: SplitTestSchema } },
    },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdTrafficSplitsSplitTestIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/traffic_splits/{split_test_id}',
  tags: ['splitTest'],
  summary: 'Update a split test',
  operationId: 'updateSplitTest',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      split_test_id: z
        .string()
        .openapi({
          param: { name: 'split_test_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: SplitTestSetupRequestBody,
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: SplitTestSchema } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/traffic_splits/{split_test_id}/publish',
  tags: ['splitTest'],
  summary: 'Publish a split test',
  operationId: 'enableSplitTest',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      split_test_id: z
        .string()
        .openapi({
          param: { name: 'split_test_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'enable' }, default: ErrorResponse },
})

export const postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/traffic_splits/{split_test_id}/unpublish',
  tags: ['splitTest'],
  summary: 'Unpublish a split test',
  operationId: 'disableSplitTest',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      split_test_id: z
        .string()
        .openapi({
          param: { name: 'split_test_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'disabled' }, default: ErrorResponse },
})

export const getDnsZonesRoute = createRoute({
  method: 'get',
  path: '/dns_zones',
  tags: ['dnsZone'],
  summary: 'List DNS zones',
  description:
    'Returns the DNS zones for the team given by `account_slug`, or all DNS zones the current user can access.',
  operationId: 'getDnsZones',
  request: {
    query: z.object({
      account_slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'account_slug', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'get all DNS zones the user has access to',
      content: { 'application/json': { schema: DnsZonesSchema } },
    },
    default: ErrorResponse,
  },
})

export const postDnsZonesRoute = createRoute({
  method: 'post',
  path: '/dns_zones',
  tags: ['dnsZone'],
  summary: 'Create a DNS zone',
  operationId: 'createDnsZone',
  request: {
    body: { content: { 'application/json': { schema: DnsZoneSetupSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: DnsZoneSchema } } },
    default: ErrorResponse,
  },
})

export const getDnsZonesZoneIdRoute = createRoute({
  method: 'get',
  path: '/dns_zones/{zone_id}',
  tags: ['dnsZone'],
  summary: 'Get a DNS zone',
  operationId: 'getDnsZone',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'get a single DNS zone',
      content: { 'application/json': { schema: DnsZoneSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteDnsZonesZoneIdRoute = createRoute({
  method: 'delete',
  path: '/dns_zones/{zone_id}',
  tags: ['dnsZone'],
  summary: 'Delete a DNS zone',
  operationId: 'deleteDnsZone',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'delete a single DNS zone' }, default: ErrorResponse },
})

export const putDnsZonesZoneIdTransferRoute = createRoute({
  method: 'put',
  path: '/dns_zones/{zone_id}/transfer',
  tags: ['dnsZone'],
  summary: 'Transfer a DNS zone to another team',
  operationId: 'transferDnsZone',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            in: 'query',
            description: 'the account of the dns zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      transfer_account_id: z
        .string()
        .openapi({
          param: {
            name: 'transfer_account_id',
            in: 'query',
            description: 'the account you want to transfer the dns zone to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      transfer_user_id: z
        .string()
        .openapi({
          param: {
            name: 'transfer_user_id',
            in: 'query',
            description: 'the user you want to transfer the dns zone to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transfer a DNS zone to another account',
      content: { 'application/json': { schema: DnsZoneSchema } },
    },
    default: ErrorResponse,
  },
})

export const getDnsZonesZoneIdDnsRecordsRoute = createRoute({
  method: 'get',
  path: '/dns_zones/{zone_id}/dns_records',
  tags: ['dnsZone'],
  summary: "List a DNS zone's records",
  operationId: 'getDnsRecords',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'get all DNS records for a single DNS zone',
      content: { 'application/json': { schema: DnsRecordsSchema } },
    },
    default: ErrorResponse,
  },
})

export const postDnsZonesZoneIdDnsRecordsRoute = createRoute({
  method: 'post',
  path: '/dns_zones/{zone_id}/dns_records',
  tags: ['dnsZone'],
  summary: 'Create a DNS record',
  operationId: 'createDnsRecord',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DnsRecordCreateSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: DnsRecordSchema } } },
    default: ErrorResponse,
  },
})

export const getDnsZonesZoneIdDnsRecordsDnsRecordIdRoute = createRoute({
  method: 'get',
  path: '/dns_zones/{zone_id}/dns_records/{dns_record_id}',
  tags: ['dnsZone'],
  summary: 'Get a DNS record',
  operationId: 'getIndividualDnsRecord',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      dns_record_id: z
        .string()
        .openapi({
          param: { name: 'dns_record_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'get a single DNS record',
      content: { 'application/json': { schema: DnsRecordSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRoute = createRoute({
  method: 'delete',
  path: '/dns_zones/{zone_id}/dns_records/{dns_record_id}',
  tags: ['dnsZone'],
  summary: 'Delete a DNS record',
  operationId: 'deleteDnsRecord',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { name: 'zone_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      dns_record_id: z
        .string()
        .openapi({
          param: { name: 'dns_record_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'record deleted' }, default: ErrorResponse },
})

export const getSitesSiteIdDevServersRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/dev_servers',
  tags: ['devServer'],
  summary: "List a site's dev servers",
  operationId: 'listSiteDevServers',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema, per_page: PerPageParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DevServerSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDevServersRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/dev_servers',
  tags: ['devServer'],
  summary: 'Start a dev server',
  operationId: 'createSiteDevServer',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'branch', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DevServerSchema) } },
    },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdDevServersRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/dev_servers',
  tags: ['devServer'],
  summary: "Stop a branch's dev servers",
  description: 'Stops all dev servers for a branch. Stopping happens in the background.',
  operationId: 'deleteSiteDevServers',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'branch', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    202: {
      description:
        "Accepted. The response has no body. The branch's active dev servers are set to `stopping` before this returns and shut down in the background. Poll `getSiteDevServer` (`GET /sites/{site_id}/dev_servers/{dev_server_id}`) or `listSiteDevServers` (`GET /sites/{site_id}/dev_servers`) until `state` is `done` (or `error`).",
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDevServersDevServerIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/dev_servers/{dev_server_id}',
  tags: ['devServer'],
  summary: 'Get a dev server',
  operationId: 'getSiteDevServer',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      dev_server_id: z
        .string()
        .openapi({
          param: { name: 'dev_server_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DevServerSchema } } },
  },
})

export const postSitesSiteIdDevServersDevServerIdStateRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/dev_servers/{dev_server_id}/state',
  tags: ['devServer'],
  summary: "Update a dev server's state",
  operationId: 'updateDevServerState',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      dev_server_id: z
        .string()
        .openapi({
          param: { name: 'dev_server_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              state: z.enum(['starting', 'live', 'error', 'done']),
              task_id: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: ['state'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DevServerSchema } } },
    409: { description: 'Conflict' },
  },
})

export const getSitesSiteIdDevServerHooksRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/dev_server_hooks',
  tags: ['devServerHook'],
  summary: "List a site's dev server hooks",
  operationId: 'listSiteDevServerHooks',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DevServerHookSchema) } },
    },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDevServerHooksRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/dev_server_hooks',
  tags: ['devServerHook'],
  summary: 'Create a dev server hook',
  operationId: 'createSiteDevServerHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: DevServerHookSetupRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DevServerHookSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDevServerHooksIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/dev_server_hooks/{id}',
  tags: ['devServerHook'],
  summary: 'Get a dev server hook',
  operationId: 'getSiteDevServerHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DevServerHookSchema } } },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdDevServerHooksIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/dev_server_hooks/{id}',
  tags: ['devServerHook'],
  summary: 'Update a dev server hook',
  operationId: 'updateSiteDevServerHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: DevServerHookSetupRequestBody,
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const deleteSitesSiteIdDevServerHooksIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/dev_server_hooks/{id}',
  tags: ['devServerHook'],
  summary: 'Delete a dev server hook',
  operationId: 'deleteSiteDevServerHook',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
})

export const getAiGatewayProvidersRoute = createRoute({
  method: 'get',
  path: '/ai-gateway/providers',
  tags: ['aiGateway'],
  summary: 'List AI Gateway providers and models',
  operationId: 'getAIGatewayProviders',
  responses: {
    200: {
      description: 'The mapping of providers and supported models',
      content: {
        'application/json': {
          schema: z
            .object({ providers: z.record(z.string(), ProviderDefinitionSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getSitesSiteIdAiGatewayTokenRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/ai-gateway/token',
  tags: ['aiGateway'],
  summary: "Get a site's AI Gateway token",
  description: 'Returns an AI Gateway token for a specific site',
  operationId: 'getAIGatewayToken',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            name: 'site_id',
            in: 'path',
            required: true,
            description: 'The site ID',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AI Gateway token for the site',
      content: { 'application/json': { schema: AiGatewayTokenSchema } },
    },
    404: { description: 'AI Gateway not available for this site' },
    default: ErrorResponse,
  },
})

export const getAccountsAccountIdAiGatewayTokenRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/ai-gateway/token',
  tags: ['aiGateway'],
  summary: "Get a team's AI Gateway token",
  description: 'Returns an AI Gateway token scoped to an account',
  operationId: 'getAccountAIGatewayToken',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            in: 'path',
            required: true,
            description: 'The account ID',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AI Gateway token for the account',
      content: { 'application/json': { schema: AiGatewayTokenSchema } },
    },
    404: { description: 'AI Gateway not available for this account' },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database',
  tags: ['database'],
  summary: 'Get a site database',
  description: 'Returns the database connection string for the specified site.',
  operationId: 'getSiteDatabase',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      role: z
        .enum(['netlifydb_owner', 'netlifydb_readonly'])
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description:
              'The database role to use for the connection string. Defaults to netlifydb_owner if not specified.',
            schema: { type: 'string', enum: ['netlifydb_owner', 'netlifydb_readonly'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DatabaseResponseSchema } } },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDatabaseRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/database',
  tags: ['database'],
  summary: 'Create a site database',
  description:
    "Creates a new database for the specified site. If a database already exists, returns the existing connection string. The database region defaults to the site's functions region if not specified.",
  operationId: 'createSiteDatabase',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateDatabaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Database already exists',
      content: { 'application/json': { schema: DatabaseResponseSchema } },
    },
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DatabaseResponseSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdDatabaseRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/database',
  tags: ['database'],
  summary: 'Delete a site database',
  description:
    'Deletes the database and all associated branches and snapshots for the specified site.',
  operationId: 'deleteSiteDatabase',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const postSitesSiteIdDatabaseBranchRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/database/branch',
  tags: ['database'],
  summary: 'Create a database branch',
  description:
    'Creates a new database branch. If a branch already exists for the specified branch ID, returns the existing connection string.',
  operationId: 'createSiteDatabaseBranch',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatabaseBranchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Branch already exists',
      content: { 'application/json': { schema: DatabaseBranchResponseSchema } },
    },
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DatabaseBranchResponseSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseBranchesRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database/branches',
  tags: ['database'],
  summary: 'List database branches',
  description: "Returns all branches for the site's database with compute status and metadata.",
  operationId: 'listSiteDatabaseBranches',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseBranchesResponseSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseBranchBranchIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database/branch/{branch_id}',
  tags: ['database'],
  summary: 'Get a database branch',
  description: 'Returns the database branch connection string for a specific branch.',
  operationId: 'getSiteDatabaseBranch',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      branch_id: z
        .string()
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            required: true,
            description: 'The branch ID',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      role: z
        .enum(['netlifydb_owner', 'netlifydb_readonly'])
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description:
              'The database role to use for the connection string. Defaults to netlifydb_owner if not specified.',
            schema: { type: 'string', enum: ['netlifydb_owner', 'netlifydb_readonly'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseBranchResponseSchema } },
    },
    404: { description: 'Branch not found' },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdDatabaseBranchBranchIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/database/branch/{branch_id}',
  tags: ['database'],
  summary: 'Delete a database branch',
  description: 'Deletes a database branch.',
  operationId: 'deleteSiteDatabaseBranch',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      branch_id: z
        .string()
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            required: true,
            description: 'The branch ID',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const postSitesSiteIdDatabaseBranchBranchIdResetRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/database/branch/{branch_id}/reset',
  tags: ['database'],
  summary: 'Reset a database branch',
  description:
    'Resets a non-production database branch by re-forking it from a source branch (defaults to the production branch). If the target branch is already in sync with the source, returns the existing connection string without performing a reset, unless `force=true` is passed. The production branch cannot be reset.',
  operationId: 'resetSiteDatabaseBranch',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      branch_id: z
        .string()
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            required: true,
            description: 'The branch ID to reset',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'If true, resets the branch even when it is already in sync with the source.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      role: z
        .enum(['netlifydb_owner', 'netlifydb_readonly'])
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description:
              'The database role to use for the returned connection string. Defaults to netlifydb_owner if not specified.',
            schema: { type: 'string', enum: ['netlifydb_owner', 'netlifydb_readonly'] },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetDatabaseBranchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResetDatabaseBranchResponseSchema } },
    },
    400: {
      description:
        'Invalid request — for example, the target is the production branch or the source branch is the same as the target.',
    },
    404: { description: 'Database or branch not found' },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/database/branch/{branch_id}/compute/settings',
  tags: ['database'],
  summary: "Set a database branch's compute settings",
  description:
    'Sets compute settings for a specific database branch, overriding project-level settings. Requires a Pro or higher plan.',
  operationId: 'setSiteDatabaseBranchComputeSettings',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      branch_id: z
        .string()
        .openapi({
          param: {
            name: 'branch_id',
            in: 'path',
            required: true,
            description: 'The branch ID',
            schema: { type: 'string' },
          },
        }),
    }),
    body: DatabaseComputeSettingsRequestRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseComputeSettingsSchema } },
    },
    403: { description: 'Compute customization requires a Pro or higher plan' },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseComputeSettingsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database/compute/settings',
  tags: ['database'],
  summary: 'Get database compute settings',
  description:
    'Returns the project-level compute settings for the database. Returns effective settings (custom or tier defaults). Requires a Pro or higher plan.',
  operationId: 'getSiteDatabaseComputeSettings',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseComputeSettingsSchema } },
    },
    403: { description: 'Compute customization requires a Pro or higher plan' },
    default: ErrorResponse,
  },
})

export const putSitesSiteIdDatabaseComputeSettingsRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/database/compute/settings',
  tags: ['database'],
  summary: 'Set database compute settings',
  description:
    'Sets project-level compute settings for the database. Applied to new branches. Can be overridden per-branch. Requires a Pro or higher plan.',
  operationId: 'setSiteDatabaseComputeSettings',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: DatabaseComputeSettingsRequestRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseComputeSettingsSchema } },
    },
    403: { description: 'Compute customization requires a Pro or higher plan' },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdDatabaseComputeSettingsRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/database/compute/settings',
  tags: ['database'],
  summary: 'Reset database compute settings to defaults',
  description:
    'Resets project-level compute settings to tier defaults. Requires a Pro or higher plan.',
  operationId: 'clearSiteDatabaseComputeSettings',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Cleared' },
    403: { description: 'Compute customization requires a Pro or higher plan' },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseMigrationsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database/migrations',
  tags: ['database'],
  summary: 'List database migrations',
  description:
    'Returns the list of migrations available for the specified branch, indicating which ones have been applied to the database.',
  operationId: 'listSiteDatabaseMigrations',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'branch',
            in: 'query',
            description:
              'The branch ID to list migrations for. Defaults to "production" if not specified.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListDatabaseMigrationsResponseSchema } },
    },
    404: { description: 'Database or branch not found' },
    423: { description: 'Database is disabled' },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseMigrationsNameRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database/migrations/{name}',
  tags: ['database'],
  summary: 'Get a database migration',
  description: 'Returns the contents of a named migration for the specified branch.',
  operationId: 'getSiteDatabaseMigration',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The migration name',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'branch',
            in: 'query',
            description:
              "The branch ID to look up the migration on. Defaults to the currently published deploy's branch.",
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseMigrationDetailSchema } },
    },
    404: { description: 'Migration, database, or branch not found' },
    423: { description: 'Database is disabled' },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDatabaseMigrationsDeployIdRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/database/migrations/{deploy_id}',
  tags: ['database'],
  summary: 'Run database migrations for a deploy',
  description:
    'Runs database migrations for the specified deploy. Finds the deploy and determines the appropriate branch.',
  operationId: 'runSiteDatabaseMigrations',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploy_id: z
        .string()
        .openapi({
          param: {
            name: 'deploy_id',
            in: 'path',
            required: true,
            description: 'The deploy ID to run migrations for',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunDatabaseMigrationsRequestSchema } } },
  },
  responses: {
    200: { description: 'OK' },
    409: { description: 'Migration conflict - migration modified or removed after being applied' },
    422: { description: 'Migration validation failed' },
    default: ErrorResponse,
  },
})

export const postSitesSiteIdDatabaseSnapshotRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/database/snapshot',
  tags: ['database'],
  summary: 'Create a database snapshot',
  description:
    'Creates a point-in-time snapshot of a database branch. Defaults to the production branch if no branch name is specified.',
  operationId: 'createSiteDatabaseSnapshot',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateDatabaseSnapshotRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DatabaseSnapshotSchema } },
    },
    default: ErrorResponse,
  },
})

export const getSitesSiteIdDatabaseSnapshotsRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/database/snapshots',
  tags: ['database'],
  summary: 'List database snapshots',
  description: "Returns all snapshots for the site's database.",
  operationId: 'listSiteDatabaseSnapshots',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DatabaseSnapshotsResponseSchema } },
    },
    default: ErrorResponse,
  },
})

export const deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/database/snapshot/{snapshot_id}',
  tags: ['database'],
  summary: 'Delete a database snapshot',
  description: 'Deletes a database snapshot.',
  operationId: 'deleteSiteDatabaseSnapshot',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      snapshot_id: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_id',
            in: 'path',
            required: true,
            description: 'The snapshot ID',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' }, default: ErrorResponse },
})

export const postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/database/snapshot/{snapshot_id}/restore',
  tags: ['database'],
  summary: 'Restore a database snapshot',
  description:
    'Restores a snapshot to a database branch. Defaults to the production branch if no branch_name is specified.',
  operationId: 'restoreSiteDatabaseSnapshot',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: { name: 'site_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      snapshot_id: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_id',
            in: 'path',
            required: true,
            description: 'The snapshot ID to restore',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestoreDatabaseSnapshotRequestSchema } } },
  },
  responses: { 200: { description: 'OK' }, default: ErrorResponse },
})
