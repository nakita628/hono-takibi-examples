import { createRoute, z } from '@hono/zod-openapi'

const GoTrueSecuritySchema = z
  .object({ captcha_token: z.string().exactOptional() })
  .openapi({
    description:
      'Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.\n',
    required: [],
  })
  .openapi('GoTrueSecurity')

const ErrorSchemaSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Certain responses will contain this property with the provided values.\n\nUsually one of these:\n  - invalid_request\n  - unauthorized_client\n  - access_denied\n  - server_error\n  - temporarily_unavailable\n  - unsupported_otp_type',
      }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Certain responses that have an `error` property may have this property which describes the error.\n',
      }),
    code: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The HTTP status code. Usually missing if `error` is present.\n',
        example: 400,
      }),
    msg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A basic message describing the problem with the request. Usually missing if `error` is present.\n',
      }),
    error_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short code used to describe the class of error encountered.\n' }),
    weak_password: z
      .object({ reasons: z.array(z.enum(['length', 'characters', 'pwned'])).exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Only returned on the `/signup` endpoint if the password used is too weak. Inspect the `reasons` and `msg` property to identify the causes.\n',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('ErrorSchema')

const MFAFactorSchemaSchema = z
  .object({
    id: z.uuid().exactOptional(),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Usually one of:\n- verified\n- unverified' }),
    friendly_name: z.string().exactOptional(),
    factor_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Usually one of:\n- totp\n- phone\n- webauthn\n- recovery_code' }),
    webauthn_credential: z.string().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_challenged_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ description: 'Represents a MFA factor.', required: [] })
  .openapi('MFAFactorSchema')

const IdentitySchemaSchema = z
  .object({
    identity_id: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    user_id: z.uuid().exactOptional(),
    identity_data: z.object({}).exactOptional(),
    provider: z.string().exactOptional(),
    last_sign_in_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.email().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentitySchema')

const UserSchemaSchema = z
  .object({
    id: z.uuid().exactOptional(),
    aud: z.string().exactOptional().openapi({ deprecated: true }),
    role: z.string().exactOptional(),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "User's primary contact email. In most cases you can uniquely identify a user by their email address, but not in all cases.",
      }),
    email_confirmed_at: z.iso.datetime({ offset: true }).exactOptional(),
    phone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "User's primary contact phone number. In most cases you can uniquely identify a user by their phone number, but not in all cases.",
      }),
    phone_confirmed_at: z.iso.datetime({ offset: true }).exactOptional(),
    confirmation_sent_at: z.iso.datetime({ offset: true }).exactOptional(),
    confirmed_at: z.iso.datetime({ offset: true }).exactOptional(),
    recovery_sent_at: z.iso.datetime({ offset: true }).exactOptional(),
    new_email: z.email().exactOptional(),
    email_change_sent_at: z.iso.datetime({ offset: true }).exactOptional(),
    new_phone: z.string().exactOptional(),
    phone_change_sent_at: z.iso.datetime({ offset: true }).exactOptional(),
    reauthentication_sent_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_sign_in_at: z.iso.datetime({ offset: true }).exactOptional(),
    app_metadata: z.object({}).exactOptional(),
    user_metadata: z.object({}).exactOptional(),
    factors: z.array(MFAFactorSchemaSchema).exactOptional(),
    identities: z.array(IdentitySchemaSchema).exactOptional(),
    banned_until: z.iso.datetime({ offset: true }).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    deleted_at: z.iso.datetime({ offset: true }).exactOptional(),
    is_anonymous: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Object describing the user related to the issued access and refresh tokens.',
    required: [],
  })
  .openapi('UserSchema')

const SAMLAttributeMappingSchemaSchema = z
  .object({
    keys: z
      .looseObject({})
      .superRefine((o, ctx) => {
        const regex = new RegExp('.+')
        const Schema = z
          .object({
            name: z.string().exactOptional(),
            names: z.array(z.string()).exactOptional(),
            default: z.xor([z.string(), z.number(), z.boolean(), z.object({})]).exactOptional(),
          })
          .openapi({ required: [] })
        for (const [k, val] of Object.entries(o)) {
          if (!regex.test(k)) {
            continue
          }
          const result = Schema.safeParse(val)
          if (!result.success) {
            for (const issue of result.error.issues) {
              ctx.addIssue({ ...issue, path: [k, ...issue.path] })
            }
          }
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SAMLAttributeMappingSchema')

const SSOProviderSchemaSchema = z
  .object({
    id: z.uuid().exactOptional(),
    sso_domains: z
      .array(z.object({ domain: z.hostname().exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
    saml: z
      .object({
        entity_id: z.string().exactOptional(),
        metadata_xml: z.string().exactOptional(),
        metadata_url: z.string().exactOptional(),
        attribute_mapping: SAMLAttributeMappingSchemaSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SSOProviderSchema')

const AccessTokenResponseSchemaSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'A valid JWT that will expire in `expires_in` seconds.' }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque string that can be used once to obtain a new access and refresh token.',
      }),
    token_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'What type of token this is. Only `bearer` returned, may change in the future.',
      }),
    expires_in: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of seconds after which the `access_token` should be renewed by using the refresh token with the `refresh_token` grant type.',
      }),
    expires_at: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'UNIX timestamp after which the `access_token` should be renewed by using the refresh token with the `refresh_token` grant type.',
      }),
    weak_password: z
      .object({
        reasons: z.array(z.enum(['length', 'characters', 'pwned'])).exactOptional(),
        message: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'Only returned on the `/token?grant_type=password` endpoint. When present, it indicates that the password used is weak. Inspect the `reasons` and/or `message` properties to identify why.',
        required: [],
      }),
    user: UserSchemaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessTokenResponseSchema')

const MFARecoveryCodesStatusSchemaSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: "ID of the user's `recovery_code` factor." }),
    type: z.string().exactOptional().openapi({ description: 'Always `recovery_code`.' }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of codes in the current set.', example: 10 }),
    remaining: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of codes in the current set that have not been used yet.',
        example: 9,
      }),
  })
  .openapi({
    description: "Enrollment status of the user's MFA recovery codes. Never contains code values.",
    required: [],
  })
  .openapi('MFARecoveryCodesStatusSchema')

const MFARecoveryCodesSchemaSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: "ID of the user's `recovery_code` factor." }),
    type: z.string().exactOptional().openapi({ description: 'Always `recovery_code`.' }),
    friendly_name: z.string().exactOptional().openapi({ example: 'Recovery codes' }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of codes in the set.', example: 10 }),
    codes: z
      .array(z.string().openapi({ example: 'k4m9x7qp2ab8ht3z' }))
      .exactOptional()
      .openapi({
        description:
          'The plaintext single-use codes in canonical form (16 characters by default). Show them to the user once.\n',
      }),
  })
  .openapi({
    description:
      'A freshly generated set of MFA recovery codes. Returned only by `POST /factors/recovery-codes` and `POST /factors/recovery-codes/regenerate`; the codes cannot be retrieved afterwards.\n',
    required: [],
  })
  .openapi('MFARecoveryCodesSchema')

const TOTPPhoneChallengeResponseSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        example: '14c1560e-2749-4522-bb62-d1458451830a',
        description: 'ID of the challenge.',
      }),
    type: z.enum(['totp', 'phone']).openapi({ description: 'Type of the challenge.' }),
    expires_at: z
      .int()
      .openapi({
        example: 1674840917,
        description:
          'UNIX seconds of the timestamp past which the challenge should not be verified.',
      }),
  })
  .openapi({ required: ['id', 'type', 'expires_at'] })
  .openapi('TOTPPhoneChallengeResponse')

const PublicKeyCredentialDescriptorSchema = z
  .object({
    type: z.literal('public-key').openapi({ description: 'Credential type' }),
    id: z.base64url().openapi({ description: 'Credential ID' }),
    transports: z
      .array(z.enum(['usb', 'nfc', 'ble', 'internal', 'hybrid']))
      .exactOptional()
      .openapi({ description: 'Supported transports for this credential' }),
  })
  .openapi({ required: ['type', 'id'] })
  .openapi('PublicKeyCredentialDescriptor')

const CredentialCreationOptionsSchema = z
  .object({
    rp: z
      .object({
        id: z.string().openapi({ description: 'Relying Party ID (usually the domain)' }),
        name: z.string().openapi({ description: 'Human-readable Relying Party name' }),
      })
      .openapi({ required: ['name', 'id'] }),
    user: z
      .object({
        id: z
          .xor([z.base64url(), z.string()])
          .openapi({
            description:
              'User handle (opaque byte sequence, base64url encoded string or raw bytes)',
          }),
        name: z
          .string()
          .openapi({ description: 'User account identifier (e.g., username or email)' }),
        displayName: z.string().openapi({ description: 'Human-readable user display name' }),
      })
      .openapi({ required: ['id', 'name', 'displayName'] }),
    challenge: z
      .base64url()
      .openapi({ description: 'A challenge to be signed by the authenticator' }),
    pubKeyCredParams: z
      .array(
        z
          .object({
            type: z.literal('public-key'),
            alg: z
              .int()
              .openapi({
                description: 'COSE algorithm identifier (e.g., -7 for ES256, -257 for RS256)',
              }),
          })
          .openapi({ required: ['type', 'alg'] }),
      )
      .openapi({ description: 'List of supported public key algorithms' }),
    timeout: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Time (in milliseconds) that the caller is willing to wait for the call to complete',
      }),
    excludeCredentials: z
      .array(PublicKeyCredentialDescriptorSchema)
      .exactOptional()
      .openapi({ description: 'List of credentials to exclude (prevent re-registration)' }),
    authenticatorSelection: z
      .object({
        authenticatorAttachment: z
          .enum(['platform', 'cross-platform'])
          .exactOptional()
          .openapi({ description: 'Preferred authenticator type' }),
        requireResidentKey: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether to require a resident key (deprecated, use residentKey)',
          }),
        residentKey: z
          .enum(['required', 'preferred', 'discouraged'])
          .exactOptional()
          .openapi({ description: 'Resident key requirement' }),
        userVerification: z
          .enum(['required', 'preferred', 'discouraged'])
          .exactOptional()
          .openapi({ description: 'User verification requirement' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    attestation: z
      .enum(['none', 'indirect', 'direct', 'enterprise'])
      .exactOptional()
      .openapi({ description: 'Attestation conveyance preference' }),
    attestationFormats: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Preferred attestation statement formats' }),
    hints: z
      .array(z.enum(['security-key', 'client-device', 'hybrid']))
      .exactOptional()
      .openapi({ description: 'Hints for the browser about what types of authenticators to show' }),
    extensions: z
      .object({})
      .exactOptional()
      .openapi({ description: 'WebAuthn extensions to enable' }),
  })
  .openapi({
    description: 'PublicKeyCredentialCreationOptions for WebAuthn registration',
    required: ['rp', 'user', 'challenge', 'pubKeyCredParams'],
  })
  .openapi('CredentialCreationOptions')

const CredentialRequestOptionsSchema = z
  .object({
    challenge: z
      .base64url()
      .openapi({ description: 'A challenge to be signed by the authenticator' }),
    timeout: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Time (in milliseconds) that the caller is willing to wait for the call to complete',
      }),
    rpId: z.string().exactOptional().openapi({ description: 'Relying Party ID' }),
    allowCredentials: z
      .array(PublicKeyCredentialDescriptorSchema)
      .exactOptional()
      .openapi({ description: 'List of acceptable credentials for authentication' }),
    userVerification: z
      .enum(['required', 'preferred', 'discouraged'])
      .exactOptional()
      .openapi({ description: 'User verification requirement' }),
    hints: z
      .array(z.enum(['security-key', 'client-device', 'hybrid']))
      .exactOptional()
      .openapi({ description: 'Hints for the browser about what types of authenticators to show' }),
    extensions: z
      .object({})
      .exactOptional()
      .openapi({ description: 'WebAuthn extensions to enable' }),
  })
  .openapi({
    description: 'PublicKeyCredentialRequestOptions for WebAuthn authentication',
    required: ['challenge'],
  })
  .openapi('CredentialRequestOptions')

const WebAuthnChallengeResponseSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        example: '14c1560e-2749-4522-bb62-d1458451830a',
        description: 'ID of the challenge.',
      }),
    type: z.literal('webauthn').openapi({ description: 'Type of the challenge.' }),
    expires_at: z
      .int()
      .exactOptional()
      .openapi({
        example: 1674840917,
        description:
          'UNIX seconds of the timestamp past which the challenge should not be verified.',
      }),
    webauthn: z
      .discriminatedUnion('type', [
        z
          .object({
            type: z.literal('create').openapi({ description: 'Credential creation operation' }),
            credential_options: z
              .object({ publicKey: CredentialCreationOptionsSchema })
              .openapi({ required: ['publicKey'] }),
          })
          .openapi({ required: ['type', 'credential_options'] }),
        z
          .object({
            type: z.literal('request').openapi({ description: 'Credential request operation' }),
            credential_options: z
              .object({ publicKey: CredentialRequestOptionsSchema })
              .openapi({ required: ['publicKey'] }),
          })
          .openapi({ required: ['type', 'credential_options'] }),
      ])
      .openapi({ discriminator: { propertyName: 'type' } }),
  })
  .openapi({ required: ['id', 'type', 'webauthn'] })
  .openapi('WebAuthnChallengeResponse')

const OAuthClientSchemaSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ description: 'Unique client identifier' }),
    client_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable name of the client application' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client secret for confidential clients (only returned on registration/regeneration)',
      }),
    client_type: z
      .enum(['public', 'confidential'])
      .exactOptional()
      .openapi({ description: 'Type of the client' }),
    token_endpoint_auth_method: z
      .enum(['none', 'client_secret_basic', 'client_secret_post'])
      .exactOptional()
      .openapi({ description: 'Authentication method for the token endpoint' }),
    registration_type: z
      .enum(['dynamic', 'manual'])
      .exactOptional()
      .openapi({ description: 'Registration type of the client' }),
    client_uri: z
      .url()
      .exactOptional()
      .openapi({ description: "URL of the client application's homepage" }),
    logo_uri: z
      .url()
      .exactOptional()
      .openapi({ description: "URL of the client application's logo" }),
    redirect_uris: z
      .array(z.url())
      .exactOptional()
      .openapi({ description: 'Array of redirect URIs used by the client' }),
    grant_types: z
      .array(z.enum(['authorization_code', 'refresh_token']))
      .exactOptional()
      .openapi({ description: 'OAuth grant types the client is authorized to use' }),
    response_types: z
      .array(z.literal('code'))
      .exactOptional()
      .openapi({ description: 'OAuth response types the client can use' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'Space-separated list of scope values' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ description: 'Represents an OAuth 2.1 client', required: [] })
  .openapi('OAuthClientSchema')

const CustomOAuthProviderSchemaSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Unique provider identifier' }),
    provider_type: z.enum(['oauth2', 'oidc']).openapi({ description: 'Type of OAuth provider' }),
    identifier: z
      .string()
      .regex(/^custom:[a-zA-Z0-9_-]+$/)
      .openapi({
        description: "Unique identifier for the provider (must start with 'custom:' prefix)",
        example: 'custom:mycompany',
      }),
    name: z
      .string()
      .openapi({ description: 'Human-readable name of the provider', example: 'My Company SSO' }),
    client_id: z.string().openapi({ description: 'OAuth client ID' }),
    acceptable_client_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional acceptable client IDs for token validation' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "OAuth scopes to request (OIDC providers will automatically include 'openid')",
        example: ['openid', 'email', 'profile'],
      }),
    pkce_enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether PKCE (Proof Key for Code Exchange) is enabled' }),
    attribute_mapping: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Maps provider claims to user attributes',
        example: { email: 'user_email', name: 'full_name' },
      }),
    custom_claims_allowlist: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Raw IdP claim keys copied verbatim into the user's custom_claims (e.g. groups, org_id). For OIDC providers these are read from the ID token claims (falling back to the userinfo response when no ID token is returned); for OAuth2 providers they are read from the userinfo response. Empty preserves no non-standard claims.",
        example: ['groups', 'org_id'],
      }),
    authorization_params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional parameters to include in authorization requests as string key-value pairs (cannot override reserved OAuth parameters)',
        example: { prompt: 'consent' },
      }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether the provider is enabled' }),
    email_optional: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether email is optional for users from this provider' }),
    issuer: z
      .url()
      .exactOptional()
      .openapi({
        description: 'OIDC issuer URL (required for OIDC providers)',
        example: 'https://accounts.google.com',
      }),
    discovery_url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'OIDC discovery URL (optional, defaults to {issuer}/.well-known/openid-configuration)',
      }),
    skip_nonce_check: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Skip nonce validation for OIDC (not recommended for production)' }),
    authorization_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'OAuth 2.0 authorization endpoint (required for OAuth2 providers)' }),
    token_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'OAuth 2.0 token endpoint (required for OAuth2 providers)' }),
    userinfo_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'OAuth 2.0 userinfo endpoint (required for OAuth2 providers)' }),
    jwks_uri: z
      .url()
      .exactOptional()
      .openapi({ description: 'JWKS URI for token validation (optional for OAuth2 providers)' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description: 'Represents a custom OAuth 2.0 or OIDC provider configuration',
    required: ['id', 'provider_type', 'identifier', 'name', 'client_id'],
  })
  .openapi('CustomOAuthProviderSchema')

const OAuthCallbackRedirectResponseResponse = {
  description:
    'HTTP Redirect to a URL containing the `error` and `error_description` query parameters which should be shown to the user requesting the OAuth sign-in flow.\n',
  headers: z.object({
    Location: {
      description: 'URL containing the `error` and `error_description` query parameters.\n',
      schema: z
        .url()
        .exactOptional()
        .openapi({
          description: 'URL containing the `error` and `error_description` query parameters.\n',
          param: { required: false },
          example:
            'https://example.com/?error=server_error&error_description=User%20does%20not%20exist.',
        }),
    },
  }),
}

const OAuthAuthorizeRedirectResponseResponse = {
  description: "HTTP Redirect to the OAuth identity provider's authorization URL.\n",
  headers: z.object({
    Location: {
      description:
        'URL to which the user agent should redirect (or open in a browser for mobile apps).\n',
      schema: z
        .url()
        .exactOptional()
        .openapi({
          description:
            'URL to which the user agent should redirect (or open in a browser for mobile apps).\n',
          param: { required: false },
        }),
    },
  }),
}

const RateLimitResponseResponse = {
  description: 'HTTP Too Many Requests response, when a rate limiter has been breached.\n',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.int().exactOptional().openapi({ example: 429 }),
          msg: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A basic message describing the rate limit breach. Do not use as an error code identifier.',
              example: 'Too many requests. Please try again in a few seconds.',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const BadRequestResponseResponse = {
  description:
    'HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).\n',
  content: { 'application/json': { schema: ErrorSchemaSchema } },
}

const UnauthorizedResponseResponse = {
  description: 'HTTP Unauthorized response.\n',
  content: { 'application/json': { schema: ErrorSchemaSchema } },
}

const ForbiddenResponseResponse = {
  description: 'HTTP Forbidden response.\n',
  content: { 'application/json': { schema: ErrorSchemaSchema } },
}

const InternalServerErrorResponseResponse = {
  description: 'HTTP Internal Server Error.\n',
  content: { 'application/json': { schema: ErrorSchemaSchema } },
}

const AccessRefreshTokenRedirectResponseResponse = {
  description:
    'HTTP See Other redirect response where `Location` is a specially formatted URL that includes an `access_token`, `refresh_token`, `expires_in` as URL query encoded values in the URL fragment (anything after `#`). These values are encoded in the fragment as this value is only visible to the browser handling the redirect and is not sent to the server.\n',
  headers: z.object({
    Location: {
      schema: z
        .url()
        .exactOptional()
        .openapi({
          param: { required: false },
          example: 'https://example.com/#access_token=...&refresh_token=...&expires_in=...',
        }),
    },
  }),
}

const UserAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description: 'An access token in the form of a JWT issued by this server.\n',
}

const AdminAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description: 'A special admin JWT.\n',
}

const APIKeyAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'apikey',
  description:
    'When deployed on Supabase, this server requires an `apikey` header containing a valid Supabase-issued API key to call any endpoint.\n',
}

export const postTokenRoute = createRoute({
  method: 'post',
  path: '/token',
  tags: ['auth'],
  summary: 'Issues access and refresh tokens based on grant type.',
  request: {
    query: z.object({
      grant_type: z
        .enum(['password', 'refresh_token', 'id_token', 'pkce', 'web3'])
        .openapi({
          param: {
            name: 'grant_type',
            in: 'query',
            required: true,
            description:
              '- What grant type should be used to issue an access and refresh token. Note: `id_token` is only offered in experimental mode. \n- CAPTCHA protection does not apply on the `refresh_token` grant flow.\n- Using `password` is akin to a user signing in. \n- `pkce` is used for exchanging the authorization code for a pair of access and refresh tokens.\n',
            schema: {
              type: 'string',
              enum: ['password', 'refresh_token', 'id_token', 'pkce', 'web3'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              refresh_token: z.string().exactOptional(),
              password: z.string().exactOptional(),
              email: z.email().exactOptional(),
              phone: z.string().exactOptional(),
              id_token: z.string().exactOptional(),
              access_token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide only when `grant_type` is `id_token` and the provided ID token requires the presence of an access token to be accepted (usually by having an `at_hash` claim).',
                }),
              nonce: z.string().exactOptional(),
              provider: z
                .enum(['google', 'apple', 'azure', 'facebook', 'keycloak'])
                .exactOptional(),
              client_id: z.string().exactOptional(),
              issuer: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If `provider` is `azure` then you can specify any Azure OIDC issuer string here, which will be used for verification.',
                }),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
              auth_code: z.uuid().exactOptional(),
              code_verifier: z.string().exactOptional(),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Signed message for Web3 authentication following the Sign in with Solana (SIWS) or Sign in with Ethereum (SIWE) standard. Must include: `Issued At`, `URI`, `Version`.\n',
                }),
              signature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The signature of the message for Web3 authentication. \nFor Solana: Base64 or Base64-URL encoded. \nFor Ethereum: hexadecimal string with 0x prefix.\n',
                }),
              chain: z
                .enum(['solana', 'ethereum'])
                .exactOptional()
                .openapi({
                  description: 'What blockchain is the Web3 message and signature for.',
                  example: 'solana',
                }),
            })
            .openapi({
              description:
                'For the refresh token flow, supply only `refresh_token`.\nFor the email/phone with password flow, supply `email`, `phone` and `password` with an optional `gotrue_meta_security`.\nFor the OIDC ID token flow, supply `id_token`, `nonce`, `provider`, `client_id`, `issuer` with an optional `gotrue_meta_security`.\nFor the Web3 flow, supply `message`, `signature`, and `chain`.',
              required: [],
            }),
          examples: {
            'grant_type=password': { value: { email: 'user@example.com', password: 'password1' } },
            'grant_type=refresh_token': { value: { refresh_token: '4nYUCw0wZR_DNOTSDbSGMQ' } },
            'grant_type=pkce': {
              value: {
                auth_code: '009e5066-fc11-4eca-8c8c-6fd82aa263f2',
                code_verifier:
                  'ktPNXpR65N6JtgzQA8_5HHtH6PBSAahMNoLKRzQEa0Tzgl.vdV~b6lPk004XOd.4lR0inCde.NoQx5K63xPfzL8o7tJAjXncnhw5Niv9ycQ.QRV9JG.y3VapqbgLfIrJ',
              },
            },
            web3_solana: {
              value: {
                message:
                  'example.com wants you to sign in with your Solana account:\n0x1234...5678\n\nSign in with Solana\n\nURI: https://example.com\nVersion: 1\nNonce: abc123def456\nIssued At: 2023-09-19T12:00:00Z',
                signature: 'base64_encoded_signature_string',
                chain: 'solana',
              },
            },
            web3_ethereum: {
              value: {
                message:
                  'example.com wants you to sign in with your Ethereum account:\n0x1234567890123456789012345678901234567890\n\nSign in with Ethereum\n\nURI: https://example.com\nVersion: 1\nIssued At: 2023-09-19T12:00:00Z',
                signature:
                  '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1b',
                chain: 'ethereum',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'An access and refresh token have been successfully issued.\n',
      content: { 'application/json': { schema: AccessTokenResponseSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    401: ForbiddenResponseResponse,
    403: UnauthorizedResponseResponse,
    429: RateLimitResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const postLogoutRoute = createRoute({
  method: 'post',
  path: '/logout',
  tags: ['auth'],
  summary: 'Logs out a user.',
  request: {
    query: z.object({
      scope: z
        .enum(['global', 'local', 'others'])
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            description:
              '(Optional.) Determines how the user should be logged out. When `global` is used, the user is logged out from all active sessions. When `local` is used, the user is logged out from the current session. When `others` is used, the user is logged out from all other sessions except the current one. Clients should remove stored access and refresh tokens except when `others` is used.\n',
            schema: { type: 'string', enum: ['global', 'local', 'others'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful logout.' },
    401: UnauthorizedResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const getVerifyRoute = createRoute({
  method: 'get',
  path: '/verify',
  tags: ['auth'],
  summary:
    'Authenticate by verifying the possession of a one-time token. Usually for use as clickable links.',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'query', required: true, schema: { type: 'string' } },
        }),
      type: z
        .enum(['signup', 'invite', 'recovery', 'magiclink', 'email_change'])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              enum: ['signup', 'invite', 'recovery', 'magiclink', 'email_change'],
            },
          },
        }),
      redirect_to: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_to',
            in: 'query',
            description:
              '(Optional) URL to redirect back into the app on after verification completes successfully. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.\n',
            schema: { type: 'string', format: 'uri' },
            required: false,
          },
        }),
    }),
  },
  responses: { 302: AccessRefreshTokenRedirectResponseResponse },
  security: [{ APIKeyAuth: [] }],
})

export const postVerifyRoute = createRoute({
  method: 'post',
  path: '/verify',
  tags: ['auth'],
  summary: 'Authenticate by verifying the possession of a one-time token.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum([
                  'signup',
                  'recovery',
                  'invite',
                  'magiclink',
                  'email_change',
                  'sms',
                  'phone_change',
                ])
                .exactOptional(),
              token: z.string().exactOptional(),
              token_hash: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The hashed value of token. Applicable only if used with `type` and nothing else.\n',
                }),
              email: z
                .email()
                .exactOptional()
                .openapi({
                  description: 'Applicable only if `type` is with regards to an email address.\n',
                }),
              phone: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Applicable only if `type` is with regards to an phone number.\n',
                }),
              redirect_to: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    '(Optional) URL to redirect back into the app on after verification completes successfully. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'An access and refresh token.',
      content: { 'application/json': { schema: AccessTokenResponseSchemaSchema } },
    },
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const getAuthorizeRoute = createRoute({
  method: 'get',
  path: '/authorize',
  tags: ['oauth-client'],
  summary: 'Redirects to an external OAuth provider. Usually for use as clickable links.',
  request: {
    query: z.object({
      provider: z
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            description: 'Name of the OAuth provider.',
            example: 'google',
            required: true,
            schema: { type: 'string', pattern: '^[a-zA-Z0-9]+$' },
          },
        }),
      scopes: z
        .string()
        .regex(/[^ ]+( +[^ ]+)*/)
        .openapi({
          param: {
            name: 'scopes',
            in: 'query',
            required: true,
            description: 'Space separated list of OAuth scopes to pass on to `provider`.',
            schema: { type: 'string', pattern: '[^ ]+( +[^ ]+)*' },
          },
        }),
      invite_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'invite_token',
            in: 'query',
            description:
              '(Optional) A token representing a previous invitation of the user. A successful sign-in with OAuth will mark the invitation as completed.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      redirect_to: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_to',
            in: 'query',
            description:
              '(Optional) URL to redirect back into the app on after OAuth sign-in completes successfully or not. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.\n',
            schema: { type: 'string', format: 'uri' },
            required: false,
          },
        }),
      code_challenge_method: z
        .enum(['plain', 's256'])
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge_method',
            in: 'query',
            description:
              '(Optional) Method used to encrypt the verifier. Can be `plain` (no transformation) or `s256` (where SHA-256 is used). It is always recommended that `s256` is used.',
            schema: { type: 'string', enum: ['plain', 's256'] },
            required: false,
          },
        }),
    }),
  },
  responses: { 302: OAuthAuthorizeRedirectResponseResponse },
  security: [{ APIKeyAuth: [] }],
})

export const postSignupRoute = createRoute({
  method: 'post',
  path: '/signup',
  tags: ['auth'],
  summary: 'Signs a user up.',
  description: 'Creates a new user.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email().exactOptional(),
              phone: z.string().exactOptional(),
              channel: z.enum(['sms', 'whatsapp']).exactOptional(),
              password: z.string().exactOptional(),
              data: z.object({}).exactOptional(),
              code_challenge: z.string().exactOptional(),
              code_challenge_method: z.enum(['plain', 's256']).exactOptional(),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'email+password': { value: { email: 'user@example.com', password: 'password1' } },
            'phone+password': { value: { phone: '+1234567890', password: 'password1' } },
            'phone+password+whatsapp': {
              value: { phone: '+1234567890', password: 'password1', channel: 'whatsapp' },
            },
            'email+password+pkce': {
              value: {
                email: 'user@example.com',
                password: 'password1',
                code_challenge_method: 's256',
                code_challenge: 'elU6u5zyqQT2f92GRQUq6PautAeNDf4DQPayyR0ek_c&',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A user already exists and is not confirmed (in which case a user object is returned). A user did not exist and is signed up. If email or phone confirmation is enabled, returns a user object. If confirmation is disabled, returns an access token and refresh token response.\n',
      content: {
        'application/json': { schema: z.xor([AccessTokenResponseSchemaSchema, UserSchemaSchema]) },
      },
    },
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const postRecoverRoute = createRoute({
  method: 'post',
  path: '/recover',
  tags: ['auth'],
  summary: 'Request password recovery.',
  description: 'Users that have forgotten their password can have it reset with this API.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email(),
              code_challenge: z.string().exactOptional(),
              code_challenge_method: z.enum(['plain', 's256']).exactOptional(),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
            })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A recovery email has been sent to the address. An empty JSON object is returned. To obfuscate whether such an email address already exists in the system this response is sent regardless whether the address exists or not.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: BadRequestResponseResponse,
    422: {
      description: 'Returned when unable to validate the email address.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const postResendRoute = createRoute({
  method: 'post',
  path: '/resend',
  tags: ['auth'],
  summary: 'Resends a one-time password (OTP) through email or SMS.',
  description:
    'Allows a user to resend an existing signup, sms, email_change or phone_change OTP.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .email()
                .exactOptional()
                .openapi({
                  description: 'Applicable only if `type` is with regards to an email address.\n',
                }),
              phone: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Applicable only if `type` is with regards to an phone number.\n',
                }),
              type: z.enum(['signup', 'email_change', 'sms', 'phone_change']).exactOptional(),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A One-Time Password was sent to the email or phone. To obfuscate whether such an address or number already exists in the system this response is sent in both cases.',
      content: {
        'application/json': {
          schema: z
            .object({
              message_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique ID of the message as reported by the SMS sending provider. Useful for tracking deliverability problems.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
    422: {
      description: 'Returned when unable to validate the email address or phone number.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const postMagiclinkRoute = createRoute({
  method: 'post',
  path: '/magiclink',
  tags: ['auth'],
  summary: 'Authenticate a user by sending them a magic link.',
  description:
    'A magic link is a special type of URL that includes a One-Time Password. When a user visits this link in a browser they are immediately authenticated.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email(),
              data: z.object({}).exactOptional(),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
            })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A recovery email has been sent to the address. An empty JSON object is returned. To obfuscate whether such an email address already exists in the system this response is sent regardless whether the address exists or not.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: BadRequestResponseResponse,
    422: {
      description: 'Returned when unable to validate the email address.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const postOtpRoute = createRoute({
  method: 'post',
  path: '/otp',
  tags: ['auth'],
  summary: 'Authenticate a user by sending them a One-Time Password over email or SMS.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email().exactOptional(),
              phone: z.string().exactOptional(),
              channel: z.enum(['sms', 'whatsapp']).exactOptional(),
              create_user: z.boolean().exactOptional(),
              data: z.object({}).exactOptional(),
              code_challenge_method: z.enum(['s256', 'plain']).exactOptional(),
              code_challenge: z.string().exactOptional(),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A One-Time Password was sent to the email or phone. To obfuscate whether such an address or number already exists in the system this response is sent in both cases.',
      content: {
        'application/json': {
          schema: z
            .object({
              message_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique ID of the message as reported by the SMS sending provider. Useful for tracking deliverability problems.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
    422: {
      description: 'Returned when unable to validate the email or phone number.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [] }],
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['user'],
  summary: 'Fetch the latest user account information.',
  responses: {
    200: {
      description: "User's account information.",
      content: { 'application/json': { schema: UserSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const putUserRoute = createRoute({
  method: 'put',
  path: '/user',
  tags: ['user'],
  summary: 'Update certain properties of the current user account.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email().exactOptional(),
              phone: z.string().exactOptional(),
              password: z.string().exactOptional(),
              nonce: z.string().exactOptional(),
              data: z.object({}).exactOptional(),
              app_metadata: z.object({}).exactOptional(),
              channel: z.enum(['sms', 'whatsapp']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "User's updated account information.",
      content: { 'application/json': { schema: UserSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const getUserIdentitiesAuthorizeRoute = createRoute({
  method: 'get',
  path: '/user/identities/authorize',
  tags: ['user'],
  summary: 'Links an OAuth identity to an existing user. Redirects to an external OAuth provider.',
  request: {
    query: z.object({
      provider: z
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            description: 'Name of the OAuth provider.',
            example: 'google',
            required: true,
            schema: { type: 'string', pattern: '^[a-zA-Z0-9]+$' },
          },
        }),
      scopes: z
        .string()
        .regex(/[^ ]+( +[^ ]+)*/)
        .openapi({
          param: {
            name: 'scopes',
            in: 'query',
            required: true,
            description: 'Space separated list of OAuth scopes to pass on to `provider`.',
            schema: { type: 'string', pattern: '[^ ]+( +[^ ]+)*' },
          },
        }),
      redirect_to: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_to',
            in: 'query',
            description:
              '(Optional) URL to redirect back into the app on after OAuth sign-in completes successfully or not. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.\n',
            schema: { type: 'string', format: 'uri' },
            required: false,
          },
        }),
      code_challenge_method: z
        .enum(['plain', 's256'])
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge_method',
            in: 'query',
            description:
              '(Optional) Method used to encrypt the verifier. Can be `plain` (no transformation) or `s256` (where SHA-256 is used). It is always recommended that `s256` is used.',
            schema: { type: 'string', enum: ['plain', 's256'] },
            required: false,
          },
        }),
    }),
  },
  responses: { 302: OAuthAuthorizeRedirectResponseResponse },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const deleteUserIdentitiesIdentityIdRoute = createRoute({
  method: 'delete',
  path: '/user/identities/{identityId}',
  tags: ['user'],
  summary: 'Unlinks an identity from the current user.',
  request: {
    params: z.object({
      identityId: z
        .uuid()
        .openapi({
          param: {
            name: 'identityId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "User's account data.",
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: {
      description: 'The user is not authenticated.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'no_authorization', value: { error_code: 'no_authorization' } },
          },
        },
      },
    },
    403: {
      description: 'Forbidden error',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'bad_jwt', value: { error_code: 'bad_jwt' } },
            example1: {
              summary: 'unexpected_audience',
              value: { error_code: 'unexpected_audience' },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'manual_linking_disabled',
              value: { error_code: 'manual_linking_disabled' },
            },
            example1: { summary: 'validation_failed', value: { error_code: 'validation_failed' } },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'single_identity_not_deletable',
              value: { error_code: 'single_identity_not_deletable' },
            },
            example1: {
              summary: 'identity_already_exists',
              value: { error_code: 'identity_already_exists' },
            },
            example2: {
              summary: 'identity_not_found',
              value: { error_code: 'identity_not_found' },
            },
            example3: {
              summary: 'email_conflict_identity_not_deletable',
              value: { error_code: 'email_conflict_identity_not_deletable' },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const getUserOauthGrantsRoute = createRoute({
  method: 'get',
  path: '/user/oauth/grants',
  tags: ['user', 'oauth-server'],
  summary: 'List OAuth grants',
  description:
    'Retrieves a list of all OAuth grants that the authenticated user has authorized. Only available when OAuth server is enabled.\n',
  responses: {
    200: {
      description: "List of user's OAuth grants",
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                client: z
                  .object({
                    id: z
                      .uuid()
                      .exactOptional()
                      .openapi({ description: 'Unique client identifier' }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Human-readable name of the client application' }),
                    uri: z
                      .url()
                      .exactOptional()
                      .openapi({ description: "URL of the client application's homepage" }),
                    logo_uri: z
                      .url()
                      .exactOptional()
                      .openapi({ description: "URL of the client application's logo" }),
                  })
                  .exactOptional()
                  .openapi({ description: 'OAuth client details', required: [] }),
                scopes: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'List of scopes granted to this client' }),
                granted_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({ description: 'Timestamp when grant was authorized' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const deleteUserOauthGrantsRoute = createRoute({
  method: 'delete',
  path: '/user/oauth/grants',
  tags: ['user', 'oauth-server'],
  summary: 'Revoke OAuth grant',
  description:
    "Revokes the user's OAuth grant for a specific client. This will: - Mark the consent as revoked - Delete all active sessions associated with this OAuth client - Invalidate all refresh tokens for those sessions\nOnly available when OAuth server is enabled.\n",
  request: {
    query: z.object({
      client_id: z
        .uuid()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            required: true,
            description: 'The OAuth client identifier',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Grant successfully revoked' },
    400: {
      description: 'Missing or invalid client_id parameter',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            validation_failed: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: 'client_id query parameter is required',
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'No active grant found for this client',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            oauth_consent_not_found: {
              summary: 'oauth_consent_not_found',
              value: {
                error_code: 'oauth_consent_not_found',
                msg: 'No active grant found for this client',
              },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postReauthenticateRoute = createRoute({
  method: 'post',
  path: '/reauthenticate',
  tags: ['user'],
  summary:
    'Reauthenticates the possession of an email or phone number for the purpose of password change.',
  description:
    "For a password to be changed on a user account, the user's email or phone number needs to be confirmed before they are allowed to set a new password. This requirement is configurable. This API sends a confirmation email or SMS message. A nonce in this message can be provided in `PUT /user` to change the password on the account.\n",
  responses: {
    200: {
      description: "A One-Time Password was sent to the user's email or phone.",
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postFactorsRoute = createRoute({
  method: 'post',
  path: '/factors',
  tags: ['user'],
  summary: 'Begin enrolling a new factor for MFA.',
  description:
    'Starts enrollment of a `totp`, `phone` or `webauthn` factor. Recovery codes are not enrolled through this endpoint; use `POST /factors/recovery-codes` instead.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              factor_type: z.enum(['totp', 'phone', 'webauthn']),
              friendly_name: z.string().exactOptional(),
              issuer: z.url().exactOptional(),
              phone: z.string().exactOptional(),
            })
            .openapi({ required: ['factor_type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        "A new factor was created in the unverified state. Call `POST /factors/{factorId}/verify' to verify it.\n",
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              type: z.enum(['totp', 'phone', 'webauthn']).exactOptional(),
              totp: z
                .object({
                  qr_code: z.string().exactOptional(),
                  secret: z.string().exactOptional(),
                  uri: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              phone: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postFactorsFactorIdChallengeRoute = createRoute({
  method: 'post',
  path: '/factors/{factorId}/challenge',
  tags: ['user'],
  summary: 'Create a new challenge for a MFA factor.',
  request: {
    params: z.object({
      factorId: z
        .uuid()
        .openapi({
          param: {
            name: 'factorId',
            in: 'path',
            required: true,
            example: '2b306a77-21dc-4110-ba71-537cb56b9e98',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ channel: z.enum(['sms', 'whatsapp']).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A new challenge was generated for the factor. Use `POST /factors/{factorId}/verify` to verify the challenge.\n',
      content: {
        'application/json': {
          schema: z.xor([TOTPPhoneChallengeResponseSchema, WebAuthnChallengeResponseSchema]),
        },
      },
    },
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postFactorsFactorIdVerifyRoute = createRoute({
  method: 'post',
  path: '/factors/{factorId}/verify',
  tags: ['user'],
  summary: 'Verify a challenge on a factor.',
  request: {
    params: z.object({
      factorId: z
        .uuid()
        .openapi({
          param: {
            name: 'factorId',
            in: 'path',
            required: true,
            example: '2b306a77-21dc-4110-ba71-537cb56b9e98',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              challenge_id: z.uuid(),
              code: z.string().exactOptional(),
              webauthn: z
                .object({
                  type: z
                    .enum(['create', 'request'])
                    .openapi({ description: 'Type of WebAuthn operation' }),
                  credential_response: z
                    .object({})
                    .openapi({ description: 'WebAuthn credential response from the client' }),
                })
                .exactOptional()
                .openapi({ required: ['type', 'credential_response'] }),
            })
            .openapi({ required: ['challenge_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'This challenge has been verified. Client libraries should replace their stored access and refresh tokens with the ones provided in this response. These new credentials have an increased Authenticator Assurance Level (AAL).\n',
      content: { 'application/json': { schema: AccessTokenResponseSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const deleteFactorsFactorIdRoute = createRoute({
  method: 'delete',
  path: '/factors/{factorId}',
  tags: ['user'],
  summary: 'Remove a MFA factor from a user.',
  request: {
    params: z.object({
      factorId: z
        .uuid()
        .openapi({
          param: {
            name: 'factorId',
            in: 'path',
            required: true,
            example: '2b306a77-21dc-4110-ba71-537cb56b9e98',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "This MFA factor is removed (unenrolled) and cannot be used for increasing the AAL level of user's sessions. Client libraries should use the `POST /token?grant_type=refresh_token` endpoint to get a new access and refresh token with a decreased AAL.\n",
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ example: '2b306a77-21dc-4110-ba71-537cb56b9e98' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
    422: {
      description:
        "Unprocessable entity. Returned when the factor is a recovery-code factor (use `DELETE /factors/recovery-codes` instead), when unenrolling the user's last verified second factor would leave recovery codes as the only second factor, or when the session does not have the required AAL.\n",
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'validation_failed', value: { error_code: 'validation_failed' } },
            example1: {
              summary: 'mfa_recovery_codes_sole_factor',
              value: { error_code: 'mfa_recovery_codes_sole_factor' },
            },
            example2: { summary: 'insufficient_aal', value: { error_code: 'insufficient_aal' } },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const getFactorsRecoveryCodesRoute = createRoute({
  method: 'get',
  path: '/factors/recovery-codes',
  tags: ['user'],
  summary: "Get the status of the user's MFA recovery codes.",
  description:
    'Returns the recovery-code factor ID together with the total number of codes and how many are still unused. Code values are never returned after generation. Works regardless of whether recovery-code enrollment or verification is enabled on the server.\n',
  responses: {
    200: {
      description: "The user's recovery-code status.",
      content: { 'application/json': { schema: MFARecoveryCodesStatusSchemaSchema } },
    },
    403: {
      description: 'Forbidden error. Anonymous users cannot use recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'no_authorization', value: { error_code: 'no_authorization' } },
          },
        },
      },
    },
    404: {
      description: 'The user has not enrolled recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_factor_not_found',
              value: { error_code: 'mfa_factor_not_found' },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postFactorsRecoveryCodesRoute = createRoute({
  method: 'post',
  path: '/factors/recovery-codes',
  tags: ['user'],
  summary: "Generate the user's one-time set of MFA recovery codes.",
  description:
    "Creates a verified `recovery_code` factor together with a set of single-use codes. The plaintext codes are returned exactly once, in canonical form. Requires an AAL2 session and at least one other verified factor, because recovery codes can never be the user's only second factor. Use `POST /factors/recovery-codes/regenerate` to rotate an existing set.\n",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              friendly_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Name shown in the user's factor list. Subject to the same per-user uniqueness rule as any other factor. Defaults to `Recovery codes` when omitted or blank.\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Recovery codes were generated. Show the `codes` to the user now; they cannot be retrieved again.\n',
      content: { 'application/json': { schema: MFARecoveryCodesSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    403: {
      description:
        'Forbidden error. Requires an AAL2 session; anonymous users cannot use recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'insufficient_aal', value: { error_code: 'insufficient_aal' } },
            example1: { summary: 'no_authorization', value: { error_code: 'no_authorization' } },
          },
        },
      },
    },
    422: {
      description:
        'Unprocessable entity. Recovery-code enrollment is disabled on the server, the user has no other verified factor, recovery codes are already enrolled (use `POST /factors/recovery-codes/regenerate`), the friendly name is already used by another factor, or the user has reached the maximum number of enrolled or verified factors.\n',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_recovery_codes_enroll_not_enabled',
              value: { error_code: 'mfa_recovery_codes_enroll_not_enabled' },
            },
            example1: {
              summary: 'mfa_recovery_codes_sole_factor',
              value: { error_code: 'mfa_recovery_codes_sole_factor' },
            },
            example2: {
              summary: 'mfa_verified_factor_exists',
              value: { error_code: 'mfa_verified_factor_exists' },
            },
            example3: {
              summary: 'mfa_factor_name_conflict',
              value: { error_code: 'mfa_factor_name_conflict' },
            },
            example4: {
              summary: 'too_many_enrolled_mfa_factors',
              value: { error_code: 'too_many_enrolled_mfa_factors' },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const deleteFactorsRecoveryCodesRoute = createRoute({
  method: 'delete',
  path: '/factors/recovery-codes',
  tags: ['user'],
  summary: "Revoke the user's MFA recovery codes.",
  description:
    'Removes the recovery-code factor and all of its codes. Sessions that reached AAL2 with a recovery code are downgraded to AAL1. Requires an AAL2 session. Works regardless of whether recovery-code enrollment or verification is enabled on the server.\n',
  responses: {
    200: {
      description: 'The recovery-code factor was removed.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ example: '2b306a77-21dc-4110-ba71-537cb56b9e98' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description:
        'Forbidden error. Requires an AAL2 session; anonymous users cannot use recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'insufficient_aal', value: { error_code: 'insufficient_aal' } },
            example1: { summary: 'no_authorization', value: { error_code: 'no_authorization' } },
          },
        },
      },
    },
    404: {
      description: 'The user has not enrolled recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_factor_not_found',
              value: { error_code: 'mfa_factor_not_found' },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postFactorsRecoveryCodesVerifyRoute = createRoute({
  method: 'post',
  path: '/factors/recovery-codes/verify',
  tags: ['user'],
  summary: 'Verify a recovery code and upgrade the session to AAL2.',
  description:
    'Redeems one single-use recovery code from an AAL1 session. The submitted code is normalized before comparison: whitespace and `-` separators are removed and letters are lowercased, so `K4M9-X7QP-2AB8-HT3Z` and `k4m9x7qp2ab8ht3z` are equivalent. A matched code is consumed and cannot be used again.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .openapi({
                  description:
                    'The recovery code to redeem. Separators, whitespace and letter case are ignored.',
                  example: 'K4M9-X7QP-2AB8-HT3Z',
                }),
            })
            .openapi({ required: ['code'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'The recovery code was accepted and consumed. These new credentials have an increased Authenticator Assurance Level (AAL) and an `amr` claim that includes `mfa/recovery_code`.\n',
      content: { 'application/json': { schema: AccessTokenResponseSchemaSchema } },
    },
    400: {
      description: 'Bad request. The body could not be parsed or `code` is missing or empty.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'validation_failed', value: { error_code: 'validation_failed' } },
          },
        },
      },
    },
    403: {
      description:
        'Forbidden error. The MFA verification attempt hook rejected the attempt or the user is anonymous.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_verification_rejected',
              value: { error_code: 'mfa_verification_rejected' },
            },
            example1: { summary: 'no_authorization', value: { error_code: 'no_authorization' } },
          },
        },
      },
    },
    422: {
      description:
        'Unprocessable entity. `mfa_verification_failed` is returned for a wrong code, an already-used code and when no recovery codes are enrolled. `mfa_recovery_codes_verify_not_enabled` is returned when recovery-code verification is disabled on the server.\n',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_verification_failed',
              value: { error_code: 'mfa_verification_failed' },
            },
            example1: {
              summary: 'mfa_recovery_codes_verify_not_enabled',
              value: { error_code: 'mfa_recovery_codes_verify_not_enabled' },
            },
          },
        },
      },
    },
    429: {
      description:
        'Too many requests. Either the IP-based rate limit was breached (`over_request_rate_limit`), or the per-user lockout is active after too many consecutive failed attempts (`mfa_recovery_codes_locked`). Regenerating the codes from an AAL2 session clears the lock.\n',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'over_request_rate_limit',
              value: { error_code: 'over_request_rate_limit' },
            },
            example1: {
              summary: 'mfa_recovery_codes_locked',
              value: { error_code: 'mfa_recovery_codes_locked' },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postFactorsRecoveryCodesRegenerateRoute = createRoute({
  method: 'post',
  path: '/factors/recovery-codes/regenerate',
  tags: ['user'],
  summary: "Replace the user's MFA recovery codes with a new set.",
  description:
    'Atomically invalidates all existing codes, issues a fresh set and clears any active verification lockout. The new plaintext codes are returned exactly once. Requires an AAL2 session.\n',
  responses: {
    200: {
      description:
        'Recovery codes were regenerated. Show the `codes` to the user now; they cannot be retrieved again and the previous codes no longer work.\n',
      content: { 'application/json': { schema: MFARecoveryCodesSchemaSchema } },
    },
    403: {
      description:
        'Forbidden error. Requires an AAL2 session; anonymous users cannot use recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: { summary: 'insufficient_aal', value: { error_code: 'insufficient_aal' } },
            example1: { summary: 'no_authorization', value: { error_code: 'no_authorization' } },
          },
        },
      },
    },
    404: {
      description: 'The user has not enrolled recovery codes.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_factor_not_found',
              value: { error_code: 'mfa_factor_not_found' },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity. Recovery-code enrollment is disabled on the server.',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            example: {
              summary: 'mfa_recovery_codes_enroll_not_enabled',
              value: { error_code: 'mfa_recovery_codes_enroll_not_enabled' },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const getCallbackRoute = createRoute({
  method: 'get',
  path: '/callback',
  tags: ['oauth-client'],
  summary: 'Redirects OAuth flow errors to the frontend app.',
  description:
    'When an OAuth sign-in flow fails for any reason, the error message needs to be delivered to the frontend app requesting the flow. This callback delivers the errors as `error` and `error_description` query params. Usually this request is not called directly.\n',
  responses: { 302: OAuthCallbackRedirectResponseResponse },
  security: [{ APIKeyAuth: [] }],
})

export const postCallbackRoute = createRoute({
  method: 'post',
  path: '/callback',
  tags: ['oauth-client'],
  summary: 'Redirects OAuth flow errors to the frontend app.',
  description:
    'When an OAuth sign-in flow fails for any reason, the error message needs to be delivered to the frontend app requesting the flow. This callback delivers the errors as `error` and `error_description` query params. Usually this request is not called directly.\n',
  responses: { 302: OAuthCallbackRedirectResponseResponse },
})

export const postSsoRoute = createRoute({
  method: 'post',
  path: '/sso',
  tags: ['sso'],
  summary: 'Initiate a Single-Sign On flow.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .hostname()
                .exactOptional()
                .openapi({
                  description: 'Email address domain used to identify the SSO provider.',
                }),
              provider_id: z
                .uuid()
                .exactOptional()
                .openapi({ example: '40451fc2-4997-429c-bf7f-cc6f33c788e6' }),
              redirect_to: z.url().exactOptional(),
              skip_http_redirect: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to `true` if the response to this request should not be a HTTP 303 redirect -- useful for browser-based applications.',
                }),
              code_challenge: z.string().exactOptional(),
              code_challenge_method: z.enum(['plain', 's256']).exactOptional(),
              gotrue_meta_security: GoTrueSecuritySchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returned only when `skip_http_redirect` is `true` and the SSO provider could be identified from the `provider_id` or `domain`. Client libraries should use the returned URL to redirect or open a browser.\n',
      content: {
        'application/json': {
          schema: z.object({ url: z.url().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    303: {
      description:
        'Returned only when `skip_http_redirect` is `false` or not present and the SSO provider could be identified from the `provider_id` or `domain`. Client libraries should follow the redirect. 303 is used instead of 302 because the request should be executed with a `GET` verb.\n',
      headers: z.object({
        Location: {
          schema: z
            .url()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: BadRequestResponseResponse,
    404: {
      description: 'Returned when the SSO provider could not be identified.\n',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [] }],
})

export const getSamlMetadataRoute = createRoute({
  method: 'get',
  path: '/saml/metadata',
  tags: ['saml'],
  summary: 'Returns the SAML 2.0 Metadata XML.',
  description:
    'The metadata XML can be downloaded or used for the SAML 2.0 Metadata URL discovery mechanism. This URL is the SAML 2.0 EntityID of the Service Provider implemented by this server.\n',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'download',
            in: 'query',
            description:
              'If set to `true` will add a `Content-Disposition` header to the response which will trigger a download dialog on the browser.\n',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A valid SAML 2.0 Metadata XML document. Should be cached according to the `Cache-Control` header and/or caching data specified in the document itself.\n',
      headers: z.object({
        'Content-Disposition': {
          description:
            'Present if `download=true`, which triggers the browser to show a donwload dialog.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Present if `download=true`, which triggers the browser to show a donwload dialog.\n',
              param: { required: false },
              example: 'attachment; filename="metadata.xml"',
            }),
        },
        'Cache-Control': {
          description: 'Should be parsed and obeyed to avoid putting strain on the server.\n',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Should be parsed and obeyed to avoid putting strain on the server.\n',
              param: { required: false },
              example: 'public, max-age=600',
            }),
        },
      }),
    },
  },
  security: [{ APIKeyAuth: [] }],
})

export const postSamlAcsRoute = createRoute({
  method: 'post',
  path: '/saml/acs',
  tags: ['saml'],
  summary: 'SAML 2.0 Assertion Consumer Service (ACS) endpoint.',
  description:
    'Implements the SAML 2.0 Assertion Consumer Service (ACS) endpoint supporting the POST and Artifact bindings.\n',
  request: {
    query: z.object({
      RelayState: z
        .xor([
          z
            .url()
            .openapi({
              description:
                'URL to take the user to after the ACS has been verified. Often sent by Identity Provider initiated login requests.',
            }),
          z
            .uuid()
            .openapi({
              description:
                'UUID of the SAML Relay State stored in the database, used to identify the Service Provider initiated login request.',
            }),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'RelayState',
            in: 'query',
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'uri',
                  description:
                    'URL to take the user to after the ACS has been verified. Often sent by Identity Provider initiated login requests.',
                },
                {
                  type: 'string',
                  format: 'uuid',
                  description:
                    'UUID of the SAML Relay State stored in the database, used to identify the Service Provider initiated login request.',
                },
              ],
            },
            required: false,
          },
        }),
      SAMLArt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SAMLArt',
            in: 'query',
            description:
              'See the SAML 2.0 ACS specification. Cannot be used without a UUID `RelayState` parameter.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      SAMLResponse: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SAMLResponse',
            in: 'query',
            description:
              'See the SAML 2.0 ACS specification. Must be present unless `SAMLArt` is specified. If `RelayState` is not a UUID, the SAML Response is unpacked and the identity provider is identified from the response.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    302: AccessRefreshTokenRedirectResponseResponse,
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
  security: [],
})

export const postInviteRoute = createRoute({
  method: 'post',
  path: '/invite',
  tags: ['admin'],
  summary: 'Invite a user by email.',
  description: 'Sends an invitation email which contains a link that allows the user to sign-in.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ email: z.string(), data: z.object({}).exactOptional() })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'An invitation has been sent to the user.',
      content: { 'application/json': { schema: UserSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    422: {
      description: 'User already exists and has confirmed their address.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [] }],
})

export const postAdminGenerateLinkRoute = createRoute({
  method: 'post',
  path: '/admin/generate_link',
  tags: ['admin'],
  summary: 'Generate a link to send in an email message.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z.enum([
                'magiclink',
                'signup',
                'recovery',
                'email_change_current',
                'email_change_new',
              ]),
              email: z.email(),
              new_email: z.email().exactOptional(),
              password: z.string().exactOptional(),
              data: z.object({}).exactOptional(),
              redirect_to: z.url().exactOptional(),
            })
            .openapi({ required: ['type', 'email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User profile and generated link information.',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              action_link: z.url().exactOptional(),
              email_otp: z.string().exactOptional(),
              hashed_token: z.string().exactOptional(),
              verification_type: z.string().exactOptional(),
              redirect_to: z.url().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    422: {
      description:
        'Has multiple meanings:\n  - User already exists\n  - Provided password does not meet minimum criteria\n  - Secure email change not enabled\n',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminAuditRoute = createRoute({
  method: 'get',
  path: '/admin/audit',
  tags: ['admin'],
  summary: 'Fetch audit log events.',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 1 },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'per_page',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 50 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of audit logs.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.uuid().exactOptional(),
                payload: z
                  .object({
                    actor_id: z.string().exactOptional(),
                    actor_via_sso: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether the actor used a SSO protocol (like SAML 2.0 or OIDC) to authenticate.',
                      }),
                    actor_username: z.string().exactOptional(),
                    actor_name: z.string().exactOptional(),
                    traits: z.object({}).exactOptional(),
                    action: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Usually one of these values:\n- login\n- logout\n- invite_accepted\n- user_signedup\n- user_invited\n- user_deleted\n- user_modified\n- user_recovery_requested\n- user_reauthenticate_requested\n- user_confirmation_requested\n- user_repeated_signup\n- user_updated_password\n- token_revoked\n- token_refreshed\n- factor_in_progress\n- factor_unenrolled\n- challenge_created\n- verification_attempted\n- factor_deleted\n- factor_updated\n- identity_linked\n- identity_unlinked\n- passkey_created\n- passkey_updated\n- passkey_deleted\n- recovery_codes_generated\n- recovery_codes_verified\n- recovery_codes_regenerated\n- recovery_codes_deleted',
                      }),
                    log_type: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Usually one of these values:\n- account\n- team\n- token\n- user\n- factor',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                created_at: z.iso.datetime({ offset: true }).exactOptional(),
                ip_address: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminUsersRoute = createRoute({
  method: 'get',
  path: '/admin/users',
  tags: ['admin'],
  summary: 'Fetch a listing of users.',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 1 },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'per_page',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 50 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A page of users.',
      content: {
        'application/json': {
          schema: z
            .object({
              aud: z.string().exactOptional().openapi({ deprecated: true }),
              users: z.array(UserSchemaSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/admin/users/{userId}',
  tags: ['admin'],
  summary: 'Fetch user account data for a user.',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "User's account data.",
      content: { 'application/json': { schema: UserSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const putAdminUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/admin/users/{userId}',
  tags: ['admin'],
  summary: "Update user's account data.",
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchemaSchema } } },
  },
  responses: {
    200: {
      description: "User's account data was updated.",
      content: { 'application/json': { schema: UserSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const deleteAdminUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/admin/users/{userId}',
  tags: ['admin'],
  summary: 'Delete a user.',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "User's account data.",
      content: { 'application/json': { schema: UserSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminUsersUserIdFactorsRoute = createRoute({
  method: 'get',
  path: '/admin/users/{userId}/factors',
  tags: ['admin'],
  summary: 'List all of the MFA factors for a user.',
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "User's MFA factors.",
      content: { 'application/json': { schema: z.array(MFAFactorSchemaSchema) } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const putAdminUsersUserIdFactorsFactorIdRoute = createRoute({
  method: 'put',
  path: '/admin/users/{userId}/factors/{factorId}',
  tags: ['admin'],
  summary: "Update a user's MFA factor.",
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      factorId: z
        .uuid()
        .openapi({
          param: {
            name: 'factorId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } } },
  },
  responses: {
    200: {
      description: "User's MFA factor.",
      content: { 'application/json': { schema: MFAFactorSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user and/or factor.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const deleteAdminUsersUserIdFactorsFactorIdRoute = createRoute({
  method: 'delete',
  path: '/admin/users/{userId}/factors/{factorId}',
  tags: ['admin'],
  summary: "Remove a user's MFA factor.",
  request: {
    params: z.object({
      userId: z
        .uuid()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      factorId: z
        .uuid()
        .openapi({
          param: {
            name: 'factorId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "User's MFA factor.",
      content: { 'application/json': { schema: MFAFactorSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'There is no such user and/or factor.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminSsoProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/sso/providers',
  tags: ['admin'],
  summary: 'Fetch a list of all registered SSO providers.',
  responses: {
    200: {
      description: 'A list of all providers.',
      content: {
        'application/json': {
          schema: z
            .object({ items: z.array(SSOProviderSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const postAdminSsoProvidersRoute = createRoute({
  method: 'post',
  path: '/admin/sso/providers',
  tags: ['admin'],
  summary: 'Register a new SSO provider.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z.literal('saml'),
              metadata_url: z.url().exactOptional(),
              metadata_xml: z.string().exactOptional(),
              domains: z.array(z.hostname()).exactOptional(),
              attribute_mapping: SAMLAttributeMappingSchemaSchema.exactOptional(),
            })
            .openapi({ required: ['type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'SSO provider was created.',
      content: { 'application/json': { schema: SSOProviderSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminSsoProvidersSsoProviderIdRoute = createRoute({
  method: 'get',
  path: '/admin/sso/providers/{ssoProviderId}',
  tags: ['admin'],
  summary: 'Fetch SSO provider details.',
  request: {
    params: z.object({
      ssoProviderId: z
        .uuid()
        .openapi({
          param: {
            name: 'ssoProviderId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SSO provider exists with these details.',
      content: { 'application/json': { schema: SSOProviderSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'A provider with this UUID does not exist.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const putAdminSsoProvidersSsoProviderIdRoute = createRoute({
  method: 'put',
  path: '/admin/sso/providers/{ssoProviderId}',
  tags: ['admin'],
  summary: 'Update details about a SSO provider.',
  description:
    'You can only update only one of `metadata_url` or `metadata_xml` at once. The SAML Metadata represented by these updates must advertize the same Identity Provider EntityID. Do not include the `domains` or `attribute_mapping` property to keep the existing database values.\n',
  request: {
    params: z.object({
      ssoProviderId: z
        .uuid()
        .openapi({
          param: {
            name: 'ssoProviderId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              metadata_url: z.url().exactOptional(),
              metadata_xml: z.string().exactOptional(),
              domains: z.array(z.string().regex(/[a-z0-9-]+([.][a-z0-9-]+)*/)).exactOptional(),
              attribute_mapping: SAMLAttributeMappingSchemaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'SSO provider details were updated.',
      content: { 'application/json': { schema: SSOProviderSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'A provider with this UUID does not exist.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const deleteAdminSsoProvidersSsoProviderIdRoute = createRoute({
  method: 'delete',
  path: '/admin/sso/providers/{ssoProviderId}',
  tags: ['admin'],
  summary: 'Remove an SSO provider.',
  request: {
    params: z.object({
      ssoProviderId: z
        .uuid()
        .openapi({
          param: {
            name: 'ssoProviderId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SSO provider was removed.',
      content: { 'application/json': { schema: SSOProviderSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'A provider with this UUID does not exist.',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminOauthClientsRoute = createRoute({
  method: 'get',
  path: '/admin/oauth/clients',
  tags: ['admin', 'oauth-server'],
  summary: 'List OAuth clients (admin)',
  description:
    'Retrieves a list of all registered OAuth clients. Only available when OAuth server is enabled.\n',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 1 },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'per_page',
            in: 'query',
            schema: { type: 'integer', minimum: 1, default: 50 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of OAuth clients',
      content: {
        'application/json': {
          schema: z
            .object({ clients: z.array(OAuthClientSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const postAdminOauthClientsRoute = createRoute({
  method: 'post',
  path: '/admin/oauth/clients',
  tags: ['admin', 'oauth-server'],
  summary: 'Register OAuth client (admin)',
  description:
    'Manually register a new OAuth client (admin endpoint). Only available when OAuth server is enabled.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_name: z
                .string()
                .openapi({ description: 'Human-readable name of the client application' }),
              client_uri: z
                .url()
                .exactOptional()
                .openapi({ description: "URL of the client application's homepage" }),
              logo_uri: z
                .url()
                .exactOptional()
                .openapi({ description: "URL of the client application's logo" }),
              redirect_uris: z
                .array(z.url())
                .openapi({ description: 'Array of redirect URIs used by the client (maximum 10)' }),
              client_type: z
                .enum(['public', 'confidential'])
                .exactOptional()
                .openapi({
                  description:
                    "Type of the client. Optional. If not provided, will be inferred from token_endpoint_auth_method or defaults to 'confidential'. Public clients are used for applications that cannot securely store credentials (e.g., SPAs, mobile apps). Confidential clients can securely store credentials (e.g., server-side applications).\n",
                }),
              token_endpoint_auth_method: z
                .enum(['none', 'client_secret_basic', 'client_secret_post'])
                .exactOptional()
                .openapi({
                  description:
                    "Authentication method for the token endpoint. Optional. 'none' is for public clients, 'client_secret_basic' and 'client_secret_post' are for confidential clients. If provided, must be consistent with client_type. If not provided, will be inferred from client_type.\n",
                }),
              grant_types: z
                .array(z.enum(['authorization_code', 'refresh_token']))
                .exactOptional()
                .openapi({
                  description:
                    'OAuth grant types the client will use (defaults to both if not specified)',
                }),
              response_types: z
                .array(z.literal('code'))
                .exactOptional()
                .openapi({ description: 'OAuth response types the client can use' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({ description: 'Space-separated list of scope values' }),
            })
            .openapi({ required: ['client_name', 'redirect_uris'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'OAuth client created',
      content: { 'application/json': { schema: OAuthClientSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminOauthClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/admin/oauth/clients/{client_id}',
  tags: ['admin', 'oauth-server'],
  summary: 'Get OAuth client details (admin)',
  description:
    'Retrieves details of a specific OAuth client. Only available when OAuth server is enabled.\n',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: { name: 'client_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth client details',
      content: { 'application/json': { schema: OAuthClientSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'OAuth client not found',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const putAdminOauthClientsClientIdRoute = createRoute({
  method: 'put',
  path: '/admin/oauth/clients/{client_id}',
  tags: ['admin', 'oauth-server'],
  summary: 'Update OAuth client (admin)',
  description:
    'Updates an existing OAuth client registration. Only the provided fields will be updated. Only available when OAuth server is enabled.\n',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: { name: 'client_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Human-readable name of the client application' }),
              client_uri: z
                .url()
                .exactOptional()
                .openapi({ description: "URL of the client application's homepage" }),
              logo_uri: z
                .url()
                .exactOptional()
                .openapi({ description: "URL of the client application's logo" }),
              redirect_uris: z
                .array(z.url())
                .exactOptional()
                .openapi({ description: 'Array of redirect URIs used by the client' }),
              grant_types: z
                .array(z.enum(['authorization_code', 'refresh_token']))
                .exactOptional()
                .openapi({ description: 'OAuth grant types the client is authorized to use' }),
              token_endpoint_auth_method: z
                .enum(['none', 'client_secret_basic', 'client_secret_post'])
                .exactOptional()
                .openapi({
                  description:
                    "Authentication method for the token endpoint. Must be compatible with the client's current client_type. Confidential clients can use 'client_secret_basic' or 'client_secret_post'. Public clients can only use 'none'.\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth client updated successfully',
      content: { 'application/json': { schema: OAuthClientSchemaSchema } },
    },
    400: {
      description: 'Bad request - validation failed or no fields provided for update',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'OAuth client not found',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const deleteAdminOauthClientsClientIdRoute = createRoute({
  method: 'delete',
  path: '/admin/oauth/clients/{client_id}',
  tags: ['admin', 'oauth-server'],
  summary: 'Delete OAuth client (admin)',
  description:
    'Removes an OAuth client registration. Only available when OAuth server is enabled.\n',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: { name: 'client_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'OAuth client deleted' },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'OAuth client not found',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const postAdminOauthClientsClientIdRegenerateSecretRoute = createRoute({
  method: 'post',
  path: '/admin/oauth/clients/{client_id}/regenerate_secret',
  tags: ['admin', 'oauth-server'],
  summary: 'Regenerate OAuth client secret (admin)',
  description:
    'Regenerates the client secret for a confidential OAuth client. Only available when OAuth server is enabled. This endpoint can only be used for confidential clients, not public clients.\n',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: { name: 'client_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth client secret regenerated successfully',
      content: { 'application/json': { schema: OAuthClientSchemaSchema } },
    },
    400: {
      description: 'Bad request - cannot regenerate secret for public client',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'OAuth client not found',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminCustomProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/custom-providers',
  tags: ['admin', 'oauth-client'],
  summary: 'List all custom OIDC/OAuth providers',
  description:
    'Retrieves a list of all custom OAuth 2.0 and OIDC provider configurations. Optionally filter by provider type. Only available when custom OIDC/OAuth providers are enabled (set `GOTRUE_CUSTOM_OAUTH_ENABLED=true` for self-hosted or enable in Supabase Dashboard).\n',
  request: {
    query: z.object({
      type: z
        .enum(['oauth2', 'oidc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description: 'Filter by provider type',
            schema: { type: 'string', enum: ['oauth2', 'oidc'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of custom OIDC/OAuth providers',
      content: {
        'application/json': {
          schema: z
            .object({ providers: z.array(CustomOAuthProviderSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid type parameter',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            invalid_type: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: "type must be either 'oauth2' or 'oidc'",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const postAdminCustomProvidersRoute = createRoute({
  method: 'post',
  path: '/admin/custom-providers',
  tags: ['admin', 'oauth-client'],
  summary: 'Create a new custom OIDC/OAuth provider',
  description:
    "Creates a new custom OAuth 2.0 or OIDC provider configuration. Required fields differ based on provider_type. Only available when custom OIDC/OAuth providers are enabled. For OIDC providers, the server fetches and validates the OpenID Connect discovery document from the issuer's well-known endpoint (or the provided discovery_url) at creation time. This ensures the issuer is reachable and correctly configured before the provider is stored.\n",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              provider_type: z
                .enum(['oauth2', 'oidc'])
                .openapi({ description: 'Type of OAuth provider' }),
              identifier: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .openapi({
                  description:
                    "Unique identifier (will be prefixed with 'custom:' automatically). Cannot use reserved provider names.",
                  example: 'mycompany',
                }),
              name: z
                .string()
                .openapi({ description: 'Human-readable display name', example: 'My Company SSO' }),
              client_id: z.string().openapi({ description: 'OAuth client ID from the provider' }),
              client_secret: z
                .string()
                .openapi({ description: 'OAuth client secret (will be encrypted at rest)' }),
              acceptable_client_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Additional acceptable client IDs for token validation' }),
              scopes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "OAuth scopes to request (OIDC providers will automatically include 'openid')",
                  example: ['email', 'profile'],
                }),
              pkce_enabled: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Enable PKCE (Proof Key for Code Exchange)' }),
              attribute_mapping: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Map provider claims to user attributes (cannot map to protected system fields)',
                  example: { email: 'user_email', name: 'full_name' },
                }),
              custom_claims_allowlist: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Raw IdP claim keys to copy verbatim into the user's custom_claims (e.g. groups, org_id). For OIDC providers these are read from the ID token claims (falling back to the userinfo response when no ID token is returned); for OAuth2 providers they are read from the userinfo response. Empty preserves no non-standard claims.",
                  example: ['groups', 'org_id'],
                }),
              authorization_params: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Additional authorization request parameters as string key-value pairs (cannot override reserved OAuth parameters)',
                  example: { prompt: 'consent' },
                }),
              enabled: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Whether the provider is enabled' }),
              email_optional: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Whether email is optional for users from this provider' }),
              issuer: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'OIDC issuer URL (required for provider_type: oidc)',
                  example: 'https://accounts.google.com',
                }),
              discovery_url: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'OIDC discovery URL (optional for OIDC, defaults to {issuer}/.well-known/openid-configuration)',
                }),
              skip_nonce_check: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'Skip nonce validation for OIDC (not recommended for production)',
                }),
              authorization_url: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'OAuth 2.0 authorization endpoint (required for provider_type: oauth2)',
                  example: 'https://provider.com/oauth/authorize',
                }),
              token_url: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'OAuth 2.0 token endpoint (required for provider_type: oauth2)',
                  example: 'https://provider.com/oauth/token',
                }),
              userinfo_url: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'OAuth 2.0 userinfo endpoint (required for provider_type: oauth2)',
                  example: 'https://provider.com/oauth/userinfo',
                }),
              jwks_uri: z
                .url()
                .exactOptional()
                .openapi({ description: 'JWKS URI for token validation (optional for OAuth2)' }),
            })
            .openapi({
              required: ['provider_type', 'identifier', 'name', 'client_id', 'client_secret'],
            }),
          examples: {
            oidc_provider: {
              summary: 'Create OIDC provider',
              value: {
                provider_type: 'oidc',
                identifier: 'mycompany',
                name: 'My Company SSO',
                client_id: 'your-client-id',
                client_secret: 'your-client-secret',
                issuer: 'https://accounts.mycompany.com',
                scopes: ['email', 'profile'],
              },
            },
            oauth2_provider: {
              summary: 'Create OAuth2 provider',
              value: {
                provider_type: 'oauth2',
                identifier: 'customauth',
                name: 'Custom Auth Provider',
                client_id: 'your-client-id',
                client_secret: 'your-client-secret',
                authorization_url: 'https://provider.com/oauth/authorize',
                token_url: 'https://provider.com/oauth/token',
                userinfo_url: 'https://provider.com/oauth/userinfo',
                scopes: ['email', 'profile'],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Custom OIDC/OAuth provider created successfully',
      content: { 'application/json': { schema: CustomOAuthProviderSchemaSchema } },
    },
    400: {
      description: 'Bad request - validation failed, provider exists, or quota exceeded',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            validation_failed: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: 'issuer is required for OIDC providers',
              },
            },
            provider_exists: {
              summary: 'conflict',
              value: {
                error_code: 'conflict',
                msg: 'A custom OAuth provider with this identifier already exists',
              },
            },
            quota_exceeded: {
              summary: 'over_custom_provider_quota',
              value: {
                error_code: 'over_custom_provider_quota',
                msg: 'Maximum number of custom OIDC/OAuth providers reached',
              },
            },
            reserved_name: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: 'Cannot use reserved provider name: google. This provider is already built into Supabase Auth.',
              },
            },
            discovery_fetch_failed: {
              summary: 'OIDC discovery fetch failed',
              value: {
                error_code: 'validation_failed',
                msg: 'Failed to fetch OIDC discovery document from "https://example.com/.well-known/openid-configuration"',
              },
            },
            discovery_invalid: {
              summary: 'OIDC discovery missing required fields',
              value: {
                error_code: 'validation_failed',
                msg: 'OIDC discovery document is missing required fields: jwks_uri',
              },
            },
            discovery_issuer_mismatch: {
              summary: 'OIDC discovery issuer mismatch',
              value: {
                error_code: 'validation_failed',
                msg: 'OIDC discovery issuer mismatch: discovery document reports "https://other.example.com" but expected "https://example.com"',
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const getAdminCustomProvidersIdentifierRoute = createRoute({
  method: 'get',
  path: '/admin/custom-providers/{identifier}',
  tags: ['admin', 'oauth-client'],
  summary: 'Get custom OIDC/OAuth provider details',
  description:
    'Retrieves details of a specific custom OIDC/OAuth provider. Only available when custom OIDC/OAuth providers are enabled.\n',
  request: {
    params: z.object({
      identifier: z
        .string()
        .regex(/^custom:[a-zA-Z0-9_-]+$/)
        .openapi({
          param: {
            name: 'identifier',
            in: 'path',
            required: true,
            description: "Provider identifier (must start with 'custom:' prefix)",
            schema: { type: 'string', pattern: '^custom:[a-zA-Z0-9_-]+$' },
            example: 'custom:mycompany',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Custom OIDC/OAuth provider details',
      content: { 'application/json': { schema: CustomOAuthProviderSchemaSchema } },
    },
    400: {
      description: 'Invalid identifier format',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            validation_failed: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: "identifier must start with 'custom:' prefix",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'Provider not found',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            not_found: {
              summary: 'custom_provider_not_found',
              value: {
                error_code: 'custom_provider_not_found',
                msg: 'Custom OAuth provider not found',
              },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const putAdminCustomProvidersIdentifierRoute = createRoute({
  method: 'put',
  path: '/admin/custom-providers/{identifier}',
  tags: ['admin', 'oauth-client'],
  summary: 'Update custom OIDC/OAuth provider',
  description:
    'Updates an existing custom OIDC/OAuth provider. All fields are optional. Only provided fields will be updated. Only available when custom OIDC/OAuth providers are enabled. When `issuer` or `discovery_url` is changed on an OIDC provider, the server re-fetches and validates the discovery document before persisting.\n',
  request: {
    params: z.object({
      identifier: z
        .string()
        .regex(/^custom:[a-zA-Z0-9_-]+$/)
        .openapi({
          param: {
            name: 'identifier',
            in: 'path',
            required: true,
            description: "Provider identifier (must start with 'custom:' prefix)",
            schema: { type: 'string', pattern: '^custom:[a-zA-Z0-9_-]+$' },
            example: 'custom:mycompany',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Human-readable display name' }),
              client_id: z.string().exactOptional().openapi({ description: 'OAuth client ID' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'OAuth client secret (only provide if changing, will be encrypted)',
                }),
              acceptable_client_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Additional acceptable client IDs' }),
              scopes: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'OAuth scopes to request' }),
              pkce_enabled: z.boolean().exactOptional().openapi({ description: 'Enable PKCE' }),
              attribute_mapping: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'Map provider claims to user attributes' }),
              custom_claims_allowlist: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Raw IdP claim keys to copy verbatim into the user's custom_claims (e.g. groups, org_id). For OIDC providers these are read from the ID token claims (falling back to the userinfo response when no ID token is returned); for OAuth2 providers they are read from the userinfo response. Empty preserves no non-standard claims.",
                }),
              authorization_params: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Additional authorization request parameters as string key-value pairs',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the provider is enabled' }),
              email_optional: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether email is optional' }),
              issuer: z
                .url()
                .exactOptional()
                .openapi({ description: 'OIDC issuer URL (for OIDC providers)' }),
              discovery_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'OIDC discovery URL (for OIDC providers)' }),
              skip_nonce_check: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Skip nonce validation for OIDC' }),
              authorization_url: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'OAuth 2.0 authorization endpoint (for OAuth2 providers)',
                }),
              token_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'OAuth 2.0 token endpoint (for OAuth2 providers)' }),
              userinfo_url: z
                .url()
                .exactOptional()
                .openapi({ description: 'OAuth 2.0 userinfo endpoint (for OAuth2 providers)' }),
              jwks_uri: z
                .url()
                .exactOptional()
                .openapi({ description: 'JWKS URI for token validation (for OAuth2 providers)' }),
            })
            .openapi({ required: [] }),
          examples: {
            update_name: {
              summary: 'Update provider name',
              value: { name: 'Updated Company Name' },
            },
            update_scopes: {
              summary: 'Update scopes',
              value: { scopes: ['openid', 'email', 'profile', 'groups'] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Custom OIDC/OAuth provider updated successfully',
      content: { 'application/json': { schema: CustomOAuthProviderSchemaSchema } },
    },
    400: {
      description: 'Invalid identifier, validation failed, or OIDC discovery validation failed',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            validation_failed: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: "identifier must start with 'custom:' prefix",
              },
            },
            discovery_fetch_failed: {
              summary: 'OIDC discovery fetch failed',
              value: {
                error_code: 'validation_failed',
                msg: 'Failed to fetch OIDC discovery document from "https://example.com/.well-known/openid-configuration"',
              },
            },
            discovery_issuer_mismatch: {
              summary: 'OIDC discovery issuer mismatch',
              value: {
                error_code: 'validation_failed',
                msg: 'OIDC discovery issuer mismatch: discovery document reports "https://other.example.com" but expected "https://example.com"',
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'Provider not found',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const deleteAdminCustomProvidersIdentifierRoute = createRoute({
  method: 'delete',
  path: '/admin/custom-providers/{identifier}',
  tags: ['admin', 'oauth-client'],
  summary: 'Delete custom OIDC/OAuth provider',
  description:
    'Permanently removes a custom OIDC/OAuth provider configuration. Only available when custom OIDC/OAuth providers are enabled.\n',
  request: {
    params: z.object({
      identifier: z
        .string()
        .regex(/^custom:[a-zA-Z0-9_-]+$/)
        .openapi({
          param: {
            name: 'identifier',
            in: 'path',
            required: true,
            description: "Provider identifier (must start with 'custom:' prefix)",
            schema: { type: 'string', pattern: '^custom:[a-zA-Z0-9_-]+$' },
            example: 'custom:mycompany',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Custom OIDC/OAuth provider deleted successfully (no content)' },
    400: {
      description: 'Invalid identifier format',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            validation_failed: {
              summary: 'validation_failed',
              value: {
                error_code: 'validation_failed',
                msg: "identifier must start with 'custom:' prefix",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: {
      description: 'Provider not found',
      content: {
        'application/json': {
          schema: ErrorSchemaSchema,
          examples: {
            not_found: {
              summary: 'custom_provider_not_found',
              value: {
                error_code: 'custom_provider_not_found',
                msg: 'Custom OAuth provider not found',
              },
            },
          },
        },
      },
    },
  },
  security: [{ APIKeyAuth: [], AdminAuth: [] }],
})

export const postOauthClientsRegisterRoute = createRoute({
  method: 'post',
  path: '/oauth/clients/register',
  tags: ['oauth-server'],
  summary: 'Register a new OAuth client dynamically (public endpoint).',
  description:
    'Allows applications to register as OAuth clients with this server dynamically. This follows the OAuth 2.0 Dynamic Client Registration Protocol. Only available when OAuth server is enabled and dynamic registration is allowed (set `GOTRUE_OAUTH_SERVER_ENABLED=true` and `GOTRUE_OAUTH_SERVER_ALLOW_DYNAMIC_REGISTRATION=true` for self-hosted or enable both settings in Supabase Dashboard).\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_name: z
                .string()
                .openapi({ description: 'Human-readable name of the client application' }),
              client_uri: z
                .url()
                .exactOptional()
                .openapi({ description: "URL of the client application's homepage" }),
              logo_uri: z
                .url()
                .exactOptional()
                .openapi({ description: "URL of the client application's logo" }),
              redirect_uris: z
                .array(z.url())
                .openapi({ description: 'Array of redirect URIs used by the client (maximum 10)' }),
              client_type: z
                .enum(['public', 'confidential'])
                .exactOptional()
                .openapi({
                  description:
                    "Type of the client. Optional. If not provided, will be inferred from token_endpoint_auth_method or defaults to 'confidential'. Public clients are used for applications that cannot securely store credentials (e.g., SPAs, mobile apps). Confidential clients can securely store credentials (e.g., server-side applications).\n",
                }),
              token_endpoint_auth_method: z
                .enum(['none', 'client_secret_basic', 'client_secret_post'])
                .exactOptional()
                .openapi({
                  description:
                    "Authentication method for the token endpoint. Optional. 'none' is for public clients, 'client_secret_basic' and 'client_secret_post' are for confidential clients. If provided, must be consistent with client_type. If not provided, will be inferred from client_type.\n",
                }),
              grant_types: z
                .array(z.enum(['authorization_code', 'refresh_token']))
                .exactOptional()
                .openapi({
                  description:
                    'OAuth grant types the client will use (defaults to both if not specified)',
                }),
              response_types: z
                .array(z.literal('code'))
                .exactOptional()
                .openapi({ description: 'OAuth response types the client will use' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({ description: 'Space-separated list of scope values' }),
            })
            .openapi({ required: ['client_name', 'redirect_uris'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'OAuth client registered successfully',
      content: { 'application/json': { schema: OAuthClientSchemaSchema } },
    },
    400: BadRequestResponseResponse,
    429: RateLimitResponseResponse,
  },
})

export const postOauthTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/token',
  tags: ['oauth-server'],
  summary: 'OAuth 2.1 Token endpoint',
  description:
    'Issues access tokens in exchange for authorization codes or refresh tokens. Supports authorization_code and refresh_token grant types. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).\n',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              grant_type: z
                .enum(['authorization_code', 'refresh_token'])
                .openapi({ description: 'The grant type being used' }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Authorization code (required for authorization_code grant)',
                }),
              redirect_uri: z
                .url()
                .exactOptional()
                .openapi({ description: 'Redirect URI (required for authorization_code grant)' }),
              code_verifier: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'PKCE code verifier (required for authorization_code grant)',
                }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Refresh token (required for refresh_token grant)' }),
              client_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'OAuth client identifier' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'OAuth client secret (for confidential clients)' }),
            })
            .openapi({ required: ['grant_type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Access token issued successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z.string().exactOptional().openapi({ description: 'The access token' }),
              token_type: z
                .string()
                .exactOptional()
                .openapi({ example: 'Bearer', description: 'Type of token issued' }),
              expires_in: z
                .int()
                .exactOptional()
                .openapi({ description: 'Lifetime in seconds of the access token' }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Refresh token (if applicable)' }),
              scope: z.string().exactOptional().openapi({ description: 'Authorized scopes' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
  },
})

export const getOauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/oauth/authorize',
  tags: ['oauth-server'],
  summary: 'OAuth 2.1 Authorization endpoint',
  description:
    'Initiates the OAuth authorization code flow. Redirects users to login and authorize the requesting application. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).\n',
  request: {
    query: z.object({
      response_type: z
        .literal('code')
        .openapi({
          param: {
            name: 'response_type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['code'] },
          },
        }),
      client_id: z
        .string()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description: 'The client identifier',
          },
        }),
      redirect_uri: z
        .url()
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uri' },
            description: "Client's redirect URI",
          },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            schema: { type: 'string' },
            description: 'Requested access scope',
            required: false,
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            schema: { type: 'string' },
            description: 'State parameter for CSRF protection',
            required: false,
          },
        }),
      code_challenge: z
        .string()
        .openapi({
          param: {
            name: 'code_challenge',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description: 'PKCE code challenge',
          },
        }),
      code_challenge_method: z
        .literal('S256')
        .openapi({
          param: {
            name: 'code_challenge_method',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['S256'] },
            description: 'PKCE code challenge method',
          },
        }),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to login or authorization page',
      headers: z.object({
        Location: {
          schema: z
            .url()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: BadRequestResponseResponse,
  },
})

export const getOauthAuthorizationsAuthorizationIdRoute = createRoute({
  method: 'get',
  path: '/oauth/authorizations/{authorization_id}',
  tags: ['oauth-server'],
  summary: 'Get OAuth authorization details',
  description:
    'Retrieves details about a pending OAuth authorization request. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).\n',
  request: {
    params: z.object({
      authorization_id: z
        .string()
        .openapi({
          param: {
            name: 'authorization_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Authorization details',
      content: {
        'application/json': {
          schema: z
            .object({
              authorization_id: z.string().exactOptional(),
              redirect_uri: z.url().exactOptional(),
              client: z
                .object({
                  id: z.uuid().exactOptional(),
                  name: z.string().exactOptional(),
                  uri: z.url().exactOptional(),
                  logo_uri: z.url().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              user: z
                .object({ id: z.uuid().exactOptional(), email: z.email().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              scope: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponseResponse,
    404: {
      description: 'Authorization not found',
      content: { 'application/json': { schema: ErrorSchemaSchema } },
    },
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const postOauthAuthorizationsAuthorizationIdConsentRoute = createRoute({
  method: 'post',
  path: '/oauth/authorizations/{authorization_id}/consent',
  tags: ['oauth-server'],
  summary: 'Approve or deny OAuth authorization',
  description:
    'User approves or denies authorization to the OAuth client. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).\n',
  request: {
    params: z.object({
      authorization_id: z
        .string()
        .openapi({
          param: {
            name: 'authorization_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .enum(['approve', 'deny'])
                .openapi({ description: 'Whether to approve or deny the authorization' }),
            })
            .openapi({ required: ['action'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Authorization consent processed',
      content: {
        'application/json': {
          schema: z.object({ redirect_url: z.url().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
  },
  security: [{ APIKeyAuth: [], UserAuth: [] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['general'],
  summary: 'Service healthcheck.',
  description: 'Ping this endpoint to receive information about the health of the service.',
  responses: {
    200: {
      description: 'Service is healthy.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.string().exactOptional().openapi({ example: 'v2.40.1' }),
              name: z.string().exactOptional().openapi({ example: 'GoTrue' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'GoTrue is a user registration and authentication API' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: { description: 'Service is not healthy. Retriable with exponential backoff.\n' },
    502: { description: 'Service is not healthy: infrastructure issue. Usually not retriable.\n' },
    503: {
      description:
        'Service is not healthy: infrastrucutre issue. Retriable with exponential backoff.\n',
    },
    504: {
      description:
        'Service is not healthy: request timed out. Retriable with exponential backoff.\n',
    },
  },
  security: [{ APIKeyAuth: [] }],
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  tags: ['general'],
  summary: 'Retrieve some of the public settings of the server.',
  description:
    'Use this endpoint to configure parts of any authentication UIs depending on the configured settings.\n',
  responses: {
    200: {
      description: 'Currently applicable settings of the server.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              disable_signup: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: false,
                  description: 'Whether new accounts can be created. (Valid for all providers.)',
                }),
              mailer_autoconfirm: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'Whether new email addresses need to be confirmed before sign-in is possible.',
                }),
              phone_autoconfirm: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'Whether new phone numbers need to be confirmed before sign-in is possible.',
                }),
              sms_provider: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'twilio',
                  description:
                    'Which SMS provider is being used to send messages to phone numbers.',
                }),
              saml_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: true,
                  description: 'Whether SAML is enabled on this API server. Defaults to false.',
                }),
              external: z
                .looseObject({})
                .superRefine((o, ctx) => {
                  const regex = new RegExp('[a-zA-Z0-9]+')
                  const Schema = z.boolean()
                  for (const [k, val] of Object.entries(o)) {
                    if (!regex.test(k)) {
                      continue
                    }
                    const result = Schema.safeParse(val)
                    if (!result.success) {
                      for (const issue of result.error.issues) {
                        ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                      }
                    }
                  }
                })
                .exactOptional()
                .openapi({
                  description: 'Which external identity providers are enabled.',
                  example: { github: true, apple: true, email: true, phone: true },
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ APIKeyAuth: [] }],
})
