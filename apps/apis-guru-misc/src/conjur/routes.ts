import { createRoute, z } from '@hono/zod-openapi'

const AccountNameSchema = z
  .string()
  .min(1)
  .openapi({ description: 'Conjur account name', example: 'default' })
  .openapi('AccountName')

const CountSchema = z
  .boolean()
  .openapi({ description: 'Return only the count of results', example: true })
  .openapi('Count')

const KindSchema = z.string().min(1).openapi({ example: 'variable' }).openapi('Kind')

const LimitSchema = z
  .int()
  .openapi({ description: 'Return no more than this number of results', example: 10 })
  .openapi('Limit')

const OffsetSchema = z
  .int()
  .openapi({ description: 'Skips this many items before returning the rest', example: 20 })
  .openapi('Offset')

const ResourceIDSchema = z
  .string()
  .min(1)
  .openapi({
    description:
      'Resource identifier. Requires to be encoded when in path.\n\n##### Examples:\n\n- `myapp-01` -> `myapp-01` (unchanged)\n- `alice@devops` -> `alice%40devops`\n- `prod/aws/db-password` -> `prod%2Faws%2Fdb-password`\n- `research+development` -> `research%2Bdevelopment`\n- `sales&marketing` -> `sales%26marketing`\n',
    example: 'prod%2Faws%2Fdb-password',
  })
  .openapi('ResourceID')

const ResourceVersionSchema = z
  .int()
  .openapi({
    description: 'Version of the resource (Conjur keeps the last 20 versions of a secret)',
    example: 1,
  })
  .openapi('ResourceVersion')

const RoleTypeSchema = z
  .string()
  .min(1)
  .openapi({
    description:
      '##### Kinds of roles:\n\n- User: one unique wonderful human\n- Host: a single logical machine (in the broad sense, not just physical)\n- Layer: a collection of hosts that have the same privileges\n- Group: a collection of users and groups that have the same privileges\n- Policy: a role which owns of a set of related object\n\nAny identifier included in the URL must be URL-encoded to be recognized by the Conjur API.\n\n##### Resource Identifiers:\n\n- `myapp-01` -> `myapp-01` (unchanged)\n- `alice@devops` -> `alice%40devops`\n- `prod/aws/db-password` -> `prod%2Faws%2Fdb-password`\n- `research+development` -> `research%2Bdevelopment`\n- `sales&marketing` -> `sales%26marketing`\n',
  })
  .openapi('RoleType')

const BadRequestResponse = {
  description: 'The server cannot process the request due to malformed request syntax',
}

const BusyResponse = { description: 'Similar operation already in progress, retry after a delay' }

const InadequatePrivilegesResponse = {
  description: 'The authenticated user lacks the necessary privileges',
}

const InternalServerErrorResponse = { description: 'Malfromed request, rejected by the server' }

const ResourceNotFoundResponse = {
  description:
    'The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set',
}

const ResourcesNotFoundResponse = { description: 'At least one resource was unable to be found' }

const UnauthorizedErrorResponse = {
  description: 'Authentication information is missing or invalid',
}

const UnprocessableEntityResponse = {
  description: 'A request parameter was either missing or invalid.',
}

const RequestIDParamsSchema = z
  .string()
  .regex(/^[a-zA-Z\d-]{1,255}$/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Add an ID to the request being made so it can be tracked in Conjur.\nIf not provided the server will automatically generate one.\n',
      example: 'test-id',
      in: 'header',
      name: 'X-Request-Id',
      required: false,
      schema: { pattern: '^[a-zA-Z\\d-]{1,255}$', type: 'string' },
    },
  })

const ServiceIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'URL-Encoded authenticator service ID',
      example: 'prod%2fgke',
      in: 'path',
      name: 'service_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const BasicAuthSecurityScheme = {
  description:
    'Basic authentication with Conjur username and password (users only)\nor API key (hosts and users).\n',
  scheme: 'basic',
  type: 'http',
}

const ConjurAuthSecurityScheme = {
  description: 'Conjur access token in `Token token=<base64_encoded_token>` format.',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const ConjurKubernetesMutualTlsSecurityScheme = {
  description:
    'Conjur Kubernetes authenticator mutual TLS authentication.\nTo authenticate using this method, you must provide a trusted client\ncertificate\n',
  scheme: 'mutual',
  type: 'http',
}

export const getAuthenticatorsRoute = createRoute({
  method: 'get',
  path: '/authenticators',
  tags: ['status'],
  summary: 'Details about which authenticators are on the Conjur Server',
  description:
    'Response contains three members: installed, configured, and enabled.\n\ninstalled: The authenticator is implemented in Conjur and is available for configuration\nconfigured: The authenticator has a webservice in the DB that was loaded by policy\nenabled: The authenticator is enabled (in the DB or in the ENV) and is ready for authentication\n',
  operationId: 'getAuthenticators',
  request: { headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }) },
  responses: {
    200: {
      description: 'Details about authenticators for this Conjur server',
      content: {
        'application/json': {
          schema: z
            .object({
              configured: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The authenticators configured on the Conjur server',
                  example: ['authn'],
                }),
              enabled: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The authenticators enabled on the Conjur server',
                  example: ['authn'],
                }),
              installed: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The authenticators installed on the Conjur server',
                  example: ['authn'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAuthnAzureServiceIdAccountLoginAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-azure/{service_id}/{account}/{login}/authenticate',
  tags: ['authentication'],
  summary: 'Gets a short-lived access token for applications running in Azure.',
  description:
    'The access token is used to communicate to the REST API that\nthe bearer of the token has been authorized to access the API and perform\nspecific actions specified by the scope that was granted during authorization.\n\nFor API usage, the base64-encoded access token is ordinarily passed as an HTTP\nAuthorization header as `Authorization: Token token=<base64-encoded token>`.\n\nThe `login` must be URL encoded and the host ID must have the prefix\n`host/`. For example, the host webserver would login as `host/webserver`,\nand would be encoded as `host%2Fwebserver`.\n\nThe `service_id`, if given, must be URL encoded. For example,\n`prod/gke` must be encoded as `prod%2Fgke`.\n\nTo authenticate to Conjur using this endpoint, reference the detailed\ndocumentation: [Azure Authenticator](https://docs.conjur.org/Latest/en/Content/Operations/Services/azure_authn.htm) (`authn-azure`).\n',
  operationId: 'getAccessTokenViaAzure',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .enum(['application/json', 'base64'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept-Encoding header to base64 will return a pre-encoded access token',
            in: 'header',
            name: 'Accept-Encoding',
            schema: {
              default: 'application/json',
              enum: ['application/json', 'base64'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      service_id: ServiceIDParamsSchema,
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      login: z
        .string()
        .min(1)
        .openapi({
          param: {
            description:
              'URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`',
            in: 'path',
            name: 'login',
            required: true,
            schema: { example: 'admin', minLength: 1, type: 'string' },
          },
          example: 'admin',
        }),
    }),
    body: {
      description: 'Azure identity token',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ jwt: z.string().exactOptional() })
            .openapi({
              description: 'Azure instance identity token',
              example: { jwt: 'eyJhbGciOiJSUzI1NiIs......uTonCA' },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const postAuthnGcpAccountAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-gcp/{account}/authenticate',
  tags: ['authentication'],
  summary: 'Gets a short-lived access token for applications running in\nGoogle Cloud Platform.\n',
  description:
    'Use the GCP Authenticator API to send an authentication\nrequest from a Google Cloud service to Conjur.\n\nFor more information, see [the documentation](https://docs.conjur.org/Latest/en/Content/Operations/Services/cjr-gcp-authn.htm).\n',
  operationId: 'getAccessTokenViaGCP',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .literal('base64')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept-Encoding header to base64 will return a pre-encoded access token',
            in: 'header',
            name: 'Accept-Encoding',
            schema: { enum: ['base64'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Organization account name',
            example: 'dev',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Google JWT identity token for the Google Cloud service',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ jwt: z.string().exactOptional() })
            .openapi({
              description: 'Google Cloud instance identity token',
              example: { jwt: 'eyJhbGciOiJSUzI1NiIs......uTonCA' },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response body is the API key',
      content: {
        'text/plain': {
          schema: z
            .string()
            .min(55)
            .openapi({
              description: 'Example of a Conjur API key',
              example: '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc',
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const getAuthnGcpAccountStatusRoute = createRoute({
  method: 'get',
  path: '/authn-gcp/{account}/status',
  tags: ['status'],
  summary: 'Details whether an authentication service has been configured properly',
  description:
    'Once the status webservice has been properly configured and the relevant user\ngroups have been given permissions to access the status webservice, the\nusers in those groups can check the status of the authenticator.\n\nThis operation only supports the GCP authenticator\n\nSee [Conjur Documentation](https://docs.conjur.org/Latest/en/Content/Integrations/Authn-status.htm)\nfor details on setting up the authenticator status webservice.\n',
  operationId: 'getGCPAuthenticatorStatus',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'The organization account name',
            example: 'dev',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response contains info about the result',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The error message if there was an error',
                  example:
                    "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
                }),
              status: z
                .string()
                .openapi({
                  description: "The status of the endpoint, 'error' if there was an error",
                  example: 'error',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
    400: BadRequestResponse,
    403: InadequatePrivilegesResponse,
    404: { description: 'The service was not found' },
    500: {
      description: 'The response contains info about the result',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The error message if there was an error',
                  example:
                    "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
                }),
              status: z
                .string()
                .openapi({
                  description: "The status of the endpoint, 'error' if there was an error",
                  example: 'error',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
    501: {
      description: 'The response contains info about the result',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The error message if there was an error',
                  example:
                    "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
                }),
              status: z
                .string()
                .openapi({
                  description: "The status of the endpoint, 'error' if there was an error",
                  example: 'error',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
  },
  security: [{ conjurAuth: [] }],
})

export const postAuthnIamServiceIdAccountLoginAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-iam/{service_id}/{account}/{login}/authenticate',
  tags: ['authentication'],
  summary: 'Get a short-lived access token for applications running in AWS.',
  description:
    'The access token is used to communicate to the REST API that\nthe bearer of the token has been authorized to access the API and perform\nspecific actions specified by the scope that was granted during authorization.\n\nFor API usage, the base64-encoded access token is ordinarily passed as an HTTP\nAuthorization header as `Authorization: Token token=<base64-encoded token>`.\n\nThe `login` must be URL encoded and the host ID must have the prefix\n`host/`. For example, the host webserver would login as `host/webserver`,\nand would be encoded as `host%2Fwebserver`.\n\nThe `service_id`, if given, must be URL encoded. For example,\n`prod/gke` must be encoded as `prod%2Fgke`.\n\nFor detailed instructions on authenticating to Conjur using this endpoint,\nreference the documentation:\n[AWS IAM Authenticator](https://docs.conjur.org/Latest/en/Content/Operations/Services/AWS_IAM_Authenticator.htm) (`authn-iam`).\n',
  operationId: 'getAccessTokenViaAWS',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .enum(['application/json', 'base64'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept-Encoding header to base64 will return a pre-encoded access token',
            in: 'header',
            name: 'Accept-Encoding',
            schema: {
              default: 'application/json',
              enum: ['application/json', 'base64'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      service_id: ServiceIDParamsSchema,
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      login: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'URL-encoded login name. For hosts, the login name is `host/<host-id>`',
            in: 'path',
            name: 'login',
            required: true,
            schema: { example: 'admin', minLength: 1, type: 'string' },
          },
          example: 'admin',
        }),
    }),
    body: {
      description: 'AWS Signature header',
      content: {
        'text/plain': {
          schema: z.string().openapi({ description: 'AWS Signature Version 4 header' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const postAuthnJwtServiceIdAccountAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-jwt/{service_id}/{account}/authenticate',
  tags: ['authentication'],
  summary:
    'Gets a short-lived access token for applications using JSON Web Token (JWT)\nto access the Conjur API.\n',
  description:
    'Use the JWT Authenticator to leverage the identity layer\nprovided by JWT to authenticate with Conjur.\n',
  operationId: 'getAccessTokenViaJWT',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      service_id: ServiceIDParamsSchema,
    }),
    body: {
      description: 'ID token',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ jwt: z.string().exactOptional() })
            .openapi({ example: { jwt: 'eyJhbGciOiJSUzI1NiIs......uTonCA' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const postAuthnJwtServiceIdAccountIdAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-jwt/{service_id}/{account}/{id}/authenticate',
  tags: ['authentication'],
  summary:
    'Gets a short-lived access token for applications using JSON Web Token (JWT)\nto access the Conjur API. Covers the case of use of optional URL parameter "ID"\n',
  description:
    'Use the JWT Authenticator to leverage the identity layer\nprovided by JWT to authenticate with Conjur.\n',
  operationId: 'getAccessTokenViaJWTWithId',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      id: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'Organization user id',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'Represents the user/host identity',
              example: 'SomeUserID',
              minLength: 1,
              type: 'string',
            },
          },
          description: 'Represents the user/host identity',
          example: 'SomeUserID',
        }),
      service_id: ServiceIDParamsSchema,
    }),
    body: {
      description: 'ID token',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ jwt: z.string().exactOptional() })
            .openapi({ example: { jwt: 'eyJhbGciOiJSUzI1NiIs......uTonCA' }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const postAuthnK8sServiceIdInjectClientCertRoute = createRoute({
  method: 'post',
  path: '/authn-k8s/{service_id}/inject_client_cert',
  tags: ['authentication'],
  summary:
    "For applications running in Kubernetes; sends Conjur a certificate\nsigning request (CSR) and requests a client certificate injected into\nthe application's Kubernetes pod.\n",
  description:
    'This request sends a Certificate Signing Request to Conjur,\nwhich uses the Kubernetes API to inject a client certificate into the\napplication pod.\n\nThis endpoint requires a properly configured Conjur Certificate Authority\nservice alongside a properly configured and enabled Kubernetes authenticator.\nFor detailed instructions,\nsee [the documentation](https://docs.conjur.org/Latest/en/Content/Integrations/kubernetes.htm).\n',
  operationId: 'k8sInjectClientCert',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Host-Id-Prefix': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Dot-separated policy tree, prefixed by `host.`, where the application identity is defined',
            example: 'host/conjur/authn-k8s/my-authenticator-id/apps',
            in: 'header',
            name: 'Host-Id-Prefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({ service_id: ServiceIDParamsSchema }),
    body: {
      description:
        'Valid certificate signing request that includes the host\nidentity suffix as the CSR common name\n',
      content: { 'text/plain': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    202: { description: 'The injected certificate was accepted.' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postAuthnK8sServiceIdAccountLoginAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-k8s/{service_id}/{account}/{login}/authenticate',
  tags: ['authentication'],
  summary: 'Gets a short-lived access token for applications running in Kubernetes.',
  description:
    'The access token is used to communicate to the REST API that\nthe bearer of the token has been authorized to access the API and perform\nspecific actions specified by the scope that was granted during authorization.\n\nFor API usage, the base64-encoded access token is ordinarily passed as an HTTP\nAuthorization header as `Authorization: Token token=<base64-encoded token>`.\n\nThe `login` must be URL encoded and the host ID must have the prefix\n`host/`. For example, the host webserver would login as `host/webserver`,\nand would be encoded as `host%2Fwebserver`.\n\nThe `service_id`, if given, must be URL encoded. For example,\n`prod/gke` must be encoded as `prod%2Fgke`.\n\nTo authenticate to Conjur using this endpoint, reference the detailed\ndocumentation: [Kubernetes Authenticator](https://docs.conjur.org/Latest/en/Content/Operations/Services/k8s_auth.htm) (`authn-k8s`).\n',
  operationId: 'getAccessTokenViaKubernetes',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .enum(['application/json', 'base64'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept-Encoding header to base64 will return a pre-encoded access token',
            in: 'header',
            name: 'Accept-Encoding',
            schema: {
              default: 'application/json',
              enum: ['application/json', 'base64'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      service_id: ServiceIDParamsSchema,
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      login: z
        .string()
        .min(1)
        .openapi({
          param: {
            description:
              'URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`',
            in: 'path',
            name: 'login',
            required: true,
            schema: { example: 'admin', minLength: 1, type: 'string' },
          },
          example: 'admin',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ conjurKubernetesMutualTls: [] }],
})

export const getAuthnLdapServiceIdAccountLoginRoute = createRoute({
  method: 'get',
  path: '/authn-ldap/{service_id}/{account}/login',
  tags: ['authentication'],
  summary:
    'Gets the Conjur API key of a user given the LDAP username and\npassword via HTTP Basic Authentication.\n',
  description:
    "Exchange your LDAP credentials for a Conjur API key. Once the\nAPI key is obtained, it may be used to inexpensively obtain access\ntokens by calling the Authenticate method. An access token\nis required to use most other parts of the Conjur API.\n\nThe Basic authentication-compliant header is formed by:\n1. Concatenating the LDAP username, a literal colon character ':',\n   and the password to create the authentication string.\n2. Base64-encoding the authentication string.\n3. Prefixing the authentication string with the scheme: `Basic `\n   (note the required space).\n4. Providing the result as the value of the `Authorization` HTTP header:\n   `Authorization: Basic <authentication string>`.\n\nYour HTTP/REST client probably provides HTTP basic authentication support.\n",
  operationId: 'getAPIKeyViaLDAP',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      service_id: ServiceIDParamsSchema,
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The response body is the API key',
      content: {
        'text/plain': {
          schema: z
            .string()
            .min(55)
            .openapi({
              description: 'Example of a Conjur API key',
              example: '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc',
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const postAuthnLdapServiceIdAccountLoginAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-ldap/{service_id}/{account}/{login}/authenticate',
  tags: ['authentication'],
  summary:
    'Gets a short-lived access token for users and hosts using their\nLDAP identity to access the Conjur API.\n',
  description:
    'The access token is used to communicate to the REST API that\nthe bearer of the token has been authorized to access the API and perform\nspecific actions specified by the scope that was granted during authorization.\n\nFor API usage, the base64-encoded access token is ordinarily passed as an HTTP\nAuthorization header as `Authorization: Token token=<base64-encoded token>`.\n\nThe `login` must be URL encoded. For example, `alice@devops` must be\nencoded as `alice%40devops`.\n\nThe `service_id`, if given, must be URL encoded. For example,\n`prod/gke` must be encoded as `prod%2Fgke`.\n\nFor host authentication, the `login` is the host ID with the prefix\n`host/`. For example, the host webserver would login as `host/webserver`,\nand would be encoded as `host%2Fwebserver`.\n\nTo authenticate to Conjur using a LDAP, reference the detailed documentation:\n[LDAP Authenticator](https://docs.conjur.org/Latest/en/Content/Integrations/ldap/ldap_authenticator.html) (`authn-ldap`).\n',
  operationId: 'getAccessTokenViaLDAP',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .enum(['application/json', 'base64'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept-Encoding header to base64 will return a pre-encoded access token',
            in: 'header',
            name: 'Accept-Encoding',
            schema: {
              default: 'application/json',
              enum: ['application/json', 'base64'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      service_id: ServiceIDParamsSchema,
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      login: z
        .string()
        .min(1)
        .openapi({
          param: {
            description:
              'URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`',
            in: 'path',
            name: 'login',
            required: true,
            schema: { example: 'admin', minLength: 1, type: 'string' },
          },
          example: 'admin',
        }),
    }),
    body: {
      description: 'API key',
      content: {
        'text/plain': {
          schema: z
            .string()
            .min(55)
            .openapi({
              description: 'Example of a Conjur API key',
              example: '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const postAuthnOidcServiceIdAccountAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn-oidc/{service_id}/{account}/authenticate',
  tags: ['authentication'],
  summary:
    'Gets a short-lived access token for applications using OpenID\nConnect (OIDC) to access the Conjur API.\n',
  description:
    'Use the OIDC Authenticator to leverage the identity layer\nprovided by OIDC to authenticate with Conjur.\n\nFor more information see [the documentation](https://docs.conjur.org/Latest/en/Content/OIDC/OIDC.htm).\n',
  operationId: 'getAccessTokenViaOIDC',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      service_id: ServiceIDParamsSchema,
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
    }),
    body: {
      description: 'ID token',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ id_token: z.string().exactOptional() })
            .openapi({
              description: 'OpenID Connect ID token',
              example: { id_token: 'eyJhbGciOiJSUzI1NiIs......uTonCA' },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
  },
  security: [],
})

export const putAuthnAccountApiKeyRoute = createRoute({
  method: 'put',
  path: '/authn/{account}/api_key',
  tags: ['authentication'],
  summary: "Rotates a role's API key.",
  description:
    "Any role can rotate its own API key. The name and password\n(for users) or current API key (for hosts and users) of the role must\nbe provided via HTTP Basic Authorization.\n\nTo rotate another role's API key, you may provide your name and password\n(for users) or current API key (for hosts and users) via HTTP Basic\nAuthorization with the request. Alternatively, you may provide your\nConjur access token via the standard Conjur `Authorization` header.\n\nThe Basic authentication-compliant header is formed by:\n1. Concatenating the role's name, a literal colon character ':',\n   and the password or API key to create the authentication string.\n2. Base64-encoding the authentication string.\n3. Prefixing the authentication string with the scheme: `Basic `\n   (note the required space).\n4. Providing the result as the value of the `Authorization` HTTP header:\n   `Authorization: Basic <authentication string>`.\n\nYour HTTP/REST client probably provides HTTP basic authentication support.\nFor example, `curl` and all of the Conjur client libraries provide this.\n\nIf using the Conjur `Authorization` header, its value should be set to\n`Token token=<base64-encoded access token>`.\n\nNote that the body of the request must be the empty string.\n",
  operationId: 'rotateApiKey',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
    }),
    query: z.object({
      role: RoleTypeSchema.openapi({
        param: {
          description:
            '(**Optional**) role specifier in `{kind}:{identifier}` format\n\n##### Permissions required\n\n`update` privilege on the role whose API key is being rotated.\n',
          in: 'query',
          name: 'role',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The response body is the API key',
      content: {
        'text/plain': {
          schema: z
            .string()
            .min(55)
            .openapi({
              description: 'Example of a Conjur API key',
              example: '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc',
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    422: UnprocessableEntityResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basicAuth: [], conjurAuth: [] }],
})

export const getAuthnAccountLoginRoute = createRoute({
  method: 'get',
  path: '/authn/{account}/login',
  tags: ['authentication'],
  summary:
    'Gets the API key of a user given the username and password\nvia HTTP Basic Authentication.\n',
  description:
    "Passwords are stored in the Conjur database using `bcrypt`\nwith a work factor of 12. Therefore, login is a fairly expensive operation.\nHowever, once the API key is obtained, it may be used to inexpensively\nobtain access tokens by calling the Authenticate method. An access token\nis required to use most other parts of the Conjur API.\n\nThe Basic authentication-compliant header is formed by:\n1. Concatenating the role's name, a literal colon character ':',\n   and the password or API key to create the authentication string.\n2. Base64-encoding the authentication string.\n3. Prefixing the authentication string with the scheme: `Basic `\n   (note the required space).\n4. Providing the result as the value of the `Authorization` HTTP header:\n   `Authorization: Basic <authentication string>`.\n\nYour HTTP/REST client probably provides HTTP basic authentication support.\nFor example, `curl` and all of the Conjur client libraries provide this.\n\nNote that machine roles (Hosts) do not have passwords and do not need to\nuse this endpoint.\n",
  operationId: 'getAPIKey',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The response body is the API key',
      content: {
        'text/plain': {
          schema: z
            .string()
            .min(55)
            .openapi({
              description: 'Example of a Conjur API key',
              example: '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc',
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const putAuthnAccountPasswordRoute = createRoute({
  method: 'put',
  path: '/authn/{account}/password',
  tags: ['authentication'],
  summary: 'Changes a user’s password.',
  description:
    "You must provide the login name and current password or\nAPI key of the user whose password is to be updated in an HTTP Basic\nAuthentication header. Also replaces the user’s API key with a new\nsecurely generated random value. You can fetch the new API key using\nthe Login method.\n\nThe Basic authentication-compliant header is formed by:\n1. Concatenating the role's name, a literal colon character ':',\n   and the password or API key to create the authentication string.\n2. Base64-encoding the authentication string.\n3. Prefixing the authentication string with the scheme: `Basic `\n   (note the required space).\n4. Providing the result as the value of the `Authorization` HTTP header:\n   `Authorization: Basic <authentication string>`.\n\nYour HTTP/REST client probably provides HTTP basic authentication\nsupport. For example, `curl` and all of the Conjur client libraries\nprovide this.\n\nNote that machine roles (Hosts) do not have passwords. They authenticate\nusing their API keys, while passwords are only used by human users.\n",
  operationId: 'changePassword',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
    }),
    body: {
      description: 'New password',
      content: { 'text/plain': { schema: z.string().min(1) } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The password has been changed' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    422: UnprocessableEntityResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const postAuthnAccountLoginAuthenticateRoute = createRoute({
  method: 'post',
  path: '/authn/{account}/{login}/authenticate',
  tags: ['authentication'],
  summary:
    'Gets a short-lived access token, which is required in the header\nof most subsequent API requests.\n',
  description:
    'A client can obtain an access token by presenting a valid\nlogin name and API key.\n\nThe access token is used to communicate to the REST API that the bearer\nof the token has been authorized to access the API and perform specific\nactions specified by the scope that was granted during authorization.\n\nThe `login` must be URL encoded. For example, `alice@devops` must be\nencoded as `alice%40devops`.\n\nThe `service_id`, if given, must be URL encoded. For example,\n`prod/gke` must be encoded as `prod%2Fgke`.\n\nFor host authentication, the `login` is the host ID with the prefix\n`host/`. For example, the host webserver would login as `host/webserver`,\nand would be encoded as `host%2Fwebserver`.\n\nFor API usage, the base64-encoded access token is ordinarily passed as an HTTP\nAuthorization header as `Authorization: Token token=<base64-encoded token>`.\n\nThis is the default authentication endpoint only. See other endpoints for\ndetails on authenticating to Conjur using another method, e.g. for\napplications running in Azure or Kubernetes.\n',
  operationId: 'getAccessToken',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .enum(['application/json', 'base64'])
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept-Encoding header to base64 will return a pre-encoded access token',
            in: 'header',
            name: 'Accept-Encoding',
            schema: {
              default: 'application/json',
              enum: ['application/json', 'base64'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      login: z
        .string()
        .min(1)
        .openapi({
          param: {
            description:
              'URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`',
            in: 'path',
            name: 'login',
            required: true,
            schema: { example: 'admin', minLength: 1, type: 'string' },
          },
          example: 'admin',
        }),
    }),
    body: {
      description: 'API Key',
      content: {
        'text/plain': {
          schema: z
            .string()
            .min(55)
            .openapi({
              description: 'Example of a Conjur API key',
              example: '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The response is an access token for conjur',
      content: { 'text/plain': { schema: z.string() } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [],
})

export const postCaAccountServiceIdSignRoute = createRoute({
  method: 'post',
  path: '/ca/{account}/{service_id}/sign',
  tags: ['certificate authority'],
  summary: 'Gets a signed certificate from the configured Certificate Authority service.',
  description:
    'Gets a signed certificate from the configured Certificate Authority service.\n\nThe request must include a valid Certificate Signing Request, and a desired TTL in ISO 8601 format.\n\n*** IMPORTANT ***\nThis endpoint is part of an early implementation of support for using Conjur as a certificate\nauthority, and is currently available at the Community (or early alpha) level.\nThis endpoint is still subject to breaking changes in the future.\n',
  operationId: 'sign',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      Accept: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Setting the Accept header to `application/x-pem-file` allows Conjur to respond with a formatted certificate',
            in: 'header',
            name: 'Accept',
            schema: { example: 'application/x-pem-file', minLength: 1, type: 'string' },
            required: false,
          },
          example: 'application/x-pem-file',
        }),
    }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      service_id: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'Name of the Certificate Authority service',
            in: 'path',
            name: 'service_id',
            required: true,
            schema: { example: 'ca-service', minLength: 1, type: 'string' },
          },
          example: 'ca-service',
        }),
    }),
    body: {
      description: 'Client Certificate Signing Request',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ csr: z.string(), ttl: z.string() })
            .openapi({ required: ['csr', 'ttl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The response body is the newly signed certificate',
      content: {
        'application/json': {
          schema: z.object({ certificate: z.string().exactOptional() }).openapi({ required: [] }),
        },
        'application/x-pem-file': { schema: z.base64() },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: {
      description:
        'Either          \n- The authenticated role is not a Host role,\n- The authenticated Host does not have `sign` privilege for the CA service, or\n- The authenticated Host ID does not match the of the CSR Common Name (CN).\n',
    },
    404: { description: 'CA Service with the given ID does not exist' },
  },
  security: [{ conjurAuth: [] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['status'],
  summary: 'Health info about conjur',
  description:
    'You can request health checks against any cluster node using the Conjur API.\nThese routes do not require authentication.\n\nThe health check attempts an internal HTTP or TCP connection to\neach Conjur Enterprise service. It also attempts a simple transaction against all internal databases.\n',
  operationId: 'health',
  responses: {
    200: {
      description: 'The tests were successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    502: { description: 'The tests failed' },
  },
})

export const postHostFactoriesHostsRoute = createRoute({
  method: 'post',
  path: '/host_factories/hosts',
  tags: ['host factory'],
  summary: 'Creates a Host using the Host Factory.',
  description:
    'Creates a Host using the Host Factory and returns a JSON description of it.\n\nRequires a host factory token, which can be created using the create tokens API.\nIn practice, this token is usually provided automatically as part of Conjur integration with your\nhost provisioning infrastructure.\n\nNote: If the token was created with a CIDR restriction, you must make this API request from a whitelisted address.\n',
  operationId: 'createHost',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    body: {
      description: 'Parameters',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              annotations: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'Annotations to apply to the new host',
                  example: { description: 'new db host', puppet: 'true' },
                }),
              id: z
                .string()
                .openapi({
                  description:
                    'Identifier of the host to be created. It will be created within the account of the host factory.',
                  example: 'my-new-host',
                }),
            })
            .openapi({ example: { id: 'new-host' }, required: ['id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The response body contains the newly-created host',
      content: {
        'application/json': {
          schema: z
            .object({
              annotations: z.array(z.string()),
              api_key: z.string(),
              created_at: z.string(),
              id: z.string(),
              owner: z.string(),
              permissions: z.array(z.string()),
            })
            .openapi({
              description: 'Contains information about a created host',
              example: {
                annotations: [],
                api_key: 'rq5bk73nwjnm52zdj87993ezmvx3m75k3whwxszekvmnwdqek0r',
                created_at: '2017-08-07T22:30:00.145+00:00',
                id: 'myorg:host:brand-new-host',
                owner: 'myorg:host_factory:hf-db',
                permissions: [],
              },
              required: ['created_at', 'id', 'api_key', 'owner', 'permissions', 'annotations'],
            }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const postHostFactoryTokensRoute = createRoute({
  method: 'post',
  path: '/host_factory_tokens',
  tags: ['host factory'],
  summary: 'Creates one or more host identity tokens.',
  description:
    'Creates one or more tokens which can be used to bootstrap host identity. Responds with a JSON document containing the tokens and their restrictions.\n\nIf the tokens are created with a CIDR restriction, Conjur will only accept them from the whitelisted IP ranges.\n\n##### Permissions required\n#\n`execute` privilege on the Host Factory."\n',
  operationId: 'createToken',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    body: {
      description: 'Parameters',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              cidr: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description: 'Number of host tokens to create',
                  example: ['127.0.0.1/32'],
                }),
              count: z
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
                .openapi({ description: 'Number of host tokens to create', example: 2 }),
              expiration: z
                .string()
                .openapi({
                  description: '`ISO 8601 datetime` denoting a requested expiration time.',
                  example: '2017-08-04T22:27:20+00:00',
                }),
              host_factory: z
                .string()
                .openapi({
                  description: 'Fully qualified host factory ID',
                  example: 'myorg:host_factory:hf-db',
                }),
            })
            .openapi({
              example: {
                expiration: '2017-08-04T22:27:20+00:00',
                host_factory: 'myorg:hosty_factory:hf-db',
              },
              required: ['expiration', 'host_factory'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Zero or more tokens were created and delivered in the response body',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({ cidr: z.array(z.string()), expiration: z.string(), token: z.string() })
                .openapi({ required: ['expiration', 'cidr', 'token'] }),
            )
            .openapi({
              example: [
                {
                  cidr: ['127.0.0.1/32', '127.0.0.2/32'],
                  expiration: '2017-08-04T22:27:20+00:00',
                  token: '281s2ag1g8s7gd2ezf6td3d619b52t9gaak3w8rj0p38124n384sq7x',
                },
                {
                  cidr: ['127.0.0.1/32', '127.0.0.2/32'],
                  expiration: '2017-08-04T22:27:20+00:00',
                  token: '2c0vfj61pmah3efbgpcz2x9vzcy1ycskfkyqy0kgk1fv014880f4',
                },
              ],
            }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const deleteHostFactoryTokensTokenRoute = createRoute({
  method: 'delete',
  path: '/host_factory_tokens/{token}',
  tags: ['host factory'],
  summary: 'Revokes a token, immediately disabling it.',
  description:
    'Revokes a token, immediately disabling it.\n\n##### Permissions required\n\n`update` privilege on the host factory."\n',
  operationId: 'revokeToken',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The host factory token to revoke',
            in: 'path',
            name: 'token',
            required: true,
            schema: {
              example: '2c0vfj61pmah3efbgpcz2x9vzcy1ycskfkyqy0kgk1fv014880f4',
              type: 'string',
            },
          },
          example: '2c0vfj61pmah3efbgpcz2x9vzcy1ycskfkyqy0kgk1fv014880f4',
        }),
    }),
  },
  responses: {
    204: { description: 'Token was successfully revoked' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['status'],
  summary: 'Basic information about the Conjur Enterprise server',
  description:
    'Information about the Conjur Enterprise node which was queried against.\n\nIncludes authenticator info, release/version info, configuration details,\ninternal services, and role information.\n',
  operationId: 'info',
  responses: {
    200: {
      description: 'info',
      content: {
        'application/json': {
          schema: z
            .object({
              authenticators: z
                .object({
                  configured: z.array(z.string()).exactOptional(),
                  enabled: z.array(z.string()).exactOptional(),
                  installed: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              configuration: z.object({}).exactOptional(),
              container: z.string().exactOptional(),
              release: z.string().exactOptional(),
              role: z.string().exactOptional(),
              services: z.object({}).exactOptional(),
              version: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putPoliciesAccountPolicyIdentifierRoute = createRoute({
  method: 'put',
  path: '/policies/{account}/policy/{identifier}',
  tags: ['policies'],
  summary: 'Loads or replaces a Conjur policy document.',
  description:
    'Loads or replaces a Conjur policy document.\n\n**Any policy data which already exists on the server but is not\nexplicitly specified in the new policy file will be deleted!**.\n',
  operationId: 'replacePolicy',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the policy to load (root if no root policy has been loaded yet)',
          example: 'root',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    body: {
      description: 'Policy',
      content: {
        'application/x-yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/plain': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/x-yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Decsribes new data created by a successful policy load',
      content: {
        'application/json': {
          schema: z
            .object({
              created_roles: z.object({}).exactOptional(),
              version: z.number().exactOptional(),
            })
            .openapi({
              example: {
                created_roles: {
                  'myorg:host:database/db-host': {
                    api_key: '309yzpa1n5kp932waxw6d37x4hew2x8ve8w11m8xn92acfy672m929en',
                    id: 'myorg:host:database/db-host',
                  },
                },
                version: 1,
              },
              required: [],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    409: BusyResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const postPoliciesAccountPolicyIdentifierRoute = createRoute({
  method: 'post',
  path: '/policies/{account}/policy/{identifier}',
  tags: ['policies'],
  summary: 'Adds data to the existing Conjur policy.',
  description:
    'Adds data to the existing Conjur policy. Deletions are not allowed.\nAny policy objects that exist on the server but are omitted from the\npolicy file will not be deleted and any explicit deletions in the policy file will result in an error.\n\n##### Permissions required\n\n`create` privilege on the policy."\n',
  operationId: 'loadPolicy',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the policy to update',
          example: 'root',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    body: {
      description: 'Policy',
      content: {
        'application/x-yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/plain': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/x-yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Decsribes new data created by a successful policy load',
      content: {
        'application/json': {
          schema: z
            .object({
              created_roles: z.object({}).exactOptional(),
              version: z.number().exactOptional(),
            })
            .openapi({
              example: {
                created_roles: {
                  'myorg:host:database/db-host': {
                    api_key: '309yzpa1n5kp932waxw6d37x4hew2x8ve8w11m8xn92acfy672m929en',
                    id: 'myorg:host:database/db-host',
                  },
                },
                version: 1,
              },
              required: [],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    409: BusyResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const patchPoliciesAccountPolicyIdentifierRoute = createRoute({
  method: 'patch',
  path: '/policies/{account}/policy/{identifier}',
  tags: ['policies'],
  summary: 'Modifies an existing Conjur policy.',
  description:
    'Modifies an existing Conjur policy. Data may be explicitly deleted using\nthe `!delete`, `!revoke`, and `!deny` statements. Unlike `replace` mode,\nno data is ever implicitly deleted.\n\n##### Permissions required\n',
  operationId: 'updatePolicy',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the policy to update',
          example: 'root',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    body: {
      description: 'Policy',
      content: {
        'application/x-yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/plain': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/x-yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
        'text/yaml': {
          schema: z
            .string()
            .min(1)
            .openapi({
              example:
                '- !policy\n  id: database\n  body:\n  - !host\n    id: db-host\n  - !variable\n    id: db-password\n    owner: !host db-host\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Decsribes new data created by a successful policy load',
      content: {
        'application/json': {
          schema: z
            .object({
              created_roles: z.object({}).exactOptional(),
              version: z.number().exactOptional(),
            })
            .openapi({
              example: {
                created_roles: {
                  'myorg:host:database/db-host': {
                    api_key: '309yzpa1n5kp932waxw6d37x4hew2x8ve8w11m8xn92acfy672m929en',
                    id: 'myorg:host:database/db-host',
                  },
                },
                version: 1,
              },
              required: [],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    409: BusyResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getPublicKeysAccountKindIdentifierRoute = createRoute({
  method: 'get',
  path: '/public_keys/{account}/{kind}/{identifier}',
  tags: ['public keys'],
  summary: 'Shows all public keys for a resource.',
  description:
    'Shows all public keys for a resource as newline delimited string for compatibility with the authorized_keys SSH format.\nReturns an empty string if the resource does not exist, to prevent attackers from determining whether a resource exists.\n',
  operationId: 'showPublicKeys',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the resource for which to get the information about',
          example: 'admin',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description:
        'Public keys for a resource as newline delimited string for compatibility with the authorized_keys SSH format. Empty string if the resource does not exist',
      content: {
        'text/plain': {
          schema: z.string(),
          example:
            'ssh-rsa AAAAB3Nzabc2 admin@alice.com\n\nssh-rsa AAAAB3Nza3nx alice@example.com\n',
        },
      },
    },
    400: BadRequestResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: InternalServerErrorResponse,
  },
})

export const getRemoteHealthRemoteRoute = createRoute({
  method: 'get',
  path: '/remote_health/{remote}',
  tags: ['status'],
  summary: 'Health info about a given Conjur Enterprise server',
  description:
    'Use the remote_health route to check the health of any Conjur Enterprise Server from any other Conjur Enterprise Server.\nWith this route, you can check master health relative to a follower, or follower health relative\nto a standby, and so on.\n',
  operationId: 'remoteHealth',
  request: {
    params: z.object({
      remote: z
        .string()
        .openapi({
          param: {
            description: 'The hostname of the remote to check',
            example: 'conjur.myorg.com',
            in: 'path',
            name: 'remote',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The tests were successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    502: { description: 'The tests failed' },
  },
})

export const getResourcesRoute = createRoute({
  method: 'get',
  path: '/resources',
  tags: ['resources'],
  summary: 'Lists resources within an organization account.',
  description:
    'Lists resources within an organization account.\n\nIn the absence of an `account` query parameter, shows results for the account of the authorization token user.\n\nIf an `account` query parameter is given, shows results for the specified account.\n\nIf a `kind` query parameter is given, narrows results to only resources of that kind.\n\nIf a `limit` is given, returns no more than that number of results. Providing an `offset`\nskips a number of resources before returning the rest. In addition, providing an `offset`\nwill give `limit` a default value of 10 if none other is provided. These two parameters can\nbe combined to page through results.\n\nIf the parameter `count` is `true`, returns only the number of items in the list.\n\n##### Text search\n\nIf the `search` parameter is provided, narrows results to those pertaining to the search query.\nSearch works across resource IDs and the values of annotations. It weighs results so that those\nwith matching id or a matching value of an annotation called `name` appear first, then those with\nanother matching annotation value, and finally those with a matching  `kind`."\n',
  operationId: 'showResourcesForAllAccounts',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    query: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          example: 'myorg',
          in: 'query',
          name: 'account',
          schema: { $ref: '#/components/schemas/AccountName' },
          required: false,
        },
      }).exactOptional(),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'query',
          name: 'kind',
          schema: { $ref: '#/components/schemas/Kind' },
          required: false,
        },
      }).exactOptional(),
      search: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter resources based on this value by name',
            example: 'db',
            in: 'query',
            name: 'search',
            schema: {
              description: 'Only returns results that contain this string value',
              example: 'password',
              minLength: 1,
              type: 'string',
            },
            required: false,
          },
          description: 'Only returns results that contain this string value',
          example: 'password',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          OffsetSchema.openapi({
            param: {
              description: 'When listing resources, start at this item number.',
              in: 'query',
              name: 'offset',
              schema: { $ref: '#/components/schemas/Offset' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitSchema.openapi({
            param: {
              description: 'When listing resources, return up to this many results.',
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/Limit' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      count: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          CountSchema.openapi({
            param: {
              description:
                'When listing resources, if `true`, return only the count of the results.',
              in: 'query',
              name: 'count',
              schema: { $ref: '#/components/schemas/Count' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      role: RoleTypeSchema.openapi({
        param: {
          description:
            'Retrieves the resources list for a different role if the authenticated role has access',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'role',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
      acting_as: RoleTypeSchema.openapi({
        param: {
          description:
            'Retrieves the resources list for a different role if the authenticated role has access',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'acting_as',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The response body contains a list of resources',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  annotations: z.array(z.string()).exactOptional(),
                  created_at: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  owner: z.string().exactOptional(),
                  permissions: z
                    .array(
                      z
                        .object({
                          policy: z.string().exactOptional(),
                          privilege: z.string().exactOptional(),
                          role: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  policy: z.string().exactOptional(),
                  policy_versions: z
                    .array(
                      z
                        .object({
                          client_ip: z.string().exactOptional(),
                          created_at: z.string().exactOptional(),
                          finished_at: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          policy_sha256: z.string().exactOptional(),
                          policy_text: z.string().exactOptional(),
                          role: z.string().exactOptional(),
                          version: z.number().exactOptional(),
                        })
                        .openapi({
                          example: {
                            client_ip: '172.19.0.6',
                            created_at: '2021-03-23T16:37:09.250+00:00',
                            finished_at: '2021-03-23T16:37:09.435+00:00',
                            id: 'dev:policy:root',
                            policy_sha256:
                              '73d7b43ab17d69d163dedfaac88ec02a9c18ed8675abe4fe5643cd33470baf86',
                            policy_text: '- !variable one/password\n- !variable testSecret\n',
                            role: 'dev:user:admin',
                            version: 15,
                          },
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  restricted_to: z.array(z.string()).exactOptional(),
                  secrets: z
                    .array(
                      z
                        .object({
                          expires_at: z.string().exactOptional(),
                          version: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  example: {
                    annotations: [],
                    created_at: '2021-03-23T16:37:14.455+00:00',
                    id: 'dev:policy:conjur/authn-ldap/test',
                    owner: 'dev:user:admin',
                    permissions: [],
                    policy: 'dev:policy:root',
                    policy_versions: [],
                  },
                  required: [],
                }),
            )
            .openapi({
              example: [
                {
                  annotations: [],
                  created_at: '2021-03-23T16:37:14.455+00:00',
                  id: 'dev:policy:conjur/authn-ldap/test',
                  owner: 'dev:user:admin',
                  permissions: [],
                  policy: 'dev:policy:root',
                  policy_versions: [],
                },
              ],
            }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getResourcesAccountRoute = createRoute({
  method: 'get',
  path: '/resources/{account}',
  tags: ['resources'],
  summary: 'Lists resources within an organization account.',
  description:
    'Lists resources within an organization account.\n\nIf a `kind` query parameter is given, narrows results to only resources of that kind.\n\nIf a `limit` is given, returns no more than that number of results. Providing an `offset`\nskips a number of resources before returning the rest. In addition, providing an `offset`\nwill give `limit` a default value of 10 if none other is provided. These two parameters\ncan be combined to page through results.\n\nIf the parameter `count` is `true`, returns only the number of items in the list.\n\n##### Text search\n\nIf the `search` parameter is provided, narrows results to those pertaining to the search query.\nSearch works across resource IDs and the values of annotations. It weighs results so that those\nwith matching id or a matching value of an annotation called `name` appear first, then those with\nanother matching annotation value, and finally those with a matching  `kind`.\n',
  operationId: 'showResourcesForAccount',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
    }),
    query: z.object({
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'query',
          name: 'kind',
          schema: { $ref: '#/components/schemas/Kind' },
          required: false,
        },
      }).exactOptional(),
      search: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter resources based on this value by name',
            example: 'db',
            in: 'query',
            name: 'search',
            schema: {
              description: 'Only returns results that contain this string value',
              example: 'password',
              minLength: 1,
              type: 'string',
            },
            required: false,
          },
          description: 'Only returns results that contain this string value',
          example: 'password',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          OffsetSchema.openapi({
            param: {
              description: 'When listing resources, start at this item number.',
              in: 'query',
              name: 'offset',
              schema: { $ref: '#/components/schemas/Offset' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitSchema.openapi({
            param: {
              description: 'When listing resources, return up to this many results.',
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/Limit' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      count: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          CountSchema.openapi({
            param: {
              description:
                'When listing resources, if `true`, return only the count of the results.',
              in: 'query',
              name: 'count',
              schema: { $ref: '#/components/schemas/Count' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      role: RoleTypeSchema.openapi({
        param: {
          description:
            'Retrieves the resources list for a different role if the authenticated role has access',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'role',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
      acting_as: RoleTypeSchema.openapi({
        param: {
          description:
            'Retrieves the resources list for a different role if the authenticated role has access',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'acting_as',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The response body contains a list of resources',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  annotations: z.array(z.string()).exactOptional(),
                  created_at: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  owner: z.string().exactOptional(),
                  permissions: z
                    .array(
                      z
                        .object({
                          policy: z.string().exactOptional(),
                          privilege: z.string().exactOptional(),
                          role: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  policy: z.string().exactOptional(),
                  policy_versions: z
                    .array(
                      z
                        .object({
                          client_ip: z.string().exactOptional(),
                          created_at: z.string().exactOptional(),
                          finished_at: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          policy_sha256: z.string().exactOptional(),
                          policy_text: z.string().exactOptional(),
                          role: z.string().exactOptional(),
                          version: z.number().exactOptional(),
                        })
                        .openapi({
                          example: {
                            client_ip: '172.19.0.6',
                            created_at: '2021-03-23T16:37:09.250+00:00',
                            finished_at: '2021-03-23T16:37:09.435+00:00',
                            id: 'dev:policy:root',
                            policy_sha256:
                              '73d7b43ab17d69d163dedfaac88ec02a9c18ed8675abe4fe5643cd33470baf86',
                            policy_text: '- !variable one/password\n- !variable testSecret\n',
                            role: 'dev:user:admin',
                            version: 15,
                          },
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  restricted_to: z.array(z.string()).exactOptional(),
                  secrets: z
                    .array(
                      z
                        .object({
                          expires_at: z.string().exactOptional(),
                          version: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  example: {
                    annotations: [],
                    created_at: '2021-03-23T16:37:14.455+00:00',
                    id: 'dev:policy:conjur/authn-ldap/test',
                    owner: 'dev:user:admin',
                    permissions: [],
                    policy: 'dev:policy:root',
                    policy_versions: [],
                  },
                  required: [],
                }),
            )
            .openapi({
              example: [
                {
                  annotations: [],
                  created_at: '2021-03-23T16:37:14.455+00:00',
                  id: 'dev:policy:conjur/authn-ldap/test',
                  owner: 'dev:user:admin',
                  permissions: [],
                  policy: 'dev:policy:root',
                  policy_versions: [],
                },
              ],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getResourcesAccountKindRoute = createRoute({
  method: 'get',
  path: '/resources/{account}/{kind}',
  tags: ['resources'],
  summary: 'Lists resources of the same kind within an organization account.',
  description:
    'Lists resources of the same kind within an organization account.\n\nKinds of resources include: policy, user, host, group, layer, or variable\n\nIf a `limit` is given, returns no more than that number of results.\nProviding an `offset` skips a number of resources before returning the rest.\nIn addition, providing an `offset` will give `limit` a default value of 10 if\nnone other is provided. These two parameters can be combined to page through results.\n\nIf the parameter `count` is `true`, returns only the number of items in the list.\n\n##### Text search\n\nIf the `search` parameter is provided, narrows results to those pertaining to the search query.\nSearch works across resource IDs and the values of annotations. It weighs results so that those\nwith matching id or a matching value of an annotation called `name` appear first, then those with\nanother matching annotation value, and finally those with a matching  `kind`.\n',
  operationId: 'showResourcesForKind',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
    }),
    query: z.object({
      search: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter resources based on this value by name',
            example: 'db',
            in: 'query',
            name: 'search',
            schema: {
              description: 'Only returns results that contain this string value',
              example: 'password',
              minLength: 1,
              type: 'string',
            },
            required: false,
          },
          description: 'Only returns results that contain this string value',
          example: 'password',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          OffsetSchema.openapi({
            param: {
              description: 'When listing resources, start at this item number.',
              in: 'query',
              name: 'offset',
              schema: { $ref: '#/components/schemas/Offset' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitSchema.openapi({
            param: {
              description: 'When listing resources, return up to this many results.',
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/Limit' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      count: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          CountSchema.openapi({
            param: {
              description:
                'When listing resources, if `true`, return only the count of the results.',
              in: 'query',
              name: 'count',
              schema: { $ref: '#/components/schemas/Count' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      role: RoleTypeSchema.openapi({
        param: {
          description:
            'Retrieves the resources list for a different role if the authenticated role has access',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'role',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
      acting_as: RoleTypeSchema.openapi({
        param: {
          description:
            'Retrieves the resources list for a different role if the authenticated role has access',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'acting_as',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The response body contains a list of resources',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  annotations: z.array(z.string()).exactOptional(),
                  created_at: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  owner: z.string().exactOptional(),
                  permissions: z
                    .array(
                      z
                        .object({
                          policy: z.string().exactOptional(),
                          privilege: z.string().exactOptional(),
                          role: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  policy: z.string().exactOptional(),
                  policy_versions: z
                    .array(
                      z
                        .object({
                          client_ip: z.string().exactOptional(),
                          created_at: z.string().exactOptional(),
                          finished_at: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          policy_sha256: z.string().exactOptional(),
                          policy_text: z.string().exactOptional(),
                          role: z.string().exactOptional(),
                          version: z.number().exactOptional(),
                        })
                        .openapi({
                          example: {
                            client_ip: '172.19.0.6',
                            created_at: '2021-03-23T16:37:09.250+00:00',
                            finished_at: '2021-03-23T16:37:09.435+00:00',
                            id: 'dev:policy:root',
                            policy_sha256:
                              '73d7b43ab17d69d163dedfaac88ec02a9c18ed8675abe4fe5643cd33470baf86',
                            policy_text: '- !variable one/password\n- !variable testSecret\n',
                            role: 'dev:user:admin',
                            version: 15,
                          },
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  restricted_to: z.array(z.string()).exactOptional(),
                  secrets: z
                    .array(
                      z
                        .object({
                          expires_at: z.string().exactOptional(),
                          version: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  example: {
                    annotations: [],
                    created_at: '2021-03-23T16:37:14.455+00:00',
                    id: 'dev:policy:conjur/authn-ldap/test',
                    owner: 'dev:user:admin',
                    permissions: [],
                    policy: 'dev:policy:root',
                    policy_versions: [],
                  },
                  required: [],
                }),
            )
            .openapi({
              example: [
                {
                  annotations: [],
                  created_at: '2021-03-23T16:37:14.455+00:00',
                  id: 'dev:policy:conjur/authn-ldap/test',
                  owner: 'dev:user:admin',
                  permissions: [],
                  policy: 'dev:policy:root',
                  policy_versions: [],
                },
              ],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getResourcesAccountKindIdentifierRoute = createRoute({
  method: 'get',
  path: '/resources/{account}/{kind}/{identifier}',
  tags: ['resources'],
  summary: 'Shows a description of a single resource.',
  description:
    'Details about a single resource.\n\nIf `permitted_roles` and `privilege` are given, Conjur lists the\nroles with the specified privilege on the resource.\n\nIf `check`, `privilege` and `role` are given, Conjur checks if the\nspecified role has the privilege on the resource.\n\nIf `permitted_roles` and `check` are both given, Conjur responds to the `check` call ONLY.\n\n##### Permissions Required\n',
  operationId: 'showResource',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the resource for which to get the information about',
          example: 'conjur/authn-iam/test',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    query: z.object({
      permitted_roles: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Lists the roles which have the named privilege on a resource.',
            in: 'query',
            name: 'permitted_roles',
            schema: { example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
      privilege: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Level of privilege to filter on. Can only be used in combination with `permitted_roles` or `check` parameter.',
            in: 'query',
            name: 'privilege',
            schema: {
              description: 'Denotes a type of permission allowed on a resource',
              example: 'execute',
              minLength: 1,
              type: 'string',
            },
            required: false,
          },
          description: 'Denotes a type of permission allowed on a resource',
          example: 'execute',
        }),
      check: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Check whether a role has a privilege on a resource.',
            in: 'query',
            name: 'check',
            schema: {
              description: 'Checks whether a role has a privilege on a resource.',
              example: true,
              type: 'boolean',
            },
            required: false,
          },
          description: 'Checks whether a role has a privilege on a resource.',
          example: true,
        }),
      role: RoleTypeSchema.openapi({
        param: {
          description:
            'Role to check privilege on. Can only be used in combination with `check` parameter.',
          example: 'myorg:host:host1',
          in: 'query',
          name: 'role',
          schema: { $ref: '#/components/schemas/RoleType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The response body contains the list of role memberships or permitted roles',
      content: {
        'application/json': {
          schema: z
            .object({
              annotations: z.array(z.string()).exactOptional(),
              created_at: z.string().exactOptional(),
              id: z.string().exactOptional(),
              owner: z.string().exactOptional(),
              permissions: z
                .array(
                  z
                    .object({
                      policy: z.string().exactOptional(),
                      privilege: z.string().exactOptional(),
                      role: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              policy: z.string().exactOptional(),
              policy_versions: z
                .array(
                  z
                    .object({
                      client_ip: z.string().exactOptional(),
                      created_at: z.string().exactOptional(),
                      finished_at: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      policy_sha256: z.string().exactOptional(),
                      policy_text: z.string().exactOptional(),
                      role: z.string().exactOptional(),
                      version: z.number().exactOptional(),
                    })
                    .openapi({
                      example: {
                        client_ip: '172.19.0.6',
                        created_at: '2021-03-23T16:37:09.250+00:00',
                        finished_at: '2021-03-23T16:37:09.435+00:00',
                        id: 'dev:policy:root',
                        policy_sha256:
                          '73d7b43ab17d69d163dedfaac88ec02a9c18ed8675abe4fe5643cd33470baf86',
                        policy_text: '- !variable one/password\n- !variable testSecret\n',
                        role: 'dev:user:admin',
                        version: 15,
                      },
                      required: [],
                    }),
                )
                .exactOptional(),
              restricted_to: z.array(z.string()).exactOptional(),
              secrets: z
                .array(
                  z
                    .object({
                      expires_at: z.string().exactOptional(),
                      version: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                annotations: [],
                created_at: '2021-03-23T16:37:14.455+00:00',
                id: 'dev:policy:conjur/authn-ldap/test',
                owner: 'dev:user:admin',
                permissions: [],
                policy: 'dev:policy:root',
                policy_versions: [],
              },
              required: [],
            }),
        },
      },
    },
    204: { description: 'Permissions check was successful' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getRolesAccountKindIdentifierRoute = createRoute({
  method: 'get',
  path: '/roles/{account}/{kind}/{identifier}',
  tags: ['roles'],
  summary: 'Get role information',
  description:
    'Gets detailed information about a specific role, including the role members.\n\nIf a role A is granted to a role B, then role A is said to have role B as a member.\nThese relationships are described in the “members” portion of the returned JSON.\n\n##### Listing members\n\nIf `members` is provided, you will get the members of a role.\n\nIf a `kind` query parameter is given, narrows results to only resources of that kind.\n\nIf a `limit` is given, returns no more than that number of results. Providing an `offset`\nskips a number of resources before returning the rest. In addition, providing an `offset`\nwill give limit a default value of 10 if none other is provided. These two parameters\ncan be combined to page through results.\n\nIf the parameter `count` is true, returns only the number of items in the list.\n\n##### Text search\n\nIf the search parameter is provided, narrows results to those pertaining to the search query.\nSearch works across resource IDs and the values of annotations. It weights results so that\nthose with matching id or a matching value of an annotation called name appear first, then\nthose with another matching annotation value, and finally those with a matching kind.\n\n##### Parameter Priority\n\nIf Conjur is given any combination of optional parameters, it responds with ONLY results\nfor the parameter of the highest priority.\n\n1. `graph`\n2. `all`\n3. `memberships`\n4. `members`\n',
  operationId: 'showRole',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the role for which to get the information about',
          example: 'admin',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    query: z.object({
      all: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns an array of Role IDs representing all role memberships, expanded recursively.',
            in: 'query',
            name: 'all',
            schema: { type: 'string' },
            required: false,
          },
        }),
      memberships: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns all direct role memberships (members not expanded recursively).',
            in: 'query',
            name: 'memberships',
            schema: { type: 'string' },
            required: false,
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Returns a list of the Role's members.",
            in: 'query',
            name: 'members',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          OffsetSchema.openapi({
            param: {
              description: 'When listing members, start at this item number.',
              in: 'query',
              name: 'offset',
              schema: { $ref: '#/components/schemas/Offset' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitSchema.openapi({
            param: {
              description: 'When listing members, return up to this many results.',
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/Limit' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      count: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          CountSchema.openapi({
            param: {
              description: 'When listing members, if `true`, return only the count of members.',
              in: 'query',
              name: 'count',
              schema: { $ref: '#/components/schemas/Count' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      search: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When listing members, the results will be narrowed to only those matching the provided string',
            in: 'query',
            name: 'search',
            schema: { example: 'user', minLength: 1, type: 'string' },
            required: false,
          },
          example: 'user',
        }),
      graph: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If included in the query returns a graph view of the role',
            in: 'query',
            name: 'graph',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response body contains the requested role(s)/member(s)',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              example: {
                created_at: '2020-12-31:12:34:56.789+00:00',
                id: 'myorg:user:admin',
                members: [],
              },
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const postRolesAccountKindIdentifierRoute = createRoute({
  method: 'post',
  path: '/roles/{account}/{kind}/{identifier}',
  tags: ['roles'],
  summary: 'Update or modify an existing role membership',
  description:
    'Updates or modifies an existing role membership.\n\nIf a role A is granted to a role B, then role A is said to have role B as a member.\nThese relationships are described in the “members” portion of the returned JSON.\n\nWhen the `members` query parameter is provided, you will get the members of a role.\n\nWhen the `members` and `member` query parameters are provided, the role specfified by\n`member` will be added as a member of the role specified in the endpoint URI.\n',
  operationId: 'addMemberToRole',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the role for which to get the information about',
          example: 'admin',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    query: z.object({
      members: z
        .string()
        .openapi({
          param: {
            description: "Returns a list of the Role's members.",
            in: 'query',
            name: 'members',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member: RoleTypeSchema.openapi({
        param: {
          description: 'The identifier of the Role to be added as a member.',
          in: 'query',
          name: 'member',
          required: true,
          schema: { $ref: '#/components/schemas/RoleType' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Member was added to role successfully' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const deleteRolesAccountKindIdentifierRoute = createRoute({
  method: 'delete',
  path: '/roles/{account}/{kind}/{identifier}',
  tags: ['roles'],
  summary: 'Deletes an existing role membership',
  description:
    'Deletes an existing role membership.\n\nIf a role A is granted to a role B, then role A is said to have role B as a member.\nThese relationships are described in the “members” portion of the returned JSON.\n\nWhen the `members` query parameter is provided, you will get the members of a role.\n\nWhen the `members` and `member` query parameters are provided, the role specfified by\n`member` will be removed as a member of the role specified in the endpoint URI.\n',
  operationId: 'removeMemberFromRole',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource',
          example: 'user',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'ID of the role for which to get the information about',
          example: 'admin',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    query: z.object({
      members: z
        .string()
        .openapi({
          param: {
            description: "Returns a list of the Role's members.",
            in: 'query',
            name: 'members',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member: RoleTypeSchema.openapi({
        param: {
          description: 'The identifier of the Role to be added as a member.',
          in: 'query',
          name: 'member',
          required: true,
          schema: { $ref: '#/components/schemas/RoleType' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Member was deleted from role successfully' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getSecretsRoute = createRoute({
  method: 'get',
  path: '/secrets',
  tags: ['secrets'],
  summary: 'Fetch multiple secrets',
  description:
    'Fetches multiple secret values in one invocation. It’s faster to fetch secrets in batches than to fetch them one at a time.',
  operationId: 'getSecrets',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIDParamsSchema,
      'Accept-Encoding': z
        .literal('base64')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set the encoding of the response object',
            in: 'header',
            name: 'Accept-Encoding',
            schema: { enum: ['base64'], type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      variable_ids: z
        .string()
        .openapi({
          param: {
            description: 'Comma-delimited, URL-encoded resource IDs of the variables.',
            in: 'query',
            name: 'variable_ids',
            required: true,
            schema: {
              description:
                'Comma-delimited, URL-encoded resource identifiers.\n\n##### Resources IDs encoding:\n\n- `myapp-01` -> `myapp-01` (unchanged)\n- `alice@devops` -> `alice%40devops`\n- `prod/aws/db-password` -> `prod%2Faws%2Fdb-password`\n- `research+development` -> `research%2Bdevelopment`\n- `sales&marketing` -> `sales%26marketing`\n',
              example: 'myorg:variable:secret1,myorg:variable:secret1',
              type: 'string',
            },
          },
          description:
            'Comma-delimited, URL-encoded resource identifiers.\n\n##### Resources IDs encoding:\n\n- `myapp-01` -> `myapp-01` (unchanged)\n- `alice@devops` -> `alice%40devops`\n- `prod/aws/db-password` -> `prod%2Faws%2Fdb-password`\n- `research+development` -> `research%2Bdevelopment`\n- `sales&marketing` -> `sales%26marketing`\n',
          example: 'myorg:variable:secret1,myorg:variable:secret1',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The batch secret values',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              example: {
                'myorg:variable:secret1': 'secret1Value',
                'myorg:variable:secret2': 'secret2Value',
              },
            }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourcesNotFoundResponse,
    406: {
      description: 'Issue encoding secret into JSON format',
      content: { 'application/json': { schema: z.object({}) } },
    },
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getSecretsAccountKindIdentifierRoute = createRoute({
  method: 'get',
  path: '/secrets/{account}/{kind}/{identifier}',
  tags: ['secrets'],
  summary: 'Fetches the value of a secret from the specified Secret.',
  description:
    'Fetches the value of a secret from the specified Secret. The latest version\nwill be retrieved unless the version parameter is specified. The twenty most recent secret versions are retained.\n\nThe secret data is returned in the response body.\n\nNote: Conjur will allow you to add a secret to any resource, but the best practice is to store\nand retrieve secret data only using Secret resources.\n',
  operationId: 'getSecret',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource - in almost all cases this should be `variable`',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'URL-encoded variable ID',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    query: z.object({
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ResourceVersionSchema.openapi({
            param: {
              description:
                '(**Optional**) Version you want to retrieve (Conjur keeps the last 20 versions of a secret)',
              in: 'query',
              name: 'version',
              schema: { $ref: '#/components/schemas/ResourceVersion' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The secret value was added successfully',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'supersecret' }) } },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const postSecretsAccountKindIdentifierRoute = createRoute({
  method: 'post',
  path: '/secrets/{account}/{kind}/{identifier}',
  tags: ['secrets'],
  summary: 'Creates a secret value within the specified variable.',
  description:
    'Creates a secret value within the specified Secret.\n\n\nNote: Conjur will allow you to add a secret to any resource, but the\nbest practice is to store and retrieve secret data only using Secret resources.\n',
  operationId: 'createSecret',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      account: AccountNameSchema.openapi({
        param: {
          description: 'Organization account name',
          in: 'path',
          name: 'account',
          required: true,
          schema: { $ref: '#/components/schemas/AccountName' },
        },
      }),
      kind: KindSchema.openapi({
        param: {
          description: 'Type of resource - in almost all cases this should be `variable`',
          in: 'path',
          name: 'kind',
          required: true,
          schema: { $ref: '#/components/schemas/Kind' },
        },
      }),
      identifier: ResourceIDSchema.openapi({
        param: {
          description: 'URL-encoded variable ID',
          in: 'path',
          name: 'identifier',
          required: true,
          schema: { $ref: '#/components/schemas/ResourceID' },
        },
      }),
    }),
    query: z.object({
      expirations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tells the server to reset the variables expiration date',
            in: 'query',
            name: 'expirations',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Secret data',
      content: { 'application/octet-stream': { schema: z.string() } },
    },
  },
  responses: {
    201: { description: 'The secret value was added successfully' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getWhoamiRoute = createRoute({
  method: 'get',
  path: '/whoami',
  tags: ['status'],
  summary: 'Provides information about the client making an API request.',
  description:
    'WhoAmI provides information about the client making an API request.\nIt can be used to help troubleshoot configuration by verifying authentication\nand the client IP address for audit and network access restrictions.\nFor more information, see Host Attributes.\n',
  operationId: 'whoAmI',
  request: { headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }) },
  responses: {
    200: {
      description: 'Details about the client making the request',
      content: {
        'application/json': {
          schema: z
            .object({
              account: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The account attribute of the client provided access token.',
                  example: 'dev',
                }),
              client_ip: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The request client IP address as determined by Conjur. This same IP address appears in application logs and audit logs.',
                  example: '127.0.0.1',
                }),
              token_issued_at: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The issued timestamp, that is, when the provided access token was created (iat field in the JWT)',
                  example: '2017-08-04T22:27:20+00:00',
                }),
              user_agent: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The incoming request HTTP user agent header.',
                  example:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The username attribute of the provided access token.',
                  example: 'admin',
                }),
            })
            .openapi({
              description: 'Information about the client making a request',
              required: [],
            }),
        },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const patchAuthenticatorAccountRoute = createRoute({
  method: 'patch',
  path: '/{authenticator}/{account}',
  tags: ['authentication'],
  summary: 'Enables or disables authenticator defined without service_id.',
  description:
    'Allows you to either enable or disable a given authenticator that does not have service_id (For example: authn-gcp).\n\nWhen you enable or disable an authenticator via this\nendpoint, the status of the authenticator is stored\nin the Conjur database. The enablement status of the authenticator\nservice may be overridden by setting the `CONJUR_AUTHENTICATORS`\nenvironment variable on the Conjur server; in the case where this\nenvironment variable is set, the database record of whether the\nauthenticator service is enabled will be ignored.\n\n**This endpoint is part of an early implementation of support for enabling Conjur\nauthenticators via the API, and is currently available at the Community\n(or early alpha) level. This endpoint is still subject to breaking\nchanges in the future.**\n',
  operationId: 'enableAuthenticator',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      authenticator: z
        .enum([
          'authn-iam',
          'authn-oidc',
          'authn-ldap',
          'authn-k8s',
          'authn-gcp',
          'authn-azure',
          'authn-jwt',
        ])
        .openapi({
          param: {
            description: 'The authenticator to update',
            example: 'authn-gcp',
            in: 'path',
            name: 'authenticator',
            required: true,
            schema: {
              enum: [
                'authn-iam',
                'authn-oidc',
                'authn-ldap',
                'authn-k8s',
                'authn-gcp',
                'authn-azure',
                'authn-jwt',
              ],
              type: 'string',
            },
          },
        }),
      account: z
        .string()
        .openapi({
          param: {
            description: 'Organization account name',
            example: 'dev',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Contains either `enabled=true` or `enabled=false` to\nenable or disable an authenticator\n',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              enabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The config was updated properly' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchAuthenticatorServiceIdAccountRoute = createRoute({
  method: 'patch',
  path: '/{authenticator}/{service_id}/{account}',
  tags: ['authentication'],
  summary: 'Enables or disables authenticator service instances.',
  description:
    'Allows you to either enable or disable a given authenticator\nservice instance.\n\nWhen you enable or disable an authenticator service instance via this\nendpoint, the status of the authenticator service instance is stored\nin the Conjur database. The enablement status of the authenticator\nservice instance may be overridden by setting the `CONJUR_AUTHENTICATORS`\nenvironment variable on the Conjur server; in the case where this\nenvironment variable is set, the database record of whether the\nauthenticator service instance is enabled will be ignored.\n\n**This endpoint is part of an early implementation of support for enabling Conjur\nauthenticators via the API, and is currently available at the Community\n(or early alpha) level. This endpoint is still subject to breaking\nchanges in the future.**\n',
  operationId: 'enableAuthenticatorInstance',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      authenticator: z
        .enum([
          'authn-iam',
          'authn-oidc',
          'authn-ldap',
          'authn-k8s',
          'authn-gcp',
          'authn-azure',
          'authn-jwt',
        ])
        .openapi({
          param: {
            description: 'The authenticator to update',
            example: 'authn-oidc',
            in: 'path',
            name: 'authenticator',
            required: true,
            schema: {
              enum: [
                'authn-iam',
                'authn-oidc',
                'authn-ldap',
                'authn-k8s',
                'authn-gcp',
                'authn-azure',
                'authn-jwt',
              ],
              type: 'string',
            },
          },
        }),
      service_id: ServiceIDParamsSchema,
      account: z
        .string()
        .openapi({
          param: {
            description: 'Organization account name',
            example: 'dev',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Contains either `enabled=true` or `enabled=false` to\nenable or disable an authenticator\n',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              enabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The config was updated properly' },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    404: ResourceNotFoundResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ conjurAuth: [] }],
})

export const getAuthenticatorServiceIdAccountStatusRoute = createRoute({
  method: 'get',
  path: '/{authenticator}/{service_id}/{account}/status',
  tags: ['status'],
  summary: 'Details whether an authentication service has been configured properly',
  description:
    'Once the status webservice has been properly configured and the relevant user\ngroups have been given permissions to access the status webservice, the\nusers in those groups can check the status of the authenticator.\n\nSupported Authenticators:\n  - Azure\n  - OIDC\n\nNot Supported:\n  - AWS IAM\n  - Kubernetes\n  - LDAP\n\nSee [Conjur Documentation](https://docs.conjur.org/Latest/en/Content/Integrations/Authn-status.htm)\nfor details on setting up the authenticator status webservice.\n',
  operationId: 'getServiceAuthenticatorStatus',
  request: {
    headers: z.object({ 'X-Request-Id': RequestIDParamsSchema }),
    params: z.object({
      authenticator: z
        .string()
        .openapi({
          param: {
            description: 'The type of authenticator',
            example: 'authn-oidc',
            in: 'path',
            name: 'authenticator',
            required: true,
            schema: { type: 'string' },
          },
        }),
      service_id: ServiceIDParamsSchema,
      account: z
        .string()
        .openapi({
          param: {
            description: 'The organization account name',
            example: 'dev',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response contains info about the result',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The error message if there was an error',
                  example:
                    "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
                }),
              status: z
                .string()
                .openapi({
                  description: "The status of the endpoint, 'error' if there was an error",
                  example: 'error',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedErrorResponse,
    403: InadequatePrivilegesResponse,
    404: { description: 'The service was not found' },
    500: {
      description: 'The response contains info about the result',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The error message if there was an error',
                  example:
                    "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
                }),
              status: z
                .string()
                .openapi({
                  description: "The status of the endpoint, 'error' if there was an error",
                  example: 'error',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
    501: {
      description: 'The response contains info about the result',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The error message if there was an error',
                  example:
                    "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
                }),
              status: z
                .string()
                .openapi({
                  description: "The status of the endpoint, 'error' if there was an error",
                  example: 'error',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
    },
  },
  security: [{ conjurAuth: [] }],
})
