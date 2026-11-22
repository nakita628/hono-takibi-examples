type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues = {
  allowedValues?: string[] | undefined
  deniedValues?: string[] | undefined
}
type GoogleCloudOrgpolicyV2PolicySpecPolicyRule = {
  allowAll?: boolean | undefined
  condition?: GoogleTypeExpr | undefined
  denyAll?: boolean | undefined
  enforce?: boolean | undefined
  values?: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues | undefined
}
type GoogleCloudOrgpolicyV2PolicySpec = {
  etag?: string | undefined
  inheritFromParent?: boolean | undefined
  reset?: boolean | undefined
  rules?: GoogleCloudOrgpolicyV2PolicySpecPolicyRule[] | undefined
  updateTime?: string | undefined
}
type GoogleCloudOrgpolicyV2AlternatePolicySpec = {
  launch?: string | undefined
  spec?: GoogleCloudOrgpolicyV2PolicySpec | undefined
}
type GoogleCloudOrgpolicyV2Policy = {
  alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec | undefined
  dryRunSpec?: GoogleCloudOrgpolicyV2PolicySpec | undefined
  name?: string | undefined
  spec?: GoogleCloudOrgpolicyV2PolicySpec | undefined
}
type GoogleCloudOrgpolicyV2ConstraintBooleanConstraint = { [x: string]: unknown }
type GoogleCloudOrgpolicyV2ConstraintListConstraint = {
  supportsIn?: boolean | undefined
  supportsUnder?: boolean | undefined
}
type GoogleCloudOrgpolicyV2Constraint = {
  booleanConstraint?: GoogleCloudOrgpolicyV2ConstraintBooleanConstraint | undefined
  constraintDefault?: 'CONSTRAINT_DEFAULT_UNSPECIFIED' | 'ALLOW' | 'DENY' | undefined
  description?: string | undefined
  displayName?: string | undefined
  listConstraint?: GoogleCloudOrgpolicyV2ConstraintListConstraint | undefined
  name?: string | undefined
  supportsDryRun?: boolean | undefined
}
type GoogleCloudOrgpolicyV2ListConstraintsResponse = {
  constraints?: GoogleCloudOrgpolicyV2Constraint[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudOrgpolicyV2CustomConstraint = {
  actionType?: 'ACTION_TYPE_UNSPECIFIED' | 'ALLOW' | 'DENY' | undefined
  condition?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  methodTypes?: ('METHOD_TYPE_UNSPECIFIED' | 'CREATE' | 'UPDATE' | 'DELETE')[] | undefined
  name?: string | undefined
  resourceTypes?: string[] | undefined
  updateTime?: string | undefined
}
type GoogleCloudOrgpolicyV2ListCustomConstraintsResponse = {
  customConstraints?: GoogleCloudOrgpolicyV2CustomConstraint[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudOrgpolicyV2ListPoliciesResponse = {
  nextPageToken?: string | undefined
  policies?: GoogleCloudOrgpolicyV2Policy[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: GoogleCloudOrgpolicyV2Policy
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: GoogleCloudOrgpolicyV2Policy }
        output: GoogleCloudOrgpolicyV2Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:getEffectivePolicy': {
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: GoogleCloudOrgpolicyV2Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/constraints': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: GoogleCloudOrgpolicyV2ListConstraintsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/customConstraints': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudOrgpolicyV2CustomConstraint }
        output: GoogleCloudOrgpolicyV2CustomConstraint
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/policies': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: GoogleCloudOrgpolicyV2ListPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudOrgpolicyV2Policy }
        output: GoogleCloudOrgpolicyV2Policy
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
