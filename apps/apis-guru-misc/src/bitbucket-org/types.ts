type Error = {
  error?:
    | { data?: { [x: string]: unknown } | undefined; detail?: string | undefined; message: string }
    | undefined
  type: string
}
type SubjectTypes = {
  repository?:
    | { events?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  workspace?:
    | { events?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
}
type HookEvent = {
  category?: string | undefined
  description?: string | undefined
  event?:
    | 'pullrequest:changes_request_created'
    | 'pullrequest:rejected'
    | 'issue:updated'
    | 'pullrequest:unapproved'
    | 'pullrequest:comment_deleted'
    | 'repo:commit_status_updated'
    | 'pullrequest:changes_request_removed'
    | 'pullrequest:comment_created'
    | 'repo:transfer'
    | 'pullrequest:fulfilled'
    | 'repo:commit_comment_created'
    | 'issue:comment_created'
    | 'project:updated'
    | 'pullrequest:comment_updated'
    | 'repo:created'
    | 'repo:fork'
    | 'repo:updated'
    | 'repo:push'
    | 'pullrequest:approved'
    | 'repo:deleted'
    | 'repo:commit_status_created'
    | 'repo:imported'
    | 'issue:created'
    | 'pullrequest:updated'
    | 'pullrequest:created'
    | undefined
  label?: string | undefined
}
type PaginatedHookEvents = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: HookEvent[] | undefined
}
type Link = { href?: string | undefined; name?: string | undefined }
type AccountLinks = { avatar?: Link | undefined }
type Account = {
  type: string
  created_on?: string | undefined
  display_name?: string | undefined
  links?: AccountLinks | undefined
  username?: string | undefined
  uuid?: string | undefined
}
type Author = { type: string; raw?: string | undefined; user?: Account | undefined }
type BaseCommit = {
  type: string
  author?: Author | undefined
  date?: string | undefined
  hash?: string | undefined
  message?: string | undefined
  parents?: BaseCommit[] | undefined
  summary?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
}
type Participant = {
  type: string
  approved?: boolean | undefined
  participated_on?: string | undefined
  role?: 'PARTICIPANT' | 'REVIEWER' | undefined
  state?: 'approved' | 'changes_requested' | null | undefined
  user?: Account | undefined
}
type Commit = {
  type: string
  author?: Author | undefined
  date?: string | undefined
  hash?: string | undefined
  message?: string | undefined
  parents?: BaseCommit[] | undefined
  summary?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  participants?: Participant[] | undefined
  repository?: Repository | undefined
}
type Branch = {
  links?:
    | {
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  target?: Commit | undefined
  type: string
  default_merge_strategy?: string | undefined
  merge_strategies?: ('merge_commit' | 'squash' | 'fast_forward')[] | undefined
}
type TeamLinks = {
  avatar?: Link | undefined
  html?: Link | undefined
  members?: Link | undefined
  projects?: Link | undefined
  repositories?: Link | undefined
  self?: Link | undefined
}
type Team = {
  type: string
  created_on?: string | undefined
  display_name?: string | undefined
  links?: TeamLinks | undefined
  username?: string | undefined
  uuid?: string | undefined
}
type Project = {
  type: string
  created_on?: string | undefined
  description?: string | undefined
  has_publicly_visible_repos?: boolean | undefined
  is_private?: boolean | undefined
  key?: string | undefined
  links?:
    | {
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  owner?: Team | undefined
  updated_on?: string | undefined
  uuid?: string | undefined
}
type Repository = {
  type: string
  created_on?: string | undefined
  description?: string | undefined
  fork_policy?: 'allow_forks' | 'no_public_forks' | 'no_forks' | undefined
  full_name?: string | undefined
  has_issues?: boolean | undefined
  has_wiki?: boolean | undefined
  is_private?: boolean | undefined
  language?: string | undefined
  links?:
    | {
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
        clone?: { href?: string | undefined; name?: string | undefined }[] | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        downloads?: { href?: string | undefined; name?: string | undefined } | undefined
        forks?: { href?: string | undefined; name?: string | undefined } | undefined
        hooks?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        pullrequests?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        watchers?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  mainbranch?: Branch | undefined
  name?: string | undefined
  owner?: Account | undefined
  parent?: Repository | undefined
  project?: Project | undefined
  scm?: 'git' | undefined
  size?: number | undefined
  updated_on?: string | undefined
  uuid?: string | undefined
}
type PullrequestEndpoint = {
  branch?:
    | {
        default_merge_strategy?: string | undefined
        merge_strategies?: ('merge_commit' | 'squash' | 'fast_forward')[] | undefined
        name?: string | undefined
      }
    | undefined
  commit?: { hash?: string | undefined } | undefined
  repository?: Repository | undefined
}
type Pullrequest = {
  type: string
  author?: Account | undefined
  close_source_branch?: boolean | undefined
  closed_by?: Account | undefined
  comment_count?: number | undefined
  created_on?: string | undefined
  destination?: PullrequestEndpoint | undefined
  id?: number | undefined
  links?:
    | {
        activity?: { href?: string | undefined; name?: string | undefined } | undefined
        approve?: { href?: string | undefined; name?: string | undefined } | undefined
        comments?: { href?: string | undefined; name?: string | undefined } | undefined
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        decline?: { href?: string | undefined; name?: string | undefined } | undefined
        diff?: { href?: string | undefined; name?: string | undefined } | undefined
        diffstat?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        merge?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  merge_commit?: { hash?: string | undefined } | undefined
  participants?: Participant[] | undefined
  reason?: string | undefined
  rendered?:
    | {
        description?:
          | {
              html?: string | undefined
              markup?: 'markdown' | 'creole' | 'plaintext' | undefined
              raw?: string | undefined
            }
          | undefined
        reason?:
          | {
              html?: string | undefined
              markup?: 'markdown' | 'creole' | 'plaintext' | undefined
              raw?: string | undefined
            }
          | undefined
        title?:
          | {
              html?: string | undefined
              markup?: 'markdown' | 'creole' | 'plaintext' | undefined
              raw?: string | undefined
            }
          | undefined
      }
    | undefined
  reviewers?: Account[] | undefined
  source?: PullrequestEndpoint | undefined
  state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined
  summary?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  task_count?: number | undefined
  title?: string | undefined
  updated_on?: string | undefined
}
type PaginatedPullrequests = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Pullrequest[] | undefined
}
type PaginatedRepositories = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Repository[] | undefined
}
type Workspace = {
  type: string
  created_on?: string | undefined
  is_private?: boolean | undefined
  links?:
    | {
        avatar?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        members?: { href?: string | undefined; name?: string | undefined } | undefined
        owners?: { href?: string | undefined; name?: string | undefined } | undefined
        projects?: { href?: string | undefined; name?: string | undefined } | undefined
        repositories?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        snippets?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  slug?: string | undefined
  updated_on?: string | undefined
  uuid?: string | undefined
}
type Group = {
  type: string
  full_slug?: string | undefined
  links?:
    | {
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  owner?: Account | undefined
  slug?: string | undefined
  workspace?: Workspace | undefined
}
type Branchrestriction = {
  type: string
  groups?: Group[] | undefined
  users?: Account[] | undefined
}
type PaginatedBranchrestrictions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
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
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  production?:
    | {
        enabled?: boolean | undefined
        is_valid?: boolean | undefined
        name?: string | undefined
        use_mainbranch?: boolean | undefined
      }
    | undefined
}
type Comment = {
  type: string
  content?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  created_on?: string | undefined
  deleted?: boolean | undefined
  id?: number | undefined
  inline?: { from?: number | undefined; path: string; to?: number | undefined } | undefined
  links?:
    | {
        code?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  parent?: Comment | undefined
  updated_on?: string | undefined
  user?: Account | undefined
}
type CommitComment = {
  type: string
  content?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  created_on?: string | undefined
  deleted?: boolean | undefined
  id?: number | undefined
  inline?: { from?: number | undefined; path: string; to?: number | undefined } | undefined
  links?:
    | {
        code?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  parent?: Comment | undefined
  updated_on?: string | undefined
  user?: Account | undefined
  commit?: Commit | undefined
}
type PaginatedCommitComments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: CommitComment[] | undefined
}
type ApplicationProperty = { _attributes?: ('public' | 'read_only')[] | undefined }
type ReportData = {
  title?: string | undefined
  type?: 'BOOLEAN' | 'DATE' | 'DURATION' | 'LINK' | 'NUMBER' | 'PERCENTAGE' | 'TEXT' | undefined
  value?: { [x: string]: unknown } | undefined
}
type Report = {
  type: string
  created_on?: string | undefined
  data?: ReportData[] | undefined
  details?: string | undefined
  external_id?: string | undefined
  link?: string | undefined
  logo_url?: string | undefined
  remote_link_enabled?: boolean | undefined
  report_type?: 'SECURITY' | 'COVERAGE' | 'TEST' | 'BUG' | undefined
  reporter?: string | undefined
  result?: 'PASSED' | 'FAILED' | 'PENDING' | undefined
  title?: string | undefined
  updated_on?: string | undefined
  uuid?: string | undefined
}
type PaginatedReports = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Report[] | undefined
}
type ReportAnnotation = {
  type: string
  annotation_type?: 'VULNERABILITY' | 'CODE_SMELL' | 'BUG' | undefined
  created_on?: string | undefined
  details?: string | undefined
  external_id?: string | undefined
  line?: number | undefined
  link?: string | undefined
  path?: string | undefined
  result?: 'PASSED' | 'FAILED' | 'SKIPPED' | 'IGNORED' | undefined
  severity?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | undefined
  summary?: string | undefined
  updated_on?: string | undefined
  uuid?: string | undefined
}
type PaginatedAnnotations = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: ReportAnnotation[] | undefined
}
type Commitstatus = {
  type: string
  created_on?: string | undefined
  description?: string | undefined
  key?: string | undefined
  links?:
    | {
        commit?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  refname?: string | undefined
  state?: 'INPROGRESS' | 'SUCCESSFUL' | 'STOPPED' | 'FAILED' | undefined
  updated_on?: string | undefined
  url?: string | undefined
  uuid?: string | undefined
}
type PaginatedCommitstatuses = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Commitstatus[] | undefined
}
type PaginatedChangeset = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: BaseCommit[] | undefined
}
type Component = {
  type: string
  id?: number | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  name?: string | undefined
}
type PaginatedComponents = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Component[] | undefined
}
type PaginatedAccounts = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Account[] | undefined
}
type DeployKey = {
  type: string
  added_on?: string | undefined
  comment?: string | undefined
  key?: string | undefined
  label?: string | undefined
  last_used?: string | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  owner?: Account | undefined
  repository?: Repository | undefined
}
type PaginatedDeployKeys = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: DeployKey[] | undefined
}
type DeploymentEnvironment = { type: string; name?: string | undefined; uuid?: string | undefined }
type DeploymentRelease = {
  type: string
  commit?: Commit | undefined
  created_on?: string | undefined
  name?: string | undefined
  url?: string | undefined
  uuid?: string | undefined
}
type DeploymentState = { type: string }
type Deployment = {
  type: string
  environment?: DeploymentEnvironment | undefined
  release?: DeploymentRelease | undefined
  state?: DeploymentState | undefined
  uuid?: string | undefined
}
type PaginatedDeployments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Deployment[] | undefined
}
type DeploymentVariable = {
  type: string
  key?: string | undefined
  secured?: boolean | undefined
  uuid?: string | undefined
  value?: string | undefined
}
type PaginatedDeploymentVariable = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: DeploymentVariable[] | undefined
}
type CommitFile = {
  attributes?: 'link' | 'executable' | 'subrepository' | 'binary' | 'lfs' | undefined
  commit?: Commit | undefined
  escaped_path?: string | undefined
  path?: string | undefined
  type: string
}
type Diffstat = {
  lines_added?: number | undefined
  lines_removed?: number | undefined
  new?: CommitFile | undefined
  old?: CommitFile | undefined
  status?: 'added' | 'removed' | 'modified' | 'renamed' | undefined
  type: string
}
type PaginatedDiffstats = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
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
  html?: Link | undefined
  repositories?: Link | undefined
  self?: Link | undefined
}
type User = {
  type: string
  created_on?: string | undefined
  display_name?: string | undefined
  links?: UserLinks | undefined
  username?: string | undefined
  uuid?: string | undefined
  account_id?: string | undefined
  account_status?: string | undefined
  has_2fa_enabled?: boolean | undefined
  is_staff?: boolean | undefined
  nickname?: string | undefined
  website?: string | undefined
}
type DefaultReviewerAndType = {
  reviewer_type?: string | undefined
  type: string
  user?: User | undefined
}
type PaginatedDefaultReviewerAndType = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: DefaultReviewerAndType[] | undefined
}
type PaginatedEnvironments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: DeploymentEnvironment[] | undefined
}
type PaginatedFiles = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: CommitFile[] | undefined
}
type Object = { type: string }
type WebhookSubscription = {
  type: string
  active?: boolean | undefined
  created_at?: string | undefined
  description?: string | undefined
  events?:
    | (
        | 'pullrequest:changes_request_created'
        | 'pullrequest:rejected'
        | 'issue:updated'
        | 'pullrequest:unapproved'
        | 'pullrequest:comment_deleted'
        | 'repo:commit_status_updated'
        | 'pullrequest:changes_request_removed'
        | 'pullrequest:comment_created'
        | 'repo:transfer'
        | 'pullrequest:fulfilled'
        | 'repo:commit_comment_created'
        | 'issue:comment_created'
        | 'project:updated'
        | 'pullrequest:comment_updated'
        | 'repo:created'
        | 'repo:fork'
        | 'repo:updated'
        | 'repo:push'
        | 'pullrequest:approved'
        | 'repo:deleted'
        | 'repo:commit_status_created'
        | 'repo:imported'
        | 'issue:created'
        | 'pullrequest:updated'
        | 'pullrequest:created'
      )[]
    | undefined
  subject?: Object | undefined
  subject_type?: 'repository' | 'workspace' | undefined
  url?: string | undefined
  uuid?: string | undefined
}
type PaginatedWebhookSubscriptions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: WebhookSubscription[] | undefined
}
type Milestone = {
  type: string
  id?: number | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  name?: string | undefined
}
type Version = {
  type: string
  id?: number | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  name?: string | undefined
}
type Issue = {
  type: string
  assignee?: Account | undefined
  component?: Component | undefined
  content?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  created_on?: string | undefined
  edited_on?: string | undefined
  id?: number | undefined
  kind?: 'bug' | 'enhancement' | 'proposal' | 'task' | undefined
  links?:
    | {
        attachments?: { href?: string | undefined; name?: string | undefined } | undefined
        comments?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
        vote?: { href?: string | undefined; name?: string | undefined } | undefined
        watch?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  milestone?: Milestone | undefined
  priority?: 'trivial' | 'minor' | 'major' | 'critical' | 'blocker' | undefined
  reporter?: Account | undefined
  repository?: Repository | undefined
  state?:
    | 'new'
    | 'open'
    | 'resolved'
    | 'on hold'
    | 'invalid'
    | 'duplicate'
    | 'wontfix'
    | 'closed'
    | undefined
  title?: string | undefined
  updated_on?: string | undefined
  version?: Version | undefined
  votes?: number | undefined
}
type PaginatedIssues = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Issue[] | undefined
}
type ExportOptions = {
  include_attachments?: boolean | undefined
  project_key?: string | undefined
  project_name?: string | undefined
  send_email?: boolean | undefined
  type: string
}
type IssueJobStatus = {
  count?: number | undefined
  pct?: number | undefined
  phase?: string | undefined
  status?: 'ACCEPTED' | 'STARTED' | 'RUNNING' | 'FAILURE' | undefined
  total?: number | undefined
  type?: string | undefined
}
type IssueAttachment = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  name?: string | undefined
}
type PaginatedIssueAttachments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: IssueAttachment[] | undefined
}
type IssueChange = {
  changes?:
    | {
        assignee?: { new?: string | undefined; old?: string | undefined } | undefined
        component?: { new?: string | undefined; old?: string | undefined } | undefined
        content?: { new?: string | undefined; old?: string | undefined } | undefined
        kind?: { new?: string | undefined; old?: string | undefined } | undefined
        milestone?: { new?: string | undefined; old?: string | undefined } | undefined
        priority?: { new?: string | undefined; old?: string | undefined } | undefined
        state?: { new?: string | undefined; old?: string | undefined } | undefined
        title?: { new?: string | undefined; old?: string | undefined } | undefined
        version?: { new?: string | undefined; old?: string | undefined } | undefined
      }
    | undefined
  created_on?: string | undefined
  issue?: Issue | undefined
  links?:
    | {
        issue?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  message?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  name?: string | undefined
  type: string
  user?: Account | undefined
}
type PaginatedLogEntries = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: IssueChange[] | undefined
}
type IssueComment = {
  type: string
  content?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  created_on?: string | undefined
  deleted?: boolean | undefined
  id?: number | undefined
  inline?: { from?: number | undefined; path: string; to?: number | undefined } | undefined
  links?:
    | {
        code?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  parent?: Comment | undefined
  updated_on?: string | undefined
  user?: Account | undefined
  issue?: Issue | undefined
}
type PaginatedIssueComments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: IssueComment[] | undefined
}
type PaginatedMilestones = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Milestone[] | undefined
}
type RepositoryInheritanceState = {
  override_settings?: { [x: string]: unknown } | undefined
  type: string
}
type RepositoryGroupPermission = {
  group?: Group | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  permission?: 'read' | 'write' | 'admin' | 'none' | undefined
  repository?: Repository | undefined
  type: string
}
type PaginatedRepositoryGroupPermissions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: RepositoryGroupPermission[] | undefined
}
type RepositoryUserPermission = {
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  permission?: 'read' | 'write' | 'admin' | 'none' | undefined
  repository?: Repository | undefined
  type: string
  user?: User | undefined
}
type PaginatedRepositoryUserPermissions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: RepositoryUserPermission[] | undefined
}
type PipelineCache = {
  type: string
  created_on?: string | undefined
  file_size_bytes?: number | undefined
  key_hash?: string | undefined
  name?: string | undefined
  path?: string | undefined
  pipeline_uuid?: string | undefined
  step_uuid?: string | undefined
  uuid?: string | undefined
}
type PaginatedPipelineCaches = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PipelineCache[] | undefined
}
type PipelineCacheContentUri = { uri?: string | undefined }
type PipelineState = { type: string }
type PipelineTarget = { type: string }
type PipelineTrigger = { type: string }
type Pipeline = {
  type: string
  build_number?: number | undefined
  build_seconds_used?: number | undefined
  completed_on?: string | undefined
  created_on?: string | undefined
  creator?: Account | undefined
  repository?: Repository | undefined
  state?: PipelineState | undefined
  target?: PipelineTarget | undefined
  trigger?: PipelineTrigger | undefined
  uuid?: string | undefined
}
type PaginatedPipelines = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Pipeline[] | undefined
}
type PipelineImage = {
  email?: string | undefined
  name?: string | undefined
  password?: string | undefined
  username?: string | undefined
}
type PipelineCommand = { command?: string | undefined; name?: string | undefined }
type PipelineStepState = { type: string }
type PipelineStep = {
  type: string
  completed_on?: string | undefined
  image?: PipelineImage | undefined
  script_commands?: PipelineCommand[] | undefined
  setup_commands?: PipelineCommand[] | undefined
  started_on?: string | undefined
  state?: PipelineStepState | undefined
  uuid?: string | undefined
}
type PaginatedPipelineSteps = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PipelineStep[] | undefined
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
type PipelineSchedule = {
  type: string
  created_on?: string | undefined
  cron_pattern?: string | undefined
  enabled?: boolean | undefined
  selector?: PipelineSelector | undefined
  target?: PipelineTarget | undefined
  updated_on?: string | undefined
  uuid?: string | undefined
}
type PaginatedPipelineSchedules = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PipelineSchedule[] | undefined
}
type PipelineScheduleExecution = { type: string }
type PaginatedPipelineScheduleExecutions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PipelineScheduleExecution[] | undefined
}
type PipelineSshKeyPair = {
  type: string
  private_key?: string | undefined
  public_key?: string | undefined
}
type PipelineSshPublicKey = {
  type: string
  key?: string | undefined
  key_type?: string | undefined
  md5_fingerprint?: string | undefined
  sha256_fingerprint?: string | undefined
}
type PipelineKnownHost = {
  type: string
  hostname?: string | undefined
  public_key?: PipelineSshPublicKey | undefined
  uuid?: string | undefined
}
type PaginatedPipelineKnownHosts = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PipelineKnownHost[] | undefined
}
type PipelineVariable = {
  type: string
  key?: string | undefined
  secured?: boolean | undefined
  uuid?: string | undefined
  value?: string | undefined
}
type PaginatedPipelineVariables = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PipelineVariable[] | undefined
}
type PullrequestComment = {
  type: string
  content?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  created_on?: string | undefined
  deleted?: boolean | undefined
  id?: number | undefined
  inline?: { from?: number | undefined; path: string; to?: number | undefined } | undefined
  links?:
    | {
        code?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  parent?: Comment | undefined
  updated_on?: string | undefined
  user?: Account | undefined
  pullrequest?: Pullrequest | undefined
}
type PaginatedPullrequestComments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: PullrequestComment[] | undefined
}
type PullrequestMergeParameters = {
  close_source_branch?: boolean | undefined
  merge_strategy?: 'merge_commit' | 'squash' | 'fast_forward' | undefined
  message?: string | undefined
  type: string
}
type Ref = {
  links?:
    | {
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  target?: Commit | undefined
  type: string
}
type PaginatedRefs = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Ref[] | undefined
}
type PaginatedBranches = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Branch[] | undefined
}
type Tag = {
  links?:
    | {
        commits?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  target?: Commit | undefined
  type: string
  date?: string | undefined
  message?: string | undefined
  tagger?: Author | undefined
}
type PaginatedTags = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Tag[] | undefined
}
type Treeentry = { commit?: Commit | undefined; path?: string | undefined; type: string }
type PaginatedTreeentries = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Treeentry[] | undefined
}
type PaginatedVersions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Version[] | undefined
}
type Snippet = {
  type: string
  created_on?: string | undefined
  creator?: Account | undefined
  id?: number | undefined
  is_private?: boolean | undefined
  owner?: Account | undefined
  scm?: 'git' | undefined
  title?: string | undefined
  updated_on?: string | undefined
}
type PaginatedSnippets = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Snippet[] | undefined
}
type SnippetComment = {
  type: string
  links?:
    | {
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  snippet?: Snippet | undefined
}
type PaginatedSnippetComments = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: SnippetComment[] | undefined
}
type SnippetCommit = {
  type: string
  author?: Author | undefined
  date?: string | undefined
  hash?: string | undefined
  message?: string | undefined
  parents?: BaseCommit[] | undefined
  summary?:
    | {
        html?: string | undefined
        markup?: 'markdown' | 'creole' | 'plaintext' | undefined
        raw?: string | undefined
      }
    | undefined
  links?:
    | {
        diff?: { href?: string | undefined; name?: string | undefined } | undefined
        html?: { href?: string | undefined; name?: string | undefined } | undefined
        self?: { href?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  snippet?: Snippet | undefined
}
type PaginatedSnippetCommit = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: SnippetCommit[] | undefined
}
type SearchSegment = { match?: boolean | undefined; text?: string | undefined }
type SearchLine = { line?: number | undefined; segments?: SearchSegment[] | undefined }
type SearchContentMatch = { lines?: SearchLine[] | undefined }
type SearchCodeSearchResult = {
  content_match_count?: bigint | undefined
  content_matches?: SearchContentMatch[] | undefined
  file?: CommitFile | undefined
  path_matches?: SearchSegment[] | undefined
  type?: string | undefined
}
type SearchResultPage = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  query_substituted?: boolean | undefined
  size?: bigint | undefined
  values?: SearchCodeSearchResult[] | undefined
}
type RepositoryPermission = {
  permission?: 'read' | 'write' | 'admin' | 'none' | undefined
  repository?: Repository | undefined
  type: string
  user?: User | undefined
}
type PaginatedRepositoryPermissions = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: RepositoryPermission[] | undefined
}
type WorkspaceMembership = {
  type: string
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  user?: Account | undefined
  workspace?: Workspace | undefined
}
type PaginatedWorkspaceMemberships = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: WorkspaceMembership[] | undefined
}
type SshAccountKey = {
  type: string
  comment?: string | undefined
  created_on?: string | undefined
  key?: string | undefined
  label?: string | undefined
  last_used?: string | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  uuid?: string | undefined
  owner?: Account | undefined
}
type PaginatedSshUserKeys = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: SshAccountKey[] | undefined
}
type PaginatedWorkspaces = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: Workspace[] | undefined
}
type PaginatedProjects = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
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
  added_on?: string | undefined
  comment?: string | undefined
  created_by?: Account | undefined
  key?: string | undefined
  label?: string | undefined
  last_used?: string | undefined
  links?:
    | { self?: { href?: string | undefined; name?: string | undefined } | undefined }
    | undefined
  project?: Project | undefined
}
type PaginatedProjectDeployKeys = {
  next?: string | undefined
  page?: number | undefined
  pagelen?: number | undefined
  previous?: string | undefined
  size?: number | undefined
  values?: ProjectDeployKey[] | undefined
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
    '/addon/linkers': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/addon/linkers/:linker_key': {
      $get:
        | {
            input: { param: { linker_key: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/addon/linkers/:linker_key/values': {
      $delete:
        | {
            input: { param: { linker_key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { linker_key: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { linker_key: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { linker_key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/addon/linkers/:linker_key/values/:value_id': {
      $delete:
        | {
            input: { param: { linker_key: string; value_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { linker_key: string; value_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string; value_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { linker_key: string; value_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { linker_key: string; value_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linker_key: string; value_id: number } }
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
    '/pullrequests/:selected_user': {
      $get:
        | {
            input: { param: { selected_user: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: PaginatedPullrequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { selected_user: string } } & {
              query: { state?: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            role?: 'admin' | 'contributor' | 'member' | 'owner' | undefined
            q?: string | undefined
            sort?: string | undefined
          }
        }
        output: PaginatedRepositories
        outputFormat: 'json'
        status: 200
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
              param: { comment_id: number; commit: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { comment_id: number; commit: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get: {
        input: {
          param: { comment_id: number; commit: string; repo_slug: string; workspace: string }
        }
        output: CommitComment
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              param: { comment_id: number; commit: string; repo_slug: string; workspace: string }
            } & { json: CommitComment }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              param: { comment_id: number; commit: string; repo_slug: string; workspace: string }
            } & { json: CommitComment }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name': {
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
      $delete: {
        input: { param: { workspace: string; repo_slug: string; commit: string; reportId: string } }
        output: {}
        outputFormat: string
        status: 204
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses': {
      $get:
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedCommitstatuses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commit: string; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
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
    '/repositories/:workspace/:repo_slug/components': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedComponents
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
    '/repositories/:workspace/:repo_slug/components/:component_id': {
      $get:
        | {
            input: { param: { component_id: number; repo_slug: string; workspace: string } }
            output: Component
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { component_id: number; repo_slug: string; workspace: string } }
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
    '/repositories/:workspace/:repo_slug/deployments/': {
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/diff/:spec': {
      $get:
        | {
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
        | {
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
            output: Error
            outputFormat: 'json'
            status: 555
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/diffstat/:spec': {
      $get:
        | {
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
        | {
            input: { param: { repo_slug: string; spec: string; workspace: string } } & {
              query: {
                ignore_whitespace?: boolean | undefined
                merge?: boolean | undefined
                path?: string | undefined
                renames?: boolean | undefined
                topic?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 555
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
    '/repositories/:workspace/:repo_slug/environments/': {
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid/changes/': {
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
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedWebhookSubscriptions
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
            input: { param: { repo_slug: string; workspace: string } }
            output: WebhookSubscription
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
    '/repositories/:workspace/:repo_slug/hooks/:uid': {
      $delete:
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedIssues
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
            input: { param: { repo_slug: string; workspace: string } } & { json: Issue }
            output: Issue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Issue }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Issue }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: Issue }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/export': {
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: ExportOptions }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: ExportOptions }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: ExportOptions }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo_slug: string; workspace: string } } & { json: ExportOptions }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/export/:repo_name-issues-:task_id.zip': {
      $get:
        | {
            input: {
              param: { repo_name: string; repo_slug: string; task_id: string; workspace: string }
            }
            output: IssueJobStatus
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              param: { repo_name: string; repo_slug: string; task_id: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { repo_name: string; repo_slug: string; task_id: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { repo_name: string; repo_slug: string; task_id: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/import': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: IssueJobStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: IssueJobStatus
            outputFormat: 'json'
            status: 202
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
      $post:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: IssueJobStatus
            outputFormat: 'json'
            status: 202
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
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id': {
      $delete:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
      $put:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/attachments': {
      $get:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: PaginatedIssueAttachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/attachments/:path': {
      $delete:
        | {
            input: {
              param: { issue_id: string; path: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { issue_id: string; path: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { issue_id: string; path: string; repo_slug: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: {
              param: { issue_id: string; path: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              param: { issue_id: string; path: string; repo_slug: string; workspace: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { issue_id: string; path: string; repo_slug: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/changes': {
      $get:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: PaginatedLogEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              query: { q?: string | undefined; sort?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              json: IssueChange
            }
            output: IssueChange
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              json: IssueChange
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              json: IssueChange
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              json: IssueChange
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/changes/:change_id': {
      $get:
        | {
            input: {
              param: { change_id: string; issue_id: string; repo_slug: string; workspace: string }
            }
            output: IssueChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { change_id: string; issue_id: string; repo_slug: string; workspace: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments': {
      $get: {
        input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
          query: { q?: string | undefined }
        }
        output: PaginatedIssueComments
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              json: IssueComment
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } } & {
              json: IssueComment
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments/:comment_id': {
      $delete: {
        input: {
          param: { comment_id: number; issue_id: string; repo_slug: string; workspace: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: { comment_id: number; issue_id: string; repo_slug: string; workspace: string }
        }
        output: IssueComment
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              param: { comment_id: number; issue_id: string; repo_slug: string; workspace: string }
            } & { json: IssueComment }
            output: IssueComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { comment_id: number; issue_id: string; repo_slug: string; workspace: string }
            } & { json: IssueComment }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/vote': {
      $delete: {
        input: { param: { issue_id: string; repo_slug: string; workspace: string } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/issues/:issue_id/watch': {
      $delete:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string; repo_slug: string; workspace: string } }
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
    '/repositories/:workspace/:repo_slug/milestones': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedMilestones
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
    '/repositories/:workspace/:repo_slug/milestones/:milestone_id': {
      $get:
        | {
            input: { param: { milestone_id: number; repo_slug: string; workspace: string } }
            output: Milestone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { milestone_id: number; repo_slug: string; workspace: string } }
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
      $get:
        | {
            input: { param: { repo_slug: string; spec: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repo_slug: string; spec: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 555
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
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: RepositoryGroupPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_slug: string; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
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
            status: 402
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
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: RepositoryUserPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; selected_user_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 400
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
            status: 402
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines-config/caches': {
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
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/': {
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
    '/repositories/:workspace/:repo_slug/pipelines/': {
      $get: {
        input: { param: { workspace: string; repo_slug: string } }
        output: PaginatedPipelines
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: Pipeline }
            output: Pipeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: Pipeline }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: Pipeline }
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
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/': {
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
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/': {
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
      $post:
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineSchedule }
            output: PipelineSchedule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineSchedule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineSchedule }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace: string; repo_slug: string } } & { json: PipelineSchedule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid': {
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
              json: PipelineSchedule
            }
            output: PipelineSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; repo_slug: string; schedule_uuid: string } } & {
              json: PipelineSchedule
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid/executions/': {
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/': {
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/': {
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
    }
  } & {
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name': {
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
      $put: {
        input: {
          param: { workspace: string; repo_slug: string; app_key: string; property_name: string }
        } & { json: ApplicationProperty }
        output: {}
        outputFormat: string
        status: 204
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
                comment_id: number
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
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/decline': {
      $post:
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Pullrequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pull_request_id: number; repo_slug: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 555
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
            status: 555
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
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name': {
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
            status: 555
          }
    }
  } & {
    '/repositories/:workspace/:repo_slug/versions': {
      $get:
        | {
            input: { param: { repo_slug: string; workspace: string } }
            output: PaginatedVersions
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
    '/repositories/:workspace/:repo_slug/versions/:version_id': {
      $get:
        | {
            input: { param: { repo_slug: string; version_id: number; workspace: string } }
            output: Version
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo_slug: string; version_id: number; workspace: string } }
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
      $get:
        | {
            input: { query: { role?: 'owner' | 'contributor' | 'member' | undefined } }
            output: PaginatedSnippets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { role?: 'owner' | 'contributor' | 'member' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
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
            input: { param: { comment_id: number; encoded_id: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } }
            output: SnippetComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } } & {
              json: SnippetComment
            }
            output: SnippetComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } } & {
              json: SnippetComment
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: number; encoded_id: string; workspace: string } } & {
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
    '/teams/:username/pipelines_config/variables/': {
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
    '/user/permissions/repositories': {
      $get: {
        input: { query: { q?: string | undefined; sort?: string | undefined } }
        output: PaginatedRepositoryPermissions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/permissions/workspaces': {
      $get:
        | {
            input: { query: { q?: string | undefined; sort?: string | undefined } }
            output: PaginatedWorkspaceMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; sort?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
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
    '/users/:selected_user/pipelines_config/variables/': {
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
    }
  } & {
    '/users/:selected_user/properties/:app_key/:property_name': {
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
      $put: {
        input: { param: { selected_user: string; app_key: string; property_name: string } } & {
          json: ApplicationProperty
        }
        output: {}
        outputFormat: string
        status: 204
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
            input: { param: { selected_user: string } } & { json: SshAccountKey }
            output: SshAccountKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { selected_user: string } } & { json: SshAccountKey }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { selected_user: string } } & { json: SshAccountKey }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { selected_user: string } } & { json: SshAccountKey }
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
    '/workspaces': {
      $get:
        | {
            input: {
              query: {
                role?: 'owner' | 'collaborator' | 'member' | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: PaginatedWorkspaces
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                role?: 'owner' | 'collaborator' | 'member' | undefined
                q?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
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
      $delete:
        | {
            input: { param: { uid: string; workspace: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { uid: string; workspace: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { uid: string; workspace: string } }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string; workspace: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; workspace: string } }
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
  },
  '/'
>
export default routes
