type GoogleCloudPolicytroubleshooterV1AccessTuple = {
  fullResourceName?: string | undefined
  permission?: string | undefined
  principal?: string | undefined
}
type GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest = {
  accessTuple?: GoogleCloudPolicytroubleshooterV1AccessTuple | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership = {
  membership?:
    | 'MEMBERSHIP_UNSPECIFIED'
    | 'MEMBERSHIP_INCLUDED'
    | 'MEMBERSHIP_NOT_INCLUDED'
    | 'MEMBERSHIP_UNKNOWN_INFO_DENIED'
    | 'MEMBERSHIP_UNKNOWN_UNSUPPORTED'
    | undefined
  relevance?: 'HEURISTIC_RELEVANCE_UNSPECIFIED' | 'NORMAL' | 'HIGH' | undefined
}
type GoogleCloudPolicytroubleshooterV1BindingExplanation = {
  access?:
    | 'ACCESS_STATE_UNSPECIFIED'
    | 'GRANTED'
    | 'NOT_GRANTED'
    | 'UNKNOWN_CONDITIONAL'
    | 'UNKNOWN_INFO_DENIED'
    | undefined
  condition?: GoogleTypeExpr | undefined
  memberships?:
    | { [x: string]: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership }
    | undefined
  relevance?: 'HEURISTIC_RELEVANCE_UNSPECIFIED' | 'NORMAL' | 'HIGH' | undefined
  role?: string | undefined
  rolePermission?:
    | 'ROLE_PERMISSION_UNSPECIFIED'
    | 'ROLE_PERMISSION_INCLUDED'
    | 'ROLE_PERMISSION_NOT_INCLUDED'
    | 'ROLE_PERMISSION_UNKNOWN_INFO_DENIED'
    | undefined
  rolePermissionRelevance?: 'HEURISTIC_RELEVANCE_UNSPECIFIED' | 'NORMAL' | 'HIGH' | undefined
}
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleCloudPolicytroubleshooterV1ExplainedPolicy = {
  access?:
    | 'ACCESS_STATE_UNSPECIFIED'
    | 'GRANTED'
    | 'NOT_GRANTED'
    | 'UNKNOWN_CONDITIONAL'
    | 'UNKNOWN_INFO_DENIED'
    | undefined
  bindingExplanations?: GoogleCloudPolicytroubleshooterV1BindingExplanation[] | undefined
  fullResourceName?: string | undefined
  policy?: GoogleIamV1Policy | undefined
  relevance?: 'HEURISTIC_RELEVANCE_UNSPECIFIED' | 'NORMAL' | 'HIGH' | undefined
}
type GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse = {
  access?:
    | 'ACCESS_STATE_UNSPECIFIED'
    | 'GRANTED'
    | 'NOT_GRANTED'
    | 'UNKNOWN_CONDITIONAL'
    | 'UNKNOWN_INFO_DENIED'
    | undefined
  errors?: GoogleRpcStatus[] | undefined
  explainedPolicies?: GoogleCloudPolicytroubleshooterV1ExplainedPolicy[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/iam:troubleshoot': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest }
        output: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
