type User = {
  admin?: boolean | undefined
  all_emails?: string[] | undefined
  analytics_id?: string | undefined
  avatar_url?: string | undefined
  basic_email_prefs?: string | undefined
  bitbucket?: (number | null) | undefined
  bitbucket_authorized?: boolean | undefined
  containers?: number | undefined
  created_at?: string | undefined
  days_left_in_trial?: number | undefined
  dev_admin?: boolean | undefined
  enrolled_betas?: string[] | undefined
  github_id?: (number | null) | undefined
  github_oauth_scopes?: string[] | undefined
  gravatar_id?: (number | null) | undefined
  heroku_api_key?: (string | null) | undefined
  in_beta_program?: boolean | undefined
  login?: string | undefined
  name?: string | undefined
  organization_prefs?: { [x: string]: unknown } | undefined
  parallelism?: number | undefined
  plan?: (string | null) | undefined
  projects?: { [x: string]: unknown } | undefined
  pusher_id?: string | undefined
  selected_email?: string | undefined
  sign_in_count?: number | undefined
  trial_end?: string | undefined
}
type Lifecycle = 'queued' | 'scheduled' | 'not_run' | 'not_running' | 'running' | 'finished'
type Status =
  | 'retried'
  | 'canceled'
  | 'infrastructure_fail'
  | 'timedout'
  | 'not_run'
  | 'running'
  | 'failed'
  | 'queued'
  | 'scheduled'
  | 'not_running'
  | 'no_tests'
  | 'fixed'
  | 'success'
type PreviousBuild = {
  build_num?: number | undefined
  build_time_millis?: number | undefined
  status?: Status | undefined
}
type Build = {
  body?: string | undefined
  branch?: string | undefined
  build_time_millis?: number | undefined
  build_url?: string | undefined
  committer_email?: string | undefined
  committer_name?: string | undefined
  dont_build?: (string | null) | undefined
  lifecycle?: Lifecycle | undefined
  previous?: PreviousBuild | undefined
  queued_at?: string | undefined
  reponame?: string | undefined
  retry_of?: (number | null) | undefined
  start_time?: string | undefined
  stop_time?: string | undefined
  subject?: string | undefined
  username?: string | undefined
  vcs_url?: string | undefined
  why?: string | undefined
}
type Builds = Build[]
type BuildParameters = { [x: string]: unknown }
type Parallel = string
type Revision = string
type Tag = string
type Outcome = 'canceled' | 'infrastructure_fail' | 'timedout' | 'failed' | 'no_tests' | 'success'
type Sha1 = string
type BuildSummary = {
  added_at?: string | undefined
  build_num?: number | undefined
  outcome?: Outcome | undefined
  pushed_at?: string | undefined
  status?: Status | undefined
  vcs_revision?: Sha1 | undefined
}
type Key = {
  fingerprint?: string | undefined
  preferred?: boolean | undefined
  public_key?: string | undefined
  time?: string | undefined
  type?: 'deploy-key' | 'github-user-key' | undefined
}
type Keys = Key[]
type Envvar = { name?: string | undefined; value?: string | undefined }
type Envvars = Envvar[]
type CommitDetail = {
  author_date?: string | undefined
  author_email?: string | undefined
  author_login?: string | undefined
  author_name?: string | undefined
  body?: string | undefined
  commit?: Sha1 | undefined
  commit_url?: string | undefined
  committer_date?: string | undefined
  committer_email?: string | undefined
  committer_login?: string | undefined
  committer_name?: string | undefined
  subject?: string | undefined
}
type CommitDetails = CommitDetail[]
type BuildDetail = {
  all_commit_details?: CommitDetails | undefined
  compare?: (string | null) | undefined
  job_name?: string | undefined
  node?: ({ [x: string]: unknown } | null) | undefined
  previous_successful_build?: PreviousBuild | undefined
  retries?: (boolean | null) | undefined
  ssh_enabled?: (boolean | null) | undefined
  timedout?: (boolean | null) | undefined
  usage_queued_at?: string | undefined
  user?: User | undefined
}
type Artifact = {
  node_index?: number | undefined
  path?: string | undefined
  pretty_path?: string | undefined
  url?: string | undefined
}
type Artifacts = Artifact[]
type Tests = {
  tests?:
    | {
        classname?: string | undefined
        file?: string | undefined
        message?: string | undefined
        name?: string | undefined
        result?: Status | undefined
        run_time?: number | undefined
        source?: string | undefined
      }[]
    | undefined
}
type Aws = { keypair?: (string | null) | undefined }
type StringOrNull = string | null
type Scope =
  | 'write-settings'
  | 'view-builds'
  | 'read-settings'
  | 'trigger-builds'
  | 'all'
  | 'status'
  | 'none'
type Project = {
  aws?: Aws | undefined
  branches?: { [x: string]: unknown } | undefined
  campfire_notify_prefs?: StringOrNull | undefined
  campfire_room?: StringOrNull | undefined
  campfire_subdomain?: StringOrNull | undefined
  campfire_token?: StringOrNull | undefined
  compile?: string | undefined
  default_branch?: string | undefined
  dependencies?: string | undefined
  extra?: string | undefined
  feature_flags?:
    | {
        'build-fork-prs'?: boolean | undefined
        fleet?: (boolean | null) | undefined
        junit?: boolean | undefined
        oss?: boolean | undefined
        osx?: boolean | undefined
        'set-github-status'?: boolean | undefined
        'trusty-beta'?: boolean | undefined
      }
    | undefined
  flowdock_api_token?: StringOrNull | undefined
  followed?: boolean | undefined
  has_usable_key?: boolean | undefined
  heroku_deploy_user?: StringOrNull | undefined
  hipchat_api_token?: StringOrNull | undefined
  hipchat_notify?: StringOrNull | undefined
  hipchat_notify_prefs?: (string | null) | undefined
  hipchat_room?: StringOrNull | undefined
  irc_channel?: StringOrNull | undefined
  irc_keyword?: StringOrNull | undefined
  irc_notify_prefs?: StringOrNull | undefined
  irc_password?: StringOrNull | undefined
  irc_server?: StringOrNull | undefined
  irc_username?: StringOrNull | undefined
  language?: string | undefined
  oss?: boolean | undefined
  parallel?: number | undefined
  reponame?: string | undefined
  scopes?: Scope[] | undefined
  setup?: string | undefined
  slack_api_token?: StringOrNull | undefined
  slack_channel?: StringOrNull | undefined
  slack_channel_override?: StringOrNull | undefined
  slack_notify_prefs?: StringOrNull | undefined
  slack_subdomain?: StringOrNull | undefined
  slack_webhook_url?: string | undefined
  ssh_keys?: string[] | undefined
  test?: string | undefined
  username?: string | undefined
  vcs_type?: string | undefined
  vcs_url?: string | undefined
}
type Projects = Project[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/me': { $get: { input: {}; output: User; outputFormat: 'json'; status: 200 } } } & {
    '/project/:username/:project': {
      $get: {
        input: { param: { username: string; project: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: 'completed' | 'successful' | 'failed' | 'running' | undefined
          }
        }
        output: Builds
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { username: string; project: string } } & {
          json: {
            build_parameters?: BuildParameters | undefined
            parallel?: Parallel | undefined
            revision?: Revision | undefined
            tag?: Tag | undefined
          }
        }
        output: BuildSummary
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/project/:username/:project/build-cache': {
      $delete: {
        input: { param: { username: string; project: string } }
        output: { status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/checkout-key': {
      $get: {
        input: { param: { username: string; project: string } }
        output: Keys
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { username: string; project: string } } & {
          json: 'deploy-key' | 'github-user-key'
        }
        output: Key
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/checkout-key/:fingerprint': {
      $delete: {
        input: { param: { username: string; project: string; fingerprint: string } }
        output: { message?: 'OK' | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { username: string; project: string; fingerprint: string } }
        output: Key
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/envvar': {
      $get: {
        input: { param: { username: string; project: string } }
        output: Envvars
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { username: string; project: string } }
        output: Envvar
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/envvar/:name': {
      $delete: {
        input: { param: { username: string; project: string; name: string } }
        output: { message?: 'OK' | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { username: string; project: string; name: string } }
        output: Envvar
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/ssh-key': {
      $post: {
        input: { param: { username: string; project: string } } & {
          header: { 'Content-Type': 'application/json' }
        } & { json: { hostname?: string | undefined; private_key?: string | undefined } }
        output: { message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/tree/:branch': {
      $post: {
        input: { param: { username: string; project: string; branch: string } } & {
          json: {
            build_parameters?: BuildParameters | undefined
            parallel?: Parallel | undefined
            revision?: Revision | undefined
          }
        }
        output: Build
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/project/:username/:project/:build_num': {
      $get: {
        input: { param: { username: string; project: string; build_num: number } }
        output: BuildDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/:build_num/artifacts': {
      $get: {
        input: { param: { username: string; project: string; build_num: number } }
        output: Artifacts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/:build_num/cancel': {
      $post: {
        input: { param: { username: string; project: string; build_num: number } }
        output: Build
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/:build_num/retry': {
      $post: {
        input: { param: { username: string; project: string; build_num: number } }
        output: Build
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:username/:project/:build_num/tests': {
      $get: {
        input: { param: { username: string; project: string; build_num: number } }
        output: Tests
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects': { $get: { input: {}; output: Projects; outputFormat: 'json'; status: 200 } }
  } & {
    '/recent-builds': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: Builds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/heroku-key': {
      $post: {
        input: {}
        output: { message?: string | undefined }
        outputFormat: 'json'
        status: 403
      }
    }
  },
  '/'
>
export default routes
