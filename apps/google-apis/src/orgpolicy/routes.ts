import { createRoute, z } from '@hono/zod-openapi'

const GoogleTypeExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('GoogleTypeExpr')

const GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValuesSchema = z
  .object({
    allowedValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of values allowed at this resource.' }),
    deniedValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of values denied at this resource.' }),
  })
  .openapi({
    description:
      'A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues')

const GoogleCloudOrgpolicyV2PolicySpecPolicyRuleSchema = z
  .object({
    allowAll: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.',
      }),
    condition: GoogleTypeExprSchema.exactOptional().openapi({
      description:
        "A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the \"||\" or \"&&\" operators. Each subexpression must be of the form \"resource.matchTag('/tag_key_short_name, 'tag_value_short_name')\". or \"resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')\". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: \"resource.matchTag('123456789/environment, 'prod')\". or \"resource.matchTagId('tagKeys/123', 'tagValues/456')\".",
    }),
    denyAll: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting this to true means that all values are denied. This field can be set only in policies for list constraints.',
      }),
    enforce: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, then the policy is enforced. If `false`, then any configuration is acceptable. This field can be set only in policies for boolean constraints.',
      }),
    values: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValuesSchema.exactOptional().openapi({
      description:
        'List of values to be used for this policy rule. This field can be set only in policies for list constraints.',
    }),
  })
  .openapi({ description: 'A rule used to express this policy.', required: [] })
  .openapi('GoogleCloudOrgpolicyV2PolicySpecPolicyRule')

const GoogleCloudOrgpolicyV2PolicySpecSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque tag indicating the current version of the policy, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy` is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policy to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset.',
      }),
    inheritFromParent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines the inheritance behavior for this policy. If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.',
      }),
    reset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.',
      }),
    rules: z
      .array(GoogleCloudOrgpolicyV2PolicySpecPolicyRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'In policies for boolean constraints, the following requirements apply: - There must be one and only one policy rule where condition is unset. - Boolean policy rules with conditions must set `enforced` to the opposite of the policy rule without a condition. - During policy evaluation, policy rules with conditions that are true for a target resource take precedence.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time stamp this was previously updated. This represents the last time a call to `CreatePolicy` or `UpdatePolicy` was made for that policy.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2PolicySpec')

const GoogleCloudOrgpolicyV2AlternatePolicySpecSchema = z
  .object({
    launch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.',
      }),
    spec: GoogleCloudOrgpolicyV2PolicySpecSchema.exactOptional().openapi({
      description: 'Specify constraint for configurations of Google Cloud resources.',
    }),
  })
  .openapi({
    description:
      "Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.",
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2AlternatePolicySpec')

const GoogleCloudOrgpolicyV2ConstraintBooleanConstraintSchema = z
  .object({})
  .openapi({
    description:
      'A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance.',
  })
  .openapi('GoogleCloudOrgpolicyV2ConstraintBooleanConstraint')

const GoogleCloudOrgpolicyV2ConstraintListConstraintSchema = z
  .object({
    supportsIn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the \'Python\' group.',
      }),
    supportsUnder: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether subtrees of the Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the \'folders/123\' folder.',
      }),
  })
  .openapi({
    description:
      'A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2ConstraintListConstraint')

const GoogleCloudOrgpolicyV2ConstraintSchema = z
  .object({
    booleanConstraint:
      GoogleCloudOrgpolicyV2ConstraintBooleanConstraintSchema.exactOptional().openapi({
        description: 'Defines this constraint as being a BooleanConstraint.',
      }),
    constraintDefault: z
      .enum(['CONSTRAINT_DEFAULT_UNSPECIFIED', 'ALLOW', 'DENY'])
      .exactOptional()
      .openapi({
        description: 'The evaluation behavior of this constraint in the absence of a policy.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name. Mutable.' }),
    listConstraint: GoogleCloudOrgpolicyV2ConstraintListConstraintSchema.exactOptional().openapi({
      description: 'Defines this constraint as being a ListConstraint.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/{project_number}/constraints/{constraint_name}` * `folders/{folder_id}/constraints/{constraint_name}` * `organizations/{organization_id}/constraints/{constraint_name}` For example, "/projects/123/constraints/compute.disableSerialPortAccess".',
      }),
    supportsDryRun: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Shows if dry run is supported for this constraint or not.' }),
  })
  .openapi({
    description:
      "A constraint describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which Google Cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization policy administrator to fit the needs of the organization by setting a policy that includes constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. Constraints have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a policy being defined or inherited for the resource in question.",
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2Constraint')

const GoogleCloudOrgpolicyV2CustomConstraintSchema = z
  .object({
    actionType: z
      .enum(['ACTION_TYPE_UNSPECIFIED', 'ALLOW', 'DENY'])
      .exactOptional()
      .openapi({ description: 'Allow or deny type.' }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Org policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\\d)+")\'` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Detailed information about this custom policy constraint. The max length of the description is 2000 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One line display name for the UI. The max length of the display_name is 200 characters.',
      }),
    methodTypes: z
      .array(z.enum(['METHOD_TYPE_UNSPECIFIED', 'CREATE', 'UPDATE', 'DELETE']))
      .exactOptional()
      .openapi({ description: 'All the operations being applied for this constraint.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.',
      }),
    resourceTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` RPC was called',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2CustomConstraint')

const GoogleCloudOrgpolicyV2ListConstraintsResponseSchema = z
  .object({
    constraints: z
      .array(GoogleCloudOrgpolicyV2ConstraintSchema)
      .exactOptional()
      .openapi({
        description: 'The collection of constraints that are available on the targeted resource.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Page token used to retrieve the next page. This is currently not used.',
      }),
  })
  .openapi({ description: 'The response returned from the ListConstraints method.', required: [] })
  .openapi('GoogleCloudOrgpolicyV2ListConstraintsResponse')

const GoogleCloudOrgpolicyV2ListCustomConstraintsResponseSchema = z
  .object({
    customConstraints: z
      .array(GoogleCloudOrgpolicyV2CustomConstraintSchema)
      .exactOptional()
      .openapi({
        description:
          'All custom constraints that exist on the organization resource. It will be empty if no custom constraints are set.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.',
      }),
  })
  .openapi({
    description:
      'The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2ListCustomConstraintsResponse')

const GoogleCloudOrgpolicyV2PolicySchema = z
  .object({
    alternate: GoogleCloudOrgpolicyV2AlternatePolicySpecSchema.exactOptional().openapi({
      description: 'Deprecated.',
    }),
    dryRunSpec: GoogleCloudOrgpolicyV2PolicySpecSchema.exactOptional().openapi({
      description:
        "Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.",
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.',
      }),
    spec: GoogleCloudOrgpolicyV2PolicySpecSchema.exactOptional().openapi({
      description: 'Basic information about the Organization Policy.',
    }),
  })
  .openapi({
    description:
      'Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2Policy')

const GoogleCloudOrgpolicyV2ListPoliciesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.',
      }),
    policies: z
      .array(GoogleCloudOrgpolicyV2PolicySchema)
      .exactOptional()
      .openapi({
        description:
          'All policies that exist on the resource. It will be empty if no policies are set.',
      }),
  })
  .openapi({
    description:
      'The response returned from the ListPolicies method. It will be empty if no policies are set on the resource.',
    required: [],
  })
  .openapi('GoogleCloudOrgpolicyV2ListPoliciesResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.',
  operationId: 'orgpolicy.projects.policies.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the policy. See `Policy` for naming requirements.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV2NameRoute = createRoute({
  method: 'delete',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.',
  operationId: 'orgpolicy.projects.policies.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the policy to delete. See the policy entry for naming rules.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV2NameRoute = createRoute({
  method: 'patch',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.',
  operationId: 'orgpolicy.projects.policies.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudOrgpolicyV2PolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2NameGetEffectivePolicyRoute = createRoute({
  method: 'get',
  path: '/v2/{name}:getEffectivePolicy',
  tags: ['projects'],
  description:
    "Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.",
  operationId: 'orgpolicy.projects.policies.getEffectivePolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The effective policy to compute. See `Policy` for naming rules.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentConstraintsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/constraints',
  tags: ['projects'],
  description: 'Lists constraints that could be applied on the specified resource.',
  operationId: 'orgpolicy.projects.constraints.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudOrgpolicyV2ListConstraintsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentCustomConstraintsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/customConstraints',
  tags: ['organizations'],
  description:
    'Retrieves all of the custom constraints that exist on a particular organization resource.',
  operationId: 'orgpolicy.organizations.customConstraints.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudOrgpolicyV2ListCustomConstraintsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentCustomConstraintsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/customConstraints',
  tags: ['organizations'],
  description:
    'Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.',
  operationId: 'orgpolicy.organizations.customConstraints.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Must be in the following form: * `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2CustomConstraintSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2CustomConstraintSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentPoliciesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/policies',
  tags: ['projects'],
  description: 'Retrieves all of the policies that exist on a particular resource.',
  operationId: 'orgpolicy.projects.policies.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2ListPoliciesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentPoliciesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/policies',
  tags: ['projects'],
  description:
    'Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.',
  operationId: 'orgpolicy.projects.policies.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudOrgpolicyV2PolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudOrgpolicyV2PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
