import { createRoute, z } from '@hono/zod-openapi'

type ReassignBookingOutput_2024_08_13Type = {
  status: 'success' | 'error'
  data: ReassignBookingOutput_2024_08_13Type
}

type GetReservedSlotOutput_2024_09_04Type = {
  status: 'success' | 'error'
  data: GetReservedSlotOutput_2024_09_04Type | null
}

const OAuth2ClientDtoSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The OAuth client ID', example: 'clxxxxxxxxxxxxxxxx' }),
    redirect_uris: z
      .array(z.string())
      .openapi({
        description: 'The redirect URIs for the OAuth client',
        example: ['https://example.com/callback'],
      }),
    name: z.string().openapi({ description: 'The name of the OAuth client', example: 'My App' }),
    logo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The logo URL of the OAuth client' }),
    is_trusted: z
      .boolean()
      .openapi({ description: 'Whether the OAuth client is trusted', example: false }),
    client_type: z
      .enum(['CONFIDENTIAL', 'PUBLIC'])
      .openapi({
        description: 'The type of OAuth client (CONFIDENTIAL or PUBLIC)',
        example: 'CONFIDENTIAL',
      }),
  })
  .openapi({ required: ['client_id', 'redirect_uris', 'name', 'is_trusted', 'client_type'] })
  .openapi('OAuth2ClientDto')

const OAuth2ClientResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: OAuth2ClientDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('OAuth2ClientResponseDto')

const OAuth2ExchangeConfidentialInputSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The client identifier', example: 'my-client-id' }),
    grant_type: z
      .literal('authorization_code')
      .openapi({
        description: "The grant type — must be 'authorization_code'",
        example: 'authorization_code',
      }),
    code: z
      .string()
      .openapi({
        description: 'The authorization code received from the authorize endpoint',
        example: 'abc123',
      }),
    redirect_uri: z
      .string()
      .openapi({
        description: 'The redirect URI used in the authorization request',
        example: 'https://example.com/callback',
      }),
    client_secret: z
      .string()
      .openapi({ description: 'The client secret for confidential clients' }),
  })
  .openapi({ required: ['client_id', 'grant_type', 'code', 'redirect_uri', 'client_secret'] })
  .openapi('OAuth2ExchangeConfidentialInput')

const OAuth2ExchangePublicInputSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The client identifier', example: 'my-client-id' }),
    grant_type: z
      .literal('authorization_code')
      .openapi({
        description: "The grant type — must be 'authorization_code'",
        example: 'authorization_code',
      }),
    code: z
      .string()
      .openapi({
        description: 'The authorization code received from the authorize endpoint',
        example: 'abc123',
      }),
    redirect_uri: z
      .string()
      .openapi({
        description: 'The redirect URI used in the authorization request',
        example: 'https://example.com/callback',
      }),
    code_verifier: z
      .string()
      .openapi({
        description: 'PKCE code verifier (required for public clients that used code_challenge)',
      }),
  })
  .openapi({ required: ['client_id', 'grant_type', 'code', 'redirect_uri', 'code_verifier'] })
  .openapi('OAuth2ExchangePublicInput')

const OAuth2RefreshConfidentialInputSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The client identifier', example: 'my-client-id' }),
    grant_type: z
      .literal('refresh_token')
      .openapi({
        description: "The grant type — must be 'refresh_token'",
        example: 'refresh_token',
      }),
    refresh_token: z
      .string()
      .openapi({
        description: 'The refresh token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      }),
    client_secret: z
      .string()
      .openapi({ description: 'The client secret for confidential clients' }),
  })
  .openapi({ required: ['client_id', 'grant_type', 'refresh_token', 'client_secret'] })
  .openapi('OAuth2RefreshConfidentialInput')

const OAuth2RefreshPublicInputSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The client identifier', example: 'my-client-id' }),
    grant_type: z
      .literal('refresh_token')
      .openapi({
        description: "The grant type — must be 'refresh_token'",
        example: 'refresh_token',
      }),
    refresh_token: z
      .string()
      .openapi({
        description: 'The refresh token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      }),
  })
  .openapi({ required: ['client_id', 'grant_type', 'refresh_token'] })
  .openapi('OAuth2RefreshPublicInput')

const OAuth2TokensDtoSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description: 'The access token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      }),
    token_type: z.string().openapi({ description: 'The token type', example: 'bearer' }),
    refresh_token: z
      .string()
      .openapi({
        description: 'The refresh token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      }),
    expires_in: z
      .number()
      .openapi({
        description: 'The number of seconds until the access token expires',
        example: 1800,
      }),
  })
  .openapi({ required: ['access_token', 'token_type', 'refresh_token', 'expires_in'] })
  .openapi('OAuth2TokensDto')

const ManagedUserOutputSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    email: z.string().openapi({ example: 'alice+cluo37fwd0001khkzqqynkpj3@example.com' }),
    username: z.string().nullable().openapi({ example: 'alice' }),
    name: z.string().nullable().openapi({ example: 'alice' }),
    bio: z.string().nullable().openapi({ example: 'bio' }),
    timeZone: z.string().openapi({ example: 'America/New_York' }),
    weekStart: z.string().openapi({ example: 'Sunday' }),
    createdDate: z.string().openapi({ example: '2024-04-01T00:00:00.000Z' }),
    timeFormat: z.number().nullable().openapi({ example: 12 }),
    defaultScheduleId: z.number().nullable().openapi({ example: null }),
    locale: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    avatarUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example: 'https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png',
        description: "URL of the user's avatar image",
      }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
  })
  .openapi({
    required: [
      'id',
      'email',
      'username',
      'name',
      'bio',
      'timeZone',
      'weekStart',
      'createdDate',
      'timeFormat',
      'defaultScheduleId',
    ],
  })
  .openapi('ManagedUserOutput')

const GetManagedUsersOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(ManagedUserOutputSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetManagedUsersOutput')

const CreateManagedUserInputSchema = z
  .object({
    email: z.string().openapi({ example: 'alice@example.com' }),
    name: z
      .string()
      .openapi({ example: 'Alice Smith', description: "Managed user's name is used in emails" }),
    timeFormat: z
      .union([z.literal(12), z.literal(24)])
      .exactOptional()
      .openapi({ example: 12, description: 'Must be a number 12 or 24' }),
    weekStart: z
      .enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
      .exactOptional()
      .openapi({ example: 'Monday' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        example: 'America/New_York',
        description:
          "Timezone is used to create user's default schedule from Monday to Friday from 9AM to 5PM. If it is not passed then user does not have\n      a default schedule and it must be created manually via the /schedules endpoint. Until the schedule is created, the user can't access availability atom to set his / her availability nor booked.\n      It will default to Europe/London if not passed.",
      }),
    locale: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png',
        description: "URL of the user's avatar image",
      }),
    bio: z.string().exactOptional().openapi({ description: 'Bio', example: 'I am a bio' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.',
        example: { key: 'value' },
      }),
  })
  .openapi({ required: ['email', 'name'] })
  .openapi('CreateManagedUserInput')

const CreateManagedUserDataSchema = z
  .object({
    accessToken: z.string().openapi({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }),
    refreshToken: z.string().openapi({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }),
    user: ManagedUserOutputSchema,
    accessTokenExpiresAt: z.number(),
    refreshTokenExpiresAt: z.number(),
  })
  .openapi({
    required: [
      'accessToken',
      'refreshToken',
      'user',
      'accessTokenExpiresAt',
      'refreshTokenExpiresAt',
    ],
  })
  .openapi('CreateManagedUserData')

const CreateManagedUserOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: CreateManagedUserDataSchema,
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreateManagedUserOutput')

const GetManagedUserOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ManagedUserOutputSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetManagedUserOutput')

const UpdateManagedUserInputSchema = z
  .object({
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
    timeFormat: z
      .union([z.literal(12), z.literal(24)])
      .exactOptional()
      .openapi({ example: 12, description: 'Must be 12 or 24' }),
    defaultScheduleId: z.number().exactOptional(),
    weekStart: z
      .enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
      .exactOptional()
      .openapi({ example: 'Monday' }),
    timeZone: z.string().exactOptional(),
    locale: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png',
        description: "URL of the user's avatar image",
      }),
    bio: z.string().exactOptional().openapi({ description: 'Bio', example: 'I am a bio' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.',
        example: { key: 'value' },
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateManagedUserInput')

const KeysDtoSchema = z
  .object({
    accessToken: z.string().openapi({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }),
    refreshToken: z.string().openapi({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }),
    accessTokenExpiresAt: z.number(),
    refreshTokenExpiresAt: z.number(),
  })
  .openapi({
    required: ['accessToken', 'refreshToken', 'accessTokenExpiresAt', 'refreshTokenExpiresAt'],
  })
  .openapi('KeysDto')

const KeysResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: KeysDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('KeysResponseDto')

const CreateOAuthClientInputSchema = z
  .object({
    logo: z.string().exactOptional(),
    name: z.string(),
    redirectUris: z.array(z.string()),
    permissions: z
      .array(
        z.enum([
          'EVENT_TYPE_READ',
          'EVENT_TYPE_WRITE',
          'BOOKING_READ',
          'BOOKING_WRITE',
          'SCHEDULE_READ',
          'SCHEDULE_WRITE',
          'APPS_READ',
          'APPS_WRITE',
          'PROFILE_READ',
          'PROFILE_WRITE',
          '*',
        ]),
      )
      .openapi({
        description:
          'Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]. Use ["*"] to grant all permissions.',
      }),
    bookingRedirectUri: z.string().exactOptional(),
    bookingCancelRedirectUri: z.string().exactOptional(),
    bookingRescheduleRedirectUri: z.string().exactOptional(),
    areEmailsEnabled: z.boolean().exactOptional(),
    areDefaultEventTypesEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.',
      }),
    areCalendarEventsEnabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.',
      }),
  })
  .openapi({ required: ['name', 'redirectUris', 'permissions'] })
  .openapi('CreateOAuthClientInput')

const CreateOAuthClientOutputSchema = z
  .object({
    clientId: z.string().openapi({ example: 'clsx38nbl0001vkhlwin9fmt0' }),
    clientSecret: z
      .string()
      .openapi({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib2F1dGgtY2xpZW50Iiwi',
      }),
  })
  .openapi({ required: ['clientId', 'clientSecret'] })
  .openapi('CreateOAuthClientOutput')

const CreateOAuthClientResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: CreateOAuthClientOutputSchema.openapi({
      example: {
        clientId: 'clsx38nbl0001vkhlwin9fmt0',
        clientSecret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib2F1dGgtY2xpZW50Iiwi',
      },
    }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreateOAuthClientResponseDto')

const PlatformOAuthClientDtoSchema = z
  .object({
    id: z.string().openapi({ example: 'clsx38nbl0001vkhlwin9fmt0' }),
    name: z.string().openapi({ example: 'MyClient' }),
    secret: z.string().openapi({ example: 'secretValue' }),
    permissions: z
      .array(
        z.enum([
          'EVENT_TYPE_READ',
          'EVENT_TYPE_WRITE',
          'BOOKING_READ',
          'BOOKING_WRITE',
          'SCHEDULE_READ',
          'SCHEDULE_WRITE',
          'APPS_READ',
          'APPS_WRITE',
          'PROFILE_READ',
          'PROFILE_WRITE',
        ]),
      )
      .openapi({
        description: 'Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]',
        example: ['BOOKING_READ', 'BOOKING_WRITE'],
      }),
    logo: z.object({}).exactOptional().openapi({ example: 'https://example.com/logo.png' }),
    redirectUris: z.array(z.string()).openapi({ example: ['https://example.com/callback'] }),
    organizationId: z.number().openapi({ example: 1 }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ example: '2024-03-23T08:33:21.851Z' }),
    areEmailsEnabled: z.boolean().openapi({ example: true }),
    areDefaultEventTypesEnabled: z
      .boolean()
      .openapi({
        example: true,
        description:
          'If enabled, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Leave this disabled if you want to create a managed user and then manually create event types for the user.',
      }),
    areCalendarEventsEnabled: z
      .boolean()
      .openapi({
        example: true,
        description:
          'If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.',
      }),
    bookingRedirectUri: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://example.com/booking-redirect' }),
    bookingCancelRedirectUri: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://example.com/booking-cancel' }),
    bookingRescheduleRedirectUri: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://example.com/booking-reschedule' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'secret',
      'permissions',
      'redirectUris',
      'organizationId',
      'createdAt',
      'areEmailsEnabled',
      'areDefaultEventTypesEnabled',
      'areCalendarEventsEnabled',
    ],
  })
  .openapi('PlatformOAuthClientDto')

const GetOAuthClientsResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(PlatformOAuthClientDtoSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetOAuthClientsResponseDto')

const GetOAuthClientResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: PlatformOAuthClientDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetOAuthClientResponseDto')

const UpdateOAuthClientInputSchema = z
  .object({
    logo: z.string().exactOptional(),
    name: z.string().exactOptional(),
    redirectUris: z.array(z.string()).exactOptional(),
    bookingRedirectUri: z.string().exactOptional(),
    bookingCancelRedirectUri: z.string().exactOptional(),
    bookingRescheduleRedirectUri: z.string().exactOptional(),
    areEmailsEnabled: z.boolean().exactOptional(),
    areDefaultEventTypesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.',
      }),
    areCalendarEventsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateOAuthClientInput')

const RefreshTokenInputSchema = z
  .object({ refreshToken: z.string().openapi({ description: "Managed user's refresh token." }) })
  .openapi({ required: ['refreshToken'] })
  .openapi('RefreshTokenInput')

const RefreshApiKeyInputSchema = z
  .object({
    apiKeyDaysValid: z
      .number()
      .min(1)
      .default(30)
      .exactOptional()
      .openapi({
        description:
          'For how many days is managed organization api key valid. Defaults to 30 days.',
        example: 60,
      }),
    apiKeyNeverExpires: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, organization api key never expires.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('RefreshApiKeyInput')

const ApiKeyOutputSchema = z
  .object({ apiKey: z.string() })
  .openapi({ required: ['apiKey'] })
  .openapi('ApiKeyOutput')

const RefreshApiKeyOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ApiKeyOutputSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('RefreshApiKeyOutput')

const BookerLayouts_2024_06_14Schema = z
  .object({
    defaultLayout: z.enum(['month', 'week', 'column']),
    enabledLayouts: z
      .array(z.enum(['month', 'week', 'column']))
      .openapi({ description: 'Array of valid layouts - month, week or column' }),
  })
  .openapi({ required: ['defaultLayout', 'enabledLayouts'] })
  .openapi('BookerLayouts_2024_06_14')

const EventTypeColor_2024_06_14Schema = z
  .object({
    lightThemeHex: z
      .string()
      .openapi({ description: 'Color used for event types in light theme', example: '#292929' }),
    darkThemeHex: z
      .string()
      .openapi({ description: 'Color used for event types in dark theme', example: '#fafafa' }),
  })
  .openapi({ required: ['lightThemeHex', 'darkThemeHex'] })
  .openapi('EventTypeColor_2024_06_14')

const DestinationCalendar_2024_06_14Schema = z
  .object({
    integration: z
      .string()
      .openapi({
        description:
          'The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.',
      }),
    externalId: z
      .string()
      .openapi({
        description:
          'The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.',
      }),
  })
  .openapi({ required: ['integration', 'externalId'] })
  .openapi('DestinationCalendar_2024_06_14')

const InputAddressLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'address', description: 'only allowed value for type is `address`' }),
    address: z.string().openapi({ example: '123 Example St, City, Country' }),
    public: z.boolean(),
  })
  .openapi({ required: ['type', 'address', 'public'] })
  .openapi('InputAddressLocation_2024_06_14')

const InputLinkLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'link', description: 'only allowed value for type is `link`' }),
    link: z.string().openapi({ example: 'https://customvideo.com/join/123456' }),
    public: z.boolean(),
  })
  .openapi({ required: ['type', 'link', 'public'] })
  .openapi('InputLinkLocation_2024_06_14')

const InputIntegrationLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'integration',
        description: 'only allowed value for type is `integration`',
      }),
    integration: z
      .enum([
        'cal-video',
        'google-meet',
        'zoom',
        'whereby-video',
        'whatsapp-video',
        'webex-video',
        'telegram-video',
        'tandem',
        'sylaps-video',
        'skype-video',
        'sirius-video',
        'signal-video',
        'shimmer-video',
        'salesroom-video',
        'roam-video',
        'riverside-video',
        'ping-video',
        'office365-video',
        'mirotalk-video',
        'jitsi',
        'jelly-video',
        'jelly-conferencing',
        'huddle',
        'facetime-video',
        'element-call-video',
        'eightxeight-video',
        'discord-video',
        'demodesk-video',
        'campfire-video',
      ])
      .openapi({ example: 'cal-video' }),
  })
  .openapi({ required: ['type', 'integration'] })
  .openapi('InputIntegrationLocation_2024_06_14')

const InputPhoneLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'phone', description: 'only allowed value for type is `phone`' }),
    phone: z.string().openapi({ example: '+37120993151' }),
    public: z.boolean(),
  })
  .openapi({ required: ['type', 'phone', 'public'] })
  .openapi('InputPhoneLocation_2024_06_14')

const PhoneFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'phone', description: 'only allowed value for type is `phone`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking. Special slug is `attendeePhoneNumber` - if you create\n      a phone input field with this slug for organization team event type you can create an organization team event type that can be booked using phone without requiring an email by setting {"type": "email", "required": false, "hidden": true} to the email booking field input in the request body.',
        example: 'some-slug',
      }),
    label: z.string(),
    required: z.boolean(),
    placeholder: z.string(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{phone: '+37122222222'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('PhoneFieldInput_2024_06_14')

const AddressFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'address', description: 'only allowed value for type is `address`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter your address' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., 1234 Main St' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{address: 'mainstreat 10, new york'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('AddressFieldInput_2024_06_14')

const TextFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'text', description: 'only allowed value for type is `text`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter your text' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., Enter text here' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `friend` and the URL contains query parameter `&friend=bob`,      the text field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{friend: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('TextFieldInput_2024_06_14')

const NumberFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'number', description: 'only allowed value for type is `number`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter a number' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., 100' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories` and the URL contains query parameter `&calories=3000`,      the number field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{calories: 3000}}`. See guide https://cal.com/docs/platform/guides/booking-field',
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('NumberFieldInput_2024_06_14')

const TextAreaFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'textarea', description: 'only allowed value for type is `textarea`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter detailed information' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., Detailed description here...' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `reflection` and the URL contains query parameter `&reflection=Today I shipped a feature`,      the text area will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{reflection: 'Today i shipped a feature'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('TextAreaFieldInput_2024_06_14')

const SelectFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'select', description: 'only allowed value for type is `select`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please select an option' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'Select...' }),
    options: z.array(z.string()).openapi({ example: ['Option 1', 'Option 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'options', 'hidden'] })
  .openapi('SelectFieldInput_2024_06_14')

const MultiSelectFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'multiselect',
        description: 'only allowed value for type is `multiselect`',
      }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please select multiple options' }),
    required: z.boolean(),
    options: z.array(z.string()).openapi({ example: ['Option 1', 'Option 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and the URL contains query parameter `&language=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: ['en', 'it']}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'options', 'hidden'] })
  .openapi('MultiSelectFieldInput_2024_06_14')

const MultiEmailFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'multiemail',
        description: 'only allowed value for type is `multiemail`',
      }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter multiple emails' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., example@example.com' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{consultants: ['alice@gmail.com', 'bob@gmail.com']}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('MultiEmailFieldInput_2024_06_14')

const CheckboxGroupFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'checkbox', description: 'only allowed value for type is `checkbox`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Select all that apply' }),
    required: z.boolean(),
    options: z.array(z.string()).openapi({ example: ['Checkbox 1', 'Checkbox 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field',
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'options', 'hidden'] })
  .openapi('CheckboxGroupFieldInput_2024_06_14')

const RadioGroupFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'radio', description: 'only allowed value for type is `radio`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Select one option' }),
    required: z.boolean(),
    options: z.array(z.string()).openapi({ example: ['Radio 1', 'Radio 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'options', 'hidden'] })
  .openapi('RadioGroupFieldInput_2024_06_14')

const BooleanFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'boolean', description: 'only allowed value for type is `boolean`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Agree to terms?' }),
    required: z.boolean(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field',
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'hidden'] })
  .openapi('BooleanFieldInput_2024_06_14')

const UrlFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'url', description: 'only allowed value for type is `url`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter your text' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., Enter url here' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `videourl` and the URL contains query parameter `&videourl=https://youtube.com/abc`the url field will be prefilled with this value and disabled.       In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{videourl: 'https://caltube.com/123'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden'] })
  .openapi('UrlFieldInput_2024_06_14')

const BusinessDaysWindow_2024_06_14Schema = z
  .object({
    type: z
      .enum(['businessDays', 'calendarDays', 'range'])
      .openapi({
        description:
          'Whether the window should be business days, calendar days or a range of dates',
      }),
    value: z
      .number()
      .openapi({
        example: 5,
        description: 'How many business day into the future can this event be booked',
      }),
    rolling: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description:
          "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10–12).\n    ",
      }),
  })
  .openapi({ required: ['type', 'value'] })
  .openapi('BusinessDaysWindow_2024_06_14')

const CalendarDaysWindow_2024_06_14Schema = z
  .object({
    type: z
      .enum(['businessDays', 'calendarDays', 'range'])
      .openapi({
        description:
          'Whether the window should be business days, calendar days or a range of dates',
      }),
    value: z
      .number()
      .openapi({
        example: 5,
        description: 'How many calendar days into the future can this event be booked',
      }),
    rolling: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description:
          "\n      Determines the behavior of the booking window:\n      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' \n        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, \n        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days \n        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.\n      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the\n        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current \n        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next \n        3 calendar days (November 10–12).\n    ",
      }),
  })
  .openapi({ required: ['type', 'value'] })
  .openapi('CalendarDaysWindow_2024_06_14')

const RangeWindow_2024_06_14Schema = z
  .object({
    type: z
      .enum(['businessDays', 'calendarDays', 'range'])
      .openapi({
        description:
          'Whether the window should be business days, calendar days or a range of dates',
      }),
    value: z
      .array(z.string())
      .openapi({
        example: ['2030-09-05', '2030-09-09'],
        description: 'Date range for when this event can be booked.',
      }),
  })
  .openapi({ required: ['type', 'value'] })
  .openapi('RangeWindow_2024_06_14')

const BaseBookingLimitsCount_2024_06_14Schema = z
  .object({
    day: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of bookings per day', example: 1 }),
    week: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of bookings per week', example: 2 }),
    month: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of bookings per month', example: 3 }),
    year: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of bookings per year', example: 4 }),
    disabled: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BaseBookingLimitsCount_2024_06_14')

const BookerActiveBookingsLimit_2024_06_14Schema = z
  .object({
    maximumActiveBookings: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The maximum number of active bookings a booker can have for this event type.',
        example: 3,
      }),
    offerReschedule: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to offer rescheduling the last active booking to the chosen time slot when limit is reached.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BookerActiveBookingsLimit_2024_06_14')

const Disabled_2024_06_14Schema = z
  .object({
    disabled: z
      .boolean()
      .openapi({
        description:
          'Only acceptable value for the `disabled` property is `true`. It is used to reset the value of the property for which previously an object containing specific settings was passed.',
        example: true,
      }),
  })
  .openapi({ required: ['disabled'] })
  .openapi('Disabled_2024_06_14')

const BaseBookingLimitsDuration_2024_06_14Schema = z
  .object({
    day: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The duration of bookings per day (must be a multiple of 15)',
        example: 60,
      }),
    week: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The duration of bookings per week (must be a multiple of 15)',
        example: 120,
      }),
    month: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The duration of bookings per month (must be a multiple of 15)',
        example: 180,
      }),
    year: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The duration of bookings per year (must be a multiple of 15)',
        example: 240,
      }),
  })
  .openapi({ required: [] })
  .openapi('BaseBookingLimitsDuration_2024_06_14')

const Recurrence_2024_06_14Schema = z
  .object({
    interval: z
      .number()
      .openapi({ example: 10, description: 'Repeats every {count} week | month | year' }),
    occurrences: z
      .number()
      .openapi({ example: 10, description: 'Repeats for a maximum of {count} events' }),
    frequency: z.enum(['yearly', 'monthly', 'weekly']),
  })
  .openapi({ required: ['interval', 'occurrences', 'frequency'] })
  .openapi('Recurrence_2024_06_14')

const NoticeThreshold_2024_06_14Schema = z
  .object({
    unit: z
      .string()
      .openapi({
        description: 'The unit of time for the notice threshold (e.g., minutes, hours)',
        example: 'minutes',
      }),
    count: z
      .number()
      .openapi({ description: 'The time value for the notice threshold', example: 30 }),
  })
  .openapi({ required: ['unit', 'count'] })
  .openapi('NoticeThreshold_2024_06_14')

const BaseConfirmationPolicy_2024_06_14Schema = z
  .object({
    type: z
      .enum(['always', 'time'])
      .openapi({
        description: 'The policy that determines when confirmation is required',
        example: 'always',
      }),
    noticeThreshold: NoticeThreshold_2024_06_14Schema.exactOptional().openapi({
      description:
        "The notice threshold required before confirmation is needed. Required when type is 'time'.",
    }),
    blockUnconfirmedBookingsInBooker: z
      .boolean()
      .openapi({ description: 'Unconfirmed bookings still block calendar slots.' }),
  })
  .openapi({ required: ['type', 'blockUnconfirmedBookingsInBooker'] })
  .openapi('BaseConfirmationPolicy_2024_06_14')

const Seats_2024_06_14Schema = z
  .object({
    seatsPerTimeSlot: z
      .number()
      .openapi({ description: 'Number of seats available per time slot', example: 4 }),
    showAttendeeInfo: z
      .boolean()
      .openapi({ description: 'Show attendee information to other guests', example: true }),
    showAvailabilityCount: z
      .boolean()
      .openapi({ description: 'Display the count of available seats', example: true }),
  })
  .openapi({ required: ['seatsPerTimeSlot', 'showAttendeeInfo', 'showAvailabilityCount'] })
  .openapi('Seats_2024_06_14')

const InputAttendeeAddressLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeeAddress',
        description: 'only allowed value for type is `attendeeAddress`',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('InputAttendeeAddressLocation_2024_06_14')

const InputAttendeePhoneLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeePhone',
        description: 'only allowed value for type is `attendeePhone`',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('InputAttendeePhoneLocation_2024_06_14')

const InputAttendeeDefinedLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeeDefined',
        description: 'only allowed value for type is `attendeeDefined`',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('InputAttendeeDefinedLocation_2024_06_14')

const NameDefaultFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'name',
        description:
          'only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.',
      }),
    label: z.string(),
    placeholder: z.string(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled. In case of Booker atom need to pass 'name' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{name: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-fields",
      }),
  })
  .openapi({ required: ['type', 'label', 'placeholder'] })
  .openapi('NameDefaultFieldInput_2024_06_14')

const EmailDefaultFieldInput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'email', description: 'only allowed value for type is `email`' }),
    label: z.string(),
    required: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Can be set to false only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done\n      to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.\n      If true show under event type settings but don\'t show this booking field in the Booker. If false show in both.',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Can be set to true only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done\n      to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.\n      If true show under event type settings but don\'t show this booking field in the Booker. If false show in both.',
      }),
    placeholder: z.string(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled. In case of Booker atom need to pass 'email' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{email: 'bob@gmail.com'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
  })
  .openapi({ required: ['type', 'label', 'placeholder'] })
  .openapi('EmailDefaultFieldInput_2024_06_14')

const TitleDefaultFieldInput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .openapi({ example: 'title', description: 'only allowed value for type is `title`' }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled. In case of Booker atom need to pass 'title' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{title: 'very important meeting'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
  })
  .openapi({ required: ['slug'] })
  .openapi('TitleDefaultFieldInput_2024_06_14')

const LocationDefaultFieldInput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .openapi({
        example: 'location',
        description:
          'only allowed value for type is `location`. This booking field is displayed only when event type has 2 or more locations in order to allow person doing the booking pick the location.',
      }),
    label: z.string().exactOptional(),
  })
  .openapi({ required: ['slug'] })
  .openapi('LocationDefaultFieldInput_2024_06_14')

const NotesDefaultFieldInput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .openapi({ example: 'notes', description: 'only allowed value for type is `notes`' }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled. In case of Booker atom need to pass 'notes' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{notes: 'bring notebook and paper'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
  })
  .openapi({ required: ['slug'] })
  .openapi('NotesDefaultFieldInput_2024_06_14')

const GuestsDefaultFieldInput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .openapi({ example: 'guests', description: 'only allowed value for type is `guests`' }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled. In case of Booker atom need to pass 'guests' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{guests: ['bob@gmail.com', 'alice@gmail.com']}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
  })
  .openapi({ required: ['slug'] })
  .openapi('GuestsDefaultFieldInput_2024_06_14')

const RescheduleReasonDefaultFieldInput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .openapi({
        example: 'rescheduleReason',
        description: 'only allowed value for type is `rescheduleReason`',
      }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled. In case of Booker atom need to pass 'rescheduleReason' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{rescheduleReason: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
  })
  .openapi({ required: ['slug'] })
  .openapi('RescheduleReasonDefaultFieldInput_2024_06_14')

const InputOrganizersDefaultApp_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'organizersDefaultApp',
        description: 'only allowed value for type is `organizersDefaultApp`',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('InputOrganizersDefaultApp_2024_06_14')

const EmailSettings_2024_06_14Schema = z
  .object({
    disableEmailsToAttendees: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disables all email communication to attendees for this event type, including booking confirmations, reminders, and cancellations. This DOES NOT include emails sent by custom email workflows.',
      }),
    disableEmailsToHosts: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disables all email communication to hosts for this event type, including booking confirmations, reminders, and cancellations. This DOES NOT include emails sent by custom email workflows.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EmailSettings_2024_06_14')

const DisableRescheduling_2024_06_14Schema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, rescheduling is always disabled for this event type.',
        example: true,
      }),
    minutesBefore: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Disable rescheduling when less than the specified number of minutes before the meeting. If set, `disabled` should be false or undefined.',
        example: 60,
      }),
  })
  .openapi({ required: [] })
  .openapi('DisableRescheduling_2024_06_14')

const DisableCancelling_2024_06_14Schema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, cancelling is always disabled for this event type.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DisableCancelling_2024_06_14')

const CalVideoSettingsSchema = z
  .object({
    disableRecordingForOrganizer: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If true, the organizer will not be able to record the meeting' }),
    disableRecordingForGuests: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If true, the guests will not be able to record the meeting' }),
    redirectUrlOnExit: z
      .object({})
      .exactOptional()
      .openapi({ description: 'URL to which participants are redirected when they exit the call' }),
    enableAutomaticRecordingForOrganizer: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, enables the automatic recording for the event when organizer joins the call',
      }),
    enableAutomaticTranscription: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, enables the automatic transcription for the event whenever someone joins the call',
      }),
    disableTranscriptionForGuests: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If true, the guests will not be able to receive transcription of the meeting',
      }),
    disableTranscriptionForOrganizer: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, the organizer will not be able to receive transcription of the meeting',
      }),
    sendTranscriptionEmails: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Send emails with the transcription of the Cal Video after the meeting ends.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CalVideoSettings')

const CreateEventTypeInput_2024_06_14Schema = z
  .object({
    lengthInMinutes: z.number().openapi({ example: 60 }),
    lengthInMinutesOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: [15, 30, 60],
        description:
          'If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.',
      }),
    title: z.string().openapi({ example: 'Learn the secrets of masterchief!' }),
    slug: z.string().openapi({ example: 'learn-the-secrets-of-masterchief' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Discover the culinary wonders of the Argentina by making the best flan ever!',
      }),
    bookingFields: z
      .array(
        z.xor([
          NameDefaultFieldInput_2024_06_14Schema,
          EmailDefaultFieldInput_2024_06_14Schema,
          TitleDefaultFieldInput_2024_06_14Schema,
          LocationDefaultFieldInput_2024_06_14Schema,
          NotesDefaultFieldInput_2024_06_14Schema,
          GuestsDefaultFieldInput_2024_06_14Schema,
          RescheduleReasonDefaultFieldInput_2024_06_14Schema,
          PhoneFieldInput_2024_06_14Schema,
          AddressFieldInput_2024_06_14Schema,
          TextFieldInput_2024_06_14Schema,
          NumberFieldInput_2024_06_14Schema,
          TextAreaFieldInput_2024_06_14Schema,
          SelectFieldInput_2024_06_14Schema,
          MultiSelectFieldInput_2024_06_14Schema,
          MultiEmailFieldInput_2024_06_14Schema,
          CheckboxGroupFieldInput_2024_06_14Schema,
          RadioGroupFieldInput_2024_06_14Schema,
          BooleanFieldInput_2024_06_14Schema,
          UrlFieldInput_2024_06_14Schema,
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.',
      }),
    disableGuests: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If true, person booking this event can't add guests via their emails.",
      }),
    slotInterval: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.',
      }),
    minimumBookingNotice: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Minimum number of minutes before the event that a booking can be made.',
      }),
    beforeEventBuffer: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Extra time automatically blocked on your calendar before a meeting starts. This gives you time to prepare, review notes, or transition from your previous activity.',
      }),
    afterEventBuffer: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Extra time automatically blocked on your calendar after a meeting ends. This gives you time to wrap up, add notes, or decompress before your next commitment.',
      }),
    scheduleId: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "If you want that this event has different schedule than user's default one you can specify it here.",
      }),
    bookingLimitsCount: z
      .xor([BaseBookingLimitsCount_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Limit how many times this event can be booked' }),
    bookerActiveBookingsLimit: z
      .xor([BookerActiveBookingsLimit_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({
        description: 'Limit the number of active bookings a booker can make for this event type.',
      }),
    onlyShowFirstAvailableSlot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.',
      }),
    bookingLimitsDuration: z
      .xor([BaseBookingLimitsDuration_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Limit total amount of time that this event can be booked' }),
    bookingWindow: z
      .xor([
        BusinessDaysWindow_2024_06_14Schema,
        CalendarDaysWindow_2024_06_14Schema,
        RangeWindow_2024_06_14Schema,
        Disabled_2024_06_14Schema,
      ])
      .exactOptional()
      .openapi({ description: 'Limit how far in the future this event can be booked' }),
    offsetStart: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Offset timeslots shown to bookers by a specified number of minutes',
      }),
    bookerLayouts: BookerLayouts_2024_06_14Schema.exactOptional().openapi({
      description:
        'Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.',
    }),
    confirmationPolicy: z
      .xor([BaseConfirmationPolicy_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({
        description:
          'Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.',
      }),
    recurrence: z
      .xor([Recurrence_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Create a recurring event type.' }),
    requiresBookerEmailVerification: z.boolean().exactOptional(),
    hideCalendarNotes: z.boolean().exactOptional(),
    lockTimeZoneToggleOnBookingPage: z.boolean().exactOptional(),
    color: EventTypeColor_2024_06_14Schema.exactOptional(),
    seats: z
      .xor([Seats_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Create an event type with multiple seats.' }),
    customName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customizable event name with valid variables:\n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},\n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},\n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}',
        example: '{Event type title} between {Organiser} and {Scheduler}',
      }),
    destinationCalendar: DestinationCalendar_2024_06_14Schema.exactOptional(),
    useDestinationCalendarEmail: z.boolean().exactOptional(),
    hideCalendarEventDetails: z.boolean().exactOptional(),
    successRedirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A valid URL where the booker will redirect to, once the booking is completed successfully',
        example: 'https://masterchief.com/argentina/flan/video/9129412',
      }),
    hideOrganizerEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events",
      }),
    calVideoSettings: CalVideoSettingsSchema.exactOptional().openapi({
      description:
        "Cal video settings for the event type. Platform customers can't manage this property because currently we have no way of determining if managed user is a host or an attendee.",
    }),
    hidden: z.boolean().exactOptional(),
    bookingRequiresAuthentication: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.',
      }),
    disableCancelling: DisableCancelling_2024_06_14Schema.exactOptional().openapi({
      description: 'Settings for disabling cancelling of this event type.',
      example: { disabled: true },
    }),
    disableRescheduling: DisableRescheduling_2024_06_14Schema.exactOptional().openapi({
      description:
        'Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.',
      example: { disabled: false, minutesBefore: 60 },
    }),
    interfaceLanguage: z
      .enum([
        '',
        'en',
        'ar',
        'az',
        'bg',
        'bn',
        'ca',
        'cs',
        'da',
        'de',
        'el',
        'es',
        'es-419',
        'eu',
        'et',
        'fi',
        'fr',
        'he',
        'hu',
        'it',
        'ja',
        'km',
        'ko',
        'nl',
        'no',
        'pl',
        'pt-BR',
        'pt',
        'ro',
        'ru',
        'sk-SK',
        'sr',
        'sv',
        'tr',
        'uk',
        'vi',
        'zh-CN',
        'zh-TW',
      ])
      .exactOptional()
      .openapi({
        description:
          "Set preferred language for the booking interface. Use empty string for visitor's browser language (default).",
      }),
    allowReschedulingPastBookings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Enabling this option allows for past events to be rescheduled.' }),
    allowReschedulingCancelledBookings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.',
      }),
    showOptimizedSlots: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Arrange time slots to optimize availability.' }),
    locations: z
      .array(
        z.xor([
          InputAddressLocation_2024_06_14Schema,
          InputLinkLocation_2024_06_14Schema,
          InputIntegrationLocation_2024_06_14Schema,
          InputPhoneLocation_2024_06_14Schema,
          InputAttendeeAddressLocation_2024_06_14Schema,
          InputAttendeePhoneLocation_2024_06_14Schema,
          InputAttendeeDefinedLocation_2024_06_14Schema,
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Locations where the event will take place. If not provided, cal video link will be used as the location. Note: Setting a location to a conferencing app does not install the app - the app must already be installed. Via API, only Google Meet (google-meet), Microsoft Teams (office365-video), and Zoom (zoom) can be installed. Cal Video (cal-video) is installed by default. All other conferencing apps must be connected via the Cal.diy web app and are not available for Platform plan customers. You can only set an event type location to an app that has already been installed or connected.',
      }),
  })
  .openapi({ required: ['lengthInMinutes', 'title', 'slug'] })
  .openapi('CreateEventTypeInput_2024_06_14')

const OutputAddressLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'address', description: 'only allowed value for type is `address`' }),
    address: z.string().openapi({ example: '123 Example St, City, Country' }),
    public: z.boolean(),
  })
  .openapi({ required: ['type', 'address', 'public'] })
  .openapi('OutputAddressLocation_2024_06_14')

const OutputLinkLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'link', description: 'only allowed value for type is `link`' }),
    link: z.string().openapi({ example: 'https://customvideo.com/join/123456' }),
    public: z.boolean(),
  })
  .openapi({ required: ['type', 'link', 'public'] })
  .openapi('OutputLinkLocation_2024_06_14')

const OutputIntegrationLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'integration',
        description: 'Only allowed value for type is `integration`',
      }),
    integration: z
      .enum([
        'cal-video',
        'google-meet',
        'zoom',
        'whereby-video',
        'whatsapp-video',
        'webex-video',
        'telegram-video',
        'tandem',
        'sylaps-video',
        'skype-video',
        'sirius-video',
        'signal-video',
        'shimmer-video',
        'salesroom-video',
        'roam-video',
        'riverside-video',
        'ping-video',
        'office365-video',
        'mirotalk-video',
        'jitsi',
        'jelly-video',
        'jelly-conferencing',
        'huddle',
        'facetime-video',
        'element-call-video',
        'eightxeight-video',
        'discord-video',
        'demodesk-video',
        'campfire-video',
      ])
      .openapi({ example: 'cal-video' }),
    link: z.string().exactOptional().openapi({ example: 'https://example.com' }),
    credentialId: z
      .number()
      .exactOptional()
      .openapi({ description: 'Credential ID associated with the integration' }),
  })
  .openapi({ required: ['type', 'integration'] })
  .openapi('OutputIntegrationLocation_2024_06_14')

const OutputPhoneLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'phone', description: 'only allowed value for type is `phone`' }),
    phone: z.string().openapi({ example: '+37120993151' }),
    public: z.boolean(),
  })
  .openapi({ required: ['type', 'phone', 'public'] })
  .openapi('OutputPhoneLocation_2024_06_14')

const OutputOrganizersDefaultAppLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'organizersDefaultApp',
        description: 'only allowed value for type is `organizersDefaultApp`',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('OutputOrganizersDefaultAppLocation_2024_06_14')

const OutputUnknownLocation_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'unknown', description: 'only allowed value for type is `unknown`' }),
    location: z.string(),
  })
  .openapi({ required: ['type', 'location'] })
  .openapi('OutputUnknownLocation_2024_06_14')

const EmailDefaultFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .default('email')
      .openapi({ example: 'email', description: 'only allowed value for type is `email`' }),
    label: z.string(),
    required: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Can be set to false only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done\n      to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.\n      If true show under event type settings but don\'t show this booking field in the Booker. If false show in both.',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both. Can only be hidden\n      for organization team event types when also providing attendee phone number booking field.",
      }),
    placeholder: z.string(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled. In case of Booker atom need to pass 'email' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{email: 'bob@gmail.com'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    slug: z.string().default('email'),
  })
  .openapi({ required: ['type', 'label', 'placeholder', 'isDefault', 'slug'] })
  .openapi('EmailDefaultFieldOutput_2024_06_14')

const NameDefaultFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .default('name')
      .openapi({
        example: 'name',
        description:
          'only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.',
      }),
    label: z.string(),
    placeholder: z.string(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled. In case of Booker atom need to pass 'name' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{name: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-fields",
      }),
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    slug: z.string().default('name'),
    required: z.boolean(),
  })
  .openapi({ required: ['type', 'label', 'placeholder', 'isDefault', 'slug', 'required'] })
  .openapi('NameDefaultFieldOutput_2024_06_14')

const LocationDefaultFieldOutput_2024_06_14Schema = z
  .object({
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    slug: z
      .string()
      .default('location')
      .openapi({
        description:
          'This booking field is returned only if the event type has more than one location. The purpose of this field is to allow the user to select the location where the event will take place.',
      }),
    type: z.string().default('radioInput'),
    required: z.boolean(),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string(),
  })
  .openapi({ required: ['isDefault', 'slug', 'type', 'required', 'hidden', 'label'] })
  .openapi('LocationDefaultFieldOutput_2024_06_14')

const RescheduleReasonDefaultFieldOutput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .default('rescheduleReason')
      .openapi({
        example: 'rescheduleReason',
        description: 'only allowed value for type is `rescheduleReason`',
      }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=busy`,      the reschedule reason field will be prefilled with this value and disabled.',
      }),
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    type: z.string().default('textarea'),
  })
  .openapi({ required: ['slug', 'isDefault', 'type'] })
  .openapi('RescheduleReasonDefaultFieldOutput_2024_06_14')

const TitleDefaultFieldOutput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .default('title')
      .openapi({ example: 'title', description: 'only allowed value for type is `title`' }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=masterclass`,      the title field will be prefilled with this value and disabled.',
      }),
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    type: z.string().default('text'),
  })
  .openapi({ required: ['slug', 'isDefault', 'type'] })
  .openapi('TitleDefaultFieldOutput_2024_06_14')

const NotesDefaultFieldOutput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .default('notes')
      .openapi({ example: 'notes', description: 'only allowed value for type is `notes`' }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=hello`,      the notes field will be prefilled with this value and disabled.',
      }),
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    type: z.string().default('textarea'),
  })
  .openapi({ required: ['slug', 'isDefault', 'type'] })
  .openapi('NotesDefaultFieldOutput_2024_06_14')

const GuestsDefaultFieldOutput_2024_06_14Schema = z
  .object({
    slug: z
      .string()
      .default('guests')
      .openapi({ example: 'guests', description: 'only allowed value for type is `guests`' }),
    required: z.boolean().exactOptional(),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    label: z.string().exactOptional(),
    placeholder: z.string().exactOptional(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=lauris@cal.com`,      the guests field will be prefilled with this value and disabled.',
      }),
    isDefault: z
      .object({})
      .openapi({
        description: "This property is always true because it's a default field",
        example: true,
        default: true,
      }),
    type: z.string().default('multiemail'),
  })
  .openapi({ required: ['slug', 'isDefault', 'type'] })
  .openapi('GuestsDefaultFieldOutput_2024_06_14')

const AddressFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'address', description: 'only allowed value for type is `address`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter your address' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., 1234 Main St' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{address: 'mainstreat 10, new york'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('AddressFieldOutput_2024_06_14')

const BooleanFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'boolean', description: 'only allowed value for type is `boolean`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Agree to terms?' }),
    required: z.boolean(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field',
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'hidden', 'isDefault'] })
  .openapi('BooleanFieldOutput_2024_06_14')

const CheckboxGroupFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'checkbox', description: 'only allowed value for type is `checkbox`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Select all that apply' }),
    required: z.boolean(),
    options: z.array(z.string()).openapi({ example: ['Checkbox 1', 'Checkbox 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field',
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'options', 'hidden', 'isDefault'] })
  .openapi('CheckboxGroupFieldOutput_2024_06_14')

const MultiEmailFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'multiemail',
        description: 'only allowed value for type is `multiemail`',
      }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter multiple emails' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., example@example.com' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{consultants: ['alice@gmail.com', 'bob@gmail.com']}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('MultiEmailFieldOutput_2024_06_14')

const MultiSelectFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'multiselect',
        description: 'only allowed value for type is `multiselect`',
      }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please select multiple options' }),
    required: z.boolean(),
    options: z.array(z.string()).openapi({ example: ['Option 1', 'Option 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and the URL contains query parameter `&language=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: ['en', 'it']}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'options', 'hidden', 'isDefault'] })
  .openapi('MultiSelectFieldOutput_2024_06_14')

const UrlFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'url', description: 'only allowed value for type is `url`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter your text' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., Enter url here' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `videourl` and the URL contains query parameter `&videourl=https://youtube.com/abc`the url field will be prefilled with this value and disabled.       In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{videourl: 'https://caltube.com/123'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('UrlFieldOutput_2024_06_14')

const NumberFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'number', description: 'only allowed value for type is `number`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter a number' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., 100' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories` and the URL contains query parameter `&calories=3000`,      the number field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{calories: 3000}}`. See guide https://cal.com/docs/platform/guides/booking-field',
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('NumberFieldOutput_2024_06_14')

const PhoneFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'phone', description: 'only allowed value for type is `phone`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking. Special slug is `attendeePhoneNumber` - if you create\n      a phone input field with this slug for organization team event type you can create an organization team event type that can be booked using phone without requiring an email by setting {"type": "email", "required": false, "hidden": true} to the email booking field input in the request body.',
        example: 'some-slug',
      }),
    label: z.string(),
    required: z.boolean(),
    placeholder: z.string(),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{phone: '+37122222222'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('PhoneFieldOutput_2024_06_14')

const RadioGroupFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'radio', description: 'only allowed value for type is `radio`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Select one option' }),
    required: z.boolean(),
    options: z.array(z.string()).openapi({ example: ['Radio 1', 'Radio 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({ required: ['type', 'slug', 'label', 'required', 'options', 'hidden', 'isDefault'] })
  .openapi('RadioGroupFieldOutput_2024_06_14')

const SelectFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'select', description: 'only allowed value for type is `select`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please select an option' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'Select...' }),
    options: z.array(z.string()).openapi({ example: ['Option 1', 'Option 2'] }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: [
      'type',
      'slug',
      'label',
      'required',
      'placeholder',
      'options',
      'hidden',
      'isDefault',
    ],
  })
  .openapi('SelectFieldOutput_2024_06_14')

const TextAreaFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'textarea', description: 'only allowed value for type is `textarea`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter detailed information' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., Detailed description here...' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `reflection` and the URL contains query parameter `&reflection=Today I shipped a feature`,      the text area will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{reflection: 'Today i shipped a feature'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('TextAreaFieldOutput_2024_06_14')

const TextFieldOutput_2024_06_14Schema = z
  .object({
    type: z
      .string()
      .openapi({ example: 'text', description: 'only allowed value for type is `text`' }),
    slug: z
      .string()
      .openapi({
        description:
          'Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking',
        example: 'some-slug',
      }),
    label: z.string().openapi({ example: 'Please enter your text' }),
    required: z.boolean(),
    placeholder: z.string().openapi({ example: 'e.g., Enter text here' }),
    disableOnPrefill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `friend` and the URL contains query parameter `&friend=bob`,      the text field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{friend: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-field",
      }),
    hidden: z
      .boolean()
      .openapi({
        description:
          "If true show under event type settings but don't show this booking field in the Booker. If false show in both.",
      }),
    isDefault: z
      .object({})
      .openapi({
        description:
          "This property is always false because it's not default field but custom field",
        example: false,
        default: false,
      }),
  })
  .openapi({
    required: ['type', 'slug', 'label', 'required', 'placeholder', 'hidden', 'isDefault'],
  })
  .openapi('TextFieldOutput_2024_06_14')

const BookerActiveBookingsLimitOutput_2024_06_14Schema = z
  .object({
    maximumActiveBookings: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The maximum number of active bookings a booker can have for this event type.',
        example: 3,
      }),
    offerReschedule: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to offer rescheduling the last active booking to the chosen time slot when limit is reached.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BookerActiveBookingsLimitOutput_2024_06_14')

const DisableCancellingOutput_2024_06_14Schema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, cancelling is always disabled for this event type.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DisableCancellingOutput_2024_06_14')

const DisableReschedulingOutput_2024_06_14Schema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, rescheduling is always disabled for this event type.',
        example: true,
      }),
    minutesBefore: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Rescheduling is disabled when less than the specified number of minutes before the meeting.',
        example: 60,
      }),
  })
  .openapi({ required: [] })
  .openapi('DisableReschedulingOutput_2024_06_14')

const EventTypeOutput_2024_06_14Schema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    lengthInMinutes: z.number().openapi({ example: 60 }),
    lengthInMinutesOptions: z
      .array(z.number())
      .exactOptional()
      .openapi({
        example: [15, 30, 60],
        description:
          'If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.',
      }),
    title: z.string().openapi({ example: 'Learn the secrets of masterchief!' }),
    slug: z.string().openapi({ example: 'learn-the-secrets-of-masterchief' }),
    description: z
      .string()
      .openapi({
        example: 'Discover the culinary wonders of Argentina by making the best flan ever!',
      }),
    locations: z.array(
      z.xor([
        OutputAddressLocation_2024_06_14Schema,
        OutputLinkLocation_2024_06_14Schema,
        OutputIntegrationLocation_2024_06_14Schema,
        OutputPhoneLocation_2024_06_14Schema,
        OutputOrganizersDefaultAppLocation_2024_06_14Schema,
        OutputUnknownLocation_2024_06_14Schema,
      ]),
    ),
    bookingFields: z.array(
      z.xor([
        NameDefaultFieldOutput_2024_06_14Schema,
        EmailDefaultFieldOutput_2024_06_14Schema,
        LocationDefaultFieldOutput_2024_06_14Schema,
        RescheduleReasonDefaultFieldOutput_2024_06_14Schema,
        TitleDefaultFieldOutput_2024_06_14Schema,
        NotesDefaultFieldOutput_2024_06_14Schema,
        GuestsDefaultFieldOutput_2024_06_14Schema,
        PhoneFieldOutput_2024_06_14Schema,
        AddressFieldOutput_2024_06_14Schema,
        TextFieldOutput_2024_06_14Schema,
        NumberFieldOutput_2024_06_14Schema,
        TextAreaFieldOutput_2024_06_14Schema,
        SelectFieldOutput_2024_06_14Schema,
        MultiSelectFieldOutput_2024_06_14Schema,
        MultiEmailFieldOutput_2024_06_14Schema,
        CheckboxGroupFieldOutput_2024_06_14Schema,
        RadioGroupFieldOutput_2024_06_14Schema,
        BooleanFieldOutput_2024_06_14Schema,
        UrlFieldOutput_2024_06_14Schema,
      ]),
    ),
    disableGuests: z.boolean(),
    slotInterval: z.object({}).nullable().exactOptional().openapi({ example: 60 }),
    minimumBookingNotice: z.number().exactOptional().openapi({ example: 0 }),
    beforeEventBuffer: z.number().exactOptional().openapi({ example: 0 }),
    afterEventBuffer: z.number().exactOptional().openapi({ example: 0 }),
    recurrence: Recurrence_2024_06_14Schema.nullable(),
    metadata: z.object({}),
    price: z.number(),
    currency: z.string(),
    lockTimeZoneToggleOnBookingPage: z.boolean(),
    seatsPerTimeSlot: z.object({}).nullable().exactOptional(),
    forwardParamsSuccessRedirect: z.object({}).nullable(),
    successRedirectUrl: z.object({}).nullable(),
    isInstantEvent: z.boolean(),
    seatsShowAvailabilityCount: z.boolean().nullable().exactOptional(),
    scheduleId: z.number().nullable(),
    bookingLimitsCount: z.object({}).exactOptional(),
    bookerActiveBookingsLimit: BookerActiveBookingsLimitOutput_2024_06_14Schema.exactOptional(),
    onlyShowFirstAvailableSlot: z.boolean().exactOptional(),
    bookingLimitsDuration: z.object({}).exactOptional(),
    bookingWindow: z
      .array(
        z.xor([
          BusinessDaysWindow_2024_06_14Schema,
          CalendarDaysWindow_2024_06_14Schema,
          RangeWindow_2024_06_14Schema,
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Limit how far in the future this event can be booked' }),
    bookerLayouts: BookerLayouts_2024_06_14Schema.exactOptional(),
    confirmationPolicy: z.object({}).exactOptional(),
    requiresBookerEmailVerification: z.boolean().exactOptional(),
    hideCalendarNotes: z.boolean().exactOptional(),
    color: EventTypeColor_2024_06_14Schema.exactOptional(),
    seats: Seats_2024_06_14Schema.exactOptional(),
    offsetStart: z.number().exactOptional(),
    customName: z.string().exactOptional(),
    destinationCalendar: DestinationCalendar_2024_06_14Schema.exactOptional(),
    useDestinationCalendarEmail: z.boolean().exactOptional(),
    hideCalendarEventDetails: z.boolean().exactOptional(),
    hideOrganizerEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events",
      }),
    calVideoSettings: CalVideoSettingsSchema.exactOptional().openapi({
      description: 'Cal video settings for the event type',
    }),
    hidden: z.boolean(),
    bookingRequiresAuthentication: z
      .boolean()
      .openapi({
        description:
          'Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.',
      }),
    disableCancelling: DisableCancellingOutput_2024_06_14Schema.exactOptional().openapi({
      description: 'Settings for disabling cancelling of this event type.',
    }),
    disableRescheduling: DisableReschedulingOutput_2024_06_14Schema.exactOptional().openapi({
      description:
        'Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.',
    }),
    interfaceLanguage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Set preferred language for the booking interface.' }),
    allowReschedulingPastBookings: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enabling this option allows for past events to be rescheduled.' }),
    allowReschedulingCancelledBookings: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.',
      }),
    showOptimizedSlots: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Arrange time slots to optimize availability.' }),
    ownerId: z.number().openapi({ example: 10 }),
    users: z.array(z.string()),
    bookingUrl: z
      .url()
      .openapi({
        description: 'Full URL to the booking page for this event type',
        example: 'https://cal.com/john-doe/30min',
      }),
  })
  .openapi({
    required: [
      'id',
      'lengthInMinutes',
      'title',
      'slug',
      'description',
      'locations',
      'bookingFields',
      'disableGuests',
      'recurrence',
      'metadata',
      'price',
      'currency',
      'lockTimeZoneToggleOnBookingPage',
      'forwardParamsSuccessRedirect',
      'successRedirectUrl',
      'isInstantEvent',
      'scheduleId',
      'hidden',
      'bookingRequiresAuthentication',
      'ownerId',
      'users',
      'bookingUrl',
    ],
  })
  .openapi('EventTypeOutput_2024_06_14')

const CreateEventTypeOutput_2024_06_14Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: EventTypeOutput_2024_06_14Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreateEventTypeOutput_2024_06_14')

const EventTypeTeamSchema = z
  .object({
    id: z.number(),
    slug: z.string(),
    bannerUrl: z.string(),
    name: z.string(),
    logoUrl: z.string(),
    weekStart: z.string(),
    brandColor: z.string(),
    darkBrandColor: z.string(),
    theme: z.string(),
  })
  .openapi({
    required: [
      'id',
      'slug',
      'bannerUrl',
      'name',
      'logoUrl',
      'weekStart',
      'brandColor',
      'darkBrandColor',
      'theme',
    ],
  })
  .openapi('EventTypeTeam')

const TeamEventTypeOutput_2024_06_14Schema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    lengthInMinutes: z.number().openapi({ example: 60 }),
    lengthInMinutesOptions: z
      .array(z.number())
      .exactOptional()
      .openapi({
        example: [15, 30, 60],
        description:
          'If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.',
      }),
    title: z.string().openapi({ example: 'Learn the secrets of masterchief!' }),
    slug: z.string().openapi({ example: 'learn-the-secrets-of-masterchief' }),
    description: z
      .string()
      .openapi({
        example: 'Discover the culinary wonders of Argentina by making the best flan ever!',
      }),
    locations: z.array(
      z.xor([
        OutputAddressLocation_2024_06_14Schema,
        OutputLinkLocation_2024_06_14Schema,
        OutputIntegrationLocation_2024_06_14Schema,
        OutputPhoneLocation_2024_06_14Schema,
        OutputOrganizersDefaultAppLocation_2024_06_14Schema,
        OutputUnknownLocation_2024_06_14Schema,
      ]),
    ),
    bookingFields: z.array(
      z.xor([
        NameDefaultFieldOutput_2024_06_14Schema,
        EmailDefaultFieldOutput_2024_06_14Schema,
        LocationDefaultFieldOutput_2024_06_14Schema,
        RescheduleReasonDefaultFieldOutput_2024_06_14Schema,
        TitleDefaultFieldOutput_2024_06_14Schema,
        NotesDefaultFieldOutput_2024_06_14Schema,
        GuestsDefaultFieldOutput_2024_06_14Schema,
        PhoneFieldOutput_2024_06_14Schema,
        AddressFieldOutput_2024_06_14Schema,
        TextFieldOutput_2024_06_14Schema,
        NumberFieldOutput_2024_06_14Schema,
        TextAreaFieldOutput_2024_06_14Schema,
        SelectFieldOutput_2024_06_14Schema,
        MultiSelectFieldOutput_2024_06_14Schema,
        MultiEmailFieldOutput_2024_06_14Schema,
        CheckboxGroupFieldOutput_2024_06_14Schema,
        RadioGroupFieldOutput_2024_06_14Schema,
        BooleanFieldOutput_2024_06_14Schema,
        UrlFieldOutput_2024_06_14Schema,
      ]),
    ),
    disableGuests: z.boolean(),
    slotInterval: z.object({}).nullable().exactOptional().openapi({ example: 60 }),
    minimumBookingNotice: z.number().exactOptional().openapi({ example: 0 }),
    beforeEventBuffer: z.number().exactOptional().openapi({ example: 0 }),
    afterEventBuffer: z.number().exactOptional().openapi({ example: 0 }),
    recurrence: Recurrence_2024_06_14Schema.nullable(),
    metadata: z.object({}),
    price: z.number(),
    currency: z.string(),
    lockTimeZoneToggleOnBookingPage: z.boolean(),
    seatsPerTimeSlot: z.object({}).nullable().exactOptional(),
    forwardParamsSuccessRedirect: z.object({}).nullable(),
    successRedirectUrl: z.object({}).nullable(),
    isInstantEvent: z.boolean(),
    seatsShowAvailabilityCount: z.boolean().nullable().exactOptional(),
    scheduleId: z.number().nullable(),
    bookingLimitsCount: z.object({}).exactOptional(),
    bookerActiveBookingsLimit: BookerActiveBookingsLimitOutput_2024_06_14Schema.exactOptional(),
    onlyShowFirstAvailableSlot: z.boolean().exactOptional(),
    bookingLimitsDuration: z.object({}).exactOptional(),
    bookingWindow: z
      .array(
        z.xor([
          BusinessDaysWindow_2024_06_14Schema,
          CalendarDaysWindow_2024_06_14Schema,
          RangeWindow_2024_06_14Schema,
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Limit how far in the future this event can be booked' }),
    bookerLayouts: BookerLayouts_2024_06_14Schema.exactOptional(),
    confirmationPolicy: z.object({}).exactOptional(),
    requiresBookerEmailVerification: z.boolean().exactOptional(),
    hideCalendarNotes: z.boolean().exactOptional(),
    color: EventTypeColor_2024_06_14Schema.exactOptional(),
    seats: Seats_2024_06_14Schema.exactOptional(),
    offsetStart: z.number().exactOptional(),
    customName: z.string().exactOptional(),
    destinationCalendar: DestinationCalendar_2024_06_14Schema.exactOptional(),
    useDestinationCalendarEmail: z.boolean().exactOptional(),
    hideCalendarEventDetails: z.boolean().exactOptional(),
    hideOrganizerEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events",
      }),
    calVideoSettings: CalVideoSettingsSchema.exactOptional().openapi({
      description: 'Cal video settings for the event type',
    }),
    hidden: z.boolean(),
    bookingRequiresAuthentication: z
      .boolean()
      .openapi({
        description:
          'Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.',
      }),
    disableCancelling: DisableCancellingOutput_2024_06_14Schema.exactOptional().openapi({
      description: 'Settings for disabling cancelling of this event type.',
    }),
    disableRescheduling: DisableReschedulingOutput_2024_06_14Schema.exactOptional().openapi({
      description:
        'Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.',
    }),
    interfaceLanguage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Set preferred language for the booking interface.' }),
    allowReschedulingPastBookings: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enabling this option allows for past events to be rescheduled.' }),
    allowReschedulingCancelledBookings: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.',
      }),
    showOptimizedSlots: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Arrange time slots to optimize availability.' }),
    teamId: z.number(),
    ownerId: z.object({}).nullable().exactOptional(),
    parentEventTypeId: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'For managed event types, parent event type is the event type that this event type is based on',
      }),
    hosts: z.array(z.string()),
    assignAllTeamMembers: z.boolean().exactOptional(),
    schedulingType: z.enum(['roundRobin', 'collective', 'managed']),
    team: EventTypeTeamSchema,
    emailSettings: EmailSettings_2024_06_14Schema.exactOptional().openapi({
      description:
        'Email settings for this event type. Only available for organization team event types.',
    }),
    rescheduleWithSameRoundRobinHost: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Rescheduled events will be assigned to the same host as initially scheduled.',
      }),
  })
  .openapi({
    required: [
      'id',
      'lengthInMinutes',
      'title',
      'slug',
      'description',
      'locations',
      'bookingFields',
      'disableGuests',
      'recurrence',
      'metadata',
      'price',
      'currency',
      'lockTimeZoneToggleOnBookingPage',
      'forwardParamsSuccessRedirect',
      'successRedirectUrl',
      'isInstantEvent',
      'scheduleId',
      'hidden',
      'bookingRequiresAuthentication',
      'teamId',
      'hosts',
      'schedulingType',
      'team',
    ],
  })
  .openapi('TeamEventTypeOutput_2024_06_14')

const GetEventTypeOutput_2024_06_14Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.xor([EventTypeOutput_2024_06_14Schema, TeamEventTypeOutput_2024_06_14Schema]),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetEventTypeOutput_2024_06_14')

const GetEventTypesOutput_2024_06_14Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(EventTypeOutput_2024_06_14Schema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetEventTypesOutput_2024_06_14')

const UpdateEventTypeInput_2024_06_14Schema = z
  .object({
    lengthInMinutes: z.number().exactOptional().openapi({ example: 60 }),
    lengthInMinutesOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: [15, 30, 60],
        description:
          'If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.',
      }),
    title: z.string().exactOptional().openapi({ example: 'Learn the secrets of masterchief!' }),
    slug: z.string().exactOptional().openapi({ example: 'learn-the-secrets-of-masterchief' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Discover the culinary wonders of the Argentina by making the best flan ever!',
      }),
    bookingFields: z
      .array(
        z.xor([
          NameDefaultFieldInput_2024_06_14Schema,
          EmailDefaultFieldInput_2024_06_14Schema,
          TitleDefaultFieldInput_2024_06_14Schema,
          LocationDefaultFieldInput_2024_06_14Schema,
          NotesDefaultFieldInput_2024_06_14Schema,
          GuestsDefaultFieldInput_2024_06_14Schema,
          RescheduleReasonDefaultFieldInput_2024_06_14Schema,
          PhoneFieldInput_2024_06_14Schema,
          AddressFieldInput_2024_06_14Schema,
          TextFieldInput_2024_06_14Schema,
          NumberFieldInput_2024_06_14Schema,
          TextAreaFieldInput_2024_06_14Schema,
          SelectFieldInput_2024_06_14Schema,
          MultiSelectFieldInput_2024_06_14Schema,
          MultiEmailFieldInput_2024_06_14Schema,
          CheckboxGroupFieldInput_2024_06_14Schema,
          RadioGroupFieldInput_2024_06_14Schema,
          BooleanFieldInput_2024_06_14Schema,
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Complete set of booking form fields. This array replaces all existing booking fields. To modify existing fields, first fetch the current event type, then include all desired fields in this array. Sending only one field will remove all other custom fields, keeping only default fields plus the provided one.',
      }),
    disableGuests: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If true, person booking this event can't add guests via their emails.",
      }),
    slotInterval: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Number representing length of each slot when event is booked. By default it equal length of the event type.\n      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then\n      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.',
      }),
    minimumBookingNotice: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Minimum number of minutes before the event that a booking can be made.',
      }),
    beforeEventBuffer: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Extra time automatically blocked on your calendar before a meeting starts. This gives you time to prepare, review notes, or transition from your previous activity.',
      }),
    afterEventBuffer: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Extra time automatically blocked on your calendar after a meeting ends. This gives you time to wrap up, add notes, or decompress before your next commitment.',
      }),
    scheduleId: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "If you want that this event has different schedule than user's default one you can specify it here.",
      }),
    bookingLimitsCount: z
      .xor([BaseBookingLimitsCount_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Limit how many times this event can be booked' }),
    bookerActiveBookingsLimit: z
      .xor([BookerActiveBookingsLimit_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({
        description: 'Limit the number of active bookings a booker can make for this event type.',
      }),
    onlyShowFirstAvailableSlot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.',
      }),
    bookingLimitsDuration: z
      .xor([BaseBookingLimitsDuration_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Limit total amount of time that this event can be booked' }),
    bookingWindow: z
      .xor([
        BusinessDaysWindow_2024_06_14Schema,
        CalendarDaysWindow_2024_06_14Schema,
        RangeWindow_2024_06_14Schema,
        Disabled_2024_06_14Schema,
      ])
      .exactOptional()
      .openapi({ description: 'Limit how far in the future this event can be booked' }),
    offsetStart: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Offset timeslots shown to bookers by a specified number of minutes',
      }),
    bookerLayouts: BookerLayouts_2024_06_14Schema.exactOptional().openapi({
      description:
        'Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.',
    }),
    confirmationPolicy: z
      .xor([BaseConfirmationPolicy_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({
        description:
          'Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.',
      }),
    recurrence: z
      .xor([Recurrence_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Create a recurring event type.' }),
    requiresBookerEmailVerification: z.boolean().exactOptional(),
    hideCalendarNotes: z.boolean().exactOptional(),
    lockTimeZoneToggleOnBookingPage: z.boolean().exactOptional(),
    color: EventTypeColor_2024_06_14Schema.exactOptional(),
    seats: z
      .xor([Seats_2024_06_14Schema, Disabled_2024_06_14Schema])
      .exactOptional()
      .openapi({ description: 'Create an event type with multiple seats.' }),
    customName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customizable event name with valid variables:\n      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},\n      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},\n      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}',
        example: '{Event type title} between {Organiser} and {Scheduler}',
      }),
    destinationCalendar: DestinationCalendar_2024_06_14Schema.exactOptional(),
    useDestinationCalendarEmail: z.boolean().exactOptional(),
    hideCalendarEventDetails: z.boolean().exactOptional(),
    successRedirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A valid URL where the booker will redirect to, once the booking is completed successfully',
        example: 'https://masterchief.com/argentina/flan/video/9129412',
      }),
    hideOrganizerEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events",
      }),
    calVideoSettings: CalVideoSettingsSchema.exactOptional().openapi({
      description: 'Cal video settings for the event type',
    }),
    hidden: z.boolean().exactOptional(),
    bookingRequiresAuthentication: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.',
      }),
    disableCancelling: DisableCancelling_2024_06_14Schema.exactOptional().openapi({
      description: 'Settings for disabling cancelling of this event type.',
      example: { disabled: true },
    }),
    disableRescheduling: DisableRescheduling_2024_06_14Schema.exactOptional().openapi({
      description:
        'Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.',
      example: { disabled: false, minutesBefore: 60 },
    }),
    interfaceLanguage: z
      .enum([
        '',
        'en',
        'ar',
        'az',
        'bg',
        'bn',
        'ca',
        'cs',
        'da',
        'de',
        'el',
        'es',
        'es-419',
        'eu',
        'et',
        'fi',
        'fr',
        'he',
        'hu',
        'it',
        'ja',
        'km',
        'ko',
        'nl',
        'no',
        'pl',
        'pt-BR',
        'pt',
        'ro',
        'ru',
        'sk-SK',
        'sr',
        'sv',
        'tr',
        'uk',
        'vi',
        'zh-CN',
        'zh-TW',
      ])
      .exactOptional()
      .openapi({
        description:
          "Set preferred language for the booking interface. Use empty string for visitor's browser language (default).",
      }),
    allowReschedulingPastBookings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Enabling this option allows for past events to be rescheduled.' }),
    allowReschedulingCancelledBookings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.',
      }),
    showOptimizedSlots: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Arrange time slots to optimize availability.' }),
    locations: z
      .array(
        z.xor([
          InputAddressLocation_2024_06_14Schema,
          InputLinkLocation_2024_06_14Schema,
          InputIntegrationLocation_2024_06_14Schema,
          InputPhoneLocation_2024_06_14Schema,
          InputAttendeeAddressLocation_2024_06_14Schema,
          InputAttendeePhoneLocation_2024_06_14Schema,
          InputAttendeeDefinedLocation_2024_06_14Schema,
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Locations where the event will take place. If not provided, cal video link will be used as the location. Note: Setting a location to a conferencing app does not install the app - the app must already be installed. Via API, only Google Meet (google-meet), Microsoft Teams (office365-video), and Zoom (zoom) can be installed. Cal Video (cal-video) is installed by default. All other conferencing apps must be connected via the Cal.diy web app and are not available for Platform plan customers. You can only set an event type location to an app that has already been installed or connected.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateEventTypeInput_2024_06_14')

const UpdateEventTypeOutput_2024_06_14Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: EventTypeOutput_2024_06_14Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UpdateEventTypeOutput_2024_06_14')

const DeleteData_2024_06_14Schema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    lengthInMinutes: z.number().openapi({ example: 60 }),
    title: z.string().openapi({ example: 'Learn the secrets of masterchief!' }),
    slug: z.string(),
  })
  .openapi({ required: ['id', 'lengthInMinutes', 'title', 'slug'] })
  .openapi('DeleteData_2024_06_14')

const DeleteEventTypeOutput_2024_06_14Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: DeleteData_2024_06_14Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('DeleteEventTypeOutput_2024_06_14')

const SelectedCalendarsInputDtoSchema = z
  .object({
    integration: z.string(),
    externalId: z.string(),
    credentialId: z.number(),
    delegationCredentialId: z.string().exactOptional(),
  })
  .openapi({ required: ['integration', 'externalId', 'credentialId'] })
  .openapi('SelectedCalendarsInputDto')

const SelectedCalendarOutputDtoSchema = z
  .object({
    userId: z.number(),
    integration: z.string(),
    externalId: z.string(),
    credentialId: z.number().nullable(),
  })
  .openapi({ required: ['userId', 'integration', 'externalId', 'credentialId'] })
  .openapi('SelectedCalendarOutputDto')

const SelectedCalendarOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: SelectedCalendarOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('SelectedCalendarOutputResponseDto')

const StripConnectOutputDtoSchema = z
  .object({ authUrl: z.string() })
  .openapi({ required: ['authUrl'] })
  .openapi('StripConnectOutputDto')

const StripConnectOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: StripConnectOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('StripConnectOutputResponseDto')

const StripCredentialsSaveOutputResponseDtoSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('StripCredentialsSaveOutputResponseDto')

const StripCredentialsCheckOutputResponseDtoSchema = z
  .object({ status: z.object({}).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('StripCredentialsCheckOutputResponseDto')

const ScheduleAvailabilityInput_2024_06_11Schema = z
  .object({
    days: z
      .array(z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']))
      .openapi({
        example: ['Monday', 'Tuesday'],
        description: 'Array of days when schedule is active.',
      }),
    startTime: z
      .string()
      .openapi({
        example: '08:00',
        description: 'startTime must be a valid time in format HH:MM e.g. 08:00',
      }),
    endTime: z
      .string()
      .openapi({
        example: '15:00',
        description: 'endTime must be a valid time in format HH:MM e.g. 15:00',
      }),
  })
  .openapi({ required: ['days', 'startTime', 'endTime'] })
  .openapi('ScheduleAvailabilityInput_2024_06_11')

const ScheduleOverrideInput_2024_06_11Schema = z
  .object({
    date: z.string().openapi({ example: '2024-05-20' }),
    startTime: z
      .string()
      .openapi({
        example: '12:00',
        description: 'startTime must be a valid time in format HH:MM e.g. 12:00',
      }),
    endTime: z
      .string()
      .openapi({
        example: '13:00',
        description: 'endTime must be a valid time in format HH:MM e.g. 13:00',
      }),
  })
  .openapi({ required: ['date', 'startTime', 'endTime'] })
  .openapi('ScheduleOverrideInput_2024_06_11')

const CreateScheduleInput_2024_06_11Schema = z
  .object({
    name: z.string().openapi({ example: 'Catch up hours' }),
    timeZone: z
      .string()
      .openapi({
        example: 'Europe/Rome',
        description:
          'Timezone is used to calculate available times when an event using the schedule is booked.',
      }),
    availability: z
      .array(ScheduleAvailabilityInput_2024_06_11Schema)
      .exactOptional()
      .openapi({
        description:
          'Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.',
        example: [
          { days: ['Monday', 'Tuesday'], startTime: '17:00', endTime: '19:00' },
          { days: ['Wednesday', 'Thursday'], startTime: '16:00', endTime: '20:00' },
        ],
      }),
    isDefault: z
      .boolean()
      .openapi({
        example: true,
        description:
          'Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.\n    Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.',
      }),
    overrides: z
      .array(ScheduleOverrideInput_2024_06_11Schema)
      .exactOptional()
      .openapi({
        description: 'Need to change availability for a specific date? Add an override.',
        example: [{ date: '2024-05-20', startTime: '18:00', endTime: '21:00' }],
      }),
  })
  .openapi({ required: ['name', 'timeZone', 'isDefault'] })
  .openapi('CreateScheduleInput_2024_06_11')

const ScheduleOutput_2024_06_11Schema = z
  .object({
    id: z.number().openapi({ example: 254 }),
    ownerId: z.number().openapi({ example: 478 }),
    name: z.string().openapi({ example: 'Catch up hours' }),
    timeZone: z.string().openapi({ example: 'Europe/Rome' }),
    availability: z.array(ScheduleAvailabilityInput_2024_06_11Schema).openapi({
      example: [
        { days: ['Monday', 'Tuesday'], startTime: '17:00', endTime: '19:00' },
        { days: ['Wednesday', 'Thursday'], startTime: '16:00', endTime: '20:00' },
      ],
    }),
    isDefault: z.boolean().openapi({ example: true }),
    overrides: z
      .array(ScheduleOverrideInput_2024_06_11Schema)
      .openapi({ example: [{ date: '2024-05-20', startTime: '18:00', endTime: '21:00' }] }),
  })
  .openapi({
    required: ['id', 'ownerId', 'name', 'timeZone', 'availability', 'isDefault', 'overrides'],
  })
  .openapi('ScheduleOutput_2024_06_11')

const CreateScheduleOutput_2024_06_11Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ScheduleOutput_2024_06_11Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreateScheduleOutput_2024_06_11')

const GetDefaultScheduleOutput_2024_06_11Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ScheduleOutput_2024_06_11Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetDefaultScheduleOutput_2024_06_11')

const GetScheduleOutput_2024_06_11Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ScheduleOutput_2024_06_11Schema.nullable(),
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetScheduleOutput_2024_06_11')

const GetSchedulesOutput_2024_06_11Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(ScheduleOutput_2024_06_11Schema),
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetSchedulesOutput_2024_06_11')

const UpdateScheduleInput_2024_06_11Schema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'One-on-one coaching' }),
    timeZone: z.string().exactOptional().openapi({ example: 'Europe/Rome' }),
    availability: z
      .array(ScheduleAvailabilityInput_2024_06_11Schema)
      .exactOptional()
      .openapi({
        example: [{ days: ['Monday', 'Tuesday'], startTime: '09:00', endTime: '10:00' }],
      }),
    isDefault: z.boolean().exactOptional().openapi({ example: true }),
    overrides: z
      .array(ScheduleOverrideInput_2024_06_11Schema)
      .exactOptional()
      .openapi({ example: [{ date: '2024-05-20', startTime: '12:00', endTime: '14:00' }] }),
  })
  .openapi({ required: [] })
  .openapi('UpdateScheduleInput_2024_06_11')

const UpdateScheduleOutput_2024_06_11Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ScheduleOutput_2024_06_11Schema,
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UpdateScheduleOutput_2024_06_11')

const DeleteScheduleOutput_2024_06_11Schema = z
  .object({ status: z.enum(['success', 'error']).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('DeleteScheduleOutput_2024_06_11')

const CreatePrivateLinkInputSchema = z
  .object({
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date for time-based links',
        example: '2024-12-31T23:59:59.000Z',
      }),
    maxUsageCount: z
      .number()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of times the link can be used. If omitted and expiresAt is not provided, defaults to 1 (one time use).',
        example: 10,
      }),
  })
  .openapi({ required: [] })
  .openapi('CreatePrivateLinkInput')

const TimeBasedPrivateLinkOutputSchema = z
  .object({
    linkId: z.string().openapi({ description: 'The private link ID', example: 'abc123def456' }),
    eventTypeId: z
      .number()
      .openapi({ description: 'Event type ID this link belongs to', example: 123 }),
    isExpired: z
      .boolean()
      .openapi({ description: 'Whether the link is currently expired', example: false }),
    bookingUrl: z
      .url()
      .openapi({
        description: 'Full booking URL for this private link',
        example: 'https://cal.com/d/abc123def456/30min',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Expiration date for this time-based link',
        example: '2025-12-31T23:59:59.000Z',
      }),
  })
  .openapi({ required: ['linkId', 'eventTypeId', 'isExpired', 'bookingUrl', 'expiresAt'] })
  .openapi('TimeBasedPrivateLinkOutput')

const UsageBasedPrivateLinkOutputSchema = z
  .object({
    linkId: z.string().openapi({ description: 'The private link ID', example: 'abc123def456' }),
    eventTypeId: z
      .number()
      .openapi({ description: 'Event type ID this link belongs to', example: 123 }),
    isExpired: z
      .boolean()
      .openapi({ description: 'Whether the link is currently expired', example: false }),
    bookingUrl: z
      .url()
      .openapi({
        description: 'Full booking URL for this private link',
        example: 'https://cal.com/d/abc123def456/30min',
      }),
    maxUsageCount: z
      .number()
      .openapi({ description: 'Maximum number of times this link can be used', example: 10 }),
    usageCount: z
      .number()
      .openapi({ description: 'Current usage count for this link', example: 3 }),
  })
  .openapi({
    required: ['linkId', 'eventTypeId', 'isExpired', 'bookingUrl', 'maxUsageCount', 'usageCount'],
  })
  .openapi('UsageBasedPrivateLinkOutput')

const CreatePrivateLinkOutputSchema = z
  .object({
    status: z.string().openapi({ description: 'Response status', example: 'success' }),
    data: z
      .xor([TimeBasedPrivateLinkOutputSchema, UsageBasedPrivateLinkOutputSchema])
      .openapi({ description: 'Created private link data (either time-based or usage-based)' }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreatePrivateLinkOutput')

const GetPrivateLinksOutputSchema = z
  .object({
    status: z.string().openapi({ description: 'Response status', example: 'success' }),
    data: z
      .array(z.xor([TimeBasedPrivateLinkOutputSchema, UsageBasedPrivateLinkOutputSchema]))
      .openapi({
        description:
          'Array of private links for the event type (mix of time-based and usage-based)',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetPrivateLinksOutput')

const UpdatePrivateLinkBodySchema = z
  .object({
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'New expiration date for time-based links',
        example: '2024-12-31T23:59:59.000Z',
      }),
    maxUsageCount: z
      .number()
      .min(1)
      .exactOptional()
      .openapi({ description: 'New maximum number of times the link can be used', example: 10 }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePrivateLinkBody')

const UpdatePrivateLinkOutputSchema = z
  .object({
    status: z.string().openapi({ description: 'Response status', example: 'success' }),
    data: z
      .xor([TimeBasedPrivateLinkOutputSchema, UsageBasedPrivateLinkOutputSchema])
      .openapi({ description: 'Updated private link data (either time-based or usage-based)' }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UpdatePrivateLinkOutput')

const DeletePrivateLinkOutputSchema = z
  .object({
    status: z.string().openapi({ description: 'Response status', example: 'success' }),
    data: z
      .object({
        linkId: z.string().exactOptional().openapi({ example: 'abc123def456' }),
        message: z
          .string()
          .exactOptional()
          .openapi({ example: 'Private link deleted successfully' }),
      })
      .openapi({ description: 'Deleted link information', required: [] }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('DeletePrivateLinkOutput')

const MeOrgOutputSchema = z
  .object({ isPlatform: z.boolean(), id: z.number() })
  .openapi({ required: ['isPlatform', 'id'] })
  .openapi('MeOrgOutput')

const MeOutputSchema = z
  .object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    bio: z.string().nullable(),
    timeFormat: z.number(),
    defaultScheduleId: z.number().nullable(),
    weekStart: z.string(),
    timeZone: z.string(),
    organizationId: z.number().nullable(),
    organization: MeOrgOutputSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'username',
      'email',
      'name',
      'avatarUrl',
      'bio',
      'timeFormat',
      'defaultScheduleId',
      'weekStart',
      'timeZone',
      'organizationId',
    ],
  })
  .openapi('MeOutput')

const GetMeOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: MeOutputSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetMeOutput')

const UpdateMeOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: MeOutputSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UpdateMeOutput')

const CreateIcsFeedInputDtoSchema = z
  .object({
    urls: z
      .array(z.string().openapi({ example: 'https://cal.com/ics/feed.ics' }))
      .openapi({
        example: ['https://cal.com/ics/feed.ics', 'http://cal.com/ics/feed.ics'],
        description: 'An array of ICS URLs',
      }),
    readOnly: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        example: false,
        description: 'Whether to allowing writing to the calendar or not',
      }),
  })
  .openapi({ required: ['urls'] })
  .openapi('CreateIcsFeedInputDto')

const CreateIcsFeedOutputSchema = z
  .object({
    id: z
      .number()
      .openapi({ example: 1234567890, description: 'The id of the calendar credential' }),
    type: z
      .string()
      .openapi({ example: 'ics-feed_calendar', description: 'The type of the calendar' }),
    userId: z
      .int()
      .nullable()
      .openapi({
        example: 1234567890,
        description: 'The user id of the user that created the calendar',
      }),
    teamId: z
      .int()
      .nullable()
      .openapi({
        example: 1234567890,
        description: 'The team id of the user that created the calendar',
      }),
    appId: z
      .string()
      .nullable()
      .openapi({ example: 'ics-feed', description: 'The slug of the calendar' }),
    invalid: z
      .boolean()
      .nullable()
      .openapi({
        example: false,
        description: 'Whether the calendar credentials are valid or not',
      }),
  })
  .openapi({ required: ['id', 'type', 'userId', 'teamId', 'appId', 'invalid'] })
  .openapi('CreateIcsFeedOutput')

const CreateIcsFeedOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: CreateIcsFeedOutputSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreateIcsFeedOutputResponseDto')

const BusyTimesOutputSchema = z
  .object({
    start: z.iso.datetime({ offset: true }),
    end: z.iso.datetime({ offset: true }),
    source: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['start', 'end'] })
  .openapi('BusyTimesOutput')

const GetBusyTimesOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(BusyTimesOutputSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBusyTimesOutput')

const IntegrationSchema = z
  .object({
    appData: z.object({}).nullable().exactOptional(),
    dirName: z.string().exactOptional(),
    __template: z.string().exactOptional(),
    name: z.string(),
    description: z.string(),
    installed: z.boolean().exactOptional(),
    type: z.string(),
    title: z.string().exactOptional(),
    variant: z.string(),
    category: z.string().exactOptional(),
    categories: z.array(z.string()),
    logo: z.string(),
    publisher: z.string(),
    slug: z.string(),
    url: z.string(),
    email: z.string(),
    locationOption: z.object({}).nullable(),
  })
  .openapi({
    required: [
      'name',
      'description',
      'type',
      'variant',
      'categories',
      'logo',
      'publisher',
      'slug',
      'url',
      'email',
      'locationOption',
    ],
  })
  .openapi('Integration')

const PrimarySchema = z
  .object({
    externalId: z.string(),
    integration: z.string().exactOptional(),
    name: z.string().exactOptional(),
    primary: z.boolean().nullable(),
    readOnly: z.boolean(),
    email: z.string().exactOptional(),
    isSelected: z.boolean(),
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['externalId', 'primary', 'readOnly', 'isSelected', 'credentialId'] })
  .openapi('Primary')

const CalendarSchema = z
  .object({
    externalId: z.string(),
    integration: z.string().exactOptional(),
    name: z.string().exactOptional(),
    primary: z.boolean().nullable().exactOptional(),
    readOnly: z.boolean(),
    email: z.string().exactOptional(),
    isSelected: z.boolean(),
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['externalId', 'readOnly', 'isSelected', 'credentialId'] })
  .openapi('Calendar')

const ConnectedCalendarSchema = z
  .object({
    integration: IntegrationSchema,
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().exactOptional(),
    primary: PrimarySchema.exactOptional(),
    calendars: z.array(CalendarSchema).exactOptional(),
  })
  .openapi({ required: ['integration', 'credentialId'] })
  .openapi('ConnectedCalendar')

const DestinationCalendarSchema = z
  .object({
    id: z.object({}),
    integration: z.string(),
    externalId: z.string(),
    primaryEmail: z.string().nullable(),
    userId: z.number().nullable(),
    eventTypeId: z.number().nullable(),
    credentialId: z.number().nullable(),
    delegationCredentialId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    primary: z.boolean().exactOptional(),
    readOnly: z.boolean().exactOptional(),
    email: z.string().exactOptional(),
    integrationTitle: z.string().exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'integration',
      'externalId',
      'primaryEmail',
      'userId',
      'eventTypeId',
      'credentialId',
    ],
  })
  .openapi('DestinationCalendar')

const ConnectedCalendarsDataSchema = z
  .object({
    connectedCalendars: z.array(ConnectedCalendarSchema),
    destinationCalendar: DestinationCalendarSchema,
  })
  .openapi({ required: ['connectedCalendars', 'destinationCalendar'] })
  .openapi('ConnectedCalendarsData')

const ConnectedCalendarsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ConnectedCalendarsDataSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('ConnectedCalendarsOutput')

const CreateCalendarCredentialsInputSchema = z
  .object({ username: z.string(), password: z.string() })
  .openapi({ required: ['username', 'password'] })
  .openapi('CreateCalendarCredentialsInput')

const DeleteCalendarCredentialsInputBodyDtoSchema = z
  .object({
    id: z
      .int()
      .openapi({
        example: 10,
        description:
          'Credential ID of the calendar to delete, as returned by the /calendars endpoint',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('DeleteCalendarCredentialsInputBodyDto')

const DeletedCalendarCredentialsOutputDtoSchema = z
  .object({
    id: z.number(),
    type: z.string(),
    userId: z.number().nullable(),
    teamId: z.number().nullable(),
    appId: z.string().nullable(),
    invalid: z.boolean().nullable(),
  })
  .openapi({ required: ['id', 'type', 'userId', 'teamId', 'appId', 'invalid'] })
  .openapi('DeletedCalendarCredentialsOutputDto')

const DeletedCalendarCredentialsOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: DeletedCalendarCredentialsOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('DeletedCalendarCredentialsOutputResponseDto')

const BookingInputAddressLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'address',
        description:
          'only allowed value for type is `address` - it refers to address defined by the organizer.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('BookingInputAddressLocation_2024_08_13')

const BookingInputAttendeeAddressLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeeAddress',
        description: 'only allowed value for type is `attendeeAddress`',
      }),
    address: z.string().openapi({ example: '123 Example St, City, Country' }),
  })
  .openapi({ required: ['type', 'address'] })
  .openapi('BookingInputAttendeeAddressLocation_2024_08_13')

const BookingInputAttendeeDefinedLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeeDefined',
        description: 'only allowed value for type is `attendeeDefined`',
      }),
    location: z.string().openapi({ example: '321 Example St, City, Country' }),
  })
  .openapi({ required: ['type', 'location'] })
  .openapi('BookingInputAttendeeDefinedLocation_2024_08_13')

const BookingInputAttendeePhoneLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeePhone',
        description: 'only allowed value for type is `attendeePhone`',
      }),
    phone: z.string().openapi({ example: '+37120993151' }),
  })
  .openapi({ required: ['type', 'phone'] })
  .openapi('BookingInputAttendeePhoneLocation_2024_08_13')

const BookingInputIntegrationLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'integration',
        description: 'only allowed value for type is `integration`',
      }),
    integration: z
      .enum([
        'cal-video',
        'google-meet',
        'zoom',
        'whereby-video',
        'whatsapp-video',
        'webex-video',
        'telegram-video',
        'tandem',
        'sylaps-video',
        'skype-video',
        'sirius-video',
        'signal-video',
        'shimmer-video',
        'salesroom-video',
        'roam-video',
        'riverside-video',
        'ping-video',
        'office365-video',
        'mirotalk-video',
        'jitsi',
        'jelly-video',
        'jelly-conferencing',
        'huddle',
        'facetime-video',
        'element-call-video',
        'eightxeight-video',
        'discord-video',
        'demodesk-video',
        'campfire-video',
      ])
      .openapi({ example: 'cal-video' }),
  })
  .openapi({ required: ['type', 'integration'] })
  .openapi('BookingInputIntegrationLocation_2024_08_13')

const BookingInputLinkLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'link',
        description:
          'only allowed value for type is `link` - it refers to link defined by the organizer.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('BookingInputLinkLocation_2024_08_13')

const BookingInputPhoneLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'phone',
        description:
          'only allowed value for type is `phone` - it refers to phone defined by the organizer.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('BookingInputPhoneLocation_2024_08_13')

const BookingInputOrganizersDefaultAppLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'organizersDefaultApp',
        description:
          'only available for team event types and the only allowed value for type is `organizersDefaultApp` - it refers to the default app defined by the organizer.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('BookingInputOrganizersDefaultAppLocation_2024_08_13')

const ValidateBookingLocation_2024_08_13Schema = z
  .object({})
  .openapi('ValidateBookingLocation_2024_08_13')

const CreateBookingAttendeeSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the attendee.', example: 'John Doe' }),
    timeZone: z
      .string()
      .openapi({ description: 'The time zone of the attendee.', example: 'America/New_York' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number of the attendee in international format.',
        example: '+919876543210',
      }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .default('en')
      .exactOptional()
      .openapi({
        description: 'The preferred language of the attendee. Used for booking confirmation.',
        example: 'it',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the attendee.', example: 'john.doe@example.com' }),
  })
  .openapi({ required: ['name', 'timeZone'] })
  .openapi('CreateBookingAttendee')

const RoutingSchema = z
  .object({
    responseId: z
      .number()
      .openapi({
        description: 'The ID of the routing form response that determined this booking assignment.',
        example: 123,
      }),
    teamMemberIds: z
      .array(z.number())
      .openapi({
        description: 'Array of team member IDs that were routed to handle this booking.',
        example: [101, 102],
      }),
    teamMemberEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email of the team member assigned to handle this booking.',
        example: 'john.doe@example.com',
      }),
    skipContactOwner: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to skip contact owner assignment from CRM integration.',
        example: true,
      }),
    crmAppSlug: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CRM application slug for integration.', example: 'salesforce' }),
    crmOwnerRecordType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CRM owner record type for contact assignment.',
        example: 'Account',
      }),
  })
  .openapi({ required: ['responseId', 'teamMemberIds'] })
  .openapi('Routing')

const CreateBookingInput_2024_08_13Schema = z
  .object({
    start: z
      .string()
      .openapi({
        description: 'The start time of the booking in ISO 8601 format in UTC timezone.',
        example: '2024-08-13T09:00:00Z',
      }),
    attendee: CreateBookingAttendeeSchema.openapi({ description: "The attendee's details." }),
    bookingFieldsResponses: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Booking field responses consisting of an object with booking field slug as keys and user response as values for custom booking fields added by you.',
        example: { customField: 'customValue' },
      }),
    eventTypeId: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The ID of the event type that is booked. Required unless eventTypeSlug and username are provided as an alternative to identifying the event type.',
        example: 123,
      }),
    eventTypeSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The slug of the event type. Required along with username / teamSlug and optionally organizationSlug if eventTypeId is not provided.',
        example: 'my-event-type',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The username of the event owner. Required along with eventTypeSlug and optionally organizationSlug if eventTypeId is not provided.',
        example: 'john-doe',
      }),
    teamSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Team slug for team that owns event type for which slots are fetched. Required along with eventTypeSlug and optionally organizationSlug if the team is part of organization',
        example: 'john-doe',
      }),
    organizationSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The organization slug. Optional, only used when booking with eventTypeSlug + username or eventTypeSlug + teamSlug.',
        example: 'acme-corp',
      }),
    guests: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An optional list of guest emails attending the event.',
        example: ['guest1@example.com', 'guest2@example.com'],
      }),
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.",
        example: 'https://example.com/meeting',
        deprecated: true,
      }),
    location: z
      .xor([
        BookingInputAddressLocation_2024_08_13Schema,
        BookingInputAttendeeAddressLocation_2024_08_13Schema,
        BookingInputAttendeeDefinedLocation_2024_08_13Schema,
        BookingInputAttendeePhoneLocation_2024_08_13Schema,
        BookingInputIntegrationLocation_2024_08_13Schema,
        BookingInputLinkLocation_2024_08_13Schema,
        BookingInputPhoneLocation_2024_08_13Schema,
        BookingInputOrganizersDefaultAppLocation_2024_08_13Schema,
      ])
      .exactOptional()
      .openapi({
        description:
          'One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.',
      }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.',
        example: { key: 'value' },
      }),
    lengthInMinutes: z
      .number()
      .exactOptional()
      .openapi({
        example: 30,
        description:
          'If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.\n    If not provided then event type default length will be used for the booking.',
      }),
    routing: RoutingSchema.exactOptional().openapi({
      description:
        'Routing information from routing forms that determined the booking assignment. Both responseId and teamMemberIds are required if provided.',
      example: { responseId: 123, teamMemberIds: [101, 102] },
    }),
    emailVerificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email verification code required when event type has email verification enabled.',
        example: '123456',
      }),
  })
  .openapi({ required: ['start', 'attendee'] })
  .openapi('CreateBookingInput_2024_08_13')

const CreateRecurringBookingInput_2024_08_13Schema = z
  .object({
    start: z
      .string()
      .openapi({
        description: 'The start time of the booking in ISO 8601 format in UTC timezone.',
        example: '2024-08-13T09:00:00Z',
      }),
    attendee: CreateBookingAttendeeSchema.openapi({ description: "The attendee's details." }),
    bookingFieldsResponses: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Booking field responses consisting of an object with booking field slug as keys and user response as values for custom booking fields added by you.',
        example: { customField: 'customValue' },
      }),
    eventTypeId: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The ID of the event type that is booked. Required unless eventTypeSlug and username are provided as an alternative to identifying the event type.',
        example: 123,
      }),
    eventTypeSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The slug of the event type. Required along with username / teamSlug and optionally organizationSlug if eventTypeId is not provided.',
        example: 'my-event-type',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The username of the event owner. Required along with eventTypeSlug and optionally organizationSlug if eventTypeId is not provided.',
        example: 'john-doe',
      }),
    teamSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Team slug for team that owns event type for which slots are fetched. Required along with eventTypeSlug and optionally organizationSlug if the team is part of organization',
        example: 'john-doe',
      }),
    organizationSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The organization slug. Optional, only used when booking with eventTypeSlug + username or eventTypeSlug + teamSlug.',
        example: 'acme-corp',
      }),
    guests: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An optional list of guest emails attending the event.',
        example: ['guest1@example.com', 'guest2@example.com'],
      }),
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.",
        example: 'https://example.com/meeting',
        deprecated: true,
      }),
    location: z
      .xor([
        BookingInputAddressLocation_2024_08_13Schema,
        BookingInputAttendeeAddressLocation_2024_08_13Schema,
        BookingInputAttendeeDefinedLocation_2024_08_13Schema,
        BookingInputAttendeePhoneLocation_2024_08_13Schema,
        BookingInputIntegrationLocation_2024_08_13Schema,
        BookingInputLinkLocation_2024_08_13Schema,
        BookingInputPhoneLocation_2024_08_13Schema,
        BookingInputOrganizersDefaultAppLocation_2024_08_13Schema,
      ])
      .exactOptional()
      .openapi({
        description:
          'One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.',
      }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.',
        example: { key: 'value' },
      }),
    lengthInMinutes: z
      .number()
      .exactOptional()
      .openapi({
        example: 30,
        description:
          'If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.\n    If not provided then event type default length will be used for the booking.',
      }),
    routing: RoutingSchema.exactOptional().openapi({
      description:
        'Routing information from routing forms that determined the booking assignment. Both responseId and teamMemberIds are required if provided.',
      example: { responseId: 123, teamMemberIds: [101, 102] },
    }),
    emailVerificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email verification code required when event type has email verification enabled.',
        example: '123456',
      }),
    recurrenceCount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The number of recurrences. If not provided then event type recurrence count will be used. Can't be more than\n    event type recurrence count",
        example: 5,
      }),
  })
  .openapi({ required: ['start', 'attendee'] })
  .openapi('CreateRecurringBookingInput_2024_08_13')

const BookingHostSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    name: z.string().openapi({ example: 'Jane Doe' }),
    email: z.string().openapi({ example: 'jane100@example.com' }),
    displayEmail: z
      .string()
      .openapi({ example: 'jane100@example.com', description: 'Clean email for display purposes' }),
    username: z.string().openapi({ example: 'jane100' }),
    timeZone: z.string().openapi({ example: 'America/Los_Angeles' }),
  })
  .openapi({ required: ['id', 'name', 'email', 'displayEmail', 'username', 'timeZone'] })
  .openapi('BookingHost')

const EventTypeSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    slug: z.string().openapi({ example: 'some-event' }),
  })
  .openapi({ required: ['id', 'slug'] })
  .openapi('EventType')

const BookingAttendeeSchema = z
  .object({
    name: z.string().openapi({ example: 'John Doe' }),
    email: z.string().openapi({ example: 'john@example.com' }),
    displayEmail: z
      .string()
      .openapi({ example: 'john@example.com', description: 'Clean email for display purposes' }),
    timeZone: z.string().openapi({ example: 'America/New_York' }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    absent: z.boolean().openapi({ example: false }),
    phoneNumber: z.string().exactOptional().openapi({ example: '+1234567890' }),
  })
  .openapi({ required: ['name', 'email', 'displayEmail', 'timeZone', 'absent'] })
  .openapi('BookingAttendee')

const BookingOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    uid: z.string().openapi({ example: 'booking_uid_123' }),
    title: z.string().openapi({ example: 'Consultation' }),
    description: z
      .string()
      .openapi({ example: 'Learn how to integrate scheduling into marketplace.' }),
    hosts: z.array(BookingHostSchema),
    status: z
      .enum(['cancelled', 'accepted', 'rejected', 'pending'])
      .openapi({ example: 'accepted' }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelledByEmail: z.string().exactOptional().openapi({ example: 'canceller@example.com' }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User rescheduled the event' }),
    rescheduledByEmail: z.string().exactOptional().openapi({ example: 'rescheduler@example.com' }),
    rescheduledFromUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'previous_uid_123',
        description: 'UID of the previous booking from which this booking was rescheduled.',
      }),
    rescheduledToUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'new_uid_456',
        description: 'UID of the new booking to which this booking was rescheduled.',
      }),
    start: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    end: z.string().openapi({ example: '2024-08-13T16:30:00Z' }),
    duration: z.number().openapi({ example: 60 }),
    eventTypeId: z
      .number()
      .openapi({
        example: 50,
        deprecated: true,
        description: "Deprecated - rely on 'eventType' object containing the id instead.",
      }),
    eventType: EventTypeSchema,
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "Deprecated - rely on 'location' field instead.",
        example: 'https://example.com/recurring-meeting',
        deprecated: true,
      }),
    location: z.string().openapi({ example: 'https://example.com/meeting' }),
    absentHost: z.boolean().openapi({ example: true }),
    createdAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    updatedAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    rating: z.number().exactOptional().openapi({ example: 4 }),
    icsUid: z
      .string()
      .exactOptional()
      .openapi({ example: 'ics_uid_123', description: 'UID of ICS event.' }),
    attendees: z.array(BookingAttendeeSchema),
    guests: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['guest1@example.com', 'guest2@example.com'] }),
    bookingFieldsResponses: z
      .object({})
      .openapi({
        description:
          'Booking field responses consisting of an object with booking field slug as keys and user response as values.',
        example: { customField: 'customValue' },
      }),
  })
  .openapi({
    required: [
      'id',
      'uid',
      'title',
      'description',
      'hosts',
      'status',
      'start',
      'end',
      'duration',
      'eventTypeId',
      'eventType',
      'location',
      'absentHost',
      'createdAt',
      'updatedAt',
      'attendees',
      'bookingFieldsResponses',
    ],
  })
  .openapi('BookingOutput_2024_08_13')

const RecurringBookingOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    uid: z.string().openapi({ example: 'booking_uid_123' }),
    title: z.string().openapi({ example: 'Consultation' }),
    description: z
      .string()
      .openapi({ example: 'Learn how to integrate scheduling into marketplace.' }),
    hosts: z.array(BookingHostSchema),
    status: z
      .enum(['cancelled', 'accepted', 'rejected', 'pending'])
      .openapi({ example: 'accepted' }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelledByEmail: z.string().exactOptional().openapi({ example: 'canceller@example.com' }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User rescheduled the event' }),
    rescheduledByEmail: z.string().exactOptional().openapi({ example: 'rescheduler@example.com' }),
    rescheduledFromUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'previous_uid_123',
        description: 'UID of the previous booking from which this booking was rescheduled.',
      }),
    rescheduledToUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'new_uid_456',
        description: 'UID of the new booking to which this booking was rescheduled.',
      }),
    start: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    end: z.string().openapi({ example: '2024-08-13T16:30:00Z' }),
    duration: z.number().openapi({ example: 60 }),
    eventTypeId: z
      .number()
      .openapi({
        example: 50,
        deprecated: true,
        description: "Deprecated - rely on 'eventType' object containing the id instead.",
      }),
    eventType: EventTypeSchema,
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "Deprecated - rely on 'location' field instead.",
        example: 'https://example.com/recurring-meeting',
        deprecated: true,
      }),
    location: z.string().openapi({ example: 'https://example.com/meeting' }),
    absentHost: z.boolean().openapi({ example: true }),
    createdAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    updatedAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    rating: z.number().exactOptional().openapi({ example: 4 }),
    icsUid: z
      .string()
      .exactOptional()
      .openapi({ example: 'ics_uid_123', description: 'UID of ICS event.' }),
    attendees: z.array(BookingAttendeeSchema),
    guests: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['guest1@example.com', 'guest2@example.com'] }),
    bookingFieldsResponses: z
      .object({})
      .openapi({
        description:
          'Booking field responses consisting of an object with booking field slug as keys and user response as values.',
        example: { customField: 'customValue' },
      }),
    recurringBookingUid: z.string().openapi({ example: 'recurring_uid_987' }),
  })
  .openapi({
    required: [
      'id',
      'uid',
      'title',
      'description',
      'hosts',
      'status',
      'start',
      'end',
      'duration',
      'eventTypeId',
      'eventType',
      'location',
      'absentHost',
      'createdAt',
      'updatedAt',
      'attendees',
      'bookingFieldsResponses',
      'recurringBookingUid',
    ],
  })
  .openapi('RecurringBookingOutput_2024_08_13')

const SeatedAttendeeSchema = z
  .object({
    name: z.string().openapi({ example: 'John Doe' }),
    email: z.string().openapi({ example: 'john@example.com' }),
    displayEmail: z
      .string()
      .openapi({ example: 'john@example.com', description: 'Clean email for display purposes' }),
    timeZone: z.string().openapi({ example: 'America/New_York' }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    absent: z.boolean().openapi({ example: false }),
    phoneNumber: z.string().exactOptional().openapi({ example: '+1234567890' }),
    seatUid: z.string().openapi({ example: '3be561a9-31f1-4b8e-aefc-9d9a085f0dd1' }),
    bookingFieldsResponses: z
      .object({})
      .openapi({
        description:
          'Booking field responses consisting of an object with booking field slug as keys and user response as values.',
        example: { customField: 'customValue' },
      }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
  })
  .openapi({
    required: [
      'name',
      'email',
      'displayEmail',
      'timeZone',
      'absent',
      'seatUid',
      'bookingFieldsResponses',
    ],
  })
  .openapi('SeatedAttendee')

const CreateSeatedBookingOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    uid: z.string().openapi({ example: 'booking_uid_123' }),
    title: z.string().openapi({ example: 'Consultation' }),
    description: z
      .string()
      .openapi({ example: 'Learn how to integrate scheduling into marketplace.' }),
    hosts: z.array(BookingHostSchema),
    status: z
      .enum(['cancelled', 'accepted', 'rejected', 'pending'])
      .openapi({ example: 'accepted' }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelledByEmail: z.string().exactOptional().openapi({ example: 'canceller@example.com' }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User rescheduled the event' }),
    rescheduledByEmail: z.string().exactOptional().openapi({ example: 'rescheduler@example.com' }),
    rescheduledFromUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'previous_uid_123',
        description: 'UID of the previous booking from which this booking was rescheduled.',
      }),
    rescheduledToUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'new_uid_456',
        description: 'UID of the new booking to which this booking was rescheduled.',
      }),
    start: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    end: z.string().openapi({ example: '2024-08-13T16:30:00Z' }),
    duration: z.number().openapi({ example: 60 }),
    eventTypeId: z
      .number()
      .openapi({
        example: 50,
        deprecated: true,
        description: "Deprecated - rely on 'eventType' object containing the id instead.",
      }),
    eventType: EventTypeSchema,
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "Deprecated - rely on 'location' field instead.",
        example: 'https://example.com/recurring-meeting',
        deprecated: true,
      }),
    location: z.string().openapi({ example: 'https://example.com/meeting' }),
    absentHost: z.boolean().openapi({ example: true }),
    createdAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    updatedAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    rating: z.number().exactOptional().openapi({ example: 4 }),
    icsUid: z
      .string()
      .exactOptional()
      .openapi({ example: 'ics_uid_123', description: 'UID of ICS event.' }),
    seatUid: z.string().openapi({ example: '3be561a9-31f1-4b8e-aefc-9d9a085f0dd1' }),
    attendees: z.array(SeatedAttendeeSchema),
  })
  .openapi({
    required: [
      'id',
      'uid',
      'title',
      'description',
      'hosts',
      'status',
      'start',
      'end',
      'duration',
      'eventTypeId',
      'eventType',
      'location',
      'absentHost',
      'createdAt',
      'updatedAt',
      'seatUid',
      'attendees',
    ],
  })
  .openapi('CreateSeatedBookingOutput_2024_08_13')

const CreateRecurringSeatedBookingOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    uid: z.string().openapi({ example: 'booking_uid_123' }),
    title: z.string().openapi({ example: 'Consultation' }),
    description: z
      .string()
      .openapi({ example: 'Learn how to integrate scheduling into marketplace.' }),
    hosts: z.array(BookingHostSchema),
    status: z
      .enum(['cancelled', 'accepted', 'rejected', 'pending'])
      .openapi({ example: 'accepted' }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelledByEmail: z.string().exactOptional().openapi({ example: 'canceller@example.com' }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User rescheduled the event' }),
    rescheduledByEmail: z.string().exactOptional().openapi({ example: 'rescheduler@example.com' }),
    rescheduledFromUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'previous_uid_123',
        description: 'UID of the previous booking from which this booking was rescheduled.',
      }),
    rescheduledToUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'new_uid_456',
        description: 'UID of the new booking to which this booking was rescheduled.',
      }),
    start: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    end: z.string().openapi({ example: '2024-08-13T16:30:00Z' }),
    duration: z.number().openapi({ example: 60 }),
    eventTypeId: z
      .number()
      .openapi({
        example: 50,
        deprecated: true,
        description: "Deprecated - rely on 'eventType' object containing the id instead.",
      }),
    eventType: EventTypeSchema,
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "Deprecated - rely on 'location' field instead.",
        example: 'https://example.com/recurring-meeting',
        deprecated: true,
      }),
    location: z.string().openapi({ example: 'https://example.com/meeting' }),
    absentHost: z.boolean().openapi({ example: true }),
    createdAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    updatedAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    rating: z.number().exactOptional().openapi({ example: 4 }),
    icsUid: z
      .string()
      .exactOptional()
      .openapi({ example: 'ics_uid_123', description: 'UID of ICS event.' }),
    seatUid: z.string().openapi({ example: '3be561a9-31f1-4b8e-aefc-9d9a085f0dd1' }),
    attendees: z.array(SeatedAttendeeSchema),
    recurringBookingUid: z.string().openapi({ example: 'recurring_uid_987' }),
  })
  .openapi({
    required: [
      'id',
      'uid',
      'title',
      'description',
      'hosts',
      'status',
      'start',
      'end',
      'duration',
      'eventTypeId',
      'eventType',
      'location',
      'absentHost',
      'createdAt',
      'updatedAt',
      'seatUid',
      'attendees',
      'recurringBookingUid',
    ],
  })
  .openapi('CreateRecurringSeatedBookingOutput_2024_08_13')

const CreateBookingOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([
        BookingOutput_2024_08_13Schema,
        z.array(RecurringBookingOutput_2024_08_13Schema),
        CreateSeatedBookingOutput_2024_08_13Schema,
        z.array(CreateRecurringSeatedBookingOutput_2024_08_13Schema),
      ])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object or an array of RecurringBookingOutput objects',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CreateBookingOutput_2024_08_13')

const GetSeatedBookingOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    uid: z.string().openapi({ example: 'booking_uid_123' }),
    title: z.string().openapi({ example: 'Consultation' }),
    description: z
      .string()
      .openapi({ example: 'Learn how to integrate scheduling into marketplace.' }),
    hosts: z.array(BookingHostSchema),
    status: z
      .enum(['cancelled', 'accepted', 'rejected', 'pending'])
      .openapi({ example: 'accepted' }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelledByEmail: z.string().exactOptional().openapi({ example: 'canceller@example.com' }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User rescheduled the event' }),
    rescheduledByEmail: z.string().exactOptional().openapi({ example: 'rescheduler@example.com' }),
    rescheduledFromUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'previous_uid_123',
        description: 'UID of the previous booking from which this booking was rescheduled.',
      }),
    rescheduledToUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'new_uid_456',
        description: 'UID of the new booking to which this booking was rescheduled.',
      }),
    start: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    end: z.string().openapi({ example: '2024-08-13T16:30:00Z' }),
    duration: z.number().openapi({ example: 60 }),
    eventTypeId: z
      .number()
      .openapi({
        example: 50,
        deprecated: true,
        description: "Deprecated - rely on 'eventType' object containing the id instead.",
      }),
    eventType: EventTypeSchema,
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "Deprecated - rely on 'location' field instead.",
        example: 'https://example.com/recurring-meeting',
        deprecated: true,
      }),
    location: z.string().openapi({ example: 'https://example.com/meeting' }),
    absentHost: z.boolean().openapi({ example: true }),
    createdAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    updatedAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    rating: z.number().exactOptional().openapi({ example: 4 }),
    icsUid: z
      .string()
      .exactOptional()
      .openapi({ example: 'ics_uid_123', description: 'UID of ICS event.' }),
    attendees: z.array(SeatedAttendeeSchema),
  })
  .openapi({
    required: [
      'id',
      'uid',
      'title',
      'description',
      'hosts',
      'status',
      'start',
      'end',
      'duration',
      'eventTypeId',
      'eventType',
      'location',
      'absentHost',
      'createdAt',
      'updatedAt',
      'attendees',
    ],
  })
  .openapi('GetSeatedBookingOutput_2024_08_13')

const GetRecurringSeatedBookingOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    uid: z.string().openapi({ example: 'booking_uid_123' }),
    title: z.string().openapi({ example: 'Consultation' }),
    description: z
      .string()
      .openapi({ example: 'Learn how to integrate scheduling into marketplace.' }),
    hosts: z.array(BookingHostSchema),
    status: z
      .enum(['cancelled', 'accepted', 'rejected', 'pending'])
      .openapi({ example: 'accepted' }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelledByEmail: z.string().exactOptional().openapi({ example: 'canceller@example.com' }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User rescheduled the event' }),
    rescheduledByEmail: z.string().exactOptional().openapi({ example: 'rescheduler@example.com' }),
    rescheduledFromUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'previous_uid_123',
        description: 'UID of the previous booking from which this booking was rescheduled.',
      }),
    rescheduledToUid: z
      .string()
      .exactOptional()
      .openapi({
        example: 'new_uid_456',
        description: 'UID of the new booking to which this booking was rescheduled.',
      }),
    start: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    end: z.string().openapi({ example: '2024-08-13T16:30:00Z' }),
    duration: z.number().openapi({ example: 60 }),
    eventTypeId: z
      .number()
      .openapi({
        example: 50,
        deprecated: true,
        description: "Deprecated - rely on 'eventType' object containing the id instead.",
      }),
    eventType: EventTypeSchema,
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "Deprecated - rely on 'location' field instead.",
        example: 'https://example.com/recurring-meeting',
        deprecated: true,
      }),
    location: z.string().openapi({ example: 'https://example.com/meeting' }),
    absentHost: z.boolean().openapi({ example: true }),
    createdAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    updatedAt: z.string().openapi({ example: '2024-08-13T15:30:00Z' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ example: { key: 'value' } }),
    rating: z.number().exactOptional().openapi({ example: 4 }),
    icsUid: z
      .string()
      .exactOptional()
      .openapi({ example: 'ics_uid_123', description: 'UID of ICS event.' }),
    attendees: z.array(SeatedAttendeeSchema),
    recurringBookingUid: z.string().openapi({ example: 'recurring_uid_987' }),
  })
  .openapi({
    required: [
      'id',
      'uid',
      'title',
      'description',
      'hosts',
      'status',
      'start',
      'end',
      'duration',
      'eventTypeId',
      'eventType',
      'location',
      'absentHost',
      'createdAt',
      'updatedAt',
      'attendees',
      'recurringBookingUid',
    ],
  })
  .openapi('GetRecurringSeatedBookingOutput_2024_08_13')

const GetBookingOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([
        BookingOutput_2024_08_13Schema,
        RecurringBookingOutput_2024_08_13Schema,
        z.array(RecurringBookingOutput_2024_08_13Schema),
        GetSeatedBookingOutput_2024_08_13Schema,
        GetRecurringSeatedBookingOutput_2024_08_13Schema,
        z.array(GetRecurringSeatedBookingOutput_2024_08_13Schema),
      ])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects',
      }),
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBookingOutput_2024_08_13')

const RecordingItemSchema = z
  .object({
    id: z.string().openapi({ example: '1234567890' }),
    roomName: z.string().openapi({ example: 'daily-video-room-123' }),
    startTs: z.number().openapi({ example: 1678901234 }),
    status: z.string().openapi({ example: 'completed' }),
    maxParticipants: z.number().exactOptional().openapi({ example: 10 }),
    duration: z.number().openapi({ example: 3600 }),
    shareToken: z.string().openapi({ example: 'share-token-123' }),
    downloadLink: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://cal-video-recordings.s3.us-east-2.amazonaws.com/meetco/123s' }),
    error: z.string().nullable().exactOptional().openapi({ example: 'Error message' }),
  })
  .openapi({ required: ['id', 'roomName', 'startTs', 'status', 'duration', 'shareToken'] })
  .openapi('RecordingItem')

const GetBookingRecordingsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    error: z.object({}).exactOptional(),
    data: z.array(RecordingItemSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBookingRecordingsOutput')

const GetBookingTranscriptsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .array(z.string())
      .openapi({ example: ['https://transcript1.com', 'https://transcript2.com'] }),
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBookingTranscriptsOutput')

const PaginationMetaDtoSchema = z
  .object({
    totalItems: z
      .number()
      .min(0)
      .openapi({
        description:
          'The total number of items available across all pages, matching the query criteria.',
        example: 123,
      }),
    remainingItems: z
      .number()
      .min(0)
      .openapi({
        description:
          'The number of items remaining to be fetched *after* the current page. Calculated as: `totalItems - (skip + itemsPerPage)`.',
        example: 103,
      }),
    returnedItems: z
      .number()
      .openapi({ description: 'The number of items returned in the current page.', example: 10 }),
    itemsPerPage: z
      .number()
      .min(1)
      .openapi({ description: 'The maximum number of items requested per page.', example: 10 }),
    currentPage: z
      .number()
      .min(1)
      .openapi({ description: 'The current page number being returned.', example: 2 }),
    totalPages: z
      .number()
      .min(0)
      .openapi({ description: 'The total number of pages available.', example: 13 }),
    hasNextPage: z
      .boolean()
      .openapi({
        description: 'Indicates if there is a subsequent page available after the current one.',
        example: true,
      }),
    hasPreviousPage: z
      .boolean()
      .openapi({
        description: 'Indicates if there is a preceding page available before the current one.',
        example: true,
      }),
  })
  .openapi({
    required: [
      'totalItems',
      'remainingItems',
      'returnedItems',
      'itemsPerPage',
      'currentPage',
      'totalPages',
      'hasNextPage',
      'hasPreviousPage',
    ],
  })
  .openapi('PaginationMetaDto')

const GetBookingsOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .array(
        z.xor([
          BookingOutput_2024_08_13Schema,
          RecurringBookingOutput_2024_08_13Schema,
          GetSeatedBookingOutput_2024_08_13Schema,
          GetRecurringSeatedBookingOutput_2024_08_13Schema,
        ]),
      )
      .openapi({
        description:
          'Array of booking data, which can contain either BookingOutput objects or RecurringBookingOutput objects',
      }),
    pagination: PaginationMetaDtoSchema,
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data', 'pagination'] })
  .openapi('GetBookingsOutput_2024_08_13')

const RescheduleBookingInput_2024_08_13Schema = z
  .object({
    start: z
      .string()
      .openapi({
        description: 'The start time of the booking in ISO 8601 format in UTC timezone.',
        example: '2024-08-13T09:00:00Z',
      }),
    rescheduledBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.\nIf event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type\nowner will have to confirm the rescheduled booking.',
      }),
    reschedulingReason: z
      .string()
      .exactOptional()
      .openapi({
        example: 'User requested reschedule',
        description: 'Reason for rescheduling the booking',
      }),
    emailVerificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email verification code required when event type has email verification enabled.',
        example: '123456',
      }),
  })
  .openapi({ required: ['start'] })
  .openapi('RescheduleBookingInput_2024_08_13')

const RescheduleSeatedBookingInput_2024_08_13Schema = z
  .object({
    start: z
      .string()
      .openapi({
        description: 'The start time of the booking in ISO 8601 format in UTC timezone.',
        example: '2024-08-13T09:00:00Z',
      }),
    rescheduledBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.\nIf event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type\nowner will have to confirm the rescheduled booking.',
      }),
    seatUid: z
      .string()
      .openapi({
        example: '3be561a9-31f1-4b8e-aefc-9d9a085f0dd1',
        description: 'Uid of the specific seat within booking.',
      }),
    emailVerificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email verification code required when event type has email verification enabled.',
        example: '123456',
      }),
  })
  .openapi({ required: ['start', 'seatUid'] })
  .openapi('RescheduleSeatedBookingInput_2024_08_13')

const RescheduleBookingOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([
        BookingOutput_2024_08_13Schema,
        RecurringBookingOutput_2024_08_13Schema,
        CreateSeatedBookingOutput_2024_08_13Schema,
        CreateRecurringSeatedBookingOutput_2024_08_13Schema,
      ])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object or a RecurringBookingOutput object',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('RescheduleBookingOutput_2024_08_13')

const CancelBookingInput_2024_08_13Schema = z
  .object({
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
    cancelSubsequentBookings: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For recurring non-seated booking only - if true, cancel booking with the bookingUid of the individual recurrence and all recurrences that come after it.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancelBookingInput_2024_08_13')

const CancelSeatedBookingInput_2024_08_13Schema = z
  .object({
    seatUid: z
      .string()
      .openapi({
        example: '3be561a9-31f1-4b8e-aefc-9d9a085f0dd1',
        description: 'Uid of the specific seat within booking.',
      }),
    cancellationReason: z
      .string()
      .exactOptional()
      .openapi({ example: 'User requested cancellation' }),
  })
  .openapi({ required: ['seatUid'] })
  .openapi('CancelSeatedBookingInput_2024_08_13')

const CancelBookingOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([
        BookingOutput_2024_08_13Schema,
        RecurringBookingOutput_2024_08_13Schema,
        z.array(RecurringBookingOutput_2024_08_13Schema),
        GetSeatedBookingOutput_2024_08_13Schema,
        GetRecurringSeatedBookingOutput_2024_08_13Schema,
        z.array(GetRecurringSeatedBookingOutput_2024_08_13Schema),
      ])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CancelBookingOutput_2024_08_13')

const MarkAbsentAttendeeSchema = z
  .object({ email: z.string(), absent: z.boolean() })
  .openapi({ required: ['email', 'absent'] })
  .openapi('MarkAbsentAttendee')

const MarkAbsentBookingInput_2024_08_13Schema = z
  .object({
    host: z
      .boolean()
      .exactOptional()
      .openapi({ example: false, description: 'Whether the host was absent' }),
    attendees: z.array(MarkAbsentAttendeeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkAbsentBookingInput_2024_08_13')

const MarkAbsentBookingOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([BookingOutput_2024_08_13Schema, RecurringBookingOutput_2024_08_13Schema])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object or a RecurringBookingOutput object',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('MarkAbsentBookingOutput_2024_08_13')

const ReassignedToDtoSchema = z
  .object({
    id: z.number().openapi({ example: 123 }),
    name: z.string().openapi({ example: 'John Doe' }),
    email: z.string().openapi({ example: 'john.doe@example.com' }),
    displayEmail: z
      .string()
      .openapi({
        example: 'john.doe@example.com',
        description: 'Clean email for display purposes',
      }),
  })
  .openapi({ required: ['id', 'name', 'email', 'displayEmail'] })
  .openapi('ReassignedToDto')

const ReassignBookingOutput_2024_08_13Schema: z.ZodType<ReassignBookingOutput_2024_08_13Type> = z
  .lazy(() =>
    z
      .object({
        status: z.enum(['success', 'error']).openapi({ example: 'success' }),
        data: ReassignBookingOutput_2024_08_13Schema.openapi({
          description:
            'Booking data, which can be either a ReassignAutoBookingOutput object or a ReassignManualBookingOutput object',
        }),
      })
      .openapi({ required: ['status', 'data'] }),
  )
  .openapi('ReassignBookingOutput_2024_08_13')

const ReassignToUserBookingInput_2024_08_13Schema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Host has to take another call',
        description: 'Reason for reassigning the booking',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReassignToUserBookingInput_2024_08_13')

const DeclineBookingInput_2024_08_13Schema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Host has to take another call',
        description: 'Reason for declining a booking that requires a confirmation',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeclineBookingInput_2024_08_13')

const CalendarLinkSchema = z
  .object({
    label: z.string().openapi({ description: 'The label of the calendar link' }),
    link: z.string().openapi({ description: 'The link to the calendar' }),
  })
  .openapi({ required: ['label', 'link'] })
  .openapi('CalendarLink')

const CalendarLinksOutput_2024_08_13Schema = z
  .object({
    status: z
      .object({})
      .openapi({
        description: "The status of the request, always 'success' for successful responses",
        example: 'success',
      }),
    data: z.array(CalendarLinkSchema).openapi({ description: 'Calendar links for the booking' }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('CalendarLinksOutput_2024_08_13')

const BookingReferenceSchema = z
  .object({
    type: z.string().openapi({ description: 'The type of the booking reference' }),
    eventUid: z.string().openapi({ description: 'The event uid of the booking' }),
    destinationCalendarId: z
      .string()
      .nullable()
      .openapi({ description: 'The id of the calendar the event is created in' }),
    id: z.number().openapi({ description: 'The id of the booking reference' }),
  })
  .openapi({ required: ['type', 'eventUid', 'destinationCalendarId', 'id'] })
  .openapi('BookingReference')

const BookingReferencesOutput_2024_08_13Schema = z
  .object({
    status: z
      .object({})
      .openapi({
        description: "The status of the request, always 'success' for successful responses",
        example: 'success',
      }),
    data: z.array(BookingReferenceSchema).openapi({ description: 'Booking References' }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('BookingReferencesOutput_2024_08_13')

const CalMeetingParticipantSchema = z
  .object({
    userId: z.string().nullable().openapi({ example: 'user123' }),
    userName: z.string().nullable().openapi({ example: 'John Doe' }),
    joinTime: z.number().openapi({ example: 1678901234 }),
    duration: z.number().openapi({ example: 3600 }),
  })
  .openapi({ required: ['userId', 'userName', 'joinTime', 'duration'] })
  .openapi('CalMeetingParticipant')

const CalMeetingSessionSchema = z
  .object({
    id: z.string().openapi({ example: 'session123' }),
    room: z.string().openapi({ example: 'daily-video-room-123' }),
    startTime: z.number().openapi({ example: 1678901234 }),
    duration: z.number().openapi({ example: 3600 }),
    ongoing: z.boolean().openapi({ example: false }),
    maxParticipants: z.number().openapi({ example: 10 }),
    participants: z.array(CalMeetingParticipantSchema),
  })
  .openapi({
    required: ['id', 'room', 'startTime', 'duration', 'ongoing', 'maxParticipants', 'participants'],
  })
  .openapi('CalMeetingSession')

const GetBookingVideoSessionsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(CalMeetingSessionSchema),
    error: z.object({}).exactOptional(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBookingVideoSessionsOutput')

const BookingAttendeeWithId_2024_08_13Schema = z
  .object({
    name: z.string().openapi({ example: 'John Doe' }),
    email: z.string().openapi({ example: 'john@example.com' }),
    displayEmail: z
      .string()
      .openapi({ example: 'john@example.com', description: 'Clean email for display purposes' }),
    timeZone: z.string().openapi({ example: 'America/New_York' }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    absent: z.boolean().openapi({ example: false }),
    phoneNumber: z.string().exactOptional().openapi({ example: '+1234567890' }),
    id: z.number().openapi({ example: 251 }),
  })
  .openapi({ required: ['name', 'email', 'displayEmail', 'timeZone', 'absent', 'id'] })
  .openapi('BookingAttendeeWithId_2024_08_13')

const GetBookingAttendeesOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(BookingAttendeeWithId_2024_08_13Schema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBookingAttendeesOutput_2024_08_13')

const GetBookingAttendeeOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: BookingAttendeeWithId_2024_08_13Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetBookingAttendeeOutput_2024_08_13')

const AddAttendeeInput_2024_08_13Schema = z
  .object({
    name: z.string().openapi({ description: 'The name of the attendee.', example: 'John Doe' }),
    timeZone: z
      .string()
      .openapi({ description: 'The time zone of the attendee.', example: 'America/New_York' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number of the attendee in international format.',
        example: '+919876543210',
      }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .default('en')
      .exactOptional()
      .openapi({
        description: 'The preferred language of the attendee. Used for booking confirmation.',
        example: 'it',
      }),
    email: z
      .string()
      .openapi({ description: 'The email of the attendee.', example: 'john.doe@example.com' }),
  })
  .openapi({ required: ['name', 'timeZone', 'email'] })
  .openapi('AddAttendeeInput_2024_08_13')

const BookingAttendeeOutput_2024_08_13Schema = z
  .object({
    name: z.string().openapi({ example: 'John Doe' }),
    email: z.string().openapi({ example: 'john@example.com' }),
    displayEmail: z
      .string()
      .openapi({ example: 'john@example.com', description: 'Clean email for display purposes' }),
    timeZone: z.string().openapi({ example: 'America/New_York' }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .exactOptional()
      .openapi({ example: 'en' }),
    absent: z.boolean().openapi({ example: false }),
    phoneNumber: z.string().exactOptional().openapi({ example: '+1234567890' }),
    id: z.number().openapi({ example: 251 }),
    bookingId: z.number().openapi({ example: 313 }),
  })
  .openapi({ required: ['name', 'email', 'displayEmail', 'timeZone', 'absent', 'id', 'bookingId'] })
  .openapi('BookingAttendeeOutput_2024_08_13')

const AddAttendeeOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: BookingAttendeeOutput_2024_08_13Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('AddAttendeeOutput_2024_08_13')

const RemovedAttendeeOutput_2024_08_13Schema = z
  .object({
    id: z.number().openapi({ description: 'The ID of the attendee.', example: 123 }),
    bookingId: z.number().openapi({ description: 'The ID of the booking.', example: 456 }),
    name: z.string().openapi({ description: 'The name of the attendee.', example: 'John Doe' }),
    email: z
      .string()
      .openapi({ description: 'The email of the attendee.', example: 'john.doe@example.com' }),
    timeZone: z
      .string()
      .openapi({ description: 'The time zone of the attendee.', example: 'America/New_York' }),
  })
  .openapi({ required: ['id', 'bookingId', 'name', 'email', 'timeZone'] })
  .openapi('RemovedAttendeeOutput_2024_08_13')

const RemoveAttendeeOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: RemovedAttendeeOutput_2024_08_13Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('RemoveAttendeeOutput_2024_08_13')

const GuestSchema = z
  .object({
    email: z
      .string()
      .openapi({ description: 'The email of the guest.', example: 'john.doe@example.com' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the guest.', example: 'John Doe' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time zone of the guest.', example: 'America/New_York' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number of the guest in international format.',
        example: '+919876543210',
      }),
    language: z
      .enum([
        'ar',
        'ca',
        'de',
        'es',
        'eu',
        'he',
        'id',
        'ja',
        'lv',
        'pl',
        'ro',
        'sr',
        'th',
        'vi',
        'az',
        'cs',
        'el',
        'es-419',
        'fi',
        'hr',
        'it',
        'km',
        'nl',
        'pt',
        'ru',
        'sv',
        'tr',
        'zh-CN',
        'bg',
        'da',
        'en',
        'et',
        'fr',
        'hu',
        'iw',
        'ko',
        'no',
        'pt-BR',
        'sk',
        'ta',
        'uk',
        'zh-TW',
        'bn',
      ])
      .default('en')
      .exactOptional()
      .openapi({
        description: 'The preferred language of the guest. Used for booking confirmation.',
        example: 'it',
      }),
  })
  .openapi({ required: ['email'] })
  .openapi('Guest')

const AddGuestsInput_2024_08_13Schema = z
  .object({
    guests: z.array(GuestSchema).openapi({
      description: 'Array of guests to add to the booking. Maximum 10 guests per request.',
      example: [
        { email: 'john.doe@example.com', name: 'John Doe', timeZone: 'America/New_York' },
        { email: 'jane.smith@example.com', name: 'Jane Smith' },
      ],
    }),
  })
  .openapi({ required: ['guests'] })
  .openapi('AddGuestsInput_2024_08_13')

const AddGuestsOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([
        BookingOutput_2024_08_13Schema,
        RecurringBookingOutput_2024_08_13Schema,
        z.array(RecurringBookingOutput_2024_08_13Schema),
        GetSeatedBookingOutput_2024_08_13Schema,
        GetRecurringSeatedBookingOutput_2024_08_13Schema,
        z.array(GetRecurringSeatedBookingOutput_2024_08_13Schema),
      ])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('AddGuestsOutput_2024_08_13')

const UpdateInputAddressLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'address',
        description:
          'only allowed value for type is `address` - it refers to address defined by the organizer.',
      }),
    address: z.string().openapi({ example: '123 Example St, City, Country' }),
  })
  .openapi({ required: ['type', 'address'] })
  .openapi('UpdateInputAddressLocation_2024_08_13')

const UpdateBookingInputAttendeeAddressLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeeAddress',
        description: 'only allowed value for type is `attendeeAddress`',
      }),
    address: z.string().openapi({ example: '123 Example St, City, Country' }),
  })
  .openapi({ required: ['type', 'address'] })
  .openapi('UpdateBookingInputAttendeeAddressLocation_2024_08_13')

const UpdateBookingInputAttendeeDefinedLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeeDefined',
        description: 'only allowed value for type is `attendeeDefined`',
      }),
    location: z.string().openapi({ example: '321 Example St, City, Country' }),
  })
  .openapi({ required: ['type', 'location'] })
  .openapi('UpdateBookingInputAttendeeDefinedLocation_2024_08_13')

const UpdateBookingInputAttendeePhoneLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'attendeePhone',
        description: 'only allowed value for type is `attendeePhone`',
      }),
    phone: z.string().openapi({ example: '+37120993151' }),
  })
  .openapi({ required: ['type', 'phone'] })
  .openapi('UpdateBookingInputAttendeePhoneLocation_2024_08_13')

const UpdateBookingInputLinkLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'link',
        description:
          'only allowed value for type is `link` - it refers to link defined by the organizer.',
      }),
    link: z.string().openapi({ example: 'https://meet.google.com/txi-fein-xyz' }),
  })
  .openapi({ required: ['type', 'link'] })
  .openapi('UpdateBookingInputLinkLocation_2024_08_13')

const UpdateBookingInputPhoneLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'phone',
        description:
          'only allowed value for type is `phone` - it refers to phone defined by the organizer.',
      }),
    phone: z.string().openapi({ example: '+37120993151' }),
  })
  .openapi({ required: ['type', 'phone'] })
  .openapi('UpdateBookingInputPhoneLocation_2024_08_13')

const UpdateBookingInputIntegrationLocation_2024_08_13Schema = z
  .object({
    type: z
      .string()
      .openapi({
        example: 'integration',
        description: 'only allowed value for type is `integration`',
      }),
    integration: z
      .enum([
        'cal-video',
        'google-meet',
        'zoom',
        'whereby-video',
        'whatsapp-video',
        'webex-video',
        'telegram-video',
        'tandem',
        'sylaps-video',
        'skype-video',
        'sirius-video',
        'signal-video',
        'shimmer-video',
        'salesroom-video',
        'roam-video',
        'riverside-video',
        'ping-video',
        'office365-video',
        'mirotalk-video',
        'jitsi',
        'jelly-video',
        'jelly-conferencing',
        'huddle',
        'facetime-video',
        'element-call-video',
        'eightxeight-video',
        'discord-video',
        'demodesk-video',
        'campfire-video',
      ])
      .openapi({ example: 'cal-video' }),
  })
  .openapi({ required: ['type', 'integration'] })
  .openapi('UpdateBookingInputIntegrationLocation_2024_08_13')

const UpdateBookingLocationInput_2024_08_13Schema = z
  .object({
    location: z
      .xor([
        UpdateInputAddressLocation_2024_08_13Schema,
        UpdateBookingInputAttendeeAddressLocation_2024_08_13Schema,
        UpdateBookingInputAttendeeDefinedLocation_2024_08_13Schema,
        UpdateBookingInputAttendeePhoneLocation_2024_08_13Schema,
        UpdateBookingInputLinkLocation_2024_08_13Schema,
        UpdateBookingInputPhoneLocation_2024_08_13Schema,
        UpdateBookingInputIntegrationLocation_2024_08_13Schema,
      ])
      .exactOptional()
      .openapi({
        description:
          'One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBookingLocationInput_2024_08_13')

const UpdateBookingLocationOutput_2024_08_13Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z
      .xor([
        BookingOutput_2024_08_13Schema,
        RecurringBookingOutput_2024_08_13Schema,
        z.array(RecurringBookingOutput_2024_08_13Schema),
        GetSeatedBookingOutput_2024_08_13Schema,
        GetRecurringSeatedBookingOutput_2024_08_13Schema,
        z.array(GetRecurringSeatedBookingOutput_2024_08_13Schema),
      ])
      .openapi({
        description:
          'Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects',
      }),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UpdateBookingLocationOutput_2024_08_13')

const ReserveSlotInput_2024_09_04Schema = z
  .object({
    eventTypeId: z
      .number()
      .openapi({
        example: 1,
        description: 'The ID of the event type for which slot should be reserved.',
      }),
    slotStart: z
      .string()
      .openapi({
        example: '2024-09-04T09:00:00Z',
        description: 'ISO 8601 datestring in UTC timezone representing available slot.',
      }),
    slotDuration: z
      .number()
      .exactOptional()
      .openapi({
        example: '30',
        description:
          "By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.",
      }),
    reservationDuration: z
      .number()
      .exactOptional()
      .openapi({
        example: 5,
        description:
          'ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).\n      \n      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.',
      }),
  })
  .openapi({ required: ['eventTypeId', 'slotStart'] })
  .openapi('ReserveSlotInput_2024_09_04')

const ReserveSlotOutput_2024_09_04Schema = z
  .object({
    eventTypeId: z
      .number()
      .openapi({
        example: 1,
        description: 'The ID of the event type for which slot was reserved.',
      }),
    slotStart: z
      .string()
      .openapi({
        example: '2024-09-04T09:00:00Z',
        description: 'ISO 8601 datestring in UTC timezone representing available slot.',
      }),
    slotEnd: z
      .string()
      .openapi({
        example: '2024-09-04T10:00:00Z',
        description: 'ISO 8601 datestring in UTC timezone representing slot end.',
      }),
    slotDuration: z
      .number()
      .openapi({
        example: '30',
        description:
          "By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here. If you don't have this set explicitly that event type can have one of many lengths you can omit this.",
      }),
    reservationUid: z
      .string()
      .openapi({
        example: 'e84be5a3-4696-49e3-acc7-b2f3999c3b94',
        description:
          'The unique identifier of the reservation. Use it to update, get or delete the reservation.',
      }),
    reservationDuration: z
      .number()
      .openapi({
        example: 5,
        description:
          'For how many minutes the slot is reserved - for this long time noone else can book this event type at `start` time.',
      }),
    reservationUntil: z
      .string()
      .openapi({
        example: '2023-09-04T10:00:00Z',
        description:
          'ISO 8601 datestring in UTC timezone representing time until which the slot is reserved.',
      }),
  })
  .openapi({
    required: [
      'eventTypeId',
      'slotStart',
      'slotEnd',
      'slotDuration',
      'reservationUid',
      'reservationDuration',
      'reservationUntil',
    ],
  })
  .openapi('ReserveSlotOutput_2024_09_04')

const ReserveSlotOutputResponse_2024_09_04Schema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ReserveSlotOutput_2024_09_04Schema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('ReserveSlotOutputResponse_2024_09_04')

const GetReservedSlotOutput_2024_09_04Schema: z.ZodType<GetReservedSlotOutput_2024_09_04Type> = z
  .lazy(() =>
    z
      .object({
        status: z.enum(['success', 'error']).openapi({ example: 'success' }),
        data: GetReservedSlotOutput_2024_09_04Schema.nullable(),
      })
      .openapi({ required: ['status', 'data'] }),
  )
  .openapi('GetReservedSlotOutput_2024_09_04')

const CreateWebhookInputDtoSchema = z
  .object({
    payloadTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information',
        example:
          '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
      }),
    active: z.boolean(),
    subscriberUrl: z.string(),
    triggers: z
      .array(
        z.enum([
          'BOOKING_CREATED',
          'BOOKING_PAYMENT_INITIATED',
          'BOOKING_PAID',
          'BOOKING_RESCHEDULED',
          'BOOKING_REQUESTED',
          'BOOKING_CANCELLED',
          'BOOKING_REJECTED',
          'BOOKING_NO_SHOW_UPDATED',
          'FORM_SUBMITTED',
          'MEETING_ENDED',
          'MEETING_STARTED',
          'RECORDING_READY',
          'INSTANT_MEETING',
          'RECORDING_TRANSCRIPTION_GENERATED',
          'OOO_CREATED',
          'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
          'AFTER_GUESTS_CAL_VIDEO_NO_SHOW',
          'FORM_SUBMITTED_NO_EVENT',
          'DELEGATION_CREDENTIAL_ERROR',
          'WRONG_ASSIGNMENT_REPORT',
        ]),
      )
      .openapi({
        example: [
          'BOOKING_CREATED',
          'BOOKING_RESCHEDULED',
          'BOOKING_CANCELLED',
          'BOOKING_CONFIRMED',
          'BOOKING_REJECTED',
          'BOOKING_COMPLETED',
          'BOOKING_NO_SHOW',
          'BOOKING_REOPENED',
        ],
      }),
    secret: z.string().exactOptional(),
    version: z
      .literal('2021-10-20')
      .exactOptional()
      .openapi({ description: 'The version of the webhook', example: '2021-10-20' }),
  })
  .openapi({ required: ['active', 'subscriberUrl', 'triggers'] })
  .openapi('CreateWebhookInputDto')

const UserWebhookOutputDtoSchema = z
  .object({
    payloadTemplate: z
      .string()
      .openapi({
        description:
          'The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information',
        example:
          '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
      }),
    triggers: z.array(
      z.enum([
        'BOOKING_CREATED',
        'BOOKING_PAYMENT_INITIATED',
        'BOOKING_PAID',
        'BOOKING_RESCHEDULED',
        'BOOKING_REQUESTED',
        'BOOKING_CANCELLED',
        'BOOKING_REJECTED',
        'BOOKING_NO_SHOW_UPDATED',
        'FORM_SUBMITTED',
        'MEETING_ENDED',
        'MEETING_STARTED',
        'RECORDING_READY',
        'INSTANT_MEETING',
        'RECORDING_TRANSCRIPTION_GENERATED',
        'OOO_CREATED',
        'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
        'AFTER_GUESTS_CAL_VIDEO_NO_SHOW',
        'FORM_SUBMITTED_NO_EVENT',
        'DELEGATION_CREDENTIAL_ERROR',
        'WRONG_ASSIGNMENT_REPORT',
      ]),
    ),
    userId: z.number(),
    id: z.number(),
    subscriberUrl: z.string(),
    active: z.boolean(),
    secret: z.string().exactOptional(),
  })
  .openapi({ required: ['payloadTemplate', 'triggers', 'userId', 'id', 'subscriberUrl', 'active'] })
  .openapi('UserWebhookOutputDto')

const UserWebhookOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: UserWebhookOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UserWebhookOutputResponseDto')

const UpdateWebhookInputDtoSchema = z
  .object({
    payloadTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information',
        example:
          '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
      }),
    active: z.boolean().exactOptional(),
    subscriberUrl: z.string().exactOptional(),
    triggers: z
      .array(
        z.enum([
          'BOOKING_CREATED',
          'BOOKING_PAYMENT_INITIATED',
          'BOOKING_PAID',
          'BOOKING_RESCHEDULED',
          'BOOKING_REQUESTED',
          'BOOKING_CANCELLED',
          'BOOKING_REJECTED',
          'BOOKING_NO_SHOW_UPDATED',
          'FORM_SUBMITTED',
          'MEETING_ENDED',
          'MEETING_STARTED',
          'RECORDING_READY',
          'INSTANT_MEETING',
          'RECORDING_TRANSCRIPTION_GENERATED',
          'OOO_CREATED',
          'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
          'AFTER_GUESTS_CAL_VIDEO_NO_SHOW',
          'FORM_SUBMITTED_NO_EVENT',
          'DELEGATION_CREDENTIAL_ERROR',
          'WRONG_ASSIGNMENT_REPORT',
        ]),
      )
      .exactOptional()
      .openapi({
        example: [
          'BOOKING_CREATED',
          'BOOKING_RESCHEDULED',
          'BOOKING_CANCELLED',
          'BOOKING_CONFIRMED',
          'BOOKING_REJECTED',
          'BOOKING_COMPLETED',
          'BOOKING_NO_SHOW',
          'BOOKING_REOPENED',
        ],
      }),
    secret: z.string().exactOptional(),
    version: z
      .literal('2021-10-20')
      .exactOptional()
      .openapi({ description: 'The version of the webhook', example: '2021-10-20' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebhookInputDto')

const UserWebhooksOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(UserWebhookOutputDtoSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UserWebhooksOutputResponseDto')

const EventTypeWebhookOutputDtoSchema = z
  .object({
    payloadTemplate: z
      .string()
      .openapi({
        description:
          'The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information',
        example:
          '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
      }),
    triggers: z.array(
      z.enum([
        'BOOKING_CREATED',
        'BOOKING_PAYMENT_INITIATED',
        'BOOKING_PAID',
        'BOOKING_RESCHEDULED',
        'BOOKING_REQUESTED',
        'BOOKING_CANCELLED',
        'BOOKING_REJECTED',
        'BOOKING_NO_SHOW_UPDATED',
        'FORM_SUBMITTED',
        'MEETING_ENDED',
        'MEETING_STARTED',
        'RECORDING_READY',
        'INSTANT_MEETING',
        'RECORDING_TRANSCRIPTION_GENERATED',
        'OOO_CREATED',
        'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
        'AFTER_GUESTS_CAL_VIDEO_NO_SHOW',
        'FORM_SUBMITTED_NO_EVENT',
        'DELEGATION_CREDENTIAL_ERROR',
        'WRONG_ASSIGNMENT_REPORT',
      ]),
    ),
    eventTypeId: z.number(),
    id: z.number(),
    subscriberUrl: z.string(),
    active: z.boolean(),
    secret: z.string().exactOptional(),
  })
  .openapi({
    required: ['payloadTemplate', 'triggers', 'eventTypeId', 'id', 'subscriberUrl', 'active'],
  })
  .openapi('EventTypeWebhookOutputDto')

const EventTypeWebhookOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: EventTypeWebhookOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('EventTypeWebhookOutputResponseDto')

const EventTypeWebhooksOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(EventTypeWebhookOutputDtoSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('EventTypeWebhooksOutputResponseDto')

const DeleteManyWebhooksOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.string(),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('DeleteManyWebhooksOutputResponseDto')

const OAuthClientWebhookOutputDtoSchema = z
  .object({
    payloadTemplate: z
      .string()
      .openapi({
        description:
          'The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information',
        example:
          '{"content":"A new event has been scheduled","type":"{{type}}","name":"{{title}}","organizer":"{{organizer.name}}","booker":"{{attendees.0.name}}"}',
      }),
    triggers: z.array(
      z.enum([
        'BOOKING_CREATED',
        'BOOKING_PAYMENT_INITIATED',
        'BOOKING_PAID',
        'BOOKING_RESCHEDULED',
        'BOOKING_REQUESTED',
        'BOOKING_CANCELLED',
        'BOOKING_REJECTED',
        'BOOKING_NO_SHOW_UPDATED',
        'FORM_SUBMITTED',
        'MEETING_ENDED',
        'MEETING_STARTED',
        'RECORDING_READY',
        'INSTANT_MEETING',
        'RECORDING_TRANSCRIPTION_GENERATED',
        'OOO_CREATED',
        'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
        'AFTER_GUESTS_CAL_VIDEO_NO_SHOW',
        'FORM_SUBMITTED_NO_EVENT',
        'DELEGATION_CREDENTIAL_ERROR',
        'WRONG_ASSIGNMENT_REPORT',
      ]),
    ),
    oAuthClientId: z.string(),
    id: z.number(),
    subscriberUrl: z.string(),
    active: z.boolean(),
    secret: z.string().exactOptional(),
  })
  .openapi({
    required: ['payloadTemplate', 'triggers', 'oAuthClientId', 'id', 'subscriberUrl', 'active'],
  })
  .openapi('OAuthClientWebhookOutputDto')

const OAuthClientWebhookOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: OAuthClientWebhookOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('OAuthClientWebhookOutputResponseDto')

const OAuthClientWebhooksOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(OAuthClientWebhookOutputDtoSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('OAuthClientWebhooksOutputResponseDto')

const DestinationCalendarsInputBodyDtoSchema = z
  .object({
    integration: z
      .enum(['apple_calendar', 'google_calendar', 'office365_calendar'])
      .openapi({
        example: 'apple_calendar',
        description:
          'The calendar service you want to integrate, as returned by the /calendars endpoint',
      }),
    externalId: z
      .string()
      .openapi({
        example:
          'https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/',
        description:
          'Unique identifier used to represent the specific calendar, as returned by the /calendars endpoint',
      }),
    delegationCredentialId: z.string().exactOptional(),
  })
  .openapi({ required: ['integration', 'externalId'] })
  .openapi('DestinationCalendarsInputBodyDto')

const DestinationCalendarsOutputDtoSchema = z
  .object({
    userId: z.number(),
    integration: z.string(),
    externalId: z.string(),
    credentialId: z.number().nullable(),
  })
  .openapi({ required: ['userId', 'integration', 'externalId', 'credentialId'] })
  .openapi('DestinationCalendarsOutputDto')

const DestinationCalendarsOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: DestinationCalendarsOutputDtoSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('DestinationCalendarsOutputResponseDto')

const ConferencingAppsOutputDtoSchema = z
  .object({
    id: z.number().openapi({ description: 'Id of the conferencing app credentials' }),
    type: z.string().openapi({ example: 'google_video', description: 'Type of conferencing app' }),
    userId: z
      .number()
      .openapi({ description: 'Id of the user associated to the conferencing app' }),
    invalid: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ example: true, description: 'Whether if the connection is working or not.' }),
  })
  .openapi({ required: ['id', 'type', 'userId'] })
  .openapi('ConferencingAppsOutputDto')

const ConferencingAppOutputResponseDtoSchema = z
  .object({ status: z.enum(['success', 'error']), data: ConferencingAppsOutputDtoSchema })
  .openapi({ required: ['status', 'data'] })
  .openapi('ConferencingAppOutputResponseDto')

const GetConferencingAppsOauthUrlResponseDtoSchema = z
  .object({ status: z.enum(['success', 'error']).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('GetConferencingAppsOauthUrlResponseDto')

const ConferencingAppsOutputResponseDtoSchema = z
  .object({ status: z.enum(['success', 'error']), data: z.array(ConferencingAppsOutputDtoSchema) })
  .openapi({ required: ['status', 'data'] })
  .openapi('ConferencingAppsOutputResponseDto')

const SetDefaultConferencingAppOutputResponseDtoSchema = z
  .object({ status: z.enum(['success', 'error']).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('SetDefaultConferencingAppOutputResponseDto')

const DefaultConferencingAppsOutputDtoSchema = z
  .object({ appSlug: z.string().exactOptional(), appLink: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DefaultConferencingAppsOutputDto')

const GetDefaultConferencingAppOutputResponseDtoSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: DefaultConferencingAppsOutputDtoSchema.exactOptional(),
  })
  .openapi({ required: ['status'] })
  .openapi('GetDefaultConferencingAppOutputResponseDto')

const DisconnectConferencingAppOutputResponseDtoSchema = z
  .object({ status: z.enum(['success', 'error']).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('DisconnectConferencingAppOutputResponseDto')

const CalendarConnectionItemSchema = z
  .object({
    connectionId: z
      .string()
      .openapi({
        description: 'Stable ID for this calendar connection (use in connection-scoped endpoints)',
        example: '123',
      }),
    type: z
      .enum(['google', 'office365', 'apple'])
      .openapi({ description: 'Calendar provider type', example: 'google' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Primary email for this connection (null if unavailable)',
        example: 'user@gmail.com',
      }),
  })
  .openapi({ required: ['connectionId', 'type'] })
  .openapi('CalendarConnectionItem')

const ListConnectionsDataSchema = z
  .object({ connections: z.array(CalendarConnectionItemSchema) })
  .openapi({ required: ['connections'] })
  .openapi('ListConnectionsData')

const ListConnectionsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: ListConnectionsDataSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('ListConnectionsOutput')

const CalendarEventVideoLocationSchema = z
  .object({
    type: z
      .literal('video')
      .default('video')
      .openapi({ description: 'Indicates this is a video conference location' }),
    url: z.string().openapi({ description: 'URL for joining the video conference' }),
    label: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name for the video conference' }),
    password: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Password required to join the video conference' }),
    meetingCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Meeting code or ID required to join the conference' }),
    accessCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Access code required to join the conference' }),
  })
  .openapi({ required: ['type', 'url'] })
  .openapi('CalendarEventVideoLocation')

const CalendarEventPhoneLocationSchema = z
  .object({
    type: z
      .literal('phone')
      .default('phone')
      .openapi({ description: 'Indicates this is a phone conference location' }),
    url: z.string().openapi({ description: 'Phone number or URL for dialing into the conference' }),
    label: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name for the phone conference' }),
    pin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'PIN number required for the phone conference' }),
    password: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Password required for the phone conference' }),
    accessCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Access code required for the phone conference' }),
    regionCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Country/region code for the phone number' }),
  })
  .openapi({ required: ['type', 'url'] })
  .openapi('CalendarEventPhoneLocation')

const CalendarEventSipLocationSchema = z
  .object({
    type: z
      .literal('sip')
      .default('sip')
      .openapi({
        description: 'Indicates this is a SIP (Session Initiation Protocol) conference location',
      }),
    url: z.string().openapi({ description: 'SIP URL for joining the conference' }),
    label: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name for the SIP conference' }),
    pin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'PIN number required for the SIP conference' }),
    password: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Password required for the SIP conference' }),
  })
  .openapi({ required: ['type', 'url'] })
  .openapi('CalendarEventSipLocation')

const CalendarEventMoreLocationSchema = z
  .object({
    type: z
      .literal('more')
      .default('more')
      .openapi({ description: 'Indicates this is an additional conference location type' }),
    url: z.string().openapi({ description: 'URL for accessing this location' }),
    label: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name for this location' }),
  })
  .openapi({ required: ['type', 'url'] })
  .openapi('CalendarEventMoreLocation')

const CalendarEventResponseStatusSchema = z
  .enum(['accepted', 'pending', 'declined', 'needsAction'])
  .openapi({ description: 'Response status of the attendee' })
  .openapi('CalendarEventResponseStatus')

const CalendarEventAttendeeSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of the attendee' }),
    name: z.string().exactOptional().openapi({ description: 'Display name of the attendee' }),
    responseStatus: CalendarEventResponseStatusSchema.nullable()
      .exactOptional()
      .openapi({ example: 'accepted' }),
    self: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if this attendee is the current user' }),
    optional: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: "Indicates if this attendee's attendance is optional" }),
    host: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if this attendee is the host' }),
  })
  .openapi({ required: ['email'] })
  .openapi('CalendarEventAttendee')

const CalendarEventStatusSchema = z
  .enum(['accepted', 'pending', 'declined', 'cancelled'])
  .openapi({ description: 'Status of the event (accepted, pending, declined, cancelled)' })
  .openapi('CalendarEventStatus')

const CalendarEventHostSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of the event host' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name of the event host' }),
    responseStatus: CalendarEventResponseStatusSchema.nullable()
      .exactOptional()
      .openapi({ example: 'accepted' }),
  })
  .openapi({ required: ['email'] })
  .openapi('CalendarEventHost')

const CalendarEventOwnerSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of the event host' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name of the event host' }),
  })
  .openapi({ required: ['email'] })
  .openapi('CalendarEventOwner')

const CalendarSourceSchema = z
  .enum(['google', 'office365', 'apple'])
  .openapi({
    description:
      'Calendar integration source (e.g., Google Calendar, Office 365, Apple Calendar). Currently only Google Calendar is supported.',
  })
  .openapi('CalendarSource')

const UnifiedCalendarEventOutputSchema = z
  .object({
    start: z
      .object({
        time: z.iso.datetime({ offset: true }).exactOptional(),
        timeZone: z.string().exactOptional(),
      })
      .openapi({
        description: 'Start date and time of the calendar event with timezone information',
        required: [],
      }),
    end: z
      .object({
        time: z.iso.datetime({ offset: true }).exactOptional(),
        timeZone: z.string().exactOptional(),
      })
      .openapi({
        description: 'End date and time of the calendar event with timezone information',
        required: [],
      }),
    id: z.string().openapi({ description: 'Unique identifier of the calendar event' }),
    title: z.string().openapi({ description: 'Title of the calendar event' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Detailed description of the calendar event' }),
    locations: z
      .array(
        z
          .discriminatedUnion('type', [
            CalendarEventVideoLocationSchema,
            CalendarEventPhoneLocationSchema,
            CalendarEventSipLocationSchema,
            CalendarEventMoreLocationSchema,
          ])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Conference locations with entry points (video, phone, sip, more)' }),
    attendees: z
      .array(CalendarEventAttendeeSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of attendees with their response status' }),
    status: CalendarEventStatusSchema.nullable().exactOptional().openapi({ example: 'accepted' }),
    hosts: z
      .array(CalendarEventHostSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Information about the event hosts (organizers)' }),
    calendarEventOwner: CalendarEventOwnerSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The calendar account that owns this event. This is the primary calendar where the event is stored and cannot be modified without appropriate permissions. Changing this would require moving the event to a different calendar',
      }),
    source: CalendarSourceSchema.openapi({ example: 'google' }),
  })
  .openapi({ required: ['start', 'end', 'id', 'title', 'source'] })
  .openapi('UnifiedCalendarEventOutput')

const ListUnifiedCalendarEventsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(UnifiedCalendarEventOutputSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('ListUnifiedCalendarEventsOutput')

const CreateEventDateTimeWithZoneSchema = z
  .object({
    time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Start or end time in ISO 8601 format' }),
    timeZone: z.string().openapi({ description: 'IANA time zone (e.g. America/New_York)' }),
  })
  .openapi({ required: ['time', 'timeZone'] })
  .openapi('CreateEventDateTimeWithZone')

const CreateEventAttendeeSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of the attendee' }),
    name: z.string().exactOptional().openapi({ description: 'Display name of the attendee' }),
  })
  .openapi({ required: ['email'] })
  .openapi('CreateEventAttendee')

const CreateUnifiedCalendarEventInputSchema = z
  .object({
    title: z.string().openapi({ description: 'Title of the calendar event' }),
    start: CreateEventDateTimeWithZoneSchema.openapi({
      description: 'Start date and time with time zone',
    }),
    end: CreateEventDateTimeWithZoneSchema.openapi({
      description: 'End date and time with time zone',
    }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description of the event' }),
    attendees: z
      .array(CreateEventAttendeeSchema)
      .exactOptional()
      .openapi({ description: 'List of attendees' }),
  })
  .openapi({ required: ['title', 'start', 'end'] })
  .openapi('CreateUnifiedCalendarEventInput')

const GetUnifiedCalendarEventOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: UnifiedCalendarEventOutputSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('GetUnifiedCalendarEventOutput')

const UpdateCalendarEventAttendeeSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Email address of the attendee' }),
    name: z.string().exactOptional().openapi({ description: 'Display name of the attendee' }),
    responseStatus: CalendarEventResponseStatusSchema.nullable().exactOptional(),
    self: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if this attendee is the current user' }),
    optional: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: "Indicates if this attendee's attendance is optional" }),
    host: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates if this attendee is the host' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateCalendarEventAttendee')

const UpdateUnifiedCalendarEventInputSchema = z
  .object({
    start: z
      .object({
        time: z.iso.datetime({ offset: true }).exactOptional(),
        timeZone: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'Start date and time of the calendar event with timezone information',
        required: [],
      }),
    end: z
      .object({
        time: z.iso.datetime({ offset: true }).exactOptional(),
        timeZone: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'End date and time of the calendar event with timezone information',
        required: [],
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the calendar event' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Detailed description of the calendar event' }),
    attendees: z
      .array(UpdateCalendarEventAttendeeSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of attendees. CAUTION: You must pass the entire array with all updated values. Any attendees not included in this array will be removed from the event.',
      }),
    status: CalendarEventStatusSchema.nullable().exactOptional().openapi({ example: 'accepted' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateUnifiedCalendarEventInput')

const RequestEmailVerificationInputSchema = z
  .object({
    email: z.string().openapi({ description: 'Email to verify.', example: 'acme@example.com' }),
  })
  .openapi({ required: ['email'] })
  .openapi('RequestEmailVerificationInput')

const RequestEmailVerificationOutputSchema = z
  .object({ status: z.enum(['success', 'error']).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('RequestEmailVerificationOutput')

const RequestPhoneVerificationInputSchema = z
  .object({
    phone: z
      .string()
      .openapi({ description: 'Phone number to verify.', example: '+372 5555 6666' }),
  })
  .openapi({ required: ['phone'] })
  .openapi('RequestPhoneVerificationInput')

const RequestPhoneVerificationOutputSchema = z
  .object({ status: z.enum(['success', 'error']).openapi({ example: 'success' }) })
  .openapi({ required: ['status'] })
  .openapi('RequestPhoneVerificationOutput')

const VerifyEmailInputSchema = z
  .object({
    email: z.string().openapi({ description: 'Email to verify.', example: 'example@acme.com' }),
    code: z
      .string()
      .openapi({ description: 'verification code sent to the email to verify', example: '1ABG2C' }),
  })
  .openapi({ required: ['email', 'code'] })
  .openapi('VerifyEmailInput')

const UserVerifiedEmailOutputDataSchema = z
  .object({
    id: z
      .number()
      .openapi({ description: 'The unique identifier for the verified email.', example: 789 }),
    email: z
      .email()
      .openapi({ description: 'The verified email address.', example: 'user@example.com' }),
    userId: z
      .number()
      .openapi({ description: 'The ID of the associated user, if applicable.', example: 45 }),
  })
  .openapi({ required: ['id', 'email', 'userId'] })
  .openapi('UserVerifiedEmailOutputData')

const UserVerifiedEmailOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: UserVerifiedEmailOutputDataSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UserVerifiedEmailOutput')

const VerifyPhoneInputSchema = z
  .object({
    phone: z.string().openapi({ description: 'phone number to verify.', example: '+37255556666' }),
    code: z
      .string()
      .openapi({
        description: 'verification code sent to the phone number to verify',
        example: '1ABG2C',
      }),
  })
  .openapi({ required: ['phone', 'code'] })
  .openapi('VerifyPhoneInput')

const UserVerifiedPhoneOutputDataSchema = z
  .object({
    id: z
      .number()
      .openapi({ description: 'The unique identifier for the verified email.', example: 789 }),
    phoneNumber: z
      .string()
      .openapi({ description: 'The verified phone number.', example: '+37255556666' }),
    userId: z
      .number()
      .openapi({ description: 'The ID of the associated user, if applicable.', example: 45 }),
  })
  .openapi({ required: ['id', 'phoneNumber', 'userId'] })
  .openapi('UserVerifiedPhoneOutputData')

const UserVerifiedPhoneOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: UserVerifiedPhoneOutputDataSchema,
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UserVerifiedPhoneOutput')

const UserVerifiedEmailsOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(UserVerifiedEmailOutputDataSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UserVerifiedEmailsOutput')

const UserVerifiedPhonesOutputSchema = z
  .object({
    status: z.enum(['success', 'error']).openapi({ example: 'success' }),
    data: z.array(UserVerifiedPhoneOutputDataSchema),
  })
  .openapi({ required: ['status', 'data'] })
  .openapi('UserVerifiedPhonesOutput')

export const postV2ApiKeysRefreshRoute = createRoute({
  method: 'post',
  path: '/v2/api-keys/refresh',
  tags: ['Api Keys'],
  summary: 'Refresh API Key',
  description:
    'Generate a new API key and delete the current one. Provide API key to refresh as a Bearer token in the Authorization header (e.g. "Authorization: Bearer <apiKey>").',
  operationId: 'ApiKeysController_refresh',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RefreshApiKeyInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RefreshApiKeyOutputSchema } },
    },
  },
})

export const getV2BookingsRoute = createRoute({
  method: 'get',
  path: '/v2/bookings',
  tags: ['Bookings'],
  summary: 'Get all bookings',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'BookingsController_2024_08_13_getBookings',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['upcoming', 'recurring', 'past', 'cancelled', 'unconfirmed'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            required: false,
            in: 'query',
            description:
              'Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.',
            schema: {
              example: '?status=upcoming,past',
              type: 'array',
              items: {
                type: 'string',
                enum: ['upcoming', 'recurring', 'past', 'cancelled', 'unconfirmed'],
              },
            },
          },
          example: '?status=upcoming,past',
        }),
      attendeeEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'attendeeEmail',
            required: false,
            in: 'query',
            description: "Filter bookings by the attendee's email address.",
            schema: { example: 'example@domain.com', type: 'string' },
          },
          example: 'example@domain.com',
        }),
      attendeeName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'attendeeName',
            required: false,
            in: 'query',
            description: "Filter bookings by the attendee's name.",
            schema: { example: 'John Doe', type: 'string' },
          },
          example: 'John Doe',
        }),
      bookingUid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bookingUid',
            required: false,
            in: 'query',
            description: 'Filter bookings by the booking Uid.',
            schema: { example: '2NtaeaVcKfpmSZ4CthFdfk', type: 'string' },
          },
          example: '2NtaeaVcKfpmSZ4CthFdfk',
        }),
      eventTypeIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'eventTypeIds',
            required: false,
            in: 'query',
            description:
              'Filter bookings by event type ids belonging to the user. Event type ids must be separated by a comma.',
            schema: { example: '?eventTypeIds=100,200', type: 'string' },
          },
          example: '?eventTypeIds=100,200',
        }),
      eventTypeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'eventTypeId',
            required: false,
            in: 'query',
            description: 'Filter bookings by event type id belonging to the user.',
            schema: { example: '?eventTypeId=100', type: 'string' },
          },
          example: '?eventTypeId=100',
        }),
      teamsIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'teamsIds',
            required: false,
            in: 'query',
            description:
              'Filter bookings by team ids that user is part of. Team ids must be separated by a comma.',
            schema: { example: '?teamIds=50,60', type: 'string' },
          },
          example: '?teamIds=50,60',
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'teamId',
            required: false,
            in: 'query',
            description: 'Filter bookings by team id that user is part of',
            schema: { example: '?teamId=50', type: 'string' },
          },
          example: '?teamId=50',
        }),
      afterStart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterStart',
            required: false,
            in: 'query',
            description: 'Filter bookings with start after this date string.',
            schema: { example: '?afterStart=2025-03-07T10:00:00.000Z', type: 'string' },
          },
          example: '?afterStart=2025-03-07T10:00:00.000Z',
        }),
      beforeEnd: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeEnd',
            required: false,
            in: 'query',
            description: 'Filter bookings with end before this date string.',
            schema: { example: '?beforeEnd=2025-03-07T11:00:00.000Z', type: 'string' },
          },
          example: '?beforeEnd=2025-03-07T11:00:00.000Z',
        }),
      afterCreatedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterCreatedAt',
            required: false,
            in: 'query',
            description: 'Filter bookings that have been created after this date string.',
            schema: { example: '?afterCreatedAt=2025-03-07T10:00:00.000Z', type: 'string' },
          },
          example: '?afterCreatedAt=2025-03-07T10:00:00.000Z',
        }),
      beforeCreatedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeCreatedAt',
            required: false,
            in: 'query',
            description: 'Filter bookings that have been created before this date string.',
            schema: { example: '?beforeCreatedAt=2025-03-14T11:00:00.000Z', type: 'string' },
          },
          example: '?beforeCreatedAt=2025-03-14T11:00:00.000Z',
        }),
      afterUpdatedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterUpdatedAt',
            required: false,
            in: 'query',
            description: 'Filter bookings that have been updated after this date string.',
            schema: { example: '?afterUpdatedAt=2025-03-07T10:00:00.000Z', type: 'string' },
          },
          example: '?afterUpdatedAt=2025-03-07T10:00:00.000Z',
        }),
      beforeUpdatedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeUpdatedAt',
            required: false,
            in: 'query',
            description: 'Filter bookings that have been updated before this date string.',
            schema: { example: '?beforeUpdatedAt=2025-03-14T11:00:00.000Z', type: 'string' },
          },
          example: '?beforeUpdatedAt=2025-03-14T11:00:00.000Z',
        }),
      sortStart: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortStart',
            required: false,
            in: 'query',
            description: 'Sort results by their start time in ascending or descending order.',
            schema: {
              example: '?sortStart=asc OR ?sortStart=desc',
              enum: ['asc', 'desc'],
              type: 'string',
            },
          },
          example: '?sortStart=asc OR ?sortStart=desc',
        }),
      sortEnd: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortEnd',
            required: false,
            in: 'query',
            description: 'Sort results by their end time in ascending or descending order.',
            schema: {
              example: '?sortEnd=asc OR ?sortEnd=desc',
              enum: ['asc', 'desc'],
              type: 'string',
            },
          },
          example: '?sortEnd=asc OR ?sortEnd=desc',
        }),
      sortCreated: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortCreated',
            required: false,
            in: 'query',
            description:
              'Sort results by their creation time (when booking was made) in ascending or descending order.',
            schema: {
              example: '?sortCreated=asc OR ?sortCreated=desc',
              enum: ['asc', 'desc'],
              type: 'string',
            },
          },
          example: '?sortCreated=asc OR ?sortCreated=desc',
        }),
      sortUpdatedAt: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortUpdatedAt',
            required: false,
            in: 'query',
            description:
              'Sort results by their updated time (for example when booking status changes) in ascending or descending order.',
            schema: {
              example: '?sortUpdated=asc OR ?sortUpdated=desc',
              enum: ['asc', 'desc'],
              type: 'string',
            },
          },
          example: '?sortUpdated=asc OR ?sortUpdated=desc',
        }),
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'take',
            required: false,
            in: 'query',
            description: 'The number of items to return',
            schema: { default: 100, example: 10, type: 'number' },
          },
          example: 10,
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            required: false,
            in: 'query',
            description: 'The number of items to skip',
            schema: { default: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingsOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsRoute = createRoute({
  method: 'post',
  path: '/v2/bookings',
  tags: ['Bookings'],
  summary: 'Create a booking',
  description:
    "\n      POST /v2/bookings is used to create regular bookings, recurring bookings and instant bookings. The request bodies for all 3 are almost the same except:\n      If eventTypeId in the request body is id of a regular event, then regular booking is created.\n\n      If it is an id of a recurring event type, then recurring booking is created.\n\n      Meaning that the request bodies are equal but the outcome depends on what kind of event type it is with the goal of making it as seamless for developers as possible.\n\n      The start needs to be in UTC aka if the timezone is GMT+2 in Rome and meeting should start at 11, then UTC time should have hours 09:00 aka without time zone.\n\n      Finally, there are 2 ways to book an event type belonging to an individual user:\n      1. Provide `eventTypeId` in the request body.\n      2. Provide `eventTypeSlug` and `username` and optionally `organizationSlug` if the user with the username is within an organization.\n\n      And 2 ways to book and event type belonging to a team:\n      1. Provide `eventTypeId` in the request body.\n      2. Provide `eventTypeSlug` and `teamSlug` and optionally `organizationSlug` if the team with the teamSlug is within an organization.\n\n      If you are creating a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or\n      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.\n\n      For event types that have SMS reminders enabled, you need to pass the attendee's phone number in the request body via `attendee.phoneNumber` (e.g., \"+19876543210\" in international format). This is an optional field, but becomes required when SMS reminders are enabled for the event type. For the complete attendee object structure, see the attendee schema in the `/docs` Swagger endpoint.\n\n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ",
  operationId: 'BookingsController_2024_08_13_createBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-secret-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'For platform customers - OAuth client secret key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Accepts different types of booking input: Create Booking (Option 1) or Create Recurring Booking (Option 2)',
      content: {
        'application/json': {
          schema: z.xor([
            CreateBookingInput_2024_08_13Schema,
            CreateRecurringBookingInput_2024_08_13Schema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateBookingOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBySeatSeatUidRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/by-seat/{seatUid}',
  tags: ['Bookings'],
  summary: 'Get a booking by seat UID',
  description:
    "Get a seated booking by its seat reference UID. This is useful when you have a seatUid from a seated booking and want to retrieve the full booking details.\n\n      If you are fetching a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or\n      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.\n\n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ",
  operationId: 'BookingsController_2024_08_13_getBookingBySeatUid',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-secret-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'For platform customers - OAuth client secret key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      seatUid: z
        .string()
        .openapi({
          param: { name: 'seatUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}',
  tags: ['Bookings'],
  summary: 'Get a booking',
  description:
    "`:bookingUid` can be\n\n      1. uid of a normal booking\n\n      2. uid of one of the recurring booking recurrences\n\n      3. uid of recurring booking which will return an array of all recurring booking recurrences (stored as recurringBookingUid on one of the individual recurrences).\n\n      If you are fetching a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or\n      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.\n\n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ",
  operationId: 'BookingsController_2024_08_13_getBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-secret-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'For platform customers - OAuth client secret key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidRecordingsRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/recordings',
  tags: ['Bookings'],
  summary: 'Get all the recordings for the booking',
  description:
    'Fetches all the recordings for the booking `:bookingUid`. Requires authentication and proper authorization. Access is granted if you are the booking organizer, team admin or org admin/owner.\n\n    <Note>cal-api-version: `2024-08-13` is required in the request header.</Note>\n    ',
  operationId: 'BookingsController_2024_08_13_getBookingRecordings',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingRecordingsOutputSchema } },
    },
  },
})

export const getV2BookingsBookingUidTranscriptsRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/transcripts',
  tags: ['Bookings'],
  summary: 'Get Cal Video real time transcript download links for the booking',
  description:
    'Fetches all the transcript download links for the booking `:bookingUid`\n\n    <Note>\n    Transcripts are generated when clicking "Transcribe" during a Cal Video meeting. Download links are valid for 1 hour only - make a new request to generate fresh links after expiration.\n\n    Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.\n    </Note>\n    ',
  operationId: 'BookingsController_2024_08_13_getBookingTranscripts',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingTranscriptsOutputSchema } },
    },
  },
})

export const postV2BookingsBookingUidRescheduleRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/reschedule',
  tags: ['Bookings'],
  summary: 'Reschedule a booking',
  description:
    'Reschedule a booking or seated booking\n\n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'BookingsController_2024_08_13_rescheduleBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-secret-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'For platform customers - OAuth client secret key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      description:
        "Accepts different types of reschedule booking input: Reschedule Booking (Option 1) or Reschedule Seated Booking (Option 2). If you're rescheduling a seated booking as org admin of booking host, pass booking input for Reschedule Booking (Option 1) along with your access token in the request header.\n\n      If you are rescheduling a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or\n      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.",
      content: {
        'application/json': {
          schema: z.xor([
            RescheduleBookingInput_2024_08_13Schema,
            RescheduleSeatedBookingInput_2024_08_13Schema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: RescheduleBookingOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidCancelRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/cancel',
  tags: ['Bookings'],
  summary: 'Cancel a booking',
  description:
    ':bookingUid can be :bookingUid of an usual booking, individual recurrence or recurring booking to cancel all recurrences.\n\n    \nCancelling normal bookings:\n    If the booking is not seated and not recurring, simply pass :bookingUid in the request URL `/bookings/:bookingUid/cancel` and optionally cancellationReason in the request body `{"cancellationReason": "Will travel"}`.\n\n    \nCancelling seated bookings:\n    It is possible to cancel specific seat within a booking as an attendee or all of the seats as the host.\n    \n1. As an attendee - provide :bookingUid in the request URL `/bookings/:bookingUid/cancel` and seatUid in the request body `{"seatUid": "123-123-123"}` . This will remove this particular attendance from the booking.\n    \n2. As the host or org admin of host - host can cancel booking for all attendees aka for every seat, this also applies to org admins. Provide :bookingUid in the request URL `/bookings/:bookingUid/cancel` and cancellationReason in the request body `{"cancellationReason": "Will travel"}` and `Authorization: Bearer token` request header where token is event type owner (host) credential. This will cancel the booking for all attendees.\n\n    \nCancelling recurring seated bookings:\n    For recurring seated bookings it is not possible to cancel all of them with 1 call\n    like with non-seated recurring bookings by providing recurring bookind uid - you have to cancel each recurrence booking by its bookingUid + seatUid.\n\n    If you are cancelling a seated booking for an event type with \'show attendees\' disabled, then to retrieve attendees in the response either set \'show attendees\' to true on event type level or\n    you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.\n\n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'BookingsController_2024_08_13_cancelBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-secret-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'For platform customers - OAuth client secret key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      description:
        'Accepts different types of cancel booking input: Cancel Booking (Option 1 which is for normal or recurring bookings) or Cancel Seated Booking (Option 2 which is for seated bookings)',
      content: {
        'application/json': {
          schema: z.xor([
            CancelBookingInput_2024_08_13Schema,
            CancelSeatedBookingInput_2024_08_13Schema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CancelBookingOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidMarkAbsentRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/mark-absent',
  tags: ['Bookings'],
  summary: 'Mark a booking absence',
  description:
    'The provided authorization header refers to the owner of the booking.\n\n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'BookingsController_2024_08_13_markNoShow',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MarkAbsentBookingInput_2024_08_13Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MarkAbsentBookingOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidReassignRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/reassign',
  tags: ['Bookings'],
  summary: 'Reassign a booking to auto-selected host',
  description:
    'Currently only supports reassigning host for round robin bookings. The provided authorization header refers to the owner of the booking.\n\n       <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ',
  operationId: 'BookingsController_2024_08_13_reassignBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ReassignBookingOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidReassignUserIdRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/reassign/{userId}',
  tags: ['Bookings'],
  summary: 'Reassign a booking to a specific host',
  description:
    'Currently only supports reassigning host for round robin bookings. The provided authorization header refers to the owner of the booking.\n\n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ',
  operationId: 'BookingsController_2024_08_13_reassignBookingToUser',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'userId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReassignToUserBookingInput_2024_08_13Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ReassignBookingOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidConfirmRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/confirm',
  tags: ['Bookings'],
  summary: 'Confirm a booking',
  description:
    'The provided authorization header refers to the owner of the booking.\n\n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'BookingsController_2024_08_13_confirmBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidDeclineRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/decline',
  tags: ['Bookings'],
  summary: 'Decline a booking',
  description:
    'The provided authorization header refers to the owner of the booking.\n\n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'BookingsController_2024_08_13_declineBooking',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeclineBookingInput_2024_08_13Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidCalendarLinksRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/calendar-links',
  tags: ['Bookings'],
  summary: "Get 'Add to Calendar' links for a booking",
  description:
    'Retrieve calendar links for a booking that can be used to add the event to various calendar services. Returns links for Google Calendar, Microsoft Office, Microsoft Outlook, and a downloadable ICS file.\n\n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ',
  operationId: 'BookingsController_2024_08_13_getCalendarLinks',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CalendarLinksOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidReferencesRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/references',
  tags: ['Bookings'],
  summary: 'Get booking references',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'BookingsController_2024_08_13_getBookingReferences',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      type: z
        .enum([
          'google_calendar',
          'office365_calendar',
          'daily_video',
          'google_video',
          'office365_video',
          'zoom_video',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            required: false,
            in: 'query',
            description: 'Filter booking references by type',
            schema: {
              example: 'google_calendar',
              enum: [
                'google_calendar',
                'office365_calendar',
                'daily_video',
                'google_video',
                'office365_video',
                'zoom_video',
              ],
              type: 'string',
            },
          },
          example: 'google_calendar',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BookingReferencesOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidConferencingSessionsRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/conferencing-sessions',
  tags: ['Bookings'],
  summary: 'Get Video Meeting Sessions. Only supported for Cal Video',
  description:
    'Requires authentication and proper authorization. Access is granted if you are the booking organizer, team admin or org admin/owner.\n\n    <Note>cal-api-version: `2024-08-13` is required in the request header.</Note>',
  operationId: 'BookingsController_2024_08_13_getVideoSessions',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-08-13')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-08-13' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingVideoSessionsOutputSchema } },
    },
  },
})

export const patchV2BookingsBookingUidLocationRoute = createRoute({
  method: 'patch',
  path: '/v2/bookings/{bookingUid}/location',
  tags: ['Bookings'],
  summary: 'Update booking location for an existing booking',
  description:
    'Updates the location for an existing booking.\n\n**Integration Fallback Behavior:**\n- **Google Meet**: Requires Google Calendar to be connected. If the booking has no Google Calendar event, it will automatically fall back to Cal Video.\n- **MS Teams**: If Office 365 Calendar is connected, generates the meeting link via calendar. Otherwise, uses the MS Teams video integration directly.\n\n<Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>',
  operationId: 'BookingLocationController_2024_08_13_updateBookingLocation',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBookingLocationInput_2024_08_13Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateBookingLocationOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidAttendeesRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/attendees',
  tags: ['Bookings / Attendees'],
  summary: 'Get all attendees for a booking',
  description:
    'Retrieve all attendees for a specific booking by its UID.\n    \n    <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>\n    ',
  operationId: 'BookingAttendeesController_2024_08_13_getBookingAttendees',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingAttendeesOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidAttendeesRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/attendees',
  tags: ['Bookings / Attendees'],
  summary: 'Add an attendee to a booking',
  description:
    "Add a new attendee to an existing booking by its UID.\n\n      **Side effects:**\n      - The booking's attendee list is updated in the database\n      - The calendar event is updated on connected calendars (Google Calendar, Outlook, etc.) to include the new attendee\n      - An email notification is sent to the new attendee with the booking details\n\n      **Permissions:**\n      - The authenticated user must be either the booking organizer, an existing attendee, or have the `booking.update` permission for the team\n\n      <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>\n      ",
  operationId: 'BookingAttendeesController_2024_08_13_addAttendee',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddAttendeeInput_2024_08_13Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: AddAttendeeOutput_2024_08_13Schema } },
    },
  },
})

export const getV2BookingsBookingUidAttendeesAttendeeIdRoute = createRoute({
  method: 'get',
  path: '/v2/bookings/{bookingUid}/attendees/{attendeeId}',
  tags: ['Bookings / Attendees'],
  summary: 'Get a specific attendee for a booking',
  description:
    'Retrieve a specific attendee by their ID for a booking identified by its UID.\n        \n      <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>\n      ',
  operationId: 'BookingAttendeesController_2024_08_13_getBookingAttendee',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
      attendeeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'attendeeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBookingAttendeeOutput_2024_08_13Schema } },
    },
  },
})

export const deleteV2BookingsBookingUidAttendeesAttendeeIdRoute = createRoute({
  method: 'delete',
  path: '/v2/bookings/{bookingUid}/attendees/{attendeeId}',
  tags: ['Bookings / Attendees'],
  summary: 'Remove an attendee from a booking',
  description:
    'Remove an attendee from an existing booking by their attendee ID. The primary attendee (first attendee) cannot be removed — to remove them, cancel the booking instead. The removed attendee will receive a cancellation email notification.\n\n    <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>\n    ',
  operationId: 'BookingAttendeesController_2024_08_13_removeAttendee',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
      attendeeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'attendeeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RemoveAttendeeOutput_2024_08_13Schema } },
    },
  },
})

export const postV2BookingsBookingUidGuestsRoute = createRoute({
  method: 'post',
  path: '/v2/bookings/{bookingUid}/guests',
  tags: ['Bookings / Guests'],
  summary: 'Add guests to an existing booking',
  description:
    'Add one or more guests to an existing booking. Maximum 10 guests per request, with a limit of 30 total guests per booking.\n    \n    **Rate Limiting:**\n    This endpoint is rate limited to 5 requests per minute to prevent abuse.\n    \n    **Email Notifications:**\n    When guests are added, the following notifications are sent (unless disabled by event type settings):\n    \n    - **Organizer & Team Members:** Receive an "Add Guests" notification email informing them that new guests have been added to the booking.\n    \n    - **New Guests:** Receive a "Scheduled Event" email with full booking details and calendar invite. If they have a phone number, they also receive an SMS notification.\n    \n    - **Existing Guests:** Receive an "Add Guests" notification email informing them that additional guests have been added to the booking.\n    \n    <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>\n    ',
  operationId: 'BookingGuestsController_2024_08_13_addGuests',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      bookingUid: z
        .string()
        .openapi({
          param: { name: 'bookingUid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddGuestsInput_2024_08_13Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AddGuestsOutput_2024_08_13Schema } },
    },
  },
})

export const getV2CalendarsConnectionsRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/connections',
  tags: ['Cal Unified Calendars'],
  summary: 'List calendar connections',
  description:
    'Returns all calendar connections for the authenticated user (Google, Office 365, Apple). Use connectionId in connection-scoped endpoints. Note: Event CRUD (list/create/get/update/delete events) is currently only supported for Google Calendar connections; other types will return 400.',
  operationId: 'CalUnifiedCalendarsController_listConnections',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListConnectionsOutputSchema } },
    },
  },
})

export const getV2CalendarsConnectionsConnectionIdEventsRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/connections/{connectionId}/events',
  tags: ['Cal Unified Calendars'],
  summary: 'List events for a connection',
  description:
    'List events in a date range for a specific calendar connection. Only supported for Google Calendar connections; other connection types return 400.',
  operationId: 'CalUnifiedCalendarsController_listConnectionEvents',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            required: true,
            in: 'path',
            description: 'Calendar connection ID from GET /connections',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            name: 'from',
            required: true,
            in: 'query',
            description: 'Start of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-01', type: 'string' },
          },
          example: '2026-03-01',
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            required: true,
            in: 'query',
            description: 'End of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-31', type: 'string' },
          },
          example: '2026-03-31',
        }),
      timeZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeZone',
            required: false,
            in: 'query',
            description: 'IANA time zone for the request (e.g. America/New_York)',
            schema: { type: 'string' },
          },
        }),
      calendarId: z
        .string()
        .default('primary')
        .exactOptional()
        .openapi({
          param: {
            name: 'calendarId',
            required: false,
            in: 'query',
            description:
              "Calendar ID. Use 'primary' for the user's primary calendar, or the external ID of a connected calendar.",
            schema: { default: 'primary', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListUnifiedCalendarEventsOutputSchema } },
    },
  },
})

export const postV2CalendarsConnectionsConnectionIdEventsRoute = createRoute({
  method: 'post',
  path: '/v2/calendars/connections/{connectionId}/events',
  tags: ['Cal Unified Calendars'],
  summary: 'Create event on a connection',
  description:
    'Create a new event on the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.',
  operationId: 'CalUnifiedCalendarsController_createConnectionEvent',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: { name: 'connectionId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      calendarId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'calendarId', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUnifiedCalendarEventInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const getV2CalendarsConnectionsConnectionIdEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/connections/{connectionId}/events/{eventId}',
  tags: ['Cal Unified Calendars'],
  summary: 'Get event for a connection',
  description:
    'Get a single event by ID for the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.',
  operationId: 'CalUnifiedCalendarsController_getConnectionEvent',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: { name: 'connectionId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      eventId: z
        .string()
        .openapi({
          param: { name: 'eventId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      calendarId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'calendarId', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute = createRoute({
  method: 'delete',
  path: '/v2/calendars/connections/{connectionId}/events/{eventId}',
  tags: ['Cal Unified Calendars'],
  summary: 'Delete event for a connection',
  description:
    'Delete/cancel an event on the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.',
  operationId: 'CalUnifiedCalendarsController_deleteConnectionEvent',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: { name: 'connectionId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      eventId: z
        .string()
        .openapi({
          param: { name: 'eventId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      calendarId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'calendarId', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
})

export const patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute = createRoute({
  method: 'patch',
  path: '/v2/calendars/connections/{connectionId}/events/{eventId}',
  tags: ['Cal Unified Calendars'],
  summary: 'Update event for a connection',
  description:
    'Update an event on the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.',
  operationId: 'CalUnifiedCalendarsController_updateConnectionEvent',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: { name: 'connectionId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      eventId: z
        .string()
        .openapi({
          param: { name: 'eventId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      calendarId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'calendarId', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUnifiedCalendarEventInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const getV2CalendarsConnectionsConnectionIdFreebusyRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/connections/{connectionId}/freebusy',
  tags: ['Cal Unified Calendars'],
  summary: 'Get free/busy for a connection',
  description: 'Get busy time slots for the specified calendar connection.',
  operationId: 'CalUnifiedCalendarsController_getConnectionFreeBusy',
  request: {
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: { name: 'connectionId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            name: 'from',
            required: true,
            in: 'query',
            description: 'Start of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-10', type: 'string' },
          },
          example: '2026-03-10',
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            required: true,
            in: 'query',
            description: 'End of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-10', type: 'string' },
          },
          example: '2026-03-10',
        }),
      timeZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeZone',
            required: false,
            in: 'query',
            description: 'IANA time zone (e.g. America/New_York)',
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GetBusyTimesOutputSchema } } },
  },
})

export const getV2CalendarsCalendarEventsEventUidRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/events/{eventUid}',
  tags: ['Cal Unified Calendars'],
  summary: 'Get meeting details from calendar',
  description:
    'Returns detailed information about a meeting including attendance metrics. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use GET /connections/{connectionId}/events/{eventId}.',
  operationId: 'CalUnifiedCalendarsController_getCalendarEventDetails',
  request: {
    params: z.object({
      calendar: z
        .literal('google')
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google'], type: 'string' },
          },
        }),
      eventUid: z
        .string()
        .openapi({
          param: {
            name: 'eventUid',
            required: true,
            in: 'path',
            description:
              'The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:\n\n- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references\n\n- For user events: GET /v2/bookings/{bookingUid}/references',
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const deleteV2CalendarsCalendarEventsEventUidRoute = createRoute({
  method: 'delete',
  path: '/v2/calendars/{calendar}/events/{eventUid}',
  tags: ['Cal Unified Calendars'],
  summary: 'Delete a calendar event',
  description:
    "Delete/cancel an event on the authenticated user's calendar. Currently only Google Calendar is supported.",
  operationId: 'CalUnifiedCalendarsController_deleteCalendarEvent',
  request: {
    params: z.object({
      calendar: z
        .enum(['google', 'office365', 'apple'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google', 'office365', 'apple'], type: 'string' },
          },
        }),
      eventUid: z
        .string()
        .openapi({
          param: {
            name: 'eventUid',
            required: true,
            in: 'path',
            description: "The calendar provider's event ID (e.g. Google Calendar event ID)",
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
})

export const patchV2CalendarsCalendarEventsEventUidRoute = createRoute({
  method: 'patch',
  path: '/v2/calendars/{calendar}/events/{eventUid}',
  tags: ['Cal Unified Calendars'],
  summary: 'Update meeting details in calendar',
  description:
    'Updates event information in the specified calendar provider. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use PATCH /connections/{connectionId}/events/{eventId}.',
  operationId: 'CalUnifiedCalendarsController_updateCalendarEvent',
  request: {
    params: z.object({
      calendar: z
        .literal('google')
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google'], type: 'string' },
          },
        }),
      eventUid: z
        .string()
        .openapi({
          param: {
            name: 'eventUid',
            required: true,
            in: 'path',
            description:
              'The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:\n\n- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references\n\n- For user events: GET /v2/bookings/{bookingUid}/references',
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUnifiedCalendarEventInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const getV2CalendarsCalendarEventEventUidRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/event/{eventUid}',
  tags: ['Cal Unified Calendars'],
  summary: 'Get meeting details from calendar',
  description:
    'Returns detailed information about a meeting including attendance metrics. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use GET /connections/{connectionId}/events/{eventId}.',
  operationId: 'CalUnifiedCalendarsController_getCalendarEventDetails',
  request: {
    params: z.object({
      calendar: z
        .literal('google')
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google'], type: 'string' },
          },
        }),
      eventUid: z
        .string()
        .openapi({
          param: {
            name: 'eventUid',
            required: true,
            in: 'path',
            description:
              'The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:\n\n- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references\n\n- For user events: GET /v2/bookings/{bookingUid}/references',
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const patchV2CalendarsCalendarEventEventUidRoute = createRoute({
  method: 'patch',
  path: '/v2/calendars/{calendar}/event/{eventUid}',
  tags: ['Cal Unified Calendars'],
  summary: 'Update meeting details in calendar',
  description:
    'Updates event information in the specified calendar provider. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use PATCH /connections/{connectionId}/events/{eventId}.',
  operationId: 'CalUnifiedCalendarsController_updateCalendarEvent',
  request: {
    params: z.object({
      calendar: z
        .literal('google')
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google'], type: 'string' },
          },
        }),
      eventUid: z
        .string()
        .openapi({
          param: {
            name: 'eventUid',
            required: true,
            in: 'path',
            description:
              'The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:\n\n- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references\n\n- For user events: GET /v2/bookings/{bookingUid}/references',
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUnifiedCalendarEventInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const getV2CalendarsCalendarEventsRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/events',
  tags: ['Cal Unified Calendars'],
  summary: 'List calendar events',
  description:
    "List events in a date range for the authenticated user's calendar. Currently only Google Calendar is supported.",
  operationId: 'CalUnifiedCalendarsController_listCalendarEvents',
  request: {
    params: z.object({
      calendar: z
        .enum(['google', 'office365', 'apple'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google', 'office365', 'apple'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            name: 'from',
            required: true,
            in: 'query',
            description: 'Start of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-01', type: 'string' },
          },
          example: '2026-03-01',
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            required: true,
            in: 'query',
            description: 'End of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-31', type: 'string' },
          },
          example: '2026-03-31',
        }),
      timeZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeZone',
            required: false,
            in: 'query',
            description: 'IANA time zone for the request (e.g. America/New_York)',
            schema: { type: 'string' },
          },
        }),
      calendarId: z
        .string()
        .default('primary')
        .exactOptional()
        .openapi({
          param: {
            name: 'calendarId',
            required: false,
            in: 'query',
            description:
              "Calendar ID. Use 'primary' for the user's primary calendar, or the external ID of a connected calendar.",
            schema: { default: 'primary', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListUnifiedCalendarEventsOutputSchema } },
    },
  },
})

export const postV2CalendarsCalendarEventsRoute = createRoute({
  method: 'post',
  path: '/v2/calendars/{calendar}/events',
  tags: ['Cal Unified Calendars'],
  summary: 'Create a calendar event',
  description:
    "Create a new event on the authenticated user's calendar. Currently only Google Calendar is supported.",
  operationId: 'CalUnifiedCalendarsController_createCalendarEvent',
  request: {
    params: z.object({
      calendar: z
        .enum(['google', 'office365', 'apple'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google', 'office365', 'apple'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUnifiedCalendarEventInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: GetUnifiedCalendarEventOutputSchema } },
    },
  },
})

export const getV2CalendarsCalendarFreebusyRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/freebusy',
  tags: ['Cal Unified Calendars'],
  summary: 'Get free/busy times',
  description:
    "Get busy time slots for the authenticated user's selected calendars in the given date range. Currently only Google Calendar is supported.",
  operationId: 'CalUnifiedCalendarsController_getFreeBusy',
  request: {
    params: z.object({
      calendar: z
        .enum(['google', 'office365', 'apple'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['google', 'office365', 'apple'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            name: 'from',
            required: true,
            in: 'query',
            description: 'Start of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-10', type: 'string' },
          },
          example: '2026-03-10',
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            required: true,
            in: 'query',
            description: 'End of the date range (ISO 8601 date or date-time)',
            schema: { example: '2026-03-10', type: 'string' },
          },
          example: '2026-03-10',
        }),
      timeZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeZone',
            required: false,
            in: 'query',
            description: 'IANA time zone (e.g. America/New_York)',
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GetBusyTimesOutputSchema } } },
  },
})

export const postV2CalendarsIcsFeedSaveRoute = createRoute({
  method: 'post',
  path: '/v2/calendars/ics-feed/save',
  tags: ['Calendars'],
  summary: 'Save an ICS feed',
  operationId: 'CalendarsController_createIcsFeed',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateIcsFeedInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateIcsFeedOutputResponseDtoSchema } },
    },
  },
})

export const getV2CalendarsIcsFeedCheckRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/ics-feed/check',
  tags: ['Calendars'],
  summary: 'Check an ICS feed',
  operationId: 'CalendarsController_checkIcsFeed',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV2CalendarsBusyTimesRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/busy-times',
  tags: ['Calendars'],
  summary: 'Get busy times',
  description:
    'Get busy times from a calendar. Example request URL is `https://api.cal.com/v2/calendars/busy-times?timeZone=Europe%2FMadrid&dateFrom=2024-12-18&dateTo=2024-12-18&calendarsToLoad[0][credentialId]=135&calendarsToLoad[0][externalId]=skrauciz%40gmail.com`. Note: loggedInUsersTz is deprecated, use timeZone instead.',
  operationId: 'CalendarsController_getBusyTimes',
  request: {
    query: z.object({
      loggedInUsersTz: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'loggedInUsersTz',
            required: false,
            in: 'query',
            deprecated: true,
            description:
              'Deprecated: Use timeZone instead. The timezone of the user represented as a string',
            schema: { example: 'America/New_York', type: 'string' },
          },
          example: 'America/New_York',
        }),
      timeZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeZone',
            required: false,
            in: 'query',
            description: 'The timezone for the busy times query represented as a string',
            schema: { example: 'America/New_York', type: 'string' },
          },
          example: 'America/New_York',
        }),
      dateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dateFrom',
            required: false,
            in: 'query',
            description: 'The starting date for the busy times query',
            schema: { example: '2023-10-01', type: 'string' },
          },
          example: '2023-10-01',
        }),
      dateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dateTo',
            required: false,
            in: 'query',
            description: 'The ending date for the busy times query',
            schema: { example: '2023-10-31', type: 'string' },
          },
          example: '2023-10-31',
        }),
      credentialId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'credentialId', in: 'query', required: true, schema: { type: 'number' } },
        }),
      externalId: z
        .string()
        .openapi({
          param: { name: 'externalId', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GetBusyTimesOutputSchema } } },
  },
})

export const getV2CalendarsRoute = createRoute({
  method: 'get',
  path: '/v2/calendars',
  tags: ['Calendars'],
  summary: 'Get all calendars',
  operationId: 'CalendarsController_getCalendars',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ConnectedCalendarsOutputSchema } },
    },
  },
})

export const getV2CalendarsCalendarConnectRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/connect',
  tags: ['Calendars'],
  summary: 'Get OAuth connect URL',
  operationId: 'CalendarsController_redirect',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            required: true,
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      calendar: z
        .enum(['office365', 'google'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['office365', 'google'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      isDryRun: z
        .stringbool()
        .openapi({
          param: { name: 'isDryRun', required: true, in: 'query', schema: { type: 'boolean' } },
        }),
      redir: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'redir',
            required: false,
            in: 'query',
            description: 'Redirect URL after successful calendar authorization.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV2CalendarsCalendarSaveRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/save',
  tags: ['Calendars'],
  summary: 'Save Google or Outlook calendar credentials',
  operationId: 'CalendarsController_save',
  request: {
    query: z.object({
      state: z
        .string()
        .openapi({
          param: { name: 'state', required: true, in: 'query', schema: { type: 'string' } },
        }),
      code: z
        .string()
        .openapi({
          param: { name: 'code', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      calendar: z
        .enum(['office365', 'google'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['office365', 'google'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postV2CalendarsCalendarCredentialsRoute = createRoute({
  method: 'post',
  path: '/v2/calendars/{calendar}/credentials',
  tags: ['Calendars'],
  summary: 'Save Apple calendar credentials',
  operationId: 'CalendarsController_syncCredentials',
  request: {
    params: z.object({
      calendar: z
        .literal('apple')
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['apple'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCalendarCredentialsInputSchema } },
      required: true,
    },
  },
  responses: { 201: { description: '' } },
})

export const getV2CalendarsCalendarCheckRoute = createRoute({
  method: 'get',
  path: '/v2/calendars/{calendar}/check',
  tags: ['Calendars'],
  summary: 'Check a calendar connection',
  operationId: 'CalendarsController_check',
  request: {
    params: z.object({
      calendar: z
        .enum(['apple', 'google', 'office365'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['apple', 'google', 'office365'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postV2CalendarsCalendarDisconnectRoute = createRoute({
  method: 'post',
  path: '/v2/calendars/{calendar}/disconnect',
  tags: ['Calendars'],
  summary: 'Disconnect a calendar',
  operationId: 'CalendarsController_deleteCalendarCredentials',
  request: {
    params: z.object({
      calendar: z
        .enum(['apple', 'google', 'office365'])
        .openapi({
          param: {
            name: 'calendar',
            required: true,
            in: 'path',
            schema: { enum: ['apple', 'google', 'office365'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCalendarCredentialsInputBodyDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: DeletedCalendarCredentialsOutputResponseDtoSchema },
      },
    },
  },
})

export const postV2ConferencingAppConnectRoute = createRoute({
  method: 'post',
  path: '/v2/conferencing/{app}/connect',
  tags: ['Conferencing'],
  summary: 'Connect your conferencing application',
  operationId: 'ConferencingController_connect',
  request: {
    params: z.object({
      app: z
        .literal('google-meet')
        .openapi({
          param: {
            name: 'app',
            required: true,
            in: 'path',
            description: 'Conferencing application type',
            schema: { enum: ['google-meet'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ConferencingAppOutputResponseDtoSchema } },
    },
  },
})

export const getV2ConferencingAppOauthAuthUrlRoute = createRoute({
  method: 'get',
  path: '/v2/conferencing/{app}/oauth/auth-url',
  tags: ['Conferencing'],
  summary: 'Get OAuth conferencing app auth URL',
  operationId: 'ConferencingController_redirect',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            required: true,
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      app: z
        .enum(['zoom', 'msteams'])
        .openapi({
          param: {
            name: 'app',
            required: true,
            in: 'path',
            description: 'Conferencing application type',
            schema: { enum: ['zoom', 'msteams'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      returnTo: z
        .string()
        .openapi({
          param: { name: 'returnTo', required: true, in: 'query', schema: { type: 'string' } },
        }),
      onErrorReturnTo: z
        .string()
        .openapi({
          param: {
            name: 'onErrorReturnTo',
            required: true,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetConferencingAppsOauthUrlResponseDtoSchema } },
    },
  },
})

export const getV2ConferencingAppOauthCallbackRoute = createRoute({
  method: 'get',
  path: '/v2/conferencing/{app}/oauth/callback',
  tags: ['Conferencing'],
  summary: 'Conferencing app OAuth callback',
  operationId: 'ConferencingController_save',
  request: {
    query: z.object({
      state: z
        .string()
        .openapi({
          param: { name: 'state', required: true, in: 'query', schema: { type: 'string' } },
        }),
      code: z
        .string()
        .openapi({
          param: { name: 'code', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      app: z
        .enum(['zoom', 'msteams'])
        .openapi({
          param: {
            name: 'app',
            required: true,
            in: 'path',
            description: 'Conferencing application type',
            schema: { enum: ['zoom', 'msteams'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV2ConferencingRoute = createRoute({
  method: 'get',
  path: '/v2/conferencing',
  tags: ['Conferencing'],
  summary: 'List your conferencing applications',
  operationId: 'ConferencingController_listInstalledConferencingApps',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ConferencingAppsOutputResponseDtoSchema } },
    },
  },
})

export const postV2ConferencingAppDefaultRoute = createRoute({
  method: 'post',
  path: '/v2/conferencing/{app}/default',
  tags: ['Conferencing'],
  summary: 'Set your default conferencing application',
  operationId: 'ConferencingController_default',
  request: {
    params: z.object({
      app: z
        .enum(['google-meet', 'zoom', 'msteams', 'daily-video'])
        .openapi({
          param: {
            name: 'app',
            required: true,
            in: 'path',
            description: 'Conferencing application type',
            schema: { enum: ['google-meet', 'zoom', 'msteams', 'daily-video'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SetDefaultConferencingAppOutputResponseDtoSchema } },
    },
  },
})

export const getV2ConferencingDefaultRoute = createRoute({
  method: 'get',
  path: '/v2/conferencing/default',
  tags: ['Conferencing'],
  summary: 'Get your default conferencing application',
  operationId: 'ConferencingController_getDefault',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetDefaultConferencingAppOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2ConferencingAppDisconnectRoute = createRoute({
  method: 'delete',
  path: '/v2/conferencing/{app}/disconnect',
  tags: ['Conferencing'],
  summary: 'Disconnect your conferencing application',
  operationId: 'ConferencingController_disconnect',
  request: {
    params: z.object({
      app: z
        .enum(['google-meet', 'zoom', 'msteams'])
        .openapi({
          param: {
            name: 'app',
            required: true,
            in: 'path',
            description: 'Conferencing application type',
            schema: { enum: ['google-meet', 'zoom', 'msteams'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DisconnectConferencingAppOutputResponseDtoSchema } },
    },
  },
})

export const getV2OauthClientsClientIdUsersRoute = createRoute({
  method: 'get',
  path: '/v2/oauth-clients/{clientId}/users',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Get all managed users',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientUsersController_getManagedUsers',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'The number of items to return',
            schema: { example: 10, type: 'number' },
          },
          example: 10,
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The number of items to skip',
            schema: { example: 0, type: 'number' },
          },
          example: 0,
        }),
      emails: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'emails',
            required: false,
            in: 'query',
            description:
              'Filter managed users by email. If you want to filter by multiple emails, separate them with a comma.',
            schema: {
              example: '?emails=email1@example.com,email2@example.com',
              type: 'array',
              items: { type: 'string' },
            },
          },
          example: '?emails=email1@example.com,email2@example.com',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetManagedUsersOutputSchema } },
    },
  },
})

export const postV2OauthClientsClientIdUsersRoute = createRoute({
  method: 'post',
  path: '/v2/oauth-clients/{clientId}/users',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Create a managed user',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientUsersController_createUser',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateManagedUserInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateManagedUserOutputSchema } },
    },
  },
})

export const getV2OauthClientsClientIdUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/oauth-clients/{clientId}/users/{userId}',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Get a managed user',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientUsersController_getUserById',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'userId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetManagedUserOutputSchema } },
    },
  },
})

export const deleteV2OauthClientsClientIdUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v2/oauth-clients/{clientId}/users/{userId}',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Delete a managed user',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientUsersController_deleteUser',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'userId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetManagedUserOutputSchema } },
    },
  },
})

export const patchV2OauthClientsClientIdUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/v2/oauth-clients/{clientId}/users/{userId}',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Update a managed user',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientUsersController_updateUser',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'userId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateManagedUserInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetManagedUserOutputSchema } },
    },
  },
})

export const postV2OauthClientsClientIdUsersUserIdForceRefreshRoute = createRoute({
  method: 'post',
  path: '/v2/oauth-clients/{clientId}/users/{userId}/force-refresh',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Force refresh tokens',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning> If you have lost managed user access or refresh token, then you can get new ones by using OAuth credentials. Access token is valid for 60 minutes and refresh token for 1 year. Make sure to store them in your database, for example, in your User database model `calAccessToken` and `calRefreshToken` fields.\nResponse also contains `accessTokenExpiresAt` and `refreshTokenExpiresAt` fields, but if you decode the jwt token the payload will contain `clientId` (OAuth client ID), `ownerId` (user to whom token belongs ID), `iat` (issued at time) and `expiresAt` (when does the token expire) fields.',
  operationId: 'OAuthClientUsersController_forceRefresh',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'userId', required: true, in: 'path', schema: { type: 'number' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: KeysResponseDtoSchema } } },
  },
})

export const postV2OauthClientIdRefreshRoute = createRoute({
  method: 'post',
  path: '/v2/oauth/{clientId}/refresh',
  tags: ['Deprecated: Platform / Managed Users'],
  summary: 'Refresh managed user tokens',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning> If managed user access token is expired then get a new one using this endpoint - it will also refresh the refresh token, because we use\n    "refresh token rotation" mechanism. Access token is valid for 60 minutes and refresh token for 1 year. Make sure to store them in your database, for example, in your User database model `calAccessToken` and `calRefreshToken` fields.\nResponse also contains `accessTokenExpiresAt` and `refreshTokenExpiresAt` fields, but if you decode the jwt token the payload will contain `clientId` (OAuth client ID), `ownerId` (user to whom token belongs ID), `iat` (issued at time) and `expiresAt` (when does the token expire) fields.',
  operationId: 'OAuthFlowController_refreshTokens',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            required: true,
            in: 'header',
            description: 'OAuth client secret key.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RefreshTokenInputSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: KeysResponseDtoSchema } } },
  },
})

export const getV2OauthClientsClientIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/v2/oauth-clients/{clientId}/webhooks',
  tags: ['Deprecated: Platform / Webhooks'],
  summary: 'Get all webhooks',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientWebhooksController_getOAuthClientWebhooks',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(250),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            name: 'take',
            required: false,
            in: 'query',
            description: 'Maximum number of items to return',
            schema: { minimum: 1, maximum: 250, default: 250, example: 25, type: 'number' },
          },
          example: 25,
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            required: false,
            in: 'query',
            description: 'Number of items to skip',
            schema: { minimum: 0, default: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OAuthClientWebhooksOutputResponseDtoSchema } },
    },
  },
})

export const postV2OauthClientsClientIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/v2/oauth-clients/{clientId}/webhooks',
  tags: ['Deprecated: Platform / Webhooks'],
  summary: 'Create a webhook',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientWebhooksController_createOAuthClientWebhook',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWebhookInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: OAuthClientWebhookOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2OauthClientsClientIdWebhooksRoute = createRoute({
  method: 'delete',
  path: '/v2/oauth-clients/{clientId}/webhooks',
  tags: ['Deprecated: Platform / Webhooks'],
  summary: 'Delete all webhooks',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientWebhooksController_deleteAllOAuthClientWebhooks',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteManyWebhooksOutputResponseDtoSchema } },
    },
  },
})

export const getV2OauthClientsClientIdWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v2/oauth-clients/{clientId}/webhooks/{webhookId}',
  tags: ['Deprecated: Platform / Webhooks'],
  summary: 'Get a webhook',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientWebhooksController_getOAuthClientWebhook',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OAuthClientWebhookOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2OauthClientsClientIdWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v2/oauth-clients/{clientId}/webhooks/{webhookId}',
  tags: ['Deprecated: Platform / Webhooks'],
  summary: 'Delete a webhook',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientWebhooksController_deleteOAuthClientWebhook',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OAuthClientWebhookOutputResponseDtoSchema } },
    },
  },
})

export const patchV2OauthClientsClientIdWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/v2/oauth-clients/{clientId}/webhooks/{webhookId}',
  tags: ['Deprecated: Platform / Webhooks'],
  summary: 'Update a webhook',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientWebhooksController_updateOAuthClientWebhook',
  request: {
    headers: z.object({
      'x-cal-secret-key': z
        .string()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'OAuth client secret key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OAuthClientWebhookOutputResponseDtoSchema } },
    },
  },
})

export const getV2OauthClientsRoute = createRoute({
  method: 'get',
  path: '/v2/oauth-clients',
  tags: ['Deprecated: Platform OAuth Clients'],
  summary: 'Get all OAuth clients',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientsController_getOAuthClients',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetOAuthClientsResponseDtoSchema } },
    },
  },
})

export const postV2OauthClientsRoute = createRoute({
  method: 'post',
  path: '/v2/oauth-clients',
  tags: ['Deprecated: Platform OAuth Clients'],
  summary: 'Create an OAuth client',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientsController_createOAuthClient',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOAuthClientInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Create an OAuth client',
      content: { 'application/json': { schema: CreateOAuthClientResponseDtoSchema } },
    },
  },
})

export const getV2OauthClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/v2/oauth-clients/{clientId}',
  tags: ['Deprecated: Platform OAuth Clients'],
  summary: 'Get an OAuth client',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientsController_getOAuthClientById',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetOAuthClientResponseDtoSchema } },
    },
  },
})

export const deleteV2OauthClientsClientIdRoute = createRoute({
  method: 'delete',
  path: '/v2/oauth-clients/{clientId}',
  tags: ['Deprecated: Platform OAuth Clients'],
  summary: 'Delete an OAuth client',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientsController_deleteOAuthClient',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetOAuthClientResponseDtoSchema } },
    },
  },
})

export const patchV2OauthClientsClientIdRoute = createRoute({
  method: 'patch',
  path: '/v2/oauth-clients/{clientId}',
  tags: ['Deprecated: Platform OAuth Clients'],
  summary: 'Update an OAuth client',
  description:
    '<Warning>These endpoints are deprecated and will be removed in the future.</Warning>',
  operationId: 'OAuthClientsController_updateOAuthClient',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOAuthClientInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetOAuthClientResponseDtoSchema } },
    },
  },
})

export const putV2DestinationCalendarsRoute = createRoute({
  method: 'put',
  path: '/v2/destination-calendars',
  tags: ['Destination Calendars'],
  summary: 'Update destination calendars',
  operationId: 'DestinationCalendarsController_updateDestinationCalendars',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DestinationCalendarsInputBodyDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DestinationCalendarsOutputResponseDtoSchema } },
    },
  },
})

export const getV2EventTypesRoute = createRoute({
  method: 'get',
  path: '/v2/event-types',
  tags: ['Event Types'],
  summary: 'Get all event types',
  description:
    'Hidden event types are returned only if authentication is provided and it belongs to the event type owner.\n      \n      Use the optional `sortCreatedAt` query parameter to order results by creation date (by ID). Accepts "asc" (oldest first) or "desc" (newest first). When not provided, no explicit ordering is applied.\n      \n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ',
  operationId: 'EventTypesController_2024_06_14_getEventTypes',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-06-14')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-14' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-secret-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-secret-key',
            in: 'header',
            description: 'For platform customers - OAuth client secret key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            required: false,
            in: 'query',
            description:
              'The username of the user to get event types for. If only username provided will get all event types.',
            schema: { type: 'string' },
          },
        }),
      eventSlug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'eventSlug',
            required: false,
            in: 'query',
            description:
              'Slug of event type to return. Notably, if eventSlug is provided then username must be provided too, because multiple users can have event with same slug.',
            schema: { type: 'string' },
          },
        }),
      usernames: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'usernames',
            required: false,
            in: 'query',
            description:
              'Get dynamic event type for multiple usernames separated by comma. e.g `usernames=alice,bob`',
            schema: { type: 'string' },
          },
        }),
      orgSlug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orgSlug',
            required: false,
            in: 'query',
            description:
              "slug of the user's organization if he is in one, orgId is not required if using this parameter",
            schema: { type: 'string' },
          },
        }),
      orgId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'orgId',
            required: false,
            in: 'query',
            description:
              'ID of the organization of the user you want the get the event-types of, orgSlug is not needed when using this parameter',
            schema: { type: 'number' },
          },
        }),
      sortCreatedAt: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortCreatedAt',
            required: false,
            in: 'query',
            description:
              'Sort event types by creation date. When not provided, no explicit ordering is applied.',
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetEventTypesOutput_2024_06_14Schema } },
    },
  },
})

export const postV2EventTypesRoute = createRoute({
  method: 'post',
  path: '/v2/event-types',
  tags: ['Event Types'],
  summary: 'Create an event type',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'EventTypesController_2024_06_14_createEventType',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-06-14')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-14' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEventTypeInput_2024_06_14Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateEventTypeOutput_2024_06_14Schema } },
    },
  },
})

export const getV2EventTypesEventTypeIdRoute = createRoute({
  method: 'get',
  path: '/v2/event-types/{eventTypeId}',
  tags: ['Event Types'],
  summary: 'Get an event type',
  description:
    "<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    \n    Access control: This endpoint fetches an event type by ID and returns it only if the authenticated user is authorized. Authorization is granted to:\n    - System admins\n    - The event type owner\n    - Hosts of the event type or users assigned to the event type\n    - Team admins/owners of the team that owns the team event type\n    - Organization admins/owners of the event type owner's organization\n    - Organization admins/owners of the team's parent organization\n\n    Note: Update and delete endpoints remain restricted to the event type owner only.",
  operationId: 'EventTypesController_2024_06_14_getEventTypeById',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-06-14')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-14' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      eventTypeId: z
        .string()
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetEventTypeOutput_2024_06_14Schema } },
    },
  },
})

export const deleteV2EventTypesEventTypeIdRoute = createRoute({
  method: 'delete',
  path: '/v2/event-types/{eventTypeId}',
  tags: ['Event Types'],
  summary: 'Delete an event type',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'EventTypesController_2024_06_14_deleteEventType',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-06-14')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-14' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteEventTypeOutput_2024_06_14Schema } },
    },
  },
})

export const patchV2EventTypesEventTypeIdRoute = createRoute({
  method: 'patch',
  path: '/v2/event-types/{eventTypeId}',
  tags: ['Event Types'],
  summary: 'Update an event type',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'EventTypesController_2024_06_14_updateEventType',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-06-14')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-14' },
          },
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEventTypeInput_2024_06_14Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateEventTypeOutput_2024_06_14Schema } },
    },
  },
})

export const getV2EventTypesEventTypeIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/v2/event-types/{eventTypeId}/webhooks',
  tags: ['Event Types / Webhooks'],
  summary: 'Get all webhooks',
  operationId: 'EventTypeWebhooksController_getEventTypeWebhooks',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    query: z.object({
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(250),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            name: 'take',
            required: false,
            in: 'query',
            description: 'Maximum number of items to return',
            schema: { minimum: 1, maximum: 250, default: 250, example: 25, type: 'number' },
          },
          example: 25,
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            required: false,
            in: 'query',
            description: 'Number of items to skip',
            schema: { minimum: 0, default: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EventTypeWebhooksOutputResponseDtoSchema } },
    },
  },
})

export const postV2EventTypesEventTypeIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/v2/event-types/{eventTypeId}/webhooks',
  tags: ['Event Types / Webhooks'],
  summary: 'Create a webhook',
  operationId: 'EventTypeWebhooksController_createEventTypeWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWebhookInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: EventTypeWebhookOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2EventTypesEventTypeIdWebhooksRoute = createRoute({
  method: 'delete',
  path: '/v2/event-types/{eventTypeId}/webhooks',
  tags: ['Event Types / Webhooks'],
  summary: 'Delete all webhooks',
  operationId: 'EventTypeWebhooksController_deleteAllEventTypeWebhooks',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteManyWebhooksOutputResponseDtoSchema } },
    },
  },
})

export const getV2EventTypesEventTypeIdWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v2/event-types/{eventTypeId}/webhooks/{webhookId}',
  tags: ['Event Types / Webhooks'],
  summary: 'Get a webhook',
  operationId: 'EventTypeWebhooksController_getEventTypeWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EventTypeWebhookOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v2/event-types/{eventTypeId}/webhooks/{webhookId}',
  tags: ['Event Types / Webhooks'],
  summary: 'Delete a webhook',
  operationId: 'EventTypeWebhooksController_deleteEventTypeWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EventTypeWebhookOutputResponseDtoSchema } },
    },
  },
})

export const patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/v2/event-types/{eventTypeId}/webhooks/{webhookId}',
  tags: ['Event Types / Webhooks'],
  summary: 'Update a webhook',
  operationId: 'EventTypeWebhooksController_updateEventTypeWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EventTypeWebhookOutputResponseDtoSchema } },
    },
  },
})

export const getV2EventTypesEventTypeIdPrivateLinksRoute = createRoute({
  method: 'get',
  path: '/v2/event-types/{eventTypeId}/private-links',
  tags: ['Event Types Private Links'],
  summary: 'Get all private links for an event type',
  operationId: 'EventTypesPrivateLinksController_getPrivateLinks',
  request: {
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetPrivateLinksOutputSchema } },
    },
  },
})

export const postV2EventTypesEventTypeIdPrivateLinksRoute = createRoute({
  method: 'post',
  path: '/v2/event-types/{eventTypeId}/private-links',
  tags: ['Event Types Private Links'],
  summary: 'Create a private link for an event type',
  operationId: 'EventTypesPrivateLinksController_createPrivateLink',
  request: {
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePrivateLinkInputSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreatePrivateLinkOutputSchema } },
    },
  },
})

export const deleteV2EventTypesEventTypeIdPrivateLinksLinkIdRoute = createRoute({
  method: 'delete',
  path: '/v2/event-types/{eventTypeId}/private-links/{linkId}',
  tags: ['Event Types Private Links'],
  summary: 'Delete a private link for an event type',
  operationId: 'EventTypesPrivateLinksController_deletePrivateLink',
  request: {
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
      linkId: z
        .string()
        .openapi({
          param: { name: 'linkId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeletePrivateLinkOutputSchema } },
    },
  },
})

export const patchV2EventTypesEventTypeIdPrivateLinksLinkIdRoute = createRoute({
  method: 'patch',
  path: '/v2/event-types/{eventTypeId}/private-links/{linkId}',
  tags: ['Event Types Private Links'],
  summary: 'Update a private link for an event type',
  operationId: 'EventTypesPrivateLinksController_updatePrivateLink',
  request: {
    params: z.object({
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'eventTypeId', required: true, in: 'path', schema: { type: 'number' } },
        }),
      linkId: z
        .string()
        .openapi({
          param: { name: 'linkId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePrivateLinkBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdatePrivateLinkOutputSchema } },
    },
  },
})

export const getV2MeRoute = createRoute({
  method: 'get',
  path: '/v2/me',
  tags: ['Me'],
  summary: 'Get my profile',
  operationId: 'MeController_getMe',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GetMeOutputSchema } } },
  },
})

export const patchV2MeRoute = createRoute({
  method: 'patch',
  path: '/v2/me',
  tags: ['Me'],
  summary: 'Update my profile',
  description:
    "Updates the authenticated user's profile. Email changes require verification and the primary email stays unchanged until verification completes, unless the new email is already a verified secondary email or the user is platform-managed.",
  operationId: 'MeController_updateMe',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateManagedUserInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UpdateMeOutputSchema } } },
  },
})

export const getV2AuthOauth2ClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/v2/auth/oauth2/clients/{clientId}',
  tags: ['OAuth2'],
  summary: 'Get OAuth2 client',
  description: 'Returns the OAuth2 client information for the given client ID',
  operationId: 'OAuth2Controller_getClient',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: { name: 'clientId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OAuth2ClientResponseDtoSchema } },
    },
  },
})

export const postV2AuthOauth2TokenRoute = createRoute({
  method: 'post',
  path: '/v2/auth/oauth2/token',
  tags: ['OAuth2'],
  summary: 'Exchange authorization code or refresh token for tokens',
  description:
    "RFC 6749-compliant token endpoint. Pass client_id in the request body (Section 2.3.1). Use grant_type 'authorization_code' to exchange an auth code for tokens, or 'refresh_token' to refresh an access token. Accepts both application/x-www-form-urlencoded (standard per RFC 6749 Section 4.1.3) and application/json content types.",
  operationId: 'OAuth2Controller_token',
  request: {
    body: {
      description:
        "Token request body. client_id is required. Accepts application/x-www-form-urlencoded (RFC 6749 standard) or application/json. Use grant_type 'authorization_code' with client_secret (confidential) or code_verifier (public/PKCE), or grant_type 'refresh_token' with client_secret (confidential) or just the refresh_token (public).",
      content: {
        'application/json': {
          schema: z.xor([
            OAuth2ExchangeConfidentialInputSchema,
            OAuth2ExchangePublicInputSchema,
            OAuth2RefreshConfidentialInputSchema,
            OAuth2RefreshPublicInputSchema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: OAuth2TokensDtoSchema } } },
  },
})

export const getV2SchedulesRoute = createRoute({
  method: 'get',
  path: '/v2/schedules',
  tags: ['Schedules'],
  summary: 'Get all schedules',
  description:
    'Get all schedules of the authenticated user.\n    \n     <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'SchedulesController_2024_06_11_getSchedules',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cal-api-version': z
        .string()
        .default('2024-06-11')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-11' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetSchedulesOutput_2024_06_11Schema } },
    },
  },
})

export const postV2SchedulesRoute = createRoute({
  method: 'post',
  path: '/v2/schedules',
  tags: ['Schedules'],
  summary: 'Create a schedule',
  description:
    '\n      Create a schedule for the authenticated user.\n\n      The point of creating schedules is for event types to be available at specific times.\n\n      The first goal of schedules is to have a default schedule. If you are platform customer and created managed users, then it is important to note that each managed user should have a default schedule.\n      1. If you passed `timeZone` when creating managed user, then the default schedule from Monday to Friday from 9AM to 5PM will be created with that timezone. The managed user can then change the default schedule via the `AvailabilitySettings` atom.\n      2. If you did not, then we assume you want the user to have this specific schedule right away. You should create a default schedule by specifying\n      `"isDefault": true` in the request body. Until the user has a default schedule the user can\'t be booked nor manage their schedule via the AvailabilitySettings atom.\n\n      The second goal of schedules is to create another schedule that event types can point to. This is useful for when an event is booked because availability is not checked against the default schedule but instead against that specific schedule.\n      After creating a non-default schedule, you can update an event type to point to that schedule via the PATCH `event-types/{eventTypeId}` endpoint.\n\n      When specifying start time and end time for each day use the 24 hour format e.g. 08:00, 15:00 etc.\n\n      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ',
  operationId: 'SchedulesController_2024_06_11_createSchedule',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cal-api-version': z
        .string()
        .default('2024-06-11')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-11' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateScheduleInput_2024_06_11Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateScheduleOutput_2024_06_11Schema } },
    },
  },
})

export const getV2SchedulesDefaultRoute = createRoute({
  method: 'get',
  path: '/v2/schedules/default',
  tags: ['Schedules'],
  summary: 'Get default schedule',
  description:
    'Get the default schedule of the authenticated user.\n    \n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n    ',
  operationId: 'SchedulesController_2024_06_11_getDefaultSchedule',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cal-api-version': z
        .string()
        .default('2024-06-11')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-11' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetDefaultScheduleOutput_2024_06_11Schema } },
    },
  },
})

export const getV2SchedulesScheduleIdRoute = createRoute({
  method: 'get',
  path: '/v2/schedules/{scheduleId}',
  tags: ['Schedules'],
  summary: 'Get a schedule',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'SchedulesController_2024_06_11_getSchedule',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cal-api-version': z
        .string()
        .default('2024-06-11')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-11' },
          },
        }),
    }),
    params: z.object({
      scheduleId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'scheduleId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetScheduleOutput_2024_06_11Schema } },
    },
  },
})

export const deleteV2SchedulesScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/v2/schedules/{scheduleId}',
  tags: ['Schedules'],
  summary: 'Delete a schedule',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'SchedulesController_2024_06_11_deleteSchedule',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cal-api-version': z
        .string()
        .default('2024-06-11')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-11' },
          },
        }),
    }),
    params: z.object({
      scheduleId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { name: 'scheduleId', required: true, in: 'path', schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteScheduleOutput_2024_06_11Schema } },
    },
  },
})

export const patchV2SchedulesScheduleIdRoute = createRoute({
  method: 'patch',
  path: '/v2/schedules/{scheduleId}',
  tags: ['Schedules'],
  summary: 'Update a schedule',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'SchedulesController_2024_06_11_updateSchedule',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cal-api-version': z
        .string()
        .default('2024-06-11')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-06-11' },
          },
        }),
    }),
    params: z.object({
      scheduleId: z
        .string()
        .openapi({
          param: { name: 'scheduleId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateScheduleInput_2024_06_11Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateScheduleOutput_2024_06_11Schema } },
    },
  },
})

export const postV2SelectedCalendarsRoute = createRoute({
  method: 'post',
  path: '/v2/selected-calendars',
  tags: ['Selected Calendars'],
  summary: 'Add a selected calendar',
  operationId: 'SelectedCalendarsController_addSelectedCalendar',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SelectedCalendarsInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SelectedCalendarOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2SelectedCalendarsRoute = createRoute({
  method: 'delete',
  path: '/v2/selected-calendars',
  tags: ['Selected Calendars'],
  summary: 'Delete a selected calendar',
  operationId: 'SelectedCalendarsController_deleteSelectedCalendar',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      integration: z
        .string()
        .openapi({
          param: { name: 'integration', required: true, in: 'query', schema: { type: 'string' } },
        }),
      externalId: z
        .string()
        .openapi({
          param: { name: 'externalId', required: true, in: 'query', schema: { type: 'string' } },
        }),
      credentialId: z
        .string()
        .openapi({
          param: { name: 'credentialId', required: true, in: 'query', schema: { type: 'string' } },
        }),
      delegationCredentialId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'delegationCredentialId',
            required: false,
            in: 'query',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SelectedCalendarOutputResponseDtoSchema } },
    },
  },
})

export const getV2SlotsRoute = createRoute({
  method: 'get',
  path: '/v2/slots',
  tags: ['Slots'],
  summary: 'Get available time slots for an event type',
  description:
    "\n      There are 4 ways to get available slots for event type of an individual user:\n\n      1. By event type id. Example '/v2/slots?eventTypeId=10&start=2050-09-05&end=2050-09-06&timeZone=Europe/Rome'\n\n      2. By event type slug + username. Example '/v2/slots?eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'\n\n      3. By event type slug + username + organization slug when searching within an organization. Example '/v2/slots?organizationSlug=org-slug&eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'\n\n      4. By usernames only (used for dynamic event type - there is no specific event but you want to know when 2 or more people are available). Example '/v2/slots?usernames=alice,bob&username=bob&organizationSlug=org-slug&start=2050-09-05&end=2050-09-06'. As you see you also need to provide the slug of the organization to which each user in the 'usernames' array belongs.\n\n      And 3 ways to get available slots for team event type:\n\n      1. By team event type id. Example '/v2/slots?eventTypeId=10&start=2050-09-05&end=2050-09-06&timeZone=Europe/Rome'.\n         **Note for managed event types**: Managed event types are templates that create individual child event types for each team member. You cannot fetch slots for the parent managed event type directly. Instead, you must:\n         - Find the child event type IDs (the ones assigned to specific users)\n         - Use those child event type IDs to fetch slots as individual user event types using as described in the individual user section above.\n\n      2. By team event type slug + team slug. Example '/v2/slots?eventTypeSlug=intro&teamSlug=team-slug&start=2050-09-05&end=2050-09-06'\n\n      3. By team event type slug + team slug + organization slug when searching within an organization. Example '/v2/slots?organizationSlug=org-slug&eventTypeSlug=intro&teamSlug=team-slug&start=2050-09-05&end=2050-09-06'\n\n      All of them require \"start\" and \"end\" query parameters which define the time range for which available slots should be checked.\n      Optional parameters are:\n      - timeZone: Time zone in which the available slots should be returned. Defaults to UTC.\n      - duration: Only use for event types that allow multiple durations or for dynamic event types. If not passed for multiple duration event types defaults to default duration. For dynamic event types defaults to 30 aka each returned slot is 30 minutes long. So duration=60 means that returned slots will be each 60 minutes long.\n      - format: Format of the slots. By default return is an object where each key is date and value is array of slots as string. If you want to get start and end of each slot use \"range\" as value.\n      - bookingUidToReschedule: When rescheduling an existing booking, provide the booking's unique identifier to exclude its time slot from busy time calculations. This ensures the original booking time appears as available for rescheduling.\n\n       <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>\n      ",
  operationId: 'SlotsController_2024_09_04_getAvailableSlots',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-09-04')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-09-04' },
          },
        }),
    }),
    query: z.object({
      bookingUidToReschedule: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bookingUidToReschedule',
            required: false,
            in: 'query',
            description:
              'The unique identifier of the booking being rescheduled. When provided will ensure that the original booking time appears within the returned available slots when rescheduling.',
            schema: { example: 'abc123def456', type: 'string' },
          },
          example: 'abc123def456',
        }),
      start: z
        .string()
        .openapi({
          param: {
            name: 'start',
            required: true,
            in: 'query',
            description:
              '\n      Time starting from which available slots should be checked.\n\n      Must be in UTC timezone as ISO 8601 datestring.\n\n      You can pass date without hours which defaults to start of day or specify hours:\n      2024-08-13 (will have hours 00:00:00 aka at very beginning of the date) or you can specify hours manually like 2024-08-13T09:00:00Z.',
            schema: { example: '2050-09-05', type: 'string' },
          },
          example: '2050-09-05',
        }),
      end: z
        .string()
        .openapi({
          param: {
            name: 'end',
            required: true,
            in: 'query',
            description:
              '\n    Time until which available slots should be checked.\n\n    Must be in UTC timezone as ISO 8601 datestring.\n\n    You can pass date without hours which defaults to end of day or specify hours:\n    2024-08-20 (will have hours 23:59:59 aka at the very end of the date) or you can specify hours manually like 2024-08-20T18:00:00Z.',
            schema: { example: '2050-09-06', type: 'string' },
          },
          example: '2050-09-06',
        }),
      organizationSlug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationSlug',
            required: false,
            in: 'query',
            description:
              'The slug of the organization to which user with username belongs or team with teamSlug belongs.',
            schema: { example: 'org-slug', type: 'string' },
          },
          example: 'org-slug',
        }),
      teamSlug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'teamSlug',
            required: false,
            in: 'query',
            description:
              'The slug of the team who owns event type with eventTypeSlug - used when slots are checked for team event type.',
            schema: { example: 'team-slug', type: 'string' },
          },
          example: 'team-slug',
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            required: false,
            in: 'query',
            description:
              'The username of the user who owns event type with eventTypeSlug - used when slots are checked for individual user event type.',
            schema: { example: 'bob', type: 'string' },
          },
          example: 'bob',
        }),
      eventTypeSlug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'eventTypeSlug',
            required: false,
            in: 'query',
            description:
              'The slug of the event type for which available slots should be checked. If slug is provided then username or teamSlug must be provided too and if relevant organizationSlug too.',
            schema: { example: 'event-type-slug', type: 'string' },
          },
          example: 'event-type-slug',
        }),
      eventTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'eventTypeId',
            required: false,
            in: 'query',
            description: 'The ID of the event type for which available slots should be checked.',
            schema: { example: '100', type: 'number' },
          },
          example: '100',
        }),
      usernames: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'usernames',
            required: false,
            in: 'query',
            description:
              'The usernames for which available slots should be checked separated by a comma.\n\n    Checking slots by usernames is used mainly for dynamic events where there is no specific event but we just want to know when 2 or more people are available.\n\n    Must contain at least 2 usernames.',
            schema: { example: 'alice,bob', type: 'string' },
          },
          example: 'alice,bob',
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            required: false,
            in: 'query',
            description:
              "Format of slot times in response. Use 'range' to get start and end times. Use 'time' or omit this query parameter to get only start time.",
            schema: { example: 'range', type: 'string' },
          },
          example: 'range',
        }),
      duration: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'duration',
            required: false,
            in: 'query',
            description:
              'If event type has multiple possible durations then you can specify the desired duration here. Also, if you are fetching slots for a dynamic event then you can specify the duration her which defaults to 30, meaning that returned slots will be each 30 minutes long.',
            schema: { example: '60', type: 'number' },
          },
          example: '60',
        }),
      timeZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeZone',
            required: false,
            in: 'query',
            description:
              'Time zone in which the available slots should be returned. Defaults to UTC.',
            schema: { example: 'Europe/Rome', type: 'string' },
          },
          example: 'Europe/Rome',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A map of available slots indexed by date, where each date is associated with an array of time slots. If format=range is specified, each slot will be an object with start and end properties denoting start and end of the slot.\n      For seated slots each object will have attendeesCount and bookingUid properties.\n      If no slots are available, the data field will be an empty object {}.',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .record(z.string(), z.array(z.string()))
              .openapi({
                title: 'Default format (or with format=time)',
                example: {
                  status: 'success',
                  data: {
                    '2050-09-05': [
                      { start: '2050-09-05T09:00:00.000+02:00' },
                      { start: '2050-09-05T10:00:00.000+02:00' },
                    ],
                    '2050-09-06': [
                      { start: '2050-09-06T09:00:00.000+02:00' },
                      { start: '2050-09-06T10:00:00.000+02:00' },
                    ],
                  },
                },
              }),
            z
              .record(
                z.string(),
                z.array(
                  z
                    .object({ start: z.string().exactOptional(), end: z.string().exactOptional() })
                    .openapi({ required: [] }),
                ),
              )
              .openapi({
                title: 'Range format (when format=range)',
                example: {
                  status: 'success',
                  data: {
                    '2050-09-05': [
                      {
                        start: '2050-09-05T09:00:00.000+02:00',
                        end: '2050-09-05T10:00:00.000+02:00',
                      },
                      {
                        start: '2050-09-05T10:00:00.000+02:00',
                        end: '2050-09-05T11:00:00.000+02:00',
                      },
                    ],
                    '2050-09-06': [
                      {
                        start: '2050-09-06T09:00:00.000+02:00',
                        end: '2050-09-06T10:00:00.000+02:00',
                      },
                      {
                        start: '2050-09-06T10:00:00.000+02:00',
                        end: '2050-09-06T11:00:00.000+02:00',
                      },
                    ],
                  },
                },
              }),
          ]),
        },
      },
    },
  },
})

export const postV2SlotsReservationsRoute = createRoute({
  method: 'post',
  path: '/v2/slots/reservations',
  tags: ['Slots'],
  summary: 'Reserve a slot',
  description:
    'Make a slot not available for others to book for a certain period of time. If you authenticate using oAuth credentials, api key or access token\n    then you can also specify custom duration for how long the slot should be reserved for (defaults to 5 minutes).\n    \n    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>    \n    ',
  operationId: 'SlotsController_2024_09_04_reserveSlot',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-09-04')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-09-04' },
          },
        }),
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-cal-client-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-cal-client-id',
            in: 'header',
            description: 'For platform customers - OAuth client ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReserveSlotInput_2024_09_04Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ReserveSlotOutputResponse_2024_09_04Schema } },
    },
  },
})

export const getV2SlotsReservationsUidRoute = createRoute({
  method: 'get',
  path: '/v2/slots/reservations/{uid}',
  tags: ['Slots'],
  summary: 'Get reserved slot',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'SlotsController_2024_09_04_getReservedSlot',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-09-04')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-09-04' },
          },
        }),
    }),
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { name: 'uid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetReservedSlotOutput_2024_09_04Schema } },
    },
  },
})

export const deleteV2SlotsReservationsUidRoute = createRoute({
  method: 'delete',
  path: '/v2/slots/reservations/{uid}',
  tags: ['Slots'],
  summary: 'Delete a reserved slot',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'SlotsController_2024_09_04_deleteReservedSlot',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-09-04')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-09-04' },
          },
        }),
    }),
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { name: 'uid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.object({}).openapi({ example: { status: 'success' } }) },
      },
    },
  },
})

export const patchV2SlotsReservationsUidRoute = createRoute({
  method: 'patch',
  path: '/v2/slots/reservations/{uid}',
  tags: ['Slots'],
  summary: 'Update a reserved slot',
  description:
    '<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>',
  operationId: 'SlotsController_2024_09_04_updateReservedSlot',
  request: {
    headers: z.object({
      'cal-api-version': z
        .string()
        .default('2024-09-04')
        .openapi({
          param: {
            name: 'cal-api-version',
            in: 'header',
            description:
              'Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.',
            required: true,
            schema: { type: 'string', default: '2024-09-04' },
          },
        }),
    }),
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { name: 'uid', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReserveSlotInput_2024_09_04Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ReserveSlotOutputResponse_2024_09_04Schema } },
    },
  },
})

export const getV2StripeConnectRoute = createRoute({
  method: 'get',
  path: '/v2/stripe/connect',
  tags: ['Stripe'],
  summary: 'Get Stripe connect URL',
  operationId: 'StripeController_redirect',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            required: true,
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: StripConnectOutputResponseDtoSchema } },
    },
  },
})

export const getV2StripeSaveRoute = createRoute({
  method: 'get',
  path: '/v2/stripe/save',
  tags: ['Stripe'],
  summary: 'Save Stripe credentials',
  operationId: 'StripeController_save',
  request: {
    query: z.object({
      state: z
        .string()
        .openapi({
          param: { name: 'state', required: true, in: 'query', schema: { type: 'string' } },
        }),
      code: z
        .string()
        .openapi({
          param: { name: 'code', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: StripCredentialsSaveOutputResponseDtoSchema } },
    },
  },
})

export const getV2StripeCheckRoute = createRoute({
  method: 'get',
  path: '/v2/stripe/check',
  tags: ['Stripe'],
  summary: 'Check Stripe connection',
  operationId: 'StripeController_check',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: StripCredentialsCheckOutputResponseDtoSchema } },
    },
  },
})

export const postV2VerifiedResourcesEmailsVerificationCodeRequestRoute = createRoute({
  method: 'post',
  path: '/v2/verified-resources/emails/verification-code/request',
  tags: ['Verified Resources'],
  summary: 'Request email verification code',
  description: 'Sends a verification code to the email',
  operationId: 'UserVerifiedResourcesController_requestEmailVerificationCode',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestEmailVerificationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RequestEmailVerificationOutputSchema } },
    },
  },
})

export const postV2VerifiedResourcesPhonesVerificationCodeRequestRoute = createRoute({
  method: 'post',
  path: '/v2/verified-resources/phones/verification-code/request',
  tags: ['Verified Resources'],
  summary: 'Request phone number verification code',
  description: 'Sends a verification code to the phone number',
  operationId: 'UserVerifiedResourcesController_requestPhoneVerificationCode',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestPhoneVerificationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RequestPhoneVerificationOutputSchema } },
    },
  },
})

export const postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute = createRoute({
  method: 'post',
  path: '/v2/verified-resources/emails/verification-code/verify',
  tags: ['Verified Resources'],
  summary: 'Verify an email',
  description: 'Use code to verify an email',
  operationId: 'UserVerifiedResourcesController_verifyEmail',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyEmailInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserVerifiedEmailOutputSchema } },
    },
  },
})

export const postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute = createRoute({
  method: 'post',
  path: '/v2/verified-resources/phones/verification-code/verify',
  tags: ['Verified Resources'],
  summary: 'Verify a phone number',
  description: 'Use code to verify a phone number',
  operationId: 'UserVerifiedResourcesController_verifyPhoneNumber',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyPhoneInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserVerifiedPhoneOutputSchema } },
    },
  },
})

export const getV2VerifiedResourcesEmailsRoute = createRoute({
  method: 'get',
  path: '/v2/verified-resources/emails',
  tags: ['Verified Resources'],
  summary: 'Get list of verified emails',
  operationId: 'UserVerifiedResourcesController_getVerifiedEmails',
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(250),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            name: 'take',
            required: false,
            in: 'query',
            description: 'Maximum number of items to return',
            schema: { minimum: 1, maximum: 250, default: 250, example: 25, type: 'number' },
          },
          example: 25,
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            required: false,
            in: 'query',
            description: 'Number of items to skip',
            schema: { minimum: 0, default: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserVerifiedEmailsOutputSchema } },
    },
  },
})

export const getV2VerifiedResourcesPhonesRoute = createRoute({
  method: 'get',
  path: '/v2/verified-resources/phones',
  tags: ['Verified Resources'],
  summary: 'Get list of verified phone numbers',
  operationId: 'UserVerifiedResourcesController_getVerifiedPhoneNumbers',
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(250),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            name: 'take',
            required: false,
            in: 'query',
            description: 'Maximum number of items to return',
            schema: { minimum: 1, maximum: 250, default: 250, example: 25, type: 'number' },
          },
          example: 25,
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            required: false,
            in: 'query',
            description: 'Number of items to skip',
            schema: { minimum: 0, default: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserVerifiedPhonesOutputSchema } },
    },
  },
})

export const getV2VerifiedResourcesEmailsIdRoute = createRoute({
  method: 'get',
  path: '/v2/verified-resources/emails/{id}',
  tags: ['Verified Resources'],
  summary: 'Get verified email by id',
  operationId: 'UserVerifiedResourcesController_getVerifiedEmailById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'number' } } }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserVerifiedEmailOutputSchema } },
    },
  },
})

export const getV2VerifiedResourcesPhonesIdRoute = createRoute({
  method: 'get',
  path: '/v2/verified-resources/phones/{id}',
  tags: ['Verified Resources'],
  summary: 'Get verified phone number by id',
  operationId: 'UserVerifiedResourcesController_getVerifiedPhoneById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'number' } } }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserVerifiedPhoneOutputSchema } },
    },
  },
})

export const getV2WebhooksRoute = createRoute({
  method: 'get',
  path: '/v2/webhooks',
  tags: ['Webhooks'],
  summary: 'Get all webhooks',
  description: 'Gets a paginated list of webhooks for the authenticated user.',
  operationId: 'WebhooksController_getWebhooks',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      take: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(250),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            name: 'take',
            required: false,
            in: 'query',
            description: 'Maximum number of items to return',
            schema: { minimum: 1, maximum: 250, default: 250, example: 25, type: 'number' },
          },
          example: 25,
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            required: false,
            in: 'query',
            description: 'Number of items to skip',
            schema: { minimum: 0, default: 0, example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserWebhooksOutputResponseDtoSchema } },
    },
  },
})

export const postV2WebhooksRoute = createRoute({
  method: 'post',
  path: '/v2/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  operationId: 'WebhooksController_createWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWebhookInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: UserWebhookOutputResponseDtoSchema } },
    },
  },
})

export const getV2WebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v2/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Get a webhook',
  operationId: 'WebhooksController_getWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserWebhookOutputResponseDtoSchema } },
    },
  },
})

export const deleteV2WebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v2/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  operationId: 'WebhooksController_deleteWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserWebhookOutputResponseDtoSchema } },
    },
  },
})

export const patchV2WebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/v2/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  operationId: 'WebhooksController_updateWebhook',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description:
              'value must be `Bearer <token>` where `<token>` is api key prefixed with cal_',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: { name: 'webhookId', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookInputDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserWebhookOutputResponseDtoSchema } },
    },
  },
})
