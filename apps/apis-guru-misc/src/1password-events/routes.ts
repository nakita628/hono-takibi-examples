import { createRoute, z } from '@hono/zod-openapi'

const ActionSchema = z.any().openapi('Action')

const ClientSchema = z
  .object({
    app_name: z.string().exactOptional().openapi({ example: '1Password Extension' }),
    app_version: z.string().exactOptional().openapi({ example: '20127' }),
    ip_address: z.string().exactOptional().openapi({ example: '13.227.95.22' }),
    os_name: z.string().exactOptional().openapi({ example: 'MacOSX' }),
    os_version: z.string().exactOptional().openapi({ example: '10.15.6' }),
    platform_name: z.string().exactOptional().openapi({ example: 'Chrome' }),
    platform_version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Depending on the platform used, this can be the version of the browser that the client extension is installed, the model of computer that the native application is installed or the machine's CPU version that the CLI was installed",
      }),
  })
  .openapi({ description: 'Metadata gathered about the client', required: [] })
  .openapi('Client')

const CursorSchema = z
  .object({
    cursor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cursor to fetch more data if available or continue the polling process if required',
        example: 'aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK',
      }),
  })
  .openapi({ description: 'Cursor', required: [] })
  .openapi('Cursor')

const CursorCollectionSchema = CursorSchema.and(
  z
    .object({
      has_more: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether there may still be more data to fetch using the returned cursor. If true, the subsequent request could still be empty.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Common cursor properties for collection responses' })
  .openapi('CursorCollection')

const DateTimeRFC3339Schema = z.iso
  .datetime({ offset: true })
  .openapi({ example: '2020-06-11T16:32:50-03:00' })
  .openapi('DateTimeRFC3339')

const DetailsSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For firewall prevented sign-ins, the value is the chosen continent, country, etc. that blocked the sign-in attempt',
        example: 'Europe',
      }),
  })
  .openapi({ description: 'Additional information about the sign-in attempt', required: [] })
  .openapi('Details')

const ErrorSchema = z
  .object({
    Error: z
      .object({
        Message: z.string().exactOptional().openapi({ description: 'The error message.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const IntrospectionSchema = z
  .object({
    Features: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['itemusages', 'signinattempts'] }),
    IssuedAt: DateTimeRFC3339Schema.exactOptional(),
    UUID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Introspection')

const UUIDSchema = z.string().openapi({ example: '56YE2TYN2VFYRLNSHKPW5NVT5E' }).openapi('UUID')

const UserSchema = z
  .object({
    email: z.email().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Full name', example: "Jack O'Neill" }),
    uuid: UUIDSchema.exactOptional(),
  })
  .openapi({ description: 'User object', required: [] })
  .openapi('User')

const ItemUsageSchema = z
  .object({
    action: ActionSchema.exactOptional(),
    client: ClientSchema.exactOptional(),
    item_uuid: UUIDSchema.exactOptional(),
    timestamp: DateTimeRFC3339Schema.exactOptional(),
    used_version: z.int().exactOptional(),
    user: UserSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    vault_uuid: UUIDSchema.exactOptional(),
  })
  .openapi({ description: 'A single item usage object', required: [] })
  .openapi('ItemUsage')

const ItemUsageItemsSchema = z
  .object({ items: z.array(ItemUsageSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CursorCollectionSchema)
  .openapi({ description: 'An object wrapping cursor properties and a list of items usages' })
  .openapi('ItemUsageItems')

const ResetCursorSchema = z
  .object({
    end_time: DateTimeRFC3339Schema.exactOptional(),
    limit: z.number().min(1).max(1000).exactOptional(),
    start_time: DateTimeRFC3339Schema.exactOptional(),
  })
  .openapi({ description: 'Reset cursor', required: [] })
  .openapi('ResetCursor')

const SignInAttemptSchema = z
  .object({
    category: z
      .enum([
        'success',
        'credentials_failed',
        'mfa_failed',
        'modern_version_failed',
        'firewall_failed',
        'firewall_reported_success',
      ])
      .exactOptional()
      .openapi({ example: 'firewall_failed' }),
    client: ClientSchema.exactOptional(),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country ISO Code', example: 'France' }),
    details: DetailsSchema.exactOptional(),
    session_uuid: UUIDSchema.exactOptional(),
    target_user: UserSchema.exactOptional(),
    timestamp: DateTimeRFC3339Schema.exactOptional(),
    type: z
      .enum([
        'credentials_ok',
        'mfa_ok',
        'password_secret_bad',
        'mfa_missing',
        'totp_disabled',
        'totp_bad',
        'totp_timeout',
        'u2f_disabled',
        'u2f_bad',
        'u2f_timout',
        'duo_disabled',
        'duo_bad',
        'duo_timeout',
        'duo_native_bad',
        'platform_secret_disabled',
        'platform_secret_bad',
        'platform_secret_proxy',
        'code_disabled',
        'code_bad',
        'code_timeout',
        'ip_blocked',
        'continent_blocked',
        'country_blocked',
        'anonymous_blocked',
        'all_blocked',
        'modern_version_missing',
        'modern_version_old',
      ])
      .exactOptional()
      .openapi({ example: 'continent_blocked' }),
    uuid: UUIDSchema.exactOptional(),
  })
  .openapi({ description: 'A single sign-in attempt object', required: [] })
  .openapi('SignInAttempt')

const SignInAttemptItemsSchema = z
  .object({ items: z.array(SignInAttemptSchema).exactOptional() })
  .openapi({ required: [] })
  .and(CursorCollectionSchema)
  .openapi({ description: 'An object wrapping cursor properties and a list of sign-in attempts' })
  .openapi('SignInAttemptItems')

const GenericErrorResponseResponse = {
  description: 'Generic error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const IntrospectResponseResponse = {
  description: 'Introspection object',
  content: { 'application/json': { schema: IntrospectionSchema } },
}

const ItemUsagesResponseResponse = {
  description: 'Item usages response object',
  content: { 'application/json': { schema: ItemUsageItemsSchema } },
}

const SignInAttemptsResponseResponse = {
  description: 'Sign-in attempts response object',
  content: { 'application/json': { schema: SignInAttemptItemsSchema } },
}

const UnauthorizedErrorResponseResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: ErrorSchema } },
}

const CursorExample = {
  summary: 'Used for continued calling with a cursor',
  value: { cursor: 'aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK' },
}

const ResetCursorExample = {
  summary: 'Used for reseting the cursor',
  value: { limit: 100, start_time: '2021-06-11T16:32:50-03:00' },
}

const CursorRequestRequestBody = {
  content: {
    'application/json': {
      schema: z.xor([CursorSchema, ResetCursorSchema]),
      examples: { 'Continuing cursor': CursorExample, 'Resetting cursor': ResetCursorExample },
    },
  },
}

const ItemUsagesRequestRequestBody = CursorRequestRequestBody

const SignInAttemptsRequestRequestBody = CursorRequestRequestBody

const JwtsaSecurityScheme = {
  bearerFormat: 'JWT-SA',
  description: 'A JWT SA token issued to this service',
  scheme: 'bearer',
  type: 'http',
}

export const getApiAuthIntrospectRoute = createRoute({
  method: 'get',
  path: '/api/auth/introspect',
  tags: ['auth'],
  summary: 'Performs introspection of the provided Bearer JWT token',
  operationId: 'getAuthIntrospect',
  responses: {
    200: IntrospectResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    default: GenericErrorResponseResponse,
  },
  security: [{ jwtsa: [] }],
})

export const postApiV1ItemusagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/itemusages',
  tags: ['api-v1'],
  summary: 'Retrieves item usages',
  description: 'This endpoint requires your JSON Web Token to have the *itemusages* feature.',
  operationId: 'getItemUsages',
  request: { body: CursorRequestRequestBody },
  responses: {
    200: ItemUsagesResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    default: GenericErrorResponseResponse,
  },
  security: [{ jwtsa: [] }],
})

export const postApiV1SigninattemptsRoute = createRoute({
  method: 'post',
  path: '/api/v1/signinattempts',
  tags: ['api-v1'],
  summary: 'Retrieves sign-in attempts',
  description: 'This endpoint requires your JSON Web Token to have the *signinattempts* feature.',
  operationId: 'getSignInAttempts',
  request: { body: CursorRequestRequestBody },
  responses: {
    200: SignInAttemptsResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    default: GenericErrorResponseResponse,
  },
  security: [{ jwtsa: [] }],
})
