import { createRoute, z } from '@hono/zod-openapi'

type JsonValueOutputType =
  | ((string | number | boolean) | null)
  | JsonValueOutputType[]
  | { [key: string]: JsonValueOutputType }

const BranchDetailResponseOutputSchema = z
  .object({
    ref: z.string(),
    postgres_version: z.string(),
    postgres_engine: z.string(),
    release_channel: z.string(),
    status: z.enum([
      'INACTIVE',
      'ACTIVE_HEALTHY',
      'ACTIVE_UNHEALTHY',
      'COMING_UP',
      'UNKNOWN',
      'GOING_DOWN',
      'INIT_FAILED',
      'REMOVED',
      'RESTORING',
      'UPGRADING',
      'PAUSING',
      'RESTORE_FAILED',
      'RESTARTING',
      'PAUSE_FAILED',
      'RESIZING',
    ]),
    db_host: z.string(),
    db_port: z.int().positive().max(9007199254740991),
    db_user: z.string().exactOptional(),
    db_pass: z.string().exactOptional(),
    jwt_secret: z.string().exactOptional(),
  })
  .openapi({
    required: [
      'ref',
      'postgres_version',
      'postgres_engine',
      'release_channel',
      'status',
      'db_host',
      'db_port',
    ],
  })
  .openapi('BranchDetailResponseOutput')

const UpdateBranchBodySchema = z
  .object({
    branch_name: z.string().exactOptional(),
    git_branch: z.string().exactOptional(),
    reset_on_push: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field is deprecated and will be ignored. Use v1-reset-a-branch endpoint directly instead.',
        deprecated: true,
      }),
    persistent: z.boolean().exactOptional(),
    status: z
      .enum([
        'CREATING_PROJECT',
        'RUNNING_MIGRATIONS',
        'MIGRATIONS_PASSED',
        'MIGRATIONS_FAILED',
        'FUNCTIONS_DEPLOYED',
        'FUNCTIONS_FAILED',
      ])
      .exactOptional(),
    request_review: z.boolean().exactOptional(),
    notify_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'HTTP endpoint to receive branch status updates.' }),
  })
  .openapi({
    example: {
      branch_name: 'preview-login-page',
      git_branch: 'feature/login-page',
      persistent: true,
      request_review: true,
      notify_url: 'https://example.com/webhooks/branches',
    },
    required: [],
  })
  .openapi('UpdateBranchBody')

const BranchResponseOutputSchema = z
  .object({
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
    name: z.string(),
    project_ref: z.string(),
    parent_project_ref: z.string(),
    is_default: z.boolean(),
    git_branch: z.string().exactOptional(),
    pr_number: z.int32().min(-9007199254740991).max(9007199254740991).exactOptional(),
    latest_check_run_id: z
      .number()
      .exactOptional()
      .openapi({
        description: 'This field is deprecated and will not be populated.',
        deprecated: true,
      }),
    persistent: z.boolean(),
    status: z
      .enum([
        'CREATING_PROJECT',
        'RUNNING_MIGRATIONS',
        'MIGRATIONS_PASSED',
        'MIGRATIONS_FAILED',
        'FUNCTIONS_DEPLOYED',
        'FUNCTIONS_FAILED',
      ])
      .openapi({
        description: 'This field is deprecated. List action runs to get branch status instead.',
        deprecated: true,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      ),
    updated_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      ),
    review_requested_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional(),
    with_data: z.boolean(),
    notify_url: z.url().exactOptional(),
    deletion_scheduled_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional(),
    preview_project_status: z
      .enum([
        'INACTIVE',
        'ACTIVE_HEALTHY',
        'ACTIVE_UNHEALTHY',
        'COMING_UP',
        'UNKNOWN',
        'GOING_DOWN',
        'INIT_FAILED',
        'REMOVED',
        'RESTORING',
        'UPGRADING',
        'PAUSING',
        'RESTORE_FAILED',
        'RESTARTING',
        'PAUSE_FAILED',
        'RESIZING',
      ])
      .exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'name',
      'project_ref',
      'parent_project_ref',
      'is_default',
      'persistent',
      'status',
      'created_at',
      'updated_at',
      'with_data',
    ],
  })
  .openapi('BranchResponseOutput')

const BranchDeleteResponseOutputSchema = z
  .object({ message: z.literal('ok') })
  .openapi({ required: ['message'] })
  .openapi('BranchDeleteResponseOutput')

const BranchActionBodySchema = z
  .object({ migration_version: z.string().exactOptional() })
  .openapi({ example: { migration_version: '20250312000000' }, required: [] })
  .openapi('BranchActionBody')

const BranchUpdateResponseOutputSchema = z
  .object({ workflow_run_id: z.string(), message: z.literal('ok') })
  .openapi({ required: ['workflow_run_id', 'message'] })
  .openapi('BranchUpdateResponseOutput')

const BranchRestoreResponseOutputSchema = z
  .object({ message: z.literal('Branch restoration initiated') })
  .openapi({ required: ['message'] })
  .openapi('BranchRestoreResponseOutput')

const V1ProjectWithDatabaseResponseOutputSchema = z
  .object({
    id: z.string().openapi({ deprecated: true, description: 'Deprecated: Use `ref` instead.' }),
    ref: z
      .string()
      .regex(/^[a-z]+$/)
      .length(20)
      .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
    organization_id: z
      .string()
      .openapi({ description: 'Deprecated: Use `organization_slug` instead.', deprecated: true }),
    organization_slug: z
      .string()
      .regex(/^[\w-]+$/)
      .openapi({ description: 'Organization slug', example: 'tsrqponmlkjihgfedcba' }),
    name: z.string().openapi({ description: 'Name of your project' }),
    region: z.string().openapi({ description: 'Region of your project' }),
    created_at: z.string().openapi({ description: 'Creation timestamp' }),
    status: z.enum([
      'INACTIVE',
      'ACTIVE_HEALTHY',
      'ACTIVE_UNHEALTHY',
      'COMING_UP',
      'UNKNOWN',
      'GOING_DOWN',
      'INIT_FAILED',
      'REMOVED',
      'RESTORING',
      'UPGRADING',
      'PAUSING',
      'RESTORE_FAILED',
      'RESTARTING',
      'PAUSE_FAILED',
      'RESIZING',
    ]),
    database: z
      .object({
        host: z.string().openapi({ description: 'Database host' }),
        version: z.string().openapi({ description: 'Database version' }),
        postgres_engine: z.string().openapi({ description: 'Database engine' }),
        release_channel: z.string().openapi({ description: 'Release channel' }),
      })
      .openapi({ required: ['host', 'version', 'postgres_engine', 'release_channel'] }),
  })
  .openapi({
    required: [
      'id',
      'ref',
      'organization_id',
      'organization_slug',
      'name',
      'region',
      'created_at',
      'status',
      'database',
    ],
  })
  .openapi('V1ProjectWithDatabaseResponseOutput')

const V1CreateProjectBodySchema = z
  .strictObject({
    db_pass: z.string().openapi({ description: 'Database password' }),
    name: z.string().max(256).openapi({ description: 'Name of your project' }),
    organization_id: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated: Use `organization_slug` instead.' }),
    organization_slug: z
      .string()
      .regex(/^[\w-]+$/)
      .openapi({ description: 'Organization slug', example: 'tsrqponmlkjihgfedcba' }),
    plan: z
      .enum(['free', 'pro'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Subscription Plan is now set on organization level and is ignored in this request',
      }),
    region: z
      .enum([
        'us-east-1',
        'us-east-2',
        'us-west-1',
        'us-west-2',
        'ap-east-1',
        'ap-southeast-1',
        'ap-northeast-1',
        'ap-northeast-2',
        'ap-southeast-2',
        'eu-west-1',
        'eu-west-2',
        'eu-west-3',
        'eu-north-1',
        'eu-central-1',
        'eu-central-2',
        'ca-central-1',
        'ap-south-1',
        'sa-east-1',
      ])
      .exactOptional()
      .openapi({
        description: 'Region you want your server to reside in. Use region_selection instead.',
        deprecated: true,
      }),
    region_selection: z
      .xor([
        z
          .object({
            type: z.literal('specific'),
            code: z
              .enum([
                'us-east-1',
                'us-east-2',
                'us-west-1',
                'us-west-2',
                'ap-east-1',
                'ap-southeast-1',
                'ap-northeast-1',
                'ap-northeast-2',
                'ap-southeast-2',
                'eu-west-1',
                'eu-west-2',
                'eu-west-3',
                'eu-north-1',
                'eu-central-1',
                'eu-central-2',
                'ca-central-1',
                'ap-south-1',
                'sa-east-1',
              ])
              .openapi({
                description:
                  'Specific region code. The codes supported are not a stable API, and should be retrieved from the /available-regions endpoint.',
              }),
          })
          .openapi({ required: ['type', 'code'] }),
        z
          .object({
            type: z.literal('smartGroup'),
            code: z
              .enum(['americas', 'emea', 'apac'])
              .openapi({
                description:
                  "The Smart Region Group's code. The codes supported are not a stable API, and should be retrieved from the /available-regions endpoint.",
              }),
          })
          .openapi({ required: ['type', 'code'] }),
      ])
      .exactOptional()
      .openapi({
        description: 'Region selection. Only one of region or region_selection can be specified.',
      }),
    kps_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'This field is deprecated and is ignored in this request',
      }),
    desired_instance_size: z
      .enum([
        'nano',
        'micro',
        'small',
        'medium',
        'large',
        'xlarge',
        '2xlarge',
        '4xlarge',
        '8xlarge',
        '12xlarge',
        '16xlarge',
        '24xlarge',
        '24xlarge_optimized_memory',
        '24xlarge_optimized_cpu',
        '24xlarge_high_memory',
        '48xlarge',
        '48xlarge_optimized_memory',
        '48xlarge_optimized_cpu',
        '48xlarge_high_memory',
      ])
      .exactOptional()
      .openapi({
        description:
          'Desired instance size. Omit this field to always default to the smallest possible size.',
      }),
    template_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'Template URL used to create the project from the CLI.' }),
    release_channel: z.null().nullable().exactOptional().openapi({ deprecated: true }),
    postgres_engine: z.null().nullable().exactOptional().openapi({ deprecated: true }),
    high_availability: z
      .boolean()
      .exactOptional()
      .openapi({
        description: '[Experimental] Whether to enable high availability for the project.',
      }),
  })
  .openapi({
    required: ['db_pass', 'name', 'organization_slug'],
    example: {
      db_pass: 'correct-horse-battery-staple',
      name: 'acme-prod',
      organization_slug: 'tsrqponmlkjihgfedcba',
      region: 'us-east-1',
    },
  })
  .openapi('V1CreateProjectBody')

const V1ProjectResponseOutputSchema = z
  .object({
    id: z.string().openapi({ deprecated: true, description: 'Deprecated: Use `ref` instead.' }),
    ref: z
      .string()
      .regex(/^[a-z]+$/)
      .length(20)
      .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
    organization_id: z
      .string()
      .openapi({ description: 'Deprecated: Use `organization_slug` instead.', deprecated: true }),
    organization_slug: z
      .string()
      .regex(/^[\w-]+$/)
      .openapi({ description: 'Organization slug', example: 'tsrqponmlkjihgfedcba' }),
    name: z.string().openapi({ description: 'Name of your project' }),
    region: z.string().openapi({ description: 'Region of your project' }),
    created_at: z.string().openapi({ description: 'Creation timestamp' }),
    status: z.enum([
      'INACTIVE',
      'ACTIVE_HEALTHY',
      'ACTIVE_UNHEALTHY',
      'COMING_UP',
      'UNKNOWN',
      'GOING_DOWN',
      'INIT_FAILED',
      'REMOVED',
      'RESTORING',
      'UPGRADING',
      'PAUSING',
      'RESTORE_FAILED',
      'RESTARTING',
      'PAUSE_FAILED',
      'RESIZING',
    ]),
  })
  .openapi({
    required: [
      'id',
      'ref',
      'organization_id',
      'organization_slug',
      'name',
      'region',
      'created_at',
      'status',
    ],
  })
  .openapi('V1ProjectResponseOutput')

const RegionsInfoV1OutputSchema = z
  .object({
    recommendations: z
      .object({
        smartGroup: z
          .object({
            name: z.string(),
            code: z.enum(['americas', 'emea', 'apac']),
            type: z.literal('smartGroup'),
          })
          .openapi({ required: ['name', 'code', 'type'] }),
        specific: z.array(
          z
            .object({
              name: z.string(),
              code: z.enum([
                'us-east-1',
                'us-east-2',
                'us-west-1',
                'us-west-2',
                'ap-southeast-1',
                'ap-northeast-1',
                'ap-northeast-2',
                'ap-east-1',
                'ap-southeast-2',
                'eu-west-1',
                'eu-west-2',
                'eu-west-3',
                'eu-north-1',
                'eu-central-1',
                'eu-central-2',
                'ca-central-1',
                'ap-south-1',
                'sa-east-1',
              ]),
              type: z.literal('specific'),
              provider: z.enum(['AWS', 'AWS_K8S', 'AWS_NIMBUS']),
              status: z.enum(['capacity', 'other']).exactOptional(),
            })
            .openapi({ required: ['name', 'code', 'type', 'provider'] }),
        ),
      })
      .openapi({ required: ['smartGroup', 'specific'] }),
    all: z
      .object({
        smartGroup: z.array(
          z
            .object({
              name: z.string(),
              code: z.enum(['americas', 'emea', 'apac']),
              type: z.literal('smartGroup'),
            })
            .openapi({ required: ['name', 'code', 'type'] }),
        ),
        specific: z.array(
          z
            .object({
              name: z.string(),
              code: z.enum([
                'us-east-1',
                'us-east-2',
                'us-west-1',
                'us-west-2',
                'ap-southeast-1',
                'ap-northeast-1',
                'ap-northeast-2',
                'ap-east-1',
                'ap-southeast-2',
                'eu-west-1',
                'eu-west-2',
                'eu-west-3',
                'eu-north-1',
                'eu-central-1',
                'eu-central-2',
                'ca-central-1',
                'ap-south-1',
                'sa-east-1',
              ]),
              type: z.literal('specific'),
              provider: z.enum(['AWS', 'AWS_K8S', 'AWS_NIMBUS']),
              status: z.enum(['capacity', 'other']).exactOptional(),
            })
            .openapi({ required: ['name', 'code', 'type', 'provider'] }),
        ),
      })
      .openapi({ required: ['smartGroup', 'specific'] }),
  })
  .openapi({ required: ['recommendations', 'all'] })
  .openapi('RegionsInfoV1Output')

const OrganizationResponseV1OutputSchema = z
  .object({
    id: z.string().openapi({ description: 'Deprecated: Use `slug` instead.', deprecated: true }),
    slug: z
      .string()
      .regex(/^[\w-]+$/)
      .openapi({ description: 'Organization slug', example: 'tsrqponmlkjihgfedcba' }),
    name: z.string(),
  })
  .openapi({ required: ['id', 'slug', 'name'] })
  .openapi('OrganizationResponseV1Output')

const CreateOrganizationV1Schema = z
  .strictObject({ name: z.string().max(256) })
  .openapi({ required: ['name'], example: { name: 'Acme' } })
  .openapi('CreateOrganizationV1')

const OAuthTokenBodySchema = z
  .strictObject({
    grant_type: z
      .enum(['authorization_code', 'refresh_token', 'urn:ietf:params:oauth:grant-type:jwt-bearer'])
      .exactOptional(),
    client_id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .exactOptional(),
    client_secret: z.string().exactOptional(),
    code: z.string().exactOptional(),
    code_verifier: z.string().exactOptional(),
    redirect_uri: z.string().exactOptional(),
    refresh_token: z.string().exactOptional(),
    assertion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IDJAG assertion JWT for grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer. Beta - available on Team and Enterprise plans only.',
      }),
    resource: z
      .url()
      .exactOptional()
      .openapi({ description: 'Resource indicator for MCP (Model Context Protocol) clients' }),
    scope: z.string().exactOptional(),
  })
  .openapi({
    example: {
      grant_type: 'authorization_code',
      client_id: '66666666-6666-4666-8666-666666666666',
      client_secret: 'sb_secret_live_example_9f4d3a206b2e4a7e8c91',
      code: 'oauth_code_9f4d3a206b2e4a7e8c91',
      code_verifier: 'qW0Z6d9pQnW0mL1dK1q9wFq6Yz2nV5rA8jT3mP7sH4c',
      redirect_uri: 'https://app.acme.com/auth/callback',
      scope: 'projects:read projects:write',
    },
    required: [],
  })
  .openapi('OAuthTokenBody')

const OAuthTokenResponseOutputSchema = z
  .object({
    access_token: z.string(),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`.',
      }),
    expires_in: z.int().min(-9007199254740991).max(9007199254740991),
    token_type: z.literal('Bearer'),
  })
  .openapi({ required: ['access_token', 'expires_in', 'token_type'] })
  .openapi('OAuthTokenResponseOutput')

const OAuthRevokeTokenBodySchema = z
  .strictObject({
    client_id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
    client_secret: z.string(),
    refresh_token: z.string(),
  })
  .openapi({
    required: ['client_id', 'client_secret', 'refresh_token'],
    example: {
      client_id: '66666666-6666-4666-8666-666666666666',
      client_secret: 'sb_secret_live_example_9f4d3a206b2e4a7e8c91',
      refresh_token: 'oauth_refresh_9f4d3a206b2e4a7e8c91',
    },
  })
  .openapi('OAuthRevokeTokenBody')

const SnippetListOutputSchema = z
  .object({
    data: z.array(
      z
        .object({
          id: z.string(),
          inserted_at: z.string(),
          updated_at: z.string(),
          type: z.literal('sql'),
          visibility: z.enum(['user', 'project', 'org', 'public']),
          name: z.string(),
          description: z.string().nullable(),
          project: z
            .object({ id: z.number(), name: z.string() })
            .openapi({ required: ['id', 'name'] }),
          owner: z
            .object({ id: z.number(), username: z.string() })
            .openapi({ required: ['id', 'username'] }),
          updated_by: z
            .object({ id: z.number(), username: z.string() })
            .openapi({ required: ['id', 'username'] }),
          favorite: z.boolean(),
        })
        .openapi({
          required: [
            'id',
            'inserted_at',
            'updated_at',
            'type',
            'visibility',
            'name',
            'description',
            'project',
            'owner',
            'updated_by',
            'favorite',
          ],
        }),
    ),
    cursor: z.string().exactOptional(),
  })
  .openapi({ required: ['data'] })
  .openapi('SnippetListOutput')

const SnippetResponseOutputSchema = z
  .object({
    id: z.string(),
    inserted_at: z.string(),
    updated_at: z.string(),
    type: z.literal('sql'),
    visibility: z.enum(['user', 'project', 'org', 'public']),
    name: z.string(),
    description: z.string().nullable(),
    project: z.object({ id: z.number(), name: z.string() }).openapi({ required: ['id', 'name'] }),
    owner: z
      .object({ id: z.number(), username: z.string() })
      .openapi({ required: ['id', 'username'] }),
    updated_by: z
      .object({ id: z.number(), username: z.string() })
      .openapi({ required: ['id', 'username'] }),
    favorite: z.boolean(),
    content: z
      .object({
        favorite: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Rely on root-level favorite property instead.',
          }),
        schema_version: z.string().exactOptional(),
        sql: z.string(),
      })
      .openapi({ required: ['sql'] }),
  })
  .openapi({
    required: [
      'id',
      'inserted_at',
      'updated_at',
      'type',
      'visibility',
      'name',
      'description',
      'project',
      'owner',
      'updated_by',
      'favorite',
      'content',
    ],
  })
  .openapi('SnippetResponseOutput')

const V1ProfileResponseOutputSchema = z
  .object({ gotrue_id: z.string(), primary_email: z.string(), username: z.string() })
  .openapi({ required: ['gotrue_id', 'primary_email', 'username'] })
  .openapi('V1ProfileResponseOutput')

const ListActionRunResponseOutputSchema = z
  .array(
    z
      .object({
        id: z.string(),
        branch_id: z.string(),
        run_steps: z.array(
          z
            .object({
              name: z.enum(['clone', 'pull', 'health', 'configure', 'migrate', 'seed', 'deploy']),
              status: z.enum([
                'CREATED',
                'DEAD',
                'EXITED',
                'PAUSED',
                'REMOVING',
                'RESTARTING',
                'RUNNING',
              ]),
              created_at: z.string(),
              updated_at: z.string(),
            })
            .openapi({ required: ['name', 'status', 'created_at', 'updated_at'] }),
        ),
        git_config: z.any().nullable().exactOptional(),
        workdir: z.string().nullable(),
        check_run_id: z.number().nullable(),
        created_at: z.string(),
        updated_at: z.string(),
      })
      .openapi({
        required: [
          'id',
          'branch_id',
          'run_steps',
          'workdir',
          'check_run_id',
          'created_at',
          'updated_at',
        ],
      }),
  )
  .openapi('ListActionRunResponseOutput')

const ActionRunResponseOutputSchema = z
  .object({
    id: z.string(),
    branch_id: z.string(),
    run_steps: z.array(
      z
        .object({
          name: z.enum(['clone', 'pull', 'health', 'configure', 'migrate', 'seed', 'deploy']),
          status: z.enum([
            'CREATED',
            'DEAD',
            'EXITED',
            'PAUSED',
            'REMOVING',
            'RESTARTING',
            'RUNNING',
          ]),
          created_at: z.string(),
          updated_at: z.string(),
        })
        .openapi({ required: ['name', 'status', 'created_at', 'updated_at'] }),
    ),
    git_config: z.any().nullable().exactOptional(),
    workdir: z.string().nullable(),
    check_run_id: z.number().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .openapi({
    required: [
      'id',
      'branch_id',
      'run_steps',
      'workdir',
      'check_run_id',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('ActionRunResponseOutput')

const UpdateRunStatusBodySchema = z
  .object({
    clone: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
    pull: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
    health: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
    configure: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
    migrate: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
    seed: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
    deploy: z
      .enum(['CREATED', 'DEAD', 'EXITED', 'PAUSED', 'REMOVING', 'RESTARTING', 'RUNNING'])
      .exactOptional(),
  })
  .openapi({
    example: { clone: 'RUNNING', configure: 'RUNNING', migrate: 'RUNNING', deploy: 'CREATED' },
    required: [],
  })
  .openapi('UpdateRunStatusBody')

const UpdateRunStatusResponseOutputSchema = z
  .object({ message: z.literal('ok') })
  .openapi({ required: ['message'] })
  .openapi('UpdateRunStatusResponseOutput')

const ApiKeyResponseOutputSchema = z
  .object({
    api_key: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    type: z
      .union([z.literal('legacy'), z.literal('publishable'), z.literal('secret'), z.literal(null)])
      .nullable()
      .exactOptional(),
    prefix: z.string().nullable().exactOptional(),
    name: z.string(),
    description: z.string().nullable().exactOptional(),
    hash: z.string().nullable().exactOptional(),
    secret_jwt_template: z.record(z.string(), z.any()).nullable().exactOptional(),
    inserted_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ApiKeyResponseOutput')

const LegacyApiKeysResponseOutputSchema = z
  .object({ enabled: z.boolean() })
  .openapi({ required: ['enabled'] })
  .openapi('LegacyApiKeysResponseOutput')

const CreateApiKeyBodySchema = z
  .object({
    type: z.enum(['publishable', 'secret']),
    name: z
      .string()
      .regex(/^[a-z_][a-z0-9_]+$/)
      .min(4)
      .max(64),
    description: z.string().nullable().exactOptional(),
    secret_jwt_template: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .openapi({
    required: ['type', 'name'],
    example: { type: 'secret', name: 'ci_secret_key', description: 'CI deploy key' },
  })
  .openapi('CreateApiKeyBody')

const UpdateApiKeyBodySchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-z_][a-z0-9_]+$/)
      .min(4)
      .max(64)
      .exactOptional(),
    description: z.string().nullable().exactOptional(),
    secret_jwt_template: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .openapi({
    example: { name: 'ci_secret_key_rotated', description: 'Rotated after March release' },
    required: [],
  })
  .openapi('UpdateApiKeyBody')

const CreateBranchBodySchema = z
  .object({
    branch_name: z.string().min(1),
    git_branch: z.string().exactOptional(),
    is_default: z.boolean().exactOptional(),
    persistent: z.boolean().exactOptional(),
    region: z.string().exactOptional(),
    desired_instance_size: z
      .enum([
        'pico',
        'nano',
        'micro',
        'small',
        'medium',
        'large',
        'xlarge',
        '2xlarge',
        '4xlarge',
        '8xlarge',
        '12xlarge',
        '16xlarge',
        '24xlarge',
        '24xlarge_optimized_memory',
        '24xlarge_optimized_cpu',
        '24xlarge_high_memory',
        '48xlarge',
        '48xlarge_optimized_memory',
        '48xlarge_optimized_cpu',
        '48xlarge_high_memory',
      ])
      .exactOptional(),
    release_channel: z
      .enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview'])
      .exactOptional()
      .openapi({ description: 'Release channel. If not provided, GA will be used.' }),
    postgres_engine: z
      .enum(['15', '17', '17-oriole'])
      .exactOptional()
      .openapi({
        description: 'Postgres engine version. If not provided, the latest version will be used.',
      }),
    secrets: z.record(z.string(), z.string()).exactOptional(),
    with_data: z.boolean().exactOptional(),
    notify_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'HTTP endpoint to receive branch status updates.' }),
  })
  .openapi({
    required: ['branch_name'],
    example: {
      branch_name: 'preview-login-page',
      git_branch: 'feature/login-page',
      persistent: true,
      with_data: false,
      notify_url: 'https://example.com/webhooks/branches',
    },
  })
  .openapi('CreateBranchBody')

const JsonValueOutputSchema: z.ZodType<JsonValueOutputType> = z
  .lazy(() =>
    z
      .union([
        z.union([z.string(), z.number(), z.boolean()]).nullable(),
        z.array(JsonValueOutputSchema),
        z.record(z.string(), JsonValueOutputSchema),
      ])
      .openapi({ description: 'Any JSON-serializable value' }),
  )
  .openapi('JsonValueOutput')

const UpdateCustomHostnameResponseOutputSchema = z
  .object({
    status: z.enum([
      '1_not_started',
      '2_initiated',
      '3_challenge_verified',
      '4_origin_setup_completed',
      '5_services_reconfigured',
    ]),
    custom_hostname: z.string().exactOptional(),
    data: z
      .object({
        success: z.boolean(),
        errors: z.array(JsonValueOutputSchema),
        messages: z.array(JsonValueOutputSchema),
        result: z
          .object({
            id: z.string(),
            hostname: z.string(),
            ssl: z
              .object({
                status: z.string().exactOptional(),
                validation_records: z
                  .array(
                    z
                      .object({
                        txt_name: z.string().exactOptional(),
                        txt_value: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                validation_errors: z
                  .array(z.object({ message: z.string() }).openapi({ required: ['message'] }))
                  .exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            ownership_verification: z
              .object({
                type: z.string().exactOptional(),
                name: z.string().exactOptional(),
                value: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            custom_origin_server: z.string().exactOptional(),
            verification_errors: z.array(z.string()).exactOptional(),
            status: z.string().exactOptional(),
          })
          .openapi({ required: ['id', 'hostname'] }),
      })
      .openapi({ required: ['success', 'errors', 'messages', 'result'] }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UpdateCustomHostnameResponseOutput')

const UpdateCustomHostnameBodySchema = z
  .object({ custom_hostname: z.string().min(1).max(253) })
  .openapi({ required: ['custom_hostname'], example: { custom_hostname: 'docs.example.com' } })
  .openapi('UpdateCustomHostnameBody')

const JitAccessRequestRequestSchema = z
  .object({ state: z.enum(['enabled', 'disabled']) })
  .openapi({ required: ['state'], example: { state: 'enabled' } })
  .openapi('JitAccessRequestRequest')

const NetworkBanResponseOutputSchema = z
  .object({ banned_ipv4_addresses: z.array(z.string()) })
  .openapi({ required: ['banned_ipv4_addresses'] })
  .openapi('NetworkBanResponseOutput')

const NetworkBanResponseEnrichedOutputSchema = z
  .object({
    banned_ipv4_addresses: z.array(
      z
        .object({ banned_address: z.string(), identifier: z.string(), type: z.string() })
        .openapi({ required: ['banned_address', 'identifier', 'type'] }),
    ),
  })
  .openapi({ required: ['banned_ipv4_addresses'] })
  .openapi('NetworkBanResponseEnrichedOutput')

const RemoveNetworkBanRequestSchema = z
  .object({
    ipv4_addresses: z.array(z.string()).openapi({ description: 'List of IP addresses to unban.' }),
    requester_ip: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: "Include requester's public IP in the list of addresses to unban." }),
    identifier: z.string().exactOptional(),
  })
  .openapi({
    required: ['ipv4_addresses'],
    example: { ipv4_addresses: ['203.0.113.10'], requester_ip: false },
  })
  .openapi('RemoveNetworkBanRequest')

const NetworkRestrictionsResponseOutputSchema = z
  .object({
    entitlement: z.enum(['disallowed', 'allowed']),
    config: z
      .object({
        dbAllowedCidrs: z.array(z.string()).exactOptional(),
        dbAllowedCidrsV6: z.array(z.string()).exactOptional(),
      })
      .openapi({
        example: { dbAllowedCidrs: ['203.0.113.0/24'], dbAllowedCidrsV6: ['2001:db8::/32'] },
        description:
          'At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.',
        required: [],
      }),
    old_config: z
      .object({
        dbAllowedCidrs: z.array(z.string()).exactOptional(),
        dbAllowedCidrsV6: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'Populated when a new config has been received, but not registered as successfully applied to a project.',
        example: { dbAllowedCidrs: ['203.0.113.0/24'], dbAllowedCidrsV6: ['2001:db8::/32'] },
        required: [],
      }),
    status: z.enum(['stored', 'applied']),
    updated_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional(),
    applied_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional(),
  })
  .openapi({ required: ['entitlement', 'config', 'status'] })
  .openapi('NetworkRestrictionsResponseOutput')

const NetworkRestrictionsRequestSchema = z
  .object({
    dbAllowedCidrs: z.array(z.string()).exactOptional(),
    dbAllowedCidrsV6: z.array(z.string()).exactOptional(),
  })
  .openapi({
    example: { dbAllowedCidrs: ['203.0.113.0/24'], dbAllowedCidrsV6: ['2001:db8::/32'] },
    required: [],
  })
  .openapi('NetworkRestrictionsRequest')

const NetworkRestrictionsPatchRequestSchema = z
  .object({
    add: z
      .object({
        dbAllowedCidrs: z.array(z.string()).exactOptional(),
        dbAllowedCidrsV6: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    remove: z
      .object({
        dbAllowedCidrs: z.array(z.string()).exactOptional(),
        dbAllowedCidrsV6: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    example: {
      add: { dbAllowedCidrs: ['203.0.113.0/24'] },
      remove: { dbAllowedCidrs: ['198.51.100.0/24'] },
    },
    required: [],
  })
  .openapi('NetworkRestrictionsPatchRequest')

const NetworkRestrictionsV2ResponseOutputSchema = z
  .object({
    entitlement: z.enum(['disallowed', 'allowed']),
    config: z
      .object({
        dbAllowedCidrs: z
          .array(
            z
              .object({ address: z.string(), type: z.enum(['v4', 'v6']) })
              .openapi({ required: ['address', 'type'] }),
          )
          .exactOptional(),
      })
      .openapi({
        description:
          'At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.',
        required: [],
      }),
    old_config: z
      .object({
        dbAllowedCidrs: z
          .array(
            z
              .object({ address: z.string(), type: z.enum(['v4', 'v6']) })
              .openapi({ required: ['address', 'type'] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'Populated when a new config has been received, but not registered as successfully applied to a project.',
        required: [],
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional(),
    applied_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional(),
    status: z.enum(['stored', 'applied']),
  })
  .openapi({ required: ['entitlement', 'config', 'status'] })
  .openapi('NetworkRestrictionsV2ResponseOutput')

const PgsodiumConfigResponseOutputSchema = z
  .object({
    root_key: z
      .string()
      .openapi({ description: 'The pgsodium root key: 32 bytes, hex-encoded (64 characters).' }),
  })
  .openapi({
    required: ['root_key'],
    example: { root_key: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef' },
  })
  .openapi('PgsodiumConfigResponseOutput')

const UpdatePgsodiumConfigBodySchema = z
  .object({
    root_key: z
      .string()
      .openapi({ description: 'The pgsodium root key: 32 bytes, hex-encoded (64 characters).' }),
  })
  .openapi({
    required: ['root_key'],
    example: { root_key: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef' },
  })
  .openapi('UpdatePgsodiumConfigBody')

const PostgrestConfigWithJWTSecretResponseOutputSchema = z
  .object({
    db_schema: z.string(),
    max_rows: z.int().min(-9007199254740991).max(9007199254740991),
    db_extra_search_path: z.string(),
    db_pool: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({
        description: 'If `null`, the value is automatically configured based on compute size.',
      }),
    db_pool_acquisition_timeout: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'If `null`, the value is automatically configured to 10.' }),
    db_pool_max_lifetime: z
      .int()
      .min(0)
      .max(3600)
      .nullable()
      .openapi({ description: 'If `null`, the value is automatically configured to 1800.' }),
    db_pool_max_idletime: z
      .int()
      .min(0)
      .max(60)
      .nullable()
      .openapi({ description: 'If `null`, the value is automatically configured to 30.' }),
    jwt_secret: z.string().exactOptional(),
  })
  .openapi({
    required: [
      'db_schema',
      'max_rows',
      'db_extra_search_path',
      'db_pool',
      'db_pool_acquisition_timeout',
      'db_pool_max_lifetime',
      'db_pool_max_idletime',
    ],
  })
  .openapi('PostgrestConfigWithJWTSecretResponseOutput')

const V1UpdatePostgrestConfigBodySchema = z
  .object({
    db_extra_search_path: z.string().exactOptional(),
    db_schema: z.string().exactOptional(),
    max_rows: z.int().min(0).max(1000000).exactOptional(),
    db_pool: z.int().min(0).max(1000).exactOptional(),
    db_pool_acquisition_timeout: z.int().min(0).max(60).exactOptional(),
    db_pool_max_lifetime: z.int().min(0).max(3600).exactOptional(),
    db_pool_max_idletime: z.int().min(0).max(60).exactOptional(),
  })
  .openapi({ example: { db_schema: 'public,storage', db_pool: 20, max_rows: 1000 }, required: [] })
  .openapi('V1UpdatePostgrestConfigBody')

const V1PostgrestConfigResponseOutputSchema = z
  .object({
    db_schema: z.string(),
    max_rows: z.int().min(-9007199254740991).max(9007199254740991),
    db_extra_search_path: z.string(),
    db_pool: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({
        description: 'If `null`, the value is automatically configured based on compute size.',
      }),
    db_pool_acquisition_timeout: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'If `null`, the value is automatically configured to 10.' }),
    db_pool_max_lifetime: z
      .int()
      .min(0)
      .max(3600)
      .nullable()
      .openapi({ description: 'If `null`, the value is automatically configured to 1800.' }),
    db_pool_max_idletime: z
      .int()
      .min(0)
      .max(60)
      .nullable()
      .openapi({ description: 'If `null`, the value is automatically configured to 30.' }),
  })
  .openapi({
    required: [
      'db_schema',
      'max_rows',
      'db_extra_search_path',
      'db_pool',
      'db_pool_acquisition_timeout',
      'db_pool_max_lifetime',
      'db_pool_max_idletime',
    ],
  })
  .openapi('V1PostgrestConfigResponseOutput')

const V1ProjectRefResponseOutputSchema = z
  .object({
    id: z.int().min(-9007199254740991).max(9007199254740991),
    ref: z.string(),
    name: z.string(),
  })
  .openapi({ required: ['id', 'ref', 'name'] })
  .openapi('V1ProjectRefResponseOutput')

const V1UpdateProjectBodySchema = z
  .object({ name: z.string().min(1).max(256) })
  .openapi({ required: ['name'], example: { name: 'Acme Platform' } })
  .openapi('V1UpdateProjectBody')

const SecretResponseOutputSchema = z
  .object({ name: z.string(), value: z.string(), updated_at: z.string().exactOptional() })
  .openapi({ required: ['name', 'value'] })
  .openapi('SecretResponseOutput')

const CreateSecretBodySchema = z
  .array(
    z
      .object({
        name: z
          .string()
          .regex(/^(?!SUPABASE_).*/)
          .max(256)
          .openapi({ description: 'Secret name must not start with the SUPABASE_ prefix.' }),
        value: z.string().max(24576),
      })
      .openapi({ required: ['name', 'value'] }),
  )
  .max(100)
  .openapi({
    example: [
      { name: 'OPENAI_API_KEY', value: 'sk-example-secret' },
      { name: 'STRIPE_WEBHOOK_SECRET', value: 'whsec_example' },
    ],
  })
  .openapi('CreateSecretBody')

const DeleteSecretsBodySchema = z
  .array(z.string())
  .openapi({ example: ['OPENAI_API_KEY'] })
  .openapi('DeleteSecretsBody')

const SslEnforcementResponseOutputSchema = z
  .object({
    currentConfig: z.object({ database: z.boolean() }).openapi({ required: ['database'] }),
    appliedSuccessfully: z.boolean(),
  })
  .openapi({ required: ['currentConfig', 'appliedSuccessfully'] })
  .openapi('SslEnforcementResponseOutput')

const SslEnforcementRequestSchema = z
  .object({
    requestedConfig: z.object({ database: z.boolean() }).openapi({ required: ['database'] }),
  })
  .openapi({ required: ['requestedConfig'], example: { requestedConfig: { database: true } } })
  .openapi('SslEnforcementRequest')

const TypescriptResponseOutputSchema = z
  .object({ types: z.string() })
  .openapi({ required: ['types'] })
  .openapi('TypescriptResponseOutput')

const VanitySubdomainConfigResponseOutputSchema = z
  .object({
    status: z.enum(['not-used', 'custom-domain-used', 'active']),
    custom_domain: z.string().min(1).exactOptional(),
  })
  .openapi({ required: ['status'] })
  .openapi('VanitySubdomainConfigResponseOutput')

const PlanGateErrorBodySchema = z
  .object({
    message: z.string().openapi({ description: 'Human-readable explanation of the plan gate' }),
    error: z
      .object({
        code: z
          .literal('entitlement_required')
          .openapi({ description: 'Machine-readable marker for plan-gated denials' }),
        feature: z
          .string()
          .openapi({ description: 'Entitlement feature key that failed the check' }),
        upgrade_url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Billing page URL for the organization, present when the org is resolvable',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Present on entitlement denials. Other errors with this status code (validation, billing state) carry only message.',
        required: ['code', 'feature'],
      }),
  })
  .openapi({ required: ['message'] })
  .openapi('PlanGateErrorBody')

const VanitySubdomainBodySchema = z
  .object({ vanity_subdomain: z.string().max(63) })
  .openapi({ required: ['vanity_subdomain'], example: { vanity_subdomain: 'acme-prod' } })
  .openapi('VanitySubdomainBody')

const SubdomainAvailabilityResponseOutputSchema = z
  .object({ available: z.boolean() })
  .openapi({ required: ['available'] })
  .openapi('SubdomainAvailabilityResponseOutput')

const ActivateVanitySubdomainResponseOutputSchema = z
  .object({ custom_domain: z.string() })
  .openapi({ required: ['custom_domain'] })
  .openapi('ActivateVanitySubdomainResponseOutput')

const UpgradeDatabaseBodySchema = z
  .object({
    target_version: z.string(),
    release_channel: z
      .enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview'])
      .exactOptional(),
  })
  .openapi({
    required: ['target_version'],
    example: { target_version: '17', release_channel: 'ga' },
  })
  .openapi('UpgradeDatabaseBody')

const ProjectUpgradeInitiateResponseOutputSchema = z
  .object({ tracking_id: z.string() })
  .openapi({ required: ['tracking_id'] })
  .openapi('ProjectUpgradeInitiateResponseOutput')

const ProjectUpgradeEligibilityResponseOutputSchema = z
  .object({
    eligible: z.boolean(),
    current_app_version: z.string(),
    current_app_version_release_channel: z.enum([
      'internal',
      'alpha',
      'beta',
      'ga',
      'withdrawn',
      'preview',
    ]),
    latest_app_version: z.string(),
    target_upgrade_versions: z.array(
      z
        .object({
          postgres_version: z.enum(['13', '14', '15', '17', '17-oriole']),
          release_channel: z.enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview']),
          app_version: z.string(),
        })
        .openapi({ required: ['postgres_version', 'release_channel', 'app_version'] }),
    ),
    duration_estimate_hours: z.number(),
    legacy_auth_custom_roles: z.array(z.string()),
    objects_to_be_dropped: z
      .array(z.string())
      .openapi({ deprecated: true, description: 'Use validation_errors instead.' }),
    unsupported_extensions: z
      .array(z.string())
      .openapi({ deprecated: true, description: 'Use validation_errors instead.' }),
    user_defined_objects_in_internal_schemas: z
      .array(z.string())
      .openapi({ deprecated: true, description: 'Use validation_errors instead.' }),
    validation_errors: z.array(
      z.union([
        z
          .object({
            type: z.literal('objects_depending_on_pg_cron'),
            dependents: z.array(z.string()),
          })
          .openapi({ required: ['type', 'dependents'] }),
        z
          .object({
            type: z.literal('indexes_referencing_ll_to_earth'),
            schema_name: z.string(),
            table_name: z.string(),
            index_name: z.string(),
          })
          .openapi({ required: ['type', 'schema_name', 'table_name', 'index_name'] }),
        z
          .object({
            type: z.literal('function_using_obsolete_lang'),
            schema_name: z.string(),
            function_name: z.string(),
            lang_name: z.string(),
          })
          .openapi({ required: ['type', 'schema_name', 'function_name', 'lang_name'] }),
        z
          .object({ type: z.literal('unsupported_extension'), extension_name: z.string() })
          .openapi({ required: ['type', 'extension_name'] }),
        z
          .object({
            type: z.literal('unsupported_fdw_handler'),
            fdw_name: z.string(),
            fdw_handler_name: z.string(),
          })
          .openapi({ required: ['type', 'fdw_name', 'fdw_handler_name'] }),
        z
          .object({
            type: z.literal('unlogged_table_with_persistent_sequence'),
            schema_name: z.string(),
            table_name: z.string(),
            sequence_name: z.string(),
          })
          .openapi({ required: ['type', 'schema_name', 'table_name', 'sequence_name'] }),
        z
          .object({
            type: z.literal('user_defined_objects_in_internal_schemas'),
            obj_type: z.union([z.literal('table'), z.literal('function')]),
            schema_name: z.string(),
            obj_name: z.string(),
          })
          .openapi({ required: ['type', 'obj_type', 'schema_name', 'obj_name'] }),
        z
          .object({ type: z.literal('active_replication_slot'), slot_name: z.string() })
          .openapi({ required: ['type', 'slot_name'] }),
        z.object({ type: z.literal('x86_architecture') }).openapi({ required: ['type'] }),
        z.object({ type: z.literal('project_hibernating') }).openapi({ required: ['type'] }),
      ]),
    ),
    warnings: z.array(
      z.xor([
        z
          .object({ type: z.literal('pg_graphql_introspection_change') })
          .openapi({ required: ['type'] }),
        z.object({ type: z.literal('ltree_reindex_required') }).openapi({ required: ['type'] }),
        z.object({ type: z.literal('operator_estimator_gate') }).openapi({ required: ['type'] }),
        z.object({ type: z.literal('btree_gist_nan_reindex') }).openapi({ required: ['type'] }),
      ]),
    ),
  })
  .openapi({
    required: [
      'eligible',
      'current_app_version',
      'current_app_version_release_channel',
      'latest_app_version',
      'target_upgrade_versions',
      'duration_estimate_hours',
      'legacy_auth_custom_roles',
      'objects_to_be_dropped',
      'unsupported_extensions',
      'user_defined_objects_in_internal_schemas',
      'validation_errors',
      'warnings',
    ],
  })
  .openapi('ProjectUpgradeEligibilityResponseOutput')

const DatabaseUpgradeStatusResponseOutputSchema = z
  .object({
    databaseUpgradeStatus: z
      .object({
        initiated_at: z.string(),
        latest_status_at: z.string(),
        target_version: z.string(),
        error: z
          .enum([
            '1_upgraded_instance_launch_failed',
            '2_volume_detachchment_from_upgraded_instance_failed',
            '3_volume_attachment_to_original_instance_failed',
            '4_data_upgrade_initiation_failed',
            '5_data_upgrade_completion_failed',
            '6_volume_detachchment_from_original_instance_failed',
            '7_volume_attachment_to_upgraded_instance_failed',
            '8_upgrade_completion_failed',
            '9_post_physical_backup_failed',
          ])
          .exactOptional(),
        progress: z
          .enum([
            '0_requested',
            '1_started',
            '2_launched_upgraded_instance',
            '3_detached_volume_from_upgraded_instance',
            '4_attached_volume_to_original_instance',
            '5_initiated_data_upgrade',
            '6_completed_data_upgrade',
            '7_detached_volume_from_original_instance',
            '8_attached_volume_to_upgraded_instance',
            '9_completed_upgrade',
            '10_completed_post_physical_backup',
          ])
          .exactOptional(),
        status: z.number(),
      })
      .nullable()
      .openapi({ required: ['initiated_at', 'latest_status_at', 'target_version', 'status'] }),
  })
  .openapi({ required: ['databaseUpgradeStatus'] })
  .openapi('DatabaseUpgradeStatusResponseOutput')

const ReadOnlyStatusResponseOutputSchema = z
  .object({
    enabled: z.boolean(),
    override_enabled: z.boolean(),
    override_active_until: z.string(),
  })
  .openapi({ required: ['enabled', 'override_enabled', 'override_active_until'] })
  .openapi('ReadOnlyStatusResponseOutput')

const SetUpReadReplicaBodySchema = z
  .object({
    read_replica_region: z
      .enum([
        'us-east-1',
        'us-east-2',
        'us-west-1',
        'us-west-2',
        'ap-east-1',
        'ap-southeast-1',
        'ap-northeast-1',
        'ap-northeast-2',
        'ap-southeast-2',
        'eu-west-1',
        'eu-west-2',
        'eu-west-3',
        'eu-north-1',
        'eu-central-1',
        'eu-central-2',
        'ca-central-1',
        'ap-south-1',
        'sa-east-1',
      ])
      .openapi({ description: 'Region you want your read replica to reside in' }),
  })
  .openapi({ required: ['read_replica_region'], example: { read_replica_region: 'us-west-1' } })
  .openapi('SetUpReadReplicaBody')

const RemoveReadReplicaBodySchema = z
  .object({ database_identifier: z.string() })
  .openapi({
    required: ['database_identifier'],
    example: { database_identifier: 'abcdefghijklmnopqrst-rr-us-west-1-abcde' },
  })
  .openapi('RemoveReadReplicaBody')

const V1ServiceHealthResponseOutputSchema = z
  .object({
    name: z.enum([
      'auth',
      'db',
      'db_postgres_user',
      'pooler',
      'realtime',
      'rest',
      'storage',
      'pg_bouncer',
    ]),
    healthy: z
      .boolean()
      .openapi({ deprecated: true, description: 'Deprecated. Use `status` instead.' }),
    status: z.enum(['COMING_UP', 'ACTIVE_HEALTHY', 'UNHEALTHY']),
    info: z
      .union([
        z
          .object({ name: z.literal('GoTrue'), version: z.string(), description: z.string() })
          .openapi({ required: ['name', 'version', 'description'] }),
        z
          .object({
            healthy: z
              .boolean()
              .openapi({ deprecated: true, description: 'Deprecated. Use `status` instead.' }),
            db_connected: z.boolean(),
            replication_connected: z.boolean(),
            connected_cluster: z.int().min(-9007199254740991).max(9007199254740991),
          })
          .openapi({
            required: ['healthy', 'db_connected', 'replication_connected', 'connected_cluster'],
          }),
        z.object({ db_schema: z.string() }).openapi({ required: ['db_schema'] }),
      ])
      .exactOptional(),
    error: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'healthy', 'status'] })
  .openapi('V1ServiceHealthResponseOutput')

const SigningKeyResponseOutputSchema = z
  .object({
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
    algorithm: z.enum(['EdDSA', 'ES256', 'RS256', 'HS256']),
    status: z.enum(['in_use', 'previously_used', 'revoked', 'standby']),
    public_jwk: z.any().nullable(),
    created_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      ),
    updated_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      ),
  })
  .openapi({ required: ['id', 'algorithm', 'status', 'public_jwk', 'created_at', 'updated_at'] })
  .openapi('SigningKeyResponseOutput')

const CreateSigningKeyBodySchema = z
  .strictObject({
    algorithm: z.enum(['EdDSA', 'ES256', 'RS256', 'HS256']),
    status: z.enum(['in_use', 'standby']).exactOptional(),
    private_jwk: z
      .xor([
        z
          .strictObject({
            kid: z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
              )
              .exactOptional(),
            use: z.literal('sig').exactOptional(),
            key_ops: z
              .array(z.enum(['sign', 'verify']))
              .length(2)
              .exactOptional(),
            ext: z.literal(true).exactOptional(),
            kty: z.literal('RSA'),
            alg: z.literal('RS256').exactOptional(),
            n: z.string(),
            e: z.literal('AQAB'),
            d: z.string(),
            p: z.string(),
            q: z.string(),
            dp: z.string(),
            dq: z.string(),
            qi: z.string(),
          })
          .openapi({ required: ['kty', 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi'] }),
        z
          .strictObject({
            kid: z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
              )
              .exactOptional(),
            use: z.literal('sig').exactOptional(),
            key_ops: z
              .array(z.enum(['sign', 'verify']))
              .length(2)
              .exactOptional(),
            ext: z.literal(true).exactOptional(),
            kty: z.literal('EC'),
            alg: z.literal('ES256').exactOptional(),
            crv: z.literal('P-256'),
            x: z.string(),
            y: z.string(),
            d: z.string(),
          })
          .openapi({ required: ['kty', 'crv', 'x', 'y', 'd'] }),
        z
          .strictObject({
            kid: z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
              )
              .exactOptional(),
            use: z.literal('sig').exactOptional(),
            key_ops: z
              .array(z.enum(['sign', 'verify']))
              .length(2)
              .exactOptional(),
            ext: z.literal(true).exactOptional(),
            kty: z.literal('OKP'),
            alg: z.literal('EdDSA').exactOptional(),
            crv: z.literal('Ed25519'),
            x: z.string(),
            d: z.string(),
          })
          .openapi({ required: ['kty', 'crv', 'x', 'd'] }),
        z
          .strictObject({
            kid: z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
              )
              .exactOptional(),
            use: z.literal('sig').exactOptional(),
            key_ops: z
              .array(z.enum(['sign', 'verify']))
              .length(2)
              .exactOptional(),
            ext: z.literal(true).exactOptional(),
            kty: z.literal('oct'),
            alg: z.literal('HS256').exactOptional(),
            k: z.string().min(16),
          })
          .openapi({ required: ['kty', 'k'] }),
      ])
      .exactOptional(),
  })
  .openapi({ required: ['algorithm'], example: { algorithm: 'RS256', status: 'standby' } })
  .openapi('CreateSigningKeyBody')

const SigningKeysResponseOutputSchema = z
  .object({
    keys: z.array(
      z
        .object({
          id: z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            ),
          algorithm: z.enum(['EdDSA', 'ES256', 'RS256', 'HS256']),
          status: z.enum(['in_use', 'previously_used', 'revoked', 'standby']),
          public_jwk: z.any().nullable(),
          created_at: z.iso
            .datetime({ offset: true })
            .regex(
              /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
            ),
          updated_at: z.iso
            .datetime({ offset: true })
            .regex(
              /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
            ),
        })
        .openapi({
          required: ['id', 'algorithm', 'status', 'public_jwk', 'created_at', 'updated_at'],
        }),
    ),
  })
  .openapi({ required: ['keys'] })
  .openapi('SigningKeysResponseOutput')

const UpdateSigningKeyBodySchema = z
  .strictObject({ status: z.enum(['in_use', 'previously_used', 'revoked', 'standby']) })
  .openapi({ required: ['status'], example: { status: 'standby' } })
  .openapi('UpdateSigningKeyBody')

const AuthConfigResponseOutputSchema = z
  .object({
    api_max_request_duration: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    db_max_pool_size: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    db_max_pool_size_unit: z
      .union([z.literal('connections'), z.literal('percent'), z.literal(null)])
      .nullable(),
    disable_signup: z.boolean().nullable(),
    external_anonymous_users_enabled: z.boolean().nullable(),
    external_apple_additional_client_ids: z.string().nullable(),
    external_apple_client_id: z.string().nullable(),
    external_apple_email_optional: z.boolean().nullable(),
    external_apple_enabled: z.boolean().nullable(),
    external_apple_secret: z.string().nullable(),
    external_azure_client_id: z.string().nullable(),
    external_azure_email_optional: z.boolean().nullable(),
    external_azure_enabled: z.boolean().nullable(),
    external_azure_secret: z.string().nullable(),
    external_azure_url: z.string().nullable(),
    external_bitbucket_client_id: z.string().nullable(),
    external_bitbucket_email_optional: z.boolean().nullable(),
    external_bitbucket_enabled: z.boolean().nullable(),
    external_bitbucket_secret: z.string().nullable(),
    external_discord_client_id: z.string().nullable(),
    external_discord_email_optional: z.boolean().nullable(),
    external_discord_enabled: z.boolean().nullable(),
    external_discord_secret: z.string().nullable(),
    external_email_enabled: z.boolean().nullable(),
    external_facebook_client_id: z.string().nullable(),
    external_facebook_email_optional: z.boolean().nullable(),
    external_facebook_enabled: z.boolean().nullable(),
    external_facebook_secret: z.string().nullable(),
    external_figma_client_id: z.string().nullable(),
    external_figma_email_optional: z.boolean().nullable(),
    external_figma_enabled: z.boolean().nullable(),
    external_figma_secret: z.string().nullable(),
    external_github_client_id: z.string().nullable(),
    external_github_email_optional: z.boolean().nullable(),
    external_github_enabled: z.boolean().nullable(),
    external_github_secret: z.string().nullable(),
    external_gitlab_client_id: z.string().nullable(),
    external_gitlab_email_optional: z.boolean().nullable(),
    external_gitlab_enabled: z.boolean().nullable(),
    external_gitlab_secret: z.string().nullable(),
    external_gitlab_url: z.string().nullable(),
    external_google_additional_client_ids: z.string().nullable(),
    external_google_client_id: z.string().nullable(),
    external_google_email_optional: z.boolean().nullable(),
    external_google_enabled: z.boolean().nullable(),
    external_google_secret: z.string().nullable(),
    external_google_skip_nonce_check: z.boolean().nullable(),
    external_kakao_client_id: z.string().nullable(),
    external_kakao_email_optional: z.boolean().nullable(),
    external_kakao_enabled: z.boolean().nullable(),
    external_kakao_secret: z.string().nullable(),
    external_keycloak_client_id: z.string().nullable(),
    external_keycloak_email_optional: z.boolean().nullable(),
    external_keycloak_enabled: z.boolean().nullable(),
    external_keycloak_secret: z.string().nullable(),
    external_keycloak_url: z.string().nullable(),
    external_linkedin_oidc_client_id: z.string().nullable(),
    external_linkedin_oidc_email_optional: z.boolean().nullable(),
    external_linkedin_oidc_enabled: z.boolean().nullable(),
    external_linkedin_oidc_secret: z.string().nullable(),
    external_slack_oidc_client_id: z.string().nullable(),
    external_slack_oidc_email_optional: z.boolean().nullable(),
    external_slack_oidc_enabled: z.boolean().nullable(),
    external_slack_oidc_secret: z.string().nullable(),
    external_notion_client_id: z.string().nullable(),
    external_notion_email_optional: z.boolean().nullable(),
    external_notion_enabled: z.boolean().nullable(),
    external_notion_secret: z.string().nullable(),
    external_phone_enabled: z.boolean().nullable(),
    external_slack_client_id: z.string().nullable(),
    external_slack_email_optional: z.boolean().nullable(),
    external_slack_enabled: z.boolean().nullable(),
    external_slack_secret: z.string().nullable(),
    external_spotify_client_id: z.string().nullable(),
    external_spotify_email_optional: z.boolean().nullable(),
    external_spotify_enabled: z.boolean().nullable(),
    external_spotify_secret: z.string().nullable(),
    external_twitch_client_id: z.string().nullable(),
    external_twitch_email_optional: z.boolean().nullable(),
    external_twitch_enabled: z.boolean().nullable(),
    external_twitch_secret: z.string().nullable(),
    external_twitter_client_id: z.string().nullable(),
    external_twitter_email_optional: z.boolean().nullable(),
    external_twitter_enabled: z.boolean().nullable(),
    external_twitter_secret: z.string().nullable(),
    external_x_client_id: z.string().nullable(),
    external_x_email_optional: z.boolean().nullable(),
    external_x_enabled: z.boolean().nullable(),
    external_x_secret: z.string().nullable(),
    external_workos_client_id: z.string().nullable(),
    external_workos_enabled: z.boolean().nullable(),
    external_workos_secret: z.string().nullable(),
    external_workos_url: z.string().nullable(),
    external_web3_solana_enabled: z.boolean().nullable(),
    external_web3_ethereum_enabled: z.boolean().nullable(),
    external_zoom_client_id: z.string().nullable(),
    external_zoom_email_optional: z.boolean().nullable(),
    external_zoom_enabled: z.boolean().nullable(),
    external_zoom_secret: z.string().nullable(),
    hook_custom_access_token_enabled: z.boolean().nullable(),
    hook_custom_access_token_uri: z.string().nullable(),
    hook_custom_access_token_secrets: z.string().nullable(),
    hook_mfa_verification_attempt_enabled: z.boolean().nullable(),
    hook_mfa_verification_attempt_uri: z.string().nullable(),
    hook_mfa_verification_attempt_secrets: z.string().nullable(),
    hook_password_verification_attempt_enabled: z.boolean().nullable(),
    hook_password_verification_attempt_uri: z.string().nullable(),
    hook_password_verification_attempt_secrets: z.string().nullable(),
    hook_send_sms_enabled: z.boolean().nullable(),
    hook_send_sms_uri: z.string().nullable(),
    hook_send_sms_secrets: z.string().nullable(),
    hook_send_email_enabled: z.boolean().nullable(),
    hook_send_email_uri: z.string().nullable(),
    hook_send_email_secrets: z.string().nullable(),
    hook_before_user_created_enabled: z.boolean().nullable(),
    hook_before_user_created_uri: z.string().nullable(),
    hook_before_user_created_secrets: z.string().nullable(),
    hook_after_user_created_enabled: z.boolean().nullable(),
    hook_after_user_created_uri: z.string().nullable(),
    hook_after_user_created_secrets: z.string().nullable(),
    jwt_exp: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    mailer_allow_unverified_email_sign_ins: z.boolean().nullable(),
    mailer_autoconfirm: z.boolean().nullable(),
    mailer_otp_exp: z.int().min(-9007199254740991).max(9007199254740991),
    mailer_otp_length: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    mailer_secure_email_change_enabled: z.boolean().nullable(),
    mailer_subjects_confirmation: z.string().nullable(),
    mailer_subjects_email_change: z.string().nullable(),
    mailer_subjects_invite: z.string().nullable(),
    mailer_subjects_magic_link: z.string().nullable(),
    mailer_subjects_reauthentication: z.string().nullable(),
    mailer_subjects_recovery: z.string().nullable(),
    mailer_subjects_password_changed_notification: z.string().nullable(),
    mailer_subjects_email_changed_notification: z.string().nullable(),
    mailer_subjects_phone_changed_notification: z.string().nullable(),
    mailer_subjects_mfa_factor_enrolled_notification: z.string().nullable(),
    mailer_subjects_mfa_factor_unenrolled_notification: z.string().nullable(),
    mailer_subjects_identity_linked_notification: z.string().nullable(),
    mailer_subjects_identity_unlinked_notification: z.string().nullable(),
    mailer_templates_confirmation_content: z.string().nullable(),
    mailer_templates_email_change_content: z.string().nullable(),
    mailer_templates_invite_content: z.string().nullable(),
    mailer_templates_magic_link_content: z.string().nullable(),
    mailer_templates_reauthentication_content: z.string().nullable(),
    mailer_templates_recovery_content: z.string().nullable(),
    mailer_templates_password_changed_notification_content: z.string().nullable(),
    mailer_templates_email_changed_notification_content: z.string().nullable(),
    mailer_templates_phone_changed_notification_content: z.string().nullable(),
    mailer_templates_mfa_factor_enrolled_notification_content: z.string().nullable(),
    mailer_templates_mfa_factor_unenrolled_notification_content: z.string().nullable(),
    mailer_templates_identity_linked_notification_content: z.string().nullable(),
    mailer_templates_identity_unlinked_notification_content: z.string().nullable(),
    mailer_notifications_password_changed_enabled: z.boolean().nullable(),
    mailer_notifications_email_changed_enabled: z.boolean().nullable(),
    mailer_notifications_phone_changed_enabled: z.boolean().nullable(),
    mailer_notifications_mfa_factor_enrolled_enabled: z.boolean().nullable(),
    mailer_notifications_mfa_factor_unenrolled_enabled: z.boolean().nullable(),
    mailer_notifications_identity_linked_enabled: z.boolean().nullable(),
    mailer_notifications_identity_unlinked_enabled: z.boolean().nullable(),
    mfa_max_enrolled_factors: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    mfa_totp_enroll_enabled: z.boolean().nullable(),
    mfa_totp_verify_enabled: z.boolean().nullable(),
    mfa_phone_enroll_enabled: z.boolean().nullable(),
    mfa_phone_verify_enabled: z.boolean().nullable(),
    mfa_web_authn_enroll_enabled: z.boolean().nullable(),
    mfa_web_authn_verify_enabled: z.boolean().nullable(),
    passkey_enabled: z.boolean(),
    webauthn_rp_display_name: z.string().nullable(),
    webauthn_rp_id: z.string().nullable(),
    webauthn_rp_origins: z.string().nullable(),
    mfa_phone_otp_length: z.int().min(-9007199254740991).max(9007199254740991),
    mfa_phone_template: z.string().nullable(),
    mfa_phone_max_frequency: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    nimbus_oauth_client_id: z.string().nullable(),
    nimbus_oauth_email_optional: z.boolean().nullable(),
    nimbus_oauth_client_secret: z.string().nullable(),
    password_hibp_enabled: z.boolean().nullable(),
    password_min_length: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    password_required_characters: z
      .union([
        z.literal('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'),
        z.literal('abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'),
        z.literal(
          'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\\\:"|<>?,./`~',
        ),
        z.literal(''),
        z.literal(null),
      ])
      .nullable(),
    rate_limit_anonymous_users: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    rate_limit_email_sent: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    rate_limit_sms_sent: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    rate_limit_token_refresh: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    rate_limit_verify: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    rate_limit_otp: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    rate_limit_web3: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    refresh_token_rotation_enabled: z.boolean().nullable(),
    saml_enabled: z.boolean().nullable(),
    saml_external_url: z.string().nullable(),
    saml_allow_encrypted_assertions: z.boolean().nullable(),
    security_sb_forwarded_for_enabled: z.boolean().nullable(),
    security_captcha_enabled: z.boolean().nullable(),
    security_captcha_provider: z
      .union([z.literal('turnstile'), z.literal('hcaptcha'), z.literal(null)])
      .nullable(),
    security_captcha_secret: z.string().nullable(),
    security_manual_linking_enabled: z.boolean().nullable(),
    security_refresh_token_reuse_interval: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable(),
    security_update_password_require_current_password: z.boolean().nullable(),
    security_update_password_require_reauthentication: z.boolean().nullable(),
    sessions_inactivity_timeout: z.number().nullable(),
    sessions_single_per_user: z.boolean().nullable(),
    sessions_tags: z.string().nullable(),
    sessions_timebox: z.number().nullable(),
    site_url: z.string().nullable(),
    sms_autoconfirm: z.boolean().nullable(),
    sms_max_frequency: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    sms_messagebird_access_key: z.string().nullable(),
    sms_messagebird_originator: z.string().nullable(),
    sms_otp_exp: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    sms_otp_length: z.int().min(-9007199254740991).max(9007199254740991),
    sms_provider: z
      .union([
        z.literal('messagebird'),
        z.literal('textlocal'),
        z.literal('twilio'),
        z.literal('twilio_verify'),
        z.literal('vonage'),
        z.literal(null),
      ])
      .nullable(),
    sms_template: z.string().nullable(),
    sms_test_otp: z.string().nullable(),
    sms_test_otp_valid_until: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable(),
    sms_textlocal_api_key: z.string().nullable(),
    sms_textlocal_sender: z.string().nullable(),
    sms_twilio_account_sid: z.string().nullable(),
    sms_twilio_auth_token: z.string().nullable(),
    sms_twilio_content_sid: z.string().nullable(),
    sms_twilio_message_service_sid: z.string().nullable(),
    sms_twilio_verify_account_sid: z.string().nullable(),
    sms_twilio_verify_auth_token: z.string().nullable(),
    sms_twilio_verify_message_service_sid: z.string().nullable(),
    sms_vonage_api_key: z.string().nullable(),
    sms_vonage_api_secret: z.string().nullable(),
    sms_vonage_from: z.string().nullable(),
    smtp_admin_email: z
      .email()
      .regex(
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      )
      .nullable(),
    smtp_host: z.string().nullable(),
    smtp_max_frequency: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    smtp_pass: z.string().nullable(),
    smtp_port: z.string().nullable(),
    smtp_sender_name: z.string().nullable(),
    smtp_user: z.string().nullable(),
    uri_allow_list: z.string().nullable(),
    oauth_server_enabled: z.boolean(),
    oauth_server_allow_dynamic_registration: z.boolean(),
    oauth_server_authorization_path: z.string().nullable(),
    custom_oauth_enabled: z.boolean(),
    custom_oauth_max_providers: z.int().min(-9007199254740991).max(9007199254740991),
  })
  .openapi({
    required: [
      'api_max_request_duration',
      'db_max_pool_size',
      'db_max_pool_size_unit',
      'disable_signup',
      'external_anonymous_users_enabled',
      'external_apple_additional_client_ids',
      'external_apple_client_id',
      'external_apple_email_optional',
      'external_apple_enabled',
      'external_apple_secret',
      'external_azure_client_id',
      'external_azure_email_optional',
      'external_azure_enabled',
      'external_azure_secret',
      'external_azure_url',
      'external_bitbucket_client_id',
      'external_bitbucket_email_optional',
      'external_bitbucket_enabled',
      'external_bitbucket_secret',
      'external_discord_client_id',
      'external_discord_email_optional',
      'external_discord_enabled',
      'external_discord_secret',
      'external_email_enabled',
      'external_facebook_client_id',
      'external_facebook_email_optional',
      'external_facebook_enabled',
      'external_facebook_secret',
      'external_figma_client_id',
      'external_figma_email_optional',
      'external_figma_enabled',
      'external_figma_secret',
      'external_github_client_id',
      'external_github_email_optional',
      'external_github_enabled',
      'external_github_secret',
      'external_gitlab_client_id',
      'external_gitlab_email_optional',
      'external_gitlab_enabled',
      'external_gitlab_secret',
      'external_gitlab_url',
      'external_google_additional_client_ids',
      'external_google_client_id',
      'external_google_email_optional',
      'external_google_enabled',
      'external_google_secret',
      'external_google_skip_nonce_check',
      'external_kakao_client_id',
      'external_kakao_email_optional',
      'external_kakao_enabled',
      'external_kakao_secret',
      'external_keycloak_client_id',
      'external_keycloak_email_optional',
      'external_keycloak_enabled',
      'external_keycloak_secret',
      'external_keycloak_url',
      'external_linkedin_oidc_client_id',
      'external_linkedin_oidc_email_optional',
      'external_linkedin_oidc_enabled',
      'external_linkedin_oidc_secret',
      'external_slack_oidc_client_id',
      'external_slack_oidc_email_optional',
      'external_slack_oidc_enabled',
      'external_slack_oidc_secret',
      'external_notion_client_id',
      'external_notion_email_optional',
      'external_notion_enabled',
      'external_notion_secret',
      'external_phone_enabled',
      'external_slack_client_id',
      'external_slack_email_optional',
      'external_slack_enabled',
      'external_slack_secret',
      'external_spotify_client_id',
      'external_spotify_email_optional',
      'external_spotify_enabled',
      'external_spotify_secret',
      'external_twitch_client_id',
      'external_twitch_email_optional',
      'external_twitch_enabled',
      'external_twitch_secret',
      'external_twitter_client_id',
      'external_twitter_email_optional',
      'external_twitter_enabled',
      'external_twitter_secret',
      'external_x_client_id',
      'external_x_email_optional',
      'external_x_enabled',
      'external_x_secret',
      'external_workos_client_id',
      'external_workos_enabled',
      'external_workos_secret',
      'external_workos_url',
      'external_web3_solana_enabled',
      'external_web3_ethereum_enabled',
      'external_zoom_client_id',
      'external_zoom_email_optional',
      'external_zoom_enabled',
      'external_zoom_secret',
      'hook_custom_access_token_enabled',
      'hook_custom_access_token_uri',
      'hook_custom_access_token_secrets',
      'hook_mfa_verification_attempt_enabled',
      'hook_mfa_verification_attempt_uri',
      'hook_mfa_verification_attempt_secrets',
      'hook_password_verification_attempt_enabled',
      'hook_password_verification_attempt_uri',
      'hook_password_verification_attempt_secrets',
      'hook_send_sms_enabled',
      'hook_send_sms_uri',
      'hook_send_sms_secrets',
      'hook_send_email_enabled',
      'hook_send_email_uri',
      'hook_send_email_secrets',
      'hook_before_user_created_enabled',
      'hook_before_user_created_uri',
      'hook_before_user_created_secrets',
      'hook_after_user_created_enabled',
      'hook_after_user_created_uri',
      'hook_after_user_created_secrets',
      'jwt_exp',
      'mailer_allow_unverified_email_sign_ins',
      'mailer_autoconfirm',
      'mailer_otp_exp',
      'mailer_otp_length',
      'mailer_secure_email_change_enabled',
      'mailer_subjects_confirmation',
      'mailer_subjects_email_change',
      'mailer_subjects_invite',
      'mailer_subjects_magic_link',
      'mailer_subjects_reauthentication',
      'mailer_subjects_recovery',
      'mailer_subjects_password_changed_notification',
      'mailer_subjects_email_changed_notification',
      'mailer_subjects_phone_changed_notification',
      'mailer_subjects_mfa_factor_enrolled_notification',
      'mailer_subjects_mfa_factor_unenrolled_notification',
      'mailer_subjects_identity_linked_notification',
      'mailer_subjects_identity_unlinked_notification',
      'mailer_templates_confirmation_content',
      'mailer_templates_email_change_content',
      'mailer_templates_invite_content',
      'mailer_templates_magic_link_content',
      'mailer_templates_reauthentication_content',
      'mailer_templates_recovery_content',
      'mailer_templates_password_changed_notification_content',
      'mailer_templates_email_changed_notification_content',
      'mailer_templates_phone_changed_notification_content',
      'mailer_templates_mfa_factor_enrolled_notification_content',
      'mailer_templates_mfa_factor_unenrolled_notification_content',
      'mailer_templates_identity_linked_notification_content',
      'mailer_templates_identity_unlinked_notification_content',
      'mailer_notifications_password_changed_enabled',
      'mailer_notifications_email_changed_enabled',
      'mailer_notifications_phone_changed_enabled',
      'mailer_notifications_mfa_factor_enrolled_enabled',
      'mailer_notifications_mfa_factor_unenrolled_enabled',
      'mailer_notifications_identity_linked_enabled',
      'mailer_notifications_identity_unlinked_enabled',
      'mfa_max_enrolled_factors',
      'mfa_totp_enroll_enabled',
      'mfa_totp_verify_enabled',
      'mfa_phone_enroll_enabled',
      'mfa_phone_verify_enabled',
      'mfa_web_authn_enroll_enabled',
      'mfa_web_authn_verify_enabled',
      'passkey_enabled',
      'webauthn_rp_display_name',
      'webauthn_rp_id',
      'webauthn_rp_origins',
      'mfa_phone_otp_length',
      'mfa_phone_template',
      'mfa_phone_max_frequency',
      'nimbus_oauth_client_id',
      'nimbus_oauth_email_optional',
      'nimbus_oauth_client_secret',
      'password_hibp_enabled',
      'password_min_length',
      'password_required_characters',
      'rate_limit_anonymous_users',
      'rate_limit_email_sent',
      'rate_limit_sms_sent',
      'rate_limit_token_refresh',
      'rate_limit_verify',
      'rate_limit_otp',
      'rate_limit_web3',
      'refresh_token_rotation_enabled',
      'saml_enabled',
      'saml_external_url',
      'saml_allow_encrypted_assertions',
      'security_sb_forwarded_for_enabled',
      'security_captcha_enabled',
      'security_captcha_provider',
      'security_captcha_secret',
      'security_manual_linking_enabled',
      'security_refresh_token_reuse_interval',
      'security_update_password_require_current_password',
      'security_update_password_require_reauthentication',
      'sessions_inactivity_timeout',
      'sessions_single_per_user',
      'sessions_tags',
      'sessions_timebox',
      'site_url',
      'sms_autoconfirm',
      'sms_max_frequency',
      'sms_messagebird_access_key',
      'sms_messagebird_originator',
      'sms_otp_exp',
      'sms_otp_length',
      'sms_provider',
      'sms_template',
      'sms_test_otp',
      'sms_test_otp_valid_until',
      'sms_textlocal_api_key',
      'sms_textlocal_sender',
      'sms_twilio_account_sid',
      'sms_twilio_auth_token',
      'sms_twilio_content_sid',
      'sms_twilio_message_service_sid',
      'sms_twilio_verify_account_sid',
      'sms_twilio_verify_auth_token',
      'sms_twilio_verify_message_service_sid',
      'sms_vonage_api_key',
      'sms_vonage_api_secret',
      'sms_vonage_from',
      'smtp_admin_email',
      'smtp_host',
      'smtp_max_frequency',
      'smtp_pass',
      'smtp_port',
      'smtp_sender_name',
      'smtp_user',
      'uri_allow_list',
      'oauth_server_enabled',
      'oauth_server_allow_dynamic_registration',
      'oauth_server_authorization_path',
      'custom_oauth_enabled',
      'custom_oauth_max_providers',
    ],
  })
  .openapi('AuthConfigResponseOutput')

const UpdateAuthConfigBodySchema = z
  .object({
    site_url: z
      .string()
      .regex(/^[^,]+$/)
      .nullable()
      .exactOptional(),
    disable_signup: z.boolean().nullable().exactOptional(),
    jwt_exp: z.int().min(0).max(604800).nullable().exactOptional(),
    smtp_admin_email: z
      .email()
      .regex(
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      )
      .nullable()
      .exactOptional(),
    smtp_host: z.string().nullable().exactOptional(),
    smtp_port: z.string().nullable().exactOptional(),
    smtp_user: z.string().nullable().exactOptional(),
    smtp_pass: z.string().nullable().exactOptional(),
    smtp_max_frequency: z.int().min(0).max(32767).nullable().exactOptional(),
    smtp_sender_name: z.string().nullable().exactOptional(),
    mailer_allow_unverified_email_sign_ins: z.boolean().nullable().exactOptional(),
    mailer_autoconfirm: z.boolean().nullable().exactOptional(),
    mailer_subjects_invite: z.string().nullable().exactOptional(),
    mailer_subjects_confirmation: z.string().nullable().exactOptional(),
    mailer_subjects_recovery: z.string().nullable().exactOptional(),
    mailer_subjects_email_change: z.string().nullable().exactOptional(),
    mailer_subjects_magic_link: z.string().nullable().exactOptional(),
    mailer_subjects_reauthentication: z.string().nullable().exactOptional(),
    mailer_subjects_password_changed_notification: z.string().nullable().exactOptional(),
    mailer_subjects_email_changed_notification: z.string().nullable().exactOptional(),
    mailer_subjects_phone_changed_notification: z.string().nullable().exactOptional(),
    mailer_subjects_mfa_factor_enrolled_notification: z.string().nullable().exactOptional(),
    mailer_subjects_mfa_factor_unenrolled_notification: z.string().nullable().exactOptional(),
    mailer_subjects_identity_linked_notification: z.string().nullable().exactOptional(),
    mailer_subjects_identity_unlinked_notification: z.string().nullable().exactOptional(),
    mailer_templates_invite_content: z.string().nullable().exactOptional(),
    mailer_templates_confirmation_content: z.string().nullable().exactOptional(),
    mailer_templates_recovery_content: z.string().nullable().exactOptional(),
    mailer_templates_email_change_content: z.string().nullable().exactOptional(),
    mailer_templates_magic_link_content: z.string().nullable().exactOptional(),
    mailer_templates_reauthentication_content: z.string().nullable().exactOptional(),
    mailer_templates_password_changed_notification_content: z.string().nullable().exactOptional(),
    mailer_templates_email_changed_notification_content: z.string().nullable().exactOptional(),
    mailer_templates_phone_changed_notification_content: z.string().nullable().exactOptional(),
    mailer_templates_mfa_factor_enrolled_notification_content: z
      .string()
      .nullable()
      .exactOptional(),
    mailer_templates_mfa_factor_unenrolled_notification_content: z
      .string()
      .nullable()
      .exactOptional(),
    mailer_templates_identity_linked_notification_content: z.string().nullable().exactOptional(),
    mailer_templates_identity_unlinked_notification_content: z.string().nullable().exactOptional(),
    mailer_notifications_password_changed_enabled: z.boolean().nullable().exactOptional(),
    mailer_notifications_email_changed_enabled: z.boolean().nullable().exactOptional(),
    mailer_notifications_phone_changed_enabled: z.boolean().nullable().exactOptional(),
    mailer_notifications_mfa_factor_enrolled_enabled: z.boolean().nullable().exactOptional(),
    mailer_notifications_mfa_factor_unenrolled_enabled: z.boolean().nullable().exactOptional(),
    mailer_notifications_identity_linked_enabled: z.boolean().nullable().exactOptional(),
    mailer_notifications_identity_unlinked_enabled: z.boolean().nullable().exactOptional(),
    mfa_max_enrolled_factors: z.int().min(0).max(2147483647).nullable().exactOptional(),
    uri_allow_list: z.string().nullable().exactOptional(),
    external_anonymous_users_enabled: z.boolean().nullable().exactOptional(),
    external_email_enabled: z.boolean().nullable().exactOptional(),
    external_phone_enabled: z.boolean().nullable().exactOptional(),
    saml_enabled: z.boolean().nullable().exactOptional(),
    saml_external_url: z
      .string()
      .regex(/^[^,]+$/)
      .nullable()
      .exactOptional(),
    security_sb_forwarded_for_enabled: z.boolean().nullable().exactOptional(),
    security_captcha_enabled: z.boolean().nullable().exactOptional(),
    security_captcha_provider: z
      .union([z.literal('turnstile'), z.literal('hcaptcha'), z.literal(null)])
      .nullable()
      .exactOptional(),
    security_captcha_secret: z.string().nullable().exactOptional(),
    sessions_timebox: z
      .number()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Session timebox in hours. Maximum 8760 hours (1 year).' }),
    sessions_inactivity_timeout: z
      .number()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Session inactivity timeout in hours. Maximum 8760 hours (1 year).',
      }),
    sessions_single_per_user: z.boolean().nullable().exactOptional(),
    sessions_tags: z
      .string()
      .regex(/^\s*([a-zA-Z0-9_-]+(\s*,+\s*)?)*\s*$/)
      .nullable()
      .exactOptional(),
    rate_limit_anonymous_users: z.int().min(1).max(2147483647).nullable().exactOptional(),
    rate_limit_email_sent: z.int().min(1).max(2147483647).nullable().exactOptional(),
    rate_limit_sms_sent: z.int().min(1).max(2147483647).nullable().exactOptional(),
    rate_limit_verify: z.int().min(1).max(2147483647).nullable().exactOptional(),
    rate_limit_token_refresh: z.int().min(1).max(2147483647).nullable().exactOptional(),
    rate_limit_otp: z.int().min(1).max(2147483647).nullable().exactOptional(),
    rate_limit_web3: z.int().min(1).max(2147483647).nullable().exactOptional(),
    mailer_secure_email_change_enabled: z.boolean().nullable().exactOptional(),
    refresh_token_rotation_enabled: z.boolean().nullable().exactOptional(),
    password_hibp_enabled: z.boolean().nullable().exactOptional(),
    password_min_length: z.int().min(6).max(32767).nullable().exactOptional(),
    password_required_characters: z
      .union([
        z.literal('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'),
        z.literal('abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'),
        z.literal(
          'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\\\:"|<>?,./`~',
        ),
        z.literal(''),
        z.literal(null),
      ])
      .nullable()
      .exactOptional(),
    security_manual_linking_enabled: z.boolean().nullable().exactOptional(),
    security_update_password_require_reauthentication: z.boolean().nullable().exactOptional(),
    security_update_password_require_current_password: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: "Require the user's current password when updating their password.",
      }),
    security_refresh_token_reuse_interval: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Refresh token reuse interval in seconds. Maximum 300 seconds (5 minutes).',
      }),
    mailer_otp_exp: z.int().min(0).max(2147483647).exactOptional(),
    mailer_otp_length: z.int().min(6).max(10).nullable().exactOptional(),
    sms_autoconfirm: z.boolean().nullable().exactOptional(),
    sms_max_frequency: z.int().min(0).max(32767).nullable().exactOptional(),
    sms_otp_exp: z.int().min(0).max(2147483647).nullable().exactOptional(),
    sms_otp_length: z.int().min(0).max(32767).exactOptional(),
    sms_provider: z
      .union([
        z.literal('messagebird'),
        z.literal('textlocal'),
        z.literal('twilio'),
        z.literal('twilio_verify'),
        z.literal('vonage'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional(),
    sms_messagebird_access_key: z.string().nullable().exactOptional(),
    sms_messagebird_originator: z.string().nullable().exactOptional(),
    sms_test_otp: z
      .string()
      .regex(/^([0-9]{1,15}=[0-9]+,?)*$/)
      .nullable()
      .exactOptional(),
    sms_test_otp_valid_until: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional(),
    sms_textlocal_api_key: z.string().nullable().exactOptional(),
    sms_textlocal_sender: z.string().nullable().exactOptional(),
    sms_twilio_account_sid: z.string().nullable().exactOptional(),
    sms_twilio_auth_token: z.string().nullable().exactOptional(),
    sms_twilio_content_sid: z.string().nullable().exactOptional(),
    sms_twilio_message_service_sid: z.string().nullable().exactOptional(),
    sms_twilio_verify_account_sid: z.string().nullable().exactOptional(),
    sms_twilio_verify_auth_token: z.string().nullable().exactOptional(),
    sms_twilio_verify_message_service_sid: z.string().nullable().exactOptional(),
    sms_vonage_api_key: z.string().nullable().exactOptional(),
    sms_vonage_api_secret: z.string().nullable().exactOptional(),
    sms_vonage_from: z.string().nullable().exactOptional(),
    sms_template: z.string().nullable().exactOptional(),
    hook_mfa_verification_attempt_enabled: z.boolean().nullable().exactOptional(),
    hook_mfa_verification_attempt_uri: z.string().nullable().exactOptional(),
    hook_mfa_verification_attempt_secrets: z.string().nullable().exactOptional(),
    hook_password_verification_attempt_enabled: z.boolean().nullable().exactOptional(),
    hook_password_verification_attempt_uri: z.string().nullable().exactOptional(),
    hook_password_verification_attempt_secrets: z.string().nullable().exactOptional(),
    hook_custom_access_token_enabled: z.boolean().nullable().exactOptional(),
    hook_custom_access_token_uri: z.string().nullable().exactOptional(),
    hook_custom_access_token_secrets: z.string().nullable().exactOptional(),
    hook_send_sms_enabled: z.boolean().nullable().exactOptional(),
    hook_send_sms_uri: z.string().nullable().exactOptional(),
    hook_send_sms_secrets: z.string().nullable().exactOptional(),
    hook_send_email_enabled: z.boolean().nullable().exactOptional(),
    hook_send_email_uri: z.string().nullable().exactOptional(),
    hook_send_email_secrets: z.string().nullable().exactOptional(),
    hook_before_user_created_enabled: z.boolean().nullable().exactOptional(),
    hook_before_user_created_uri: z.string().nullable().exactOptional(),
    hook_before_user_created_secrets: z.string().nullable().exactOptional(),
    hook_after_user_created_enabled: z.boolean().nullable().exactOptional(),
    hook_after_user_created_uri: z.string().nullable().exactOptional(),
    hook_after_user_created_secrets: z.string().nullable().exactOptional(),
    external_apple_enabled: z.boolean().nullable().exactOptional(),
    external_apple_client_id: z.string().nullable().exactOptional(),
    external_apple_email_optional: z.boolean().nullable().exactOptional(),
    external_apple_secret: z.string().nullable().exactOptional(),
    external_apple_additional_client_ids: z.string().nullable().exactOptional(),
    external_azure_enabled: z.boolean().nullable().exactOptional(),
    external_azure_client_id: z.string().nullable().exactOptional(),
    external_azure_email_optional: z.boolean().nullable().exactOptional(),
    external_azure_secret: z.string().nullable().exactOptional(),
    external_azure_url: z.string().nullable().exactOptional(),
    external_bitbucket_enabled: z.boolean().nullable().exactOptional(),
    external_bitbucket_client_id: z.string().nullable().exactOptional(),
    external_bitbucket_email_optional: z.boolean().nullable().exactOptional(),
    external_bitbucket_secret: z.string().nullable().exactOptional(),
    external_discord_enabled: z.boolean().nullable().exactOptional(),
    external_discord_client_id: z.string().nullable().exactOptional(),
    external_discord_email_optional: z.boolean().nullable().exactOptional(),
    external_discord_secret: z.string().nullable().exactOptional(),
    external_facebook_enabled: z.boolean().nullable().exactOptional(),
    external_facebook_client_id: z.string().nullable().exactOptional(),
    external_facebook_email_optional: z.boolean().nullable().exactOptional(),
    external_facebook_secret: z.string().nullable().exactOptional(),
    external_figma_enabled: z.boolean().nullable().exactOptional(),
    external_figma_client_id: z.string().nullable().exactOptional(),
    external_figma_email_optional: z.boolean().nullable().exactOptional(),
    external_figma_secret: z.string().nullable().exactOptional(),
    external_github_enabled: z.boolean().nullable().exactOptional(),
    external_github_client_id: z.string().nullable().exactOptional(),
    external_github_email_optional: z.boolean().nullable().exactOptional(),
    external_github_secret: z.string().nullable().exactOptional(),
    external_gitlab_enabled: z.boolean().nullable().exactOptional(),
    external_gitlab_client_id: z.string().nullable().exactOptional(),
    external_gitlab_email_optional: z.boolean().nullable().exactOptional(),
    external_gitlab_secret: z.string().nullable().exactOptional(),
    external_gitlab_url: z.string().nullable().exactOptional(),
    external_google_enabled: z.boolean().nullable().exactOptional(),
    external_google_client_id: z.string().nullable().exactOptional(),
    external_google_email_optional: z.boolean().nullable().exactOptional(),
    external_google_secret: z.string().nullable().exactOptional(),
    external_google_additional_client_ids: z.string().nullable().exactOptional(),
    external_google_skip_nonce_check: z.boolean().nullable().exactOptional(),
    external_kakao_enabled: z.boolean().nullable().exactOptional(),
    external_kakao_client_id: z.string().nullable().exactOptional(),
    external_kakao_email_optional: z.boolean().nullable().exactOptional(),
    external_kakao_secret: z.string().nullable().exactOptional(),
    external_keycloak_enabled: z.boolean().nullable().exactOptional(),
    external_keycloak_client_id: z.string().nullable().exactOptional(),
    external_keycloak_email_optional: z.boolean().nullable().exactOptional(),
    external_keycloak_secret: z.string().nullable().exactOptional(),
    external_keycloak_url: z.string().nullable().exactOptional(),
    external_linkedin_oidc_enabled: z.boolean().nullable().exactOptional(),
    external_linkedin_oidc_client_id: z.string().nullable().exactOptional(),
    external_linkedin_oidc_email_optional: z.boolean().nullable().exactOptional(),
    external_linkedin_oidc_secret: z.string().nullable().exactOptional(),
    external_slack_oidc_enabled: z.boolean().nullable().exactOptional(),
    external_slack_oidc_client_id: z.string().nullable().exactOptional(),
    external_slack_oidc_email_optional: z.boolean().nullable().exactOptional(),
    external_slack_oidc_secret: z.string().nullable().exactOptional(),
    external_notion_enabled: z.boolean().nullable().exactOptional(),
    external_notion_client_id: z.string().nullable().exactOptional(),
    external_notion_email_optional: z.boolean().nullable().exactOptional(),
    external_notion_secret: z.string().nullable().exactOptional(),
    external_slack_enabled: z.boolean().nullable().exactOptional(),
    external_slack_client_id: z.string().nullable().exactOptional(),
    external_slack_email_optional: z.boolean().nullable().exactOptional(),
    external_slack_secret: z.string().nullable().exactOptional(),
    external_spotify_enabled: z.boolean().nullable().exactOptional(),
    external_spotify_client_id: z.string().nullable().exactOptional(),
    external_spotify_email_optional: z.boolean().nullable().exactOptional(),
    external_spotify_secret: z.string().nullable().exactOptional(),
    external_twitch_enabled: z.boolean().nullable().exactOptional(),
    external_twitch_client_id: z.string().nullable().exactOptional(),
    external_twitch_email_optional: z.boolean().nullable().exactOptional(),
    external_twitch_secret: z.string().nullable().exactOptional(),
    external_twitter_enabled: z.boolean().nullable().exactOptional(),
    external_twitter_client_id: z.string().nullable().exactOptional(),
    external_twitter_email_optional: z.boolean().nullable().exactOptional(),
    external_twitter_secret: z.string().nullable().exactOptional(),
    external_x_enabled: z.boolean().nullable().exactOptional(),
    external_x_client_id: z.string().nullable().exactOptional(),
    external_x_email_optional: z.boolean().nullable().exactOptional(),
    external_x_secret: z.string().nullable().exactOptional(),
    external_workos_enabled: z.boolean().nullable().exactOptional(),
    external_workos_client_id: z.string().nullable().exactOptional(),
    external_workos_secret: z.string().nullable().exactOptional(),
    external_workos_url: z.string().nullable().exactOptional(),
    external_web3_solana_enabled: z.boolean().nullable().exactOptional(),
    external_web3_ethereum_enabled: z.boolean().nullable().exactOptional(),
    external_zoom_enabled: z.boolean().nullable().exactOptional(),
    external_zoom_client_id: z.string().nullable().exactOptional(),
    external_zoom_email_optional: z.boolean().nullable().exactOptional(),
    external_zoom_secret: z.string().nullable().exactOptional(),
    db_max_pool_size: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .exactOptional(),
    db_max_pool_size_unit: z
      .union([z.literal('connections'), z.literal('percent'), z.literal(null)])
      .nullable()
      .exactOptional(),
    api_max_request_duration: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .exactOptional(),
    mfa_totp_enroll_enabled: z.boolean().nullable().exactOptional(),
    mfa_totp_verify_enabled: z.boolean().nullable().exactOptional(),
    mfa_web_authn_enroll_enabled: z.boolean().nullable().exactOptional(),
    mfa_web_authn_verify_enabled: z.boolean().nullable().exactOptional(),
    passkey_enabled: z.boolean().exactOptional(),
    webauthn_rp_display_name: z.string().nullable().exactOptional(),
    webauthn_rp_id: z.string().nullable().exactOptional(),
    webauthn_rp_origins: z.string().nullable().exactOptional(),
    mfa_phone_enroll_enabled: z.boolean().nullable().exactOptional(),
    mfa_phone_verify_enabled: z.boolean().nullable().exactOptional(),
    mfa_phone_max_frequency: z.int().min(0).max(32767).nullable().exactOptional(),
    mfa_phone_otp_length: z.int().min(0).max(32767).nullable().exactOptional(),
    mfa_phone_template: z.string().nullable().exactOptional(),
    nimbus_oauth_client_id: z.string().nullable().exactOptional(),
    nimbus_oauth_client_secret: z.string().nullable().exactOptional(),
    oauth_server_enabled: z.boolean().nullable().exactOptional(),
    oauth_server_allow_dynamic_registration: z.boolean().nullable().exactOptional(),
    oauth_server_authorization_path: z.string().nullable().exactOptional(),
    custom_oauth_enabled: z.boolean().exactOptional(),
  })
  .openapi({
    example: { site_url: 'https://app.example.com', disable_signup: false, jwt_exp: 3600 },
    required: [],
  })
  .openapi('UpdateAuthConfigBody')

const CreateThirdPartyAuthBodySchema = z
  .object({
    oidc_issuer_url: z.string().exactOptional(),
    jwks_url: z.string().exactOptional(),
    custom_jwks: z.any().exactOptional(),
  })
  .openapi({
    example: {
      oidc_issuer_url: 'https://login.acme.com',
      jwks_url: 'https://login.acme.com/.well-known/jwks.json',
    },
    required: [],
  })
  .openapi('CreateThirdPartyAuthBody')

const ThirdPartyAuthOutputSchema = z
  .object({
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
    type: z.string(),
    oidc_issuer_url: z.string().nullable().exactOptional(),
    jwks_url: z.string().nullable().exactOptional(),
    custom_jwks: z.any().nullable().exactOptional(),
    resolved_jwks: z.any().nullable().exactOptional(),
    inserted_at: z.string(),
    updated_at: z.string(),
    resolved_at: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['id', 'type', 'inserted_at', 'updated_at'] })
  .openapi('ThirdPartyAuthOutput')

const GetProjectAvailableRestoreVersionsResponseOutputSchema = z
  .object({
    available_versions: z.array(
      z
        .object({
          version: z.string(),
          release_channel: z.enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview']),
          postgres_engine: z.enum(['13', '14', '15', '17', '17-oriole']),
        })
        .openapi({ required: ['version', 'release_channel', 'postgres_engine'] }),
    ),
  })
  .openapi({ required: ['available_versions'] })
  .openapi('GetProjectAvailableRestoreVersionsResponseOutput')

const ListProjectAddonsResponseOutputSchema = z
  .object({
    selected_addons: z.array(
      z
        .object({
          type: z.enum([
            'custom_domain',
            'compute_instance',
            'pitr',
            'ipv4',
            'auth_mfa_phone',
            'auth_mfa_web_authn',
            'log_drain',
            'etl_pipeline',
          ]),
          variant: z
            .object({
              id: z.union([
                z.enum([
                  'ci_micro',
                  'ci_small',
                  'ci_medium',
                  'ci_large',
                  'ci_xlarge',
                  'ci_2xlarge',
                  'ci_4xlarge',
                  'ci_8xlarge',
                  'ci_12xlarge',
                  'ci_16xlarge',
                  'ci_24xlarge',
                  'ci_24xlarge_optimized_cpu',
                  'ci_24xlarge_optimized_memory',
                  'ci_24xlarge_high_memory',
                  'ci_48xlarge',
                  'ci_48xlarge_optimized_cpu',
                  'ci_48xlarge_optimized_memory',
                  'ci_48xlarge_high_memory',
                ]),
                z.literal('cd_default'),
                z.enum(['pitr_7', 'pitr_14', 'pitr_28']),
                z.literal('ipv4_default'),
                z.literal('auth_mfa_phone_default'),
                z.literal('auth_mfa_web_authn_default'),
                z.literal('log_drain_default'),
                z.literal('etl_pipeline_default'),
              ]),
              name: z.string(),
              price: z
                .object({
                  description: z.string(),
                  type: z.enum(['fixed', 'usage']),
                  interval: z.enum(['monthly', 'hourly']),
                  amount: z.number(),
                })
                .openapi({ required: ['description', 'type', 'interval', 'amount'] }),
              meta: JsonValueOutputSchema.exactOptional(),
            })
            .openapi({ required: ['id', 'name', 'price'] }),
        })
        .openapi({ required: ['type', 'variant'] }),
    ),
    available_addons: z.array(
      z
        .object({
          type: z.enum([
            'custom_domain',
            'compute_instance',
            'pitr',
            'ipv4',
            'auth_mfa_phone',
            'auth_mfa_web_authn',
            'log_drain',
            'etl_pipeline',
          ]),
          name: z.string(),
          variants: z.array(
            z
              .object({
                id: z.union([
                  z.enum([
                    'ci_micro',
                    'ci_small',
                    'ci_medium',
                    'ci_large',
                    'ci_xlarge',
                    'ci_2xlarge',
                    'ci_4xlarge',
                    'ci_8xlarge',
                    'ci_12xlarge',
                    'ci_16xlarge',
                    'ci_24xlarge',
                    'ci_24xlarge_optimized_cpu',
                    'ci_24xlarge_optimized_memory',
                    'ci_24xlarge_high_memory',
                    'ci_48xlarge',
                    'ci_48xlarge_optimized_cpu',
                    'ci_48xlarge_optimized_memory',
                    'ci_48xlarge_high_memory',
                  ]),
                  z.literal('cd_default'),
                  z.enum(['pitr_7', 'pitr_14', 'pitr_28']),
                  z.literal('ipv4_default'),
                  z.literal('auth_mfa_phone_default'),
                  z.literal('auth_mfa_web_authn_default'),
                  z.literal('log_drain_default'),
                  z.literal('etl_pipeline_default'),
                ]),
                name: z.string(),
                price: z
                  .object({
                    description: z.string(),
                    type: z.enum(['fixed', 'usage']),
                    interval: z.enum(['monthly', 'hourly']),
                    amount: z.number(),
                  })
                  .openapi({ required: ['description', 'type', 'interval', 'amount'] }),
                meta: JsonValueOutputSchema.exactOptional(),
              })
              .openapi({ required: ['id', 'name', 'price'] }),
          ),
        })
        .openapi({ required: ['type', 'name', 'variants'] }),
    ),
  })
  .openapi({ required: ['selected_addons', 'available_addons'] })
  .openapi('ListProjectAddonsResponseOutput')

const ApplyProjectAddonBodySchema = z
  .object({
    addon_variant: z.union([
      z.enum([
        'ci_micro',
        'ci_small',
        'ci_medium',
        'ci_large',
        'ci_xlarge',
        'ci_2xlarge',
        'ci_4xlarge',
        'ci_8xlarge',
        'ci_12xlarge',
        'ci_16xlarge',
        'ci_24xlarge',
        'ci_24xlarge_optimized_cpu',
        'ci_24xlarge_optimized_memory',
        'ci_24xlarge_high_memory',
        'ci_48xlarge',
        'ci_48xlarge_optimized_cpu',
        'ci_48xlarge_optimized_memory',
        'ci_48xlarge_high_memory',
      ]),
      z.literal('cd_default'),
      z.enum(['pitr_7', 'pitr_14', 'pitr_28']),
      z.literal('ipv4_default'),
    ]),
    addon_type: z.enum([
      'custom_domain',
      'compute_instance',
      'pitr',
      'ipv4',
      'auth_mfa_phone',
      'auth_mfa_web_authn',
      'log_drain',
      'etl_pipeline',
    ]),
  })
  .openapi({
    required: ['addon_variant', 'addon_type'],
    example: { addon_variant: 'pitr_7', addon_type: 'pitr' },
  })
  .openapi('ApplyProjectAddonBody')

const ProjectClaimTokenResponseOutputSchema = z
  .object({
    token_alias: z.string(),
    expires_at: z.string(),
    created_at: z.string(),
    created_by: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
  })
  .openapi({ required: ['token_alias', 'expires_at', 'created_at', 'created_by'] })
  .openapi('ProjectClaimTokenResponseOutput')

const CreateProjectClaimTokenResponseOutputSchema = z
  .object({
    token: z.string(),
    token_alias: z.string(),
    expires_at: z.string(),
    created_at: z.string(),
    created_by: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
  })
  .openapi({ required: ['token', 'token_alias', 'expires_at', 'created_at', 'created_by'] })
  .openapi('CreateProjectClaimTokenResponseOutput')

const V1ProjectAdvisorsResponseOutputSchema = z
  .object({
    lints: z.array(
      z
        .object({
          name: z.enum([
            'unindexed_foreign_keys',
            'auth_users_exposed',
            'auth_rls_initplan',
            'no_primary_key',
            'unused_index',
            'multiple_permissive_policies',
            'policy_exists_rls_disabled',
            'rls_enabled_no_policy',
            'duplicate_index',
            'security_definer_view',
            'function_search_path_mutable',
            'rls_disabled_in_public',
            'extension_in_public',
            'rls_references_user_metadata',
            'materialized_view_in_api',
            'foreign_table_in_api',
            'unsupported_reg_types',
            'auth_otp_long_expiry',
            'auth_otp_short_length',
            'ssl_not_enforced',
            'log_connections_not_enabled',
            'network_restrictions_not_set',
            'password_requirements_min_length',
            'pitr_not_enabled',
            'auth_leaked_password_protection',
            'auth_insufficient_mfa_options',
            'auth_password_policy_missing',
            'leaked_service_key',
            'no_backup_admin',
            'vulnerable_postgres_version',
            'db_not_reachable',
            'db_connection_failing',
            'db_connection_limit_reached',
            'instance_telemetry_lost',
            'instance_db_down',
            'instance_alert_firing',
            'log_data_api_error_rate_high',
            'log_auth_error_rate_high',
            'log_storage_error_rate_high',
            'log_edge_function_error_rate_high',
            'realtime_authorization_timeouts',
            'realtime_postgres_changes_spike',
            'realtime_concurrent_users_near_limit',
            'project_not_active',
            'advisor_check_unavailable',
          ]),
          title: z.string(),
          level: z.enum(['ERROR', 'WARN', 'INFO']),
          facing: z.literal('EXTERNAL'),
          categories: z
            .array(z.enum(['PERFORMANCE', 'SECURITY', 'HEALTH']))
            .openapi({ 'x-ignore-array-items-must-be-objects': true }),
          description: z.string(),
          detail: z.string(),
          remediation: z.string(),
          metadata: z
            .object({
              schema: z.string().exactOptional(),
              name: z.string().exactOptional(),
              entity: z.string().exactOptional(),
              type: z
                .enum([
                  'table',
                  'view',
                  'materialized view',
                  'foreign table',
                  'auth',
                  'function',
                  'extension',
                  'compliance',
                  'health',
                ])
                .exactOptional(),
              fkey_name: z.string().exactOptional(),
              fkey_columns: z
                .array(z.number())
                .exactOptional()
                .openapi({ 'x-ignore-array-items-must-be-objects': true }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          cache_key: z.string(),
          observed_at: z.iso
            .datetime({ offset: true })
            .regex(
              /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$/,
            )
            .exactOptional(),
        })
        .openapi({
          required: [
            'name',
            'title',
            'level',
            'facing',
            'categories',
            'description',
            'detail',
            'remediation',
            'cache_key',
          ],
        }),
    ),
  })
  .openapi({ required: ['lints'] })
  .openapi('V1ProjectAdvisorsResponseOutput')

const AnalyticsResponseOutputSchema = z
  .object({
    result: z.array(z.any()).exactOptional(),
    error: z
      .union([
        z.string(),
        z
          .object({
            code: z.number(),
            errors: z.array(
              z
                .object({
                  domain: z.string(),
                  location: z.string(),
                  locationType: z.string(),
                  message: z.string(),
                  reason: z.string(),
                })
                .openapi({ required: ['domain', 'location', 'locationType', 'message', 'reason'] }),
            ),
            message: z.string(),
            status: z.string(),
          })
          .openapi({ required: ['code', 'errors', 'message', 'status'] }),
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyticsResponseOutput')

const V1GetUsageApiCountResponseOutputSchema = z
  .object({
    result: z
      .array(
        z
          .object({
            timestamp: z.iso
              .datetime({ offset: true })
              .regex(
                /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|))$/,
              ),
            total_auth_requests: z.number(),
            total_realtime_requests: z.number(),
            total_rest_requests: z.number(),
            total_storage_requests: z.number(),
          })
          .openapi({
            required: [
              'timestamp',
              'total_auth_requests',
              'total_realtime_requests',
              'total_rest_requests',
              'total_storage_requests',
            ],
          }),
      )
      .exactOptional(),
    error: z
      .union([
        z.string(),
        z
          .object({
            code: z.number(),
            errors: z.array(
              z
                .object({
                  domain: z.string(),
                  location: z.string(),
                  locationType: z.string(),
                  message: z.string(),
                  reason: z.string(),
                })
                .openapi({ required: ['domain', 'location', 'locationType', 'message', 'reason'] }),
            ),
            message: z.string(),
            status: z.string(),
          })
          .openapi({ required: ['code', 'errors', 'message', 'status'] }),
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V1GetUsageApiCountResponseOutput')

const V1GetUsageApiRequestsCountResponseOutputSchema = z
  .object({
    result: z
      .array(z.object({ count: z.number() }).openapi({ required: ['count'] }))
      .exactOptional(),
    error: z
      .union([
        z.string(),
        z
          .object({
            code: z.number(),
            errors: z.array(
              z
                .object({
                  domain: z.string(),
                  location: z.string(),
                  locationType: z.string(),
                  message: z.string(),
                  reason: z.string(),
                })
                .openapi({ required: ['domain', 'location', 'locationType', 'message', 'reason'] }),
            ),
            message: z.string(),
            status: z.string(),
          })
          .openapi({ required: ['code', 'errors', 'message', 'status'] }),
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V1GetUsageApiRequestsCountResponseOutput')

const CreateRoleBodySchema = z
  .object({ read_only: z.boolean() })
  .openapi({ required: ['read_only'], example: { read_only: true } })
  .openapi('CreateRoleBody')

const CreateRoleResponseOutputSchema = z
  .object({
    role: z.string().min(1),
    password: z.string().min(1),
    ttl_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9007199254740991n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1, maximum: 9007199254740991 }),
  })
  .openapi({ required: ['role', 'password', 'ttl_seconds'] })
  .openapi('CreateRoleResponseOutput')

const DeleteRolesResponseOutputSchema = z
  .object({ message: z.literal('ok') })
  .openapi({ required: ['message'] })
  .openapi('DeleteRolesResponseOutput')

const V1ListMigrationsResponseOutputSchema = z
  .array(
    z
      .object({ version: z.string(), name: z.string().exactOptional() })
      .openapi({ required: ['version'] }),
  )
  .openapi('V1ListMigrationsResponseOutput')

const V1CreateMigrationBodySchema = z
  .object({
    query: z.string().min(1),
    name: z.string().exactOptional(),
    rollback: z.string().exactOptional(),
  })
  .openapi({
    required: ['query'],
    example: {
      query: 'create table public.widgets(id bigint primary key);',
      name: 'create_widgets_table',
      rollback: 'drop table if exists public.widgets;',
    },
  })
  .openapi('V1CreateMigrationBody')

const V1UpsertMigrationBodySchema = z
  .object({
    query: z.string().min(1),
    name: z.string().exactOptional(),
    rollback: z.string().exactOptional(),
  })
  .openapi({
    required: ['query'],
    example: {
      query: 'create table public.widgets(id bigint primary key);',
      name: 'create_widgets_table',
      rollback: 'drop table if exists public.widgets;',
    },
  })
  .openapi('V1UpsertMigrationBody')

const V1GetMigrationResponseOutputSchema = z
  .object({
    version: z.string(),
    name: z.string().exactOptional(),
    statements: z.array(z.string()).exactOptional(),
    rollback: z.array(z.string()).exactOptional(),
    created_by: z.string().exactOptional(),
    idempotency_key: z.string().exactOptional(),
  })
  .openapi({ required: ['version'] })
  .openapi('V1GetMigrationResponseOutput')

const V1PatchMigrationBodySchema = z
  .object({ name: z.string().exactOptional(), rollback: z.string().exactOptional() })
  .openapi({
    example: { name: 'create_widgets_table', rollback: 'drop table if exists public.widgets;' },
    required: [],
  })
  .openapi('V1PatchMigrationBody')

const V1RunQueryBodySchema = z
  .object({
    query: z.string().min(1),
    parameters: z.array(z.any()).exactOptional(),
    read_only: z.boolean().exactOptional(),
  })
  .openapi({
    required: ['query'],
    example: { query: 'select * from pg_stat_activity limit 1;', read_only: true },
  })
  .openapi('V1RunQueryBody')

const V1ReadOnlyQueryBodySchema = z
  .object({ query: z.string().min(1), parameters: z.array(z.any()).exactOptional() })
  .openapi({ required: ['query'], example: { query: 'select * from pg_stat_activity limit 1;' } })
  .openapi('V1ReadOnlyQueryBody')

const GetProjectDbMetadataResponseOutputSchema = z
  .object({
    databases: z.array(
      z
        .object({
          name: z.string(),
          schemas: z.array(z.object({ name: z.string() }).openapi({ required: ['name'] })),
        })
        .openapi({ required: ['name', 'schemas'] }),
    ),
  })
  .openapi({ required: ['databases'] })
  .openapi('GetProjectDbMetadataResponseOutput')

const V1UpdatePasswordBodySchema = z
  .object({ password: z.string().min(4) })
  .openapi({ required: ['password'], example: { password: 'correct-horse-battery-staple' } })
  .openapi('V1UpdatePasswordBody')

const V1UpdatePasswordResponseOutputSchema = z
  .object({ message: z.string() })
  .openapi({ required: ['message'] })
  .openapi('V1UpdatePasswordResponseOutput')

const JitAccessResponseOutputSchema = z
  .object({
    user_id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .exactOptional(),
    user_roles: z.array(
      z
        .object({
          role: z.string(),
          expires_at: z.number().exactOptional(),
          allowed_networks: z
            .object({
              allowed_cidrs: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv4()
                        .regex(
                          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
              allowed_cidrs_v6: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv6()
                        .regex(
                          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          branches_only: z.boolean().exactOptional(),
        })
        .openapi({ required: ['role'] }),
    ),
  })
  .openapi({ required: ['user_roles'] })
  .openapi('JitAccessResponseOutput')

const AuthorizeJitAccessBodySchema = z
  .object({
    role: z.string().min(1),
    rhost: z.union([
      z
        .ipv4()
        .regex(
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        ),
      z
        .ipv6()
        .regex(
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        ),
    ]),
  })
  .openapi({ required: ['role', 'rhost'], example: { role: 'postgres', rhost: '203.0.113.10' } })
  .openapi('AuthorizeJitAccessBody')

const JitAuthorizeAccessResponseOutputSchema = z
  .object({
    user_id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .exactOptional(),
    act: z.string().exactOptional(),
    user_role: z
      .object({
        role: z.string(),
        expires_at: z.number().exactOptional(),
        allowed_networks: z
          .object({
            allowed_cidrs: z
              .array(
                z
                  .object({
                    cidr: z
                      .cidrv4()
                      .regex(
                        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                      ),
                  })
                  .openapi({ required: ['cidr'] }),
              )
              .exactOptional(),
            allowed_cidrs_v6: z
              .array(
                z
                  .object({
                    cidr: z
                      .cidrv6()
                      .regex(
                        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                      ),
                  })
                  .openapi({ required: ['cidr'] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        branches_only: z.boolean().exactOptional(),
      })
      .openapi({ required: ['role'] }),
  })
  .openapi({ required: ['user_role'] })
  .openapi('JitAuthorizeAccessResponseOutput')

const JitListAccessResponseOutputSchema = z
  .object({
    items: z.array(
      z.union([
        z
          .object({
            user_id: z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
              ),
            primary_email: z.string().nullable(),
            invite_id: z.null().nullable(),
            expires_at: z.null().nullable(),
            user_roles: z.array(
              z
                .object({
                  role: z.string(),
                  expires_at: z.number().exactOptional(),
                  allowed_networks: z
                    .object({
                      allowed_cidrs: z
                        .array(
                          z
                            .object({
                              cidr: z
                                .cidrv4()
                                .regex(
                                  /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                                ),
                            })
                            .openapi({ required: ['cidr'] }),
                        )
                        .exactOptional(),
                      allowed_cidrs_v6: z
                        .array(
                          z
                            .object({
                              cidr: z
                                .cidrv6()
                                .regex(
                                  /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                                ),
                            })
                            .openapi({ required: ['cidr'] }),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  branches_only: z.boolean().exactOptional(),
                })
                .openapi({ required: ['role'] }),
            ),
          })
          .openapi({
            required: ['user_id', 'primary_email', 'invite_id', 'expires_at', 'user_roles'],
          }),
        z
          .object({
            user_id: z.null().nullable(),
            primary_email: z.string(),
            invite_id: z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
              ),
            expires_at: z.string(),
            user_roles: z.array(
              z
                .object({
                  role: z.string(),
                  expires_at: z.number().exactOptional(),
                  allowed_networks: z
                    .object({
                      allowed_cidrs: z
                        .array(
                          z
                            .object({
                              cidr: z
                                .cidrv4()
                                .regex(
                                  /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                                ),
                            })
                            .openapi({ required: ['cidr'] }),
                        )
                        .exactOptional(),
                      allowed_cidrs_v6: z
                        .array(
                          z
                            .object({
                              cidr: z
                                .cidrv6()
                                .regex(
                                  /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                                ),
                            })
                            .openapi({ required: ['cidr'] }),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  branches_only: z.boolean().exactOptional(),
                })
                .openapi({ required: ['role'] }),
            ),
          })
          .openapi({
            required: ['user_id', 'primary_email', 'invite_id', 'expires_at', 'user_roles'],
          }),
      ]),
    ),
  })
  .openapi({ required: ['items'] })
  .openapi('JitListAccessResponseOutput')

const UpdateJitAccessBodySchema = z
  .object({
    user_id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .min(1),
    roles: z.array(
      z
        .object({
          role: z.string().min(1),
          expires_at: z.number().exactOptional(),
          allowed_networks: z
            .object({
              allowed_cidrs: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv4()
                        .regex(
                          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
              allowed_cidrs_v6: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv6()
                        .regex(
                          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          branches_only: z.boolean().exactOptional(),
        })
        .openapi({ required: ['role'] }),
    ),
  })
  .openapi({
    required: ['user_id', 'roles'],
    example: {
      user_id: '55555555-5555-4555-8555-555555555555',
      roles: [
        {
          role: 'postgres',
          expires_at: 1740787200,
          allowed_networks: { allowed_cidrs: [{ cidr: '203.0.113.0/24' }] },
          branches_only: false,
        },
      ],
    },
  })
  .openapi('UpdateJitAccessBody')

const InviteExternalUserJitAccessBodySchema = z
  .object({
    email: z
      .email()
      .regex(
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      )
      .min(1),
    roles: z.array(
      z
        .object({
          role: z.string().min(1),
          expires_at: z.number().exactOptional(),
          allowed_networks: z
            .object({
              allowed_cidrs: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv4()
                        .regex(
                          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
              allowed_cidrs_v6: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv6()
                        .regex(
                          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          branches_only: z.boolean().exactOptional(),
        })
        .openapi({ required: ['role'] }),
    ),
  })
  .openapi({
    required: ['email', 'roles'],
    example: {
      email: 'external-user@somedomain.xyz',
      roles: [
        {
          role: 'postgres',
          expires_at: 1740787200,
          allowed_networks: { allowed_cidrs: [{ cidr: '203.0.113.0/24' }] },
          branches_only: false,
        },
      ],
    },
  })
  .openapi('InviteExternalUserJitAccessBody')

const InviteExternalUserJitResponseOutputSchema = z
  .object({
    email: z
      .email()
      .regex(
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      ),
    invite_id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
    user_roles: z.array(
      z
        .object({
          role: z.string(),
          expires_at: z.number().exactOptional(),
          allowed_networks: z
            .object({
              allowed_cidrs: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv4()
                        .regex(
                          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
              allowed_cidrs_v6: z
                .array(
                  z
                    .object({
                      cidr: z
                        .cidrv6()
                        .regex(
                          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                        ),
                    })
                    .openapi({ required: ['cidr'] }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          branches_only: z.boolean().exactOptional(),
        })
        .openapi({ required: ['role'] }),
    ),
  })
  .openapi({ required: ['email', 'invite_id', 'user_roles'] })
  .openapi('InviteExternalUserJitResponseOutput')

const AcceptInviteExternalUserJitAccessBodySchema = z
  .object({
    email: z
      .email()
      .regex(
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
      )
      .min(1),
    token: z.string().min(1),
  })
  .openapi({
    required: ['email', 'token'],
    example: { email: 'external-user@somedomain.xyz', token: '' },
  })
  .openapi('AcceptInviteExternalUserJitAccessBody')

const FunctionResponseOutputSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    status: z.enum(['ACTIVE', 'REMOVED', 'THROTTLED']),
    version: z.int().min(-9007199254740991).max(9007199254740991),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    verify_jwt: z.boolean().exactOptional(),
    import_map: z.boolean().exactOptional(),
    entrypoint_path: z.string().exactOptional(),
    import_map_path: z.string().exactOptional(),
    ezbr_sha256: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'slug', 'name', 'status', 'version', 'created_at', 'updated_at'] })
  .openapi('FunctionResponseOutput')

const V1CreateFunctionBodySchema = z
  .object({
    slug: z.string().regex(/^[A-Za-z][A-Za-z0-9_-]*$/),
    name: z.string(),
    body: z.string(),
    verify_jwt: z.boolean().exactOptional(),
  })
  .openapi({
    required: ['slug', 'name', 'body'],
    example: {
      slug: 'hello-world',
      name: 'Hello World',
      body: "Deno.serve(() => new Response('Hello, world!'))",
      verify_jwt: true,
    },
  })
  .openapi('V1CreateFunctionBody')

const BulkUpdateFunctionBodySchema = z
  .array(
    z
      .object({
        id: z.string(),
        slug: z.string().regex(/^[A-Za-z][A-Za-z0-9_-]*$/),
        name: z.string(),
        status: z.enum(['ACTIVE', 'REMOVED', 'THROTTLED']),
        version: z.int().min(-9007199254740991).max(9007199254740991),
        created_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(-9007199254740991n).max(9007199254740991n),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: -9007199254740991,
            maximum: 9007199254740991,
          }),
        verify_jwt: z.boolean().exactOptional(),
        import_map: z.boolean().exactOptional(),
        entrypoint_path: z.string().exactOptional(),
        import_map_path: z.string().exactOptional(),
        ezbr_sha256: z.string().exactOptional(),
      })
      .openapi({ required: ['id', 'slug', 'name', 'status', 'version'] }),
  )
  .openapi({
    example: [
      {
        id: '3c078cce-ad70-4148-9f37-4da362789053',
        slug: 'hello-world',
        name: 'Hello World',
        status: 'ACTIVE',
        version: 2,
        verify_jwt: true,
        entrypoint_path: 'index.ts',
      },
    ],
  })
  .openapi('BulkUpdateFunctionBody')

const BulkUpdateFunctionResponseOutputSchema = z
  .object({
    functions: z.array(
      z
        .object({
          id: z.string(),
          slug: z.string(),
          name: z.string(),
          status: z.enum(['ACTIVE', 'REMOVED', 'THROTTLED']),
          version: z.int().min(-9007199254740991).max(9007199254740991),
          created_at: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64().min(-9007199254740991n).max(9007199254740991n),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              minimum: -9007199254740991,
              maximum: 9007199254740991,
            }),
          updated_at: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64().min(-9007199254740991n).max(9007199254740991n),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              minimum: -9007199254740991,
              maximum: 9007199254740991,
            }),
          verify_jwt: z.boolean().exactOptional(),
          import_map: z.boolean().exactOptional(),
          entrypoint_path: z.string().exactOptional(),
          import_map_path: z.string().exactOptional(),
          ezbr_sha256: z.string().exactOptional(),
        })
        .openapi({
          required: ['id', 'slug', 'name', 'status', 'version', 'created_at', 'updated_at'],
        }),
    ),
  })
  .openapi({ required: ['functions'] })
  .openapi('BulkUpdateFunctionResponseOutput')

const FunctionDeployBodySchema = z
  .object({
    file: z.array(z.file().openapi({ type: 'string', format: 'binary' })),
    metadata: z
      .object({
        entrypoint_path: z.string(),
        import_map_path: z.string().exactOptional(),
        static_patterns: z.array(z.string()).exactOptional(),
        verify_jwt: z.boolean().exactOptional(),
        name: z.string().exactOptional(),
      })
      .openapi({ required: ['entrypoint_path'] }),
  })
  .openapi({
    required: ['file', 'metadata'],
    example: {
      file: ['./supabase/functions/hello-world/index.ts'],
      metadata: { entrypoint_path: 'index.ts', verify_jwt: true, name: 'Hello World' },
    },
  })
  .openapi('FunctionDeployBody')

const DeployFunctionResponseOutputSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    status: z.enum(['ACTIVE', 'REMOVED', 'THROTTLED']),
    version: z.int().min(-9007199254740991).max(9007199254740991),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    verify_jwt: z.boolean().exactOptional(),
    import_map: z.boolean().exactOptional(),
    entrypoint_path: z.string().exactOptional(),
    import_map_path: z.string().exactOptional(),
    ezbr_sha256: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'slug', 'name', 'status', 'version'] })
  .openapi('DeployFunctionResponseOutput')

const FunctionSlugResponseOutputSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    status: z.enum(['ACTIVE', 'REMOVED', 'THROTTLED']),
    version: z.int().min(-9007199254740991).max(9007199254740991),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    verify_jwt: z.boolean().exactOptional(),
    import_map: z.boolean().exactOptional(),
    entrypoint_path: z.string().exactOptional(),
    import_map_path: z.string().exactOptional(),
    ezbr_sha256: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'slug', 'name', 'status', 'version', 'created_at', 'updated_at'] })
  .openapi('FunctionSlugResponseOutput')

const StreamableFileSchema = z.object({}).openapi('StreamableFile')

const V1UpdateFunctionBodyJsonSchema = z
  .object({
    name: z.string().exactOptional(),
    body: z.string().exactOptional(),
    verify_jwt: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      name: 'Hello World',
      body: "Deno.serve(() => new Response('Hello again!'))",
      verify_jwt: true,
    },
    required: [],
  })
  .openapi('V1UpdateFunctionBodyJson')

const V1UpdateFunctionBodyEszipSchema = z
  .string()
  .openapi({
    description:
      "Raw Brotli-compressed ESZIP binary file.\n\n**Validation requirements** - The file must start with the four magic bytes `EZBR` (hex: `45 5A 42 52`).\n- The `ezbr_sha256` query parameter must contain the SHA-256 hash of the uploaded ESZIP payload.\n\n**Example**\n```javascript\nimport { readFile } from 'node:fs/promises';\nimport { brotliCompress } from 'node:zlib';\nimport { promisify } from 'node:util';\nimport { createHash } from 'node:crypto';\n\nconst compress = promisify(brotliCompress);\nconst marker = Buffer.from('EZBR', 'ascii');\n\nconst file = await readFile('./function.eszip');\nconst compressed = await compress(file);\n\nconst payload = Buffer.concat([marker, compressed]);\n\nconst ezbr_sha256 = createHash('sha256')\n  .update(payload)\n  .digest('hex');\n\nconsole.log(ezbr_sha256);\n```\n\n",
    examples: ['Binary Brotli-compressed ESZIP file'],
  })
  .openapi('V1UpdateFunctionBodyEszip')

const V1StorageBucketResponseOutputSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    owner: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    public: z.boolean(),
  })
  .openapi({ required: ['id', 'name', 'owner', 'created_at', 'updated_at', 'public'] })
  .openapi('V1StorageBucketResponseOutput')

const DiskResponseOutputSchema = z
  .object({
    attributes: z.union([
      z
        .object({
          iops: z.int().positive().max(9007199254740991),
          size_gb: z.int().positive().max(9007199254740991),
          throughput_mibps: z.int().positive().max(9007199254740991).exactOptional(),
          type: z.literal('gp3'),
        })
        .openapi({ required: ['iops', 'size_gb', 'type'] }),
      z
        .object({
          iops: z.int().positive().max(9007199254740991),
          size_gb: z.int().positive().max(9007199254740991),
          type: z.literal('io2'),
        })
        .openapi({ required: ['iops', 'size_gb', 'type'] }),
    ]),
    last_modified_at: z.string().exactOptional(),
  })
  .openapi({ required: ['attributes'] })
  .openapi('DiskResponseOutput')

const DiskRequestBodySchema = z
  .object({
    attributes: z.xor([
      z
        .object({
          iops: z.int().positive().max(9007199254740991),
          size_gb: z.int().positive().max(9007199254740991),
          throughput_mibps: z.int().positive().max(9007199254740991).exactOptional(),
          type: z.literal('gp3'),
        })
        .openapi({ required: ['iops', 'size_gb', 'type'] }),
      z
        .object({
          iops: z.int().positive().max(9007199254740991),
          size_gb: z.int().positive().max(9007199254740991),
          type: z.literal('io2'),
        })
        .openapi({ required: ['iops', 'size_gb', 'type'] }),
    ]),
  })
  .openapi({
    required: ['attributes'],
    example: { attributes: { type: 'gp3', size_gb: 100, iops: 3000, throughput_mibps: 125 } },
  })
  .openapi('DiskRequestBody')

const DiskUtilMetricsResponseOutputSchema = z
  .object({
    timestamp: z.string(),
    metrics: z
      .object({ fs_size_bytes: z.number(), fs_avail_bytes: z.number(), fs_used_bytes: z.number() })
      .openapi({ required: ['fs_size_bytes', 'fs_avail_bytes', 'fs_used_bytes'] }),
  })
  .openapi({ required: ['timestamp', 'metrics'] })
  .openapi('DiskUtilMetricsResponseOutput')

const DiskAutoscaleConfigOutputSchema = z
  .object({
    growth_percent: z
      .int()
      .gt(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Growth percentage for disk autoscaling' }),
    min_increment_gb: z
      .int()
      .gt(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Minimum increment size for disk autoscaling in GB' }),
    max_size_gb: z
      .int()
      .gt(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Maximum limit the disk size will grow to in GB' }),
  })
  .openapi({ required: ['growth_percent', 'min_increment_gb', 'max_size_gb'] })
  .openapi('DiskAutoscaleConfigOutput')

const StorageConfigResponseOutputSchema = z
  .object({
    fileSizeLimit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-9007199254740991n).max(9007199254740991n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -9007199254740991,
        maximum: 9007199254740991,
      }),
    features: z
      .object({
        imageTransformation: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
        s3Protocol: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
        purgeCache: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
        icebergCatalog: z
          .object({
            enabled: z.boolean(),
            maxNamespaces: z.int().min(0).max(9007199254740991),
            maxTables: z.int().min(0).max(9007199254740991),
            maxCatalogs: z.int().min(0).max(9007199254740991),
          })
          .openapi({ required: ['enabled', 'maxNamespaces', 'maxTables', 'maxCatalogs'] }),
        vectorBuckets: z
          .object({
            enabled: z.boolean(),
            maxBuckets: z.int().min(0).max(9007199254740991),
            maxIndexes: z.int().min(0).max(9007199254740991),
          })
          .openapi({ required: ['enabled', 'maxBuckets', 'maxIndexes'] }),
      })
      .openapi({
        required: [
          'imageTransformation',
          's3Protocol',
          'purgeCache',
          'icebergCatalog',
          'vectorBuckets',
        ],
      }),
    capabilities: z
      .object({
        list_v2: z.boolean(),
        iceberg_catalog: z.boolean(),
        object_versioning: z.boolean(),
      })
      .openapi({ required: ['list_v2', 'iceberg_catalog', 'object_versioning'] }),
    external: z
      .object({ upstreamTarget: z.enum(['main', 'canary']) })
      .openapi({ required: ['upstreamTarget'] }),
    migrationVersion: z.string().nullable(),
  })
  .openapi({
    required: ['fileSizeLimit', 'features', 'capabilities', 'external', 'migrationVersion'],
  })
  .openapi('StorageConfigResponseOutput')

const UpdateStorageConfigBodySchema = z
  .strictObject({
    fileSizeLimit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(536870912000n),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 536870912000 }),
    features: z
      .object({
        imageTransformation: z
          .object({ enabled: z.boolean() })
          .exactOptional()
          .openapi({ required: ['enabled'] }),
        s3Protocol: z
          .object({ enabled: z.boolean() })
          .exactOptional()
          .openapi({ required: ['enabled'] }),
        purgeCache: z
          .object({ enabled: z.boolean() })
          .exactOptional()
          .openapi({ required: ['enabled'] }),
        icebergCatalog: z
          .object({
            enabled: z.boolean(),
            maxNamespaces: z.int().min(0).max(9007199254740991),
            maxTables: z.int().min(0).max(9007199254740991),
            maxCatalogs: z.int().min(0).max(9007199254740991),
          })
          .exactOptional()
          .openapi({ required: ['enabled', 'maxNamespaces', 'maxTables', 'maxCatalogs'] }),
        vectorBuckets: z
          .object({
            enabled: z.boolean(),
            maxBuckets: z.int().min(0).max(9007199254740991),
            maxIndexes: z.int().min(0).max(9007199254740991),
          })
          .exactOptional()
          .openapi({ required: ['enabled', 'maxBuckets', 'maxIndexes'] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    external: z
      .object({ upstreamTarget: z.enum(['main', 'canary']) })
      .exactOptional()
      .openapi({ required: ['upstreamTarget'] }),
  })
  .openapi({
    example: { fileSizeLimit: 10485760, features: { imageTransformation: { enabled: true } } },
    required: [],
  })
  .openapi('UpdateStorageConfigBody')

const V1PgbouncerConfigResponseOutputSchema = z
  .object({
    default_pool_size: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    ignore_startup_parameters: z.string().exactOptional(),
    max_client_conn: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    pool_mode: z.enum(['transaction', 'session', 'statement']).exactOptional(),
    connection_string: z.string().exactOptional(),
    server_idle_timeout: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    server_lifetime: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    query_wait_timeout: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    reserve_pool_size: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V1PgbouncerConfigResponseOutput')

const SupavisorConfigResponseOutputSchema = z
  .object({
    identifier: z.string(),
    database_type: z.enum(['PRIMARY', 'READ_REPLICA']),
    is_using_scram_auth: z.boolean(),
    db_user: z.string(),
    db_host: z.string(),
    db_port: z.int().min(-9007199254740991).max(9007199254740991),
    db_name: z.string(),
    connection_string: z.string(),
    connectionString: z.string().openapi({ description: 'Use connection_string instead' }),
    default_pool_size: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    max_client_conn: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    pool_mode: z.enum(['transaction', 'session']),
  })
  .openapi({
    required: [
      'identifier',
      'database_type',
      'is_using_scram_auth',
      'db_user',
      'db_host',
      'db_port',
      'db_name',
      'connection_string',
      'connectionString',
      'default_pool_size',
      'max_client_conn',
      'pool_mode',
    ],
  })
  .openapi('SupavisorConfigResponseOutput')

const UpdateSupavisorConfigBodySchema = z
  .object({
    default_pool_size: z.int().min(0).max(3000).nullable().exactOptional(),
    pool_mode: z
      .enum(['transaction', 'session'])
      .exactOptional()
      .openapi({ description: 'Dedicated pooler mode for the project' }),
  })
  .openapi({ example: { default_pool_size: 25, pool_mode: 'transaction' }, required: [] })
  .openapi('UpdateSupavisorConfigBody')

const UpdateSupavisorConfigResponseOutputSchema = z
  .object({
    default_pool_size: z.int().min(-9007199254740991).max(9007199254740991).nullable(),
    pool_mode: z.string(),
  })
  .openapi({ required: ['default_pool_size', 'pool_mode'] })
  .openapi('UpdateSupavisorConfigResponseOutput')

const PostgresConfigResponseOutputSchema = z
  .object({
    effective_cache_size: z.string().exactOptional(),
    logical_decoding_work_mem: z.string().exactOptional(),
    'pg_stat_statements.max': z.int().min(100).max(45000).exactOptional(),
    'pg_net.batch_size': z.int().min(0).max(32767).exactOptional(),
    autovacuum_max_workers: z.int().min(1).max(262143).exactOptional(),
    autovacuum_work_mem: z.string().exactOptional(),
    'cron.log_statement': z.boolean().exactOptional(),
    log_autovacuum_min_duration: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    log_checkpoints: z.boolean().exactOptional(),
    log_connections: z.boolean().exactOptional(),
    log_disconnections: z.boolean().exactOptional(),
    log_duration: z.boolean().exactOptional(),
    log_lock_waits: z.boolean().exactOptional(),
    log_recovery_conflict_waits: z.boolean().exactOptional(),
    log_replication_commands: z.boolean().exactOptional(),
    log_startup_progress_interval: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    log_temp_files: z.string().exactOptional(),
    maintenance_work_mem: z.string().exactOptional(),
    track_activity_query_size: z.string().exactOptional(),
    max_connections: z.int().min(1).max(262143).exactOptional(),
    max_locks_per_transaction: z.int().min(10).max(2147483640).exactOptional(),
    max_logical_replication_workers: z.int().min(0).max(262143).exactOptional(),
    max_parallel_maintenance_workers: z.int().min(0).max(1024).exactOptional(),
    max_parallel_workers: z.int().min(0).max(1024).exactOptional(),
    max_parallel_workers_per_gather: z.int().min(0).max(1024).exactOptional(),
    max_replication_slots: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    max_slot_wal_keep_size: z.string().exactOptional(),
    max_standby_archive_delay: z.string().exactOptional(),
    max_standby_streaming_delay: z.string().exactOptional(),
    max_sync_workers_per_subscription: z.int().min(0).max(262143).exactOptional(),
    max_wal_size: z.string().exactOptional(),
    max_wal_senders: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    max_worker_processes: z.int().min(0).max(262143).exactOptional(),
    session_replication_role: z.enum(['origin', 'replica', 'local']).exactOptional(),
    shared_buffers: z.string().exactOptional(),
    statement_timeout: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    track_commit_timestamp: z.boolean().exactOptional(),
    wal_keep_size: z.string().exactOptional(),
    wal_sender_timeout: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    work_mem: z.string().exactOptional(),
    checkpoint_timeout: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: s' }),
    hot_standby_feedback: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostgresConfigResponseOutput')

const UpdatePostgresConfigBodySchema = z
  .strictObject({
    effective_cache_size: z.string().exactOptional(),
    logical_decoding_work_mem: z.string().exactOptional(),
    'pg_stat_statements.max': z.int().min(100).max(45000).exactOptional(),
    'pg_net.batch_size': z.int().min(0).max(32767).exactOptional(),
    autovacuum_max_workers: z.int().min(1).max(262143).exactOptional(),
    autovacuum_work_mem: z.string().exactOptional(),
    'cron.log_statement': z.boolean().exactOptional(),
    log_autovacuum_min_duration: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    log_checkpoints: z.boolean().exactOptional(),
    log_connections: z.boolean().exactOptional(),
    log_disconnections: z.boolean().exactOptional(),
    log_duration: z.boolean().exactOptional(),
    log_lock_waits: z.boolean().exactOptional(),
    log_recovery_conflict_waits: z.boolean().exactOptional(),
    log_replication_commands: z.boolean().exactOptional(),
    log_startup_progress_interval: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    log_temp_files: z.string().exactOptional(),
    maintenance_work_mem: z.string().exactOptional(),
    track_activity_query_size: z.string().exactOptional(),
    max_connections: z.int().min(1).max(262143).exactOptional(),
    max_locks_per_transaction: z.int().min(10).max(2147483640).exactOptional(),
    max_logical_replication_workers: z.int().min(0).max(262143).exactOptional(),
    max_parallel_maintenance_workers: z.int().min(0).max(1024).exactOptional(),
    max_parallel_workers: z.int().min(0).max(1024).exactOptional(),
    max_parallel_workers_per_gather: z.int().min(0).max(1024).exactOptional(),
    max_replication_slots: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    max_slot_wal_keep_size: z.string().exactOptional(),
    max_standby_archive_delay: z.string().exactOptional(),
    max_standby_streaming_delay: z.string().exactOptional(),
    max_sync_workers_per_subscription: z.int().min(0).max(262143).exactOptional(),
    max_wal_size: z.string().exactOptional(),
    max_wal_senders: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    max_worker_processes: z.int().min(0).max(262143).exactOptional(),
    session_replication_role: z.enum(['origin', 'replica', 'local']).exactOptional(),
    shared_buffers: z.string().exactOptional(),
    statement_timeout: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    track_commit_timestamp: z.boolean().exactOptional(),
    wal_keep_size: z.string().exactOptional(),
    wal_sender_timeout: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: ms' }),
    work_mem: z.string().exactOptional(),
    checkpoint_timeout: z
      .string()
      .regex(/^(-?[0-9]+(?:\.[0-9]+)?)(us|ms|s|min|h|d)?$/)
      .exactOptional()
      .openapi({ description: 'Default unit: s' }),
    hot_standby_feedback: z.boolean().exactOptional(),
    restart_database: z.boolean().exactOptional(),
  })
  .openapi({
    example: {
      max_connections: 120,
      shared_buffers: '256MB',
      work_mem: '4MB',
      statement_timeout: '60000ms',
    },
    required: [],
  })
  .openapi('UpdatePostgresConfigBody')

const RealtimeConfigResponseOutputSchema = z
  .object({
    private_only: z
      .boolean()
      .nullable()
      .openapi({ description: 'Whether to only allow private channels' }),
    connection_pool: z
      .int()
      .min(1)
      .max(100)
      .nullable()
      .openapi({ description: 'Sets connection pool size for Realtime Authorization' }),
    postgres_changes_pool: z
      .int()
      .min(1)
      .max(100)
      .nullable()
      .openapi({
        description: 'Sets connection pool size used to create Postgres Changes subscriptions',
      }),
    max_concurrent_users: z
      .int()
      .min(1)
      .max(300000)
      .nullable()
      .openapi({ description: 'Sets maximum number of concurrent users rate limit' }),
    max_events_per_second: z
      .int()
      .min(1)
      .max(50000)
      .nullable()
      .openapi({ description: 'Sets maximum number of events per second rate per channel limit' }),
    max_bytes_per_second: z
      .int()
      .min(1)
      .max(10000000)
      .nullable()
      .openapi({ description: 'Sets maximum number of bytes per second rate per channel limit' }),
    max_channels_per_client: z
      .int()
      .min(1)
      .max(10000)
      .nullable()
      .openapi({ description: 'Sets maximum number of channels per client rate limit' }),
    max_joins_per_second: z
      .int()
      .min(1)
      .max(5000)
      .nullable()
      .openapi({ description: 'Sets maximum number of joins per second rate limit' }),
    max_presence_events_per_second: z
      .int()
      .min(1)
      .max(5000)
      .nullable()
      .openapi({ description: 'Sets maximum number of presence events per second rate limit' }),
    max_payload_size_in_kb: z
      .int()
      .min(1)
      .max(10000)
      .nullable()
      .openapi({ description: 'Sets maximum number of payload size in KB rate limit' }),
    suspend: z
      .boolean()
      .nullable()
      .openapi({
        description:
          'Disables the Realtime service for this project when true. Set to false to re-enable it.',
      }),
    presence_enabled: z.boolean().openapi({ description: 'Whether to enable presence' }),
    admin_suspended_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'If set, the Realtime service has been suspended by an admin.' }),
  })
  .openapi({
    required: [
      'private_only',
      'connection_pool',
      'postgres_changes_pool',
      'max_concurrent_users',
      'max_events_per_second',
      'max_bytes_per_second',
      'max_channels_per_client',
      'max_joins_per_second',
      'max_presence_events_per_second',
      'max_payload_size_in_kb',
      'suspend',
      'presence_enabled',
      'admin_suspended_at',
    ],
  })
  .openapi('RealtimeConfigResponseOutput')

const UpdateRealtimeConfigBodySchema = z
  .strictObject({
    private_only: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to only allow private channels' }),
    connection_pool: z
      .int()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ description: 'Sets connection pool size for Realtime Authorization' }),
    postgres_changes_pool: z
      .int()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Sets connection pool size used to create Postgres Changes subscriptions',
      }),
    max_concurrent_users: z
      .int()
      .min(1)
      .max(300000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of concurrent users rate limit' }),
    max_events_per_second: z
      .int()
      .min(1)
      .max(50000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of events per second rate per channel limit' }),
    max_bytes_per_second: z
      .int()
      .min(1)
      .max(10000000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of bytes per second rate per channel limit' }),
    max_channels_per_client: z
      .int()
      .min(1)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of channels per client rate limit' }),
    max_joins_per_second: z
      .int()
      .min(1)
      .max(5000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of joins per second rate limit' }),
    max_presence_events_per_second: z
      .int()
      .min(1)
      .max(5000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of presence events per second rate limit' }),
    max_payload_size_in_kb: z
      .int()
      .min(1)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Sets maximum number of payload size in KB rate limit' }),
    suspend: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disables the Realtime service for this project when true. Set to false to re-enable it.',
      }),
    presence_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to enable presence' }),
  })
  .openapi({
    example: { private_only: false, max_concurrent_users: 1000, max_channels_per_client: 100 },
    required: [],
  })
  .openapi('UpdateRealtimeConfigBody')

const CreateProviderBodySchema = z
  .object({
    type: z.literal('saml').openapi({ description: 'What type of provider will be created' }),
    metadata_xml: z.string().exactOptional(),
    metadata_url: z.string().exactOptional(),
    domains: z.array(z.string()).exactOptional(),
    attribute_mapping: z
      .object({
        keys: z.record(
          z.string(),
          z
            .object({
              name: z.string().exactOptional(),
              names: z.array(z.string()).exactOptional(),
              array: z.boolean().exactOptional(),
              default: z.union([z.object({}), z.number(), z.string(), z.boolean()]).exactOptional(),
            })
            .openapi({ required: [] }),
        ),
      })
      .exactOptional()
      .openapi({ required: ['keys'] }),
    name_id_format: z
      .enum([
        'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
        'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
        'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
        'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
      ])
      .exactOptional(),
  })
  .openapi({
    required: ['type'],
    example: {
      type: 'saml',
      metadata_url: 'https://sso.acme.com/metadata.xml',
      domains: ['acme.com'],
      attribute_mapping: {
        keys: {
          email: { name: 'email' },
          first_name: { name: 'first_name' },
          last_name: { name: 'last_name' },
        },
      },
    },
  })
  .openapi('CreateProviderBody')

const CreateProviderResponseOutputSchema = z
  .object({
    id: z.string(),
    saml: z
      .object({
        entity_id: z.string(),
        metadata_url: z.string().exactOptional(),
        metadata_xml: z.string().exactOptional(),
        attribute_mapping: z
          .object({
            keys: z.record(
              z.string(),
              z
                .object({
                  name: z.string().exactOptional(),
                  names: z.array(z.string()).exactOptional(),
                  array: z.boolean().exactOptional(),
                  default: z
                    .union([z.object({}), z.number(), z.string(), z.boolean()])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          })
          .exactOptional()
          .openapi({ required: ['keys'] }),
        name_id_format: z
          .enum([
            'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
            'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['entity_id'] }),
    domains: z
      .array(
        z
          .object({
            domain: z.string().exactOptional(),
            created_at: z.string().exactOptional(),
            updated_at: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('CreateProviderResponseOutput')

const ListProvidersResponseOutputSchema = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          saml: z
            .object({
              entity_id: z.string(),
              metadata_url: z.string().exactOptional(),
              metadata_xml: z.string().exactOptional(),
              attribute_mapping: z
                .object({
                  keys: z.record(
                    z.string(),
                    z
                      .object({
                        name: z.string().exactOptional(),
                        names: z.array(z.string()).exactOptional(),
                        array: z.boolean().exactOptional(),
                        default: z
                          .union([z.object({}), z.number(), z.string(), z.boolean()])
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                })
                .exactOptional()
                .openapi({ required: ['keys'] }),
              name_id_format: z
                .enum([
                  'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
                  'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
                  'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
                  'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
                ])
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: ['entity_id'] }),
          domains: z
            .array(
              z
                .object({
                  domain: z.string().exactOptional(),
                  created_at: z.string().exactOptional(),
                  updated_at: z.string().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          created_at: z.string().exactOptional(),
          updated_at: z.string().exactOptional(),
        })
        .openapi({ required: ['id'] }),
    ),
  })
  .openapi({ required: ['items'] })
  .openapi('ListProvidersResponseOutput')

const GetProviderResponseOutputSchema = z
  .object({
    id: z.string(),
    saml: z
      .object({
        entity_id: z.string(),
        metadata_url: z.string().exactOptional(),
        metadata_xml: z.string().exactOptional(),
        attribute_mapping: z
          .object({
            keys: z.record(
              z.string(),
              z
                .object({
                  name: z.string().exactOptional(),
                  names: z.array(z.string()).exactOptional(),
                  array: z.boolean().exactOptional(),
                  default: z
                    .union([z.object({}), z.number(), z.string(), z.boolean()])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          })
          .exactOptional()
          .openapi({ required: ['keys'] }),
        name_id_format: z
          .enum([
            'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
            'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['entity_id'] }),
    domains: z
      .array(
        z
          .object({
            domain: z.string().exactOptional(),
            created_at: z.string().exactOptional(),
            updated_at: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('GetProviderResponseOutput')

const UpdateProviderBodySchema = z
  .object({
    metadata_xml: z.string().exactOptional(),
    metadata_url: z.string().exactOptional(),
    domains: z.array(z.string()).exactOptional(),
    attribute_mapping: z
      .object({
        keys: z.record(
          z.string(),
          z
            .object({
              name: z.string().exactOptional(),
              names: z.array(z.string()).exactOptional(),
              array: z.boolean().exactOptional(),
              default: z.union([z.object({}), z.number(), z.string(), z.boolean()]).exactOptional(),
            })
            .openapi({ required: [] }),
        ),
      })
      .exactOptional()
      .openapi({ required: ['keys'] }),
    name_id_format: z
      .enum([
        'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
        'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
        'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
        'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
      ])
      .exactOptional(),
  })
  .openapi({
    example: {
      metadata_url: 'https://sso.acme.com/metadata.xml',
      domains: ['acme.com', 'contractors.acme.com'],
    },
    required: [],
  })
  .openapi('UpdateProviderBody')

const UpdateProviderResponseOutputSchema = z
  .object({
    id: z.string(),
    saml: z
      .object({
        entity_id: z.string(),
        metadata_url: z.string().exactOptional(),
        metadata_xml: z.string().exactOptional(),
        attribute_mapping: z
          .object({
            keys: z.record(
              z.string(),
              z
                .object({
                  name: z.string().exactOptional(),
                  names: z.array(z.string()).exactOptional(),
                  array: z.boolean().exactOptional(),
                  default: z
                    .union([z.object({}), z.number(), z.string(), z.boolean()])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          })
          .exactOptional()
          .openapi({ required: ['keys'] }),
        name_id_format: z
          .enum([
            'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
            'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['entity_id'] }),
    domains: z
      .array(
        z
          .object({
            domain: z.string().exactOptional(),
            created_at: z.string().exactOptional(),
            updated_at: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('UpdateProviderResponseOutput')

const DeleteProviderResponseOutputSchema = z
  .object({
    id: z.string(),
    saml: z
      .object({
        entity_id: z.string(),
        metadata_url: z.string().exactOptional(),
        metadata_xml: z.string().exactOptional(),
        attribute_mapping: z
          .object({
            keys: z.record(
              z.string(),
              z
                .object({
                  name: z.string().exactOptional(),
                  names: z.array(z.string()).exactOptional(),
                  array: z.boolean().exactOptional(),
                  default: z
                    .union([z.object({}), z.number(), z.string(), z.boolean()])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
            ),
          })
          .exactOptional()
          .openapi({ required: ['keys'] }),
        name_id_format: z
          .enum([
            'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
            'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
            'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['entity_id'] }),
    domains: z
      .array(
        z
          .object({
            domain: z.string().exactOptional(),
            created_at: z.string().exactOptional(),
            updated_at: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('DeleteProviderResponseOutput')

const V1BackupsResponseOutputSchema = z
  .object({
    region: z.string(),
    walg_enabled: z.boolean(),
    pitr_enabled: z.boolean(),
    backups: z.array(
      z
        .object({
          id: z.int().min(-9007199254740991).max(9007199254740991),
          is_physical_backup: z.boolean(),
          status: z.enum(['COMPLETED', 'FAILED', 'PENDING', 'REMOVED', 'ARCHIVED', 'CANCELLED']),
          inserted_at: z.string(),
        })
        .openapi({ required: ['id', 'is_physical_backup', 'status', 'inserted_at'] }),
    ),
    physical_backup_data: z
      .object({
        earliest_physical_backup_date_unix: z
          .int()
          .min(-9007199254740991)
          .max(9007199254740991)
          .exactOptional(),
        latest_physical_backup_date_unix: z
          .int()
          .min(-9007199254740991)
          .max(9007199254740991)
          .exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    required: ['region', 'walg_enabled', 'pitr_enabled', 'backups', 'physical_backup_data'],
  })
  .openapi('V1BackupsResponseOutput')

const V1RestorePitrBodySchema = z
  .object({
    recovery_time_target_unix: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(9007199254740991n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 9007199254740991 }),
  })
  .openapi({
    required: ['recovery_time_target_unix'],
    example: { recovery_time_target_unix: 1740787200 },
  })
  .openapi('V1RestorePitrBody')

const V1RestorePointPostBodySchema = z
  .object({ name: z.string().max(20) })
  .openapi({ required: ['name'], example: { name: 'before-upgrade' } })
  .openapi('V1RestorePointPostBody')

const V1RestorePointResponseSchema = z
  .object({
    name: z.string(),
    status: z.enum(['AVAILABLE', 'PENDING', 'REMOVED', 'FAILED']),
    completed_on: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable(),
  })
  .openapi({ required: ['name', 'status', 'completed_on'] })
  .openapi('V1RestorePointResponse')

const V1RestoreBackupBodySchema = z
  .object({ id: z.int().min(-9007199254740991).max(9007199254740991) })
  .openapi({ required: ['id'], example: { id: 12345 } })
  .openapi('V1RestoreBackupBody')

const V1BackupScheduleResponseOutputSchema = z
  .object({
    schedule_for: z
      .string()
      .regex(/^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?$/)
      .openapi({
        description: 'Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.',
        example: '04:00:00',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({
        description: 'Timestamp of when the backup schedule was last updated.',
        example: '2026-05-04T14:40:44+00:00',
      }),
  })
  .openapi({ required: ['schedule_for', 'updated_at'] })
  .openapi('V1BackupScheduleResponseOutput')

const V1UpdateBackupScheduleBodySchema = z
  .object({
    schedule_for: z
      .string()
      .regex(/^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?$/)
      .openapi({
        description: 'Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.',
        example: '04:00:00',
      }),
  })
  .openapi({ required: ['schedule_for'], example: { schedule_for: '04:00:00' } })
  .openapi('V1UpdateBackupScheduleBody')

const V1UndoBodySchema = z
  .object({ name: z.string().max(20) })
  .openapi({ required: ['name'], example: { name: 'before-upgrade' } })
  .openapi('V1UndoBody')

const V1ListEntitlementsResponseOutputSchema = z
  .object({
    entitlements: z.array(
      z
        .object({
          feature: z
            .object({
              key: z.enum([
                'instances.compute_update_available_sizes',
                'instances.read_replicas',
                'instances.disk_modifications',
                'instances.high_availability',
                'instances.orioledb',
                'replication.etl',
                'storage.max_file_size',
                'storage.max_file_size.configurable',
                'storage.image_transformations',
                'storage.vector_buckets',
                'storage.iceberg_catalog',
                'storage.purge_cache',
                'security.audit_logs_days',
                'security.questionnaire',
                'security.soc2_report',
                'security.iso27001_certificate',
                'security.private_link',
                'security.enforce_mfa',
                'log.retention_days',
                'custom_domain',
                'vanity_subdomain',
                'ipv4',
                'pitr.available_variants',
                'log_drains',
                'audit_log_drains',
                'branching_limit',
                'branching_persistent',
                'auth.mfa_phone',
                'auth.mfa_web_authn',
                'auth.mfa_enhanced_security',
                'auth.hooks',
                'auth.platform.sso',
                'auth.custom_jwt_template',
                'auth.saml_2',
                'auth.user_sessions',
                'auth.leaked_password_protection',
                'auth.advanced_auth_settings',
                'auth.performance_settings',
                'auth.password_hibp',
                'auth.custom_oauth.max_providers',
                'backup.retention_days',
                'backup.restore_to_new_project',
                'backup.schedule',
                'function.max_count',
                'function.size_limit_mb',
                'realtime.max_concurrent_users',
                'realtime.max_events_per_second',
                'realtime.max_joins_per_second',
                'realtime.max_channels_per_client',
                'realtime.max_bytes_per_second',
                'realtime.max_presence_events_per_second',
                'realtime.max_payload_size_in_kb',
                'project_scoped_roles',
                'security.member_roles',
                'project_pausing',
                'project_cloning',
                'project_restore_after_expiry',
                'assistant.advance_model',
                'integrations.github_connections',
                'integrations.github_push_webhooks_limit',
                'dedicated_pooler',
                'observability.dashboard_advanced_metrics',
                'api.members.invitations',
                'api.members.roles',
              ]),
              type: z.enum(['boolean', 'numeric', 'set']),
            })
            .openapi({ required: ['key', 'type'] }),
          hasAccess: z.boolean(),
          type: z.enum(['boolean', 'numeric', 'set']),
          config: z.union([
            z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
            z
              .object({
                enabled: z.boolean(),
                value: z.number(),
                unlimited: z.boolean(),
                unit: z.string(),
              })
              .openapi({ required: ['enabled', 'value', 'unlimited', 'unit'] }),
            z
              .object({ enabled: z.boolean(), set: z.array(z.string()) })
              .openapi({ required: ['enabled', 'set'] }),
          ]),
        })
        .openapi({ required: ['feature', 'hasAccess', 'type', 'config'] }),
    ),
  })
  .openapi({ required: ['entitlements'] })
  .openapi('V1ListEntitlementsResponseOutput')

const V1OrganizationMemberResponseOutputSchema = z
  .object({
    user_id: z.string(),
    user_name: z.string(),
    email: z.string().exactOptional(),
    role_name: z.string().exactOptional(),
    mfa_enabled: z.boolean(),
    avatar_url: z.string().nullable(),
  })
  .openapi({ required: ['user_id', 'user_name', 'mfa_enabled', 'avatar_url'] })
  .openapi('V1OrganizationMemberResponseOutput')

const V1OrganizationSlugResponseOutputSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    plan: z.enum(['free', 'pro', 'team', 'enterprise', 'platform']).exactOptional(),
    opt_in_tags: z.array(
      z.enum(['AI_SQL_GENERATOR_OPT_IN', 'AI_DATA_GENERATOR_OPT_IN', 'AI_LOG_GENERATOR_OPT_IN']),
    ),
    allowed_release_channels: z.array(
      z.enum(['internal', 'alpha', 'beta', 'ga', 'withdrawn', 'preview']),
    ),
  })
  .openapi({ required: ['id', 'name', 'opt_in_tags', 'allowed_release_channels'] })
  .openapi('V1OrganizationSlugResponseOutput')

const OrganizationProjectClaimResponseOutputSchema = z
  .object({
    project: z.object({ ref: z.string(), name: z.string() }).openapi({ required: ['ref', 'name'] }),
    preview: z
      .object({
        valid: z.boolean(),
        warnings: z.array(
          z
            .object({ key: z.string(), message: z.string() })
            .openapi({ required: ['key', 'message'] }),
        ),
        errors: z.array(
          z
            .object({ key: z.string(), message: z.string() })
            .openapi({ required: ['key', 'message'] }),
        ),
        info: z.array(
          z
            .object({ key: z.string(), message: z.string() })
            .openapi({ required: ['key', 'message'] }),
        ),
        members_exceeding_free_project_limit: z.array(
          z
            .object({ name: z.string(), limit: z.number() })
            .openapi({ required: ['name', 'limit'] }),
        ),
        source_subscription_plan: z.enum(['free', 'pro', 'team', 'enterprise', 'platform']),
        target_subscription_plan: z
          .union([
            z.literal('free'),
            z.literal('pro'),
            z.literal('team'),
            z.literal('enterprise'),
            z.literal('platform'),
            z.literal(null),
          ])
          .nullable(),
      })
      .openapi({
        required: [
          'valid',
          'warnings',
          'errors',
          'info',
          'members_exceeding_free_project_limit',
          'source_subscription_plan',
          'target_subscription_plan',
        ],
      }),
    expires_at: z.string(),
    created_at: z.string(),
    created_by: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
  })
  .openapi({ required: ['project', 'preview', 'expires_at', 'created_at', 'created_by'] })
  .openapi('OrganizationProjectClaimResponseOutput')

const OrganizationProjectsResponseOutputSchema = z
  .object({
    projects: z.array(
      z
        .object({
          ref: z.string(),
          name: z.string(),
          cloud_provider: z.string(),
          region: z.string(),
          is_branch: z.boolean(),
          status: z.enum([
            'INACTIVE',
            'ACTIVE_HEALTHY',
            'ACTIVE_UNHEALTHY',
            'COMING_UP',
            'UNKNOWN',
            'GOING_DOWN',
            'INIT_FAILED',
            'REMOVED',
            'RESTORING',
            'UPGRADING',
            'PAUSING',
            'RESTORE_FAILED',
            'RESTARTING',
            'PAUSE_FAILED',
            'RESIZING',
          ]),
          inserted_at: z.string(),
          databases: z.array(
            z
              .object({
                infra_compute_size: z
                  .enum([
                    'pico',
                    'nano',
                    'micro',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    '2xlarge',
                    '4xlarge',
                    '8xlarge',
                    '12xlarge',
                    '16xlarge',
                    '24xlarge',
                    '24xlarge_optimized_memory',
                    '24xlarge_optimized_cpu',
                    '24xlarge_high_memory',
                    '48xlarge',
                    '48xlarge_optimized_memory',
                    '48xlarge_optimized_cpu',
                    '48xlarge_high_memory',
                  ])
                  .exactOptional(),
                region: z.string(),
                status: z.enum([
                  'ACTIVE_HEALTHY',
                  'ACTIVE_UNHEALTHY',
                  'COMING_UP',
                  'GOING_DOWN',
                  'INIT_FAILED',
                  'REMOVED',
                  'RESTORING',
                  'UNKNOWN',
                  'INIT_READ_REPLICA',
                  'INIT_READ_REPLICA_FAILED',
                  'RESTARTING',
                  'RESIZING',
                ]),
                cloud_provider: z.string(),
                identifier: z.string(),
                type: z.enum(['PRIMARY', 'READ_REPLICA']),
                disk_volume_size_gb: z.number().exactOptional(),
                disk_type: z.enum(['gp3', 'io2']).exactOptional(),
                disk_throughput_mbps: z.number().exactOptional(),
                disk_last_modified_at: z.string().exactOptional(),
              })
              .openapi({ required: ['region', 'status', 'cloud_provider', 'identifier', 'type'] }),
          ),
        })
        .openapi({
          required: [
            'ref',
            'name',
            'cloud_provider',
            'region',
            'is_branch',
            'status',
            'inserted_at',
            'databases',
          ],
        }),
    ),
    pagination: z
      .object({
        count: z
          .number()
          .openapi({
            description:
              'Total number of projects. Use this to calculate the total number of pages.',
          }),
        limit: z.number().openapi({ description: 'Maximum number of projects per page' }),
        offset: z.number().openapi({ description: 'Number of projects skipped in this response' }),
      })
      .openapi({ required: ['count', 'limit', 'offset'] }),
  })
  .openapi({ required: ['projects', 'pagination'] })
  .openapi('OrganizationProjectsResponseOutput')

const BearerSecurityScheme = { scheme: 'bearer', bearerFormat: 'JWT', type: 'http' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://api.supabase.com/v1/oauth/authorize',
      tokenUrl: 'https://api.supabase.com/v1/oauth/token',
      scopes: {
        'analytics:read': 'Read access to analytics',
        'analytics:write': 'Write access to analytics',
        'analytics_config:read': 'Read access to analytics config',
        'analytics_config:write': 'Write access to analytics config',
        'auth:read': 'Read access to auth',
        'auth:write': 'Write access to auth',
        'database:read': 'Read access to database',
        'database:write': 'Write access to database',
        'domains:read': 'Read access to domains',
        'domains:write': 'Write access to domains',
        'edge_functions:read': 'Read access to edge functions',
        'edge_functions:write': 'Write access to edge functions',
        'environment:read': 'Read access to environment',
        'environment:write': 'Write access to environment',
        'organizations:read': 'Read access to organizations',
        'organizations:write': 'Write access to organizations',
        'projects:read': 'Read access to projects',
        'projects:write': 'Write access to projects',
        'rest:read': 'Read access to rest',
        'rest:write': 'Write access to rest',
        'secrets:read': 'Read access to secrets',
        'secrets:write': 'Write access to secrets',
        'storage:read': 'Read access to storage',
        'storage:write': 'Write access to storage',
      },
    },
  },
  description:
    'OAuth 2.0 authorization code flow for Supabase OAuth apps. Tokens carry the scopes approved for the app by the organization.',
}

export const getV1BranchesBranchIdOrRefRoute = createRoute({
  method: 'get',
  path: '/v1/branches/{branch_id_or_ref}',
  tags: ['Environments'],
  summary: 'Get database branch config',
  description: 'Fetches configurations of the specified database branch',
  operationId: 'v1-get-a-branch-config',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BranchDetailResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve database branch' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1BranchesBranchIdOrRefRoute = createRoute({
  method: 'delete',
  path: '/v1/branches/{branch_id_or_ref}',
  tags: ['Environments'],
  summary: 'Delete a database branch',
  description:
    'Deletes the specified database branch. By default, deletes immediately. Use force=false to schedule deletion with 1-hour grace period (only when soft deletion is enabled).',
  operationId: 'v1-delete-a-branch',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      force: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            required: false,
            in: 'query',
            description:
              'If set to false, schedule deletion with 1-hour grace period (only when soft deletion is enabled).',
            schema: { example: false, type: 'string' },
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BranchDeleteResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to delete database branch' },
  },
  security: [{ bearer: [] }],
})

export const patchV1BranchesBranchIdOrRefRoute = createRoute({
  method: 'patch',
  path: '/v1/branches/{branch_id_or_ref}',
  tags: ['Environments'],
  summary: 'Update database branch config',
  description: 'Updates the configuration of the specified database branch',
  operationId: 'v1-update-a-branch-config',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateBranchBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BranchResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update database branch' },
  },
  security: [{ bearer: [] }],
})

export const postV1BranchesBranchIdOrRefPushRoute = createRoute({
  method: 'post',
  path: '/v1/branches/{branch_id_or_ref}/push',
  tags: ['Environments'],
  summary: 'Pushes a database branch',
  description: 'Pushes the specified database branch',
  operationId: 'v1-push-a-branch',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: BranchActionBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: BranchUpdateResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to push database branch' },
  },
  security: [{ bearer: [] }],
})

export const postV1BranchesBranchIdOrRefMergeRoute = createRoute({
  method: 'post',
  path: '/v1/branches/{branch_id_or_ref}/merge',
  tags: ['Environments'],
  summary: 'Merges a database branch',
  description: 'Merges the specified database branch',
  operationId: 'v1-merge-a-branch',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: BranchActionBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: BranchUpdateResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to merge database branch' },
  },
  security: [{ bearer: [] }],
})

export const postV1BranchesBranchIdOrRefResetRoute = createRoute({
  method: 'post',
  path: '/v1/branches/{branch_id_or_ref}/reset',
  tags: ['Environments'],
  summary: 'Resets a database branch',
  description: 'Resets the specified database branch',
  operationId: 'v1-reset-a-branch',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: BranchActionBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: BranchUpdateResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to reset database branch' },
  },
  security: [{ bearer: [] }],
})

export const postV1BranchesBranchIdOrRefRestoreRoute = createRoute({
  method: 'post',
  path: '/v1/branches/{branch_id_or_ref}/restore',
  tags: ['Environments'],
  summary: 'Restore a scheduled branch deletion',
  description: 'Cancels scheduled deletion and restores the branch to active state',
  operationId: 'v1-restore-a-branch',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: BranchRestoreResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to restore database branch' },
  },
  security: [{ bearer: [] }],
})

export const getV1BranchesBranchIdOrRefDiffRoute = createRoute({
  method: 'get',
  path: '/v1/branches/{branch_id_or_ref}/diff',
  tags: ['Environments'],
  summary: 'Diffs a database branch',
  description:
    'Diffs the specified database branch\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-diff-a-branch',
  request: {
    params: z.object({
      branch_id_or_ref: z
        .union([
          z
            .string()
            .regex(/^[a-z]+$/)
            .length(20)
            .openapi({ description: 'Project ref', example: 'abcdefghijklmnopqrst' }),
          z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            )
            .openapi({ deprecated: true }),
        ])
        .openapi({
          param: {
            name: 'branch_id_or_ref',
            required: true,
            in: 'path',
            description: 'Branch ref or deprecated branch ID',
            schema: {
              example: 'abcdefghijklmnopqrst',
              anyOf: [
                {
                  type: 'string',
                  minLength: 20,
                  maxLength: 20,
                  pattern: '^[a-z]+$',
                  description: 'Project ref',
                  example: 'abcdefghijklmnopqrst',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  pattern:
                    '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
                  deprecated: true,
                },
              ],
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      included_schemas: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'included_schemas',
            required: false,
            in: 'query',
            schema: { example: 'public,auth', type: 'string' },
          },
          example: 'public,auth',
        }),
      pgdelta: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pgdelta',
            required: false,
            in: 'query',
            description:
              'Use pg-delta instead of Migra for diffing when true. \nBoolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`',
            schema: { example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to diff database branch' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/projects',
  tags: ['Projects'],
  summary: 'List all projects',
  description: "Returns a list of all projects you've previously created.",
  operationId: 'v1-list-all-projects',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.array(V1ProjectWithDatabaseResponseOutputSchema) },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/projects',
  tags: ['Projects'],
  summary: 'Create a project',
  operationId: 'v1-create-a-project',
  request: {
    body: {
      content: { 'application/json': { schema: V1CreateProjectBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: V1ProjectResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsAvailableRegionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/available-regions',
  tags: ['Projects'],
  summary: 'Gets the list of available regions that can be used for a new project',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-available-regions',
  request: {
    query: z.object({
      organization_slug: z
        .string()
        .openapi({
          param: {
            name: 'organization_slug',
            required: true,
            in: 'query',
            description: 'Slug of your organization',
            schema: { example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
      continent: z
        .enum(['NA', 'SA', 'EU', 'AF', 'AS', 'OC', 'AN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'continent',
            required: false,
            in: 'query',
            description:
              'Continent code to determine regional recommendations: NA (North America), SA (South America), EU (Europe), AF (Africa), AS (Asia), OC (Oceania), AN (Antarctica)',
            schema: {
              example: 'NA',
              type: 'string',
              enum: ['NA', 'SA', 'EU', 'AF', 'AS', 'OC', 'AN'],
            },
          },
          example: 'NA',
        }),
      desired_instance_size: z
        .enum([
          'nano',
          'micro',
          'small',
          'medium',
          'large',
          'xlarge',
          '2xlarge',
          '4xlarge',
          '8xlarge',
          '12xlarge',
          '16xlarge',
          '24xlarge',
          '24xlarge_optimized_memory',
          '24xlarge_optimized_cpu',
          '24xlarge_high_memory',
          '48xlarge',
          '48xlarge_optimized_memory',
          '48xlarge_optimized_cpu',
          '48xlarge_high_memory',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'desired_instance_size',
            required: false,
            in: 'query',
            description:
              'Desired instance size. Omit this field to always default to the smallest possible size.',
            schema: {
              type: 'string',
              enum: [
                'nano',
                'micro',
                'small',
                'medium',
                'large',
                'xlarge',
                '2xlarge',
                '4xlarge',
                '8xlarge',
                '12xlarge',
                '16xlarge',
                '24xlarge',
                '24xlarge_optimized_memory',
                '24xlarge_optimized_cpu',
                '24xlarge_high_memory',
                '48xlarge',
                '48xlarge_optimized_memory',
                '48xlarge_optimized_cpu',
                '48xlarge_high_memory',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RegionsInfoV1OutputSchema } },
    },
  },
  security: [{ bearer: [] }],
})

export const getV1OrganizationsRoute = createRoute({
  method: 'get',
  path: '/v1/organizations',
  tags: ['Organizations'],
  summary: 'List all organizations',
  description: 'Returns a list of organizations that you currently belong to.',
  operationId: 'v1-list-all-organizations',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(OrganizationResponseV1OutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Unexpected error listing organizations' },
  },
  security: [{ bearer: [] }],
})

export const postV1OrganizationsRoute = createRoute({
  method: 'post',
  path: '/v1/organizations',
  tags: ['Organizations'],
  summary: 'Create an organization',
  operationId: 'v1-create-an-organization',
  request: {
    body: {
      content: { 'application/json': { schema: CreateOrganizationV1Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: OrganizationResponseV1OutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Unexpected error creating an organization' },
  },
  security: [{ bearer: [] }],
})

export const getV1OauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/v1/oauth/authorize',
  tags: ['OAuth'],
  summary: 'Authorize user through oauth',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-authorize-user',
  request: {
    query: z.object({
      client_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'client_id',
            required: true,
            in: 'query',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '66666666-6666-4666-8666-666666666666',
              type: 'string',
            },
          },
          example: '66666666-6666-4666-8666-666666666666',
        }),
      response_type: z
        .enum(['code', 'token', 'id_token token'])
        .openapi({
          param: {
            name: 'response_type',
            required: true,
            in: 'query',
            schema: { example: 'code', type: 'string', enum: ['code', 'token', 'id_token token'] },
          },
          example: 'code',
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: {
            name: 'redirect_uri',
            required: true,
            in: 'query',
            schema: { example: 'https://app.acme.com/auth/callback', type: 'string' },
          },
          example: 'https://app.acme.com/auth/callback',
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            required: false,
            in: 'query',
            schema: { example: 'projects:read projects:write', type: 'string' },
          },
          example: 'projects:read projects:write',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            required: false,
            in: 'query',
            schema: { example: 'st_9f4d3a206b2e4a7e8c91', type: 'string' },
          },
          example: 'st_9f4d3a206b2e4a7e8c91',
        }),
      response_mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'response_mode',
            required: false,
            in: 'query',
            schema: { example: 'query', type: 'string' },
          },
          example: 'query',
        }),
      code_challenge: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge',
            required: false,
            in: 'query',
            schema: { example: 'Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ', type: 'string' },
          },
          example: 'Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ',
        }),
      code_challenge_method: z
        .enum(['plain', 'sha256', 'S256'])
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge_method',
            required: false,
            in: 'query',
            schema: { example: 'S256', type: 'string', enum: ['plain', 'sha256', 'S256'] },
          },
          example: 'S256',
        }),
      organization_slug: z
        .string()
        .regex(/^[\w-]+$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_slug',
            required: false,
            in: 'query',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
      target_flow: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'target_flow', required: false, in: 'query', schema: { type: 'string' } },
        }),
      resource: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'resource',
            required: false,
            in: 'query',
            description: 'Resource indicator for MCP (Model Context Protocol) clients',
            schema: { format: 'uri', example: 'https://mcp.supabase.com/projects', type: 'string' },
          },
          example: 'https://mcp.supabase.com/projects',
        }),
    }),
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
})

export const postV1OauthTokenRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/token',
  tags: ['OAuth'],
  summary: "Exchange auth code for user's access and refresh token",
  description:
    'Supports `authorization_code`, `refresh_token`, and `urn:ietf:params:oauth:grant-type:jwt-bearer` grant types. The `jwt-bearer` grant type (IDJAG — identity-directed JWT assertion) is in beta and available on Team and Enterprise plans only.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-exchange-oauth-token',
  request: {
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: OAuthTokenBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OAuthTokenResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
})

export const postV1OauthRevokeRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/revoke',
  tags: ['OAuth'],
  summary: "Revoke oauth app authorization and it's corresponding tokens",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-revoke-token',
  request: {
    body: {
      content: { 'application/json': { schema: OAuthRevokeTokenBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
})

export const getV1OauthAuthorizeProjectClaimRoute = createRoute({
  method: 'get',
  path: '/v1/oauth/authorize/project-claim',
  tags: ['OAuth'],
  summary: 'Authorize user through oauth and claim a project',
  description:
    'Initiates the OAuth authorization flow for the specified provider. After successful authentication, the user can claim ownership of the specified project.',
  operationId: 'v1-oauth-authorize-project-claim',
  request: {
    query: z.object({
      project_ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'project_ref',
            required: true,
            in: 'query',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      client_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'client_id',
            required: true,
            in: 'query',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '66666666-6666-4666-8666-666666666666',
              type: 'string',
            },
          },
          example: '66666666-6666-4666-8666-666666666666',
        }),
      response_type: z
        .enum(['code', 'token', 'id_token token'])
        .openapi({
          param: {
            name: 'response_type',
            required: true,
            in: 'query',
            schema: { example: 'code', type: 'string', enum: ['code', 'token', 'id_token token'] },
          },
          example: 'code',
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: {
            name: 'redirect_uri',
            required: true,
            in: 'query',
            schema: { example: 'https://app.acme.com/auth/callback', type: 'string' },
          },
          example: 'https://app.acme.com/auth/callback',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            required: false,
            in: 'query',
            schema: { example: 'st_9f4d3a206b2e4a7e8c91', type: 'string' },
          },
          example: 'st_9f4d3a206b2e4a7e8c91',
        }),
      response_mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'response_mode',
            required: false,
            in: 'query',
            schema: { example: 'query', type: 'string' },
          },
          example: 'query',
        }),
      code_challenge: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge',
            required: false,
            in: 'query',
            schema: { example: 'Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ', type: 'string' },
          },
          example: 'Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ',
        }),
      code_challenge_method: z
        .enum(['plain', 'sha256', 'S256'])
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge_method',
            required: false,
            in: 'query',
            schema: { example: 'S256', type: 'string', enum: ['plain', 'sha256', 'S256'] },
          },
          example: 'S256',
        }),
    }),
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1SnippetsRoute = createRoute({
  method: 'get',
  path: '/v1/snippets',
  tags: ['Database'],
  summary: 'Lists SQL snippets for the logged in user',
  operationId: 'v1-list-all-snippets',
  request: {
    query: z.object({
      project_ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'project_ref',
            required: false,
            in: 'query',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'cursor', required: false, in: 'query', schema: { type: 'string' } },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            schema: { type: 'string', minimum: 1, maximum: 100 },
          },
        }),
      sort_by: z
        .enum(['name', 'inserted_at'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            required: false,
            in: 'query',
            schema: { enum: ['name', 'inserted_at'], type: 'string' },
          },
        }),
      sort_order: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_order',
            required: false,
            in: 'query',
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SnippetListOutputSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to list user's SQL snippets" },
  },
  security: [{ bearer: [] }],
})

export const getV1SnippetsIdRoute = createRoute({
  method: 'get',
  path: '/v1/snippets/{id}',
  tags: ['Database'],
  summary: 'Gets a specific SQL snippet',
  operationId: 'v1-get-a-snippet',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '44444444-4444-4444-8444-444444444444',
              type: 'string',
            },
          },
          example: '44444444-4444-4444-8444-444444444444',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SnippetResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve SQL snippet' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProfileRoute = createRoute({
  method: 'get',
  path: '/v1/profile',
  tags: ['Profile'],
  summary: "Gets the user's profile",
  operationId: 'v1-get-profile',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ProfileResponseOutputSchema } },
    },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefActionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/actions',
  tags: ['Environments'],
  summary: 'List all action runs',
  description: 'Returns a paginated list of action runs of the specified project.',
  operationId: 'v1-list-action-runs',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            schema: { minimum: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            schema: { minimum: 10, example: 20, type: 'number' },
          },
          example: 20,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListActionRunResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to list action runs' },
  },
  security: [{ bearer: [] }],
})

export const headV1ProjectsRefActionsRoute = createRoute({
  method: 'head',
  path: '/v1/projects/{ref}/actions',
  tags: ['Environments'],
  summary: 'Count the number of action runs',
  description: 'Returns the total number of action runs of the specified project.',
  operationId: 'v1-count-action-runs',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      headers: z.object({
        'X-Total-Count': {
          description: 'total count value',
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64().min(0n),
            )
            .exactOptional()
            .openapi({
              description: 'total count value',
              param: { required: false },
              type: 'integer',
              format: 'int64',
              minimum: 0,
            }),
        },
      }),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to count action runs' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefActionsRunIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/actions/{run_id}',
  tags: ['Environments'],
  summary: 'Get the status of an action run',
  description: 'Returns the current status of the specified action run.',
  operationId: 'v1-get-action-run',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      run_id: z
        .string()
        .openapi({
          param: {
            name: 'run_id',
            required: true,
            in: 'path',
            description: 'Action Run ID',
            schema: { example: 'run_01hq3q9m7y5q7e4a7x2c8m1p4n', type: 'string' },
          },
          example: 'run_01hq3q9m7y5q7e4a7x2c8m1p4n',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ActionRunResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get action run status' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefActionsRunIdStatusRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/actions/{run_id}/status',
  tags: ['Environments'],
  summary: 'Update the status of an action run',
  description: 'Updates the status of an ongoing action run.',
  operationId: 'v1-update-action-run-status',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      run_id: z
        .string()
        .openapi({
          param: {
            name: 'run_id',
            required: true,
            in: 'path',
            description: 'Action Run ID',
            schema: { example: 'run_01hq3q9m7y5q7e4a7x2c8m1p4n', type: 'string' },
          },
          example: 'run_01hq3q9m7y5q7e4a7x2c8m1p4n',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRunStatusBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateRunStatusResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update action run status' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefActionsRunIdLogsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/actions/{run_id}/logs',
  tags: ['Environments'],
  summary: 'Get the logs of an action run',
  description: 'Returns the logs from the specified action run.',
  operationId: 'v1-get-action-run-logs',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      run_id: z
        .string()
        .openapi({
          param: {
            name: 'run_id',
            required: true,
            in: 'path',
            description: 'Action Run ID',
            schema: { example: 'run_01hq3q9m7y5q7e4a7x2c8m1p4n', type: 'string' },
          },
          example: 'run_01hq3q9m7y5q7e4a7x2c8m1p4n',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get action run logs' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefApiKeysRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/api-keys',
  tags: ['Secrets'],
  summary: 'Get project api keys',
  operationId: 'v1-get-project-api-keys',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      reveal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reveal',
            required: false,
            in: 'query',
            description:
              'Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`',
            schema: { example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ApiKeyResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefApiKeysRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/api-keys',
  tags: ['Secrets'],
  summary: 'Creates a new API key for the project',
  operationId: 'v1-create-project-api-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      reveal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reveal',
            required: false,
            in: 'query',
            description:
              'Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`',
            schema: { example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
    body: { content: { 'application/json': { schema: CreateApiKeyBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ApiKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefApiKeysLegacyRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/api-keys/legacy',
  tags: ['Secrets'],
  summary:
    'Check whether JWT based legacy (anon, service_role) API keys are enabled. This API endpoint will be removed in the future, check for HTTP 404 Not Found.',
  operationId: 'v1-get-project-legacy-api-keys',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: LegacyApiKeysResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefApiKeysLegacyRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/api-keys/legacy',
  tags: ['Secrets'],
  summary:
    'Disable or re-enable JWT based legacy (anon, service_role) API keys. This API endpoint will be removed in the future, check for HTTP 404 Not Found.',
  operationId: 'v1-update-project-legacy-api-keys',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      enabled: z
        .string()
        .openapi({
          param: {
            name: 'enabled',
            required: true,
            in: 'query',
            description:
              'Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`',
            schema: { example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: LegacyApiKeysResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefApiKeysIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/api-keys/{id}',
  tags: ['Secrets'],
  summary: 'Get API key',
  operationId: 'v1-get-project-api-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '22222222-2222-4222-8222-222222222222',
              type: 'string',
            },
          },
          example: '22222222-2222-4222-8222-222222222222',
        }),
    }),
    query: z.object({
      reveal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reveal',
            required: false,
            in: 'query',
            description:
              'Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`',
            schema: { example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ApiKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: { description: 'API key not found for project' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefApiKeysIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/api-keys/{id}',
  tags: ['Secrets'],
  summary: 'Deletes an API key for the project',
  operationId: 'v1-delete-project-api-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '22222222-2222-4222-8222-222222222222',
              type: 'string',
            },
          },
          example: '22222222-2222-4222-8222-222222222222',
        }),
    }),
    query: z.object({
      reveal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reveal',
            required: false,
            in: 'query',
            description: 'Boolean string, true or false',
            schema: { example: true, type: 'string' },
          },
          example: true,
        }),
      was_compromised: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'was_compromised',
            required: false,
            in: 'query',
            description: 'Boolean string, true or false',
            schema: { example: false, type: 'string' },
          },
          example: false,
        }),
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reason',
            required: false,
            in: 'query',
            schema: { example: 'rotating_key', type: 'string' },
          },
          example: 'rotating_key',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ApiKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: { description: 'API key not found for project' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefApiKeysIdRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/api-keys/{id}',
  tags: ['Secrets'],
  summary: 'Updates an API key for the project',
  operationId: 'v1-update-project-api-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '22222222-2222-4222-8222-222222222222',
              type: 'string',
            },
          },
          example: '22222222-2222-4222-8222-222222222222',
        }),
    }),
    query: z.object({
      reveal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'reveal',
            required: false,
            in: 'query',
            description:
              'Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`',
            schema: { example: 'true', type: 'string' },
          },
          example: 'true',
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateApiKeyBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ApiKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: { description: 'API key not found for project' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefBranchesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/branches',
  tags: ['Environments'],
  summary: 'List all database branches',
  description: 'Returns all database branches of the specified project.',
  operationId: 'v1-list-all-branches',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BranchResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve database branches' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefBranchesRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/branches',
  tags: ['Environments'],
  summary: 'Create a database branch',
  description: 'Creates a database branch from the specified project.',
  operationId: 'v1-create-a-branch',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: CreateBranchBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: BranchResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to create database branch' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefBranchesRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/branches',
  tags: ['Environments'],
  summary: 'Disables preview branching',
  description: 'Disables preview branching for the specified project',
  operationId: 'v1-disable-preview-branching',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to disable preview branching' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefBranchesNameRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/branches/{name}',
  tags: ['Environments'],
  summary: 'Get a database branch',
  description: 'Fetches the specified database branch by its name.',
  operationId: 'v1-get-a-branch',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            required: true,
            in: 'path',
            schema: { example: 'preview-login-page', type: 'string' },
          },
          example: 'preview-login-page',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BranchResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to fetch database branch' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefCustomHostnameRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/custom-hostname',
  tags: ['Domains'],
  summary: "Gets project's custom hostname config",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-hostname-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateCustomHostnameResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's custom hostname config" },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefCustomHostnameRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/custom-hostname',
  tags: ['Domains'],
  summary: "Deletes a project's custom hostname configuration",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-Delete hostname config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      remove_addon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'remove_addon',
            required: false,
            in: 'query',
            description:
              'If true, also removes the custom domain add-on from the project subscription.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to delete project custom hostname configuration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefCustomHostnameInitializeRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/custom-hostname/initialize',
  tags: ['Domains'],
  summary: "Updates project's custom hostname configuration",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-update-hostname-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCustomHostnameBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: UpdateCustomHostnameResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update project custom hostname configuration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefCustomHostnameReverifyRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/custom-hostname/reverify',
  tags: ['Domains'],
  summary: "Attempts to verify the DNS configuration for project's custom hostname configuration",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-verify-dns-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: UpdateCustomHostnameResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to verify project custom hostname configuration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefCustomHostnameActivateRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/custom-hostname/activate',
  tags: ['Domains'],
  summary: 'Activates a custom hostname for a project.',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-activate-custom-hostname',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: UpdateCustomHostnameResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to activate project custom hostname configuration' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefJitAccessRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/jit-access',
  tags: ['Database'],
  summary: "Get project's temporary access configuration.",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-jit-access-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  state: z.enum(['enabled', 'disabled']),
                  appliedSuccessfully: z.boolean().exactOptional(),
                })
                .openapi({ required: ['state'] }),
              z
                .object({
                  state: z.literal('unavailable'),
                  unavailableReason: z.enum([
                    'platform_unsupported',
                    'postgres_upgrade_required',
                    'ssl_enforcement_required',
                    'temporarily_unavailable',
                  ]),
                })
                .openapi({ required: ['state', 'unavailableReason'] }),
            ])
            .openapi({ $schema: 'https://json-schema.org/draft/2020-12/schema' }),
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's temporary access configuration." },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefJitAccessRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/jit-access',
  tags: ['Database'],
  summary: "Update project's temporary access configuration.",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-update-jit-access-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: JitAccessRequestRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  state: z.enum(['enabled', 'disabled']),
                  appliedSuccessfully: z.boolean().exactOptional(),
                })
                .openapi({ required: ['state'] }),
              z
                .object({
                  state: z.literal('unavailable'),
                  unavailableReason: z.enum([
                    'platform_unsupported',
                    'postgres_upgrade_required',
                    'ssl_enforcement_required',
                    'temporarily_unavailable',
                  ]),
                })
                .openapi({ required: ['state', 'unavailableReason'] }),
            ])
            .openapi({ $schema: 'https://json-schema.org/draft/2020-12/schema' }),
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's temporary access configuration." },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefNetworkBansRetrieveRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/network-bans/retrieve',
  tags: ['Projects'],
  summary: "Gets project's network bans",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-list-all-network-bans',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: NetworkBanResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's network bans" },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefNetworkBansRetrieveEnrichedRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/network-bans/retrieve/enriched',
  tags: ['Projects'],
  summary:
    "Gets project's network bans with additional information about which databases they affect",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-list-all-network-bans-enriched',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: NetworkBanResponseEnrichedOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's enriched network bans" },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefNetworkBansRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/network-bans',
  tags: ['Projects'],
  summary: 'Remove network bans.',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-delete-network-bans',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveNetworkBanRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to remove network bans.' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefNetworkRestrictionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/network-restrictions',
  tags: ['Projects'],
  summary: "Gets project's network restrictions",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-network-restrictions',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: NetworkRestrictionsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's network restrictions" },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefNetworkRestrictionsRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/network-restrictions',
  tags: ['Projects'],
  summary: "Updates project's network restrictions by adding or removing CIDRs",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Alpha** stage.',
  operationId: 'v1-patch-network-restrictions',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: NetworkRestrictionsPatchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: NetworkRestrictionsV2ResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update project network restrictions' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefNetworkRestrictionsApplyRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/network-restrictions/apply',
  tags: ['Projects'],
  summary: "Updates project's network restrictions",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-update-network-restrictions',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: NetworkRestrictionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: NetworkRestrictionsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update project network restrictions' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefPgsodiumRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/pgsodium',
  tags: ['Secrets'],
  summary: "Gets project's pgsodium config",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-pgsodium-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PgsodiumConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's pgsodium config" },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefPgsodiumRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/pgsodium',
  tags: ['Secrets'],
  summary:
    "Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible.",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-update-pgsodium-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePgsodiumConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PgsodiumConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's pgsodium config" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefPostgrestRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/postgrest',
  tags: ['Rest'],
  summary: "Gets project's postgrest config",
  operationId: 'v1-get-postgrest-service-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PostgrestConfigWithJWTSecretResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's postgrest config" },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefPostgrestRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/postgrest',
  tags: ['Rest'],
  summary: "Updates project's postgrest config",
  operationId: 'v1-update-postgrest-service-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1UpdatePostgrestConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1PostgrestConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's postgrest config" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}',
  tags: ['Projects'],
  summary: 'Gets a specific project that belongs to the authenticated user',
  operationId: 'v1-get-project',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ProjectWithDatabaseResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve project' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}',
  tags: ['Projects'],
  summary: 'Deletes the given project',
  operationId: 'v1-delete-a-project',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ProjectRefResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}',
  tags: ['Projects'],
  summary: 'Updates the given project',
  operationId: 'v1-update-a-project',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1UpdateProjectBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ProjectRefResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update project' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefSecretsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/secrets',
  tags: ['Secrets'],
  summary: 'List all secrets',
  description: "Returns all secrets you've previously added to the specified project.",
  operationId: 'v1-list-all-secrets',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SecretResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's secrets" },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefSecretsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/secrets',
  tags: ['Secrets'],
  summary: 'Bulk create secrets',
  description: 'Creates multiple secrets and adds them to the specified project.',
  operationId: 'v1-bulk-create-secrets',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: CreateSecretBodySchema } }, required: true },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to create project's secrets" },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefSecretsRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/secrets',
  tags: ['Secrets'],
  summary: 'Bulk delete secrets',
  description: 'Deletes all secrets with the given names from the specified project',
  operationId: 'v1-bulk-delete-secrets',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteSecretsBodySchema } }, required: true },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to delete secrets with given names' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefSslEnforcementRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/ssl-enforcement',
  tags: ['Database'],
  summary: "Get project's SSL enforcement configuration.",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-ssl-enforcement-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SslEnforcementResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's SSL enforcement config" },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefSslEnforcementRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/ssl-enforcement',
  tags: ['Database'],
  summary: "Update project's SSL enforcement configuration.",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-update-ssl-enforcement-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SslEnforcementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SslEnforcementResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's SSL enforcement configuration." },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefTypesTypescriptRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/types/typescript',
  tags: ['Database'],
  summary: 'Generate TypeScript types',
  description: 'Returns the TypeScript types of your schema for use with supabase-js.',
  operationId: 'v1-generate-typescript-types',
  request: {
    query: z.object({
      included_schemas: z
        .string()
        .default('public')
        .exactOptional()
        .openapi({
          param: {
            name: 'included_schemas',
            required: false,
            in: 'query',
            schema: { default: 'public', example: 'public,auth', type: 'string' },
          },
          example: 'public,auth',
        }),
    }),
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: TypescriptResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to generate TypeScript types' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefVanitySubdomainRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/vanity-subdomain',
  tags: ['Domains'],
  summary: 'Gets current vanity subdomain config',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-vanity-subdomain-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: VanitySubdomainConfigResponseOutputSchema } },
    },
    400: {
      description: 'This feature requires the Pro, Team, or Enterprise organization plan.',
      content: { 'application/json': { schema: PlanGateErrorBodySchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get project vanity subdomain configuration' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefVanitySubdomainRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/vanity-subdomain',
  tags: ['Domains'],
  summary: "Deletes a project's vanity subdomain configuration",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-deactivate-vanity-subdomain-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to delete project vanity subdomain configuration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefVanitySubdomainCheckAvailabilityRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/vanity-subdomain/check-availability',
  tags: ['Domains'],
  summary: 'Checks vanity subdomain availability',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-check-vanity-subdomain-availability',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: VanitySubdomainBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SubdomainAvailabilityResponseOutputSchema } },
    },
    400: {
      description: 'This feature requires the Pro, Team, or Enterprise organization plan.',
      content: { 'application/json': { schema: PlanGateErrorBodySchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to check project vanity subdomain configuration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefVanitySubdomainActivateRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/vanity-subdomain/activate',
  tags: ['Domains'],
  summary: 'Activates a vanity subdomain for a project.',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-activate-vanity-subdomain-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: VanitySubdomainBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ActivateVanitySubdomainResponseOutputSchema } },
    },
    400: {
      description: 'This feature requires the Pro, Team, or Enterprise organization plan.',
      content: { 'application/json': { schema: PlanGateErrorBodySchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to activate project vanity subdomain configuration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefUpgradeRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/upgrade',
  tags: ['Projects'],
  summary: "Upgrades the project's Postgres version",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-upgrade-postgres-version',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpgradeDatabaseBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ProjectUpgradeInitiateResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to initiate project upgrade' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefUpgradeEligibilityRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/upgrade/eligibility',
  tags: ['Projects'],
  summary: "Returns the project's eligibility for upgrades",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-postgres-upgrade-eligibility',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ProjectUpgradeEligibilityResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to determine project upgrade eligibility' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefUpgradeStatusRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/upgrade/status',
  tags: ['Projects'],
  summary: "Gets the latest status of the project's upgrade",
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-get-postgres-upgrade-status',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      tracking_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tracking_id',
            required: false,
            in: 'query',
            schema: { example: '9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c', type: 'string' },
          },
          example: '9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DatabaseUpgradeStatusResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve project upgrade status' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefReadonlyRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/readonly',
  tags: ['Database'],
  summary: "Returns project's readonly mode status",
  operationId: 'v1-get-readonly-mode-status',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ReadOnlyStatusResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get project readonly mode status' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefReadonlyTemporaryDisableRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/readonly/temporary-disable',
  tags: ['Database'],
  summary: "Disables project's readonly mode for the next 15 minutes",
  operationId: 'v1-disable-readonly-mode-temporarily',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to disable project's readonly mode" },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefReadReplicasSetupRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/read-replicas/setup',
  tags: ['Database'],
  summary: 'Set up a read replica',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-setup-a-read-replica',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetUpReadReplicaBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    402: {
      description: 'This feature requires the Pro, Team, or Enterprise organization plan.',
      content: { 'application/json': { schema: PlanGateErrorBodySchema } },
    },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to set up read replica' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefReadReplicasRemoveRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/read-replicas/remove',
  tags: ['Database'],
  summary: 'Remove a read replica',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-remove-a-read-replica',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveReadReplicaBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to remove read replica' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefHealthRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/health',
  tags: ['Projects'],
  summary: "Gets project's service health status",
  operationId: 'v1-get-services-health',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      services: z
        .union([
          z
            .string()
            .openapi({
              description:
                'Comma-separated list of enums:\n\n- `auth`\n- `db`\n- `db_postgres_user`\n- `pooler`\n- `realtime`\n- `rest`\n- `storage`\n- `pg_bouncer`',
              example: ['auth,db', 'auth'],
            }),
          z
            .array(
              z.enum([
                'auth',
                'db',
                'db_postgres_user',
                'pooler',
                'realtime',
                'rest',
                'storage',
                'pg_bouncer',
              ]),
            )
            .openapi({
              description: 'Array of enums.',
              example: ['{field}=auth&{field}=db', '{field}=auth'],
            }),
        ])
        .openapi({
          param: {
            name: 'services',
            required: true,
            in: 'query',
            description: 'Comma-separated list of enums or array of enums.',
            schema: {
              example: ['auth,db', 'auth'],
              anyOf: [
                {
                  type: 'string',
                  description:
                    'Comma-separated list of enums:\n\n- `auth`\n- `db`\n- `db_postgres_user`\n- `pooler`\n- `realtime`\n- `rest`\n- `storage`\n- `pg_bouncer`',
                  example: ['auth,db', 'auth'],
                },
                {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: [
                      'auth',
                      'db',
                      'db_postgres_user',
                      'pooler',
                      'realtime',
                      'rest',
                      'storage',
                      'pg_bouncer',
                    ],
                  },
                  description: 'Array of enums.',
                  example: ['{field}=auth&{field}=db', '{field}=auth'],
                },
              ],
            },
          },
          example: ['auth,db', 'auth'],
        }),
      timeout_ms: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout_ms',
            required: false,
            in: 'query',
            schema: { minimum: 0, maximum: 10000, example: 2000, type: 'integer' },
          },
          example: 2000,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(V1ServiceHealthResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's service health status" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthSigningKeysLegacyRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/signing-keys/legacy',
  tags: ['Auth'],
  summary:
    'Get the signing key information for the JWT secret imported as signing key for this project. This endpoint will be removed in the future, check for HTTP 404 Not Found.',
  operationId: 'v1-get-legacy-signing-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SigningKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefConfigAuthSigningKeysLegacyRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/config/auth/signing-keys/legacy',
  tags: ['Auth'],
  summary:
    "Set up the project's existing JWT secret as an in_use JWT signing key. This endpoint will be removed in the future always check for HTTP 404 Not Found.",
  operationId: 'v1-create-legacy-signing-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SigningKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthSigningKeysRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/signing-keys',
  tags: ['Auth'],
  summary: 'List all signing keys for the project',
  operationId: 'v1-get-project-signing-keys',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SigningKeysResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefConfigAuthSigningKeysRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/config/auth/signing-keys',
  tags: ['Auth'],
  summary: 'Create a new signing key for the project in standby status',
  operationId: 'v1-create-project-signing-key',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSigningKeyBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SigningKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthSigningKeysIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/signing-keys/{id}',
  tags: ['Auth'],
  summary: 'Get information about a signing key',
  operationId: 'v1-get-project-signing-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '33333333-3333-4333-8333-333333333333',
              type: 'string',
            },
          },
          example: '33333333-3333-4333-8333-333333333333',
        }),
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SigningKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefConfigAuthSigningKeysIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/config/auth/signing-keys/{id}',
  tags: ['Auth'],
  summary:
    'Remove a signing key from a project. Only possible if the key has been in revoked status for a while.',
  operationId: 'v1-remove-project-signing-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '33333333-3333-4333-8333-333333333333',
              type: 'string',
            },
          },
          example: '33333333-3333-4333-8333-333333333333',
        }),
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SigningKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefConfigAuthSigningKeysIdRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/config/auth/signing-keys/{id}',
  tags: ['Auth'],
  summary: 'Update a signing key, mainly its status',
  operationId: 'v1-update-project-signing-key',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '33333333-3333-4333-8333-333333333333',
              type: 'string',
            },
          },
          example: '33333333-3333-4333-8333-333333333333',
        }),
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSigningKeyBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SigningKeyResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth',
  tags: ['Auth'],
  summary: "Gets project's auth config",
  operationId: 'v1-get-auth-service-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AuthConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's auth config" },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefConfigAuthRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/config/auth',
  tags: ['Auth'],
  summary: "Updates a project's auth config",
  operationId: 'v1-update-auth-service-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAuthConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AuthConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's auth config" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthThirdPartyAuthRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/third-party-auth',
  tags: ['Auth'],
  summary: 'Lists all third-party auth integrations',
  operationId: 'v1-list-project-tpa-integrations',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ThirdPartyAuthOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefConfigAuthThirdPartyAuthRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/config/auth/third-party-auth',
  tags: ['Auth'],
  summary: 'Creates a new third-party auth integration',
  operationId: 'v1-create-project-tpa-integration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateThirdPartyAuthBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ThirdPartyAuthOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}',
  tags: ['Auth'],
  summary: 'Get a third-party integration',
  operationId: 'v1-get-project-tpa-integration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      tpa_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'tpa_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '88888888-8888-4888-8888-888888888888',
              type: 'string',
            },
          },
          example: '88888888-8888-4888-8888-888888888888',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ThirdPartyAuthOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}',
  tags: ['Auth'],
  summary: 'Removes a third-party auth integration',
  operationId: 'v1-delete-project-tpa-integration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      tpa_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'tpa_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '88888888-8888-4888-8888-888888888888',
              type: 'string',
            },
          },
          example: '88888888-8888-4888-8888-888888888888',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ThirdPartyAuthOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefPauseRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/pause',
  tags: ['Projects'],
  summary: 'Pauses the given project',
  operationId: 'v1-pause-a-project',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefRestartRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/restart',
  tags: ['Projects'],
  summary: 'Restarts the given project',
  operationId: 'v1-restart-a-project',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefRestoreRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/restore',
  tags: ['Projects'],
  summary: 'Lists available restore versions for the given project',
  operationId: 'v1-list-available-restore-versions',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: GetProjectAvailableRestoreVersionsResponseOutputSchema },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefRestoreRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/restore',
  tags: ['Projects'],
  summary: 'Restores the given project',
  operationId: 'v1-restore-a-project',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefRestoreCancelRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/restore/cancel',
  tags: ['Projects'],
  summary: 'Cancels the given project restoration',
  operationId: 'v1-cancel-a-project-restoration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefBillingAddonsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/billing/addons',
  tags: ['Billing'],
  summary: 'List billing addons and compute instance selections',
  description:
    'Returns the billing addons that are currently applied, including the active compute instance size, and lists every addon option that can be provisioned with pricing metadata.',
  operationId: 'v1-list-project-addons',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListProjectAddonsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to list project addons' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefBillingAddonsRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/billing/addons',
  tags: ['Billing'],
  summary: 'Apply or update billing addons, including compute instance size',
  description:
    'Selects an addon variant, for example scaling the project’s compute instance up or down, and applies it to the project.',
  operationId: 'v1-apply-project-addon',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApplyProjectAddonBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to apply project addon' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefBillingAddonsAddonVariantRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/billing/addons/{addon_variant}',
  tags: ['Billing'],
  summary: 'Remove billing addons or revert compute instance sizing',
  description:
    'Disables the selected addon variant, including rolling the compute instance back to its previous size.',
  operationId: 'v1-remove-project-addon',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      addon_variant: z
        .union([
          z.enum([
            'ci_micro',
            'ci_small',
            'ci_medium',
            'ci_large',
            'ci_xlarge',
            'ci_2xlarge',
            'ci_4xlarge',
            'ci_8xlarge',
            'ci_12xlarge',
            'ci_16xlarge',
            'ci_24xlarge',
            'ci_24xlarge_optimized_cpu',
            'ci_24xlarge_optimized_memory',
            'ci_24xlarge_high_memory',
            'ci_48xlarge',
            'ci_48xlarge_optimized_cpu',
            'ci_48xlarge_optimized_memory',
            'ci_48xlarge_high_memory',
          ]),
          z.literal('cd_default'),
          z.enum(['pitr_7', 'pitr_14', 'pitr_28']),
          z.literal('ipv4_default'),
        ])
        .openapi({
          param: {
            name: 'addon_variant',
            required: true,
            in: 'path',
            schema: {
              example: 'pitr_7',
              anyOf: [
                {
                  type: 'string',
                  enum: [
                    'ci_micro',
                    'ci_small',
                    'ci_medium',
                    'ci_large',
                    'ci_xlarge',
                    'ci_2xlarge',
                    'ci_4xlarge',
                    'ci_8xlarge',
                    'ci_12xlarge',
                    'ci_16xlarge',
                    'ci_24xlarge',
                    'ci_24xlarge_optimized_cpu',
                    'ci_24xlarge_optimized_memory',
                    'ci_24xlarge_high_memory',
                    'ci_48xlarge',
                    'ci_48xlarge_optimized_cpu',
                    'ci_48xlarge_optimized_memory',
                    'ci_48xlarge_high_memory',
                  ],
                },
                { type: 'string', enum: ['cd_default'] },
                { type: 'string', enum: ['pitr_7', 'pitr_14', 'pitr_28'] },
                { type: 'string', enum: ['ipv4_default'] },
              ],
            },
          },
          example: 'pitr_7',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to remove project addon' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefClaimTokenRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/claim-token',
  tags: ['Projects'],
  summary: 'Gets project claim token',
  operationId: 'v1-get-project-claim-token',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ProjectClaimTokenResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefClaimTokenRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/claim-token',
  tags: ['Projects'],
  summary: 'Creates project claim token',
  operationId: 'v1-create-project-claim-token',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreateProjectClaimTokenResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefClaimTokenRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/claim-token',
  tags: ['Projects'],
  summary: 'Revokes project claim token',
  operationId: 'v1-delete-project-claim-token',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAdvisorsPerformanceRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/advisors/performance',
  tags: ['Advisors'],
  summary: 'Gets project performance advisors.',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.',
  operationId: 'v1-get-performance-advisors',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ProjectAdvisorsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAdvisorsSecurityRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/advisors/security',
  tags: ['Advisors'],
  summary: 'Gets project security advisors.',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.',
  operationId: 'v1-get-security-advisors',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      lint_type: z
        .literal('sql')
        .exactOptional()
        .openapi({
          param: {
            name: 'lint_type',
            required: false,
            in: 'query',
            schema: { example: 'sql', type: 'string', enum: ['sql'] },
          },
          example: 'sql',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ProjectAdvisorsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAnalyticsEndpointsLogsAllRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/analytics/endpoints/logs.all',
  tags: ['Analytics'],
  summary: "Gets project's logs",
  description:
    'This endpoint has been removed and always responds with `410 Gone`. Use `GET /v1/projects/{ref}/analytics/endpoints/logs` instead. See the [migration guide](https://supabase.com/changelog/48235-migration-of-supabase-management-api-logs-all-analytics-endpoint-to-logs-endpoint).',
  operationId: 'v1-get-project-logs-all',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    410: { description: 'This endpoint has been removed' },
    429: { description: 'Rate limit exceeded' },
  },
  deprecated: true,
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAnalyticsEndpointsLogsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/analytics/endpoints/logs',
  tags: ['Analytics'],
  summary: "Gets all project's logs in a single log stream",
  description:
    "Executes an SQL or LQL query on the project's unified logs stream.\n\nEither the `iso_timestamp_start` and `iso_timestamp_end` parameters must be provided.\nIf both are not provided, only the last 1 minute of logs will be queried.\nThe timestamp range must be no more than 24 hours and is rounded to the nearest minute. If the range is more than 24 hours, a validation error will be thrown.\n\nFilter by the `source` column to specify specific log sources, such as edge_logs, postgres_logs, etc.\n\nNote: SQL must be written in **ClickHouse SQL dialect**.\n",
  operationId: 'v1-get-project-logs',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      sql: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sql',
            required: false,
            in: 'query',
            description:
              'Custom SQL query to execute on the logs. See [querying logs](https://supabase.com/docs/guides/monitoring-and-debugging/logs#querying-with-the-logs-explorer) for more details.',
            schema: { example: 'select event_message from edge_logs limit 10', type: 'string' },
          },
          example: 'select event_message from edge_logs limit 10',
        }),
      iso_timestamp_start: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'iso_timestamp_start',
            required: false,
            in: 'query',
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$',
              example: '2025-03-01T00:00:00Z',
              type: 'string',
            },
          },
          example: '2025-03-01T00:00:00Z',
        }),
      iso_timestamp_end: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'iso_timestamp_end',
            required: false,
            in: 'query',
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z))$',
              example: '2025-03-01T23:59:59Z',
              type: 'string',
            },
          },
          example: '2025-03-01T23:59:59Z',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AnalyticsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    402: { description: 'Usage exceeded. Enable additional usage to continue querying' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAnalyticsEndpointsUsageApiCountsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/analytics/endpoints/usage.api-counts',
  tags: ['Analytics'],
  summary: "Gets project's usage api counts",
  operationId: 'v1-get-project-usage-api-count',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      interval: z
        .enum(['15min', '30min', '1hr', '3hr', '1day', '3day', '7day'])
        .exactOptional()
        .openapi({
          param: {
            name: 'interval',
            required: false,
            in: 'query',
            schema: {
              example: '1day',
              type: 'string',
              enum: ['15min', '30min', '1hr', '3hr', '1day', '3day', '7day'],
            },
          },
          example: '1day',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1GetUsageApiCountResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to get project's usage api counts" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/analytics/endpoints/usage.api-requests-count',
  tags: ['Analytics'],
  summary: "Gets project's usage api requests count",
  operationId: 'v1-get-project-usage-request-count',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1GetUsageApiRequestsCountResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to get project's usage api requests count" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/analytics/endpoints/functions.combined-stats',
  tags: ['Analytics'],
  summary: "Gets a project's function combined statistics",
  operationId: 'v1-get-project-function-combined-stats',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      interval: z
        .enum(['15min', '1hr', '3hr', '1day'])
        .openapi({
          param: {
            name: 'interval',
            required: true,
            in: 'query',
            schema: { example: '1hr', type: 'string', enum: ['15min', '1hr', '3hr', '1day'] },
          },
          example: '1hr',
        }),
      function_id: z
        .string()
        .openapi({
          param: {
            name: 'function_id',
            required: true,
            in: 'query',
            schema: { example: '3c078cce-ad70-4148-9f37-4da362789053', type: 'string' },
          },
          example: '3c078cce-ad70-4148-9f37-4da362789053',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AnalyticsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to get project's function combined statistics" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefAnalyticsEndpointsMetricsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/analytics/endpoints/metrics',
  tags: ['Analytics'],
  summary: "Scrape a project's metrics",
  description:
    'Prometheus scrape endpoint. Returns metrics of a customer project in the Prometheus open exposition format.',
  operationId: 'v1-scrape-project-metrics',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Prometheus / OpenMetrics text exposition',
      content: {
        'text/plain': { schema: z.string() },
        'application/openmetrics-text': { schema: z.string() },
      },
    },
    400: {
      description:
        'Project must be active and healthy, or metrics are not available for this project',
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to fetch project's metrics" },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefCliLoginRoleRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/cli/login-role',
  tags: ['Database'],
  summary: 'Create a login role for CLI with temporary password',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-create-login-role',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRoleBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateRoleResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to create login role' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefCliLoginRoleRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/cli/login-role',
  tags: ['Database'],
  summary: 'Delete existing login roles used by CLI',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-delete-login-roles',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteRolesResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to delete login roles' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseMigrationsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/migrations',
  tags: ['Database'],
  summary: 'List applied migration versions',
  operationId: 'v1-list-migration-history',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ListMigrationsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to list database migrations' },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefDatabaseMigrationsRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/database/migrations',
  tags: ['Database'],
  summary: 'Upsert a database migration without applying',
  operationId: 'v1-upsert-a-migration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Idempotency-Key',
            required: false,
            in: 'header',
            description: 'A unique key to ensure the same migration is tracked only once.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1UpsertMigrationBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to upsert database migration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseMigrationsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/migrations',
  tags: ['Database'],
  summary: 'Apply a database migration',
  operationId: 'v1-apply-a-migration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Idempotency-Key',
            required: false,
            in: 'header',
            description: 'A unique key to ensure the same migration is tracked only once.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1CreateMigrationBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to apply database migration' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefDatabaseMigrationsRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/database/migrations',
  tags: ['Database'],
  summary: 'Rollback database migrations and remove them from history table',
  operationId: 'v1-rollback-migrations',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      gte: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'gte',
            required: true,
            in: 'query',
            description: 'Rollback migrations greater or equal to this version',
            schema: { pattern: '^\\d+$', example: '20250312000000', type: 'string' },
          },
          example: '20250312000000',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to rollback database migration' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseMigrationsVersionRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/migrations/{version}',
  tags: ['Database'],
  summary: 'Fetch an existing entry from migration history',
  operationId: 'v1-get-a-migration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      version: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'version',
            required: true,
            in: 'path',
            schema: { pattern: '^\\d+$', example: '20250312000000', type: 'string' },
          },
          example: '20250312000000',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1GetMigrationResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get database migration' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefDatabaseMigrationsVersionRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/database/migrations/{version}',
  tags: ['Database'],
  summary: 'Patch an existing entry in migration history',
  operationId: 'v1-patch-a-migration',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      version: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'version',
            required: true,
            in: 'path',
            schema: { pattern: '^\\d+$', example: '20250312000000', type: 'string' },
          },
          example: '20250312000000',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1PatchMigrationBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to patch database migration' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseQueryRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/query',
  tags: ['Database'],
  summary: 'Run sql query',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-run-a-query',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: V1RunQueryBodySchema } }, required: true },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to run sql query' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseQueryReadOnlyRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/query/read-only',
  tags: ['Database'],
  summary: 'Run a sql query as supabase_read_only_user',
  description:
    'All entity references must be schema qualified.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-read-only-query',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1ReadOnlyQueryBodySchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to run read-only sql query' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseWebhooksEnableRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/webhooks/enable',
  tags: ['Database'],
  summary: 'Enables Database Webhooks on the project',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.\n\nThis endpoint is currently in its **Beta** stage.',
  operationId: 'v1-enable-database-webhook',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to enable Database Webhooks on the project' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseContextRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/context',
  tags: ['Database'],
  summary: 'Gets database metadata for the given project.',
  description:
    'This is an **experimental** endpoint. It is subject to change or removal in future versions. Use it with caution, as it may not remain supported or stable.',
  operationId: 'v1-get-database-metadata',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetProjectDbMetadataResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefDatabasePasswordRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/database/password',
  tags: ['Database'],
  summary: 'Updates the database password',
  operationId: 'v1-update-database-password',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1UpdatePasswordBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1UpdatePasswordResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update database password' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseJitRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/jit',
  tags: ['Database'],
  summary: 'Get user-id to role mappings for JIT access',
  description: 'Mappings of roles a user can assume in the project database',
  operationId: 'v1-get-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: JitAccessResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to list database jit access' },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefDatabaseJitRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/database/jit',
  tags: ['Database'],
  summary: 'Updates a user mapping for JIT access',
  description: 'Modifies the roles that can be assumed and for how long',
  operationId: 'v1-update-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateJitAccessBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: JitAccessResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update JIT access' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseJitRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/jit',
  tags: ['Database'],
  summary: 'Authorize user-id to role mappings for JIT access',
  description: 'Authorizes the request to assume a role in the project database',
  operationId: 'v1-authorize-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AuthorizeJitAccessBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: JitAuthorizeAccessResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to authorize database jit access' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseJitListRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/jit/list',
  tags: ['Database'],
  summary: 'List all user-id to role mappings for JIT access',
  description: 'Mappings of roles a user can assume in the project database',
  operationId: 'v1-list-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: JitListAccessResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to list database jit access' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseJitInviteRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/jit/invite',
  tags: ['Database'],
  summary: 'Invites an external user to a database for JIT access',
  description:
    'Invites the external user and sets initial roles that can be assumed and for how long',
  operationId: 'v1-invite-external-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: InviteExternalUserJitAccessBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: InviteExternalUserJitResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to invite external user' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseJitInviteAcceptRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/jit/invite/accept',
  tags: ['Database'],
  summary: 'Accepts invitation for JIT database access',
  description: 'Accepts the invitation to JIT database access',
  operationId: 'v1-accept-invite-external-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcceptInviteExternalUserJitAccessBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: JitAccessResponseOutputSchema } },
    },
    500: { description: 'Failed to accept invitation' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/database/jit/invite/{invite_id}',
  tags: ['Database'],
  summary: 'Deletes the invite for an external user to a database for JIT access',
  description: 'Revokes and deletes the invitation',
  operationId: 'v1-delete-invite-external-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      invite_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'invite_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '55555555-5555-4555-8555-555555555555',
              type: 'string',
            },
          },
          example: '55555555-5555-4555-8555-555555555555',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to revoke invite for external user' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefDatabaseJitUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/database/jit/{user_id}',
  tags: ['Database'],
  summary: 'Delete JIT access by user-id',
  description: 'Remove JIT mappings of a user, revoking all JIT database access',
  operationId: 'v1-delete-jit-access',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      user_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'user_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '55555555-5555-4555-8555-555555555555',
              type: 'string',
            },
          },
          example: '55555555-5555-4555-8555-555555555555',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to remove JIT access' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseOpenapiRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/openapi',
  tags: ['Database'],
  summary: 'Get PostgREST OpenAPI spec',
  description:
    'Returns the PostgREST OpenAPI specification for the project. This is the replacement for querying `/rest/v1/` directly with the anon key.',
  operationId: 'v1-get-database-openapi',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      schema: z
        .string()
        .default('public')
        .exactOptional()
        .openapi({
          param: {
            name: 'schema',
            required: false,
            in: 'query',
            description: 'The database schema to generate the OpenAPI spec for',
            schema: { default: 'public', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to fetch PostgREST OpenAPI spec' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefFunctionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/functions',
  tags: ['Edge Functions'],
  summary: 'List all functions',
  description: "Returns all functions you've previously added to the specified project.",
  operationId: 'v1-list-all-functions',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FunctionResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's functions" },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefFunctionsRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/functions',
  tags: ['Edge Functions'],
  summary: 'Bulk update functions',
  description:
    'Bulk update functions. It will create a new function or replace existing. The operation is idempotent. NOTE: You will need to manually bump the version.',
  operationId: 'v1-bulk-update-functions',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BulkUpdateFunctionBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BulkUpdateFunctionResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    402: { description: 'Maximum number of functions reached for Plan' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update functions' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefFunctionsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/functions',
  tags: ['Edge Functions'],
  summary: 'Create a function',
  description:
    'This endpoint is deprecated - use the deploy endpoint. Creates a function and adds it to the specified project.',
  operationId: 'v1-create-a-function',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      slug: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'slug',
            required: false,
            in: 'query',
            schema: { pattern: '^[A-Za-z0-9_-]+$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            required: false,
            in: 'query',
            schema: { example: 'Hello World', type: 'string' },
          },
          example: 'Hello World',
        }),
      verify_jwt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'verify_jwt',
            required: false,
            in: 'query',
            schema: { example: true, type: 'string' },
          },
          example: true,
        }),
      import_map: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'import_map',
            required: false,
            in: 'query',
            schema: { example: false, type: 'string' },
          },
          example: false,
        }),
      entrypoint_path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'entrypoint_path',
            required: false,
            in: 'query',
            schema: { example: 'index.ts', type: 'string' },
          },
          example: 'index.ts',
        }),
      import_map_path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'import_map_path',
            required: false,
            in: 'query',
            schema: { example: 'import_map.json', type: 'string' },
          },
          example: 'import_map.json',
        }),
      ezbr_sha256: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ezbr_sha256',
            required: false,
            in: 'query',
            schema: {
              example: '44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7',
              type: 'string',
            },
          },
          example: '44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7',
        }),
    }),
    body: {
      content: {
        'application/vnd.denoland.eszip': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/json': { schema: V1CreateFunctionBodySchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: FunctionResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    402: { description: 'Maximum number of functions reached for Plan' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to create project's function" },
  },
  deprecated: true,
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefFunctionsDeployRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/functions/deploy',
  tags: ['Edge Functions'],
  summary: 'Deploy a function',
  description: 'A new endpoint to deploy functions. It will create if function does not exist.',
  operationId: 'v1-deploy-a-function',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      slug: z
        .string()
        .regex(/^[A-Za-z][A-Za-z0-9_-]*$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'slug',
            required: false,
            in: 'query',
            schema: { pattern: '^[A-Za-z][A-Za-z0-9_-]*$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
      bundleOnly: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bundleOnly',
            required: false,
            in: 'query',
            schema: { example: false, type: 'string' },
          },
          example: false,
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(z.file().openapi({ type: 'string', format: 'binary' })),
              ),
              metadata: z
                .object({
                  entrypoint_path: z.string(),
                  import_map_path: z.string().exactOptional(),
                  static_patterns: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  verify_jwt: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  name: z.string().exactOptional(),
                })
                .openapi({ required: ['entrypoint_path'] }),
            })
            .openapi({
              required: ['file', 'metadata'],
              example: {
                file: ['./supabase/functions/hello-world/index.ts'],
                metadata: { entrypoint_path: 'index.ts', verify_jwt: true, name: 'Hello World' },
              },
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: DeployFunctionResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    402: { description: 'Maximum number of functions reached for Plan' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to deploy function' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefFunctionsFunctionSlugRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/functions/{function_slug}',
  tags: ['Edge Functions'],
  summary: 'Retrieve a function',
  description: 'Retrieves a function with the specified slug and project.',
  operationId: 'v1-get-a-function',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      function_slug: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .openapi({
          param: {
            name: 'function_slug',
            required: true,
            in: 'path',
            description: 'Function slug',
            schema: { pattern: '^[A-Za-z0-9_-]+$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: FunctionSlugResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve function with given slug' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefFunctionsFunctionSlugRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/functions/{function_slug}',
  tags: ['Edge Functions'],
  summary: 'Delete a function',
  description: 'Deletes a function with the specified slug from the specified project.',
  operationId: 'v1-delete-a-function',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      function_slug: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .openapi({
          param: {
            name: 'function_slug',
            required: true,
            in: 'path',
            description: 'Function slug',
            schema: { pattern: '^[A-Za-z0-9_-]+$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
    }),
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to delete function with given slug' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefFunctionsFunctionSlugRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/functions/{function_slug}',
  tags: ['Edge Functions'],
  summary: 'Update a function',
  description: 'Updates a function with the specified slug and project.',
  operationId: 'v1-update-a-function',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      function_slug: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .openapi({
          param: {
            name: 'function_slug',
            required: true,
            in: 'path',
            description: 'Function slug',
            schema: { pattern: '^[A-Za-z0-9_-]+$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
    }),
    query: z.object({
      slug: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'slug',
            required: false,
            in: 'query',
            schema: { pattern: '^[A-Za-z0-9_-]+$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            required: false,
            in: 'query',
            schema: { example: 'Hello World', type: 'string' },
          },
          example: 'Hello World',
        }),
      verify_jwt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'verify_jwt',
            required: false,
            in: 'query',
            schema: { example: true, type: 'string' },
          },
          example: true,
        }),
      import_map: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'import_map',
            required: false,
            in: 'query',
            schema: { example: false, type: 'string' },
          },
          example: false,
        }),
      entrypoint_path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'entrypoint_path',
            required: false,
            in: 'query',
            schema: { example: 'index.ts', type: 'string' },
          },
          example: 'index.ts',
        }),
      import_map_path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'import_map_path',
            required: false,
            in: 'query',
            schema: { example: 'import_map.json', type: 'string' },
          },
          example: 'import_map.json',
        }),
      ezbr_sha256: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ezbr_sha256',
            required: false,
            in: 'query',
            schema: {
              example: '44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7',
              type: 'string',
            },
          },
          example: '44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7',
        }),
    }),
    body: {
      content: {
        'application/vnd.denoland.eszip': { schema: V1UpdateFunctionBodyEszipSchema },
        'application/json': { schema: V1UpdateFunctionBodyJsonSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: FunctionSlugResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update function with given slug' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefFunctionsFunctionSlugBodyRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/functions/{function_slug}/body',
  tags: ['Edge Functions'],
  summary: 'Retrieve a function body',
  description: 'Retrieves a function body for the specified slug and project.',
  operationId: 'v1-get-a-function-body',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      function_slug: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .openapi({
          param: {
            name: 'function_slug',
            required: true,
            in: 'path',
            description: 'Function slug',
            schema: { pattern: '^[A-Za-z0-9_-]+$', example: 'hello-world', type: 'string' },
          },
          example: 'hello-world',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: StreamableFileSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve function body with given slug' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefStorageBucketsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/storage/buckets',
  tags: ['Storage'],
  summary: 'Lists all buckets',
  operationId: 'v1-list-all-buckets',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(V1StorageBucketResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get list of buckets' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigDiskRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/disk',
  tags: ['Projects'],
  summary: 'Get database disk attributes',
  operationId: 'v1-get-database-disk',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DiskResponseOutputSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get database disk attributes' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefConfigDiskRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/config/disk',
  tags: ['Projects'],
  summary: 'Modify database disk',
  operationId: 'v1-modify-database-disk',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: DiskRequestBodySchema } }, required: true },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to modify database disk' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigDiskUtilRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/disk/util',
  tags: ['Projects'],
  summary: 'Get disk utilization',
  operationId: 'v1-get-disk-utilization',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DiskUtilMetricsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get disk utilization' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigDiskAutoscaleRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/disk/autoscale',
  tags: ['Projects'],
  summary: 'Gets project disk autoscale config',
  operationId: 'v1-get-project-disk-autoscale-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DiskAutoscaleConfigOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get project disk autoscale config' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigStorageRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/storage',
  tags: ['Storage'],
  summary: "Gets project's storage config",
  operationId: 'v1-get-storage-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: StorageConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's storage config" },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefConfigStorageRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/config/storage',
  tags: ['Storage'],
  summary: "Updates project's storage config",
  operationId: 'v1-update-storage-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateStorageConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's storage config" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigDatabasePgbouncerRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/database/pgbouncer',
  tags: ['Database'],
  summary: "Get project's pgbouncer config",
  operationId: 'v1-get-project-pgbouncer-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1PgbouncerConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's pgbouncer config" },
  },
})

export const getV1ProjectsRefConfigDatabasePoolerRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/database/pooler',
  tags: ['Database'],
  summary: "Gets project's supavisor config",
  operationId: 'v1-get-pooler-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SupavisorConfigResponseOutputSchema) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's supavisor config" },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefConfigDatabasePoolerRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/config/database/pooler',
  tags: ['Database'],
  summary: "Updates project's supavisor config",
  operationId: 'v1-update-pooler-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSupavisorConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateSupavisorConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's supavisor config" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigDatabasePostgresRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/database/postgres',
  tags: ['Database'],
  summary: "Gets project's Postgres config",
  operationId: 'v1-get-postgres-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PostgresConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to retrieve project's Postgres config" },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefConfigDatabasePostgresRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/config/database/postgres',
  tags: ['Database'],
  summary: "Updates project's Postgres config",
  operationId: 'v1-update-postgres-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePostgresConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PostgresConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: "Failed to update project's Postgres config" },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigRealtimeRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/realtime',
  tags: ['Realtime'],
  summary: 'Gets realtime configuration',
  operationId: 'v1-get-realtime-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: "Gets project's realtime configuration",
      content: { 'application/json': { schema: RealtimeConfigResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefConfigRealtimeRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/config/realtime',
  tags: ['Realtime'],
  summary: 'Updates realtime configuration',
  operationId: 'v1-update-realtime-config',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRealtimeConfigBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefConfigRealtimeShutdownRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/config/realtime/shutdown',
  tags: ['Realtime'],
  summary: 'Shutdowns realtime connections for a project',
  operationId: 'v1-shutdown-realtime',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    204: { description: 'Realtime connections shutdown successfully' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: { description: 'Tenant not found' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthSsoProvidersRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/sso/providers',
  tags: ['Auth'],
  summary: 'Lists all SSO providers',
  operationId: 'v1-list-all-sso-provider',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListProvidersResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: { description: 'SAML 2.0 support is not enabled for this project' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefConfigAuthSsoProvidersRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/config/auth/sso/providers',
  tags: ['Auth'],
  summary: 'Creates a new SSO provider',
  operationId: 'v1-create-a-sso-provider',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: CreateProviderBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateProviderResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: { description: 'SAML 2.0 support is not enabled for this project' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}',
  tags: ['Auth'],
  summary: 'Gets a SSO provider by its UUID',
  operationId: 'v1-get-a-sso-provider',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      provider_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'provider_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '77777777-7777-4777-8777-777777777777',
              type: 'string',
            },
          },
          example: '77777777-7777-4777-8777-777777777777',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetProviderResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: {
      description:
        'Either SAML 2.0 was not enabled for this project, or the provider does not exist',
    },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}',
  tags: ['Auth'],
  summary: 'Updates a SSO provider by its UUID',
  operationId: 'v1-update-a-sso-provider',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      provider_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'provider_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '77777777-7777-4777-8777-777777777777',
              type: 'string',
            },
          },
          example: '77777777-7777-4777-8777-777777777777',
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateProviderBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateProviderResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: {
      description:
        'Either SAML 2.0 was not enabled for this project, or the provider does not exist',
    },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}',
  tags: ['Auth'],
  summary: 'Removes a SSO provider by its UUID',
  operationId: 'v1-delete-a-sso-provider',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
      provider_id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .openapi({
          param: {
            name: 'provider_id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              example: '77777777-7777-4777-8777-777777777777',
              type: 'string',
            },
          },
          example: '77777777-7777-4777-8777-777777777777',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteProviderResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    404: {
      description:
        'Either SAML 2.0 was not enabled for this project, or the provider does not exist',
    },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseBackupsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/backups',
  tags: ['Database'],
  summary: 'Lists all backups',
  operationId: 'v1-list-all-backups',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1BackupsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get backups' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseBackupsRestorePitrRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/backups/restore-pitr',
  tags: ['Database'],
  summary: 'Restores a PITR backup for a database',
  operationId: 'v1-restore-pitr-backup',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: V1RestorePitrBodySchema } }, required: true },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseBackupsRestorePointRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/backups/restore-point',
  tags: ['Database'],
  summary: 'Get restore points for project',
  operationId: 'v1-get-restore-point',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    query: z.object({
      name: z
        .string()
        .max(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            required: false,
            in: 'query',
            schema: { maxLength: 20, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1RestorePointResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to get requested restore points' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseBackupsRestorePointRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/backups/restore-point',
  tags: ['Database'],
  summary: 'Initiates a creation of a restore point for a database',
  operationId: 'v1-create-restore-point',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1RestorePointPostBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: V1RestorePointResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseBackupsRestoreRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/backups/restore',
  tags: ['Database'],
  summary: 'Restores a physical backup for a database',
  operationId: 'v1-restore-physical-backup',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1RestoreBackupBodySchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1ProjectsRefDatabaseBackupsScheduleRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{ref}/database/backups/schedule',
  tags: ['Database'],
  summary: 'Gets the backup schedule for a project',
  operationId: 'v1-get-backup-schedule',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1BackupScheduleResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    402: {
      description: 'This feature requires the Enterprise organization plan.',
      content: { 'application/json': { schema: PlanGateErrorBodySchema } },
    },
    403: { description: 'Forbidden action' },
    404: { description: 'Project or backup schedule not found' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve backup schedule' },
  },
  security: [{ bearer: [] }],
})

export const patchV1ProjectsRefDatabaseBackupsScheduleRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{ref}/database/backups/schedule',
  tags: ['Database'],
  summary: 'Updates the backup schedule time for a project',
  description:
    'Sets the time at which the daily backup runs. The change takes effect on the next backup window that includes the new time. If the new time has already passed for today, the first backup at the new time will occur the following day. It can only be updated 3 times per 24 hours.',
  operationId: 'v1-update-backup-schedule',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: {
      content: { 'application/json': { schema: V1UpdateBackupScheduleBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1BackupScheduleResponseOutputSchema } },
    },
    400: { description: 'Invalid schedule_for format' },
    401: { description: 'Unauthorized' },
    402: {
      description: 'This feature requires the Enterprise organization plan.',
      content: { 'application/json': { schema: PlanGateErrorBodySchema } },
    },
    403: { description: 'Forbidden action' },
    404: { description: 'Project or backup schedule not found' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to update backup schedule' },
  },
  security: [{ bearer: [] }],
})

export const postV1ProjectsRefDatabaseBackupsUndoRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{ref}/database/backups/undo',
  tags: ['Database'],
  summary: 'Initiates an undo to a given restore point',
  operationId: 'v1-undo',
  request: {
    params: z.object({
      ref: z
        .string()
        .regex(/^[a-z]+$/)
        .length(20)
        .openapi({
          param: {
            name: 'ref',
            required: true,
            in: 'path',
            description: 'Project ref',
            schema: {
              minLength: 20,
              maxLength: 20,
              pattern: '^[a-z]+$',
              example: 'abcdefghijklmnopqrst',
              type: 'string',
            },
          },
          example: 'abcdefghijklmnopqrst',
        }),
    }),
    body: { content: { 'application/json': { schema: V1UndoBodySchema } }, required: true },
  },
  responses: {
    201: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1OrganizationsSlugEntitlementsRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{slug}/entitlements',
  tags: ['Organizations'],
  summary: 'Get entitlements for an organization',
  description:
    'Returns the entitlements available to the organization based on their plan and any overrides.',
  operationId: 'v1-get-organization-entitlements',
  request: {
    params: z.object({
      slug: z
        .string()
        .regex(/^[\w-]+$/)
        .openapi({
          param: {
            name: 'slug',
            required: true,
            in: 'path',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1ListEntitlementsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1OrganizationsSlugMembersRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{slug}/members',
  tags: ['Organizations'],
  summary: 'List members of an organization',
  operationId: 'v1-list-organization-members',
  request: {
    params: z.object({
      slug: z
        .string()
        .regex(/^[\w-]+$/)
        .openapi({
          param: {
            name: 'slug',
            required: true,
            in: 'path',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.array(V1OrganizationMemberResponseOutputSchema) },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1OrganizationsSlugRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{slug}',
  tags: ['Organizations'],
  summary: 'Gets information about the organization',
  operationId: 'v1-get-an-organization',
  request: {
    params: z.object({
      slug: z
        .string()
        .regex(/^[\w-]+$/)
        .openapi({
          param: {
            name: 'slug',
            required: true,
            in: 'path',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: V1OrganizationSlugResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1OrganizationsSlugProjectClaimTokenRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{slug}/project-claim/{token}',
  tags: ['Organizations'],
  summary: 'Gets project details for the specified organization and claim token',
  operationId: 'v1-get-organization-project-claim',
  request: {
    params: z.object({
      slug: z
        .string()
        .regex(/^[\w-]+$/)
        .openapi({
          param: {
            name: 'slug',
            required: true,
            in: 'path',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            required: true,
            in: 'path',
            schema: { example: '0123456789abcdef0123456789abcdef01234567', type: 'string' },
          },
          example: '0123456789abcdef0123456789abcdef01234567',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OrganizationProjectClaimResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const postV1OrganizationsSlugProjectClaimTokenRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/{slug}/project-claim/{token}',
  tags: ['Organizations'],
  summary: 'Claims project for the specified organization',
  operationId: 'v1-claim-project-for-organization',
  request: {
    params: z.object({
      slug: z
        .string()
        .regex(/^[\w-]+$/)
        .openapi({
          param: {
            name: 'slug',
            required: true,
            in: 'path',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            required: true,
            in: 'path',
            schema: { example: '0123456789abcdef0123456789abcdef01234567', type: 'string' },
          },
          example: '0123456789abcdef0123456789abcdef01234567',
        }),
    }),
  },
  responses: {
    204: { description: '' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
  },
  security: [{ bearer: [] }],
})

export const getV1OrganizationsSlugProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{slug}/projects',
  tags: ['Projects'],
  summary: 'Gets all projects for the given organization',
  description:
    'Returns a paginated list of projects for the specified organization.\n\nThis endpoint uses offset-based pagination. Use the `offset` parameter to skip a number of projects and the `limit` parameter to control the number of projects returned per page.',
  operationId: 'v1-get-all-projects-for-organization',
  request: {
    params: z.object({
      slug: z
        .string()
        .regex(/^[\w-]+$/)
        .openapi({
          param: {
            name: 'slug',
            required: true,
            in: 'path',
            description: 'Organization slug',
            schema: { pattern: '^[\\w-]+$', example: 'tsrqponmlkjihgfedcba', type: 'string' },
          },
          example: 'tsrqponmlkjihgfedcba',
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9007199254740991),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'Number of projects to skip',
            schema: {
              minimum: 0,
              maximum: 9007199254740991,
              default: 0,
              example: 0,
              type: 'integer',
            },
          },
          example: 0,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of projects to return per page',
            schema: { minimum: 1, maximum: 100, default: 100, example: 20, type: 'integer' },
          },
          example: 20,
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            required: false,
            in: 'query',
            description: 'Search projects by name',
            schema: { example: 'acme', type: 'string' },
          },
          example: 'acme',
        }),
      sort: z
        .enum(['name_asc', 'name_desc', 'created_asc', 'created_desc'])
        .default('name_asc')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            required: false,
            in: 'query',
            description: 'Sort order for projects',
            schema: {
              default: 'name_asc',
              example: 'created_desc',
              type: 'string',
              enum: ['name_asc', 'name_desc', 'created_asc', 'created_desc'],
            },
          },
          example: 'created_desc',
        }),
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            required: false,
            in: 'query',
            description:
              'A comma-separated list of project statuses to filter by.\n\nThe following values are supported: `ACTIVE_HEALTHY`, `INACTIVE`.',
            schema: { example: 'ACTIVE_HEALTHY,INACTIVE', type: 'string' },
          },
          example: 'ACTIVE_HEALTHY,INACTIVE',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OrganizationProjectsResponseOutputSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden action' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Failed to retrieve projects' },
  },
  security: [{ bearer: [] }],
})
