import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    city: z.string().openapi({ description: 'City name' }),
    country: z.string().openapi({ description: 'Full country name' }),
    country_code: z.string().openapi({ description: 'Two-letter country abbreviation' }),
    state: z.string().openapi({ description: 'State abbreviation' }),
    street: z.string().openapi({ description: 'Street number and name' }),
    type: z.string().openapi({ description: 'Standard Values: HOME, WORK' }),
    zip: z.string().openapi({ description: 'ZIP code' }),
  })
  .openapi({
    example: {
      city: 'Menlo Park',
      country: 'United States',
      country_code: 'us',
      state: 'CA',
      street: '1 Hacker Way',
      type: 'HOME',
      zip: '94025',
    },
    required: ['city', 'country', 'country_code', 'state', 'street', 'type', 'zip'],
    title: 'Address',
  })
  .openapi('Address')

const MediaSchema = z
  .object({
    auto_download: z
      .array(z.enum(['audio', 'document', 'voice', 'video', 'image.']))
      .openapi({
        description: 'An array specifying which types of media to automatically download.',
      }),
  })
  .openapi({
    example: { auto_download: ['image', 'document', 'audio'] },
    required: ['auto_download'],
    title: 'Media',
  })
  .openapi('Media')

const WebhooksSchema = z
  .object({
    max_concurrent_requests: z
      .union([z.literal('6'), z.literal('12'), z.literal('18'), z.literal('24')])
      .exactOptional()
      .openapi({
        description:
          'Configures the maximum number of inflight callback requests that are sent out. Can be set to 6 (default), 12, 18, or 24.',
        default: 6,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inbound and outbound notifications are routed to this URL. A HTTPS-based endpoint is required; HTTP will not work.',
      }),
  })
  .openapi({
    example: { max_concurrent_requests: 12, url: '<Webhook URL, https>' },
    title: 'Webhooks',
    required: [],
  })
  .openapi('Webhooks')

const ApplicationSettingsSchema = z
  .object({
    callback_backoff_delay_ms: z
      .string()
      .default('3000')
      .exactOptional()
      .openapi({
        description:
          'Backoff delay for a failed callback in milliseconds\nThis setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.',
      }),
    callback_persist: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.',
      }),
    heartbeat_interval: z
      .int()
      .default(5)
      .exactOptional()
      .openapi({
        description:
          'Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds',
      }),
    max_callback_backoff_delay_ms: z
      .string()
      .default('900000')
      .exactOptional()
      .openapi({ description: 'Maximum delay for a failed callback in milliseconds' }),
    media: MediaSchema.exactOptional(),
    on_call_pager: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.',
      }),
    pass_through: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.\nWhen messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.",
      }),
    sent_status: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.',
      }),
    unhealthy_interval: z
      .int()
      .default(30)
      .exactOptional()
      .openapi({
        description:
          'Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process.',
      }),
    webhooks: WebhooksSchema.exactOptional(),
  })
  .openapi({
    example: {
      callback_backoff_delay_ms: 3000,
      callback_persist: true,
      max_callback_backoff_delay_ms: 900000,
      media: { auto_download: ['image', 'document', 'audio'] },
      on_call_pager: '<WA_ID of valid WhatsApp contact>',
      pass_through: false,
      sent_status: false,
      webhooks: { max_concurrent_requests: 12, url: '<Webhook URL, https>' },
    },
    title: 'Update-Application-Settings-Request-Body',
    required: [],
  })
  .openapi('ApplicationSettings')

const AudioByIdSchema = z
  .object({ id: z.string() })
  .openapi({ example: { id: '<Media Id, from Media API>' }, required: ['id'], title: 'AudioById' })
  .openapi('AudioById')

const ProviderSchema = z
  .object({ name: z.string() })
  .openapi({
    example: { name: '<Provider Name from Media Provider API, optional' },
    required: ['name'],
    title: 'Provider',
  })
  .openapi('Provider')

const AudioByProviderSchema = z
  .object({ link: z.string(), provider: ProviderSchema })
  .openapi({
    example: {
      link: '<Link to Audio, https>',
      provider: { name: '<Provider Name from Media Provider API, optional' },
    },
    required: ['provider', 'link'],
    title: 'AudioByProvider',
  })
  .openapi('AudioByProvider')

const AudioSchema = z
  .xor([AudioByIdSchema, AudioByProviderSchema])
  .openapi({ description: 'The media object containing audio', title: 'Audio' })
  .openapi('Audio')

const BackupSettingsSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The data that has been backed up, encrypted for security.' }),
  })
  .openapi({
    description: '',
    example: { data: 'encrypted-backup-data' },
    title: 'Root Type for Backup-Settings',
    required: [],
  })
  .openapi('BackupSettings')

const BackupSettingsRequestBodySchema = z
  .object({
    password: z.string().openapi({ description: 'Used to encrypt backup data for security' }),
  })
  .openapi({
    example: { password: '<Password for Backup>' },
    required: ['password'],
    title: 'Backup-Settings-Request',
  })
  .openapi('BackupSettingsRequestBody')

const BackupSettingsResponseSchema = z
  .object({ settings: BackupSettingsSchema.exactOptional() })
  .openapi({
    description:
      'Save the data value as that will be used along with your password to restore the information.',
    example: { settings: { data: 'encrypted-backup-data' } },
    title: 'Root Type for Backup-Settings-Response',
    required: [],
  })
  .openapi('BackupSettingsResponse')

const BasicSchema = z
  .object({ password: z.string().exactOptional(), username: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { password: 'your-password', username: 'your-username' },
    title: 'Root Type for Basic',
    required: [],
  })
  .openapi('Basic')

const BusinessProfileSchema = z
  .object({
    address: z
      .string()
      .openapi({ description: 'Address of the business\nMaximum of 256 characters' }),
    description: z
      .string()
      .openapi({ description: 'Description of the business\nMaximum of 256 characters' }),
    email: z
      .string()
      .openapi({ description: 'Email address to contact the business\nMaximum of 128 characters' }),
    vertical: z
      .string()
      .openapi({ description: 'Industry of the business\nMaximum of 128 characters' }),
    websites: z
      .array(z.string())
      .openapi({
        description:
          'URLs associated with business (e.g., website, Facebook page, Instagram)\nMaximum of 2 websites with a maximum of 256 characters each',
      }),
  })
  .openapi({
    example: {
      address: '<Business Profile Address>',
      description: '<Business Profile Description>',
      email: '<Business Profile Email>',
      vertical: '<Business Profile Vertical>',
      websites: ['https://www.whatsapp.com', 'https://www.facebook.com'],
    },
    required: ['address', 'description', 'email', 'vertical', 'websites'],
    title: 'Set-Business-Profile-Request',
  })
  .openapi('BusinessProfile')

const BusinessSettingsBusinessSchema = z
  .object({ profile: BusinessProfileSchema.exactOptional() })
  .openapi({
    description: '',
    example: {
      profile: {
        address: 'new-business-address',
        description: 'business-description',
        email: 'new-business-email',
        vertical: 'business-industry',
        websites: ['website-1', 'website-2'],
      },
    },
    title: 'Root Type for Business-Settings-Business',
    required: [],
  })
  .openapi('BusinessSettingsBusiness')

const BusinessSettingsSchema = z
  .object({ business: BusinessSettingsBusinessSchema.exactOptional() })
  .openapi({
    description: '',
    example: {
      business: {
        profile: {
          address: 'new-business-address',
          description: 'business-description',
          email: 'new-business-email',
          vertical: 'business-industry',
          websites: ['website-1', 'website-2'],
        },
      },
    },
    title: 'Root Type for Business-Settings',
    required: [],
  })
  .openapi('BusinessSettings')

const CheckContactSchema = z
  .object({
    input: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value you sent in the contacts field of the JSON request.' }),
    status: z
      .enum(['processing', 'valid', 'invalid'])
      .exactOptional()
      .openapi({
        description: 'Status of the user.',
        'x-enum-descriptions': [
          'processing: Input is still being processed.',
          'valid: Input determined to be a valid WhatsApp user.',
          'invalid: Input determined to not be a valid WhatsApp user or the phone number is in a bad format.',
        ],
      }),
    wa_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid.',
      }),
  })
  .openapi({
    description: '',
    example: { input: '+1 (516) 283-7151', status: 'valid', wa_id: '15162837151' },
    title: 'Check-Contact',
    required: [],
  })
  .openapi('CheckContact')

const CheckContactRequestBodySchema = z
  .object({
    blocking: z
      .enum(['no_wait', 'wait'])
      .default('no_wait')
      .exactOptional()
      .openapi({
        description:
          'Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).',
      }),
    contacts: z
      .array(z.string())
      .openapi({
        description:
          'Array of contact phone numbers. The numbers can be in any standard telephone number format.',
      }),
  })
  .openapi({
    example: { blocking: 'wait', contacts: ['{{Recipient-WA-ID}}'] },
    required: ['contacts'],
    title: 'Check-Contact-Request',
  })
  .openapi('CheckContactRequestBody')

const ErrorSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'See the https://developers.facebook.com/docs/whatsapp/api/errors for more information.',
      }),
    details: z.string().exactOptional().openapi({ description: 'error detail' }),
    href: z.string().exactOptional().openapi({ description: 'location for error detail' }),
    title: z.string().exactOptional().openapi({ description: 'error title' }),
  })
  .openapi({
    description: '',
    example: { code: 1234, details: 'optional-detailed-error-message', title: 'error-code-title' },
    title: 'Error',
    required: [],
  })
  .openapi('Error')

const MetaSchema = z
  .object({
    api_status: z.enum(['deprecated', 'experimental', 'stable']).exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({
    description: 'Contains generic information such as WhatsApp Business API Client version.',
    example: { api_status: 'stable', version: 'whatsapp-business-api-client-version' },
    title: 'Meta',
    required: [],
  })
  .openapi('Meta')

const ResponseSchema = z
  .object({
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'Only returned with a failed request. Contains an array of error objects that are present when there is an error. ',
      }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({
    description: '',
    example: {
      errors: [
        { code: 1234, details: 'optional-detailed-error-message', title: 'error-code-title' },
      ],
      meta: { api_status: 'deprecated', version: 'whatsapp-business-api-client-version' },
    },
    title: 'Response',
    required: [],
  })
  .openapi('Response')

const CheckContactResponseSchema = ResponseSchema.and(
  z.object({ contacts: z.array(CheckContactSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: {
      contacts: [
        { input: '1-631-555-1002', status: 'processing' },
        { input: '6315551003', status: 'processing' },
        { input: '+54 9 11 5612-1008', status: 'processing' },
        { input: '+1 (516) 283-7151', status: 'valid', wa_id: '15162837151' },
      ],
    },
    title: 'Check-Contact-Response',
  })
  .openapi('CheckContactResponse')

const GatewayStatusSchema = z
  .enum(['connected', 'connecting', 'disconnected', 'uninitialized', 'unregistered'])
  .openapi({ description: '' })
  .openapi('GatewayStatus')

const GatewayNodeStatusSchema = z
  .object({
    gateway_status: z.string().exactOptional(),
    role: z.enum(['primary_master', 'secondary_master', 'coreapp']).exactOptional(),
  })
  .openapi({
    description: '',
    example: { gateway_status: 'connected', role: 'coreapp' },
    title: 'Root Type for Gateway-Node-Status',
    required: [],
  })
  .openapi('GatewayNodeStatus')

const CheckHealthResponseSchema = z
  .object({
    health: z
      .xor([GatewayStatusSchema, z.record(z.string(), GatewayNodeStatusSchema)])
      .exactOptional(),
  })
  .openapi({
    description: '',
    example: {
      health: {
        'your-hostname1:your-container-id1': {
          gateway_status: 'connected',
          role: 'primary_master',
        },
        'your-hostname2:your-container-id2': {
          gateway_status: 'disconnected',
          role: 'secondary_master',
        },
      },
    },
    title: 'Root Type for Check-Health-Response',
    required: [],
  })
  .openapi('CheckHealthResponse')

const ConfigBearerSchema = z
  .object({ bearer: z.string() })
  .openapi({ example: { bearer: '<Bearer Auth Token>' }, required: ['bearer'], title: 'Config' })
  .openapi('ConfigBearer')

const ConfigBasicSchema = z
  .object({ basic: BasicSchema.exactOptional() })
  .openapi({
    example: { basic: { password: 'your-password', username: 'your-username' } },
    title: 'Config',
    required: [],
  })
  .openapi('ConfigBasic')

const ConfigSchema = z
  .xor([ConfigBearerSchema, ConfigBasicSchema])
  .openapi({ title: 'Config' })
  .openapi('Config')

const EmailSchema = z
  .object({ email: z.string(), type: z.string() })
  .openapi({
    example: { email: "<Contact's Email>", type: "<Contact's Email Type>" },
    required: ['email', 'type'],
    title: 'Email',
  })
  .openapi('Email')

const NameSchema = z
  .object({
    first_name: z.string().exactOptional().openapi({ description: 'First name' }),
    formatted_name: z.string().openapi({ description: 'Full name as it normally appears' }),
    last_name: z.string().exactOptional().openapi({ description: 'Last name' }),
    prefix: z.string().exactOptional().openapi({ description: 'Name preffix' }),
    suffix: z.string().exactOptional().openapi({ description: 'Name suffix' }),
  })
  .openapi({
    description: 'Full contact name',
    example: { first_name: 'John', formatted_name: 'John Smith', last_name: 'Smith' },
    required: ['formatted_name'],
    title: 'Name',
  })
  .openapi('Name')

const OrgSchema = z
  .object({
    company: z.string().openapi({ description: "Name of the contact's company" }),
    department: z
      .string()
      .exactOptional()
      .openapi({ description: "Name of the contact's department" }),
    title: z.string().exactOptional().openapi({ description: "Contact's business title" }),
  })
  .openapi({
    description: 'Contact organization information',
    example: { company: 'WhatsApp', department: 'Design', title: 'Manager' },
    required: ['company'],
    title: 'Org',
  })
  .openapi('Org')

const PhoneSchema = z
  .object({
    phone: z.string().exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Standard Values: CELL, MAIN, IPHONE, HOME, WORK' }),
    wa_id: z.string().exactOptional().openapi({ description: 'WhatsApp ID' }),
  })
  .openapi({
    example: { phone: '+1 (650) 555-1234', type: 'WORK', wa_id: '16505551234' },
    title: 'Phone',
    required: [],
  })
  .openapi('Phone')

const UrlSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'Standard Values: HOME, WORK' }),
    url: z.string().exactOptional().openapi({ description: 'URL' }),
  })
  .openapi({
    description: 'Standard Values: HOME, WORK',
    example: { type: 'WORK', url: 'https://www.facebook.com' },
    title: 'Root Type for Url',
    required: [],
  })
  .openapi('Url')

const ContactSchema = z
  .object({
    addresses: z
      .array(AddressSchema)
      .exactOptional()
      .openapi({ description: 'Full contact address(es)' }),
    birthday: z.string().exactOptional().openapi({ description: 'YYYY-MM-DD formatted string' }),
    emails: z
      .array(EmailSchema)
      .exactOptional()
      .openapi({ description: 'Contact email address(es)' }),
    ims: z.array(z.string()).exactOptional().openapi({ description: '' }),
    name: NameSchema.exactOptional(),
    org: OrgSchema.exactOptional(),
    phones: z
      .array(PhoneSchema)
      .exactOptional()
      .openapi({ description: 'Contact phone number(s)' }),
    urls: z.array(UrlSchema).exactOptional().openapi({ description: 'Contact URL(s)' }),
  })
  .openapi({
    example: {
      addresses: [
        {
          city: 'Menlo Park',
          country: 'United States',
          country_code: 'us',
          state: 'CA',
          street: '1 Hacker Way',
          type: 'HOME',
          zip: '94025',
        },
        {
          city: 'Menlo Park',
          country: 'United States',
          country_code: 'us',
          state: 'CA',
          street: '200 Jefferson Dr',
          type: 'WORK',
          zip: '94025',
        },
      ],
      birthday: '2012-08-18',
      emails: [
        { email: 'test@fb.com', type: 'WORK' },
        { email: 'test@whatsapp.com', type: 'WORK' },
      ],
      name: { first_name: 'John', formatted_name: 'John Smith', last_name: 'Smith' },
      org: { company: 'WhatsApp', department: 'Design', title: 'Manager' },
      phones: [
        { phone: '+1 (940) 555-1234', type: 'HOME' },
        { phone: '+1 (650) 555-1234', type: 'WORK', wa_id: '16505551234' },
      ],
      urls: [{ type: 'WORK', url: 'https://www.facebook.com' }],
    },
    title: 'Contact',
    required: [],
  })
  .openapi('Contact')

const CreateGroupRequestBodySchema = z
  .object({ subject: z.string() })
  .openapi({
    example: { subject: '<Group Subject>' },
    required: ['subject'],
    title: 'Create-Group-Request',
  })
  .openapi('CreateGroupRequestBody')

const CreateUserRequestBodySchema = z
  .object({
    password: z.string().openapi({ description: 'username' }),
    username: z.string().openapi({ description: 'password' }),
  })
  .openapi({
    example: { password: 'password', username: 'username' },
    required: ['username', 'password'],
    title: 'Create-User-Request',
  })
  .openapi('CreateUserRequestBody')

const CurrencySchema = z
  .object({ amount_1000: z.int32(), currency_code: z.string() })
  .openapi({
    description: '',
    example: { amount_1000: 100990, currency_code: 'USD' },
    required: ['amount_1000', 'currency_code'],
    title: 'Currency',
  })
  .openapi('Currency')

const DateTimeComponentSchema = z
  .object({
    day_of_month: z.int32().exactOptional().openapi({ description: 'The day of month' }),
    day_of_week: z
      .union([
        z.literal('1'),
        z.literal('2'),
        z.literal('3'),
        z.literal('4'),
        z.literal('5'),
        z.literal('6'),
        z.literal('7'),
      ])
      .exactOptional()
      .openapi({
        description:
          'Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.',
        'x-enum-descriptions': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        'x-enum-varnames': [
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY',
          'SUNDAY',
        ],
      }),
    hour: z.int32().exactOptional().openapi({ description: 'The hour' }),
    minute: z.int32().exactOptional().openapi({ description: 'The minute' }),
    month: z.int32().exactOptional().openapi({ description: 'The month' }),
    year: z.int32().exactOptional().openapi({ description: 'The year' }),
  })
  .openapi({
    description: 'Date/time by component',
    example: { day_of_month: 25, day_of_week: 5, hour: 15, minute: 33, month: 2, year: 1977 },
    title: 'Date-Time-Component',
    required: [],
  })
  .openapi('DateTimeComponent')

const DateTimeUnixEpochSchema = z
  .object({
    timestamp: z.int32().exactOptional().openapi({ description: 'Epoch timestamp in seconds' }),
  })
  .openapi({
    description: 'Date/time by Unix epoch',
    example: { timestamp: 123456789 },
    title: 'Date-Time-Unix-Epoch',
    required: [],
  })
  .openapi('DateTimeUnixEpoch')

const DateTimeObjectSchema = z
  .object({
    component: DateTimeComponentSchema.exactOptional(),
    unix_epoch: DateTimeUnixEpochSchema.exactOptional(),
  })
  .openapi({
    description:
      'The Whatsapp Business API Client will attempt to format the date/time based on a specified localization.',
    example: {
      component: { day_of_month: 25, day_of_week: 5, hour: 15, minute: 33, month: 2, year: 1977 },
    },
    title: 'Date-Time',
    required: [],
  })
  .openapi('DateTimeObject')

const UserRoleSchema = z
  .enum(['ROLE_ADMIN', 'ROLE_USER'])
  .openapi({ description: '' })
  .openapi('UserRole')

const DetailedUserResponseItemSchema = z
  .object({ ROLES: UserRoleSchema.exactOptional(), username: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { ROLES: 'ROLE_USER', username: 'username' },
    title: 'Root Type for Detailed-Response-Item',
    required: [],
  })
  .openapi('DetailedUserResponseItem')

const DetailedUserResponseSchema = ResponseSchema.and(
  z
    .object({ users: z.array(DetailedUserResponseItemSchema).exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: { users: [{ ROLES: 'ROLE_USER', username: 'username' }] },
    title: 'Root Type for Detailed-User-Response',
  })
  .openapi('DetailedUserResponse')

const DocumentByIdSchema = z
  .object({ caption: z.string(), filename: z.string(), id: z.string() })
  .openapi({
    example: {
      caption: '<Message Caption>',
      filename: '<Filename>',
      id: '<Media Id, from Media API>',
    },
    required: ['caption', 'id', 'filename'],
    title: 'Document',
  })
  .openapi('DocumentById')

const DocumentByProviderSchema = z
  .object({ caption: z.string(), filename: z.string(), link: z.string(), provider: ProviderSchema })
  .openapi({
    example: {
      caption: '<Message Caption>',
      filename: '<Filename>',
      link: '<Link to PDF, https>',
      provider: { name: '<Provider Name from Media Provider API, optional' },
    },
    required: ['provider', 'caption', 'link', 'filename'],
    title: 'Document1',
  })
  .openapi('DocumentByProvider')

const DocumentSchema = z
  .xor([DocumentByIdSchema, DocumentByProviderSchema])
  .openapi({ description: 'The media object containing a document', title: 'Document' })
  .openapi('Document')

const EnableTwoStepRequestBodySchema = z
  .object({ pin: z.string() })
  .openapi({
    example: { pin: 'your-6-digit-pin' },
    required: ['pin'],
    title: 'Enable-Two-Step-Request',
  })
  .openapi('EnableTwoStepRequestBody')

const GetBusinessProfileResponseSchema = ResponseSchema.and(
  z.object({ settings: BusinessSettingsSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: {
      settings: {
        business: {
          profile: {
            address: 'new-business-address',
            description: 'business-description',
            email: 'new-business-email',
            vertical: 'business-industry',
            websites: ['website-1', 'website-2'],
          },
        },
      },
    },
    title: 'Root Type for Get-Business-Profile-Response',
  })
  .openapi('GetBusinessProfileResponse')

const MediaProviderSchema = z
  .object({
    config: ConfigSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The name for the provider' }),
    type: z.string().exactOptional().openapi({ description: 'The type of provider' }),
  })
  .openapi({
    example: { config: { bearer: '<Bearer Auth Token>' }, name: '<Provider Name>', type: 'www' },
    title: 'Update-Media-Providers-Request',
    required: [],
  })
  .openapi('MediaProvider')

const MediaProviderSettingsApplicationMediaSchema = z
  .object({ providers: z.array(MediaProviderSchema).exactOptional() })
  .openapi({
    description: '',
    example: {
      providers: [
        {
          config: { basic: { password: 'your-password', username: 'your-username' } },
          name: 'your-first-provider',
          type: 'www',
        },
        { config: { bearer: 'your-bearer-token' }, name: 'your-second-provider', type: 'www' },
      ],
    },
    title: 'Root Type for Settings-Application-Media',
    required: [],
  })
  .openapi('MediaProviderSettingsApplicationMedia')

const MediaProviderSettingsApplicationSchema = z
  .object({ media: MediaProviderSettingsApplicationMediaSchema.exactOptional() })
  .openapi({
    description: '',
    example: {
      media: {
        providers: [
          {
            config: { basic: { password: 'your-password', username: 'your-username' } },
            name: 'your-first-provider',
            type: 'www',
          },
          { config: { bearer: 'your-bearer-token' }, name: 'your-second-provider', type: 'www' },
        ],
      },
    },
    title: 'Root Type for Settings-Application',
    required: [],
  })
  .openapi('MediaProviderSettingsApplication')

const MediaProviderSettingsSchema = z
  .object({ application: MediaProviderSettingsApplicationSchema.exactOptional() })
  .openapi({
    description: '',
    example: {
      application: {
        media: {
          providers: [
            {
              config: { basic: { password: 'your-password', username: 'your-username' } },
              name: 'your-first-provider',
              type: 'www',
            },
            { config: { bearer: 'your-bearer-token' }, name: 'your-second-provider', type: 'www' },
          ],
        },
      },
    },
    title: 'Root Type for Settings',
    required: [],
  })
  .openapi('MediaProviderSettings')

const GetMediaProvidersResponseSchema = ResponseSchema.and(
  z.object({ settings: MediaProviderSettingsSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: {
      settings: {
        application: {
          media: {
            providers: [
              {
                config: { basic: { password: 'your-password', username: 'your-username' } },
                name: 'your-first-provider',
                type: 'www',
              },
              {
                config: { bearer: 'your-bearer-token' },
                name: 'your-second-provider',
                type: 'www',
              },
            ],
          },
        },
      },
    },
    title: 'Root Type for Get-Media-Providers-Response',
  })
  .openapi('GetMediaProvidersResponse')

const ProfileAboutSchema = z
  .object({
    text: z
      .string()
      .openapi({
        description:
          "Text to display in your profile's About section\nThe max length for the string is 139 characters.",
      }),
  })
  .openapi({
    example: { text: '<About Profile>' },
    required: ['text'],
    title: 'Set-Profile-About-Request',
  })
  .openapi('ProfileAbout')

const ProfileAboutSettingsProfileSchema = z
  .object({ about: ProfileAboutSchema.exactOptional() })
  .openapi({
    description: '',
    example: { about: { text: 'your-profile-about-text' } },
    title: 'Root Type for About-XXX',
    required: [],
  })
  .openapi('ProfileAboutSettingsProfile')

const ProfileAboutSettingsSchema = z
  .object({ profile: ProfileAboutSettingsProfileSchema.exactOptional() })
  .openapi({
    description: '',
    example: { profile: { about: { text: 'your-profile-about-text' } } },
    title: 'Root Type for Profile-About-Settings',
    required: [],
  })
  .openapi('ProfileAboutSettings')

const GetProfileAboutResponseSchema = z
  .object({ settings: ProfileAboutSettingsSchema.exactOptional() })
  .openapi({
    description: '',
    example: { settings: { profile: { about: { text: 'your-profile-about-text' } } } },
    title: 'Root Type for Get-Profile-About-Response',
    required: [],
  })
  .openapi('GetProfileAboutResponse')

const ProfilePhotoSettingsSchema = z
  .object({
    profile: z
      .object({
        photo: z
          .object({ link: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: '',
    example: { profile: { photo: { link: 'profile-photo-url' } } },
    title: 'Root Type for Profile-Photo-Settings',
    required: [],
  })
  .openapi('ProfilePhotoSettings')

const GetProfilePhotoResponseSchema = z
  .object({ settings: ProfilePhotoSettingsSchema.exactOptional() })
  .openapi({
    description: '',
    example: { settings: { profile: { photo: { link: 'profile-photo-url' } } } },
    title: 'Root Type for Get-Profile-Photo-Response',
    required: [],
  })
  .openapi('GetProfilePhotoResponse')

const GroupSchema = z
  .object({
    creation_time: z.int32().exactOptional().openapi({ description: 'timestamp' }),
    id: z.string().exactOptional(),
  })
  .openapi({
    description: '',
    example: { creation_time: 123456789, id: 'your-group-id' },
    title: 'Groups-Response-Item',
    required: [],
  })
  .openapi('Group')

const GroupAdminRequestBodySchema = z
  .object({
    wa_ids: z
      .array(z.string())
      .openapi({
        description: 'The WhatsApp IDs of the people to be added or removed as group admins',
      }),
  })
  .openapi({
    example: { wa_ids: ['<Recipient WA-ID, from Contacts API>'] },
    required: ['wa_ids'],
    title: 'Group-Admin-Request',
  })
  .openapi('GroupAdminRequestBody')

const GroupInfoSchema = z
  .object({
    admins: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Group administrators\nLists IDs of the creator of the group and any administrators added',
      }),
    creation_time: z.int32().exactOptional().openapi({ description: 'Group creation time' }),
    creator: z.string().exactOptional().openapi({ description: 'ID of the creator of this group' }),
    participants: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Participants of the group\nThis is an array of all the IDs of the participants in the group. Initially, this will be the creator of the group.',
      }),
    subject: z.string().exactOptional().openapi({ description: 'Subject of the group' }),
  })
  .openapi({
    description: '',
    example: {
      admins: ['whatsapp-id-1', 'whatsapp-id-2'],
      creation_time: 123456789,
      creator: 'whatsapp-id-1',
      participants: ['whatsapp-id-3', 'whatsapp-id-4', 'whatsapp-id-5'],
      subject: 'your-group-subject',
    },
    title: 'Group-Response-Item',
    required: [],
  })
  .openapi('GroupInfo')

const GroupInviteSchema = z
  .object({ link: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { link: 'group-invite-link' },
    title: 'Group-Invite',
    required: [],
  })
  .openapi('GroupInvite')

const GroupInviteResponseSchema = ResponseSchema.and(
  z.object({ groups: z.array(GroupInviteSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: { groups: [{ link: 'group-invite-link' }] },
    title: 'Group-Invite-Response',
  })
  .openapi('GroupInviteResponse')

const GroupResponseSchema = ResponseSchema.and(
  z.object({ groups: z.array(GroupInfoSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: {
      groups: [
        {
          admins: ['whatsapp-id-1', 'whatsapp-id-2'],
          creation_time: 123456789,
          creator: 'whatsapp-id-1',
          participants: ['whatsapp-id-3', 'whatsapp-id-4', 'whatsapp-id-5'],
          subject: 'your-group-subject',
        },
      ],
    },
    title: 'Group-Response',
  })
  .openapi('GroupResponse')

const GroupsResponseSchema = ResponseSchema.and(
  z.object({ groups: z.array(GroupSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: { groups: [{ creation_time: 123456789, id: 'your-group-id' }] },
    title: 'GroupsResponse',
  })
  .openapi('GroupsResponse')

const LanguageSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).',
      }),
    policy: z
      .enum(['fallback', 'deterministic'])
      .openapi({ description: 'The language policy the message should follow' }),
  })
  .openapi({
    example: { code: 'en', policy: 'deterministic' },
    required: ['policy', 'code'],
    title: 'Language',
  })
  .openapi('Language')

const LocalizableParamSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    date_time: DateTimeObjectSchema.exactOptional(),
    default: z.string().openapi({ description: 'Default text if localization fails' }),
  })
  .openapi({
    example: { default: '<param value>' },
    required: ['default'],
    title: 'LocalizableParam',
  })
  .openapi('LocalizableParam')

const HsmSchema = z
  .object({
    element_name: z
      .string()
      .openapi({
        description: 'The element name that indicates which template to use within the namespace',
      }),
    language: LanguageSchema,
    localizable_params: z
      .array(LocalizableParamSchema)
      .openapi({
        description: 'This field is an array of values to apply to variables in the template',
      }),
    namespace: z.string().openapi({ description: 'The namespace that will be used' }),
  })
  .openapi({
    description:
      'The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.',
    example: {
      element_name: 'hello_world',
      language: { code: 'en', policy: 'deterministic' },
      localizable_params: [{ default: '1234' }],
      namespace: 'business_a_namespace',
    },
    required: ['namespace', 'element_name', 'language', 'localizable_params'],
    title: 'Hsm',
  })
  .openapi('Hsm')

const ImageByIdSchema = z
  .object({ caption: z.string(), id: z.string() })
  .openapi({
    example: { caption: '<Message Caption>', id: '<Media Id, from Media API>' },
    required: ['caption', 'id'],
    title: 'ImageById',
  })
  .openapi('ImageById')

const ImageByProviderSchema = z
  .object({ caption: z.string(), link: z.string(), provider: ProviderSchema })
  .openapi({
    example: {
      caption: '<Media Caption>',
      link: '<Link to Image, https>',
      provider: { name: '<Provider Name from Media Provider API, optional' },
    },
    required: ['provider', 'link', 'caption'],
    title: 'ImageByProvider',
  })
  .openapi('ImageByProvider')

const ImageSchema = z
  .xor([ImageByIdSchema, ImageByProviderSchema])
  .openapi({ description: 'The media object containing an image', title: 'Image' })
  .openapi('Image')

const LocationSchema = z
  .object({
    address: z
      .string()
      .openapi({ description: 'Address of the location. Only displayed if name is present.' }),
    latitude: z.string().openapi({ description: 'Latitude of the location' }),
    longitude: z.string().openapi({ description: 'Longitude of the location' }),
    name: z.string().openapi({ description: 'Name of the location' }),
  })
  .openapi({
    example: {
      address: "<Location's Address>",
      latitude: '<Latitude>',
      longitude: '<Longitude>',
      name: '<Location Name>',
    },
    required: ['longitude', 'latitude', 'name', 'address'],
    title: 'Location',
  })
  .openapi('Location')

const LoginAdminRequestBodySchema = z
  .object({ new_password: z.string() })
  .openapi({
    example: { new_password: '<New Admin Password>' },
    required: ['new_password'],
    title: 'Login-Admin-Request',
  })
  .openapi('LoginAdminRequestBody')

const MarkMessageAsReadRequestBodySchema = z
  .object({ status: z.string().default('read') })
  .openapi({
    example: { status: 'read' },
    required: ['status'],
    title: 'Mark-Message-As-Read-Request',
  })
  .openapi('MarkMessageAsReadRequestBody')

const MessageSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { id: 'gBEGkYiEB1VXAglK1ZEqA1YKPrU' },
    title: 'Message',
    required: [],
  })
  .openapi('Message')

const MessageContextSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sender Whatsapp id of context-message' }),
    group_id: z.string().exactOptional().openapi({ description: 'GroupId of context message' }),
    id: z.string().exactOptional().openapi({ description: 'message id' }),
    mentions: z.array(z.string()).exactOptional().openapi({ description: 'Whats app ids' }),
  })
  .openapi({
    description: '',
    example: {
      from: 'sender-wa-id-of-context-message',
      group_id: 'group-id-of-context-message',
      id: 'message-id-of-context-message',
      mentions: ['wa-id1', 'wa-id2'],
    },
    title: 'Root Type for Message-Context',
    required: [],
  })
  .openapi('MessageContext')

const MessageResponseSchema = ResponseSchema.and(
  z.object({ messages: z.array(MessageSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: { messages: [{ id: 'gBEGkYiEB1VXAglK1ZEqA1YKPrU' }] },
    title: 'Message-Response',
  })
  .openapi('MessageResponse')

const MessageTypeSchema = z
  .enum([
    'audio',
    'contacts',
    'document',
    'hsm',
    'image',
    'location',
    'text',
    'video',
    'voice',
    'unknown',
  ])
  .default('text')
  .openapi({ description: 'type of the message' })
  .openapi('MessageType')

const ProfilePhotoSettingsProfilePhotoSchema = z
  .object({ link: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { link: 'profile-photo-url' },
    title: 'Root Type for Profile-Photo-Settings-Profile-Photo',
    required: [],
  })
  .openapi('ProfilePhotoSettingsProfilePhoto')

const ProfilePhotoSettingsProfileSchema = z
  .object({ photo: ProfilePhotoSettingsProfilePhotoSchema.exactOptional() })
  .openapi({
    description: '',
    example: { photo: { link: 'profile-photo-url' } },
    title: 'Root Type for Profile-Photo-Settings-Profile',
    required: [],
  })
  .openapi('ProfilePhotoSettingsProfile')

const RegisterAccountRequestBodySchema = z
  .object({ code: z.string() })
  .openapi({
    example: { code: 'your-registration-code-received-by-sms-or-voice-call' },
    required: ['code'],
    title: 'Register-Account-Request',
  })
  .openapi('RegisterAccountRequestBody')

const RemoveGroupParticipantRequestBodySchema = z
  .object({ wa_ids: z.array(z.string()).openapi({ description: '' }) })
  .openapi({
    example: { wa_ids: ['{{Recipient-WA-ID}}'] },
    required: ['wa_ids'],
    title: 'Remove-Group-Participant-Request',
  })
  .openapi('RemoveGroupParticipantRequestBody')

const RequestCodeAccountSchema = z
  .object({ vname: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { vname: 'decoded-vname-from-cert' },
    title: 'Root Type for Request-Code-Account',
    required: [],
  })
  .openapi('RequestCodeAccount')

const RequestCodeRequestBodySchema = z
  .object({
    cc: z
      .string()
      .openapi({ description: 'Numerical country code for the phone number you are registering' }),
    cert: z.string().openapi({ description: 'Base64-encoded Verified Name certificate' }),
    method: z
      .enum(['sms', 'voice'])
      .openapi({ description: 'Method of receiving your registration code' }),
    phone_number: z
      .string()
      .openapi({
        description:
          'Phone number you are registering, without the country code or plus symbol (+)',
      }),
    pin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.',
      }),
  })
  .openapi({
    example: {
      cc: '<Country Code>',
      cert: '<Valid Cert from Business Manager>',
      method: '< sms | voice >',
      phone_number: '<Phone Number>',
      pin: '<Two-Step Verification PIN',
    },
    required: ['cc', 'phone_number', 'method', 'cert'],
    title: 'Request-Code-Request',
  })
  .openapi('RequestCodeRequestBody')

const RequestCodeResponseSchema = z
  .object({ account: z.array(RequestCodeAccountSchema).exactOptional() })
  .openapi({
    description: '',
    example: { account: [{ vname: 'decoded-vname-from-cert' }] },
    title: 'Root Type for Request-Code-Response',
    required: [],
  })
  .openapi('RequestCodeResponse')

const RestoreSettingsRequestBodySchema = z
  .object({
    data: z
      .string()
      .openapi({ description: 'The data that was returned by the /v1/settings/backup API call' }),
    password: z
      .string()
      .openapi({
        description:
          'The password you used in the /v1/settings/backup API call to encrypt the backup data',
      }),
  })
  .openapi({
    example: { data: '<Data to Restore, from Backup API>', password: '<Password for Backup>' },
    required: ['password', 'data'],
    title: 'Restore-Settings-Request',
  })
  .openapi('RestoreSettingsRequestBody')

const TextSchema = z
  .object({ body: z.string() })
  .openapi({ example: { body: '<Message Text>' }, required: ['body'], title: 'Text' })
  .openapi('Text')

const VideoByIdSchema = z
  .object({ caption: z.string(), id: z.string() })
  .openapi({
    example: { caption: '<Message Caption>', id: '<Media Id, from Media API>' },
    required: ['caption', 'id'],
    title: 'VideoById',
  })
  .openapi('VideoById')

const VideoByProviderSchema = z
  .object({ caption: z.string(), link: z.string(), provider: ProviderSchema })
  .openapi({
    example: {
      caption: '<Message Caption>',
      link: '<Link to Video, https>',
      provider: { name: '<Provider Name from Media Provider API, optional' },
    },
    required: ['provider', 'caption', 'link'],
    title: 'ByProvider',
  })
  .openapi('VideoByProvider')

const VideoSchema = z
  .xor([VideoByIdSchema, VideoByProviderSchema])
  .openapi({ description: 'The media object containing a video', title: 'Video' })
  .openapi('Video')

const SendMessageRequestBodySchema = z
  .object({
    audio: AudioSchema.exactOptional(),
    contacts: z.array(ContactSchema).exactOptional().openapi({ description: '' }),
    document: DocumentSchema.exactOptional(),
    hsm: HsmSchema.exactOptional(),
    image: ImageSchema.exactOptional(),
    location: LocationSchema.exactOptional(),
    preview_url: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifying preview_url in the request is optional when not including a URL in your message.\nTo include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.',
      }),
    recipient_type: z
      .enum(['individual', 'group'])
      .default('individual')
      .exactOptional()
      .openapi({
        description:
          'Determines whether the recipient is an individual or a group\nSpecifying recipient_type in the request is optional when the value is individual.\nHowever, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.',
      }),
    text: TextSchema.exactOptional(),
    to: z
      .string()
      .openapi({
        description:
          'When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.',
      }),
    ttl: z.object({}).exactOptional(),
    type: MessageTypeSchema.exactOptional(),
    video: VideoSchema.exactOptional(),
  })
  .openapi({
    example: {
      preview_url: true,
      recipient_type: 'individual',
      text: { body: 'your-text-message-content' },
      to: '{whatsapp-id}',
      type: 'text',
    },
    required: ['to'],
    title: 'Send-Text-Message-Request',
  })
  .openapi('SendMessageRequestBody')

const SetShardsRequestBodySchema = z
  .object({
    cc: z.string(),
    phone_number: z.string(),
    pin: z.string(),
    shards: z.union([
      z.literal('1'),
      z.literal('2'),
      z.literal('4'),
      z.literal('8'),
      z.literal('16'),
      z.literal('32'),
    ]),
  })
  .openapi({
    example: {
      cc: '<Country Code>',
      phone_number: '<Phone Number>',
      pin: '<Two-Step PIN>',
      shards: 32,
    },
    required: ['cc', 'phone_number', 'shards', 'pin'],
    title: 'Set-Shards-Request',
  })
  .openapi('SetShardsRequestBody')

const UpdateGroupInfoRequestBodySchema = z
  .object({ subject: z.string() })
  .openapi({
    example: { subject: '<New Group Subject>' },
    required: ['subject'],
    title: 'Update-Group-Info-Request',
  })
  .openapi('UpdateGroupInfoRequestBody')

const UpdateUserRequestBodySchema = z
  .object({ password: z.string().openapi({ description: 'password' }) })
  .openapi({
    example: { password: 'New Password' },
    required: ['password'],
    title: 'Update-User-Request',
  })
  .openapi('UpdateUserRequestBody')

const UploadMediaSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { id: 'f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68' },
    title: 'Root Type for Upload-Media',
    required: [],
  })
  .openapi('UploadMedia')

const UploadMediaResponseSchema = ResponseSchema.and(
  z.object({ media: z.array(UploadMediaSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: { media: [{ id: 'f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68' }] },
    title: 'Root Type for Upload-Media-Response',
  })
  .openapi('UploadMediaResponse')

const UserLoginResponseItemSchema = z
  .object({
    expires_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Token expiration timestamp. By default, this is 7 days.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authentication token to be used for all other WhatsApp Business API calls. The token must be sent in the authorization header in the format:\nAuthorization: Bearer <authentication-token>',
      }),
  })
  .openapi({
    description: '',
    example: {
      expires_after: '2018-03-01 15:29:26+00:00',
      token: 'eyJhbGciOHlXVCJ9.eyJ1c2VyIjoNTIzMDE2Nn0.mEoF0COaO00Z1cANo',
    },
    title: 'UserLoginResponseItem',
    required: [],
  })
  .openapi('UserLoginResponseItem')

const UserLoginResponseSchema = ResponseSchema.and(
  z
    .object({ users: z.array(UserLoginResponseItemSchema).exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: {
      users: [
        {
          expires_after: '2018-03-01 15:29:26+00:00',
          token: 'eyJhbGciOHlXVCJ9.eyJ1c2VyIjoNTIzMDE2Nn0.mEoF0COaO00Z1cANo',
        },
      ],
    },
    title: 'UserLoginResponse',
  })
  .openapi('UserLoginResponse')

const UserResponseItemSchema = z
  .object({ username: z.string().exactOptional() })
  .openapi({
    description: '',
    example: { username: 'username' },
    title: 'Root Type for User-Create-Response-Item',
    required: [],
  })
  .openapi('UserResponseItem')

const UserResponseSchema = ResponseSchema.and(
  z.object({ users: z.array(UserResponseItemSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: '',
    example: { users: [{ username: 'username' }] },
    title: 'Root Type for User-Create-Response',
  })
  .openapi('UserResponse')

const WebhookAudioSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Only present if specified.' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Absolute filename and location on media volume. This parameter is deprecated.',
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Filename on the sender's device. This will only be present in audio and document media messages.",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the media. Can be used to delete the media if stored locally on the client.',
      }),
    link: z.string().exactOptional(),
    mime_type: z.string().exactOptional().openapi({ description: 'Mime type of media' }),
    sha256: z.string().exactOptional().openapi({ description: 'Checksum' }),
  })
  .openapi({
    description: '',
    example: {
      file: 'absolute-filepath-on-coreapp',
      id: 'media-id',
      link: 'link-to-audio-file',
      mime_type: 'media-mime-type',
      sha256: 'checksum',
    },
    title: 'Root Type for Webhook-Audio',
    required: [],
  })
  .openapi('WebhookAudio')

const WebhookContactProfileSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Optional. As of v2.21.4, contains the sender's profile name." }),
  })
  .openapi({
    description: '',
    example: { name: 'sender-profile-name' },
    title: 'Root Type for Webhook-Contact-Profile',
    required: [],
  })
  .openapi('WebhookContactProfile')

const WebhookContactSchema = z
  .object({
    profile: WebhookContactProfileSchema.exactOptional(),
    wa_id: z.string().exactOptional().openapi({ description: 'The WhatsApp ID of the contact' }),
  })
  .openapi({
    description: '',
    example: { profile: { name: 'Kerry Fisher' }, wa_id: '16315551234' },
    title: 'Root Type for Webhook-Contact',
    required: [],
  })
  .openapi('WebhookContact')

const WebhookDocumentSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Only present if specified.' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Absolute filename and location on media volume. This parameter is deprecated.',
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Filename on the sender's device. This will only be present in audio and document media messages.",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the media. Can be used to delete the media if stored locally on the client.',
      }),
    link: z.string().exactOptional(),
    mime_type: z.string().exactOptional().openapi({ description: 'Mime type of media' }),
    sha256: z.string().exactOptional().openapi({ description: 'Checksum' }),
  })
  .openapi({
    description: '',
    example: {
      caption: '80skaraokesonglistartist',
      file: '/usr/local/wamedia/shared/fc233119-733f-49c-bcbd-b2f68f798e33',
      id: 'fc233119-733f-49c-bcbd-b2f68f798e33',
      mime_type: 'application/pdf',
      sha256: '3b11fa6ef2bde1dd14726e09d3edaf782120919d06f6484f32d5d5caa4b8e',
    },
    title: 'Root Type for Webhook-Document',
    required: [],
  })
  .openapi('WebhookDocument')

const WebhookImageSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Only present if specified.' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Absolute filename and location on media volume. This parameter is deprecated.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the media. Can be used to delete the media if stored locally on the client.',
      }),
    link: z.string().exactOptional(),
    mime_type: z.string().exactOptional().openapi({ description: 'Mime type of media' }),
    sha256: z.string().exactOptional().openapi({ description: 'Checksum' }),
  })
  .openapi({
    description: '',
    example: {
      caption: 'Check out my new phone!',
      file: '/usr/local/wamedia/shared/b1cf38-8734-4ad3-b4a1-ef0c10d0d683',
      id: 'b1c68f38-8734-4ad3-b4a1-ef0c10d683',
      mime_type: 'image/jpeg',
      sha256: '29ed500fa64eb55fc19dc4124acb300e5dcc54a0f822a301ae99944db',
    },
    title: 'Root Type for Webhook-Image',
    required: [],
  })
  .openapi('WebhookImage')

const WebhookLocationSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'Address of the location' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Latitude of location being sent' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude of location being sent' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the location' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL for the website where the user downloaded the location information',
      }),
  })
  .openapi({
    description: '',
    example: {
      address: 'Main Street Beach, Santa Cruz, CA',
      latitude: 38.9806263495,
      longitude: -131.9428612257,
      name: 'Main Street Beach',
      url: 'https://foursquare.com/v/4d7031d35b5df7744',
    },
    title: 'Root Type for Webhook-Location',
    required: [],
  })
  .openapi('WebhookLocation')

const WebhookSystemSchema = z
  .object({
    body: z.string().exactOptional(),
    type: z
      .enum([
        'group_created',
        'group_user_promoted',
        'group_user_demoted',
        'group_user_joined',
        'group_user_left',
        'group_subject_changed',
        'group_description_changed',
        'group_icon_changed',
        'group_icon_deleted',
        'group_invite_link_revoked',
        'user_identity_changed',
        'group_user_changed_number',
        'group_error_fetching_photo',
        'group_error_adding_users',
        'group_error_adding_user',
        'group_error_full_adding_users',
        'group_error_removing_user',
        'broadcast_list_created',
        'group_ended',
        'group_error_blocked_adding_user',
      ])
      .exactOptional()
      .openapi({
        description: '',
        'x-enum-descriptions': [
          'Group created',
          'Group user promoted to admin',
          'Group user removed as admin',
          'User joined the group',
          'User left the group',
          'Group subject changed',
          'Group description changed',
          'Group icon changed',
          'Group icon deleted',
          "Group's invite link disabled",
          "User's end-to-end keys changed",
          "User's phone number changed",
          'Error retrieving the group photo',
          'Error adding users to the group',
          'Error adding a user to the group',
          'Group is at capacity and no more users can be added',
          'Error removing user from group',
          'Broadcast list created',
          'Group ended',
          'Error attempting to add a user that blocked the adder',
        ],
      }),
  })
  .openapi({
    description: '',
    example: {
      body: '+1 (650) 387-5246 added +1 (650) 644-8470',
      group_id: '16315558032-1530825318',
      operator: '16503875246',
      type: 'group_user_joined',
      users: ['16506448470'],
    },
    title: 'Root Type for Webhook-System',
    required: [],
  })
  .openapi('WebhookSystem')

const WebhookTextSchema = z
  .object({ body: z.string().exactOptional().openapi({ description: 'Message text' }) })
  .openapi({
    description: '',
    example: { body: 'text-message-content' },
    title: 'Root Type for Webhook-Text',
    required: [],
  })
  .openapi('WebhookText')

const WebhookVideoSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Only present if specified.' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Absolute filename and location on media volume. This parameter is deprecated.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the media. Can be used to delete the media if stored locally on the client.',
      }),
    link: z.string().exactOptional(),
    mime_type: z.string().exactOptional().openapi({ description: 'Mime type of media' }),
    sha256: z.string().exactOptional().openapi({ description: 'Checksum' }),
  })
  .openapi({
    description: '',
    example: {
      file: 'absolute-filepath-on-coreapp',
      id: 'media-id',
      link: 'link-to-video-file',
      mime_type: 'media-mime-type',
      sha256: 'checksum',
    },
    title: 'Root Type for Webhook-Video',
    required: [],
  })
  .openapi('WebhookVideo')

const WebhookVoiceSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Only present if specified.' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Absolute filename and location on media volume. This parameter is deprecated.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the media. Can be used to delete the media if stored locally on the client.',
      }),
    link: z.string().exactOptional(),
    mime_type: z.string().exactOptional().openapi({ description: 'Mime type of media' }),
    sha256: z.string().exactOptional().openapi({ description: 'Checksum' }),
  })
  .openapi({
    description: '',
    example: {
      file: '/usr/local/wamedia/shared/463e/b7ec/ff4e4d9bb1101879cbd411b2',
      id: '463eb7ec-ff4e-4d9b-b110-1879cbd411b2',
      mime_type: 'audio/ogg; codecs=opus',
      sha256: 'fa9e1807d936b7cebe63654ea3a7912b1fa9479220258d823590521ef53b0710',
    },
    title: 'Root Type for Webhook-Voice',
    required: [],
  })
  .openapi('WebhookVoice')

const WebhookMessageSchema = z
  .object({
    audio: WebhookAudioSchema.exactOptional(),
    contacts: z.array(ContactSchema).exactOptional(),
    context: MessageContextSchema.exactOptional(),
    document: WebhookDocumentSchema.exactOptional(),
    errors: z.array(ErrorSchema).exactOptional(),
    from: z.string().exactOptional().openapi({ description: 'WhatsApp ID of the sender' }),
    group_id: z.string().exactOptional().openapi({ description: 'Optional. WhatsApp group ID' }),
    id: z.string().exactOptional().openapi({ description: 'Message ID' }),
    image: WebhookImageSchema.exactOptional(),
    location: WebhookLocationSchema.exactOptional(),
    system: WebhookSystemSchema.exactOptional(),
    text: WebhookTextSchema.exactOptional(),
    timestamp: z.string().exactOptional().openapi({ description: 'Message received timestamp' }),
    type: MessageTypeSchema.exactOptional(),
    video: WebhookVideoSchema.exactOptional(),
    voice: WebhookVoiceSchema.exactOptional(),
  })
  .openapi({
    description: '',
    example: {
      from: '16315551234',
      id: 'ABGGFlA5FpafAgo6tHcNmNjXmuSf',
      text: { body: 'Hello this is an answer' },
      timestamp: '1518694235',
      type: 'text',
    },
    title: 'Root Type for Webhook-Message',
    required: [],
  })
  .openapi('WebhookMessage')

const WebhookStatusSchema = z
  .object({
    errors: z.array(ErrorSchema).exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'Message ID' }),
    recipient_id: z.string().exactOptional().openapi({ description: 'WhatsApp ID of recipient' }),
    status: z
      .enum(['sent', 'delivered', 'read', 'failed', 'deleted'])
      .exactOptional()
      .openapi({
        description: 'Status of message',
        'x-enum-descriptions': [
          'Message received by WhatsApp server (One checkmark in WhatsApp Mobile)',
          'Message delivered to recipient (Two checkmarks in WhatsApp Mobile)',
          'Message read by recipient (Two blue checkmarks in WhatsApp Mobile)',
          'Message failed to send (Red error triangle in WhatsApp Mobile)',
          'Message deleted by the user',
        ],
      }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the status message' }),
  })
  .openapi({
    description: '',
    example: {
      errors: [
        {
          code: 470,
          title:
            'Failed to send message because you are outside the support window for freeform messages to this user. Please use a valid HSM notification or reconsider.',
        },
      ],
      id: 'gBGGEgZHMlEfAgkM1RBkhDRr7t8',
      recipient_id: '12064001000',
      status: 'failed',
      timestamp: '1533332775',
    },
    title: 'Root Type for Webhook-Status',
    required: [],
  })
  .openapi('WebhookStatus')

const WebhookEventSchema = z
  .object({
    contacts: z.array(WebhookContactSchema).exactOptional(),
    errors: z.array(ErrorSchema).exactOptional(),
    messages: z.array(WebhookMessageSchema).exactOptional(),
    statuses: z.array(WebhookStatusSchema).exactOptional(),
  })
  .openapi({
    description: '',
    example: {
      contacts: [{ profile: { name: 'Kerry Fisher' }, wa_id: '16315551234' }],
      messages: [
        {
          from: '16315551234',
          id: 'ABGGFlA5FpafAgo6tHcNmNjXmuSf',
          text: { body: 'Hello this is an answer' },
          timestamp: '1518694235',
          type: 'text',
        },
      ],
    },
    title: 'Root Type for Webhook-Event',
    required: [],
  })
  .openapi('WebhookEvent')

const BearerAuthSecurityScheme = { bearerFormat: 'token', scheme: 'bearer', type: 'http' }

const HttpBasicSecurityScheme = { scheme: 'basic', type: 'http' }

export const postAccountRoute = createRoute({
  method: 'post',
  path: '/account',
  tags: ['Registration'],
  summary: 'Request-Code',
  operationId: 'RequestCode',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RequestCodeRequestBodySchema,
          example: {
            cc: '<Country Code>',
            cert: '<Valid Cert from Business Manager>',
            method: 'sms',
            phone_number: '<Phone Number>',
            pin: '<Two-Step Verification PIN',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Created: the account already exists. You are already registered, so you do not need to do anything else.',
    },
    202: {
      description:
        'Created: the account does not exist. Depending on the method selected in the request, check your SMS or voice number for the registration code.',
      content: { 'application/json': { schema: RequestCodeResponseSchema } },
    },
  },
})

export const postAccountShardsRoute = createRoute({
  method: 'post',
  path: '/account/shards',
  tags: ['Application'],
  summary: 'Set-Shards',
  operationId: 'SetShards',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SetShardsRequestBodySchema,
          example: {
            cc: '<Country Code>',
            phone_number: '<Phone Number>',
            pin: '<Two-Step PIN>',
            shards: 32,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const postAccountVerifyRoute = createRoute({
  method: 'post',
  path: '/account/verify',
  tags: ['Registration'],
  summary: 'Register-Account',
  operationId: 'RegisterAccount',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RegisterAccountRequestBodySchema,
          example: { code: '<Registration Code Received via SMS/Voice>' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const postCertificatesExternalRoute = createRoute({
  method: 'post',
  path: '/certificates/external',
  tags: ['Certificates'],
  summary: 'Upload-Certificate',
  operationId: 'UploadCertificate',
  request: {
    body: {
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  responses: { 200: { description: '' } },
})

export const getCertificatesExternalCaRoute = createRoute({
  method: 'get',
  path: '/certificates/external/ca',
  tags: ['Certificates'],
  summary: 'Download-CA-Certificate',
  operationId: 'DownloadCaCertificate',
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const getCertificatesWebhooksCaRoute = createRoute({
  method: 'get',
  path: '/certificates/webhooks/ca',
  tags: ['Certificates'],
  summary: 'Download Webhook CA Certificate',
  operationId: 'DownloadWebhookCaCertificate',
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const postCertificatesWebhooksCaRoute = createRoute({
  method: 'post',
  path: '/certificates/webhooks/ca',
  tags: ['Certificates'],
  summary: 'Upload Webhook CA Certificate',
  operationId: 'UploadWebhookCaCertificate',
  request: {
    body: {
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteCertificatesWebhooksCaRoute = createRoute({
  method: 'delete',
  path: '/certificates/webhooks/ca',
  tags: ['Certificates'],
  summary: 'Delete Webhook CA Certificate',
  operationId: 'DeleteWebhookCaCertificate',
  responses: { 200: { description: '' } },
})

export const postContactsRoute = createRoute({
  method: 'post',
  path: '/contacts',
  tags: ['Contacts'],
  summary: 'Check-Contact',
  operationId: 'CheckContact',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CheckContactRequestBodySchema,
          example: { blocking: 'wait', contacts: ['{{Recipient-WA-ID}}'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CheckContactResponseSchema } },
    },
  },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Get-All-Groups',
  operationId: 'GetAllGroups',
  responses: {
    200: { description: '', content: { 'application/json': { schema: GroupsResponseSchema } } },
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Create-Group',
  operationId: 'CreateGroup',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CreateGroupRequestBodySchema,
          example: { subject: '<Group Subject>' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GroupsResponseSchema } } },
  },
})

export const getGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/groups/{GroupId}',
  tags: ['Groups'],
  summary: 'Get-Group-Info',
  operationId: 'GetGroupInfo',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GroupResponseSchema } } },
  },
})

export const putGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/groups/{GroupId}',
  tags: ['Groups'],
  summary: 'Update-Group-Info',
  operationId: 'UpdateGroupInfo',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdateGroupInfoRequestBodySchema,
          example: { subject: '<New Group Subject>' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteGroupsGroupIdAdminsRoute = createRoute({
  method: 'delete',
  path: '/groups/{GroupId}/admins',
  tags: ['Groups'],
  summary: 'Demote-Group-Admin',
  operationId: 'DemoteGroupAdmin',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: GroupAdminRequestBodySchema,
          example: { wa_ids: ['<Recipient WA-ID, from Contacts API>'] },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const patchGroupsGroupIdAdminsRoute = createRoute({
  method: 'patch',
  path: '/groups/{GroupId}/admins',
  tags: ['Groups'],
  summary: 'Promote-To-Group-Admin',
  operationId: 'PromoteToGroupAdmin',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: GroupAdminRequestBodySchema,
          example: { wa_ids: ['<Recipient WA-ID, from Contacts API>'] },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getGroupsGroupIdIconRoute = createRoute({
  method: 'get',
  path: '/groups/{GroupId}/icon',
  tags: ['Groups'],
  summary: 'Get-Group-Icon-Binary',
  operationId: 'GetGroupIconBinary',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postGroupsGroupIdIconRoute = createRoute({
  method: 'post',
  path: '/groups/{GroupId}/icon',
  tags: ['Groups'],
  summary: 'Set-Group-Icon',
  operationId: 'SetGroupIcon',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ File: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['File'] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteGroupsGroupIdIconRoute = createRoute({
  method: 'delete',
  path: '/groups/{GroupId}/icon',
  tags: ['Groups'],
  summary: 'Delete-Group-Icon',
  operationId: 'DeleteGroupIcon',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ File: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['File'] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getGroupsGroupIdInviteRoute = createRoute({
  method: 'get',
  path: '/groups/{GroupId}/invite',
  tags: ['Groups'],
  summary: 'Get-Group-Invite',
  operationId: 'GetGroupInvite',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GroupInviteResponseSchema } },
    },
  },
})

export const deleteGroupsGroupIdInviteRoute = createRoute({
  method: 'delete',
  path: '/groups/{GroupId}/invite',
  tags: ['Groups'],
  summary: 'Delete-Group-Invite',
  operationId: 'DeleteGroupInvite',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postGroupsGroupIdLeaveRoute = createRoute({
  method: 'post',
  path: '/groups/{GroupId}/leave',
  tags: ['Groups'],
  summary: 'Leave-Group',
  operationId: 'LeaveGroup',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const deleteGroupsGroupIdParticipantsRoute = createRoute({
  method: 'delete',
  path: '/groups/{GroupId}/participants',
  tags: ['Groups'],
  summary: 'Remove-Group-Participant',
  operationId: 'RemoveGroupParticipant',
  request: {
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'GroupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RemoveGroupParticipantRequestBodySchema,
          example: { wa_ids: ['{{Recipient-WA-ID}}'] },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  summary: 'Check-Health',
  operationId: 'CheckHealth',
  responses: { 200: { description: '' } },
})

export const postMediaRoute = createRoute({
  method: 'post',
  path: '/media',
  tags: ['Media'],
  summary: 'Upload-Media',
  operationId: 'UploadMedia',
  request: {
    body: {
      content: {
        'application/msword': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/vnd.ms-excel': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/vnd.ms-powerpoint': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'audio/acc': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'audio/amr': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'audio/mp4': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'audio/mpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'audio/ogg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'codecs=opus': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'video/mp4': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UploadMediaResponseSchema } },
    },
  },
})

export const getMediaMediaIdRoute = createRoute({
  method: 'get',
  path: '/media/{MediaId}',
  tags: ['Media'],
  summary: 'Download-Media',
  operationId: 'DownloadMedia',
  request: {
    params: z.object({
      MediaId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'MediaId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: {} } },
})

export const deleteMediaMediaIdRoute = createRoute({
  method: 'delete',
  path: '/media/{MediaId}',
  tags: ['Media'],
  summary: 'Delete-Media',
  operationId: 'DeleteMedia',
  request: {
    params: z.object({
      MediaId: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'MediaId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postMessagesRoute = createRoute({
  method: 'post',
  path: '/messages',
  tags: ['Messages'],
  summary: 'Send-Message',
  operationId: 'SendMessage',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SendMessageRequestBodySchema,
          example: {
            recipient_type: 'individual',
            text: { body: '<Message Text>' },
            to: '{{Recipient-WA-ID}}',
            type: 'text',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageResponseSchema } } },
  },
})

export const putMessagesMessageIDRoute = createRoute({
  method: 'put',
  path: '/messages/{MessageID}',
  tags: ['Messages'],
  summary: 'Mark-Message-As-Read',
  operationId: 'MarkMessageAsRead',
  request: {
    params: z.object({
      MessageID: z
        .string()
        .openapi({
          param: {
            description: 'Message ID from Webhook',
            in: 'path',
            name: 'MessageID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: MarkMessageAsReadRequestBodySchema,
          example: { status: 'read' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Health'],
  summary: 'Get-Metrics (since v2.21.3)',
  operationId: 'GetMetrics',
  request: {
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            example: 'prometheus',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.object({}) },
        'text/plain': { schema: z.string() },
      },
    },
  },
})

export const postSettingsAccountTwoStepRoute = createRoute({
  method: 'post',
  path: '/settings/account/two-step',
  tags: ['Two-Step Verification'],
  summary: 'Enable-Two-Step',
  operationId: 'EnableTwoStep',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: EnableTwoStepRequestBodySchema,
          example: { pin: '<Two-Step Verification PIN>' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteSettingsAccountTwoStepRoute = createRoute({
  method: 'delete',
  path: '/settings/account/two-step',
  tags: ['Two-Step Verification'],
  summary: 'Disable-Two-Step',
  operationId: 'DisableTwoStep',
  responses: { 200: { description: '' } },
})

export const getSettingsApplicationRoute = createRoute({
  method: 'get',
  path: '/settings/application',
  tags: ['Application'],
  summary: 'Get-Application-Settings',
  operationId: 'GetApplicationSettings',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ApplicationSettingsSchema } },
    },
  },
})

export const deleteSettingsApplicationRoute = createRoute({
  method: 'delete',
  path: '/settings/application',
  tags: ['Application'],
  summary: 'Reset-Application-Settings',
  operationId: 'ResetApplicationSettings',
  responses: { 200: { description: '' } },
})

export const patchSettingsApplicationRoute = createRoute({
  method: 'patch',
  path: '/settings/application',
  tags: ['Application'],
  summary: 'Update-Application-Settings',
  description:
    'If a field is not present in the request, no change is made to that setting. For example, if on_call_pager is not sent with the request, the existing configuration for on_call_pager is unchanged.',
  operationId: 'UpdateApplicationSettings',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: ApplicationSettingsSchema,
          example: { webhooks: { url: '<Webhook URL, https>' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ResponseSchema } } },
  },
  callbacks: {
    incomingWebhook: {
      '{$request.body#/webhooks.url}': {
        post: {
          requestBody: { content: { 'application/json': { schema: WebhookEventSchema } } },
          responses: { 200: { description: 'OK' } },
        },
      },
    },
  },
})

export const getSettingsApplicationMediaProvidersRoute = createRoute({
  method: 'get',
  path: '/settings/application/media/providers',
  tags: ['Application'],
  summary: 'Get-Media-Providers',
  operationId: 'GetMediaProviders',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetMediaProvidersResponseSchema } },
    },
  },
})

export const postSettingsApplicationMediaProvidersRoute = createRoute({
  method: 'post',
  path: '/settings/application/media/providers',
  tags: ['Application'],
  summary: 'Update-Media-Providers',
  operationId: 'UpdateMediaProviders',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(MediaProviderSchema).openapi({ description: '' }),
          example: [
            { config: { bearer: '<Bearer Auth Token>' }, name: '<Provider Name>', type: 'www' },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteSettingsApplicationMediaProvidersProviderNameRoute = createRoute({
  method: 'delete',
  path: '/settings/application/media/providers/{ProviderName}',
  tags: ['Application'],
  summary: 'Delete-Media-Providers',
  operationId: 'DeleteMediaProviders',
  request: {
    params: z.object({
      ProviderName: z
        .string()
        .openapi({
          param: {
            description: 'Provider Name',
            in: 'path',
            name: 'ProviderName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postSettingsBackupRoute = createRoute({
  method: 'post',
  path: '/settings/backup',
  tags: ['Backup/Restore'],
  summary: 'Backup-Settings',
  operationId: 'BackupSettings',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: BackupSettingsRequestBodySchema,
          example: { password: '<Password for Backup>' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BackupSettingsResponseSchema } },
    },
  },
})

export const getSettingsBusinessProfileRoute = createRoute({
  method: 'get',
  path: '/settings/business/profile',
  tags: ['Business Profile'],
  summary: 'Get-Business-Profile',
  operationId: 'GetBusinessProfile',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetBusinessProfileResponseSchema } },
    },
  },
})

export const postSettingsBusinessProfileRoute = createRoute({
  method: 'post',
  path: '/settings/business/profile',
  tags: ['Business Profile'],
  summary: 'Update-Business-Profile',
  operationId: 'updateBusinessProfile',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: BusinessProfileSchema,
          example: {
            address: '<Business Profile Address>',
            description: '<Business Profile Description>',
            email: '<Business Profile Email>',
            vertical: '<Business Profile Vertical>',
            websites: ['https://www.whatsapp.com', 'https://www.facebook.com'],
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getSettingsProfileAboutRoute = createRoute({
  method: 'get',
  path: '/settings/profile/about',
  tags: ['Profile'],
  summary: 'Get-Profile-About',
  operationId: 'GetProfileAbout',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetProfileAboutResponseSchema } },
    },
  },
})

export const patchSettingsProfileAboutRoute = createRoute({
  method: 'patch',
  path: '/settings/profile/about',
  tags: ['Profile'],
  summary: 'Update-Profile-About',
  operationId: 'UpdateProfileAbout',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ProfileAboutSchema, example: { text: '<About Profile>' } },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getSettingsProfilePhotoRoute = createRoute({
  method: 'get',
  path: '/settings/profile/photo',
  tags: ['Profile'],
  summary: 'Get-Profile-Photo',
  operationId: 'GetProfilePhoto',
  request: {
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            example: 'link',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: GetProfilePhotoResponseSchema },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const postSettingsProfilePhotoRoute = createRoute({
  method: 'post',
  path: '/settings/profile/photo',
  tags: ['Profile'],
  summary: 'Update-Profile-Photo',
  operationId: 'UpdateProfilePhoto',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ File: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['File'] }),
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteSettingsProfilePhotoRoute = createRoute({
  method: 'delete',
  path: '/settings/profile/photo',
  summary: 'Delete-Profile-Photo',
  operationId: 'DeleteProfilePhoto',
  responses: { 200: { description: '' } },
})

export const postSettingsRestoreRoute = createRoute({
  method: 'post',
  path: '/settings/restore',
  tags: ['Backup/Restore'],
  summary: 'Restore-Settings',
  operationId: 'RestoreSettings',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: RestoreSettingsRequestBodySchema,
          example: {
            data: '<Data to Restore, from Backup API>',
            password: '<Password for Backup>',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const getStatsAppRoute = createRoute({
  method: 'get',
  path: '/stats/app',
  tags: ['Health'],
  summary: 'Get-App-Stats',
  operationId: 'GetAppStats',
  request: {
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            example: 'prometheus',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.object({}) },
        'text/plain': { schema: z.string() },
      },
    },
  },
})

export const getStatsDbRoute = createRoute({
  method: 'get',
  path: '/stats/db',
  tags: ['Health'],
  summary: 'Get-DB-Stats',
  operationId: 'GetDbStats',
  request: {
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            example: 'prometheus',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.object({}) },
        'text/plain': { schema: z.string() },
      },
    },
  },
})

export const getSupportRoute = createRoute({
  method: 'get',
  path: '/support',
  tags: ['Health'],
  summary: 'Get-Support-Info',
  operationId: 'GetSupportInfo',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create-User',
  operationId: 'CreateUser',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CreateUserRequestBodySchema,
          example: { password: '{{UserPassword}}', username: '{{UserUsername}}' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserResponseSchema } } },
  },
})

export const postUsersLoginRoute = createRoute({
  method: 'post',
  path: '/users/login',
  tags: ['Users'],
  summary: 'Login-User',
  operationId: 'LoginUser',
  request: { body: { content: { 'application/json': { schema: LoginAdminRequestBodySchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserLoginResponseSchema } },
    },
  },
  security: [{ httpBasic: [] }],
})

export const postUsersLogoutRoute = createRoute({
  method: 'post',
  path: '/users/logout',
  tags: ['Users'],
  summary: 'Logout-User',
  operationId: 'LogoutUser',
  responses: { 200: { description: '' } },
})

export const getUsersUserUsernameRoute = createRoute({
  method: 'get',
  path: '/users/{UserUsername}',
  tags: ['Users'],
  summary: 'Get-User',
  operationId: 'GetUser',
  request: {
    params: z.object({
      UserUsername: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'UserUsername',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DetailedUserResponseSchema } },
    },
  },
})

export const putUsersUserUsernameRoute = createRoute({
  method: 'put',
  path: '/users/{UserUsername}',
  tags: ['Users'],
  summary: 'Update-User',
  operationId: 'UpdateUser',
  request: {
    params: z.object({
      UserUsername: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'UserUsername',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdateUserRequestBodySchema,
          example: { password: '<New Password>' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserResponseSchema } } },
  },
})

export const deleteUsersUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/users/{UserUsername}',
  tags: ['Users'],
  summary: 'Delete-User',
  operationId: 'DeleteUser',
  request: {
    params: z.object({
      UserUsername: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: false,
            in: 'path',
            name: 'UserUsername',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserResponseSchema } } },
  },
})
