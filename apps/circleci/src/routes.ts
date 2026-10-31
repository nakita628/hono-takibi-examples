import { createRoute, z } from '@hono/zod-openapi'

const JSONDurationSchema = z
  .string()
  .regex(/^([0-9]+(ms|s|m|h|d|w)){1,7}$/)
  .openapi('JSONDuration')

const ClaimResponseSchema = z
  .object({
    audience: z.array(z.string()).exactOptional(),
    audience_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    org_id: z.uuid(),
    project_id: z.uuid().exactOptional(),
    ttl: JSONDurationSchema.exactOptional(),
    ttl_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['org_id'] })
  .openapi('ClaimResponse')

const PatchClaimsRequestSchema = z
  .object({
    audience: z.array(z.string()).exactOptional(),
    ttl: JSONDurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchClaimsRequest')

const BundleDiffSchema = z
  .object({
    created: z.array(z.string().openapi({ description: 'policy names' })).exactOptional(),
    deleted: z.array(z.string().openapi({ description: 'policy names' })).exactOptional(),
    modified: z.array(z.string().openapi({ description: 'policy names' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BundleDiff')

const BundlePayloadSchema = z
  .object({
    policies: z
      .record(z.string(), z.string().openapi({ description: 'policy content' }))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BundlePayload')

const ViolationSchema = z
  .object({ reason: z.string(), rule: z.string() })
  .openapi({ required: ['rule', 'reason'] })
  .openapi('Violation')

const DecisionSchema = z
  .object({
    enabled_rules: z.array(z.string()).exactOptional(),
    hard_failures: z.array(ViolationSchema).exactOptional(),
    reason: z.string().exactOptional(),
    soft_failures: z.array(ViolationSchema).exactOptional(),
    status: z.string(),
  })
  .openapi({ required: ['status'] })
  .openapi('Decision')

const DecisionLogSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    decision: DecisionSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    metadata: z
      .object({
        build_number: z.int().exactOptional(),
        project_id: z.uuid().exactOptional(),
        ssh_rerun: z.boolean().exactOptional(),
        vcs: z
          .object({
            branch: z.string().exactOptional(),
            origin_repository_url: z.string().exactOptional(),
            release_tag: z.string().exactOptional(),
            target_repository_url: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    policies: z
      .record(z.string(), z.string().length(128))
      .exactOptional()
      .openapi({
        description: 'policy-name-to-hash-map',
        example: {
          policy_name1:
            '1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75',
          policy_name2:
            '5267768822ee624d48fce15ec5ca79cbd602cb7f4c2157a516556991f22ef8c7b5ef7b18d1ff41c59370efb0858651d44a936c11b7b144c48fe04df3c6a3e8da',
        },
      }),
    time_taken_ms: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DecisionLog')

const DecisionSettingsSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DecisionSettings')

const PolicySchema = z
  .object({
    content: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_by: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Policy')

const PolicyBundleSchema = z
  .record(
    z.string(),
    z.unknown().superRefine((val, ctx) => {
      if (Array.isArray(val)) {
        {
          const Schema = PolicySchema
          for (let i = 0; i < val.length; i++) {
            if (!Schema.safeParse(val[i]).success) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        }
      }
    }),
  )
  .openapi('PolicyBundle')

const GroupSchema = z
  .strictObject({
    id: z.uuid().exactOptional().openapi({ description: 'Unique identifier for group' }),
    name: z.string().exactOptional().openapi({ description: 'Name of group' }),
    description: z.string().exactOptional().openapi({ description: 'Description field on group' }),
  })
  .openapi({ required: [] })
  .openapi('Group')

const GroupsSchema = z
  .strictObject({
    items: z.array(GroupSchema).exactOptional(),
    next_page_token: z.string().nullable().exactOptional(),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Groups')

const ContextListSchema = z
  .strictObject({
    items: z.array(
      z
        .strictObject({
          id: z.uuid().openapi({ description: 'The unique ID of the context.' }),
          name: z.string().openapi({ description: 'The user defined name of the context.' }),
          created_at: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The date and time the context was created.',
              example: '2015-09-21T17:29:21.042Z',
            }),
        })
        .openapi({ required: ['id', 'name', 'created_at'], title: 'Context' }),
    ),
    next_page_token: z
      .string()
      .nullable()
      .openapi({
        description:
          'A token to pass as a `page-token` query parameter to return the next page of results.',
      }),
  })
  .openapi({ required: ['items', 'next_page_token'] })
  .openapi('ContextList')

const ContextCreatedSchema = z
  .strictObject({
    name: z.string().openapi({ description: 'The user defined name of the context.' }),
    owner: z.xor([
      z
        .strictObject({
          id: z
            .uuid()
            .openapi({
              description:
                'The unique ID of the owner of the context. This is the organization ID. Specify either owner/organization ID or the owner/organization slug. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.',
            }),
          type: z
            .enum(['account', 'organization'])
            .exactOptional()
            .openapi({
              description:
                'The type of the owner. Defaults to "organization". Use "account" if you are using CircleCI server.',
              example: 'organization',
            }),
        })
        .openapi({ required: ['id'] }),
      z
        .strictObject({
          slug: z
            .string()
            .openapi({
              description:
                'A string that represents an organization. This is the organization slug. Specify either this or organization/owner ID. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.',
            }),
          type: z
            .literal('organization')
            .exactOptional()
            .openapi({
              description:
                'The type of owner. Defaults to "organization". Accounts are only used as context owners in server and must be specified by an id instead of a slug.',
            }),
        })
        .openapi({ required: ['slug'] }),
    ]),
  })
  .openapi({ required: ['name', 'owner'] })
  .openapi('ContextCreated')

const DeleteContextResponseSchema = z
  .strictObject({ message: z.string().openapi({ description: 'A human-readable message' }) })
  .openapi({ required: ['message'], description: 'message response', title: 'MessageResponse' })
  .openapi('DeleteContextResponse')

const ContextSchema = z
  .strictObject({
    id: z.uuid().openapi({ description: 'The unique ID of the context.' }),
    name: z.string().openapi({ description: 'The user defined name of the context.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time the context was created.',
        example: '2015-09-21T17:29:21.042Z',
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at'], title: 'Context' })
  .openapi('Context')

const ContextProjectRestrictionsListSchema = z
  .strictObject({
    items: z
      .array(
        z
          .strictObject({
            context_id: z.uuid().exactOptional().openapi({ description: 'UUID of the context' }),
            id: z.uuid().exactOptional().openapi({ description: 'UUID of the restriction' }),
            project_id: z
              .uuid()
              .exactOptional()
              .openapi({
                description:
                  'Deprecated - For "project" restrictions read the project ID from\n"restriction_value" instead.\n\nUUID of the project used in a project restriction.\n',
                deprecated: true,
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Contains a human-readable reference for the restriction. For\n"project" restrictions this is the name of the project.\n\nMay be null.\n',
              }),
            restriction_type: z
              .enum(['project', 'expression', 'group'])
              .exactOptional()
              .openapi({ description: 'Type of the restriction' }),
            restriction_value: z
              .string()
              .exactOptional()
              .openapi({ description: 'Value used to evaluate the restriction' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Token that can be used to retrieve next page of results' }),
  })
  .openapi({ required: [] })
  .openapi('ContextProjectRestrictionsList')

const EnvVarListSchema = z
  .strictObject({
    items: z.array(
      z
        .strictObject({
          variable: z
            .string()
            .openapi({
              description: 'The name of the environment variable',
              example: 'POSTGRES_USER',
            }),
          created_at: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The date and time the environment variable was created.',
              example: '2015-09-21T17:29:21.042Z',
            }),
          updated_at: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The date and time the environment variable was updated',
              example: '2015-09-21T17:29:21.042Z',
            }),
          context_id: z.uuid().openapi({ description: 'ID of the context (UUID)' }),
        })
        .openapi({ required: ['variable', 'created_at', 'updated_at', 'context_id'] }),
    ),
    next_page_token: z
      .string()
      .nullable()
      .openapi({
        description:
          'A token to pass as a `page-token` query parameter to return the next page of results.',
      }),
  })
  .openapi({ required: ['items', 'next_page_token'] })
  .openapi('EnvVarList')

const DeleteEnvVarSchema = z
  .strictObject({ message: z.string().openapi({ description: 'A human-readable message' }) })
  .openapi({ required: ['message'], description: 'message response', title: 'MessageResponse' })
  .openapi('DeleteEnvVar')

const UpdateEnvVarSchema = z
  .union([
    z
      .strictObject({
        variable: z
          .string()
          .openapi({
            description: 'The name of the environment variable',
            example: 'POSTGRES_USER',
          }),
        created_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'The date and time the environment variable was created.',
            example: '2015-09-21T17:29:21.042Z',
          }),
        updated_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'The date and time the environment variable was updated',
            example: '2015-09-21T17:29:21.042Z',
          }),
        context_id: z.uuid().openapi({ description: 'ID of the context (UUID)' }),
      })
      .openapi({ required: ['variable', 'created_at', 'updated_at', 'context_id'] }),
    z
      .strictObject({ message: z.string().openapi({ description: 'A human-readable message' }) })
      .openapi({
        required: ['message'],
        description: 'message response',
        title: 'MessageResponse',
      }),
  ])
  .openapi('UpdateEnvVar')

const ProjectSettingsSchema = z
  .strictObject({
    advanced: z
      .strictObject({
        autocancel_builds: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Except for the default branch, cancel running pipelines on a branch when a new pipeline starts on that branch.',
          }),
        build_fork_prs: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Run builds for pull requests from forks.' }),
        build_prs_only: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Once enabled, we will only build branches that have associated pull requests open.',
          }),
        disable_ssh: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'When set to true, job re-runs with SSH debugging access will be disabled for the project.',
          }),
        forks_receive_secret_env_vars: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Run builds for forked pull requests with this project's configuration, environment variables, and secrets.",
          }),
        oss: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Free and Open Source. Enabling this grants additional credits, and lets others see your builds, both through the web UI and the API.',
          }),
        set_github_status: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Report the status of every pushed commit to GitHub's status API. Updates reported per job.",
          }),
        setup_workflows: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Enabling allows you to conditionally trigger configurations outside of the primary `.circleci` parent directory.',
          }),
        write_settings_requires_admin: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether updating these settings requires a user to be an organization administrator. When disabled, updating settings can be done by any member.',
          }),
        pr_only_branch_overrides: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'This field is used in conjunction with the `build_prs_only`, it allows you to specify a list of branches that will always triger a build. The value passed will overwrite the existing value.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ProjectSettings')

const RestrictionCreatedSchema = z
  .strictObject({
    id: z.uuid().exactOptional().openapi({ description: 'UUID of the project restriction' }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Deprecated - For "project" restrictions read the project ID from\n"restriction_value" instead.\n\nUUID of the project used in a project restriction.\n',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains a human-readable reference for the restriction. For\n"project" restrictions this is the name of the project.\n\nMay be null.\n',
      }),
    restriction_type: z
      .enum(['project', 'expression', 'group'])
      .exactOptional()
      .openapi({ description: 'Type of the restriction' }),
    restriction_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value used to evaluate the restriction' }),
  })
  .openapi({ required: [] })
  .openapi('RestrictionCreated')

const RestrictionDeletedSchema = z
  .strictObject({
    message: z.string().exactOptional().openapi({ description: 'Response message' }),
  })
  .openapi({ required: [] })
  .openapi('RestrictionDeleted')

const UsageExportJobSchema = z
  .strictObject({
    usage_export_job_id: z.uuid(),
    state: z.enum(['created', 'processing', 'failed', 'completed']),
    start: z.iso.datetime({ offset: true }),
    end: z.iso.datetime({ offset: true }),
    download_urls: z
      .array(z.url())
      .openapi({
        description:
          'A list of pre signed urls that the client can use to download the results of a Usage Export.',
      }),
  })
  .openapi({ required: ['usage_export_job_id', 'state', 'start', 'end', 'download_urls'] })
  .openapi('UsageExportJob')

const GetUsageExportJobStatusSchema = z
  .strictObject({
    usage_export_job_id: z.uuid(),
    state: z.enum(['created', 'processing', 'failed', 'completed']),
    download_urls: z
      .array(z.url())
      .openapi({
        description:
          'A list of pre signed urls that the client can use to download the results of a Usage Export.',
      }),
    error_reason: z.string().exactOptional(),
  })
  .openapi({ required: ['usage_export_job_id', 'state', 'download_urls'] })
  .openapi('GetUsageExportJobStatus')

const TriggerPipelineRequestSchema = z
  .strictObject({
    definition_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The unique id for the pipeline definition. This can be found in the page Project Settings > Pipelines.',
        example: '2338d0ae-5541-4bbf-88a2-55e9f7281f80',
      }),
    config: z
      .strictObject({
        branch: z
          .string()
          .exactOptional()
          .openapi({
            example: 'main',
            description:
              'The branch that should be used to fetch the config file.\nNote that branch and tag are mutually exclusive.\nTo trigger a pipeline for a PR by number use pull/<number>/head for the PR ref or pull/<number>/merge for the merge ref (GitHub only)\n',
          }),
        tag: z
          .string()
          .exactOptional()
          .openapi({
            example: 'v2',
            description:
              'The tag that should be used to fetch the config file.\nThe commit that this tag points to is used for the pipeline.\nNote that branch and tag are mutually exclusive.\n',
          }),
      })
      .exactOptional()
      .openapi({ example: { branch: 'main' }, required: [] }),
    checkout: z
      .strictObject({
        branch: z
          .string()
          .exactOptional()
          .openapi({
            example: 'main',
            description:
              'The branch that should be used to check out code on a checkout step.\nNote that branch and tag are mutually exclusive.\nTo trigger a pipeline for a PR by number use pull/<number>/head for the PR ref or pull/<number>/merge for the merge ref (GitHub only)\n',
          }),
        tag: z
          .string()
          .exactOptional()
          .openapi({
            example: 'v2',
            description:
              'The tag that should be used to check out code on a checkout step.\nThe commit that this tag points to is used for the pipeline. Note that branch and tag are mutually exclusive.\n',
          }),
      })
      .exactOptional()
      .openapi({ example: { tag: 'v2' }, required: [] }),
    parameters: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'An object containing pipeline parameters and their values.\nPipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.\n',
        example: { example_param: 'my value', example_param2: true, example_param3: 3 },
      }),
  })
  .openapi({ required: [] })
  .openapi('TriggerPipelineRequest')

const PipelineNotTriggeredResponseSchema = z
  .strictObject({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message indicating the reason why a pipeline was not triggered',
        example: 'Ignoring pipeline due to CI skip in the commit',
      }),
  })
  .openapi({ required: [] })
  .openapi('PipelineNotTriggeredResponse')

const PipelineTriggeredResponseSchema = z
  .strictObject({
    state: z.enum(['created', 'errored', 'setup-pending', 'setup', 'pending']).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    number: z.int().exactOptional().openapi({ example: 25 }),
    id: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PipelineTriggeredResponse')

const PipelineDefinitionRepoSchema = z
  .strictObject({
    full_name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-org/some-repo-name',
        description: 'The fully-qualified name of the repository.',
      }),
    external_id: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-repo-id',
        description:
          'External identifier for the repository, as defined by the respective version control provider.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PipelineDefinitionRepo')

const PipelineDefinitionSchema = z
  .strictObject({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique ID of the pipeline definition.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'some pipeline', description: 'The name of the pipeline definition.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some pipeline description',
        description: 'The description of the pipeline definition.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time the pipeline definition was created.' }),
    config_source: z
      .strictObject({
        provider: z
          .string()
          .exactOptional()
          .openapi({
            example: 'github_app',
            description: 'The integration provider for this resource.',
          }),
        repo: PipelineDefinitionRepoSchema.exactOptional(),
        file_path: z
          .string()
          .exactOptional()
          .openapi({
            example: '.circleci/some-pipeline.yml',
            description: 'Path to CircleCI config YAML file to use for this pipeline definition.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The resource that stores the CircleCI config YAML used for this pipeline definition.',
        required: [],
      }),
    checkout_source: z
      .strictObject({
        provider: z
          .string()
          .exactOptional()
          .openapi({
            example: 'github_app',
            description: 'The integration provider for this resource.',
          }),
        repo: PipelineDefinitionRepoSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'The resource to be used when running the `checkout` command.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('PipelineDefinition')

const PipelineDefinitionListSchema = z
  .strictObject({ items: z.array(PipelineDefinitionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('PipelineDefinitionList')

const CreatePipelineDefinitionRequestSchema = z
  .strictObject({
    name: z
      .string()
      .openapi({
        example: 'Some pipeline name',
        description: 'The name of the pipeline definition.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Some pipeline description',
        description: 'The description of the pipeline definition.',
      }),
    config_source: z.xor([
      z
        .strictObject({
          provider: z
            .enum(['github_app', 'github_server'])
            .openapi({
              example: 'github_app',
              description:
                'The integration provider for this resource. Supported external providers are `github_app` and `github_server`.',
            }),
          repo: z
            .strictObject({
              external_id: z
                .string()
                .openapi({
                  example: 'some-repo-id',
                  description:
                    'External identifier for the repository, as defined by the respective version control provider.',
                }),
            })
            .openapi({ required: ['external_id'] }),
          file_path: z
            .string()
            .openapi({
              example: '.circleci/some-pipeline.yml',
              description: 'Path to CircleCI config YAML file to use for this pipeline definition.',
            }),
        })
        .openapi({
          description: 'Config source for external providers (repo required)',
          required: ['provider', 'repo', 'file_path'],
        }),
      z
        .strictObject({
          provider: z
            .literal('circleci')
            .openapi({ description: 'The integration provider for this resource.' }),
          file_path: z
            .string()
            .openapi({
              example: '.circleci/some-pipeline.yml',
              description: 'Path to CircleCI config YAML file to use for this pipeline definition.',
            }),
        })
        .openapi({
          description: 'Config source for CircleCI provider (no repo required)',
          required: ['provider', 'file_path'],
        }),
    ]),
    checkout_source: z
      .strictObject({
        provider: z
          .enum(['github_app', 'github_server'])
          .openapi({
            example: 'github_app',
            description:
              'The integration provider for this resource. Supported values are `github_app` and `github_server`.',
          }),
        repo: z
          .strictObject({
            external_id: z
              .string()
              .openapi({
                example: 'some-repo-id',
                description:
                  'External identifier for the repository, as defined by the respective version control provider.',
              }),
          })
          .openapi({ required: ['external_id'] }),
      })
      .openapi({
        description: 'The resource to be used when running the `checkout` command.',
        required: ['provider', 'repo'],
      }),
  })
  .openapi({ required: ['name', 'config_source', 'checkout_source'] })
  .openapi('CreatePipelineDefinitionRequest')

const UpdatePipelineDefinitionRequestSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Some pipeline name',
        description: 'The name of the pipeline definition.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Some pipeline description',
        description: 'The description of the pipeline definition.',
      }),
    config_source: z
      .strictObject({
        file_path: z
          .string()
          .exactOptional()
          .openapi({
            example: '.circleci/some-pipeline.yml',
            description: 'Path to CircleCI config YAML file to use for this pipeline definition.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The resource that stores the CircleCI config YAML used for this pipeline definition.',
        required: [],
      }),
    checkout_source: z
      .strictObject({
        provider: z
          .string()
          .exactOptional()
          .openapi({
            example: 'github_app',
            description:
              'The integration provider for this resource. Supported values include `github_app` and `github_server`.',
          }),
        repo: z
          .strictObject({
            external_id: z
              .string()
              .exactOptional()
              .openapi({
                example: 'some-repo-id',
                description:
                  'External identifier for the repository, as defined by the respective version control provider.',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({
        description: 'The resource to be used when running the `checkout` command.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePipelineDefinitionRequest')

const PipelineDefinitionDeletedSchema = z
  .strictObject({
    message: z.string().exactOptional().openapi({ description: 'Response message' }),
  })
  .openapi({ required: [] })
  .openapi('PipelineDefinitionDeleted')

const TriggerEventPresetSchema = z
  .enum([
    'all-pushes',
    'only-tags',
    'default-branch-pushes',
    'only-build-prs',
    'only-open-prs',
    'only-labeled-prs',
    'only-merged-prs',
    'only-ready-for-review-prs',
    'only-build-pushes-to-non-draft-prs',
    'only-merged-or-closed-prs',
    'pr-comment-equals-run-ci',
    'non-draft-pr-opened',
    'pushes-to-merge-queues',
  ])
  .openapi({
    example: 'all-pushes',
    description:
      'The name of the event preset to use when filtering events for this trigger.\n\nWhen `event_source.provider` is `github_app` or `github_server`, all preset values are supported.\n\nWhen `event_source.provider` is `github_oauth`, this field is **required** and only the following values are accepted: `all-pushes`, `only-build-prs`.\n\nNot applicable when `event_source.provider` is `webhook` or `schedule`.',
  })
  .openapi('TriggerEventPreset')

const TriggerSchema = z
  .strictObject({
    id: z.uuid().exactOptional().openapi({ description: 'The unique ID of the trigger.' }),
    event_name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some event name',
        description: 'The name of the event that will trigger the pipeline.',
      }),
    event_source: z
      .strictObject({
        provider: z
          .string()
          .exactOptional()
          .openapi({
            example: 'github_app',
            description:
              'The integration provider for this resource. One of `github_app`, `github_server`, `github_oauth`, `webhook`, or `schedule`.',
          }),
        repo: z
          .strictObject({
            full_name: z
              .string()
              .exactOptional()
              .openapi({
                example: 'some-org/some-repo-name',
                description: 'The fully-qualified name of the repository.',
              }),
            external_id: z
              .string()
              .exactOptional()
              .openapi({
                example: 'some-repo-id',
                description:
                  'External identifier for the repository, as defined by the respective version control provider.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Information pertaining to the repository used as a source of events for this trigger, if applicable.',
            required: [],
          }),
        webhook: z
          .strictObject({
            url: z
              .string()
              .exactOptional()
              .openapi({
                example: 'https://some-webhook.invalid/some-endpoint?secret=some-secret',
                description: 'The URL to use when triggering this webhook.',
              }),
            sender: z
              .string()
              .exactOptional()
              .openapi({ example: 'datadog', description: 'The name of the webhook sender.' }),
          })
          .exactOptional()
          .openapi({
            description:
              'Information pertaining to the custom webhook used as a source of events for this trigger, if applicable.',
            required: [],
          }),
        schedule: z
          .strictObject({
            cron_expression: z
              .string()
              .exactOptional()
              .openapi({
                example: '*/5 * * * *',
                description: 'The cron expression defining when this trigger fires.',
              }),
            attribution_actor: z
              .strictObject({
                id: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    description: 'The unique ID of the user that pipeline runs are attributed to.',
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  'The actor that pipeline runs from this trigger are attributed to. On creation, callers supply `current` or `system` as a string; the response returns the resolved actor as an object containing their user ID.',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Information pertaining to the schedule used as a source of events for this trigger, if applicable.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The source of events to use for this trigger. Will contain either a `repo`, `webhook`, or `schedule` object depending on the `provider`. (The `github_app`, `github_server`, and `github_oauth` providers imply a `repo`, `webhook` implies a `webhook`, and `schedule` implies a `schedule`.)',
        required: [],
      }),
    event_preset: TriggerEventPresetSchema.exactOptional(),
    checkout_ref: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-checkout-ref',
        description:
          'The ref to use when checking out code for pipeline runs created from this trigger. If empty, the ref provided in the trigger event is used.',
      }),
    config_ref: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-config-ref',
        description:
          'The ref to use when fetching config for pipeline runs created from this trigger. If empty, the ref provided in the trigger event is used.',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether the trigger is disabled. Not supported for triggers where `event_source.provider` is `github_oauth`.',
      }),
    parameters: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: { deploy_env: 'staging' },
        description:
          'Pipeline parameters passed when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Trigger')

const TriggerListSchema = z
  .strictObject({ items: z.array(TriggerSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TriggerList')

const CreateTriggerRequestSchema = z
  .strictObject({
    event_source: z
      .strictObject({
        provider: z
          .string()
          .openapi({
            example: 'github_app',
            description:
              'The integration provider for this resource. Currently `github_app`, `github_server`, `github_oauth`, `webhook`, and `schedule` are the only supported values.',
          }),
        repo: z
          .strictObject({
            external_id: z
              .string()
              .openapi({
                example: 'some-repo-id',
                description:
                  'External identifier for the repository, as defined by the respective version control provider.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Information pertaining to the repository used as a source of events for this trigger, if applicable.',
            required: ['external_id'],
          }),
        webhook: z
          .strictObject({
            sender: z
              .string()
              .exactOptional()
              .openapi({
                example: 'some-webhook-sender',
                description: 'The sender of the webhook.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Information pertaining to the custom webhook being used as a source of events for this trigger, if applicable.',
            required: [],
          }),
        schedule: z
          .strictObject({
            cron_expression: z
              .string()
              .exactOptional()
              .openapi({
                example: '*/5 * * * *',
                description:
                  'A cron expression defining when the trigger fires (e.g. `*/5 * * * *` for every 5 minutes).',
              }),
            attribution_actor: z
              .enum(['current', 'system'])
              .exactOptional()
              .openapi({
                example: 'current',
                description:
                  'The actor to attribute pipeline runs to. Use `current` to attribute runs to the user who created the trigger, or `system` to attribute runs to the CircleCI system actor.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Schedule configuration for this trigger. Only applicable when `provider` is `schedule`.',
            required: [],
          }),
      })
      .openapi({
        description:
          'The source of events to use for this trigger. The `repo` object must be specified when `provider` is `github_app`, `github_server`, or `github_oauth`, the `webhook` object may only be specified when `provider` is `webhook`, and the `schedule` object must be specified when `provider` is `schedule`.',
        required: ['provider'],
      }),
    event_preset: TriggerEventPresetSchema.exactOptional().openapi({
      description:
        'The event preset to use for this trigger.\n\n- **`github_app` / `github_server`**: Optional. All preset values are supported.\n- **`github_oauth`**: **Required.** Only `all-pushes` and `only-build-prs` are accepted.\n- **`webhook` / `schedule`**: Not applicable. Must be omitted.',
    }),
    checkout_ref: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-checkout-ref',
        description:
          'The ref to use when checking out code for pipeline runs created from this trigger. Always required when `event_source.provider` is `webhook` or `schedule`. When `event_source.provider` is `github_app` or `github_server`, only expected if the event source repository (identified by `event_source.repo.external_id`) is different to the checkout source repository of the associated Pipeline Definition. Otherwise, must be omitted.',
      }),
    config_ref: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-config-ref',
        description:
          'The ref to use when fetching config for pipeline runs created from this trigger. Always required when `event_source.provider` is `webhook` or `schedule`. When `event_source.provider` is `github_app` or `github_server`, only expected if the event source repository (identified by `event_source.repo.external_id`) is different to the config source repository of the associated Pipeline Definition. Otherwise, must be omitted.',
      }),
    event_name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-event-name',
        description:
          'The name of the triggering event. Required when `provider` is `webhook` or `schedule`. Should not be set for other providers.',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether the trigger should be disabled upon creation. Not supported for triggers where `event_source.provider` is `github_oauth`.',
      }),
    parameters: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: { deploy_env: 'staging' },
        description:
          'Pipeline parameters to pass when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.',
      }),
  })
  .openapi({ required: ['event_source'] })
  .openapi('CreateTriggerRequest')

const UpdateTriggerRequestSchema = z
  .strictObject({
    event_preset: TriggerEventPresetSchema.exactOptional(),
    checkout_ref: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-checkout-ref',
        description:
          'The ref to use when checking out code for pipeline runs created from this trigger.',
      }),
    config_ref: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some-config-ref',
        description:
          'The ref to use when fetching config for pipeline runs created from this trigger.',
      }),
    event_name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'some event name',
        description:
          'The name of the triggering event. Required when `provider` is `webhook` or `schedule`. Should not be set for other providers.',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'A flag indicating whether the trigger is disabled or not. Not supported for triggers where `event_source.provider` is `github_oauth`.',
      }),
    event_source: z
      .strictObject({
        webhook: z
          .strictObject({
            sender: z
              .string()
              .exactOptional()
              .openapi({
                example: 'some sender',
                description:
                  'The sender of the webhook. This can only be set for triggers where `provider` is `webhook`.',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        schedule: z
          .strictObject({
            cron_expression: z
              .string()
              .exactOptional()
              .openapi({
                example: '*/5 * * * *',
                description:
                  'A cron expression defining when the trigger fires (e.g. `*/5 * * * *` for every 5 minutes).',
              }),
            attribution_actor: z
              .enum(['current', 'system'])
              .exactOptional()
              .openapi({
                example: 'current',
                description:
                  'The actor to attribute pipeline runs to. Use `current` to attribute runs to the user who sends this update request, or `system` to attribute runs to the CircleCI system actor.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Schedule configuration to update for this trigger. Only applicable when `provider` is `schedule`.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    parameters: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: { deploy_env: 'staging' },
        description:
          'Pipeline parameters to pass when running pipelines from this trigger. Currently only supported for triggers where `event_source.provider` is `schedule`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTriggerRequest')

const TriggerDeletedSchema = z
  .strictObject({
    message: z.string().exactOptional().openapi({ description: 'Response message' }),
  })
  .openapi({ required: [] })
  .openapi('TriggerDeleted')

const RollbackProjectRequestSchema = z
  .strictObject({
    component_name: z
      .string()
      .openapi({
        description: 'The component name',
        example: 'frontend',
        'x-go-name': 'ComponentName',
      }),
    current_version: z
      .string()
      .openapi({
        description: 'The current version',
        example: '1.0.0',
        'x-go-name': 'CurrentVersion',
      }),
    environment_name: z
      .string()
      .openapi({
        description: 'The environment name',
        example: 'production',
        'x-go-name': 'EnvironmentName',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace', example: 'default', 'x-go-name': 'Namespace' }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description: 'The extra parameters for the rollback pipeline',
        example: { param1: 'value1', param2: 'value2' },
        'x-go-name': 'Parameters',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reason for the rollback',
        example: 'The component is down',
        'x-go-name': 'Reason',
      }),
    target_version: z
      .string()
      .openapi({
        description: 'The target version',
        example: '1.0.1',
        'x-go-name': 'TargetVersion',
      }),
  })
  .openapi({
    required: ['environment_name', 'component_name', 'current_version', 'target_version'],
  })
  .openapi('RollbackProjectRequest')

const RollbackProjectResponseSchema = z
  .strictObject({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the rollback pipeline or the command created to handle the rollback',
        example: '123e4567-e89b-12d3-a456-426614174000',
      }),
    rollback_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the rollback', example: 'PIPELINE' }),
  })
  .openapi({ required: [] })
  .openapi('RollbackProjectResponse')

const LabelSchema = z
  .strictObject({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the label', example: 'env', 'x-go-name': 'Key' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the label', example: 'prod', 'x-go-name': 'Value' }),
  })
  .openapi({ required: [] })
  .openapi('Label')

const ComponentSchema = z
  .strictObject({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The component ID',
        example: '123e4127-e89b-12d3-a456-426123417400',
        'x-go-name': 'ID',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The component name', example: 'service-a', 'x-go-name': 'Name' }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The project ID of the component',
        example: '123e4127-e89b-12d3-a456-426123417400',
        'x-go-name': 'ID',
      }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'The labels associated with the component', 'x-go-name': 'Labels' }),
    release_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of releases for this component',
        example: 1,
        'x-go-name': 'ReleaseCount',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time when the component was created',
        'x-go-name': 'CreatedAt',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time when the component was updated',
        'x-go-name': 'UpdatedAt',
      }),
  })
  .openapi({ required: [] })
  .openapi('Component')

const PaginatedComponentListSchema = z
  .strictObject({
    items: z.array(ComponentSchema).exactOptional().openapi({ 'x-go-name': 'Items' }),
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The pagination token to use when fetching the next page in this result set.',
        'x-go-name': 'NextPageToken',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaginatedComponentList')

const VersionSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version name', example: '1.0.0', 'x-go-name': 'Name' }),
    environment_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the environment in which the version has been deployed',
        example: '123e4127-e89b-12d3-a456-426123417400',
        'x-go-name': 'ID',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The namespace in which the version was deployed',
        example: 'default',
        'x-go-name': 'Namespace',
      }),
    is_live: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the version is live or not',
        example: true,
        'x-go-name': 'IsLive',
      }),
    pipeline_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the pipeline that deployed the version',
        example: 'cc54a110-d03f-4916-96fc-ff36a1221ed7',
        'x-go-name': 'ID',
      }),
    workflow_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the CircleCI workflow that deployed the version',
        example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
        'x-go-name': 'WorkflowID',
      }),
    job_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the CircleCI job that deployed the version',
        example: 'f7e18b53-db27-4706-ad77-b16dc1e6fc53',
        'x-go-name': 'JobID',
      }),
    job_number: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of the CircleCI job that deployed the version',
        example: 123,
        'x-go-name': 'JobNumber',
      }),
    last_deployed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time at which the version was last deployed',
        'x-go-name': 'LastDeployedAt',
      }),
  })
  .openapi({ required: [] })
  .openapi('Version')

const PaginatedComponentVersionListSchema = z
  .strictObject({
    items: z.array(VersionSchema).exactOptional().openapi({ 'x-go-name': 'Items' }),
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The pagination token to use when fetching the next page in this result set.',
        'x-go-name': 'NextPageToken',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaginatedComponentVersionList')

const EnvironmentSchema = z
  .strictObject({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time when the environment was created',
        'x-go-name': 'CreatedAt',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short description given to the environment',
        example: 'some description',
        'x-go-name': 'Description',
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The environment ID',
        example: '123e4127-e89b-12d3-a456-426123417400',
        'x-go-name': 'ID',
      }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'The labels associated to the environment', 'x-go-name': 'Labels' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The environment name', example: 'prod-app', 'x-go-name': 'Name' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time when the environment was updated',
        'x-go-name': 'UpdatedAt',
      }),
  })
  .openapi({ required: [] })
  .openapi('Environment')

const PaginatedEnvironmentListSchema = z
  .strictObject({
    items: z.array(EnvironmentSchema).exactOptional().openapi({ 'x-go-name': 'Items' }),
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The pagination token to use when fetching the next page in this result set.',
        'x-go-name': 'NextPageToken',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaginatedEnvironmentList')

const ExporterSchema = z
  .strictObject({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The exporter ID.',
        example: '123e4127-e89b-12d3-a456-426123417400',
        'x-go-name': 'ID',
      }),
    org_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The organization ID that owns this exporter.',
        example: 'b9291e0d-a11e-41fb-8517-c545388b5953',
        'x-go-name': 'OrgID',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The OTLP endpoint to send spans to.',
        example: 'otel.example.com:4317',
        'x-go-name': 'Endpoint',
      }),
    protocol: z
      .enum(['grpc', 'http'])
      .exactOptional()
      .openapi({
        description: 'The OTLP transport to use when exporting data.',
        example: 'grpc',
        'x-go-name': 'Protocol',
      }),
    insecure: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to use an insecure connection to the endpoint.',
        example: false,
        'x-go-name': 'Insecure',
      }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional headers to include in export requests. Header values are encrypted at rest and will appear redacted as "xxxx" in responses.',
        'x-go-name': 'Headers',
      }),
    issues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of validation issues detected with this exporter configuration, such as an endpoint that no longer resolves. Only present when issues are detected.',
        'x-go-name': 'Issues',
      }),
  })
  .openapi({ required: [] })
  .openapi('Exporter')

const ExporterListSchema = z.array(ExporterSchema).openapi('ExporterList')

const CreateExporterRequestSchema = z
  .strictObject({
    org_id: z
      .uuid()
      .openapi({
        description: 'The organization ID to create the exporter for.',
        example: 'b9291e0d-a11e-41fb-8517-c545388b5953',
        'x-go-name': 'OrgID',
      }),
    endpoint: z
      .string()
      .openapi({
        description:
          "The OTLP endpoint to send spans to. Don't include https:// or grpc://. Just the hostname and port are required.",
        example: 'otel.example.com:4317',
        'x-go-name': 'Endpoint',
      }),
    protocol: z
      .enum(['grpc', 'http'])
      .openapi({
        description: 'The OTLP transport to use when exporting data.',
        example: 'grpc',
        'x-go-name': 'Protocol',
      }),
    insecure: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to use an insecure connection to the endpoint.',
        example: false,
        'x-go-name': 'Insecure',
      }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Additional headers to include in export requests.',
        'x-go-name': 'Headers',
      }),
  })
  .openapi({ required: ['org_id', 'endpoint', 'protocol'] })
  .openapi('CreateExporterRequest')

const WebhookScopeSchema = z
  .strictObject({
    id: z
      .uuid()
      .openapi({
        description: 'ID of the scope being used (at the moment, only project ID is supported).',
        example: '39723015-b399-4601-9ff6-bd1bfbed8fa8',
        'x-go-name': 'ID',
      }),
    type: z
      .string()
      .openapi({
        description: 'Type of the scope being used.',
        example: 'project',
        'x-go-name': 'Type',
      }),
  })
  .openapi({
    description: 'The scope in which the relevant events that will trigger webhooks.',
    required: ['id', 'type'],
  })
  .openapi('WebhookScope')

const WebhookSchema = z
  .strictObject({
    id: z
      .uuid()
      .openapi({
        description: 'The unique ID of the webhook.',
        example: '8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90',
        'x-go-name': 'ID',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of the webhook.', example: 'my-webhook', 'x-go-name': 'Name' }),
    url: z
      .string()
      .openapi({
        description:
          'URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).',
        example: 'https://example.com/hooks/circleci',
        'x-go-name': 'URL',
      }),
    verify_tls: z
      .boolean()
      .openapi({
        description: 'Whether to enforce TLS certificate verification when delivering the webhook.',
        example: true,
        'x-go-name': 'VerifyTLS',
      }),
    signing_secret: z
      .string()
      .openapi({
        description:
          'Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request.',
        example: '********',
        'x-go-name': 'SigningSecret',
      }),
    events: z
      .array(z.enum(['workflow-completed', 'job-completed']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'Events that will trigger the webhook.',
        example: ['workflow-completed', 'job-completed'],
        'x-go-name': 'Events',
      }),
    scope: WebhookScopeSchema,
    is_enabled: z
      .boolean()
      .openapi({
        description: 'Whether the webhook is enabled.',
        example: true,
        'x-go-name': 'IsEnabled',
      }),
    auto_disabled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          "The date and time CircleCI automatically disabled the webhook, or null if it has not. It can't be set through the API.",
        'x-go-name': 'AutoDisabledAt',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time the webhook was created.',
        'x-go-name': 'CreatedAt',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time the webhook was last updated.',
        'x-go-name': 'UpdatedAt',
      }),
  })
  .openapi({
    title: 'Webhook',
    required: [
      'id',
      'name',
      'url',
      'verify_tls',
      'signing_secret',
      'events',
      'scope',
      'is_enabled',
      'auto_disabled_at',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Webhook')

const WebhookListSchema = z
  .strictObject({
    items: z.array(WebhookSchema).openapi({ 'x-go-name': 'Items' }),
    next_page_token: z
      .string()
      .nullable()
      .openapi({
        description:
          'A token to pass as a `page-token` query parameter to return the next page of results.',
        'x-go-name': 'NextPageToken',
      }),
  })
  .openapi({ required: ['items', 'next_page_token'] })
  .openapi('WebhookList')

const CreateWebhookScopeSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({
        description: 'ID of the scope being used (at the moment, only project ID is supported).',
        example: '39723015-b399-4601-9ff6-bd1bfbed8fa8',
        'x-go-name': 'ID',
      }),
    type: z
      .literal('project')
      .openapi({
        description: 'Type of the scope being used.',
        example: 'project',
        'x-go-name': 'Type',
      }),
  })
  .openapi({
    description: 'The scope in which the relevant events that will trigger webhooks.',
    required: ['id', 'type'],
  })
  .openapi('CreateWebhookScope')

const CreateWebhookRequestSchema = z
  .strictObject({
    name: z
      .string()
      .openapi({ description: 'Name of the webhook.', example: 'my-webhook', 'x-go-name': 'Name' }),
    events: z
      .array(z.enum(['workflow-completed', 'job-completed']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'Events that will trigger the webhook.',
        example: ['workflow-completed', 'job-completed'],
        'x-go-name': 'Events',
      }),
    url: z
      .string()
      .openapi({
        description:
          'URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).',
        example: 'https://example.com/hooks/circleci',
        'x-go-name': 'URL',
      }),
    'verify-tls': z
      .boolean()
      .openapi({
        description: 'Whether to enforce TLS certificate verification when delivering the webhook.',
        example: true,
        'x-go-name': 'VerifyTLS',
      }),
    'signing-secret': z
      .string()
      .openapi({
        description:
          'Secret used to build an HMAC hash of the payload and passed as a header in the webhook request.',
        example: 'super-secret-value',
        'x-go-name': 'SigningSecret',
      }),
    'is-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the webhook is enabled. Defaults to true.',
        example: true,
        'x-go-name': 'IsEnabled',
      }),
    scope: CreateWebhookScopeSchema,
  })
  .openapi({
    description: 'The parameters for a create webhook request.',
    required: ['name', 'events', 'url', 'verify-tls', 'signing-secret', 'scope'],
  })
  .openapi('CreateWebhookRequest')

const UpdateWebhookRequestSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the webhook.', example: 'my-webhook', 'x-go-name': 'Name' }),
    events: z
      .array(z.enum(['workflow-completed', 'job-completed']))
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
        description: 'Events that will trigger the webhook.',
        example: ['workflow-completed', 'job-completed'],
        'x-go-name': 'Events',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to deliver the webhook to. Note: protocol must be included as well (only https is supported).',
        example: 'https://example.com/hooks/circleci',
        'x-go-name': 'URL',
      }),
    'signing-secret': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Secret used to build an HMAC hash of the payload and passed as a header in the webhook request.',
        example: 'super-secret-value',
        'x-go-name': 'SigningSecret',
      }),
    'verify-tls': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to enforce TLS certificate verification when delivering the webhook.',
        example: true,
        'x-go-name': 'VerifyTLS',
      }),
    'is-enabled': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the webhook is enabled. Omit it to keep the current value.',
        example: false,
        'x-go-name': 'IsEnabled',
      }),
  })
  .openapi({ description: 'The parameters for an update webhook request.', required: [] })
  .openapi('UpdateWebhookRequest')

const WebhookDeletedSchema = z
  .strictObject({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Response message.',
        example: 'Webhook deleted.',
        'x-go-name': 'Message',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookDeleted')

const PipelineValuesSchema = z
  .looseObject({})
  .openapi({ example: { 'some.key': 'some-value', 'different.key': true, 'another.field': 1 } })
  .openapi('PipelineValues')

const WorkflowSchema = z
  .strictObject({
    pipeline_id: z
      .uuid()
      .openapi({
        description: 'The ID of the pipeline this workflow belongs to.',
        example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
      }),
    canceled_by: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the user who canceled the workflow.',
        example: '026a6d28-c22e-4aab-a8b4-bd7131a8ea35',
      }),
    id: z
      .uuid()
      .openapi({
        description: 'The unique ID of the workflow.',
        example: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      }),
    auto_rerun_number: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Present if this workflow was auto-rerun from a previous workflow. The Nth auto-rerun workflow will have auto_rerun_number N.',
        example: 1,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the workflow.', example: 'build-and-test' }),
    project_slug: z
      .string()
      .openapi({
        description: 'The project-slug for the pipeline this workflow belongs to.',
        example: 'gh/CircleCI-Public/api-preview-docs',
      }),
    errored_by: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the user associated with the error on the workflow.',
        example: 'c6e40f70-a80a-4ccc-af88-8d985a7bc622',
      }),
    tag: z
      .literal('setup')
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tag used for the workflow.', example: 'setup' }),
    status: z
      .enum([
        'success',
        'canceled',
        'error',
        'failed',
        'failing',
        'not_run',
        'on_hold',
        'running',
        'unauthorized',
      ])
      .openapi({ description: 'The current status of the workflow.' }),
    started_by: z
      .uuid()
      .openapi({
        description: 'The ID of the user who started the workflow.',
        example: '03987f6a-4c27-4dc1-b6ab-c7e83bb3e713',
      }),
    max_auto_reruns: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The maximum number of auto reruns specified for the workflow.',
        example: 5,
      }),
    pipeline_number: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of the pipeline this workflow belongs to.',
        example: 25,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the workflow was created.' }),
    stopped_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'The date and time the workflow stopped.' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'status',
      'created_at',
      'stopped_at',
      'pipeline_id',
      'pipeline_number',
      'project_slug',
      'started_by',
    ],
  })
  .openapi('Workflow')

const GetJobResponseSchema = z
  .strictObject({
    id: z.uuid(),
    name: z.string(),
    job_number: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The number of the job.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the job.' }),
    status: z.string(),
    project_id: z.uuid(),
    pipeline_id: z.uuid(),
    workflow_id: z.uuid(),
    started_at: z.iso.datetime({ offset: true }).exactOptional(),
    stopped_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['id', 'name', 'status', 'project_id', 'pipeline_id', 'workflow_id'] })
  .openapi('GetJobResponse')

const BadRequestResponse = {
  description: 'The request is malformed (e.g, a given path parameter is invalid)\n',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().openapi({ example: 'OwnerID: must be a valid UUID.' }) })
        .openapi({ required: ['error'] }),
    },
  },
}

const ForbiddenResponse = {
  description: 'The user is forbidden from making this request\n',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().openapi({ example: 'Forbidden' }) })
        .openapi({ required: ['error'] }),
    },
  },
}

const InternalServerErrorResponse = {
  description: 'Something unexpected happened on the server.',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().openapi({ example: 'internal server error' }) })
        .openapi({ required: ['error'] }),
    },
  },
}

const UnauthenticatedResponse = {
  description: 'The request is unauthenticated\n',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().openapi({ example: 'unauthenticated' }) })
        .openapi({ required: ['error'] }),
    },
  },
}

const UnauthorizedResponse = {
  description: 'The request is unauthorized\n',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().openapi({ example: 'Unauthorized' }) })
        .openapi({ required: ['error'] }),
    },
  },
}

const UnexpectedServerErrorResponse = {
  description: 'Something unexpected happened on the server.',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().openapi({ example: 'unexpected server error' }) })
        .openapi({ required: ['error'] }),
    },
  },
}

const _401InvalidTokenResponse = {
  description: 'Credentials provided are invalid.',
  content: {
    'application/json': {
      schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
      examples: {
        invalid_token: {
          summary: 'Token is invalid.',
          value: { message: 'Invalid token provided.' },
        },
        old_token: {
          summary: 'Token was generated before 2023-06-23.',
          value: {
            message:
              'New format tokens are needed to authenticate this API endpoint. Create a new API token for access.',
          },
        },
        query_auth: {
          summary: 'Authentication attempted via query parameters.',
          value: {
            message:
              'Support for query parameter authentication has been deprecated to improve security. Please use a supported authentication method such as header-based, or basic authentication.',
          },
        },
      },
    },
  },
}

const _404EntityNotFoundResponse = {
  description: 'Entity not found.',
  content: {
    'application/json': {
      schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
      examples: {
        context_not_found: {
          summary: 'Context not found.',
          value: { message: 'Context not found.' },
        },
        org_not_found: {
          summary: 'Organization not found.',
          value: { message: 'Organization does not exist.' },
        },
        user_not_found: { summary: 'User not found.', value: { message: 'User does not exist.' } },
        project_not_found: {
          summary: 'Project not found.',
          value: { message: 'Project does not exist.' },
        },
        group_not_found: {
          summary: 'Group not found.',
          value: { message: 'Group does not exist.' },
        },
        orb_not_found: { summary: 'Orb not found.', value: { message: 'Orb does not exist.' } },
      },
    },
  },
}

const _429RateLimitExceededResponse = {
  description: 'API rate limits exceeded.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('Rate limit exceeded.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _500InternalServerErrorResponse = {
  description: 'Internal server error.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('Internal server error.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _400InvalidContextIdResponse = {
  description: 'Context ID provided is invalid.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('context_id is invalid.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _400InvalidRestrictionIdResponse = {
  description: 'Context restriction ID provided is invalid.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('restriction_id is invalid.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _400UnexpectedRequestBodyResponse = {
  description: 'Unexpected request body provided.',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          message: z.string().default('Unexpected request body provided.').exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _403PermissionDeniedResponse = {
  description: 'None or insufficient credentials provided.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('Permission denied.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _405CannotCreateStandaloneProjectResponse = {
  description:
    'Create projects using the API is currently supported for classic Github OAuth and Bitbucket projects only.',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          message: z
            .string()
            .default(
              'Create projects using the API is currently supported for classic Github OAuth and Bitbucket projects only.',
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _404ProjectNotFoundResponse = {
  description:
    'Insufficient credentials for a private project, OR the organization, project, or repository does not exist.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('Project not found.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _409GroupConflictResponse = {
  description: 'A conflict has occurred while attempting to create the resource.\n',
  content: {
    'application/json': {
      schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
      examples: {
        max_groups: {
          summary: 'Max number of groups reached',
          value: {
            message: 'Failed to create group, reached max number of groups for this organization.',
          },
        },
        name_already_taken: {
          summary: 'Group name already taken',
          value: { message: 'Failed to create group, group <group-name> already exists.' },
        },
      },
    },
  },
}

const _400InvalidJobIdResponse = {
  description: 'Lock ID provided is invalid.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('job_id is invalid.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _400InvalidOrbIdResponse = {
  description: 'Orb ID provided is invalid.',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('orb_id is invalid.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _409EntityConflictResponse = {
  description: 'A conflict has occurred while attempting to create the resource.\n',
  content: {
    'application/json': {
      schema: z
        .strictObject({ message: z.string().default('Conflict creating entity.').exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const _400ImproperPayloadResponse = {
  description: 'JSON passed in the request does not adhere to the expected schema.',
  content: {
    'application/json': {
      schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
      examples: {
        incorrect_type: {
          summary: 'A field was passed with an incorrect type.',
          value: { message: "JSON field 'field_name' is of incorrect type." },
        },
        missing_field: {
          summary: 'A required field was not present.',
          value: { message: 'Missing one or more JSON fields.' },
        },
        unexpected_field: {
          summary: 'An unexpected JSON field was present.',
          value: { message: "Unexpected JSON field 'field_name'." },
        },
      },
    },
  },
}

const _400InvalidWorkflowIdResponse = {
  description: 'Workflow ID provided is invalid.',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          message: z.string().default('Workflow ID provided is invalid.').exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ClaimsParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'claims',
      in: 'query',
      description:
        'comma separated list of claims to delete. Valid values are "audience" and "ttl".',
      required: true,
      schema: { type: 'string' },
    },
  })

const OrgIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'orgID',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ProjectIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'projectID',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ContextParamsSchema = z
  .string()
  .openapi({ param: { name: 'context', in: 'path', required: true, schema: { type: 'string' } } })

const DecisionIDParamsSchema = z
  .string()
  .openapi({
    param: { name: 'decisionID', in: 'path', required: true, schema: { type: 'string' } },
  })

const OwnerIDParamsSchema = z
  .string()
  .openapi({ param: { name: 'ownerID', in: 'path', required: true, schema: { type: 'string' } } })

const OwnerIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'owner-id',
      description:
        'The unique ID of the owner of the context. This is the organization ID. Specify either owner/organization ID or the owner/organization slug. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.',
      schema: { type: 'string', format: 'uuid' },
      required: false,
    },
  })

const OwnerSlugQueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'owner-slug',
      description:
        'A string that represents an organization. This is the organization slug. Specify either this or organization/owner ID. Find the organization ID and slug in the CircleCI web app (Organization Settings > Overview). Owner/organization slug is not supported for CircleCI server.',
      schema: { type: 'string' },
      required: false,
    },
  })

const OwnerTypeQueryParamsSchema = z
  .enum(['account', 'organization'])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'owner-type',
      description:
        'The type of the owner. Defaults to "organization". Use "account" if you are using CircleCI server.',
      schema: { type: 'string', enum: ['account', 'organization'] },
      required: false,
    },
  })

const PageTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'page-token',
      in: 'query',
      description: 'A token to specify which page of results to fetch.',
      schema: { type: 'string' },
      required: false,
    },
  })

const ContextIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'context_id',
      description: 'An opaque identifier of a context.',
      example: 'be8bb2e3-c3d6-4098-89f4-572ff976ba9a',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const EnvVarNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'env_var_name',
      description: 'The name of the environment variable.',
      example: 'POSTGRES_USER',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const RestrictionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'restriction_id',
      description: 'An opaque identifier of a context restriction.',
      example: '1c23d2cb-07b1-4a28-8af3-e369732050ed',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const JobIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'job_id',
      description: 'An opaque identifier of a job.',
      example: 'fbb79891-2e30-4f51-b447-ce3a32f349fc',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ProviderNoGitlabParamsSchema = z
  .enum(['github', 'gh', 'bitbucket', 'bb', 'circleci'])
  .openapi({
    param: {
      name: 'provider',
      description:
        'The first segment of the slash-separated project slug, as shown in Project Settings > Overview.',
      example: 'gh',
      in: 'path',
      schema: { type: 'string', enum: ['github', 'gh', 'bitbucket', 'bb', 'circleci'] },
      required: true,
    },
  })

const OrganizationParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'organization',
      description:
        'The second segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the org name (e.g. `my-org`) or an ID (e.g. `43G3lM5RtfFE7v5sa4nWAU`).',
      example: 'CircleCI-Public',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const ProjectParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'project',
      description:
        'The third segment of the slash-separated project slug, as shown in Project Settings > Overview. Depending on the organization type, this may be the project name (e.g. `my-project`) or an ID (e.g. `44n9wujWcTnVZ2b5S8Fnat`).',
      example: 'api-preview-docs',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const PipelineIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'pipeline_id',
      description: 'An opaque identifier of a pipeline.',
      example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ProjectIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'project_id',
      description: 'An opaque identifier of a project.',
      example: '39723015-b399-4601-9ff6-bd1bfbed8fa8',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const PipelineDefinitionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'pipeline_definition_id',
      description: 'An opaque identifier of a pipeline definition.',
      example: '6cb29b00-8e02-4357-8bc0-313983bf1f46',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const TriggerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'trigger_id',
      description: 'An opaque identifier of a trigger.',
      example: 'bbea3a3d-4686-48b6-8d2d-2a14ace3913c',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const OrgIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'org_id',
      description: 'An opaque identifier of an organization.',
      example: 'b9291e0d-a11e-41fb-8517-c545388b5953',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const PageParamsSchema = z
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
      name: 'page',
      in: 'query',
      description: 'The 1-based page number of repositories to fetch.',
      schema: { type: 'integer' },
      required: false,
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
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'The number of repositories to return per page (maximum 100).',
      schema: { type: 'integer' },
      required: false,
    },
  })

const ProviderParamsSchema = z
  .enum(['github', 'gh', 'bitbucket', 'bb', 'circleci'])
  .openapi({
    param: {
      name: 'provider',
      description:
        'The first segment of the slash-separated project slug, as shown in Project Settings > Overview.',
      example: 'gh',
      in: 'path',
      required: true,
      schema: { type: 'string', enum: ['github', 'gh', 'bitbucket', 'bb', 'circleci'] },
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'user_id',
      description: 'An opaque identifier of a user.',
      example: 'a68942a8-c217-4d92-96e5-3b47f9a2f0d9',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const PaginationLimitParamsSchema = z
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
      name: 'limit',
      in: 'query',
      description: 'The number of results per page.',
      schema: { type: 'integer' },
      required: false,
    },
  })

const GroupIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'group_id',
      description: 'An opaque identifier of a group.',
      example: '39f660db-f49b-417e-ad79-2769ba29faf7',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const UsageExportJobIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'usage_export_job_id',
      description: 'An opaque identifier of a usage export job.',
      example: 'e8235eed-f121-4ae3-9c72-2719d6572818',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const NamespaceParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'ns',
      description: 'The namespace that the Orb belongs to.',
      example: 'circleci',
      in: 'query',
      required: true,
      schema: { type: 'string' },
    },
  })

const NameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'name',
      description: 'The name of the requested Orb.',
      example: 'node',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const OrbIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'orb_id',
      description: 'An opaque identifier of an orb.',
      example: 'd8a1f419-e207-40f5-8b31-cbc6486b45d8',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const VersionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'version',
      description: 'The specific version of an Orb.',
      example: '3.1.2',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const NamespaceNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'name',
      description: 'The name of the registry namespace.',
      example: 'circleci',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const NamespacePathParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'namespace_path',
      description: 'The namespace that the Orb belongs to.',
      example: 'circleci',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const NamePathParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'name_path',
      description: 'The name of the requested Orb.',
      example: 'node',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const ScopeIdQueryParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'scope-id',
      description: 'ID of the scope being used (at the moment, only project ID is supported).',
      example: '39723015-b399-4601-9ff6-bd1bfbed8fa8',
      in: 'query',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ScopeTypeQueryParamsSchema = z
  .literal('project')
  .openapi({
    param: {
      name: 'scope-type',
      description: 'Type of the scope being used (at the moment, only project is supported).',
      example: 'project',
      in: 'query',
      required: true,
      schema: { type: 'string', enum: ['project'] },
    },
  })

const IsEnabledQueryParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'is-enabled',
      description:
        'Return only enabled (`true`) or only disabled (`false`) webhooks. Omit it to return every webhook.',
      example: false,
      in: 'query',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const WebhookIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'webhook_id',
      description: 'An opaque identifier of a webhook.',
      example: '8d75ff3a-2b45-4d6e-9f1b-3c1e6f2a7b90',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const OrgIdQueryParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'org-id',
      description: 'An opaque identifier of an organization used in query parameters.',
      example: 'b9291e0d-a11e-41fb-8517-c545388b5953',
      in: 'query',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const OtelExporterIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'otel_exporter_id',
      description: 'The ID of an OTLP exporter configuration.',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const PageSizeParamsSchema = z
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
      name: 'page-size',
      in: 'query',
      required: true,
      description: 'The number of results per page.',
      schema: { type: 'integer' },
    },
  })

const EnvironmentIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'environment_id',
      description: 'An opaque identifier of an environment.',
      example: '1c23d2cb-07b1-4a28-8af3-e369732050ed',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ProjectIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      name: 'project-id',
      description: 'An opaque identifier of an project used in query parameters.',
      example: '39723015-b399-4601-9ff6-bd1bfbed8fa8',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ComponentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'component_id',
      description: 'An opaque identifier of a component.',
      example: 'b9291e0d-a11e-41fb-8517-c545388b5953',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const EnvironmentIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      name: 'environment-id',
      description: 'An opaque identifier of an environment used in query parameters.',
      example: '39723015-b399-4601-9ff6-bd1bfbed8fa8',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const WorkflowIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'id',
      description: 'The unique ID of the workflow.',
      example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ApiKeyHeaderSecurityScheme = {
  type: 'apiKey',
  name: 'Circle-Token',
  in: 'header',
  description: 'Project API tokens are not supported for API v2. Use a personal API token.',
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    '(Recommended) Bearer token authentication as defined in RFC 6750. Project API tokens are not supported for API v2. Use a personal API token.',
}

const BasicAuthSecurityScheme = {
  description:
    'HTTP basic authentication. The username should be set as the circle-token value, and the password should be left blank. Note that project tokens are currently not supported on API v2.',
  type: 'http',
  scheme: 'basic',
}

const ApiKeyQuerySecurityScheme = {
  type: 'apiKey',
  name: 'circle-token',
  in: 'query',
  description:
    'DEPRECATED - we will remove this option in the future. Project API tokens are not supported for API v2. Use a personal API token.',
}

export const getInsightsPagesProjectSlugSummaryRoute = createRoute({
  method: 'get',
  path: '/insights/pages/{project-slug}/summary',
  tags: ['Insights'],
  summary: "Get summary metrics and trends for a project across it's workflows and branches",
  description:
    'Get summary metrics and trends for a project at workflow and branch level.\n             Workflow runs going back at most 90 days are included in the aggregation window.\n             Trends are only supported upto last 30 days.\n             Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.',
  operationId: 'getProjectWorkflowsPageData',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      'reporting-window': z
        .enum(['last-7-days', 'last-90-days', 'last-24-hours', 'last-30-days', 'last-60-days'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reporting-window',
            description:
              'The time window used to calculate summary metrics. If not provided, defaults to last-90-days',
            schema: {
              type: 'string',
              enum: [
                'last-7-days',
                'last-90-days',
                'last-24-hours',
                'last-30-days',
                'last-60-days',
              ],
            },
            required: false,
            example: 'last-90-days',
          },
        }),
      branches: z
        .object({})
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branches',
            description: 'The names of VCS branches to include in branch-level workflow metrics.',
            schema: { type: 'object' },
            required: false,
            example:
              'A single branch: ?branches=main or for multiple branches: ?branches=main&branches=feature&branches=dev',
          },
        }),
      'workflow-names': z
        .object({})
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflow-names',
            description: 'The names of workflows to include in workflow-level metrics.',
            schema: { type: 'object' },
            required: false,
            example:
              'A single workflow name: ?workflow-names=build-test-deploy or\n    for multiple workflow names: ?workflow-names=build&workflow-names=test-and-deploy.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Aggregated summary metrics and trends by workflow and branches',
      content: {
        'application/json': {
          schema: z
            .object({
              org_id: z
                .any()
                .exactOptional()
                .openapi({ description: 'The unique ID of the organization' }),
              project_id: z
                .any()
                .exactOptional()
                .openapi({ description: 'The unique ID of the project' }),
              project_data: z
                .object({
                  metrics: z
                    .object({
                      total_runs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description:
                            'The total number of runs, including runs that are still on-hold or running.',
                        }),
                      total_duration_secs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'Total duration, in seconds.',
                        }),
                      total_credits_used: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description:
                            'The total credits consumed over the current timeseries interval.',
                        }),
                      success_rate: z.float32(),
                      throughput: z
                        .float32()
                        .openapi({ description: 'The average number of runs per day.' }),
                    })
                    .openapi({
                      required: [
                        'total_runs',
                        'total_duration_secs',
                        'total_credits_used',
                        'success_rate',
                        'throughput',
                      ],
                      description:
                        'Metrics aggregated across all workflows and branches for a project.',
                    }),
                  trends: z
                    .object({
                      total_runs: z
                        .float32()
                        .openapi({ description: 'The trend value for total number of runs.' }),
                      total_duration_secs: z
                        .float32()
                        .openapi({ description: 'Trend value for total duration.' }),
                      total_credits_used: z
                        .float32()
                        .openapi({ description: 'The trend value for total credits consumed.' }),
                      success_rate: z
                        .float32()
                        .openapi({ description: 'The trend value for the success rate.' }),
                      throughput: z
                        .float32()
                        .openapi({
                          description: 'Trend value for the average number of runs per day.',
                        }),
                    })
                    .openapi({
                      required: [
                        'total_runs',
                        'total_duration_secs',
                        'total_credits_used',
                        'success_rate',
                        'throughput',
                      ],
                      description:
                        'Metric trends aggregated across all workflows and branches for a project.',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: ['metrics', 'trends'],
                  description: 'Metrics and trends data aggregated for a given project.',
                }),
              project_workflow_data: z
                .array(
                  z
                    .object({
                      workflow_name: z
                        .string()
                        .openapi({
                          description: 'The name of the workflow.',
                          example: 'build-and-test',
                        }),
                      metrics: z
                        .object({
                          total_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total credits consumed over the current timeseries interval.',
                            }),
                          p95_duration_secs: z
                            .float32()
                            .openapi({
                              description:
                                'The 95th percentile duration among a group of workflow runs.',
                            }),
                          total_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total number of runs, including runs that are still on-hold or running.',
                            }),
                          success_rate: z.float32(),
                        })
                        .openapi({
                          required: [
                            'total_credits_used',
                            'p95_duration_secs',
                            'total_runs',
                            'success_rate',
                          ],
                          description:
                            'Metrics aggregated across a workflow or branchfor a project.',
                        }),
                      trends: z
                        .object({
                          total_credits_used: z
                            .float32()
                            .openapi({
                              description: 'The trend value for total credits consumed.',
                            }),
                          p95_duration_secs: z
                            .float32()
                            .openapi({
                              description:
                                'The 95th percentile duration among a group of workflow runs.',
                            }),
                          total_runs: z
                            .float32()
                            .openapi({ description: 'The trend value for total number of runs.' }),
                          success_rate: z
                            .float32()
                            .openapi({ description: 'The trend value for the success rate.' }),
                        })
                        .openapi({
                          required: [
                            'total_credits_used',
                            'p95_duration_secs',
                            'total_runs',
                            'success_rate',
                          ],
                          description:
                            'Trends aggregated across a workflow or branch for a project.',
                        }),
                    })
                    .openapi({ required: ['workflow_name', 'metrics', 'trends'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A list of metrics and trends data for workflows for a given project.',
                }),
              project_workflow_branch_data: z
                .array(
                  z
                    .object({
                      workflow_name: z
                        .string()
                        .openapi({
                          description: 'The name of the workflow.',
                          example: 'build-and-test',
                        }),
                      branch: z
                        .string()
                        .openapi({
                          description: "The VCS branch of a workflow's trigger.",
                          example: 'main',
                        }),
                      metrics: z
                        .object({
                          total_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total credits consumed over the current timeseries interval.',
                            }),
                          p95_duration_secs: z
                            .float32()
                            .openapi({
                              description:
                                'The 95th percentile duration among a group of workflow runs.',
                            }),
                          total_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total number of runs, including runs that are still on-hold or running.',
                            }),
                          success_rate: z.float32(),
                        })
                        .openapi({
                          required: [
                            'total_credits_used',
                            'p95_duration_secs',
                            'total_runs',
                            'success_rate',
                          ],
                          description:
                            'Metrics aggregated across a workflow or branchfor a project.',
                        }),
                      trends: z
                        .object({
                          total_credits_used: z
                            .float32()
                            .openapi({
                              description: 'The trend value for total credits consumed.',
                            }),
                          p95_duration_secs: z
                            .float32()
                            .openapi({
                              description:
                                'The 95th percentile duration among a group of workflow runs.',
                            }),
                          total_runs: z
                            .float32()
                            .openapi({ description: 'The trend value for total number of runs.' }),
                          success_rate: z
                            .float32()
                            .openapi({ description: 'The trend value for the success rate.' }),
                        })
                        .openapi({
                          required: [
                            'total_credits_used',
                            'p95_duration_secs',
                            'total_runs',
                            'success_rate',
                          ],
                          description:
                            'Trends aggregated across a workflow or branch for a project.',
                        }),
                    })
                    .openapi({ required: ['workflow_name', 'branch', 'metrics', 'trends'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A list of metrics and trends data for branches for a given project.',
                }),
              all_branches: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: "The VCS branch of a workflow's trigger.",
                      example: 'main',
                    }),
                )
                .exactOptional()
                .openapi({ description: 'A list of all the branches for a given project.' }),
              all_workflows: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: 'The name of the workflow.',
                      example: 'build-and-test',
                    }),
                )
                .exactOptional()
                .openapi({ description: 'A list of all the workflows for a given project.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRoute = createRoute({
  method: 'get',
  path: '/insights/time-series/{project-slug}/workflows/{workflow-name}/jobs',
  tags: ['Insights'],
  summary: 'Job timeseries data',
  description:
    'Get timeseries data for all jobs within a workflow. Hourly granularity data is only retained for 48 hours while daily granularity data is retained for 90 days.',
  operationId: 'getJobTimeseries',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      'workflow-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflow-name',
            description: 'The name of the workflow.',
            schema: { type: 'string' },
            required: true,
            example: 'build-and-test',
          },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description:
              'The name of a vcs branch. If not passed we will scope the API call to the default branch.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      granularity: z
        .enum(['daily', 'hourly'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'granularity',
            description: 'The granularity for which to query timeseries data.',
            schema: { type: 'string', enum: ['daily', 'hourly'] },
            required: false,
            example: 'hourly',
          },
        }),
      'start-date': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start-date',
            description:
              'Include only executions that started at or after this date. This must be specified if an end-date is provided.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            example: '2020-08-21T13:26:29Z',
          },
        }),
      'end-date': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end-date',
            description:
              'Include only executions that started before this date. This date can be at most 90 days after the start-date.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            example: '2020-09-04T13:26:29Z',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of timeseries data, one entry per job.',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
              items: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'The name of the workflow.',
                          example: 'build-and-test',
                        }),
                      min_started_at: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The start time for the earliest execution included in the metrics.',
                        }),
                      max_ended_at: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The end time of the last execution included in the metrics.',
                        }),
                      timestamp: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description: 'The start of the interval for timeseries metrics.',
                        }),
                      metrics: z
                        .object({
                          total_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total number of runs, including runs that are still on-hold or running.',
                            }),
                          failed_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of failed runs.',
                            }),
                          successful_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of successful runs.',
                            }),
                          throughput: z
                            .float32()
                            .openapi({ description: 'The average number of runs per day.' }),
                          median_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The median credits consumed over the current timeseries interval.',
                            }),
                          total_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total credits consumed over the current timeseries interval.',
                            }),
                          duration_metrics: z
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
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The minimum duration, in seconds, among a group of runs.',
                                }),
                              median: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The median duration, in seconds, among a group of runs.',
                                }),
                              max: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The max duration, in seconds, among a group of runs.',
                                }),
                              p95: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The 95th percentile duration, in seconds, among a group of runs.',
                                }),
                              total: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The total duration, in seconds, added across a group of runs.',
                                }),
                            })
                            .openapi({
                              required: ['min', 'median', 'max', 'p95', 'total'],
                              description:
                                'Metrics relating to the duration of runs for a workflow.',
                            }),
                        })
                        .openapi({
                          required: [
                            'total_runs',
                            'failed_runs',
                            'successful_runs',
                            'throughput',
                            'median_credits_used',
                            'total_credits_used',
                            'duration_metrics',
                          ],
                          description: "Metrics relating to a workflow's runs.",
                        }),
                    })
                    .openapi({
                      required: ['name', 'min_started_at', 'max_ended_at', 'timestamp', 'metrics'],
                    }),
                )
                .openapi({ description: 'Aggregate metrics for a workflow at a time granularity' }),
            })
            .openapi({
              required: ['next_page_token', 'items'],
              description: 'Project level timeseries metrics response',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsOrgSlugSummaryRoute = createRoute({
  method: 'get',
  path: '/insights/{org-slug}/summary',
  tags: ['Insights'],
  summary: 'Get summary metrics with trends for the entire org, and for each project.',
  description:
    'Gets aggregated summary metrics with trends for the entire org.\n              Also gets aggregated metrics and trends for each project belonging to the org.',
  operationId: 'getOrgSummaryData',
  request: {
    params: z.object({
      'org-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug',
            description:
              'Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
    }),
    query: z.object({
      'reporting-window': z
        .enum(['last-7-days', 'last-90-days', 'last-24-hours', 'last-30-days', 'last-60-days'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reporting-window',
            description:
              'The time window used to calculate summary metrics. If not provided, defaults to last-90-days',
            schema: {
              type: 'string',
              enum: [
                'last-7-days',
                'last-90-days',
                'last-24-hours',
                'last-30-days',
                'last-60-days',
              ],
            },
            required: false,
            example: 'last-90-days',
          },
        }),
      'project-names': z
        .object({})
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'project-names',
            description: 'List of project names.',
            schema: { type: 'object' },
            required: false,
            example:
              'For a single project: ?project-names=some-project or for multiple projects: ?project-names=some-project1&project-names=some-project2',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "summary metrics with trends for an entire org and it's projects.",
      content: {
        'application/json': {
          schema: z
            .object({
              org_data: z
                .object({
                  metrics: z
                    .object({
                      total_runs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description:
                            'The total number of runs, including runs that are still on-hold or running.',
                        }),
                      total_duration_secs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'Total duration, in seconds.',
                        }),
                      total_credits_used: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description:
                            'The total credits consumed over the current timeseries interval.',
                        }),
                      success_rate: z.float32(),
                      throughput: z
                        .float32()
                        .openapi({ description: 'The average number of runs per day.' }),
                    })
                    .openapi({
                      required: [
                        'total_runs',
                        'total_duration_secs',
                        'total_credits_used',
                        'success_rate',
                        'throughput',
                      ],
                      description: 'Metrics for a single org metrics.',
                    }),
                  trends: z
                    .object({
                      total_runs: z
                        .float32()
                        .openapi({ description: 'The trend value for total number of runs.' }),
                      total_duration_secs: z
                        .float32()
                        .openapi({ description: 'Trend value for total duration.' }),
                      total_credits_used: z
                        .float32()
                        .openapi({ description: 'The trend value for total credits consumed.' }),
                      success_rate: z
                        .float32()
                        .openapi({ description: 'The trend value for the success rate.' }),
                      throughput: z
                        .float32()
                        .openapi({
                          description: 'Trend value for the average number of runs per day.',
                        }),
                    })
                    .openapi({
                      required: [
                        'total_runs',
                        'total_duration_secs',
                        'total_credits_used',
                        'success_rate',
                        'throughput',
                      ],
                      description: 'Trends for a single org.',
                    }),
                })
                .openapi({
                  required: ['metrics', 'trends'],
                  description: 'Aggregated metrics for an org, with trends.',
                }),
              org_project_data: z
                .array(
                  z
                    .object({
                      project_name: z
                        .string()
                        .openapi({
                          description: 'The name of the project.',
                          example: 'api-preview-docs',
                        }),
                      metrics: z
                        .object({
                          total_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total credits consumed over the current timeseries interval.',
                            }),
                          total_duration_secs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'Total duration, in seconds.',
                            }),
                          total_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total number of runs, including runs that are still on-hold or running.',
                            }),
                          success_rate: z.float32(),
                        })
                        .openapi({
                          required: [
                            'total_credits_used',
                            'total_duration_secs',
                            'total_runs',
                            'success_rate',
                          ],
                          description: 'Metrics for a single project, across all branches.',
                        }),
                      trends: z
                        .object({
                          total_credits_used: z
                            .float32()
                            .openapi({
                              description: 'The trend value for total credits consumed.',
                            }),
                          total_duration_secs: z
                            .float32()
                            .openapi({ description: 'Trend value for total duration.' }),
                          total_runs: z
                            .float32()
                            .openapi({ description: 'The trend value for total number of runs.' }),
                          success_rate: z
                            .float32()
                            .openapi({ description: 'The trend value for the success rate.' }),
                        })
                        .openapi({
                          required: [
                            'total_credits_used',
                            'total_duration_secs',
                            'total_runs',
                            'success_rate',
                          ],
                          description: 'Trends for a single project, across all branches.',
                        }),
                    })
                    .openapi({ required: ['project_name', 'metrics', 'trends'] }),
                )
                .openapi({ description: 'Metrics for a single project, across all branches' }),
              all_projects: z
                .array(z.string())
                .openapi({
                  'x-nullable': true,
                  description: 'A list of all the project names in the organization.',
                }),
            })
            .openapi({
              required: ['org_data', 'org_project_data', 'all_projects'],
              description: 'Summary metrics with trends for the entire org, and for each project.',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugBranchesRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/branches',
  tags: ['Insights'],
  summary: 'Get all branches for a project',
  description:
    'Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.',
  operationId: 'getAllInsightsBranches',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      'workflow-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflow-name',
            description:
              'The name of a workflow. If not passed we will scope the API call to the project.',
            schema: { type: 'string' },
            required: false,
            example: 'build-and-test',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of branches for a project',
      content: {
        'application/json': {
          schema: z
            .object({
              org_id: z.any().openapi({ description: 'The unique ID of the organization' }),
              project_id: z.any().openapi({ description: 'The unique ID of the project' }),
              branches: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: "The VCS branch of a workflow's trigger.",
                      example: 'main',
                    }),
                )
                .openapi({ description: 'A list of all the branches for a given project.' }),
            })
            .openapi({
              required: ['org_id', 'project_id', 'branches'],
              description: 'Project branches response.',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugFlakyTestsRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/flaky-tests',
  tags: ['Insights'],
  summary: 'Get flaky tests for a project',
  description:
    'Get a list of flaky tests for a given project. Flaky tests are branch agnostic.\n             A flaky test is a test that passed and failed in the same commit.',
  operationId: 'getFlakyTests',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of flaky tests for a project',
      content: {
        'application/json': {
          schema: z
            .object({
              'flaky-tests': z
                .array(
                  z
                    .object({
                      'time-wasted': z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' })
                        .and(
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                        )
                        .exactOptional(),
                      'workflow-created-at': z
                        .string()
                        .openapi({ description: 'The date and time when workflow was created.' }),
                      'workflow-id': z
                        .any()
                        .openapi({
                          description:
                            'The ID of the workflow associated with the provided test counts',
                        }),
                      classname: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The class the test belongs to.',
                        }),
                      'pipeline-number': z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' })
                        .and(
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                        )
                        .openapi({ description: 'The number of the pipeline.' }),
                      'workflow-name': z
                        .string()
                        .openapi({ description: 'The name of the workflow.' }),
                      'test-name': z.string().openapi({ description: 'The name of the test.' }),
                      'job-name': z.string().openapi({ description: 'The name of the job.' }),
                      'job-number': z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' })
                        .and(
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                        )
                        .openapi({ description: 'The number of the job.' }),
                      'times-flaked': z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'The number of times the test flaked.',
                        }),
                      source: z
                        .string()
                        .openapi({ 'x-nullable': true, description: 'The source of the test.' }),
                      file: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The file the test belongs to.',
                        }),
                    })
                    .openapi({
                      required: [
                        'workflow-created-at',
                        'classname',
                        'job-number',
                        'times-flaked',
                        'source',
                        'pipeline-number',
                        'file',
                        'workflow-name',
                        'job-name',
                        'workflow-id',
                        'test-name',
                      ],
                    }),
                )
                .openapi({
                  description:
                    'A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer.',
                }),
              'total-flaky-tests': z
                .float64()
                .openapi({
                  description:
                    'A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.',
                  example: 5,
                }),
            })
            .openapi({
              required: ['flaky-tests', 'total-flaky-tests'],
              description: 'Flaky tests response',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugWorkflowsRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/workflows',
  tags: ['Insights'],
  summary: "Get summary metrics for a project's workflows",
  description:
    "Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.",
  operationId: 'getProjectWorkflowMetrics',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
      'all-branches': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'all-branches',
            description:
              'Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description:
              'The name of a vcs branch. If not passed we will scope the API call to the default branch.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'reporting-window': z
        .enum(['last-7-days', 'last-90-days', 'last-24-hours', 'last-30-days', 'last-60-days'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reporting-window',
            description:
              'The time window used to calculate summary metrics. If not provided, defaults to last-90-days',
            schema: {
              type: 'string',
              enum: [
                'last-7-days',
                'last-90-days',
                'last-24-hours',
                'last-30-days',
                'last-60-days',
              ],
            },
            required: false,
            example: 'last-90-days',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of summary metrics by workflow',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'The name of the workflow.',
                          example: 'build-and-test',
                        }),
                      metrics: z
                        .object({
                          total_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total number of runs, including runs that are still on-hold or running.',
                            }),
                          successful_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of successful runs.',
                            }),
                          mttr: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              'x-nullable': true,
                              description:
                                'The mean time to recovery (mean time between failures and their next success) in seconds.',
                            }),
                          total_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              'x-nullable': true,
                              description:
                                'The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.',
                            }),
                          failed_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of failed runs.',
                            }),
                          success_rate: z.float32(),
                          duration_metrics: z
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
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The minimum duration, in seconds, among a group of runs.',
                                }),
                              mean: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The mean duration, in seconds, among a group of runs.',
                                }),
                              median: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The median duration, in seconds, among a group of runs.',
                                }),
                              p95: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The 95th percentile duration, in seconds, among a group of runs.',
                                }),
                              max: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The max duration, in seconds, among a group of runs.',
                                }),
                              standard_deviation: z
                                .float32()
                                .openapi({
                                  'x-nullable': true,
                                  description:
                                    'The standard deviation, in seconds, among a group of runs.',
                                }),
                            })
                            .openapi({
                              required: [
                                'min',
                                'mean',
                                'median',
                                'p95',
                                'max',
                                'standard_deviation',
                              ],
                              description:
                                'Metrics relating to the duration of runs for a workflow.',
                            }),
                          total_recoveries: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              'x-nullable': true,
                              description: 'The number of recovered workflow executions per day.',
                            }),
                          throughput: z
                            .float32()
                            .openapi({ description: 'The average number of runs per day.' }),
                        })
                        .openapi({
                          required: [
                            'total_runs',
                            'successful_runs',
                            'mttr',
                            'total_credits_used',
                            'failed_runs',
                            'success_rate',
                            'duration_metrics',
                            'total_recoveries',
                            'throughput',
                          ],
                          description: "Metrics relating to a workflow's runs.",
                        }),
                      window_start: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The timestamp of the first build within the requested reporting window.',
                        }),
                      window_end: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The timestamp of the last build within the requested reporting window.',
                        }),
                      project_id: z.any().openapi({ description: 'The unique ID of the project' }),
                    })
                    .openapi({
                      required: ['name', 'metrics', 'window_start', 'window_end', 'project_id'],
                    }),
                )
                .openapi({ description: 'Workflow summary metrics.' }),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'Paginated workflow summary metrics.',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugWorkflowsWorkflowNameRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/workflows/{workflow-name}',
  tags: ['Insights'],
  summary: 'Get recent runs of a workflow',
  description:
    'Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.',
  operationId: 'getProjectWorkflowRuns',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      'workflow-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflow-name',
            description: 'The name of the workflow.',
            schema: { type: 'string' },
            required: true,
            example: 'build-and-test',
          },
        }),
    }),
    query: z.object({
      'all-branches': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'all-branches',
            description:
              'Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description:
              'The name of a vcs branch. If not passed we will scope the API call to the default branch.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
      'start-date': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start-date',
            description:
              'Include only executions that started at or after this date. This must be specified if an end-date is provided.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            example: '2020-08-21T13:26:29Z',
          },
        }),
      'end-date': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end-date',
            description:
              'Include only executions that started before this date. This date can be at most 90 days after the start-date.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
            example: '2020-09-04T13:26:29Z',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of recent workflow runs',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      id: z.uuid().openapi({ description: 'The unique ID of the workflow.' }),
                      branch: z
                        .string()
                        .openapi({
                          description: "The VCS branch of a Workflow's trigger.",
                          example: 'main',
                        }),
                      duration: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          'x-nullable': true,
                          description: 'The duration in seconds of a run.',
                        }),
                      created_at: z.iso
                        .datetime({ offset: true })
                        .openapi({ description: 'The date and time the workflow was created.' }),
                      stopped_at: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          'x-nullable': true,
                          description: 'The date and time the workflow stopped.',
                        }),
                      credits_used: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description:
                            'The number of credits used during execution. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.',
                        }),
                      status: z
                        .enum(['success', 'failed', 'error', 'canceled', 'unauthorized'])
                        .openapi({ 'x-nullable': true, description: 'Workflow status.' }),
                      is_approval: z
                        .boolean()
                        .openapi({
                          description:
                            'Describes if the job is an approval job or not. Approval jobs are intermediary jobs that are created to pause the workflow until approved.',
                          example: false,
                        }),
                    })
                    .openapi({
                      required: [
                        'id',
                        'branch',
                        'duration',
                        'created_at',
                        'stopped_at',
                        'credits_used',
                        'status',
                        'is_approval',
                      ],
                    }),
                )
                .openapi({ description: 'Recent workflow runs.' }),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'Paginated recent workflow runs.',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugWorkflowsWorkflowNameJobsRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/workflows/{workflow-name}/jobs',
  tags: ['Insights'],
  summary: "Get summary metrics for a project workflow's jobs.",
  description:
    "Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.",
  operationId: 'getProjectWorkflowJobMetrics',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      'workflow-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflow-name',
            description: 'The name of the workflow.',
            schema: { type: 'string' },
            required: true,
            example: 'build-and-test',
          },
        }),
    }),
    query: z.object({
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
      'all-branches': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'all-branches',
            description:
              'Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description:
              'The name of a vcs branch. If not passed we will scope the API call to the default branch.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'reporting-window': z
        .enum(['last-7-days', 'last-90-days', 'last-24-hours', 'last-30-days', 'last-60-days'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reporting-window',
            description:
              'The time window used to calculate summary metrics. If not provided, defaults to last-90-days',
            schema: {
              type: 'string',
              enum: [
                'last-7-days',
                'last-90-days',
                'last-24-hours',
                'last-30-days',
                'last-60-days',
              ],
            },
            required: false,
            example: 'last-90-days',
          },
        }),
      'job-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'job-name',
            description:
              'The name of the jobs you would like to filter from your workflow. If not specified, all workflow jobs will be returned. The job name can either be the full job name or just a substring of the job name.',
            schema: { type: 'string' },
            required: false,
            example: 'lint',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of summary metrics by workflow job.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      name: z.string().openapi({ description: 'The name of the job.' }),
                      metrics: z
                        .object({
                          total_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total number of runs, including runs that are still on-hold or running.',
                            }),
                          failed_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of failed runs.',
                            }),
                          successful_runs: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of successful runs.',
                            }),
                          duration_metrics: z
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
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The minimum duration, in seconds, among a group of runs.',
                                }),
                              mean: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The mean duration, in seconds, among a group of runs.',
                                }),
                              median: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The median duration, in seconds, among a group of runs.',
                                }),
                              p95: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The 95th percentile duration, in seconds, among a group of runs.',
                                }),
                              max: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'number' && Number.isSafeInteger(val)
                                      ? BigInt(val)
                                      : typeof val === 'string' && /^-?\d+$/.test(val)
                                        ? BigInt(val)
                                        : val,
                                  z.int64().min(0n),
                                )
                                .openapi({
                                  type: 'integer',
                                  format: 'int64',
                                  minimum: 0,
                                  'x-nullable': true,
                                  description:
                                    'The max duration, in seconds, among a group of runs.',
                                }),
                              standard_deviation: z
                                .float32()
                                .openapi({
                                  'x-nullable': true,
                                  description:
                                    'The standard deviation, in seconds, among a group of runs.',
                                }),
                            })
                            .openapi({
                              required: [
                                'min',
                                'mean',
                                'median',
                                'p95',
                                'max',
                                'standard_deviation',
                              ],
                              description:
                                'Metrics relating to the duration of runs for a workflow job.',
                            }),
                          success_rate: z.float32(),
                          total_credits_used: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description:
                                'The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.',
                            }),
                          throughput: z
                            .float32()
                            .openapi({ description: 'The average number of runs per day.' }),
                        })
                        .openapi({
                          required: [
                            'total_runs',
                            'failed_runs',
                            'successful_runs',
                            'duration_metrics',
                            'success_rate',
                            'total_credits_used',
                            'throughput',
                          ],
                          description: "Metrics relating to a workflow job's runs.",
                        }),
                      window_start: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The timestamp of the first build within the requested reporting window.',
                        }),
                      window_end: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The timestamp of the last build within the requested reporting window.',
                        }),
                    })
                    .openapi({ required: ['name', 'metrics', 'window_start', 'window_end'] }),
                )
                .openapi({ description: 'Job summary metrics.' }),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'Paginated workflow job summary metrics.',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugWorkflowsWorkflowNameSummaryRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/workflows/{workflow-name}/summary',
  tags: ['Insights'],
  summary: 'Get metrics and trends for workflows',
  description:
    'Get the metrics and trends for a particular workflow on a single branch or all branches',
  operationId: 'getWorkflowSummary',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      'workflow-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflow-name',
            description: 'The name of the workflow.',
            schema: { type: 'string' },
            required: true,
            example: 'build-and-test',
          },
        }),
    }),
    query: z.object({
      'all-branches': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'all-branches',
            description:
              'Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description:
              'The name of a vcs branch. If not passed we will scope the API call to the default branch.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metrics and trends for a workflow',
      content: {
        'application/json': {
          schema: z
            .object({
              metrics: z
                .object({
                  total_runs: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(0n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 0,
                      description:
                        'The total number of runs, including runs that are still on-hold or running.',
                    }),
                  successful_runs: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(0n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 0,
                      description: 'The number of successful runs.',
                    }),
                  mttr: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(0n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 0,
                      'x-nullable': true,
                      description:
                        'The mean time to recovery (mean time between failures and their next success) in seconds.',
                    }),
                  total_credits_used: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(0n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 0,
                      'x-nullable': true,
                      description:
                        'The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.',
                    }),
                  failed_runs: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(0n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 0,
                      description: 'The number of failed runs.',
                    }),
                  success_rate: z.float32(),
                  completed_runs: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64().min(0n),
                    )
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      minimum: 0,
                      'x-nullable': true,
                      description:
                        'The number of runs that ran to completion within the aggregation window',
                    }),
                  window_start: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The timestamp of the first build within the requested reporting window.',
                    }),
                  duration_metrics: z
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
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          'x-nullable': true,
                          description: 'The minimum duration, in seconds, among a group of runs.',
                        }),
                      mean: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          'x-nullable': true,
                          description: 'The mean duration, in seconds, among a group of runs.',
                        }),
                      median: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          'x-nullable': true,
                          description: 'The median duration, in seconds, among a group of runs.',
                        }),
                      p95: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          'x-nullable': true,
                          description:
                            'The 95th percentile duration, in seconds, among a group of runs.',
                        }),
                      max: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          'x-nullable': true,
                          description: 'The max duration, in seconds, among a group of runs.',
                        }),
                      standard_deviation: z
                        .float32()
                        .openapi({
                          'x-nullable': true,
                          description: 'The standard deviation, in seconds, among a group of runs.',
                        }),
                    })
                    .openapi({
                      required: ['min', 'mean', 'median', 'p95', 'max', 'standard_deviation'],
                      description: 'Metrics relating to the duration of runs for a workflow.',
                    }),
                  window_end: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The timestamp of the last build within the requested reporting window.',
                    }),
                  throughput: z
                    .float32()
                    .openapi({ description: 'The average number of runs per day.' }),
                })
                .openapi({
                  required: [
                    'total_runs',
                    'successful_runs',
                    'mttr',
                    'total_credits_used',
                    'failed_runs',
                    'success_rate',
                    'window_start',
                    'duration_metrics',
                    'window_end',
                    'throughput',
                    'completed_runs',
                  ],
                  description: 'Metrics aggregated across a workflow for a given time window.',
                }),
              trends: z
                .object({
                  total_runs: z
                    .float32()
                    .openapi({ description: 'The trend value for total number of runs.' }),
                  failed_runs: z
                    .float32()
                    .openapi({ description: 'The trend value for number of failed runs.' }),
                  success_rate: z
                    .float32()
                    .openapi({ description: 'The trend value for the success rate.' }),
                  p95_duration_secs: z
                    .float32()
                    .openapi({
                      description:
                        'Trend value for the 95th percentile duration for a workflow for a given time window.',
                    }),
                  median_duration_secs: z
                    .float32()
                    .openapi({
                      description:
                        'Trend value for the 50th percentile duration for a workflow for a given time window.',
                    }),
                  total_credits_used: z
                    .float32()
                    .openapi({ description: 'The trend value for total credits consumed.' }),
                  mttr: z
                    .float32()
                    .openapi({
                      description:
                        'trend for mean time to recovery (mean time between failures and their next success).',
                    }),
                  throughput: z
                    .float32()
                    .openapi({
                      description: 'Trend value for the average number of runs per day.',
                    }),
                })
                .openapi({
                  required: [
                    'total_runs',
                    'failed_runs',
                    'success_rate',
                    'p95_duration_secs',
                    'median_duration_secs',
                    'total_credits_used',
                    'mttr',
                    'throughput',
                  ],
                  description:
                    'Trends for aggregated metrics across a workflow for a given time window.',
                }),
              workflow_names: z
                .array(z.string())
                .openapi({ description: 'A list of all the workflow names for a given project.' }),
            })
            .openapi({
              required: ['metrics', 'trends', 'workflow_names'],
              description: 'Workflow level aggregated metrics and trends response',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRoute = createRoute({
  method: 'get',
  path: '/insights/{project-slug}/workflows/{workflow-name}/test-metrics',
  tags: ['Insights'],
  summary: "Get test metrics for a project's workflows",
  description:
    "Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.",
  operationId: 'getProjectWorkflowTestMetrics',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      'workflow-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'workflow-name',
            description: 'The name of the workflow.',
            schema: { type: 'string' },
            required: true,
            example: 'build-and-test',
          },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description:
              'The name of a vcs branch. If not passed we will scope the API call to the default branch.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'all-branches': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'all-branches',
            description:
              'Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of test metrics by workflow',
      content: {
        'application/json': {
          schema: z
            .object({
              average_test_count: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'The average number of tests executed per run',
                }),
              most_failed_tests: z
                .array(
                  z
                    .object({
                      p95_duration: z
                        .float64()
                        .openapi({
                          'x-nullable': true,
                          description:
                            'The 95th percentile duration, in seconds, among a group of test runs.',
                        }),
                      total_runs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'The total number of times the test was run.',
                        }),
                      classname: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The class the test belongs to.',
                        }),
                      failed_runs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'The number of times the test failed',
                        }),
                      flaky: z.boolean().openapi({ description: 'Whether the test is flaky.' }),
                      source: z
                        .string()
                        .openapi({ 'x-nullable': true, description: 'The source of the test.' }),
                      file: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The file the test belongs to.',
                        }),
                      job_name: z.string().openapi({ description: 'The name of the job.' }),
                      test_name: z.string().openapi({ description: 'The name of the test.' }),
                    })
                    .openapi({
                      required: [
                        'failed_runs',
                        'job_name',
                        'p95_duration',
                        'test_name',
                        'file',
                        'source',
                        'classname',
                        'total_runs',
                        'flaky',
                      ],
                    }),
                )
                .openapi({ description: 'Metrics for the most frequently failing tests' }),
              most_failed_tests_extra: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description:
                    'The number of tests with the same success rate being omitted from most_failed_tests',
                }),
              slowest_tests: z
                .array(
                  z
                    .object({
                      p95_duration: z
                        .float64()
                        .openapi({
                          'x-nullable': true,
                          description:
                            'The 95th percentile duration, in seconds, among a group of test runs.',
                        }),
                      total_runs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'The total number of times the test was run.',
                        }),
                      classname: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The class the test belongs to.',
                        }),
                      failed_runs: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description: 'The number of times the test failed',
                        }),
                      flaky: z.boolean().openapi({ description: 'Whether the test is flaky.' }),
                      source: z
                        .string()
                        .openapi({ 'x-nullable': true, description: 'The source of the test.' }),
                      file: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The file the test belongs to.',
                        }),
                      job_name: z.string().openapi({ description: 'The name of the job.' }),
                      test_name: z.string().openapi({ description: 'The name of the test.' }),
                    })
                    .openapi({
                      required: [
                        'failed_runs',
                        'job_name',
                        'p95_duration',
                        'test_name',
                        'file',
                        'source',
                        'classname',
                        'total_runs',
                        'flaky',
                      ],
                    }),
                )
                .openapi({ description: 'Metrics for the slowest running tests' }),
              slowest_tests_extra: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description:
                    'The number of tests with the same duration rate being omitted from slowest_tests',
                }),
              total_test_runs: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'The total number of test runs',
                }),
              test_runs: z
                .array(
                  z
                    .object({
                      pipeline_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 0,
                          description:
                            'The number of the pipeline associated with the provided test counts',
                        }),
                      workflow_id: z
                        .any()
                        .openapi({
                          description:
                            'The ID of the workflow associated with the provided test counts',
                        }),
                      success_rate: z
                        .float32()
                        .openapi({ description: 'The success rate calculated from test counts' }),
                      test_counts: z
                        .object({
                          error: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of tests with the error status',
                            }),
                          failure: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of tests with the failure status',
                            }),
                          skipped: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of tests with the skipped status',
                            }),
                          success: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The number of tests with the success status',
                            }),
                          total: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({
                              type: 'integer',
                              format: 'int64',
                              minimum: 0,
                              description: 'The total number of tests',
                            }),
                        })
                        .openapi({
                          required: ['error', 'failure', 'skipped', 'success', 'total'],
                          description: 'Test counts for a given pipeline number',
                        }),
                    })
                    .openapi({
                      required: ['pipeline_number', 'workflow_id', 'success_rate', 'test_counts'],
                    }),
                )
                .openapi({ description: 'Test counts grouped by pipeline number and workflow id' }),
            })
            .openapi({
              required: [
                'average_test_count',
                'most_failed_tests',
                'most_failed_tests_extra',
                'slowest_tests',
                'slowest_tests_extra',
                'total_test_runs',
                'test_runs',
              ],
              description: 'Project level test metrics response',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/jobs/{job-id}/cancel',
  tags: ['Job'],
  summary: 'Cancel job by job ID',
  description: 'Cancel job with a given job ID.',
  operationId: 'cancelJobByJobID',
  request: {
    params: z.object({
      'job-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'job-id',
            description: 'The unique ID of the job.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Job cancelled successfully.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    400: {
      description: 'Bad request error.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized error.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    403: {
      description: 'Forbidden error.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    404: {
      description: 'Job not found error.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['User'],
  summary: 'User Information',
  description: 'Provides information about the user that is currently signed in.',
  operationId: 'getCurrentUser',
  responses: {
    200: {
      description: 'User login information.',
      content: {
        'application/json': {
          schema: z
            .object({
              avatar_url: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description: "URL to the user's avatar on the VCS",
                }),
              id: z.uuid().openapi({ description: 'The unique ID of the user.' }),
              login: z
                .string()
                .openapi({
                  description: 'The login information for the user on the VCS.',
                  title: 'Login',
                }),
              name: z.string().openapi({ description: 'The name of the user.' }),
            })
            .openapi({ required: ['avatar_url', 'id', 'login', 'name'], title: 'User' }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMeCollaborationsRoute = createRoute({
  method: 'get',
  path: '/me/collaborations',
  tags: ['User'],
  summary: 'Collaborations',
  description:
    "Provides the set of organizations of which a user is a member or a collaborator.\n\nThe set of organizations that a user can collaborate on is composed of:\n\n* Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)\n* The parent organization of repository that the user can collaborate on, but is not necessarily a member of\n* The organization of the current user's account",
  operationId: 'getCollaborations',
  responses: {
    200: {
      description: 'Collaborations',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z
                  .uuid()
                  .openapi({ 'x-nullable': true, description: 'The UUID of the organization' }),
                'vcs-type': z.string().openapi({ description: 'The VCS provider' }),
                name: z.string().openapi({ description: 'The name of the organization' }),
                avatar_url: z
                  .string()
                  .openapi({ description: "URL to the user's avatar on the VCS" }),
                slug: z.string().openapi({ description: 'The slug of the organization' }),
              })
              .openapi({
                required: ['id', 'vcs-type', 'name', 'avatar_url', 'slug'],
                title: 'Collaboration',
              }),
          ),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postOrganizationRoute = createRoute({
  method: 'post',
  path: '/organization',
  tags: ['Organization'],
  summary: 'Create a new organization',
  description:
    'Create a new organization. For VCS providers (GitHub/Bitbucket), this validates access and syncs org data. For standalone orgs, this creates a new CircleCI organization.',
  operationId: 'createOrganization',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the organization.' }),
              vcs_type: z
                .enum(['github', 'bitbucket', 'circleci'])
                .openapi({
                  description: 'The version control system type for the organization.',
                  example: 'github',
                }),
            })
            .openapi({ required: ['name', 'vcs_type'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The newly created organization',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'The unique ID of the organization.' }),
              name: z.string().openapi({ description: 'The name of the organization.' }),
              slug: z
                .string()
                .openapi({
                  description:
                    'Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
                }),
              vcs_type: z
                .enum(['github', 'bitbucket', 'circleci'])
                .openapi({
                  description: 'The version control system type for the organization.',
                  example: 'github',
                }),
              avatar_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'The URL for the avatar for the organization.' }),
            })
            .openapi({ required: ['id', 'name', 'slug', 'vcs_type'] }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getOrganizationOrgSlugOrIdRoute = createRoute({
  method: 'get',
  path: '/organization/{org-slug-or-id}',
  tags: ['Organization'],
  summary: 'Get an organization',
  description: 'Retrieve an organization by slug or ID',
  operationId: 'getOrganization',
  request: {
    params: z.object({
      'org-slug-or-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug-or-id',
            description:
              'Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An organization object',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'The unique ID of the organization.' }),
              name: z.string().openapi({ description: 'The name of the organization.' }),
              slug: z
                .string()
                .openapi({
                  description:
                    'Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
                }),
              vcs_type: z
                .enum(['github', 'bitbucket', 'circleci'])
                .openapi({
                  description: 'The version control system type for the organization.',
                  example: 'github',
                }),
              avatar_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'The URL for the avatar for the organization.' }),
            })
            .openapi({ required: ['id', 'name', 'slug', 'vcs_type'] }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteOrganizationOrgSlugOrIdRoute = createRoute({
  method: 'delete',
  path: '/organization/{org-slug-or-id}',
  tags: ['Organization'],
  summary: 'Delete an organization',
  description:
    'Delete an organization. This action will delete all projects including all build data for the organization.',
  operationId: 'deleteOrganization',
  request: {
    params: z.object({
      'org-slug-or-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug-or-id',
            description:
              'Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postOrganizationOrgSlugOrIdProjectRoute = createRoute({
  method: 'post',
  path: '/organization/{org-slug-or-id}/project',
  tags: ['Project'],
  summary: 'Create a new project',
  description: 'Create a new project. Works for all organization types.',
  operationId: 'createProject',
  request: {
    params: z.object({
      'org-slug-or-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug-or-id',
            description:
              'Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name of the project', example: 'api-preview-docs' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The new project',
      content: {
        'application/json': {
          schema: z
            .object({
              slug: z
                .string()
                .openapi({
                  description:
                    'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              name: z
                .string()
                .openapi({ description: 'The name of the project', example: 'api-preview-docs' }),
              id: z.uuid(),
              organization_name: z
                .string()
                .openapi({
                  description: 'The name of the organization the project belongs to',
                  example: 'CircleCI-Public',
                }),
              organization_slug: z
                .string()
                .openapi({
                  description: 'The slug of the organization the project belongs to',
                  example: 'gh/CircleCI-Public',
                }),
              organization_id: z
                .uuid()
                .openapi({
                  description: 'The id of the organization the project belongs to',
                  example: 'ec6887ec-7d44-4b31-b468-7e552408ee32',
                }),
              vcs_info: z
                .object({
                  vcs_url: z
                    .string()
                    .openapi({
                      description: "URL to the repository hosting the project's code",
                      example: 'https://github.com/CircleCI-Public/api-preview-docs',
                    }),
                  provider: z
                    .enum(['Bitbucket', 'CircleCI', 'GitHub'])
                    .openapi({ description: 'The VCS provider' }),
                  default_branch: z.string().openapi({ example: 'main' }),
                })
                .openapi({
                  required: ['vcs_url', 'provider', 'default_branch'],
                  description: 'Information about the VCS that hosts the project source code.',
                }),
            })
            .openapi({
              required: [
                'slug',
                'name',
                'id',
                'organization_name',
                'organization_slug',
                'organization_id',
                'vcs_info',
              ],
              description: 'NOTE: The definition of Project is subject to change.',
              title: 'Project',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getOrganizationOrgSlugOrIdUrlOrbAllowListRoute = createRoute({
  method: 'get',
  path: '/organization/{org-slug-or-id}/url-orb-allow-list',
  tags: ['Organization'],
  summary: "List the entries in the org's URL Orb allow-list",
  description: "List the entries in the org's URL Orb allow-list",
  operationId: 'listURLOrbAllowListEntries',
  request: {
    params: z.object({
      'org-slug-or-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug-or-id',
            description:
              'Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'URL Orb allow-list entries',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    id: z
                      .string()
                      .openapi({
                        description: 'URL orb allow-list entry UUID.',
                        example: 'ba98990a-5a00-4cad-b55e-b44117b92e0c',
                      }),
                    name: z
                      .string()
                      .openapi({
                        description: 'Name of the URL orb allow-list entry.',
                        example: 'Allow URL orbs from raw.githubusercontent.com/CircleCI-Public',
                      }),
                    prefix: z
                      .any()
                      .openapi({
                        description:
                          'URL prefix. URL orb references that start with this prefix will be allowed by this allow-list entry.',
                        example:
                          'https://raw.githubusercontent.com/CircleCI-Public/orbs/refs/heads/main/',
                      }),
                    auth: z
                      .enum(['github-oauth', 'none', 'bitbucket-oauth', 'github-app'])
                      .openapi({
                        description:
                          'An authentication method to use for fetching URL orb references that match this allow-list entry\'s prefix. Allowed values are "bitbucket-oauth", "github-oauth", "github-app", or "none".',
                        example: 'github-app',
                      }),
                  })
                  .openapi({ required: ['id', 'name', 'prefix', 'auth'] }),
              ),
            })
            .openapi({ required: ['items'] }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postOrganizationOrgSlugOrIdUrlOrbAllowListRoute = createRoute({
  method: 'post',
  path: '/organization/{org-slug-or-id}/url-orb-allow-list',
  tags: ['Organization'],
  summary: 'Create a new URL Orb allow-list entry',
  description: 'Create a new URL Orb allow-list entry',
  operationId: 'createURLOrbAllowListEntry',
  request: {
    params: z.object({
      'org-slug-or-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug-or-id',
            description:
              'Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Name of the URL orb allow-list entry.',
                  example: 'Allow URL orbs from raw.githubusercontent.com/CircleCI-Public',
                }),
              prefix: z
                .any()
                .openapi({
                  description:
                    'URL prefix. URL orb references that start with this prefix will be allowed by this allow-list entry.',
                  example:
                    'https://raw.githubusercontent.com/CircleCI-Public/orbs/refs/heads/main/',
                }),
              auth: z
                .enum(['github-oauth', 'none', 'bitbucket-oauth', 'github-app'])
                .openapi({
                  description:
                    'An authentication method to use for fetching URL orb references that match this allow-list entry\'s prefix. Allowed values are "bitbucket-oauth", "github-oauth", "github-app", or "none".',
                  example: 'github-app',
                }),
            })
            .openapi({ required: ['name', 'prefix', 'auth'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The ID of the new URL Orb allow-list entry',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'URL orb allow-list entry UUID.',
                  example: 'ba98990a-5a00-4cad-b55e-b44117b92e0c',
                }),
              message: z
                .string()
                .openapi({
                  description: 'Message describing the outcome of an operation',
                  example: 'Created.',
                }),
            })
            .openapi({ required: ['id', 'message'] }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRoute = createRoute({
  method: 'delete',
  path: '/organization/{org-slug-or-id}/url-orb-allow-list/{allow-list-entry-id}',
  tags: ['Organization'],
  summary: "Remove an entry from the org's URL orb allow-list",
  description: "Remove an entry from the org's URL orb allow-list",
  operationId: 'removeURLOrbAllowListEntry',
  request: {
    params: z.object({
      'org-slug-or-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'org-slug-or-id',
            description:
              'Org UUID or slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public',
          },
        }),
      'allow-list-entry-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'allow-list-entry-id',
            description: 'URL orb allow-list entry UUID.',
            schema: { type: 'string' },
            required: true,
            example: 'ba98990a-5a00-4cad-b55e-b44117b92e0c',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The ID of the removed URL Orb allow-list entry',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'URL orb allow-list entry UUID.',
                  example: 'ba98990a-5a00-4cad-b55e-b44117b92e0c',
                }),
              message: z
                .string()
                .openapi({
                  description: 'Message describing the outcome of an operation',
                  example: 'Created.',
                }),
            })
            .openapi({ required: ['id', 'message'] }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPipelineRoute = createRoute({
  method: 'get',
  path: '/pipeline',
  tags: ['Pipeline'],
  summary: 'Get a list of pipelines',
  description:
    'Returns all pipelines for the most recently built projects (max 250) you follow in an organization.',
  operationId: 'listPipelines',
  request: {
    query: z.object({
      'org-slug': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org-slug',
            description:
              'Org slug in the form `vcs-slug/org-name`. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug` and replace the `org-name` with the organization ID (found in Organization Settings).',
            schema: { type: 'string' },
            required: false,
            example: 'gh/CircleCI-Public',
          },
        }),
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
      mine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'mine',
            description: 'Only include entries created by your user.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A sequence of pipelines.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    id: z
                      .uuid()
                      .openapi({
                        description: 'The unique ID of the pipeline.',
                        example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                      }),
                    errors: z
                      .array(
                        z
                          .object({
                            type: z
                              .enum([
                                'config',
                                'invalid-trigger-setup',
                                'config-fetch',
                                'timeout',
                                'permission',
                                'other',
                                'trigger-rule',
                                'plan',
                              ])
                              .openapi({ description: 'The type of error.' }),
                            message: z
                              .string()
                              .openapi({ description: 'A human-readable error message.' }),
                          })
                          .openapi({
                            required: ['type', 'message'],
                            description: 'An error with a type and message.',
                          }),
                      )
                      .openapi({
                        description: 'A sequence of errors that have occurred within the pipeline.',
                      }),
                    project_slug: z
                      .string()
                      .openapi({
                        description: 'The project-slug for the pipeline.',
                        example: 'gh/CircleCI-Public/api-preview-docs',
                      }),
                    updated_at: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'The date and time the pipeline was last updated.' }),
                    number: z
                      .preprocess(
                        (val) =>
                          typeof val === 'number' && Number.isSafeInteger(val)
                            ? BigInt(val)
                            : typeof val === 'string' && /^-?\d+$/.test(val)
                              ? BigInt(val)
                              : val,
                        z.int64(),
                      )
                      .openapi({
                        type: 'integer',
                        format: 'int64',
                        description: 'The number of the pipeline.',
                        example: 25,
                      }),
                    trigger_parameters: z
                      .record(
                        z.string(),
                        z.union([
                          z.string(),
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          z.boolean(),
                          z.object({}),
                        ]),
                      )
                      .exactOptional(),
                    state: z
                      .enum(['created', 'errored', 'setup-pending', 'setup', 'pending'])
                      .openapi({ description: 'The current state of the pipeline.' }),
                    created_at: z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'The date and time the pipeline was created.' }),
                    warnings: z
                      .array(
                        z
                          .object({
                            type: z.string().openapi({ description: 'The type of warning.' }),
                            message: z
                              .string()
                              .openapi({ description: 'A human-readable warning message.' }),
                            description: z
                              .string()
                              .openapi({ description: 'A short description of the warning type.' }),
                            url: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'A URL with more information about the warning.',
                              }),
                          })
                          .openapi({
                            required: ['type', 'message', 'description'],
                            description: 'A warning with a type and message.',
                          }),
                      )
                      .openapi({
                        description:
                          'A sequence of warnings that have occurred within the pipeline.',
                      }),
                    trigger: z
                      .object({
                        type: z
                          .enum(['scheduled_pipeline', 'explicit', 'api', 'webhook'])
                          .openapi({ description: 'The type of trigger.' }),
                        received_at: z.iso
                          .datetime({ offset: true })
                          .openapi({ description: 'The date and time the trigger was received.' }),
                        actor: z
                          .object({
                            login: z
                              .string()
                              .openapi({
                                description: 'The login information for the user on the VCS.',
                                title: 'Login',
                              }),
                            avatar_url: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: "URL to the user's avatar on the VCS",
                              }),
                          })
                          .openapi({
                            required: ['login', 'avatar_url'],
                            description: 'The user who triggered the Pipeline.',
                          }),
                      })
                      .openapi({
                        required: ['type', 'received_at', 'actor'],
                        description: 'A summary of the trigger.',
                      }),
                    vcs: z
                      .object({
                        provider_name: z
                          .string()
                          .openapi({
                            description: 'Name of the VCS provider (e.g. GitHub, Bitbucket).',
                            example: 'GitHub',
                          }),
                        target_repository_url: z
                          .string()
                          .openapi({
                            description:
                              'URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs',
                          }),
                        branch: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).',
                            example: 'feature/design-new-api',
                          }),
                        review_id: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The code review id.', example: '123' }),
                        review_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The code review URL.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs/pull/123',
                          }),
                        revision: z
                          .string()
                          .openapi({
                            'x-nullable': true,
                            description: 'The code revision the pipeline ran.',
                            example: 'f454a02b5d10fcccfd7d9dd7608a76d6493a98b4',
                          }),
                        tag: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.',
                            example: 'v3.1.4159',
                          }),
                        commit: z
                          .object({
                            subject: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: 'The subject of the commit message.',
                              }),
                            body: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: 'The body of the commit message.',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            required: ['subject', 'body'],
                            description: 'The latest commit in the pipeline.',
                          }),
                        origin_repository_url: z
                          .string()
                          .openapi({
                            description:
                              'URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        required: [
                          'provider_name',
                          'origin_repository_url',
                          'target_repository_url',
                          'revision',
                        ],
                        description: 'VCS information for the pipeline.',
                      }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'number',
                      'project_slug',
                      'created_at',
                      'errors',
                      'warnings',
                      'state',
                      'trigger',
                    ],
                    description: 'A pipeline response.',
                    title: 'Pipeline',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'List of pipelines',
              title: 'PipelineListResponse',
            }),
        },
      },
      links: {
        NextPipelinePage: {
          operationId: 'listPipelines',
          parameters: { 'page-token': '$response.body#/next_page_token' },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postPipelineContinueRoute = createRoute({
  method: 'post',
  path: '/pipeline/continue',
  tags: ['Pipeline'],
  summary: 'Continue a pipeline',
  description:
    'Continue a pipeline from the setup phase. For information on using pipeline parameters with dynamic configuration, see the [Pipeline values and parameters](https://circleci.com/docs/pipeline-variables/#pipeline-parameters-and-dynamic-configuration) docs.',
  operationId: 'continuePipeline',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'continuation-key': z
                .string()
                .openapi({
                  description: 'A pipeline continuation key.',
                  title: 'PipelineContinuationKey',
                }),
              configuration: z
                .string()
                .openapi({ description: 'A configuration string for the pipeline.' }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .exactOptional()
                .openapi({
                  description:
                    'An object containing pipeline parameters and their values. Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.',
                  example: { deploy_prod: true },
                }),
            })
            .openapi({ required: ['continuation-key', 'configuration'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPipelinePipelineIdRoute = createRoute({
  method: 'get',
  path: '/pipeline/{pipeline-id}',
  tags: ['Pipeline'],
  summary: 'Get a pipeline by ID',
  description: 'Returns a pipeline by the pipeline ID.',
  operationId: 'getPipelineById',
  request: {
    params: z.object({
      'pipeline-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'pipeline-id',
            description: 'The unique ID of the pipeline.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A pipeline object.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'The unique ID of the pipeline.',
                  example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                }),
              errors: z
                .array(
                  z
                    .object({
                      type: z
                        .enum([
                          'config',
                          'invalid-trigger-setup',
                          'config-fetch',
                          'timeout',
                          'permission',
                          'other',
                          'trigger-rule',
                          'plan',
                        ])
                        .openapi({ description: 'The type of error.' }),
                      message: z
                        .string()
                        .openapi({ description: 'A human-readable error message.' }),
                    })
                    .openapi({
                      required: ['type', 'message'],
                      description: 'An error with a type and message.',
                    }),
                )
                .openapi({
                  description: 'A sequence of errors that have occurred within the pipeline.',
                }),
              project_slug: z
                .string()
                .openapi({
                  description: 'The project-slug for the pipeline.',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              updated_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The date and time the pipeline was last updated.' }),
              number: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'The number of the pipeline.',
                  example: 25,
                }),
              trigger_parameters: z
                .record(
                  z.string(),
                  z.union([
                    z.string(),
                    z
                      .preprocess(
                        (val) =>
                          typeof val === 'number' && Number.isSafeInteger(val)
                            ? BigInt(val)
                            : typeof val === 'string' && /^-?\d+$/.test(val)
                              ? BigInt(val)
                              : val,
                        z.int64(),
                      )
                      .openapi({ type: 'integer', format: 'int64' }),
                    z.boolean(),
                    z.object({}),
                  ]),
                )
                .exactOptional(),
              state: z
                .enum(['created', 'errored', 'setup-pending', 'setup', 'pending'])
                .openapi({ description: 'The current state of the pipeline.' }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was created.' }),
              warnings: z
                .array(
                  z
                    .object({
                      type: z.string().openapi({ description: 'The type of warning.' }),
                      message: z
                        .string()
                        .openapi({ description: 'A human-readable warning message.' }),
                      description: z
                        .string()
                        .openapi({ description: 'A short description of the warning type.' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A URL with more information about the warning.' }),
                    })
                    .openapi({
                      required: ['type', 'message', 'description'],
                      description: 'A warning with a type and message.',
                    }),
                )
                .openapi({
                  description: 'A sequence of warnings that have occurred within the pipeline.',
                }),
              trigger: z
                .object({
                  type: z
                    .enum(['scheduled_pipeline', 'explicit', 'api', 'webhook'])
                    .openapi({ description: 'The type of trigger.' }),
                  received_at: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'The date and time the trigger was received.' }),
                  actor: z
                    .object({
                      login: z
                        .string()
                        .openapi({
                          description: 'The login information for the user on the VCS.',
                          title: 'Login',
                        }),
                      avatar_url: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: "URL to the user's avatar on the VCS",
                        }),
                    })
                    .openapi({
                      required: ['login', 'avatar_url'],
                      description: 'The user who triggered the Pipeline.',
                    }),
                })
                .openapi({
                  required: ['type', 'received_at', 'actor'],
                  description: 'A summary of the trigger.',
                }),
              vcs: z
                .object({
                  provider_name: z
                    .string()
                    .openapi({
                      description: 'Name of the VCS provider (e.g. GitHub, Bitbucket).',
                      example: 'GitHub',
                    }),
                  target_repository_url: z
                    .string()
                    .openapi({
                      description:
                        'URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.',
                      example: 'https://github.com/CircleCI-Public/api-preview-docs',
                    }),
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).',
                      example: 'feature/design-new-api',
                    }),
                  review_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The code review id.', example: '123' }),
                  review_url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The code review URL.',
                      example: 'https://github.com/CircleCI-Public/api-preview-docs/pull/123',
                    }),
                  revision: z
                    .string()
                    .openapi({
                      'x-nullable': true,
                      description: 'The code revision the pipeline ran.',
                      example: 'f454a02b5d10fcccfd7d9dd7608a76d6493a98b4',
                    }),
                  tag: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.',
                      example: 'v3.1.4159',
                    }),
                  commit: z
                    .object({
                      subject: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The subject of the commit message.',
                        }),
                      body: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The body of the commit message.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      required: ['subject', 'body'],
                      description: 'The latest commit in the pipeline.',
                    }),
                  origin_repository_url: z
                    .string()
                    .openapi({
                      description:
                        'URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.',
                      example: 'https://github.com/CircleCI-Public/api-preview-docs',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'provider_name',
                    'origin_repository_url',
                    'target_repository_url',
                    'revision',
                  ],
                  description: 'VCS information for the pipeline.',
                }),
            })
            .openapi({
              required: [
                'id',
                'number',
                'project_slug',
                'created_at',
                'errors',
                'warnings',
                'state',
                'trigger',
              ],
              description: 'A pipeline response.',
              title: 'Pipeline',
            }),
        },
      },
      links: {
        ProjectFromPipeline: {
          operationId: 'getProjectBySlug',
          parameters: { project_slug: '$response.body#/project_slug' },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPipelinePipelineIdConfigRoute = createRoute({
  method: 'get',
  path: '/pipeline/{pipeline-id}/config',
  tags: ['Pipeline'],
  summary: "Get a pipeline's configuration",
  description: "Returns a pipeline's configuration by ID.",
  operationId: 'getPipelineConfigById',
  request: {
    params: z.object({
      'pipeline-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'pipeline-id',
            description: 'The unique ID of the pipeline.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The configuration strings for the pipeline.',
      content: {
        'application/json': {
          schema: z
            .object({
              source: z
                .string()
                .openapi({
                  description:
                    'The source configuration for the pipeline, before any config compilation has been performed. If there is no config, then this field will be empty.',
                }),
              compiled: z
                .string()
                .openapi({
                  description:
                    "The compiled configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's configuration, then this field may be empty.",
                }),
              'setup-config': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The setup configuration for the pipeline used for Setup Workflows. If there were errors processing the pipeline's configuration or if setup workflows are not enabled, then this field should not exist",
                }),
              'compiled-setup-config': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The compiled setup configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's setup workflows, then this field may be empty.",
                }),
            })
            .openapi({
              required: ['source', 'compiled'],
              description: 'The configuration strings for the pipeline.',
              title: 'PipelineConfig',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPipelinePipelineIdWorkflowRoute = createRoute({
  method: 'get',
  path: '/pipeline/{pipeline-id}/workflow',
  tags: ['Pipeline'],
  summary: "Get a pipeline's workflows",
  description: 'Returns a paginated list of workflows by pipeline ID.',
  operationId: 'listWorkflowsByPipelineId',
  request: {
    params: z.object({
      'pipeline-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'pipeline-id',
            description: 'The unique ID of the pipeline.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
    query: z.object({
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of workflow objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      pipeline_id: z
                        .uuid()
                        .openapi({
                          description: 'The ID of the pipeline this workflow belongs to.',
                          example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                        }),
                      canceled_by: z.uuid().exactOptional(),
                      id: z.uuid().openapi({ description: 'The unique ID of the workflow.' }),
                      auto_rerun_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(1n),
                        )
                        .exactOptional()
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 1,
                          description:
                            'Present if this workflow was auto-rerun from a previous workflow. The Nth auto-rerun workflow will have auto_rerun_number N',
                          example: 1,
                        }),
                      name: z
                        .string()
                        .openapi({
                          description: 'The name of the workflow.',
                          example: 'build-and-test',
                        }),
                      project_slug: z
                        .string()
                        .openapi({
                          description:
                            'The project-slug for the pipeline this workflow belongs to.',
                          example: 'gh/CircleCI-Public/api-preview-docs',
                        }),
                      errored_by: z.uuid().exactOptional(),
                      tag: z
                        .literal('setup')
                        .exactOptional()
                        .openapi({
                          'x-nullable': true,
                          description: 'Tag used for the workflow',
                          example: 'setup',
                        }),
                      status: z
                        .enum([
                          'success',
                          'running',
                          'not_run',
                          'failed',
                          'error',
                          'failing',
                          'on_hold',
                          'canceled',
                          'unauthorized',
                        ])
                        .openapi({ description: 'The current status of the workflow.' }),
                      started_by: z.uuid(),
                      max_auto_reruns: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(1n),
                        )
                        .exactOptional()
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          minimum: 1,
                          description:
                            'The maximum number of auto reruns specified for the workflow.',
                          example: 5,
                        }),
                      pipeline_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({
                          type: 'integer',
                          format: 'int64',
                          description: 'The number of the pipeline this workflow belongs to.',
                          example: 25,
                        }),
                      created_at: z.iso
                        .datetime({ offset: true })
                        .openapi({ description: 'The date and time the workflow was created.' }),
                      stopped_at: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          'x-nullable': true,
                          description: 'The date and time the workflow stopped.',
                        }),
                    })
                    .openapi({
                      required: [
                        'id',
                        'name',
                        'status',
                        'created_at',
                        'stopped_at',
                        'pipeline_id',
                        'pipeline_number',
                        'project_slug',
                        'started_by',
                      ],
                      description: 'A workflow',
                      title: 'Workflow',
                    }),
                )
                .openapi({ description: 'A list of workflows.', title: 'Workflow list' }),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'A list of workflows and associated pagination token.',
              title: 'WorkflowListResponse',
            }),
        },
      },
      links: {
        NextPipelineWorkflowsPage: {
          operationId: 'listWorkflowsByPipelineId',
          parameters: {
            'pipeline-id': '$request.path.pipeline-id',
            'page-token': '$response.body#/next_page_token',
          },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}',
  tags: ['Project'],
  summary: 'Get a project',
  description: 'Retrieves a project by project slug.',
  operationId: 'getProjectBySlug',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A project object',
      content: {
        'application/json': {
          schema: z
            .object({
              slug: z
                .string()
                .openapi({
                  description:
                    'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              name: z
                .string()
                .openapi({ description: 'The name of the project', example: 'api-preview-docs' }),
              id: z.uuid(),
              organization_name: z
                .string()
                .openapi({
                  description: 'The name of the organization the project belongs to',
                  example: 'CircleCI-Public',
                }),
              organization_slug: z
                .string()
                .openapi({
                  description: 'The slug of the organization the project belongs to',
                  example: 'gh/CircleCI-Public',
                }),
              organization_id: z
                .uuid()
                .openapi({
                  description: 'The id of the organization the project belongs to',
                  example: 'ec6887ec-7d44-4b31-b468-7e552408ee32',
                }),
              vcs_info: z
                .object({
                  vcs_url: z
                    .string()
                    .openapi({
                      description: "URL to the repository hosting the project's code",
                      example: 'https://github.com/CircleCI-Public/api-preview-docs',
                    }),
                  provider: z
                    .enum(['Bitbucket', 'CircleCI', 'GitHub'])
                    .openapi({ description: 'The VCS provider' }),
                  default_branch: z.string().openapi({ example: 'main' }),
                })
                .openapi({
                  required: ['vcs_url', 'provider', 'default_branch'],
                  description: 'Information about the VCS that hosts the project source code.',
                }),
            })
            .openapi({
              required: [
                'slug',
                'name',
                'id',
                'organization_name',
                'organization_slug',
                'organization_id',
                'vcs_info',
              ],
              description: 'NOTE: The definition of Project is subject to change.',
              title: 'Project',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteProjectProjectSlugRoute = createRoute({
  method: 'delete',
  path: '/project/{project-slug}',
  tags: ['Project'],
  summary: 'Delete a project',
  description: 'Deletes a project by project slug',
  operationId: 'deleteProjectBySlug',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugCheckoutKeyRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/checkout-key',
  tags: ['Project'],
  summary: 'Get all checkout keys',
  description: 'Returns a sequence of checkout keys for `:project`.',
  operationId: 'listCheckoutKeys',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      digest: z
        .enum(['sha256', 'md5'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'digest',
            description:
              'The fingerprint digest type to return. This may be either `md5` or `sha256`. If not passed, defaults to `md5`.',
            schema: { type: 'string', enum: ['sha256', 'md5'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A sequence of checkout keys.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    'public-key': z
                      .string()
                      .openapi({ description: 'A public SSH key.', example: 'ssh-rsa ...' }),
                    type: z
                      .enum(['deploy-key', 'github-user-key'])
                      .openapi({
                        description:
                          'The type of checkout key. This may be either `deploy-key` or `github-user-key`.',
                        title: 'CheckoutKeyType',
                        example: 'deploy-key',
                      }),
                    fingerprint: z
                      .string()
                      .openapi({
                        description: 'An SSH key fingerprint.',
                        example: 'c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f',
                      }),
                    preferred: z
                      .boolean()
                      .openapi({
                        description: 'A boolean value that indicates if this key is preferred.',
                        example: true,
                      }),
                    'created-at': z.iso
                      .datetime({ offset: true })
                      .openapi({
                        description: 'The date and time the checkout key was created.',
                        example: '2015-09-21T17:29:21.042Z',
                      }),
                  })
                  .openapi({
                    required: ['public-key', 'type', 'fingerprint', 'preferred', 'created-at'],
                    description: 'A checkout key',
                    title: 'CheckoutKey',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({ required: ['items', 'next_page_token'], title: 'CheckoutKeyListResponse' }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postProjectProjectSlugCheckoutKeyRoute = createRoute({
  method: 'post',
  path: '/project/{project-slug}/checkout-key',
  tags: ['Project'],
  summary: 'Create a new checkout key',
  description:
    'Not available to projects that use GitLab or GitHub App. Creates a new checkout key. This API request is only usable with a user API token.\n                           Please ensure that you have authorized your account with GitHub before creating user keys.\n                           This is necessary to give CircleCI the permission to create a user key associated with\n                           your GitHub user account. You can find this page by visiting Project Settings > Checkout SSH Keys',
  operationId: 'createCheckoutKey',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['user-key', 'deploy-key'])
                .openapi({
                  description:
                    'The type of checkout key to create. This may be either `deploy-key` or `user-key`.',
                  title: 'CheckoutKeyInputType',
                  example: 'deploy-key',
                }),
            })
            .openapi({ required: ['type'], title: 'CheckoutKeyInput' }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The checkout key.',
      content: {
        'application/json': {
          schema: z
            .object({
              'public-key': z
                .string()
                .openapi({ description: 'A public SSH key.', example: 'ssh-rsa ...' }),
              type: z
                .enum(['deploy-key', 'github-user-key'])
                .openapi({
                  description:
                    'The type of checkout key. This may be either `deploy-key` or `github-user-key`.',
                  title: 'CheckoutKeyType',
                  example: 'deploy-key',
                }),
              fingerprint: z
                .string()
                .openapi({
                  description: 'An SSH key fingerprint.',
                  example: 'c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f',
                }),
              preferred: z
                .boolean()
                .openapi({
                  description: 'A boolean value that indicates if this key is preferred.',
                  example: true,
                }),
              'created-at': z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date and time the checkout key was created.',
                  example: '2015-09-21T17:29:21.042Z',
                }),
            })
            .openapi({
              required: ['public-key', 'type', 'fingerprint', 'preferred', 'created-at'],
              description: 'A checkout key',
              title: 'CheckoutKey',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugCheckoutKeyFingerprintRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/checkout-key/{fingerprint}',
  tags: ['Project'],
  summary: 'Get a checkout key',
  description:
    'Returns an individual checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.',
  operationId: 'getCheckoutKey',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      fingerprint: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'fingerprint',
            description: 'An SSH key fingerprint.',
            schema: { type: 'string' },
            required: true,
            example: 'c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The checkout key.',
      content: {
        'application/json': {
          schema: z
            .object({
              'public-key': z
                .string()
                .openapi({ description: 'A public SSH key.', example: 'ssh-rsa ...' }),
              type: z
                .enum(['deploy-key', 'github-user-key'])
                .openapi({
                  description:
                    'The type of checkout key. This may be either `deploy-key` or `github-user-key`.',
                  title: 'CheckoutKeyType',
                  example: 'deploy-key',
                }),
              fingerprint: z
                .string()
                .openapi({
                  description: 'An SSH key fingerprint.',
                  example: 'c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f',
                }),
              preferred: z
                .boolean()
                .openapi({
                  description: 'A boolean value that indicates if this key is preferred.',
                  example: true,
                }),
              'created-at': z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date and time the checkout key was created.',
                  example: '2015-09-21T17:29:21.042Z',
                }),
            })
            .openapi({
              required: ['public-key', 'type', 'fingerprint', 'preferred', 'created-at'],
              description: 'A checkout key',
              title: 'CheckoutKey',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteProjectProjectSlugCheckoutKeyFingerprintRoute = createRoute({
  method: 'delete',
  path: '/project/{project-slug}/checkout-key/{fingerprint}',
  tags: ['Project'],
  summary: 'Delete a checkout key',
  description:
    'Deletes the checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.',
  operationId: 'deleteCheckoutKey',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      fingerprint: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'fingerprint',
            description: 'An SSH key fingerprint.',
            schema: { type: 'string' },
            required: true,
            example: 'c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugEnvvarRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/envvar',
  tags: ['Project'],
  summary: 'List all environment variables',
  description:
    "Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.",
  operationId: 'listEnvVars',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A sequence of environment variables.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    name: z
                      .string()
                      .openapi({
                        description: 'The name of the environment variable.',
                        example: 'foo',
                      }),
                    value: z
                      .string()
                      .openapi({
                        description: 'The value of the environment variable.',
                        example: 'xxxx1234',
                      }),
                    'created-at': z
                      .any()
                      .exactOptional()
                      .openapi({
                        'x-nullable': true,
                        description: 'The creation timestamp of the environment variable.',
                        example: '#joda/inst 2023-04-14T21:20:14+0000',
                      }),
                  })
                  .openapi({
                    required: ['name', 'value'],
                    description:
                      'An environment variable is a map containing a value and an optional timestamp.',
                    title: 'EnvironmentVariable',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              title: 'EnvironmentVariableListResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postProjectProjectSlugEnvvarRoute = createRoute({
  method: 'post',
  path: '/project/{project-slug}/envvar',
  tags: ['Project'],
  summary: 'Create an environment variable',
  description: 'Creates a new environment variable.',
  operationId: 'createEnvVar',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name of the environment variable.', example: 'foo' }),
              value: z
                .string()
                .openapi({
                  description: 'The value of the environment variable.',
                  example: 'xxxx1234',
                }),
            })
            .openapi({
              required: ['name', 'value'],
              description: 'An environment variable request requires a name and a value',
              title: 'EnvironmentVariable',
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The environment variable.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name of the environment variable.', example: 'foo' }),
              value: z
                .string()
                .openapi({
                  description: 'The value of the environment variable.',
                  example: 'xxxx1234',
                }),
              'created-at': z
                .any()
                .exactOptional()
                .openapi({
                  'x-nullable': true,
                  description: 'The creation timestamp of the environment variable.',
                  example: '#joda/inst 2023-04-14T21:20:14+0000',
                }),
            })
            .openapi({
              required: ['name', 'value'],
              description:
                'An environment variable is a map containing a value and an optional timestamp.',
              title: 'EnvironmentVariable',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugEnvvarNameRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/envvar/{name}',
  tags: ['Project'],
  summary: 'Get a masked environment variable',
  description: 'Returns the masked value of environment variable :name.',
  operationId: 'getEnvVar',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            description: 'The name of the environment variable.',
            schema: { type: 'string' },
            required: true,
            example: 'foo',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The environment variable.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name of the environment variable.', example: 'foo' }),
              value: z
                .string()
                .openapi({
                  description: 'The value of the environment variable.',
                  example: 'xxxx1234',
                }),
              'created-at': z
                .any()
                .exactOptional()
                .openapi({
                  'x-nullable': true,
                  description: 'The creation timestamp of the environment variable.',
                  example: '#joda/inst 2023-04-14T21:20:14+0000',
                }),
            })
            .openapi({
              required: ['name', 'value'],
              description:
                'An environment variable is a map containing a value and an optional timestamp.',
              title: 'EnvironmentVariable',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteProjectProjectSlugEnvvarNameRoute = createRoute({
  method: 'delete',
  path: '/project/{project-slug}/envvar/{name}',
  tags: ['Project'],
  summary: 'Delete an environment variable',
  description: 'Deletes the environment variable named :name.',
  operationId: 'deleteEnvVar',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            description: 'The name of the environment variable.',
            schema: { type: 'string' },
            required: true,
            example: 'foo',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postProjectProjectSlugJobJobNumberCancelRoute = createRoute({
  method: 'post',
  path: '/project/{project-slug}/job/{job-number}/cancel',
  tags: ['Job'],
  summary: 'Cancel job by job number',
  description: 'Cancel job with a given job number.',
  operationId: 'cancelJobByJobNumber',
  request: {
    params: z.object({
      'job-number': z
        .any()
        .openapi({
          param: {
            in: 'path',
            name: 'job-number',
            description: 'The number of the job.',
            schema: {},
            required: true,
            example: '123',
          },
        }),
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugPipelineRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/pipeline',
  tags: ['Pipeline'],
  summary: 'Get all pipelines',
  description: 'Returns all pipelines for this project.',
  operationId: 'listPipelinesForProject',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'branch',
            description: 'The name of a vcs branch.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A sequence of pipelines.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    id: z
                      .uuid()
                      .openapi({
                        description: 'The unique ID of the pipeline.',
                        example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                      }),
                    errors: z
                      .array(
                        z
                          .object({
                            type: z
                              .enum([
                                'config',
                                'invalid-trigger-setup',
                                'config-fetch',
                                'timeout',
                                'permission',
                                'other',
                                'trigger-rule',
                                'plan',
                              ])
                              .openapi({ description: 'The type of error.' }),
                            message: z
                              .string()
                              .openapi({ description: 'A human-readable error message.' }),
                          })
                          .openapi({
                            required: ['type', 'message'],
                            description: 'An error with a type and message.',
                          }),
                      )
                      .openapi({
                        description: 'A sequence of errors that have occurred within the pipeline.',
                      }),
                    project_slug: z
                      .string()
                      .openapi({
                        description: 'The project-slug for the pipeline.',
                        example: 'gh/CircleCI-Public/api-preview-docs',
                      }),
                    updated_at: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'The date and time the pipeline was last updated.' }),
                    number: z
                      .preprocess(
                        (val) =>
                          typeof val === 'number' && Number.isSafeInteger(val)
                            ? BigInt(val)
                            : typeof val === 'string' && /^-?\d+$/.test(val)
                              ? BigInt(val)
                              : val,
                        z.int64(),
                      )
                      .openapi({
                        type: 'integer',
                        format: 'int64',
                        description: 'The number of the pipeline.',
                        example: 25,
                      }),
                    trigger_parameters: z
                      .record(
                        z.string(),
                        z.union([
                          z.string(),
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          z.boolean(),
                          z.object({}),
                        ]),
                      )
                      .exactOptional(),
                    state: z
                      .enum(['created', 'errored', 'setup-pending', 'setup', 'pending'])
                      .openapi({ description: 'The current state of the pipeline.' }),
                    created_at: z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'The date and time the pipeline was created.' }),
                    warnings: z
                      .array(
                        z
                          .object({
                            type: z.string().openapi({ description: 'The type of warning.' }),
                            message: z
                              .string()
                              .openapi({ description: 'A human-readable warning message.' }),
                            description: z
                              .string()
                              .openapi({ description: 'A short description of the warning type.' }),
                            url: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'A URL with more information about the warning.',
                              }),
                          })
                          .openapi({
                            required: ['type', 'message', 'description'],
                            description: 'A warning with a type and message.',
                          }),
                      )
                      .openapi({
                        description:
                          'A sequence of warnings that have occurred within the pipeline.',
                      }),
                    trigger: z
                      .object({
                        type: z
                          .enum(['scheduled_pipeline', 'explicit', 'api', 'webhook'])
                          .openapi({ description: 'The type of trigger.' }),
                        received_at: z.iso
                          .datetime({ offset: true })
                          .openapi({ description: 'The date and time the trigger was received.' }),
                        actor: z
                          .object({
                            login: z
                              .string()
                              .openapi({
                                description: 'The login information for the user on the VCS.',
                                title: 'Login',
                              }),
                            avatar_url: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: "URL to the user's avatar on the VCS",
                              }),
                          })
                          .openapi({
                            required: ['login', 'avatar_url'],
                            description: 'The user who triggered the Pipeline.',
                          }),
                      })
                      .openapi({
                        required: ['type', 'received_at', 'actor'],
                        description: 'A summary of the trigger.',
                      }),
                    vcs: z
                      .object({
                        provider_name: z
                          .string()
                          .openapi({
                            description: 'Name of the VCS provider (e.g. GitHub, Bitbucket).',
                            example: 'GitHub',
                          }),
                        target_repository_url: z
                          .string()
                          .openapi({
                            description:
                              'URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs',
                          }),
                        branch: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).',
                            example: 'feature/design-new-api',
                          }),
                        review_id: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The code review id.', example: '123' }),
                        review_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The code review URL.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs/pull/123',
                          }),
                        revision: z
                          .string()
                          .openapi({
                            'x-nullable': true,
                            description: 'The code revision the pipeline ran.',
                            example: 'f454a02b5d10fcccfd7d9dd7608a76d6493a98b4',
                          }),
                        tag: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.',
                            example: 'v3.1.4159',
                          }),
                        commit: z
                          .object({
                            subject: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: 'The subject of the commit message.',
                              }),
                            body: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: 'The body of the commit message.',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            required: ['subject', 'body'],
                            description: 'The latest commit in the pipeline.',
                          }),
                        origin_repository_url: z
                          .string()
                          .openapi({
                            description:
                              'URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        required: [
                          'provider_name',
                          'origin_repository_url',
                          'target_repository_url',
                          'revision',
                        ],
                        description: 'VCS information for the pipeline.',
                      }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'number',
                      'project_slug',
                      'created_at',
                      'errors',
                      'warnings',
                      'state',
                      'trigger',
                    ],
                    description: 'A pipeline response.',
                    title: 'Pipeline',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'List of pipelines',
              title: 'PipelineListResponse',
            }),
        },
      },
      links: {
        NextPipelinePage: {
          operationId: 'listPipelinesForProject',
          parameters: {
            'project-slug': '$request.path.project-slug',
            'page-token': '$response.body#/next_page_token',
          },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postProjectProjectSlugPipelineRoute = createRoute({
  method: 'post',
  path: '/project/{project-slug}/pipeline',
  tags: ['Pipeline'],
  summary: 'Trigger a new pipeline',
  description:
    '**[This endpoint is superseded by the [new Trigger Pipeline API](#tag/Pipeline/operation/triggerPipelineRun), which supports all organization and pipeline types except GitLab.]** Triggers a new pipeline on the project. Does not support triggering pipelines integrated with GitLab or GitHub App.',
  operationId: 'triggerPipeline',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              branch: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).',
                  example: 'feature/design-new-api',
                }),
              tag: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.',
                  example: 'v3.1.4159',
                }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .exactOptional()
                .openapi({
                  description:
                    'An object containing pipeline parameters and their values. Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.',
                  example: { deploy_prod: true },
                }),
            })
            .openapi({
              'x-nullable': true,
              description: 'The information you can supply when triggering a pipeline.',
              title: 'TriggerPipelineParameters',
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The created pipeline.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'The unique ID of the pipeline.',
                  example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                }),
              state: z
                .enum(['created', 'errored', 'setup-pending', 'setup', 'pending'])
                .openapi({ description: 'The current state of the pipeline.' }),
              number: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'The number of the pipeline.',
                  example: 25,
                }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was created.' }),
            })
            .openapi({
              required: ['id', 'state', 'number', 'created_at'],
              description: 'A pipeline creation response.',
              title: 'PipelineCreation',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugPipelineMineRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/pipeline/mine',
  tags: ['Pipeline'],
  summary: 'Get your pipelines',
  description: 'Returns a sequence of all pipelines for this project triggered by the user.',
  operationId: 'listMyPipelines',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A sequence of pipelines.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    id: z
                      .uuid()
                      .openapi({
                        description: 'The unique ID of the pipeline.',
                        example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                      }),
                    errors: z
                      .array(
                        z
                          .object({
                            type: z
                              .enum([
                                'config',
                                'invalid-trigger-setup',
                                'config-fetch',
                                'timeout',
                                'permission',
                                'other',
                                'trigger-rule',
                                'plan',
                              ])
                              .openapi({ description: 'The type of error.' }),
                            message: z
                              .string()
                              .openapi({ description: 'A human-readable error message.' }),
                          })
                          .openapi({
                            required: ['type', 'message'],
                            description: 'An error with a type and message.',
                          }),
                      )
                      .openapi({
                        description: 'A sequence of errors that have occurred within the pipeline.',
                      }),
                    project_slug: z
                      .string()
                      .openapi({
                        description: 'The project-slug for the pipeline.',
                        example: 'gh/CircleCI-Public/api-preview-docs',
                      }),
                    updated_at: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'The date and time the pipeline was last updated.' }),
                    number: z
                      .preprocess(
                        (val) =>
                          typeof val === 'number' && Number.isSafeInteger(val)
                            ? BigInt(val)
                            : typeof val === 'string' && /^-?\d+$/.test(val)
                              ? BigInt(val)
                              : val,
                        z.int64(),
                      )
                      .openapi({
                        type: 'integer',
                        format: 'int64',
                        description: 'The number of the pipeline.',
                        example: 25,
                      }),
                    trigger_parameters: z
                      .record(
                        z.string(),
                        z.union([
                          z.string(),
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          z.boolean(),
                          z.object({}),
                        ]),
                      )
                      .exactOptional(),
                    state: z
                      .enum(['created', 'errored', 'setup-pending', 'setup', 'pending'])
                      .openapi({ description: 'The current state of the pipeline.' }),
                    created_at: z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'The date and time the pipeline was created.' }),
                    warnings: z
                      .array(
                        z
                          .object({
                            type: z.string().openapi({ description: 'The type of warning.' }),
                            message: z
                              .string()
                              .openapi({ description: 'A human-readable warning message.' }),
                            description: z
                              .string()
                              .openapi({ description: 'A short description of the warning type.' }),
                            url: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'A URL with more information about the warning.',
                              }),
                          })
                          .openapi({
                            required: ['type', 'message', 'description'],
                            description: 'A warning with a type and message.',
                          }),
                      )
                      .openapi({
                        description:
                          'A sequence of warnings that have occurred within the pipeline.',
                      }),
                    trigger: z
                      .object({
                        type: z
                          .enum(['scheduled_pipeline', 'explicit', 'api', 'webhook'])
                          .openapi({ description: 'The type of trigger.' }),
                        received_at: z.iso
                          .datetime({ offset: true })
                          .openapi({ description: 'The date and time the trigger was received.' }),
                        actor: z
                          .object({
                            login: z
                              .string()
                              .openapi({
                                description: 'The login information for the user on the VCS.',
                                title: 'Login',
                              }),
                            avatar_url: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: "URL to the user's avatar on the VCS",
                              }),
                          })
                          .openapi({
                            required: ['login', 'avatar_url'],
                            description: 'The user who triggered the Pipeline.',
                          }),
                      })
                      .openapi({
                        required: ['type', 'received_at', 'actor'],
                        description: 'A summary of the trigger.',
                      }),
                    vcs: z
                      .object({
                        provider_name: z
                          .string()
                          .openapi({
                            description: 'Name of the VCS provider (e.g. GitHub, Bitbucket).',
                            example: 'GitHub',
                          }),
                        target_repository_url: z
                          .string()
                          .openapi({
                            description:
                              'URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs',
                          }),
                        branch: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).',
                            example: 'feature/design-new-api',
                          }),
                        review_id: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The code review id.', example: '123' }),
                        review_url: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The code review URL.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs/pull/123',
                          }),
                        revision: z
                          .string()
                          .openapi({
                            'x-nullable': true,
                            description: 'The code revision the pipeline ran.',
                            example: 'f454a02b5d10fcccfd7d9dd7608a76d6493a98b4',
                          }),
                        tag: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.',
                            example: 'v3.1.4159',
                          }),
                        commit: z
                          .object({
                            subject: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: 'The subject of the commit message.',
                              }),
                            body: z
                              .string()
                              .openapi({
                                'x-nullable': true,
                                description: 'The body of the commit message.',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            required: ['subject', 'body'],
                            description: 'The latest commit in the pipeline.',
                          }),
                        origin_repository_url: z
                          .string()
                          .openapi({
                            description:
                              'URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.',
                            example: 'https://github.com/CircleCI-Public/api-preview-docs',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        required: [
                          'provider_name',
                          'origin_repository_url',
                          'target_repository_url',
                          'revision',
                        ],
                        description: 'VCS information for the pipeline.',
                      }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'number',
                      'project_slug',
                      'created_at',
                      'errors',
                      'warnings',
                      'state',
                      'trigger',
                    ],
                    description: 'A pipeline response.',
                    title: 'Pipeline',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'List of pipelines',
              title: 'PipelineListResponse',
            }),
        },
      },
      links: {
        NextPipelinePage: {
          operationId: 'listMyPipelines',
          parameters: {
            'project-slug': '$request.path.project-slug',
            'page-token': '$response.body#/next_page_token',
          },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugPipelinePipelineNumberRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/pipeline/{pipeline-number}',
  tags: ['Pipeline'],
  summary: 'Get a pipeline by pipeline number',
  description: 'Returns a pipeline by the pipeline number.',
  operationId: 'getPipelineByNumber',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
      'pipeline-number': z
        .any()
        .openapi({
          param: {
            in: 'path',
            name: 'pipeline-number',
            description: 'The number of the pipeline.',
            schema: {},
            required: true,
            example: '123',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A pipeline object.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({
                  description: 'The unique ID of the pipeline.',
                  example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
                }),
              errors: z
                .array(
                  z
                    .object({
                      type: z
                        .enum([
                          'config',
                          'invalid-trigger-setup',
                          'config-fetch',
                          'timeout',
                          'permission',
                          'other',
                          'trigger-rule',
                          'plan',
                        ])
                        .openapi({ description: 'The type of error.' }),
                      message: z
                        .string()
                        .openapi({ description: 'A human-readable error message.' }),
                    })
                    .openapi({
                      required: ['type', 'message'],
                      description: 'An error with a type and message.',
                    }),
                )
                .openapi({
                  description: 'A sequence of errors that have occurred within the pipeline.',
                }),
              project_slug: z
                .string()
                .openapi({
                  description: 'The project-slug for the pipeline.',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              updated_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The date and time the pipeline was last updated.' }),
              number: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'The number of the pipeline.',
                  example: 25,
                }),
              trigger_parameters: z
                .record(
                  z.string(),
                  z.union([
                    z.string(),
                    z
                      .preprocess(
                        (val) =>
                          typeof val === 'number' && Number.isSafeInteger(val)
                            ? BigInt(val)
                            : typeof val === 'string' && /^-?\d+$/.test(val)
                              ? BigInt(val)
                              : val,
                        z.int64(),
                      )
                      .openapi({ type: 'integer', format: 'int64' }),
                    z.boolean(),
                    z.object({}),
                  ]),
                )
                .exactOptional(),
              state: z
                .enum(['created', 'errored', 'setup-pending', 'setup', 'pending'])
                .openapi({ description: 'The current state of the pipeline.' }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was created.' }),
              warnings: z
                .array(
                  z
                    .object({
                      type: z.string().openapi({ description: 'The type of warning.' }),
                      message: z
                        .string()
                        .openapi({ description: 'A human-readable warning message.' }),
                      description: z
                        .string()
                        .openapi({ description: 'A short description of the warning type.' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A URL with more information about the warning.' }),
                    })
                    .openapi({
                      required: ['type', 'message', 'description'],
                      description: 'A warning with a type and message.',
                    }),
                )
                .openapi({
                  description: 'A sequence of warnings that have occurred within the pipeline.',
                }),
              trigger: z
                .object({
                  type: z
                    .enum(['scheduled_pipeline', 'explicit', 'api', 'webhook'])
                    .openapi({ description: 'The type of trigger.' }),
                  received_at: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'The date and time the trigger was received.' }),
                  actor: z
                    .object({
                      login: z
                        .string()
                        .openapi({
                          description: 'The login information for the user on the VCS.',
                          title: 'Login',
                        }),
                      avatar_url: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: "URL to the user's avatar on the VCS",
                        }),
                    })
                    .openapi({
                      required: ['login', 'avatar_url'],
                      description: 'The user who triggered the Pipeline.',
                    }),
                })
                .openapi({
                  required: ['type', 'received_at', 'actor'],
                  description: 'A summary of the trigger.',
                }),
              vcs: z
                .object({
                  provider_name: z
                    .string()
                    .openapi({
                      description: 'Name of the VCS provider (e.g. GitHub, Bitbucket).',
                      example: 'GitHub',
                    }),
                  target_repository_url: z
                    .string()
                    .openapi({
                      description:
                        'URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.',
                      example: 'https://github.com/CircleCI-Public/api-preview-docs',
                    }),
                  branch: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).',
                      example: 'feature/design-new-api',
                    }),
                  review_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The code review id.', example: '123' }),
                  review_url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The code review URL.',
                      example: 'https://github.com/CircleCI-Public/api-preview-docs/pull/123',
                    }),
                  revision: z
                    .string()
                    .openapi({
                      'x-nullable': true,
                      description: 'The code revision the pipeline ran.',
                      example: 'f454a02b5d10fcccfd7d9dd7608a76d6493a98b4',
                    }),
                  tag: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.',
                      example: 'v3.1.4159',
                    }),
                  commit: z
                    .object({
                      subject: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The subject of the commit message.',
                        }),
                      body: z
                        .string()
                        .openapi({
                          'x-nullable': true,
                          description: 'The body of the commit message.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      required: ['subject', 'body'],
                      description: 'The latest commit in the pipeline.',
                    }),
                  origin_repository_url: z
                    .string()
                    .openapi({
                      description:
                        'URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.',
                      example: 'https://github.com/CircleCI-Public/api-preview-docs',
                    }),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'provider_name',
                    'origin_repository_url',
                    'target_repository_url',
                    'revision',
                  ],
                  description: 'VCS information for the pipeline.',
                }),
            })
            .openapi({
              required: [
                'id',
                'number',
                'project_slug',
                'created_at',
                'errors',
                'warnings',
                'state',
                'trigger',
              ],
              description: 'A pipeline response.',
              title: 'Pipeline',
            }),
        },
      },
      links: {
        ProjectFromPipeline: {
          operationId: 'getProjectBySlug',
          parameters: { project_slug: '$response.body#/project_slug' },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getProjectProjectSlugScheduleRoute = createRoute({
  method: 'get',
  path: '/project/{project-slug}/schedule',
  tags: ['Schedule'],
  summary: 'List schedule triggers',
  description:
    'For a given project, returns all schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions. Does not return schedule triggers associated with GitHub App pipelines. To fetch schedule triggers associated with GitHub App pipelines, use the [List pipeline definition triggers](https://circleci.com/docs/api/v2/index.html#tag/Trigger/operation/listPipelineDefinitionTriggers] endpoint.',
  operationId: 'listSchedulesForProject',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    query: z.object({
      'page-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page-token',
            description: 'A token to retrieve the next page of results.',
            schema: { type: 'string' },
            required: false,
            allowEmptyValue: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A sequence of schedules.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    id: z.uuid().openapi({ description: 'The unique ID of the schedule.' }),
                    timetable: z
                      .union([
                        z
                          .object({
                            'per-hour': z
                              .int()
                              .openapi({
                                description:
                                  'Number of times a schedule triggers per hour, value must be between 1 and 60',
                              }),
                            'hours-of-day': z
                              .array(
                                z
                                  .int()
                                  .openapi({
                                    description:
                                      'Hour in a day in UTC, value must be between 0 and 24',
                                  }),
                              )
                              .openapi({
                                description: 'Hours in a day in which the schedule triggers.',
                              }),
                            'days-of-week': z
                              .array(
                                z
                                  .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                                  .openapi({
                                    description: 'Day in a week, in three letters format',
                                  }),
                              )
                              .openapi({
                                description: 'Days in a week in which the schedule triggers.',
                              }),
                            'days-of-month': z
                              .array(
                                z
                                  .int()
                                  .openapi({ description: 'Day in a month, between 1 and 31.' }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                              }),
                            months: z
                              .array(
                                z
                                  .enum([
                                    'MAR',
                                    'NOV',
                                    'DEC',
                                    'JUN',
                                    'MAY',
                                    'OCT',
                                    'FEB',
                                    'APR',
                                    'SEP',
                                    'AUG',
                                    'JAN',
                                    'JUL',
                                  ])
                                  .openapi({ description: 'Month, in three letters format.' }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Months in which the schedule triggers.' }),
                          })
                          .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-week'] }),
                        z
                          .object({
                            'per-hour': z
                              .int()
                              .openapi({
                                description:
                                  'Number of times a schedule triggers per hour, value must be between 1 and 60',
                              }),
                            'hours-of-day': z
                              .array(
                                z
                                  .int()
                                  .openapi({
                                    description:
                                      'Hour in a day in UTC, value must be between 0 and 24',
                                  }),
                              )
                              .openapi({
                                description: 'Hours in a day in which the schedule triggers.',
                              }),
                            'days-of-month': z
                              .array(
                                z
                                  .int()
                                  .openapi({ description: 'Day in a month, between 1 and 31.' }),
                              )
                              .openapi({
                                description:
                                  'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                              }),
                            'days-of-week': z
                              .array(
                                z
                                  .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                                  .openapi({
                                    description: 'Day in a week, in three letters format',
                                  }),
                              )
                              .exactOptional()
                              .openapi({
                                description: 'Days in a week in which the schedule triggers.',
                              }),
                            months: z
                              .array(
                                z
                                  .enum([
                                    'MAR',
                                    'NOV',
                                    'DEC',
                                    'JUN',
                                    'MAY',
                                    'OCT',
                                    'FEB',
                                    'APR',
                                    'SEP',
                                    'AUG',
                                    'JAN',
                                    'JUL',
                                  ])
                                  .openapi({ description: 'Month, in three letters format.' }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Months in which the schedule triggers.' }),
                          })
                          .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-month'] }),
                      ])
                      .openapi({
                        description: 'Timetable that specifies when a schedule triggers.',
                      }),
                    'updated-at': z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'The date and time the pipeline was last updated.' }),
                    name: z.string().openapi({ description: 'Name of the schedule.' }),
                    'created-at': z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'The date and time the pipeline was created.' }),
                    'project-slug': z
                      .string()
                      .openapi({
                        description: 'The project-slug for the schedule',
                        example: 'gh/CircleCI-Public/api-preview-docs',
                      }),
                    parameters: z
                      .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                      .openapi({
                        description:
                          'Pipeline parameters represented as key-value pairs. Must contain branch or tag.',
                        example: { deploy_prod: true, branch: 'feature/design-new-api' },
                      }),
                    actor: z
                      .object({
                        avatar_url: z
                          .string()
                          .openapi({
                            'x-nullable': true,
                            description: "URL to the user's avatar on the VCS",
                          }),
                        id: z.uuid().openapi({ description: 'The unique ID of the user.' }),
                        login: z
                          .string()
                          .openapi({
                            description: 'The login information for the user on the VCS.',
                            title: 'Login',
                          }),
                        name: z.string().openapi({ description: 'The name of the user.' }),
                      })
                      .openapi({
                        required: ['avatar_url', 'id', 'login', 'name'],
                        title: 'User',
                        description: 'The attribution actor who will run the scheduled pipeline.',
                      }),
                    description: z
                      .string()
                      .openapi({ 'x-nullable': true, description: 'Description of the schedule.' }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'timetable',
                      'description',
                      'project-slug',
                      'actor',
                      'created-at',
                      'updated-at',
                      'parameters',
                    ],
                    description: 'A schedule response',
                    title: 'Schedule',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({
              required: ['items', 'next_page_token'],
              description: 'A sequence of schedules',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postProjectProjectSlugScheduleRoute = createRoute({
  method: 'post',
  path: '/project/{project-slug}/schedule',
  tags: ['Schedule'],
  summary: 'Create a schedule',
  description:
    'Creates a schedule and returns the created schedule. Available only on organizations of type `bitbucket` and `github`, and for the latter will exclusively create schedule triggers associated with the GitHub OAuth pipeline definition. For projects of type `circleci`, or to create schedule triggers for GitHub App pipeline definitions, use the [Create trigger](https://circleci.com/docs/api/v2/index.html#tag/Trigger/operation/createTrigger) endpoint.',
  operationId: 'createSchedule',
  request: {
    params: z.object({
      'project-slug': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'project-slug',
            description:
              'Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).',
            schema: { type: 'string' },
            required: true,
            example: 'gh/CircleCI-Public/api-preview-docs',
            allowReserved: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Name of the schedule.' }),
              timetable: z
                .union([
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-week'] }),
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-month'] }),
                ])
                .openapi({ description: 'Timetable that specifies when a schedule triggers.' }),
              'attribution-actor': z
                .enum(['current', 'system'])
                .openapi({
                  description: 'The attribution-actor of the scheduled pipeline.',
                  example: 'current',
                }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .openapi({
                  description:
                    'Pipeline parameters represented as key-value pairs. Must contain branch or tag.',
                  example: { deploy_prod: true, branch: 'feature/design-new-api' },
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ 'x-nullable': true, description: 'Description of the schedule.' }),
            })
            .openapi({
              required: ['name', 'timetable', 'attribution-actor', 'parameters'],
              description: 'The parameters for a create schedule request',
              title: 'CreateScheduleParameters',
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'A schedule object.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'The unique ID of the schedule.' }),
              timetable: z
                .union([
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-week'] }),
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-month'] }),
                ])
                .openapi({ description: 'Timetable that specifies when a schedule triggers.' }),
              'updated-at': z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was last updated.' }),
              name: z.string().openapi({ description: 'Name of the schedule.' }),
              'created-at': z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was created.' }),
              'project-slug': z
                .string()
                .openapi({
                  description: 'The project-slug for the schedule',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .openapi({
                  description:
                    'Pipeline parameters represented as key-value pairs. Must contain branch or tag.',
                  example: { deploy_prod: true, branch: 'feature/design-new-api' },
                }),
              actor: z
                .object({
                  avatar_url: z
                    .string()
                    .openapi({
                      'x-nullable': true,
                      description: "URL to the user's avatar on the VCS",
                    }),
                  id: z.uuid().openapi({ description: 'The unique ID of the user.' }),
                  login: z
                    .string()
                    .openapi({
                      description: 'The login information for the user on the VCS.',
                      title: 'Login',
                    }),
                  name: z.string().openapi({ description: 'The name of the user.' }),
                })
                .openapi({
                  required: ['avatar_url', 'id', 'login', 'name'],
                  title: 'User',
                  description: 'The attribution actor who will run the scheduled pipeline.',
                }),
              description: z
                .string()
                .openapi({ 'x-nullable': true, description: 'Description of the schedule.' }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'timetable',
                'description',
                'project-slug',
                'actor',
                'created-at',
                'updated-at',
                'parameters',
              ],
              description: 'A schedule response',
              title: 'Schedule',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getScheduleScheduleIdRoute = createRoute({
  method: 'get',
  path: '/schedule/{schedule-id}',
  tags: ['Schedule'],
  summary:
    'Get a schedule by ID. Available only on schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions.',
  description: 'Get a schedule by id.',
  operationId: 'getScheduleById',
  request: {
    params: z.object({
      'schedule-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'schedule-id',
            description: 'The unique ID of the schedule.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A schedule object.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'The unique ID of the schedule.' }),
              timetable: z
                .union([
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-week'] }),
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-month'] }),
                ])
                .openapi({ description: 'Timetable that specifies when a schedule triggers.' }),
              'updated-at': z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was last updated.' }),
              name: z.string().openapi({ description: 'Name of the schedule.' }),
              'created-at': z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was created.' }),
              'project-slug': z
                .string()
                .openapi({
                  description: 'The project-slug for the schedule',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .openapi({
                  description:
                    'Pipeline parameters represented as key-value pairs. Must contain branch or tag.',
                  example: { deploy_prod: true, branch: 'feature/design-new-api' },
                }),
              actor: z
                .object({
                  avatar_url: z
                    .string()
                    .openapi({
                      'x-nullable': true,
                      description: "URL to the user's avatar on the VCS",
                    }),
                  id: z.uuid().openapi({ description: 'The unique ID of the user.' }),
                  login: z
                    .string()
                    .openapi({
                      description: 'The login information for the user on the VCS.',
                      title: 'Login',
                    }),
                  name: z.string().openapi({ description: 'The name of the user.' }),
                })
                .openapi({
                  required: ['avatar_url', 'id', 'login', 'name'],
                  title: 'User',
                  description: 'The attribution actor who will run the scheduled pipeline.',
                }),
              description: z
                .string()
                .openapi({ 'x-nullable': true, description: 'Description of the schedule.' }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'timetable',
                'description',
                'project-slug',
                'actor',
                'created-at',
                'updated-at',
                'parameters',
              ],
              description: 'A schedule response',
              title: 'Schedule',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteScheduleScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/schedule/{schedule-id}',
  tags: ['Schedule'],
  summary: 'Delete a schedule',
  description:
    'Deletes a schedule by ID. Available only on schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions.',
  operationId: 'deleteScheduleById',
  request: {
    params: z.object({
      'schedule-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'schedule-id',
            description: 'The unique ID of the schedule.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const patchScheduleScheduleIdRoute = createRoute({
  method: 'patch',
  path: '/schedule/{schedule-id}',
  tags: ['Schedule'],
  summary: 'Update a schedule',
  description:
    'Updates a schedule and returns the updated schedule. Available only on schedules associated with GitHub OAuth or Bitbucket Cloud pipeline definitions. To update schedule triggers for GitHub App pipeline definitions, use the [Update trigger](https://circleci.com/docs/api/v2/index.html#tag/Trigger/operation/updateTrigger) endpoint.',
  operationId: 'updateSchedule',
  request: {
    params: z.object({
      'schedule-id': z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'schedule-id',
            description: 'The unique ID of the schedule.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ 'x-nullable': true, description: 'Description of the schedule.' }),
              name: z.string().exactOptional().openapi({ description: 'Name of the schedule.' }),
              timetable: z
                .object({
                  'per-hour': z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of times a schedule triggers per hour, value must be between 1 and 60',
                    }),
                  'hours-of-day': z
                    .array(
                      z
                        .int()
                        .openapi({
                          description: 'Hour in a day in UTC, value must be between 0 and 24',
                        }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                  'days-of-week': z
                    .array(
                      z
                        .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                        .openapi({ description: 'Day in a week, in three letters format' }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                  'days-of-month': z
                    .array(z.int().openapi({ description: 'Day in a month, between 1 and 31.' }))
                    .exactOptional()
                    .openapi({
                      description:
                        'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                    }),
                  months: z
                    .array(
                      z
                        .enum([
                          'MAR',
                          'NOV',
                          'DEC',
                          'JUN',
                          'MAY',
                          'OCT',
                          'FEB',
                          'APR',
                          'SEP',
                          'AUG',
                          'JAN',
                          'JUL',
                        ])
                        .openapi({ description: 'Month, in three letters format.' }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Months in which the schedule triggers.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Timetable that specifies when a schedule triggers.',
                  required: [],
                }),
              'attribution-actor': z
                .enum(['current', 'system'])
                .exactOptional()
                .openapi({
                  description: 'The attribution-actor of the scheduled pipeline.',
                  example: 'current',
                }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .exactOptional()
                .openapi({
                  description:
                    'Pipeline parameters represented as key-value pairs. Must contain branch or tag.',
                  example: { deploy_prod: true, branch: 'feature/design-new-api' },
                }),
            })
            .openapi({
              description: 'The parameters for an update schedule request',
              title: 'UpdateScheduleParameters',
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A schedule object.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'The unique ID of the schedule.' }),
              timetable: z
                .union([
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-week'] }),
                  z
                    .object({
                      'per-hour': z
                        .int()
                        .openapi({
                          description:
                            'Number of times a schedule triggers per hour, value must be between 1 and 60',
                        }),
                      'hours-of-day': z
                        .array(
                          z
                            .int()
                            .openapi({
                              description: 'Hour in a day in UTC, value must be between 0 and 24',
                            }),
                        )
                        .openapi({ description: 'Hours in a day in which the schedule triggers.' }),
                      'days-of-month': z
                        .array(
                          z.int().openapi({ description: 'Day in a month, between 1 and 31.' }),
                        )
                        .openapi({
                          description:
                            'Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.',
                        }),
                      'days-of-week': z
                        .array(
                          z
                            .enum(['TUE', 'SAT', 'SUN', 'MON', 'THU', 'WED', 'FRI'])
                            .openapi({ description: 'Day in a week, in three letters format' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Days in a week in which the schedule triggers.' }),
                      months: z
                        .array(
                          z
                            .enum([
                              'MAR',
                              'NOV',
                              'DEC',
                              'JUN',
                              'MAY',
                              'OCT',
                              'FEB',
                              'APR',
                              'SEP',
                              'AUG',
                              'JAN',
                              'JUL',
                            ])
                            .openapi({ description: 'Month, in three letters format.' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Months in which the schedule triggers.' }),
                    })
                    .openapi({ required: ['per-hour', 'hours-of-day', 'days-of-month'] }),
                ])
                .openapi({ description: 'Timetable that specifies when a schedule triggers.' }),
              'updated-at': z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was last updated.' }),
              name: z.string().openapi({ description: 'Name of the schedule.' }),
              'created-at': z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time the pipeline was created.' }),
              'project-slug': z
                .string()
                .openapi({
                  description: 'The project-slug for the schedule',
                  example: 'gh/CircleCI-Public/api-preview-docs',
                }),
              parameters: z
                .record(z.string(), z.union([z.int(), z.string(), z.boolean()]))
                .openapi({
                  description:
                    'Pipeline parameters represented as key-value pairs. Must contain branch or tag.',
                  example: { deploy_prod: true, branch: 'feature/design-new-api' },
                }),
              actor: z
                .object({
                  avatar_url: z
                    .string()
                    .openapi({
                      'x-nullable': true,
                      description: "URL to the user's avatar on the VCS",
                    }),
                  id: z.uuid().openapi({ description: 'The unique ID of the user.' }),
                  login: z
                    .string()
                    .openapi({
                      description: 'The login information for the user on the VCS.',
                      title: 'Login',
                    }),
                  name: z.string().openapi({ description: 'The name of the user.' }),
                })
                .openapi({
                  required: ['avatar_url', 'id', 'login', 'name'],
                  title: 'User',
                  description: 'The attribution actor who will run the scheduled pipeline.',
                }),
              description: z
                .string()
                .openapi({ 'x-nullable': true, description: 'Description of the schedule.' }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'timetable',
                'description',
                'project-slug',
                'actor',
                'created-at',
                'updated-at',
                'parameters',
              ],
              description: 'A schedule response',
              title: 'Schedule',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserIdRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  tags: ['User'],
  summary: 'User Information',
  description: 'Provides information about the user with the given ID.',
  operationId: 'getUser',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'The unique ID of the user.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User login information.',
      content: {
        'application/json': {
          schema: z
            .object({
              avatar_url: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description: "URL to the user's avatar on the VCS",
                }),
              id: z.uuid().openapi({ description: 'The unique ID of the user.' }),
              login: z
                .string()
                .openapi({
                  description: 'The login information for the user on the VCS.',
                  title: 'Login',
                }),
              name: z.string().openapi({ description: 'The name of the user.' }),
            })
            .openapi({ required: ['avatar_url', 'id', 'login', 'name'], title: 'User' }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postWorkflowIdApproveApprovalRequestIdRoute = createRoute({
  method: 'post',
  path: '/workflow/{id}/approve/{approval_request_id}',
  tags: ['Workflow'],
  summary: 'Approve a job',
  description: 'Approves a pending approval job in a workflow.',
  operationId: 'approvePendingApprovalJobById',
  request: {
    params: z.object({
      approval_request_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'approval_request_id',
            description: 'The ID of the job being approved.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
          },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'The unique ID of the workflow.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postWorkflowIdCancelRoute = createRoute({
  method: 'post',
  path: '/workflow/{id}/cancel',
  tags: ['Workflow'],
  summary: 'Cancel a workflow',
  description: 'Cancels a running workflow.',
  operationId: 'cancelWorkflow',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'The unique ID of the workflow.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'A human-readable message' }) })
            .openapi({
              required: ['message'],
              description: 'message response',
              title: 'MessageResponse',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getWorkflowIdJobRoute = createRoute({
  method: 'get',
  path: '/workflow/{id}/job',
  tags: ['Workflow'],
  summary: "Get a workflow's jobs",
  description: 'Returns a sequence of jobs for a workflow.',
  operationId: 'listWorkflowJobs',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'The unique ID of the workflow.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated sequence of jobs.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    canceled_by: z
                      .uuid()
                      .exactOptional()
                      .openapi({ description: 'The unique ID of the user.' }),
                    dependencies: z
                      .array(z.uuid().openapi({ description: 'The unique ID of the job.' }))
                      .openapi({
                        description:
                          'A sequence of the unique job IDs for the jobs that this job depends upon in the workflow.',
                      }),
                    job_number: z
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
                        description: 'The number of the job.',
                        example: 1,
                      }),
                    id: z.uuid().openapi({ description: 'The unique ID of the job.' }),
                    started_at: z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'The date and time the job started.' }),
                    name: z.string().openapi({ description: 'The name of the job.' }),
                    approved_by: z
                      .uuid()
                      .exactOptional()
                      .openapi({ description: 'The unique ID of the user.' }),
                    project_slug: z
                      .string()
                      .openapi({
                        description: 'The project-slug for the job.',
                        example: 'gh/CircleCI-Public/api-preview-docs',
                      }),
                    status: z
                      .enum([
                        'success',
                        'running',
                        'not_run',
                        'failed',
                        'retried',
                        'queued',
                        'not_running',
                        'infrastructure_fail',
                        'timedout',
                        'on_hold',
                        'terminated-unknown',
                        'blocked',
                        'canceled',
                        'unauthorized',
                      ])
                      .openapi({ description: 'The current status of the job.' }),
                    type: z
                      .enum(['build', 'approval'])
                      .openapi({ description: 'The type of job.' }),
                    requires: z
                      .record(
                        z.string(),
                        z
                          .array(
                            z.enum(['success', 'not_run', 'failed', 'canceled', 'unauthorized']),
                          )
                          .openapi({
                            description:
                              'A sequence of statuses that the job must have one of to satisfy a dependency.',
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'A sequence of the unique jobs and required statuses that this job depends upon in the workflow.',
                        example: {
                          'd212e286-9962-4ed7-92e2-8699622ed720': ['success'],
                          '74be7583-44de-42a6-be75-8344de52a6f2': ['failed', 'canceled'],
                          'a3349b77-90f7-4a39-b49b-7790f7da3943': ['success', 'failed', 'canceled'],
                        },
                      }),
                    stopped_at: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({
                        'x-nullable': true,
                        description: 'The time when the job stopped.',
                      }),
                    approval_request_id: z
                      .uuid()
                      .exactOptional()
                      .openapi({ description: 'The unique ID of the job.' }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'started_at',
                      'dependencies',
                      'project_slug',
                      'status',
                      'type',
                    ],
                    description: 'Job',
                    title: 'Job',
                  }),
              ),
              next_page_token: z
                .string()
                .openapi({
                  'x-nullable': true,
                  description:
                    'A token to pass as a `page-token` query parameter to return the next page of results.',
                }),
            })
            .openapi({ required: ['items', 'next_page_token'], title: 'WorkflowJobListResponse' }),
        },
      },
      links: {
        NextWorkflowJobPage: {
          operationId: 'listWorkflowJobs',
          parameters: { id: '$request.path.id', 'page-token': '$response.body#/next_page_token' },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postWorkflowIdRerunRoute = createRoute({
  method: 'post',
  path: '/workflow/{id}/rerun',
  tags: ['Workflow'],
  summary: 'Rerun a workflow',
  description: 'Reruns a workflow.',
  operationId: 'rerunWorkflow',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'The unique ID of the workflow.',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            example: '5034460f-c7c4-4c43-9457-de07e2029e7b',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enable_ssh: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to enable SSH access for the triggering user on the newly-rerun job. Requires the jobs parameter to be used and so is mutually exclusive with the from_failed parameter.',
                  example: false,
                }),
              from_failed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to rerun the workflow from the failed job. Mutually exclusive with the jobs parameter.',
                  example: false,
                }),
              jobs: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description: 'A list of job IDs to rerun.',
                  example: [
                    'c65b68ef-e73b-4bf2-be9a-7a322a9df150',
                    '5e957edd-5e8c-4985-9178-5d0d69561822',
                  ],
                }),
              sparse_tree: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Completes rerun using sparse trees logic, an optimization for workflows that have disconnected subgraphs. Requires jobs parameter and so is mutually exclusive with the from_failed parameter.',
                  example: false,
                }),
            })
            .openapi({
              'x-nullable': true,
              description: 'The information you can supply when rerunning a workflow.',
              title: 'RerunWorkflowParameters',
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'A confirmation message.',
      content: {
        'application/json': {
          schema: z
            .object({
              workflow_id: z
                .uuid()
                .openapi({
                  description: 'The ID of the newly-created workflow.',
                  example: '0e53027b-521a-4c40-9042-47e72b3c63a3',
                }),
            })
            .openapi({
              required: ['workflow_id'],
              description: 'A response to rerunning a workflow',
            }),
        },
      },
    },
    default: {
      description: 'Error response.',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getOrgOrgIDOidcCustomClaimsRoute = createRoute({
  method: 'get',
  path: '/org/{orgID}/oidc-custom-claims',
  tags: ['OIDC Token Management'],
  summary: 'Get org-level claims',
  description: 'Fetches org-level custom claims of OIDC identity tokens',
  operationId: 'GetOrgClaims',
  request: { params: z.object({ orgID: OrgIDParamsSchema }) },
  responses: {
    200: {
      description: 'Claims successfully fetched.',
      content: { 'application/json': { schema: ClaimResponseSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteOrgOrgIDOidcCustomClaimsRoute = createRoute({
  method: 'delete',
  path: '/org/{orgID}/oidc-custom-claims',
  tags: ['OIDC Token Management'],
  summary: 'Delete org-level claims',
  description: 'Deletes org-level custom claims of OIDC identity tokens',
  operationId: 'DeleteOrgClaims',
  request: {
    params: z.object({ orgID: OrgIDParamsSchema }),
    query: z.object({ claims: ClaimsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Claims successfully deleted.',
      content: { 'application/json': { schema: ClaimResponseSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchOrgOrgIDOidcCustomClaimsRoute = createRoute({
  method: 'patch',
  path: '/org/{orgID}/oidc-custom-claims',
  tags: ['OIDC Token Management'],
  summary: 'Patch org-level claims',
  description: 'Creates/Updates org-level custom claims of OIDC identity tokens',
  operationId: 'PatchOrgClaims',
  request: {
    params: z.object({ orgID: OrgIDParamsSchema }),
    body: { content: { 'application/json': { schema: PatchClaimsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Claims successfully patched.',
      content: { 'application/json': { schema: ClaimResponseSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgOrgIDProjectProjectIDOidcCustomClaimsRoute = createRoute({
  method: 'get',
  path: '/org/{orgID}/project/{projectID}/oidc-custom-claims',
  tags: ['OIDC Token Management'],
  summary: 'Get project-level claims',
  description: 'Fetches project-level custom claims of OIDC identity tokens',
  operationId: 'GetProjectClaims',
  request: { params: z.object({ orgID: OrgIDParamsSchema, projectID: ProjectIDParamsSchema }) },
  responses: {
    200: {
      description: 'Claims successfully fetched.',
      content: { 'application/json': { schema: ClaimResponseSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRoute = createRoute({
  method: 'delete',
  path: '/org/{orgID}/project/{projectID}/oidc-custom-claims',
  tags: ['OIDC Token Management'],
  summary: 'Delete project-level claims',
  description: 'Deletes project-level custom claims of OIDC identity tokens',
  operationId: 'DeleteProjectClaims',
  request: {
    params: z.object({ orgID: OrgIDParamsSchema, projectID: ProjectIDParamsSchema }),
    query: z.object({ claims: ClaimsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Claims successfully deleted.',
      content: { 'application/json': { schema: ClaimResponseSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchOrgOrgIDProjectProjectIDOidcCustomClaimsRoute = createRoute({
  method: 'patch',
  path: '/org/{orgID}/project/{projectID}/oidc-custom-claims',
  tags: ['OIDC Token Management'],
  summary: 'Patch project-level claims',
  description: 'Creates/Updates project-level custom claims of OIDC identity tokens',
  operationId: 'PatchProjectClaims',
  request: {
    params: z.object({ orgID: OrgIDParamsSchema, projectID: ProjectIDParamsSchema }),
    body: { content: { 'application/json': { schema: PatchClaimsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Claims successfully patched.',
      content: { 'application/json': { schema: ClaimResponseSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOwnerOwnerIDContextContextDecisionRoute = createRoute({
  method: 'get',
  path: '/owner/{ownerID}/context/{context}/decision',
  tags: ['Policy Management'],
  summary: "Retrieves the owner's decision audit logs.",
  description:
    "This endpoint will return a list of decision audit logs that were made using this owner's policies.",
  operationId: 'GetDecisionLogs',
  request: {
    params: z.object({ ownerID: OwnerIDParamsSchema, context: ContextParamsSchema }),
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Return decisions matching this decision status.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description: 'Return decisions made after this date.',
            required: false,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'Return decisions made before this date.',
            required: false,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      branch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'branch',
            in: 'query',
            description: 'Return decisions made on this branch.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      project_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            description: 'Return decisions made for this project.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      build_number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'build_number',
            in: 'query',
            description: 'Return decisions made for this build number.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            description: 'Sets the offset when retrieving the decisions, for paging.',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Decision logs successfully retrieved.',
      content: { 'application/json': { schema: z.array(DecisionLogSchema) } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: UnexpectedServerErrorResponse,
  },
})

export const postOwnerOwnerIDContextContextDecisionRoute = createRoute({
  method: 'post',
  path: '/owner/{ownerID}/context/{context}/decision',
  tags: ['Policy Management'],
  summary: 'Makes a decision',
  description:
    "This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.",
  operationId: 'MakeDecision',
  request: {
    params: z.object({ ownerID: OwnerIDParamsSchema, context: ContextParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ input: z.string(), metadata: z.object({}).exactOptional() })
            .openapi({ required: ['input'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Decision rendered by applying the policy against the provided data. Response will be modeled by the data and rego processed.',
      content: { 'application/json': { schema: DecisionSchema } },
    },
    400: {
      description: 'The request is malformed\n',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string().openapi({ example: 'context: must be a valid value.' }) })
            .openapi({ required: ['error'] }),
        },
      },
    },
    401: {
      description: 'The request is unauthorized\n',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string().openapi({ example: 'Unauthorized.' }) })
            .openapi({ required: ['error'] }),
        },
      },
    },
    500: {
      description: 'Something unexpected happened on the server.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().openapi({ example: 'There was an error processing your request.' }),
            })
            .openapi({ required: ['error'] }),
        },
      },
    },
  },
})

export const getOwnerOwnerIDContextContextDecisionSettingsRoute = createRoute({
  method: 'get',
  path: '/owner/{ownerID}/context/{context}/decision/settings',
  tags: ['Policy Management'],
  summary: 'Get the decision settings',
  description:
    'This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)',
  operationId: 'GetDecisionSettings',
  request: { params: z.object({ ownerID: OwnerIDParamsSchema, context: ContextParamsSchema }) },
  responses: {
    200: {
      description: 'Decision settings successfully retrieved.',
      content: { 'application/json': { schema: DecisionSettingsSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: UnexpectedServerErrorResponse,
  },
})

export const patchOwnerOwnerIDContextContextDecisionSettingsRoute = createRoute({
  method: 'patch',
  path: '/owner/{ownerID}/context/{context}/decision/settings',
  tags: ['Policy Management'],
  summary: 'Set the decision settings',
  description:
    'This endpoint allows modifying decision settings (eg enable/disable policy evaluation)',
  operationId: 'SetDecisionSettings',
  request: {
    params: z.object({ ownerID: OwnerIDParamsSchema, context: ContextParamsSchema }),
    body: { content: { 'application/json': { schema: DecisionSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Decision settings successfully set.',
      content: { 'application/json': { schema: DecisionSettingsSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: UnexpectedServerErrorResponse,
  },
})

export const getOwnerOwnerIDContextContextDecisionDecisionIDRoute = createRoute({
  method: 'get',
  path: '/owner/{ownerID}/context/{context}/decision/{decisionID}',
  tags: ['Policy Management'],
  summary: "Retrieves the owner's decision audit log by given decisionID",
  description: 'This endpoint will retrieve a decision for a given decision log ID',
  operationId: 'GetDecisionLog',
  request: {
    params: z.object({
      ownerID: OwnerIDParamsSchema,
      context: ContextParamsSchema,
      decisionID: DecisionIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Decision log successfully retrieved.',
      content: { 'application/json': { schema: DecisionLogSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description: 'There was no decision log found for given decision_id, and owner_id.\n',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string().openapi({ example: 'decision log not found' }) })
            .openapi({ required: ['error'] }),
        },
      },
    },
    500: UnexpectedServerErrorResponse,
  },
})

export const getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRoute = createRoute({
  method: 'get',
  path: '/owner/{ownerID}/context/{context}/decision/{decisionID}/policy-bundle',
  tags: ['Policy Management'],
  summary: 'Retrieves Policy Bundle for a given decision log ID',
  description: 'This endpoint will retrieve a policy bundle for a given decision log ID',
  operationId: 'GetDecisionLogPolicyBundle',
  request: {
    params: z.object({
      ownerID: OwnerIDParamsSchema,
      context: ContextParamsSchema,
      decisionID: DecisionIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Policy-Bundle retrieved successfully for given decision log ID',
      content: { 'application/json': { schema: PolicyBundleSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description: 'There was no decision log found for given decision_id, and owner_id.\n',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string().openapi({ example: 'decision log not found' }) })
            .openapi({ required: ['error'] }),
        },
      },
    },
    500: UnexpectedServerErrorResponse,
  },
})

export const getOwnerOwnerIDContextContextPolicyBundleRoute = createRoute({
  method: 'get',
  path: '/owner/{ownerID}/context/{context}/policy-bundle',
  tags: ['Policy Management'],
  summary: 'Retrieves Policy Bundle',
  description: 'This endpoint will retrieve a policy bundle',
  operationId: 'GetPolicyBundle',
  request: { params: z.object({ ownerID: OwnerIDParamsSchema, context: ContextParamsSchema }) },
  responses: {
    200: {
      description: 'Policy-Bundle retrieved successfully.',
      content: { 'application/json': { schema: PolicyBundleSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: UnexpectedServerErrorResponse,
  },
})

export const postOwnerOwnerIDContextContextPolicyBundleRoute = createRoute({
  method: 'post',
  path: '/owner/{ownerID}/context/{context}/policy-bundle',
  tags: ['Policy Management'],
  summary: 'Creates policy bundle for the context',
  description: 'This endpoint replaces the current policy bundle with the provided policy bundle',
  operationId: 'CreatePolicyBundle',
  request: {
    params: z.object({ ownerID: OwnerIDParamsSchema, context: ContextParamsSchema }),
    query: z.object({
      dry: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'dry', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: BundlePayloadSchema } } },
  },
  responses: {
    200: {
      description: 'Policy-Bundle diff successfully returned.',
      content: { 'application/json': { schema: BundleDiffSchema } },
    },
    201: {
      description: 'Policy-Bundle successfully created.',
      content: { 'application/json': { schema: BundleDiffSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    413: {
      description: 'The request exceeds the maximum payload size for policy bundles ~2.5Mib\n',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string().openapi({ example: 'http: request payload too large' }) })
            .openapi({ required: ['error'] }),
        },
      },
    },
    500: UnexpectedServerErrorResponse,
  },
})

export const getOwnerOwnerIDContextContextPolicyBundlePolicyNameRoute = createRoute({
  method: 'get',
  path: '/owner/{ownerID}/context/{context}/policy-bundle/{policyName}',
  tags: ['Policy Management'],
  summary: 'Retrieves a policy document',
  description: 'This endpoint will retrieve a policy document.',
  operationId: 'GetPolicyDocument',
  request: {
    params: z.object({
      ownerID: OwnerIDParamsSchema,
      context: ContextParamsSchema,
      policyName: z
        .string()
        .openapi({
          param: {
            name: 'policyName',
            in: 'path',
            description: 'the policy name set by the rego policy_name rule',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Policy retrieved successfully.',
      content: { 'application/json': { schema: PolicySchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description: 'There was no policy that was found with the given owner_id and policy name.\n',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.string().openapi({ example: 'policy not found' }) })
            .openapi({ required: ['error'] }),
        },
      },
    },
    500: UnexpectedServerErrorResponse,
  },
})

export const getContextRoute = createRoute({
  method: 'get',
  path: '/context',
  tags: ['Context'],
  summary: 'List contexts',
  description: 'List all contexts for an owner.',
  operationId: 'listContexts',
  request: {
    query: z.object({
      'owner-id': OwnerIdQueryParamsSchema,
      'owner-slug': OwnerSlugQueryParamsSchema,
      'owner-type': OwnerTypeQueryParamsSchema,
      'page-token': PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of contexts',
      content: { 'application/json': { schema: ContextListSchema } },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postContextRoute = createRoute({
  method: 'post',
  path: '/context',
  tags: ['Context'],
  summary: 'Create a new context',
  description: 'Creates a new context in the specified organization.',
  operationId: 'createContext',
  request: { body: { content: { 'application/json': { schema: ContextCreatedSchema } } } },
  responses: {
    200: {
      description: 'The new context',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.uuid().openapi({ description: 'The unique ID of the context.' }),
              name: z.string().openapi({ description: 'The user-defined name of the context.' }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date and time the context was created.',
                  example: '2015-09-21T17:29:21.042Z',
                }),
            })
            .openapi({ required: ['id', 'name', 'created_at'], title: 'Context' }),
        },
      },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getContextContextIdRoute = createRoute({
  method: 'get',
  path: '/context/{context_id}',
  tags: ['Context'],
  summary: 'Get a context',
  description: 'Returns basic information about a context.',
  operationId: 'getContext',
  request: { params: z.object({ context_id: ContextIdParamsSchema }) },
  responses: {
    200: { description: 'The context', content: { 'application/json': { schema: ContextSchema } } },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteContextContextIdRoute = createRoute({
  method: 'delete',
  path: '/context/{context_id}',
  tags: ['Context'],
  summary: 'Delete a context',
  description:
    'Delete a context by its ID. Will also delete all environment variables inside the context.',
  operationId: 'deleteContext',
  request: { params: z.object({ context_id: ContextIdParamsSchema }) },
  responses: {
    200: {
      description: 'A confirmation message',
      content: { 'application/json': { schema: DeleteContextResponseSchema } },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getContextContextIdEnvironmentVariableRoute = createRoute({
  method: 'get',
  path: '/context/{context_id}/environment-variable',
  tags: ['Context'],
  summary: 'List environment variables',
  description:
    'List information about environment variables in a context, not including their values.',
  operationId: 'listEnvironmentVariablesFromContext',
  request: {
    params: z.object({ context_id: ContextIdParamsSchema }),
    query: z.object({ 'page-token': PageTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'A paginated list of environment variables',
      content: { 'application/json': { schema: EnvVarListSchema } },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const putContextContextIdEnvironmentVariableEnvVarNameRoute = createRoute({
  method: 'put',
  path: '/context/{context_id}/environment-variable/{env_var_name}',
  tags: ['Context'],
  summary: 'Add or update an environment variable',
  description:
    'Create or update an environment variable within a context. Returns information about the environment variable, not including its value.',
  operationId: 'addEnvironmentVariableToContext',
  request: {
    params: z.object({ context_id: ContextIdParamsSchema, env_var_name: EnvVarNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              value: z
                .string()
                .openapi({
                  description: 'The value of the environment variable',
                  example: 'some-secret-value',
                }),
            })
            .openapi({ required: ['value'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The new environment variable',
      content: { 'application/json': { schema: UpdateEnvVarSchema } },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteContextContextIdEnvironmentVariableEnvVarNameRoute = createRoute({
  method: 'delete',
  path: '/context/{context_id}/environment-variable/{env_var_name}',
  tags: ['Context'],
  summary: 'Remove an environment variable',
  description: 'Delete an environment variable from a context.',
  operationId: 'deleteEnvironmentVariableFromContext',
  request: {
    params: z.object({ context_id: ContextIdParamsSchema, env_var_name: EnvVarNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'A confirmation message',
      content: { 'application/json': { schema: DeleteEnvVarSchema } },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getContextContextIdRestrictionsRoute = createRoute({
  method: 'get',
  path: '/context/{context_id}/restrictions',
  tags: ['Context'],
  summary: 'Get context restrictions',
  description: 'Gets a list of project and expression restrictions associated with a context.',
  operationId: 'getContextRestrictions',
  request: { params: z.object({ context_id: ContextIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: ContextProjectRestrictionsListSchema } },
    },
    400: _400InvalidContextIdResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postContextContextIdRestrictionsRoute = createRoute({
  method: 'post',
  path: '/context/{context_id}/restrictions',
  tags: ['Context'],
  summary: 'Create context restriction',
  description: 'Creates project or expression restriction on a context.',
  operationId: 'createContextRestriction',
  request: {
    params: z.object({ context_id: ContextIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              restriction_type: z
                .enum(['project', 'expression', 'group'])
                .exactOptional()
                .openapi({ description: 'Type of the restriction.' }),
              restriction_value: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Value used to evaluate the restriction. If the `restriction_type`\nis `project`, this will be the project UUID. If the `restriction_type`\nis `expression`, this will be the expression rule.\n',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            project_restriction: {
              summary: 'project restriction',
              value: {
                restriction_type: 'project',
                restriction_value: '405d8375-3514-403b-8c43-83ae74cfe0e9',
              },
            },
            expression_restriction: {
              summary: 'expression restriction',
              value: {
                restriction_type: 'expression',
                restriction_value: 'pipeline.git.branch == "main"',
              },
            },
            group_restriction: {
              summary: 'group restriction',
              value: {
                restriction_type: 'group',
                restriction_value: '30865957-99e1-4b69-8c9f-d83a91756f89',
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
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: RestrictionCreatedSchema,
          examples: {
            project_restriction: {
              summary: 'project restriction',
              value: {
                id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
                project_id: '405d8375-3514-403b-8c43-83ae74cfe0e9',
                name: 'project-name',
                restriction_type: 'project',
                restriction_value: '405d8375-3514-403b-8c43-83ae74cfe0e9',
              },
            },
            expression_restriction: {
              summary: 'expression restriction',
              value: {
                id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
                name: '',
                restriction_type: 'expression',
                restriction_value: 'pipeline.git.branch == "main"',
              },
            },
            group_restriction: {
              summary: 'group restriction',
              value: {
                id: '30865957-99e1-4b69-8c9f-d83a91756f89',
                name: 'A Group In My Organization',
                restriction_type: 'group',
                restriction_value: '30865957-99e1-4b69-8c9f-d83a91756f89',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
          examples: {
            invalid_restriction: {
              summary: 'Invalid restriction',
              value: { message: 'This restriction cannot be applied to this context.' },
            },
            invalid_access: {
              summary: "Project doesn't exist, or insufficient credentials",
              value: {
                message: 'Project does not exist, or user does not have access to this project.',
              },
            },
          },
        },
      },
    },
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    409: {
      description: 'Request conflict.',
      content: {
        'application/json': {
          schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
          examples: {
            restriction_conflict: {
              summary: 'Restriction conflict',
              value: { message: "The restriction you're trying to add already exists." },
            },
          },
        },
      },
    },
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteContextContextIdRestrictionsRestrictionIdRoute = createRoute({
  method: 'delete',
  path: '/context/{context_id}/restrictions/{restriction_id}',
  tags: ['Context'],
  summary: 'Delete context restriction',
  description: 'Deletes a project, expression or group restriction from a context.',
  operationId: 'deleteContextRestriction',
  request: {
    params: z.object({
      context_id: ContextIdParamsSchema,
      restriction_id: RestrictionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: RestrictionDeletedSchema,
          examples: {
            successful_delete: {
              summary: 'Successful deletion of restriction',
              value: { message: 'Context restriction deleted.' },
            },
          },
        },
      },
    },
    400: _400InvalidRestrictionIdResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getProjectProviderOrganizationProjectSettingsRoute = createRoute({
  method: 'get',
  path: '/project/{provider}/{organization}/{project}/settings',
  tags: ['Project'],
  summary: 'Get project settings',
  description:
    'Returns a list of the advanced settings for a CircleCI project, whether enabled (true) or not (false).',
  operationId: 'getProjectSettings',
  request: {
    params: z.object({
      provider: ProviderParamsSchema,
      organization: OrganizationParamsSchema,
      project: ProjectParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: ProjectSettingsSchema } },
    },
    401: _401InvalidTokenResponse,
    403: _403PermissionDeniedResponse,
    404: _404ProjectNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const patchProjectProviderOrganizationProjectSettingsRoute = createRoute({
  method: 'patch',
  path: '/project/{provider}/{organization}/{project}/settings',
  tags: ['Project'],
  summary: 'Update project settings',
  description: 'Updates one or more of the advanced settings for a CircleCI project.',
  operationId: 'patchProjectSettings',
  request: {
    params: z.object({
      provider: ProviderParamsSchema,
      organization: OrganizationParamsSchema,
      project: ProjectParamsSchema,
    }),
    body: {
      description:
        'The setting(s) to update, including one or more fields in the JSON object. Note that `oss: true` will only be set on projects whose underlying repositories are actually open source.',
      content: {
        'application/json': {
          schema: ProjectSettingsSchema,
          example: {
            advanced: {
              autocancel_builds: false,
              build_prs_only: true,
              pr_only_branch_overrides: ['main'],
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Successful response. Always includes the full advanced settings object. Returned even when the provided updates match the existing settings, but can also be returned when `oss: true` fails to set.',
      content: { 'application/json': { schema: ProjectSettingsSchema } },
    },
    400: {
      description: 'Request is malformed, e.g. with improperly encoded JSON',
      content: {
        'application/json': {
          schema: z.strictObject({ message: z.string().exactOptional() }).openapi({ required: [] }),
          examples: {
            invalid_json: {
              summary: 'Invalid JSON body',
              value: { message: 'Invalid JSON body.' },
            },
            too_many_branch_overrides: {
              summary: 'More than 100 branches sent for `pr_only_branch_overrides`',
              value: {
                message: "Field 'pr_only_branch_overrides' only supports up to 100 branches.",
              },
            },
            no_json: {
              summary: 'Empty JSON request body',
              value: { message: 'No JSON fields found.' },
            },
            unexpected_field: {
              summary: 'Incorrect root field name',
              value: { message: "Unexpected JSON field 'incorrect'" },
            },
            unknown_setting: {
              summary: 'Incorrect setting name',
              value: { message: "Unknown advanced setting 'incorrect'." },
            },
            incorrect_type: {
              summary: 'Incorrect setting type',
              value: { message: "Setting 'autocancel_builds' must be boolean." },
            },
            oss: {
              summary: 'Incorrect OSS value for project',
              value: { message: "Feature flag 'oss' is not settable for this project." },
            },
          },
        },
      },
    },
    401: _401InvalidTokenResponse,
    403: _403PermissionDeniedResponse,
    404: _404ProjectNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getOrganizationsOrgIdGroupsRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/groups',
  tags: ['Groups'],
  summary: 'Groups in an organization',
  description: 'Get all the groups in an organization.',
  operationId: 'getOrganizationGroups',
  request: {
    params: z.object({ org_id: OrgIdParamsSchema }),
    query: z.object({ limit: PaginationLimitParamsSchema, 'page-token': PageTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully get all the groups in an organization. Results are paginated.',
      content: {
        'application/json': {
          schema: GroupsSchema,
          examples: {
            groups: {
              summary: 'A list of sample groups',
              value: {
                items: [
                  {
                    id: 'bdbe5e8d-50a5-4f73-a917-074592949844',
                    name: 'Project B Editors',
                    description: 'This group has the ability to edit settings on Project B.',
                  },
                  {
                    id: '70dbc16f-a6b9-4c32-b258-4a61a861c24f',
                    name: 'Project MLOps Editors',
                    description: 'This group has the ability to edit settings on ML Ops Projects.',
                  },
                ],
                next_page_token: 'CiRkNjVjY2ZiMy04OGFlLTQ3YjUtYWFjNi0wZDRkNDYwNmQ5ZjYQChoDbmls',
              },
            },
          },
        },
      },
    },
    403: _403PermissionDeniedResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postOrganizationsOrgIdGroupsRoute = createRoute({
  method: 'post',
  path: '/organizations/{org_id}/groups',
  tags: ['Groups'],
  summary: 'Create Groups',
  description:
    'Create a new group under the organization. Currently only supported for standalone organizations.',
  operationId: 'createOrganizationGroup',
  request: {
    params: z.object({ org_id: OrgIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().openapi({ description: 'Name of the group' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Description to describe the group' }),
            })
            .openapi({ required: ['name'] }),
          examples: {
            group: {
              summary: 'Create a new group',
              value: {
                name: 'Project A Editors',
                description: 'Users in this group have edit access to Project A',
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
      description: 'Successful creation of a group.',
      content: {
        'application/json': {
          schema: GroupSchema,
          examples: {
            group: {
              summary: 'A sample group',
              value: {
                id: '9e5e5f87-3e87-47ea-be0f-37265b965d6e',
                name: 'Project A Editors',
                description: 'Users in this group have edit access to Project A',
              },
            },
          },
        },
      },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    403: _403PermissionDeniedResponse,
    404: _404EntityNotFoundResponse,
    409: _409GroupConflictResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getOrganizationsOrgIdGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/groups/{group_id}',
  tags: ['Groups'],
  summary: 'A group in an organization',
  description:
    'Get details for a group in an organization. Currently only supported for standalone organizations.',
  operationId: 'getGroup',
  request: { params: z.object({ org_id: OrgIdParamsSchema, group_id: GroupIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully gets a group. Members not included.',
      content: {
        'application/json': {
          schema: GroupSchema,
          examples: {
            group: {
              summary: 'A sample group',
              value: {
                id: 'bdbe5e8d-50a5-4f73-a917-074592949844',
                name: 'Project A Editors',
                description: 'Users can edit Project A settings.',
              },
            },
          },
        },
      },
    },
    403: _403PermissionDeniedResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteOrganizationsOrgIdGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{org_id}/groups/{group_id}',
  tags: ['Groups'],
  summary: 'Delete a group',
  description:
    'Delete a group in an organization. This will remove all members from the group as well, and the subsequent role grants tied to the group. Currently only supported for standalone organizations.',
  operationId: 'deleteGroup',
  request: { params: z.object({ org_id: OrgIdParamsSchema, group_id: GroupIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful deletion of a group.',
      content: {
        'application/json': {
          schema: z
            .strictObject({ message: z.string().default('Group deleted.').exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401InvalidTokenResponse,
    403: _403PermissionDeniedResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postOrganizationsOrgIdUsageExportJobRoute = createRoute({
  method: 'post',
  path: '/organizations/{org_id}/usage_export_job',
  tags: ['Usage'],
  summary: 'Create a usage export',
  description: 'Submits a request to create a usage export for an organization.',
  operationId: 'createUsageExport',
  request: {
    params: z.object({ org_id: OrgIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              start: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The start date & time (inclusive) of the range from which data will be pulled. Must be no more than one year ago.',
                }),
              end: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The end date & time (inclusive) of the range from which data will be pulled. Must be no more than 31 days after `start`.',
                }),
              shared_org_ids: z
                .array(
                  z
                    .uuid()
                    .openapi({
                      description:
                        'Additional shared org IDs to to include data for in the generated usage export.',
                    }),
                )
                .exactOptional(),
            })
            .openapi({ required: ['start', 'end'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Usage export created successfully',
      content: { 'application/json': { schema: UsageExportJobSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{org_id}/usage_export_job/{usage_export_job_id}',
  tags: ['Usage'],
  summary: 'Get a usage export',
  description: 'Gets a usage export for an organization.',
  operationId: 'getUsageExport',
  request: {
    params: z.object({
      org_id: OrgIdParamsSchema,
      usage_export_job_id: UsageExportJobIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Usage export fetched successfully',
      content: { 'application/json': { schema: GetUsageExportJobStatusSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postProjectProviderOrganizationProjectPipelineRunRoute = createRoute({
  method: 'post',
  path: '/project/{provider}/{organization}/{project}/pipeline/run',
  tags: ['Pipeline'],
  summary: '[Recommended] Trigger a new pipeline',
  description:
    'Trigger a pipeline given a pipeline definition ID. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, `github_oauth`, `bitbucket_dc`, or `bitbucket_oauth`.\n\nThe slash-separated project slug is shown in Project Settings > Overview.\n\nDepending on the organization type, the project slug may have a human-readable format (`vcs_type/org_name/project_name`)\nor be an opaque string (e.g. `circleci/43G3lM5RtfFE7v5sa4nWAU/44n9wujWcTnVZ2b5S8Fnat`).',
  operationId: 'triggerPipelineRun',
  request: {
    params: z.object({
      provider: ProviderNoGitlabParamsSchema,
      organization: OrganizationParamsSchema,
      project: ProjectParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TriggerPipelineRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response with no created pipeline.',
      content: { 'application/json': { schema: PipelineNotTriggeredResponseSchema } },
    },
    201: {
      description: 'Successful response.',
      content: { 'application/json': { schema: PipelineTriggeredResponseSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
  },
})

export const getProjectsProjectIdPipelineDefinitionsRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/pipeline-definitions',
  tags: ['Pipeline Definition'],
  summary: 'List pipeline definitions',
  description:
    'List all pipeline definitions for a given project. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'listPipelineDefinitions',
  request: { params: z.object({ project_id: ProjectIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: PipelineDefinitionListSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postProjectsProjectIdPipelineDefinitionsRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/pipeline-definitions',
  tags: ['Pipeline Definition'],
  summary: 'Create pipeline definition',
  description:
    'Create a pipeline definition for a given project. Currently only supported for pipeline definitions where `config_source.provider` is `github_app` or `github_server`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'createPipelineDefinition',
  request: {
    params: z.object({ project_id: ProjectIdParamsSchema }),
    body: { content: { 'application/json': { schema: CreatePipelineDefinitionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: PipelineDefinitionSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/pipeline-definitions/{pipeline_definition_id}',
  tags: ['Pipeline Definition'],
  summary: 'Get pipeline definition',
  description:
    'Get details for a pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, `github_oauth`, `bitbucket_dc`, `bitbucket_oauth` or `gitlab`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'getPipelineDefinition',
  request: {
    params: z.object({
      project_id: ProjectIdParamsSchema,
      pipeline_definition_id: PipelineDefinitionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: PipelineDefinitionSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/pipeline-definitions/{pipeline_definition_id}',
  tags: ['Pipeline Definition'],
  summary: 'Delete pipeline definition',
  description:
    'Delete pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, or `bitbucket_dc`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'deletePipelineDefinition',
  request: {
    params: z.object({
      project_id: ProjectIdParamsSchema,
      pipeline_definition_id: PipelineDefinitionIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: PipelineDefinitionDeletedSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}/pipeline-definitions/{pipeline_definition_id}',
  tags: ['Pipeline Definition'],
  summary: 'Update pipeline definition',
  description:
    'Update pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_app`, `github_server`, or `bitbucket_dc`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'updatePipelineDefinition',
  request: {
    params: z.object({
      project_id: ProjectIdParamsSchema,
      pipeline_definition_id: PipelineDefinitionIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: UpdatePipelineDefinitionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: PipelineDefinitionSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute = createRoute(
  {
    method: 'get',
    path: '/projects/{project_id}/pipeline-definitions/{pipeline_definition_id}/triggers',
    tags: ['Trigger'],
    summary: 'List pipeline definition triggers',
    description:
      'List all triggers for a given pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
    operationId: 'listPipelineDefinitionTriggers',
    request: {
      params: z.object({
        project_id: ProjectIdParamsSchema,
        pipeline_definition_id: PipelineDefinitionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Successful response.',
        content: { 'application/json': { schema: TriggerListSchema } },
      },
      400: _400UnexpectedRequestBodyResponse,
      401: _401InvalidTokenResponse,
      404: _404EntityNotFoundResponse,
      500: _500InternalServerErrorResponse,
    },
  },
)

export const postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute =
  createRoute({
    method: 'post',
    path: '/projects/{project_id}/pipeline-definitions/{pipeline_definition_id}/triggers',
    tags: ['Trigger'],
    summary: 'Create trigger',
    description:
      'Create a trigger for a given pipeline definition. Currently only supported for pipeline definitions where `config_source.provider` is `github_oauth`, `github_app`, `github_server`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
    operationId: 'createTrigger',
    request: {
      params: z.object({
        project_id: ProjectIdParamsSchema,
        pipeline_definition_id: PipelineDefinitionIdParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: CreateTriggerRequestSchema,
            examples: {
              github_app_trigger: {
                summary: 'GitHub App trigger (all pushes)',
                description:
                  'Creates a trigger that fires on all push events from a GitHub App-connected repository. The `event_preset` controls which events are matched. For `github_app` and `github_server`, the full list of presets is available: `all-pushes`, `only-tags`, `default-branch-pushes`, `only-build-prs`, `only-open-prs`, `only-labeled-prs`, `only-merged-prs`, `only-ready-for-review-prs`, `only-build-pushes-to-non-draft-prs`, `only-merged-or-closed-prs`, `pr-comment-equals-run-ci`, `non-draft-pr-opened`, `pushes-to-merge-queues`.',
                value: {
                  event_source: { provider: 'github_app', repo: { external_id: '123456789' } },
                  event_preset: 'all-pushes',
                },
              },
              github_oauth_trigger: {
                summary: 'GitHub OAuth trigger',
                description:
                  'Creates a trigger for a GitHub OAuth-connected repository. For `github_oauth`, the `event_preset` field is **required** and only accepts two values: `all-pushes` or `only-build-prs`.',
                value: {
                  event_source: { provider: 'github_oauth', repo: { external_id: '123456789' } },
                  event_preset: 'only-build-prs',
                },
              },
              github_server_trigger: {
                summary: 'GitHub Server trigger',
                description:
                  'Creates a trigger for a GitHub Enterprise Server-connected repository. Supports the same full set of `event_preset` values as `github_app`.',
                value: {
                  event_source: { provider: 'github_server', repo: { external_id: '987654321' } },
                  event_preset: 'all-pushes',
                },
              },
              webhook_trigger: {
                summary: 'Custom webhook trigger',
                description:
                  "Creates a trigger that fires when a custom webhook is received. The `event_name`, `checkout_ref`, and `config_ref` are required for webhook triggers. The `sender` field is optional and can describe the external system sending the webhook (e.g. 'datadog', 'huggingface'). The response will include the generated webhook URL.",
                value: {
                  event_source: { provider: 'webhook', webhook: { sender: 'datadog' } },
                  event_name: 'monitor-alert',
                  checkout_ref: 'main',
                  config_ref: 'main',
                },
              },
              schedule_trigger: {
                summary: 'Schedule trigger',
                description:
                  'Creates a trigger that fires on a cron schedule. The `event_name`, `checkout_ref`, and `config_ref` are required. The `attribution_actor` determines who pipeline runs are attributed to: `current` (the user creating the trigger) or `system` (CircleCI system actor). Pipeline `parameters` are supported for schedule triggers.',
                value: {
                  event_source: {
                    provider: 'schedule',
                    schedule: { cron_expression: '0 9 * * 1-5', attribution_actor: 'current' },
                  },
                  event_name: 'weekday-morning-build',
                  checkout_ref: 'main',
                  config_ref: 'main',
                  parameters: { deploy_env: 'staging' },
                },
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful response.',
        content: {
          'application/json': {
            schema: TriggerSchema,
            examples: {
              github_app_response: {
                summary: 'GitHub App trigger',
                value: {
                  id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                  event_name: '',
                  event_source: {
                    provider: 'github_app',
                    repo: { full_name: 'my-org/my-repo', external_id: '123456789' },
                  },
                  event_preset: 'all-pushes',
                  checkout_ref: '',
                  config_ref: '',
                  disabled: false,
                },
              },
              github_oauth_response: {
                summary: 'GitHub OAuth trigger',
                value: {
                  id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
                  event_name: 'Implicit trigger associated with an OAuth-based project.',
                  event_source: {
                    provider: 'github_oauth',
                    repo: { full_name: 'my-org/my-repo', external_id: '123456789' },
                  },
                  checkout_ref: '',
                  config_ref: '',
                },
              },
              github_server_response: {
                summary: 'GitHub Server trigger',
                value: {
                  id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
                  event_name: '',
                  event_source: {
                    provider: 'github_server',
                    repo: { full_name: 'my-ghes-org/my-repo', external_id: '987654321' },
                  },
                  event_preset: 'all-pushes',
                  checkout_ref: '',
                  config_ref: '',
                  disabled: false,
                },
              },
              webhook_response: {
                summary: 'Custom webhook trigger',
                value: {
                  id: 'd4e5f6a7-b8c9-0123-defa-234567890123',
                  event_name: 'monitor-alert',
                  event_source: {
                    provider: 'webhook',
                    webhook: {
                      url: 'https://internal.circleci.com/private/soc/e/abcdef12-3456-7890-abcd-ef1234567890?secret=<webhook-secret>',
                      sender: 'datadog',
                    },
                  },
                  checkout_ref: 'main',
                  config_ref: 'main',
                  disabled: false,
                },
              },
              schedule_response: {
                summary: 'Schedule trigger',
                value: {
                  id: 'e5f6a7b8-c9d0-1234-efab-345678901234',
                  event_name: 'weekday-morning-build',
                  event_source: {
                    provider: 'schedule',
                    schedule: {
                      cron_expression: '0 9 * * 1-5',
                      attribution_actor: { id: 'f6a7b8c9-d0e1-2345-fabc-456789012345' },
                    },
                  },
                  checkout_ref: 'main',
                  config_ref: 'main',
                  disabled: false,
                  parameters: { deploy_env: 'staging' },
                },
              },
            },
          },
        },
      },
      400: _400UnexpectedRequestBodyResponse,
      401: _401InvalidTokenResponse,
      404: _404EntityNotFoundResponse,
      500: _500InternalServerErrorResponse,
    },
  })

export const getProjectsProjectIdTriggersTriggerIdRoute = createRoute({
  method: 'get',
  path: '/projects/{project_id}/triggers/{trigger_id}',
  tags: ['Trigger'],
  summary: 'Get trigger',
  description:
    'Get details for a trigger. Currently only supported for triggers where `event_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, `webhook`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'getTrigger',
  request: {
    params: z.object({ project_id: ProjectIdParamsSchema, trigger_id: TriggerIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: TriggerSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteProjectsProjectIdTriggersTriggerIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{project_id}/triggers/{trigger_id}',
  tags: ['Trigger'],
  summary: 'Delete trigger',
  description:
    'Delete a trigger. Currently only supported for triggers where `event_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, `webhook`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'deleteTrigger',
  request: {
    params: z.object({ project_id: ProjectIdParamsSchema, trigger_id: TriggerIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: TriggerDeletedSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const patchProjectsProjectIdTriggersTriggerIdRoute = createRoute({
  method: 'patch',
  path: '/projects/{project_id}/triggers/{trigger_id}',
  tags: ['Trigger'],
  summary: 'Update trigger',
  description:
    'Update a trigger. Currently only supported for triggers where `event_source.provider` is `github_oauth`, `github_app`, `github_server`, `bitbucket_dc`, `webhook`, or `schedule`. [Share feedback](https://circleci.canny.io/cloud-feature-requests/p/project-administration-apis) about our Project Administration APIs.',
  operationId: 'updateTrigger',
  request: {
    params: z.object({ project_id: ProjectIdParamsSchema, trigger_id: TriggerIdParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateTriggerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: TriggerSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postProjectsProjectIdRollbackRoute = createRoute({
  method: 'post',
  path: '/projects/{project_id}/rollback',
  tags: ['Rollback'],
  summary: 'Rollback a project',
  description: 'Performs a rollback operation by triggering a rollback pipeline.',
  operationId: 'rollbackProject',
  request: {
    params: z.object({ project_id: ProjectIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: RollbackProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Rollback request accepted.',
      content: { 'application/json': { schema: RollbackProjectResponseSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    409: _409EntityConflictResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getDeployEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/deploy/environments',
  tags: ['Deploy'],
  summary: 'List Environments',
  description: 'Allows listing environments for a given organization ID.',
  operationId: 'listEnvironments',
  request: {
    query: z.object({
      'org-id': OrgIdQueryParamsSchema,
      'page-size': PageSizeParamsSchema,
      'page-token': PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Paginated environments list',
      content: { 'application/json': { schema: PaginatedEnvironmentListSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getDeployEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/deploy/environments/{environment_id}',
  tags: ['Deploy'],
  summary: 'Get Environment',
  description: 'Allows getting an environment for a given environment ID.',
  operationId: 'getEnvironment',
  request: { params: z.object({ environment_id: EnvironmentIdParamsSchema }) },
  responses: {
    200: {
      description: 'Environment',
      content: { 'application/json': { schema: EnvironmentSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getDeployComponentsRoute = createRoute({
  method: 'get',
  path: '/deploy/components',
  tags: ['Deploy'],
  summary: 'List Components',
  description: 'Allows for listing of components for a given organization ID.',
  operationId: 'listComponents',
  request: {
    query: z.object({
      'org-id': OrgIdQueryParamsSchema,
      'project-id': ProjectIdQueryParamsSchema,
      'page-size': PageSizeParamsSchema,
      'page-token': PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Paginated components list',
      content: { 'application/json': { schema: PaginatedComponentListSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getDeployComponentsComponentIdRoute = createRoute({
  method: 'get',
  path: '/deploy/components/{component_id}',
  tags: ['Deploy'],
  summary: 'Get Component',
  description: 'Get the details of a component by ID.',
  operationId: 'getComponent',
  request: { params: z.object({ component_id: ComponentIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: ComponentSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getDeployComponentsComponentIdVersionsRoute = createRoute({
  method: 'get',
  path: '/deploy/components/{component_id}/versions',
  tags: ['Deploy'],
  summary: 'List Component Versions',
  description: 'List the versions for a component.',
  operationId: 'listComponentVersions',
  request: {
    params: z.object({ component_id: ComponentIdParamsSchema }),
    query: z.object({ 'environment-id': EnvironmentIdQueryParamsSchema }),
  },
  responses: {
    200: {
      description: 'Paginated component versions list',
      content: { 'application/json': { schema: PaginatedComponentVersionListSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getWebhookRoute = createRoute({
  method: 'get',
  path: '/webhook',
  tags: ['Webhook'],
  summary: 'List webhooks',
  description: 'Get a list of outbound webhooks that match the given scope-type and scope-id.',
  operationId: 'getWebhooks',
  request: {
    query: z.object({
      'scope-id': ScopeIdQueryParamsSchema,
      'scope-type': ScopeTypeQueryParamsSchema,
      'is-enabled': IsEnabledQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of webhooks.',
      content: { 'application/json': { schema: WebhookListSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postWebhookRoute = createRoute({
  method: 'post',
  path: '/webhook',
  tags: ['Webhook'],
  summary: 'Create an outbound webhook',
  description: 'Creates an outbound webhook for the given scope.',
  operationId: 'createWebhook',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWebhookRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'A webhook.', content: { 'application/json': { schema: WebhookSchema } } },
    400: _400UnexpectedRequestBodyResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getWebhookWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhook/{webhook_id}',
  tags: ['Webhook'],
  summary: 'Get a webhook',
  description: 'Get an outbound webhook by id.',
  operationId: 'getWebhookById',
  request: { params: z.object({ webhook_id: WebhookIdParamsSchema }) },
  responses: {
    200: { description: 'A webhook.', content: { 'application/json': { schema: WebhookSchema } } },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const putWebhookWebhookIdRoute = createRoute({
  method: 'put',
  path: '/webhook/{webhook_id}',
  tags: ['Webhook'],
  summary: 'Update an outbound webhook',
  description: 'Updates an existing outbound webhook by its unique ID.',
  operationId: 'updateWebhook',
  request: {
    params: z.object({ webhook_id: WebhookIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'A webhook.', content: { 'application/json': { schema: WebhookSchema } } },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteWebhookWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhook/{webhook_id}',
  tags: ['Webhook'],
  summary: 'Delete an outbound webhook',
  description: 'Deletes an existing outbound webhook by its unique ID.',
  operationId: 'deleteWebhook',
  request: { params: z.object({ webhook_id: WebhookIdParamsSchema }) },
  responses: {
    200: {
      description: 'A confirmation message.',
      content: { 'application/json': { schema: WebhookDeletedSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getOtelExportersRoute = createRoute({
  method: 'get',
  path: '/otel/exporters',
  tags: ['OTel'],
  summary: '🧪 List OTLP exporters',
  description:
    '[__EXPERIMENTAL__] Returns a list of OTLP exporter configurations for the given organization.',
  operationId: 'listOtelExporters',
  request: { query: z.object({ 'org-id': OrgIdQueryParamsSchema }) },
  responses: {
    200: {
      description: 'List of OTLP exporters.',
      content: { 'application/json': { schema: ExporterListSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const postOtelExportersRoute = createRoute({
  method: 'post',
  path: '/otel/exporters',
  tags: ['OTel'],
  summary: '🧪 Create an OTLP exporter',
  description:
    '[__EXPERIMENTAL__] Creates a new OTLP exporter configuration for the given organization. A maximum of 5 exporter configurations are allowed per organization.',
  operationId: 'createOtelExporter',
  request: {
    body: {
      content: { 'application/json': { schema: CreateExporterRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OTLP exporter created.',
      content: { 'application/json': { schema: ExporterSchema } },
    },
    400: _400ImproperPayloadResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const deleteOtelExportersOtelExporterIdRoute = createRoute({
  method: 'delete',
  path: '/otel/exporters/{otel_exporter_id}',
  tags: ['OTel'],
  summary: '🧪 Delete an OTLP exporter',
  description: '[__EXPERIMENTAL__] Deletes an OTLP exporter configuration by ID.',
  operationId: 'deleteOtelExporter',
  request: { params: z.object({ otel_exporter_id: OtelExporterIdParamsSchema }) },
  responses: {
    204: { description: 'OTLP exporter deleted.' },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getPipelinePipelineIdValuesRoute = createRoute({
  method: 'get',
  path: '/pipeline/{pipeline_id}/values',
  tags: ['Pipeline'],
  summary: 'Get pipeline values for a pipeline',
  description:
    'Returns a map of pipeline values by pipeline ID. For more information see the [pipeline values reference page](https://circleci.com/docs/variables/#pipeline-values).',
  operationId: 'getPipelineValuesById',
  request: { params: z.object({ pipeline_id: PipelineIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object of pipeline values.',
      content: { 'application/json': { schema: PipelineValuesSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/workflow/{id}',
  tags: ['Workflow'],
  summary: 'Get a workflow',
  description: 'Returns summary fields of a workflow by ID.',
  operationId: 'getWorkflowById',
  request: { params: z.object({ id: WorkflowIdParamsSchema }) },
  responses: {
    200: {
      description: 'A workflow object.',
      content: { 'application/json': { schema: WorkflowSchema } },
      links: {
        ProjectFromGetWorkflow: {
          operationId: 'getProjectBySlug',
          parameters: { project_slug: '$response.body#/project_slug' },
        },
        WorkflowJobs: { operationId: 'listWorkflowJobs', parameters: { id: '$response.body#/id' } },
        CancelWorkflow: { operationId: 'cancelWorkflow', parameters: { id: '$response.body#/id' } },
      },
    },
    400: _400InvalidWorkflowIdResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})

export const getJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{job_id}',
  tags: ['Job'],
  summary: 'Get a job',
  description:
    "Gets a job's metadata by its unique ID, including its name, job number, type, status, and associated resource IDs.",
  operationId: 'getJob',
  request: { params: z.object({ job_id: JobIdParamsSchema }) },
  responses: {
    200: {
      description: 'Job fetched successfully',
      content: { 'application/json': { schema: GetJobResponseSchema } },
    },
    400: _400UnexpectedRequestBodyResponse,
    401: _401InvalidTokenResponse,
    404: _404EntityNotFoundResponse,
    429: _429RateLimitExceededResponse,
    500: _500InternalServerErrorResponse,
  },
})
