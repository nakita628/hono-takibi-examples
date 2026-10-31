import { createRoute, z } from '@hono/zod-openapi'

const AccessKeyTypeSchema = z.string().openapi('AccessKeyType')

const SecretAccessKeyTypeSchema = z.string().openapi('SecretAccessKeyType')

const SessionTokenTypeSchema = z.string().openapi('SessionTokenType')

const ExpirationTimestampTypeSchema = z.int().openapi('ExpirationTimestampType')

const RoleCredentialsSchema = z
  .object({
    accessKeyId: AccessKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier used for the temporary security credentials. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the <i>AWS IAM User Guide</i>.',
        }),
    ).exactOptional(),
    secretAccessKey: SecretAccessKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key that is used to sign the request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the <i>AWS IAM User Guide</i>.',
        }),
    ).exactOptional(),
    sessionToken: SessionTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used for temporary credentials. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the <i>AWS IAM User Guide</i>.',
        }),
    ).exactOptional(),
    expiration: ExpirationTimestampTypeSchema.and(
      z.any().openapi({ description: 'The date on which temporary security credentials expire.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the role credentials that are assigned to the user.',
    required: [],
  })
  .openapi('RoleCredentials')

const GetRoleCredentialsResponseSchema = z
  .object({
    roleCredentials: RoleCredentialsSchema.and(
      z
        .any()
        .openapi({ description: 'The credentials for the role that is assigned to the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRoleCredentialsResponse')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const NextTokenTypeSchema = z.string().openapi('NextTokenType')

const RoleNameTypeSchema = z.string().openapi('RoleNameType')

const AccountIdTypeSchema = z.string().openapi('AccountIdType')

const RoleInfoSchema = z
  .object({
    roleName: RoleNameTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The friendly name of the role that is assigned to the user.' }),
    ).exactOptional(),
    accountId: AccountIdTypeSchema.and(
      z.any().openapi({ description: 'The identifier of the AWS account assigned to the user.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the role that is assigned to the user.',
    required: [],
  })
  .openapi('RoleInfo')

const RoleListTypeSchema = z.array(RoleInfoSchema).openapi('RoleListType')

const ListAccountRolesResponseSchema = z
  .object({
    nextToken: NextTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The page token client that is used to retrieve the list of accounts.',
        }),
    ).exactOptional(),
    roleList: RoleListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A paginated response with the list of roles and the next token if more results are available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountRolesResponse')

const AccountNameTypeSchema = z.string().openapi('AccountNameType')

const EmailAddressTypeSchema = z.string().min(1).max(254).openapi('EmailAddressType')

const AccountInfoSchema = z
  .object({
    accountId: AccountIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the AWS account that is assigned to the user.',
        }),
    ).exactOptional(),
    accountName: AccountNameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The display name of the AWS account that is assigned to the user.',
        }),
    ).exactOptional(),
    emailAddress: EmailAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address of the AWS account that is assigned to the user.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about your AWS account.', required: [] })
  .openapi('AccountInfo')

const AccountListTypeSchema = z.array(AccountInfoSchema).openapi('AccountListType')

const ListAccountsResponseSchema = z
  .object({
    nextToken: NextTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The page token client that is used to retrieve the list of accounts.',
        }),
    ).exactOptional(),
    accountList: AccountListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A paginated response with the list of account information and the next token if more results are available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountsResponse')

const AccessTokenTypeSchema = z.string().openapi('AccessTokenType')

const GetRoleCredentialsRequestSchema = z
  .object({})
  .openapi({ title: 'GetRoleCredentialsRequest' })
  .openapi('GetRoleCredentialsRequest')

const MaxResultTypeSchema = z.int().min(1).max(100).openapi('MaxResultType')

const ListAccountRolesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccountRolesRequest' })
  .openapi('ListAccountRolesRequest')

const ListAccountsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccountsRequest' })
  .openapi('ListAccountsRequest')

const LogoutRequestSchema = z
  .object({})
  .openapi({ title: 'LogoutRequest' })
  .openapi('LogoutRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRoute = createRoute({
  method: 'get',
  path: '/federation/credentials#role_name&account_id&x-amz-sso_bearer_token',
  description:
    'Returns the STS short-term credentials for a given role name that is assigned to the user.',
  operationId: 'GetRoleCredentials',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-sso_bearer_token': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-sso_bearer_token',
            in: 'header',
            required: true,
            description:
              'The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.',
            schema: { type: 'string', format: 'password' },
          },
        }),
    }),
    query: z.object({
      role_name: z
        .string()
        .openapi({
          param: {
            name: 'role_name',
            in: 'query',
            required: true,
            description: 'The friendly name of the role that is assigned to the user.',
            schema: { type: 'string' },
          },
        }),
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            in: 'query',
            required: true,
            description: 'The identifier for the AWS account that is assigned to the user.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRoleCredentialsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute = createRoute({
  method: 'get',
  path: '/assignment/roles#x-amz-sso_bearer_token&account_id',
  description: 'Lists all roles that are assigned to the user for a given AWS account.',
  operationId: 'ListAccountRoles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-sso_bearer_token': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-sso_bearer_token',
            in: 'header',
            required: true,
            description:
              'The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.',
            schema: { type: 'string', format: 'password' },
          },
        }),
    }),
    query: z.object({
      next_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              'The page token from the previous response output when you request subsequent pages.',
            schema: { type: 'string' },
          },
        }),
      max_result: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_result',
            in: 'query',
            required: false,
            description: 'The number of items that clients can request per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      account_id: z
        .string()
        .openapi({
          param: {
            name: 'account_id',
            in: 'query',
            required: true,
            description: 'The identifier for the AWS account that is assigned to the user.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccountRolesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getAssignmentAccountsXAmzSsoBearerTokenRoute = createRoute({
  method: 'get',
  path: '/assignment/accounts#x-amz-sso_bearer_token',
  description:
    'Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>IAM Identity Center User Guide</i>. This operation returns a paginated response.',
  operationId: 'ListAccounts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-sso_bearer_token': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-sso_bearer_token',
            in: 'header',
            required: true,
            description:
              'The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.',
            schema: { type: 'string', format: 'password' },
          },
        }),
    }),
    query: z.object({
      next_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next_token',
            in: 'query',
            required: false,
            description:
              '(Optional) When requesting subsequent pages, this is the page token from the previous response output.',
            schema: { type: 'string' },
          },
        }),
      max_result: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_result',
            in: 'query',
            required: false,
            description: 'This is the number of items clients can request per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postLogoutXAmzSsoBearerTokenRoute = createRoute({
  method: 'post',
  path: '/logout#x-amz-sso_bearer_token',
  description:
    '<p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in session.</p> <note> <p>If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set. More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user, and the corresponding temporary AWS credentials are returned to the client.</p> <p>After user logout, any existing IAM role sessions that were created by using IAM Identity Center permission sets continue based on the duration configured in the permission set. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User authentications</a> in the <i>IAM Identity Center User Guide</i>.</p> </note>',
  operationId: 'Logout',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-sso_bearer_token': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-sso_bearer_token',
            in: 'header',
            required: true,
            description:
              'The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.',
            schema: { type: 'string', format: 'password' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
