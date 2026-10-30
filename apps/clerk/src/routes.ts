import { createRoute, z } from '@hono/zod-openapi'

const VerificationPasskeySchema = z
  .strictObject({
    object: z.literal('verification_passkey').exactOptional(),
    status: z.literal('verified'),
    strategy: z.literal('passkey'),
    nonce: z.literal('nonce').exactOptional(),
    message: z.string().nullable().exactOptional(),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'Passkey',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationPasskey')

type PasskeyType = {
  id?: string
  object: 'passkey'
  name: string
  last_used_at: bigint
  verification: z.infer<typeof VerificationPasskeySchema> | null
}

const JWKSEd25519PublicKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('OKP'),
    crv: z.literal('Ed25519'),
    x: z.string(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'crv', 'x'] })
  .openapi('JWKSEd25519PublicKey')

const JWKSEcdsaPublicKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('EC'),
    crv: z.string(),
    x: z.string(),
    y: z.string(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'crv', 'x', 'y'] })
  .openapi('JWKSEcdsaPublicKey')

const JWKSRsaPublicKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('RSA'),
    n: z.string(),
    e: z.string(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'n', 'e'] })
  .openapi('JWKSRsaPublicKey')

const JWKSEd25519PrivateKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('OKP'),
    crv: z.literal('Ed25519'),
    x: z.string(),
    d: z.string(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'crv', 'x', 'd'] })
  .openapi('JWKSEd25519PrivateKey')

const JWKSEcdsaPrivateKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('EC'),
    crv: z.string(),
    x: z.string(),
    y: z.string(),
    d: z.string(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'crv', 'x', 'y', 'd'] })
  .openapi('JWKSEcdsaPrivateKey')

const JWKSRsaPrivateKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('RSA'),
    n: z.string(),
    e: z.string(),
    d: z.string(),
    p: z.string(),
    q: z.string(),
    dp: z.string().exactOptional(),
    dq: z.string().exactOptional(),
    qi: z.string().exactOptional(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'crv', 'n', 'e', 'd', 'p', 'q'] })
  .openapi('JWKSRsaPrivateKey')

const JWKSSymmetricKeySchema = z
  .object({
    kid: z.string(),
    alg: z.string(),
    use: z.string(),
    kty: z.literal('oct'),
    k: z.string(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    x5u: z.string().exactOptional(),
  })
  .openapi({ required: ['kid', 'alg', 'use', 'kty', 'k'] })
  .openapi('JWKSSymmetricKey')

const JWKSSchema = z
  .strictObject({
    keys: z
      .array(
        z.xor([
          JWKSEd25519PublicKeySchema,
          JWKSEcdsaPublicKeySchema,
          JWKSRsaPublicKeySchema,
          JWKSEd25519PrivateKeySchema,
          JWKSEcdsaPrivateKeySchema,
          JWKSRsaPrivateKeySchema,
          JWKSSymmetricKeySchema,
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JWKS')

const SessionActivityResponseSchema = z
  .object({
    object: z.string(),
    id: z.string(),
    device_type: z.string().exactOptional(),
    is_mobile: z.boolean(),
    browser_name: z.string().exactOptional(),
    browser_version: z.string().exactOptional(),
    ip_address: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
  })
  .nullable()
  .openapi({ required: ['id', 'object', 'is_mobile'] })
  .openapi('SessionActivityResponse')

const SessionTaskSchema = z
  .object({ key: z.string() })
  .openapi({ required: ['key'] })
  .openapi('SessionTask')

const SessionSchema = z
  .strictObject({
    object: z
      .literal('session')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string(),
    user_id: z.string(),
    client_id: z.string(),
    actor: z.object({}).nullable().exactOptional(),
    status: z.enum([
      'active',
      'revoked',
      'ended',
      'expired',
      'removed',
      'abandoned',
      'replaced',
      'pending',
    ]),
    last_active_organization_id: z.string().nullable().exactOptional(),
    last_active_at: z.int(),
    latest_activity: SessionActivityResponseSchema.exactOptional(),
    expire_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Unix timestamp in milliseconds of expiration. Zero means no maximum lifetime.\n',
      }),
    abandon_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Unix timestamp in milliseconds of abandonment. Zero means no abandonment deadline.\n',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    tasks: z.array(SessionTaskSchema).nullable().exactOptional(),
  })
  .openapi({
    required: [
      'object',
      'id',
      'user_id',
      'client_id',
      'status',
      'last_active_at',
      'expire_at',
      'abandon_at',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('Session')

const ClientSchema = z
  .strictObject({
    object: z
      .literal('client')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string().openapi({ description: 'String representing the identifier of the session.\n' }),
    session_ids: z.array(z.string()),
    sessions: z.array(SessionSchema),
    sign_in_id: z.string().nullable(),
    sign_up_id: z.string().nullable(),
    last_active_session_id: z
      .string()
      .nullable()
      .openapi({ description: 'Last active session_id.\n' }),
    last_authentication_strategy: z
      .string()
      .nullable()
      .openapi({
        description:
          'The authentication strategy that was last used to authenticate the user on this client.\n',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'session_ids',
      'sessions',
      'sign_in_id',
      'sign_up_id',
      'last_active_session_id',
      'last_authentication_strategy',
      'updated_at',
      'created_at',
    ],
  })
  .openapi('Client')

const ClerkErrorSchema = z
  .object({
    message: z.string(),
    long_message: z.string(),
    code: z.string(),
    meta: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: ['message', 'long_message', 'code'] })
  .openapi('ClerkError')

const ClerkErrorsSchema = z
  .object({
    errors: z.array(ClerkErrorSchema),
    meta: z.looseObject({}).exactOptional(),
    clerk_trace_id: z.string().exactOptional(),
  })
  .openapi({ required: ['errors'] })
  .openapi('ClerkErrors')

const VerificationOtpSchema = z
  .strictObject({
    object: z.literal('verification_otp').exactOptional(),
    status: z.enum(['unverified', 'verified', 'failed', 'expired']),
    strategy: z
      .enum(['phone_code', 'email_code', 'reset_password_email_code'])
      .openapi({ 'x-speakeasy-unknown-values': 'allow' }),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
    channel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The delivery channel of the code (phone codes only).' }),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'OTP',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationOtp')

const VerificationAdminSchema = z
  .strictObject({
    object: z.literal('verification_admin').exactOptional(),
    status: z.literal('verified'),
    strategy: z.literal('admin').openapi({ 'x-speakeasy-unknown-values': 'allow' }),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'Admin',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationAdmin')

const VerificationFromOauthSchema = z
  .strictObject({
    object: z.literal('verification_from_oauth').exactOptional(),
    status: z.enum(['unverified', 'verified']),
    strategy: z.string().regex(/^from_oauth_(?:(?:token_)|(?:custom_))?[a-z]+$/),
    error: z.xor([ClerkErrorSchema]).nullable().exactOptional(),
    expire_at: z.int().nullable(),
    attempts: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'FromOAuth',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationFromOauth')

const VerificationTicketSchema = z
  .strictObject({
    object: z.literal('verification_ticket').exactOptional(),
    status: z.enum(['unverified', 'verified', 'expired']),
    strategy: z.literal('ticket').openapi({ 'x-speakeasy-unknown-values': 'allow' }),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'Ticket',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationTicket')

const VerificationSamlSchema = z
  .strictObject({
    object: z.literal('verification_saml').exactOptional(),
    status: z.enum(['unverified', 'verified', 'failed', 'expired', 'transferable']),
    strategy: z.literal('saml'),
    external_verification_redirect_url: z.string().nullable().exactOptional(),
    error: z.xor([ClerkErrorSchema]).nullable().exactOptional(),
    expire_at: z.int().nullable().exactOptional(),
    attempts: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({ 'x-speakeasy-name-override': 'SAML', required: ['status', 'strategy', 'attempts'] })
  .openapi('VerificationSaml')

const VerificationEmailLinkSchema = z
  .strictObject({
    object: z.literal('verification_email_link').exactOptional(),
    status: z.enum(['unverified', 'verified', 'failed', 'expired']),
    strategy: z.literal('email_link'),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'EmailLink',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationEmailLink')

const VerificationScimSchema = z
  .strictObject({
    object: z.literal('verification_scim').exactOptional(),
    status: z.literal('verified'),
    strategy: z.literal('scim'),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
  })
  .openapi({
    'x-speakeasy-name-override': 'SCIM',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationScim')

const IdentificationLinkSchema = z
  .strictObject({ type: z.string().regex(/^oauth_[a-z]+$/), id: z.string() })
  .openapi({ required: ['type', 'id'] })
  .openapi('IdentificationLink')

const EmailAddressSchema = z
  .strictObject({
    id: z.string().exactOptional(),
    object: z
      .literal('email_address')
      .openapi({
        'x-speakeasy-unknown-values': 'allow',
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    email_address: z.string(),
    reserved: z.boolean(),
    verification: z
      .xor([
        VerificationOtpSchema,
        VerificationAdminSchema,
        VerificationFromOauthSchema,
        VerificationTicketSchema,
        VerificationSamlSchema,
        VerificationEmailLinkSchema,
        VerificationScimSchema,
      ])
      .nullable()
      .openapi({
        discriminator: {
          propertyName: 'object',
          mapping: {
            verification_otp: '#/components/schemas/verification_otp',
            verification_admin: '#/components/schemas/verification_admin',
            verification_from_oauth: '#/components/schemas/verification_from_oauth',
            verification_ticket: '#/components/schemas/verification_ticket',
            verification_saml: '#/components/schemas/verification_saml',
            verification_email_link: '#/components/schemas/verification_email_link',
            verification_scim: '#/components/schemas/verification_scim',
          },
        },
      }),
    linked_to: z.array(IdentificationLinkSchema),
    matches_sso_connection: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this email address domain matches an active enterprise connection.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
  })
  .openapi({
    required: [
      'object',
      'email_address',
      'verification',
      'linked_to',
      'reserved',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('EmailAddress')

const DeletedObjectSchema = z
  .strictObject({
    object: z.string(),
    id: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    deleted: z.boolean(),
    external_id: z.string().exactOptional(),
  })
  .openapi({ required: ['object', 'deleted'] })
  .openapi('DeletedObject')

const PhoneNumberSchema = z
  .strictObject({
    id: z.string().exactOptional(),
    object: z
      .literal('phone_number')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    phone_number: z.string(),
    reserved_for_second_factor: z.boolean().exactOptional(),
    default_second_factor: z.boolean().exactOptional(),
    reserved: z.boolean(),
    verification: z
      .xor([VerificationOtpSchema, VerificationAdminSchema])
      .nullable()
      .openapi({
        discriminator: {
          propertyName: 'object',
          mapping: {
            verification_otp: '#/components/schemas/verification_otp',
            verification_admin: '#/components/schemas/verification_admin',
          },
        },
      }),
    linked_to: z.array(IdentificationLinkSchema),
    backup_codes: z.array(z.string()).nullable().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
  })
  .openapi({
    required: [
      'object',
      'phone_number',
      'verification',
      'linked_to',
      'reserved',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('PhoneNumber')

const TokenSchema = z
  .strictObject({
    object: z
      .literal('token')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    jwt: z
      .string()
      .openapi({ description: 'String representing the encoded JSON Web Token (JWT) value.\n' }),
  })
  .openapi({ required: ['object', 'jwt'] })
  .openapi('Token')

const CookiesSchema = z
  .strictObject({
    object: z
      .literal('cookies')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    cookies: z.array(z.string()).openapi({ description: 'Array of cookie directives.' }),
  })
  .openapi({ required: ['object', 'cookies'] })
  .openapi('Cookies')

const SessionRefreshSchema = z.xor([TokenSchema, CookiesSchema]).openapi('SessionRefresh')

const ReverificationSchema = z
  .strictObject({
    object: z
      .literal('reverification')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string(),
    session_id: z.string(),
    user_id: z.string(),
    level: z
      .enum(['first_factor', 'second_factor', 'multi_factor'])
      .openapi({ description: 'The level used for the reverification' }),
    status: z.enum(['needs_first_factor', 'needs_second_factor', 'complete']),
    first_factor_verified_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Unix timestamp (ms) of the first factor verification, or null if not verified.\n',
      }),
    second_factor_verified_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Unix timestamp (ms) of the second factor verification, or null if not verified.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    description:
      'A reverification scoped to a session. Returned so a resource server can validate a reverification id received from its client.\n',
    required: [
      'object',
      'id',
      'session_id',
      'user_id',
      'level',
      'status',
      'first_factor_verified_at',
      'second_factor_verified_at',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Reverification')

const TemplateSchema = z
  .strictObject({
    id: z.string().exactOptional(),
    object: z
      .literal('template')
      .exactOptional()
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    instance_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the instance to which the template belongs' }),
    resource_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'whether this is a system (default) or user overridden) template' }),
    template_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'whether this is an email or SMS template' }),
    name: z.string().exactOptional().openapi({ description: 'user-friendly name of the template' }),
    slug: z
      .string()
      .exactOptional()
      .openapi({ description: 'machine-friendly name of the template' }),
    position: z
      .int()
      .exactOptional()
      .openapi({ description: 'position with the listing of templates' }),
    can_revert: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'whether this template can be reverted to the corresponding system default',
      }),
    can_delete: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether this template can be deleted' }),
    can_edit_body: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether the body of this template can be edited' }),
    can_toggle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'whether this template can be enabled or disabled, true only for notification SMS templates',
      }),
    subject: z.string().nullable().exactOptional().openapi({ description: 'email subject' }),
    markup: z
      .string()
      .exactOptional()
      .openapi({ description: 'the editor markup used to generate the body of the template' }),
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'the template body before variable interpolation' }),
    available_variables: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'list of variables that are available for use in the template body',
      }),
    required_variables: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'list of variables that must be contained in the template body' }),
    from_email_name: z.string().exactOptional(),
    reply_to_email_name: z.string().exactOptional(),
    delivered_by_clerk: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    flagged_as_suspicious: z.boolean().exactOptional(),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
  })
  .openapi({ required: [] })
  .openapi('Template')

const VerificationWeb3Schema = z
  .strictObject({
    object: z.literal('verification_web3').exactOptional(),
    status: z.enum(['unverified', 'verified', 'failed', 'expired']),
    strategy: z.enum([
      'web3_metamask_signature',
      'web3_base_signature',
      'web3_coinbase_wallet_signature',
      'web3_okx_wallet_signature',
      'web3_solana_signature',
    ]),
    nonce: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    attempts: z.int().nullable(),
    expire_at: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'Web3Signature',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationWeb3')

const Web3WalletSchema = z
  .strictObject({
    id: z.string().exactOptional(),
    object: z
      .literal('web3_wallet')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    web3_wallet: z.string(),
    verification: z
      .xor([VerificationWeb3Schema, VerificationAdminSchema])
      .nullable()
      .openapi({ discriminator: { propertyName: 'object' } }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
  })
  .openapi({ required: ['object', 'web3_wallet', 'verification', 'created_at', 'updated_at'] })
  .openapi('Web3Wallet')

const PasskeySchema: z.ZodType<PasskeyType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.string().exactOptional(),
        object: z
          .literal('passkey')
          .openapi({
            description:
              "String representing the object's type. Objects of the same type share the same value.\n",
          }),
        name: z.string(),
        last_used_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of when the passkey was last used.\n',
          }),
        verification: z
          .xor([VerificationPasskeySchema])
          .nullable()
          .openapi({ discriminator: { propertyName: 'object' } }),
      })
      .openapi({ required: ['object', 'name', 'last_used_at', 'verification'] }),
  )
  .openapi('Passkey')

const VerificationOauthSchema = z
  .strictObject({
    object: z.literal('verification_oauth').exactOptional(),
    status: z
      .enum(['unverified', 'verified', 'failed', 'expired', 'transferable'])
      .openapi({ 'x-speakeasy-unknown-values': 'allow' }),
    strategy: z
      .string()
      .regex(/^oauth_(?:(?:token_)|(?:custom_))?[a-z]+$/)
      .openapi({ 'x-speakeasy-unknown-values': 'allow' }),
    external_verification_redirect_url: z.string().exactOptional(),
    error: z.xor([ClerkErrorSchema]).nullable().exactOptional(),
    expire_at: z.int(),
    attempts: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'Oauth',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationOauth')

const VerificationGoogleOneTapSchema = z
  .strictObject({
    object: z.literal('verification_google_one_tap').exactOptional(),
    status: z.enum(['unverified', 'verified']),
    strategy: z.literal('google_one_tap'),
    expire_at: z.int().nullable(),
    attempts: z.int().nullable(),
    verified_at_client: z.string().nullable().exactOptional(),
    error: z.xor([ClerkErrorSchema]).nullable().exactOptional(),
  })
  .openapi({
    'x-speakeasy-name-override': 'GoogleOneTap',
    required: ['status', 'strategy', 'attempts', 'expire_at'],
  })
  .openapi('VerificationGoogleOneTap')

const ExternalAccountWithVerificationSchema = z
  .looseObject({
    object: z
      .enum(['external_account', 'facebook_account', 'google_account'])
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string(),
    provider: z.string(),
    identification_id: z.string(),
    provider_user_id: z
      .string()
      .openapi({ description: "The unique ID of the user in the external provider's system" }),
    approved_scopes: z.string(),
    email_address: z.string(),
    email_address_verified: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether the email was verified by the OAuth provider at creation time. null = unknown (pre-migration data or custom OAuth providers), true = provider confirmed email was verified, false = provider confirmed email was NOT verified\n',
      }),
    first_name: z.string(),
    last_name: z.string(),
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Please use `image_url` instead' }),
    image_url: z.string().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
    phone_number: z.string().nullable().exactOptional(),
    public_metadata: z.looseObject({}),
    label: z.string().nullable().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    verification: z
      .xor([VerificationOauthSchema, VerificationGoogleOneTapSchema])
      .nullable()
      .openapi({ discriminator: { propertyName: 'object' } }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'provider',
      'identification_id',
      'provider_user_id',
      'approved_scopes',
      'email_address',
      'first_name',
      'last_name',
      'public_metadata',
      'created_at',
      'updated_at',
      'verification',
    ],
  })
  .openapi('ExternalAccountWithVerification')

const SAMLAccountConnectionSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'domain')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['domain'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'domains')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['domains'] }),
  ])
  .and(
    z
      .object({
        id: z.string(),
        name: z.string(),
        domain: z.string().exactOptional().openapi({ deprecated: true }),
        domains: z.array(z.string()).exactOptional(),
        active: z.boolean(),
        provider: z.string(),
        sync_user_attributes: z.boolean(),
        allow_subdomains: z.boolean().exactOptional(),
        allow_idp_initiated: z.boolean().exactOptional(),
        disable_additional_identifications: z.boolean().exactOptional(),
        created_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of creation.\n',
          }),
        updated_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of last update.\n',
          }),
      })
      .openapi({
        required: [
          'id',
          'name',
          'active',
          'provider',
          'sync_user_attributes',
          'created_at',
          'updated_at',
        ],
      }),
  )
  .openapi({
    required: [
      'id',
      'name',
      'active',
      'provider',
      'sync_user_attributes',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('SAMLAccountConnection')

const SAMLAccountSchema = z
  .strictObject({
    id: z.string(),
    object: z
      .literal('saml_account')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    provider: z.string(),
    active: z.boolean(),
    email_address: z.string(),
    first_name: z.string().nullable().exactOptional(),
    last_name: z.string().nullable().exactOptional(),
    provider_user_id: z.string().nullable().exactOptional(),
    last_authenticated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of last authentication.\n',
      }),
    public_metadata: z.looseObject({}).exactOptional(),
    verification: z
      .xor([VerificationSamlSchema, VerificationTicketSchema])
      .nullable()
      .openapi({ discriminator: { propertyName: 'object' } }),
    saml_connection: z.xor([SAMLAccountConnectionSchema]).nullable().exactOptional(),
  })
  .openapi({ required: ['id', 'object', 'provider', 'active', 'email_address', 'verification'] })
  .openapi('SAMLAccount')

const EnterpriseAccountConnectionSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'domain')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['domain'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'domains')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['domains'] }),
  ])
  .and(
    z
      .object({
        id: z.string(),
        protocol: z.string(),
        provider: z.string(),
        name: z.string(),
        logo_public_url: z.string().nullable(),
        domain: z.string().exactOptional().openapi({ deprecated: true }),
        domains: z.array(z.string()).exactOptional(),
        active: z.boolean(),
        sync_user_attributes: z.boolean(),
        allow_subdomains: z.boolean(),
        allow_idp_initiated: z.boolean(),
        disable_additional_identifications: z.boolean(),
        created_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of creation.\n',
          }),
        updated_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of last update.\n',
          }),
      })
      .openapi({
        required: [
          'id',
          'protocol',
          'name',
          'logo_public_url',
          'active',
          'provider',
          'sync_user_attributes',
          'disable_additional_identifications',
          'allow_subdomains',
          'allow_idp_initiated',
          'created_at',
          'updated_at',
        ],
      }),
  )
  .openapi({
    required: [
      'id',
      'protocol',
      'name',
      'logo_public_url',
      'active',
      'provider',
      'sync_user_attributes',
      'disable_additional_identifications',
      'allow_subdomains',
      'allow_idp_initiated',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('EnterpriseAccountConnection')

const EnterpriseAccountSchema = z
  .strictObject({
    id: z.string(),
    object: z
      .literal('enterprise_account')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    protocol: z
      .enum(['oauth', 'saml'])
      .exactOptional()
      .openapi({ description: 'The authentication protocol used to sign in.\n' }),
    provider: z.string(),
    active: z.boolean(),
    email_address: z.string(),
    first_name: z.string().nullable().exactOptional(),
    last_name: z.string().nullable().exactOptional(),
    provider_user_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The unique ID of the user in the external provider's system" }),
    enterprise_connection_id: z.string().nullable().exactOptional(),
    public_metadata: z.looseObject({}).exactOptional(),
    verification: z
      .xor([VerificationTicketSchema, VerificationSamlSchema, VerificationOauthSchema])
      .nullable()
      .openapi({ discriminator: { propertyName: 'object' } }),
    enterprise_connection: z.xor([EnterpriseAccountConnectionSchema]).nullable().exactOptional(),
    last_authenticated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of last authentication.\n',
      }),
  })
  .openapi({ required: ['id', 'object', 'provider', 'active', 'email_address', 'verification'] })
  .openapi('EnterpriseAccount')

const OrganizationSchema = z
  .object({
    object: z.literal('organization'),
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    image_url: z.string().exactOptional(),
    has_image: z.boolean(),
    members_count: z.int().exactOptional(),
    missing_member_with_elevated_permissions: z.boolean().exactOptional(),
    pending_invitations_count: z.int().exactOptional(),
    max_allowed_memberships: z.int(),
    admin_delete_enabled: z.boolean(),
    self_serve_sso_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this organization can configure self-serve enterprise SSO.\n',
      }),
    public_metadata: z.looseObject({}),
    private_metadata: z.looseObject({}).exactOptional(),
    created_by: z.string().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
    last_active_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last activity.\n',
      }),
    role_set_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The key of the [role set](https://clerk.com/docs/guides/organizations/control-access/role-sets) assigned to this organization.\n',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'name',
      'slug',
      'has_image',
      'max_allowed_memberships',
      'admin_delete_enabled',
      'public_metadata',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Organization')

const OrganizationMembershipPublicUserDataSchema = z
  .strictObject({
    user_id: z.string(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    profile_image_url: z.string().nullable().openapi({ deprecated: true }),
    image_url: z.string(),
    has_image: z.boolean(),
    identifier: z.string().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
    banned: z.boolean().exactOptional(),
    deprovisioned: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'An organization membership with public user data populated',
    required: ['user_id', 'first_name', 'last_name', 'profile_image_url', 'image_url', 'has_image'],
  })
  .openapi('OrganizationMembershipPublicUserData')

const OrganizationMembershipSchema = z
  .object({
    id: z.string(),
    object: z
      .literal('organization_membership')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    role: z.string(),
    role_name: z.string().exactOptional(),
    permissions: z.array(z.string()),
    public_metadata: z
      .looseObject({})
      .openapi({
        description:
          'Metadata saved on the organization membership, accessible from both Frontend and Backend APIs',
      }),
    private_metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Metadata saved on the organization membership, accessible only from the Backend API',
      }),
    organization: OrganizationSchema,
    public_user_data: OrganizationMembershipPublicUserDataSchema.exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of last update.' }),
  })
  .openapi({
    description: "A user's membership in an organization",
    required: [
      'object',
      'id',
      'role',
      'permissions',
      'public_metadata',
      'created_at',
      'updated_at',
      'organization',
    ],
  })
  .openapi('OrganizationMembership')

const SCIMUserMetadataSchema = z
  .strictObject({
    id: z.string().openapi({ description: "The user's resource ID in this directory." }),
    directory_name: z.string(),
    provider: z.string(),
    enterprise_connection_id: z.string().nullable(),
    groups: z
      .array(
        z
          .strictObject({ id: z.string(), display_name: z.string() })
          .openapi({ required: ['id', 'display_name'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Omitted when groups were not loaded; an empty array means no group memberships.',
      }),
    directory_id: z
      .string()
      .openapi({ description: 'The ID of the directory the user is provisioned from.\n' }),
    directory_enabled: z
      .boolean()
      .openapi({ description: 'Whether the directory is currently enabled.\n' }),
    external_id: z
      .string()
      .nullable()
      .openapi({ description: "The user's external ID as reported by the directory, if any.\n" }),
  })
  .openapi({
    description:
      "Metadata describing a user's linkage to a directory. Included in user responses when directory data is requested, and in directory-triggered user webhooks. Its absence does not necessarily mean the user is not managed by a directory.\n",
    required: [
      'id',
      'directory_name',
      'provider',
      'enterprise_connection_id',
      'directory_enabled',
      'directory_id',
      'external_id',
    ],
  })
  .openapi('SCIMUserMetadata')

const UserSchema = z
  .strictObject({
    id: z.string(),
    object: z
      .literal('user')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    external_id: z.string().nullable(),
    primary_email_address_id: z.string().nullable(),
    primary_phone_number_id: z.string().nullable(),
    primary_web3_wallet_id: z.string().nullable(),
    username: z.string().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    locale: z.string().nullable().exactOptional(),
    timezone: z.string().nullable().exactOptional(),
    profile_image_url: z.string().exactOptional().openapi({ deprecated: true }),
    image_url: z.string().exactOptional(),
    has_image: z.boolean(),
    public_metadata: z.looseObject({}),
    private_metadata: z.looseObject({}).nullable().exactOptional(),
    unsafe_metadata: z.looseObject({}).exactOptional(),
    email_addresses: z.array(EmailAddressSchema),
    phone_numbers: z.array(PhoneNumberSchema),
    web3_wallets: z.array(Web3WalletSchema),
    passkeys: z.array(PasskeySchema),
    password_enabled: z.boolean(),
    two_factor_enabled: z.boolean(),
    totp_enabled: z.boolean(),
    backup_code_enabled: z.boolean(),
    mfa_enabled_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Unix timestamp of when MFA was last enabled for this user. It should be noted that this field is not nullified if MFA is disabled.\n',
      }),
    mfa_disabled_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Unix timestamp of when MFA was last disabled for this user. It should be noted that this field is not nullified if MFA is enabled again.\n',
      }),
    password_last_updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: "Unix timestamp of when the user's password was last updated.\n",
      }),
    external_accounts: z.array(ExternalAccountWithVerificationSchema),
    saml_accounts: z.array(SAMLAccountSchema),
    enterprise_accounts: z.array(EnterpriseAccountSchema),
    organization_memberships: z.array(OrganizationMembershipSchema).exactOptional(),
    last_sign_in_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of last sign-in.\n',
      }),
    banned: z.boolean().openapi({ description: 'Flag to denote whether user is banned or not.\n' }),
    locked: z
      .boolean()
      .openapi({
        description:
          'Flag to denote whether user is currently locked, i.e. restricted from signing in or not.\n',
      }),
    deprovisioned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to denote whether user has been deprovisioned and is restricted from signing in.\n',
      }),
    lockout_expires_in_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'The number of seconds remaining until the lockout period expires for a locked user. A null value for a locked user indicates that lockout never expires.\n',
      }),
    verification_attempts_remaining: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'The number of verification attempts remaining until the user is locked. Null if account lockout is not enabled. Note: if a user is locked explicitly via the Backend API, they may still have verification attempts remaining.\n',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    delete_self_enabled: z
      .boolean()
      .openapi({ description: 'If enabled, user can delete themselves via FAPI.\n' }),
    create_organization_enabled: z
      .boolean()
      .openapi({ description: 'If enabled, user can create organizations via FAPI.\n' }),
    create_organizations_limit: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of organizations the user can create. 0 means unlimited.\n',
      }),
    last_active_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of the latest session activity, with day precision.\n',
        example: 1700690400000,
      }),
    legal_accepted_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of when the user accepted the legal requirements.\n',
        example: 1700690400000,
      }),
    bypass_client_trust: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'When set to `true`, the user will bypass Device Trust checks during sign-in.',
      }),
    directories: z
      .array(SCIMUserMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'All loaded directory links. Omitted when links were not loaded; an empty array means the user has no directory links.\n',
      }),
    directory: SCIMUserMetadataSchema.exactOptional().openapi({
      deprecated: true,
      description: 'The most recently updated directory link. Use directories for all links.',
    }),
    scim: SCIMUserMetadataSchema.nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Alias of directory. Use directories for all links.',
      }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'username',
      'first_name',
      'last_name',
      'has_image',
      'primary_email_address_id',
      'primary_phone_number_id',
      'primary_web3_wallet_id',
      'password_enabled',
      'two_factor_enabled',
      'totp_enabled',
      'backup_code_enabled',
      'email_addresses',
      'phone_numbers',
      'web3_wallets',
      'passkeys',
      'external_accounts',
      'saml_accounts',
      'enterprise_accounts',
      'public_metadata',
      'external_id',
      'last_sign_in_at',
      'banned',
      'locked',
      'lockout_expires_in_seconds',
      'verification_attempts_remaining',
      'created_at',
      'updated_at',
      'delete_self_enabled',
      'create_organization_enabled',
      'last_active_at',
      'mfa_enabled_at',
      'mfa_disabled_at',
      'legal_accepted_at',
    ],
  })
  .openapi('User')

const PasswordHasherSchema = z
  .string()
  .openapi({
    description:
      'The hashing algorithm that was used to generate the password digest.\n\nThe algorithms we support at the moment are [`bcrypt`](https://en.wikipedia.org/wiki/Bcrypt), [`bcrypt_sha256_django`](https://docs.djangoproject.com/en/4.0/topics/auth/passwords/), [`md5`](https://en.wikipedia.org/wiki/MD5), `pbkdf2_sha1`, `pbkdf2_sha256`, [`pbkdf2_sha256_django`](https://docs.djangoproject.com/en/4.0/topics/auth/passwords/),\n`pbkdf2_sha512`, [`phpass`](https://www.openwall.com/phpass/), `md5_phpass`, [`scrypt_firebase`](https://firebaseopensource.com/projects/firebase/scrypt/),\n[`scrypt_werkzeug`](https://werkzeug.palletsprojects.com/en/3.0.x/utils/#werkzeug.security.generate_password_hash), [`sha256`](https://en.wikipedia.org/wiki/SHA-2),\n[`ldap_ssha`](https://www.openldap.org/faq/data/cache/347.html), the [`argon2`](https://argon2.online/) variants: `argon2i` and `argon2id`, `sha512_symfony`, the SHA-512 variant of the [Symfony](https://symfony.com/doc/current/security/passwords.html) legacy hasher,\nand `pbkdf2_sha512_hex`, a variant of `pbkdf2_sha512` that accepts hex-encoded salt and hash.\n\nEach of the supported hashers expects the incoming digest to be in a particular format. See the [Clerk docs](https://clerk.com/docs/references/backend/user/create-user) for more information.',
  })
  .openapi('PasswordHasher')

const TotalCountSchema = z
  .strictObject({
    object: z
      .literal('total_count')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['object', 'total_count'] })
  .openapi('TotalCount')

const CommerceMoneyResponseSchema = z
  .strictObject({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The amount in cents.' }),
    amount_formatted: z
      .string()
      .openapi({ description: 'The formatted amount as a string (e.g., "$49.99").' }),
    currency: z.string().openapi({ description: 'The currency code (e.g., "USD").' }),
    currency_symbol: z.string().openapi({ description: 'The currency symbol (e.g., "$").' }),
  })
  .openapi({ required: ['amount', 'amount_formatted', 'currency', 'currency_symbol'] })
  .openapi('CommerceMoneyResponse')

const CommerceSubscriptionCreditResponseSchema = z
  .strictObject({
    amount: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Credit amount.' }),
    cycle_remaining_percent: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Percentage of the billing cycle remaining.' }),
  })
  .openapi({ required: [] })
  .openapi('CommerceSubscriptionCreditResponse')

const FeatureResponseSchema = z
  .strictObject({
    object: z
      .literal('feature')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the feature.' }),
    name: z.string().openapi({ description: 'The name of the feature.' }),
    description: z.string().openapi({ description: 'The description of the feature.' }),
    slug: z.string().openapi({ description: 'The URL-friendly slug for the feature.' }),
    avatar_url: z.string().openapi({ description: "The URL of the feature's avatar image." }),
  })
  .openapi({ required: ['object', 'id', 'name', 'description', 'slug', 'avatar_url'] })
  .openapi('FeatureResponse')

const CommercePlanSchema = z
  .strictObject({
    object: z
      .literal('commerce_plan')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the commerce plan.' }),
    name: z.string().openapi({ description: 'The name of the commerce plan.' }),
    fee: CommerceMoneyResponseSchema.nullable(),
    annual_monthly_fee: CommerceMoneyResponseSchema.nullable(),
    annual_fee: CommerceMoneyResponseSchema.nullable(),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The amount in cents for the plan.',
      }),
    amount_formatted: z
      .string()
      .openapi({ description: 'The formatted amount as a string (e.g., "$49.99").' }),
    annual_monthly_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The monthly amount in cents when billed annually.',
      }),
    annual_monthly_amount_formatted: z
      .string()
      .openapi({ description: 'The formatted annual monthly amount as a string.' }),
    annual_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The total annual amount in cents.',
      }),
    annual_amount_formatted: z
      .string()
      .openapi({ description: 'The formatted annual amount as a string.' }),
    currency_symbol: z.string().openapi({ description: 'The currency symbol (e.g., "$").' }),
    currency: z.string().openapi({ description: 'The currency code (e.g., "USD").' }),
    description: z.string().openapi({ description: 'The description of the commerce plan.' }),
    product_id: z.string().openapi({ description: 'The ID of the product this plan belongs to.' }),
    is_default: z.boolean().openapi({ description: 'Whether this is the default plan.' }),
    is_recurring: z.boolean().openapi({ description: 'Whether this is a recurring plan.' }),
    publicly_visible: z
      .boolean()
      .openapi({ description: 'Whether this plan is publicly visible.' }),
    has_base_fee: z.boolean().openapi({ description: 'Whether this plan has a base fee.' }),
    payer_type: z
      .array(z.string())
      .openapi({ description: 'The types of payers that can use this plan.' }),
    for_payer_type: z
      .string()
      .openapi({ description: 'The payer type this plan is designed for.' }),
    slug: z.string().openapi({ description: 'The URL-friendly slug for the plan.' }),
    avatar_url: z.string().openapi({ description: "The URL of the plan's avatar image." }),
    period: z.string().exactOptional().openapi({ description: 'The billing period for the plan.' }),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The billing interval.' }),
    features: z
      .array(FeatureResponseSchema)
      .openapi({ description: 'The features included in this plan.' }),
    free_trial_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether free trial is enabled for this plan.' }),
    free_trial_days: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of free trial days for this plan.',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'name',
      'fee',
      'annual_monthly_fee',
      'annual_fee',
      'amount',
      'amount_formatted',
      'annual_monthly_amount',
      'annual_monthly_amount_formatted',
      'annual_amount',
      'annual_amount_formatted',
      'currency_symbol',
      'currency',
      'description',
      'product_id',
      'is_default',
      'is_recurring',
      'publicly_visible',
      'has_base_fee',
      'payer_type',
      'for_payer_type',
      'slug',
      'avatar_url',
      'features',
    ],
  })
  .openapi('CommercePlan')

const CommercePaymentSourceResponseSchema = z
  .strictObject({
    object: z
      .literal('commerce_source')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the payment source.' }),
    payer_id: z.string().openapi({ description: 'Unique identifier for the payer.' }),
    payment_method: z
      .enum(['card', 'apple_pay', 'google_pay'])
      .openapi({ description: 'The payment method type.' }),
    is_default: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this is the default payment source for the payer.' }),
    gateway: z.string().openapi({ description: 'The payment gateway.' }),
    gateway_external_id: z.string().openapi({ description: 'External ID in the payment gateway.' }),
    gateway_external_account_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'External account ID in the payment gateway.' }),
    last4: z
      .string()
      .openapi({ description: 'Last 4 digits of the card (for card payment sources).' }),
    status: z
      .enum(['active', 'disconnected'])
      .openapi({ description: 'Status of the payment source.' }),
    wallet_type: z.string().openapi({ description: 'Type of wallet (if applicable).' }),
    card_type: z.string().openapi({ description: 'Type of card (if applicable).' }),
    expiry_year: z
      .int()
      .exactOptional()
      .openapi({ description: 'Card expiration year (for card payment sources).' }),
    expiry_month: z
      .int()
      .exactOptional()
      .openapi({ description: 'Card expiration month (for card payment sources).' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the payment source was created.',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the payment source was last updated.',
      }),
    is_removable: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this payment source can be removed.' }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'payer_id',
      'payment_method',
      'gateway',
      'gateway_external_id',
      'last4',
      'status',
      'wallet_type',
      'card_type',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('CommercePaymentSourceResponse')

const CommercePerUnitTotalTierSchema = z
  .strictObject({
    quantity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Units billed in this tier; null means unlimited.',
      }),
    fee_per_block: CommerceMoneyResponseSchema.openapi({
      description: 'Price charged per block in this tier.',
    }),
    total: CommerceMoneyResponseSchema.openapi({ description: 'Total charge for this tier.' }),
  })
  .openapi({ required: ['fee_per_block', 'total'] })
  .openapi('CommercePerUnitTotalTier')

const CommercePerUnitTotalSchema = z
  .strictObject({
    name: z.string().openapi({ description: 'Name of the billable unit (for example, `seats`).' }),
    block_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of units included in each pricing block.',
      }),
    tiers: z
      .array(CommercePerUnitTotalTierSchema)
      .openapi({ description: 'Computed totals for each pricing tier.' }),
  })
  .openapi({ required: ['name', 'block_size', 'tiers'] })
  .openapi('CommercePerUnitTotal')

const CommerceProrationCreditDetailResponseSchema = z
  .strictObject({
    amount: CommerceMoneyResponseSchema,
    cycle_days_remaining: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    cycle_days_total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    cycle_remaining_percent: z.float64(),
  })
  .openapi({
    required: ['amount', 'cycle_days_remaining', 'cycle_days_total', 'cycle_remaining_percent'],
  })
  .openapi('CommerceProrationCreditDetailResponse')

const CommercePayerCreditResponseSchema = z
  .strictObject({
    remaining_balance: CommerceMoneyResponseSchema,
    applied_amount: CommerceMoneyResponseSchema,
  })
  .openapi({ required: ['remaining_balance', 'applied_amount'] })
  .openapi('CommercePayerCreditResponse')

const CommerceCreditsResponseSchema = z
  .strictObject({
    proration: CommerceProrationCreditDetailResponseSchema.nullable(),
    payer: CommercePayerCreditResponseSchema.nullable(),
    total: CommerceMoneyResponseSchema,
  })
  .openapi({ required: ['proration', 'payer', 'total'] })
  .openapi('CommerceCreditsResponse')

const CommerceProrationDiscountResponseSchema = z
  .strictObject({
    amount: CommerceMoneyResponseSchema,
    cycle_days_passed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    cycle_days_total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    cycle_passed_percent: z.float32(),
  })
  .openapi({
    required: ['amount', 'cycle_days_passed', 'cycle_days_total', 'cycle_passed_percent'],
  })
  .openapi('CommerceProrationDiscountResponse')

const CommerceDiscountsResponseSchema = z
  .strictObject({
    proration: CommerceProrationDiscountResponseSchema.nullable(),
    total: CommerceMoneyResponseSchema,
  })
  .openapi({ required: ['proration', 'total'] })
  .openapi('CommerceDiscountsResponse')

const CommerceTotalsResponseSchema = z
  .strictObject({
    subtotal: CommerceMoneyResponseSchema,
    base_fee: CommerceMoneyResponseSchema,
    tax_total: CommerceMoneyResponseSchema,
    grand_total: CommerceMoneyResponseSchema,
    per_unit_totals: z.array(CommercePerUnitTotalSchema).exactOptional(),
    credits: CommerceCreditsResponseSchema.nullable().exactOptional(),
    discounts: CommerceDiscountsResponseSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['subtotal', 'base_fee', 'tax_total', 'grand_total'] })
  .openapi('CommerceTotalsResponse')

const CommerceSubscriptionItemNextPaymentResponseSchema = z
  .strictObject({
    amount: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Base plan fee for the next payment. Does not include per-unit (e.g. seat) charges; see `totals.grand_total` for the full amount.',
      }),
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) for the next payment date.',
      }),
    per_unit_totals: z
      .array(CommercePerUnitTotalSchema)
      .exactOptional()
      .openapi({
        description: 'Per-unit total breakdown (for example, seats) for the next payment.',
      }),
    totals: CommerceTotalsResponseSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Breakdown of the recurring amount that will be billed at renewal (base fee + per-unit charges). Tax and credits are not previewed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CommerceSubscriptionItemNextPaymentResponse')

const CommercePayerResponseSchema = z
  .strictObject({
    object: z
      .literal('commerce_payer')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the payer.' }),
    instance_id: z.string().openapi({ description: 'Unique identifier for the Clerk instance.' }),
    user_id: z.string().exactOptional().openapi({ description: 'User ID for user-type payers.' }),
    first_name: z.string().openapi({ description: 'First name of the payer.' }),
    last_name: z.string().openapi({ description: 'Last name of the payer.' }),
    email: z.string().openapi({ description: 'Email address of the payer.' }),
    organization_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization ID for org-type payers.' }),
    organization_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization name for org-type payers.' }),
    image_url: z.string().openapi({ description: "URL of the payer's image/avatar." }),
    credits_balance: CommerceMoneyResponseSchema.exactOptional().openapi({
      description: 'Current credits balance for the payer.',
    }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the payer was created.',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the payer was last updated.',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'instance_id',
      'first_name',
      'last_name',
      'email',
      'image_url',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('CommercePayerResponse')

const CommerceSubscriptionItemSchema = z
  .strictObject({
    object: z
      .literal('commerce_subscription_item')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the subscription item.' }),
    instance_id: z.string().openapi({ description: 'Unique identifier for the Clerk instance.' }),
    status: z
      .enum(['active', 'ended', 'past_due', 'upcoming', 'incomplete', 'abandoned'])
      .openapi({ description: 'Current status of the subscription item.' }),
    credit: CommerceSubscriptionCreditResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Credit information (only available in PaymentAttempt events).' }),
    plan_id: z.string().openapi({ description: 'Unique identifier for the associated plan.' }),
    price_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the associated price' }),
    plan: CommercePlanSchema.nullable().openapi({ description: 'The associated commerce plan.' }),
    plan_period: z
      .enum(['month', 'annual'])
      .openapi({ description: 'The billing period for this subscription.' }),
    payment_source_id: z
      .string()
      .openapi({ description: 'Unique identifier for the payment source.' }),
    payment_source: CommercePaymentSourceResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The payment source associated with this subscription.' }),
    lifetime_paid: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Total amount paid over the lifetime of this subscription.' }),
    amount: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Current amount for this subscription.' }),
    next_invoice: CommerceSubscriptionItemNextPaymentResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Information about the next invoice.' }),
    next_payment: CommerceSubscriptionItemNextPaymentResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Information about the next payment.' }),
    payer_id: z.string().openapi({ description: 'Unique identifier for the payer.' }),
    payer: CommercePayerResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The payer associated with this subscription.' }),
    is_free_trial: z
      .boolean()
      .openapi({ description: 'Whether this subscription is currently on a free trial.' }),
    period_start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the current period started.',
      }),
    period_end: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the current period ends.',
      }),
    proration_date: z.string().openapi({ description: 'Date used for proration calculations.' }),
    canceled_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the subscription was canceled.',
      }),
    past_due_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the subscription became past due.',
      }),
    ended_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the subscription ended.',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the subscription was created.',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the subscription was last updated.',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'instance_id',
      'status',
      'plan_id',
      'plan',
      'plan_period',
      'payment_source_id',
      'payer_id',
      'is_free_trial',
      'proration_date',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('CommerceSubscriptionItem')

const CommerceSubscriptionNextPaymentSchema = z
  .strictObject({
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (milliseconds) of the next payment.',
      }),
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (milliseconds) of the next payment date.',
      }),
    amount: CommerceMoneyResponseSchema.openapi({
      description:
        'Base plan fee for the next payment. Does not include per-unit (e.g. seat) charges; see `totals.grand_total` for the full amount.',
    }),
    per_unit_totals: z
      .array(CommercePerUnitTotalSchema)
      .exactOptional()
      .openapi({
        description: 'Per-unit total breakdown (for example, seats) for the next payment.',
      }),
    totals: CommerceTotalsResponseSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Breakdown of the recurring amount that will be billed at renewal for the earliest upcoming item (base fee + per-unit charges). Tax and credits are not previewed.',
      }),
  })
  .openapi({ required: ['time', 'date', 'amount'] })
  .openapi('CommerceSubscriptionNextPayment')

const CommerceSubscriptionSchema = z
  .strictObject({
    object: z
      .literal('commerce_subscription')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the commerce subscription.' }),
    instance_id: z
      .string()
      .openapi({ description: 'The ID of the instance this subscription belongs to.' }),
    status: z
      .enum(['active', 'past_due', 'canceled', 'ended', 'abandoned', 'incomplete'])
      .openapi({ description: 'The current status of the subscription.' }),
    payer_id: z.string().openapi({ description: 'The ID of the payer for this subscription.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (milliseconds) of creation.',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (milliseconds) of last update.',
      }),
    active_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (milliseconds) when the subscription became active.',
      }),
    past_due_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (milliseconds) when the subscription became past due.',
      }),
    subscription_items: z
      .array(CommerceSubscriptionItemSchema)
      .openapi({ description: 'Array of subscription items in this subscription.' }),
    next_payment: CommerceSubscriptionNextPaymentSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Information about the next scheduled payment.' }),
    eligible_for_free_trial: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the payer is eligible for a free trial.' }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'instance_id',
      'status',
      'payer_id',
      'created_at',
      'updated_at',
      'subscription_items',
    ],
  })
  .openapi('CommerceSubscription')

const CommerceCreditBalanceResponseSchema = z
  .strictObject({
    object: z
      .string()
      .openapi({
        description: 'String representing the object\'s type. Always "commerce_credit_balance".',
      }),
    balance: CommerceMoneyResponseSchema.nullable().openapi({
      description: 'The current credit balance. Null when the payer has never had credits.',
    }),
  })
  .openapi({ required: ['object', 'balance'] })
  .openapi('CommerceCreditBalanceResponse')

const AdjustCreditBalanceRequestSchema = z
  .strictObject({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The credit amount in cents. Must be greater than zero.',
      }),
    action: z
      .enum(['increase', 'decrease'])
      .openapi({ description: 'Whether to increase or decrease the credit balance.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code (e.g. "USD"). Defaults to USD if not provided.' }),
    idempotency_key: z
      .string()
      .openapi({
        description:
          'A unique key to ensure the adjustment is applied only once. Repeated requests with the same key return the original ledger entry.',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional note to attach to the ledger entry.' }),
  })
  .openapi({ required: ['amount', 'action', 'idempotency_key'] })
  .openapi('AdjustCreditBalanceRequest')

const CommerceCreditLedgerResponseSchema = z
  .strictObject({
    object: z
      .string()
      .openapi({
        description: 'String representing the object\'s type. Always "commerce_credit_ledger".',
      }),
    id: z.string().openapi({ description: 'Unique identifier for the ledger entry.' }),
    payer_id: z
      .string()
      .openapi({ description: 'The ID of the payer whose balance was adjusted.' }),
    amount: CommerceMoneyResponseSchema.openapi({
      description:
        'The credit amount with formatting. Positive for increases, negative for decreases.',
    }),
    source_type: z
      .string()
      .openapi({
        description: 'The type of source that originated the adjustment (e.g. "grant").',
      }),
    source_id: z
      .string()
      .openapi({ description: 'The ID of the source that originated the adjustment.' }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'An optional note attached to the ledger entry.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the ledger entry was created.' }),
  })
  .openapi({
    required: ['object', 'id', 'payer_id', 'amount', 'source_type', 'source_id', 'created_at'],
  })
  .openapi('CommerceCreditLedgerResponse')

const OAuthAccessTokenSchema = z
  .array(
    z
      .strictObject({
        object: z.literal('oauth_access_token'),
        external_account_id: z.string().openapi({ description: 'External account ID' }),
        provider_user_id: z
          .string()
          .openapi({ description: "The unique ID of the user in the external provider's system" }),
        token: z.string().openapi({ description: 'The access token' }),
        expires_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .openapi({
            type: ['integer', 'null'],
            format: 'int64',
            description: 'Unix timestamp of the access token expiration.',
          }),
        provider: z.string().openapi({ description: 'The ID of the provider' }),
        public_metadata: z.looseObject({}),
        label: z.string().nullable(),
        scopes: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The list of scopes that the token is valid for. Only present for OAuth 2.0 tokens.',
          }),
        id_token: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID token retrieved from the OIDC provider. Only present for OIDC-compliant OAuth 2.0 providers when available.',
          }),
        token_secret: z
          .string()
          .exactOptional()
          .openapi({ description: 'The token secret. Only present for OAuth 1.0 tokens.' }),
      })
      .openapi({
        required: [
          'object',
          'external_account_id',
          'provider_user_id',
          'token',
          'expires_at',
          'provider',
          'public_metadata',
          'label',
        ],
      }),
  )
  .openapi('OAuthAccessToken')

const OrganizationMembershipsSchema = z
  .strictObject({
    data: z.array(OrganizationMembershipSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of organization memberships\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('OrganizationMemberships')

const OrganizationInvitationPublicUserDataSchema = z
  .strictObject({
    user_id: z.string(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    image_url: z.string(),
    has_image: z.boolean(),
    identifier: z.string(),
  })
  .nullable()
  .openapi({
    description: "An organization inviter's public user data",
    required: ['user_id', 'first_name', 'last_name', 'image_url', 'has_image', 'identifier'],
  })
  .openapi('OrganizationInvitationPublicUserData')

const OrganizationInvitationPublicOrganizationDataSchema = z
  .strictObject({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    image_url: z.string().exactOptional(),
    has_image: z.boolean(),
  })
  .openapi({ required: ['id', 'name', 'slug', 'has_image'] })
  .openapi('OrganizationInvitationPublicOrganizationData')

const OrganizationInvitationWithPublicOrganizationDataSchema = z
  .object({
    object: z
      .literal('organization_invitation')
      .exactOptional()
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string().exactOptional(),
    email_address: z.string().exactOptional(),
    role: z.string().exactOptional(),
    role_name: z.string().exactOptional(),
    organization_id: z.string().exactOptional(),
    inviter_id: z.string().nullable().exactOptional(),
    public_inviter_data: OrganizationInvitationPublicUserDataSchema.exactOptional(),
    status: z.string().exactOptional(),
    public_metadata: z.looseObject({}).exactOptional(),
    private_metadata: z.looseObject({}).exactOptional(),
    url: z.string().nullable().exactOptional(),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of expiration.',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of last update.' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        public_organization_data:
          OrganizationInvitationPublicOrganizationDataSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'An organization invitation with public organization data populated',
    required: [
      'object',
      'id',
      'email_address',
      'role',
      'role_name',
      'public_metadata',
      'url',
      'expires_at',
      'created_at',
      'updated_at',
      'inviter_id',
      'public_inviter_data',
    ],
  })
  .openapi('OrganizationInvitationWithPublicOrganizationData')

const OrganizationInvitationsWithPublicOrganizationDataSchema = z
  .strictObject({
    data: z.array(OrganizationInvitationWithPublicOrganizationDataSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of organization invitations\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('OrganizationInvitationsWithPublicOrganizationData')

const TrustedDeviceSchema = z
  .strictObject({
    object: z
      .literal('trusted_device')
      .openapi({ description: "String representing the object's type." }),
    id: z.string(),
    platform: z.enum(['ios', 'android']),
    app_identifier: z.string(),
    name: z.string().nullable().exactOptional(),
    algorithm: z.literal('ES256'),
    status: z.enum(['active', 'revoked']),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of creation in milliseconds.',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of the last update in milliseconds.',
      }),
    last_used_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of the last use in milliseconds.',
      }),
    revoked_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of revocation in milliseconds.',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'platform',
      'app_identifier',
      'algorithm',
      'status',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('TrustedDevice')

const InvitationSchema = z
  .strictObject({
    object: z.literal('invitation'),
    id: z.string(),
    email_address: z.email(),
    public_metadata: z.looseObject({}),
    revoked: z.boolean().exactOptional().openapi({ example: false }),
    status: z.enum(['pending', 'accepted', 'revoked', 'expired']).openapi({ example: 'pending' }),
    url: z.string().exactOptional(),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of expiration.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'email_address',
      'public_metadata',
      'status',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Invitation')

const AllowlistIdentifierSchema = z
  .strictObject({
    object: z
      .literal('allowlist_identifier')
      .exactOptional()
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string().exactOptional(),
    invitation_id: z.string().exactOptional(),
    identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address or a phone number.\n' }),
    identifier_type: z.enum(['email_address', 'phone_number', 'web3_wallet']).exactOptional(),
    instance_id: z.string().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('AllowlistIdentifier')

const BlocklistIdentifierSchema = z
  .strictObject({
    object: z
      .literal('blocklist_identifier')
      .exactOptional()
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string().exactOptional(),
    identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address, email domain, phone number or web3 wallet.\n' }),
    identifier_type: z.enum(['email_address', 'phone_number', 'web3_wallet']).exactOptional(),
    instance_id: z.string().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('BlocklistIdentifier')

const BlocklistIdentifiersSchema = z
  .strictObject({
    data: z.array(BlocklistIdentifierSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of blocklist identifiers\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('BlocklistIdentifiers')

const ActorTokenSchema = z
  .strictObject({
    object: z.literal('actor_token'),
    id: z.string(),
    status: z.enum(['pending', 'accepted', 'revoked']),
    user_id: z.string(),
    actor: z.object({}),
    token: z.string().exactOptional(),
    url: z.string().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({ required: ['object', 'id', 'user_id', 'actor', 'status', 'created_at', 'updated_at'] })
  .openapi('ActorToken')

const CNameTargetSchema = z
  .strictObject({
    host: z.string(),
    value: z.string(),
    required: z
      .boolean()
      .openapi({
        description:
          'Denotes whether this CNAME target is required to be set in order for the domain to be considered deployed.\n',
      }),
  })
  .openapi({ required: ['host', 'value', 'required'] })
  .openapi('CNameTarget')

const DNSTargetSchema = z
  .strictObject({
    host: z.string(),
    value: z.string(),
    record_type: z.enum(['CNAME', 'TXT']),
    automation_disposition: z
      .enum(['already_satisfied', 'safe_to_create', 'manual_resolution_required'])
      .exactOptional(),
    required: z
      .boolean()
      .openapi({
        description:
          'Denotes whether this DNS target is required to be set in order for the domain to be considered deployed.\n',
      }),
  })
  .openapi({ required: ['host', 'value', 'record_type', 'required'] })
  .openapi('DNSTarget')

const DomainSchema = z
  .object({
    object: z.literal('domain'),
    id: z.string(),
    name: z.string(),
    is_satellite: z.boolean(),
    frontend_api_url: z.string(),
    accounts_portal_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Null for satellite domains.\n' }),
    proxy_url: z.string().nullable().exactOptional(),
    development_origin: z.string(),
    cname_targets: z
      .array(CNameTargetSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Legacy CNAME-only DNS targets. Prefer `dns_targets` when present.',
      }),
    dns_targets: z
      .array(DNSTargetSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The complete typed DNS contract. Consumers should use this field instead of merging it with `cname_targets`.\n',
      }),
  })
  .openapi({
    required: ['object', 'id', 'name', 'is_satellite', 'frontend_api_url', 'development_origin'],
  })
  .openapi('Domain')

const DomainsSchema = z
  .strictObject({
    data: z.array(DomainSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total number of domains\n' }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('Domains')

const InstanceSchema = z
  .object({
    object: z
      .literal('instance')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string(),
    environment_type: z.string().openapi({ example: 'development' }),
    allowed_origins: z
      .array(z.string())
      .nullable()
      .openapi({ example: ['http://localhost:3000', 'https://some-domain'] }),
    allowed_subdomains: z
      .array(z.string())
      .openapi({
        description:
          "Subdomains of the instance's own domains that may originate requests, when the subdomain allowlist is enabled. Production instances only; always empty on a development instance.",
        example: ['app.example.com', '*.preview.example.com'],
      }),
    subdomain_allowlist_enabled: z
      .boolean()
      .openapi({
        description:
          "Whether requests from subdomains of the instance's own domains are restricted to `allowed_subdomains`. When false, every subdomain of the instance's domain is accepted. Production instances only; always false on a development instance.",
      }),
    workspace_id: z
      .string()
      .nullable()
      .openapi({
        description:
          "The ID of the Clerk workspace that owns the instance's application. It is null when the application has no owner.",
        example: 'org_2abc123def456',
      }),
    max_allowed_users: z
      .int()
      .nullable()
      .openapi({
        description:
          "The maximum number of users the instance can hold. Creating a user fails with a `user_quota_exceeded` error once the instance's total user count, as returned by `GET /v1/users/count` without filters, reaches this value. It is null when the instance has no user limit.",
        example: 100,
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'environment_type',
      'allowed_origins',
      'allowed_subdomains',
      'subdomain_allowlist_enabled',
      'workspace_id',
      'max_allowed_users',
    ],
  })
  .openapi('Instance')

const InstanceRestrictionsSchema = z
  .object({
    object: z
      .literal('instance_restrictions')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    allowlist: z.boolean(),
    blocklist: z.boolean(),
    allowlist_blocklist_disabled_on_sign_in: z.boolean(),
    block_email_subaddresses: z.boolean(),
    block_disposable_email_domains: z.boolean(),
  })
  .openapi({
    required: [
      'object',
      'allowlist',
      'blocklist',
      'allowlist_blocklist_disabled_on_sign_in',
      'block_email_subaddresses',
      'block_disposable_email_domains',
    ],
  })
  .openapi('InstanceRestrictions')

const InstanceProtectSchema = z
  .object({
    object: z.literal('instance_protect'),
    rules_enabled: z
      .boolean()
      .openapi({
        description:
          'Whether Protect rules are enforced on this instance. False does not mean the instance is outside Protect — by default it is still evaluated in shadow, where rules are scored and recorded but never block.',
      }),
    specter_enabled: z
      .boolean()
      .openapi({
        readOnly: true,
        description:
          'Whether Device Intelligence is enabled. Managed automatically or by Clerk support.',
      }),
    checks_bypassed: z
      .boolean()
      .openapi({
        description:
          'Whether the instance has opted out of the Protect prerequisite checks, asserting its setup already meets the requirements.',
      }),
    checks_verified: z
      .boolean()
      .openapi({
        description:
          "Whether the Protect system has verified the instance's prerequisite checks. Protect rules are gated on checks being verified, bypassed or exempt.",
      }),
    checks_exempt: z
      .boolean()
      .openapi({
        description:
          'Whether the instance was created into Protect and so was never subject to the prerequisite checks at all.',
      }),
  })
  .openapi({
    required: [
      'object',
      'rules_enabled',
      'specter_enabled',
      'checks_bypassed',
      'checks_verified',
      'checks_exempt',
    ],
  })
  .openapi('InstanceProtect')

const InstanceCommunicationSchema = z
  .object({
    object: z.literal('instance_communication'),
    blocked_country_codes: z
      .array(z.string())
      .openapi({
        description:
          "ISO 3166-1 alpha-2 country codes that are blocked for SMS delivery on this instance. Codes that aren't recognized are silently dropped.",
      }),
  })
  .openapi({
    description: 'Per-instance SMS communication settings, including the SMS country blocklist.',
    required: ['object', 'blocked_country_codes'],
  })
  .openapi('InstanceCommunication')

const OAuthApplicationSettingsSchema = z
  .object({
    object: z
      .literal('oauth_application_settings')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    dynamic_oauth_client_registration: z
      .boolean()
      .openapi({
        description:
          'Whether dynamic OAuth client registration is enabled for the instance (RFC 7591).',
      }),
    dynamic_client_allowed_scopes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Administrator-selected scope ceiling for dynamically registered and automatically admitted CIMD clients. Null preserves registered client limits; defaults must be a subset. Fresh user consent is required for expansion.',
      }),
    default_scopes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .openapi({
        description:
          'Default scopes assigned when a dynamically registered or first-contact CIMD client omits `scope`. Contains built-in keys and custom catalog keys. Null means Clerk-provided defaults. `advertised` does not affect eligibility. An empty input array is stored and returned as null.\n',
      }),
    oauth_jwt_access_tokens: z
      .boolean()
      .openapi({
        description:
          'Whether OAuth JWT access tokens are enabled for the instance (disabled indicates opaque access tokens).',
      }),
    aud_claim_enabled: z
      .boolean()
      .openapi({
        description:
          'Whether OAuth access tokens can include an aud claim derived from the RFC 8707 resource parameter.',
      }),
    aud_claim_refresh_backfill_enabled: z
      .boolean()
      .openapi({
        description:
          'Whether refresh grants without a resource can adopt the requested resource when audience claims are enabled.',
      }),
    pkce_required: z
      .boolean()
      .openapi({
        description:
          'Whether all new OAuth authorization-code requests must use PKCE with the S256 challenge method.',
      }),
    client_id_metadata_documents_advertised: z
      .boolean()
      .openapi({
        description:
          'Whether the instance advertises support for Client ID Metadata Documents in its OAuth authorization server metadata.',
      }),
    client_id_metadata_documents_only_allow_pre_registered_clients: z
      .boolean()
      .openapi({
        description:
          'When true, new unknown CIMD clients are rejected. Previously auto-connected and pre-registered clients remain admitted; deleting a client makes it unknown again.',
      }),
    client_id_metadata_documents_block_implicitly_allowed_clients: z
      .boolean()
      .openapi({
        description:
          'When true, recorded implicitly allowed CIMD clients are rejected on future client lookups. Explicitly allowed clients remain accepted. This does not revoke previously issued access tokens.',
      }),
  })
  .openapi({
    required: [
      'object',
      'dynamic_oauth_client_registration',
      'default_scopes',
      'oauth_jwt_access_tokens',
      'aud_claim_enabled',
      'aud_claim_refresh_backfill_enabled',
      'pkce_required',
      'client_id_metadata_documents_advertised',
      'client_id_metadata_documents_only_allow_pre_registered_clients',
      'client_id_metadata_documents_block_implicitly_allowed_clients',
    ],
  })
  .openapi('OAuthApplicationSettings')

const OrganizationSettingsSchema = z
  .strictObject({
    object: z
      .literal('organization_settings')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    enabled: z.boolean(),
    max_allowed_memberships: z.int(),
    max_allowed_roles: z.int(),
    max_role_sets_allowed: z.int().exactOptional(),
    max_allowed_domains: z.int(),
    max_allowed_permissions: z
      .int()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'max_allowed_permissions is now a no-op, as permissions are now unlimited',
      }),
    creator_role: z
      .string()
      .openapi({
        description: 'The role key that a user will be assigned after creating an organization.',
      }),
    admin_delete_enabled: z
      .boolean()
      .openapi({
        description:
          'The default for whether an admin can delete an organization with the Frontend API.',
      }),
    domains_enabled: z.boolean(),
    slug_disabled: z.boolean().exactOptional(),
    domains_enrollment_modes: z.array(
      z.enum(['manual_invitation', 'automatic_invitation', 'automatic_suggestion']),
    ),
    domains_default_role: z
      .string()
      .openapi({
        description:
          'The role key that it will be used in order to create an organization invitation or suggestion.',
      }),
    initial_role_set_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The role set key that it will be used to create new organizations.',
      }),
  })
  .openapi({
    required: [
      'object',
      'enabled',
      'max_allowed_memberships',
      'max_allowed_roles',
      'max_allowed_domains',
      'creator_role',
      'admin_delete_enabled',
      'domains_enabled',
      'domains_enrollment_modes',
      'domains_default_role',
    ],
  })
  .openapi('OrganizationSettings')

const SvixURLSchema = z
  .strictObject({ svix_url: z.string() })
  .openapi({ required: ['svix_url'] })
  .openapi('SvixURL')

const JWTTemplateSchema = z
  .strictObject({
    object: z.literal('jwt_template'),
    id: z.string(),
    name: z.string(),
    claims: z.object({}),
    lifetime: z.int(),
    allowed_clock_skew: z.int(),
    custom_signing_key: z.boolean(),
    signing_algorithm: z.string(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'name',
      'claims',
      'lifetime',
      'allowed_clock_skew',
      'custom_signing_key',
      'signing_algorithm',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('JWTTemplate')

const MachineWithoutScopedMachinesSchema = z
  .object({
    object: z.literal('machine'),
    id: z.string().openapi({ description: 'Unique identifier for the machine.' }),
    name: z.string().min(1).max(255).openapi({ description: 'The name of the machine.' }),
    instance_id: z
      .string()
      .openapi({ description: 'The ID of the instance this machine belongs to.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of last update.' }),
    default_token_ttl: z
      .int()
      .min(1)
      .default(3600)
      .exactOptional()
      .openapi({
        description:
          'The default time-to-live (TTL) in seconds for tokens created by this machine.',
      }),
  })
  .openapi({ required: ['object', 'id', 'name', 'instance_id', 'created_at', 'updated_at'] })
  .openapi('MachineWithoutScopedMachines')

const MachineSchema = MachineWithoutScopedMachinesSchema.and(
  z
    .object({
      scoped_machines: z
        .array(MachineWithoutScopedMachinesSchema)
        .openapi({ description: 'Array of machines this machine has access to.' }),
    })
    .openapi({ required: ['scoped_machines'] }),
).openapi('Machine')

const MachineScopeSchema = z
  .object({
    object: z.literal('machine_scope'),
    from_machine_id: z
      .string()
      .openapi({ description: 'The ID of the machine that has access to the target machine.' }),
    to_machine_id: z
      .string()
      .openapi({ description: 'The ID of the machine that is being accessed.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.' }),
  })
  .openapi({ required: ['object', 'from_machine_id', 'to_machine_id', 'created_at'] })
  .openapi('MachineScope')

const OrganizationsSchema = z
  .strictObject({
    data: z.array(OrganizationSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of organizations\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('Organizations')

const ReassignmentMappingsSchema = z
  .record(z.string(), z.string())
  .openapi({
    description: 'Mappings from source role keys to destination role keys for role reassignment',
  })
  .openapi('ReassignmentMappings')

const OrganizationWithLogoSchema = OrganizationSchema.and(
  z
    .object({
      logo_url: z.string().exactOptional().openapi({ deprecated: true }),
      image_url: z.string(),
      has_image: z.boolean(),
    })
    .openapi({ required: ['image_url', 'has_image'] }),
).openapi('OrganizationWithLogo')

const OrganizationInvitationSchema = z
  .strictObject({
    object: z
      .literal('organization_invitation')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.\n",
      }),
    id: z.string(),
    email_address: z.string(),
    role: z.string(),
    role_name: z.string(),
    organization_id: z.string().exactOptional(),
    inviter_id: z.string().nullable(),
    public_inviter_data: OrganizationInvitationPublicUserDataSchema,
    status: z.string().exactOptional(),
    public_metadata: z.looseObject({}),
    private_metadata: z.looseObject({}).exactOptional(),
    url: z.string().nullable(),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of expiration.',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of last update.' }),
  })
  .openapi({
    description: 'An organization invitation',
    required: [
      'object',
      'id',
      'email_address',
      'role',
      'role_name',
      'public_metadata',
      'url',
      'expires_at',
      'created_at',
      'updated_at',
      'inviter_id',
      'public_inviter_data',
    ],
  })
  .openapi('OrganizationInvitation')

const OrganizationInvitationsSchema = z
  .strictObject({
    data: z.array(OrganizationInvitationSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of organization invitations\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('OrganizationInvitations')

const PermissionSchema = z
  .object({
    object: z.literal('permission'),
    id: z.string(),
    name: z.string(),
    key: z.string(),
    description: z.string(),
    type: z.string(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    required: ['object', 'id', 'name', 'key', 'description', 'type', 'created_at', 'updated_at'],
  })
  .openapi('Permission')

const RoleSchema = z
  .strictObject({
    object: z.literal('role'),
    id: z.string(),
    name: z.string(),
    key: z.string(),
    description: z.string().nullable(),
    is_creator_eligible: z
      .boolean()
      .openapi({ description: 'Whether this role is eligible to be an organization creator role' }),
    permissions: z.array(PermissionSchema),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'name',
      'key',
      'description',
      'is_creator_eligible',
      'permissions',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Role')

const RolesSchema = z
  .strictObject({
    data: z.array(RoleSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total number of roles\n' }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('Roles')

const OrganizationDomainVerificationSchema = z
  .object({
    status: z
      .string()
      .openapi({
        description:
          'Status of the verification. It can be `unverified`, `verified`, `failed`, or `expired`.',
      }),
    strategy: z.string().openapi({ description: 'Name of the strategy used to verify the domain' }),
    attempts: z
      .int()
      .nullable()
      .openapi({ description: 'How many attempts have been made to verify the domain' }),
    expire_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of when the verification will expire',
      }),
    verified_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Unix timestamp of when ownership was verified. Only populated on `ownership_verification`; null on `affiliation_verification`.\n',
      }),
  })
  .openapi({
    description: 'The verification object from an organization domain',
    required: ['status', 'strategy', 'attempts', 'expire_at', 'verified_at'],
  })
  .openapi('OrganizationDomainVerification')

const OrganizationDomainSchema = z
  .object({
    object: z
      .literal('organization_domain')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value. Always `organization_domain`\n",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the organization domain' }),
    organization_id: z.string().openapi({ description: 'Unique identifier for the organization' }),
    name: z.string().openapi({ description: 'Name of the organization domain' }),
    enrollment_mode: z
      .enum(['manual_invitation', 'automatic_invitation', 'automatic_suggestion', 'enterprise_sso'])
      .openapi({ description: 'Mode of enrollment for the domain' }),
    affiliation_email_address: z
      .string()
      .nullable()
      .openapi({ description: 'Affiliation email address for the domain, if available.' }),
    affiliation_verification: OrganizationDomainVerificationSchema.nullable().openapi({
      description:
        'Verification details for the user-facing affiliation between the domain and the organization (e.g. affiliation_email_code).\n',
    }),
    ownership_verification: OrganizationDomainVerificationSchema.nullable().openapi({
      description:
        'Verification details for the underlying DNS domain ownership proof (TXT challenge or dashboard override). Null until ownership has been attempted.\n',
    }),
    verification: OrganizationDomainVerificationSchema.nullable().openapi({
      deprecated: true,
      description:
        'Deprecated alias for `affiliation_verification`. Kept for backward compatibility on the current API version; will be removed in the next API version. Prefer `affiliation_verification`.\n',
    }),
    total_pending_invitations: z
      .int32()
      .openapi({ description: 'Total number of pending invitations associated with this domain' }),
    total_pending_suggestions: z
      .int32()
      .openapi({ description: 'Total number of pending suggestions associated with this domain' }),
    public_organization_data: OrganizationInvitationPublicOrganizationDataSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Public organization data associated with this domain' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp when the domain was created',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of the last update to the domain',
      }),
  })
  .openapi({
    description: 'An organization domain',
    required: [
      'object',
      'id',
      'organization_id',
      'name',
      'enrollment_mode',
      'affiliation_email_address',
      'affiliation_verification',
      'ownership_verification',
      'verification',
      'total_pending_invitations',
      'total_pending_suggestions',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('OrganizationDomain')

const OrganizationDomainsSchema = z
  .strictObject({
    data: z.array(OrganizationDomainSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of organization domains\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('OrganizationDomains')

const ProxyCheckSchema = z
  .strictObject({
    object: z.literal('proxy_check'),
    id: z.string(),
    domain_id: z.string(),
    last_run_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp of last run.\n',
      }),
    proxy_url: z.string(),
    successful: z.boolean(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'domain_id',
      'last_run_at',
      'proxy_url',
      'successful',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('ProxyCheck')

const RedirectURLSchema = z
  .strictObject({
    object: z.literal('redirect_url'),
    id: z.string(),
    url: z.string(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({ required: ['object', 'id', 'url', 'created_at', 'updated_at'] })
  .openapi('RedirectURL')

const SignInTokenSchema = z
  .strictObject({
    object: z.literal('sign_in_token'),
    id: z.string(),
    status: z.enum(['pending', 'accepted', 'revoked']),
    user_id: z.string(),
    token: z.string().exactOptional(),
    url: z.string().nullable().exactOptional(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({ required: ['object', 'id', 'user_id', 'status', 'created_at', 'updated_at'] })
  .openapi('SignInToken')

const SignUpVerificationSchema = z
  .looseObject({
    next_action: z.enum(['needs_prepare', 'needs_attempt', '']).exactOptional(),
    supported_strategies: z.array(z.string()).exactOptional(),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('SignUpVerification')

const SignUpVerificationsSchema = z
  .strictObject({
    email_address: SignUpVerificationSchema,
    phone_number: SignUpVerificationSchema,
    web3_wallet: SignUpVerificationSchema,
    external_account: z.object({}).nullable(),
  })
  .openapi({ required: ['email_address', 'phone_number', 'web3_wallet', 'external_account'] })
  .openapi('SignUpVerifications')

const SignUpSchema = z
  .strictObject({
    object: z.literal('sign_up_attempt'),
    id: z.string(),
    status: z.enum(['missing_requirements', 'complete', 'abandoned']),
    required_fields: z.array(z.string()),
    optional_fields: z.array(z.string()),
    missing_fields: z.array(z.string()),
    unverified_fields: z.array(z.string()),
    verifications: SignUpVerificationsSchema,
    username: z.string().nullable(),
    email_address: z.string().nullable(),
    phone_number: z.string().nullable(),
    web3_wallet: z.string().nullable(),
    password_enabled: z.boolean(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    unsafe_metadata: z.looseObject({}).exactOptional(),
    public_metadata: z.looseObject({}).exactOptional(),
    custom_action: z.boolean(),
    external_id: z.string().nullable(),
    created_session_id: z.string().nullable(),
    created_user_id: z.string().nullable(),
    abandon_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp at which the user abandoned the sign up attempt.\n',
        example: 1700690400000,
      }),
    legal_accepted_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp at which the user accepted the legal requirements.\n',
        example: 1700690400000,
      }),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The IANA timezone associated with the sign-up attempt.',
        example: 'America/New_York',
      }),
    locale: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The user locale preference for the sign-up specified as a BCP-47 language tag.',
        example: 'en-US',
      }),
    external_account: z.object({}).exactOptional().openapi({ deprecated: true }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'status',
      'required_fields',
      'optional_fields',
      'missing_fields',
      'unverified_fields',
      'verifications',
      'username',
      'email_address',
      'phone_number',
      'web3_wallet',
      'password_enabled',
      'first_name',
      'last_name',
      'custom_action',
      'external_id',
      'created_session_id',
      'created_user_id',
      'abandon_at',
      'legal_accepted_at',
    ],
  })
  .openapi('SignUp')

const OAuthApplicationSchema = z
  .object({
    object: z.literal('oauth_application'),
    id: z.string(),
    instance_id: z.string(),
    name: z.string(),
    client_id: z.string(),
    client_uri: z.string().nullable(),
    client_image_url: z.string().nullable(),
    dynamically_registered: z.boolean(),
    consent_screen_enabled: z.boolean(),
    pkce_required: z.boolean(),
    audience_uri: z
      .string()
      .nullable()
      .openapi({
        description:
          'The active application audience URI, whose registry identity is permanently reserved to this application.',
      }),
    token_exchange_enabled: z
      .boolean()
      .openapi({
        description:
          'Whether this confidential application accepts token exchanges from its active audience.',
      }),
    device_authorization_grant_enabled: z.boolean(),
    public: z.boolean(),
    scopes: z
      .string()
      .openapi({
        description:
          'The complete scope ceiling for the OAuth application, as a space-delimited list of built-in and assigned custom scope keys.\n',
      }),
    redirect_uris: z.array(z.string()),
    callback_url: z
      .string()
      .openapi({ deprecated: true, description: 'Deprecated: Use redirect_uris instead.\n' }),
    authorize_url: z.string(),
    token_fetch_url: z.string(),
    user_info_url: z.string(),
    discovery_url: z.string(),
    token_introspection_url: z.string(),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'instance_id',
      'name',
      'dynamically_registered',
      'consent_screen_enabled',
      'pkce_required',
      'audience_uri',
      'token_exchange_enabled',
      'device_authorization_grant_enabled',
      'public',
      'client_id',
      'client_uri',
      'client_image_url',
      'scopes',
      'redirect_uris',
      'callback_url',
      'authorize_url',
      'token_fetch_url',
      'user_info_url',
      'discovery_url',
      'token_introspection_url',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('OAuthApplication')

const OAuthApplicationsSchema = z
  .strictObject({
    data: z.array(OAuthApplicationSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of OAuth applications\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('OAuthApplications')

const OAuthApplicationWithSecretSchema = OAuthApplicationSchema.and(
  z
    .object({
      client_secret: z
        .string()
        .exactOptional()
        .openapi({ description: 'Empty if public client.\n' }),
    })
    .openapi({ required: [] }),
).openapi('OAuthApplicationWithSecret')

const SAMLConnectionAttributeMappingSchema = z
  .strictObject({
    user_id: z.string(),
    email_address: z.string(),
    first_name: z.string(),
    last_name: z.string(),
  })
  .openapi({ required: ['user_id', 'email_address', 'first_name', 'last_name'] })
  .openapi('SAMLConnectionAttributeMapping')

const SAMLConnectionLoginHintSchema = z
  .strictObject({
    mode: z
      .enum(['email_address', 'custom_attribute', 'off'])
      .openapi({ description: 'Controls the login_hint sent to the IdP on SSO sign-in' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user public_metadata key whose value is sent as the login_hint when mode is custom_attribute',
      }),
  })
  .openapi({
    description: 'Configuration for the login_hint sent to the IdP on SSO sign-in',
    required: ['mode'],
  })
  .openapi('SAMLConnectionLoginHint')

const SAMLConnectionSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'domain')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['domain'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'domains')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['domains'] }),
  ])
  .and(
    z
      .object({
        object: z.literal('saml_connection'),
        id: z.string(),
        name: z.string(),
        domain: z.string().exactOptional().openapi({ deprecated: true }),
        domains: z.array(z.string()).exactOptional(),
        idp_entity_id: z.string().nullable(),
        idp_sso_url: z.string().nullable(),
        idp_certificate: z.string().nullable(),
        idp_certificate_issued_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .openapi({
            type: ['integer', 'null'],
            format: 'int64',
            description:
              'Unix timestamp (milliseconds) of the start of the IdP certificate validity window (X.509 NotBefore). Null when no certificate is configured.\n',
          }),
        idp_certificate_expires_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .openapi({
            type: ['integer', 'null'],
            format: 'int64',
            description:
              'Unix timestamp (milliseconds) of the end of the IdP certificate validity window (X.509 NotAfter). Null when no certificate is configured.\n',
          }),
        idp_certificates: z
          .array(
            z
              .object({
                certificate: z
                  .string()
                  .openapi({ description: 'The X.509 certificate, base64 DER without PEM armor' }),
                issued_at: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .nullable()
                  .openapi({
                    type: ['integer', 'null'],
                    format: 'int64',
                    description: 'Unix timestamp (milliseconds) of the X.509 NotBefore',
                  }),
                expires_at: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .nullable()
                  .openapi({
                    type: ['integer', 'null'],
                    format: 'int64',
                    description: 'Unix timestamp (milliseconds) of the X.509 NotAfter',
                  }),
              })
              .openapi({ required: ['certificate', 'issued_at', 'expires_at'] }),
          )
          .openapi({
            description:
              'Every IdP signing certificate the connection trusts, primary first. A SAML response verifies against any of them.\n',
          }),
        idp_metadata_url: z.string().nullable().exactOptional(),
        idp_metadata: z.string().nullable().exactOptional(),
        acs_url: z.string(),
        sp_entity_id: z.string(),
        sp_metadata_url: z.string(),
        organization_id: z.string().nullable().exactOptional(),
        attribute_mapping: SAMLConnectionAttributeMappingSchema.exactOptional(),
        active: z.boolean(),
        provider: z.string(),
        user_count: z.int(),
        sync_user_attributes: z.boolean(),
        allow_subdomains: z.boolean(),
        allow_idp_initiated: z.boolean(),
        disable_additional_identifications: z.boolean(),
        allow_organization_account_linking: z.boolean(),
        force_authn: z.boolean().openapi({ description: 'Enable or deactivate ForceAuthn' }),
        login_hint: SAMLConnectionLoginHintSchema,
        enterprise_connection_id: z.string().nullable().exactOptional(),
        created_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of creation.\n',
          }),
        updated_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp of last update.\n',
          }),
      })
      .openapi({
        required: [
          'object',
          'id',
          'name',
          'idp_entity_id',
          'idp_sso_url',
          'idp_certificate',
          'idp_certificate_issued_at',
          'idp_certificate_expires_at',
          'idp_certificates',
          'acs_url',
          'sp_entity_id',
          'sp_metadata_url',
          'active',
          'provider',
          'user_count',
          'sync_user_attributes',
          'allow_subdomains',
          'allow_idp_initiated',
          'disable_additional_identifications',
          'allow_organization_account_linking',
          'force_authn',
          'login_hint',
          'created_at',
          'updated_at',
        ],
      }),
  )
  .openapi({
    required: [
      'object',
      'id',
      'name',
      'idp_entity_id',
      'idp_sso_url',
      'idp_certificate',
      'idp_certificate_issued_at',
      'idp_certificate_expires_at',
      'idp_certificates',
      'acs_url',
      'sp_entity_id',
      'sp_metadata_url',
      'active',
      'provider',
      'user_count',
      'sync_user_attributes',
      'allow_subdomains',
      'allow_idp_initiated',
      'disable_additional_identifications',
      'allow_organization_account_linking',
      'force_authn',
      'login_hint',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('SAMLConnection')

const SAMLConnectionsSchema = z
  .strictObject({
    data: z.array(SAMLConnectionSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of SAML Connections\n',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('SAMLConnections')

const EnterpriseConnectionSchema = z
  .object({
    object: z.literal('enterprise_connection'),
    id: z.string().openapi({ description: 'The enterprise connection ID' }),
    name: z.string().openapi({ description: 'The display name of the connection' }),
    provider: z.string(),
    logo_public_url: z.string().nullable().exactOptional(),
    active: z.boolean().openapi({ description: 'Whether the enterprise connection is active' }),
    domains: z
      .array(z.string())
      .openapi({ description: 'Domains associated with the enterprise connection' }),
    organization_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Organization ID when the connection is linked to an organization' }),
    sync_user_attributes: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Controls whether to update the user's attributes on each sign-in" }),
    disable_additional_identifications: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, users cannot add additional identifications when using this connection',
      }),
    allow_organization_account_linking: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this connection supports account linking via organization membership',
      }),
    custom_attributes: z
      .array(
        z
          .strictObject({
            name: z.string().openapi({ description: 'Display name for the custom attribute' }),
            key: z
              .string()
              .openapi({
                description:
                  "Key used to store the attribute in the user's public/private/unsafe metadata",
              }),
            sso_path: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Path to extract the attribute value from SSO claims (SAML assertions or OIDC claims)',
              }),
            scim_path: z
              .string()
              .exactOptional()
              .openapi({
                description: 'GJSON path to extract the attribute value from SCIM user resources',
              }),
            directory_path: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'GJSON path to extract the attribute value from directory sync user resources. Same value as `scim_path`.',
              }),
            multi_valued: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'When true, the attribute supports multiple values; values from the IdP are written to public_metadata as an array. Defaults to false.',
              }),
          })
          .openapi({ required: ['name', 'key'] }),
      )
      .exactOptional()
      .openapi({
        description:
          "Custom attributes to map from the IdP to the user's profile via SSO or SCIM provisioning",
      }),
    saml_connection: z
      .object({
        id: z.string().exactOptional().openapi({ description: 'SAML connection ID' }),
        name: z.string().exactOptional().openapi({ description: 'SAML connection display name' }),
        idp_entity_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'IdP entity ID (optional, when connection details are loaded)' }),
        idp_sso_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'IdP SSO URL (optional, when connection details are loaded)' }),
        idp_certificate: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Primary IdP X.509 signing certificate (optional, when connection details are loaded)',
          }),
        idp_certificate_issued_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'int64',
            description:
              "Unix timestamp (milliseconds) of the primary certificate's X.509 NotBefore",
          }),
        idp_certificate_expires_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'int64',
            description:
              "Unix timestamp (milliseconds) of the primary certificate's X.509 NotAfter",
          }),
        idp_certificates: z
          .array(
            z
              .object({
                certificate: z
                  .string()
                  .openapi({ description: 'The X.509 certificate, base64 DER without PEM armor' }),
                issued_at: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .nullable()
                  .openapi({
                    type: ['integer', 'null'],
                    format: 'int64',
                    description: 'Unix timestamp (milliseconds) of the X.509 NotBefore',
                  }),
                expires_at: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .nullable()
                  .openapi({
                    type: ['integer', 'null'],
                    format: 'int64',
                    description: 'Unix timestamp (milliseconds) of the X.509 NotAfter',
                  }),
              })
              .openapi({ required: ['certificate', 'issued_at', 'expires_at'] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Every IdP signing certificate the connection trusts, primary first. A SAML response verifies against any of them.\n',
          }),
        idp_metadata_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'IdP metadata URL (optional, when connection details are loaded)',
          }),
        acs_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Assertion Consumer Service URL' }),
        sp_entity_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Service Provider entity ID' }),
        sp_metadata_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Service Provider metadata URL' }),
        active: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the SAML connection is active' }),
        allow_idp_initiated: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether IdP-initiated SSO is allowed' }),
        allow_subdomains: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether subdomains are allowed for domain matching' }),
        force_authn: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to force re-authentication' }),
        login_hint: z
          .object({
            mode: z
              .enum(['email_address', 'custom_attribute', 'off'])
              .openapi({ description: 'Controls the login_hint sent to the IdP on SSO sign-in' }),
            source: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The user public_metadata key whose value is sent as the login_hint when mode is custom_attribute',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Configuration for the login_hint sent to the IdP on SSO sign-in',
            required: ['mode'],
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Present when the enterprise connection uses SAML', required: [] }),
    oauth_config: z
      .object({
        id: z.string().exactOptional().openapi({ description: 'OAuth config ID' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Custom OIDC provider display name' }),
        provider_key: z
          .string()
          .exactOptional()
          .openapi({
            description: 'OAuth provider key (e.g. oidc_custom, oidc_ghe_*, oidc_gitlab_ent_*)',
          }),
        client_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'OAuth client ID' }),
        discovery_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'OIDC discovery URL' }),
        auth_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'OAuth authorization endpoint URL (present when configured or resolved from discovery)',
          }),
        token_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'OAuth token endpoint URL (present when configured or resolved from discovery)',
          }),
        user_info_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'OIDC userinfo endpoint URL (present when configured or resolved from discovery)',
          }),
        requires_pkce: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether PKCE is required for this OAuth client' }),
        logo_public_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Logo URL for the provider' }),
        created_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp in milliseconds when the config was created',
          }),
        updated_at: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix timestamp in milliseconds when the config was last updated',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Present when the enterprise connection uses OIDC or EASIE',
        required: [],
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp in milliseconds when the connection was created',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp in milliseconds when the connection was last updated',
      }),
  })
  .openapi({
    required: ['object', 'id', 'name', 'provider', 'active', 'domains', 'created_at', 'updated_at'],
  })
  .openapi('EnterpriseConnection')

const EnterpriseConnectionsSchema = z
  .strictObject({
    data: z.array(EnterpriseConnectionSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of enterprise connections',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('EnterpriseConnections')

const EnterpriseConnectionTestRunSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The test run ID' }),
    status: z
      .enum(['pending', 'success', 'failed'])
      .openapi({ description: 'The status of the test run' }),
    connection_type: z
      .enum(['saml', 'oauth'])
      .openapi({
        description: 'The type of enterprise connection the test run was performed against',
      }),
    parsed_user_info: z
      .strictObject({
        email_address: z.string().exactOptional(),
        first_name: z.string().exactOptional(),
        last_name: z.string().exactOptional(),
        user_id: z.string().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user information parsed from the IdP response', required: [] }),
    logs: z
      .array(
        z
          .strictObject({
            level: z.string(),
            code: z.string().exactOptional(),
            short_message: z.string().exactOptional(),
            message: z.string(),
          })
          .openapi({ required: ['level', 'message'] }),
      )
      .exactOptional()
      .openapi({ description: 'Log entries captured during the test run' }),
    saml: z
      .strictObject({
        saml_request: z.string().exactOptional(),
        saml_response: z.string().exactOptional(),
        relay_state: z.string().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'SAML-specific metadata, present for SAML connections',
        required: [],
      }),
    oauth: z
      .strictObject({
        id_token: z.string().exactOptional(),
        access_token: z.string().exactOptional(),
        user_info: z.string().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'OAuth-specific metadata, present for OIDC connections',
        required: [],
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp in milliseconds when the test run was created',
      }),
  })
  .openapi({ required: ['id', 'status', 'connection_type', 'created_at'] })
  .openapi('EnterpriseConnectionTestRun')

const EnterpriseConnectionTestRunsSchema = z
  .strictObject({
    data: z.array(EnterpriseConnectionTestRunSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total number of test runs' }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('EnterpriseConnectionTestRuns')

const EnterpriseConnectionTestRunResponseSchema = z
  .strictObject({
    url: z
      .string()
      .openapi({ description: 'A short-lived URL that can be used to initiate the test run flow' }),
  })
  .openapi({ required: ['url'] })
  .openapi('EnterpriseConnectionTestRunResponse')

const TestingTokenSchema = z
  .object({
    object: z.literal('testing_token'),
    token: z
      .string()
      .openapi({
        description:
          'The actual token. This value is meant to be passed in the `__clerk_testing_token` query parameter with requests to the Frontend API.',
        example: '1713877200-c_2J2MvPu9PnXcuhbPZNao0LOXqK9A7YrnBn0HmIWxy',
      }),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "Unix timestamp of the token's expiration time.\n",
        example: 1713880800,
      }),
  })
  .openapi({ required: ['object', 'token', 'expires_at'] })
  .openapi('TestingToken')

const WaitlistEntrySchema = z
  .strictObject({
    object: z.literal('waitlist_entry'),
    id: z.string(),
    email_address: z.email(),
    status: z.enum(['pending', 'invited', 'rejected', 'completed']).openapi({ example: 'pending' }),
    is_locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the waitlist entry is locked. Locked entries are being processed in a batch action and are unavailable for other actions.\n',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unix timestamp of creation.\n' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last update.\n',
      }),
    invitation: InvitationSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['object', 'id', 'email_address', 'status', 'created_at', 'updated_at'] })
  .openapi('WaitlistEntry')

const PaginatedCommercePlanResponseSchema = z
  .strictObject({
    data: z.array(CommercePlanSchema).openapi({ description: 'Array of commerce plans.' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of commerce plans.',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('PaginatedCommercePlanResponse')

const PaginatedCommerceSubscriptionItemResponseSchema = z
  .strictObject({
    data: z
      .array(CommerceSubscriptionItemSchema)
      .openapi({ description: 'Array of commerce subscription items.' }),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of commerce subscription items.',
      }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('PaginatedCommerceSubscriptionItemResponse')

const ExtendFreeTrialRequestSchema = z
  .strictObject({
    extend_to: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'RFC3339 timestamp to extend the free trial to.\nMust be in the future and not more than 365 days from now.',
        example: '2026-01-08T00:00:00Z',
      }),
  })
  .openapi({ required: ['extend_to'] })
  .openapi('ExtendFreeTrialRequest')

const PriceTransitionRequestSchema = z
  .strictObject({
    from_price_id: z
      .string()
      .openapi({ description: 'The current price ID of the subscription item.' }),
    to_price_id: z.string().openapi({ description: 'The target price ID to transition to.' }),
  })
  .openapi({ required: ['from_price_id', 'to_price_id'] })
  .openapi('PriceTransitionRequest')

const BillingPriceResponseSchema = z
  .strictObject({
    object: z
      .literal('commerce_price')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the price.' }),
    plan_id: z.string().openapi({ description: 'Unique identifier for the associated plan.' }),
    instance_id: z.string().openapi({ description: 'Unique identifier for the instance.' }),
    currency: z.string().openapi({ description: 'The currency code (e.g., "USD").' }),
    currency_symbol: z.string().openapi({ description: 'The currency symbol (e.g., "$").' }),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The amount in cents for the price.',
      }),
    annual_monthly_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The monthly amount in cents when billed annually.',
      }),
    fee: CommerceMoneyResponseSchema.nullable(),
    annual_monthly_fee: CommerceMoneyResponseSchema.nullable(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the price.' }),
    is_default: z
      .boolean()
      .openapi({ description: 'Whether this price is the default price for its plan.' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (milliseconds) of creation.',
      }),
    supported_billing_periods: z
      .enum(['month', 'annual', 'both'])
      .openapi({ description: 'Which billing periods this price supports.' }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'plan_id',
      'instance_id',
      'currency',
      'currency_symbol',
      'amount',
      'annual_monthly_amount',
      'fee',
      'annual_monthly_fee',
      'is_default',
      'created_at',
      'supported_billing_periods',
    ],
  })
  .openapi('BillingPriceResponse')

const CommercePriceTransitionDetailsSchema = z
  .strictObject({
    previous_plan: CommercePlanSchema,
    previous_price: BillingPriceResponseSchema,
    effective_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (milliseconds) when the new price takes effect.',
      }),
    effective_mode: z
      .enum(['immediate', 'end_of_period'])
      .openapi({ description: 'When the new price takes effect.' }),
    next_billing_date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp (milliseconds) for the next billing date.',
      }),
    charged_immediately: z
      .boolean()
      .openapi({ description: 'Whether an immediate charge was made.' }),
    immediate_charge: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Amount charged immediately, if any.' }),
    previous_subscription_item_status: z
      .enum(['canceled', 'ended', 'abandoned'])
      .openapi({ description: 'The status of the previous subscription item after transition.' }),
    previous_subscription_item_id: z
      .string()
      .openapi({ description: 'The ID of the previous subscription item.' }),
  })
  .openapi({
    required: [
      'previous_plan',
      'previous_price',
      'effective_at',
      'effective_mode',
      'charged_immediately',
      'previous_subscription_item_status',
      'previous_subscription_item_id',
    ],
  })
  .openapi('CommercePriceTransitionDetails')

const CommercePriceTransitionResponseSchema = z
  .strictObject({
    object: z
      .literal('commerce_price_transition')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    subscription_item: CommerceSubscriptionItemSchema,
    transition: CommercePriceTransitionDetailsSchema,
  })
  .openapi({ required: ['object', 'subscription_item', 'transition'] })
  .openapi('CommercePriceTransitionResponse')

const ApplyCommerceDiscountRequestSchema = z
  .strictObject({
    discount_id: z
      .string()
      .openapi({ description: 'The ID of the discount to apply to the subscription item.' }),
  })
  .openapi({ required: ['discount_id'] })
  .openapi('ApplyCommerceDiscountRequest')

const CommerceDiscountRedemptionResponseSchema = z
  .strictObject({
    object: z
      .literal('commerce_discount_redemption')
      .openapi({
        description:
          "String representing the object's type. Objects of the same type share the same value.",
      }),
    id: z.string().openapi({ description: 'Unique identifier for the discount redemption.' }),
    subscription_item_id: z
      .string()
      .openapi({
        description: 'Unique identifier for the subscription item the discount was applied to.',
      }),
    discount_id: z
      .string()
      .openapi({ description: 'Unique identifier for the discount that was applied.' }),
    name: z.string().exactOptional().openapi({ description: 'The display name of the discount.' }),
    source: z
      .enum(['promotion', 'manual', 'promo_code'])
      .openapi({ description: 'How the discount was applied to the subscription item.' }),
    promo_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The promo code used to redeem the discount, when applicable.' }),
    effect: z
      .enum(['percentage', 'fixed_amount'])
      .exactOptional()
      .openapi({ description: 'The snapshotted discount effect.' }),
    percent_off: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Percent off when the effect is percentage.' }),
    amount_off: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Fixed amount off when the effect is fixed_amount.' }),
    amount: CommerceMoneyResponseSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "How much this discount takes off the subscription item's next renewal charge.\nPresent for either effect when next-payment data is available.",
      }),
    cycles_remaining: z
      .int32()
      .nullable()
      .openapi({
        description:
          'Remaining billing cycles the discount applies to. Null means the discount lasts forever.',
      }),
    cycles_applied: z
      .int32()
      .openapi({
        description: 'Number of billing cycles the discount has already been applied to.',
      }),
    status: z
      .enum(['active', 'exhausted', 'removed'])
      .exactOptional()
      .openapi({ description: 'Current status of the discount redemption.' }),
    redeemed_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp (in milliseconds) when the discount was redeemed.',
      }),
    redeemed_by: z
      .string()
      .nullable()
      .openapi({
        description: 'Identifier of the actor that redeemed the discount, when available.',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'subscription_item_id',
      'discount_id',
      'source',
      'cycles_applied',
      'cycles_remaining',
      'redeemed_at',
      'redeemed_by',
    ],
  })
  .openapi('CommerceDiscountRedemptionResponse')

const PermissionsSchema = z
  .strictObject({
    data: z.array(PermissionSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total number of permissions\n' }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('Permissions')

const RoleSetItemSchema = z
  .strictObject({
    object: z.literal('role_set_item'),
    id: z.string().openapi({ description: 'The unique identifier of the role' }),
    name: z.string().openapi({ description: 'The name of the role' }),
    key: z
      .string()
      .openapi({ description: 'The key of the role (e.g., "org:admin", "org:member")' }),
    description: z.string().nullable().openapi({ description: 'Optional description of the role' }),
    members_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'The number of members assigned to this role within the role set',
      }),
    has_members: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this role has any members assigned within the role set' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of role creation',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last role update',
      }),
  })
  .openapi({
    description: 'A role within a role set',
    required: ['object', 'id', 'name', 'key', 'description', 'created_at', 'updated_at'],
  })
  .openapi('RoleSetItem')

const RoleSetMigrationSchema = z
  .strictObject({
    object: z.literal('role_set_migration'),
    id: z.string().openapi({ description: 'The unique identifier of the migration' }),
    organization_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The organization ID if the migration is scoped to a specific organization',
      }),
    instance_id: z.string().openapi({ description: 'The instance ID this migration belongs to' }),
    source_role_set_id: z
      .string()
      .openapi({ description: 'The ID of the source role set being migrated from' }),
    dest_role_set_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the destination role set being migrated to' }),
    trigger_type: z
      .string()
      .openapi({
        description: 'What triggered this migration (e.g., "role_set_deletion", "role_removal")',
      }),
    status: z
      .string()
      .openapi({
        description:
          'Current status of the migration (e.g., "enqueued", "in_progress", "completed")',
      }),
    migrated_members: z
      .int()
      .openapi({ description: 'Number of members that have been migrated so far' }),
    mappings: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Role key mappings from source to destination roles' }),
    started_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp when the migration started',
      }),
    completed_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Unix timestamp when the migration completed',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of migration creation',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last migration update',
      }),
  })
  .openapi({
    description: 'Information about an ongoing role set migration',
    required: [
      'object',
      'id',
      'instance_id',
      'source_role_set_id',
      'trigger_type',
      'status',
      'migrated_members',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('RoleSetMigration')

const RoleSetSchema = z
  .strictObject({
    object: z.literal('role_set'),
    id: z.string().openapi({ description: 'The unique identifier of the role set' }),
    name: z.string().openapi({ description: 'The name of the role set' }),
    key: z
      .string()
      .openapi({ description: 'A unique key for the role set (e.g., "role_set:default")' }),
    description: z
      .string()
      .nullable()
      .openapi({ description: 'Optional description of the role set' }),
    roles: z
      .array(RoleSetItemSchema)
      .openapi({ description: 'The list of roles in this role set' }),
    default_role: RoleSetItemSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The default role assigned to new organization members' }),
    creator_role: RoleSetItemSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The role assigned to the creator of an organization' }),
    type: z
      .enum(['initial', 'custom'])
      .openapi({ description: 'The type of the role set ("initial" or "custom")' }),
    role_set_migration: RoleSetMigrationSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Active migration information, only present when status is "enqueued" or "in_progress"',
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of role set creation',
      }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unix timestamp of last role set update',
      }),
  })
  .openapi({
    description:
      'A role set defines a collection of roles that can be assigned to organization members',
    required: [
      'object',
      'id',
      'name',
      'key',
      'description',
      'roles',
      'type',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('RoleSet')

const RoleSetsSchema = z
  .strictObject({
    data: z.array(RoleSetSchema),
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Total number of role sets' }),
  })
  .openapi({ required: ['data', 'total_count'] })
  .openapi('RoleSets')

const WellKnownJWKSResponse = {
  description: 'Get the JSON Web Key Set',
  content: { 'application/json': { schema: JWKSSchema } },
}

const ClientListResponse = {
  description: 'Success',
  content: { 'application/json': { schema: z.array(ClientSchema) } },
}

const ClerkErrorsResponse = {
  description: 'Request was not successful',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const AuthenticationInvalidResponse = {
  description: 'Authentication invalid',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const DeprecatedEndpointResponse = {
  description: 'The endpoint is considered deprecated and is pending removal.',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const UnprocessableEntityResponse = {
  description: 'Invalid request parameters',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const ClientResponse = {
  description: 'Success',
  content: { 'application/json': { schema: ClientSchema } },
}

const ResourceNotFoundResponse = {
  description: 'Resource not found',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const EmailAddressResponse = {
  description: 'Success',
  content: { 'application/json': { schema: EmailAddressSchema } },
}

const AuthorizationInvalidResponse = {
  description: 'Authorization invalid',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const ConflictResponse = {
  description: 'Conflict',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const DeletedObjectResponse = {
  description: 'Deleted Object',
  content: { 'application/json': { schema: DeletedObjectSchema } },
}

const VerificationResponseResponse = {
  description:
    'The verification. After prepare_verification it is pending (unverified);\nafter attempt_verification its status reflects the attempt outcome.',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          object: z
            .string()
            .exactOptional()
            .openapi({ description: 'The type of the verification object.' }),
          id: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The ID of the verification. Pass this to attempt_verification.',
            }),
          status: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The status of the verification (unverified, verified, expired, or failed).',
            }),
          strategy: z
            .string()
            .exactOptional()
            .openapi({ description: 'The verification strategy (email_code or phone_code).' }),
          attempts: z
            .int()
            .nullable()
            .exactOptional()
            .openapi({ description: 'The number of attempts made against this verification.' }),
          expire_at: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .nullable()
            .exactOptional()
            .openapi({
              type: ['integer', 'null'],
              format: 'int64',
              description: 'Unix timestamp (milliseconds) at which the code expires.',
            }),
          channel: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'The channel the code was sent over (phone numbers only).' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PhoneNumberResponse = {
  description: 'Success',
  content: { 'application/json': { schema: PhoneNumberSchema } },
}

const SessionListResponse = {
  description: 'Success',
  content: { 'application/json': { schema: z.array(SessionSchema) } },
}

const SessionResponse = {
  description: 'Success',
  content: { 'application/json': { schema: SessionSchema } },
}

const SessionRefreshResponse = {
  description: 'Success',
  content: { 'application/json': { schema: SessionRefreshSchema } },
}

const ReverificationResponse = {
  description: 'Success',
  content: { 'application/json': { schema: ReverificationSchema } },
}

const TemplateListResponse = {
  description: 'Success',
  content: { 'application/json': { schema: z.array(TemplateSchema) } },
}

const TemplateResponse = {
  description: 'Success',
  content: { 'application/json': { schema: TemplateSchema } },
}

const PaymentRequiredResponse = {
  description: 'Payment required',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const LockedResponse = {
  description: 'Locked',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const TooManyRequestsResponse = {
  description: 'Too many requests',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const UserListResponse = {
  description: 'Success',
  content: { 'application/json': { schema: z.array(UserSchema) } },
}

const UserResponse = {
  description: 'Success',
  content: { 'application/json': { schema: UserSchema } },
}

const UserCountResponse = {
  description: 'Success',
  content: { 'application/json': { schema: TotalCountSchema } },
}

const CommerceSubscriptionResponse = {
  description: 'A commerce subscription.',
  content: { 'application/json': { schema: CommerceSubscriptionSchema } },
}

const CommerceCreditBalanceResponse = {
  description: "A payer's credit balance.",
  content: { 'application/json': { schema: CommerceCreditBalanceResponseSchema } },
}

const CommerceCreditLedgerResponse = {
  description: 'A credit ledger entry.',
  content: { 'application/json': { schema: CommerceCreditLedgerResponseSchema } },
}

const OAuthAccessTokenResponse = {
  description: 'Success',
  content: { 'application/json': { schema: OAuthAccessTokenSchema } },
}

const OrganizationMembershipsResponse = {
  description: 'A list of organization memberships',
  content: { 'application/json': { schema: OrganizationMembershipsSchema } },
}

const OrganizationInvitationsWithPublicOrganizationDataResponse = {
  description: 'A list of organization invitations with public organization data',
  content: {
    'application/json': { schema: OrganizationInvitationsWithPublicOrganizationDataSchema },
  },
}

const TrustedDeviceListResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z.array(TrustedDeviceSchema),
          total_count: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'Total number of trusted devices',
            }),
        })
        .openapi({ required: ['data', 'total_count'] }),
    },
  },
}

const TrustedDeviceResponse = {
  description: 'Success',
  content: { 'application/json': { schema: TrustedDeviceSchema } },
}

const InvitationListResponse = {
  description: 'List of invitations',
  content: { 'application/json': { schema: z.array(InvitationSchema) } },
}

const InvitationResponse = {
  description: 'Success',
  content: { 'application/json': { schema: InvitationSchema } },
}

const InvitationRevokedResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: InvitationSchema.and(
        z
          .object({
            revoked: z.literal(true).exactOptional().openapi({ example: true }),
            status: z.literal('revoked').exactOptional().openapi({ example: 'revoked' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const AllowlistIdentifierListResponse = {
  description: 'Success',
  content: { 'application/json': { schema: z.array(AllowlistIdentifierSchema) } },
}

const AllowlistIdentifierResponse = {
  description: 'Success',
  content: { 'application/json': { schema: AllowlistIdentifierSchema } },
}

const BlocklistIdentifierListResponse = {
  description: 'Success',
  content: { 'application/json': { schema: BlocklistIdentifiersSchema } },
}

const BlocklistIdentifierResponse = {
  description: 'Success',
  content: { 'application/json': { schema: BlocklistIdentifierSchema } },
}

const InstanceSettingsResponse = {
  description: 'InstanceSettings Server API',
  content: {
    'application/json': {
      schema: z
        .object({
          object: z
            .literal('instance_settings')
            .exactOptional()
            .openapi({
              description:
                "String representing the object's type. Objects of the same type share the same value.",
            }),
          id: z.string().exactOptional(),
          restricted_to_allowlist: z.boolean().exactOptional(),
          from_email_address: z.string().exactOptional(),
          progressive_sign_up: z.boolean().exactOptional(),
          enhanced_email_deliverability: z
            .boolean()
            .exactOptional()
            .openapi({
              deprecated: true,
              description:
                "Deprecated. This setting is retired and no longer affects email delivery; all email is sent through the instance's configured email sending domain. The field is preserved for API compatibility only and will be removed in a future version.\n",
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ActorTokenResponse = {
  description: 'Success',
  content: { 'application/json': { schema: ActorTokenSchema } },
}

const FeatureNotEnabledResponse = {
  description: 'Feature not enabled',
  content: { 'application/json': { schema: ClerkErrorsSchema } },
}

const DomainsResponse = {
  description: 'A list of domains',
  content: { 'application/json': { schema: DomainsSchema } },
}

const DomainResponse = {
  description: 'A domain',
  content: { 'application/json': { schema: DomainSchema } },
}

const InstanceResponse = {
  description: 'Success',
  content: { 'application/json': { schema: InstanceSchema } },
}

const InstanceRestrictionsResponse = {
  description: 'Success',
  content: { 'application/json': { schema: InstanceRestrictionsSchema } },
}

const InstanceProtectResponse = {
  description: 'Success',
  content: { 'application/json': { schema: InstanceProtectSchema } },
}

const InstanceCommunicationResponse = {
  description: 'Success',
  content: { 'application/json': { schema: InstanceCommunicationSchema } },
}

const InstanceOAuthApplicationSettingsResponse = {
  description: 'Success',
  content: { 'application/json': { schema: OAuthApplicationSettingsSchema } },
}

const OrganizationSettingsResponse = {
  description: 'Success',
  content: { 'application/json': { schema: OrganizationSettingsSchema } },
}

const SvixURLResponse = {
  description: 'Response that contains a temporary Svix URL to access management dashboard',
  content: { 'application/json': { schema: SvixURLSchema } },
}

const JWTTemplateListResponse = {
  description: 'List of JWT templates',
  content: { 'application/json': { schema: z.array(JWTTemplateSchema) } },
}

const JWTTemplateResponse = {
  description: 'Success',
  content: { 'application/json': { schema: JWTTemplateSchema } },
}

const MachineListResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z.array(MachineSchema),
          total_count: z.int().openapi({ description: 'Total number of machines' }),
        })
        .openapi({ required: ['data', 'total_count'] }),
    },
  },
}

const MachineCreatedResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: MachineSchema.and(
        z
          .object({
            secret_key: z
              .string()
              .openapi({
                readOnly: true,
                description: 'The secret key for the machine, only returned upon creation.',
              }),
          })
          .openapi({ required: ['secret_key'] }),
      ),
    },
  },
}

const MachineResponse = {
  description: 'Success',
  content: { 'application/json': { schema: MachineSchema } },
}

const MachineDeletedResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z
        .object({
          object: z
            .literal('machine')
            .openapi({ description: "String representing the object's type." }),
          id: z.string().openapi({ description: 'The ID of the deleted machine' }),
          deleted: z
            .literal(true)
            .openapi({ description: 'Whether the machine was successfully deleted' }),
        })
        .openapi({ required: ['object', 'id', 'deleted'] }),
    },
  },
}

const MachineSecretKeyResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z
        .object({
          object: z
            .literal('machine_secret_key')
            .openapi({ description: "String representing the object's type." }),
          secret: z
            .string()
            .openapi({ readOnly: true, description: 'The secret key for the machine.' }),
        })
        .openapi({ required: ['object', 'secret'] }),
    },
  },
}

const MachineScopeResponse = {
  description: 'Machine scope created successfully for a machine',
  content: { 'application/json': { schema: MachineScopeSchema } },
}

const MachineScopeDeletedResponse = {
  description: 'Machine scope deleted successfully for a machine',
  content: {
    'application/json': {
      schema: z
        .object({
          object: z
            .literal('machine_scope')
            .openapi({ description: "String representing the object's type." }),
          from_machine_id: z
            .string()
            .openapi({
              description: 'The ID of the machine that had access to the target machine',
            }),
          to_machine_id: z
            .string()
            .openapi({ description: 'The ID of the machine that was being accessed' }),
          deleted: z
            .literal(true)
            .openapi({ description: 'Whether the machine scope was successfully deleted' }),
        })
        .openapi({ required: ['object', 'from_machine_id', 'to_machine_id', 'deleted'] }),
    },
  },
}

const OrganizationsResponse = {
  description: 'A list of organizations',
  content: { 'application/json': { schema: OrganizationsSchema } },
}

const OrganizationResponse = {
  description: 'An organization',
  content: { 'application/json': { schema: OrganizationSchema } },
}

const OrganizationWithLogoResponse = {
  description: 'An organization with a logo URL.',
  content: { 'application/json': { schema: OrganizationWithLogoSchema } },
}

const OrganizationInvitationsResponse = {
  description: 'A list of organization invitations',
  content: { 'application/json': { schema: OrganizationInvitationsSchema } },
}

const OrganizationInvitationResponse = {
  description: 'An organization invitation',
  content: { 'application/json': { schema: OrganizationInvitationSchema } },
}

const RolesResponse = {
  description: 'Success',
  content: { 'application/json': { schema: RolesSchema } },
}

const RoleResponse = {
  description: 'Success',
  content: { 'application/json': { schema: RoleSchema } },
}

const OrganizationMembershipResponse = {
  description: 'Success',
  content: { 'application/json': { schema: OrganizationMembershipSchema } },
}

const OrganizationDomainsResponse = {
  description: 'A list of organization domains',
  content: { 'application/json': { schema: OrganizationDomainsSchema } },
}

const OrganizationDomainResponse = {
  description: 'An organization domain',
  content: { 'application/json': { schema: OrganizationDomainSchema } },
}

const ProxyCheckResponse = {
  description: "Health check information about a domain's proxy configuration validation attempt.",
  content: { 'application/json': { schema: ProxyCheckSchema } },
}

const RedirectURLListResponse = {
  description: 'List of Redirect URLs',
  content: { 'application/json': { schema: z.array(RedirectURLSchema) } },
}

const RedirectURLResponse = {
  description: 'Success',
  content: { 'application/json': { schema: RedirectURLSchema } },
}

const SignInTokenResponse = {
  description: 'Success',
  content: { 'application/json': { schema: SignInTokenSchema } },
}

const SignUpResponse = {
  description: 'Success',
  content: { 'application/json': { schema: SignUpSchema } },
}

const OAuthApplicationsResponse = {
  description: 'A list of OAuth applications',
  content: { 'application/json': { schema: OAuthApplicationsSchema } },
}

const OAuthApplicationWithSecretResponse = {
  description: 'An OAuth application with client secret',
  content: { 'application/json': { schema: OAuthApplicationWithSecretSchema } },
}

const OAuthApplicationResponse = {
  description: 'An OAuth application',
  content: { 'application/json': { schema: OAuthApplicationSchema } },
}

const SAMLConnectionsResponse = {
  description: 'A list of SAML Connections',
  content: { 'application/json': { schema: SAMLConnectionsSchema } },
}

const SAMLConnectionResponse = {
  description: 'A SAML Connection',
  content: { 'application/json': { schema: SAMLConnectionSchema } },
}

const EnterpriseConnectionsResponse = {
  description: 'A list of enterprise connections',
  content: { 'application/json': { schema: EnterpriseConnectionsSchema } },
}

const EnterpriseConnectionResponse = {
  description: 'An enterprise connection',
  content: { 'application/json': { schema: EnterpriseConnectionSchema } },
}

const EnterpriseConnectionTestRunsResponse = {
  description: 'A list of enterprise connection test runs',
  content: { 'application/json': { schema: EnterpriseConnectionTestRunsSchema } },
}

const EnterpriseConnectionTestRunResponse = {
  description: 'A URL to initiate an enterprise connection test run',
  content: { 'application/json': { schema: EnterpriseConnectionTestRunResponseSchema } },
}

const TestingTokenResponse = {
  description: 'A Testing Token',
  content: { 'application/json': { schema: TestingTokenSchema } },
}

const WaitlistEntriesResponse = {
  description: 'List of waitlist entries',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z.array(WaitlistEntrySchema),
          total_count: z.int().openapi({ description: 'Total number of waitlist entries' }),
        })
        .openapi({ required: ['data', 'total_count'] }),
    },
  },
}

const WaitlistEntryResponse = {
  description: 'A Waitlist Entry',
  content: { 'application/json': { schema: WaitlistEntrySchema } },
}

const CommercePlanListResponse = {
  description: 'A list of commerce plans.',
  content: { 'application/json': { schema: PaginatedCommercePlanResponseSchema } },
}

const CommerceSubscriptionItemListResponse = {
  description: 'A list of commerce subscription items.',
  content: { 'application/json': { schema: PaginatedCommerceSubscriptionItemResponseSchema } },
}

const CommerceSubscriptionItemResponse = {
  description: 'A commerce subscription item.',
  content: { 'application/json': { schema: CommerceSubscriptionItemSchema } },
}

const CommercePriceTransitionResponse = {
  description: 'A commerce price transition.',
  content: { 'application/json': { schema: CommercePriceTransitionResponseSchema } },
}

const CommerceDiscountRedemptionResponse = {
  description: 'A commerce discount redemption.',
  content: { 'application/json': { schema: CommerceDiscountRedemptionResponseSchema } },
}

const PermissionsResponse = {
  description: 'Success',
  content: { 'application/json': { schema: PermissionsSchema } },
}

const PermissionResponse = {
  description: 'Success',
  content: { 'application/json': { schema: PermissionSchema } },
}

const RoleSetsResponse = {
  description: 'Success',
  content: { 'application/json': { schema: RoleSetsSchema } },
}

const RoleSetResponse = {
  description: 'Success',
  content: { 'application/json': { schema: RoleSetSchema } },
}

const PaginatedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'paginated',
      in: 'query',
      description:
        'Whether to paginate the results.\nIf true, the results will be paginated.\nIf false, the results will not be paginated.',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const LimitParameterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(500),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description:
        'Applies a limit to the number of results returned.\nCan be used for paginating the results together with `offset`.',
      required: false,
      schema: { type: 'integer', default: 10, minimum: 1, maximum: 500 },
    },
  })

const OffsetParameterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      description:
        'Skip the first `offset` results when paginating.\nNeeds to be an integer greater or equal to zero.\nTo be used in conjunction with `limit`.',
      required: false,
      schema: { type: 'integer', default: 0, minimum: 0 },
    },
  })

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description: 'Secret key, obtained under "API Keys" in the Clerk Dashboard.',
  bearerFormat: 'sk_<environment>_<secret value>',
}

export const getPublicInterstitialRoute = createRoute({
  method: 'get',
  path: '/public/interstitial',
  tags: ['Miscellaneous'],
  summary: 'Returns the markup for the interstitial page',
  description:
    "The Clerk interstitial endpoint serves an html page that loads clerk.js in order to check the user's authentication state.\nIt is used by Clerk SDKs when the user's authentication state cannot be immediately determined.",
  operationId: 'GetPublicInterstitial',
  request: {
    query: z.object({
      frontendApi: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'frontendApi',
            deprecated: true,
            in: 'query',
            required: false,
            description: 'Please use `frontend_api` instead',
            schema: { type: 'string' },
          },
        }),
      frontend_api: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'frontend_api',
            in: 'query',
            required: false,
            description: 'The Frontend API key of your instance',
            schema: { type: 'string' },
          },
        }),
      publishable_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'publishable_key',
            in: 'query',
            required: false,
            description: 'The publishable key of your instance',
            schema: { type: 'string' },
          },
        }),
      proxy_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'proxy_url',
            in: 'query',
            required: false,
            description: 'The proxy URL of your instance',
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: false,
            description: 'The domain of your instance',
            schema: { type: 'string' },
          },
        }),
      sign_in_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sign_in_url',
            in: 'query',
            required: false,
            description: 'The sign in URL of your instance',
            schema: { type: 'string' },
          },
        }),
      use_domain_for_script: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'use_domain_for_script',
            in: 'query',
            required: false,
            description: 'Whether to use the domain for the script URL',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The interstitial page markup' },
    400: { description: 'A required query parameter is missing' },
    500: { description: 'An infinite redirect loop was detected' },
  },
  security: [],
})

export const getJwksRoute = createRoute({
  method: 'get',
  path: '/jwks',
  tags: ['JWKS'],
  summary: 'Retrieve the JSON Web Key Set of the instance',
  description: 'Retrieve the JSON Web Key Set of the instance',
  operationId: 'GetJWKS',
  responses: { 200: WellKnownJWKSResponse },
})

export const getClientsRoute = createRoute({
  method: 'get',
  path: '/clients',
  tags: ['Clients'],
  summary: 'List all clients',
  description:
    'Returns a list of all clients. The clients are returned sorted by creation date,\nwith the newest clients appearing first.\nWarning: the endpoint is being deprecated and will be removed in future versions.',
  operationId: 'GetClientList',
  request: {
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: ClientListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    410: DeprecatedEndpointResponse,
    422: UnprocessableEntityResponse,
  },
  deprecated: true,
})

export const postClientsVerifyRoute = createRoute({
  method: 'post',
  path: '/clients/verify',
  tags: ['Clients'],
  summary: 'Verify a client',
  description: 'Verifies the client in the provided token',
  operationId: 'VerifyClient',
  request: {
    body: {
      description: 'Parameters.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              token: z
                .string()
                .openapi({ description: 'A JWT that represents the active client.' }),
            })
            .openapi({ required: ['token'] }),
        },
      },
    },
  },
  responses: {
    200: ClientResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const getClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/clients/{client_id}',
  tags: ['Clients'],
  summary: 'Get a client',
  description: 'Returns the details of a client.',
  operationId: 'GetClient',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            name: 'client_id',
            in: 'path',
            description: 'Client ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: ClientResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postEmailAddressesRoute = createRoute({
  method: 'post',
  path: '/email_addresses',
  tags: ['Email Addresses'],
  summary: 'Create an email address',
  description: 'Create a new email address',
  operationId: 'CreateEmailAddress',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_id: z.string().openapi({ description: 'The ID representing the user' }),
              email_address: z
                .string()
                .openapi({
                  description:
                    'The new email address. Must adhere to the RFC 5322 specification for email address format.',
                }),
              verified: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'When created, the email address will be marked as verified.',
                }),
              primary: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Create this email address as the primary email address for the user.\nDefault: false, unless it is the first email address.',
                }),
              notify_primary_email_address_changed: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "If set to `true` and the email address is created as the user's new primary,\nthe previous primary email address is notified of the change.\nBy default, no notification is sent.",
                }),
            })
            .openapi({ required: ['user_id', 'email_address'] }),
        },
      },
    },
  },
  responses: {
    200: EmailAddressResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getEmailAddressesEmailAddressIdRoute = createRoute({
  method: 'get',
  path: '/email_addresses/{email_address_id}',
  tags: ['Email Addresses'],
  summary: 'Retrieve an email address',
  description: 'Returns the details of an email address.',
  operationId: 'GetEmailAddress',
  request: {
    params: z.object({
      email_address_id: z
        .string()
        .openapi({
          param: {
            name: 'email_address_id',
            in: 'path',
            description: 'The ID of the email address to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: EmailAddressResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteEmailAddressesEmailAddressIdRoute = createRoute({
  method: 'delete',
  path: '/email_addresses/{email_address_id}',
  tags: ['Email Addresses'],
  summary: 'Delete an email address',
  description: 'Delete the email address with the given ID',
  operationId: 'DeleteEmailAddress',
  request: {
    params: z.object({
      email_address_id: z
        .string()
        .openapi({
          param: {
            name: 'email_address_id',
            in: 'path',
            description: 'The ID of the email address to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
  },
})

export const patchEmailAddressesEmailAddressIdRoute = createRoute({
  method: 'patch',
  path: '/email_addresses/{email_address_id}',
  tags: ['Email Addresses'],
  summary: 'Update an email address',
  description: 'Updates an email address.',
  operationId: 'UpdateEmailAddress',
  request: {
    params: z.object({
      email_address_id: z
        .string()
        .openapi({
          param: {
            name: 'email_address_id',
            in: 'path',
            description: 'The ID of the email address to update',
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
              verified: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The email address will be marked as verified.' }),
              primary: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Set this email address as the primary email address for the user.',
                }),
              notify_primary_email_address_changed: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "If set to `true` and this update makes the email address the user's new primary,\nthe previous primary email address is notified of the change.\nBy default, no notification is sent.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: EmailAddressResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
  },
})

export const postEmailAddressesEmailAddressIdPrepareVerificationRoute = createRoute({
  method: 'post',
  path: '/email_addresses/{email_address_id}/prepare_verification',
  tags: ['Email Addresses'],
  summary: 'Send a verification code to an email address',
  description:
    'Sends a one-time code to the given email address so that a backend can\nverify the user controls it (for example, in a custom, backend-driven\nsign-in flow). The code is tracked on its own verification; confirm it\nwith attempt_verification.',
  operationId: 'PrepareEmailAddressVerification',
  request: {
    params: z.object({
      email_address_id: z
        .string()
        .openapi({
          param: {
            name: 'email_address_id',
            in: 'path',
            description: 'The ID of the email address to send the verification code to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: VerificationResponseResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    429: ClerkErrorsResponse,
    500: ClerkErrorsResponse,
  },
})

export const postEmailAddressesEmailAddressIdAttemptVerificationRoute = createRoute({
  method: 'post',
  path: '/email_addresses/{email_address_id}/attempt_verification',
  tags: ['Email Addresses'],
  summary: 'Verify a code sent to an email address',
  description:
    'Checks a one-time code against the verification identified by\nverification_id, and returns the verification with its updated status\n(`verified`, `unverified`, `expired`, or `failed`) and attempt count, so a\nbackend driving its own frontend can react on every attempt — an incorrect\nor expired code is reported through the status, not as an error. Resubmitting\na verification whose code was already accepted is rejected with a\n`verification_already_verified` error. If the code\nis correct and the email address is not already verified, it is also marked\nas verified as a side effect (just as it would be in a frontend verification\nflow); an already verified email address is left unchanged. It never creates\na session; to sign the user in afterwards, mint a sign-in token.',
  operationId: 'AttemptEmailAddressVerification',
  request: {
    params: z.object({
      email_address_id: z
        .string()
        .openapi({
          param: {
            name: 'email_address_id',
            in: 'path',
            description: 'The ID of the email address whose code is being verified',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              verification_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the verification to check, such as one returned by prepare_verification',
                }),
              code: z
                .string()
                .openapi({
                  description: 'The verification code that was sent to the email address',
                }),
            })
            .openapi({ required: ['verification_id', 'code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: VerificationResponseResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const putUsersUserIdEmailAddressRoute = createRoute({
  method: 'put',
  path: '/users/{user_id}/email_address',
  tags: ['Email Addresses'],
  summary: "Replace a user's email address",
  description:
    "Replaces all of the user's email addresses with a single primary email address.\nBy default the new email address is created verified, with the admin verification strategy.\nWhen `identification_status` is `reserved` it is created reserved instead: unverified but usable\nfor sign-in and locked so no other user can claim it. When it is `unverified` the address is\nneither usable for sign-in nor locked. Any existing email addresses are deleted.\nIf an existing email address is linked to a connected account, the request is rejected; remove\nthe connected account first.\n\n**Warning:** `identification_status: unverified` can lock the user out of their account. An\nunverified email address cannot be used to sign in, so if the user has no other verified or\nreserved identifier, deleting their existing email addresses leaves them unable to\nauthenticate — and unable to verify the new address, since that requires signing in. Recovery\nthen requires another admin API call.",
  operationId: 'ReplaceUserEmailAddress',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose email address to replace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              email_address: z
                .string()
                .openapi({
                  description:
                    'The new email address. Must adhere to the RFC 5322 specification for email address format.',
                }),
              identification_status: z
                .enum(['verified', 'reserved', 'unverified'])
                .default('verified')
                .exactOptional()
                .openapi({
                  description:
                    'Controls the status of the replacement email address. Defaults to `verified`. Set to\n`reserved` to create it reserved (unverified but usable for sign-in and locked so no\nother user can claim it), or to `unverified` to create it neither usable for sign-in\nnor locked.\n\n**Warning:** `unverified` can lock the user out of their account. An unverified email\naddress cannot be used to sign in, so if the user has no other verified or reserved\nidentifier, they will be unable to authenticate and unable to verify this address.\nPrefer `reserved` unless you specifically need the address left unclaimed — for\nexample so that another user can also hold it until one of them verifies it.',
                }),
              notify_primary_email_address_changed: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "If set to `true`, the user's previous primary email address is notified that the\nprimary email address has changed. No notification is sent when the replacement\nis the user's current primary email address. By default, no notification is sent.",
                }),
            })
            .openapi({ required: ['email_address'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: EmailAddressResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postPhoneNumbersRoute = createRoute({
  method: 'post',
  path: '/phone_numbers',
  tags: ['Phone Numbers'],
  summary: 'Create a phone number',
  description: 'Create a new phone number',
  operationId: 'CreatePhoneNumber',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_id: z.string().openapi({ description: 'The ID representing the user' }),
              phone_number: z
                .string()
                .openapi({
                  description:
                    'The new phone number. Must adhere to the E.164 standard for phone number format.',
                }),
              verified: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'When created, the phone number will be marked as verified.',
                }),
              primary: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Create this phone number as the primary phone number for the user. Default: false, unless it is the first phone number.',
                }),
              reserved_for_second_factor: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Create this phone number as reserved for multi-factor authentication. The phone number must also be verified.\nIf there are no other reserved second factors, the phone number will be set as the default second factor.',
                }),
            })
            .openapi({ required: ['user_id', 'phone_number'] }),
        },
      },
    },
  },
  responses: {
    200: PhoneNumberResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getPhoneNumbersPhoneNumberIdRoute = createRoute({
  method: 'get',
  path: '/phone_numbers/{phone_number_id}',
  tags: ['Phone Numbers'],
  summary: 'Retrieve a phone number',
  description: 'Returns the details of a phone number',
  operationId: 'GetPhoneNumber',
  request: {
    params: z.object({
      phone_number_id: z
        .string()
        .openapi({
          param: {
            name: 'phone_number_id',
            in: 'path',
            description: 'The ID of the phone number to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: PhoneNumberResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deletePhoneNumbersPhoneNumberIdRoute = createRoute({
  method: 'delete',
  path: '/phone_numbers/{phone_number_id}',
  tags: ['Phone Numbers'],
  summary: 'Delete a phone number',
  description: 'Delete the phone number with the given ID',
  operationId: 'DeletePhoneNumber',
  request: {
    params: z.object({
      phone_number_id: z
        .string()
        .openapi({
          param: {
            name: 'phone_number_id',
            in: 'path',
            description: 'The ID of the phone number to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchPhoneNumbersPhoneNumberIdRoute = createRoute({
  method: 'patch',
  path: '/phone_numbers/{phone_number_id}',
  tags: ['Phone Numbers'],
  summary: 'Update a phone number',
  description: 'Updates a phone number',
  operationId: 'UpdatePhoneNumber',
  request: {
    params: z.object({
      phone_number_id: z
        .string()
        .openapi({
          param: {
            name: 'phone_number_id',
            in: 'path',
            description: 'The ID of the phone number to update',
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
              verified: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The phone number will be marked as verified.' }),
              primary: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Set this phone number as the primary phone number for the user.',
                }),
              reserved_for_second_factor: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Set this phone number as reserved for multi-factor authentication.\nThe phone number must also be verified.\nIf there are no other reserved second factors, the phone number will be set as the default second factor.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: PhoneNumberResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postPhoneNumbersPhoneNumberIdPrepareVerificationRoute = createRoute({
  method: 'post',
  path: '/phone_numbers/{phone_number_id}/prepare_verification',
  tags: ['Phone Numbers'],
  summary: 'Send a verification code to a phone number',
  description:
    'Sends a one-time code to the given phone number so that a backend can\nverify the user controls it (for example, in a custom, backend-driven\nsign-in flow). The code is tracked on its own verification; confirm it\nwith attempt_verification.',
  operationId: 'PreparePhoneNumberVerification',
  request: {
    params: z.object({
      phone_number_id: z
        .string()
        .openapi({
          param: {
            name: 'phone_number_id',
            in: 'path',
            description: 'The ID of the phone number to send the verification code to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: VerificationResponseResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    429: ClerkErrorsResponse,
    500: ClerkErrorsResponse,
  },
})

export const postPhoneNumbersPhoneNumberIdAttemptVerificationRoute = createRoute({
  method: 'post',
  path: '/phone_numbers/{phone_number_id}/attempt_verification',
  tags: ['Phone Numbers'],
  summary: 'Verify a code sent to a phone number',
  description:
    'Checks a one-time code against the verification identified by\nverification_id, and returns the verification with its updated status\n(`verified`, `unverified`, `expired`, or `failed`) and attempt count, so a\nbackend driving its own frontend can react on every attempt — an incorrect\nor expired code is reported through the status, not as an error. Resubmitting\na verification whose code was already accepted is rejected with a\n`verification_already_verified` error. If the code for this verification\ncould not be sent (the SMS provider refused or failed the send after\nprepare_verification had returned), the attempt is rejected with a\n`verification_code_not_sent` error and no attempt is counted; call\nprepare_verification again to send a new code. If too many codes have been\nchecked for this phone number recently, the attempt is rejected with a\n`verification_code_too_many_attempts` error and no attempt is counted; the\nlimit is per phone number, so wait for the `Retry-After` period rather than\nsending a new code. If the code\nis correct and the phone number is not already verified, it is also marked\nas verified as a side effect (just as it would be in a frontend verification\nflow); an already verified phone number is left unchanged. It never creates\na session; to sign the user in afterwards, mint a sign-in token.',
  operationId: 'AttemptPhoneNumberVerification',
  request: {
    params: z.object({
      phone_number_id: z
        .string()
        .openapi({
          param: {
            name: 'phone_number_id',
            in: 'path',
            description: 'The ID of the phone number whose code is being verified',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              verification_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the verification to check, such as one returned by prepare_verification',
                }),
              code: z
                .string()
                .openapi({
                  description: 'The verification code that was sent to the phone number',
                }),
            })
            .openapi({ required: ['verification_id', 'code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: VerificationResponseResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: ClerkErrorsResponse,
    429: ClerkErrorsResponse,
    500: ClerkErrorsResponse,
  },
})

export const putUsersUserIdPhoneNumberRoute = createRoute({
  method: 'put',
  path: '/users/{user_id}/phone_number',
  tags: ['Phone Numbers'],
  summary: "Replace a user's phone number",
  description:
    "Replaces all of the user's phone numbers with a single primary phone number.\nBy default the new phone number is created verified, with the admin verification strategy.\nWhen `identification_status` is `reserved` it is created reserved instead: unverified but usable\nfor sign-in and locked so no other user can claim it. When it is `unverified` the phone number is\nneither usable for sign-in nor locked. The new phone number is never reserved for\nsecond factor. Any existing phone numbers are deleted; replacing a phone number that is reserved\nfor second factor disables the user's MFA.\n\n**Warning:** `identification_status: unverified` can lock the user out of their account. An\nunverified phone number cannot be used to sign in, so if the user has no other verified or\nreserved identifier, deleting their existing phone numbers leaves them unable to authenticate —\nand unable to verify the new number, since that requires signing in. Recovery then requires\nanother admin API call.",
  operationId: 'ReplaceUserPhoneNumber',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose phone number to replace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              phone_number: z
                .string()
                .openapi({
                  description:
                    'The new phone number. Must adhere to the E.164 standard for phone number format.',
                }),
              identification_status: z
                .enum(['verified', 'reserved', 'unverified'])
                .default('verified')
                .exactOptional()
                .openapi({
                  description:
                    'Controls the status of the replacement phone number. Defaults to `verified`. Set to\n`reserved` to create it reserved (unverified but usable for sign-in and locked so no\nother user can claim it), or to `unverified` to create it neither usable for sign-in\nnor locked.\n\n**Warning:** `unverified` can lock the user out of their account. An unverified phone\nnumber cannot be used to sign in, so if the user has no other verified or reserved\nidentifier, they will be unable to authenticate and unable to verify this number.\nPrefer `reserved` unless you specifically need the number left unclaimed — for\nexample so that another user can also hold it until one of them verifies it.',
                }),
            })
            .openapi({ required: ['phone_number'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PhoneNumberResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getSessionsRoute = createRoute({
  method: 'get',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'List all sessions',
  description:
    'Returns a list of sessions matching the provided criteria.\nThe sessions are returned sorted by creation date, with the newest sessions appearing first.\n\nNote: This endpoint does not return all sessions that have ever existed. Old and inactive sessions are periodically cleaned up and will not be included in the results.\n\n**Deprecation Notice (2024-01-01):** All parameters were initially considered optional, however\nmoving forward at least one of `client_id` or `user_id` parameters should be provided.',
  operationId: 'GetSessionList',
  request: {
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            required: false,
            description: 'List sessions for the given client',
            schema: { type: 'string' },
          },
        }),
      user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            required: false,
            description: 'List sessions for the given user',
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['abandoned', 'active', 'ended', 'expired', 'removed', 'replaced', 'revoked'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: 'Filter sessions by the provided status',
            schema: {
              type: 'string',
              enum: ['abandoned', 'active', 'ended', 'expired', 'removed', 'replaced', 'revoked'],
            },
          },
        }),
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: SessionListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postSessionsRoute = createRoute({
  method: 'post',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Create a new active session',
  description:
    'Create a new active session for the provided user ID.\n\n**This operation is intended only for use in testing, and is not available for production instances.** If you are looking to generate a user session from the backend,\nwe recommend using the [Sign-in Tokens](https://clerk.com/docs/reference/backend-api/tag/Sign-in-Tokens#operation/CreateSignInToken) resource instead.',
  operationId: 'createSession',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_id: z.string().openapi({ description: 'The ID representing the user' }),
              active_organization_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the organization to set as active for this session',
                }),
            })
            .openapi({ required: ['user_id'] }),
        },
      },
    },
  },
  responses: {
    200: SessionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getSessionsSessionIdRoute = createRoute({
  method: 'get',
  path: '/sessions/{session_id}',
  tags: ['Sessions'],
  summary: 'Retrieve a session',
  description: 'Retrieve the details of a session',
  operationId: 'GetSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            description: 'The ID of the session',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: SessionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postSessionsSessionIdRefreshRoute = createRoute({
  method: 'post',
  path: '/sessions/{session_id}/refresh',
  tags: ['Sessions'],
  summary: 'Refresh a session',
  description:
    'Refreshes a session by creating a new session token. A 401 is returned when there\nare validation errors, which signals the SDKs to fall back to the handshake flow.',
  operationId: 'RefreshSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            description: 'The ID of the session',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Refresh session parameters',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              expired_token: z
                .string()
                .openapi({
                  description:
                    'The JWT that is sent via the `__session` cookie from your frontend.\nNote: this JWT must be associated with the supplied session ID.',
                }),
              refresh_token: z
                .string()
                .openapi({
                  description:
                    "The refresh token from the `__refresh` cookie set via FAPI's handshake flow.",
                }),
              request_origin: z.string().openapi({ description: 'The origin of the request.' }),
              request_headers: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'The headers of the request.' }),
              format: z
                .enum(['token', 'cookie'])
                .nullable()
                .default('token')
                .exactOptional()
                .openapi({ description: 'The format of the response.' }),
              request_originating_ip: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The IP address of the request.' }),
            })
            .openapi({ required: ['expired_token', 'refresh_token', 'request_origin'] }),
        },
      },
    },
  },
  responses: {
    200: SessionRefreshResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
  },
})

export const getSessionsSessionIdReverificationsReverificationIdRoute = createRoute({
  method: 'get',
  path: '/sessions/{session_id}/reverifications/{reverification_id}',
  tags: ['Sessions'],
  summary: 'Retrieve a reverification',
  description:
    "Retrieve a reverification scoped to a session. A resource server can use this to validate a reverification id it received from its client: confirm it is real, scoped to the expected session, completed, and how fresh each factor is. Single-use / replay detection is the caller's responsibility (the id is stable, so the caller dedups consumed ids).\n",
  operationId: 'GetReverification',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            description: 'The ID of the session the reverification belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reverification_id: z
        .string()
        .openapi({
          param: {
            name: 'reverification_id',
            in: 'path',
            description: 'The ID of the reverification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: ReverificationResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postSessionsSessionIdRevokeRoute = createRoute({
  method: 'post',
  path: '/sessions/{session_id}/revoke',
  tags: ['Sessions'],
  summary: 'Revoke a session',
  description:
    'Sets the status of a session as "revoked", which is an unauthenticated state.\nIn multi-session mode, a revoked session will still be returned along with its client object, however the user will need to sign in again.',
  operationId: 'RevokeSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            description: 'The ID of the session',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: SessionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postSessionsSessionIdTokensRoute = createRoute({
  method: 'post',
  path: '/sessions/{session_id}/tokens',
  tags: ['Sessions'],
  summary: 'Create a session token',
  description: 'Creates a session JSON Web Token (JWT) based on a session.',
  operationId: 'CreateSessionToken',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            description: 'The ID of the session',
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
              expires_in_seconds: z
                .int()
                .min(30)
                .max(315360000)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Use this parameter to override the default session token lifetime.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ object: z.literal('token').exactOptional(), jwt: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postSessionsSessionIdTokensTemplateNameRoute = createRoute({
  method: 'post',
  path: '/sessions/{session_id}/tokens/{template_name}',
  tags: ['Sessions'],
  summary: 'Create a session token from a JWT template',
  description:
    'Creates a JSON Web Token (JWT) based on a session and a JWT Template name defined for your instance',
  operationId: 'CreateSessionTokenFromTemplate',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            description: 'The ID of the session',
            required: true,
            schema: { type: 'string' },
          },
        }),
      template_name: z
        .string()
        .openapi({
          param: {
            name: 'template_name',
            in: 'path',
            description:
              'The name of the JWT template defined in your instance (e.g. `custom_hasura`).',
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
              expires_in_seconds: z
                .int()
                .min(30)
                .max(315360000)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Use this parameter to override the JWT lifetime.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ object: z.literal('token').exactOptional(), jwt: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const getTemplatesTemplateTypeRoute = createRoute({
  method: 'get',
  path: '/templates/{template_type}',
  tags: ['Email & SMS Templates'],
  summary: 'List all templates',
  description: 'Returns a list of all templates.\nThe templates are returned sorted by position.',
  operationId: 'GetTemplateList',
  request: {
    params: z.object({
      template_type: z
        .enum(['email', 'sms'])
        .openapi({
          param: {
            name: 'template_type',
            in: 'path',
            description: 'The type of templates to list (email or SMS)',
            required: true,
            schema: { type: 'string', enum: ['email', 'sms'] },
          },
        }),
    }),
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: TemplateListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
  deprecated: true,
})

export const getTemplatesTemplateTypeSlugRoute = createRoute({
  method: 'get',
  path: '/templates/{template_type}/{slug}',
  tags: ['Email & SMS Templates'],
  summary: 'Retrieve a template',
  description: 'Returns the details of a template',
  operationId: 'GetTemplate',
  request: {
    params: z.object({
      template_type: z
        .enum(['email', 'sms'])
        .openapi({
          param: {
            name: 'template_type',
            in: 'path',
            description: 'The type of templates to retrieve (email or SMS)',
            required: true,
            schema: { type: 'string', enum: ['email', 'sms'] },
          },
        }),
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: 'The slug (i.e. machine-friendly name) of the template to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TemplateResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
  deprecated: true,
})

export const putTemplatesTemplateTypeSlugRoute = createRoute({
  method: 'put',
  path: '/templates/{template_type}/{slug}',
  tags: ['Email & SMS Templates'],
  summary: 'Update a template for a given type and slug',
  description: 'Updates the existing template of the given type and slug',
  operationId: 'UpsertTemplate',
  request: {
    params: z.object({
      template_type: z
        .enum(['email', 'sms'])
        .openapi({
          param: {
            name: 'template_type',
            in: 'path',
            description: 'The type of template to update',
            required: true,
            schema: { type: 'string', enum: ['email', 'sms'] },
          },
        }),
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: 'The slug of the template to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The user-friendly name of the template' }),
              subject: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The email subject.\nApplicable only to email templates.',
                }),
              markup: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The editor markup used to generate the body of the template',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({ description: 'The template body before variable interpolation' }),
              delivered_by_clerk: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether Clerk should deliver emails or SMS messages based on the current template',
                }),
              from_email_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The local part of the From email address that will be used for emails.\nFor example, in the address 'hello@example.com', the local part is 'hello'.\nApplicable only to email templates.",
                }),
              reply_to_email_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The local part of the Reply To email address that will be used for emails.\nFor example, in the address 'hello@example.com', the local part is 'hello'.\nApplicable only to email templates.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: TemplateResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    423: LockedResponse,
    429: TooManyRequestsResponse,
  },
  deprecated: true,
})

export const postTemplatesTemplateTypeSlugRevertRoute = createRoute({
  method: 'post',
  path: '/templates/{template_type}/{slug}/revert',
  tags: ['Email & SMS Templates'],
  summary: 'Revert a template',
  description: 'Reverts an updated template to its default state',
  operationId: 'RevertTemplate',
  request: {
    params: z.object({
      template_type: z
        .enum(['email', 'sms'])
        .openapi({
          param: {
            name: 'template_type',
            in: 'path',
            description: 'The type of template to revert',
            required: true,
            schema: { type: 'string', enum: ['email', 'sms'] },
          },
        }),
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: 'The slug of the template to revert',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TemplateResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
    404: ResourceNotFoundResponse,
  },
  deprecated: true,
})

export const postTemplatesTemplateTypeSlugPreviewRoute = createRoute({
  method: 'post',
  path: '/templates/{template_type}/{slug}/preview',
  tags: ['Email & SMS Templates'],
  summary: 'Preview changes to a template',
  description: 'Returns a preview of a template for a given template_type, slug and body',
  operationId: 'PreviewTemplate',
  request: {
    params: z.object({
      template_type: z
        .string()
        .openapi({
          param: {
            name: 'template_type',
            in: 'path',
            description: 'The type of template to preview',
            required: true,
            schema: { type: 'string' },
          },
        }),
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: 'The slug of the template to preview',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Required parameters',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              subject: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The email subject.\nApplicable only to email templates.',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({ description: 'The template body before variable interpolation' }),
              from_email_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The local part of the From email address that will be used for emails.\nFor example, in the address 'hello@example.com', the local part is 'hello'.\nApplicable only to email templates.",
                }),
              reply_to_email_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The local part of the Reply To email address that will be used for emails.\nFor example, in the address 'hello@example.com', the local part is 'hello'.\nApplicable only to email templates.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  deprecated: true,
})

export const postTemplatesTemplateTypeSlugToggleDeliveryRoute = createRoute({
  method: 'post',
  path: '/templates/{template_type}/{slug}/toggle_delivery',
  tags: ['Email & SMS Templates'],
  summary: 'Toggle the delivery by Clerk for a template of a given type and slug',
  description:
    'Toggles the delivery by Clerk for a template of a given type and slug.\nIf disabled, Clerk will not deliver the resulting email or SMS.\nThe app developer will need to listen to the `email.created` or `sms.created` webhooks in order to handle delivery themselves.',
  operationId: 'ToggleTemplateDelivery',
  request: {
    params: z.object({
      template_type: z
        .enum(['email', 'sms'])
        .openapi({
          param: {
            name: 'template_type',
            in: 'path',
            description: 'The type of template to toggle delivery for',
            required: true,
            schema: { type: 'string', enum: ['email', 'sms'] },
          },
        }),
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description: 'The slug of the template for which to toggle delivery',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              delivered_by_clerk: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether Clerk should deliver emails or SMS messages based on the current template',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: TemplateResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    423: LockedResponse,
    429: TooManyRequestsResponse,
  },
  deprecated: true,
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'List all users',
  description:
    'Returns a list of all users.\nThe users are returned sorted by creation date, with the newest users appearing first.\n\nTo walk more than a few pages, paginate with `starting_after` rather than `offset`.\nA cursor page costs the same no matter how far into the list it sits, while a large `offset`\nhas to walk and discard every row before it, so it gets progressively slower and eventually\ntimes out. Cursor pagination requires the `created_at` ordering, which is the default.',
  operationId: 'GetUserList',
  request: {
    query: z.object({
      email_address: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'email_address',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified email addresses.\nAccepts up to 100 email addresses.\nAny email addresses not found are ignored.',
            required: false,
          },
        }),
      phone_number: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'phone_number',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified phone numbers.\nAccepts up to 100 phone numbers.\nAny phone numbers not found are ignored.',
            required: false,
          },
        }),
      external_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'external_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified external IDs.\nFor each external ID, the `+` and `-` can be\nprepended to the ID, which denote whether the\nrespective external ID should be included or\nexcluded from the result set.\nAccepts up to 100 external IDs.\nAny external IDs not found are ignored.',
            required: false,
          },
        }),
      username: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified usernames.\nAccepts up to 100 usernames.\nAny usernames not found are ignored.',
            required: false,
          },
        }),
      web3_wallet: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'web3_wallet',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified web3 wallet addresses.\nAccepts up to 100 web3 wallet addresses.\nAny web3 wallet addresses not found are ignored.',
            required: false,
          },
        }),
      user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the user IDs specified.\nFor each user ID, the `+` and `-` can be\nprepended to the ID, which denote whether the\nrespective user ID should be included or\nexcluded from the result set.\nAccepts up to 100 user IDs.\nAny user IDs not found are ignored.',
            required: false,
          },
        }),
      organization_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users that have memberships to the\ngiven organizations.\nFor each organization ID, the `+` and `-` can be\nprepended to the ID, which denote whether the\nrespective organization should be included or\nexcluded from the result set.\nAccepts up to 100 organization IDs.',
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              "Returns users that match the given query.\nFor possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user IDs, first and last names.\nThe query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well.",
            schema: { type: 'string' },
            required: false,
          },
        }),
      email_address_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email_address_query',
            in: 'query',
            description:
              'Returns users with emails that match the given query, via case-insensitive partial match.\nFor example, `email_address_query=ello` will match a user with the email `HELLO@example.com`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      phone_number_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'phone_number_query',
            in: 'query',
            description:
              'Returns users with phone numbers that match the given query, via case-insensitive partial match.\nFor example, `phone_number_query=555` will match a user with the phone number `+1555xxxxxxx`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username_query',
            in: 'query',
            description:
              'Returns users with usernames that match the given query, via case-insensitive partial match.\nFor example, `username_query=CoolUser` will match a user with the username `SomeCoolUser`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name_query',
            in: 'query',
            description:
              'Returns users with names that match the given query, via case-insensitive partial match.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      banned: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'banned',
            in: 'query',
            required: false,
            description:
              'Returns users which are either banned (`banned=true`) or not banned (`banned=false`).',
            schema: { type: 'boolean' },
          },
        }),
      last_active_at_before: z
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
            name: 'last_active_at_before',
            in: 'query',
            description:
              'Returns users whose last session activity was before the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last session activity was before 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_active_at_after: z
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
            name: 'last_active_at_after',
            in: 'query',
            description:
              'Returns users whose last session activity was after the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last session activity was after 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_active_at_since: z
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
            name: 'last_active_at_since',
            in: 'query',
            deprecated: true,
            description:
              'Returns users that had session activity since the given date.\nExample: use 1700690400000 to retrieve users that had session activity from 2023-11-23 until the current day.\nDeprecated in favor of `last_active_at_after`.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      created_at_before: z
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
            name: 'created_at_before',
            in: 'query',
            description:
              'Returns users who have been created before the given date (with millisecond precision).\nExample: use 1730160000000 to retrieve users who have been created before 2024-10-29.',
            example: 1730160000000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      created_at_after: z
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
            name: 'created_at_after',
            in: 'query',
            description:
              'Returns users who have been created after the given date (with millisecond precision).\nExample: use 1730160000000 to retrieve users who have been created after 2024-10-29.',
            example: 1730160000000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_sign_in_at_before: z
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
            name: 'last_sign_in_at_before',
            in: 'query',
            description:
              'Returns users whose last sign-in was before the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last sign-in was before 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_sign_in_at_after: z
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
            name: 'last_sign_in_at_after',
            in: 'query',
            description:
              'Returns users whose last sign-in was after the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last sign-in was after 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            schema: { type: 'string' },
            description:
              'Returns users with external accounts for the specified OAuth provider.\nMust be used in combination with the `provider_user_id` parameter.\nFor example, use `provider=oauth_google&provider_user_id=12345` to retrieve a user with Google provider user ID 12345.',
            required: false,
          },
        }),
      provider_user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'provider_user_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified provider user IDs for a specific provider.\nMust be used in combination with the `provider` parameter.\nFor example, use `provider=oauth_google&provider_user_id=12345` to retrieve a user with Google provider user ID 12345.\nAccepts up to 100 provider user IDs.\nAny provider user IDs not found are ignored.',
            required: false,
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'starting_after',
            in: 'query',
            description:
              'A cursor for pagination: the `id` of the last user on the previous page. Returns the users that follow it.\n\n**Requires ordering by `created_at`** — that is, `order_by` omitted, or set to `created_at`, `+created_at`\nor `-created_at`. Any other `order_by` value is rejected with a 422: the other orderings sort by a value\nthat is neither unique per user nor immutable, so a cursor over them would skip or repeat users.\n\nCannot be combined with a non-zero `offset`, which is also a 422. Keep every other parameter identical\nacross requests, and stop when a page returns fewer than `limit` users.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            description:
              "Allows to return users in a particular order.\nAt the moment, you can order the returned users by their `created_at`,`updated_at`,`email_address`,`web3wallet`,`first_name`,`last_name`,`phone_number`,`username`,`last_active_at`,`last_sign_in_at`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want users to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied. We only support one `order_by` parameter, and if multiple `order_by` parameters are provided, we will only keep the first one. For example,\nif you pass `order_by=username&order_by=created_at`, we will consider only the first `order_by` parameter, which is `username`. The `created_at` parameter will be ignored in this case.\nOnly the `created_at` orderings can be combined with `starting_after` cursor pagination; see that parameter.",
            schema: { type: 'string', default: '-created_at' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: UserListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create a new user',
  description:
    'Creates a new user. Your user management settings determine how you should setup your user model.\n\nBy default, any email address and phone number created using this method is marked as verified. Use the `email_address_identification_status` and `phone_number_identification_status` arrays to instead create some or all of them as reserved (unverified but usable for sign-in and locked so no other user can claim them).\n\nNote: If you are performing a migration, check out our guide on [zero downtime migrations](https://clerk.com/docs/deployments/migrate-overview).\n\nThe following rate limit rules apply to this endpoint: 1000 requests per 10 seconds for production instances and 100 requests per 10 seconds for development instances',
  operationId: 'CreateUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              external_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user as used in your external systems or your previous authentication solution.\nMust be unique across your instance.',
                }),
              first_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The first name to assign to the user' }),
              last_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The last name to assign to the user' }),
              locale: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The locale to assign to the user (e.g., "en-US", "fr-FR")',
                }),
              timezone: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The IANA timezone to assign to the user (e.g., "America/New_York", "Europe/Paris"). Set to null to clear it and allow automatic capture on a later trusted sign-in.',
                }),
              email_address: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Email addresses to add to the user.\nMust be unique across your instance.\nThe first email address will be set as the user's primary email address.\nCreated verified by default; see `email_address_identification_status` to create them reserved.",
                }),
              email_address_identification_status: z
                .array(z.enum(['verified', 'reserved']))
                .exactOptional()
                .openapi({
                  description:
                    'Controls the status each email address is created with. Runs parallel to\n`email_address`: when provided, it must contain exactly one item per email\naddress, applied by position. When omitted or empty, every email address is\ncreated `verified`. Set an item to `reserved` to create the corresponding\nemail address reserved instead (unverified but usable for sign-in and locked\nso no other user can claim it).',
                }),
              phone_number: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Phone numbers to add to the user.\nMust be unique across your instance.\nThe first phone number will be set as the user's primary phone number.\nCreated verified by default; see `phone_number_identification_status` to create them reserved.",
                }),
              phone_number_identification_status: z
                .array(z.enum(['verified', 'reserved']))
                .exactOptional()
                .openapi({
                  description:
                    'Controls the status each phone number is created with. Runs parallel to\n`phone_number`: when provided, it must contain exactly one item per phone\nnumber, applied by position. When omitted or empty, every phone number is\ncreated `verified`. Set an item to `reserved` to create the corresponding\nphone number reserved instead (unverified but usable for sign-in and locked\nso no other user can claim it).',
                }),
              web3_wallet: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Web3 wallets to add to the user.\nMust be unique across your instance.\nThe first wallet will be set as the user's primary wallet.",
                }),
              username: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The username to give to the user.\nIt must be unique across your instance.',
                }),
              password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The plaintext password to give the user.\nMust be at least 8 characters long, and cannot be in any list of hacked passwords.',
                }),
              password_digest: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'In case you already have the password digests and not the passwords, you can use them for the newly created user via this property.\nThe digests should be generated with one of the supported algorithms.\nThe hashing algorithm can be specified using the `password_hasher` property.',
                }),
              password_hasher: PasswordHasherSchema.exactOptional(),
              skip_password_checks: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true` all password checks are skipped.\nIt is recommended to use this method only when migrating plaintext passwords to Clerk.\nUpon migration the user base should be prompted to pick stronger password.',
                }),
              skip_password_requirement: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "When set to `true`, `password` is not required anymore when creating the user and can be omitted.\nThis is useful when you are trying to create a user that doesn't have a password, in an instance that is using passwords.\nPlease note that you cannot use this flag if password is the only way for a user to sign into your instance.",
                }),
              skip_restriction_checks: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "When set to `true`, the instance's restrictions are not applied to this user.\nThose settings are the allowlist, the blocklist, blocked disposable email domains and blocked email subaddresses, and they normally reject a matching identifier here just as they do at sign-up.\nUse this when your backend is creating a user it already trusts, such as during a migration or from an admin tool.",
                }),
              totp_secret: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'In case TOTP is configured on the instance, you can provide the secret to enable it on the newly created user without the need to reset it.\nPlease note that currently the supported options are:\n* Period: 30 seconds\n* Code length: 6 digits\n* Algorithm: SHA1',
                }),
              backup_codes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'If Backup Codes are configured on the instance, you can provide them to enable it on the newly created user without the need to reset them.\nYou must provide the backup codes in plain format or the corresponding bcrypt digest.',
                }),
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that is visible to both your Frontend and Backend APIs',
                }),
              private_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that is only visible to your Backend API',
                }),
              unsafe_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.\nNote: Since this data can be modified from the frontend, it is not guaranteed to be safe.',
                }),
              delete_self_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'If enabled, user can delete themselves via FAPI.\n' }),
              legal_accepted_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A custom timestamp denoting _when_ the user accepted legal requirements, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`).',
                }),
              skip_legal_checks: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true` all legal checks are skipped.\nIt is not recommended to skip legal checks unless you are migrating a user to Clerk.',
                }),
              skip_user_requirement: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, identification types are not enforced.\nAt least one identification type must be enabled and provided on your instance (email, phone, web3 wallet, or username).\nUsers created without required identification types cannot use those authentication strategies\nIt is not recommended to use this flag unless you need to allow Clerk UI components to prompt for required fields while BAPI creates users with minimal data, or for migration a user to Clerk.',
                }),
              create_organization_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'If enabled, user can create organizations via FAPI.\n' }),
              create_organizations_limit: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of organizations the user can create. 0 means unlimited.\n',
                }),
              created_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A custom date/time denoting _when_ the user signed up to the application, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`).',
                }),
              bypass_client_trust: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, the user will bypass Device Trust checks during sign-in.',
                }),
              banned: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, the user is created already banned and cannot sign in.\nRequires the same plan support as the ban user endpoint.',
                }),
              locked: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, the user is created already locked.\nRequires the user lockout feature to be enabled on the instance.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
    403: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getUsersCountRoute = createRoute({
  method: 'get',
  path: '/users/count',
  tags: ['Users'],
  summary: 'Count users',
  description: 'Returns a total count of all users that match the given filtering criteria.',
  operationId: 'GetUsersCount',
  request: {
    query: z.object({
      email_address: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'email_address',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the specified email addresses.\nAccepts up to 100 email addresses.\nAny email addresses not found are ignored.',
            required: false,
          },
        }),
      phone_number: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'phone_number',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the specified phone numbers.\nAccepts up to 100 phone numbers.\nAny phone numbers not found are ignored.',
            required: false,
          },
        }),
      external_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'external_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the specified external IDs.\nAccepts up to 100 external IDs.\nAny external IDs not found are ignored.',
            required: false,
          },
        }),
      username: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the specified usernames.\nAccepts up to 100 usernames.\nAny usernames not found are ignored.',
            required: false,
          },
        }),
      web3_wallet: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'web3_wallet',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the specified web3 wallet addresses.\nAccepts up to 100 web3 wallet addresses.\nAny web3 wallet addresses not found are ignored.',
            required: false,
          },
        }),
      user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the user IDs specified.\nAccepts up to 100 user IDs.\nAny user IDs not found are ignored.',
            required: false,
          },
        }),
      organization_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users that have memberships to the given organizations. For each organization ID, the `+` and `-`\ncan be prepended to the ID, which denote whether the respective organization should be included or\nexcluded from the result set. Accepts up to 100 organization IDs.',
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              "Counts users that match the given query.\nFor possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user IDs, first and last names.\nThe query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well.",
            schema: { type: 'string' },
            required: false,
          },
        }),
      email_address_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email_address_query',
            in: 'query',
            description:
              'Counts users with emails that match the given query, via case-insensitive partial match.\nFor example, `email_address_query=ello` will match a user with the email `HELLO@example.com`,\nand will be included in the resulting count.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      phone_number_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'phone_number_query',
            in: 'query',
            description:
              'Counts users with phone numbers that match the given query, via case-insensitive partial match.\nFor example, `phone_number_query=555` will match a user with the phone number `+1555xxxxxxx`,\nand will be included in the resulting count.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username_query',
            in: 'query',
            description:
              'Counts users with usernames that match the given query, via case-insensitive partial match.\nFor example, `username_query=CoolUser` will match a user with the username `SomeCoolUser`,\nand will be included in the resulting count.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name_query',
            in: 'query',
            description:
              'Returns users with names that match the given query, via case-insensitive partial match.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      banned: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'banned',
            in: 'query',
            required: false,
            description:
              'Counts users which are either banned (`banned=true`) or not banned (`banned=false`).',
            schema: { type: 'boolean' },
          },
        }),
      last_active_at_before: z
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
            name: 'last_active_at_before',
            in: 'query',
            description:
              'Returns users whose last session activity was before the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last session activity was before 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_active_at_after: z
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
            name: 'last_active_at_after',
            in: 'query',
            description:
              'Returns users whose last session activity was after the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last session activity was after 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_active_at_since: z
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
            name: 'last_active_at_since',
            in: 'query',
            deprecated: true,
            description:
              'Returns users that had session activity since the given date.\nExample: use 1700690400000 to retrieve users that had session activity from 2023-11-23 until the current day.\nDeprecated in favor of `last_active_at_after`.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      created_at_before: z
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
            name: 'created_at_before',
            in: 'query',
            description:
              'Returns users who have been created before the given date (with millisecond precision).\nExample: use 1730160000000 to retrieve users who have been created before 2024-10-29.',
            example: 1730160000000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      created_at_after: z
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
            name: 'created_at_after',
            in: 'query',
            description:
              'Returns users who have been created after the given date (with millisecond precision).\nExample: use 1730160000000 to retrieve users who have been created after 2024-10-29.',
            example: 1730160000000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_sign_in_at_before: z
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
            name: 'last_sign_in_at_before',
            in: 'query',
            description:
              'Counts users whose last sign-in was before the given date (with millisecond precision).\nExample: use 1700690400000 to count users whose last sign-in was before 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_sign_in_at_after: z
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
            name: 'last_sign_in_at_after',
            in: 'query',
            description:
              'Counts users whose last sign-in was after the given date (with millisecond precision).\nExample: use 1700690400000 to count users whose last sign-in was after 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            schema: { type: 'string' },
            description:
              'Counts users with external accounts for the specified OAuth provider.\nMust be used in combination with the `provider_user_id` parameter.\nFor example, use `provider=oauth_google&provider_user_id=12345` to count users with Google provider user ID 12345.\nAccepts up to 100 providers.',
            required: false,
          },
        }),
      provider_user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'provider_user_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Counts users with the specified provider user IDs for a specific provider.\nMust be used in combination with the `provider` parameter.\nFor example, use `provider=oauth_google&provider_user_id=12345` to count users with Google provider user ID 12345.\nAccepts up to 100 provider user IDs.\nAny provider user IDs not found are ignored.',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: UserCountResponse, 422: UnprocessableEntityResponse },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}',
  tags: ['Users'],
  summary: 'Retrieve a user',
  description: 'Retrieve the details of a user',
  operationId: 'GetUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}',
  tags: ['Users'],
  summary: 'Delete a user',
  description: 'Delete the specified user',
  operationId: 'DeleteUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/users/{user_id}',
  tags: ['Users'],
  summary: 'Update a user',
  description:
    "Update a user's attributes.\n\nYou can set the user's primary contact identifiers (email address and phone numbers) by updating the `primary_email_address_id` and `primary_phone_number_id` attributes respectively.\nBoth IDs should correspond to verified identifications that belong to the user.\n\nYou can remove a user's username by setting the username attribute to null or the blank string \"\".\nThis is a destructive action; the identification will be deleted forever.\nUsernames can be removed only if they are optional in your instance settings and there's at least one other identifier which can be used for authentication.\n\nThis endpoint allows changing a user's password. When passing the `password` parameter directly you have two further options.\nYou can ignore the password policy checks for your instance by setting the `skip_password_checks` parameter to `true`.\nYou can also choose to sign the user out of all their active sessions on any device once the password is updated. Just set `sign_out_of_other_sessions` to `true`.",
  operationId: 'UpdateUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              external_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user as used in your external systems or your previous authentication solution.\nMust be unique across your instance.',
                }),
              first_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The first name to assign to the user' }),
              last_name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The last name to assign to the user' }),
              locale: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The locale to assign to the user (e.g., "en-US", "fr-FR")',
                }),
              timezone: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The IANA timezone to assign to the user (e.g., "America/New_York", "Europe/Paris"). Set to null to clear it and allow automatic capture on a later trusted sign-in.',
                }),
              primary_email_address_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the email address to set as primary.\nIt must be verified, and present on the current user.',
                }),
              notify_primary_email_address_changed: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, the user will be notified that their primary email address has changed.\nBy default, no notification is sent.',
                }),
              primary_phone_number_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the phone number to set as primary.\nIt must be verified, and present on the current user.',
                }),
              primary_web3_wallet_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the web3 wallets to set as primary.\nIt must be verified, and present on the current user.',
                }),
              username: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The username to give to the user.\nIt must be unique across your instance.',
                }),
              profile_image_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "The ID of the image to set as the user's profile image" }),
              password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The plaintext password to give the user.\nMust be at least 8 characters long, and cannot be in any list of hacked passwords.',
                }),
              password_digest: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In case you already have the password digests and not the passwords, you can use them for the newly created user via this property.\nThe digests should be generated with one of the supported algorithms.\nThe hashing algorithm can be specified using the `password_hasher` property.',
                }),
              password_hasher: PasswordHasherSchema.exactOptional(),
              skip_password_checks: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Set it to `true` if you're updating the user's password and want to skip any password policy settings check. This parameter can only be used when providing a `password`.",
                }),
              sign_out_of_other_sessions: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Set to `true` to sign out the user from all their active sessions once their password is updated. This parameter can only be used when providing a `password`.',
                }),
              totp_secret: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'In case TOTP is configured on the instance, you can provide the secret to enable it on the specific user without the need to reset it.\nPlease note that currently the supported options are:\n* Period: 30 seconds\n* Code length: 6 digits\n* Algorithm: SHA1',
                }),
              backup_codes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'If Backup Codes are configured on the instance, you can provide them to enable it on the specific user without the need to reset them.\nYou must provide the backup codes in plain format or the corresponding bcrypt digest.',
                }),
              public_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that is visible to both your Frontend and Backend APIs.\nDeprecated: As of API version 2026-05-12, this field is rejected on `PATCH /v1/users/{user_id}`. Use `PATCH /v1/users/{user_id}/metadata` to merge updates into existing metadata, or `PUT /v1/users/{user_id}/metadata` to replace a metadata field entirely.',
                  deprecated: true,
                }),
              private_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that is only visible to your Backend API.\nDeprecated: As of API version 2026-05-12, this field is rejected on `PATCH /v1/users/{user_id}`. Use `PATCH /v1/users/{user_id}/metadata` to merge updates into existing metadata, or `PUT /v1/users/{user_id}/metadata` to replace a metadata field entirely.',
                  deprecated: true,
                }),
              unsafe_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.\nNote: Since this data can be modified from the frontend, it is not guaranteed to be safe.\nDeprecated: As of API version 2026-05-12, this field is rejected on `PATCH /v1/users/{user_id}`. Use `PATCH /v1/users/{user_id}/metadata` to merge updates into existing metadata, or `PUT /v1/users/{user_id}/metadata` to replace a metadata field entirely.',
                  deprecated: true,
                }),
              delete_self_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'If true, the user can delete themselves with the Frontend API.',
                }),
              create_organization_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'If true, the user can create organizations with the Frontend API.',
                }),
              legal_accepted_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A custom timestamp denoting _when_ the user accepted legal requirements, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`).',
                }),
              skip_legal_checks: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true` all legal checks are skipped.\nIt is not recommended to skip legal checks unless you are migrating a user to Clerk.',
                }),
              create_organizations_limit: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of organizations the user can create. 0 means unlimited.',
                }),
              created_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A custom date/time denoting _when_ the user signed up to the application, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`).',
                }),
              bypass_client_trust: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, the user will bypass Device Trust checks during sign-in.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postUsersUserIdBanRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/ban',
  tags: ['Users'],
  summary: 'Ban a user',
  description:
    'Marks the given user as banned, which means that all their sessions are revoked and they are not allowed to sign in again.',
  operationId: 'BanUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to ban',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: UserResponse, 402: PaymentRequiredResponse },
})

export const postUsersUserIdUnbanRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/unban',
  tags: ['Users'],
  summary: 'Unban a user',
  description: 'Removes the ban mark from the given user.',
  operationId: 'UnbanUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to unban',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: UserResponse, 402: PaymentRequiredResponse },
})

export const postUsersBanRoute = createRoute({
  method: 'post',
  path: '/users/ban',
  tags: ['Users'],
  summary: 'Ban multiple users',
  description:
    'Marks multiple users as banned, which means that all their sessions are revoked and they are not allowed to sign in again.',
  operationId: 'UsersBan',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_ids: z
                .array(z.string())
                .min(1)
                .max(50)
                .openapi({ description: 'Array of user IDs to ban' }),
            })
            .openapi({ required: ['user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: UserListResponse, 400: ClerkErrorsResponse, 402: PaymentRequiredResponse },
})

export const postUsersUnbanRoute = createRoute({
  method: 'post',
  path: '/users/unban',
  tags: ['Users'],
  summary: 'Unban multiple users',
  description: 'Removes the ban mark from multiple users.',
  operationId: 'UsersUnban',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_ids: z
                .array(z.string())
                .min(1)
                .max(50)
                .openapi({ description: 'Array of user IDs to unban' }),
            })
            .openapi({ required: ['user_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: UserListResponse, 400: ClerkErrorsResponse, 402: PaymentRequiredResponse },
})

export const postUsersUserIdLockRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/lock',
  tags: ['Users'],
  summary: 'Lock a user',
  description:
    "Marks the given user as locked, which means they are not allowed to sign in again until the lock expires.\nLock duration can be configured in the instance's restrictions settings.",
  operationId: 'LockUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to lock',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: UserResponse, 403: AuthorizationInvalidResponse },
})

export const postUsersUserIdUnlockRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/unlock',
  tags: ['Users'],
  summary: 'Unlock a user',
  description: 'Removes the lock from the given user.',
  operationId: 'UnlockUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to unlock',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: UserResponse, 403: AuthorizationInvalidResponse },
})

export const postUsersUserIdMergeRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/merge',
  tags: ['Users'],
  summary: 'Merge another user into this user',
  description:
    "Moves the identifications, connected accounts, passkeys, TOTP, backup codes, organization\nmemberships, membership requests, suggestions and metadata of the user in `from_user_id` onto the\nuser in the path, then deletes the `from_user_id` user.\nWhere both users have a value, the user in the path keeps its own. First and last name, profile\nimage, `external_id`, and the password are taken from the `from_user_id` user only where the user in\nthe path has none, so if it has no password, the `from_user_id` user's password signs in to it\nafterwards. When both users have the same\nidentifier, the verified copy is kept. The `from_user_id` user's sessions are revoked.\nWith `dry_run`, the merge is computed and returned but nothing is changed.\n\nA merge cannot be undone. The response's `deleted_user` is the `from_user_id` user as it was before\nthe merge, so store it if you may need it. It does not include passwords, TOTP secrets, backup codes,\npasskeys or connected-account tokens, which cannot be restored. Use `dry_run` to preview a merge.\n\nThe merge sends a `user.merged` webhook alongside `user.updated` and `user.deleted`. Webhooks are not\ndelivered in order, so `user.updated` (the user now owning the `from_user_id` user's emails) can arrive\nbefore `user.deleted`; handle `user.merged` by moving the `from_user_id` user's data to the user rather\nthan relying on that order. Moved organization memberships keep their ID, so their\n`organizationMembership.updated` webhook carries the same membership ID with a different user.\n\nSome users cannot be merged. The request then fails with a 409 `user_merge_not_allowed` error whose\n`meta.reasons` lists every reason that applies:\n- `user_banned`, `from_user_banned`: either user is banned.\n- `user_directory_managed`, `from_user_directory_managed`: either user is linked to a SCIM directory.\n- `from_user_enterprise_account`: the `from_user_id` user has a SAML or enterprise SSO account.\n- `from_user_billing_payer`: the `from_user_id` user is a billing payer.\n- `from_user_student_pack`: the `from_user_id` user has claimed a student pack.\n- `too_many_resources`: the users have too many identifications and organization memberships, requests\n  and suggestions combined to merge in one request. This reason is returned on its own.\n- `same_user`: `from_user_id` is the user in the path.",
  operationId: 'MergeUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user that remains after the merge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              from_user_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the user to merge into the user in the path. This user is deleted.',
                }),
              dry_run: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Return the merged user without changing anything.' }),
            })
            .openapi({ required: ['from_user_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .strictObject({ user: UserSchema, deleted_user: UserSchema })
            .openapi({ required: ['user', 'deleted_user'] }),
        },
      },
    },
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postUsersUserIdProfileImageRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/profile_image',
  tags: ['Users'],
  summary: 'Set user profile image',
  description: "Update a user's profile image",
  operationId: 'SetUserProfileImage',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to update the profile image for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: ClerkErrorsResponse,
    404: ClerkErrorsResponse,
  },
})

export const deleteUsersUserIdProfileImageRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/profile_image',
  tags: ['Users'],
  summary: 'Delete user profile image',
  description: "Delete a user's profile image",
  operationId: 'DeleteUserProfileImage',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user to delete the profile image for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: UserResponse, 404: ClerkErrorsResponse },
})

export const putUsersUserIdMetadataRoute = createRoute({
  method: 'put',
  path: '/users/{user_id}/metadata',
  tags: ['Users'],
  summary: "Replace a user's metadata",
  description:
    "Replace a user's metadata attributes with the provided values.\n\nUnlike `PATCH /v1/users/{user_id}/metadata` (merge semantics), this endpoint\nreplaces the supplied metadata fields entirely — the prior contents of each\nsupplied field are discarded. Fields omitted from the request body are\nleft unchanged.\n\nPrefer the `PATCH` endpoint for partial updates. Use `PUT` only when you\nexplicitly intend to overwrite a metadata field wholesale.",
  operationId: 'ReplaceUserMetadata',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose metadata will be replaced',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that is visible to both your frontend and backend.\nThe existing value will be replaced entirely with the new object.',
                }),
              private_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user that is only visible to your backend.\nThe existing value will be replaced entirely with the new object.',
                }),
              unsafe_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.\nThe existing value will be replaced entirely with the new object.\n\nNote: Since this data can be modified from the frontend, it is not guaranteed to be safe.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchUsersUserIdMetadataRoute = createRoute({
  method: 'patch',
  path: '/users/{user_id}/metadata',
  tags: ['Users'],
  summary: "Merge and update a user's metadata",
  description:
    "Update a user's metadata attributes by merging existing values with the provided parameters.\n\nThis endpoint behaves differently than the *Update a user* endpoint.\nMetadata values will not be replaced entirely.\nInstead, a deep merge will be performed.\nDeep means that any nested JSON objects will be merged as well.\n\nYou can remove metadata keys at any level by setting their value to `null`.",
  operationId: 'UpdateUserMetadata',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose metadata will be updated and merged',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that is visible to both your frontend and backend.\nThe new object will be merged with the existing value.',
                }),
              private_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user that is only visible to your backend.\nThe new object will be merged with the existing value.',
                }),
              unsafe_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.\nThe new object will be merged with the existing value.\n\nNote: Since this data can be modified from the frontend, it is not guaranteed to be safe.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getUsersUserIdBillingSubscriptionRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/billing/subscription',
  tags: ['Users', 'Billing'],
  summary: "Retrieve a user's billing subscription",
  description:
    'Retrieves the billing subscription for the specified user.\nThis includes subscription details, active plans, billing information, and payment status.\nThe subscription contains subscription items which represent the individual plans the user is subscribed to.',
  operationId: 'GetUserBillingSubscription',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the user whose subscription to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: CommerceSubscriptionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const getUsersUserIdBillingCreditsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/billing/credits',
  tags: ['Users', 'Billing'],
  summary: "Retrieve a user's credit balance",
  description:
    'Retrieves the current credit balance for the specified user.\nCredits can be applied during checkout to reduce the charge or automatically applied to upcoming recurring charges',
  operationId: 'GetUserBillingCreditBalance',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the user whose credit balance to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: CommerceCreditBalanceResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const postUsersUserIdBillingCreditsRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/billing/credits',
  tags: ['Users', 'Billing'],
  summary: "Adjust a user's credit balance",
  description:
    'Increases or decreases the credit balance for the specified user.\nEach adjustment is recorded as a ledger entry. The idempotency_key parameter\nensures that duplicate requests are safely handled.',
  operationId: 'AdjustUserBillingCreditBalance',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the user whose credit balance to adjust',
          },
        }),
    }),
    body: {
      description: 'Parameters for the credit balance adjustment',
      content: { 'application/json': { schema: AdjustCreditBalanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: CommerceCreditLedgerResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const getUsersUserIdOauthAccessTokensProviderRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/oauth_access_tokens/{provider}',
  tags: ['Users'],
  summary: 'Retrieve the OAuth access token of a user',
  description:
    'Fetch the corresponding OAuth access token for a user that has previously authenticated with a particular OAuth provider.\nFor OAuth 2.0, if the access token has expired and we have a corresponding refresh token, the access token will be refreshed transparently the new one will be returned.',
  operationId: 'GetOAuthAccessToken',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user for which to retrieve the OAuth access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            description: 'The ID of the OAuth provider (e.g. `oauth_google`)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OAuthAccessTokenResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getUsersUserIdOrganizationMembershipsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/organization_memberships',
  tags: ['Users'],
  summary: 'Retrieve all memberships for a user',
  description: "Retrieve a paginated list of the user's organization memberships",
  operationId: 'UsersGetOrganizationMemberships',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose organization memberships we want to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ limit: LimitParameterParamsSchema, offset: OffsetParameterParamsSchema }),
  },
  responses: { 200: OrganizationMembershipsResponse, 403: ClerkErrorsResponse },
})

export const getUsersUserIdOrganizationInvitationsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/organization_invitations',
  tags: ['Users'],
  summary: 'Retrieve all invitations for a user',
  description: "Retrieve a paginated list of the user's organization invitations",
  operationId: 'UsersGetOrganizationInvitations',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose organization invitations we want to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      status: z
        .enum(['pending', 'accepted', 'revoked', 'expired'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter organization invitations based on their status',
            required: false,
            schema: { type: 'string', enum: ['pending', 'accepted', 'revoked', 'expired'] },
          },
        }),
    }),
  },
  responses: {
    200: OrganizationInvitationsWithPublicOrganizationDataResponse,
    400: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postUsersUserIdRemovePasswordRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/remove_password',
  tags: ['Users'],
  summary: "Remove a user's password",
  description:
    "Removes the password credential from the given user. This is a privileged operation and does not require the user's current password. Password removal is allowed even when the user has no other sign-in method configured.\n\nIf the user does not have a password, the user is returned unchanged and no password-deletion or user-update event is emitted. By default, existing sessions remain active. Set `sign_out_of_other_sessions` to `true` to revoke sessions active when the request is processed.",
  operationId: 'RemoveUserPassword',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose password to remove',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              sign_out_of_other_sessions: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Set to `true` to revoke all of the user's active sessions after removing the password.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: UserResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const postUsersUserIdVerifyPasswordRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/verify_password',
  tags: ['Users'],
  summary: 'Verify the password of a user',
  description:
    "Check that the user's password matches the supplied input.\nUseful for custom auth flows and re-verification.",
  operationId: 'VerifyPassword',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user for whom to verify the password',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              password: z.string().openapi({ description: 'The user password to verify' }),
            })
            .openapi({ required: ['password'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The provided password was correct.',
      content: {
        'application/json': {
          schema: z
            .strictObject({ verified: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'The user does not have a password set.' },
    404: { description: 'The user does not exist.' },
    422: { description: 'The provided password was incorrect.' },
    500: ClerkErrorsResponse,
  },
})

export const postUsersUserIdVerifyTotpRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/verify_totp',
  tags: ['Users'],
  summary: 'Verify a TOTP or backup code for a user',
  description:
    'Verify that the provided TOTP or backup code is valid for the user.\nVerifying a backup code will result it in being consumed (i.e. it will\nbecome invalid).\nUseful for custom auth flows and re-verification.',
  operationId: 'VerifyTOTP',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user for whom to verify the TOTP',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              code: z.string().openapi({ description: 'The TOTP or backup code to verify' }),
            })
            .openapi({ required: ['code'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The provided TOTP or backup code was correct.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              verified: z.boolean().exactOptional(),
              code_type: z.enum(['totp', 'backup_code']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'The user does not have TOTP configured for their account.' },
    404: { description: 'The user does not exist.' },
    422: { description: 'The provided TOTP or backup code was incorrect.' },
    500: ClerkErrorsResponse,
  },
})

export const deleteUsersUserIdMfaRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/mfa',
  tags: ['Users'],
  summary: "Disable a user's MFA methods",
  description:
    "Disable all of a user's MFA methods (e.g. OTP sent via SMS, TOTP on their authenticator app) at once.",
  operationId: 'DisableMFA',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose MFA methods are to be disabled',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.strictObject({ user_id: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const deleteUsersUserIdBackupCodeRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/backup_code',
  tags: ['Users'],
  summary: "Disable all user's Backup codes",
  description: "Disable all of a user's backup codes.",
  operationId: 'DeleteBackupCode',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose backup codes are to be deleted.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.strictObject({ user_id: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const deleteUsersUserIdPasskeysPasskeyIdentificationIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/passkeys/{passkey_identification_id}',
  tags: ['Users'],
  summary: 'Delete a user passkey',
  description:
    'Delete the passkey identification for a given user. The user is notified through email or SMS unless the passkey registration was never completed.',
  operationId: 'UserPasskeyDelete',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user that owns the passkey identity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      passkey_identification_id: z
        .string()
        .openapi({
          param: {
            name: 'passkey_identification_id',
            in: 'path',
            description: 'The ID of the passkey identity to be deleted',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const getUsersUserIdTrustedDevicesRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/trusted_devices',
  tags: ['Users'],
  summary: "List a user's trusted devices",
  description: 'Returns the active trusted devices enrolled by the user.',
  operationId: 'ListUserTrustedDevices',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose trusted devices are returned',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TrustedDeviceListResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
  deprecated: true,
})

export const deleteUsersUserIdTrustedDevicesTrustedDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/trusted_devices/{trusted_device_id}',
  tags: ['Users'],
  summary: "Revoke a user's trusted device",
  description: 'Revokes an active trusted device enrolled by the user.',
  operationId: 'RevokeUserTrustedDevice',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user that owns the trusted device',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trusted_device_id: z
        .string()
        .openapi({
          param: {
            name: 'trusted_device_id',
            in: 'path',
            description: 'The ID of the trusted device to revoke',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TrustedDeviceResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
  deprecated: true,
})

export const deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/web3_wallets/{web3_wallet_identification_id}',
  tags: ['Users'],
  summary: 'Delete a user web3 wallet',
  description: 'Delete the web3 wallet identification for a given user.',
  operationId: 'UserWeb3WalletDelete',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user that owns the web3 wallet',
            required: true,
            schema: { type: 'string' },
          },
        }),
      web3_wallet_identification_id: z
        .string()
        .openapi({
          param: {
            name: 'web3_wallet_identification_id',
            in: 'path',
            description: 'The ID of the web3 wallet identity to be deleted',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const deleteUsersUserIdTotpRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/totp',
  tags: ['Users'],
  summary: "Delete all the user's TOTPs",
  description: "Deletes all of the user's TOTPs.",
  operationId: 'DeleteTOTP',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: 'The ID of the user whose TOTPs are to be deleted',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.strictObject({ user_id: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const deleteUsersUserIdExternalAccountsExternalAccountIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/external_accounts/{external_account_id}',
  tags: ['Users'],
  summary: 'Delete External Account',
  description: 'Delete an external account by ID.',
  operationId: 'DeleteExternalAccount',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            description: "The ID of the user's external account",
            required: true,
            schema: { type: 'string' },
          },
        }),
      external_account_id: z
        .string()
        .openapi({
          param: {
            name: 'external_account_id',
            in: 'path',
            description: 'The ID of the external account to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    500: ClerkErrorsResponse,
  },
})

export const getInvitationsRoute = createRoute({
  method: 'get',
  path: '/invitations',
  tags: ['Invitations'],
  summary: 'List all invitations',
  description: 'Returns all non-revoked invitations for your application, sorted by creation date',
  operationId: 'ListInvitations',
  request: {
    query: z.object({
      status: z
        .enum(['pending', 'accepted', 'revoked', 'expired'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            description: 'Filter invitations based on their status',
            schema: { type: 'string', enum: ['pending', 'accepted', 'revoked', 'expired'] },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'query',
            description: 'Filter invitations based on their `email_address` or `id`',
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            description:
              "Allows to return invitations in a particular order.\nAt the moment, you can order the returned invitations either by their `created_at`, `email_address` or `expires_at`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            schema: { type: 'string', default: '-created_at' },
          },
        }),
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: { 200: InvitationListResponse },
})

export const postInvitationsRoute = createRoute({
  method: 'post',
  path: '/invitations',
  tags: ['Invitations'],
  summary: 'Create an invitation',
  description:
    'Creates a new invitation for the given email address and sends the invitation email.\nKeep in mind that you cannot create an invitation if there is already one for the given email address.\nAlso, trying to create an invitation for an email address that already exists in your application will result to an error.',
  operationId: 'CreateInvitation',
  request: {
    body: {
      description: 'Required parameters',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              email_address: z
                .string()
                .openapi({ description: 'The email address the invitation will be sent to' }),
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    "Metadata that will be attached to the newly created invitation.\nThe value of this property should be a well-formed JSON object.\nOnce the user accepts the invitation and signs up, these metadata will end up in the user's public metadata.",
                }),
              redirect_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Optional URL which specifies where to redirect the user once they click the invitation link.\nThis is only required if you have implemented a [custom flow](https://clerk.com/docs/authentication/invitations#custom-flow) and you're not using Clerk Hosted Pages or Clerk Components.",
                }),
              notify: z
                .boolean()
                .nullable()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Optional flag which denotes whether an email invitation should be sent to the given email address.\nDefaults to `true`.',
                }),
              ignore_existing: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Whether an invitation should be created if there is already an existing invitation for this email address, or it's claimed by another user.",
                }),
              expires_in_days: z
                .int()
                .min(1)
                .max(365)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The number of days the invitation will be valid for. By default, the invitation expires after 30 days.',
                }),
              template_slug: z
                .enum(['invitation', 'waitlist_invitation'])
                .exactOptional()
                .openapi({
                  description: 'The slug of the email template to use for the invitation email.',
                }),
            })
            .openapi({ required: ['email_address'] }),
        },
      },
    },
  },
  responses: {
    200: InvitationResponse,
    400: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postInvitationsBulkRoute = createRoute({
  method: 'post',
  path: '/invitations/bulk',
  tags: ['Invitations'],
  summary: 'Create multiple invitations',
  description:
    'Use this API operation to create multiple invitations for the provided email addresses. You can choose to send the\ninvitations as emails by setting the `notify` parameter to `true`. There cannot be an existing invitation for any\nof the email addresses you provide unless you set `ignore_existing` to `true` for specific email addresses. Please\nnote that there must be no existing user for any of the email addresses you provide, and this rule cannot be bypassed.\n\nThis endpoint is limited to a maximum of 10 invitations per API call. If you need to send more invitations, please make multiple requests.',
  operationId: 'CreateBulkInvitations',
  request: {
    body: {
      description: 'Required parameters',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .strictObject({
                  email_address: z
                    .string()
                    .openapi({ description: 'The email address the invitation will be sent to' }),
                  public_metadata: z
                    .looseObject({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Metadata that will be attached to the newly created invitation.\nThe value of this property should be a well-formed JSON object.\nOnce the user accepts the invitation and signs up, these metadata will end up in the user's public metadata.",
                    }),
                  redirect_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL where the user is redirected upon visiting the invitation link, where they can accept the invitation. Required if you have implemented a [custom flow for handling application invitations](/docs/custom-flows/invitations).',
                    }),
                  notify: z
                    .boolean()
                    .nullable()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional flag which denotes whether an email invitation should be sent to the given email address.\nDefaults to true.',
                    }),
                  ignore_existing: z
                    .boolean()
                    .nullable()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        "Whether an invitation should be created if there is already an existing invitation for this email\naddress, or it's claimed by another user.",
                    }),
                  expires_in_days: z
                    .int()
                    .min(1)
                    .max(365)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The number of days the invitation will be valid for. By default, the invitation expires after 30 days.',
                    }),
                  template_slug: z
                    .enum(['invitation', 'waitlist_invitation'])
                    .default('invitation')
                    .exactOptional()
                    .openapi({
                      description:
                        'The slug of the email template to use for the invitation email.',
                    }),
                })
                .openapi({ required: ['email_address'] }),
            )
            .min(1)
            .max(10),
        },
      },
    },
  },
  responses: {
    200: InvitationListResponse,
    400: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteInvitationsInvitationIdRoute = createRoute({
  method: 'delete',
  path: '/invitations/{invitation_id}',
  tags: ['Invitations'],
  summary: 'Delete an invitation',
  description:
    'Permanently deletes the given invitation and the copies of the invitation email Clerk stored for its recipient.\nUnlike revoking, deleting removes the invitation record itself, which helps honor a data erasure request from someone who was invited but never signed up.\nOther records that contain the same email address, such as users or organization invitations, are not affected.\nInvitations of any status can be deleted.',
  operationId: 'DeleteInvitation',
  request: {
    params: z.object({
      invitation_id: z
        .string()
        .openapi({
          param: {
            name: 'invitation_id',
            in: 'path',
            description: 'The ID of the invitation to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: DeletedObjectResponse, 404: ResourceNotFoundResponse },
})

export const postInvitationsInvitationIdRevokeRoute = createRoute({
  method: 'post',
  path: '/invitations/{invitation_id}/revoke',
  tags: ['Invitations'],
  summary: 'Revokes an invitation',
  description:
    "Revokes the given invitation.\nRevoking an invitation will prevent the user from using the invitation link that was sent to them.\nHowever, it doesn't prevent the user from signing up if they follow the sign up flow.\nOnly active (i.e. non-revoked) invitations can be revoked.",
  operationId: 'RevokeInvitation',
  request: {
    params: z.object({
      invitation_id: z
        .string()
        .openapi({
          param: {
            name: 'invitation_id',
            in: 'path',
            description: 'The ID of the invitation to be revoked',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: InvitationRevokedResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
  },
})

export const getOrganizationInvitationsRoute = createRoute({
  method: 'get',
  path: '/organization_invitations',
  tags: ['Organization Invitations'],
  summary: 'Get a list of organization invitations for the current instance',
  description:
    "This request returns the list of organization invitations for the instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nYou can filter them by providing the 'status' query parameter, that accepts multiple values.\nYou can change the order by providing the 'order' query parameter, that accepts multiple values.\nYou can filter by the invited user email address providing the `query` query parameter.\nThe organization invitations are ordered by descending creation date by default.",
  operationId: 'ListInstanceOrganizationInvitations',
  request: {
    query: z.object({
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            description:
              "Allows to return organization invitations in a particular order.\nAt the moment, you can order the returned organization invitations either by their `created_at` or `email_address`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want organization invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            schema: { type: 'string', default: '-created_at' },
          },
        }),
      status: z
        .enum(['pending', 'accepted', 'revoked', 'expired'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter organization invitations based on their status',
            required: false,
            schema: { type: 'string', enum: ['pending', 'accepted', 'revoked', 'expired'] },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'query',
            description: 'Filter organization invitations based on their `email_address`',
            schema: { type: 'string' },
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationInvitationsWithPublicOrganizationDataResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: ClerkErrorsResponse,
    500: ClerkErrorsResponse,
  },
})

export const getAllowlistIdentifiersRoute = createRoute({
  method: 'get',
  path: '/allowlist_identifiers',
  tags: ['Allow-list / Block-list'],
  summary: 'List all identifiers on the allow-list',
  description: 'Get a list of all identifiers allowed to sign up to an instance',
  operationId: 'ListAllowlistIdentifiers',
  request: {
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: AllowlistIdentifierListResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
  },
})

export const postAllowlistIdentifiersRoute = createRoute({
  method: 'post',
  path: '/allowlist_identifiers',
  tags: ['Allow-list / Block-list'],
  summary: 'Add identifier to the allow-list',
  description: 'Create an identifier allowed to sign up to an instance',
  operationId: 'CreateAllowlistIdentifier',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              identifier: z
                .string()
                .openapi({
                  description:
                    'The identifier to be added in the allow-list.\nThis can be an email address, a phone number, or a web3 wallet.',
                }),
              notify: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'This flag denotes whether the given identifier will receive an invitation to join the application.\nNote that this only works for email address and phone number identifiers.',
                }),
            })
            .openapi({ required: ['identifier'] }),
        },
      },
    },
  },
  responses: {
    200: AllowlistIdentifierResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteAllowlistIdentifiersIdentifierIdRoute = createRoute({
  method: 'delete',
  path: '/allowlist_identifiers/{identifier_id}',
  tags: ['Allow-list / Block-list'],
  summary: 'Delete identifier from allow-list',
  description: 'Delete an identifier from the instance allow-list',
  operationId: 'DeleteAllowlistIdentifier',
  request: {
    params: z.object({
      identifier_id: z
        .string()
        .openapi({
          param: {
            name: 'identifier_id',
            in: 'path',
            description: 'The ID of the identifier to delete from the allow-list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    402: PaymentRequiredResponse,
    404: ResourceNotFoundResponse,
  },
})

export const getBlocklistIdentifiersRoute = createRoute({
  method: 'get',
  path: '/blocklist_identifiers',
  tags: ['Allow-list / Block-list'],
  summary: 'List all identifiers on the block-list',
  description: 'Get a list of all identifiers which are not allowed to access an instance',
  operationId: 'ListBlocklistIdentifiers',
  responses: {
    200: BlocklistIdentifierListResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
  },
})

export const postBlocklistIdentifiersRoute = createRoute({
  method: 'post',
  path: '/blocklist_identifiers',
  tags: ['Allow-list / Block-list'],
  summary: 'Add identifier to the block-list',
  description: 'Create an identifier that is blocked from accessing an instance',
  operationId: 'CreateBlocklistIdentifier',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              identifier: z
                .string()
                .openapi({
                  description:
                    'The identifier to be added in the block-list.\nThis can be an email address, a phone number, or a web3 wallet.',
                }),
            })
            .openapi({ required: ['identifier'] }),
        },
      },
    },
  },
  responses: {
    200: BlocklistIdentifierResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteBlocklistIdentifiersIdentifierIdRoute = createRoute({
  method: 'delete',
  path: '/blocklist_identifiers/{identifier_id}',
  tags: ['Allow-list / Block-list'],
  summary: 'Delete identifier from block-list',
  description: 'Delete an identifier from the instance block-list',
  operationId: 'DeleteBlocklistIdentifier',
  request: {
    params: z.object({
      identifier_id: z
        .string()
        .openapi({
          param: {
            name: 'identifier_id',
            in: 'path',
            description: 'The ID of the identifier to delete from the block-list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    402: PaymentRequiredResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchBetaFeaturesInstanceSettingsRoute = createRoute({
  method: 'patch',
  path: '/beta_features/instance_settings',
  tags: ['Beta Features'],
  summary: 'Update instance settings',
  description: 'Updates the settings of an instance',
  operationId: 'UpdateInstanceAuthConfig',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              restricted_to_allowlist: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether sign up is restricted to email addresses, phone numbers and usernames that are on the allowlist.',
                }),
              from_email_address: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The local part of the email address from which authentication-related emails (e.g. OTP code, magic links) will be sent.\nOnly alphanumeric values are allowed.\nNote that this value should contain only the local part of the address (e.g. `foo` for `foo@example.com`).',
                }),
              progressive_sign_up: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Enable the Progressive Sign Up algorithm. This feature is deprecated, please contact support if you need assistance.',
                }),
              test_mode: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Toggles test mode for this instance, allowing the use of test email addresses and phone numbers.\nDefaults to true for development instances.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: InstanceSettingsResponse,
    402: PaymentRequiredResponse,
    422: UnprocessableEntityResponse,
  },
})

export const putBetaFeaturesDomainRoute = createRoute({
  method: 'put',
  path: '/beta_features/domain',
  tags: ['Beta Features'],
  summary: 'Update production instance domain',
  description:
    "Change the domain of a production instance.\n\nChanging the domain requires updating the [DNS records](https://clerk.com/docs/deployments/overview#dns-records) accordingly, deploying new [SSL certificates](https://clerk.com/docs/deployments/overview#deploy-certificates), updating your Social Connection's redirect URLs and setting the new keys in your code.\n\nWARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out). Also, while your application is being deployed, a small downtime is expected to occur.\n\nReturns 403 `domain_managed_by_integration` for applications in a Vercel-managed workspace; change the domain from the Vercel integration instead.",
  operationId: 'UpdateProductionInstanceDomain',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              home_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new home URL of the production instance e.g. https://www.example.com',
                }),
              is_secondary: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the domain is a secondary app.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Accepted' },
    400: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    422: ClerkErrorsResponse,
  },
  deprecated: true,
})

export const postActorTokensRoute = createRoute({
  method: 'post',
  path: '/actor_tokens',
  tags: ['Actor Tokens'],
  summary: 'Create actor token',
  description:
    'Create an actor token that can be used to impersonate the given user.\nThe `actor` parameter needs to include at least a "sub" key whose value is the ID of the actor (impersonating) user.',
  operationId: 'CreateActorToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              user_id: z
                .string()
                .openapi({ description: 'The ID of the user being impersonated.' }),
              actor: z
                .looseObject({ sub: z.string().openapi({ description: 'The ID of the actor.' }) })
                .openapi({
                  description:
                    'The actor payload. It needs to include a sub property which should contain the ID of the actor.\nThis whole payload will be also included in the JWT session token.',
                  required: ['sub'],
                  example: { sub: 'user_2OEpKhcCN1Lat9NQ0G6puh7q5Rb' },
                }),
              expires_in_seconds: z
                .int()
                .default(3600)
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter to specify the life duration of the actor token in seconds.\nBy default, the duration is 1 hour.',
                }),
              session_max_duration_in_seconds: z
                .int()
                .default(1800)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum duration that the session which will be created by the generated actor token should last.\nBy default, the duration of a session created via an actor token, lasts 30 minutes.',
                }),
            })
            .openapi({ required: ['user_id', 'actor'] }),
        },
      },
    },
  },
  responses: {
    200: ActorTokenResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    403: FeatureNotEnabledResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postActorTokensActorTokenIdRevokeRoute = createRoute({
  method: 'post',
  path: '/actor_tokens/{actor_token_id}/revoke',
  tags: ['Actor Tokens'],
  summary: 'Revoke actor token',
  description: 'Revokes a pending actor token.',
  operationId: 'RevokeActorToken',
  request: {
    params: z.object({
      actor_token_id: z
        .string()
        .openapi({
          param: {
            name: 'actor_token_id',
            in: 'path',
            description: 'The ID of the actor token to be revoked.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: ActorTokenResponse, 400: ClerkErrorsResponse, 404: ResourceNotFoundResponse },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['Domains'],
  summary: 'List all instance domains',
  description:
    'Use this endpoint to get a list of all domains for an instance.\nThe response will contain the primary domain for the instance and any satellite domains. Each domain in the response contains information about the URLs where Clerk operates and the required CNAME targets.',
  operationId: 'ListDomains',
  responses: { 200: DomainsResponse },
})

export const postDomainsRoute = createRoute({
  method: 'post',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Add a domain',
  description:
    "Add a new domain for your instance.\nUseful in the case of multi-domain instances, allows adding satellite domains to an instance.\nThe new domain must have a `name`. The domain name can contain the port for development instances, like `localhost:3000`.\nSet `is_satellite` to `true` to add a satellite domain.\nTo migrate a production instance from an active provider domain to its first custom primary domain,\nset `is_satellite` to `false`. The custom domain becomes active and the provider domain stays attached.\nAdditional custom primary domains are not supported.\nIf you're planning to configure the new satellite domain to run behind a proxy, pass the `proxy_url` parameter accordingly.\nAdding a custom primary domain returns 403 `domain_managed_by_integration` for applications in a Vercel-managed workspace; change the domain from the Vercel integration instead.",
  operationId: 'AddDomain',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'The new domain name. Can contain the port for development instances.',
                }),
              is_satellite: z
                .boolean()
                .openapi({
                  description:
                    'Marks the new domain as satellite. Set to `false` only when migrating a production instance from an active provider domain to a custom domain.',
                }),
              proxy_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The full URL of the proxy which will forward requests to the Clerk Frontend API for this domain. Applicable only to production instances.',
                }),
            })
            .openapi({ required: ['name', 'is_satellite'] }),
        },
      },
    },
  },
  responses: {
    200: DomainResponse,
    400: ClerkErrorsResponse,
    402: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteDomainsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{domain_id}',
  tags: ['Domains'],
  summary: 'Delete a domain',
  description:
    "Deletes a domain for the instance.\nThe instance's active domain cannot be deleted.\nDeleting a non-satellite domain returns 403 `domain_managed_by_integration` for applications in a Vercel-managed workspace; change the domain from the Vercel integration instead.",
  operationId: 'DeleteDomain',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the domain that will be deleted.',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchDomainsDomainIdRoute = createRoute({
  method: 'patch',
  path: '/domains/{domain_id}',
  tags: ['Domains'],
  summary: 'Update a domain',
  description:
    "The `proxy_url` can be updated only for production instances.\nUpdate one of the instance's domains. Both primary and satellite domains can be updated.\nIf you choose to use Clerk via proxy, use this endpoint to specify the `proxy_url`.\nWhenever you decide you'd rather switch to DNS setup for Clerk, simply set `proxy_url`\nto `null` for the domain. When you update a production instance's primary domain name,\nyou have to make sure that you've completed all the necessary setup steps for DNS and\nemails to work. Expect downtime otherwise. Updating a primary domain's name will also\nupdate the instance's home origin, affecting the default application paths.\nUpdating the `name` or `is_secondary` of a primary domain returns 403 `domain_managed_by_integration` for applications in a Vercel-managed workspace; change the domain from the Vercel integration instead.",
  operationId: 'UpdateDomain',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the domain that will be updated.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The new domain name. For development instances, can contain the port,\ni.e `myhostname:3000`. For production instances, must be a valid FQDN,\ni.e `mysite.com`. Cannot contain protocol scheme.',
                }),
              proxy_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "The full URL of the proxy that will forward requests to Clerk's Frontend API.\nCan only be updated for production instances.",
                }),
              is_secondary: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this is a domain for a secondary app, meaning that any subdomain provided is significant and\nwill be stored as part of the domain. This is useful for supporting multiple apps (one primary and\nmultiple secondaries) on the same root domain (eTLD+1).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: DomainResponse,
    400: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getInstanceRoute = createRoute({
  method: 'get',
  path: '/instance',
  tags: ['Instance Settings'],
  summary: 'Fetch the current instance',
  description: 'Fetches the current instance',
  operationId: 'GetInstance',
  responses: { 200: InstanceResponse },
})

export const patchInstanceRoute = createRoute({
  method: 'patch',
  path: '/instance',
  tags: ['Instance Settings'],
  summary: 'Update instance settings',
  description: 'Updates the settings of an instance',
  operationId: 'UpdateInstance',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              test_mode: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Toggles test mode for this instance, allowing the use of test email addresses and phone numbers.\nDefaults to true for development instances.',
                }),
              hibp: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the instance should be using the HIBP service to check passwords for breaches',
                }),
              support_email: z.string().nullable().exactOptional(),
              clerk_js_version: z.string().nullable().exactOptional(),
              development_origin: z.string().nullable().exactOptional(),
              allowed_origins: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "For browser-like stacks such as browser extensions, Electron, or Capacitor.js (not officially supported), the instance allowed origins need to be updated with the request origin value. For Chrome extensions popup, background, or service worker pages, the origin is chrome-extension://extension_uuid. For Electron apps using `@clerk/electron`, the origins are the custom renderer scheme registered with `createClerkBridge()`, for example `my-app://renderer`, and, during development, the renderer's dev server origin, for example `http://localhost:5173`. For Capacitor, the origin is capacitor://localhost.\nSend an empty array to remove all allowed origins. A null value leaves the current list unchanged.",
                }),
              allowed_subdomains: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Subdomains of the instance's own domains that may originate requests while `subdomain_allowlist_enabled` is true. Each entry is either an exact host (`app.example.com`) or a wildcard anchored on a host beneath one of the instance's domains (`*.preview.example.com`), which covers every host under that anchor but not the anchor itself.\nEntries are stored folded to lower case with any trailing dot removed, the form the origin check compares against, so entries differing only in those respects are one entry. Entries already stored are not validated again, so a list read back from the instance can always be written again unchanged. Send an empty array to remove all entries. A null value leaves the current list unchanged. Production instances only.",
                }),
              subdomain_allowlist_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Whether requests from subdomains of the instance's own domains are restricted to `allowed_subdomains`. When false, every subdomain of the instance's domain is accepted. Production instances only.",
                }),
              cookieless_dev: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the instance should operate in cookieless development mode (i.e. without third-party cookies).\nDeprecated: Please use `url_based_session_syncing` instead.',
                  deprecated: true,
                }),
              url_based_session_syncing: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the instance should use URL-based session syncing in development mode (i.e. without third-party cookies).',
                }),
              preferred_sign_in_strategy_when_password_required: z
                .enum(['password', 'otp', ''])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When password is required at the instance level, sets the preferred sign-in strategy surfaced to Clerk components. Has no effect when password is not required. Defaults to `password`. Set to an empty string to clear the override.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Accepted' }, 422: UnprocessableEntityResponse },
})

export const patchInstanceRestrictionsRoute = createRoute({
  method: 'patch',
  path: '/instance/restrictions',
  tags: ['Instance Settings'],
  summary: 'Update instance restrictions',
  description: 'Updates the restriction settings of an instance',
  operationId: 'UpdateInstanceRestrictions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              allowlist: z.boolean().nullable().exactOptional(),
              blocklist: z.boolean().nullable().exactOptional(),
              allowlist_blocklist_disabled_on_sign_in: z.boolean().nullable().exactOptional(),
              block_email_subaddresses: z.boolean().nullable().exactOptional(),
              block_disposable_email_domains: z.boolean().nullable().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: InstanceRestrictionsResponse,
    402: PaymentRequiredResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getInstanceProtectRoute = createRoute({
  method: 'get',
  path: '/instance/protect',
  tags: ['Instance Settings'],
  summary: 'Get instance protect settings',
  operationId: 'GetInstanceProtect',
  responses: { 200: InstanceProtectResponse },
})

export const patchInstanceProtectRoute = createRoute({
  method: 'patch',
  path: '/instance/protect',
  tags: ['Instance Settings'],
  summary: 'Update instance protect settings',
  operationId: 'UpdateInstanceProtect',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              rules_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Set true to enforce Protect rules on this instance. Set false to stop enforcing and return the instance to its default posture, where traffic is still evaluated in shadow but nothing is blocked. This does not remove the instance from Protect.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: InstanceProtectResponse, 422: UnprocessableEntityResponse },
})

export const getInstanceCommunicationRoute = createRoute({
  method: 'get',
  path: '/instance/communication',
  tags: ['Instance Settings'],
  summary: 'Get instance communication settings',
  description:
    'Retrieves the per-instance SMS communication settings, including the SMS country blocklist.',
  operationId: 'GetInstanceCommunication',
  responses: { 200: InstanceCommunicationResponse },
})

export const patchInstanceCommunicationRoute = createRoute({
  method: 'patch',
  path: '/instance/communication',
  tags: ['Instance Settings'],
  summary: 'Update instance communication settings',
  description:
    "Replaces the SMS country blocklist for this instance. Pass the full set of ISO 3166-1\nalpha-2 country codes that should be blocked; codes that aren't recognized as SMS-tier\ncountries are silently dropped from the persisted list. Omitting `blocked_country_codes`\nis a no-op.\n",
  operationId: 'UpdateInstanceCommunication',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              blocked_country_codes: z
                .array(z.string().regex(/^[A-Z]{2}$/))
                .max(250)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'ISO 3166-1 alpha-2 country codes to block for SMS delivery. Whole-list replacement. Codes must be uppercase, 2-letter, and unique within the array.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: InstanceCommunicationResponse, 422: UnprocessableEntityResponse },
})

export const getInstanceOauthApplicationSettingsRoute = createRoute({
  method: 'get',
  path: '/instance/oauth_application_settings',
  tags: ['Instance Settings'],
  summary: 'Get OAuth application settings',
  description:
    'Retrieves the settings for OAuth applications for the instance (dynamic client registration, JWT access tokens, etc.).',
  operationId: 'GetInstanceOAuthApplicationSettings',
  responses: { 200: InstanceOAuthApplicationSettingsResponse },
})

export const patchInstanceOauthApplicationSettingsRoute = createRoute({
  method: 'patch',
  path: '/instance/oauth_application_settings',
  tags: ['Instance Settings'],
  summary: 'Update OAuth application settings',
  description: 'Updates the OAuth application settings for the instance.',
  operationId: 'UpdateInstanceOAuthApplicationSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              dynamic_oauth_client_registration: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether dynamic OAuth client registration is enabled for the instance (RFC 7591).',
                }),
              dynamic_client_allowed_scopes: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Administrator-selected scope ceiling for dynamically registered and automatically admitted CIMD clients. Null preserves registered client limits; defaults must be a subset. Fresh user consent is required for expansion.',
                }),
              default_scopes: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Default scopes assigned when a dynamically registered or first-contact CIMD client omits `scope`. Accepts built-in keys and current custom catalog keys. `advertised` does not affect eligibility. Duplicate keys, unknown keys, and `offline_access` are rejected. An empty array or null resets to Clerk-provided defaults.\n',
                }),
              oauth_jwt_access_tokens: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether OAuth JWT access tokens are enabled for the instance (disabled indicates opaque access tokens).',
                }),
              aud_claim_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether OAuth access tokens can include an aud claim derived from the RFC 8707 resource parameter.',
                }),
              aud_claim_refresh_backfill_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether refresh grants without a resource can adopt the requested resource when audience claims are enabled.',
                }),
              pkce_required: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether all new OAuth authorization-code requests must use PKCE with the S256 challenge method.',
                }),
              client_id_metadata_documents_advertised: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the instance advertises support for Client ID Metadata Documents in its OAuth authorization server metadata.',
                }),
              client_id_metadata_documents_only_allow_pre_registered_clients: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When true, new unknown CIMD clients are rejected. Previously auto-connected and pre-registered clients remain admitted; deleting a client makes it unknown again.',
                }),
              client_id_metadata_documents_block_implicitly_allowed_clients: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When true, recorded implicitly allowed CIMD clients are rejected on future client lookups. Explicitly allowed clients remain accepted. This does not revoke previously issued access tokens.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: InstanceOAuthApplicationSettingsResponse, 422: UnprocessableEntityResponse },
})

export const postInstanceChangeDomainRoute = createRoute({
  method: 'post',
  path: '/instance/change_domain',
  tags: ['Beta Features'],
  summary: 'Update production instance domain',
  description:
    "Change the domain of a production instance.\n\nChanging the domain requires updating the [DNS records](https://clerk.com/docs/deployments/overview#dns-records) accordingly, deploying new [SSL certificates](https://clerk.com/docs/deployments/overview#deploy-certificates), updating your Social Connection's redirect URLs and setting the new keys in your code.\n\nWARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out). Also, while your application is being deployed, a small downtime is expected to occur.\n\nReturns 403 `domain_managed_by_integration` for applications in a Vercel-managed workspace; change the domain from the Vercel integration instead.",
  operationId: 'ChangeProductionInstanceDomain',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              home_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The new home URL of the production instance e.g. https://www.example.com',
                }),
              is_secondary: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this is a domain for a secondary app, meaning that any subdomain provided is significant and\nwill be stored as part of the domain. This is useful for supporting multiple apps (one primary and\nmultiple secondaries) on the same root domain (eTLD+1).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Accepted' },
    400: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    422: ClerkErrorsResponse,
  },
})

export const getInstanceOrganizationSettingsRoute = createRoute({
  method: 'get',
  path: '/instance/organization_settings',
  tags: ['Instance Settings'],
  summary: 'Get instance organization settings',
  description: 'Retrieves the organization settings of the instance',
  operationId: 'GetInstanceOrganizationSettings',
  responses: {
    200: OrganizationSettingsResponse,
    402: PaymentRequiredResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchInstanceOrganizationSettingsRoute = createRoute({
  method: 'patch',
  path: '/instance/organization_settings',
  tags: ['Instance Settings'],
  summary: 'Update instance organization settings',
  description: 'Updates the organization settings of the instance',
  operationId: 'UpdateInstanceOrganizationSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              enabled: z.boolean().nullable().exactOptional(),
              max_allowed_memberships: z.int().nullable().exactOptional(),
              admin_delete_enabled: z.boolean().nullable().exactOptional(),
              domains_enabled: z.boolean().nullable().exactOptional(),
              slug_disabled: z.boolean().nullable().exactOptional(),
              domains_enrollment_modes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Specify which enrollment modes to enable for your Organization Domains.\nSupported modes are 'automatic_invitation' & 'automatic_suggestion'.",
                }),
              creator_role_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Specify what the default organization role is for an organization creator.',
                }),
              domains_default_role_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Specify what the default organization role is for the organization domains.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: OrganizationSettingsResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postWebhooksSvixRoute = createRoute({
  method: 'post',
  path: '/webhooks/svix',
  tags: ['Webhooks'],
  summary: 'Create a Svix app',
  description: 'Create a Svix app and associate it with the current instance',
  operationId: 'CreateSvixApp',
  responses: { 200: SvixURLResponse, 400: ClerkErrorsResponse },
})

export const deleteWebhooksSvixRoute = createRoute({
  method: 'delete',
  path: '/webhooks/svix',
  tags: ['Webhooks'],
  summary: 'Delete a Svix app',
  description: 'Delete a Svix app and disassociate it from the current instance',
  operationId: 'DeleteSvixApp',
  responses: {
    204: { description: 'Svix app was successfully deleted' },
    400: ClerkErrorsResponse,
  },
})

export const postWebhooksSvixUrlRoute = createRoute({
  method: 'post',
  path: '/webhooks/svix_url',
  tags: ['Webhooks'],
  summary: 'Create a Svix Dashboard URL',
  description:
    "Generate a new URL for accessing the Svix's management dashboard for that particular instance",
  operationId: 'GenerateSvixAuthURL',
  responses: { 200: SvixURLResponse, 400: ClerkErrorsResponse },
})

export const getJwtTemplatesRoute = createRoute({
  method: 'get',
  path: '/jwt_templates',
  tags: ['JWT Templates'],
  summary: 'List all templates',
  operationId: 'ListJWTTemplates',
  request: {
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: { 200: JWTTemplateListResponse },
})

export const postJwtTemplatesRoute = createRoute({
  method: 'post',
  path: '/jwt_templates',
  tags: ['JWT Templates'],
  summary: 'Create a JWT template',
  description: 'Create a new JWT template',
  operationId: 'CreateJWTTemplate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'JWT template name' }),
              claims: z.object({}).openapi({ description: 'JWT template claims in JSON format' }),
              lifetime: z
                .int()
                .min(30)
                .max(315360000)
                .nullable()
                .exactOptional()
                .openapi({ description: 'JWT lifetime' }),
              allowed_clock_skew: z
                .int()
                .min(0)
                .max(300)
                .nullable()
                .exactOptional()
                .openapi({ description: 'JWT allowed clock skew' }),
              custom_signing_key: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether a custom signing key/algorithm is also provided for this template',
                }),
              signing_algorithm: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The custom signing algorithm to use when minting JWTs. Required if `custom_signing_key` is `true`.',
                }),
              signing_key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The custom signing private key to use when minting JWTs. Required if `custom_signing_key` is `true`.',
                }),
            })
            .openapi({ required: ['name', 'claims'] }),
        },
      },
    },
  },
  responses: {
    200: JWTTemplateResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getJwtTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/jwt_templates/{template_id}',
  tags: ['JWT Templates'],
  summary: 'Retrieve a template',
  description: 'Retrieve the details of a given JWT template',
  operationId: 'GetJWTTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'JWT Template ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: JWTTemplateResponse, 404: ResourceNotFoundResponse },
})

export const deleteJwtTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/jwt_templates/{template_id}',
  tags: ['JWT Templates'],
  summary: 'Delete a Template',
  operationId: 'DeleteJWTTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'JWT Template ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchJwtTemplatesTemplateIdRoute = createRoute({
  method: 'patch',
  path: '/jwt_templates/{template_id}',
  tags: ['JWT Templates'],
  summary: 'Update a JWT template',
  description: 'Updates an existing JWT template',
  operationId: 'UpdateJWTTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            name: 'template_id',
            in: 'path',
            description: 'The ID of the JWT template to update',
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
              name: z.string().openapi({ description: 'JWT template name' }),
              claims: z.object({}).openapi({ description: 'JWT template claims in JSON format' }),
              lifetime: z
                .int()
                .min(30)
                .max(315360000)
                .nullable()
                .exactOptional()
                .openapi({ description: 'JWT lifetime' }),
              allowed_clock_skew: z
                .int()
                .min(0)
                .max(300)
                .nullable()
                .exactOptional()
                .openapi({ description: 'JWT allowed clock skew' }),
              custom_signing_key: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether a custom signing key/algorithm is also provided for this template',
                }),
              signing_algorithm: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The custom signing algorithm to use when minting JWTs. Required if `custom_signing_key` is `true`.',
                }),
              signing_key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The custom signing private key to use when minting JWTs. Required if `custom_signing_key` is `true`.',
                }),
            })
            .openapi({ required: ['name', 'claims'] }),
        },
      },
    },
  },
  responses: {
    200: JWTTemplateResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getMachinesRoute = createRoute({
  method: 'get',
  path: '/machines',
  tags: ['Machines'],
  summary: 'Get a list of machines for an instance',
  description:
    'This request returns the list of machines for an instance. The machines are\nordered by descending creation date (i.e. most recent machines will be\nreturned first)',
  operationId: 'ListMachines',
  request: {
    query: z.object({
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description:
              'Returns machines with ID or name that match the given query. Uses exact match for machine ID and partial match for name.',
            schema: { type: 'string' },
            allowEmptyValue: true,
            required: false,
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Allows to return machines in a particular order.\nYou can order the returned machines by their `name` or `created_at`.\nTo specify the direction, use the `+` or `-` symbols prepended to the property to order by.\nFor example, to return machines in descending order by `created_at`, use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            schema: { type: 'string', default: '-created_at' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: MachineListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postMachinesRoute = createRoute({
  method: 'post',
  path: '/machines',
  tags: ['Machines'],
  summary: 'Create a machine',
  description: 'Creates a new machine.',
  operationId: 'CreateMachine',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(255).openapi({ description: 'The name of the machine' }),
              scoped_machines: z
                .array(z.string())
                .max(150)
                .exactOptional()
                .openapi({
                  description:
                    'Array of machine IDs that this machine will have access to. Maximum of 150 scopes per machine.',
                }),
              default_token_ttl: z
                .int()
                .min(1)
                .max(315360000)
                .default(3600)
                .exactOptional()
                .openapi({
                  description:
                    'The default time-to-live (TTL) in seconds for tokens created by this machine. Must be at least 1 second.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: MachineCreatedResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getMachinesMachineIdRoute = createRoute({
  method: 'get',
  path: '/machines/{machine_id}',
  tags: ['Machines'],
  summary: 'Retrieve a machine',
  description: 'Returns the details of a machine.',
  operationId: 'GetMachine',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: MachineResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteMachinesMachineIdRoute = createRoute({
  method: 'delete',
  path: '/machines/{machine_id}',
  tags: ['Machines'],
  summary: 'Delete a machine',
  description: 'Deletes a machine.',
  operationId: 'DeleteMachine',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: MachineDeletedResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchMachinesMachineIdRoute = createRoute({
  method: 'patch',
  path: '/machines/{machine_id}',
  tags: ['Machines'],
  summary: 'Update a machine',
  description: 'Updates an existing machine.\nOnly the provided fields will be updated.',
  operationId: 'UpdateMachine',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine to update',
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
              name: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the machine' }),
              default_token_ttl: z
                .int()
                .min(1)
                .max(315360000)
                .exactOptional()
                .openapi({
                  description:
                    'The default time-to-live (TTL) in seconds for tokens created by this machine. Must be at least 1 second.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: MachineResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getMachinesMachineIdSecretKeyRoute = createRoute({
  method: 'get',
  path: '/machines/{machine_id}/secret_key',
  tags: ['Machines'],
  summary: 'Retrieve a machine secret key',
  description: 'Returns the secret key for a machine.',
  operationId: 'GetMachineSecretKey',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine to retrieve the secret key for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: MachineSecretKeyResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postMachinesMachineIdSecretKeyRotateRoute = createRoute({
  method: 'post',
  path: '/machines/{machine_id}/secret_key/rotate',
  tags: ['Machines'],
  summary: "Rotate a machine's secret key",
  description:
    "Rotates the machine's secret key.\nWhen the secret key is rotated, make sure to update it in your machine/application.\nThe previous secret key will remain valid for the duration specified by the previous_token_ttl parameter.",
  operationId: 'RotateMachineSecretKey',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine to rotate the secret key for',
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
              previous_token_ttl: z
                .int()
                .min(0)
                .max(28800)
                .openapi({
                  description:
                    'The time in seconds that the previous secret key will remain valid after rotation.\nThis ensures a graceful transition period for updating applications with the new secret key.\nSet to 0 to immediately expire the previous key. Maximum value is 8 hours (28800 seconds).',
                }),
            })
            .openapi({ required: ['previous_token_ttl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: MachineSecretKeyResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postMachinesMachineIdScopesRoute = createRoute({
  method: 'post',
  path: '/machines/{machine_id}/scopes',
  tags: ['Machines'],
  summary: 'Create a machine scope',
  description:
    'Creates a new machine scope, allowing the specified machine to access another machine.\nMaximum of 150 scopes per machine.',
  operationId: 'CreateMachineScope',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine that will have access to another machine',
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
              to_machine_id: z
                .string()
                .openapi({
                  description: 'The ID of the machine that will be scoped to the current machine',
                }),
            })
            .openapi({ required: ['to_machine_id'] }),
        },
      },
    },
  },
  responses: {
    200: MachineScopeResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteMachinesMachineIdScopesOtherMachineIdRoute = createRoute({
  method: 'delete',
  path: '/machines/{machine_id}/scopes/{other_machine_id}',
  tags: ['Machines'],
  summary: 'Delete a machine scope',
  description: 'Deletes a machine scope, removing access from one machine to another.',
  operationId: 'DeleteMachineScope',
  request: {
    params: z.object({
      machine_id: z
        .string()
        .openapi({
          param: {
            name: 'machine_id',
            in: 'path',
            description: 'The ID of the machine that has access to another machine',
            required: true,
            schema: { type: 'string' },
          },
        }),
      other_machine_id: z
        .string()
        .openapi({
          param: {
            name: 'other_machine_id',
            in: 'path',
            description: 'The ID of the machine that is being accessed',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: MachineScopeDeletedResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationsRoute = createRoute({
  method: 'get',
  path: '/organizations',
  tags: ['Organizations'],
  summary: 'Get a list of organizations for an instance',
  description:
    'This request returns the list of organizations for an instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nThe organizations are ordered by descending creation date.\nMost recent organizations will be returned first.',
  operationId: 'ListOrganizations',
  request: {
    query: z.object({
      include_members_count: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'include_members_count',
            description:
              'Flag to denote whether the member counts of each organization should be included in the response or not.',
            schema: { type: 'boolean' },
          },
        }),
      include_missing_member_with_elevated_permissions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'include_missing_member_with_elevated_permissions',
            description:
              'Flag to denote whether or not to include a member with elevated permissions who is not currently a member of the organization.',
            schema: { type: 'boolean' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'query',
            description:
              'Returns organizations with ID, name, or slug that match the given query.\nUses exact match for organization ID and partial match for name and slug.',
            schema: { type: 'string' },
          },
        }),
      user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_id',
            description:
              'Returns organizations that include any of the specified user IDs as members. Any user IDs not found are ignored.\nFor each user ID, the `+` and `-` can be prepended to the ID, which denote whether the\nrespective organization should be included or excluded from the result set.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      organization_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'organization_id',
            description:
              'Returns organizations with the organization IDs specified. Any organization IDs not found are ignored.\nFor each organization ID, the `+` and `-` can be prepended to the ID, which denote whether the\nrespective organization should be included or excluded from the result set. Accepts up to 100 organization IDs.\nExample: ?organization_id=+org_1&organization_id=-org_2',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Allows to return organizations in a particular order.\nAt the moment, you can order the returned organizations either by their `name`, `created_at` or `members_count`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want organizations to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            schema: { type: 'string', default: '-created_at' },
            required: false,
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationsResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationsRoute = createRoute({
  method: 'post',
  path: '/organizations',
  tags: ['Organizations'],
  summary: 'Create an organization',
  description:
    'Creates a new organization with the given name for an instance.\nYou can specify an optional slug for the new organization.\nIf provided, the organization slug can contain only lowercase alphanumeric characters (letters and digits) and the dash "-".\nOrganization slugs must be unique for the instance.\nYou can provide additional metadata for the organization and set any custom attribute you want.\nOrganizations support private and public metadata.\nPrivate metadata can only be accessed from the Backend API.\nPublic metadata can be accessed from the Backend API, and are read-only from the Frontend API.\nThe `created_by` user will see this as their [active organization](https://clerk.com/docs/organizations/overview#active-organization)\nthe next time they create a session, presuming they don\'t explicitly set a different organization as active before then.',
  operationId: 'CreateOrganization',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the new organization.\nMay not contain URLs or HTML.\nMax length: 256',
                }),
              created_by: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the User who will become the administrator for the new organization',
                }),
              private_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization, accessible only from the Backend API',
                }),
              public_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization, read-only from the Frontend API and fully accessible (read/write) from the Backend API',
                }),
              slug: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A slug for the new organization.\nCan contain only lowercase alphanumeric characters and the dash "-".\nMust be unique for the instance.\nThis field should only be included when slugs are enabled in the organization settings, refer to our [documentation](https://clerk.com/docs/guides/organizations/overview#organization-slugs).',
                }),
              max_allowed_memberships: z
                .int()
                .min(0)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of memberships allowed for this organization',
                }),
              created_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A custom date/time denoting _when_ the organization was created, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`).',
                }),
              role_set_key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The key of the [role set](https://clerk.com/docs/guides/organizations/control-access/role-sets) to assign to this organization.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: OrganizationResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}',
  tags: ['Organizations'],
  summary: 'Retrieve an organization by ID or slug',
  description:
    'Fetches the organization whose ID or slug matches the provided `id_or_slug` URL query parameter.',
  operationId: 'GetOrganization',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID or slug of the organization',
          },
        }),
    }),
    query: z.object({
      include_members_count: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'include_members_count',
            description:
              "Flag to denote whether or not the organization's members count should be included in the response.",
            schema: { type: 'boolean' },
          },
        }),
      include_missing_member_with_elevated_permissions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'include_missing_member_with_elevated_permissions',
            description:
              'Flag to denote whether or not to include a member with elevated permissions who is not currently a member of the organization.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: OrganizationResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteOrganizationsOrganizationIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organization_id}',
  tags: ['Organizations'],
  summary: 'Delete an organization',
  description:
    "Deletes the given organization.\nPlease note that deleting an organization will also delete all memberships and invitations.\nThis is not reversible.\n\nAfter the organization is deleted, any user's active sessions that contain the deleted\norganization will be cleared.",
  operationId: 'DeleteOrganization',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the organization to delete',
          },
        }),
    }),
  },
  responses: { 200: DeletedObjectResponse, 404: ResourceNotFoundResponse },
})

export const patchOrganizationsOrganizationIdRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organization_id}',
  tags: ['Organizations'],
  summary: 'Update an organization',
  description: 'Updates an existing organization',
  operationId: 'UpdateOrganization',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the organization to update',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              public_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization, that is visible to both your frontend and backend.\nDeprecated: As of API version 2026-05-12, this field is rejected on `PATCH /v1/organizations/{organization_id}`. Use `PATCH /v1/organizations/{organization_id}/metadata` to merge updates into existing metadata, or `PUT /v1/organizations/{organization_id}/metadata` to replace a metadata field entirely.',
                  deprecated: true,
                }),
              private_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization that is only visible to your backend.\nDeprecated: As of API version 2026-05-12, this field is rejected on `PATCH /v1/organizations/{organization_id}`. Use `PATCH /v1/organizations/{organization_id}/metadata` to merge updates into existing metadata, or `PUT /v1/organizations/{organization_id}/metadata` to replace a metadata field entirely.',
                  deprecated: true,
                }),
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The new name of the organization.\nMay not contain URLs or HTML.\nMax length: 256',
                }),
              slug: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The new slug of the organization, which needs to be unique in the instance',
                }),
              max_allowed_memberships: z
                .int()
                .min(0)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of memberships allowed for this organization',
                }),
              admin_delete_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'If true, an admin can delete this organization with the Frontend API.',
                }),
              self_serve_sso_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Whether this organization can configure self-serve enterprise SSO.',
                }),
              created_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'A custom date/time denoting _when_ the organization was created, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`).',
                }),
              role_set_key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The key of the [role set](https://clerk.com/docs/guides/organizations/control-access/role-sets) to assign to this organization.',
                }),
              reassignment_mappings: ReassignmentMappingsSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Maps role keys in the organization's current role set to role keys in the new role set. Only applies when `role_set_key` changes the role set.\nEvery role that a member holds and that the new role set does not include must be mapped, otherwise the request fails with a 422.\nMapping a role that both role sets include moves its members to the destination role.\nMemberships are reassigned asynchronously after the response.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const putOrganizationsOrganizationIdMetadataRoute = createRoute({
  method: 'put',
  path: '/organizations/{organization_id}/metadata',
  tags: ['Organizations'],
  summary: 'Replace metadata for an organization',
  description:
    "Replace an organization's metadata attributes with the provided values.\nUnlike `PATCH /v1/organizations/{organization_id}/metadata` (merge semantics), this\nendpoint replaces the supplied metadata fields entirely — the prior contents of each\nsupplied field are discarded. Fields omitted from the request body are left unchanged.\nPrefer the `PATCH` endpoint for partial updates. Use `PUT` only when you explicitly\nintend to overwrite a metadata field wholesale.",
  operationId: 'ReplaceOrganizationMetadata',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'path',
            description: 'The ID of the organization whose metadata will be replaced',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization, that is visible to both your frontend and backend.\nThe existing value will be replaced entirely with the new object.',
                }),
              private_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization that is only visible to your backend.\nThe existing value will be replaced entirely with the new object.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchOrganizationsOrganizationIdMetadataRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organization_id}/metadata',
  tags: ['Organizations'],
  summary: 'Merge and update metadata for an organization',
  description:
    'Update organization metadata attributes by merging existing values with the provided parameters.\nMetadata values will be updated via a deep merge.\nDeep meaning that any nested JSON objects will be merged as well.\nYou can remove metadata keys at any level by setting their value to `null`.',
  operationId: 'MergeOrganizationMetadata',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'path',
            description: 'The ID of the organization for which metadata will be merged or updated',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization, that is visible to both your frontend and backend.\nThe new object will be merged with the existing value.',
                }),
              private_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization that is only visible to your backend.\nThe new object will be merged with the existing value.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const putOrganizationsOrganizationIdLogoRoute = createRoute({
  method: 'put',
  path: '/organizations/{organization_id}/logo',
  tags: ['Organizations'],
  summary: 'Upload a logo for the organization',
  description:
    "Set or replace an organization's logo, by uploading an image file.\nThis endpoint uses the `multipart/form-data` request content type and accepts a file of image type.\nThe file size cannot exceed 10MB.\nOnly the following file content types are supported: `image/jpeg`, `image/png`, `image/gif`, `image/webp`.",
  operationId: 'UploadOrganizationLogo',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'path',
            description: 'The ID of the organization for which to upload a logo',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              uploader_user_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the user that will be credited with the image upload.',
                }),
              file: z.file().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: OrganizationWithLogoResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    413: ClerkErrorsResponse,
  },
})

export const deleteOrganizationsOrganizationIdLogoRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organization_id}/logo',
  tags: ['Organizations'],
  summary: "Delete the organization's logo.",
  description: "Delete the organization's logo.",
  operationId: 'DeleteOrganizationLogo',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'path',
            description: 'The ID of the organization for which the logo will be deleted.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: OrganizationResponse, 404: ResourceNotFoundResponse },
})

export const getOrganizationsOrganizationIdBillingSubscriptionRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/billing/subscription',
  tags: ['Organizations', 'Billing'],
  summary: "Retrieve an organization's billing subscription",
  description:
    'Retrieves the billing subscription for the specified organization.\nThis includes subscription details, active plans, billing information, and payment status.\nThe subscription contains subscription items which represent the individual plans the organization is subscribed to.',
  operationId: 'GetOrganizationBillingSubscription',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the organization whose subscription to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: CommerceSubscriptionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const getOrganizationsOrganizationIdBillingCreditsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/billing/credits',
  tags: ['Organizations', 'Billing'],
  summary: "Retrieve an organization's credit balance",
  description:
    'Retrieves the current credit balance for the specified organization.\nCredits can be applied during checkout to reduce the charge or automatically applied to upcoming recurring charges.',
  operationId: 'GetOrganizationBillingCreditBalance',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the organization whose credit balance to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: CommerceCreditBalanceResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const postOrganizationsOrganizationIdBillingCreditsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/billing/credits',
  tags: ['Organizations', 'Billing'],
  summary: "Adjust an organization's credit balance",
  description:
    'Increases or decreases the credit balance for the specified organization.\nEach adjustment is recorded as a ledger entry. The idempotency_key parameter\nensures that duplicate requests are safely handled.',
  operationId: 'AdjustOrganizationBillingCreditBalance',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'organization_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the organization whose credit balance to adjust',
          },
        }),
    }),
    body: {
      description: 'Parameters for the credit balance adjustment',
      content: { 'application/json': { schema: AdjustCreditBalanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: CommerceCreditLedgerResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const getOrganizationsOrganizationIdInvitationsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/invitations',
  tags: ['Organization Invitations'],
  summary: 'Get a list of organization invitations',
  description:
    "This request returns the list of organization invitations.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nYou can filter them by providing the 'status' query parameter, that accepts multiple values.\nThe organization invitations are ordered by descending creation date.\nMost recent invitations will be returned first.\nAny invitations created as a result of an Organization Domain are not included in the results.",
  operationId: 'ListOrganizationInvitations',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['pending', 'accepted', 'revoked', 'expired'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter organization invitations based on their status',
            required: false,
            schema: { type: 'string', enum: ['pending', 'accepted', 'revoked', 'expired'] },
          },
        }),
      email_address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'email_address',
            description: 'Returns organization invitations inviting the specified email address.',
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            description:
              "Allows to return organization invitations in a particular order.\nYou can order the returned organization invitations either by their `created_at` or `email_address`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want organization invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            schema: { type: 'string', default: '-created_at' },
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationInvitationsResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationsOrganizationIdInvitationsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/invitations',
  tags: ['Organization Invitations'],
  summary: 'Create and send an organization invitation',
  description:
    'Creates a new organization invitation and sends an email to the provided `email_address` with a link to accept the invitation and join the organization.\nYou can specify the `role` for the invited organization member.\n\nNew organization invitations get a "pending" status until they are revoked by an organization administrator or accepted by the invitee.\n\nThe request body supports passing an optional `redirect_url` parameter.\nWhen the invited user clicks the link to accept the invitation, they will be redirected to the URL provided.\nUse this parameter to implement a custom invitation acceptance flow.\n\nYou can specify the ID of the user that will send the invitation with the `inviter_user_id` parameter.\nThat user must be a member with administrator privileges in the organization.\nOnly "admin" members can create organization invitations.\n\nYou can optionally provide public and private metadata for the organization invitation.\nThe public metadata are visible by both the Frontend and the Backend whereas the private ones only by the Backend.\nWhen the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.',
  operationId: 'CreateOrganizationInvitation',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization for which to send the invitation',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email_address: z
                .string()
                .openapi({
                  description:
                    'The email address of the new member that is going to be invited to the organization',
                }),
              inviter_user_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user that invites the new member to the organization.\nMust be an administrator in the organization.',
                }),
              role: z
                .string()
                .openapi({ description: 'The role of the new member in the organization' }),
              public_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization invitation, read-only from the Frontend API and fully accessible (read/write) from the Backend API.\nWhen the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.',
                }),
              private_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization invitation, fully accessible (read/write) from the Backend API but not visible from the Frontend API.\nWhen the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.',
                }),
              redirect_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Optional URL that the invitee will be redirected to once they accept the invitation by clicking the join link in the invitation email.',
                }),
              expires_in_days: z
                .int()
                .min(1)
                .max(365)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The number of days the invitation will be valid for. By default, the invitation has a 30 days expire.',
                }),
              notify: z
                .boolean()
                .nullable()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Optional flag which denotes whether an email invitation should be sent to the given email address.\nDefaults to `true`.',
                }),
            })
            .openapi({ required: ['email_address', 'role'] }),
        },
      },
    },
  },
  responses: {
    200: OrganizationInvitationResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationsOrganizationIdInvitationsBulkRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/invitations/bulk',
  tags: ['Organization Invitations'],
  summary: 'Bulk create and send organization invitations',
  description:
    'Creates new organization invitations in bulk and sends out emails to the provided email addresses with a link to accept the invitation and join the organization.\n\nThis endpoint is limited to a maximum of 10 invitations per API call. If you need to send more invitations, please make multiple requests.\n\nYou can specify a different `role` for each invited organization member.\nNew organization invitations get a "pending" status until they are revoked by an organization administrator or accepted by the invitee.\nThe request body supports passing an optional `redirect_url` parameter for each invitation.\nWhen the invited user clicks the link to accept the invitation, they will be redirected to the provided URL.\nUse this parameter to implement a custom invitation acceptance flow.\nYou can specify the ID of the user that will send the invitation with the `inviter_user_id` parameter. Each invitation\ncan have a different inviter user.\nInviter users must be members with administrator privileges in the organization.\nOnly "admin" members can create organization invitations.\nYou can optionally provide public and private metadata for each organization invitation. The public metadata are visible\nby both the Frontend and the Backend, whereas the private metadata are only visible by the Backend.\nWhen the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.',
  operationId: 'CreateOrganizationInvitationBulk',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  email_address: z
                    .string()
                    .openapi({
                      description:
                        'The email address of the new member that is going to be invited to the organization',
                    }),
                  inviter_user_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The ID of the user that invites the new member to the organization.\nMust be an administrator in the organization.',
                    }),
                  role: z
                    .string()
                    .openapi({ description: 'The role of the new member in the organization' }),
                  public_metadata: z
                    .looseObject({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Metadata saved on the organization invitation, read-only from the Frontend API and fully accessible (read/write) from the Backend API.\nWhen the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.',
                    }),
                  private_metadata: z
                    .looseObject({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Metadata saved on the organization invitation, fully accessible (read/write) from the Backend API but not visible from the Frontend API.\nWhen the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.',
                    }),
                  redirect_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional URL that the invitee will be redirected to once they accept the invitation by clicking the join link in the invitation email.',
                    }),
                  expires_in_days: z
                    .int()
                    .min(1)
                    .max(365)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The number of days the invitation will be valid for. By default, the invitation has a 30 days expire.',
                    }),
                  notify: z
                    .boolean()
                    .nullable()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional flag which denotes whether an email invitation should be sent to the given email address.\nDefaults to `true`.',
                    }),
                })
                .openapi({ required: ['email_address', 'role'] }),
            )
            .min(1)
            .max(10),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationInvitationsResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationsOrganizationIdInvitationsPendingRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/invitations/pending',
  tags: ['Organization Invitations'],
  summary: 'Get a list of pending organization invitations',
  description:
    'This request returns the list of organization invitations with "pending" status.\nThese are the organization invitations that can still be used to join the organization, but have not been accepted by the invited user yet.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nThe organization invitations are ordered by descending creation date.\nMost recent invitations will be returned first.\nAny invitations created as a result of an Organization Domain are not included in the results.',
  operationId: 'ListPendingOrganizationInvitations',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
    }),
    query: z.object({ limit: LimitParameterParamsSchema, offset: OffsetParameterParamsSchema }),
  },
  responses: {
    200: OrganizationInvitationsResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
  },
  deprecated: true,
})

export const getOrganizationsOrganizationIdInvitationsInvitationIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/invitations/{invitation_id}',
  tags: ['Organization Invitations'],
  summary: 'Retrieve an organization invitation by ID',
  description: 'Use this request to get an existing organization invitation by ID.',
  operationId: 'GetOrganizationInvitation',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
      invitation_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'invitation_id',
            schema: { type: 'string' },
            description: 'The organization invitation ID.',
          },
        }),
    }),
  },
  responses: {
    200: OrganizationInvitationResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/invitations/{invitation_id}/revoke',
  tags: ['Organization Invitations'],
  summary: 'Revoke a pending organization invitation',
  description:
    'Use this request to revoke a previously issued organization invitation.\nRevoking an organization invitation makes it invalid; the invited user will no longer be able to join the organization with the revoked invitation.\nOnly organization invitations with "pending" status can be revoked.\nThe request accepts the `requesting_user_id` parameter to specify the user which revokes the invitation.\nOnly users with "admin" role can revoke invitations.',
  operationId: 'RevokeOrganizationInvitation',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
      invitation_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'invitation_id',
            schema: { type: 'string' },
            description: 'The organization invitation ID.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              requesting_user_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user that revokes the invitation.\nMust be an administrator in the organization.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: OrganizationInvitationResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const getOrganizationRolesRoute = createRoute({
  method: 'get',
  path: '/organization_roles',
  tags: ['Organization Roles'],
  summary: 'Get a list of organization roles',
  description:
    'This request returns the list of organization roles for the instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nThe organization roles are ordered by descending creation date.\nMost recent roles will be returned first.',
  operationId: 'ListOrganizationRoles',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description:
              'Returns organization roles with ID, name, or key that match the given query.\nUses exact match for organization role ID and partial match for name and key.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Allows to return organization roles in a particular order.\nAt the moment, you can order the returned organization roles by their `created_at`, `name`, or `key`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want organization roles to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            required: false,
            schema: { type: 'string', default: '-created_at' },
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: RolesResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationRolesRoute = createRoute({
  method: 'post',
  path: '/organization_roles',
  tags: ['Organization Roles'],
  summary: 'Create an organization role',
  description:
    "Creates a new organization role with the given name and permissions for an instance.\nThe key must be unique for the instance and start with the 'org:' prefix, followed by lowercase alphanumeric characters and underscores only.\nYou can optionally provide a description for the role and specify whether it should be included in the initial role set.\nOrganization roles support permissions that can be assigned to control access within the organization.",
  operationId: 'CreateOrganizationRole',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().openapi({ description: 'The name of the new organization role' }),
              key: z
                .string()
                .openapi({
                  description:
                    "A unique key for the organization role. Must start with 'org:' and contain only lowercase alphanumeric characters and underscores.",
                }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional description for the role' }),
              permissions: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({ description: 'Array of permission IDs to assign to the role' }),
              include_in_initial_role_set: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Whether this role should be included in the initial role set',
                }),
            })
            .openapi({ required: ['name', 'key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: RoleResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationRolesOrganizationRoleIdRoute = createRoute({
  method: 'get',
  path: '/organization_roles/{organization_role_id}',
  tags: ['Organization Roles'],
  summary: 'Retrieve an organization role',
  description: 'Use this request to retrieve an existing organization role by its ID.',
  operationId: 'GetOrganizationRole',
  request: {
    params: z.object({
      organization_role_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_role_id',
            schema: { type: 'string' },
            description: 'The ID of the organization role',
          },
        }),
    }),
  },
  responses: {
    200: RoleResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteOrganizationRolesOrganizationRoleIdRoute = createRoute({
  method: 'delete',
  path: '/organization_roles/{organization_role_id}',
  tags: ['Organization Roles'],
  summary: 'Delete an organization role',
  description:
    'Deletes the organization role.\nThe role cannot be deleted if it is currently used as the default creator role, domain default role, assigned to any members, or exists in any invitations.',
  operationId: 'DeleteOrganizationRole',
  request: {
    params: z.object({
      organization_role_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_role_id',
            schema: { type: 'string' },
            description: 'The ID of the organization role to delete',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchOrganizationRolesOrganizationRoleIdRoute = createRoute({
  method: 'patch',
  path: '/organization_roles/{organization_role_id}',
  tags: ['Organization Roles'],
  summary: 'Update an organization role',
  description:
    'Updates an existing organization role.\nYou can update the name, key, description, and permissions of the role.\nAll parameters are optional - you can update only the fields you want to change.\nIf the role is used as a creator role or domain default role, updating the key will cascade the update to the organization settings.',
  operationId: 'UpdateOrganizationRole',
  request: {
    params: z.object({
      organization_role_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_role_id',
            schema: { type: 'string' },
            description: 'The ID of the organization role to update',
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
                .nullable()
                .exactOptional()
                .openapi({ description: 'The new name for the organization role' }),
              key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "A unique key for the organization role. Must start with 'org:' and contain only lowercase alphanumeric characters and underscores.",
                }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional description for the role' }),
              permissions: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Array of permission IDs to assign to the role. If provided, this will replace the existing permissions.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: RoleResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute = createRoute({
  method: 'post',
  path: '/organization_roles/{organization_role_id}/permissions/{permission_id}',
  tags: ['Organization Roles'],
  summary: 'Assign a permission to an organization role',
  description: 'Assigns a permission to an organization role',
  operationId: 'AssignPermissionToOrganizationRole',
  request: {
    params: z.object({
      organization_role_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_role_id',
            schema: { type: 'string' },
            description: 'The ID of the organization role',
          },
        }),
      permission_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'permission_id',
            schema: { type: 'string' },
            description: 'The ID of the permission to assign',
          },
        }),
    }),
  },
  responses: {
    200: RoleResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
  },
})

export const deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/organization_roles/{organization_role_id}/permissions/{permission_id}',
  tags: ['Organization Roles'],
  summary: 'Remove a permission from an organization role',
  description: 'Removes a permission from an organization role',
  operationId: 'RemovePermissionFromOrganizationRole',
  request: {
    params: z.object({
      organization_role_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_role_id',
            schema: { type: 'string' },
            description: 'The ID of the organization role',
          },
        }),
      permission_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'permission_id',
            schema: { type: 'string' },
            description: 'The ID of the permission to remove',
          },
        }),
    }),
  },
  responses: {
    200: RoleResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationsOrganizationIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/memberships',
  tags: ['Organization Memberships'],
  summary: 'Get a list of all members of an organization',
  description: 'Retrieves all user memberships for the given organization',
  operationId: 'ListOrganizationMemberships',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
    }),
    query: z.object({
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'order_by',
            description:
              'Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.\nBy prepending one of those values with + or -, we can choose to sort in ascending (ASC) or descending (DESC) order."',
            schema: { type: 'string' },
          },
        }),
      user_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the user IDs specified. For each user ID, the `+` and `-` can be\nprepended to the ID, which denote whether the respective user ID should be included or\nexcluded from the result set. Accepts up to 100 user IDs. Any user IDs not found are ignored.',
            required: false,
          },
        }),
      email_address: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'email_address',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified email addresses. Accepts up to 100 email addresses. Any email addresses not found are ignored.',
            required: false,
          },
        }),
      phone_number: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'phone_number',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified phone numbers. Accepts up to 100 phone numbers. Any phone numbers not found are ignored.',
            required: false,
          },
        }),
      username: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified usernames.\nAccepts up to 100 usernames.\nAny usernames not found are ignored.',
            required: false,
          },
        }),
      web3_wallet: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'web3_wallet',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified web3 wallet addresses.\nAccepts up to 100 web3 wallet addresses.\nAny web3 wallet addresses not found are ignored.',
            required: false,
          },
        }),
      role: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns users with the specified roles. Accepts up to 100 roles. Any roles not found are ignored.',
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              "Returns users that match the given query.\nFor possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user IDs, first and last names.\nThe query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well.",
            schema: { type: 'string' },
            required: false,
          },
        }),
      email_address_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email_address_query',
            in: 'query',
            description:
              'Returns users with emails that match the given query, via case-insensitive partial match.\nFor example, `email_address_query=ello` will match a user with the email `HELLO@example.com`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      phone_number_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'phone_number_query',
            in: 'query',
            description:
              'Returns users with phone numbers that match the given query, via case-insensitive partial match.\nFor example, `phone_number_query=555` will match a user with the phone number `+1555xxxxxxx`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username_query',
            in: 'query',
            description:
              'Returns users with usernames that match the given query, via case-insensitive partial match.\nFor example, `username_query=CoolUser` will match a user with the username `SomeCoolUser`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name_query',
            in: 'query',
            description:
              'Returns users with names that match the given query, via case-insensitive partial match.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      last_active_at_before: z
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
            name: 'last_active_at_before',
            in: 'query',
            description:
              'Returns users whose last session activity was before the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last session activity was before 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      last_active_at_after: z
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
            name: 'last_active_at_after',
            in: 'query',
            description:
              'Returns users whose last session activity was after the given date (with millisecond precision).\nExample: use 1700690400000 to retrieve users whose last session activity was after 2023-11-23.',
            example: 1700690400000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      created_at_before: z
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
            name: 'created_at_before',
            in: 'query',
            description:
              'Returns users who have been created before the given date (with millisecond precision).\nExample: use 1730160000000 to retrieve users who have been created before 2024-10-29.',
            example: 1730160000000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      created_at_after: z
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
            name: 'created_at_after',
            in: 'query',
            description:
              'Returns users who have been created after the given date (with millisecond precision).\nExample: use 1730160000000 to retrieve users who have been created after 2024-10-29.',
            example: 1730160000000,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationMembershipsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationsOrganizationIdMembershipsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/memberships',
  tags: ['Organization Memberships'],
  summary: 'Create a new organization membership',
  description:
    "Adds a user as a member to the given organization.\nOnly users in the same instance as the organization can be added as members.\n\nThis organization will be the user's [active organization] (https://clerk.com/docs/organizations/overview#active-organization)\nthe next time they create a session, presuming they don't explicitly set a\ndifferent organization as active before then.",
  operationId: 'CreateOrganizationMembership',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization where the new membership will be created',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the user that will be added as a member in the organization.\nThe user needs to exist in the same instance as the organization and must not be a member of the given organization already.',
                }),
              role: z
                .string()
                .openapi({
                  description: 'The role that the new member will have in the organization.',
                }),
              public_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization membership, that is visible to both your frontend and backend.',
                }),
              private_metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization membership that is only visible to your backend.',
                }),
            })
            .openapi({ required: ['user_id', 'role'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationMembershipResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteOrganizationsOrganizationIdMembershipsUserIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organization_id}/memberships/{user_id}',
  tags: ['Organization Memberships'],
  summary: 'Remove a member from an organization',
  description: 'Removes the given membership from the organization',
  operationId: 'DeleteOrganizationMembership',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization to which this membership belongs',
          },
        }),
      user_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'user_id',
            schema: { type: 'string' },
            description: 'The ID of the user to which this membership belongs',
          },
        }),
    }),
  },
  responses: {
    200: OrganizationMembershipResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchOrganizationsOrganizationIdMembershipsUserIdRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organization_id}/memberships/{user_id}',
  tags: ['Organization Memberships'],
  summary: 'Update an organization membership',
  description: 'Updates the properties of an existing organization membership',
  operationId: 'UpdateOrganizationMembership',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization to which this membership belongs',
          },
        }),
      user_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'user_id',
            schema: { type: 'string' },
            description: 'The ID of the user to which this membership belongs',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role: z.string().openapi({ description: 'The new role of the given membership.' }),
            })
            .openapi({ required: ['role'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationMembershipResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organization_id}/memberships/{user_id}/metadata',
  tags: ['Organization Memberships'],
  summary: 'Merge and update organization membership metadata',
  description:
    "Update an organization membership's metadata attributes by merging existing values with the provided parameters.\nMetadata values will be updated via a deep merge. Deep means that any nested JSON objects will be merged as well.\nYou can remove metadata keys at any level by setting their value to `null`.",
  operationId: 'UpdateOrganizationMembershipMetadata',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization to which this membership belongs',
          },
        }),
      user_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'user_id',
            schema: { type: 'string' },
            description: 'The ID of the user to which this membership belongs',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              public_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization membership, that is visible to both your frontend and backend.\nThe new object will be merged with the existing value.',
                }),
              private_metadata: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Metadata saved on the organization membership that is only visible to your backend.\nThe new object will be merged with the existing value.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: OrganizationMembershipResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationsOrganizationIdDomainsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization_id}/domains',
  tags: ['Organization Domains'],
  summary: 'Get a list of all domains of an organization.',
  description: 'Get a list of all domains of an organization.',
  operationId: 'ListOrganizationDomains',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The organization ID.',
          },
        }),
    }),
    query: z.object({
      verified: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'verified',
            description: 'Filter domains by their verification status. `true` or `false`',
            schema: { type: 'string' },
          },
        }),
      enrollment_mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'enrollment_mode',
            description:
              'Filter domains by their enrollment mode. Accepts `automatic_invitation`, `automatic_suggestion`, `manual_invitation` or `enterprise_sso`.\nPrefix a value with `-` to exclude it instead (e.g. `-enterprise_sso`). Include and exclude filters can be combined and compose as AND.',
            schema: { type: 'string' },
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationDomainsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationsOrganizationIdDomainsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/domains',
  tags: ['Organization Domains'],
  summary: 'Create a new organization domain.',
  description:
    'Creates a new organization domain. By default the domain is verified, but can be optionally set to unverified.',
  operationId: 'CreateOrganizationDomain',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization where the new domain will be created.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the new domain' }),
              enrollment_mode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The enrollment_mode for the new domain. This can be `automatic_invitation`, `automatic_suggestion`, `manual_invitation` or `enterprise_sso`',
                }),
              verified: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: "The status of domain's verification. Defaults to true" }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationDomainResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteOrganizationsOrganizationIdDomainsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organization_id}/domains/{domain_id}',
  tags: ['Organization Domains'],
  summary: 'Remove a domain from an organization.',
  description: 'Removes the given domain from the organization.',
  operationId: 'DeleteOrganizationDomain',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization to which the domain belongs',
          },
        }),
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain_id',
            schema: { type: 'string' },
            description: 'The ID of the domain',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchOrganizationsOrganizationIdDomainsDomainIdRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organization_id}/domains/{domain_id}',
  tags: ['Organization Domains'],
  summary: 'Update an organization domain.',
  description: 'Updates the properties of an existing organization domain.',
  operationId: 'UpdateOrganizationDomain',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization to which the domain belongs',
          },
        }),
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain_id',
            schema: { type: 'string' },
            description: 'The ID of the domain',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enrollment_mode: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The enrollment_mode for the new domain. This can be `automatic_invitation`, `automatic_suggestion`, `manual_invitation` or `enterprise_sso`',
                }),
              verified: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: "The status of the domain's verification" }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OrganizationDomainResponse,
    400: ClerkErrorsResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization_id}/domains/{domain_id}/verify_ownership',
  tags: ['Organization Domains'],
  summary: "Mark an organization domain's ownership as verified",
  description:
    "Flips the organization domain's ownership state to verified via the\nmanual override path, bypassing the self-serve TXT DNS challenge. The\ndomain row records strategy=`manual_override` and an\n`organization_domain.ownership_verified` audit event is emitted with the\nsame strategy.\n\nIdempotent: re-calling on an already-verified domain returns the current\nownership state without re-emitting the audit event.",
  operationId: 'VerifyOrganizationDomainOwnership',
  request: {
    params: z.object({
      organization_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'organization_id',
            schema: { type: 'string' },
            description: 'The ID of the organization to which the domain belongs',
          },
        }),
      domain_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'domain_id',
            schema: { type: 'string' },
            description: 'The ID of the domain',
          },
        }),
    }),
  },
  responses: {
    200: OrganizationDomainResponse,
    401: AuthenticationInvalidResponse,
    403: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
  },
})

export const getOrganizationDomainsRoute = createRoute({
  method: 'get',
  path: '/organization_domains',
  tags: ['Organization Domains'],
  summary: 'List all organization domains',
  description:
    'Retrieves a list of all organization domains within the current instance.\nThis endpoint can be used to list all domains across all organizations\nor filter domains by organization, verification status, enrollment mode, or search query.\n\nThe response includes pagination information and details about each domain\nincluding its verification status, enrollment mode, and associated counts.\n',
  operationId: 'ListAllOrganizationDomains',
  request: {
    query: z.object({
      organization_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'organization_id',
            description: 'The ID of the organization to filter domains by',
            required: false,
            schema: { type: 'string' },
          },
        }),
      verified: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'verified',
            description: 'Filter by verification status',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
          },
        }),
      enrollment_mode: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'manual_invitation',
              'automatic_invitation',
              'automatic_suggestion',
              'enterprise_sso',
              '-manual_invitation',
              '-automatic_invitation',
              '-automatic_suggestion',
              '-enterprise_sso',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enrollment_mode',
            description:
              'Filter by enrollment mode. Prefix a value with `-` to exclude it instead\n(e.g. `-enterprise_sso`). Include and exclude filters can be combined and compose as AND.',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'manual_invitation',
                  'automatic_invitation',
                  'automatic_suggestion',
                  'enterprise_sso',
                  '-manual_invitation',
                  '-automatic_invitation',
                  '-automatic_suggestion',
                  '-enterprise_sso',
                ],
              },
            },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description:
              'Search domains by name or organization ID.\nIf the query starts with "org_", it will search by exact organization ID match.\nOtherwise, it performs a case-insensitive partial match on the domain name.\n\nNote: An empty string or whitespace-only value is not allowed and will result in a validation error.\n',
            required: false,
            schema: { type: 'string' },
          },
        }),
      domains: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'domains',
            description:
              'Filter by exact domain names. Accepts multiple values (e.g. domains=example.com&domains=test.org).',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Allows to return organization domains in a particular order.\nAt the moment, you can order the returned domains by their `name` or `created_at`.\nIn order to specify the direction, you can use the `+/-` symbols prepended to the property to order by.\nFor example, if you want domains to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.\n",
            required: false,
            schema: { type: 'string', default: '-created_at' },
          },
        }),
      offset: OffsetParameterParamsSchema,
      limit: LimitParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationDomainsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postProxyChecksRoute = createRoute({
  method: 'post',
  path: '/proxy_checks',
  tags: ['Proxy Checks'],
  summary: 'Verify the proxy configuration for your domain',
  description:
    "This endpoint can be used to validate that a proxy-enabled domain is operational.\nIt tries to verify that the proxy URL provided in the parameters maps to a functional proxy that can reach the Clerk Frontend API.\n\nYou can use this endpoint before you set a proxy URL for a domain. This way you can ensure that switching to proxy-based\nconfiguration will not lead to downtime for your instance.\n\nThe `proxy_url` parameter allows for testing proxy configurations for domains that don't have a proxy URL yet, or operate on\na different proxy URL than the one provided. It can also be used to re-validate a domain that is already configured to work with a proxy.",
  operationId: 'VerifyDomainProxy',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domain_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the domain that will be updated.' }),
              proxy_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The full URL of the proxy which will forward requests to the Clerk Frontend API for this domain. e.g. https://example.com/__clerk',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: ProxyCheckResponse,
    400: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getRedirectUrlsRoute = createRoute({
  method: 'get',
  path: '/redirect_urls',
  tags: ['Redirect URLs'],
  summary: 'List all redirect URLs',
  description: 'Lists all whitelisted redirect_urls for the instance',
  operationId: 'ListRedirectURLs',
  request: {
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: { 200: RedirectURLListResponse },
})

export const postRedirectUrlsRoute = createRoute({
  method: 'post',
  path: '/redirect_urls',
  tags: ['Redirect URLs'],
  summary: 'Create a redirect URL',
  description: 'Create a redirect URL',
  operationId: 'CreateRedirectURL',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .openapi({
                  description:
                    'The full URL value prefixed with `https://` or a custom scheme e.g. `"https://my-app.com/oauth-callback"` or `"my-app://oauth-callback"`',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
  },
  responses: {
    200: RedirectURLResponse,
    400: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getRedirectUrlsIdRoute = createRoute({
  method: 'get',
  path: '/redirect_urls/{id}',
  tags: ['Redirect URLs'],
  summary: 'Retrieve a redirect URL',
  description: 'Retrieve the details of the redirect URL with the given ID',
  operationId: 'GetRedirectURL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the redirect URL',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: RedirectURLResponse, 404: ResourceNotFoundResponse },
})

export const deleteRedirectUrlsIdRoute = createRoute({
  method: 'delete',
  path: '/redirect_urls/{id}',
  tags: ['Redirect URLs'],
  summary: 'Delete a redirect URL',
  description: 'Remove the selected redirect URL from the whitelist of the instance',
  operationId: 'DeleteRedirectURL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the redirect URL',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: DeletedObjectResponse, 404: ResourceNotFoundResponse },
})

export const postSignInTokensRoute = createRoute({
  method: 'post',
  path: '/sign_in_tokens',
  tags: ['Sign-in Tokens'],
  summary: 'Create sign-in token',
  description:
    'Creates a new sign-in token and associates it with the given user.\nBy default, sign-in tokens expire in 30 days.\nYou can optionally supply a different duration in seconds using the `expires_in_seconds` property.',
  operationId: 'CreateSignInToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user_id: z
                .string()
                .openapi({
                  description: 'The ID of the user that can use the newly created sign in token',
                }),
              org_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the organization to activate when the user signs in.\nOrganizations must be enabled for the instance, and the user must be a member of the organization.',
                }),
              expires_in_seconds: z
                .int()
                .min(1)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Optional parameter to specify the life duration of the sign in token in seconds.\nBy default, the duration is 30 days, or 10 minutes when `second_factor_verification` is set.',
                }),
              second_factor_verification: z
                .enum(['fresh', 'stale'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Optional parameter that lets a user with a second factor enabled complete the sign in without being prompted for it.\nWhen omitted, redeeming the token completes only the first factor, and the user must still complete their second factor.\n`fresh`: the second factor is treated as verified at sign in. The session token's `fva` claim reports a second factor age of 0.\n`stale`: the second factor is treated as unverified. The session token's `fva` claim reports the maximum second factor age of 99999, so any reverification that requires a second factor prompts the user to complete one.\nHas no effect for users without a second factor enabled.\nA token created with this parameter signs in a user with a second factor enabled without prompting for it, so `expires_in_seconds` defaults to 10 minutes. We recommend keeping it short.",
                }),
            })
            .openapi({ required: ['user_id'] }),
        },
      },
    },
  },
  responses: {
    200: SignInTokenResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postSignInTokensSignInTokenIdRevokeRoute = createRoute({
  method: 'post',
  path: '/sign_in_tokens/{sign_in_token_id}/revoke',
  tags: ['Sign-in Tokens'],
  summary: 'Revoke the given sign-in token',
  description: 'Revokes a pending sign-in token',
  operationId: 'RevokeSignInToken',
  request: {
    params: z.object({
      sign_in_token_id: z
        .string()
        .openapi({
          param: {
            name: 'sign_in_token_id',
            in: 'path',
            description: 'The ID of the sign-in token to be revoked',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: SignInTokenResponse, 400: ClerkErrorsResponse, 404: ResourceNotFoundResponse },
})

export const getSignUpsIdRoute = createRoute({
  method: 'get',
  path: '/sign_ups/{id}',
  tags: ['Sign Ups'],
  summary: 'Retrieve a sign-up by ID',
  description: 'Retrieve the details of the sign-up with the given ID',
  operationId: 'GetSignUp',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the sign-up to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: SignUpResponse, 403: AuthorizationInvalidResponse },
})

export const patchSignUpsIdRoute = createRoute({
  method: 'patch',
  path: '/sign_ups/{id}',
  tags: ['Sign Ups'],
  summary: 'Update a sign-up',
  description: 'Update the sign-up with the given ID',
  operationId: 'UpdateSignUp',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the sign-up to update',
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
              external_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the guest attempting to sign up as used in your external systems or your previous authentication solution.\nThis will be copied to the resulting user when the sign-up is completed.',
                }),
              custom_action: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'If true, the sign-up will be marked as a custom action.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: SignUpResponse, 403: AuthorizationInvalidResponse },
})

export const getOauthApplicationsRoute = createRoute({
  method: 'get',
  path: '/oauth_applications',
  tags: ['OAuth Applications'],
  summary: 'Get a list of OAuth applications for an instance',
  description:
    'This request returns the list of OAuth applications for an instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nThe OAuth applications are ordered by descending creation date.\nMost recent OAuth applications will be returned first.',
  operationId: 'ListOAuthApplications',
  request: {
    query: z.object({
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      order_by: z
        .string()
        .default('+created_at')
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            description:
              "Allows to return OAuth applications in a particular order.\nAt the moment, you can order the returned OAuth applications by their `created_at` and `name`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want OAuth applications to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied. We only support one `order_by` parameter, and if multiple `order_by` parameters are provided, we will only keep the first one. For example,\nif you pass `order_by=name&order_by=created_at`, we will consider only the first `order_by` parameter, which is `name`. The `created_at` parameter will be ignored in this case.",
            required: false,
            schema: { type: 'string', default: '+created_at' },
          },
        }),
      name_query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name_query',
            in: 'query',
            description:
              'Returns OAuth applications with names that match the given query, via case-insensitive partial match.\nAlso returns the OAuth application whose `client_id` is exactly the given query, which is useful for\nresolving a `client_id` to the OAuth application `id` required by the read, update and delete endpoints.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: OAuthApplicationsResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOauthApplicationsRoute = createRoute({
  method: 'post',
  path: '/oauth_applications',
  tags: ['OAuth Applications'],
  summary: 'Create an OAuth application',
  description:
    'Creates a new OAuth application with the given name and callback URL for an instance.\nThe callback URL must be a valid URL.\nAll URL schemes are allowed such as `http://`, `https://`, `myapp://`, etc...',
  operationId: 'CreateOAuthApplication',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'The name of the new OAuth application.\nMax length: 256',
                }),
              redirect_uris: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({ description: 'An array of redirect URIs of the new OAuth application' }),
              callback_url: z
                .string()
                .max(1024)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The callback URL of the new OAuth application',
                  deprecated: true,
                }),
              scopes: z
                .string()
                .max(1024)
                .nullable()
                .default('profile email')
                .exactOptional()
                .openapi({
                  description:
                    "Define the application's built-in and custom scope ceiling. Provide scope keys as a space-delimited string. Custom keys must exist in the instance OAuth scope catalog.",
                  example: 'profile email public_metadata',
                }),
              consent_screen_enabled: z
                .boolean()
                .nullable()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'True to enable a consent screen to display in the authentication flow.',
                }),
              pkce_required: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'True to require the Proof Key of Code Exchange (PKCE) flow.',
                }),
              audience_uri: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An absolute resource URI for a confidential application (RFC 8707 section 2). Registers a resource with no accepted scopes, or adopts an unowned resource with confirmation. Every claimed URI remains permanently reserved to this app, including retirement and deletion, and counts toward the instance resource quota. Changing it stops new exchanges from the old audience immediately. Already-issued tokens retain their lifetime. Clearing requires exchange disabled in an earlier update.',
                }),
              token_exchange_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enable exchanges from the active audience. Requires an audience URI. Disabling preserves target configuration.',
                }),
              adopt_audience_resource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Confirm adoption of an existing unowned resource, preserving its accepted scopes and target references. Does not override another application's reservation.",
                }),
              device_authorization_grant_enabled: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'True to enable the OAuth Device Authorization Grant for this application. Enabling requires the new OAuth IdP and a reachable device verification page.',
                }),
              public: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'If true, this client is public and you can use the Proof Key of Code Exchange (PKCE) flow.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: OAuthApplicationWithSecretResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOauthApplicationsOauthApplicationIdRoute = createRoute({
  method: 'get',
  path: '/oauth_applications/{oauth_application_id}',
  tags: ['OAuth Applications'],
  summary: 'Retrieve an OAuth application by ID',
  description: 'Fetches the OAuth application whose ID matches the provided `id` in the path.',
  operationId: 'GetOAuthApplication',
  request: {
    params: z.object({
      oauth_application_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'oauth_application_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the OAuth application',
          },
        }),
    }),
  },
  responses: {
    200: OAuthApplicationResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteOauthApplicationsOauthApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/oauth_applications/{oauth_application_id}',
  tags: ['OAuth Applications'],
  summary: 'Delete an OAuth application',
  description: 'Deletes the given OAuth application.\nThis is not reversible.',
  operationId: 'DeleteOAuthApplication',
  request: {
    params: z.object({
      oauth_application_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'oauth_application_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the OAuth application to delete',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchOauthApplicationsOauthApplicationIdRoute = createRoute({
  method: 'patch',
  path: '/oauth_applications/{oauth_application_id}',
  tags: ['OAuth Applications'],
  summary: 'Update an OAuth application',
  description: 'Updates an existing OAuth application',
  operationId: 'UpdateOAuthApplication',
  request: {
    params: z.object({
      oauth_application_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'oauth_application_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the OAuth application to update',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The new name of the OAuth application.\nMax length: 256',
                }),
              redirect_uris: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({ description: 'An array of redirect URIs of the new OAuth application' }),
              callback_url: z
                .string()
                .max(1024)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The new callback URL of the OAuth application',
                  deprecated: true,
                }),
              scopes: z
                .string()
                .max(1024)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Replace the application's complete built-in and custom scope ceiling. Provide scope keys as a space-delimited string. Custom keys must exist in the instance OAuth scope catalog. Required built-in scopes, such as `offline_access`, must be included in the replacement set, otherwise the request is rejected. Omit this field to leave all scope assignments unchanged.",
                  example: 'profile email offline_access public_metadata private_metadata',
                }),
              consent_screen_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'True to enable a consent screen to display in the authentication flow. This cannot be disabled for dynamically registered OAuth Applications.',
                }),
              pkce_required: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'True to require the Proof Key of Code Exchange (PKCE) flow.',
                }),
              audience_uri: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An absolute resource URI for a confidential application (RFC 8707 section 2). Registers a resource with no accepted scopes, or adopts an unowned resource with confirmation. Every claimed URI remains permanently reserved to this app, including retirement and deletion, and counts toward the instance resource quota. Changing it stops new exchanges from the old audience immediately. Already-issued tokens retain their lifetime. Clearing requires exchange disabled in an earlier update.',
                }),
              token_exchange_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enable exchanges from the active audience. Requires an audience URI. Disabling preserves target configuration.',
                }),
              adopt_audience_resource: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Confirm adoption of an existing unowned resource, preserving its accepted scopes and target references. Does not override another application's reservation.",
                }),
              device_authorization_grant_enabled: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'True to enable the OAuth Device Authorization Grant for this application. Enabling requires the new OAuth IdP and a reachable device verification page. Omit this field to leave the setting unchanged.',
                }),
              public: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'If true, this client is public and you can use the Proof Key of Code Exchange (PKCE) flow.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: OAuthApplicationResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const putOauthApplicationsOauthApplicationIdLogoRoute = createRoute({
  method: 'put',
  path: '/oauth_applications/{oauth_application_id}/logo',
  tags: ['OAuth Applications'],
  summary: 'Upload a logo for the OAuth application',
  description:
    "Set or replace an OAuth application's logo by uploading an image file.\nThis endpoint uses the `multipart/form-data` request content type and accepts a file of image type.\nThe file size cannot exceed 10MB.\nOnly the following file content types are supported: `image/jpeg`, `image/png`, `image/gif`, `image/webp`.",
  operationId: 'UploadOAuthApplicationLogo',
  request: {
    params: z.object({
      oauth_application_id: z
        .string()
        .openapi({
          param: {
            name: 'oauth_application_id',
            in: 'path',
            description: 'The ID of the OAuth application for which to upload a logo',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              uploader_user_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the user that will be credited with the image upload.',
                }),
              file: z.file().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: OAuthApplicationResponse,
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    413: ClerkErrorsResponse,
  },
})

export const postOauthApplicationsOauthApplicationIdRotateSecretRoute = createRoute({
  method: 'post',
  path: '/oauth_applications/{oauth_application_id}/rotate_secret',
  tags: ['OAuth Applications'],
  summary: 'Rotate the client secret of the given OAuth application',
  description:
    "Rotates the OAuth application's client secret.\nWhen the client secret is rotated, make sure to update it in authorized OAuth clients.",
  operationId: 'RotateOAuthApplicationSecret',
  request: {
    params: z.object({
      oauth_application_id: z
        .string()
        .openapi({
          param: {
            name: 'oauth_application_id',
            in: 'path',
            description: 'The ID of the OAuth application for which to rotate the client secret',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: OAuthApplicationWithSecretResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postOauthApplicationsOauthApplicationIdRevokeTokenRoute = createRoute({
  method: 'post',
  path: '/oauth_applications/{oauth_application_id}/revoke_token',
  tags: ['OAuth Applications'],
  summary: 'Revoke an OAuth application token',
  description:
    'Revoke both OAuth access token and refresh token for the associated grant for the given OAuth application.\nThe request may specify either token.\nJWT access tokens cannot be revoked.',
  operationId: 'RevokeOAuthApplicationToken',
  request: {
    params: z.object({
      oauth_application_id: z
        .string()
        .openapi({
          param: {
            name: 'oauth_application_id',
            in: 'path',
            description: 'The ID of the OAuth application for which to revoke the token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              token: z
                .string()
                .openapi({
                  description:
                    'The opaque OAuth access token or refresh token to revoke. All tokens associated with the same OAuth grant are also revoked.',
                }),
            })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Token revoked' },
    400: ClerkErrorsResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getSamlConnectionsRoute = createRoute({
  method: 'get',
  path: '/saml_connections',
  tags: ['SAML Connections'],
  summary: 'Get a list of SAML Connections for an instance',
  description:
    'Returns the list of SAML Connections for an instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nThe SAML Connections are ordered by descending creation date and the most recent will be returned first.\nDeprecated: Use the Enterprise Connections API instead. This endpoint will be removed in future versions.',
  operationId: 'ListSAMLConnections',
  request: {
    query: z.object({
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: false,
            description:
              'Returns SAML connections that have a name that matches the given query, via case-insensitive partial match.',
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            description:
              'Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.\nBy prepending one of those values with + or -,\nwe can choose to sort in ascending (ASC) or descending (DESC) order.',
            schema: { type: 'string' },
          },
        }),
      organization_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Returns SAML connections that have an associated organization ID to the\ngiven organizations.\nFor each organization ID, the `+` and `-` can be\nprepended to the ID, which denote whether the\nrespective organization should be included or\nexcluded from the result set.\nAccepts up to 100 organization IDs.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: SAMLConnectionsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
  deprecated: true,
})

export const postSamlConnectionsRoute = createRoute({
  method: 'post',
  path: '/saml_connections',
  tags: ['SAML Connections'],
  summary: 'Create a SAML Connection',
  description:
    'Create a new SAML Connection.\nDeprecated: Use the Enterprise Connections API instead. This endpoint will be removed in future versions.',
  operationId: 'CreateSAMLConnection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .union([
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'domain')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['domain'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'domains')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['domains'] }),
            ])
            .and(
              z
                .object({
                  name: z
                    .string()
                    .openapi({
                      description: 'The name to use as a label for this SAML Connection',
                    }),
                  domain: z
                    .string()
                    .exactOptional()
                    .openapi({
                      deprecated: true,
                      description:
                        'The domain of your organization. Sign in flows using an email with this domain, will use this SAML Connection.',
                    }),
                  domains: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The domains of your organization. Sign in flows using an email with one of these domains, will use this SAML Connection.',
                    }),
                  provider: z
                    .enum(['saml_custom', 'saml_okta', 'saml_google', 'saml_microsoft'])
                    .openapi({ description: 'The IdP provider of the connection.' }),
                  idp_entity_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The Entity ID as provided by the IdP' }),
                  idp_sso_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'The Single-Sign On URL as provided by the IdP' }),
                  idp_certificate: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Deprecated, use idp_certificates. One X.509 certificate, PEM or bare base64, or several concatenated PEM certificates; replaces the connection's whole certificate set",
                      deprecated: true,
                    }),
                  idp_certificates: z
                    .array(z.string())
                    .min(1)
                    .max(5)
                    .exactOptional()
                    .openapi({
                      description:
                        "The IdP X.509 signing certificates the connection trusts, one per entry, in PEM or bare base64. Replaces the connection's whole certificate set and takes precedence over idp_certificate",
                    }),
                  idp_metadata_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL which serves the IdP metadata. If present, it takes priority over the corresponding individual properties',
                    }),
                  idp_metadata: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The XML content of the IdP metadata file. If present, it takes priority over the corresponding individual properties',
                    }),
                  organization_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The ID of the organization to which users of this SAML Connection will be added',
                    }),
                  attribute_mapping: z
                    .strictObject({
                      user_id: z.string().exactOptional(),
                      email_address: z.string().exactOptional(),
                      first_name: z.string().exactOptional(),
                      last_name: z.string().exactOptional(),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Define the attribute name mapping between Identity Provider and Clerk's user properties",
                      required: [],
                    }),
                  force_authn: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Enable or deactivate ForceAuthn' }),
                  login_hint: z
                    .strictObject({
                      mode: z
                        .enum(['email_address', 'custom_attribute', 'off'])
                        .openapi({
                          description: 'Controls the login_hint sent to the IdP on SSO sign-in',
                        }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The user public_metadata key whose value is sent as the login_hint when mode is custom_attribute',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Configuration for the login_hint sent to the IdP on SSO sign-in',
                      required: ['mode'],
                    }),
                })
                .openapi({ required: ['name', 'provider'] }),
            )
            .openapi({ required: ['name', 'provider'] }),
        },
      },
    },
  },
  responses: {
    200: SAMLConnectionResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
  deprecated: true,
})

export const getSamlConnectionsSamlConnectionIdRoute = createRoute({
  method: 'get',
  path: '/saml_connections/{saml_connection_id}',
  tags: ['SAML Connections'],
  summary: 'Retrieve a SAML Connection by ID',
  description:
    'Fetches the SAML Connection whose ID matches the provided `saml_connection_id` in the path.\nDeprecated: Use the Enterprise Connections API instead. This endpoint will be removed in future versions.',
  operationId: 'GetSAMLConnection',
  request: {
    params: z.object({
      saml_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'saml_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the SAML Connection',
          },
        }),
    }),
  },
  responses: {
    200: SAMLConnectionResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
  deprecated: true,
})

export const deleteSamlConnectionsSamlConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/saml_connections/{saml_connection_id}',
  tags: ['SAML Connections'],
  summary: 'Delete a SAML Connection',
  description:
    'Deletes the SAML Connection whose ID matches the provided `id` in the path.\nDeprecated: Use the Enterprise Connections API instead. This endpoint will be removed in future versions.',
  operationId: 'DeleteSAMLConnection',
  request: {
    params: z.object({
      saml_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'saml_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the SAML Connection to delete',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
  deprecated: true,
})

export const patchSamlConnectionsSamlConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/saml_connections/{saml_connection_id}',
  tags: ['SAML Connections'],
  summary: 'Update a SAML Connection',
  description:
    'Updates the SAML Connection whose ID matches the provided `id` in the path.\nDeprecated: Use the Enterprise Connections API instead. This endpoint will be removed in future versions.',
  operationId: 'UpdateSAMLConnection',
  request: {
    params: z.object({
      saml_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'saml_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the SAML Connection to update',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The name of the new SAML Connection' }),
              domain: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The domain to use for the new SAML Connection',
                  deprecated: true,
                }),
              domains: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({ description: 'A list of the domains on use for the SAML connection' }),
              idp_entity_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The Entity ID as provided by the IdP' }),
              idp_sso_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The SSO URL as provided by the IdP' }),
              idp_certificate: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Deprecated, use idp_certificates. One X.509 certificate, PEM or bare base64, or several concatenated PEM certificates; replaces the connection's whole certificate set",
                  deprecated: true,
                }),
              idp_certificates: z
                .array(z.string())
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    "The IdP X.509 signing certificates the connection trusts, one per entry, in PEM or bare base64. Replaces the connection's whole certificate set and takes precedence over idp_certificate",
                }),
              idp_metadata_url: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The URL which serves the IdP metadata. If present, it takes priority over the corresponding individual properties and replaces them',
                }),
              idp_metadata: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The XML content of the IdP metadata file. If present, it takes priority over the corresponding individual properties',
                }),
              organization_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the organization to which users of this SAML Connection will be added',
                }),
              attribute_mapping: z
                .strictObject({
                  user_id: z.string().exactOptional(),
                  email_address: z.string().exactOptional(),
                  first_name: z.string().exactOptional(),
                  last_name: z.string().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Define the attribute name mapping between Identity Provider and Clerk's user properties",
                  required: [],
                }),
              active: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Activate or de-activate the SAML Connection' }),
              sync_user_attributes: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description: "Controls whether to update the user's attributes in each sign-in",
                }),
              allow_subdomains: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Allow users with an email address subdomain to use this connection in order to authenticate',
                }),
              allow_idp_initiated: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Enable or deactivate IdP-initiated flows' }),
              disable_additional_identifications: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Enable or deactivate additional identifications' }),
              allow_organization_account_linking: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this connection supports account linking via organization membership',
                }),
              force_authn: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable or deactivate ForceAuthn' }),
              login_hint: z
                .strictObject({
                  mode: z
                    .enum(['email_address', 'custom_attribute', 'off'])
                    .openapi({
                      description: 'Controls the login_hint sent to the IdP on SSO sign-in',
                    }),
                  source: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The user public_metadata key whose value is sent as the login_hint when mode is custom_attribute',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Configuration for the login_hint sent to the IdP on SSO sign-in',
                  required: ['mode'],
                }),
              consent_verified_domains_deletion: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'When enabling the connection, controls behavior when verified domains used for enrollment modes like automatic invitation or automatic suggestion already exist for the same domain. If true, those verified domains are removed and the connection is enabled. If false or omitted, the request fails when any such verified domain exists.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: SAMLConnectionResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
  deprecated: true,
})

export const getEnterpriseConnectionsRoute = createRoute({
  method: 'get',
  path: '/enterprise_connections',
  tags: ['Enterprise Connections'],
  summary: 'List enterprise connections',
  description:
    'Returns the list of enterprise connections for the instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.',
  operationId: 'ListEnterpriseConnections',
  request: {
    query: z.object({
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      organization_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'organization_id',
            in: 'query',
            required: false,
            description: 'Filter enterprise connections by organization ID',
            schema: { type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'active',
            in: 'query',
            required: false,
            description:
              'Filter by active status. If true, only active connections are returned. If false, only inactive connections are returned. If omitted, all connections are returned.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: EnterpriseConnectionsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postEnterpriseConnectionsRoute = createRoute({
  method: 'post',
  path: '/enterprise_connections',
  tags: ['Enterprise Connections'],
  summary: 'Create an enterprise connection',
  description: 'Create a new enterprise connection.',
  operationId: 'CreateEnterpriseConnection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().openapi({ description: 'The display name of the connection' }),
              provider: z
                .enum([
                  'saml_custom',
                  'saml_okta',
                  'saml_google',
                  'saml_microsoft',
                  'oidc_custom',
                  'oidc_github_enterprise',
                  'oidc_gitlab',
                ])
                .openapi({
                  description:
                    'The identity provider (e.g. saml_custom, oidc_custom, oidc_github_enterprise, oidc_gitlab)',
                }),
              domains: z
                .array(z.string())
                .min(1)
                .openapi({
                  description:
                    'Domains associated with the enterprise connection (required; at least one). Values are normalized to lowercase. Each domain must be a valid fully qualified domain name.',
                }),
              organization_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Organization ID when the connection is linked to an organization',
                }),
              allow_organization_account_linking: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this connection supports account linking via organization membership',
                }),
              active: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the enterprise connection is active. When true, IdP metadata must be provided via the `saml` object.',
                }),
              saml: z
                .strictObject({
                  idp_entity_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'IdP entity ID' }),
                  idp_sso_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'IdP SSO URL' }),
                  idp_certificate: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Deprecated, use idp_certificates. One X.509 certificate, PEM or bare base64, or several concatenated PEM certificates; replaces the connection's whole certificate set",
                      deprecated: true,
                    }),
                  idp_certificates: z
                    .array(z.string())
                    .min(1)
                    .max(5)
                    .exactOptional()
                    .openapi({
                      description:
                        "The IdP X.509 signing certificates the connection trusts, one per entry, in PEM or bare base64. Replaces the connection's whole certificate set and takes precedence over idp_certificate",
                    }),
                  idp_metadata_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'URL to IdP metadata' }),
                  idp_metadata: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Raw IdP metadata XML' }),
                  attribute_mapping: z
                    .strictObject({
                      user_id: z.string().nullable().exactOptional(),
                      email_address: z.string().nullable().exactOptional(),
                      first_name: z.string().nullable().exactOptional(),
                      last_name: z.string().nullable().exactOptional(),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Attribute mapping for SAML attributes',
                      required: [],
                    }),
                  allow_subdomains: z.boolean().nullable().exactOptional(),
                  allow_idp_initiated: z.boolean().nullable().exactOptional(),
                  force_authn: z.boolean().nullable().exactOptional(),
                  login_hint: z
                    .strictObject({
                      mode: z
                        .enum(['email_address', 'custom_attribute', 'off'])
                        .openapi({
                          description: 'Controls the login_hint sent to the IdP on SSO sign-in',
                        }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The user public_metadata key whose value is sent as the login_hint when mode is custom_attribute',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Configuration for the login_hint sent to the IdP on SSO sign-in',
                      required: ['mode'],
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'SAML connection-specific properties. Only applied when the enterprise connection uses SAML (e.g. provider is saml_custom).\nUse this to set IdP configuration, attribute mapping, and other SAML-specific settings at creation time.',
                  required: [],
                }),
              oidc: z
                .strictObject({
                  client_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC client ID' }),
                  client_secret: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC client secret' }),
                  discovery_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC discovery URL' }),
                  auth_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC authorization URL' }),
                  token_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC token URL' }),
                  user_info_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC userinfo URL' }),
                  requires_pkce: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether PKCE is required (must be true for public clients with no client secret)',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'OIDC connection-specific properties. Only applied when the enterprise connection uses OIDC (e.g. provider is oidc_custom, oidc_github_enterprise, or oidc_gitlab).',
                  required: [],
                }),
              custom_attributes: z
                .array(
                  z
                    .strictObject({
                      name: z
                        .string()
                        .min(1)
                        .openapi({ description: 'Display name for the custom attribute' }),
                      key: z
                        .string()
                        .regex(/^[^_][A-Za-z0-9_-]*$/)
                        .min(1)
                        .openapi({
                          description: "Key used to store the attribute in the user's metadata",
                        }),
                      sso_path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Path to extract the attribute value from SSO claims',
                        }),
                      scim_path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'GJSON path to extract the attribute value from SCIM user resources',
                        }),
                      directory_path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The new name for `scim_path`. Send either one, or both with the same value; sending both with different values is rejected.',
                        }),
                      multi_valued: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'When true, the attribute supports multiple values; values from the IdP are written to public_metadata as an array. Defaults to false.',
                        }),
                    })
                    .openapi({ required: ['name', 'key'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Custom attributes to map from the IdP to the user's profile via SSO or SCIM provisioning. Requires the custom attributes feature to be enabled for the instance.",
                }),
            })
            .openapi({ required: ['name', 'provider', 'domains'] }),
        },
      },
    },
  },
  responses: {
    201: EnterpriseConnectionResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getEnterpriseConnectionsEnterpriseConnectionIdRoute = createRoute({
  method: 'get',
  path: '/enterprise_connections/{enterprise_connection_id}',
  tags: ['Enterprise Connections'],
  summary: 'Retrieve an enterprise connection',
  description:
    'Fetches the enterprise connection whose ID matches the provided `enterprise_connection_id` in the path.',
  operationId: 'GetEnterpriseConnection',
  request: {
    params: z.object({
      enterprise_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'enterprise_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the enterprise connection',
          },
        }),
    }),
  },
  responses: {
    200: EnterpriseConnectionResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteEnterpriseConnectionsEnterpriseConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/enterprise_connections/{enterprise_connection_id}',
  tags: ['Enterprise Connections'],
  summary: 'Delete an enterprise connection',
  description:
    'Deletes the enterprise connection whose ID matches the provided `enterprise_connection_id` in the path.',
  operationId: 'DeleteEnterpriseConnection',
  request: {
    params: z.object({
      enterprise_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'enterprise_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the enterprise connection to delete',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchEnterpriseConnectionsEnterpriseConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/enterprise_connections/{enterprise_connection_id}',
  tags: ['Enterprise Connections'],
  summary: 'Update an enterprise connection',
  description:
    "Updates the enterprise connection whose ID matches the provided `enterprise_connection_id` in the path.\nWhen enabling the connection (setting `active` to true), any existing verified organization domains that match the connection's domains (e.g. used for enrollment modes like automatic invitation) may be deleted so the connection can be enabled.",
  operationId: 'UpdateEnterpriseConnection',
  request: {
    params: z.object({
      enterprise_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'enterprise_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the enterprise connection to update',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The display name of the enterprise connection' }),
              domains: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Domains associated with the enterprise connection. Values are normalized to lowercase.\nEmpty array means ignored (no change); non-empty array means set domains to the given list (replaces existing).',
                }),
              active: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the enterprise connection is active. When set to true (enabling), any existing verified organization domains for the same domain(s) will be removed so the connection can be enabled.',
                }),
              sync_user_attributes: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Whether to sync user attributes on sign-in' }),
              disable_additional_identifications: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Whether to disable additional identifications' }),
              allow_organization_account_linking: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Whether this connection supports account linking via organization membership',
                }),
              organization_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Organization ID to link to this enterprise connection. Only linking is supported; sending this field sets or changes the linked organization. There is no way to unlink an organization once linked.',
                }),
              saml: z
                .strictObject({
                  name: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Display name of the SAML connection' }),
                  idp_entity_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'IdP entity ID' }),
                  idp_sso_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'IdP SSO URL' }),
                  idp_certificate: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        "Deprecated, use idp_certificates. One X.509 certificate, PEM or bare base64, or several concatenated PEM certificates; replaces the connection's whole certificate set",
                      deprecated: true,
                    }),
                  idp_certificates: z
                    .array(z.string())
                    .min(1)
                    .max(5)
                    .exactOptional()
                    .openapi({
                      description:
                        "The IdP X.509 signing certificates the connection trusts, one per entry, in PEM or bare base64. Replaces the connection's whole certificate set and takes precedence over idp_certificate",
                    }),
                  idp_metadata_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'URL to IdP metadata' }),
                  idp_metadata: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Raw IdP metadata XML' }),
                  attribute_mapping: z
                    .strictObject({
                      user_id: z.string().nullable().exactOptional(),
                      email_address: z.string().nullable().exactOptional(),
                      first_name: z.string().nullable().exactOptional(),
                      last_name: z.string().nullable().exactOptional(),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Attribute mapping for SAML attributes',
                      required: [],
                    }),
                  allow_subdomains: z.boolean().nullable().exactOptional(),
                  allow_idp_initiated: z.boolean().nullable().exactOptional(),
                  force_authn: z.boolean().nullable().exactOptional(),
                  login_hint: z
                    .strictObject({
                      mode: z
                        .enum(['email_address', 'custom_attribute', 'off'])
                        .openapi({
                          description: 'Controls the login_hint sent to the IdP on SSO sign-in',
                        }),
                      source: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The user public_metadata key whose value is sent as the login_hint when mode is custom_attribute',
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Configuration for the login_hint sent to the IdP on SSO sign-in',
                      required: ['mode'],
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'SAML connection-specific properties. Only applied when the enterprise connection uses SAML.\nUse this to update IdP configuration, attribute mapping, and other SAML-specific settings.',
                  required: [],
                }),
              oidc: z
                .strictObject({
                  client_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC client ID' }),
                  client_secret: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC client secret' }),
                  discovery_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC discovery URL' }),
                  auth_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC authorization URL' }),
                  token_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC token URL' }),
                  user_info_url: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'OIDC userinfo URL' }),
                  requires_pkce: z
                    .boolean()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether PKCE is required (must be true for public clients with no client secret)',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'OIDC connection-specific properties. Only applied when the enterprise connection uses OIDC (e.g. oidc_custom, oidc_github_enterprise, or oidc_gitlab).',
                  required: [],
                }),
              custom_attributes: z
                .array(
                  z
                    .strictObject({
                      name: z
                        .string()
                        .min(1)
                        .openapi({ description: 'Display name for the custom attribute' }),
                      key: z
                        .string()
                        .regex(/^[^_][A-Za-z0-9_-]*$/)
                        .min(1)
                        .openapi({
                          description: "Key used to store the attribute in the user's metadata",
                        }),
                      sso_path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Path to extract the attribute value from SSO claims',
                        }),
                      scim_path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'GJSON path to extract the attribute value from SCIM user resources',
                        }),
                      directory_path: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The new name for `scim_path`. Send either one, or both with the same value; sending both with different values is rejected.',
                        }),
                      multi_valued: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'When true, the attribute supports multiple values; values from the IdP are written to public_metadata as an array. Defaults to false.',
                        }),
                    })
                    .openapi({ required: ['name', 'key'] }),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Custom attributes to map from the IdP to the user's profile via SSO or SCIM provisioning. Requires the custom attributes feature to be enabled for the instance.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: EnterpriseConnectionResponse,
    400: ClerkErrorsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute = createRoute({
  method: 'get',
  path: '/enterprise_connections/{enterprise_connection_id}/test_runs',
  tags: ['Enterprise Connections'],
  summary: 'List enterprise connection test runs',
  description:
    'Returns a paginated list of SAML or OIDC debug test runs for an enterprise connection.',
  operationId: 'ListEnterpriseConnectionTestRuns',
  request: {
    params: z.object({
      enterprise_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'enterprise_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the enterprise connection',
          },
        }),
    }),
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['pending', 'success', 'failed'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['pending', 'success', 'failed'] },
            },
            style: 'form',
            explode: true,
            description: 'Filter test runs by status (may be repeated)',
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: EnterpriseConnectionTestRunsResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute = createRoute({
  method: 'post',
  path: '/enterprise_connections/{enterprise_connection_id}/test_runs',
  tags: ['Enterprise Connections'],
  summary: 'Create an enterprise connection test run',
  description: 'Returns a short-lived URL that starts the IdP test flow for this connection.',
  operationId: 'CreateEnterpriseConnectionTestRun',
  request: {
    params: z.object({
      enterprise_connection_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'enterprise_connection_id',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the enterprise connection',
          },
        }),
    }),
  },
  responses: {
    200: EnterpriseConnectionTestRunResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const postTestingTokensRoute = createRoute({
  method: 'post',
  path: '/testing_tokens',
  tags: ['Testing Tokens'],
  summary: 'Retrieve a new testing token',
  description: 'Retrieve a new testing token.',
  operationId: 'CreateTestingToken',
  responses: { 200: TestingTokenResponse },
})

export const getOrganizationMembershipsRoute = createRoute({
  method: 'get',
  path: '/organization_memberships',
  tags: ['Organization Memberships'],
  summary: 'Get a list of all organization memberships within an instance.',
  description: 'Retrieves all organization user memberships for the given instance.',
  operationId: 'InstanceGetOrganizationMemberships',
  request: {
    query: z.object({
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            description:
              'Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.\nBy prepending one of those values with + or -,\nwe can choose to sort in ascending (ASC) or descending (DESC) order.',
            schema: { type: 'string' },
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: OrganizationMembershipsResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const getWaitlistEntriesRoute = createRoute({
  method: 'get',
  path: '/waitlist_entries',
  tags: ['Waitlist Entries'],
  summary: 'List all waitlist entries',
  description:
    'Retrieve a list of waitlist entries for the instance.\nEntries are ordered by creation date in descending order by default.\nSupports filtering by email address or status and pagination with limit and offset parameters.',
  operationId: 'ListWaitlistEntries',
  request: {
    query: z.object({
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description: 'Filter waitlist entries by `email_address` or `id`',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['pending', 'invited', 'completed', 'rejected'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter waitlist entries by their status',
            required: false,
            schema: { type: 'string', enum: ['pending', 'invited', 'completed', 'rejected'] },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            description:
              'Specify the order of results. Supported values are:\n- `created_at`\n- `email_address`\n- `invited_at`\n\nUse `+` for ascending or `-` for descending order. Defaults to `-created_at`.',
            schema: { type: 'string', default: '-created_at' },
          },
        }),
    }),
  },
  responses: { 200: WaitlistEntriesResponse },
})

export const postWaitlistEntriesRoute = createRoute({
  method: 'post',
  path: '/waitlist_entries',
  tags: ['Waitlist Entries'],
  summary: 'Create a waitlist entry',
  description:
    'Creates a new waitlist entry for the given email address.\nIf the email address is already on the waitlist, no new entry will be created and the existing waitlist entry will be returned.',
  operationId: 'CreateWaitlistEntry',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email_address: z
                .string()
                .openapi({ description: 'The email address to add to the waitlist' }),
              notify: z
                .boolean()
                .nullable()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Optional flag which denotes whether a confirmation email should be sent to the given email address.\nDefaults to `true`.',
                }),
            })
            .openapi({ required: ['email_address'] }),
        },
      },
    },
  },
  responses: {
    200: WaitlistEntryResponse,
    400: ClerkErrorsResponse,
    422: UnprocessableEntityResponse,
  },
})

export const deleteWaitlistEntriesWaitlistEntryIdRoute = createRoute({
  method: 'delete',
  path: '/waitlist_entries/{waitlist_entry_id}',
  tags: ['Waitlist Entries'],
  summary: 'Delete a pending waitlist entry',
  description: 'Delete a pending waitlist entry.',
  operationId: 'DeleteWaitlistEntry',
  request: {
    params: z.object({
      waitlist_entry_id: z
        .string()
        .openapi({
          param: {
            name: 'waitlist_entry_id',
            in: 'path',
            description: 'The ID of the waitlist entry to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postWaitlistEntriesWaitlistEntryIdInviteRoute = createRoute({
  method: 'post',
  path: '/waitlist_entries/{waitlist_entry_id}/invite',
  tags: ['Waitlist Entries'],
  summary: 'Invite a waitlist entry',
  description: 'Send an invite to the email address in a waitlist entry.',
  operationId: 'InviteWaitlistEntry',
  request: {
    params: z.object({
      waitlist_entry_id: z
        .string()
        .openapi({
          param: {
            name: 'waitlist_entry_id',
            in: 'path',
            description: 'The ID of the waitlist entry to invite',
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
              ignore_existing: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Whether an invitation should be created if there is already an existing invitation for this email address, or it's claimed by another user.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: WaitlistEntryResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postWaitlistEntriesWaitlistEntryIdRejectRoute = createRoute({
  method: 'post',
  path: '/waitlist_entries/{waitlist_entry_id}/reject',
  tags: ['Waitlist Entries'],
  summary: 'Reject a waitlist entry',
  description: 'Reject a waitlist entry.',
  operationId: 'RejectWaitlistEntry',
  request: {
    params: z.object({
      waitlist_entry_id: z
        .string()
        .openapi({
          param: {
            name: 'waitlist_entry_id',
            in: 'path',
            description: 'The ID of the waitlist entry to reject',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: WaitlistEntryResponse,
    400: ClerkErrorsResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getCommercePlansRoute = createRoute({
  method: 'get',
  path: '/commerce/plans',
  tags: ['Commerce'],
  summary: 'List all commerce plans',
  description:
    'Returns a list of all commerce plans for the instance. The plans are returned sorted by creation date,\nwith the newest plans appearing first. This includes both free and paid plans. Pagination is supported.',
  operationId: 'GetCommercePlanList',
  request: {
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      payer_type: z
        .enum(['user', 'org'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'payer_type',
            description: 'Filter plans by payer type',
            required: false,
            schema: { type: 'string', enum: ['user', 'org'] },
          },
        }),
    }),
  },
  responses: {
    200: CommercePlanListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const getCommerceSubscriptionItemsRoute = createRoute({
  method: 'get',
  path: '/commerce/subscription_items',
  tags: ['Commerce'],
  summary: 'List all subscription items',
  description:
    'Returns a list of all subscription items for the instance. The subscription items are returned sorted by creation date,\nwith the newest appearing first. This includes subscriptions for both users and organizations. Pagination is supported.',
  operationId: 'GetCommerceSubscriptionItemList',
  request: {
    query: z.object({
      paginated: PaginatedParamsSchema,
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
      status: z
        .enum(['active', 'ended', 'past_due', 'upcoming', 'free_trial'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter subscription items by status',
            required: false,
            schema: {
              type: 'string',
              enum: ['active', 'ended', 'past_due', 'upcoming', 'free_trial'],
            },
          },
        }),
      payer_type: z
        .enum(['user', 'org'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'payer_type',
            description: 'Filter subscription items by payer type',
            required: false,
            schema: { type: 'string', enum: ['user', 'org'] },
          },
        }),
      plan_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'plan_id',
            description: 'Filter subscription items by plan ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_free: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_free',
            description: 'Whether to include free plan subscription items',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description:
              'Search query to filter subscription items by email, user first name, user last name, or organization name.\nSupports partial matching.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_id',
            description: 'Filter subscription items by user ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organization_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'organization_id',
            description: 'Filter subscription items by organization ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: CommerceSubscriptionItemListResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const deleteCommerceSubscriptionItemsSubscriptionItemIdRoute = createRoute({
  method: 'delete',
  path: '/commerce/subscription_items/{subscription_item_id}',
  tags: ['Commerce'],
  summary: 'Cancel a subscription item',
  description:
    'Cancel a specific subscription item. The subscription item can be canceled immediately or at the end of the current billing period.',
  operationId: 'CancelCommerceSubscriptionItem',
  request: {
    params: z.object({
      subscription_item_id: z
        .string()
        .openapi({
          param: {
            name: 'subscription_item_id',
            in: 'path',
            description: 'The ID of the subscription item to cancel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      end_now: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'end_now',
            description:
              'Whether to cancel the subscription immediately (true) or at the end of the current billing period (false, default)',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: CommerceSubscriptionItemResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRoute = createRoute({
  method: 'post',
  path: '/billing/subscription_items/{subscription_item_id}/extend_free_trial',
  tags: ['Billing'],
  summary: 'Extend free trial for a subscription item',
  description:
    'Extends the free trial period for a specific subscription item to the specified timestamp.\nThe subscription item must be currently in a free trial period, and the plan must support free trials.\nThe timestamp must be in the future and not more than 365 days from the end of the current trial period\nThis operation is idempotent - repeated requests with the same timestamp will not change the trial period.',
  operationId: 'ExtendBillingSubscriptionItemFreeTrial',
  request: {
    params: z.object({
      subscription_item_id: z
        .string()
        .openapi({
          param: {
            name: 'subscription_item_id',
            in: 'path',
            description: 'The ID of the subscription item to extend the free trial for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Parameters for extending the free trial',
      content: { 'application/json': { schema: ExtendFreeTrialRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: CommerceSubscriptionItemResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRoute = createRoute({
  method: 'post',
  path: '/billing/subscription_items/{subscription_item_id}/price_transition',
  tags: ['Billing'],
  summary: 'Create a price transition for a subscription item',
  description:
    'Creates a price transition for the specified subscription item.\nThis may create an upcoming subscription item or activate immediately depending on plan and payer rules.',
  operationId: 'CreateBillingPriceTransition',
  request: {
    params: z.object({
      subscription_item_id: z
        .string()
        .openapi({
          param: {
            name: 'subscription_item_id',
            in: 'path',
            description: 'The ID of the subscription item to transition',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Parameters for the price transition',
      content: { 'application/json': { schema: PriceTransitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: CommercePriceTransitionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const postBillingSubscriptionItemsSubscriptionItemIdDiscountsRoute = createRoute({
  method: 'post',
  path: '/billing/subscription_items/{subscription_item_id}/discounts',
  tags: ['Billing'],
  summary: 'Apply a discount to a subscription item',
  description:
    'Applies an existing discount to a subscription item.\nManual application is an override path: self-serve distribution rules are not enforced.\nAt most one active discount is allowed per subscription item; applying a different\ndiscount replaces the currently active one. Re-applying the same active discount returns a conflict.',
  operationId: 'ApplyBillingSubscriptionItemDiscount',
  request: {
    params: z.object({
      subscription_item_id: z
        .string()
        .openapi({
          param: {
            name: 'subscription_item_id',
            in: 'path',
            description: 'The ID of the subscription item to apply the discount to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Parameters for applying the discount',
      content: { 'application/json': { schema: ApplyCommerceDiscountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: CommerceDiscountRedemptionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
    500: ClerkErrorsResponse,
  },
})

export const deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRoute = createRoute(
  {
    method: 'delete',
    path: '/billing/subscription_items/{subscription_item_id}/discounts/{discount_id}',
    tags: ['Billing'],
    summary: 'Remove a discount from a subscription item',
    description:
      "Removes the active discount from a subscription item.\nThe discount_id must match the subscription item's currently active discount.",
    operationId: 'RemoveBillingSubscriptionItemDiscount',
    request: {
      params: z.object({
        subscription_item_id: z
          .string()
          .openapi({
            param: {
              name: 'subscription_item_id',
              in: 'path',
              description: 'The ID of the subscription item to remove the discount from',
              required: true,
              schema: { type: 'string' },
            },
          }),
        discount_id: z
          .string()
          .openapi({
            param: {
              name: 'discount_id',
              in: 'path',
              description: 'The ID of the discount to remove',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: CommerceDiscountRedemptionResponse,
      400: ClerkErrorsResponse,
      401: AuthenticationInvalidResponse,
      403: AuthorizationInvalidResponse,
      404: ResourceNotFoundResponse,
      409: ConflictResponse,
      422: UnprocessableEntityResponse,
      500: ClerkErrorsResponse,
    },
  },
)

export const getOrganizationPermissionsRoute = createRoute({
  method: 'get',
  path: '/organization_permissions',
  tags: ['Organization Permissions'],
  summary: 'Get a list of all organization permissions',
  description: 'Retrieves all organization permissions for the given instance.',
  operationId: 'ListOrganizationPermissions',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Returns organization permissions with ID, name, or key that match the given query.\nUses exact match for permission ID and partial match for name and key.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            description:
              'Allows to return organization permissions in a particular order.\nAt the moment, you can order the returned permissions by their `created_at`, `name`, or `key`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want permissions to be returned in descending order according to their `created_at` property, you can use `-created_at`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: PermissionsResponse,
    401: AuthenticationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postOrganizationPermissionsRoute = createRoute({
  method: 'post',
  path: '/organization_permissions',
  tags: ['Organization Permissions'],
  summary: 'Create a new organization permission',
  description: 'Creates a new organization permission for the given instance.',
  operationId: 'CreateOrganizationPermission',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the permission.' }),
              key: z
                .string()
                .openapi({
                  description:
                    'The key of the permission. Must have the format "org:feature:action" where feature and action are segments consisting of lowercase letters, digits, or underscores, for example "org:billing:manage" or "org:team:read". Cannot begin with "org:sys_" as that prefix is reserved for system permissions.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description of the permission.' }),
            })
            .openapi({ required: ['name', 'key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PermissionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getOrganizationPermissionsPermissionIdRoute = createRoute({
  method: 'get',
  path: '/organization_permissions/{permission_id}',
  tags: ['Organization Permissions'],
  summary: 'Get an organization permission',
  description: 'Retrieves the details of an organization permission.',
  operationId: 'GetOrganizationPermission',
  request: {
    params: z.object({
      permission_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'permission_id',
            schema: { type: 'string' },
            description: 'The ID of the permission to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: PermissionResponse,
    401: AuthenticationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const deleteOrganizationPermissionsPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/organization_permissions/{permission_id}',
  tags: ['Organization Permissions'],
  summary: 'Delete an organization permission',
  description: 'Deletes an organization permission.\nSystem permissions cannot be deleted.',
  operationId: 'DeleteOrganizationPermission',
  request: {
    params: z.object({
      permission_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'permission_id',
            schema: { type: 'string' },
            description: 'The ID of the permission to delete',
          },
        }),
    }),
  },
  responses: {
    200: DeletedObjectResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchOrganizationPermissionsPermissionIdRoute = createRoute({
  method: 'patch',
  path: '/organization_permissions/{permission_id}',
  tags: ['Organization Permissions'],
  summary: 'Update an organization permission',
  description:
    'Updates the properties of an existing organization permission.\nSystem permissions cannot be updated.',
  operationId: 'UpdateOrganizationPermission',
  request: {
    params: z.object({
      permission_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'permission_id',
            schema: { type: 'string' },
            description: 'The ID of the permission to update',
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
                .openapi({ description: 'The name of the permission.' }),
              key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The key of the permission. Must have the format "org:feature:action" where feature and action are segments consisting of lowercase letters, digits, or underscores. Cannot begin with "org:sys_" as that prefix is reserved for system permissions.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description of the permission.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: PermissionResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getRoleSetsRoute = createRoute({
  method: 'get',
  path: '/role_sets',
  tags: ['Role Sets'],
  summary: 'Get a list of role sets',
  description:
    'Returns a list of role sets for the instance.\nResults can be paginated using the optional `limit` and `offset` query parameters.\nThe role sets are ordered by descending creation date by default.',
  operationId: 'ListRoleSets',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description:
              'Returns role sets with ID, name, or key that match the given query.\nUses exact match for role set ID and partial match for name and key.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .default('-created_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Allows to return role sets in a particular order.\nAt the moment, you can order the returned role sets by their `created_at`, `name`, or `key`.\nIn order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.\nFor example, if you want role sets to be returned in descending order according to their `created_at` property, you can use `-created_at`.\nIf you don't use `+` or `-`, then `+` is implied.\nDefaults to `-created_at`.",
            required: false,
            schema: { type: 'string', default: '-created_at' },
          },
        }),
      limit: LimitParameterParamsSchema,
      offset: OffsetParameterParamsSchema,
    }),
  },
  responses: {
    200: RoleSetsResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postRoleSetsRoute = createRoute({
  method: 'post',
  path: '/role_sets',
  tags: ['Role Sets'],
  summary: 'Create a role set',
  description:
    "Creates a new role set with the given name and roles.\nThe key must be unique for the instance and start with the 'role_set:' prefix, followed by lowercase alphanumeric characters and underscores only.\nYou must provide at least one role and specify a default role key and creator role key.",
  operationId: 'CreateRoleSet',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().openapi({ description: 'The name of the new role set' }),
              key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A unique key for the role set. Must start with 'role_set:' and contain only lowercase alphanumeric characters and underscores.\nIf not provided, a key will be generated from the name.",
                }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional description for the role set' }),
              default_role_key: z
                .string()
                .openapi({
                  description:
                    'The key of the role to use as the default role for new organization members.\nMust be one of the roles in the `roles` array.',
                }),
              creator_role_key: z
                .string()
                .openapi({
                  description:
                    'The key of the role to assign to organization creators.\nMust be one of the roles in the `roles` array.',
                }),
              type: z
                .enum(['initial', 'custom'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of the role set. "initial" role sets are the default for new organizations.\nOnly one role set can be "initial" per instance.',
                }),
              roles: z
                .array(z.string())
                .openapi({
                  description:
                    'Array of role keys to include in the role set.\nMust contain at least one role and no more than 10 roles.',
                }),
            })
            .openapi({ required: ['name', 'default_role_key', 'creator_role_key', 'roles'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: RoleSetResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    402: PaymentRequiredResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const getRoleSetsRoleSetKeyOrIdRoute = createRoute({
  method: 'get',
  path: '/role_sets/{role_set_key_or_id}',
  tags: ['Role Sets'],
  summary: 'Retrieve a role set',
  description: 'Retrieves an existing role set by its key or ID.',
  operationId: 'GetRoleSet',
  request: {
    params: z.object({
      role_set_key_or_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'role_set_key_or_id',
            schema: { type: 'string' },
            description: 'The key or ID of the role set',
          },
        }),
    }),
  },
  responses: {
    200: RoleSetResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
  },
})

export const patchRoleSetsRoleSetKeyOrIdRoute = createRoute({
  method: 'patch',
  path: '/role_sets/{role_set_key_or_id}',
  tags: ['Role Sets'],
  summary: 'Update a role set',
  description:
    'Updates an existing role set.\nYou can update the name, key, description, type, default role, or creator role.\nAll parameters are optional - you can update only the fields you want to change.',
  operationId: 'UpdateRoleSet',
  request: {
    params: z.object({
      role_set_key_or_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'role_set_key_or_id',
            schema: { type: 'string' },
            description: 'The key or ID of the role set to update',
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
                .nullable()
                .exactOptional()
                .openapi({ description: 'The new name for the role set' }),
              key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "A unique key for the role set. Must start with 'role_set:' and contain only lowercase alphanumeric characters and underscores.",
                }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional description for the role set' }),
              type: z
                .literal('initial')
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Set to "initial" to make this the default role set for new organizations.\nOnly one role set can be "initial" per instance; setting this will change any existing initial role set to "custom".',
                }),
              default_role_key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The key of the role to use as the default role for new organization members.\nMust be an existing role in the role set.',
                }),
              creator_role_key: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The key of the role to assign to organization creators.\nMust be an existing role in the role set.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: RoleSetResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postRoleSetsRoleSetKeyOrIdReplaceRoute = createRoute({
  method: 'post',
  path: '/role_sets/{role_set_key_or_id}/replace',
  tags: ['Role Sets'],
  summary: 'Replace a role set',
  description:
    'Replaces a role set with another role set. This is functionally equivalent to deleting\nthe role set but allows for atomic replacement with migration support.\nOrganizations using this role set will be migrated to the destination role set.',
  operationId: 'ReplaceRoleSet',
  request: {
    params: z.object({
      role_set_key_or_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'role_set_key_or_id',
            schema: { type: 'string' },
            description: 'The key or ID of the role set to replace',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dest_role_set_key: z
                .string()
                .openapi({ description: 'The key of the destination role set' }),
              reassignment_mappings: ReassignmentMappingsSchema.exactOptional().openapi({
                description:
                  'Mappings from source role keys to destination role keys.\nRequired if members have roles that need to be reassigned.',
              }),
            })
            .openapi({ required: ['dest_role_set_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: DeletedObjectResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postRoleSetsRoleSetKeyOrIdRolesRoute = createRoute({
  method: 'post',
  path: '/role_sets/{role_set_key_or_id}/roles',
  tags: ['Role Sets'],
  summary: 'Add roles to a role set',
  description:
    'Adds one or more roles to an existing role set.\nYou can optionally update the default role or creator role when adding new roles.',
  operationId: 'AddRolesToRoleSet',
  request: {
    params: z.object({
      role_set_key_or_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'role_set_key_or_id',
            schema: { type: 'string' },
            description: 'The key or ID of the role set',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role_keys: z
                .array(z.string())
                .openapi({
                  description:
                    'Array of role keys to add to the role set.\nMust contain at least one role and no more than 10 roles.',
                }),
              default_role_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optionally update the default role to one of the newly added roles.',
                }),
              creator_role_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optionally update the creator role to one of the newly added roles.',
                }),
            })
            .openapi({ required: ['role_keys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: RoleSetResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postRoleSetsRoleSetKeyOrIdRolesReplaceRoute = createRoute({
  method: 'post',
  path: '/role_sets/{role_set_key_or_id}/roles/replace',
  tags: ['Role Sets'],
  summary: 'Replace a role in a role set',
  description:
    'Replaces a role in a role set with another role. This atomically removes\nthe source role and reassigns any members to the destination role.',
  operationId: 'ReplaceRoleInRoleSet',
  request: {
    params: z.object({
      role_set_key_or_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'role_set_key_or_id',
            schema: { type: 'string' },
            description: 'The key or ID of the role set',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role_key: z
                .string()
                .openapi({ description: 'The key of the role to remove from the role set' }),
              to_role_key: z
                .string()
                .openapi({ description: 'The key of the role to reassign members to' }),
            })
            .openapi({ required: ['role_key', 'to_role_key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: RoleSetResponse,
    400: ClerkErrorsResponse,
    401: AuthenticationInvalidResponse,
    403: AuthorizationInvalidResponse,
    404: ResourceNotFoundResponse,
    422: UnprocessableEntityResponse,
  },
})

export const postAdminPortalLinkTokensRoute = createRoute({
  method: 'post',
  path: '/admin_portal_link_tokens',
  tags: ['Admin Portal Link Tokens'],
  summary: 'Create an Admin Portal Link Token',
  operationId: 'createAdminPortalLinkToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              organization_id: z
                .string()
                .regex(/^org_\w{27}$/)
                .exactOptional(),
              it_contact_id: z.string().min(1).exactOptional(),
              scopes: z.array(z.string().min(1)).exactOptional(),
              seconds_until_expiration: z.int().positive().max(86400).default(3600).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '201 Created',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('admin_portal_link_token'),
              id: z
                .string()
                .regex(/^aplt_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'aplt_3beecc9c60adb5f9b850e91a83beecc9' }),
              admin_portal_link_id: z
                .string()
                .regex(/^apl_\w{27}$/)
                .openapi({
                  description: 'The origin-level admin_portal_link this token was issued for.',
                  example: 'apl_3beecc9c60adb5f9b850e91a8d2',
                }),
              instance_id: z
                .string()
                .regex(/^ins_\w{27}$/)
                .openapi({ example: 'ins_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              organization_id: z
                .string()
                .regex(/^org_\w{27}$/)
                .nullable()
                .openapi({
                  description: 'Optional. Present only when the link is scoped to an existing org.',
                  example: 'org_2xhFjEI5X2qWRvtV13BzSj8H6Dk',
                }),
              it_contact_id: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'Optional opaque reference to the IT contact associated with this link.',
                  example: 'usr_abc123',
                }),
              scopes: z
                .array(z.string())
                .nullable()
                .openapi({
                  description: 'Caller-provided scopes for this token.',
                  example: ['admin_portal:read'],
                }),
              token: z
                .string()
                .openapi({
                  description:
                    'The single-use admin portal link token. Returned only on creation. URL-borne; treat as a secret.',
                  example: 'aplt_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token will expire, in milliseconds.',
                  example: 1716883200000,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was created, in milliseconds.',
                  example: 1716883200000,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the token was last updated, in milliseconds.',
                  example: 1716883200000,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'admin_portal_link_id',
                'instance_id',
                'organization_id',
                'it_contact_id',
                'scopes',
                'token',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    401: {
      description: '401 Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    403: {
      description: '403 Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    409: {
      description: '409 Conflict',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute = createRoute({
  method: 'post',
  path: '/admin_portal_link_tokens/{adminPortalLinkTokenID}/revoke',
  tags: ['Admin Portal Link Tokens'],
  summary: 'Revoke an Admin Portal Link Token',
  operationId: 'revokeAdminPortalLinkToken',
  request: {
    params: z.object({
      adminPortalLinkTokenID: z
        .string()
        .regex(/^aplt_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^aplt_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'adminPortalLinkTokenID',
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ revocation_reason: z.string().nullable().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('admin_portal_link_token'),
              id: z
                .string()
                .regex(/^aplt_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'aplt_3beecc9c60adb5f9b850e91a83beecc9' }),
              admin_portal_link_id: z
                .string()
                .regex(/^apl_\w{27}$/)
                .openapi({
                  description: 'The origin-level admin_portal_link this token was issued for.',
                  example: 'apl_3beecc9c60adb5f9b850e91a8d2',
                }),
              instance_id: z
                .string()
                .regex(/^ins_\w{27}$/)
                .openapi({ example: 'ins_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              organization_id: z
                .string()
                .regex(/^org_\w{27}$/)
                .nullable()
                .openapi({
                  description: 'Optional. Present only when the link is scoped to an existing org.',
                  example: 'org_2xhFjEI5X2qWRvtV13BzSj8H6Dk',
                }),
              it_contact_id: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'Optional opaque reference to the IT contact associated with this link.',
                  example: 'usr_abc123',
                }),
              scopes: z
                .array(z.string())
                .nullable()
                .openapi({
                  description: 'Caller-provided scopes for this token.',
                  example: ['admin_portal:read'],
                }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token will expire, in milliseconds.',
                  example: 1716883200000,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was created, in milliseconds.',
                  example: 1716883200000,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the token was last updated, in milliseconds.',
                  example: 1716883200000,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'admin_portal_link_id',
                'instance_id',
                'organization_id',
                'it_contact_id',
                'scopes',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    401: {
      description: '401 Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    403: {
      description: '403 Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const getApiKeysRoute = createRoute({
  method: 'get',
  path: '/api_keys',
  tags: ['API Keys'],
  summary: 'Get API Keys',
  operationId: 'getApiKeys',
  request: {
    query: z.object({
      type: z
        .string()
        .min(3)
        .default('api_key')
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', minLength: 3, default: 'api_key' },
            required: false,
            name: 'type',
            in: 'query',
          },
        }),
      subject: z
        .string()
        .regex(/^(user|org|mch|scim)_\w{27}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^(user|org|mch|scim)_\\w{27}$' },
            required: true,
            name: 'subject',
            in: 'query',
          },
        }),
      include_invalid: z
        .enum(['true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['true', 'false'], default: 'false' },
            required: false,
            name: 'include_invalid',
            in: 'query',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', minimum: 1, maximum: 100, default: 10 },
            required: false,
            name: 'limit',
            in: 'query',
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number().min(0),
            )
            .nullable(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', nullable: true, minimum: 0, default: 0 },
            required: false,
            name: 'offset',
            in: 'query',
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, required: false, name: 'query', in: 'query' },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .strictObject({
                    object: z.literal('api_key'),
                    id: z
                      .string()
                      .regex(/^ak_[0-9A-Fa-f]{32}$/)
                      .openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
                    type: z.string().min(3).openapi({ example: 'api_key' }),
                    subject: z
                      .string()
                      .regex(/^(user|org|mch)_\w{27}$/)
                      .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
                    name: z.string().openapi({ example: 'MY_SERVICE_API_KEY' }),
                    description: z
                      .string()
                      .max(255)
                      .nullable()
                      .exactOptional()
                      .openapi({ example: 'This is my API Key' }),
                    claims: z
                      .any()
                      .nullable()
                      .openapi({ example: { foo: 'bar' } }),
                    scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
                    revoked: z.boolean().openapi({ example: false }),
                    revocation_reason: z
                      .string()
                      .nullable()
                      .openapi({ example: 'Revoked by user' }),
                    expired: z.boolean().openapi({ example: false }),
                    expiration: z
                      .number()
                      .nullable()
                      .openapi({
                        description:
                          'The timestamp for when the API key will expire, in milliseconds',
                        example: 1716883200,
                      }),
                    created_by: z
                      .string()
                      .regex(/^user_\w{27}$/)
                      .nullable()
                      .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
                    last_used_at: z
                      .number()
                      .nullable()
                      .openapi({
                        description:
                          'The timestamp for when the API key was last used, in milliseconds',
                        example: 1716883200,
                      }),
                    created_at: z
                      .number()
                      .openapi({
                        description:
                          'The timestamp for when the API key was created, in milliseconds',
                        example: 1716883200,
                      }),
                    updated_at: z
                      .number()
                      .openapi({
                        description:
                          'The timestamp for when the API key was last updated, in milliseconds',
                        example: 1716883200,
                      }),
                  })
                  .openapi({
                    required: [
                      'object',
                      'id',
                      'type',
                      'subject',
                      'name',
                      'claims',
                      'scopes',
                      'revoked',
                      'revocation_reason',
                      'expired',
                      'expiration',
                      'created_by',
                      'last_used_at',
                      'created_at',
                      'updated_at',
                    ],
                  }),
              ),
              total_count: z.number(),
            })
            .openapi({ required: ['data', 'total_count'] }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postApiKeysRoute = createRoute({
  method: 'post',
  path: '/api_keys',
  tags: ['API Keys'],
  summary: 'Create an API Key',
  operationId: 'createApiKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              type: z.string().min(3).max(25).default('api_key').exactOptional(),
              name: z
                .string()
                .regex(/^(\S(.*\S)?)?$/)
                .min(3),
              description: z.string().max(255).nullable().exactOptional(),
              subject: z.string().regex(/^(user|org|mch|scim)_\w{27}$/),
              claims: z.any().nullable().exactOptional(),
              scopes: z.array(z.string()).default([]).exactOptional(),
              created_by: z
                .string()
                .regex(/^user_\w{27}$/)
                .nullable()
                .exactOptional(),
              seconds_until_expiration: z.number().positive().nullable().exactOptional(),
            })
            .openapi({ required: ['name', 'subject'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('api_key'),
              id: z
                .string()
                .regex(/^ak_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
              type: z.string().min(3).openapi({ example: 'api_key' }),
              subject: z
                .string()
                .regex(/^(user|org|mch)_\w{27}$/)
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              name: z.string().openapi({ example: 'MY_SERVICE_API_KEY' }),
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ example: 'This is my API Key' }),
              claims: z
                .any()
                .nullable()
                .openapi({ example: { foo: 'bar' } }),
              scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
              secret: z.string().openapi({ example: 'ak_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key will expire, in milliseconds',
                  example: 1716883200,
                }),
              created_by: z
                .string()
                .regex(/^user_\w{27}$/)
                .nullable()
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key was last used, in milliseconds',
                  example: 1716883200,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the API key was created, in milliseconds',
                  example: 1716883200,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the API key was last updated, in milliseconds',
                  example: 1716883200,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'type',
                'subject',
                'name',
                'claims',
                'scopes',
                'secret',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_by',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    409: {
      description: '409 Conflict',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const getApiKeysApiKeyIDRoute = createRoute({
  method: 'get',
  path: '/api_keys/{apiKeyID}',
  tags: ['API Keys'],
  summary: 'Get an API Key by ID',
  operationId: 'getApiKey',
  request: {
    params: z.object({
      apiKeyID: z
        .string()
        .regex(/^(ak|api_key)_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^(ak|api_key)_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'apiKeyID',
            in: 'path',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('api_key'),
              id: z
                .string()
                .regex(/^ak_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
              type: z.string().min(3).openapi({ example: 'api_key' }),
              subject: z
                .string()
                .regex(/^(user|org|mch)_\w{27}$/)
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              name: z.string().openapi({ example: 'MY_SERVICE_API_KEY' }),
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ example: 'This is my API Key' }),
              claims: z
                .any()
                .nullable()
                .openapi({ example: { foo: 'bar' } }),
              scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key will expire, in milliseconds',
                  example: 1716883200,
                }),
              created_by: z
                .string()
                .regex(/^user_\w{27}$/)
                .nullable()
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key was last used, in milliseconds',
                  example: 1716883200,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the API key was created, in milliseconds',
                  example: 1716883200,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the API key was last updated, in milliseconds',
                  example: 1716883200,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'type',
                'subject',
                'name',
                'claims',
                'scopes',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_by',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const deleteApiKeysApiKeyIDRoute = createRoute({
  method: 'delete',
  path: '/api_keys/{apiKeyID}',
  tags: ['API Keys'],
  summary: 'Delete an API Key',
  operationId: 'deleteApiKey',
  request: {
    params: z.object({
      apiKeyID: z
        .string()
        .regex(/^(ak|api_key)_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^(ak|api_key)_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'apiKeyID',
            in: 'path',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
              object: z.literal('api_key'),
              deleted: z.literal(true),
            })
            .openapi({ required: ['id', 'object', 'deleted'] }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const patchApiKeysApiKeyIDRoute = createRoute({
  method: 'patch',
  path: '/api_keys/{apiKeyID}',
  tags: ['API Keys'],
  summary: 'Update an API Key',
  operationId: 'updateApiKey',
  request: {
    params: z.object({
      apiKeyID: z
        .string()
        .regex(/^(ak|api_key)_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^(ak|api_key)_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'apiKeyID',
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              claims: z.any().nullable().exactOptional(),
              scopes: z.array(z.string()).exactOptional(),
              description: z.string().max(255).nullable().exactOptional(),
              subject: z
                .string()
                .regex(/^(user|org|mch|scim)_\w{27}$/)
                .exactOptional(),
              seconds_until_expiration: z.number().positive().nullable().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('api_key'),
              id: z
                .string()
                .regex(/^ak_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
              type: z.string().min(3).openapi({ example: 'api_key' }),
              subject: z
                .string()
                .regex(/^(user|org|mch)_\w{27}$/)
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              name: z.string().openapi({ example: 'MY_SERVICE_API_KEY' }),
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ example: 'This is my API Key' }),
              claims: z
                .any()
                .nullable()
                .openapi({ example: { foo: 'bar' } }),
              scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key will expire, in milliseconds',
                  example: 1716883200,
                }),
              created_by: z
                .string()
                .regex(/^user_\w{27}$/)
                .nullable()
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key was last used, in milliseconds',
                  example: 1716883200,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the API key was created, in milliseconds',
                  example: 1716883200,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the API key was last updated, in milliseconds',
                  example: 1716883200,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'type',
                'subject',
                'name',
                'claims',
                'scopes',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_by',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const getApiKeysApiKeyIDSecretRoute = createRoute({
  method: 'get',
  path: '/api_keys/{apiKeyID}/secret',
  tags: ['API Keys'],
  summary: 'Get an API Key Secret',
  operationId: 'getApiKeySecret',
  request: {
    params: z.object({
      apiKeyID: z
        .string()
        .regex(/^(ak|api_key)_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^(ak|api_key)_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'apiKeyID',
            in: 'path',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z.object({ secret: z.string() }).openapi({ required: ['secret'] }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postApiKeysApiKeyIDRevokeRoute = createRoute({
  method: 'post',
  path: '/api_keys/{apiKeyID}/revoke',
  tags: ['API Keys'],
  summary: 'Revoke an API Key',
  operationId: 'revokeApiKey',
  request: {
    params: z.object({
      apiKeyID: z
        .string()
        .regex(/^(ak|api_key)_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^(ak|api_key)_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'apiKeyID',
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ revocation_reason: z.string().nullable().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('api_key'),
              id: z
                .string()
                .regex(/^ak_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
              type: z.string().min(3).openapi({ example: 'api_key' }),
              subject: z
                .string()
                .regex(/^(user|org|mch)_\w{27}$/)
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              name: z.string().openapi({ example: 'MY_SERVICE_API_KEY' }),
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ example: 'This is my API Key' }),
              claims: z
                .any()
                .nullable()
                .openapi({ example: { foo: 'bar' } }),
              scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key will expire, in milliseconds',
                  example: 1716883200,
                }),
              created_by: z
                .string()
                .regex(/^user_\w{27}$/)
                .nullable()
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key was last used, in milliseconds',
                  example: 1716883200,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the API key was created, in milliseconds',
                  example: 1716883200,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the API key was last updated, in milliseconds',
                  example: 1716883200,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'type',
                'subject',
                'name',
                'claims',
                'scopes',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_by',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postApiKeysVerifyRoute = createRoute({
  method: 'post',
  path: '/api_keys/verify',
  tags: ['API Keys'],
  summary: 'Verify an API Key',
  operationId: 'verifyApiKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ secret: z.string() }).openapi({ required: ['secret'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('api_key'),
              id: z
                .string()
                .regex(/^ak_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'ak_3beecc9c60adb5f9b850e91a8ee1e992' }),
              type: z.string().min(3).openapi({ example: 'api_key' }),
              subject: z
                .string()
                .regex(/^(user|org|mch)_\w{27}$/)
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              name: z.string().openapi({ example: 'MY_SERVICE_API_KEY' }),
              description: z
                .string()
                .max(255)
                .nullable()
                .exactOptional()
                .openapi({ example: 'This is my API Key' }),
              claims: z
                .any()
                .nullable()
                .openapi({ example: { foo: 'bar' } }),
              scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key will expire, in milliseconds',
                  example: 1716883200,
                }),
              created_by: z
                .string()
                .regex(/^user_\w{27}$/)
                .nullable()
                .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the API key was last used, in milliseconds',
                  example: 1716883200,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the API key was created, in milliseconds',
                  example: 1716883200,
                }),
              updated_at: z
                .number()
                .openapi({
                  description:
                    'The timestamp for when the API key was last updated, in milliseconds',
                  example: 1716883200,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'type',
                'subject',
                'name',
                'claims',
                'scopes',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'created_by',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const getM2mTokensRoute = createRoute({
  method: 'get',
  path: '/m2m_tokens',
  tags: ['M2M Tokens'],
  summary: 'Get M2M Tokens',
  description:
    'Fetches M2M tokens for a specific machine.\n\nOnly tokens created with the opaque token format are returned by this endpoint. JWT-format M2M tokens are stateless and are not stored.\n\nThis endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.\n\n- When fetching M2M tokens with a Machine Secret Key, only tokens associated with the authenticated machine can be retrieved.\n- When fetching M2M tokens with a Clerk Secret Key, tokens for any machine in the instance can be retrieved.',
  operationId: 'getM2MTokens',
  request: {
    query: z.object({
      subject: z
        .string()
        .regex(/^mch_\w{27}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^mch_\\w{27}$' },
            required: true,
            name: 'subject',
            in: 'query',
          },
        }),
      revoked: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean', nullable: true, default: false },
            required: false,
            name: 'revoked',
            in: 'query',
          },
        }),
      expired: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean', nullable: true, default: false },
            required: false,
            name: 'expired',
            in: 'query',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', minimum: 1, maximum: 100, default: 10 },
            required: false,
            name: 'limit',
            in: 'query',
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number().min(0),
            )
            .nullable(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', nullable: true, minimum: 0, default: 0 },
            required: false,
            name: 'offset',
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              m2m_tokens: z.array(
                z
                  .strictObject({
                    object: z.literal('machine_to_machine_token'),
                    id: z
                      .string()
                      .regex(/^mt_[0-9A-Fa-f]{32}$/)
                      .openapi({ example: 'mt_f7f0ba8c3b4843ce7d85fcdd5e71853e' }),
                    subject: z
                      .string()
                      .regex(/^mch_\w{27}$/)
                      .openapi({ example: 'mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
                    claims: z
                      .any()
                      .nullable()
                      .exactOptional()
                      .openapi({ example: { important_metadata: 'Some useful data' } }),
                    scopes: z
                      .array(z.string().regex(/^mch_\w{27}$/))
                      .default([])
                      .exactOptional()
                      .openapi({
                        example: [
                          'mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk',
                          'mch_2yGkLpQ7Y3rXSwtU24CzTk9I7Em',
                        ],
                      }),
                    revoked: z.boolean().openapi({ example: false }),
                    revocation_reason: z
                      .string()
                      .nullable()
                      .openapi({ example: 'Revoked by user' }),
                    expired: z.boolean().openapi({ example: false }),
                    expiration: z
                      .number()
                      .nullable()
                      .openapi({
                        description:
                          'The timestamp for when the token will expire, in milliseconds',
                        example: 1716883200000,
                      }),
                    last_used_at: z
                      .number()
                      .nullable()
                      .openapi({
                        description:
                          'The timestamp for when the token was last used, in milliseconds',
                        example: 1716883200000,
                      }),
                    created_at: z
                      .number()
                      .openapi({
                        description:
                          'The timestamp for when the token was created, in milliseconds',
                        example: 1716883200000,
                      }),
                    updated_at: z
                      .number()
                      .openapi({
                        description:
                          'The timestamp for when the token was last updated, in milliseconds',
                        example: 1716883200000,
                      }),
                  })
                  .openapi({
                    required: [
                      'object',
                      'id',
                      'subject',
                      'revoked',
                      'revocation_reason',
                      'expired',
                      'expiration',
                      'last_used_at',
                      'created_at',
                      'updated_at',
                    ],
                  }),
              ),
              total_count: z.number(),
            })
            .openapi({ required: ['m2m_tokens', 'total_count'] }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    403: {
      description: '403 Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postM2mTokensRoute = createRoute({
  method: 'post',
  path: '/m2m_tokens',
  tags: ['M2M Tokens'],
  summary: 'Create a M2M Token',
  description: 'Creates a new M2M Token. Must be authenticated via a Machine Secret Key.',
  operationId: 'createM2MToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              token_format: z.enum(['opaque', 'jwt']).default('opaque').exactOptional(),
              seconds_until_expiration: z.number().positive().nullable().exactOptional(),
              claims: z.any().nullable().exactOptional(),
              min_remaining_ttl_seconds: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    "Enables server-side token reuse for opaque-format tokens. When set, if a non-revoked, non-expired M2M token already exists for this machine with identical `claims` and `scopes` and at least this many seconds of remaining lifetime, that existing token is returned and no new token is minted.\n\nUse this when caching tokens in application memory across requests is impractical — for example, in serverless functions, short-lived job workers, or autoscaling containers that churn faster than the token TTL. Pooling at the server collapses many redundant create calls into reuse of a single live token, which is the recommended pattern for high-volume M2M traffic.\n\nMust be strictly less than the effective token lifetime — that is, `seconds_until_expiration` when provided, or the machine's default TTL otherwise. A value greater than or equal to the lifetime is rejected with a 400, since no freshly-minted token would ever satisfy the requirement.\n\nOnly applies to opaque-format tokens (`token_format` defaults to `opaque`). JWT-format tokens are stateless and are never deduplicated.",
                  example: 240,
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '201 Created',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('machine_to_machine_token'),
              id: z
                .string()
                .regex(/^mt_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'mt_f7f0ba8c3b4843ce7d85fcdd5e71853e' }),
              subject: z
                .string()
                .regex(/^mch_\w{27}$/)
                .openapi({ example: 'mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              claims: z
                .any()
                .nullable()
                .exactOptional()
                .openapi({ example: { important_metadata: 'Some useful data' } }),
              scopes: z
                .array(z.string().regex(/^mch_\w{27}$/))
                .default([])
                .exactOptional()
                .openapi({
                  example: ['mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk', 'mch_2yGkLpQ7Y3rXSwtU24CzTk9I7Em'],
                }),
              token: z.string().openapi({ example: 'mt_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token will expire, in milliseconds',
                  example: 1716883200000,
                }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token was last used, in milliseconds',
                  example: 1716883200000,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was created, in milliseconds',
                  example: 1716883200000,
                }),
              updated_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was last updated, in milliseconds',
                  example: 1716883200000,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'subject',
                'token',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    409: {
      description: '409 Conflict',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postM2mTokensM2mTokenIdRevokeRoute = createRoute({
  method: 'post',
  path: '/m2m_tokens/{m2m_token_id}/revoke',
  tags: ['M2M Tokens'],
  summary: 'Revoke a M2M Token',
  description:
    'Revokes a M2M Token.\n\nThis endpoint only revokes stored opaque-format M2M tokens. JWT-format M2M tokens are stateless and cannot be revoked.\n\nThis endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.\n\n- When revoking a M2M Token with a Machine Secret Key, the token must managed by the Machine associated with the Machine Secret Key.\n- When revoking a M2M Token with a Clerk Secret Key, any token on the Instance can be revoked.',
  operationId: 'revokeM2MToken',
  request: {
    params: z.object({
      m2m_token_id: z
        .string()
        .regex(/^mt_[0-9A-Fa-f]{32}$/)
        .openapi({
          param: {
            schema: { type: 'string', pattern: '^mt_[0-9A-Fa-f]{32}$' },
            required: true,
            name: 'm2m_token_id',
            in: 'path',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ revocation_reason: z.string().nullable().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('machine_to_machine_token'),
              id: z
                .string()
                .regex(/^mt_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'mt_f7f0ba8c3b4843ce7d85fcdd5e71853e' }),
              subject: z
                .string()
                .regex(/^mch_\w{27}$/)
                .openapi({ example: 'mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              claims: z
                .any()
                .nullable()
                .exactOptional()
                .openapi({ example: { important_metadata: 'Some useful data' } }),
              scopes: z
                .array(z.string().regex(/^mch_\w{27}$/))
                .default([])
                .exactOptional()
                .openapi({
                  example: ['mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk', 'mch_2yGkLpQ7Y3rXSwtU24CzTk9I7Em'],
                }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token will expire, in milliseconds',
                  example: 1716883200000,
                }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token was last used, in milliseconds',
                  example: 1716883200000,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was created, in milliseconds',
                  example: 1716883200000,
                }),
              updated_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was last updated, in milliseconds',
                  example: 1716883200000,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'subject',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postM2mTokensVerifyRoute = createRoute({
  method: 'post',
  path: '/m2m_tokens/verify',
  tags: ['M2M Tokens'],
  summary: 'Verify a M2M Token',
  description:
    'Verifies a M2M Token.\n\nThis endpoint can be authenticated by either a Machine Secret Key or by a Clerk Secret Key.\n\n- When verifying a M2M Token with a Machine Secret Key, the token must be granted access to the Machine associated with the Machine Secret Key.\n- When verifying a M2M Token with a Clerk Secret Key, any token on the Instance can be verified.',
  operationId: 'verifyM2MToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ token: z.string() }).openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              object: z.literal('machine_to_machine_token'),
              id: z
                .string()
                .regex(/^mt_[0-9A-Fa-f]{32}$/)
                .openapi({ example: 'mt_f7f0ba8c3b4843ce7d85fcdd5e71853e' }),
              subject: z
                .string()
                .regex(/^mch_\w{27}$/)
                .openapi({ example: 'mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
              claims: z
                .any()
                .nullable()
                .exactOptional()
                .openapi({ example: { important_metadata: 'Some useful data' } }),
              scopes: z
                .array(z.string().regex(/^mch_\w{27}$/))
                .default([])
                .exactOptional()
                .openapi({
                  example: ['mch_2xhFjEI5X2qWRvtV13BzSj8H6Dk', 'mch_2yGkLpQ7Y3rXSwtU24CzTk9I7Em'],
                }),
              revoked: z.boolean().openapi({ example: false }),
              revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
              expired: z.boolean().openapi({ example: false }),
              expiration: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token will expire, in milliseconds',
                  example: 1716883200000,
                }),
              last_used_at: z
                .number()
                .nullable()
                .openapi({
                  description: 'The timestamp for when the token was last used, in milliseconds',
                  example: 1716883200000,
                }),
              created_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was created, in milliseconds',
                  example: 1716883200000,
                }),
              updated_at: z
                .number()
                .openapi({
                  description: 'The timestamp for when the token was last updated, in milliseconds',
                  example: 1716883200000,
                }),
            })
            .openapi({
              required: [
                'object',
                'id',
                'subject',
                'revoked',
                'revocation_reason',
                'expired',
                'expiration',
                'last_used_at',
                'created_at',
                'updated_at',
              ],
            }),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postOauthApplicationsAccessTokensVerifyRoute = createRoute({
  method: 'post',
  path: '/oauth_applications/access_tokens/verify',
  tags: ['OAuth Access Tokens'],
  summary: 'Verify an OAuth Access Token',
  operationId: 'verifyOAuthAccessToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'The access token to verify.', example: 'XXXXXXXXXXXXXX' }),
              secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The access token to verify. This is deprecated, use `access_token` instead.',
                  deprecated: true,
                  example: 'XXXXXXXXXXXXXX',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 OK',
      content: {
        'application/json': {
          schema: z.union([
            z
              .strictObject({
                object: z
                  .literal('clerk_idp_oauth_access_token')
                  .openapi({ example: 'clerk_idp_oauth_access_token' }),
                id: z
                  .string()
                  .regex(/^oat_[0-9A-Fa-f]{32}$/)
                  .openapi({ example: 'oat_0ef5a7a33d87ed87ee7954c845d80450' }),
                client_id: z.string().openapi({ example: 'client_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
                subject: z
                  .string()
                  .regex(/^user_\w{27}$/)
                  .openapi({ example: 'user_2xhFjEI5X2qWRvtV13BzSj8H6Dk' }),
                scopes: z.array(z.string()).openapi({ example: ['read', 'write'] }),
                aud: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'The audiences of the access token. Omitted when no audience is set.',
                    example: ['https://api.example.com'],
                  }),
                act: z
                  .object({
                    iss: z.string().exactOptional(),
                    sub: z.string(),
                    act: z
                      .object({ iss: z.string().exactOptional(), sub: z.string() })
                      .exactOptional()
                      .openapi({ required: ['sub'] }),
                  })
                  .exactOptional()
                  .openapi({
                    required: ['sub'],
                    description:
                      'The actor chain of an access token issued by an OAuth 2.0 Token Exchange (RFC 8693 section 4.1). Omitted for other access tokens.',
                    example: {
                      iss: 'https://clerk.example.com',
                      sub: 'client_2xhFjEI5X2qWRvtV13BzSj8H6Dk',
                      act: {
                        iss: 'https://clerk.example.com',
                        sub: 'client_3yiGkFJ6Y3rXSwuW24CaTk9I7El',
                      },
                    },
                  }),
                revoked: z.boolean().openapi({ example: false }),
                revocation_reason: z.string().nullable().openapi({ example: 'Revoked by user' }),
                expired: z.boolean().openapi({ example: false }),
                expiration: z.number().nullable().openapi({ example: 1716883200 }),
                created_at: z.number().openapi({ example: 1716883200 }),
                updated_at: z.number().openapi({ example: 1716883200 }),
              })
              .openapi({
                required: [
                  'object',
                  'id',
                  'client_id',
                  'subject',
                  'scopes',
                  'revoked',
                  'revocation_reason',
                  'expired',
                  'expiration',
                  'created_at',
                  'updated_at',
                ],
              }),
            z
              .strictObject({
                active: z
                  .literal(false)
                  .openapi({
                    description: 'Indicates that a JWT access token is not active (expired)',
                    example: false,
                  }),
              })
              .openapi({ required: ['active'] }),
          ]),
        },
      },
    },
    400: {
      description: '400 Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'Bad Request' }),
                    long_message: z
                      .string()
                      .openapi({ example: "Invalid 'url_parameter.example': Failed regex check" }),
                    code: z.string().openapi({ example: 'bad_request' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    404: {
      description: '404 Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().openapi({ example: 'some details about the error' }),
                    long_message: z.string().openapi({ example: 'some details about the error' }),
                    code: z.string().openapi({ example: 'some_error_code' }),
                  })
                  .openapi({ required: ['message', 'long_message', 'code'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})
