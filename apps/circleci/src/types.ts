type JSONDuration = string
type ClaimResponse = {
  audience?: string[] | undefined
  audience_updated_at?: string | undefined
  org_id: string
  project_id?: string | undefined
  ttl?: JSONDuration | undefined
  ttl_updated_at?: string | undefined
}
type PatchClaimsRequest = { audience?: string[] | undefined; ttl?: JSONDuration | undefined }
type Violation = { reason: string; rule: string }
type Decision = {
  enabled_rules?: string[] | undefined
  hard_failures?: Violation[] | undefined
  reason?: string | undefined
  soft_failures?: Violation[] | undefined
  status: string
}
type DecisionLog = {
  created_at?: string | undefined
  decision?: Decision | undefined
  id?: string | undefined
  metadata?:
    | {
        build_number?: number | undefined
        project_id?: string | undefined
        ssh_rerun?: boolean | undefined
        vcs?:
          | {
              branch?: string | undefined
              origin_repository_url?: string | undefined
              release_tag?: string | undefined
              target_repository_url?: string | undefined
            }
          | undefined
      }
    | undefined
  policies?: { [x: string]: string } | undefined
  time_taken_ms?: number | undefined
}
type DecisionSettings = { enabled?: boolean | undefined }
type PolicyBundle = { [x: string]: { [x: string]: unknown } }
type BundlePayload = { policies?: { [x: string]: string } | undefined }
type BundleDiff = {
  created?: string[] | undefined
  deleted?: string[] | undefined
  modified?: string[] | undefined
}
type Policy = {
  content?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  name?: string | undefined
}
type ContextCreated = {
  name: string
  owner:
    | { id: string; type?: 'account' | 'organization' | undefined }
    | { slug: string; type?: 'organization' | undefined }
}
type ContextList = {
  items: { id: string; name: string; created_at: string }[]
  next_page_token: string | null
}
type Context = { id: string; name: string; created_at: string }
type DeleteContextResponse = { message: string }
type EnvVarList = {
  items: { variable: string; created_at: string; updated_at: string; context_id: string }[]
  next_page_token: string | null
}
type UpdateEnvVar =
  | { variable: string; created_at: string; updated_at: string; context_id: string }
  | { message: string }
type DeleteEnvVar = { message: string }
type ContextProjectRestrictionsList = {
  items?:
    | {
        context_id?: string | undefined
        id?: string | undefined
        project_id?: string | undefined
        name?: string | undefined
        restriction_type?: 'project' | 'expression' | 'group' | undefined
        restriction_value?: string | undefined
      }[]
    | undefined
  next_page_token?: (string | null) | undefined
}
type RestrictionCreated = {
  id?: string | undefined
  project_id?: string | undefined
  name?: string | undefined
  restriction_type?: 'project' | 'expression' | 'group' | undefined
  restriction_value?: string | undefined
}
type RestrictionDeleted = { message?: string | undefined }
type ProjectSettings = {
  advanced?:
    | {
        autocancel_builds?: boolean | undefined
        build_fork_prs?: boolean | undefined
        build_prs_only?: boolean | undefined
        disable_ssh?: boolean | undefined
        forks_receive_secret_env_vars?: boolean | undefined
        oss?: boolean | undefined
        set_github_status?: boolean | undefined
        setup_workflows?: boolean | undefined
        write_settings_requires_admin?: boolean | undefined
        pr_only_branch_overrides?: string[] | undefined
      }
    | undefined
}
type Group = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
}
type Groups = {
  items?: Group[] | undefined
  next_page_token?: (string | null) | undefined
  total_count?: number | undefined
}
type UsageExportJob = {
  usage_export_job_id: string
  state: 'created' | 'processing' | 'failed' | 'completed'
  start: string
  end: string
  download_urls: string[]
}
type GetUsageExportJobStatus = {
  usage_export_job_id: string
  state: 'created' | 'processing' | 'failed' | 'completed'
  download_urls: string[]
  error_reason?: string | undefined
}
type TriggerPipelineRequest = {
  definition_id?: string | undefined
  config?: { branch?: string | undefined; tag?: string | undefined } | undefined
  checkout?: { branch?: string | undefined; tag?: string | undefined } | undefined
  parameters?: { [x: string]: unknown } | undefined
}
type PipelineNotTriggeredResponse = { message?: string | undefined }
type PipelineTriggeredResponse = {
  state?: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending' | undefined
  created_at?: string | undefined
  number?: number | undefined
  id?: string | undefined
}
type PipelineDefinitionRepo = { full_name?: string | undefined; external_id?: string | undefined }
type PipelineDefinition = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  created_at?: string | undefined
  config_source?:
    | {
        provider?: string | undefined
        repo?: PipelineDefinitionRepo | undefined
        file_path?: string | undefined
      }
    | undefined
  checkout_source?:
    | { provider?: string | undefined; repo?: PipelineDefinitionRepo | undefined }
    | undefined
}
type PipelineDefinitionList = { items?: PipelineDefinition[] | undefined }
type CreatePipelineDefinitionRequest = {
  name: string
  description?: string | undefined
  config_source:
    | { provider: 'github_app' | 'github_server'; repo: { external_id: string }; file_path: string }
    | { provider: 'circleci'; file_path: string }
  checkout_source: { provider: 'github_app' | 'github_server'; repo: { external_id: string } }
}
type UpdatePipelineDefinitionRequest = {
  name?: string | undefined
  description?: string | undefined
  config_source?: { file_path?: string | undefined } | undefined
  checkout_source?:
    | { provider?: string | undefined; repo?: { external_id?: string | undefined } | undefined }
    | undefined
}
type PipelineDefinitionDeleted = { message?: string | undefined }
type TriggerEventPreset =
  | 'all-pushes'
  | 'only-tags'
  | 'default-branch-pushes'
  | 'only-build-prs'
  | 'only-open-prs'
  | 'only-labeled-prs'
  | 'only-merged-prs'
  | 'only-ready-for-review-prs'
  | 'only-build-pushes-to-non-draft-prs'
  | 'only-merged-or-closed-prs'
  | 'pr-comment-equals-run-ci'
  | 'non-draft-pr-opened'
  | 'pushes-to-merge-queues'
type Trigger = {
  id?: string | undefined
  event_name?: string | undefined
  event_source?:
    | {
        provider?: string | undefined
        repo?: { full_name?: string | undefined; external_id?: string | undefined } | undefined
        webhook?: { url?: string | undefined; sender?: string | undefined } | undefined
        schedule?:
          | {
              cron_expression?: string | undefined
              attribution_actor?: { id?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  event_preset?: TriggerEventPreset | undefined
  checkout_ref?: string | undefined
  config_ref?: string | undefined
  disabled?: boolean | undefined
  parameters?: { [x: string]: unknown } | undefined
}
type TriggerList = { items?: Trigger[] | undefined }
type CreateTriggerRequest = {
  event_source: {
    provider: string
    repo?: { external_id: string } | undefined
    webhook?: { sender?: string | undefined } | undefined
    schedule?:
      | {
          cron_expression?: string | undefined
          attribution_actor?: 'current' | 'system' | undefined
        }
      | undefined
  }
  event_preset?: {} | undefined
  checkout_ref?: string | undefined
  config_ref?: string | undefined
  event_name?: string | undefined
  disabled?: boolean | undefined
  parameters?: { [x: string]: unknown } | undefined
}
type UpdateTriggerRequest = {
  event_preset?: TriggerEventPreset | undefined
  checkout_ref?: string | undefined
  config_ref?: string | undefined
  event_name?: string | undefined
  disabled?: boolean | undefined
  event_source?:
    | {
        webhook?: { sender?: string | undefined } | undefined
        schedule?:
          | {
              cron_expression?: string | undefined
              attribution_actor?: 'current' | 'system' | undefined
            }
          | undefined
      }
    | undefined
  parameters?: { [x: string]: unknown } | undefined
}
type TriggerDeleted = { message?: string | undefined }
type RollbackProjectRequest = {
  component_name: string
  current_version: string
  environment_name: string
  namespace?: string | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  reason?: string | undefined
  target_version: string
}
type RollbackProjectResponse = { id?: string | undefined; rollback_type?: string | undefined }
type Label = { key?: string | undefined; value?: string | undefined }
type Environment = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  labels?: Label[] | undefined
  name?: string | undefined
  updated_at?: string | undefined
}
type PaginatedEnvironmentList = {
  items?: Environment[] | undefined
  next_page_token?: (string | null) | undefined
}
type Component = {
  id?: string | undefined
  name?: string | undefined
  project_id?: string | undefined
  labels?: Label[] | undefined
  release_count?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type PaginatedComponentList = {
  items?: Component[] | undefined
  next_page_token?: (string | null) | undefined
}
type Version = {
  name?: string | undefined
  environment_id?: string | undefined
  namespace?: string | undefined
  is_live?: boolean | undefined
  pipeline_id?: string | undefined
  workflow_id?: string | undefined
  job_id?: string | undefined
  job_number?: number | undefined
  last_deployed_at?: string | undefined
}
type PaginatedComponentVersionList = {
  items?: Version[] | undefined
  next_page_token?: (string | null) | undefined
}
type WebhookScope = { id: string; type: string }
type Webhook = {
  id: string
  name: string
  url: string
  verify_tls: boolean
  signing_secret: string
  events: ('workflow-completed' | 'job-completed')[]
  scope: WebhookScope
  is_enabled: boolean
  auto_disabled_at: string | null
  created_at: string
  updated_at: string
}
type WebhookList = { items: Webhook[]; next_page_token: string | null }
type CreateWebhookScope = { id: string; type: 'project' }
type CreateWebhookRequest = {
  name: string
  events: ('workflow-completed' | 'job-completed')[]
  url: string
  'verify-tls': boolean
  'signing-secret': string
  'is-enabled'?: boolean | undefined
  scope: CreateWebhookScope
}
type UpdateWebhookRequest = {
  name?: string | undefined
  events?: ('workflow-completed' | 'job-completed')[] | undefined
  url?: string | undefined
  'signing-secret'?: string | undefined
  'verify-tls'?: boolean | undefined
  'is-enabled'?: boolean | undefined
}
type WebhookDeleted = { message?: string | undefined }
type Exporter = {
  id?: string | undefined
  org_id?: string | undefined
  endpoint?: string | undefined
  protocol?: 'grpc' | 'http' | undefined
  insecure?: boolean | undefined
  headers?: { [x: string]: string } | undefined
  issues?: string[] | undefined
}
type ExporterList = Exporter[]
type CreateExporterRequest = {
  org_id: string
  endpoint: string
  protocol: 'grpc' | 'http'
  insecure?: boolean | undefined
  headers?: { [x: string]: string } | undefined
}
type PipelineValues = { [x: string]: unknown }
type Workflow = {
  pipeline_id: string
  canceled_by?: string | undefined
  id: string
  auto_rerun_number?: number | undefined
  name: string
  project_slug: string
  errored_by?: string | undefined
  tag?: 'setup' | undefined
  status:
    | 'success'
    | 'canceled'
    | 'error'
    | 'failed'
    | 'failing'
    | 'not_run'
    | 'on_hold'
    | 'running'
    | 'unauthorized'
  started_by: string
  max_auto_reruns?: number | undefined
  pipeline_number: bigint
  created_at: string
  stopped_at: string | null
}
type GetJobResponse = {
  id: string
  name: string
  job_number?: bigint | undefined
  type?: string | undefined
  status: string
  project_id: string
  pipeline_id: string
  workflow_id: string
  started_at?: string | undefined
  stopped_at?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/insights/pages/:project-slug/summary': {
      $post:
        | {
            input: { param: { 'project-slug': string } } & {
              json: {
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                branches?: string[] | undefined
                'workflow-names'?: string[] | undefined
              }
            }
            output: {
              org_id?: { [x: string]: unknown } | undefined
              project_id?: { [x: string]: unknown } | undefined
              project_data?:
                | {
                    metrics: {
                      total_runs: bigint
                      total_duration_secs: bigint
                      total_credits_used: bigint
                      success_rate: number
                      throughput: number
                    }
                    trends: {
                      total_runs: number
                      total_duration_secs: number
                      total_credits_used: number
                      success_rate: number
                      throughput: number
                    }
                  }
                | undefined
              project_workflow_data?:
                | {
                    workflow_name: string
                    metrics: {
                      total_credits_used: bigint
                      p95_duration_secs: number
                      total_runs: bigint
                      success_rate: number
                    }
                    trends: {
                      total_credits_used: number
                      p95_duration_secs: number
                      total_runs: number
                      success_rate: number
                    }
                  }[]
                | undefined
              project_workflow_branch_data?:
                | {
                    workflow_name: string
                    branch: string
                    metrics: {
                      total_credits_used: bigint
                      p95_duration_secs: number
                      total_runs: bigint
                      success_rate: number
                    }
                    trends: {
                      total_credits_used: number
                      p95_duration_secs: number
                      total_runs: number
                      success_rate: number
                    }
                  }[]
                | undefined
              all_branches?: string[] | undefined
              all_workflows?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              json: {
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                branches?: string[] | undefined
                'workflow-names'?: string[] | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: {
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                branches?: { [x: string]: unknown } | undefined
                'workflow-names'?: { [x: string]: unknown } | undefined
              }
            }
            output: {
              org_id?: { [x: string]: unknown } | undefined
              project_id?: { [x: string]: unknown } | undefined
              project_data?:
                | {
                    metrics: {
                      total_runs: bigint
                      total_duration_secs: bigint
                      total_credits_used: bigint
                      success_rate: number
                      throughput: number
                    }
                    trends: {
                      total_runs: number
                      total_duration_secs: number
                      total_credits_used: number
                      success_rate: number
                      throughput: number
                    }
                  }
                | undefined
              project_workflow_data?:
                | {
                    workflow_name: string
                    metrics: {
                      total_credits_used: bigint
                      p95_duration_secs: number
                      total_runs: bigint
                      success_rate: number
                    }
                    trends: {
                      total_credits_used: number
                      p95_duration_secs: number
                      total_runs: number
                      success_rate: number
                    }
                  }[]
                | undefined
              project_workflow_branch_data?:
                | {
                    workflow_name: string
                    branch: string
                    metrics: {
                      total_credits_used: bigint
                      p95_duration_secs: number
                      total_runs: bigint
                      success_rate: number
                    }
                    trends: {
                      total_credits_used: number
                      p95_duration_secs: number
                      total_runs: number
                      success_rate: number
                    }
                  }[]
                | undefined
              all_branches?: string[] | undefined
              all_workflows?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: {
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                branches?: { [x: string]: unknown } | undefined
                'workflow-names'?: { [x: string]: unknown } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/time-series/:project-slug/workflows/:workflow-name/jobs': {
      $get:
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: {
                branch?: string | undefined
                granularity?: 'daily' | 'hourly' | undefined
                'start-date'?: string | undefined
                'end-date'?: string | undefined
              }
            }
            output: {
              next_page_token: string
              items: {
                name: string
                min_started_at: string
                max_ended_at: string
                timestamp: string
                metrics: {
                  total_runs: bigint
                  failed_runs: bigint
                  successful_runs: bigint
                  throughput: number
                  median_credits_used: bigint
                  total_credits_used: bigint
                  duration_metrics: {
                    min: bigint
                    median: bigint
                    max: bigint
                    p95: bigint
                    total: bigint
                  }
                }
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: {
                branch?: string | undefined
                granularity?: 'daily' | 'hourly' | undefined
                'start-date'?: string | undefined
                'end-date'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:org-slug/summary': {
      $get:
        | {
            input: { param: { 'org-slug': string } } & {
              query: {
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                'project-names'?: { [x: string]: unknown } | undefined
              }
            }
            output: {
              org_data: {
                metrics: {
                  total_runs: bigint
                  total_duration_secs: bigint
                  total_credits_used: bigint
                  success_rate: number
                  throughput: number
                }
                trends: {
                  total_runs: number
                  total_duration_secs: number
                  total_credits_used: number
                  success_rate: number
                  throughput: number
                }
              }
              org_project_data: {
                project_name: string
                metrics: {
                  total_credits_used: bigint
                  total_duration_secs: bigint
                  total_runs: bigint
                  success_rate: number
                }
                trends: {
                  total_credits_used: number
                  total_duration_secs: number
                  total_runs: number
                  success_rate: number
                }
              }[]
              all_projects: string[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'org-slug': string } } & {
              query: {
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                'project-names'?: { [x: string]: unknown } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/branches': {
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: { 'workflow-name'?: string | undefined }
            }
            output: {
              org_id: { [x: string]: unknown }
              project_id: { [x: string]: unknown }
              branches: string[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: { 'workflow-name'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/flaky-tests': {
      $get:
        | {
            input: { param: { 'project-slug': string } }
            output: {
              'flaky-tests': {
                'time-wasted'?: {} | undefined
                'workflow-created-at': string
                'workflow-id': { [x: string]: unknown }
                classname: string
                'pipeline-number': {}
                'workflow-name': string
                'test-name': string
                'job-name': string
                'job-number': {}
                'times-flaked': bigint
                source: string
                file: string
              }[]
              'total-flaky-tests': number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/workflows': {
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: {
                'page-token'?: string | undefined
                'all-branches'?: boolean | undefined
                branch?: string | undefined
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
              }
            }
            output: {
              items: {
                name: string
                metrics: {
                  total_runs: bigint
                  successful_runs: bigint
                  mttr: bigint
                  total_credits_used: bigint
                  failed_runs: bigint
                  success_rate: number
                  duration_metrics: {
                    min: bigint
                    mean: bigint
                    median: bigint
                    p95: bigint
                    max: bigint
                    standard_deviation: number
                  }
                  total_recoveries: bigint
                  throughput: number
                }
                window_start: string
                window_end: string
                project_id: { [x: string]: unknown }
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: {
                'page-token'?: string | undefined
                'all-branches'?: boolean | undefined
                branch?: string | undefined
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/workflows/:workflow-name': {
      $get:
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: {
                'all-branches'?: boolean | undefined
                branch?: string | undefined
                'page-token'?: string | undefined
                'start-date'?: string | undefined
                'end-date'?: string | undefined
              }
            }
            output: {
              items: {
                id: string
                branch: string
                duration: bigint
                created_at: string
                stopped_at: string
                credits_used: bigint
                status: 'success' | 'failed' | 'error' | 'canceled' | 'unauthorized'
                is_approval: boolean
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: {
                'all-branches'?: boolean | undefined
                branch?: string | undefined
                'page-token'?: string | undefined
                'start-date'?: string | undefined
                'end-date'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/workflows/:workflow-name/jobs': {
      $get:
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: {
                'page-token'?: string | undefined
                'all-branches'?: boolean | undefined
                branch?: string | undefined
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                'job-name'?: string | undefined
              }
            }
            output: {
              items: {
                name: string
                metrics: {
                  total_runs: bigint
                  failed_runs: bigint
                  successful_runs: bigint
                  duration_metrics: {
                    min: bigint
                    mean: bigint
                    median: bigint
                    p95: bigint
                    max: bigint
                    standard_deviation: number
                  }
                  success_rate: number
                  total_credits_used: bigint
                  throughput: number
                }
                window_start: string
                window_end: string
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: {
                'page-token'?: string | undefined
                'all-branches'?: boolean | undefined
                branch?: string | undefined
                'reporting-window'?:
                  | 'last-7-days'
                  | 'last-90-days'
                  | 'last-24-hours'
                  | 'last-30-days'
                  | 'last-60-days'
                  | undefined
                'job-name'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/workflows/:workflow-name/summary': {
      $get:
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: { 'all-branches'?: boolean | undefined; branch?: string | undefined }
            }
            output: {
              metrics: {
                total_runs: bigint
                successful_runs: bigint
                mttr: bigint
                total_credits_used: bigint
                failed_runs: bigint
                success_rate: number
                completed_runs: bigint
                window_start: string
                duration_metrics: {
                  min: bigint
                  mean: bigint
                  median: bigint
                  p95: bigint
                  max: bigint
                  standard_deviation: number
                }
                window_end: string
                throughput: number
              }
              trends: {
                total_runs: number
                failed_runs: number
                success_rate: number
                p95_duration_secs: number
                median_duration_secs: number
                total_credits_used: number
                mttr: number
                throughput: number
              }
              workflow_names: string[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: { 'all-branches'?: boolean | undefined; branch?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insights/:project-slug/workflows/:workflow-name/test-metrics': {
      $get:
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: { branch?: string | undefined; 'all-branches'?: boolean | undefined }
            }
            output: {
              average_test_count: bigint
              most_failed_tests: {
                p95_duration: number
                total_runs: bigint
                classname: string
                failed_runs: bigint
                flaky: boolean
                source: string
                file: string
                job_name: string
                test_name: string
              }[]
              most_failed_tests_extra: bigint
              slowest_tests: {
                p95_duration: number
                total_runs: bigint
                classname: string
                failed_runs: bigint
                flaky: boolean
                source: string
                file: string
                job_name: string
                test_name: string
              }[]
              slowest_tests_extra: bigint
              total_test_runs: bigint
              test_runs: {
                pipeline_number: bigint
                workflow_id: { [x: string]: unknown }
                success_rate: number
                test_counts: {
                  error: bigint
                  failure: bigint
                  skipped: bigint
                  success: bigint
                  total: bigint
                }
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; 'workflow-name': string } } & {
              query: { branch?: string | undefined; 'all-branches'?: boolean | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/jobs/:job-id/cancel': {
      $post:
        | {
            input: { param: { 'job-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'job-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { 'job-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { 'job-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { 'job-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { 'job-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/me': {
      $get:
        | {
            input: {}
            output: { avatar_url: string; id: string; login: string; name: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/me/collaborations': {
      $get:
        | {
            input: {}
            output: {
              id: string
              'vcs-type': string
              name: string
              avatar_url: string
              slug: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organization': {
      $post:
        | {
            input: { json: { name: string; vcs_type: 'github' | 'bitbucket' | 'circleci' } }
            output: {
              id: string
              name: string
              slug: string
              vcs_type: 'github' | 'bitbucket' | 'circleci'
              avatar_url?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { name: string; vcs_type: 'github' | 'bitbucket' | 'circleci' } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organization/:org-slug-or-id': {
      $get:
        | {
            input: { param: { 'org-slug-or-id': string } }
            output: {
              id: string
              name: string
              slug: string
              vcs_type: 'github' | 'bitbucket' | 'circleci'
              avatar_url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'org-slug-or-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { 'org-slug-or-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { 'org-slug-or-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organization/:org-slug-or-id/project': {
      $post:
        | {
            input: { param: { 'org-slug-or-id': string } } & { json: { name: string } }
            output: {
              slug: string
              name: string
              id: string
              organization_name: string
              organization_slug: string
              organization_id: string
              vcs_info: {
                vcs_url: string
                provider: 'Bitbucket' | 'CircleCI' | 'GitHub'
                default_branch: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'org-slug-or-id': string } } & { json: { name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organization/:org-slug-or-id/url-orb-allow-list': {
      $get:
        | {
            input: { param: { 'org-slug-or-id': string } }
            output: {
              items: {
                id: string
                name: string
                prefix: { [x: string]: unknown }
                auth: 'github-oauth' | 'none' | 'bitbucket-oauth' | 'github-app'
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'org-slug-or-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { 'org-slug-or-id': string } } & {
              json: {
                name: string
                prefix: { [x: string]: unknown }
                auth: 'github-oauth' | 'none' | 'bitbucket-oauth' | 'github-app'
              }
            }
            output: { id: string; message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'org-slug-or-id': string } } & {
              json: {
                name: string
                prefix: { [x: string]: unknown }
                auth: 'github-oauth' | 'none' | 'bitbucket-oauth' | 'github-app'
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organization/:org-slug-or-id/url-orb-allow-list/:allow-list-entry-id': {
      $delete:
        | {
            input: { param: { 'org-slug-or-id': string; 'allow-list-entry-id': string } }
            output: { id: string; message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'org-slug-or-id': string; 'allow-list-entry-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pipeline': {
      $get:
        | {
            input: {
              query: {
                'org-slug'?: string | undefined
                'page-token'?: string | undefined
                mine?: boolean | undefined
              }
            }
            output: {
              items: {
                id: string
                errors: {
                  type:
                    | 'config'
                    | 'invalid-trigger-setup'
                    | 'config-fetch'
                    | 'timeout'
                    | 'permission'
                    | 'other'
                    | 'trigger-rule'
                    | 'plan'
                  message: string
                }[]
                project_slug: string
                updated_at?: string | undefined
                number: bigint
                trigger_parameters?:
                  | { [x: string]: string | bigint | boolean | { [x: string]: unknown } }
                  | undefined
                state: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'
                created_at: string
                warnings: {
                  type: string
                  message: string
                  description: string
                  url?: string | undefined
                }[]
                trigger: {
                  type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook'
                  received_at: string
                  actor: { login: string; avatar_url: string }
                }
                vcs?:
                  | {
                      provider_name: string
                      target_repository_url: string
                      branch?: string | undefined
                      review_id?: string | undefined
                      review_url?: string | undefined
                      revision: string
                      tag?: string | undefined
                      commit?: { subject: string; body: string } | undefined
                      origin_repository_url: string
                    }
                  | undefined
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'org-slug'?: string | undefined
                'page-token'?: string | undefined
                mine?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pipeline/continue': {
      $post:
        | {
            input: {
              json: {
                'continuation-key': string
                configuration: string
                parameters?: { [x: string]: number | string | boolean } | undefined
              }
            }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'continuation-key': string
                configuration: string
                parameters?: { [x: string]: number | string | boolean } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pipeline/:pipeline-id': {
      $get:
        | {
            input: { param: { 'pipeline-id': string } }
            output: {
              id: string
              errors: {
                type:
                  | 'config'
                  | 'invalid-trigger-setup'
                  | 'config-fetch'
                  | 'timeout'
                  | 'permission'
                  | 'other'
                  | 'trigger-rule'
                  | 'plan'
                message: string
              }[]
              project_slug: string
              updated_at?: string | undefined
              number: bigint
              trigger_parameters?:
                | { [x: string]: string | bigint | boolean | { [x: string]: unknown } }
                | undefined
              state: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'
              created_at: string
              warnings: {
                type: string
                message: string
                description: string
                url?: string | undefined
              }[]
              trigger: {
                type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook'
                received_at: string
                actor: { login: string; avatar_url: string }
              }
              vcs?:
                | {
                    provider_name: string
                    target_repository_url: string
                    branch?: string | undefined
                    review_id?: string | undefined
                    review_url?: string | undefined
                    revision: string
                    tag?: string | undefined
                    commit?: { subject: string; body: string } | undefined
                    origin_repository_url: string
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'pipeline-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pipeline/:pipeline-id/config': {
      $get:
        | {
            input: { param: { 'pipeline-id': string } }
            output: {
              source: string
              compiled: string
              'setup-config'?: string | undefined
              'compiled-setup-config'?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'pipeline-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pipeline/:pipeline-id/workflow': {
      $get:
        | {
            input: { param: { 'pipeline-id': string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: {
              items: {
                pipeline_id: string
                canceled_by?: string | undefined
                id: string
                auto_rerun_number?: bigint | undefined
                name: string
                project_slug: string
                errored_by?: string | undefined
                tag?: 'setup' | undefined
                status:
                  | 'success'
                  | 'running'
                  | 'not_run'
                  | 'failed'
                  | 'error'
                  | 'failing'
                  | 'on_hold'
                  | 'canceled'
                  | 'unauthorized'
                started_by: string
                max_auto_reruns?: bigint | undefined
                pipeline_number: bigint
                created_at: string
                stopped_at: string
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'pipeline-id': string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug': {
      $get:
        | {
            input: { param: { 'project-slug': string } }
            output: {
              slug: string
              name: string
              id: string
              organization_name: string
              organization_slug: string
              organization_id: string
              vcs_info: {
                vcs_url: string
                provider: 'Bitbucket' | 'CircleCI' | 'GitHub'
                default_branch: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { 'project-slug': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/checkout-key': {
      $post:
        | {
            input: { param: { 'project-slug': string } } & {
              json: { type: 'user-key' | 'deploy-key' }
            }
            output: {
              'public-key': string
              type: 'deploy-key' | 'github-user-key'
              fingerprint: string
              preferred: boolean
              'created-at': string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { 'project-slug': string } } & {
              json: { type: 'user-key' | 'deploy-key' }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: { digest?: 'sha256' | 'md5' | undefined }
            }
            output: {
              items: {
                'public-key': string
                type: 'deploy-key' | 'github-user-key'
                fingerprint: string
                preferred: boolean
                'created-at': string
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: { digest?: 'sha256' | 'md5' | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/checkout-key/:fingerprint': {
      $get:
        | {
            input: { param: { 'project-slug': string; fingerprint: string } }
            output: {
              'public-key': string
              type: 'deploy-key' | 'github-user-key'
              fingerprint: string
              preferred: boolean
              'created-at': string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; fingerprint: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { 'project-slug': string; fingerprint: string } }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; fingerprint: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/envvar': {
      $get:
        | {
            input: { param: { 'project-slug': string } }
            output: {
              items: {
                name: string
                value: string
                'created-at'?: { [x: string]: unknown } | undefined
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { 'project-slug': string } } & { json: { name: string; value: string } }
            output: {
              name: string
              value: string
              'created-at'?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { 'project-slug': string } } & { json: { name: string; value: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/envvar/:name': {
      $get:
        | {
            input: { param: { 'project-slug': string; name: string } }
            output: {
              name: string
              value: string
              'created-at'?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { 'project-slug': string; name: string } }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string; name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/job/:job-number/cancel': {
      $post:
        | {
            input: { param: { 'job-number': { [x: string]: unknown }; 'project-slug': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'job-number': { [x: string]: unknown }; 'project-slug': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/pipeline': {
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: { branch?: string | undefined; 'page-token'?: string | undefined }
            }
            output: {
              items: {
                id: string
                errors: {
                  type:
                    | 'config'
                    | 'invalid-trigger-setup'
                    | 'config-fetch'
                    | 'timeout'
                    | 'permission'
                    | 'other'
                    | 'trigger-rule'
                    | 'plan'
                  message: string
                }[]
                project_slug: string
                updated_at?: string | undefined
                number: bigint
                trigger_parameters?:
                  | { [x: string]: string | bigint | boolean | { [x: string]: unknown } }
                  | undefined
                state: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'
                created_at: string
                warnings: {
                  type: string
                  message: string
                  description: string
                  url?: string | undefined
                }[]
                trigger: {
                  type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook'
                  received_at: string
                  actor: { login: string; avatar_url: string }
                }
                vcs?:
                  | {
                      provider_name: string
                      target_repository_url: string
                      branch?: string | undefined
                      review_id?: string | undefined
                      review_url?: string | undefined
                      revision: string
                      tag?: string | undefined
                      commit?: { subject: string; body: string } | undefined
                      origin_repository_url: string
                    }
                  | undefined
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: { branch?: string | undefined; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { 'project-slug': string } } & {
              json: {
                branch?: string | undefined
                tag?: string | undefined
                parameters?: { [x: string]: number | string | boolean } | undefined
              }
            }
            output: {
              id: string
              state: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'
              number: bigint
              created_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { 'project-slug': string } } & {
              json: {
                branch?: string | undefined
                tag?: string | undefined
                parameters?: { [x: string]: number | string | boolean } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/pipeline/mine': {
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: {
              items: {
                id: string
                errors: {
                  type:
                    | 'config'
                    | 'invalid-trigger-setup'
                    | 'config-fetch'
                    | 'timeout'
                    | 'permission'
                    | 'other'
                    | 'trigger-rule'
                    | 'plan'
                  message: string
                }[]
                project_slug: string
                updated_at?: string | undefined
                number: bigint
                trigger_parameters?:
                  | { [x: string]: string | bigint | boolean | { [x: string]: unknown } }
                  | undefined
                state: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'
                created_at: string
                warnings: {
                  type: string
                  message: string
                  description: string
                  url?: string | undefined
                }[]
                trigger: {
                  type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook'
                  received_at: string
                  actor: { login: string; avatar_url: string }
                }
                vcs?:
                  | {
                      provider_name: string
                      target_repository_url: string
                      branch?: string | undefined
                      review_id?: string | undefined
                      review_url?: string | undefined
                      revision: string
                      tag?: string | undefined
                      commit?: { subject: string; body: string } | undefined
                      origin_repository_url: string
                    }
                  | undefined
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/pipeline/:pipeline-number': {
      $get:
        | {
            input: {
              param: { 'project-slug': string; 'pipeline-number': { [x: string]: unknown } }
            }
            output: {
              id: string
              errors: {
                type:
                  | 'config'
                  | 'invalid-trigger-setup'
                  | 'config-fetch'
                  | 'timeout'
                  | 'permission'
                  | 'other'
                  | 'trigger-rule'
                  | 'plan'
                message: string
              }[]
              project_slug: string
              updated_at?: string | undefined
              number: bigint
              trigger_parameters?:
                | { [x: string]: string | bigint | boolean | { [x: string]: unknown } }
                | undefined
              state: 'created' | 'errored' | 'setup-pending' | 'setup' | 'pending'
              created_at: string
              warnings: {
                type: string
                message: string
                description: string
                url?: string | undefined
              }[]
              trigger: {
                type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook'
                received_at: string
                actor: { login: string; avatar_url: string }
              }
              vcs?:
                | {
                    provider_name: string
                    target_repository_url: string
                    branch?: string | undefined
                    review_id?: string | undefined
                    review_url?: string | undefined
                    revision: string
                    tag?: string | undefined
                    commit?: { subject: string; body: string } | undefined
                    origin_repository_url: string
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { 'project-slug': string; 'pipeline-number': { [x: string]: unknown } }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/project/:project-slug/schedule': {
      $get:
        | {
            input: { param: { 'project-slug': string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: {
              items: {
                id: string
                timetable:
                  | {
                      'per-hour': number
                      'hours-of-day': number[]
                      'days-of-week': ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                      'days-of-month'?: number[] | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                  | {
                      'per-hour': number
                      'hours-of-day': number[]
                      'days-of-month': number[]
                      'days-of-week'?:
                        | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                        | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                'updated-at': string
                name: string
                'created-at': string
                'project-slug': string
                parameters: { [x: string]: number | string | boolean }
                actor: { avatar_url: string; id: string; login: string; name: string }
                description: string
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'project-slug': string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { 'project-slug': string } } & {
              json: {
                name: string
                timetable:
                  | {
                      'per-hour': number
                      'hours-of-day': number[]
                      'days-of-week': ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                      'days-of-month'?: number[] | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                  | {
                      'per-hour': number
                      'hours-of-day': number[]
                      'days-of-month': number[]
                      'days-of-week'?:
                        | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                        | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                'attribution-actor': 'current' | 'system'
                parameters: { [x: string]: number | string | boolean }
                description?: string | undefined
              }
            }
            output: {
              id: string
              timetable:
                | {
                    'per-hour': number
                    'hours-of-day': number[]
                    'days-of-week': ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                    'days-of-month'?: number[] | undefined
                    months?:
                      | (
                          | 'MAR'
                          | 'NOV'
                          | 'DEC'
                          | 'JUN'
                          | 'MAY'
                          | 'OCT'
                          | 'FEB'
                          | 'APR'
                          | 'SEP'
                          | 'AUG'
                          | 'JAN'
                          | 'JUL'
                        )[]
                      | undefined
                  }
                | {
                    'per-hour': number
                    'hours-of-day': number[]
                    'days-of-month': number[]
                    'days-of-week'?:
                      | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                      | undefined
                    months?:
                      | (
                          | 'MAR'
                          | 'NOV'
                          | 'DEC'
                          | 'JUN'
                          | 'MAY'
                          | 'OCT'
                          | 'FEB'
                          | 'APR'
                          | 'SEP'
                          | 'AUG'
                          | 'JAN'
                          | 'JUL'
                        )[]
                      | undefined
                  }
              'updated-at': string
              name: string
              'created-at': string
              'project-slug': string
              parameters: { [x: string]: number | string | boolean }
              actor: { avatar_url: string; id: string; login: string; name: string }
              description: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { 'project-slug': string } } & {
              json: {
                name: string
                timetable:
                  | {
                      'per-hour': number
                      'hours-of-day': number[]
                      'days-of-week': ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                      'days-of-month'?: number[] | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                  | {
                      'per-hour': number
                      'hours-of-day': number[]
                      'days-of-month': number[]
                      'days-of-week'?:
                        | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                        | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                'attribution-actor': 'current' | 'system'
                parameters: { [x: string]: number | string | boolean }
                description?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/schedule/:schedule-id': {
      $delete:
        | {
            input: { param: { 'schedule-id': string } }
            output: { message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'schedule-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { 'schedule-id': string } }
            output: {
              id: string
              timetable:
                | {
                    'per-hour': number
                    'hours-of-day': number[]
                    'days-of-week': ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                    'days-of-month'?: number[] | undefined
                    months?:
                      | (
                          | 'MAR'
                          | 'NOV'
                          | 'DEC'
                          | 'JUN'
                          | 'MAY'
                          | 'OCT'
                          | 'FEB'
                          | 'APR'
                          | 'SEP'
                          | 'AUG'
                          | 'JAN'
                          | 'JUL'
                        )[]
                      | undefined
                  }
                | {
                    'per-hour': number
                    'hours-of-day': number[]
                    'days-of-month': number[]
                    'days-of-week'?:
                      | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                      | undefined
                    months?:
                      | (
                          | 'MAR'
                          | 'NOV'
                          | 'DEC'
                          | 'JUN'
                          | 'MAY'
                          | 'OCT'
                          | 'FEB'
                          | 'APR'
                          | 'SEP'
                          | 'AUG'
                          | 'JAN'
                          | 'JUL'
                        )[]
                      | undefined
                  }
              'updated-at': string
              name: string
              'created-at': string
              'project-slug': string
              parameters: { [x: string]: number | string | boolean }
              actor: { avatar_url: string; id: string; login: string; name: string }
              description: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'schedule-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { 'schedule-id': string } } & {
              json: {
                description?: string | undefined
                name?: string | undefined
                timetable?:
                  | {
                      'per-hour'?: number | undefined
                      'hours-of-day'?: number[] | undefined
                      'days-of-week'?:
                        | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                        | undefined
                      'days-of-month'?: number[] | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                  | undefined
                'attribution-actor'?: 'current' | 'system' | undefined
                parameters?: { [x: string]: number | string | boolean } | undefined
              }
            }
            output: {
              id: string
              timetable:
                | {
                    'per-hour': number
                    'hours-of-day': number[]
                    'days-of-week': ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                    'days-of-month'?: number[] | undefined
                    months?:
                      | (
                          | 'MAR'
                          | 'NOV'
                          | 'DEC'
                          | 'JUN'
                          | 'MAY'
                          | 'OCT'
                          | 'FEB'
                          | 'APR'
                          | 'SEP'
                          | 'AUG'
                          | 'JAN'
                          | 'JUL'
                        )[]
                      | undefined
                  }
                | {
                    'per-hour': number
                    'hours-of-day': number[]
                    'days-of-month': number[]
                    'days-of-week'?:
                      | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                      | undefined
                    months?:
                      | (
                          | 'MAR'
                          | 'NOV'
                          | 'DEC'
                          | 'JUN'
                          | 'MAY'
                          | 'OCT'
                          | 'FEB'
                          | 'APR'
                          | 'SEP'
                          | 'AUG'
                          | 'JAN'
                          | 'JUL'
                        )[]
                      | undefined
                  }
              'updated-at': string
              name: string
              'created-at': string
              'project-slug': string
              parameters: { [x: string]: number | string | boolean }
              actor: { avatar_url: string; id: string; login: string; name: string }
              description: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'schedule-id': string } } & {
              json: {
                description?: string | undefined
                name?: string | undefined
                timetable?:
                  | {
                      'per-hour'?: number | undefined
                      'hours-of-day'?: number[] | undefined
                      'days-of-week'?:
                        | ('TUE' | 'SAT' | 'SUN' | 'MON' | 'THU' | 'WED' | 'FRI')[]
                        | undefined
                      'days-of-month'?: number[] | undefined
                      months?:
                        | (
                            | 'MAR'
                            | 'NOV'
                            | 'DEC'
                            | 'JUN'
                            | 'MAY'
                            | 'OCT'
                            | 'FEB'
                            | 'APR'
                            | 'SEP'
                            | 'AUG'
                            | 'JAN'
                            | 'JUL'
                          )[]
                        | undefined
                    }
                  | undefined
                'attribution-actor'?: 'current' | 'system' | undefined
                parameters?: { [x: string]: number | string | boolean } | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { avatar_url: string; id: string; login: string; name: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflow/:id/approve/:approval_request_id': {
      $post:
        | {
            input: { param: { approval_request_id: string; id: string } }
            output: { message: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { approval_request_id: string; id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflow/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } }
            output: { message: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflow/:id/job': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              items: {
                canceled_by?: string | undefined
                dependencies: string[]
                job_number?: bigint | undefined
                id: string
                started_at: string
                name: string
                approved_by?: string | undefined
                project_slug: string
                status:
                  | 'success'
                  | 'running'
                  | 'not_run'
                  | 'failed'
                  | 'retried'
                  | 'queued'
                  | 'not_running'
                  | 'infrastructure_fail'
                  | 'timedout'
                  | 'on_hold'
                  | 'terminated-unknown'
                  | 'blocked'
                  | 'canceled'
                  | 'unauthorized'
                type: 'build' | 'approval'
                requires?:
                  | {
                      [x: string]: (
                        | 'success'
                        | 'not_run'
                        | 'failed'
                        | 'canceled'
                        | 'unauthorized'
                      )[]
                    }
                  | undefined
                stopped_at?: string | undefined
                approval_request_id?: string | undefined
              }[]
              next_page_token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflow/:id/rerun': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                enable_ssh?: boolean | undefined
                from_failed?: boolean | undefined
                jobs?: string[] | undefined
                sparse_tree?: boolean | undefined
              }
            }
            output: { workflow_id: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              json: {
                enable_ssh?: boolean | undefined
                from_failed?: boolean | undefined
                jobs?: string[] | undefined
                sparse_tree?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/org/:orgID/oidc-custom-claims': {
      $get:
        | {
            input: { param: { orgID: string } }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { orgID: string } } & { query: { claims: string } }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & { query: { claims: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgID: string } } & { query: { claims: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgID: string } } & { query: { claims: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { orgID: string } } & { json: PatchClaimsRequest }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string } } & { json: PatchClaimsRequest }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgID: string } } & { json: PatchClaimsRequest }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgID: string } } & { json: PatchClaimsRequest }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/:orgID/project/:projectID/oidc-custom-claims': {
      $get:
        | {
            input: { param: { orgID: string; projectID: string } }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string; projectID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgID: string; projectID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgID: string; projectID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { orgID: string; projectID: string } } & { query: { claims: string } }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string; projectID: string } } & { query: { claims: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgID: string; projectID: string } } & { query: { claims: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgID: string; projectID: string } } & { query: { claims: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { orgID: string; projectID: string } } & { json: PatchClaimsRequest }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgID: string; projectID: string } } & { json: PatchClaimsRequest }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgID: string; projectID: string } } & { json: PatchClaimsRequest }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgID: string; projectID: string } } & { json: PatchClaimsRequest }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owner/:ownerID/context/:context/decision': {
      $get:
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: {
                status?: string | undefined
                after?: string | undefined
                before?: string | undefined
                branch?: string | undefined
                project_id?: string | undefined
                build_number?: string | undefined
                offset?: number | undefined
              }
            }
            output: DecisionLog[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: {
                status?: string | undefined
                after?: string | undefined
                before?: string | undefined
                branch?: string | undefined
                project_id?: string | undefined
                build_number?: string | undefined
                offset?: number | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: {
                status?: string | undefined
                after?: string | undefined
                before?: string | undefined
                branch?: string | undefined
                project_id?: string | undefined
                build_number?: string | undefined
                offset?: number | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: {
                status?: string | undefined
                after?: string | undefined
                before?: string | undefined
                branch?: string | undefined
                project_id?: string | undefined
                build_number?: string | undefined
                offset?: number | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: {
                status?: string | undefined
                after?: string | undefined
                before?: string | undefined
                branch?: string | undefined
                project_id?: string | undefined
                build_number?: string | undefined
                offset?: number | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { ownerID: string; context: string } } & {
              json: { input: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: Decision
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              json: { input: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              json: { input: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              json: { input: string; metadata?: { [x: string]: unknown } | undefined }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owner/:ownerID/context/:context/decision/settings': {
      $get:
        | {
            input: { param: { ownerID: string; context: string } }
            output: DecisionSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { ownerID: string; context: string } } & { json: DecisionSettings }
            output: DecisionSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string } } & { json: DecisionSettings }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string } } & { json: DecisionSettings }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string } } & { json: DecisionSettings }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string } } & { json: DecisionSettings }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owner/:ownerID/context/:context/decision/:decisionID': {
      $get:
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: DecisionLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owner/:ownerID/context/:context/decision/:decisionID/policy-bundle': {
      $get:
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: PolicyBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerID: string; context: string; decisionID: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owner/:ownerID/context/:context/policy-bundle': {
      $get:
        | {
            input: { param: { ownerID: string; context: string } }
            output: PolicyBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: BundleDiff
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: BundleDiff
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: { error: string }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { ownerID: string; context: string } } & {
              query: { dry?: boolean | undefined }
            } & { json: BundlePayload }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owner/:ownerID/context/:context/policy-bundle/:policyName': {
      $get:
        | {
            input: { param: { ownerID: string; context: string; policyName: string } }
            output: Policy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerID: string; context: string; policyName: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerID: string; context: string; policyName: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerID: string; context: string; policyName: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerID: string; context: string; policyName: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerID: string; context: string; policyName: string } }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/context': {
      $post:
        | {
            input: { json: ContextCreated }
            output: { id: string; name: string; created_at: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContextCreated }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ContextCreated }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ContextCreated }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ContextCreated }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                'owner-id'?: string | undefined
                'owner-slug'?: string | undefined
                'owner-type'?: 'account' | 'organization' | undefined
                'page-token'?: string | undefined
              }
            }
            output: ContextList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'owner-id'?: string | undefined
                'owner-slug'?: string | undefined
                'owner-type'?: 'account' | 'organization' | undefined
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'owner-id'?: string | undefined
                'owner-slug'?: string | undefined
                'owner-type'?: 'account' | 'organization' | undefined
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                'owner-id'?: string | undefined
                'owner-slug'?: string | undefined
                'owner-type'?: 'account' | 'organization' | undefined
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                'owner-id'?: string | undefined
                'owner-slug'?: string | undefined
                'owner-type'?: 'account' | 'organization' | undefined
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/context/:context_id': {
      $get:
        | {
            input: { param: { context_id: string } }
            output: Context
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { context_id: string } }
            output: DeleteContextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/context/:context_id/environment-variable': {
      $get:
        | {
            input: { param: { context_id: string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: EnvVarList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string } } & {
              query: { 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/context/:context_id/environment-variable/:env_var_name': {
      $put:
        | {
            input: { param: { context_id: string; env_var_name: string } } & {
              json: { value: string }
            }
            output: UpdateEnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string; env_var_name: string } } & {
              json: { value: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string; env_var_name: string } } & {
              json: { value: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string; env_var_name: string } } & {
              json: { value: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string; env_var_name: string } } & {
              json: { value: string }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { context_id: string; env_var_name: string } }
            output: DeleteEnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string; env_var_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string; env_var_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string; env_var_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string; env_var_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/context/:context_id/restrictions': {
      $get:
        | {
            input: { param: { context_id: string } }
            output: ContextProjectRestrictionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: RestrictionCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string } } & {
              json: {
                restriction_type?: 'project' | 'expression' | 'group' | undefined
                restriction_value?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/context/:context_id/restrictions/:restriction_id': {
      $delete:
        | {
            input: { param: { context_id: string; restriction_id: string } }
            output: RestrictionDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context_id: string; restriction_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { context_id: string; restriction_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { context_id: string; restriction_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { context_id: string; restriction_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { context_id: string; restriction_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project/:provider/:organization/:project/settings': {
      $get:
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            }
            output: ProjectSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: ProjectSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: ProjectSettings }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:org_id/groups': {
      $get:
        | {
            input: { param: { org_id: string } } & {
              query: { limit?: number | undefined; 'page-token'?: string | undefined }
            }
            output: Groups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & {
              query: { limit?: number | undefined; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: string } } & {
              query: { limit?: number | undefined; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: string } } & {
              query: { limit?: number | undefined; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { org_id: string } } & {
              json: { name: string; description?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:org_id/groups/:group_id': {
      $get:
        | {
            input: { param: { org_id: string; group_id: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: string; group_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:org_id/usage_export_job': {
      $post:
        | {
            input: { param: { org_id: string } } & {
              json: { start: string; end: string; shared_org_ids?: string[] | undefined }
            }
            output: UsageExportJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org_id: string } } & {
              json: { start: string; end: string; shared_org_ids?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: string } } & {
              json: { start: string; end: string; shared_org_ids?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: string } } & {
              json: { start: string; end: string; shared_org_ids?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: string } } & {
              json: { start: string; end: string; shared_org_ids?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { org_id: string } } & {
              json: { start: string; end: string; shared_org_ids?: string[] | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:org_id/usage_export_job/:usage_export_job_id': {
      $get:
        | {
            input: { param: { org_id: string; usage_export_job_id: string } }
            output: GetUsageExportJobStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; usage_export_job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: string; usage_export_job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: string; usage_export_job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: string; usage_export_job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { org_id: string; usage_export_job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project/:provider/:organization/:project/pipeline/run': {
      $post:
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: TriggerPipelineRequest }
            output: PipelineNotTriggeredResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: TriggerPipelineRequest }
            output: PipelineTriggeredResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: TriggerPipelineRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: TriggerPipelineRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                provider: 'github' | 'gh' | 'bitbucket' | 'bb' | 'circleci'
                organization: string
                project: string
              }
            } & { json: TriggerPipelineRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:project_id/pipeline-definitions': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: PipelineDefinitionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreatePipelineDefinitionRequest }
            output: PipelineDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreatePipelineDefinitionRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: CreatePipelineDefinitionRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & { json: CreatePipelineDefinitionRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: CreatePipelineDefinitionRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id': {
      $get:
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: PipelineDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: UpdatePipelineDefinitionRequest
            }
            output: PipelineDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: UpdatePipelineDefinitionRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: UpdatePipelineDefinitionRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: UpdatePipelineDefinitionRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: UpdatePipelineDefinitionRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: PipelineDefinitionDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id/triggers': {
      $get:
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: TriggerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: CreateTriggerRequest
            }
            output: Trigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: CreateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: CreateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: CreateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; pipeline_definition_id: string } } & {
              json: CreateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_id/triggers/:trigger_id': {
      $get:
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: Trigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { project_id: string; trigger_id: string } } & {
              json: UpdateTriggerRequest
            }
            output: Trigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; trigger_id: string } } & {
              json: UpdateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; trigger_id: string } } & {
              json: UpdateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; trigger_id: string } } & {
              json: UpdateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; trigger_id: string } } & {
              json: UpdateTriggerRequest
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: TriggerDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; trigger_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_id/rollback': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: RollbackProjectRequest }
            output: RollbackProjectResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { project_id: string } } & { json: RollbackProjectRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: RollbackProjectRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: RollbackProjectRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_id: string } } & { json: RollbackProjectRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploy/environments': {
      $get:
        | {
            input: {
              query: { 'org-id': string; 'page-size': number; 'page-token'?: string | undefined }
            }
            output: PaginatedEnvironmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { 'org-id': string; 'page-size': number; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { 'org-id': string; 'page-size': number; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { 'org-id': string; 'page-size': number; 'page-token'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploy/environments/:environment_id': {
      $get:
        | {
            input: { param: { environment_id: string } }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploy/components': {
      $get:
        | {
            input: {
              query: {
                'org-id': string
                'project-id'?: string | undefined
                'page-size': number
                'page-token'?: string | undefined
              }
            }
            output: PaginatedComponentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'org-id': string
                'project-id'?: string | undefined
                'page-size': number
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'org-id': string
                'project-id'?: string | undefined
                'page-size': number
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                'org-id': string
                'project-id'?: string | undefined
                'page-size': number
                'page-token'?: string | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploy/components/:component_id': {
      $get:
        | {
            input: { param: { component_id: string } }
            output: Component
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { component_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { component_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { component_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploy/components/:component_id/versions': {
      $get:
        | {
            input: { param: { component_id: string } } & {
              query: { 'environment-id'?: string | undefined }
            }
            output: PaginatedComponentVersionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { component_id: string } } & {
              query: { 'environment-id'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { component_id: string } } & {
              query: { 'environment-id'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { component_id: string } } & {
              query: { 'environment-id'?: string | undefined }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhook': {
      $get:
        | {
            input: {
              query: {
                'scope-id': string
                'scope-type': 'project'
                'is-enabled'?: boolean | undefined
              }
            }
            output: WebhookList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'scope-id': string
                'scope-type': 'project'
                'is-enabled'?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'scope-id': string
                'scope-type': 'project'
                'is-enabled'?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                'scope-id': string
                'scope-type': 'project'
                'is-enabled'?: boolean | undefined
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhook/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { webhook_id: string } } & { json: UpdateWebhookRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & { json: UpdateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & { json: UpdateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } } & { json: UpdateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & { json: UpdateWebhookRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { webhook_id: string } }
            output: WebhookDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/otel/exporters': {
      $get:
        | {
            input: { query: { 'org-id': string } }
            output: ExporterList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'org-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'org-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { 'org-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { 'org-id': string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateExporterRequest }
            output: Exporter
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateExporterRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateExporterRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateExporterRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateExporterRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/otel/exporters/:otel_exporter_id': {
      $delete:
        | {
            input: { param: { otel_exporter_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { otel_exporter_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { otel_exporter_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { otel_exporter_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { otel_exporter_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pipeline/:pipeline_id/values': {
      $get:
        | {
            input: { param: { pipeline_id: string } }
            output: PipelineValues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pipeline_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pipeline_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pipeline_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pipeline_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workflow/:id': {
      $get:
        | { input: { param: { id: string } }; output: Workflow; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/jobs/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } }
            output: GetJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { job_id: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
