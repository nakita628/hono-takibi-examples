type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type ActingUser = { userEmail?: string | undefined; userId: number }
type PublicApiUserActionEvent = {
  actingUser: ActingUser
  action: string
  category: string
  id: string
  occurredAt: string
  subCategory?: string | undefined
  targetObjectId?: string | undefined
}
type CollectionResponsePublicApiUserActionEventForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicApiUserActionEvent[]
}
type PublicLoginAudit = {
  countryCode?: string | undefined
  email?: string | undefined
  id: string
  ipAddress?: string | undefined
  location?: string | undefined
  loginAt: string
  loginSucceeded: boolean
  regionCode?: string | undefined
  userAgent?: string | undefined
  userId?: number | undefined
}
type CollectionResponsePublicLoginAuditForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicLoginAudit[]
}
type HydratedCriticalAction = {
  actingUser?: string | undefined
  countryCode?: string | undefined
  createdAt: string
  id: string
  infoUrl?: string | undefined
  ipAddress?: string | undefined
  location?: string | undefined
  objectId?: string | undefined
  regionCode?: string | undefined
  type:
    | 'ACCEPTANCE_TEST'
    | 'ACCOUNT_ADDED_TO_MULTI_ACCOUNT_ORGANIZATION'
    | 'ACCOUNT_REMOVED_FROM_MULTI_ACCOUNT_ORGANIZATION'
    | 'ADD_ADMIN_PERMISSIONS'
    | 'ADD_ADMIN_USER'
    | 'ADD_SINGLE_SIGN_ON'
    | 'ADD_TWO_FACTOR_AUTHENTICATION'
    | 'ADD_USER'
    | 'ADD_WEBHOOK_IN_WORKFLOW'
    | 'ALLOWED_GEOLOCATIONS_DISABLED'
    | 'ALLOWED_GEOLOCATIONS_ENABLED'
    | 'ALLOWED_LOGIN_METHODS_DELETE'
    | 'ALLOWED_LOGIN_METHODS_UPDATE'
    | 'ATTACHMENT_LOGGING_DISABLED'
    | 'ATTACHMENT_LOGGING_ENABLED'
    | 'AUTOMATED_INACTIVE_USER_DEACTIVATION_DISABLED'
    | 'AUTOMATED_INACTIVE_USER_DEACTIVATION_ENABLED'
    | 'BOTS_WEBHOOK_POST'
    | 'BOTS_WEBHOOK_UPDATE'
    | 'BOTS_WEBHOOK_VIEWED'
    | 'BULK_EMAIL_DOMAIN_CHANGE'
    | 'CHANGE_AD_EVENT_CONSENT_SETTING'
    | 'CHANGE_AD_EVENT_DATA_SHARING_SETTING'
    | 'CHANGE_PASSWORD'
    | 'CHANNEL_SENSITIVE_DATA_DISABLED'
    | 'CHANNEL_SENSITIVE_DATA_ENABLED'
    | 'CONTACT_DATA_EXPORT'
    | 'CONTACT_OWNER_AUTO_ASSIGN_DISABLED'
    | 'CONTACT_OWNER_AUTO_ASSIGN_ENABLED'
    | 'DATA_ACCESS_REQUEST_SUBMITTED'
    | 'DATA_BACKUP_CREATED'
    | 'DATA_BACKUP_DOWNLOADED'
    | 'DATA_BACKUP_SCHEDULE_CREATED'
    | 'DATA_BACKUP_SCHEDULE_DELETED'
    | 'DATA_BACKUP_SCHEDULE_UPDATED'
    | 'DATA_RESTORE_COMPLETED'
    | 'DATA_SHARING_CONNECTION_ADDED'
    | 'DATA_SHARING_CONNECTION_REMOVED'
    | 'DATASET_SYNC'
    | 'DEACTIVATE_USER'
    | 'DOMAIN_BASED_INVITE_CREATED'
    | 'DOMAIN_BASED_INVITE_REMOVED'
    | 'DOMAIN_BASED_INVITES_DISABLED'
    | 'DOMAIN_BASED_INVITES_ENABLED'
    | 'EMAIL_LOGGING_SYNC_SET_ALL'
    | 'EMAIL_LOGGING_SYNC_SET_CONTACTS'
    | 'EMAIL_LOGGING_SYNC_SET_REPLIES'
    | 'EMAIL_TRACKING_DISABLED'
    | 'EMAIL_TRACKING_ENABLED'
    | 'EXPORT'
    | 'EXPORT_APPROVAL'
    | 'EXPORT_DOWNLOAD'
    | 'EXPORT_USERS'
    | 'FORM_SUBMISSIONS_EXPORT'
    | 'GDPR_DELETE'
    | 'GDPR_TOGGLE_DISABLED'
    | 'GDPR_TOGGLE_ENABLED'
    | 'HAPIKEY_CREATE'
    | 'HAPIKEY_DEACTIVATE'
    | 'HAPIKEY_VIEW'
    | 'HUBSPOT_EMPLOYEE_ACCESS_DISABLED'
    | 'HUBSPOT_EMPLOYEE_ACCESS_ENABLED'
    | 'IMPERSONATE_USER'
    | 'IMPORT'
    | 'INSTALL_INTEGRATION'
    | 'IP_RESTRICTIONS_DISABLED'
    | 'IP_RESTRICTIONS_ENABLED'
    | 'JOINED_PORTAL_VIA_DOMAIN_BASED_INVITE'
    | 'LEGAL_BASIS_REQUIREMENT_DISABLED'
    | 'LEGAL_BASIS_REQUIREMENT_ENABLED'
    | 'LIVE_CHAT_SENSITIVE_DATA_DISABLED'
    | 'LIVE_CHAT_SENSITIVE_DATA_ENABLED'
    | 'MANUAL_PASSWORD_RESET_EMAIL_SEND'
    | 'MANUAL_REGISTRATION_EMAIL_SEND'
    | 'MARKETING_CONTACTS_APP_SETTINGS_DISABLED'
    | 'MARKETING_CONTACTS_APP_SETTINGS_ENABLED'
    | 'MERGE_REVERT'
    | 'MODIFY_WEBHOOK_IN_WORKFLOW'
    | 'MULTI_ACCOUNT_REPORTING_CONNECTION_ADDED'
    | 'MULTI_ACCOUNT_REPORTING_CONNECTION_REMOVED'
    | 'MULTI_ACCOUNT_WORKFLOWS_CONNECTION_ADDED'
    | 'MULTI_ACCOUNT_WORKFLOWS_CONNECTION_REMOVED'
    | 'NEVER_LOG_FOR_PORTAL_ADDITION'
    | 'NEVER_LOG_FOR_PORTAL_DELETION'
    | 'NEVER_LOG_FOR_USER_ADDITION'
    | 'NEVER_LOG_FOR_USER_DELETION'
    | 'PASSKEY_ADDED'
    | 'PASSKEY_DELETED'
    | 'PAYMENT_ACCOUNT_CREATION'
    | 'PAYMENT_ACCOUNT_INFO_UPDATE'
    | 'PAYMENT_BANK_ACCOUNT_CHANGE'
    | 'PAYMENT_ONBOARDING_LINK_SEND'
    | 'PERSONAL_ACCESS_KEY_CREATE'
    | 'PERSONAL_ACCESS_KEY_DEACTIVATE'
    | 'PERSONAL_ACCESS_KEY_ROTATE'
    | 'PERSONAL_ACCESS_KEY_VIEW'
    | 'PRIVATE_APP_ACCESS_TOKEN_CREATE'
    | 'PRIVATE_APP_ACCESS_TOKEN_DEACTIVATE'
    | 'PRIVATE_APP_ACCESS_TOKEN_ROTATE'
    | 'PRIVATE_APP_ACCESS_TOKEN_VIEW'
    | 'PRIVATE_APP_CLIENT_SECRET_VIEW'
    | 'PRIVATE_APP_CLIENT_SECRET_WRITE'
    | 'PRIVATE_APP_SCOPE_GROUPS_UPDATE'
    | 'PRODUCTION_DEPLOYMENT'
    | 'PROPERTY_HISTORY_REVISION'
    | 'PUBLIC_APP_CLIENT_SECRET_VIEW'
    | 'PUBLIC_APP_CLIENT_SECRET_WRITE'
    | 'REACTIVATE_USER'
    | 'REMOVE_ADMIN_PERMISSIONS'
    | 'REMOVE_ADMIN_USER'
    | 'REMOVE_SINGLE_SIGN_ON'
    | 'REMOVE_TWO_FACTOR_AUTHENTICATION'
    | 'REMOVE_USER'
    | 'REQUIRE_SINGLE_SIGN_ON'
    | 'RESTRICTED_LIST_ADDED_TO_CONTENT'
    | 'SANDBOX_CREATION'
    | 'SANDBOX_DELETION'
    | 'SANDBOX_SYNC'
    | 'SANDBOX_SYNC_TO_PRODUCTION'
    | 'SECRET_ADDED_TO_SERVERLESS_FUNCTION'
    | 'SENSITIVE_DATA_DISABLED'
    | 'SENSITIVE_DATA_ENABLED'
    | 'SEQUENCE_CLONED'
    | 'SEQUENCE_CREATED'
    | 'SEQUENCE_ENROLLMENT_INITIATED'
    | 'SEQUENCE_ENROLLMENT_STATE_CHANGED'
    | 'SEQUENCE_MODIFIED'
    | 'SERVICE_KEY_AUTO_ROTATE'
    | 'SERVICE_KEY_CREATE'
    | 'SERVICE_KEY_DEACTIVATE'
    | 'SERVICE_KEY_PERMISSIONS_UPDATE'
    | 'SERVICE_KEY_REVEAL'
    | 'SERVICE_KEY_ROTATE'
    | 'SERVICE_KEY_ROTATION_SCHEDULE_REMOVED'
    | 'SERVICE_KEY_ROTATION_SCHEDULE_SET'
    | 'SERVICE_KEY_ROTATION_SCHEDULE_UPDATED'
    | 'SMTP_TOKEN_CREATED'
    | 'SMTP_TOKEN_DELETED'
    | 'SMTP_TOKEN_PASSWORD_RESET'
    | 'SMTP_TOKEN_RETRIEVED'
    | 'TEAM_ADDED'
    | 'TEAM_DELETED'
    | 'TEAM_USER_ADDED'
    | 'TEAM_USER_DELETED'
    | 'TEMPLATE_DELETED'
    | 'TEMPLATE_MODIFIED'
    | 'TOUCHLESS_PURCHASE'
    | 'TWO_FACTOR_PROTECTED_ENDPOINT_BLOCKED'
    | 'TWO_FACTOR_PROTECTED_ENDPOINT_SUCCEEDED'
    | 'UNIFIED_RESTORE_UNDO_EXECUTION'
    | 'UNINSTALL_INTEGRATION'
    | 'UNREQUIRE_SINGLE_SIGN_ON'
    | 'WEBHOOK_SETTINGS_UPDATE'
    | 'WEBHOOK_SUBSCRIPTION_CREATE'
    | 'WEBHOOK_SUBSCRIPTION_UPDATE'
  userId: number
}
type CollectionResponseHydratedCriticalActionForwardPaging = {
  paging?: ForwardPaging | undefined
  results: HydratedCriticalAction[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account-info/2026-09/activity/audit-logs': {
      $get:
        | {
            input: {
              query: {
                actingUserId?: unknown
                after?: string
                fillFinalTimestamp?: string
                limit?: unknown
                occurredAfter?: string
                occurredBefore?: string
                sort?: unknown
              }
            }
            output: CollectionResponsePublicApiUserActionEventForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                actingUserId?: unknown
                after?: string
                fillFinalTimestamp?: string
                limit?: unknown
                occurredAfter?: string
                occurredBefore?: string
                sort?: unknown
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/account-info/2026-09/activity/login': {
      $get:
        | {
            input: { query: { after?: string; limit?: unknown; userId?: unknown } }
            output: CollectionResponsePublicLoginAuditForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string; limit?: unknown; userId?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/account-info/2026-09/activity/security': {
      $get:
        | {
            input: {
              query: {
                after?: string
                fromTimestamp?: unknown
                limit?: unknown
                toTimestamp?: unknown
                userId?: unknown
              }
            }
            output: CollectionResponseHydratedCriticalActionForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string
                fromTimestamp?: unknown
                limit?: unknown
                toTimestamp?: unknown
                userId?: unknown
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  },
  '/'
>
export default routes
