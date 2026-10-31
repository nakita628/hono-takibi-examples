import { createRoute, z } from '@hono/zod-openapi'

const LifecycleSchema = z
  .enum(['queued', 'scheduled', 'not_run', 'not_running', 'running', 'finished'])
  .openapi('Lifecycle')

const StatusSchema = z
  .enum([
    'retried',
    'canceled',
    'infrastructure_fail',
    'timedout',
    'not_run',
    'running',
    'failed',
    'queued',
    'scheduled',
    'not_running',
    'no_tests',
    'fixed',
    'success',
  ])
  .openapi('Status')

const PreviousBuildSchema = z
  .object({
    build_num: z.int().exactOptional(),
    build_time_millis: z.int().exactOptional(),
    status: StatusSchema.exactOptional(),
  })
  .openapi({ description: 'previous build', required: [] })
  .openapi('PreviousBuild')

type BuildType = {
  body?: string
  branch?: string
  build_time_millis?: number
  build_url?: string
  committer_email?: string
  committer_name?: string
  dont_build?: string | null
  lifecycle?: z.infer<typeof LifecycleSchema>
  previous?: z.infer<typeof PreviousBuildSchema>
  queued_at?: string
  reponame?: string
  retry_of?: number | null
  start_time?: string
  stop_time?: string
  subject?: string
  username?: string
  vcs_url?: string
  why?: string
}

const ArtifactSchema = z
  .object({
    node_index: z.int().exactOptional(),
    path: z.string().exactOptional(),
    pretty_path: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Artifact')

const ArtifactsSchema = z.array(ArtifactSchema).openapi('Artifacts')

const AwsSchema = z
  .object({ keypair: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Aws')

const BuildSchema: z.ZodType<BuildType> = z
  .lazy(() =>
    z
      .object({
        body: z.string().exactOptional().openapi({ description: 'commit message body' }),
        branch: z.string().exactOptional(),
        build_time_millis: z.int().exactOptional(),
        build_url: z.url().exactOptional(),
        committer_email: z.email().exactOptional(),
        committer_name: z.string().exactOptional(),
        dont_build: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "reason why we didn't build, if we didn't build" }),
        lifecycle: LifecycleSchema.exactOptional(),
        previous: PreviousBuildSchema.exactOptional(),
        queued_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'time build was queued' }),
        reponame: z.string().exactOptional(),
        retry_of: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'build_num of the build this is a retry of' }),
        start_time: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'time build started' }),
        stop_time: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'time build finished' }),
        subject: z.string().exactOptional(),
        username: z.string().exactOptional(),
        vcs_url: z.url().exactOptional(),
        why: z
          .string()
          .exactOptional()
          .openapi({ description: 'short string explaining the reason we built' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Build')

const Sha1Schema = z.string().openapi('Sha1')

const CommitDetailSchema = z
  .object({
    author_date: z.iso.datetime({ offset: true }).exactOptional(),
    author_email: z.email().exactOptional(),
    author_login: z.string().exactOptional(),
    author_name: z.string().exactOptional(),
    body: z.string().exactOptional(),
    commit: Sha1Schema.exactOptional(),
    commit_url: z.url().exactOptional(),
    committer_date: z.iso.datetime({ offset: true }).exactOptional(),
    committer_email: z.email().exactOptional(),
    committer_login: z.string().exactOptional(),
    committer_name: z.string().exactOptional(),
    subject: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommitDetail')

const CommitDetailsSchema = z.array(CommitDetailSchema).openapi('CommitDetails')

const UserSchema = z
  .object({
    admin: z.boolean().exactOptional(),
    all_emails: z.array(z.email()).exactOptional(),
    analytics_id: z.string().exactOptional(),
    avatar_url: z.url().exactOptional(),
    basic_email_prefs: z.string().exactOptional(),
    bitbucket: z.int().nullable().exactOptional(),
    bitbucket_authorized: z.boolean().exactOptional(),
    containers: z.int().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    days_left_in_trial: z.int().exactOptional(),
    dev_admin: z.boolean().exactOptional(),
    enrolled_betas: z.array(z.string()).exactOptional(),
    github_id: z.int().nullable().exactOptional(),
    github_oauth_scopes: z.array(z.string()).exactOptional(),
    gravatar_id: z.int().nullable().exactOptional(),
    heroku_api_key: z.string().nullable().exactOptional(),
    in_beta_program: z.boolean().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    organization_prefs: z.object({}).exactOptional(),
    parallelism: z.int().exactOptional(),
    plan: z.string().nullable().exactOptional(),
    projects: z.object({}).exactOptional(),
    pusher_id: z.string().exactOptional(),
    selected_email: z.email().exactOptional(),
    sign_in_count: z.int().exactOptional(),
    trial_end: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const BuildDetailSchema = z
  .object({
    all_commit_details: CommitDetailsSchema.exactOptional(),
    compare: z.url().nullable().exactOptional(),
    job_name: z.string().exactOptional(),
    node: z.any().nullable().exactOptional(),
    previous_successful_build: PreviousBuildSchema.exactOptional(),
    retries: z.boolean().nullable().exactOptional(),
    ssh_enabled: z.boolean().nullable().exactOptional(),
    timedout: z.boolean().nullable().exactOptional(),
    usage_queued_at: z.iso.datetime({ offset: true }).exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'previous build', required: [] })
  .openapi('BuildDetail')

const BuildParametersSchema = z
  .object({})
  .openapi({
    description:
      'Additional environment variables to inject into the build environment. A map of names to values.\n',
  })
  .openapi('BuildParameters')

const OutcomeSchema = z
  .enum(['canceled', 'infrastructure_fail', 'timedout', 'failed', 'no_tests', 'success'])
  .openapi('Outcome')

const BuildSummarySchema = z
  .object({
    added_at: z.iso.datetime({ offset: true }).exactOptional(),
    build_num: z.int().exactOptional(),
    outcome: OutcomeSchema.exactOptional(),
    pushed_at: z.iso.datetime({ offset: true }).exactOptional(),
    status: StatusSchema.exactOptional(),
    vcs_revision: Sha1Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuildSummary')

const BuildsSchema = z.array(BuildSchema).openapi('Builds')

const EnvvarSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Envvar')

const EnvvarsSchema = z.array(EnvvarSchema).openapi('Envvars')

const KeySchema = z
  .object({
    fingerprint: z.string().exactOptional(),
    preferred: z.boolean().exactOptional(),
    public_key: z.string().exactOptional(),
    time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'when the key was issued' }),
    type: z
      .enum(['deploy-key', 'github-user-key'])
      .exactOptional()
      .openapi({ description: 'can be "deploy-key" or "github-user-key"\n' }),
  })
  .openapi({ required: [] })
  .openapi('Key')

const KeysSchema = z.array(KeySchema).openapi('Keys')

const ParallelSchema = z
  .string()
  .openapi({
    description:
      'The number of containers to use to run the build. Default is null and the project default is used.\n',
  })
  .openapi('Parallel')

const StringOrNullSchema = z.string().nullable().openapi('StringOrNull')

const ScopeSchema = z
  .enum([
    'write-settings',
    'view-builds',
    'read-settings',
    'trigger-builds',
    'all',
    'status',
    'none',
  ])
  .openapi('Scope')

const ProjectSchema = z
  .object({
    aws: AwsSchema.exactOptional(),
    branches: z.object({}).exactOptional(),
    campfire_notify_prefs: StringOrNullSchema.exactOptional(),
    campfire_room: StringOrNullSchema.exactOptional(),
    campfire_subdomain: StringOrNullSchema.exactOptional(),
    campfire_token: StringOrNullSchema.exactOptional(),
    compile: z.string().exactOptional(),
    default_branch: z.string().exactOptional(),
    dependencies: z.string().exactOptional(),
    extra: z.string().exactOptional(),
    feature_flags: z
      .object({
        'build-fork-prs': z.boolean().exactOptional(),
        fleet: z.boolean().nullable().exactOptional(),
        junit: z.boolean().exactOptional(),
        oss: z.boolean().exactOptional(),
        osx: z.boolean().exactOptional(),
        'set-github-status': z.boolean().exactOptional(),
        'trusty-beta': z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    flowdock_api_token: StringOrNullSchema.exactOptional(),
    followed: z.boolean().exactOptional(),
    has_usable_key: z.boolean().exactOptional(),
    heroku_deploy_user: StringOrNullSchema.exactOptional(),
    hipchat_api_token: StringOrNullSchema.exactOptional(),
    hipchat_notify: StringOrNullSchema.exactOptional(),
    hipchat_notify_prefs: z.string().nullable().exactOptional(),
    hipchat_room: StringOrNullSchema.exactOptional(),
    irc_channel: StringOrNullSchema.exactOptional(),
    irc_keyword: StringOrNullSchema.exactOptional(),
    irc_notify_prefs: StringOrNullSchema.exactOptional(),
    irc_password: StringOrNullSchema.exactOptional(),
    irc_server: StringOrNullSchema.exactOptional(),
    irc_username: StringOrNullSchema.exactOptional(),
    language: z.string().exactOptional(),
    oss: z.boolean().exactOptional(),
    parallel: z.int().exactOptional(),
    reponame: z.string().exactOptional(),
    scopes: z.array(ScopeSchema).exactOptional(),
    setup: z.string().exactOptional(),
    slack_api_token: StringOrNullSchema.exactOptional(),
    slack_channel: StringOrNullSchema.exactOptional(),
    slack_channel_override: StringOrNullSchema.exactOptional(),
    slack_notify_prefs: StringOrNullSchema.exactOptional(),
    slack_subdomain: StringOrNullSchema.exactOptional(),
    slack_webhook_url: z.url().exactOptional(),
    ssh_keys: z.array(z.string()).exactOptional(),
    test: z.string().exactOptional(),
    username: z.string().exactOptional(),
    vcs_type: z.string().exactOptional(),
    vcs_url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Project')

const ProjectsSchema = z.array(ProjectSchema).openapi('Projects')

const RevisionSchema = z
  .string()
  .openapi({
    description:
      'The specific revision to build.\nDefault is null and the head of the branch is used. Cannot be used with tag parameter.\n',
  })
  .openapi('Revision')

const TagSchema = z
  .string()
  .openapi({
    description: 'The tag to build. Default is null. Cannot be used with revision parameter.\n',
  })
  .openapi('Tag')

const TestsSchema = z
  .object({
    tests: z
      .array(
        z
          .object({
            classname: z.string().exactOptional(),
            file: z.string().exactOptional(),
            message: z.string().exactOptional(),
            name: z.string().exactOptional(),
            result: StatusSchema.exactOptional(),
            run_time: z.number().exactOptional(),
            source: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tests')

const EnvvarResponse = {
  description: 'XXX',
  content: { 'application/json': { schema: EnvvarSchema } },
}

const EnvvarsResponse = {
  description: 'XXX',
  content: { 'application/json': { schema: EnvvarsSchema } },
}

const KeyResponse = {
  description: 'checkout key',
  content: { 'application/json': { schema: KeySchema } },
}

const BranchParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The branch name should be url-encoded.\n',
      in: 'path',
      name: 'branch',
      required: true,
      schema: { type: 'string' },
    },
  })

const BuildNumParamsSchema = z
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
      description: 'XXXXXXXXXX\n',
      in: 'path',
      name: 'build_num',
      required: true,
      schema: { type: 'integer' },
    },
  })

const EnvvarNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'XXXXXXXXXX\n',
      in: 'path',
      name: 'name',
      required: true,
      schema: { type: 'string' },
    },
  })

const FilterParamsSchema = z
  .enum(['completed', 'successful', 'failed', 'running'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'Restricts which builds are returned.\nSet to "completed", "successful", "failed", "running", or defaults to no filter.\n',
      in: 'query',
      name: 'filter',
      schema: { enum: ['completed', 'successful', 'failed', 'running'], type: 'string' },
      required: false,
    },
  })

const FingerprintParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'XXXXXXXXXX\n',
      in: 'path',
      name: 'fingerprint',
      required: true,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(100),
  )
  .default(30)
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of builds to return. Maximum 100, defaults to 30.\n',
      in: 'query',
      name: 'limit',
      schema: { default: 30, maximum: 100, type: 'integer' },
      required: false,
    },
  })

const OffsetParamsSchema = z
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
  .exactOptional()
  .openapi({
    param: {
      description: 'The API returns builds starting from this offset, defaults to 0.\n',
      in: 'query',
      name: 'offset',
      schema: { default: 0, type: 'integer' },
      required: false,
    },
  })

const ProjectParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'XXXXXXXXX\n',
      in: 'path',
      name: 'project',
      required: true,
      schema: { type: 'string' },
    },
  })

const UsernameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'XXXXXXXXX\n',
      in: 'path',
      name: 'username',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApikeySecurityScheme = { in: 'query', name: 'circle-token', type: 'apiKey' }

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  description: 'Provides information about the signed in user.\n',
  responses: {
    200: { description: 'signed in user', content: { 'application/json': { schema: UserSchema } } },
  },
})

export const getProjectUsernameProjectRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}',
  description: 'Build summary for each of the last 30 builds for a single git repo.\n',
  request: {
    params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }),
    query: z.object({
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      filter: FilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Build summary for each of the last 30 builds',
      content: { 'application/json': { schema: BuildsSchema } },
    },
  },
})

export const postProjectUsernameProjectRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}',
  description: 'Triggers a new build, returns a summary of the build.\n',
  request: {
    params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              build_parameters: BuildParametersSchema.exactOptional(),
              parallel: ParallelSchema.exactOptional(),
              revision: RevisionSchema.exactOptional(),
              tag: TagSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'returns a summary of the build',
      content: { 'application/json': { schema: BuildSummarySchema } },
    },
  },
})

export const deleteProjectUsernameProjectBuildCacheRoute = createRoute({
  method: 'delete',
  path: '/project/{username}/{project}/build-cache',
  description: 'Clears the cache for a project.\n',
  request: { params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }) },
  responses: {
    200: {
      description: 'status message',
      content: {
        'application/json': {
          schema: z.object({ status: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectUsernameProjectCheckoutKeyRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/checkout-key',
  description: 'Lists checkout keys.\n',
  request: { params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }) },
  responses: {
    200: { description: 'checkout keys', content: { 'application/json': { schema: KeysSchema } } },
  },
})

export const postProjectUsernameProjectCheckoutKeyRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}/checkout-key',
  description: 'Creates a new checkout key.\nOnly usable with a user API token.\n',
  request: {
    params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }),
    body: {
      description: "The type of key to create. Can be 'deploy-key' or 'github-user-key'.\n",
      content: { 'application/json': { schema: z.enum(['deploy-key', 'github-user-key']) } },
    },
  },
  responses: { 200: KeyResponse },
})

export const getProjectUsernameProjectCheckoutKeyFingerprintRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/checkout-key/{fingerprint}',
  description: 'Get a checkout key.\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      fingerprint: FingerprintParamsSchema,
    }),
  },
  responses: { 200: KeyResponse },
})

export const deleteProjectUsernameProjectCheckoutKeyFingerprintRoute = createRoute({
  method: 'delete',
  path: '/project/{username}/{project}/checkout-key/{fingerprint}',
  description: 'Delete a checkout key.\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      fingerprint: FingerprintParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'status message',
      content: {
        'application/json': {
          schema: z.object({ message: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectUsernameProjectEnvvarRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/envvar',
  description: 'Lists the environment variables for :project\n',
  request: { params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }) },
  responses: { 200: EnvvarsResponse },
})

export const postProjectUsernameProjectEnvvarRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}/envvar',
  description: 'Creates a new environment variable\n',
  request: { params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }) },
  responses: { 200: EnvvarResponse },
})

export const getProjectUsernameProjectEnvvarNameRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/envvar/{name}',
  description: 'Gets the hidden value of environment variable :name\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      name: EnvvarNameParamsSchema,
    }),
  },
  responses: { 200: EnvvarResponse },
})

export const deleteProjectUsernameProjectEnvvarNameRoute = createRoute({
  method: 'delete',
  path: '/project/{username}/{project}/envvar/{name}',
  description: "Deletes the environment variable named ':name'\n",
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      name: EnvvarNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Deletes the environment variable named ':name'\n",
      content: {
        'application/json': {
          schema: z.object({ message: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postProjectUsernameProjectSshKeyRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}/ssh-key',
  description:
    'Create an ssh key used to access external systems that require SSH key-based authentication\n',
  request: {
    params: z.object({ username: UsernameParamsSchema, project: ProjectParamsSchema }),
    headers: z.object({
      'Content-Type': z
        .literal('application/json')
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { enum: ['application/json'], type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hostname: z.string().exactOptional(),
              private_key: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'no response expected',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
          examples: { response: { value: { message: 'a private key is required' } } },
        },
      },
    },
  },
})

export const postProjectUsernameProjectTreeBranchRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}/tree/{branch}',
  description:
    'Triggers a new build, returns a summary of the build.\nOptional build parameters can be set using an experimental API.\n\nNote: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      branch: BranchParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              build_parameters: BuildParametersSchema.exactOptional(),
              parallel: ParallelSchema.exactOptional(),
              revision: RevisionSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'returns a summary of the build',
      content: { 'application/json': { schema: BuildSchema } },
      headers: z.object({
        Location: {
          schema: z
            .url()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getProjectUsernameProjectBuildNumRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/{build_num}',
  description:
    "Full details for a single build. The response includes all of the fields from the build summary.\nThis is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.\n",
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      build_num: BuildNumParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Full details for a single build',
      content: { 'application/json': { schema: BuildDetailSchema } },
    },
  },
})

export const getProjectUsernameProjectBuildNumArtifactsRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/{build_num}/artifacts',
  description: 'List the artifacts produced by a given build.\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      build_num: BuildNumParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List the artifacts produced by a given build',
      content: { 'application/json': { schema: ArtifactsSchema } },
    },
  },
})

export const postProjectUsernameProjectBuildNumCancelRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}/{build_num}/cancel',
  description: 'Cancels the build, returns a summary of the build.\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      build_num: BuildNumParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'returns a summary of the build',
      content: { 'application/json': { schema: BuildSchema } },
    },
  },
})

export const postProjectUsernameProjectBuildNumRetryRoute = createRoute({
  method: 'post',
  path: '/project/{username}/{project}/{build_num}/retry',
  description: 'Retries the build, returns a summary of the new build.\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      build_num: BuildNumParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'returns a summary of the new build',
      content: { 'application/json': { schema: BuildSchema } },
    },
  },
})

export const getProjectUsernameProjectBuildNumTestsRoute = createRoute({
  method: 'get',
  path: '/project/{username}/{project}/{build_num}/tests',
  description:
    'Provides test metadata for a build\nNote: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)\n',
  request: {
    params: z.object({
      username: UsernameParamsSchema,
      project: ProjectParamsSchema,
      build_num: BuildNumParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'test metadata for a build\n',
      content: { 'application/json': { schema: TestsSchema } },
    },
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  description:
    "List of all the projects you're following on CircleCI, with build information organized by branch.\n",
  responses: {
    200: {
      description: "List of all the projects you're following on CircleCI\n",
      content: { 'application/json': { schema: ProjectsSchema } },
    },
  },
})

export const getRecentBuildsRoute = createRoute({
  method: 'get',
  path: '/recent-builds',
  description: 'Build summary for each of the last 30 recent builds, ordered by build_num.\n',
  request: { query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }) },
  responses: {
    200: {
      description: 'Build summary for each of the last 30 recent builds',
      content: { 'application/json': { schema: BuildsSchema } },
    },
  },
})

export const postUserHerokuKeyRoute = createRoute({
  method: 'post',
  path: '/user/heroku-key',
  description: 'Adds your Heroku API key to CircleCI, takes apikey as form param name.\n',
  responses: {
    403: {
      description: 'Your Heroku API key is invalid.\n',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})
