import { createRoute, z } from '@hono/zod-openapi'

const AccessApprovalServiceAccountSchema = z
  .object({
    accountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the service account.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the Access Approval service account. Format is one of: * "projects/{project}/serviceAccount" * "folders/{folder}/serviceAccount" * "organizations/{organization}/serviceAccount"',
      }),
  })
  .openapi({
    description: 'Access Approval service account related to a project/folder/organization.',
    required: [],
  })
  .openapi('AccessApprovalServiceAccount')

const EnrolledServiceSchema = z
  .object({
    cloudProduct: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services",
      }),
    enrollmentLevel: z
      .enum(['ENROLLMENT_LEVEL_UNSPECIFIED', 'BLOCK_ALL'])
      .exactOptional()
      .openapi({ description: 'The enrollment level of the service.' }),
  })
  .openapi({
    description: 'Represents the enrollment of a cloud resource into a specific service.',
    required: [],
  })
  .openapi('EnrolledService')

const AccessApprovalSettingsSchema = z
  .object({
    activeKeyVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.',
      }),
    ancestorHasActiveKeyVersion: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors).',
        readOnly: true,
      }),
    enrolledAncestor: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).',
        readOnly: true,
      }),
    enrolledServices: z
      .array(EnrolledServiceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.',
      }),
    invalidKeyVersion: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"',
      }),
    notificationEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.',
      }),
  })
  .openapi({
    description: 'Settings on a Project/Folder/Organization related to Access Approval.',
    required: [],
  })
  .openapi('AccessApprovalSettings')

const AccessLocationsSchema = z
  .object({
    principalOfficeCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The "home office" location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location',
      }),
    principalPhysicalLocationCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location',
      }),
  })
  .openapi({ description: 'Home office and physical location of the principal.', required: [] })
  .openapi('AccessLocations')

const AccessReasonSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'More detail about certain reason types. See comments for each type above.',
      }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'CUSTOMER_INITIATED_SUPPORT',
        'GOOGLE_INITIATED_SERVICE',
        'GOOGLE_INITIATED_REVIEW',
        'THIRD_PARTY_DATA_REQUEST',
        'GOOGLE_RESPONSE_TO_PRODUCTION_ALERT',
      ])
      .exactOptional()
      .openapi({ description: 'Type of access justification.' }),
  })
  .openapi({ required: [] })
  .openapi('AccessReason')

const SignatureInfoSchema = z
  .object({
    customerKmsKeyVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The resource name of the customer CryptoKeyVersion used for signing.',
      }),
    googlePublicKeyPem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key.',
      }),
    signature: z.string().exactOptional().openapi({ description: 'The digital signature.' }),
  })
  .openapi({
    description: 'Information about the digital signature of the resource.',
    required: [],
  })
  .openapi('SignatureInfo')

const ApproveDecisionSchema = z
  .object({
    approveTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which approval was granted.' }),
    autoApproved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True when the request has been auto-approved.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the approval expires.' }),
    invalidateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, denotes the timestamp at which the approval is invalidated.',
      }),
    signatureInfo: SignatureInfoSchema.exactOptional().openapi({
      description: 'The signature for the ApprovalRequest and details on how it was signed.',
    }),
  })
  .openapi({
    description: 'A decision that has been made to approve access to a resource.',
    required: [],
  })
  .openapi('ApproveDecision')

const DismissDecisionSchema = z
  .object({
    dismissTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the approval request was dismissed.' }),
    implicit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).',
      }),
  })
  .openapi({
    description: 'A decision that has been made to dismiss an approval request.',
    required: [],
  })
  .openapi('DismissDecision')

const ResourcePropertiesSchema = z
  .object({
    excludesDescendants: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether an approval will exclude the descendants of the resource being requested.',
      }),
  })
  .openapi({
    description: 'The properties associated with the resource of the request.',
    required: [],
  })
  .openapi('ResourceProperties')

const ApprovalRequestSchema = z
  .object({
    approve: ApproveDecisionSchema.exactOptional().openapi({ description: 'Access was approved.' }),
    dismiss: DismissDecisionSchema.exactOptional().openapi({
      description: 'The request was dismissed.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}".',
      }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which approval was requested.' }),
    requestedExpiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.',
      }),
    requestedLocations: AccessLocationsSchema.exactOptional().openapi({
      description: 'The locations for which approval is being requested.',
    }),
    requestedReason: AccessReasonSchema.exactOptional().openapi({
      description: 'The justification for which approval is being requested.',
    }),
    requestedResourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.',
      }),
    requestedResourceProperties: ResourcePropertiesSchema.exactOptional().openapi({
      description: 'Properties related to the resource represented by requested_resource_name.',
    }),
  })
  .openapi({
    description: 'A request for the customer to approve access to a resource.',
    required: [],
  })
  .openapi('ApprovalRequest')

const ApproveApprovalRequestMessageSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiration time of this approval.' }),
  })
  .openapi({ description: 'Request to approve an ApprovalRequest.', required: [] })
  .openapi('ApproveApprovalRequestMessage')

const DismissApprovalRequestMessageSchema = z
  .object({})
  .openapi({ description: 'Request to dismiss an approval request.' })
  .openapi('DismissApprovalRequestMessage')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const InvalidateApprovalRequestMessageSchema = z
  .object({})
  .openapi({ description: 'Request to invalidate an existing approval.' })
  .openapi('InvalidateApprovalRequestMessage')

const ListApprovalRequestsResponseSchema = z
  .object({
    approvalRequests: z
      .array(ApprovalRequestSchema)
      .exactOptional()
      .openapi({ description: 'Approval request details.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Token to retrieve the next page of results, or empty if there are no more.',
      }),
  })
  .openapi({ description: 'Response to listing of ApprovalRequest objects.', required: [] })
  .openapi('ListApprovalRequestsResponse')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Gets an approval request. Returns NOT_FOUND if the request does not exist.',
  operationId: 'accessapproval.projects.approvalRequests.get',
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
              'The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}"',
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
      content: { 'application/json': { schema: ApprovalRequestSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.',
  operationId: 'accessapproval.projects.deleteAccessApprovalSettings',
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
            description: 'Name of the AccessApprovalSettings to delete.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.',
  operationId: 'accessapproval.projects.updateAccessApprovalSettings',
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
              'The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.',
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
              'The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccessApprovalSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccessApprovalSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameApproveRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:approve',
  tags: ['projects'],
  description:
    'Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.',
  operationId: 'accessapproval.projects.approvalRequests.approve',
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
            description: 'Name of the approval request to approve.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApproveApprovalRequestMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApprovalRequestSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameDismissRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:dismiss',
  tags: ['projects'],
  description:
    'Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.',
  operationId: 'accessapproval.projects.approvalRequests.dismiss',
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
            description: 'Name of the ApprovalRequest to dismiss.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DismissApprovalRequestMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApprovalRequestSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameInvalidateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:invalidate',
  tags: ['projects'],
  description:
    'Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.',
  operationId: 'accessapproval.projects.approvalRequests.invalidate',
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
            description: 'Name of the ApprovalRequest to invalidate.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InvalidateApprovalRequestMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApprovalRequestSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentApprovalRequestsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/approvalRequests',
  tags: ['projects'],
  description:
    'Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.',
  operationId: 'accessapproval.projects.approvalRequests.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
            description: 'Requested page size.',
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
            description: 'A token identifying the page of results to return.',
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
              'The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".',
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
      content: { 'application/json': { schema: ListApprovalRequestsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
