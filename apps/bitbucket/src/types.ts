type Error = {
  type: string
  error?:
    | { message: string; detail?: string | undefined; data?: { [x: string]: unknown } | undefined }
    | undefined
}
type SubjectTypes = {
  repository?:
    | {
        links?:
          | { events?: { href?: string | undefined; name?: string | undefined } | undefined }
          | undefined
      }
    | undefined
  workspace?:
    | {
        links?:
          | { events?: { href?: string | undefined; name?: string | undefined } | undefined }
          | undefined
      }
    | undefined
}
type HookEvent = {
  event?:
    | 'issue:comment_created'
    | 'issue:created'
    | 'issue:updated'
    | 'pipeline:span_created'
    | 'project:updated'
    | 'pullrequest:approved'
    | 'pullrequest:changes_request_created'
    | 'pullrequest:changes_request_removed'
    | 'pullrequest:comment_created'
    | 'pullrequest:comment_deleted'
    | 'pullrequest:comment_reopened'
    | 'pullrequest:comment_resolved'
    | 'pullrequest:comment_updated'
    | 'pullrequest:created'
    | 'pullrequest:fulfilled'
    | 'pullrequest:push'
    | 'pullrequest:rejected'
    | 'pullrequest:unapproved'
    | 'pullrequest:updated'
    | 'repo:commit_comment_created'
    | 'repo:commit_status_created'
    | 'repo:commit_status_updated'
    | 'repo:created'
    | 'repo:deleted'
    | 'repo:fork'
    | 'repo:imported'
    | 'repo:push'
    | 'repo:transfer'
    | 'repo:updated'
    | undefined
  category?: string | undefined
  label?: string | undefined
  description?: string | undefined
}
type PaginatedHookEvents = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: HookEvent[] | undefined
}
type Link = { href?: string | undefined; name?: string | undefined }
type AccountLinks = { avatar?: Link | undefined }
type Account = {
  type: string
  links?: AccountLinks | undefined
  created_on?: string | undefined
  display_name?: string | undefined
  uuid?: string | undefined
}
type TeamLinks = {
  avatar?: Link | undefined
  self?: Link | undefined
  html?: Link | undefined
  members?: Link | undefined
  projects?: Link | undefined
  repositories?: Link | undefined
}
type Team = {
  type: string
  links?: TeamLinks | undefined
  created_on?: string | undefined
  display_name?: string | undefined
  uuid?: string | undefined
}
type Project = {
  type: string
  links?:
    | {
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  uuid?: string | undefined
  key?: string | undefined
  owner?: Team | undefined
  name?: string | undefined
  description?: string | undefined
  is_private?: boolean | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  has_publicly_visible_repos?: boolean | undefined
  enforced_signed_commits?: boolean | undefined
}
type Author = { type: string; raw?: string | undefined; user?: Account | undefined }
type Committer = { type: string; raw?: string | undefined; user?: Account | undefined }
type BaseCommit = {
  type: string
  hash?: string | undefined
  date?: string | undefined
  author?: Author | undefined
  committer?: Committer | undefined
  message?: string | undefined
  summary?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  parents?: BaseCommit[] | undefined
}
type Participant = {
  type: string
  user?: Account | undefined
  role?: 'PARTICIPANT' | 'REVIEWER' | undefined
  approved?: boolean | undefined
  state?: 'approved' | 'changes_requested' | null | undefined
  participated_on?: string | undefined
}
type Commit = {
  type: string
  hash?: string | undefined
  date?: string | undefined
  author?: Author | undefined
  committer?: Committer | undefined
  message?: string | undefined
  summary?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  parents?: BaseCommit[] | undefined
  repository?: Repository | undefined
  participants?: Participant[] | undefined
}
type Branch = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  target?: Commit | undefined
  merge_strategies?:
    | (
        | 'merge_commit'
        | 'squash'
        | 'fast_forward'
        | 'squash_fast_forward'
        | 'rebase_fast_forward'
        | 'rebase_merge'
      )[]
    | undefined
  default_merge_strategy?: string | undefined
}
type Repository = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
        pullrequests?: { href?: string | undefined; name?: string | undefined } | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        forks?: { href?: string | undefined; name?: string | undefined } | undefined
        watchers?: { href?: string | undefined; name?: string | undefined } | undefined
        downloads?: { href?: string | undefined; name?: string | undefined } | undefined
        clone?: { href?: string | undefined; name?: string | undefined }[] | undefined
        hooks?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  uuid?: string | undefined
  full_name?: string | undefined
  is_private?: boolean | undefined
  parent?: Repository | undefined
  scm?: 'git' | undefined
  owner?: Account | undefined
  name?: string | undefined
  description?: string | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  size?: number | undefined
  language?: string | undefined
  has_issues?: boolean | undefined
  has_wiki?: boolean | undefined
  fork_policy?: 'allow_forks' | 'no_public_forks' | 'no_forks' | undefined
  enforced_signed_commits?: boolean | undefined
  project?: Project | undefined
  mainbranch?: Branch | undefined
}
type PaginatedRepositories = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Repository[] | undefined
}
type Workspace = {
  type: string
  links?:
    | {
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        members?: { href?: string | undefined; name?: string | undefined } | undefined
        owners?: { href?: string | undefined; name?: string | undefined } | undefined
        projects?: { href?: string | undefined; name?: string | undefined } | undefined
        repositories?: { href?: string | undefined; name?: string | undefined } | undefined
        snippets?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  uuid?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  is_private?: boolean | undefined
  is_personal?: boolean | undefined
  enforced_signed_commits?: boolean | undefined
  is_privacy_enforced?: boolean | undefined
  forking_mode?: 'allow_forks' | 'internal_only' | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
}
type Group = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  owner?: Account | undefined
  workspace?: Workspace | undefined
  name?: string | undefined
  slug?: string | undefined
  full_slug?: string | undefined
}
type Branchrestriction = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  id?: number | undefined
  kind:
    | 'push'
    | 'delete'
    | 'force'
    | 'restrict_merges'
    | 'require_tasks_to_be_completed'
    | 'require_approvals_to_merge'
    | 'require_review_group_approvals_to_merge'
    | 'require_default_reviewer_approvals_to_merge'
    | 'require_no_changes_requested'
    | 'require_passing_builds_to_merge'
    | 'require_commits_behind'
    | 'reset_pullrequest_approvals_on_change'
    | 'smart_reset_pullrequest_approvals'
    | 'reset_pullrequest_changes_requested_on_change'
    | 'require_all_dependencies_merged'
    | 'enforce_merge_checks'
    | 'allow_auto_merge_when_builds_pass'
    | 'require_all_comments_resolved'
  branch_match_kind: 'branching_model' | 'glob'
  branch_type?:
    | 'feature'
    | 'bugfix'
    | 'release'
    | 'hotfix'
    | 'development'
    | 'production'
    | undefined
  pattern: string
  pipelines_source_branches?: string[] | undefined
  value?: number | undefined
  users?: Account[] | undefined
  groups?: Group[] | undefined
}
type PaginatedBranchrestrictions = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Branchrestriction[] | undefined
}
type BranchingModel = {
  type: string
  branch_types?: { kind: 'feature' | 'bugfix' | 'release' | 'hotfix'; prefix: string }[] | undefined
  development?: { branch?: Branch | undefined; name: string; use_mainbranch: boolean } | undefined
  production?: { branch?: Branch | undefined; name: string; use_mainbranch: boolean } | undefined
}
type BranchingModelSettings = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  branch_types?:
    | {
        enabled?: boolean | undefined
        kind: 'feature' | 'bugfix' | 'release' | 'hotfix'
        prefix?: string | undefined
      }[]
    | undefined
  development?:
    | {
        is_valid?: boolean | undefined
        name?: string | undefined
        use_mainbranch?: boolean | undefined
      }
    | undefined
  production?:
    | {
        is_valid?: boolean | undefined
        name?: string | undefined
        use_mainbranch?: boolean | undefined
        enabled?: boolean | undefined
      }
    | undefined
}
type Comment = {
  type: string
  id?: bigint | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  content?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  user?: Account | undefined
  deleted?: boolean | undefined
  parent?: Comment | undefined
  inline?:
    | {
        from?: number | undefined
        to?: number | undefined
        start_from?: number | undefined
        start_to?: number | undefined
        path: string
      }
    | undefined
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        code?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
}
type CommitComment = {
  type: string
  id?: bigint | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  content?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  user?: Account | undefined
  deleted?: boolean | undefined
  parent?: Comment | undefined
  inline?:
    | {
        from?: number | undefined
        to?: number | undefined
        start_from?: number | undefined
        start_to?: number | undefined
        path: string
      }
    | undefined
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        code?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  commit?: Commit | undefined
}
type PaginatedCommitComments = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: CommitComment[] | undefined
}
type ApplicationProperty = { _attributes?: ('public' | 'read_only')[] | undefined }
type PullrequestEndpoint = {
  repository?: Repository | undefined
  branch?:
    | {
        name?: string | undefined
        merge_strategies?:
          | (
              | 'merge_commit'
              | 'squash'
              | 'fast_forward'
              | 'squash_fast_forward'
              | 'rebase_fast_forward'
              | 'rebase_merge'
            )[]
          | undefined
        default_merge_strategy?: string | undefined
      }
    | undefined
  commit?: { hash?: string | undefined } | undefined
}
type Pullrequest = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        approve?: { href?: string | undefined; name?: string | undefined } | undefined
        diff?: { href?: string | undefined; name?: string | undefined } | undefined
        diffstat?: { href?: string | undefined; name?: string | undefined } | undefined
        comments?: { href?: string | undefined; name?: string | undefined } | undefined
        activity?: { href?: string | undefined; name?: string | undefined } | undefined
        merge?: { href?: string | undefined; name?: string | undefined } | undefined
        decline?: { href?: string | undefined; name?: string | undefined } | undefined
        mergeability_checks?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  id?: number | undefined
  title?: string | undefined
  rendered?:
    | {
        title?:
          | {
              raw?: string | undefined
              markup?: 'markdown' | 'creole' | 'plaintext' | undefined
              html?: string | undefined
            }
          | undefined
        description?:
          | {
              raw?: string | undefined
              markup?: 'markdown' | 'creole' | 'plaintext' | undefined
              html?: string | undefined
            }
          | undefined
        reason?:
          | {
              raw?: string | undefined
              markup?: 'markdown' | 'creole' | 'plaintext' | undefined
              html?: string | undefined
            }
          | undefined
      }
    | undefined
  summary?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined
  author?: Account | undefined
  source?: PullrequestEndpoint | undefined
  destination?: PullrequestEndpoint | undefined
  merge_commit?: { hash?: string | undefined } | undefined
  comment_count?: number | undefined
  task_count?: number | undefined
  close_source_branch?: boolean | undefined
  closed_by?: Account | undefined
  reason?: string | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  reviewers?: Account[] | undefined
  participants?: Participant[] | undefined
  draft?: boolean | undefined
  queued?: boolean | undefined
}
type PaginatedPullrequests = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Pullrequest[] | undefined
}
type ReportData = {
  type?: 'BOOLEAN' | 'DATE' | 'DURATION' | 'LINK' | 'NUMBER' | 'PERCENTAGE' | 'TEXT' | undefined
  title?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type Report = {
  type: string
  uuid?: string | undefined
  title?: string | undefined
  details?: string | undefined
  external_id?: string | undefined
  reporter?: string | undefined
  link?: string | undefined
  remote_link_enabled?: boolean | undefined
  logo_url?: string | undefined
  report_type?: 'SECURITY' | 'COVERAGE' | 'TEST' | 'BUG' | undefined
  result?: 'PASSED' | 'FAILED' | 'PENDING' | undefined
  data?: ReportData[] | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
}
type PaginatedReports = {
  page?: number | undefined
  values?: Report[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type ReportAnnotation = {
  type: string
  external_id?: string | undefined
  uuid?: string | undefined
  annotation_type?: 'VULNERABILITY' | 'CODE_SMELL' | 'BUG' | undefined
  path?: string | undefined
  line?: number | undefined
  summary?: string | undefined
  details?: string | undefined
  result?: 'PASSED' | 'FAILED' | 'SKIPPED' | 'IGNORED' | undefined
  severity?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | undefined
  link?: string | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
}
type PaginatedAnnotations = {
  page?: number | undefined
  values?: ReportAnnotation[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type Commitstatus = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        commit?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  key: string
  refname?: string | undefined
  url?: string | undefined
  state: 'FAILED' | 'INPROGRESS' | 'STOPPED' | 'SUCCESSFUL'
  name?: string | undefined
  description?: string | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
}
type PaginatedCommitstatuses = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Commitstatus[] | undefined
}
type PaginatedChangeset = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: BaseCommit[] | undefined
}
type PaginatedAccounts = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Account[] | undefined
}
type DeployKey = {
  type: string
  key?: string | undefined
  repository?: Repository | undefined
  comment?: string | undefined
  label?: string | undefined
  added_on?: string | undefined
  last_used?: string | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  owner?: Account | undefined
}
type PaginatedDeployKeys = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: DeployKey[] | undefined
}
type DeploymentState = { type: string }
type DeploymentEnvironment = { type: string; uuid?: string | undefined; name?: string | undefined }
type DeploymentRelease = {
  type: string
  uuid?: string | undefined
  name?: string | undefined
  url?: string | undefined
  commit?: Commit | undefined
  created_on?: string | undefined
}
type Deployment = {
  type: string
  uuid?: string | undefined
  state?: DeploymentState | undefined
  environment?: DeploymentEnvironment | undefined
  release?: DeploymentRelease | undefined
}
type PaginatedDeployments = {
  page?: number | undefined
  values?: Deployment[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type DeploymentVariable = {
  type: string
  uuid?: string | undefined
  key?: string | undefined
  value?: string | undefined
  secured?: boolean | undefined
}
type PaginatedDeploymentVariable = {
  page?: number | undefined
  values?: DeploymentVariable[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type CommitFile = {
  type: string
  path?: string | undefined
  commit?: Commit | undefined
  attributes?: 'link' | 'executable' | 'subrepository' | 'binary' | 'lfs' | undefined
  escaped_path?: string | undefined
}
type Diffstat = {
  type: string
  status?: 'added' | 'removed' | 'modified' | 'renamed' | undefined
  lines_added?: number | undefined
  lines_removed?: number | undefined
  old?: CommitFile | undefined
  new?: CommitFile | undefined
}
type PaginatedDiffstats = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Diffstat[] | undefined
}
type EffectiveRepoBranchingModel = {
  type: string
  branch_types?: { kind: 'feature' | 'bugfix' | 'release' | 'hotfix'; prefix: string }[] | undefined
  development?: { branch?: Branch | undefined; name: string; use_mainbranch: boolean } | undefined
  production?: { branch?: Branch | undefined; name: string; use_mainbranch: boolean } | undefined
}
type UserLinks = {
  avatar?: Link | undefined
  self?: Link | undefined
  html?: Link | undefined
  repositories?: Link | undefined
}
type User = {
  type: string
  links?: UserLinks | undefined
  created_on?: string | undefined
  display_name?: string | undefined
  uuid?: string | undefined
  account_id?: string | undefined
  account_status?: string | undefined
  has_2fa_enabled?: boolean | undefined
  nickname?: string | undefined
  is_staff?: boolean | undefined
}
type DefaultReviewerAndType = {
  type: string
  reviewer_type?: string | undefined
  user?: User | undefined
}
type PaginatedDefaultReviewerAndType = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: DefaultReviewerAndType[] | undefined
}
type PaginatedEnvironments = {
  page?: number | undefined
  values?: DeploymentEnvironment[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type FileConflict = {
  type: string
  path?: string | undefined
  scenario?:
    | 'delete_modify'
    | 'modify_delete'
    | 'content'
    | 'binary'
    | 'flags'
    | 'mode'
    | 'type'
    | 'symlink'
    | 'directory_file'
    | 'file_directory'
    | 'add_rename'
    | 'rename_add'
    | 'delete_rename'
    | 'rename_delete'
    | 'rename'
    | 'subrepo'
    | 'unknown'
    | undefined
  message?: string | undefined
}
type PaginatedFileConflicts = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: FileConflict[] | undefined
}
type PaginatedFiles = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: CommitFile[] | undefined
}
type Object = { type: string }
type WebhooksSubscriptionLink = { href?: string | undefined }
type WebhooksSubscriptionLinks = { self?: WebhooksSubscriptionLink | undefined }
type WebhookSubscription = {
  type: string
  uuid?: string | undefined
  url?: string | undefined
  description?: string | undefined
  subject_type?: 'repository' | 'workspace' | undefined
  subject?: Object | undefined
  active?: boolean | undefined
  created_at?: string | undefined
  events?:
    | (
        | 'issue:comment_created'
        | 'issue:created'
        | 'issue:updated'
        | 'pipeline:span_created'
        | 'project:updated'
        | 'pullrequest:approved'
        | 'pullrequest:changes_request_created'
        | 'pullrequest:changes_request_removed'
        | 'pullrequest:comment_created'
        | 'pullrequest:comment_deleted'
        | 'pullrequest:comment_reopened'
        | 'pullrequest:comment_resolved'
        | 'pullrequest:comment_updated'
        | 'pullrequest:created'
        | 'pullrequest:fulfilled'
        | 'pullrequest:push'
        | 'pullrequest:rejected'
        | 'pullrequest:unapproved'
        | 'pullrequest:updated'
        | 'repo:commit_comment_created'
        | 'repo:commit_status_created'
        | 'repo:commit_status_updated'
        | 'repo:created'
        | 'repo:deleted'
        | 'repo:fork'
        | 'repo:imported'
        | 'repo:push'
        | 'repo:transfer'
        | 'repo:updated'
      )[]
    | undefined
  secret_set?: boolean | undefined
  secret?: string | undefined
  links?: WebhooksSubscriptionLinks | undefined
}
type PaginatedWebhookSubscriptions = {
  values?: WebhookSubscription[] | undefined
  pagelen?: number | undefined
  next?: string | undefined
}
type MergeQueue = { type: string; uuid: string; name: string; state: string }
type PaginatedMergeQueues = {
  page?: number | undefined
  size?: number | undefined
  pagelen?: number | undefined
  values?: MergeQueue[] | undefined
}
type MergeQueueReference = { type?: 'merge_queue' | undefined; uuid?: string | undefined }
type PipelineTarget = { type: string }
type PipelineTrigger = { type: string }
type PipelineState = { type: string }
type PipelineVariable = {
  type: string
  uuid?: string | undefined
  key?: string | undefined
  value?: string | undefined
  secured?: boolean | undefined
}
type PipelineConfigurationSource = { source: string; uri: string }
type PipelinesLinksSectionHref = { type: string; href?: string | undefined }
type PipelinesPipelineLinks = {
  type: string
  self?: PipelinesLinksSectionHref | undefined
  steps?: PipelinesLinksSectionHref | undefined
}
type Pipeline = {
  type: string
  uuid?: string | undefined
  build_number?: number | undefined
  creator?: Account | undefined
  repository?: Repository | undefined
  target?: PipelineTarget | undefined
  trigger?: PipelineTrigger | undefined
  state?: PipelineState | undefined
  variables?: PipelineVariable[] | undefined
  created_on?: string | undefined
  completed_on?: string | undefined
  build_seconds_used?: number | undefined
  configuration_sources?: PipelineConfigurationSource[] | undefined
  links?: PipelinesPipelineLinks | undefined
}
type MergeQueuePullrequest = {
  type?: 'queued_pullrequest' | undefined
  status?:
    | 'QUEUED'
    | 'PROCESSING'
    | 'AWAITING_MERGE'
    | 'MERGE_IN_PROGRESS'
    | 'REMOVING'
    | 'UNKNOWN'
    | undefined
  rank?: number | undefined
  queued_on?: string | undefined
  last_activity_on?: string | undefined
  merge_queue?: MergeQueueReference | undefined
  pipeline?: Pipeline | undefined
  pullrequest?: Pullrequest | undefined
}
type PaginatedMergeQueuePullrequests = {
  page?: number | undefined
  size?: number | undefined
  pagelen?: number | undefined
  values?: MergeQueuePullrequest[] | undefined
}
type RepositoryInheritanceState = {
  type: string
  override_settings?: { [x: string]: unknown } | undefined
}
type RepositoryGroupPermission = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  permission?: 'read' | 'write' | 'admin' | 'none' | undefined
  group?: Group | undefined
  repository?: Repository | undefined
}
type PaginatedRepositoryGroupPermissions = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: RepositoryGroupPermission[] | undefined
}
type BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema = {
  permission: 'read' | 'write' | 'admin'
}
type RepositoryUserPermission = {
  type: string
  permission?: 'read' | 'write' | 'admin' | 'none' | undefined
  user?: User | undefined
  repository?: Repository | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
}
type PaginatedRepositoryUserPermissions = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: RepositoryUserPermission[] | undefined
}
type PaginatedPipelines = {
  page?: number | undefined
  values?: Pipeline[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PipelineCache = {
  type: string
  uuid?: string | undefined
  pipeline_uuid?: string | undefined
  step_uuid?: string | undefined
  name?: string | undefined
  key_hash?: string | undefined
  path?: string | undefined
  file_size_bytes?: number | undefined
  created_on?: string | undefined
}
type PaginatedPipelineCaches = {
  page?: number | undefined
  values?: PipelineCache[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PipelineCacheContentUri = { uri?: string | undefined }
type PipelineRunnerVersion = {
  type: string
  version?: string | undefined
  current?: string | undefined
}
type PipelineRunnerState = {
  type: string
  status?: 'UNREGISTERED' | 'ONLINE' | 'OFFLINE' | 'DISABLED' | 'ENABLED' | 'UNHEALTHY' | undefined
  version?: PipelineRunnerVersion | undefined
  updated_on?: string | undefined
  cordoned?: boolean | undefined
}
type PipelineRunnerOauthClient = {
  type: string
  id?: string | undefined
  secret?: string | undefined
  token_endpoint?: string | undefined
  audience?: string | undefined
}
type PipelineRunner = {
  type: string
  uuid?: string | undefined
  name?: string | undefined
  labels?: string[] | undefined
  state?: PipelineRunnerState | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  oauth_client?: PipelineRunnerOauthClient | undefined
}
type PaginatedPipelineRunners = {
  page?: number | undefined
  values?: PipelineRunner[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PipelineStepState = { type: string }
type PipelineImage = {
  name?: string | undefined
  username?: string | undefined
  password?: string | undefined
  email?: string | undefined
}
type PipelineCommand = { name?: string | undefined; command?: string | undefined }
type PipelineStep = {
  type: string
  uuid?: string | undefined
  started_on?: string | undefined
  completed_on?: string | undefined
  state?: PipelineStepState | undefined
  image?: PipelineImage | undefined
  setup_commands?: PipelineCommand[] | undefined
  script_commands?: PipelineCommand[] | undefined
}
type PaginatedPipelineSteps = {
  page?: number | undefined
  values?: PipelineStep[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PipelinesConfig = {
  type: string
  enabled?: boolean | undefined
  repository?: Repository | undefined
}
type PipelineBuildNumber = { type: string; next?: number | undefined }
type PipelineSelector = {
  type: 'branches' | 'tags' | 'bookmarks' | 'default' | 'custom'
  pattern?: string | undefined
}
type PipelineSchedulePostRequestBody = {
  type: string
  target: { selector: PipelineSelector; ref_name: string; ref_type: 'branch' }
  enabled?: boolean | undefined
  cron_pattern: string
}
type PipelineRefTarget = {
  type: string
  ref_type?: 'branch' | 'tag' | 'named_branch' | 'bookmark' | undefined
  ref_name?: string | undefined
  commit?: Commit | undefined
  selector?: PipelineSelector | undefined
}
type PipelineSchedule = {
  type: string
  uuid?: string | undefined
  enabled?: boolean | undefined
  target?: PipelineRefTarget | undefined
  cron_pattern?: string | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
}
type PaginatedPipelineSchedules = {
  page?: number | undefined
  values?: PipelineSchedule[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PipelineSchedulePutRequestBody = { type: string; enabled?: boolean | undefined }
type PipelineScheduleExecution = { type: string }
type PaginatedPipelineScheduleExecutions = {
  page?: number | undefined
  values?: PipelineScheduleExecution[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PipelineSshKeyPair = {
  type: string
  private_key?: string | undefined
  public_key?: string | undefined
}
type PipelineSshPublicKey = {
  type: string
  key_type?: string | undefined
  key?: string | undefined
  md5_fingerprint?: string | undefined
  sha256_fingerprint?: string | undefined
}
type PipelineKnownHost = {
  type: string
  uuid?: string | undefined
  hostname?: string | undefined
  public_key?: PipelineSshPublicKey | undefined
}
type PaginatedPipelineKnownHosts = {
  page?: number | undefined
  values?: PipelineKnownHost[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PaginatedPipelineVariables = {
  page?: number | undefined
  values?: PipelineVariable[] | undefined
  size?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
}
type CommentResolution = {
  type: string
  user?: Account | undefined
  created_on?: string | undefined
}
type PullrequestComment = {
  type: string
  id?: bigint | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  content?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  user?: Account | undefined
  deleted?: boolean | undefined
  parent?: Comment | undefined
  inline?:
    | {
        from?: number | undefined
        to?: number | undefined
        start_from?: number | undefined
        start_to?: number | undefined
        path: string
      }
    | undefined
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        code?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  pullrequest?: Pullrequest | undefined
  resolution?: CommentResolution | undefined
  pending?: boolean | undefined
}
type PaginatedPullrequestComments = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: PullrequestComment[] | undefined
}
type PullrequestMergeParameters = {
  type: string
  message?: string | undefined
  close_source_branch?: boolean | undefined
  merge_strategy?:
    | 'merge_commit'
    | 'squash'
    | 'fast_forward'
    | 'squash_fast_forward'
    | 'rebase_fast_forward'
    | 'rebase_merge'
    | undefined
}
type PullrequestMergeabilityCheck = {
  type:
    | 'pullrequest_state_check'
    | 'current_user_permission_check'
    | 'git_mergeability_check'
    | 'standard_merge_check'
    | 'custom_pre_merge_check'
    | 'custom_on_merge_check'
    | 'merge_queue_check'
  status: 'PASSED' | 'FAILED' | 'PENDING' | 'SKIPPED' | 'UNKNOWN'
  required: boolean
  blocking: boolean
}
type PullrequestMergeabilityChecks = {
  size?: number | undefined
  values: PullrequestMergeabilityCheck[]
}
type PullrequestCommentTask = {
  id?: bigint | undefined
  created_on: string
  updated_on: string
  state: 'RESOLVED' | 'UNRESOLVED'
  content: {
    raw?: string | undefined
    markup?: 'markdown' | 'creole' | 'plaintext' | undefined
    html?: string | undefined
  }
  creator: Account
  pending?: boolean | undefined
  resolved_on?: string | undefined
  resolved_by?: Account | undefined
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  comment?: Comment | undefined
}
type PaginatedTasks = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: PullrequestCommentTask[] | undefined
}
type PullrequestTaskCreate = {
  content: { raw: string }
  comment?: Comment | undefined
  pending?: boolean | undefined
}
type PullrequestTaskUpdate = {
  content?: { raw: string } | undefined
  state?: 'RESOLVED' | 'UNRESOLVED' | undefined
}
type Ref = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  target?: Commit | undefined
}
type PaginatedRefs = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Ref[] | undefined
}
type PaginatedBranches = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Branch[] | undefined
}
type Tag = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  target?: Commit | undefined
  message?: string | undefined
  date?: string | undefined
  tagger?: Author | undefined
}
type PaginatedTags = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Tag[] | undefined
}
type Treeentry = { type: string; path?: string | undefined; commit?: Commit | undefined }
type PaginatedTreeentries = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Treeentry[] | undefined
}
type Snippet = {
  type: string
  id?: number | undefined
  title?: string | undefined
  scm?: 'git' | undefined
  created_on?: string | undefined
  updated_on?: string | undefined
  owner?: Account | undefined
  creator?: Account | undefined
  is_private?: boolean | undefined
}
type PaginatedSnippets = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Snippet[] | undefined
}
type SnippetComment = {
  type: string
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  snippet?: Snippet | undefined
}
type PaginatedSnippetComments = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: SnippetComment[] | undefined
}
type SnippetCommit = {
  type: string
  hash?: string | undefined
  date?: string | undefined
  author?: Author | undefined
  committer?: Committer | undefined
  message?: string | undefined
  summary?:
    | {
        raw?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        html?: string | undefined
      }
    | undefined
  parents?: BaseCommit[] | undefined
  links?:
    | {
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        diff?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  snippet?: Snippet | undefined
}
type PaginatedSnippetCommit = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: SnippetCommit[] | undefined
}
type SearchSegment = { text?: string | undefined; match?: boolean | undefined }
type SearchLine = { line?: number | undefined; segments?: SearchSegment[] | undefined }
type SearchContentMatch = { lines?: SearchLine[] | undefined }
type SearchCodeSearchResult = {
  type?: string | undefined
  content_match_count?: bigint | undefined
  content_matches?: SearchContentMatch[] | undefined
  path_matches?: SearchSegment[] | undefined
  file?: CommitFile | undefined
}
type SearchResultPage = {
  size?: bigint | undefined
  page?: number | undefined
  pagelen?: number | undefined
  query_substituted?: boolean | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: SearchCodeSearchResult[] | undefined
}
type WorkspaceBase = {
  type: string
  links?:
    | {
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  uuid?: string | undefined
  slug?: string | undefined
}
type WorkspaceAccess = {
  type: string
  administrator?: boolean | undefined
  workspace?: WorkspaceBase | undefined
}
type PaginatedWorkspaceAccess = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: WorkspaceAccess[] | undefined
}
type WorkspaceMembership = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  user?: Account | undefined
  workspace?: Workspace | undefined
}
type RepositoryPermission = {
  type: string
  permission?: 'read' | 'write' | 'admin' | 'none' | undefined
  user?: User | undefined
  repository?: Repository | undefined
}
type PaginatedRepositoryPermissions = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: RepositoryPermission[] | undefined
}
type GPGAccountKey = {
  type: string
  owner?: Account | undefined
  key?: string | undefined
  key_id?: string | undefined
  fingerprint?: string | undefined
  parent_fingerprint?: string | undefined
  name?: string | undefined
  expires_on?: string | undefined
  created_on?: string | undefined
  added_on?: string | undefined
  last_used?: string | undefined
  subkeys?: GPGAccountKey[] | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
}
type PaginatedGpgUserKeys = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: GPGAccountKey[] | undefined
}
type SshAccountKey = {
  type: string
  uuid?: string | undefined
  key?: string | undefined
  comment?: string | undefined
  label?: string | undefined
  created_on?: string | undefined
  last_used?: string | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  owner?: Account | undefined
  expires_on?: string | undefined
  fingerprint?: string | undefined
}
type PaginatedSshUserKeys = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: SshAccountKey[] | undefined
}
type PaginatedWorkspaceMemberships = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: WorkspaceMembership[] | undefined
}
type PaginatedProjects = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: Project[] | undefined
}
type ProjectBranchingModel = {
  type: string
  branch_types?: { kind: 'feature' | 'bugfix' | 'release' | 'hotfix'; prefix: string }[] | undefined
  development?: { name: string; use_mainbranch: boolean } | undefined
  production?: { name: string; use_mainbranch: boolean } | undefined
}
type ProjectDeployKey = {
  type: string
  key?: string | undefined
  project?: Project | undefined
  comment?: string | undefined
  label?: string | undefined
  added_on?: string | undefined
  last_used?: string | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  created_by?: Account | undefined
}
type PaginatedProjectDeployKeys = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: ProjectDeployKey[] | undefined
}
type ProjectGroupPermission = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  permission?: 'read' | 'write' | 'create-repo' | 'admin' | 'none' | undefined
  group?: Group | undefined
  project?: Project | undefined
}
type PaginatedProjectGroupPermissions = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: ProjectGroupPermission[] | undefined
}
type BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema = {
  permission: 'read' | 'write' | 'create-repo' | 'admin'
}
type ProjectUserPermission = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  permission?: 'read' | 'write' | 'create-repo' | 'admin' | 'none' | undefined
  user?: User | undefined
  project?: Project | undefined
}
type PaginatedProjectUserPermissions = {
  size?: number | undefined
  page?: number | undefined
  pagelen?: number | undefined
  next?: string | undefined
  previous?: string | undefined
  values?: ProjectUserPermission[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/addon': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/addon/:addon_key/client-key': {
      $get:
        | { input: { param: { addon_key: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { addon_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addon_key: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addon_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/hook_events': { $get: { input: {}; output: SubjectTypes; outputFormat: 'json'; status: 200 } }
  } & {
    '/hook_events/:subject_type': {
      $get:
        | {
            input: { param: { subject_type: 'repository' | 'workspace' } }
            output: PaginatedHookEvents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subject_type: 'repository' | 'workspace' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace': {
      $get:
        | {
            input: { param: { workspace: string } } & {
              query: {
                role?: 'admin' | 'contributor' | 'member' | 'owner' | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: PaginatedRepositories
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              query: {
                role?: 'admin' | 'contributor' | 'member' | 'owner' | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string } } & {
              query: {
                role?: 'admin' | 'contributor' | 'member' | 'owner' | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug': {
      $delete:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { redirect_to?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { redirect_to?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { redirect_to?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/branch-restrictions': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { kind?: string | undefined; pattern?: string | undefined }
            }
            output: PaginatedBranchrestrictions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { kind?: string | undefined; pattern?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { kind?: string | undefined; pattern?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { kind?: string | undefined; pattern?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Branchrestriction }
            output: Branchrestriction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Branchrestriction }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Branchrestriction }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Branchrestriction }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id': {
      $delete:
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Branchrestriction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } } & {
              json: Branchrestriction
            }
            output: Branchrestriction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } } & {
              json: Branchrestriction
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } } & {
              json: Branchrestriction
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; repo_slug: string; workspace: string } } & {
              json: Branchrestriction
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/branching-model': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: BranchingModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/branching-model/settings': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: BranchingModelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: BranchingModelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit': {
      $get:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } }
            output: Commit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/approve': {
      $delete:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } }
            output: Participant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/comments': {
      $get: {
        input: { param: { commit: string; repo_slug: string; workspace: string } } & {
          query: { q?: string | undefined; sort?: string | undefined }
        }
        output: PaginatedCommitComments
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              json: CommitComment
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              json: CommitComment
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              json: CommitComment
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id': {
      $delete:
        | {
            input: {
              param: { comment_id: bigint; commit: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { comment_id: bigint; commit: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get: {
        input: {
          param: { comment_id: bigint; commit: string; repo_slug: string; workspace: string }
        }
        output: CommitComment
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              param: { comment_id: bigint; commit: string; repo_slug: string; workspace: string }
            } & { json: CommitComment }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              param: { comment_id: bigint; commit: string; repo_slug: string; workspace: string }
            } & { json: CommitComment }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name': {
      $put: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            commit: string
            app_key: string
            property_name: string
          }
        } & { json: ApplicationProperty }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            commit: string
            app_key: string
            property_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            commit: string
            app_key: string
            property_name: string
          }
        }
        output: ApplicationProperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/pullrequests': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; commit: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: PaginatedPullrequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; commit: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: PaginatedPullrequests
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { workspace: string; repo_slug: string; commit: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/reports': {
      $get: {
        input: { param: { workspace: string; repo_slug: string; commit: string } }
        output: PaginatedReports
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId': {
      $put:
        | {
            input: {
              param: { workspace: string; repo_slug: string; commit: string; reportId: string }
            } & { json: Report }
            output: Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { workspace: string; repo_slug: string; commit: string; reportId: string }
            } & { json: Report }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              param: { workspace: string; repo_slug: string; commit: string; reportId: string }
            }
            output: Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { workspace: string; repo_slug: string; commit: string; reportId: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete: {
        input: { param: { workspace: string; repo_slug: string; commit: string; reportId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations': {
      $get: {
        input: { param: { workspace: string; repo_slug: string; commit: string; reportId: string } }
        output: PaginatedAnnotations
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: { workspace: string; repo_slug: string; commit: string; reportId: string }
        } & { json: ReportAnnotation[] }
        output: ReportAnnotation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                commit: string
                reportId: string
                annotationId: string
              }
            }
            output: ReportAnnotation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                commit: string
                reportId: string
                annotationId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                commit: string
                reportId: string
                annotationId: string
              }
            } & { json: ReportAnnotation }
            output: ReportAnnotation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                commit: string
                reportId: string
                annotationId: string
              }
            } & { json: ReportAnnotation }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            commit: string
            reportId: string
            annotationId: string
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses': {
      $get:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              query: {
                refname?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: PaginatedCommitstatuses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              query: {
                refname?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              query: {
                refname?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build': {
      $post:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              json: Commitstatus
            }
            output: Commitstatus
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              json: Commitstatus
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              json: Commitstatus
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build/:key': {
      $get:
        | {
            input: { param: { commit: string; key: string; repo_slug: string; workspace: string } }
            output: Commitstatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commit: string; key: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commit: string; key: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: { commit: string; key: string; repo_slug: string; workspace: string }
            } & { json: Commitstatus }
            output: Commitstatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { commit: string; key: string; repo_slug: string; workspace: string }
            } & { json: Commitstatus }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { commit: string; key: string; repo_slug: string; workspace: string }
            } & { json: Commitstatus }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commits': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedChangeset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedChangeset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commits/:revision': {
      $get:
        | {
            input: { param: { repo_slug: string; revision: string; workspace: string } }
            output: PaginatedChangeset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; revision: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; revision: string; workspace: string } }
            output: PaginatedChangeset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; revision: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/default-reviewers': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedAccounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username': {
      $delete:
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; target_username: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/deploy-keys': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedDeployKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: DeployKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/deploy-keys/:key_id': {
      $delete:
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: DeployKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: DeployKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/deployments': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PaginatedDeployments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/deployments/:deployment_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; deployment_uuid: string } }
            output: Deployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; deployment_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables': {
      $get: {
        input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
        output: PaginatedDeploymentVariable
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } } & {
              json: DeploymentVariable
            }
            output: DeploymentVariable
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } } & {
              json: DeploymentVariable
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } } & {
              json: DeploymentVariable
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables/:variable_uuid': {
      $put:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                environment_uuid: string
                variable_uuid: string
              }
            } & { json: DeploymentVariable }
            output: DeploymentVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                environment_uuid: string
                variable_uuid: string
              }
            } & { json: DeploymentVariable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                environment_uuid: string
                variable_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                environment_uuid: string
                variable_uuid: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/diff/:spec': {
      $get: {
        input: { param: { repo_slug: string; spec: string; workspace: string } } & {
          query: {
            context?: number | undefined
            path?: string | undefined
            ignore_whitespace?: boolean | undefined
            binary?: boolean | undefined
            renames?: boolean | undefined
            merge?: boolean | undefined
            topic?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/diffstat/:spec': {
      $get: {
        input: { param: { repo_slug: string; spec: string; workspace: string } } & {
          query: {
            ignore_whitespace?: boolean | undefined
            merge?: boolean | undefined
            path?: string | undefined
            renames?: boolean | undefined
            topic?: boolean | undefined
          }
        }
        output: PaginatedDiffstats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/downloads': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/downloads/:filename': {
      $delete:
        | {
            input: { param: { filename: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { filename: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { filename: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { filename: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { filename: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { filename: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/effective-branching-model': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: EffectiveRepoBranchingModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/effective-default-reviewers': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedDefaultReviewerAndType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/environments': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PaginatedEnvironments
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: DeploymentEnvironment
            }
            output: DeploymentEnvironment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: DeploymentEnvironment
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: DeploymentEnvironment
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
            output: DeploymentEnvironment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid/changes': {
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { workspace: string; repo_slug: string; environment_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/file-conflicts/:spec': {
      $get:
        | {
            input: { param: { repo_slug: string; spec: string; workspace: string } }
            output: PaginatedFileConflicts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; spec: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/filehistory/:commit/:path': {
      $get:
        | {
            input: {
              param: { commit: string; path: string; repo_slug: string; workspace: string }
            } & {
              query: {
                renames?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: PaginatedFiles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { commit: string; path: string; repo_slug: string; workspace: string }
            } & {
              query: {
                renames?: string | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/forks': {
      $get: {
        input: { param: { repo_slug: string; workspace: string } } & {
          query: {
            role?: 'admin' | 'contributor' | 'member' | 'owner' | undefined
            q?: string | undefined
            sort?: string | undefined
          }
        }
        output: PaginatedRepositories
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { repo_slug: string; workspace: string } } & { json: Repository }
        output: Repository
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/hooks': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: PaginatedWebhookSubscriptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/hooks/:uid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/merge-base/:revspec': {
      $get:
        | {
            input: { param: { repo_slug: string; revspec: string; workspace: string } }
            output: Commit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; revspec: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; revspec: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; revspec: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/merge-queues': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                target_branch?: string | undefined
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: PaginatedMergeQueues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                target_branch?: string | undefined
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                target_branch?: string | undefined
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                target_branch?: string | undefined
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } }
            output: MergeQueue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: PaginatedMergeQueuePullrequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; repo_slug: string; merge_queue_uuid: string } } & {
              query: { page?: number | undefined; pagelen?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue/:pullrequest_id': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: MergeQueuePullrequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                merge_queue_uuid: string
                pullrequest_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/override-settings': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: RepositoryInheritanceState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/patch/:spec': {
      $get: {
        input: { param: { repo_slug: string; spec: string; workspace: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/permissions-config/groups': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedRepositoryGroupPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug': {
      $delete:
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: RepositoryGroupPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: RepositoryGroupPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/permissions-config/users': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedRepositoryUserPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id': {
      $delete:
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: RepositoryUserPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: RepositoryUserPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } } & {
          query: {
            'creator.uuid'?: string | undefined
            'target.ref_type'?: 'BRANCH' | 'TAG' | 'ANNOTATED_TAG' | undefined
            'target.ref_name'?: string | undefined
            'target.branch'?: string | undefined
            'target.commit.hash'?: string | undefined
            'target.selector.pattern'?: string | undefined
            'target.selector.type'?:
              | 'BRANCH'
              | 'TAG'
              | 'CUSTOM'
              | 'PULLREQUESTS'
              | 'DEFAULT'
              | undefined
            created_on?: string | undefined
            trigger_type?: 'PUSH' | 'MANUAL' | 'SCHEDULED' | 'PARENT_STEP' | undefined
            status?:
              | 'PARSING'
              | 'PENDING'
              | 'PAUSED'
              | 'HALTED'
              | 'BUILDING'
              | 'ERROR'
              | 'PASSED'
              | 'FAILED'
              | 'STOPPED'
              | 'UNKNOWN'
              | undefined
            sort?: 'creator.uuid' | 'created_on' | 'run_creation_date' | undefined
            page?: number | undefined
            pagelen?: number | undefined
          }
        }
        output: PaginatedPipelines
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                merge_defaults?: boolean | undefined
                target_branch_to_create?: string | undefined
              }
            } & { json: Pipeline }
            output: Pipeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                merge_defaults?: boolean | undefined
                target_branch_to_create?: string | undefined
              }
            } & { json: Pipeline }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              query: {
                merge_defaults?: boolean | undefined
                target_branch_to_create?: string | undefined
              }
            } & { json: Pipeline }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines-config/caches': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: PaginatedPipelineCaches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string } } & { query: { name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { query: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid': {
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; cache_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; cache_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid/content-uri': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; cache_uuid: string } }
            output: PipelineCacheContentUri
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; cache_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines-config/runners': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PaginatedPipelineRunners
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: PipelineRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines-config/runners/:runner_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; runner_uuid: string } }
            output: PipelineRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; runner_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string; runner_uuid: string } }
            output: PipelineRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; runner_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; runner_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; runner_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; pipeline_uuid: string } }
            output: Pipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; pipeline_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps': {
      $get: {
        input: { param: { workspace: string; repo_slug: string; pipeline_uuid: string } }
        output: PaginatedPipelineSteps
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: PipelineStep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/log': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: Error
            outputFormat: 'text'
            status: 304
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 307
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: Error
            outputFormat: 'text'
            status: 416
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/logs/:log_uuid': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
                log_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
                log_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 307
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
                log_uuid: string
              }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases/:test_case_uuid/test_case_reasons': {
      $get:
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
                test_case_uuid: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                workspace: string
                repo_slug: string
                pipeline_uuid: string
                step_uuid: string
                test_case_uuid: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/stopPipeline': {
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string; pipeline_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; pipeline_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string; pipeline_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PipelinesConfig
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { workspace: string; repo_slug: string } } & { json: PipelinesConfig }
        output: PipelinesConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/build_number': {
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineBuildNumber
            }
            output: PipelineBuildNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineBuildNumber
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineBuildNumber
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules': {
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineSchedulePostRequestBody
            }
            output: PipelineSchedule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineSchedulePostRequestBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineSchedulePostRequestBody
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineSchedulePostRequestBody
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: PaginatedPipelineSchedules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } }
            output: PipelineSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } } & {
              json: PipelineSchedulePutRequestBody
            }
            output: PipelineSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } } & {
              json: PipelineSchedulePutRequestBody
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid/executions': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } }
            output: PaginatedPipelineScheduleExecutions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: PipelineSshKeyPair
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineSshKeyPair
            }
            output: PipelineSshKeyPair
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & {
              json: PipelineSshKeyPair
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PaginatedPipelineKnownHosts
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineKnownHost }
            output: PipelineKnownHost
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineKnownHost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineKnownHost }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; known_host_uuid: string } }
            output: PipelineKnownHost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; known_host_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string; known_host_uuid: string } } & {
              json: PipelineKnownHost
            }
            output: PipelineKnownHost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; known_host_uuid: string } } & {
              json: PipelineKnownHost
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; known_host_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; known_host_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/variables': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PaginatedPipelineVariables
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineVariable }
            output: PipelineVariable
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid': {
      $get:
        | {
            input: { param: { workspace: string; repo_slug: string; variable_uuid: string } }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; repo_slug: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; repo_slug: string; variable_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; repo_slug: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name': {
      $put: {
        input: {
          param: { workspace: string; repo_slug: string; app_key: string; property_name: string }
        } & { json: ApplicationProperty }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: {
          param: { workspace: string; repo_slug: string; app_key: string; property_name: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: { workspace: string; repo_slug: string; app_key: string; property_name: string }
        }
        output: ApplicationProperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: PaginatedPullrequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Pullrequest }
            output: Pullrequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Pullrequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Pullrequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/activity': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Pullrequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: Pullrequest
            }
            output: Pullrequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: Pullrequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: Pullrequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: Pullrequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/activity': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/approve': {
      $delete:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Participant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: PaginatedPullrequestComments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestComment
            }
            output: PullrequestComment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestComment
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestComment
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id': {
      $delete:
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: PullrequestComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            } & { json: PullrequestComment }
            output: PullrequestComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            } & { json: PullrequestComment }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            } & { json: PullrequestComment }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id/resolve': {
      $delete:
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: CommentResolution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                comment_id: bigint
                pull_request_id: number
                repo_slug: string
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/commits': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/conflicts': {
      $get: {
        input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/decline': {
      $post: {
        input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
        output: Pullrequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diff': {
      $get: {
        input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diffstat': {
      $get: {
        input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge': {
      $post:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { async?: boolean | undefined }
            } & { json: PullrequestMergeParameters }
            output: Pullrequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { async?: boolean | undefined }
            } & { json: PullrequestMergeParameters }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { async?: boolean | undefined }
            } & { json: PullrequestMergeParameters }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { async?: boolean | undefined }
            } & { json: PullrequestMergeParameters }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { async?: boolean | undefined }
            } & { json: PullrequestMergeParameters }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge/task-status/:task_id': {
      $get:
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: string
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: string
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: string
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: string
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/mergeability/checks': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: PullrequestMergeabilityChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/patch': {
      $get: {
        input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/request-changes': {
      $delete:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Participant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/statuses': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedCommitstatuses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks': {
      $get:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: {
                q?: string | undefined
                sort?: string | undefined
                pagelen?: number | undefined
              }
            }
            output: PaginatedTasks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: {
                q?: string | undefined
                sort?: string | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: {
                q?: string | undefined
                sort?: string | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              query: {
                q?: string | undefined
                sort?: string | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestTaskCreate
            }
            output: PullrequestCommentTask
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestTaskCreate
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestTaskCreate
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } } & {
              json: PullrequestTaskCreate
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks/:task_id': {
      $delete:
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            }
            output: PullrequestCommentTask
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            } & { json: PullrequestTaskUpdate }
            output: PullrequestCommentTask
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            } & { json: PullrequestTaskUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            } & { json: PullrequestTaskUpdate }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                pull_request_id: number
                repo_slug: string
                task_id: bigint
                workspace: string
              }
            } & { json: PullrequestTaskUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name': {
      $put: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            pullrequest_id: string
            app_key: string
            property_name: string
          }
        } & { json: ApplicationProperty }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            pullrequest_id: string
            app_key: string
            property_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: {
            workspace: string
            repo_slug: string
            pullrequest_id: string
            app_key: string
            property_name: string
          }
        }
        output: ApplicationProperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/repositories/:workspace/:repo_slug/refs': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedRefs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/refs/branches': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedBranches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Branch
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/refs/branches/:name': {
      $delete:
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Branch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/refs/tags': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedTags
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Tag }
            output: Tag
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Tag }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/refs/tags/:name': {
      $delete:
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/src': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { format?: 'meta' | undefined }
            }
            output: PaginatedTreeentries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { format?: 'meta' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: {
                message?: string | undefined
                author?: string | undefined
                parents?: string | undefined
                files?: string | undefined
                branch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: {
                message?: string | undefined
                author?: string | undefined
                parents?: string | undefined
                files?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: {
                message?: string | undefined
                author?: string | undefined
                parents?: string | undefined
                files?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/src/:commit/:path': {
      $get:
        | {
            input: {
              param: { commit: string; path: string; repo_slug: string; workspace: string }
            } & {
              query: {
                format?: 'meta' | 'rendered' | undefined
                q?: string | undefined
                sort?: string | undefined
                max_depth?: number | undefined
              }
            }
            output: PaginatedTreeentries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { commit: string; path: string; repo_slug: string; workspace: string }
            } & {
              query: {
                format?: 'meta' | 'rendered' | undefined
                q?: string | undefined
                sort?: string | undefined
                max_depth?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/watchers': {
      $get: {
        input: { param: { repo_slug: string; workspace: string } }
        output: PaginatedAccounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snippets': {
      $post:
        | { input: { json: Snippet }; output: Snippet; outputFormat: 'json'; status: 201 }
        | { input: { json: Snippet }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/snippets/:workspace': {
      $get:
        | {
            input: { param: { workspace: string } } & {
              query: { role?: 'owner' | 'contributor' | 'member' | undefined }
            }
            output: PaginatedSnippets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              query: { role?: 'owner' | 'contributor' | 'member' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { workspace: string } } & { json: Snippet }
            output: Snippet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string } } & { json: Snippet }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string } } & { json: Snippet }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id': {
      $delete:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 410
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 410
          }
      $put:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/comments': {
      $get:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: PaginatedSnippetComments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { encoded_id: string; workspace: string } } & { json: SnippetComment }
            output: SnippetComment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { encoded_id: string; workspace: string } } & { json: SnippetComment }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } } & { json: SnippetComment }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/comments/:comment_id': {
      $delete:
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } }
            output: SnippetComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } } & {
              json: SnippetComment
            }
            output: SnippetComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } } & {
              json: SnippetComment
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: bigint; encoded_id: string; workspace: string } } & {
              json: SnippetComment
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/commits': {
      $get:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: PaginatedSnippetCommit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/commits/:revision': {
      $get:
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } }
            output: SnippetCommit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/files/:path': {
      $get:
        | {
            input: { param: { encoded_id: string; path: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { encoded_id: string; path: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; path: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/watch': {
      $delete:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/watchers': {
      $get:
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: PaginatedAccounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/:node_id': {
      $delete:
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Snippet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { encoded_id: string; node_id: string; workspace: string } }
            output: Error
            outputFormat: 'text'
            status: 405
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/:node_id/files/:path': {
      $get:
        | {
            input: {
              param: { encoded_id: string; node_id: string; path: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { encoded_id: string; node_id: string; path: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { encoded_id: string; node_id: string; path: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/:revision/diff': {
      $get:
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } } & {
              query: { path?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } } & {
              query: { path?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } } & {
              query: { path?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/snippets/:workspace/:encoded_id/:revision/patch': {
      $get:
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { encoded_id: string; revision: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teams/:username/pipelines_config/variables': {
      $get: {
        input: { param: { username: string } }
        output: PaginatedPipelineVariables
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { username: string } } & { json: PipelineVariable }
            output: PipelineVariable
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { username: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/teams/:username/pipelines_config/variables/:variable_uuid': {
      $get:
        | {
            input: { param: { username: string; variable_uuid: string } }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { username: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { username: string; variable_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teams/:username/search/code': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: SearchResultPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { username: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/user/emails': { $get: { input: {}; output: Error; outputFormat: 'json'; status: 200 } }
  } & {
    '/user/emails/:email': {
      $get: {
        input: { param: { email: string } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/workspaces': {
      $get:
        | {
            input: { query: { sort?: string | undefined; administrator?: boolean | undefined } }
            output: PaginatedWorkspaceAccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sort?: string | undefined; administrator?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sort?: string | undefined; administrator?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/user/workspaces/:workspace/permission': {
      $get:
        | {
            input: { param: { workspace: string } }
            output: WorkspaceMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/user/workspaces/:workspace/permissions/repositories': {
      $get:
        | {
            input: { param: { workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedRepositoryPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:selected_user': {
      $get:
        | {
            input: { param: { selected_user: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:selected_user/gpg-keys': {
      $get:
        | {
            input: { param: { selected_user: string } }
            output: PaginatedGpgUserKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { selected_user: string } } & { json: GPGAccountKey }
            output: GPGAccountKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { selected_user: string } } & { json: GPGAccountKey }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { selected_user: string } } & { json: GPGAccountKey }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { selected_user: string } } & { json: GPGAccountKey }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:selected_user/gpg-keys/:fingerprint': {
      $delete:
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: GPGAccountKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fingerprint: string; selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:selected_user/pipelines_config/variables': {
      $get: {
        input: { param: { selected_user: string } }
        output: PaginatedPipelineVariables
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { selected_user: string } } & { json: PipelineVariable }
            output: PipelineVariable
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { selected_user: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { selected_user: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/users/:selected_user/pipelines_config/variables/:variable_uuid': {
      $get:
        | {
            input: { param: { selected_user: string; variable_uuid: string } }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { selected_user: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { selected_user: string; variable_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { selected_user: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:selected_user/properties/:app_key/:property_name': {
      $put: {
        input: { param: { selected_user: string; app_key: string; property_name: string } } & {
          json: ApplicationProperty
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { selected_user: string; app_key: string; property_name: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { selected_user: string; app_key: string; property_name: string } }
        output: ApplicationProperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:selected_user/search/code': {
      $get:
        | {
            input: { param: { selected_user: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: SearchResultPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { selected_user: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { selected_user: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:selected_user/ssh-keys': {
      $get:
        | {
            input: { param: { selected_user: string } }
            output: PaginatedSshUserKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { selected_user: string } } & {
              query: { expires_on?: string | undefined }
            } & { json: SshAccountKey }
            output: SshAccountKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { selected_user: string } } & {
              query: { expires_on?: string | undefined }
            } & { json: SshAccountKey }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { selected_user: string } } & {
              query: { expires_on?: string | undefined }
            } & { json: SshAccountKey }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { selected_user: string } } & {
              query: { expires_on?: string | undefined }
            } & { json: SshAccountKey }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:selected_user/ssh-keys/:key_id': {
      $delete:
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: SshAccountKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key_id: string; selected_user: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { key_id: string; selected_user: string } } & { json: SshAccountKey }
            output: SshAccountKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string; selected_user: string } } & { json: SshAccountKey }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key_id: string; selected_user: string } } & { json: SshAccountKey }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key_id: string; selected_user: string } } & { json: SshAccountKey }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace': {
      $get:
        | {
            input: { param: { workspace: string } }
            output: Workspace
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/codesearch': {
      $post:
        | { input: { param: { workspace: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/workspaces/:workspace/hooks': {
      $get:
        | {
            input: { param: { workspace: string } }
            output: PaginatedWebhookSubscriptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { workspace: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/hooks/:uid': {
      $get:
        | {
            input: { param: { workspace: string; uid: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; uid: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; uid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string; uid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/members': {
      $get:
        | {
            input: { param: { workspace: string } }
            output: PaginatedWorkspaceMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/workspaces/:workspace/members/:member': {
      $get:
        | {
            input: { param: { member: string; workspace: string } }
            output: WorkspaceMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { member: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { member: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/permissions': {
      $get:
        | {
            input: { param: { workspace: string } } & { query: { q?: string | undefined } }
            output: PaginatedWorkspaceMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & { query: { q?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/workspaces/:workspace/permissions/repositories': {
      $get:
        | {
            input: { param: { workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedRepositoryPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/workspaces/:workspace/permissions/repositories/:repo_slug': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedRepositoryPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/workspaces/:workspace/pipelines-config/identity/oidc/.well-known/openid-configuration': {
      $get:
        | { input: { param: { workspace: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/pipelines-config/identity/oidc/keys.json': {
      $get:
        | { input: { param: { workspace: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/pipelines-config/runners': {
      $get: {
        input: { param: { workspace: string } }
        output: PaginatedPipelineRunners
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string } }
            output: PipelineRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/workspaces/:workspace/pipelines-config/runners/:runner_uuid': {
      $get:
        | {
            input: { param: { workspace: string; runner_uuid: string } }
            output: PipelineRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; runner_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; runner_uuid: string } }
            output: PipelineRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; runner_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; runner_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; runner_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/pipelines-config/variables': {
      $get: {
        input: { param: { workspace: string } }
        output: PaginatedPipelineVariables
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string } } & { json: PipelineVariable }
            output: PipelineVariable
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string } } & { json: PipelineVariable }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid': {
      $get:
        | {
            input: { param: { workspace: string; variable_uuid: string } }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: PipelineVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; variable_uuid: string } } & {
              json: PipelineVariable
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; variable_uuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace: string; variable_uuid: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects': {
      $get:
        | {
            input: { param: { workspace: string } }
            output: PaginatedProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { workspace: string } } & { json: Project }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string } } & { json: Project }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string } } & { json: Project }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string } } & { json: Project }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key': {
      $delete:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_key: string; workspace: string } } & { json: Project }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } } & { json: Project }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_key: string; workspace: string } } & { json: Project }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_key: string; workspace: string } } & { json: Project }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } } & { json: Project }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/branching-model': {
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: ProjectBranchingModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/branching-model/settings': {
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: BranchingModelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: BranchingModelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/default-reviewers': {
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: PaginatedDefaultReviewerAndType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user': {
      $delete:
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; selected_user: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/deploy-keys': {
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: PaginatedProjectDeployKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: ProjectDeployKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/deploy-keys/:key_id': {
      $delete:
        | {
            input: { param: { key_id: string; project_key: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key_id: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key_id: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { key_id: string; project_key: string; workspace: string } }
            output: ProjectDeployKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key_id: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups': {
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: PaginatedProjectGroupPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups/:group_slug': {
      $delete:
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: ProjectGroupPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            }
            output: ProjectGroupPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_slug: string; project_key: string; workspace: string } } & {
              json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/permissions-config/users': {
      $get:
        | {
            input: { param: { project_key: string; workspace: string } }
            output: PaginatedProjectUserPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/projects/:project_key/permissions-config/users/:selected_user_id': {
      $delete:
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: ProjectUserPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_key: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: { project_key: string; selected_user_id: string; workspace: string }
            } & { json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema }
            output: ProjectUserPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { project_key: string; selected_user_id: string; workspace: string }
            } & { json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { project_key: string; selected_user_id: string; workspace: string }
            } & { json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { project_key: string; selected_user_id: string; workspace: string }
            } & { json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: { project_key: string; selected_user_id: string; workspace: string }
            } & { json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { project_key: string; selected_user_id: string; workspace: string }
            } & { json: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/pullrequests/:selected_user': {
      $get:
        | {
            input: { param: { selected_user: string; workspace: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: PaginatedPullrequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string; workspace: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces/:workspace/search/code': {
      $get:
        | {
            input: { param: { workspace: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: SearchResultPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace: string } } & {
              query: {
                search_query: string
                page?: number | undefined
                pagelen?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/workspaces/:workspace/settings/gpg/public-key': {
      $get:
        | { input: { param: { workspace: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
