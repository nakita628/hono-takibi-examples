type ActionWorkflowStep = {
  completed_at?: string | undefined
  conclusion?: string | undefined
  name?: string | undefined
  number?: bigint | undefined
  started_at?: string | undefined
  status?: string | undefined
}
type ActionWorkflowJob = {
  completed_at?: string | undefined
  conclusion?: string | undefined
  created_at?: string | undefined
  head_branch?: string | undefined
  head_sha?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  labels?: string[] | undefined
  name?: string | undefined
  run_attempt?: bigint | undefined
  run_id?: bigint | undefined
  run_url?: string | undefined
  runner_id?: bigint | undefined
  runner_name?: string | undefined
  started_at?: string | undefined
  status?: string | undefined
  steps?: ActionWorkflowStep[] | undefined
  url?: string | undefined
}
type ActionWorkflowJobsResponse = {
  jobs?: ActionWorkflowJob[] | undefined
  total_count?: bigint | undefined
}
type ActionRunnerLabel = {
  id?: bigint | undefined
  name?: string | undefined
  type?: string | undefined
}
type ActionRunner = {
  busy?: boolean | undefined
  disabled?: boolean | undefined
  ephemeral?: boolean | undefined
  id?: bigint | undefined
  labels?: ActionRunnerLabel[] | undefined
  name?: string | undefined
  status?: string | undefined
}
type ActionRunnersResponse = {
  runners?: ActionRunner[] | undefined
  total_count?: bigint | undefined
}
type EditActionRunnerOption = { disabled: boolean }
type User = {
  active?: boolean | undefined
  avatar_url?: string | undefined
  created?: string | undefined
  description?: string | undefined
  email?: string | undefined
  followers_count?: bigint | undefined
  following_count?: bigint | undefined
  full_name?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  is_admin?: boolean | undefined
  language?: string | undefined
  last_login?: string | undefined
  location?: string | undefined
  login?: string | undefined
  login_name?: string | undefined
  prohibit_login?: boolean | undefined
  restricted?: boolean | undefined
  source_id?: bigint | undefined
  starred_repos_count?: bigint | undefined
  type?: {} | undefined
  visibility?: {} | undefined
  website?: string | undefined
}
type ExternalTracker = {
  external_tracker_format?: string | undefined
  external_tracker_regexp_pattern?: string | undefined
  external_tracker_style?: string | undefined
  external_tracker_url?: string | undefined
}
type ExternalWiki = { external_wiki_url?: string | undefined }
type InternalTracker = {
  allow_only_contributors_to_track_time?: boolean | undefined
  creation_restriction?: string | undefined
  enable_issue_dependencies?: boolean | undefined
  enable_time_tracker?: boolean | undefined
}
type Permission = {
  admin?: boolean | undefined
  pull?: boolean | undefined
  push?: boolean | undefined
}
type Organization = {
  avatar_url?: string | undefined
  description?: string | undefined
  email?: string | undefined
  full_name?: string | undefined
  id?: bigint | undefined
  location?: string | undefined
  name?: string | undefined
  repo_admin_change_team_access?: boolean | undefined
  username?: string | undefined
  visibility?: {} | undefined
  website?: string | undefined
}
type AccessLevelName = 'none' | 'read' | 'write' | 'admin' | 'owner'
type Team = {
  can_create_org_repo?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  includes_all_repositories?: boolean | undefined
  name?: string | undefined
  organization?: Organization | undefined
  permission?: AccessLevelName | undefined
  units?: string[] | undefined
  units_map?: { [x: string]: string } | undefined
  visibility?: {} | undefined
}
type RepoTransfer = {
  doer?: User | undefined
  recipient?: User | undefined
  teams?: Team[] | undefined
}
type Repository = {
  allow_fast_forward_only_merge?: boolean | undefined
  allow_manual_merge?: boolean | undefined
  allow_merge_commits?: boolean | undefined
  allow_merge_update?: boolean | undefined
  allow_rebase?: boolean | undefined
  allow_rebase_explicit?: boolean | undefined
  allow_rebase_update?: boolean | undefined
  allow_squash_merge?: boolean | undefined
  archived?: boolean | undefined
  archived_at?: string | undefined
  autodetect_manual_merge?: boolean | undefined
  avatar_url?: string | undefined
  branch_count?: bigint | undefined
  clone_url?: string | undefined
  created_at?: string | undefined
  default_allow_maintainer_edit?: boolean | undefined
  default_branch?: string | undefined
  default_delete_branch_after_merge?: boolean | undefined
  default_merge_style?: string | undefined
  default_target_branch?: string | undefined
  default_update_style?: string | undefined
  description?: string | undefined
  empty?: boolean | undefined
  external_tracker?: ExternalTracker | undefined
  external_wiki?: ExternalWiki | undefined
  fork?: boolean | undefined
  forks_count?: bigint | undefined
  full_name?: string | undefined
  has_actions?: boolean | undefined
  has_code?: boolean | undefined
  has_issues?: boolean | undefined
  has_packages?: boolean | undefined
  has_projects?: boolean | undefined
  has_pull_requests?: boolean | undefined
  has_releases?: boolean | undefined
  has_wiki?: boolean | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  ignore_whitespace_conflicts?: boolean | undefined
  internal?: boolean | undefined
  internal_tracker?: InternalTracker | undefined
  issues_creation_restriction?: string | undefined
  language?: string | undefined
  languages_url?: string | undefined
  licenses?: string[] | undefined
  link?: string | undefined
  mirror?: boolean | undefined
  mirror_interval?: string | undefined
  mirror_last_sync_at?: string | undefined
  mirror_updated?: string | undefined
  name?: string | undefined
  object_format_name?: {} | undefined
  open_issues_count?: bigint | undefined
  open_pr_counter?: bigint | undefined
  original_url?: string | undefined
  owner?: User | undefined
  parent?: Repository | undefined
  permissions?: Permission | undefined
  private?: boolean | undefined
  projects_mode?: string | undefined
  pull_requests_creation_restriction?: string | undefined
  release_counter?: bigint | undefined
  repo_transfer?: RepoTransfer | undefined
  size?: bigint | undefined
  squash_merge_commit_message?: string | undefined
  ssh_url?: string | undefined
  stars_count?: bigint | undefined
  template?: boolean | undefined
  topics?: string[] | undefined
  updated_at?: string | undefined
  url?: string | undefined
  watchers_count?: bigint | undefined
  website?: string | undefined
}
type PullRequestMinimalHeadRepo = {
  id?: bigint | undefined
  name?: string | undefined
  url?: string | undefined
}
type PullRequestMinimalHead = {
  ref?: string | undefined
  repo?: PullRequestMinimalHeadRepo | undefined
  sha?: string | undefined
}
type PullRequestMinimal = {
  base?: PullRequestMinimalHead | undefined
  head?: PullRequestMinimalHead | undefined
  id?: bigint | undefined
  number?: bigint | undefined
  url?: string | undefined
}
type ActionWorkflowRun = {
  actor?: User | undefined
  artifacts_url?: string | undefined
  cancel_url?: string | undefined
  completed_at?: string | undefined
  conclusion?: string | undefined
  created_at?: string | undefined
  display_title?: string | undefined
  event?: string | undefined
  head_branch?: string | undefined
  head_repository?: Repository | undefined
  head_sha?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  jobs_url?: string | undefined
  logs_url?: string | undefined
  path?: string | undefined
  previous_attempt_url?: string | undefined
  pull_requests?: PullRequestMinimal[] | undefined
  repository?: Repository | undefined
  repository_id?: bigint | undefined
  rerun_url?: string | undefined
  run_attempt?: bigint | undefined
  run_number?: bigint | undefined
  started_at?: string | undefined
  status?: string | undefined
  trigger_actor?: User | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type ActionWorkflowRunsResponse = {
  total_count?: bigint | undefined
  workflow_runs?: ActionWorkflowRun[] | undefined
}
type Cron = {
  exec_times?: bigint | undefined
  name?: string | undefined
  next?: string | undefined
  prev?: string | undefined
  schedule?: string | undefined
}
type Email = {
  email?: string | undefined
  primary?: boolean | undefined
  user_id?: bigint | undefined
  username?: string | undefined
  verified?: boolean | undefined
}
type Hook = {
  active?: boolean | undefined
  authorization_header?: string | undefined
  branch_filter?: string | undefined
  config?: { [x: string]: string } | undefined
  created_at?: string | undefined
  events?: string[] | undefined
  id?: bigint | undefined
  name?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type CreateHookOptionConfig = { [x: string]: string }
type CreateHookOption = {
  active?: boolean | undefined
  authorization_header?: string | undefined
  branch_filter?: string | undefined
  config: CreateHookOptionConfig
  events?: string[] | undefined
  name?: string | undefined
  type:
    | 'dingtalk'
    | 'discord'
    | 'gitea'
    | 'gogs'
    | 'msteams'
    | 'slack'
    | 'telegram'
    | 'feishu'
    | 'wechatwork'
    | 'packagist'
}
type EditHookOption = {
  active?: boolean | undefined
  authorization_header?: string | undefined
  branch_filter?: string | undefined
  config?: { [x: string]: string } | undefined
  events?: string[] | undefined
  name?: string | undefined
}
type Package = {
  created_at?: string | undefined
  creator?: User | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  owner?: User | undefined
  repository?: Repository | undefined
  type?: string | undefined
  version?: string | undefined
}
type CreateUserOption = {
  created_at?: string | undefined
  email: string
  full_name?: string | undefined
  login_name?: string | undefined
  must_change_password?: boolean | undefined
  password?: string | undefined
  restricted?: boolean | undefined
  send_notify?: boolean | undefined
  source_id?: bigint | undefined
  username: string
  visibility?: {} | undefined
}
type EditUserOption = {
  active?: boolean | undefined
  admin?: boolean | undefined
  allow_create_organization?: boolean | undefined
  allow_git_hook?: boolean | undefined
  allow_import_local?: boolean | undefined
  description?: string | undefined
  email?: string | undefined
  full_name?: string | undefined
  location?: string | undefined
  login_name?: string | undefined
  max_repo_creation?: bigint | undefined
  must_change_password?: boolean | undefined
  password?: string | undefined
  prohibit_login?: boolean | undefined
  restricted?: boolean | undefined
  source_id: bigint
  type?: {} | undefined
  visibility?: {} | undefined
  website?: string | undefined
}
type UserBadgeOption = { badge_slugs?: string[] | undefined }
type Badge = {
  description?: string | undefined
  id?: bigint | undefined
  image_url?: string | undefined
  slug?: string | undefined
}
type CreateKeyOption = { key: string; read_only?: boolean | undefined; title: string }
type PublicKey = {
  created_at?: string | undefined
  fingerprint?: string | undefined
  id?: bigint | undefined
  key?: string | undefined
  key_type?: string | undefined
  last_used_at?: string | undefined
  read_only?: boolean | undefined
  title?: string | undefined
  url?: string | undefined
  user?: User | undefined
}
type CreateOrgOption = {
  description?: string | undefined
  email?: string | undefined
  full_name?: string | undefined
  location?: string | undefined
  repo_admin_change_team_access?: boolean | undefined
  username: string
  visibility?: {} | undefined
  website?: string | undefined
}
type RenameUserOption = { new_username: string }
type CreateRepoOption = {
  auto_init?: boolean | undefined
  default_branch?: string | undefined
  description?: string | undefined
  gitignores?: string | undefined
  issue_labels?: string | undefined
  license?: string | undefined
  name: string
  object_format_name?: {} | undefined
  private?: boolean | undefined
  readme?: string | undefined
  template?: boolean | undefined
  trust_model?: 'default' | 'collaborator' | 'committer' | 'collaboratorcommitter' | undefined
}
type GitignoreTemplateInfo = { name?: string | undefined; source?: string | undefined }
type LabelTemplate = {
  color?: string | undefined
  description?: string | undefined
  exclusive?: boolean | undefined
  name?: string | undefined
}
type LicensesTemplateListEntry = {
  key?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type LicenseTemplateInfo = {
  body?: string | undefined
  implementation?: string | undefined
  key?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type MarkdownOption = {
  Context?: string | undefined
  Mode?: string | undefined
  Text?: string | undefined
  Wiki?: boolean | undefined
}
type MarkupOption = {
  Context?: string | undefined
  FilePath?: string | undefined
  Mode?: string | undefined
  Text?: string | undefined
  Wiki?: boolean | undefined
}
type NotificationSubject = {
  html_url?: string | undefined
  latest_comment_html_url?: string | undefined
  latest_comment_url?: string | undefined
  state?: 'open' | 'closed' | 'merged' | undefined
  title?: string | undefined
  type?: 'Issue' | 'Pull' | 'Commit' | 'Repository' | undefined
  url?: string | undefined
}
type NotificationThread = {
  id?: bigint | undefined
  pinned?: boolean | undefined
  repository?: Repository | undefined
  subject?: NotificationSubject | undefined
  unread?: boolean | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type NotificationCount = { new?: bigint | undefined }
type EditOrgOption = {
  description?: string | undefined
  email?: string | undefined
  full_name?: string | undefined
  location?: string | undefined
  repo_admin_change_team_access?: boolean | undefined
  visibility?: {} | undefined
  website?: string | undefined
}
type Secret = {
  created_at?: string | undefined
  description?: string | undefined
  name?: string | undefined
}
type CreateOrUpdateSecretOption = { data: string; description?: string | undefined }
type ActionVariable = {
  data?: string | undefined
  description?: string | undefined
  name?: string | undefined
  owner_id?: bigint | undefined
  repo_id?: bigint | undefined
}
type CreateVariableOption = { description?: string | undefined; value: string }
type UpdateVariableOption = {
  description?: string | undefined
  name?: string | undefined
  value: string
}
type Attachment = {
  browser_download_url?: string | undefined
  created_at?: string | undefined
  digest?: string | undefined
  download_count?: bigint | undefined
  id?: bigint | undefined
  name?: string | undefined
  size?: bigint | undefined
  uuid?: string | undefined
}
type Comment = {
  assets?: Attachment[] | undefined
  body?: string | undefined
  created_at?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  issue_url?: string | undefined
  pull_request_url?: string | undefined
  updated_at?: string | undefined
  user?: User | undefined
}
type Activity = {
  act_user?: User | undefined
  act_user_id?: bigint | undefined
  comment?: Comment | undefined
  comment_id?: bigint | undefined
  content?: string | undefined
  created?: string | undefined
  id?: bigint | undefined
  is_private?: boolean | undefined
  op_type?:
    | 'create_repo'
    | 'rename_repo'
    | 'star_repo'
    | 'watch_repo'
    | 'commit_repo'
    | 'create_issue'
    | 'create_pull_request'
    | 'transfer_repo'
    | 'push_tag'
    | 'comment_issue'
    | 'merge_pull_request'
    | 'close_issue'
    | 'reopen_issue'
    | 'close_pull_request'
    | 'reopen_pull_request'
    | 'delete_tag'
    | 'delete_branch'
    | 'mirror_sync_push'
    | 'mirror_sync_create'
    | 'mirror_sync_delete'
    | 'approve_pull_request'
    | 'reject_pull_request'
    | 'comment_pull'
    | 'publish_release'
    | 'pull_review_dismissed'
    | 'pull_request_ready_for_review'
    | 'auto_merge_pull_request'
    | undefined
  ref_name?: string | undefined
  repo?: Repository | undefined
  repo_id?: bigint | undefined
  user_id?: bigint | undefined
}
type UpdateUserAvatarOption = { image?: string | undefined }
type Label = {
  color?: string | undefined
  description?: string | undefined
  exclusive?: boolean | undefined
  id?: bigint | undefined
  is_archived?: boolean | undefined
  name?: string | undefined
  url?: string | undefined
}
type CreateLabelOption = {
  color: string
  description?: string | undefined
  exclusive?: boolean | undefined
  is_archived?: boolean | undefined
  name: string
}
type EditLabelOption = {
  color?: string | undefined
  description?: string | undefined
  exclusive?: boolean | undefined
  is_archived?: boolean | undefined
  name?: string | undefined
}
type StateType = 'open' | 'closed'
type Project = {
  card_type?: string | undefined
  closed_at?: string | undefined
  created_at?: string | undefined
  creator?: User | undefined
  creator_id?: bigint | undefined
  description?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  is_closed?: boolean | undefined
  num_closed_issues?: bigint | undefined
  num_issues?: bigint | undefined
  num_open_issues?: bigint | undefined
  owner_id?: bigint | undefined
  repo_id?: bigint | undefined
  state?: StateType | undefined
  template_type?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type CreateProjectOption = {
  card_type?: string | undefined
  description?: string | undefined
  template_type?: string | undefined
  title: string
}
type EditProjectOption = {
  card_type?: string | undefined
  description?: string | undefined
  state?: StateType | undefined
  title?: string | undefined
}
type ProjectColumn = {
  color?: string | undefined
  created_at?: string | undefined
  creator?: User | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  project_id?: bigint | undefined
  sorting?: bigint | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type CreateProjectColumnOption = { color?: string | undefined; title: string }
type MoveProjectColumnsOption = { column_ids: bigint[] }
type EditProjectColumnOption = {
  color?: string | undefined
  sorting?: bigint | undefined
  title?: string | undefined
}
type Milestone = {
  closed_at?: string | undefined
  closed_issues?: bigint | undefined
  created_at?: string | undefined
  description?: string | undefined
  due_on?: string | undefined
  id?: bigint | undefined
  open_issues?: bigint | undefined
  state?: {} | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type PullRequestMeta = {
  draft?: boolean | undefined
  html_url?: string | undefined
  merged?: boolean | undefined
  merged_at?: string | undefined
}
type RepositoryMeta = {
  full_name?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  owner?: string | undefined
}
type Issue = {
  assets?: Attachment[] | undefined
  assignee?: User | undefined
  assignees?: User[] | undefined
  body?: string | undefined
  closed_at?: string | undefined
  comments?: bigint | undefined
  content_version?: bigint | undefined
  created_at?: string | undefined
  due_date?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  is_locked?: boolean | undefined
  labels?: Label[] | undefined
  milestone?: Milestone | undefined
  number?: bigint | undefined
  pin_order?: bigint | undefined
  projects?: Project[] | undefined
  pull_request?: PullRequestMeta | undefined
  ref?: string | undefined
  repository?: RepositoryMeta | undefined
  state?: StateType | undefined
  time_estimate?: bigint | undefined
  title?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user?: User | undefined
}
type MoveProjectIssueOption = { column_id: bigint; sorting?: bigint | undefined }
type ProjectWorkflowActions = {
  add_label_ids?: bigint[] | undefined
  column_id?: bigint | undefined
  issue_state?: string | undefined
  remove_label_ids?: bigint[] | undefined
}
type ProjectWorkflowFilters = {
  issue_type?: string | undefined
  label_ids?: bigint[] | undefined
  source_column_id?: bigint | undefined
  target_column_id?: bigint | undefined
}
type ProjectWorkflow = {
  actions?: ProjectWorkflowActions | undefined
  created_at?: string | undefined
  enabled?: boolean | undefined
  event?: string | undefined
  filters?: ProjectWorkflowFilters | undefined
  id?: bigint | undefined
  updated_at?: string | undefined
}
type CreateProjectWorkflowOption = {
  actions?: ProjectWorkflowActions | undefined
  enabled?: boolean | undefined
  event: string
  filters?: ProjectWorkflowFilters | undefined
}
type EditProjectWorkflowOption = {
  actions?: ProjectWorkflowActions | undefined
  enabled?: boolean | undefined
  filters?: ProjectWorkflowFilters | undefined
}
type RenameOrgOption = { new_name: string }
type CreateTeamOption = {
  can_create_org_repo?: boolean | undefined
  description?: string | undefined
  includes_all_repositories?: boolean | undefined
  name: string
  permission?: {} | undefined
  units?: string[] | undefined
  units_map?: { [x: string]: string } | undefined
  visibility?: {} | undefined
}
type PackageFile = {
  id?: bigint | undefined
  md5?: string | undefined
  name?: string | undefined
  properties?: { [x: string]: string } | undefined
  sha1?: string | undefined
  sha256?: string | undefined
  sha512?: string | undefined
  size?: bigint | undefined
}
type MigrateRepoOptions = {
  auth_password?: string | undefined
  auth_token?: string | undefined
  auth_username?: string | undefined
  aws_access_key_id?: string | undefined
  aws_secret_access_key?: string | undefined
  clone_addr: string
  description?: string | undefined
  issues?: boolean | undefined
  labels?: boolean | undefined
  lfs?: boolean | undefined
  lfs_endpoint?: string | undefined
  milestones?: boolean | undefined
  mirror?: boolean | undefined
  mirror_interval?: string | undefined
  private?: boolean | undefined
  pull_requests?: boolean | undefined
  releases?: boolean | undefined
  repo_name: string
  repo_owner?: string | undefined
  service?:
    | 'git'
    | 'github'
    | 'gitea'
    | 'gitlab'
    | 'gogs'
    | 'onedev'
    | 'gitbucket'
    | 'codebase'
    | 'codecommit'
    | 'bitbucketserver'
    | 'forgejo'
    | 'bitbucket'
    | undefined
  uid?: bigint | undefined
  wiki?: boolean | undefined
}
type SearchResults = { data?: Repository[] | undefined; ok?: boolean | undefined }
type EditRepoOption = {
  allow_fast_forward_only_merge?: boolean | undefined
  allow_manual_merge?: boolean | undefined
  allow_merge_commits?: boolean | undefined
  allow_merge_update?: boolean | undefined
  allow_rebase?: boolean | undefined
  allow_rebase_explicit?: boolean | undefined
  allow_rebase_update?: boolean | undefined
  allow_squash_merge?: boolean | undefined
  archived?: boolean | undefined
  autodetect_manual_merge?: boolean | undefined
  default_allow_maintainer_edit?: boolean | undefined
  default_branch?: string | undefined
  default_delete_branch_after_merge?: boolean | undefined
  default_merge_style?: string | undefined
  default_update_style?: string | undefined
  description?: string | undefined
  enable_prune?: boolean | undefined
  external_tracker?: ExternalTracker | undefined
  external_wiki?: ExternalWiki | undefined
  has_actions?: boolean | undefined
  has_code?: boolean | undefined
  has_issues?: boolean | undefined
  has_packages?: boolean | undefined
  has_projects?: boolean | undefined
  has_pull_requests?: boolean | undefined
  has_releases?: boolean | undefined
  has_wiki?: boolean | undefined
  ignore_whitespace_conflicts?: boolean | undefined
  internal_tracker?: InternalTracker | undefined
  mirror_interval?: string | undefined
  mirror_password?: string | undefined
  mirror_token?: string | undefined
  mirror_username?: string | undefined
  name?: string | undefined
  private?: boolean | undefined
  projects_mode?: string | undefined
  pull_requests_creation_restriction?: string | undefined
  squash_merge_commit_message?: string | undefined
  template?: boolean | undefined
  website?: string | undefined
}
type ActionArtifact = {
  archive_download_url?: string | undefined
  created_at?: string | undefined
  expired?: boolean | undefined
  expires_at?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  size_in_bytes?: bigint | undefined
  updated_at?: string | undefined
  url?: string | undefined
  workflow_run?: ActionWorkflowRun | undefined
}
type ActionArtifactsResponse = {
  artifacts?: ActionArtifact[] | undefined
  total_count?: bigint | undefined
}
type ActionTask = {
  created_at?: string | undefined
  display_title?: string | undefined
  event?: string | undefined
  head_branch?: string | undefined
  head_sha?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  run_number?: bigint | undefined
  run_started_at?: string | undefined
  status?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  workflow_id?: string | undefined
}
type ActionTaskResponse = {
  total_count?: bigint | undefined
  workflow_runs?: ActionTask[] | undefined
}
type ActionWorkflow = {
  badge_url?: string | undefined
  created_at?: string | undefined
  deleted_at?: string | undefined
  html_url?: string | undefined
  id?: string | undefined
  name?: string | undefined
  path?: string | undefined
  state?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type ActionWorkflowResponse = {
  total_count?: bigint | undefined
  workflows?: ActionWorkflow[] | undefined
}
type CreateActionWorkflowDispatch = { inputs?: { [x: string]: string } | undefined; ref: string }
type RunDetails = {
  html_url?: string | undefined
  run_url?: string | undefined
  workflow_run_id?: bigint | undefined
}
type UpdateRepoAvatarOption = { image?: string | undefined }
type BranchProtection = {
  approvals_whitelist_teams?: string[] | undefined
  approvals_whitelist_username?: string[] | undefined
  block_admin_merge_override?: boolean | undefined
  block_on_codeowner_reviews?: boolean | undefined
  block_on_official_review_requests?: boolean | undefined
  block_on_outdated_branch?: boolean | undefined
  block_on_rejected_reviews?: boolean | undefined
  branch_name?: string | undefined
  bypass_allowlist_teams?: string[] | undefined
  bypass_allowlist_usernames?: string[] | undefined
  created_at?: string | undefined
  deletion_allowlist_teams?: string[] | undefined
  deletion_allowlist_usernames?: string[] | undefined
  dismiss_stale_approvals?: boolean | undefined
  enable_approvals_whitelist?: boolean | undefined
  enable_bypass_allowlist?: boolean | undefined
  enable_deletion?: boolean | undefined
  enable_deletion_allowlist?: boolean | undefined
  enable_force_push?: boolean | undefined
  enable_force_push_allowlist?: boolean | undefined
  enable_merge_whitelist?: boolean | undefined
  enable_push?: boolean | undefined
  enable_push_whitelist?: boolean | undefined
  enable_status_check?: boolean | undefined
  force_push_allowlist_deploy_keys?: boolean | undefined
  force_push_allowlist_teams?: string[] | undefined
  force_push_allowlist_usernames?: string[] | undefined
  ignore_stale_approvals?: boolean | undefined
  merge_whitelist_teams?: string[] | undefined
  merge_whitelist_usernames?: string[] | undefined
  priority?: bigint | undefined
  protected_file_patterns?: string | undefined
  push_whitelist_deploy_keys?: boolean | undefined
  push_whitelist_teams?: string[] | undefined
  push_whitelist_usernames?: string[] | undefined
  require_signed_commits?: boolean | undefined
  required_approvals?: bigint | undefined
  rule_name?: string | undefined
  status_check_contexts?: string[] | undefined
  unprotected_file_patterns?: string | undefined
  updated_at?: string | undefined
}
type CreateBranchProtectionOption = {
  approvals_whitelist_teams?: string[] | undefined
  approvals_whitelist_username?: string[] | undefined
  block_admin_merge_override?: boolean | undefined
  block_on_codeowner_reviews?: boolean | undefined
  block_on_official_review_requests?: boolean | undefined
  block_on_outdated_branch?: boolean | undefined
  block_on_rejected_reviews?: boolean | undefined
  branch_name?: string | undefined
  bypass_allowlist_teams?: string[] | undefined
  bypass_allowlist_usernames?: string[] | undefined
  deletion_allowlist_teams?: string[] | undefined
  deletion_allowlist_usernames?: string[] | undefined
  dismiss_stale_approvals?: boolean | undefined
  enable_approvals_whitelist?: boolean | undefined
  enable_bypass_allowlist?: boolean | undefined
  enable_deletion?: boolean | undefined
  enable_deletion_allowlist?: boolean | undefined
  enable_force_push?: boolean | undefined
  enable_force_push_allowlist?: boolean | undefined
  enable_merge_whitelist?: boolean | undefined
  enable_push?: boolean | undefined
  enable_push_whitelist?: boolean | undefined
  enable_status_check?: boolean | undefined
  force_push_allowlist_deploy_keys?: boolean | undefined
  force_push_allowlist_teams?: string[] | undefined
  force_push_allowlist_usernames?: string[] | undefined
  ignore_stale_approvals?: boolean | undefined
  merge_whitelist_teams?: string[] | undefined
  merge_whitelist_usernames?: string[] | undefined
  priority?: bigint | undefined
  protected_file_patterns?: string | undefined
  push_whitelist_deploy_keys?: boolean | undefined
  push_whitelist_teams?: string[] | undefined
  push_whitelist_usernames?: string[] | undefined
  require_signed_commits?: boolean | undefined
  required_approvals?: bigint | undefined
  rule_name?: string | undefined
  status_check_contexts?: string[] | undefined
  unprotected_file_patterns?: string | undefined
}
type UpdateBranchProtectionPriories = { ids?: bigint[] | undefined }
type EditBranchProtectionOption = {
  approvals_whitelist_teams?: string[] | undefined
  approvals_whitelist_username?: string[] | undefined
  block_admin_merge_override?: boolean | undefined
  block_on_codeowner_reviews?: boolean | undefined
  block_on_official_review_requests?: boolean | undefined
  block_on_outdated_branch?: boolean | undefined
  block_on_rejected_reviews?: boolean | undefined
  bypass_allowlist_teams?: string[] | undefined
  bypass_allowlist_usernames?: string[] | undefined
  deletion_allowlist_teams?: string[] | undefined
  deletion_allowlist_usernames?: string[] | undefined
  dismiss_stale_approvals?: boolean | undefined
  enable_approvals_whitelist?: boolean | undefined
  enable_bypass_allowlist?: boolean | undefined
  enable_deletion?: boolean | undefined
  enable_deletion_allowlist?: boolean | undefined
  enable_force_push?: boolean | undefined
  enable_force_push_allowlist?: boolean | undefined
  enable_merge_whitelist?: boolean | undefined
  enable_push?: boolean | undefined
  enable_push_whitelist?: boolean | undefined
  enable_status_check?: boolean | undefined
  force_push_allowlist_deploy_keys?: boolean | undefined
  force_push_allowlist_teams?: string[] | undefined
  force_push_allowlist_usernames?: string[] | undefined
  ignore_stale_approvals?: boolean | undefined
  merge_whitelist_teams?: string[] | undefined
  merge_whitelist_usernames?: string[] | undefined
  priority?: bigint | undefined
  protected_file_patterns?: string | undefined
  push_whitelist_deploy_keys?: boolean | undefined
  push_whitelist_teams?: string[] | undefined
  push_whitelist_usernames?: string[] | undefined
  require_signed_commits?: boolean | undefined
  required_approvals?: bigint | undefined
  status_check_contexts?: string[] | undefined
  unprotected_file_patterns?: string | undefined
}
type PayloadUser = {
  email?: string | undefined
  name?: string | undefined
  username?: string | undefined
}
type PayloadCommitVerification = {
  payload?: string | undefined
  reason?: string | undefined
  signature?: string | undefined
  signer?: PayloadUser | undefined
  verified?: boolean | undefined
}
type PayloadCommit = {
  added?: string[] | undefined
  author?: PayloadUser | undefined
  committer?: PayloadUser | undefined
  id?: string | undefined
  message?: string | undefined
  modified?: string[] | undefined
  removed?: string[] | undefined
  timestamp?: string | undefined
  url?: string | undefined
  verification?: PayloadCommitVerification | undefined
}
type Branch = {
  commit?: PayloadCommit | undefined
  effective_branch_protection_name?: string | undefined
  enable_status_check?: boolean | undefined
  name?: string | undefined
  protected?: boolean | undefined
  required_approvals?: bigint | undefined
  status_check_contexts?: string[] | undefined
  user_can_merge?: boolean | undefined
  user_can_push?: boolean | undefined
}
type CreateBranchRepoOption = {
  new_branch_name: string
  old_branch_name?: string | undefined
  old_ref_name?: string | undefined
}
type RenameBranchRepoOption = { name: string }
type UpdateBranchRepoOption = {
  force?: boolean | undefined
  new_commit_id: string
  old_commit_id?: string | undefined
}
type CodeSearchTextMatchTerm = { indices?: bigint[] | undefined; text?: string | undefined }
type CodeSearchTextMatch = {
  fragment?: string | undefined
  matches?: CodeSearchTextMatchTerm[] | undefined
  object_type?: string | undefined
  object_url?: string | undefined
  property?: string | undefined
}
type CodeSearchResultItem = {
  html_url?: string | undefined
  language?: string | undefined
  name?: string | undefined
  path?: string | undefined
  repository?: Repository | undefined
  text_matches?: CodeSearchTextMatch[] | undefined
  url?: string | undefined
}
type CodeSearchResults = {
  incomplete_results?: boolean | undefined
  items?: CodeSearchResultItem[] | undefined
  total_count?: bigint | undefined
}
type AddCollaboratorOption = { permission?: {} | undefined }
type RepoCollaboratorPermission = {
  permission?: {} | undefined
  role_name?: string | undefined
  user?: User | undefined
}
type CommitUser = {
  date?: string | undefined
  email?: string | undefined
  name?: string | undefined
}
type CommitMeta = {
  created?: string | undefined
  sha?: string | undefined
  url?: string | undefined
}
type RepoCommit = {
  author?: CommitUser | undefined
  committer?: CommitUser | undefined
  message?: string | undefined
  tree?: CommitMeta | undefined
  url?: string | undefined
  verification?: PayloadCommitVerification | undefined
}
type CommitAffectedFiles = { filename?: string | undefined; status?: string | undefined }
type CommitStats = {
  additions?: bigint | undefined
  deletions?: bigint | undefined
  total?: bigint | undefined
}
type Commit = {
  author?: User | undefined
  commit?: RepoCommit | undefined
  committer?: User | undefined
  created?: string | undefined
  files?: CommitAffectedFiles[] | undefined
  html_url?: string | undefined
  parents?: CommitMeta[] | undefined
  sha?: string | undefined
  stats?: CommitStats | undefined
  url?: string | undefined
}
type CommitStatus = {
  context?: string | undefined
  created_at?: string | undefined
  creator?: User | undefined
  description?: string | undefined
  id?: bigint | undefined
  status?: {} | undefined
  target_url?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type CombinedStatus = {
  commit_url?: string | undefined
  repository?: Repository | undefined
  sha?: string | undefined
  state?: {} | undefined
  statuses?: CommitStatus[] | undefined
  total_count?: bigint | undefined
  url?: string | undefined
}
type PullRequestAutoMerge = {
  commit_message?: string | undefined
  commit_title?: string | undefined
  enabled_by?: User | undefined
  merge_method?: string | undefined
}
type PRBranchInfo = {
  label?: string | undefined
  ref?: string | undefined
  repo?: Repository | undefined
  repo_id?: bigint | undefined
  sha?: string | undefined
}
type PullRequest = {
  additions?: bigint | undefined
  allow_maintainer_edit?: boolean | undefined
  assignee?: User | undefined
  assignees?: User[] | undefined
  auto_merge?: PullRequestAutoMerge | undefined
  base?: PRBranchInfo | undefined
  body?: string | undefined
  changed_files?: bigint | undefined
  closed_at?: string | undefined
  comments?: bigint | undefined
  content_version?: bigint | undefined
  created_at?: string | undefined
  deletions?: bigint | undefined
  diff_url?: string | undefined
  draft?: boolean | undefined
  due_date?: string | undefined
  head?: PRBranchInfo | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  is_locked?: boolean | undefined
  labels?: Label[] | undefined
  merge_base?: string | undefined
  merge_commit_sha?: string | undefined
  mergeable?: boolean | undefined
  merged?: boolean | undefined
  merged_at?: string | undefined
  merged_by?: User | undefined
  milestone?: Milestone | undefined
  number?: bigint | undefined
  patch_url?: string | undefined
  pin_order?: bigint | undefined
  requested_reviewers?: User[] | undefined
  requested_reviewers_teams?: Team[] | undefined
  review_comments?: bigint | undefined
  state?: {} | undefined
  title?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user?: User | undefined
}
type Compare = { commits?: Commit[] | undefined; total_commits?: bigint | undefined }
type FileLinksResponse = {
  git?: string | undefined
  html?: string | undefined
  self?: string | undefined
}
type ContentsResponse = {
  _links?: FileLinksResponse | undefined
  content?: string | undefined
  download_url?: string | undefined
  encoding?: string | undefined
  git_url?: string | undefined
  html_url?: string | undefined
  last_author_date?: string | undefined
  last_commit_message?: string | undefined
  last_commit_sha?: string | undefined
  last_committer_date?: string | undefined
  lfs_oid?: string | undefined
  lfs_size?: bigint | undefined
  mode?: string | undefined
  name?: string | undefined
  path?: string | undefined
  sha?: string | undefined
  size?: bigint | undefined
  submodule_git_url?: string | undefined
  target?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type Identity = { email?: string | undefined; name?: string | undefined }
type CommitDateOptions = { author?: string | undefined; committer?: string | undefined }
type ChangeFileOperation = {
  content?: string | undefined
  from_path?: string | undefined
  operation: 'create' | 'update' | 'upload' | 'rename' | 'delete'
  path: string
  sha?: string | undefined
}
type ChangeFilesOptions = {
  author?: Identity | undefined
  branch?: string | undefined
  committer?: Identity | undefined
  dates?: CommitDateOptions | undefined
  files: ChangeFileOperation[]
  force_push?: boolean | undefined
  message?: string | undefined
  new_branch?: string | undefined
  signoff?: boolean | undefined
}
type FileCommitResponse = {
  author?: CommitUser | undefined
  committer?: CommitUser | undefined
  created?: string | undefined
  html_url?: string | undefined
  message?: string | undefined
  parents?: CommitMeta[] | undefined
  sha?: string | undefined
  tree?: CommitMeta | undefined
  url?: string | undefined
}
type FilesResponse = {
  commit?: FileCommitResponse | undefined
  files?: ContentsResponse[] | undefined
  verification?: PayloadCommitVerification | undefined
}
type ContentsExtResponse = {
  dir_contents?: ContentsResponse[] | undefined
  file_contents?: ContentsResponse | undefined
}
type DeleteFileOptions = {
  author?: Identity | undefined
  branch?: string | undefined
  committer?: Identity | undefined
  dates?: CommitDateOptions | undefined
  force_push?: boolean | undefined
  message?: string | undefined
  new_branch?: string | undefined
  sha: string
  signoff?: boolean | undefined
}
type FileDeleteResponse = {
  commit?: FileCommitResponse | undefined
  content?: { [x: string]: unknown } | undefined
  verification?: PayloadCommitVerification | undefined
}
type CreateFileOptions = {
  author?: Identity | undefined
  branch?: string | undefined
  committer?: Identity | undefined
  content: string
  dates?: CommitDateOptions | undefined
  force_push?: boolean | undefined
  message?: string | undefined
  new_branch?: string | undefined
  signoff?: boolean | undefined
}
type FileResponse = {
  commit?: FileCommitResponse | undefined
  content?: ContentsResponse | undefined
  verification?: PayloadCommitVerification | undefined
}
type UpdateFileOptions = {
  author?: Identity | undefined
  branch?: string | undefined
  committer?: Identity | undefined
  content: string
  dates?: CommitDateOptions | undefined
  force_push?: boolean | undefined
  from_path?: string | undefined
  message?: string | undefined
  new_branch?: string | undefined
  sha?: string | undefined
  signoff?: boolean | undefined
}
type ApplyDiffPatchFileOptions = {
  author?: Identity | undefined
  branch?: string | undefined
  committer?: Identity | undefined
  content: string
  dates?: CommitDateOptions | undefined
  force_push?: boolean | undefined
  message?: string | undefined
  new_branch?: string | undefined
  signoff?: boolean | undefined
}
type GetFilesOptions = { files?: string[] | undefined }
type CreateForkOption = { name?: string | undefined; organization?: string | undefined }
type GitBlobResponse = {
  content?: string | undefined
  encoding?: string | undefined
  lfs_oid?: string | undefined
  lfs_size?: bigint | undefined
  sha?: string | undefined
  size?: bigint | undefined
  url?: string | undefined
}
type Note = { commit?: Commit | undefined; message?: string | undefined }
type GitObject = { sha?: string | undefined; type?: string | undefined; url?: string | undefined }
type Reference = {
  object?: GitObject | undefined
  ref?: string | undefined
  url?: string | undefined
}
type AnnotatedTagObject = {
  sha?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type AnnotatedTag = {
  message?: string | undefined
  object?: AnnotatedTagObject | undefined
  sha?: string | undefined
  tag?: string | undefined
  tagger?: CommitUser | undefined
  url?: string | undefined
  verification?: PayloadCommitVerification | undefined
}
type GitEntry = {
  mode?: string | undefined
  path?: string | undefined
  sha?: string | undefined
  size?: bigint | undefined
  type?: string | undefined
  url?: string | undefined
}
type GitTreeResponse = {
  page?: bigint | undefined
  sha?: string | undefined
  total_count?: bigint | undefined
  tree?: GitEntry[] | undefined
  truncated?: boolean | undefined
  url?: string | undefined
}
type GitHook = {
  content?: string | undefined
  is_active?: boolean | undefined
  name?: string | undefined
}
type EditGitHookOption = { content?: string | undefined }
type HookDeliveryRequest = {
  body?: string | undefined
  headers?: { [x: string]: string } | undefined
  http_method?: string | undefined
  url?: string | undefined
}
type HookDeliveryResponse = {
  body?: string | undefined
  headers?: { [x: string]: string } | undefined
  status?: bigint | undefined
}
type HookDelivery = {
  delivered_at?: string | undefined
  event_type?: string | undefined
  is_delivered?: boolean | undefined
  is_succeeded?: boolean | undefined
  request?: HookDeliveryRequest | undefined
  response?: HookDeliveryResponse | undefined
  uuid?: string | undefined
}
type IssueConfigContactLink = {
  about?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type IssueConfig = {
  blank_issues_enabled?: boolean | undefined
  contact_links?: IssueConfigContactLink[] | undefined
}
type IssueConfigValidation = { message?: string | undefined; valid?: boolean | undefined }
type IssueTemplateStringSlice = string[]
type IssueFormField = {
  attributes?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  type?: 'markdown' | 'textarea' | 'input' | 'dropdown' | 'checkboxes' | undefined
  validations?: { [x: string]: { [x: string]: unknown } } | undefined
  visible?: ('form' | 'content')[] | undefined
}
type IssueTemplate = {
  about?: string | undefined
  assignees?: IssueTemplateStringSlice | undefined
  body?: IssueFormField[] | undefined
  content?: string | undefined
  file_name?: string | undefined
  labels?: IssueTemplateStringSlice | undefined
  name?: string | undefined
  ref?: string | undefined
  title?: string | undefined
}
type CreateIssueOption = {
  assignee?: string | undefined
  assignees?: string[] | undefined
  body?: string | undefined
  closed?: boolean | undefined
  due_date?: string | undefined
  labels?: bigint[] | undefined
  milestone?: bigint | undefined
  projects?: bigint[] | undefined
  ref?: string | undefined
  title: string
}
type EditIssueCommentOption = { body: string }
type EditAttachmentOptions = { name?: string | undefined }
type EditReactionOption = { content?: string | undefined }
type Reaction = {
  content?: string | undefined
  created_at?: string | undefined
  user?: User | undefined
}
type EditIssueOption = {
  assignee?: string | undefined
  assignees?: string[] | undefined
  body?: string | undefined
  content_version?: bigint | undefined
  due_date?: string | undefined
  milestone?: bigint | undefined
  projects?: bigint[] | undefined
  ref?: string | undefined
  state?: string | undefined
  title?: string | undefined
  unset_due_date?: boolean | undefined
}
type IssueAssigneesOption = { assignees?: string[] | undefined }
type IssueMeta = {
  index?: bigint | undefined
  owner?: string | undefined
  repo?: string | undefined
}
type CreateIssueCommentOption = { body: string }
type EditDeadlineOption = { due_date?: string | undefined }
type IssueDeadline = { due_date?: string | undefined }
type IssueLabelsOption = { labels?: { [x: string]: unknown }[] | undefined }
type LockIssueOption = { lock_reason?: string | undefined }
type WatchInfo = {
  created_at?: string | undefined
  ignored?: boolean | undefined
  reason?: { [x: string]: unknown } | undefined
  repository_url?: string | undefined
  subscribed?: boolean | undefined
  url?: string | undefined
}
type TrackedTime = {
  created?: string | undefined
  id?: bigint | undefined
  issue?: Issue | undefined
  issue_id?: bigint | undefined
  time?: bigint | undefined
  user_id?: bigint | undefined
  user_name?: string | undefined
}
type TimelineComment = {
  assignee?: User | undefined
  assignee_team?: Team | undefined
  body?: string | undefined
  created_at?: string | undefined
  dependent_issue?: Issue | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  issue_url?: string | undefined
  label?: Label | undefined
  milestone?: Milestone | undefined
  new_ref?: string | undefined
  new_title?: string | undefined
  old_milestone?: Milestone | undefined
  old_project_id?: bigint | undefined
  old_ref?: string | undefined
  old_title?: string | undefined
  project_id?: bigint | undefined
  pull_request_url?: string | undefined
  ref_action?: string | undefined
  ref_comment?: Comment | undefined
  ref_commit_sha?: string | undefined
  ref_issue?: Issue | undefined
  removed_assignee?: boolean | undefined
  resolve_doer?: User | undefined
  review_id?: bigint | undefined
  tracked_time?: TrackedTime | undefined
  type?: string | undefined
  updated_at?: string | undefined
  user?: User | undefined
}
type AddTimeOption = { created?: string | undefined; time: bigint; user_name?: string | undefined }
type DeployKey = {
  created_at?: string | undefined
  fingerprint?: string | undefined
  id?: bigint | undefined
  key?: string | undefined
  key_id?: bigint | undefined
  key_type?: 'ssh' | 'token' | undefined
  read_only?: boolean | undefined
  repository?: Repository | undefined
  title?: string | undefined
  token?: string | undefined
  url?: string | undefined
}
type CreateDeployKeyTokenOption = { read_only?: boolean | undefined; title: string }
type MergeUpstreamRequest = { branch?: string | undefined; ff_only?: boolean | undefined }
type MergeUpstreamResponse = { merge_type?: string | undefined }
type CreateMilestoneOption = {
  description?: string | undefined
  due_on?: string | undefined
  state?: {} | undefined
  title?: string | undefined
}
type EditMilestoneOption = {
  description?: string | undefined
  due_on?: string | undefined
  state?: {} | undefined
  title?: string | undefined
}
type NewIssuePinsAllowed = { issues?: boolean | undefined; pull_requests?: boolean | undefined }
type CreatePullRequestOption = {
  allow_maintainer_edit?: boolean | undefined
  assignee?: string | undefined
  assignees?: string[] | undefined
  base?: string | undefined
  body?: string | undefined
  due_date?: string | undefined
  head?: string | undefined
  labels?: bigint[] | undefined
  milestone?: bigint | undefined
  reviewers?: string[] | undefined
  team_reviewers?: string[] | undefined
  title?: string | undefined
}
type EditPullRequestOption = {
  allow_maintainer_edit?: boolean | undefined
  assignee?: string | undefined
  assignees?: string[] | undefined
  base?: string | undefined
  body?: string | undefined
  content_version?: bigint | undefined
  due_date?: string | undefined
  labels?: bigint[] | undefined
  milestone?: bigint | undefined
  state?: string | undefined
  title?: string | undefined
  unset_due_date?: boolean | undefined
}
type CreatePullReviewCommentReplyOptions = { body?: string | undefined }
type PullReviewComment = {
  body?: string | undefined
  commit_id?: string | undefined
  created_at?: string | undefined
  diff_hunk?: string | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  original_commit_id?: string | undefined
  original_position?: bigint | undefined
  path?: string | undefined
  position?: bigint | undefined
  pull_request_review_id?: bigint | undefined
  pull_request_url?: string | undefined
  resolver?: User | undefined
  updated_at?: string | undefined
  user?: User | undefined
}
type ChangedFile = {
  additions?: bigint | undefined
  changes?: bigint | undefined
  contents_url?: string | undefined
  deletions?: bigint | undefined
  filename?: string | undefined
  html_url?: string | undefined
  previous_filename?: string | undefined
  raw_url?: string | undefined
  status?: string | undefined
}
type MergePullRequestOption = {
  delete_branch_after_merge?: boolean | undefined
  do: 'merge' | 'rebase' | 'rebase-merge' | 'squash' | 'fast-forward-only' | 'manually-merged'
  force_merge?: boolean | undefined
  head_commit_id?: string | undefined
  merge_commit_id?: string | undefined
  merge_message_field?: string | undefined
  merge_title_field?: string | undefined
  merge_when_checks_succeed?: boolean | undefined
}
type PullReviewRequestOptions = {
  reviewers?: string[] | undefined
  team_reviewers?: string[] | undefined
}
type ReviewStateType = 'APPROVED' | 'PENDING' | 'COMMENT' | 'REQUEST_CHANGES' | 'REQUEST_REVIEW'
type PullReview = {
  body?: string | undefined
  comments_count?: bigint | undefined
  commit_id?: string | undefined
  dismissed?: boolean | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  official?: boolean | undefined
  pull_request_url?: string | undefined
  stale?: boolean | undefined
  state?: ReviewStateType | undefined
  submitted_at?: string | undefined
  team?: Team | undefined
  updated_at?: string | undefined
  user?: User | undefined
}
type CreatePullReviewComment = {
  body?: string | undefined
  new_position?: bigint | undefined
  old_position?: bigint | undefined
  path: string
}
type CreatePullReviewOptions = {
  body?: string | undefined
  comments?: CreatePullReviewComment[] | undefined
  commit_id?: string | undefined
  event?: ReviewStateType | undefined
}
type SubmitPullReviewOptions = { body?: string | undefined; event?: ReviewStateType | undefined }
type DismissPullReviewOptions = { message?: string | undefined; priors?: boolean | undefined }
type PushMirror = {
  created?: string | undefined
  interval?: string | undefined
  last_error?: string | undefined
  last_update?: string | undefined
  remote_address?: string | undefined
  remote_name?: string | undefined
  repo_name?: string | undefined
  sync_on_commit?: boolean | undefined
}
type CreatePushMirrorOption = {
  interval?: string | undefined
  remote_address?: string | undefined
  remote_password?: string | undefined
  remote_username?: string | undefined
  sync_on_commit?: boolean | undefined
}
type Release = {
  assets?: Attachment[] | undefined
  author?: User | undefined
  body?: string | undefined
  created_at?: string | undefined
  draft?: boolean | undefined
  html_url?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  prerelease?: boolean | undefined
  published_at?: string | undefined
  tag_name?: string | undefined
  tarball_url?: string | undefined
  target_commitish?: string | undefined
  upload_url?: string | undefined
  url?: string | undefined
  zipball_url?: string | undefined
}
type CreateReleaseOption = {
  body?: string | undefined
  draft?: boolean | undefined
  make_latest?: {} | undefined
  name?: string | undefined
  prerelease?: boolean | undefined
  tag_message?: string | undefined
  tag_name: string
  target_commitish?: string | undefined
}
type EditReleaseOption = {
  body?: string | undefined
  draft?: boolean | undefined
  make_latest?: {} | undefined
  name?: string | undefined
  prerelease?: boolean | undefined
  tag_name?: string | undefined
  target_commitish?: string | undefined
}
type CreateStatusOption = {
  context?: string | undefined
  description?: string | undefined
  state?: {} | undefined
  target_url?: string | undefined
}
type TagProtection = {
  created_at?: string | undefined
  id?: bigint | undefined
  name_pattern?: string | undefined
  updated_at?: string | undefined
  whitelist_teams?: string[] | undefined
  whitelist_usernames?: string[] | undefined
}
type CreateTagProtectionOption = {
  name_pattern?: string | undefined
  whitelist_teams?: string[] | undefined
  whitelist_usernames?: string[] | undefined
}
type EditTagProtectionOption = {
  name_pattern?: string | undefined
  whitelist_teams?: string[] | undefined
  whitelist_usernames?: string[] | undefined
}
type Tag = {
  commit?: CommitMeta | undefined
  id?: string | undefined
  message?: string | undefined
  name?: string | undefined
  tarball_url?: string | undefined
  zipball_url?: string | undefined
}
type CreateTagOption = {
  message?: string | undefined
  tag_name: string
  target?: string | undefined
}
type TopicName = { topics?: string[] | undefined }
type RepoTopicOptions = { topics?: string[] | undefined }
type TransferRepoOption = { new_owner: string; team_ids?: bigint[] | undefined }
type CreateWikiPageOptions = {
  content_base64?: string | undefined
  message?: string | undefined
  title?: string | undefined
}
type WikiCommit = {
  author?: CommitUser | undefined
  commiter?: CommitUser | undefined
  message?: string | undefined
  sha?: string | undefined
}
type WikiPage = {
  commit_count?: bigint | undefined
  content_base64?: string | undefined
  footer?: string | undefined
  html_url?: string | undefined
  last_commit?: WikiCommit | undefined
  sidebar?: string | undefined
  sub_url?: string | undefined
  title?: string | undefined
}
type WikiPageMetaData = {
  html_url?: string | undefined
  last_commit?: WikiCommit | undefined
  sub_url?: string | undefined
  title?: string | undefined
}
type WikiCommitList = { commits?: WikiCommit[] | undefined; count?: bigint | undefined }
type GenerateRepoOption = {
  avatar?: boolean | undefined
  default_branch?: string | undefined
  description?: string | undefined
  git_content?: boolean | undefined
  git_hooks?: boolean | undefined
  labels?: boolean | undefined
  name: string
  owner: string
  private?: boolean | undefined
  protected_branch?: boolean | undefined
  topics?: boolean | undefined
  webhooks?: boolean | undefined
}
type GeneralAPISettings = {
  default_git_trees_per_page?: bigint | undefined
  default_max_blob_size?: bigint | undefined
  default_max_response_size?: bigint | undefined
  default_paging_num?: bigint | undefined
  max_response_items?: bigint | undefined
}
type GeneralAttachmentSettings = {
  allowed_types?: string | undefined
  enabled?: boolean | undefined
  max_files?: bigint | undefined
  max_size?: bigint | undefined
}
type GeneralRepoSettings = {
  http_git_disabled?: boolean | undefined
  lfs_disabled?: boolean | undefined
  migrations_disabled?: boolean | undefined
  mirrors_disabled?: boolean | undefined
  stars_disabled?: boolean | undefined
  time_tracking_disabled?: boolean | undefined
}
type GeneralUISettings = {
  allowed_reactions?: string[] | undefined
  custom_emojis?: string[] | undefined
  default_theme?: string | undefined
}
type EditTeamOption = {
  can_create_org_repo?: boolean | undefined
  description?: string | undefined
  includes_all_repositories?: boolean | undefined
  name: string
  permission?: {} | undefined
  units?: string[] | undefined
  units_map?: { [x: string]: string } | undefined
  visibility?: {} | undefined
}
type UserMeta = { id?: bigint | undefined; login?: string | undefined }
type CurrentAccessToken = {
  created_at?: string | undefined
  id?: bigint | undefined
  last_used_at?: string | undefined
  name?: string | undefined
  scopes?: string[] | undefined
  user?: UserMeta | undefined
}
type TopicResponse = {
  created?: string | undefined
  id?: bigint | undefined
  repo_count?: bigint | undefined
  topic_name?: string | undefined
  updated?: string | undefined
}
type TopicListResponse = { topics?: TopicResponse[] | undefined }
type OAuth2Application = {
  client_id?: string | undefined
  client_secret?: string | undefined
  confidential_client?: boolean | undefined
  created?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  redirect_uris?: string[] | undefined
  skip_secondary_authorization?: boolean | undefined
}
type CreateOAuth2ApplicationOptions = {
  confidential_client?: boolean | undefined
  name?: string | undefined
  redirect_uris?: string[] | undefined
  skip_secondary_authorization?: boolean | undefined
}
type DeleteEmailOption = { emails?: string[] | undefined }
type CreateEmailOption = { emails?: string[] | undefined }
type GPGKeyEmail = { email?: string | undefined; verified?: boolean | undefined }
type GPGKey = {
  can_certify?: boolean | undefined
  can_encrypt_comms?: boolean | undefined
  can_encrypt_storage?: boolean | undefined
  can_sign?: boolean | undefined
  created_at?: string | undefined
  emails?: GPGKeyEmail[] | undefined
  expires_at?: string | undefined
  id?: bigint | undefined
  key_id?: string | undefined
  primary_key_id?: string | undefined
  public_key?: string | undefined
  subkeys?: GPGKey[] | undefined
  verified?: boolean | undefined
}
type CreateGPGKeyOption = { armored_public_key: string; armored_signature?: string | undefined }
type UserSettings = {
  description?: string | undefined
  diff_view_style?: string | undefined
  full_name?: string | undefined
  hide_activity?: boolean | undefined
  hide_email?: boolean | undefined
  language?: string | undefined
  location?: string | undefined
  theme?: string | undefined
  website?: string | undefined
}
type UserSettingsOptions = {
  description?: string | undefined
  diff_view_style?: string | undefined
  full_name?: string | undefined
  hide_activity?: boolean | undefined
  hide_email?: boolean | undefined
  language?: string | undefined
  location?: string | undefined
  theme?: string | undefined
  website?: string | undefined
}
type StopWatch = {
  created?: string | undefined
  duration?: string | undefined
  issue_index?: bigint | undefined
  issue_title?: string | undefined
  repo_name?: string | undefined
  repo_owner_name?: string | undefined
  seconds?: bigint | undefined
}
type TimeStamp = bigint
type UserHeatmapData = { contributions?: bigint | undefined; timestamp?: TimeStamp | undefined }
type OrganizationPermissions = {
  can_create_repository?: boolean | undefined
  can_read?: boolean | undefined
  can_write?: boolean | undefined
  is_admin?: boolean | undefined
  is_owner?: boolean | undefined
}
type AccessToken = {
  created_at?: string | undefined
  id?: bigint | undefined
  last_used_at?: string | undefined
  name?: string | undefined
  scopes?: string[] | undefined
  sha1?: string | undefined
  token_last_eight?: string | undefined
}
type CreateAccessTokenOption = { name: string; scopes?: string[] | undefined }
type ServerVersion = { version?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin/actions/jobs': {
      $get:
        | {
            input: {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: ActionWorkflowJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/actions/runners': {
      $get:
        | {
            input: { query: { disabled?: boolean | undefined } }
            output: ActionRunnersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { disabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/actions/runners/registration-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/admin/actions/runners/:runner_id': {
      $delete:
        | { input: { param: { runner_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { runner_id: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { runner_id: string } }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { runner_id: string } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { runner_id: string } } & { json: EditActionRunnerOption }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runner_id: string } } & { json: EditActionRunnerOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/actions/runs': {
      $get:
        | {
            input: {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/cron': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: Cron[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/cron/:task': {
      $post:
        | { input: { param: { task: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { task: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/admin/emails': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: Email[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/emails/search': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Email[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/hooks': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            type?: 'system' | 'default' | 'all' | undefined
          }
        }
        output: Hook[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: CreateHookOption }; output: Hook; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/admin/hooks/:id': {
      $delete: { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: bigint } }; output: Hook; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: bigint } } & { json: EditHookOption }
        output: Hook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/orgs': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: Organization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/packages': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                type?:
                  | 'alpine'
                  | 'arch'
                  | 'cargo'
                  | 'chef'
                  | 'composer'
                  | 'conan'
                  | 'conda'
                  | 'container'
                  | 'cran'
                  | 'debian'
                  | 'generic'
                  | 'go'
                  | 'helm'
                  | 'maven'
                  | 'npm'
                  | 'nuget'
                  | 'pub'
                  | 'pypi'
                  | 'rpm'
                  | 'rubygems'
                  | 'swift'
                  | 'terraform'
                  | 'terraform-module'
                  | 'vagrant'
                  | undefined
                q?: string | undefined
              }
            }
            output: Package[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                limit?: number | undefined
                type?:
                  | 'alpine'
                  | 'arch'
                  | 'cargo'
                  | 'chef'
                  | 'composer'
                  | 'conan'
                  | 'conda'
                  | 'container'
                  | 'cran'
                  | 'debian'
                  | 'generic'
                  | 'go'
                  | 'helm'
                  | 'maven'
                  | 'npm'
                  | 'nuget'
                  | 'pub'
                  | 'pypi'
                  | 'rpm'
                  | 'rubygems'
                  | 'swift'
                  | 'terraform'
                  | 'terraform-module'
                  | 'vagrant'
                  | undefined
                q?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users': {
      $get:
        | {
            input: {
              query: {
                source_id?: bigint | undefined
                login_name?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
                q?: string | undefined
                visibility?: string | undefined
                is_active?: boolean | undefined
                is_admin?: boolean | undefined
                is_restricted?: boolean | undefined
                is_2fa_enabled?: boolean | undefined
                is_prohibit_login?: boolean | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                source_id?: bigint | undefined
                login_name?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
                q?: string | undefined
                visibility?: string | undefined
                is_active?: boolean | undefined
                is_admin?: boolean | undefined
                is_restricted?: boolean | undefined
                is_2fa_enabled?: boolean | undefined
                is_prohibit_login?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | { input: { json: CreateUserOption }; output: User; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateUserOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/admin/users/:username': {
      $delete:
        | {
            input: { param: { username: string } } & { query: { purge?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string } } & { query: { purge?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { username: string } } & { json: EditUserOption }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: EditUserOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users/:username/badges': {
      $delete:
        | {
            input: { param: { username: string } } & { json: UserBadgeOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string } } & { json: UserBadgeOption }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { username: string } }
            output: Badge[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { param: { username: string } } & { json: UserBadgeOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string } } & { json: UserBadgeOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users/:username/keys': {
      $post:
        | {
            input: { param: { username: string } } & { json: CreateKeyOption }
            output: PublicKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string } } & { json: CreateKeyOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users/:username/keys/:id': {
      $delete:
        | {
            input: { param: { username: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users/:username/orgs': {
      $post:
        | {
            input: { param: { username: string } } & { json: CreateOrgOption }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string } } & { json: CreateOrgOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users/:username/rename': {
      $post:
        | {
            input: { param: { username: string } } & { json: RenameUserOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string } } & { json: RenameUserOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/admin/users/:username/repos': {
      $post:
        | {
            input: { param: { username: string } } & { json: CreateRepoOption }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string } } & { json: CreateRepoOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/gitignore/templates': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/gitignore/templates/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: GitignoreTemplateInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/label/templates': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/label/templates/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: LabelTemplate[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/licenses': {
      $get: { input: {}; output: LicensesTemplateListEntry[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/licenses/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: LicenseTemplateInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/markdown': {
      $post:
        | { input: { json: MarkdownOption }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: MarkdownOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/markdown/raw': {
      $post:
        | { input: { json: string }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/markup': {
      $post:
        | { input: { json: MarkupOption }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: MarkupOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/notifications': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            'status-types'?: string[] | undefined
            'subject-type'?: ('issue' | 'pull' | 'commit' | 'repository')[] | undefined
            since?: string | undefined
            before?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: NotificationThread[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            last_read_at?: string | undefined
            all?: string | undefined
            'status-types'?: string[] | undefined
            'to-status'?: string | undefined
          }
        }
        output: NotificationThread[]
        outputFormat: 'json'
        status: 205
      }
    }
  } & {
    '/notifications/new': {
      $get: { input: {}; output: NotificationCount; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notifications/threads/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: NotificationThread
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { query: { 'to-status'?: string | undefined } }
            output: NotificationThread
            outputFormat: 'json'
            status: 205
          }
        | {
            input: { param: { id: string } } & { query: { 'to-status'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/org/:org/repos': {
      $post:
        | {
            input: { param: { org: string } } & { json: CreateRepoOption }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string } } & { json: CreateRepoOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: Organization[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateOrgOption }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateOrgOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/orgs/:org': {
      $delete:
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { org: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { org: string } } & { json: EditOrgOption }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & { json: EditOrgOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/jobs': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/runners': {
      $get:
        | {
            input: { param: { org: string } } & { query: { disabled?: boolean | undefined } }
            output: ActionRunnersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & { query: { disabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/runners/registration-token': {
      $post: { input: { param: { org: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/orgs/:org/actions/runners/:runner_id': {
      $delete:
        | {
            input: { param: { org: string; runner_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; runner_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; runner_id: string } }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; runner_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { org: string; runner_id: string } } & { json: EditActionRunnerOption }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; runner_id: string } } & { json: EditActionRunnerOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/runs': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/secrets': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Secret[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/secrets/:secretname': {
      $delete:
        | {
            input: { param: { org: string; secretname: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; secretname: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { org: string; secretname: string } } & {
              json: CreateOrUpdateSecretOption
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { org: string; secretname: string } } & {
              json: CreateOrUpdateSecretOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; secretname: string } } & {
              json: CreateOrUpdateSecretOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/variables': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ActionVariable[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/actions/variables/:variablename': {
      $delete:
        | {
            input: { param: { org: string; variablename: string } }
            output: ActionVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { org: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; variablename: string } }
            output: ActionVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string; variablename: string } } & { json: CreateVariableOption }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { org: string; variablename: string } } & { json: CreateVariableOption }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { org: string; variablename: string } } & { json: UpdateVariableOption }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { org: string; variablename: string } } & { json: UpdateVariableOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; variablename: string } } & { json: UpdateVariableOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/activities/feeds': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: {
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Activity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: {
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/avatar': {
      $delete:
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { param: { org: string } } & { json: UpdateUserAvatarOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string } } & { json: UpdateUserAvatarOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/blocks': {
      $get: {
        input: { param: { org: string } } & {
          query: { page?: number | undefined; limit?: number | undefined }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orgs/:org/blocks/:username': {
      $delete:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { org: string; username: string } } & {
              query: { note?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } } & {
              query: { note?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/hooks': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Hook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string } } & { json: CreateHookOption }
            output: Hook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string } } & { json: CreateHookOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/hooks/:id': {
      $delete:
        | {
            input: { param: { org: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; id: bigint } }
            output: Hook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { org: string; id: bigint } } & { json: EditHookOption }
            output: Hook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint } } & { json: EditHookOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/labels': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Label[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string } } & { json: CreateLabelOption }
            output: Label
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string } } & { json: CreateLabelOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/labels/:id': {
      $delete:
        | {
            input: { param: { org: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; id: string } }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { org: string; id: string } } & { json: EditLabelOption }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: string } } & { json: EditLabelOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/members': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/members/:username': {
      $delete:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string } } & { json: CreateProjectOption }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string } } & { json: CreateProjectOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id': {
      $delete:
        | {
            input: { param: { org: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; id: bigint } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { org: string; id: bigint } } & { json: EditProjectOption }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint } } & { json: EditProjectOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/columns': {
      $get:
        | {
            input: { param: { org: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ProjectColumn[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string; id: bigint } } & { json: CreateProjectColumnOption }
            output: ProjectColumn
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string; id: bigint } } & { json: CreateProjectColumnOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/columns/move': {
      $post:
        | {
            input: { param: { org: string; id: bigint } } & { json: MoveProjectColumnsOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint } } & { json: MoveProjectColumnsOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/columns/:column_id': {
      $delete:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } }
            output: ProjectColumn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } } & {
              json: EditProjectColumnOption
            }
            output: ProjectColumn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } } & {
              json: EditProjectColumnOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/columns/:column_id/default': {
      $post:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/columns/:column_id/issues': {
      $get:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/columns/:column_id/issues/:issue_id': {
      $delete:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string; id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { org: string; id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/issues/:issue_id/move': {
      $post:
        | {
            input: { param: { org: string; id: bigint; issue_id: bigint } } & {
              json: MoveProjectIssueOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint; issue_id: bigint } } & {
              json: MoveProjectIssueOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/workflows': {
      $get:
        | {
            input: { param: { org: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ProjectWorkflow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string; id: bigint } } & { json: CreateProjectWorkflowOption }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string; id: bigint } } & { json: CreateProjectWorkflowOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/projects/:id/workflows/:workflow_id': {
      $delete:
        | {
            input: { param: { org: string; id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; id: bigint; workflow_id: bigint } }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { org: string; id: bigint; workflow_id: bigint } } & {
              json: EditProjectWorkflowOption
            }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string; id: bigint; workflow_id: bigint } } & {
              json: EditProjectWorkflowOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/public_members': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/public_members/:username': {
      $delete:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/rename': {
      $post:
        | {
            input: { param: { org: string } } & { json: RenameOrgOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { org: string } } & { json: RenameOrgOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/repos': {
      $delete:
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { org: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string } } & { json: CreateRepoOption }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string } } & { json: CreateRepoOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/teams': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { org: string } } & { json: CreateTeamOption }
            output: Team
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { org: string } } & { json: CreateTeamOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/orgs/:org/teams/search': {
      $get:
        | {
            input: { param: { org: string } } & {
              query: {
                q?: string | undefined
                include_desc?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: { data?: Team[] | undefined; ok?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org: string } } & {
              query: {
                q?: string | undefined
                include_desc?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner': {
      $get:
        | {
            input: { param: { owner: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                type?:
                  | 'alpine'
                  | 'arch'
                  | 'cargo'
                  | 'chef'
                  | 'composer'
                  | 'conan'
                  | 'conda'
                  | 'container'
                  | 'cran'
                  | 'debian'
                  | 'generic'
                  | 'go'
                  | 'helm'
                  | 'maven'
                  | 'npm'
                  | 'nuget'
                  | 'pub'
                  | 'pypi'
                  | 'rpm'
                  | 'rubygems'
                  | 'swift'
                  | 'terraform'
                  | 'terraform-module'
                  | 'vagrant'
                  | undefined
                q?: string | undefined
              }
            }
            output: Package[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                type?:
                  | 'alpine'
                  | 'arch'
                  | 'cargo'
                  | 'chef'
                  | 'composer'
                  | 'conan'
                  | 'conda'
                  | 'container'
                  | 'cran'
                  | 'debian'
                  | 'generic'
                  | 'go'
                  | 'helm'
                  | 'maven'
                  | 'npm'
                  | 'nuget'
                  | 'pub'
                  | 'pypi'
                  | 'rpm'
                  | 'rubygems'
                  | 'swift'
                  | 'terraform'
                  | 'terraform-module'
                  | 'vagrant'
                  | undefined
                q?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner/:type/:name': {
      $delete:
        | {
            input: { param: { owner: string; type: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; type: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; type: string; name: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Package[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; type: string; name: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner/:type/:name/-/latest': {
      $get:
        | {
            input: { param: { owner: string; type: string; name: string } }
            output: Package
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; type: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner/:type/:name/-/link/:repo_name': {
      $post:
        | {
            input: { param: { owner: string; type: string; name: string; repo_name: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; type: string; name: string; repo_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner/:type/:name/-/unlink': {
      $post:
        | {
            input: { param: { owner: string; type: string; name: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; type: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner/:type/:name/:version': {
      $delete:
        | {
            input: { param: { owner: string; type: string; name: string; version: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; type: string; name: string; version: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; type: string; name: string; version: string } }
            output: Package
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; type: string; name: string; version: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/packages/:owner/:type/:name/:version/files': {
      $get:
        | {
            input: { param: { owner: string; type: string; name: string; version: string } }
            output: PackageFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; type: string; name: string; version: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/issues/search': {
      $get:
        | {
            input: {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                labels?: string | undefined
                milestones?: string | undefined
                q?: string | undefined
                type?: 'issues' | 'pulls' | undefined
                since?: string | undefined
                before?: string | undefined
                assigned?: boolean | undefined
                created?: boolean | undefined
                mentioned?: boolean | undefined
                review_requested?: boolean | undefined
                reviewed?: boolean | undefined
                owner?: string | undefined
                created_by?: string | undefined
                team?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                labels?: string | undefined
                milestones?: string | undefined
                q?: string | undefined
                type?: 'issues' | 'pulls' | undefined
                since?: string | undefined
                before?: string | undefined
                assigned?: boolean | undefined
                created?: boolean | undefined
                mentioned?: boolean | undefined
                review_requested?: boolean | undefined
                reviewed?: boolean | undefined
                owner?: string | undefined
                created_by?: string | undefined
                team?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/migrate': {
      $post:
        | {
            input: { json: MigrateRepoOptions }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: MigrateRepoOptions }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/repos/search': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                topic?: boolean | undefined
                includeDesc?: boolean | undefined
                uid?: bigint | undefined
                priority_owner_id?: bigint | undefined
                team_id?: bigint | undefined
                starredBy?: bigint | undefined
                private?: boolean | undefined
                is_private?: boolean | undefined
                template?: boolean | undefined
                archived?: boolean | undefined
                mode?: string | undefined
                exclusive?: boolean | undefined
                sort?: string | undefined
                order?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                topic?: boolean | undefined
                includeDesc?: boolean | undefined
                uid?: bigint | undefined
                priority_owner_id?: bigint | undefined
                team_id?: bigint | undefined
                starredBy?: bigint | undefined
                private?: boolean | undefined
                is_private?: boolean | undefined
                template?: boolean | undefined
                archived?: boolean | undefined
                mode?: string | undefined
                exclusive?: boolean | undefined
                sort?: string | undefined
                order?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo': {
      $delete:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string } } & { json: EditRepoOption }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: EditRepoOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/artifacts': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { name?: string | undefined }
            }
            output: ActionArtifactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/artifacts/:artifact_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; artifact_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; artifact_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; artifact_id: string } }
            output: ActionArtifact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; artifact_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/artifacts/:artifact_id/zip': {
      $get:
        | {
            input: { param: { owner: string; repo: string; artifact_id: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { owner: string; repo: string; artifact_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/jobs': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: ActionWorkflowJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/jobs/:job_id': {
      $get:
        | {
            input: { param: { owner: string; repo: string; job_id: string } }
            output: ActionWorkflowJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; job_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/jobs/:job_id/logs': {
      $get:
        | {
            input: { param: { owner: string; repo: string; job_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; job_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runners': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { disabled?: boolean | undefined }
            }
            output: ActionRunnersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { disabled?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runners/registration-token': {
      $post: {
        input: { param: { owner: string; repo: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/repos/:owner/:repo/actions/runners/:runner_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; runner_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; runner_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; runner_id: string } }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; runner_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; runner_id: string } } & {
              json: EditActionRunnerOption
            }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; runner_id: string } } & {
              json: EditActionRunnerOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                exclude_pull_requests?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                exclude_pull_requests?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: ActionWorkflowRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/approve': {
      $post:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: ActionWorkflowRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/artifacts': {
      $get:
        | {
            input: { param: { owner: string; repo: string; run: number } } & {
              query: { name?: string | undefined }
            }
            output: ActionArtifactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } } & {
              query: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/attempts/:attempt': {
      $get:
        | {
            input: { param: { owner: string; repo: string; run: number; attempt: number } }
            output: ActionWorkflowRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number; attempt: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/attempts/:attempt/jobs': {
      $get:
        | {
            input: { param: { owner: string; repo: string; run: number; attempt: number } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number; attempt: number } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/cancel': {
      $post:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: ActionWorkflowRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/force-cancel': {
      $post:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: ActionWorkflowRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/jobs': {
      $get:
        | {
            input: { param: { owner: string; repo: string; run: number } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: ActionWorkflowJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } } & {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/jobs/:job_id/rerun': {
      $post:
        | {
            input: { param: { owner: string; repo: string; run: number; job_id: number } }
            output: ActionWorkflowJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; run: number; job_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/logs': {
      $get:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/rerun': {
      $post:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: ActionWorkflowRun
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/runs/:run/rerun-failed-jobs': {
      $post:
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; run: number } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/secrets': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Secret[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/secrets/:secretname': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; secretname: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; secretname: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; secretname: string } } & {
              json: CreateOrUpdateSecretOption
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; secretname: string } } & {
              json: CreateOrUpdateSecretOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; secretname: string } } & {
              json: CreateOrUpdateSecretOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/tasks': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ActionTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/variables': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ActionVariable[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/variables/:variablename': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; variablename: string } }
            output: ActionVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; variablename: string } }
            output: ActionVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; variablename: string } } & {
              json: CreateVariableOption
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } } & {
              json: CreateVariableOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; variablename: string } } & {
              json: UpdateVariableOption
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } } & {
              json: UpdateVariableOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; variablename: string } } & {
              json: UpdateVariableOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/workflows': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: ActionWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/workflows/:workflow_id': {
      $get:
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } }
            output: ActionWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/workflows/:workflow_id/disable': {
      $put:
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/workflows/:workflow_id/dispatches': {
      $post:
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } } & {
              query: {
                return_run_details?: boolean | undefined
                scoped_workflow_source_repo_id?: bigint | undefined
              }
            } & { json: CreateActionWorkflowDispatch }
            output: RunDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } } & {
              query: {
                return_run_details?: boolean | undefined
                scoped_workflow_source_repo_id?: bigint | undefined
              }
            } & { json: CreateActionWorkflowDispatch }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } } & {
              query: {
                return_run_details?: boolean | undefined
                scoped_workflow_source_repo_id?: bigint | undefined
              }
            } & { json: CreateActionWorkflowDispatch }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/workflows/:workflow_id/enable': {
      $put:
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/actions/workflows/:workflow_id/runs': {
      $get:
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } } & {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                exclude_pull_requests?: boolean | undefined
                scoped_workflow_source_repo_id?: bigint | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; workflow_id: string } } & {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                exclude_pull_requests?: boolean | undefined
                scoped_workflow_source_repo_id?: bigint | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/activities/feeds': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Activity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/archive/:archive': {
      $get:
        | {
            input: { param: { owner: string; repo: string; archive: string } } & {
              query: { path?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; archive: string } } & {
              query: { path?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/assignees': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/assignees/:assignee': {
      $get:
        | {
            input: { param: { owner: string; repo: string; assignee: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; assignee: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/avatar': {
      $delete:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: UpdateRepoAvatarOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: UpdateRepoAvatarOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/branch_protections': {
      $get: {
        input: { param: { owner: string; repo: string } }
        output: BranchProtection[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & {
              json: CreateBranchProtectionOption
            }
            output: BranchProtection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              json: CreateBranchProtectionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/branch_protections/priority': {
      $post:
        | {
            input: { param: { owner: string; repo: string } } & {
              json: UpdateBranchProtectionPriories
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              json: UpdateBranchProtectionPriories
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/branch_protections/:name': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: BranchProtection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; name: string } } & {
              json: EditBranchProtectionOption
            }
            output: BranchProtection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; name: string } } & {
              json: EditBranchProtectionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/branches': {
      $get: {
        input: { param: { owner: string; repo: string } } & {
          query: { page?: number | undefined; limit?: number | undefined; q?: string | undefined }
        }
        output: Branch[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateBranchRepoOption }
            output: Branch
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateBranchRepoOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/branches/:branch': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; branch: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; branch: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; branch: string } }
            output: Branch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; branch: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; branch: string } } & {
              json: RenameBranchRepoOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; branch: string } } & {
              json: RenameBranchRepoOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; branch: string } } & {
              json: UpdateBranchRepoOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; branch: string } } & {
              json: UpdateBranchRepoOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/code/search': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                q: string
                ref?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: CodeSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                q: string
                ref?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/collaborators': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/collaborators/:collaborator': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; collaborator: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; collaborator: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; collaborator: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; collaborator: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; collaborator: string } } & {
              json: AddCollaboratorOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; collaborator: string } } & {
              json: AddCollaboratorOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/collaborators/:collaborator/permission': {
      $get:
        | {
            input: { param: { owner: string; repo: string; collaborator: string } }
            output: RepoCollaboratorPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; collaborator: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/commits': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                sha?: string | undefined
                path?: string | undefined
                since?: string | undefined
                until?: string | undefined
                stat?: boolean | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
                not?: string | undefined
              }
            }
            output: Commit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                sha?: string | undefined
                path?: string | undefined
                since?: string | undefined
                until?: string | undefined
                stat?: boolean | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
                not?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/commits/:ref/status': {
      $get:
        | {
            input: { param: { owner: string; repo: string; ref: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: CombinedStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; ref: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/commits/:ref/statuses': {
      $get:
        | {
            input: { param: { owner: string; repo: string; ref: string } } & {
              query: {
                sort?:
                  | 'oldest'
                  | 'recentupdate'
                  | 'leastupdate'
                  | 'leastindex'
                  | 'highestindex'
                  | undefined
                state?: 'pending' | 'success' | 'error' | 'failure' | 'warning' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; ref: string } } & {
              query: {
                sort?:
                  | 'oldest'
                  | 'recentupdate'
                  | 'leastupdate'
                  | 'leastindex'
                  | 'highestindex'
                  | undefined
                state?: 'pending' | 'success' | 'error' | 'failure' | 'warning' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/commits/:sha/pull': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } }
            output: PullRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/compare/:basehead': {
      $get:
        | {
            input: { param: { owner: string; repo: string; basehead: string } } & {
              query: {
                output?: 'diff' | 'patch' | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
              }
            }
            output: Compare
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; basehead: string } } & {
              query: {
                output?: 'diff' | 'patch' | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/contents': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { ref?: string | undefined }
            }
            output: ContentsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: ChangeFilesOptions }
            output: FilesResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: ChangeFilesOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/contents-ext/:filepath': {
      $get:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined; includes?: string | undefined }
            }
            output: ContentsExtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined; includes?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/contents/:filepath': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: DeleteFileOptions
            }
            output: FileDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: DeleteFileOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: ContentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: CreateFileOptions
            }
            output: FileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: CreateFileOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: UpdateFileOptions
            }
            output: FileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: UpdateFileOptions
            }
            output: FileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              json: UpdateFileOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/diffpatch': {
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: ApplyDiffPatchFileOptions }
            output: FileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: ApplyDiffPatchFileOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/editorconfig/:filepath': {
      $get:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/file-contents': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { ref?: string | undefined; body: string }
            }
            output: ContentsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { ref?: string | undefined; body: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { ref?: string | undefined }
            } & { json: GetFilesOptions }
            output: ContentsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { ref?: string | undefined }
            } & { json: GetFilesOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/forks': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateForkOption }
            output: Repository
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateForkOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/blobs/:sha': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } }
            output: GitBlobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/commits/:sha': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: {
                stat?: boolean | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
              }
            }
            output: Commit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: {
                stat?: boolean | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/commits/:sha.{diffType}': {
      $get:
        | {
            input: {
              param: { owner: string; repo: string; sha: string; diffType: 'diff' | 'patch' }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { owner: string; repo: string; sha: string; diffType: 'diff' | 'patch' }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/notes/:sha': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: { verification?: boolean | undefined; files?: boolean | undefined }
            }
            output: Note
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: { verification?: boolean | undefined; files?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/refs': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: Reference[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/refs/:ref': {
      $get:
        | {
            input: { param: { owner: string; repo: string; ref: string } }
            output: Reference[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; ref: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/tags/:sha': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } }
            output: AnnotatedTag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/git/trees/:sha': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: {
                recursive?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: GitTreeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: {
                recursive?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Hook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateHookOption }
            output: Hook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateHookOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks/git': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: GitHook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks/git/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: GitHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: string } } & {
              json: EditGitHookOption
            }
            output: GitHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: string } } & {
              json: EditGitHookOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Hook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & { json: EditHookOption }
            output: Hook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & { json: EditHookOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks/:id/deliveries': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: HookDelivery[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks/:id/deliveries/:uuid': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint; uuid: string } }
            output: HookDelivery
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; uuid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/hooks/:id/tests': {
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issue_config': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: IssueConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issue_config/validate': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: IssueConfigValidation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issue_templates': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: IssueTemplate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                state?: 'closed' | 'open' | 'all' | undefined
                labels?: string | undefined
                q?: string | undefined
                type?: 'issues' | 'pulls' | undefined
                milestones?: string | undefined
                since?: string | undefined
                before?: string | undefined
                created_by?: string | undefined
                assigned_by?: string | undefined
                mentioned_by?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                state?: 'closed' | 'open' | 'all' | undefined
                labels?: string | undefined
                q?: string | undefined
                type?: 'issues' | 'pulls' | undefined
                milestones?: string | undefined
                since?: string | undefined
                before?: string | undefined
                created_by?: string | undefined
                assigned_by?: string | undefined
                mentioned_by?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateIssueOption }
            output: Issue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateIssueOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/comments': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                since?: string | undefined
                before?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Comment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                since?: string | undefined
                before?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/comments/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditIssueCommentOption
            }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditIssueCommentOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditIssueCommentOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/comments/:id/assets': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { name?: string | undefined }
            } & { form: { attachment: File } }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { name?: string | undefined }
            } & { form: { attachment: File } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/comments/:id/assets/:attachment_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } } & {
              json: EditAttachmentOptions
            }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } } & {
              json: EditAttachmentOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/comments/:id/reactions': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReactionOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReactionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Reaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReactionOption
            }
            output: Reaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReactionOption
            }
            output: Reaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReactionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/pinned': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditIssueOption
            }
            output: Issue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditIssueOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/assets': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { name?: string | undefined }
            } & { form: { attachment: File } }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { name?: string | undefined }
            } & { form: { attachment: File } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/assets/:attachment_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint; attachment_id: bigint } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: {
              param: { owner: string; repo: string; index: bigint; attachment_id: bigint }
            } & { json: EditAttachmentOptions }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { owner: string; repo: string; index: bigint; attachment_id: bigint }
            } & { json: EditAttachmentOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/assignees': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueAssigneesOption
            }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueAssigneesOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueAssigneesOption
            }
            output: Issue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueAssigneesOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/assignees/:assignee': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint; assignee: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; assignee: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/blocks': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: Issue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/comments': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { since?: string | undefined; before?: string | undefined }
            }
            output: Comment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { since?: string | undefined; before?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: CreateIssueCommentOption
            }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: CreateIssueCommentOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/comments/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: number; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: number; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; index: number; id: bigint } } & {
              json: EditIssueCommentOption
            }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: number; id: bigint } } & {
              json: EditIssueCommentOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: number; id: bigint } } & {
              json: EditIssueCommentOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/deadline': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditDeadlineOption
            }
            output: IssueDeadline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditDeadlineOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/dependencies': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: Issue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: string } } & { json: IssueMeta }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/labels': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: Label[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueLabelsOption
            }
            output: Label[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueLabelsOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueLabelsOption
            }
            output: Label[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: IssueLabelsOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/labels/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/lock': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: LockIssueOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: LockIssueOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/pin': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/pin/:position': {
      $patch:
        | {
            input: { param: { owner: string; repo: string; index: bigint; position: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; position: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/reactions': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditReactionOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditReactionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Reaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditReactionOption
            }
            output: Reaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditReactionOption
            }
            output: Reaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditReactionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/stopwatch/delete': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/stopwatch/start': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/stopwatch/stop': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/subscriptions': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/subscriptions/check': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: WatchInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/subscriptions/:user': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; user: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/timeline': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                since?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                before?: string | undefined
              }
            }
            output: TimelineComment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                since?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                before?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/times': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                user?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: TrackedTime[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                user?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: AddTimeOption
            }
            output: TrackedTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: AddTimeOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/issues/:index/times/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/keys': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                key_id?: number | undefined
                fingerprint?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: DeployKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                key_id?: number | undefined
                fingerprint?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateKeyOption }
            output: DeployKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateKeyOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/keys/tokens': {
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateDeployKeyTokenOption }
            output: DeployKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateDeployKeyTokenOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/keys/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: DeployKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/labels': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Label[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateLabelOption }
            output: Label
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateLabelOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/labels/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: string } } & {
              json: EditLabelOption
            }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: string } } & {
              json: EditLabelOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/languages': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: { [x: string]: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/licenses': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/media/:filepath': {
      $get:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/merge-upstream': {
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: MergeUpstreamRequest }
            output: MergeUpstreamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: MergeUpstreamRequest }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/milestones': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                state?: string | undefined
                name?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Milestone[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                state?: string | undefined
                name?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateMilestoneOption }
            output: Milestone
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateMilestoneOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/milestones/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: Milestone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: string } } & {
              json: EditMilestoneOption
            }
            output: Milestone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: string } } & {
              json: EditMilestoneOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/mirror-sync': {
      $post:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/new_pin_allowed': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: NewIssuePinsAllowed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/notifications': {
      $get: {
        input: { param: { owner: string; repo: string } } & {
          query: {
            all?: boolean | undefined
            'status-types'?: string[] | undefined
            'subject-type'?: ('issue' | 'pull' | 'commit' | 'repository')[] | undefined
            since?: string | undefined
            before?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: NotificationThread[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { owner: string; repo: string } } & {
          query: {
            all?: string | undefined
            'status-types'?: string[] | undefined
            'to-status'?: string | undefined
            last_read_at?: string | undefined
          }
        }
        output: NotificationThread[]
        outputFormat: 'json'
        status: 205
      }
    }
  } & {
    '/repos/:owner/:repo/projects': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateProjectOption }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateProjectOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditProjectOption
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditProjectOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/columns': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ProjectColumn[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: CreateProjectColumnOption
            }
            output: ProjectColumn
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: CreateProjectColumnOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/columns/move': {
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: MoveProjectColumnsOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: MoveProjectColumnsOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/columns/:column_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } }
            output: ProjectColumn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } } & {
              json: EditProjectColumnOption
            }
            output: ProjectColumn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } } & {
              json: EditProjectColumnOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/columns/:column_id/default': {
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/columns/:column_id/issues': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; column_id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/columns/:column_id/issues/:issue_id': {
      $delete:
        | {
            input: {
              param: {
                owner: string
                repo: string
                id: bigint
                column_id: bigint
                issue_id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                owner: string
                repo: string
                id: bigint
                column_id: bigint
                issue_id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: {
              param: {
                owner: string
                repo: string
                id: bigint
                column_id: bigint
                issue_id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              param: {
                owner: string
                repo: string
                id: bigint
                column_id: bigint
                issue_id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/issues/:issue_id/move': {
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint; issue_id: bigint } } & {
              json: MoveProjectIssueOption
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; issue_id: bigint } } & {
              json: MoveProjectIssueOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/workflows': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ProjectWorkflow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: CreateProjectWorkflowOption
            }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: CreateProjectWorkflowOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/projects/:id/workflows/:workflow_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint; workflow_id: bigint } }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint; workflow_id: bigint } } & {
              json: EditProjectWorkflowOption
            }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; workflow_id: bigint } } & {
              json: EditProjectWorkflowOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                base_branch?: string | undefined
                state?: 'open' | 'closed' | 'all' | undefined
                sort?:
                  | 'oldest'
                  | 'recentupdate'
                  | 'recentclose'
                  | 'leastupdate'
                  | 'mostcomment'
                  | 'leastcomment'
                  | 'priority'
                  | undefined
                milestone?: bigint | undefined
                labels?: bigint[] | undefined
                poster?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: PullRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                base_branch?: string | undefined
                state?: 'open' | 'closed' | 'all' | undefined
                sort?:
                  | 'oldest'
                  | 'recentupdate'
                  | 'recentclose'
                  | 'leastupdate'
                  | 'mostcomment'
                  | 'leastcomment'
                  | 'priority'
                  | undefined
                milestone?: bigint | undefined
                labels?: bigint[] | undefined
                poster?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreatePullRequestOption }
            output: PullRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreatePullRequestOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/comments/:id/resolve': {
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/comments/:id/unresolve': {
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/pinned': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: PullRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:base/:head': {
      $get:
        | {
            input: { param: { owner: string; repo: string; base: string; head: string } }
            output: PullRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; base: string; head: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: PullRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditPullRequestOption
            }
            output: PullRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: EditPullRequestOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index.{diffType}': {
      $get:
        | {
            input: {
              param: { owner: string; repo: string; index: bigint; diffType: 'diff' | 'patch' }
            } & { query: { binary?: boolean | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { owner: string; repo: string; index: bigint; diffType: 'diff' | 'patch' }
            } & { query: { binary?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/comments/:id/replies': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } } & {
              json: CreatePullReviewCommentReplyOptions
            }
            output: PullReviewComment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } } & {
              json: CreatePullReviewCommentReplyOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/commits': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
              }
            }
            output: Commit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                verification?: boolean | undefined
                files?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/files': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                'skip-to'?: string | undefined
                whitespace?: 'ignore-all' | 'ignore-change' | 'ignore-eol' | 'show-all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ChangedFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: {
                'skip-to'?: string | undefined
                whitespace?: 'ignore-all' | 'ignore-change' | 'ignore-eol' | 'show-all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/merge': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: MergePullRequestOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: MergePullRequestOption
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: MergePullRequestOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/requested_reviewers': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: PullReviewRequestOptions
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: PullReviewRequestOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: PullReviewRequestOptions
            }
            output: PullReview[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: PullReviewRequestOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/reviews': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: PullReview[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: CreatePullReviewOptions
            }
            output: PullReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              json: CreatePullReviewOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/reviews/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: PullReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } } & {
              json: SubmitPullReviewOptions
            }
            output: PullReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } } & {
              json: SubmitPullReviewOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/reviews/:id/comments': {
      $get:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: PullReviewComment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/reviews/:id/dismissals': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } } & {
              json: DismissPullReviewOptions
            }
            output: PullReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } } & {
              json: DismissPullReviewOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/reviews/:id/undismissals': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: PullReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/pulls/:index/update': {
      $post:
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { style?: 'merge' | 'rebase' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; index: bigint } } & {
              query: { style?: 'merge' | 'rebase' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/push_mirrors': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: PushMirror[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreatePushMirrorOption }
            output: PushMirror
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreatePushMirrorOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/push_mirrors-sync': {
      $post:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/push_mirrors/:name': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: PushMirror
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/raw/:filepath': {
      $get:
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; filepath: string } } & {
              query: { ref?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/releases': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                draft?: boolean | undefined
                'pre-release'?: boolean | undefined
                tag_filter?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Release[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                draft?: boolean | undefined
                'pre-release'?: boolean | undefined
                tag_filter?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateReleaseOption }
            output: Release
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateReleaseOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/releases/latest': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: Release
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/releases/tags/:tag': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: Release
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/releases/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Release
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReleaseOption
            }
            output: Release
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              json: EditReleaseOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/releases/:id/assets': {
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { name?: string | undefined }
            } & { json: { attachment?: File | undefined } } & {
              form: { attachment?: File | undefined }
            }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint } } & {
              query: { name?: string | undefined }
            } & { json: { attachment?: File | undefined } } & {
              form: { attachment?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/releases/:id/assets/:attachment_id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } } & {
              json: EditAttachmentOptions
            }
            output: Attachment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; id: bigint; attachment_id: bigint } } & {
              json: EditAttachmentOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/reviewers': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/signing-key.gpg': {
      $get: {
        input: { param: { owner: string; repo: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/repos/:owner/:repo/signing-key.pub': {
      $get: {
        input: { param: { owner: string; repo: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/repos/:owner/:repo/stargazers': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/statuses/:sha': {
      $get:
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: {
                sort?:
                  | 'oldest'
                  | 'recentupdate'
                  | 'leastupdate'
                  | 'leastindex'
                  | 'highestindex'
                  | undefined
                state?: 'pending' | 'success' | 'error' | 'failure' | 'warning' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              query: {
                sort?:
                  | 'oldest'
                  | 'recentupdate'
                  | 'leastupdate'
                  | 'leastindex'
                  | 'highestindex'
                  | undefined
                state?: 'pending' | 'success' | 'error' | 'failure' | 'warning' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              json: CreateStatusOption
            }
            output: CommitStatus
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string; sha: string } } & {
              json: CreateStatusOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/subscribers': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/subscription': {
      $delete:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: WatchInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string } }
            output: WatchInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/tag_protections': {
      $get: {
        input: { param: { owner: string; repo: string } }
        output: TagProtection[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateTagProtectionOption }
            output: TagProtection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateTagProtectionOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/tag_protections/:id': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; id: number } }
            output: TagProtection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; id: number } } & {
              json: EditTagProtectionOption
            }
            output: TagProtection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; id: number } } & {
              json: EditTagProtectionOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/tags': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateTagOption }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateTagOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/tags/:tag': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; tag: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/teams': {
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/teams/:team': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; team: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; team: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; team: string } }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; team: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; team: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; team: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/times': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                user?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: TrackedTime[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: {
                user?: string | undefined
                since?: string | undefined
                before?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/times/:user': {
      $get:
        | {
            input: { param: { owner: string; repo: string; user: string } }
            output: TrackedTime[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; user: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/topics': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: TopicName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string } } & { json: RepoTopicOptions }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: RepoTopicOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/topics/:topic': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; topic: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; topic: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string; topic: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; topic: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/transfer': {
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: TransferRepoOption }
            output: Repository
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: TransferRepoOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/transfer/accept': {
      $post:
        | {
            input: { param: { owner: string; repo: string } }
            output: Repository
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/transfer/reject': {
      $post:
        | {
            input: { param: { owner: string; repo: string } }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/wiki/new': {
      $post:
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateWikiPageOptions }
            output: WikiPage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { owner: string; repo: string } } & { json: CreateWikiPageOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/wiki/page/:pageName': {
      $delete:
        | {
            input: { param: { owner: string; repo: string; pageName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string; pageName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string; pageName: string } }
            output: WikiPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; pageName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { owner: string; repo: string; pageName: string } } & {
              json: CreateWikiPageOptions
            }
            output: WikiPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; pageName: string } } & {
              json: CreateWikiPageOptions
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/wiki/pages': {
      $get:
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: WikiPageMetaData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:owner/:repo/wiki/revisions/:pageName': {
      $get:
        | {
            input: { param: { owner: string; repo: string; pageName: string } } & {
              query: { page?: number | undefined }
            }
            output: WikiCommitList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { owner: string; repo: string; pageName: string } } & {
              query: { page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repos/:template_owner/:template_repo/generate': {
      $post:
        | {
            input: { param: { template_owner: string; template_repo: string } } & {
              json: GenerateRepoOption
            }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { template_owner: string; template_repo: string } } & {
              json: GenerateRepoOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/repositories/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/search/code': {
      $get:
        | {
            input: { query: { q: string; page?: number | undefined; limit?: number | undefined } }
            output: CodeSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string; page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/settings/api': {
      $get: { input: {}; output: GeneralAPISettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/attachment': {
      $get: { input: {}; output: GeneralAttachmentSettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/repository': {
      $get: { input: {}; output: GeneralRepoSettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/ui': {
      $get: { input: {}; output: GeneralUISettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/signing-key.gpg': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/signing-key.pub': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/teams/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { id: bigint } }; output: Team; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { id: number } } & { json: EditTeamOption }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EditTeamOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/teams/:id/activities/feeds': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Activity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/teams/:id/members': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/teams/:id/members/:username': {
      $delete:
        | {
            input: { param: { id: bigint; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { id: bigint; username: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { id: bigint; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/teams/:id/repos': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/teams/:id/repos/:org/:repo': {
      $delete:
        | {
            input: { param: { id: bigint; org: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; org: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { id: bigint; org: string; repo: string } }
            output: Repository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; org: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { id: bigint; org: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; org: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/token': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: CurrentAccessToken; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/topics/search': {
      $get:
        | {
            input: { query: { q: string; page?: number | undefined; limit?: number | undefined } }
            output: TopicListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string; page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & { '/user': { $get: { input: {}; output: User; outputFormat: 'json'; status: 200 } } } & {
    '/user/actions/jobs': {
      $get:
        | {
            input: {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: ActionWorkflowJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: string | undefined
                page?: number | undefined
                limit?: number | undefined
                sort?: string | undefined
                order?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/actions/runners': {
      $get:
        | {
            input: { query: { disabled?: boolean | undefined } }
            output: ActionRunnersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { disabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/actions/runners/registration-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/actions/runners/:runner_id': {
      $delete:
        | { input: { param: { runner_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { runner_id: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { runner_id: string } }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { runner_id: string } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { runner_id: string } } & { json: EditActionRunnerOption }
            output: ActionRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runner_id: string } } & { json: EditActionRunnerOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/actions/runs': {
      $get:
        | {
            input: {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ActionWorkflowRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                event?: string | undefined
                branch?: string | undefined
                status?: string | undefined
                actor?: string | undefined
                head_sha?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/actions/secrets/:secretname': {
      $delete:
        | {
            input: { param: { secretname: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { secretname: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { secretname: string } } & { json: CreateOrUpdateSecretOption }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { secretname: string } } & { json: CreateOrUpdateSecretOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { secretname: string } } & { json: CreateOrUpdateSecretOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/actions/variables': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: ActionVariable[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/actions/variables/:variablename': {
      $delete:
        | {
            input: { param: { variablename: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { variablename: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variablename: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { variablename: string } }
            output: ActionVariable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variablename: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { variablename: string } } & { json: CreateVariableOption }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { variablename: string } } & { json: CreateVariableOption }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { variablename: string } } & { json: UpdateVariableOption }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { variablename: string } } & { json: UpdateVariableOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variablename: string } } & { json: UpdateVariableOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/applications/oauth2': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: OAuth2Application[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateOAuth2ApplicationOptions }
            output: OAuth2Application
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateOAuth2ApplicationOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/applications/oauth2/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: OAuth2Application
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { id: bigint } } & { json: CreateOAuth2ApplicationOptions }
            output: OAuth2Application
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CreateOAuth2ApplicationOptions }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/avatar': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $post: {
        input: { json: UpdateUserAvatarOption }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/user/blocks': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/blocks/:username': {
      $delete:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { username: string } } & { query: { note?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string } } & { query: { note?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/emails': {
      $delete:
        | { input: { json: DeleteEmailOption }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DeleteEmailOption }; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: Email[]; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: CreateEmailOption }; output: Email[]; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateEmailOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/followers': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/following': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/following/:username': {
      $delete:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/gpg_key_token': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/gpg_key_verify': {
      $post:
        | { input: {}; output: GPGKey; outputFormat: 'json'; status: 201 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/gpg_keys': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: GPGKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | { input: { json: CreateGPGKeyOption }; output: GPGKey; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateGPGKeyOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/gpg_keys/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { id: bigint } }; output: GPGKey; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/hooks': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: Hook[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: CreateHookOption }; output: Hook; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/user/hooks/:id': {
      $delete: { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: bigint } }; output: Hook; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: bigint } } & { json: EditHookOption }
        output: Hook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/keys': {
      $get:
        | {
            input: {
              query: {
                fingerprint?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: PublicKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fingerprint?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | { input: { json: CreateKeyOption }; output: PublicKey; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateKeyOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/keys/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { id: bigint } }; output: PublicKey; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/orgs': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: Organization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects': {
      $get: {
        input: {
          query: {
            state?: 'open' | 'closed' | 'all' | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: Project[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateProjectOption }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateProjectOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/projects/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: { param: { id: bigint } }; output: Project; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 200 }
      $patch:
        | {
            input: { param: { id: bigint } } & { json: EditProjectOption }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: EditProjectOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/columns': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ProjectColumn[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { id: bigint } } & { json: CreateProjectColumnOption }
            output: ProjectColumn
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: CreateProjectColumnOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/columns/move': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: MoveProjectColumnsOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { json: MoveProjectColumnsOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/columns/:column_id': {
      $delete:
        | {
            input: { param: { id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { id: bigint; column_id: bigint } }
            output: ProjectColumn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { id: bigint; column_id: bigint } } & { json: EditProjectColumnOption }
            output: ProjectColumn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; column_id: bigint } } & { json: EditProjectColumnOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/columns/:column_id/default': {
      $post:
        | {
            input: { param: { id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; column_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/columns/:column_id/issues': {
      $get:
        | {
            input: { param: { id: bigint; column_id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Issue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; column_id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/columns/:column_id/issues/:issue_id': {
      $delete:
        | {
            input: { param: { id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id: bigint; column_id: bigint; issue_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/issues/:issue_id/move': {
      $post:
        | {
            input: { param: { id: bigint; issue_id: bigint } } & { json: MoveProjectIssueOption }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; issue_id: bigint } } & { json: MoveProjectIssueOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/workflows': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: ProjectWorkflow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { id: bigint } } & { json: CreateProjectWorkflowOption }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: CreateProjectWorkflowOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/projects/:id/workflows/:workflow_id': {
      $delete:
        | {
            input: { param: { id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { id: bigint; workflow_id: bigint } }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; workflow_id: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
      $patch:
        | {
            input: { param: { id: bigint; workflow_id: bigint } } & {
              json: EditProjectWorkflowOption
            }
            output: ProjectWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; workflow_id: bigint } } & {
              json: EditProjectWorkflowOption
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/repos': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: Repository[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateRepoOption }
            output: Repository
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateRepoOption }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/settings': {
      $get: { input: {}; output: UserSettings; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: UserSettingsOptions }
            output: UserSettings
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: UserSettingsOptions }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/starred': {
      $get:
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/starred/:owner/:repo': {
      $delete:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $get:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { owner: string; repo: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/stopwatches': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: StopWatch[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/subscriptions': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: Repository[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/teams': {
      $get: {
        input: { query: { page?: number | undefined; limit?: number | undefined } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/times': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            since?: string | undefined
            before?: string | undefined
          }
        }
        output: TrackedTime[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/search': {
      $get: {
        input: {
          query: {
            q?: string | undefined
            uid?: bigint | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: { data?: User[] | undefined; ok?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/users/:username/activities/feeds': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: {
                'only-performed-by'?: boolean | undefined
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Activity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                'only-performed-by'?: boolean | undefined
                date?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/followers': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/following': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/following/:target': {
      $get:
        | {
            input: { param: { username: string; target: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string; target: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/gpg_keys': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: GPGKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/heatmap': {
      $get:
        | {
            input: { param: { username: string } }
            output: UserHeatmapData[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/users/:username/keys': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: {
                fingerprint?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: PublicKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                fingerprint?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/orgs': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Organization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/orgs/:org/permissions': {
      $get:
        | {
            input: { param: { username: string; org: string } }
            output: OrganizationPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; org: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/projects': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                state?: 'open' | 'closed' | 'all' | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/repos': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/starred': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/subscriptions': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: Repository[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/tokens': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: AccessToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { username: string } } & { json: CreateAccessTokenOption }
            output: AccessToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string } } & { json: CreateAccessTokenOption }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/users/:username/tokens/:token': {
      $delete:
        | {
            input: { param: { username: string; token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/version': { $get: { input: {}; output: ServerVersion; outputFormat: 'json'; status: 200 } }
  },
  '/'
>
export default routes
