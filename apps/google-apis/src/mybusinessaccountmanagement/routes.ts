import { createRoute, z } from '@hono/zod-openapi'

const AcceptInvitationRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for AccessControl.AcceptInvitation.' })
  .openapi('AcceptInvitationRequest')

const PostalAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name of the organization at the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).',
      }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.',
      }),
    sortingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d\'Ivoire).',
      }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.',
      }),
  })
  .openapi({
    description:
      'Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478',
    required: [],
  })
  .openapi('PostalAddress')

const OrganizationInfoSchema = z
  .object({
    address: PostalAddressSchema.exactOptional().openapi({
      description: 'Output only. The postal address for the account.',
      readOnly: true,
    }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The contact number for the organization.',
        readOnly: true,
      }),
    registeredDomain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The registered domain for the account.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Additional information stored for an organization.', required: [] })
  .openapi('OrganizationInfo')

const AccountSchema = z
  .object({
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account.',
      }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Account reference number if provisioned.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Immutable. The resource name, in the format `accounts/{account_id}`.',
      }),
    organizationInfo: OrganizationInfoSchema.exactOptional().openapi({
      description:
        'Output only. Additional info for an organization. This is populated only for an organization account.',
      readOnly: true,
    }),
    permissionLevel: z
      .enum(['PERMISSION_LEVEL_UNSPECIFIED', 'OWNER_LEVEL', 'MEMBER_LEVEL'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the permission level the user has for this account.',
        readOnly: true,
      }),
    primaryOwner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`.',
      }),
    role: z
      .enum(['ACCOUNT_ROLE_UNSPECIFIED', 'PRIMARY_OWNER', 'OWNER', 'MANAGER', 'SITE_MANAGER'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the AccountRole of this account.',
        readOnly: true,
      }),
    type: z
      .enum([
        'ACCOUNT_TYPE_UNSPECIFIED',
        'PERSONAL',
        'LOCATION_GROUP',
        'USER_GROUP',
        'ORGANIZATION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.',
      }),
    verificationState: z
      .enum(['VERIFICATION_STATE_UNSPECIFIED', 'VERIFIED', 'UNVERIFIED', 'VERIFICATION_REQUESTED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.',
        readOnly: true,
      }),
    vettedState: z
      .enum(['VETTED_STATE_UNSPECIFIED', 'NOT_VETTED', 'VETTED', 'INVALID'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).',
    required: [],
  })
  .openapi('Account')

const AdminSchema = z
  .object({
    account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`.',
      }),
    admin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.',
      }),
    pendingInvitation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this admin has a pending invitation for the specified resource.',
        readOnly: true,
      }),
    role: z
      .enum(['ADMIN_ROLE_UNSPECIFIED', 'PRIMARY_OWNER', 'OWNER', 'MANAGER', 'SITE_MANAGER'])
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies the role that this admin uses with the specified Account or Location.',
      }),
  })
  .openapi({ description: 'An administrator of an Account or a location.', required: [] })
  .openapi('Admin')

const DeclineInvitationRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for AccessControl.DeclineInvitation.' })
  .openapi('DeclineInvitationRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const TargetLocationSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address of the location to which the user is invited.' }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the location to which the user is invited.' }),
  })
  .openapi({ description: 'Represents a target location for a pending invitation.', required: [] })
  .openapi('TargetLocation')

const InvitationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name for the invitation. `accounts/{account_id}/invitations/{invitation_id}`.',
      }),
    role: z
      .enum(['ADMIN_ROLE_UNSPECIFIED', 'PRIMARY_OWNER', 'OWNER', 'MANAGER', 'SITE_MANAGER'])
      .exactOptional()
      .openapi({ description: 'Output only. The invited role on the account.', readOnly: true }),
    targetAccount: AccountSchema.exactOptional().openapi({
      description: 'The sparsely populated account this invitation is for.',
    }),
    targetLocation: TargetLocationSchema.exactOptional().openapi({
      description: 'The target location this invitation is for.',
    }),
    targetType: z
      .enum(['TARGET_TYPE_UNSPECIFIED', 'ACCOUNTS_ONLY', 'LOCATIONS_ONLY'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies which target types should appear in the response.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents a pending invitation.', required: [] })
  .openapi('Invitation')

const ListAccountAdminsResponseSchema = z
  .object({
    accountAdmins: z
      .array(AdminSchema)
      .exactOptional()
      .openapi({ description: 'A collection of Admin instances.' }),
  })
  .openapi({ description: 'Response message for AccessControl.ListAccountAdmins.', required: [] })
  .openapi('ListAccountAdminsResponse')

const ListAccountsResponseSchema = z
  .object({
    accounts: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response.',
      }),
  })
  .openapi({ description: 'Response message for Accounts.ListAccounts.', required: [] })
  .openapi('ListAccountsResponse')

const ListInvitationsResponseSchema = z
  .object({
    invitations: z
      .array(InvitationSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of invitations that are pending for the account. The number of invitations listed here cannot exceed 1000.',
      }),
  })
  .openapi({ description: 'Response message for AccessControl.ListInvitations.', required: [] })
  .openapi('ListInvitationsResponse')

const ListLocationAdminsResponseSchema = z
  .object({
    admins: z
      .array(AdminSchema)
      .exactOptional()
      .openapi({ description: 'A collection of Admins.' }),
  })
  .openapi({ description: 'Response message for AccessControl.ListLocationAdmins.', required: [] })
  .openapi('ListLocationAdminsResponse')

const TransferLocationRequestSchema = z
  .object({
    destinationAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the account resource to transfer the location to (for example, "accounts/{account}").',
      }),
  })
  .openapi({ description: 'Request message for AccessControl.TransferLocation.', required: [] })
  .openapi('TransferLocationRequest')

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

export const getV1AccountsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts',
  tags: ['accounts'],
  description:
    'Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.',
  operationId: 'mybusinessaccountmanagement.accounts.list',
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
              'Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter.',
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
            description:
              'Optional. How many accounts to fetch per page. The default and maximum is 20.',
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
              'Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parentAccount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id}`.',
            in: 'query',
            name: 'parentAccount',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
  },
})

export const postV1AccountsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts',
  tags: ['accounts'],
  description:
    'Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.',
  operationId: 'mybusinessaccountmanagement.accounts.create',
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
    body: { content: { 'application/json': { schema: AccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['accounts'],
  description:
    'Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.',
  operationId: 'mybusinessaccountmanagement.accounts.get',
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
            description: 'Required. The name of the account to fetch.',
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
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['locations'],
  description: 'Removes the specified admin as a manager of the specified location.',
  operationId: 'mybusinessaccountmanagement.locations.admins.delete',
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
            description: 'Required. The resource name of the admin to remove from the location.',
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
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['locations'],
  description:
    'Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.',
  operationId: 'mybusinessaccountmanagement.locations.admins.patch',
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
              'Required. The specific fields that should be updated. The only editable field is role.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If true, the request is validated without actually updating the account.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
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
              'Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdminSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdminSchema } },
    },
  },
})

export const postV1NameAcceptRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:accept',
  tags: ['accounts'],
  description: 'Accepts the specified invitation.',
  operationId: 'mybusinessaccountmanagement.accounts.invitations.accept',
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
              'Required. The name of the invitation that is being accepted. `accounts/{account_id}/invitations/{invitation_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptInvitationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV1NameDeclineRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:decline',
  tags: ['accounts'],
  description: 'Declines the specified invitation.',
  operationId: 'mybusinessaccountmanagement.accounts.invitations.decline',
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
              'Required. The name of the account invitation that is being declined. `accounts/{account_id}/invitations/{invitation_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeclineInvitationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV1NameTransferRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:transfer',
  tags: ['locations'],
  description:
    'Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.',
  operationId: 'mybusinessaccountmanagement.locations.transfer',
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
              'Required. The name of the location to transfer. `locations/{location_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransferLocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const getV1ParentAdminsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/admins',
  tags: ['locations'],
  description: 'Lists all of the admins for the specified location.',
  operationId: 'mybusinessaccountmanagement.locations.admins.list',
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
              'Required. The name of the location to list admins of. `locations/{location_id}/admins`.',
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
      content: { 'application/json': { schema: ListLocationAdminsResponseSchema } },
    },
  },
})

export const postV1ParentAdminsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/admins',
  tags: ['locations'],
  description:
    'Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.',
  operationId: 'mybusinessaccountmanagement.locations.admins.create',
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
              'Required. The resource name of the location this admin is created for. `locations/{location_id}/admins`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdminSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdminSchema } },
    },
  },
})

export const getV1ParentInvitationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/invitations',
  tags: ['accounts'],
  description: 'Lists pending invitations for the specified account.',
  operationId: 'mybusinessaccountmanagement.accounts.invitations.list',
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
              'Optional. Filtering the response is supported via the Invitation.target_type field.',
            in: 'query',
            name: 'filter',
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
              'Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id}/invitations`',
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
      content: { 'application/json': { schema: ListInvitationsResponseSchema } },
    },
  },
})
