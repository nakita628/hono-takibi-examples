type AccountAutoCollection = 'on' | 'off'
type AccountBalance = number
type CurrencyCode = string
type FreeTargetQuantity = number
type HasUsedTrial = boolean
type AccountNextBillingAt = string
type PlanAllowedScanProfiles = string[]
type PlanChargeModel = 'per_unit' | 'flat_fee'
type Desc = string
type Id = string
type PlanIsTrial = boolean
type Name = string
type BillingPeriod = string
type BillingPeriodUnit = 'month' | 'year'
type Price = number
type Plan = {
  allowed_scan_profiles?: PlanAllowedScanProfiles | undefined
  charge_model?: PlanChargeModel | undefined
  currency_code?: CurrencyCode | undefined
  description?: Desc | undefined
  id?: Id | undefined
  is_trial?: PlanIsTrial | undefined
  name?: Name | undefined
  period?: BillingPeriod | undefined
  period_unit?: BillingPeriodUnit | undefined
  price?: Price | undefined
}
type PlanTargetQuantity = number
type PoolSize = number
type AccountStatus = 'active' | 'trial_ended' | 'canceled'
type TrialEnd = string
type Account = {
  auto_collection?: AccountAutoCollection | undefined
  balance?: AccountBalance | undefined
  balance_currency_code?: CurrencyCode | undefined
  free_target_quantity?: FreeTargetQuantity | undefined
  has_used_trial?: HasUsedTrial | undefined
  heroku?: boolean | undefined
  next_billing_at?: AccountNextBillingAt | undefined
  plan?: Plan | undefined
  plan_target_quantity?: PlanTargetQuantity | undefined
  pool_size?: PoolSize | undefined
  status?: AccountStatus | undefined
  trialEnd?: TrialEnd | undefined
}
type Password = string
type Username = string
type Login = { password: Password; username: Username }
type Token = string
type Ttl = number
type TokenBody = string
type Address = string
type City = string
type Country = string
type Email = string
type FirstName = string
type LastName = string
type RegistrationNumber = string
type Vat = string
type ZipCode = string
type Billing = {
  address: Address
  city: City
  country: Country
  email: Email
  first_name: FirstName
  last_name: LastName
  other?: string | undefined
  reg_number?: RegistrationNumber | undefined
  vat_number: Vat
  zip: ZipCode
}
type TargetIds = Id[]
type Action = { action?: null | 'trial' | 'plan' | 'subscribe' | undefined }
type Coupons = string[]
type AccountPlanId = string
type Subscription = {
  coupon_ids?: Coupons | undefined
  plan_id?: AccountPlanId | undefined
  target_ids?: TargetIds | undefined
}
type Invoice = {
  amount_due?: number | undefined
  amount_paid?: number | undefined
  currency_code?: CurrencyCode | undefined
  discounts?: { amount?: number | undefined; description?: string | undefined }[] | undefined
  line_items?:
    | {
        amount?: number | undefined
        description?: string | undefined
        discount_amount?: number | undefined
        quantity?: number | undefined
        tax_amount?: number | undefined
        unit_amount?: number | undefined
      }[]
    | undefined
  plan?: string | undefined
  plan_id?: AccountPlanId | undefined
  sub_total?: number | undefined
  taxes?:
    | {
        tax_amount?: number | undefined
        tax_name?: string | undefined
        tax_rate?: number | undefined
      }[]
    | undefined
  total?: number | undefined
}
type EmailToken = string
type PaginationCount = number
type PaginationLength = number
type PaginationPage = number
type PaginationPageTotal = number
type Changed = string
type UserEmail = string
type UserId = string
type UserName = string
type ChangedBy = {
  email?: UserEmail | undefined
  id?: UserId | undefined
  name?: UserName | undefined
}
type UserIsActive = boolean
type UserIsAdmin = boolean
type UserIsBillingAdmin = boolean
type UserTitle = 'ceo' | 'cto' | 'cso' | 'seceng' | 'dev' | 'devop' | 'manager' | 'other'
type User = {
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  email?: UserEmail | undefined
  id?: Id | undefined
  is_active?: UserIsActive | undefined
  is_admin?: UserIsAdmin | undefined
  is_billing_admin?: UserIsBillingAdmin | undefined
  name?: UserName | undefined
  title?: UserTitle | undefined
}
type ScanProfile = 'safe' | 'normal' | 'full' | 'lightning'
type Cookies = { name?: string | undefined; value?: string | undefined }[]
type Headers = { name?: string | undefined; value?: string | undefined }[]
type Host = string
type Include = boolean
type FrameworkNames = string
type Stack = FrameworkNames[]
type VerificationDate = string
type VerificationLastError = string
type VerificationMethod = 'dns' | 'file'
type VerificationToken = string
type Verified = boolean
type Asset = {
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  cookies?: Cookies | undefined
  desc?: Desc | undefined
  headers?: Headers | undefined
  host?: Host | undefined
  id?: Id | undefined
  include?: Include | undefined
  name?: Name | undefined
  stack?: Stack | undefined
  verification_date?: VerificationDate | undefined
  verification_last_error?: VerificationLastError | undefined
  verification_method?: VerificationMethod | undefined
  verification_token?: VerificationToken | undefined
  verified?: Verified | undefined
}
type ConnectedTarget = string
type Enabled = boolean
type Environment = 'testing' | 'production'
type ReportType = 'default' | 'owasp' | 'pci'
type BasicAuthUsername = string
type BasicAuth = { password?: Password | undefined; username?: BasicAuthUsername | undefined }
type FormLogin = { name?: string | undefined; value?: string | undefined }[]
type FormLoginCheckPattern = string
type FormLoginUrl = string
type HasBasicAuth = boolean
type HasFormLogin = boolean
type SiteHost = string
type SiteUrl = string
type Whitelist = string[]
type Site = {
  basic_auth?: BasicAuth | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  cookies?: Cookies | undefined
  desc?: Desc | undefined
  form_login?: FormLogin | undefined
  form_login_check_pattern?: FormLoginCheckPattern | undefined
  form_login_url?: FormLoginUrl | undefined
  has_basic_auth?: HasBasicAuth | undefined
  has_form_login?: HasFormLogin | undefined
  headers?: Headers | undefined
  host?: SiteHost | undefined
  id?: Id | undefined
  name?: Name | undefined
  stack?: Stack | undefined
  url?: SiteUrl | undefined
  verification_date?: VerificationDate | undefined
  verification_last_error?: VerificationLastError | undefined
  verification_method?: VerificationMethod | undefined
  verification_token?: VerificationToken | undefined
  verified?: Verified | undefined
  whitelist?: Whitelist | undefined
}
type TargetType = 'free' | 'single' | 'multi'
type Target = {
  allowed_scan_profiles?: { id?: ScanProfile | undefined; name?: string | undefined }[] | undefined
  assets?: Asset[] | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  connected_target?: ConnectedTarget | undefined
  enabled?: Enabled | undefined
  environment?: Environment | undefined
  id?: Id | undefined
  labels?: string[] | undefined
  name?: Name | undefined
  report_type?: ReportType | undefined
  scan_profile?: ScanProfile | undefined
  site?: Site | undefined
  type?: TargetType | undefined
}
type ScanCompleted = string
type Created = string
type CreatedBy = {
  email?: UserEmail | undefined
  id?: UserId | undefined
  name?: UserName | undefined
}
type ScanStarted = string
type ScanStatus =
  | 'queued'
  | 'started'
  | 'under_review'
  | 'completed'
  | 'completed_with_errors'
  | 'failed'
  | 'canceled'
  | 'canceling'
type TargetSimple = {
  desc?: Desc | undefined
  id?: Id | undefined
  name?: Name | undefined
  stack?: Stack | undefined
  url?: string | undefined
}
type Scan = {
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  completed?: ScanCompleted | undefined
  crawler?:
    | {
        error?: string[] | undefined
        state?: 'started' | 'ended' | undefined
        status?: { '0'?: number | undefined; '1'?: number | undefined } | undefined
        warning?: string[] | undefined
      }
    | undefined
  created?: Created | undefined
  created_by?: CreatedBy | undefined
  fingerprinter?:
    | {
        count?: number | undefined
        error?: string[] | undefined
        state?: 'started' | 'ended' | undefined
        warning?: string[] | undefined
      }
    | undefined
  highs?: number | undefined
  id?: Id | undefined
  lows?: number | undefined
  mediums?: number | undefined
  scan_profile?: ScanProfile | undefined
  scanner?:
    | {
        error?: string[] | undefined
        state?: 'started' | 'ended' | undefined
        status?: { '0'?: number | undefined; '1'?: number | undefined } | undefined
        warning?: string[] | undefined
      }
    | undefined
  started?: ScanStarted | undefined
  status?: ScanStatus | undefined
  target?: TargetSimple | undefined
}
type Assignee = {
  email?: UserEmail | undefined
  id?: UserId | undefined
  name?: UserName | undefined
}
type FindingCVSSScore = number
type FindingCVSSVector = string
type Definition = { desc?: string | undefined; id?: string | undefined; name?: string | undefined }
type FindingInsertionPoint =
  | 'cookie'
  | 'header'
  | 'parameter'
  | 'arbitrary_url_param_name'
  | 'url_path_folder'
  | ''
type Method = 'GET' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD'
type Reporter = {
  email?: UserEmail | undefined
  id?: UserId | undefined
  name?: UserName | undefined
}
type Requests = { request?: string | undefined; response?: string | undefined }[]
type FindingSeverity = 10 | 20 | 30
type FindingState = 'notfixed' | 'invalid' | 'accepted' | 'fixed'
type Finding = {
  assignee?: Assignee | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  comment?: string | undefined
  cvss_score?: FindingCVSSScore | undefined
  cvss_vector?: FindingCVSSVector | undefined
  definition?: Definition | undefined
  evidence?: string | undefined
  extra?: string | undefined
  fix?: string | undefined
  id?: Id | undefined
  insertion_point?: FindingInsertionPoint | undefined
  labels?: string[] | undefined
  last_found?: string | undefined
  method?: Method | undefined
  parameter?: string | undefined
  params?: string | undefined
  path?: string | undefined
  reporter?: Reporter | undefined
  requests?: Requests | undefined
  scans?: string[] | undefined
  severity?: FindingSeverity | undefined
  state?: FindingState | undefined
  target?: TargetSimple | undefined
  url?: string | undefined
  value?: string | undefined
}
type EventContent = User | Target | Scan | Finding
type EventType =
  | 'user_created'
  | 'user_deleted'
  | 'target_created'
  | 'target_deleted'
  | 'target_verified'
  | 'target_verification_failed'
  | 'scan_started'
  | 'scan_canceled'
  | 'scan_completed'
  | 'scan_failed'
  | 'finding_detected'
  | 'finding_fixed'
type EventObjectType = 'user' | 'target' | 'scan' | 'finding'
type EventOccurredAt = string
type WebhookApiVersion = 'v1'
type WebhookCheckCert = boolean
type WebhookURL = string
type Webhook = {
  api_version?: WebhookApiVersion | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  check_cert?: WebhookCheckCert | undefined
  created?: Changed | undefined
  created_by?: ChangedBy | undefined
  id?: Id | undefined
  name?: Name | undefined
  url: WebhookURL
}
type WebhookList = Webhook[]
type Event = {
  content?: EventContent | undefined
  event_type?: EventType | undefined
  id?: Id | undefined
  object_type?: EventObjectType | undefined
  ocurred_at?: EventOccurredAt | undefined
  webhooks?: WebhookList | undefined
}
type Framework = { desc?: string | undefined; id?: Id | undefined; name?: Id | undefined }
type IntegrationFields = {
  heroku?: boolean | undefined
  jira_cloud?: boolean | undefined
  jira_server?: boolean | undefined
  slack?: boolean | undefined
}
type Integrations = {
  available?: IntegrationFields | undefined
  installed?: IntegrationFields | undefined
}
type JiraProject = { id?: string | undefined; name?: string | undefined }
type JiraIssueType = { id?: string | undefined; name?: string | undefined }
type JiraIssuePriority = { id?: string | undefined; name?: string | undefined }
type JiraIssueStatus = { id?: string | undefined; name?: string | undefined }
type Key = { id?: Id | undefined; key?: Token | undefined; name?: Id | undefined }
type APIKey = { id?: Id | undefined; key?: Token | undefined; name?: Name | undefined }
type Label = { id?: Id | undefined; name?: Name | undefined }
type Actions = {
  action?:
    | 'edit'
    | 'delete'
    | 'trial'
    | 'plan'
    | 'subscribe'
    | 'unsubscribe'
    | 'archive'
    | 'activate'
    | undefined
  label?: string | undefined
}[]
type ScanDateTime = string
type Recurrence = 'd' | 'w' | 'm' | 'q' | ''
type Scheduled = {
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  date_time?: ScanDateTime | undefined
  id?: string | undefined
  recurrence?: Recurrence | undefined
  target?: TargetSimple | undefined
}
type VerificationType = 'dns' | 'file'
type FindingBulkIds = { ids: string[] }
type FindingBulkRetest = { ids: string[]; scan_profile?: ScanProfile | undefined }
type FindingBulkUpdate = {
  ids: string[]
  assignee?: Assignee | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  comment?: string | undefined
  cvss_score?: FindingCVSSScore | undefined
  cvss_vector?: FindingCVSSVector | undefined
  definition?: Definition | undefined
  evidence?: string | undefined
  extra?: string | undefined
  fix?: string | undefined
  id?: Id | undefined
  insertion_point?: FindingInsertionPoint | undefined
  labels?: string[] | undefined
  last_found?: string | undefined
  method?: Method | undefined
  parameter?: string | undefined
  params?: string | undefined
  path?: string | undefined
  reporter?: Reporter | undefined
  requests?: Requests | undefined
  scans?: string[] | undefined
  severity?: FindingSeverity | undefined
  state?: FindingState | undefined
  target?: TargetSimple | undefined
  url?: string | undefined
  value?: string | undefined
}
type FindingUpdate = {
  assignee?: Assignee | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  comment?: string | undefined
  cvss_score?: FindingCVSSScore | undefined
  cvss_vector?: FindingCVSSVector | undefined
  definition?: Definition | undefined
  evidence?: string | undefined
  extra?: string | undefined
  fix?: string | undefined
  id?: Id | undefined
  insertion_point?: FindingInsertionPoint | undefined
  labels?: string[] | undefined
  last_found?: string | undefined
  method?: Method | undefined
  parameter?: string | undefined
  params?: string | undefined
  path?: string | undefined
  reporter?: Reporter | undefined
  requests?: Requests | undefined
  scans?: string[] | undefined
  severity?: FindingSeverity | undefined
  state?: FindingState | undefined
  target?: TargetSimple | undefined
  url?: string | undefined
  value?: string | undefined
}
type JiraIssueId = string
type JiraSelectiveSync = boolean
type JiraFinding = {
  issue_id?: JiraIssueId | undefined
  selective_sync?: JiraSelectiveSync | undefined
}
type Activity = {
  change?: 'created' | 'comment' | 'found' | 'changed' | undefined
  changed?: Changed | undefined
  changed_by?: ChangedBy | undefined
  field?: string | undefined
  old_value?: string | undefined
  value?: string | undefined
}
type JiraAllowJira = boolean
type JiraAutoSync = boolean
type JiraIssueTypeId = string
type JiraPriorityMapping = {
  '10'?: string | undefined
  '20'?: string | undefined
  '30'?: string | undefined
}
type JiraProjectId = string
type JiraStatusMapping = {
  accepted?: string | undefined
  fixed?: string | undefined
  invalid?: string | undefined
  notfixed?: string | undefined
}
type JiraScope = {
  allow_jira?: JiraAllowJira | undefined
  auto_sync?: JiraAutoSync | undefined
  issue_type_id?: JiraIssueTypeId | undefined
  priority_mapping?: JiraPriorityMapping | undefined
  project_id?: JiraProjectId | undefined
  status_mapping?: JiraStatusMapping | undefined
}
type Slack = {
  notify_finding_fixed?: boolean | undefined
  notify_high_findings?: boolean | undefined
  notify_low_findings?: boolean | undefined
  notify_medium_findings?: boolean | undefined
  notify_scan_completed?: boolean | undefined
  notify_scan_started?: boolean | undefined
  webhook_url?: string | undefined
}
type VulnerabilityDefinition = {
  changed?: Changed | undefined
  desc?: Desc | undefined
  id?: Id | undefined
  name?: Name | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account/': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/auth/obtain/': {
      $post:
        | {
            input: { json: Login }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Login }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Login }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/refresh/': {
      $post:
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/revoke/': {
      $post:
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/verify/': {
      $post:
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billing/': {
      $get: { input: {}; output: Billing; outputFormat: 'json'; status: 200 }
      $patch:
        | { input: { json: Billing }; output: Billing; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Billing }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Billing }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | { input: { json: Billing }; output: Billing; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Billing }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Billing }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/billing/actions/': {
      $post: { input: { json: TargetIds }; output: Action; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/billing/estimate/': {
      $post:
        | { input: { json: Subscription }; output: Invoice; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Subscription }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Subscription }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Subscription }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/billing/subscribe/': {
      $post:
        | { input: { json: Subscription }; output: Invoice; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Subscription }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Subscription }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Subscription }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/check/': {
      $post:
        | {
            input: { json: { token: EmailToken } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: EmailToken } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/enterprise/auth/obtain/': {
      $post:
        | {
            input: { json: Login }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Login }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Login }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/enterprise/auth/refresh/': {
      $post:
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/enterprise/auth/revoke/': {
      $post:
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/enterprise/auth/verify/': {
      $post:
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { token?: Token | undefined; ttl?: Ttl | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: TokenBody | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events/': {
      $get:
        | {
            input: {}
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Event[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/events/:id/': {
      $get:
        | { input: { param: { id: Id } }; output: Event; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/frameworks/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Framework[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/frameworks/:id/': {
      $get:
        | { input: { param: { id: Id } }; output: Framework; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/': {
      $get:
        | { input: {}; output: Integrations; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/integrations/jira-cloud/projects/': {
      $get:
        | { input: {}; output: JiraProject[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/integrations/jira-cloud/projects/:project_id/issue_types/': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: JiraIssueType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/jira-cloud/projects/:project_id/issue_types/:issue_type_id/priorities/': {
      $get:
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: JiraIssuePriority[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/integrations/jira-cloud/projects/:project_id/issue_types/:issue_type_id/status/': {
      $get:
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: JiraIssueStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/jira-server/projects/': {
      $get:
        | { input: {}; output: JiraProject[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/integrations/jira-server/projects/:project_id/issue_types/': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: JiraIssueType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/jira-server/projects/:project_id/issue_types/:issue_type_id/priorities/': {
      $get:
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: JiraIssuePriority[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/integrations/jira-server/projects/:project_id/issue_types/:issue_type_id/status/': {
      $get:
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: JiraIssueStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; issue_type_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/keys/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Key[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: APIKey }; output: APIKey; outputFormat: 'json'; status: 201 }
        | {
            input: { json: APIKey }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: APIKey }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/keys/:id/': {
      $delete:
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | { input: { param: { id: Id } }; output: APIKey; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/labels/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Label[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | { input: { json: Label }; output: Label; outputFormat: 'json'; status: 201 }
        | {
            input: { json: Label }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Label }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/labels/:id/': {
      $delete:
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
      $get:
        | { input: { param: { id: Id } }; output: Label; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: Id } } & { json: Label }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: Label }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & { json: Label }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: Id } } & { json: Label }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: Label }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & { json: Label }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & { json: Label }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & { '/plans/': { $get: { input: {}; output: Plan[]; outputFormat: 'json'; status: 200 } } } & {
    '/profile/': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            length?: number | undefined
            ordering?: string | undefined
            search?: string | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/profile/change_password/': {
      $post:
        | {
            input: { json: { confpassword: {}; current_password: {}; password: {} } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { confpassword: {}; current_password: {}; password: {} } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { confpassword: {}; current_password: {}; password: {} } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/reset/': {
      $post:
        | {
            input: { json: { email: Username } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: Username } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/setpassword/': {
      $post:
        | {
            input: { json: { confpassword: {}; password: {}; token: EmailToken } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { confpassword: {}; password: {}; token: EmailToken } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/target-actions/': {
      $post: { input: { json: TargetIds }; output: Actions; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/targets/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              pagination_count?: PaginationCount | undefined
              results?: Target[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: Target }; output: Target; outputFormat: 'json'; status: 201 }
        | {
            input: { json: Target }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/targets/activate/': {
      $post:
        | { input: { json: TargetIds }; output: TargetIds; outputFormat: 'json'; status: 200 }
        | {
            input: { json: TargetIds }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TargetIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TargetIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/targets/all/average_fix_time/': {
      $get: {
        input: {}
        output: {
          results?:
            | { high?: number | undefined; low?: number | undefined; medium?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/all/needs_attention_pie/': {
      $get: {
        input: {}
        output: {
          '0'?:
            | { '0'?: string | undefined; '1'?: number | undefined; '2'?: string | undefined }
            | undefined
          '1'?:
            | { '0'?: string | undefined; '1'?: number | undefined; '2'?: string | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/all/needs_attention_top/': {
      $get: {
        input: {}
        output: {
          highs?: number | undefined
          id?: string | undefined
          lows?: number | undefined
          mediums?: number | undefined
          name?: string | undefined
          url?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/all/risk_trend/': {
      $get: {
        input: {}
        output: { '0'?: string | undefined; '1'?: number | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/all/scans/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
                started?: string[] | undefined
                status?: ScanStatus | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Scan[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
                started?: string[] | undefined
                status?: ScanStatus | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/targets/all/scheduledscans/expanded/': {
      $get:
        | {
            input: { query: { length?: number | undefined } }
            output: { results?: Scheduled[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { length?: number | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/all/severity_trend/': {
      $get: {
        input: {}
        output: {
          results?:
            | {
                high?: { '0'?: string | undefined; '1'?: number | undefined }[] | undefined
                low?: { '0'?: string | undefined; '1'?: number | undefined }[] | undefined
                medium?: { '0'?: string | undefined; '1'?: number | undefined }[] | undefined
              }
            | undefined
          step?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/all/top_vulns/': {
      $get: {
        input: {}
        output: { '0'?: string | undefined; '1'?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/archive/': {
      $post:
        | { input: { json: TargetIds }; output: TargetIds; outputFormat: 'json'; status: 200 }
        | {
            input: { json: TargetIds }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TargetIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TargetIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/targets/archived/': {
      $post:
        | {
            input: { json: TargetIds }
            output: {
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              pagination_count?: PaginationCount | undefined
              results?: Target[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TargetIds }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TargetIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TargetIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/targets/:id/': {
      $delete:
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: Id } }; output: Target; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: Id } } & { json: Target }
            output: Target
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: Id } } & { json: Target }
            output: Target
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: Target }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/assets/': {
      $get:
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Asset[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { target_id: Id } } & { json: Asset }
            output: Asset
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { target_id: Id } } & { json: Asset }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/assets/:id/': {
      $delete:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Asset }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/assets/:id/verify/': {
      $post:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: { type: VerificationType } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: { type: VerificationType } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: { type: VerificationType } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: { type: VerificationType } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: { type: VerificationType } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/average_fix_time/': {
      $get: {
        input: { param: { target_id: Id } }
        output: {
          results?:
            | { high?: number | undefined; low?: number | undefined; medium?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/:target_id/events/': {
      $get:
        | {
            input: { param: { target_id: Id } }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Event[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/events/:id/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/': {
      $get:
        | {
            input: { param: { target_id: Id } } & {
              query: {
                scan?: string[] | undefined
                severity?: FindingSeverity | undefined
                state?: FindingState | undefined
                assignee?: string[] | undefined
                label?: string[] | undefined
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Finding[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                scan?: string[] | undefined
                severity?: FindingSeverity | undefined
                state?: FindingState | undefined
                assignee?: string[] | undefined
                label?: string[] | undefined
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                scan?: string[] | undefined
                severity?: FindingSeverity | undefined
                state?: FindingState | undefined
                assignee?: string[] | undefined
                label?: string[] | undefined
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/bulk/report/': {
      $post:
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkIds }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkIds }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkIds }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/bulk/retest/': {
      $post:
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkRetest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkRetest }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkRetest }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkRetest }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/bulk/update/': {
      $patch:
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkUpdate }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkUpdate }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: FindingBulkUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/report/': {
      $get:
        | {
            input: { param: { target_id: Id } } & { query: { token: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { query: { token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { query: { token: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { query: { token: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/:id/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Finding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: Finding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: Finding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: FindingUpdate }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/:id/integrations/jira-cloud/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: JiraFinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: JiraFinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: JiraFinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/:id/integrations/jira-server/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: JiraFinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: JiraFinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: JiraFinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: JiraFinding }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/:id/log/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Activity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/findings/:id/retest/': {
      $post:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Scan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/integrations/': {
      $get:
        | {
            input: { param: { target_id: Id } }
            output: Integrations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/targets/:target_id/integrations/jira-cloud/': {
      $get:
        | {
            input: { param: { target_id: Id } }
            output: JiraScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: JiraScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: JiraScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/integrations/jira-server/': {
      $get:
        | {
            input: { param: { target_id: Id } }
            output: JiraScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: JiraScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: JiraScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: JiraScope }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/integrations/slack/': {
      $get:
        | { input: { param: { target_id: Id } }; output: Slack; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: Slack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: Slack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: Slack }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/keys/': {
      $get:
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Key[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { target_id: Id } } & { json: APIKey }
            output: APIKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { target_id: Id } } & { json: APIKey }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: APIKey }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: APIKey }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: APIKey }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/keys/:id/': {
      $delete:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: APIKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/risk_trend/': {
      $get: {
        input: { param: { target_id: Id } }
        output: { '0'?: string | undefined; '1'?: number | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/:target_id/scan_now/': {
      $post:
        | {
            input: { param: { target_id: Id } } & {
              json: { scan_profile?: 'safe' | 'normal' | 'full' | 'lightning' | undefined }
            }
            output: Scan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { scan_profile?: 'safe' | 'normal' | 'full' | 'lightning' | undefined }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { scan_profile?: 'safe' | 'normal' | 'full' | 'lightning' | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { scan_profile?: 'safe' | 'normal' | 'full' | 'lightning' | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { scan_profile?: 'safe' | 'normal' | 'full' | 'lightning' | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/': {
      $get:
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
                started?: string[] | undefined
                status?: ScanStatus | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Scan[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
                started?: string[] | undefined
                status?: ScanStatus | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
                started?: string[] | undefined
                status?: ScanStatus | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/dates/': {
      $get:
        | {
            input: { param: { target_id: Id } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/retrieve_page/': {
      $get:
        | {
            input: { param: { target_id: Id } } & {
              query: { length?: number | undefined; date: string }
            }
            output: { page?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              query: { length?: number | undefined; date: string }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & {
              query: { length?: number | undefined; date: string }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              query: { length?: number | undefined; date: string }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Scan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/cancel/': {
      $post:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Scan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/endpoints/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/report/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/report/default/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/report/owasp/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scans/:id/report/pci/': {
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scheduledscans/': {
      $get:
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Scheduled[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { target_id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: Scheduled
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scheduledscans/expanded/': {
      $get:
        | {
            input: { param: { target_id: Id } } & { query: { length?: number | undefined } }
            output: { results?: Scheduled[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { query: { length?: number | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/scheduledscans/:id/': {
      $delete:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Scheduled
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: Scheduled
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: Scheduled
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & {
              json: { date_time: ScanDateTime; recurrence?: Recurrence | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/severity_trend/': {
      $get: {
        input: { param: { target_id: Id } }
        output: {
          results?:
            | {
                high?: { '0'?: string | undefined; '1'?: number | undefined }[] | undefined
                low?: { '0'?: string | undefined; '1'?: number | undefined }[] | undefined
                medium?: { '0'?: string | undefined; '1'?: number | undefined }[] | undefined
              }
            | undefined
          step?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/:target_id/site/': {
      $get:
        | { input: { param: { target_id: Id } }; output: Site; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: Site
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: Site
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: Site }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/site/verify/': {
      $post:
        | {
            input: { param: { target_id: Id } } & { json: { type: VerificationType } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } } & { json: { type: VerificationType } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: { type: VerificationType } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: { type: VerificationType } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: { type: VerificationType } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/top_vulns/': {
      $get: {
        input: { param: { target_id: Id } }
        output: { '0'?: string | undefined; '1'?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targets/:target_id/webhooks/': {
      $get:
        | {
            input: { param: { target_id: Id } }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Webhook[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { target_id: Id } } & { json: Webhook }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { target_id: Id } } & { json: Webhook }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/targets/:target_id/webhooks/:id/': {
      $delete:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { target_id: Id; id: Id } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { target_id: Id; id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: User[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post: {
        input: {
          json: {
            email: UserEmail
            is_admin?: UserIsAdmin | undefined
            name: UserName
            title?: UserTitle | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:id/': {
      $delete:
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: Id } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } } & {
              json: {
                email: UserEmail
                is_admin?: UserIsAdmin | undefined
                name: UserName
                title?: UserTitle | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/vulnerability_definitions/': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: VulnerabilityDefinition[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                length?: number | undefined
                ordering?: string | undefined
                search?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/vulnerability_definitions/:id/': {
      $get:
        | {
            input: { param: { id: Id } }
            output: VulnerabilityDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/webhooks/': {
      $get:
        | {
            input: {}
            output: {
              count?: PaginationCount | undefined
              length?: PaginationLength | undefined
              page?: PaginationPage | undefined
              page_total?: PaginationPageTotal | undefined
              results?: Webhook[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { detail?: string | undefined }; outputFormat: 'json'; status: 403 }
      $post:
        | { input: { json: Webhook }; output: Webhook; outputFormat: 'json'; status: 201 }
        | {
            input: { json: Webhook }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhooks/:id/': {
      $delete:
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: Id } }; output: Webhook; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: {
              '<field name>'?: string[] | undefined
              non_field_errors?: string[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: Webhook }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
