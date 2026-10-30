import { createRoute, z } from '@hono/zod-openapi'

const AgentActorSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL to the avatar image of the agent.',
        example: null,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the email address of the agent.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string that uniquely identifies the agent actor.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the agent.', example: null }),
    type: z
      .literal('AGENT')
      .default('AGENT')
      .openapi({
        description:
          "A string representing the type of actor, which is always 'AGENT' for this component.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('AgentActor')

const BatchInputStringSchema = z
  .object({
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings that are required for the batch operation. Each item in the array is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputString')

const BotActorSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL of the avatar image for the bot actor.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the bot actor.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the bot actor.', example: null }),
    type: z
      .literal('BOT')
      .default('BOT')
      .openapi({
        description:
          "A string indicating the type of actor, which is always 'BOT' for this component.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('BotActor')

const IntegratorActorSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing the URL or identifier for the avatar image of the integrator actor.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string that uniquely identifies the integrator actor.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'A string representing the name of the integrator actor.',
        example: null,
      }),
    type: z
      .literal('INTEGRATOR')
      .default('INTEGRATOR')
      .openapi({
        description:
          "A string representing the type of actor, with the default value 'INTEGRATOR'.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'name', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('IntegratorActor')

const SystemActorSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A string that uniquely identifies the system actor.',
        example: null,
      }),
    type: z
      .literal('SYSTEM')
      .default('SYSTEM')
      .openapi({
        description:
          "A string that specifies the type of actor, which is 'SYSTEM' for this component.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('SystemActor')

const VisitorActorSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({
        description: "A string representing the URL of the visitor's avatar image.",
        example: null,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the email address of the visitor.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the visitor actor.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string containing the name of the visitor.', example: null }),
    type: z
      .literal('VISITOR')
      .default('VISITOR')
      .openapi({
        description:
          "A string indicating the type of actor, which is 'VISITOR' for this component.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('VisitorActor')

const EmailActorSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description: 'A string containing the email address associated with the actor.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string that uniquely identifies the email actor.',
        example: null,
      }),
    type: z
      .literal('EMAIL')
      .default('EMAIL')
      .openapi({
        description: "A string representing the type of actor, which defaults to 'EMAIL'.",
        example: null,
      }),
  })
  .openapi({ required: ['email', 'id', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('EmailActor')

const LlmActorSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL of the avatar image for the LLM actor.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A unique identifier for the LLM actor, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the LLM actor, represented as a string.',
        example: null,
      }),
    type: z
      .literal('LLM')
      .default('LLM')
      .openapi({
        description:
          "A string indicating the type of actor, which is always 'LLM' for this component.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'type'], example: null, 'x-hubspot-sub-type-impl': true })
  .openapi('LlmActor')

const PublicActorSchema = z
  .xor([
    AgentActorSchema,
    BotActorSchema,
    IntegratorActorSchema,
    SystemActorSchema,
    VisitorActorSchema,
    EmailActorSchema,
    LlmActorSchema,
  ])
  .openapi({ example: null })
  .openapi('PublicActor')

const BatchResponsePublicActorSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to their corresponding URIs, which may provide additional information or resources related to the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(PublicActorSchema)
      .openapi({
        description:
          'An array of PublicActor objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicActor')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human-readable message describing the error along with remediation steps where appropriate. This is a required field.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string indicating the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error condition, with properties as arrays of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects, providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier for the error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs with documentation about the error or recommended remediation steps.',
        example: null,
      }),
    message: z
      .string()
      .openapi({ description: 'A string containing the error message.', example: null }),
    status: z
      .string()
      .openapi({ description: 'The status of the error as a string.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponsePublicActorWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors encountered during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An object containing key-value pairs of link names to their associated URIs.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(PublicActorSchema)
      .openapi({
        description:
          'An array of PublicActor objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicActorWithErrors')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token used to fetch the next set of results in a paginated response.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const PublicFileSchema = z
  .object({
    fileId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the file.',
        example: null,
      }),
    fileUsageType: z
      .enum(['AUDIO', 'IMAGE', 'OTHER', 'STICKER', 'VOICE_RECORDING'])
      .openapi({
        description:
          "A string indicating the usage type of the file. Valid values include 'STICKER', 'VOICE_RECORDING', 'IMAGE', 'AUDIO', and 'OTHER'.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the file.', example: null }),
    type: z
      .literal('FILE')
      .default('FILE')
      .openapi({
        description: "A string indicating the type of the object, which is 'FILE' by default.",
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL where the file can be accessed.',
        example: null,
      }),
  })
  .openapi({
    title: 'FILE',
    required: ['fileId', 'fileUsageType', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFile')

const PublicLocationSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string providing the address of the location.', example: null }),
    latitude: z
      .number()
      .openapi({ description: 'A number indicating the latitude of the location.', example: null }),
    longitude: z
      .number()
      .openapi({
        description: 'A number indicating the longitude of the location.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the location.', example: null }),
    type: z
      .literal('LOCATION')
      .default('LOCATION')
      .openapi({
        description:
          "A string representing the type of the component, which is 'LOCATION' by default.",
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing a URL associated with the location.',
        example: null,
      }),
  })
  .openapi({
    title: 'LOCATION',
    required: ['latitude', 'longitude', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicLocation')

const ContactAddressSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The city where the contact is located. It is a string representing the city name.',
        example: null,
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country where the contact is located. It is a string representing the country name.',
        example: null,
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code representing the country of the contact. It is a string, typically an ISO 3166-1 alpha-2 country code.',
        example: null,
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state or region where the contact is located. It is a string representing the state or region name.',
        example: null,
      }),
    street: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The street address of the contact. It is a string representing the street name and number.',
        example: null,
      }),
    type: z
      .enum(['HOME', 'WORK'])
      .exactOptional()
      .openapi({
        description: "The type of address, indicating whether it is a 'HOME' or 'WORK' address.",
        example: null,
      }),
    zip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The postal code for the contact's address. It is a string representing the ZIP or postal code.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ContactAddress')

const ContactEmailSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description: 'The email address of the contact. This is a required field.',
        example: null,
      }),
    type: z
      .enum(['HOME', 'WORK'])
      .exactOptional()
      .openapi({
        description: "The type of email address, which can be either 'HOME' or 'WORK'.",
        example: null,
      }),
  })
  .openapi({ required: ['email'], example: null })
  .openapi('ContactEmail')

const ContactNameSchema = z
  .object({
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the first name of the contact.',
        example: null,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the last name of the contact.',
        example: null,
      }),
    middleName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional string representing the middle name of the contact.',
        example: null,
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional string representing the prefix of the contact's name, such as 'Mr.', 'Ms.', or 'Dr.'.",
        example: null,
      }),
    suffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional string representing the suffix of the contact's name, such as 'Jr.', 'Sr.', or 'III'.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ContactName')

const ContactOrgSchema = z
  .object({
    company: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the company the contact is associated with.',
        example: null,
      }),
    department: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The department within the company where the contact works.',
        example: null,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The professional title or position held by the contact within the company.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ContactOrg')

const ContactPhoneSchema = z
  .object({
    phone: z
      .string()
      .openapi({
        description: 'The phone number associated with the contact. This is a required field.',
        example: null,
      }),
    type: z
      .enum(['CELL', 'HOME', 'MAIN', 'WORK'])
      .exactOptional()
      .openapi({
        description: "The type of phone, which can be 'CELL', 'MAIN', 'HOME', or 'WORK'.",
        example: null,
      }),
  })
  .openapi({ required: ['phone'], example: null })
  .openapi('ContactPhone')

const ContactUrlSchema = z
  .object({
    type: z
      .enum(['HOME', 'WORK'])
      .exactOptional()
      .openapi({
        description: "The type of URL, which can be either 'HOME' or 'WORK'.",
        example: null,
      }),
    url: z
      .string()
      .openapi({
        description: 'The actual URL string associated with the contact.',
        example: null,
      }),
  })
  .openapi({ required: ['url'], example: null })
  .openapi('ContactUrl')

const ContactProfileSchema = z
  .object({
    addresses: z
      .array(ContactAddressSchema)
      .openapi({
        description:
          'An array of addresses associated with the contact, where each address includes type (e.g., HOME, WORK), street, city, state, zip, country, and country code.',
        example: null,
      }),
    emails: z
      .array(ContactEmailSchema)
      .openapi({
        description:
          'An array of email addresses associated with the contact, where each email includes type (e.g., HOME, WORK) and the email address itself.',
        example: null,
      }),
    name: ContactNameSchema.exactOptional(),
    org: ContactOrgSchema.exactOptional(),
    phones: z
      .array(ContactPhoneSchema)
      .openapi({
        description:
          'An array of phone numbers associated with the contact, where each phone number includes type (e.g., CELL, MAIN, HOME, WORK) and the phone number itself.',
        example: null,
      }),
    urls: z
      .array(ContactUrlSchema)
      .openapi({
        description:
          'An array of URLs associated with the contact, where each URL includes type (e.g., HOME, WORK) and the URL itself.',
        example: null,
      }),
  })
  .openapi({ required: ['addresses', 'emails', 'phones', 'urls'], example: null })
  .openapi('ContactProfile')

const PublicContactSchema = z
  .object({
    contactProfile: ContactProfileSchema,
    type: z
      .literal('CONTACT')
      .default('CONTACT')
      .openapi({
        description: "A string indicating the type of the object, which is 'CONTACT' by default.",
        example: null,
      }),
  })
  .openapi({
    title: 'CONTACT',
    required: ['contactProfile', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicContact')

const PublicUnsupportedContentSchema = z
  .object({
    type: z
      .literal('UNSUPPORTED_CONTENT')
      .default('UNSUPPORTED_CONTENT')
      .openapi({
        description:
          "A string indicating the type of content. The default value is 'UNSUPPORTED_CONTENT', and it must be 'UNSUPPORTED_CONTENT'.",
        example: null,
      }),
  })
  .openapi({
    title: 'UNSUPPORTED_CONTENT',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicUnsupportedContent')

const PublicMessageHeaderSchema = z
  .object({
    fileId: z
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
        description:
          'An integer representing the ID of a file associated with the message header, formatted as an int64.',
        example: null,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the text content of the message header.',
        example: null,
      }),
    type: z
      .literal('MESSAGE_HEADER')
      .default('MESSAGE_HEADER')
      .openapi({
        description:
          "A string indicating the type of the message header. The default and only valid value is 'MESSAGE_HEADER'.",
        example: null,
      }),
  })
  .openapi({
    title: 'MESSAGE_HEADER',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicMessageHeader')

const QuickReplySchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable label for the quick reply, displayed to the user.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'The actual content or data of the quick reply, represented as a string.',
        example: null,
      }),
    valueType: z
      .enum(['TEXT', 'URL'])
      .openapi({
        description: "Indicates the type of the value, which can be either 'TEXT' or 'URL'.",
        example: null,
      }),
  })
  .openapi({ required: ['value', 'valueType'], example: null })
  .openapi('QuickReply')

const PublicQuickRepliesSchema = z
  .object({
    allowMultiSelect: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the user can select multiple quick replies at once.',
        example: null,
      }),
    allowUserInput: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the user is allowed to input their own response in addition to selecting from the quick replies.',
        example: null,
      }),
    quickReplies: z
      .array(QuickReplySchema)
      .openapi({
        description:
          'An array of QuickReply objects, each representing a single quick reply option available to the user.',
        example: null,
      }),
    type: z
      .literal('QUICK_REPLIES')
      .default('QUICK_REPLIES')
      .openapi({
        description:
          "A string indicating the type of the component, with a default value of 'QUICK_REPLIES'.",
        example: null,
      }),
  })
  .openapi({
    title: 'QUICK_REPLIES',
    required: ['allowMultiSelect', 'allowUserInput', 'quickReplies', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicQuickReplies')

const PublicWhatsAppTemplateMetadataSchema = z
  .object({
    contentId: z
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
        description:
          'An integer representing the ID of the content associated with the template. This is a 64-bit integer.',
        example: null,
      }),
    crmObjectIds: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'An object that maps CRM object names to their respective IDs, where each ID is a 64-bit integer.',
        example: null,
      }),
    mappedTemplateId: z
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
        description:
          'An integer representing the ID of the mapped template. This is a 64-bit integer.',
        example: null,
      }),
    parameters: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where each key is a parameter name and each value is a string representing the parameter value.',
        example: null,
      }),
    rootMicId: z
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
        description:
          'An integer representing the root MIC ID associated with the template. This is a 64-bit integer.',
        example: null,
      }),
    type: z
      .literal('WHATSAPP_TEMPLATE_METADATA')
      .default('WHATSAPP_TEMPLATE_METADATA')
      .openapi({
        description:
          "A string representing the type of the metadata, which is always 'WHATSAPP_TEMPLATE_METADATA'.",
        example: null,
      }),
  })
  .openapi({
    title: 'WHATSAPP_TEMPLATE_METADATA',
    required: ['crmObjectIds', 'parameters', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicWhatsAppTemplateMetadata')

const SocialMetadataSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the media content.', example: null }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the media.', example: null }),
    mediaTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the media content.', example: null }),
    mediaType: z
      .enum([
        'ARTICLE',
        'AUDIO',
        'CAROUSEL',
        'DOCUMENT',
        'GIF',
        'LINK',
        'NONE',
        'PHOTO',
        'POLL',
        'STORY',
        'VIDEO',
      ])
      .openapi({
        description:
          "The type of media represented, such as 'PHOTO', 'VIDEO', 'CAROUSEL', etc. This is a required field.",
        example: null,
      }),
    mediaUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL where the media can be accessed.', example: null }),
    mediaUrlString: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the URL of the media.', example: null }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the thumbnail image for the media.', example: null }),
  })
  .openapi({ required: ['mediaType'], example: null })
  .openapi('SocialMetadata')

const PublicSocialMetadataAttachmentSchema = z
  .object({
    socialMetadata: SocialMetadataSchema,
    type: z
      .literal('SOCIAL_MEDIA_METADATA')
      .default('SOCIAL_MEDIA_METADATA')
      .openapi({
        description:
          "A string indicating the type of metadata, which is always 'SOCIAL_MEDIA_METADATA'.",
        example: null,
      }),
  })
  .openapi({
    title: 'SOCIAL_MEDIA_METADATA',
    required: ['socialMetadata', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSocialMetadataAttachment')

const PublicClientSchema = z
  .object({
    clientType: z
      .enum(['HUBSPOT', 'INTEGRATION', 'SYSTEM', 'UNKNOWN'])
      .openapi({
        description:
          "The type of client interacting with the API. Valid values include 'HUBSPOT', 'SYSTEM', 'INTEGRATION', and 'UNKNOWN'.",
        example: null,
      }),
    integrationAppId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An optional identifier for the integration application associated with the client. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['clientType'], example: null })
  .openapi('PublicClient')

const PublicDeliveryIdentifierSchema = z
  .object({
    type: z
      .enum(['CHANNEL_SPECIFIC_OPAQUE_ID', 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE'])
      .openapi({
        description:
          "A string indicating the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.",
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'A string representing the actual value of the delivery identifier, such as an email address or phone number.',
        example: null,
      }),
  })
  .openapi({ required: ['type', 'value'], example: null })
  .openapi('PublicDeliveryIdentifier')

const PublicRecipientSchema = z
  .object({
    actorId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the actor, represented as a string.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the recipient, represented as a string.',
        example: null,
      }),
    recipientField: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a specific field related to the recipient.',
        example: null,
      }),
  })
  .openapi({ required: ['deliveryIdentifier'], example: null })
  .openapi('PublicRecipient')

const PublicSenderSchema = z
  .object({
    actorId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the sender, represented as a string.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the sender, represented as a string.', example: null }),
    senderField: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string field associated with the sender, purpose unspecified.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicSender')

const PublicMessageFailureDetailsSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing a description of the error encountered during message processing.',
        example: null,
      }),
    errorMessageTokens: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs where each key is a token name and each value is a string. These tokens provide additional context or details related to the error message.',
        example: null,
      }),
  })
  .openapi({ required: ['errorMessageTokens'], example: null })
  .openapi('PublicMessageFailureDetails')

const PublicMessageStatusSchema = z
  .object({
    failureDetails: PublicMessageFailureDetailsSchema.exactOptional(),
    statusType: z
      .enum(['FAILED', 'READ', 'RECEIVED', 'SENT'])
      .openapi({
        description:
          "The type of status for the message. Valid values include 'SENT', 'FAILED', 'RECEIVED', and 'READ'.",
        example: null,
      }),
  })
  .openapi({ required: ['statusType'], example: null })
  .openapi('PublicMessageStatus')

const PublicConversationsMessageSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this message is archived.',
        example: null,
      }),
    attachments: z
      .array(
        z
          .xor([
            PublicFileSchema,
            PublicLocationSchema,
            PublicContactSchema,
            PublicUnsupportedContentSchema,
            PublicMessageHeaderSchema,
            PublicQuickRepliesSchema,
            PublicWhatsAppTemplateMetadataSchema,
            PublicSocialMetadataAttachmentSchema,
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of attachments included with this message, which can be of various types such as files, locations, or social media metadata.',
        example: null,
      }),
    channelAccountId: z
      .string()
      .openapi({
        description: 'The identifier of the channel account associated with this message.',
        example: null,
      }),
    channelId: z
      .string()
      .openapi({
        description: 'The identifier of the channel through which this message was sent.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description: 'The identifier of the conversation thread to which this message belongs.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this message was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the actor who created this message.',
        example: null,
      }),
    direction: z
      .enum(['INCOMING', 'OUTGOING'])
      .openapi({
        description:
          "The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.",
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this message.', example: null }),
    inReplyToId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the message to which this message is a reply, if applicable.',
        example: null,
      }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description:
          'An array of recipients of this message, each represented as a PublicRecipient object.',
        example: null,
      }),
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The rich text content of the message, which may include formatting.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description:
          'An array of senders involved in this message, each represented as a PublicSender object.',
        example: null,
      }),
    status: PublicMessageStatusSchema.exactOptional(),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject of the message, if applicable.', example: null }),
    text: z
      .string()
      .openapi({ description: 'The plain text content of the message.', example: null }),
    truncationStatus: z
      .enum(['NOT_TRUNCATED', 'TRUNCATED', 'TRUNCATED_TO_MOST_RECENT_REPLY'])
      .openapi({
        description:
          "Indicates the truncation status of the message content, with possible values being 'NOT_TRUNCATED', 'TRUNCATED_TO_MOST_RECENT_REPLY', or 'TRUNCATED'.",
        example: null,
      }),
    type: z
      .literal('MESSAGE')
      .default('MESSAGE')
      .openapi({
        description: "The type of the message, which is always 'MESSAGE'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this message was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'attachments',
      'channelAccountId',
      'channelId',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'direction',
      'id',
      'recipients',
      'senders',
      'text',
      'truncationStatus',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicConversationsMessage')

const PublicCommentSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the comment is archived.',
        example: null,
      }),
    attachments: z
      .array(
        z
          .xor([
            PublicFileSchema,
            PublicLocationSchema,
            PublicContactSchema,
            PublicUnsupportedContentSchema,
            PublicMessageHeaderSchema,
            PublicQuickRepliesSchema,
            PublicWhatsAppTemplateMetadataSchema,
            PublicSocialMetadataAttachmentSchema,
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of attachments associated with the comment, which can include files, locations, contacts, and other types of content.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the conversation thread to which this comment belongs.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the comment was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the user who created the comment.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the comment.', example: null }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description:
          'An array of recipients associated with the comment, each represented by a PublicRecipient object.',
        example: null,
      }),
    richText: z
      .string()
      .openapi({
        description: 'The rich text content of the comment, which may include formatting.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description:
          'An array of senders associated with the comment, each represented by a PublicSender object.',
        example: null,
      }),
    text: z
      .string()
      .openapi({ description: 'The plain text content of the comment.', example: null }),
    type: z
      .literal('COMMENT')
      .default('COMMENT')
      .openapi({
        description: "The type of the message, which is always 'COMMENT' for this component.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the comment was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'attachments',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'id',
      'recipients',
      'richText',
      'senders',
      'text',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicComment')

const PublicWelcomeMessageSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this welcome message is archived.',
        example: null,
      }),
    channelAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the channel account associated with this welcome message.',
        example: null,
      }),
    channelId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the channel through which this welcome message is sent.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the conversation thread to which this welcome message belongs.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this welcome message was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the user or system that created this welcome message.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this welcome message.', example: null }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description: 'An array of objects representing the recipients of this welcome message.',
        example: null,
      }),
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The rich text content of the welcome message, which may include formatting.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description: 'An array of objects representing the senders of this welcome message.',
        example: null,
      }),
    text: z
      .string()
      .openapi({ description: 'The plain text content of the welcome message.', example: null }),
    type: z
      .literal('WELCOME_MESSAGE')
      .default('WELCOME_MESSAGE')
      .openapi({
        description:
          "A string indicating the type of message, which is 'WELCOME_MESSAGE' by default.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when this welcome message was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'channelAccountId',
      'channelId',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'id',
      'recipients',
      'senders',
      'text',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicWelcomeMessage')

const PublicAssignmentMessageSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this message is archived.',
        example: null,
      }),
    assignedFrom: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the actor from whom the conversation was assigned.',
        example: null,
      }),
    assignedTo: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the actor to whom the conversation is assigned.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the conversation thread associated with this message.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this message was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the actor who created this message.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this assignment message.',
        example: null,
      }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description:
          'An array of recipients involved in this message, each represented by a PublicRecipient object.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description:
          'An array of senders involved in this message, each represented by a PublicSender object.',
        example: null,
      }),
    type: z
      .literal('ASSIGNMENT')
      .default('ASSIGNMENT')
      .openapi({ description: "The type of message, which is 'ASSIGNMENT'.", example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this message was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'id',
      'recipients',
      'senders',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAssignmentMessage')

const PublicThreadStatusChangeSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this status change has been archived.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the conversation thread whose status is being changed.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this status change was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the user or system that created this status change.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this status change.', example: null }),
    newStatus: z
      .enum(['CLOSED', 'OPEN'])
      .openapi({
        description:
          "A string representing the new status of the thread. Valid values include 'OPEN' and 'CLOSED'.",
        example: null,
      }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description:
          'An array of objects representing the recipients involved in this status change.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description: 'An array of objects representing the senders involved in this status change.',
        example: null,
      }),
    type: z
      .literal('THREAD_STATUS_CHANGE')
      .default('THREAD_STATUS_CHANGE')
      .openapi({
        description: "A string indicating the type of change. Defaults to 'THREAD_STATUS_CHANGE'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when this status change was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'id',
      'newStatus',
      'recipients',
      'senders',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicThreadStatusChange')

const PublicThreadInboxChangeSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this inbox change event has been archived.',
        example: null,
      }),
    client: PublicClientSchema,
    conversationsThreadId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the conversation thread associated with this inbox change.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this inbox change was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .string()
      .openapi({
        description: 'The identifier of the user or system that created this inbox change.',
        example: null,
      }),
    fromInboxId: z
      .string()
      .openapi({
        description: 'The unique identifier of the inbox from which the thread is moved.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this inbox change event.',
        example: null,
      }),
    recipients: z
      .array(PublicRecipientSchema)
      .openapi({
        description:
          'An array of objects representing the recipients involved in the conversation thread.',
        example: null,
      }),
    senders: z
      .array(PublicSenderSchema)
      .openapi({
        description:
          'An array of objects representing the senders involved in the conversation thread.',
        example: null,
      }),
    toInboxId: z
      .string()
      .openapi({
        description: 'The unique identifier of the inbox to which the thread is moved.',
        example: null,
      }),
    type: z
      .literal('THREAD_INBOX_CHANGE')
      .default('THREAD_INBOX_CHANGE')
      .openapi({
        description: "A string indicating the type of change, which is 'THREAD_INBOX_CHANGE'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when this inbox change was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'client',
      'conversationsThreadId',
      'createdAt',
      'createdBy',
      'fromInboxId',
      'id',
      'recipients',
      'senders',
      'toInboxId',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicThreadInboxChange')

const CollectionResponsePublicMessageForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(
        z
          .xor([
            PublicConversationsMessageSchema,
            PublicCommentSchema,
            PublicWelcomeMessageSchema,
            PublicAssignmentMessageSchema,
            PublicThreadStatusChangeSchema,
            PublicThreadInboxChangeSchema,
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of public messages, which can include various types such as conversations messages, comments, welcome messages, assignment messages, thread status changes, and thread inbox changes.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicMessageForwardPaging')

const PublicThreadAssociationsSchema = z
  .object({
    associatedTicketId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the associated ticket, represented as a string.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicThreadAssociations')

const PublicThreadSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the thread is archived.',
        example: null,
      }),
    assignedTo: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the user to whom the thread is assigned.',
        example: null,
      }),
    associatedContactId: z
      .string()
      .openapi({
        description: 'The identifier of the contact associated with the thread.',
        example: null,
      }),
    closedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the thread was closed, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the thread was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the conversation thread.',
        example: null,
      }),
    inboxId: z
      .string()
      .openapi({
        description: 'The identifier of the inbox where the thread is located.',
        example: null,
      }),
    latestMessageReceivedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the latest message was received, in ISO 8601 format.',
        example: null,
      }),
    latestMessageSentTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the latest message was sent, in ISO 8601 format.',
        example: null,
      }),
    latestMessageTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time of the latest message in the thread, in ISO 8601 format.',
        example: null,
      }),
    originalChannelAccountId: z
      .string()
      .openapi({
        description: 'The identifier of the original channel account associated with the thread.',
        example: null,
      }),
    originalChannelId: z
      .string()
      .openapi({
        description: 'The identifier of the original channel where the thread was initiated.',
        example: null,
      }),
    spam: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the thread is marked as spam.',
        example: null,
      }),
    status: z
      .enum(['CLOSED', 'OPEN'])
      .openapi({
        description: "The current status of the thread. Valid values include 'OPEN' and 'CLOSED'.",
        example: null,
      }),
    threadAssociations: PublicThreadAssociationsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'archived',
      'associatedContactId',
      'createdAt',
      'id',
      'inboxId',
      'originalChannelAccountId',
      'originalChannelId',
      'spam',
      'status',
    ],
    example: null,
  })
  .openapi('PublicThread')

const CollectionResponsePublicThreadForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicThreadSchema)
      .openapi({
        description:
          'An array of PublicThread objects, representing the individual threads in the collection.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicThreadForwardPaging')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string token used to identify the position before the current page in the pagination sequence.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that links to the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const PublicChannelSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the channel, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the channel, represented as a string.', example: null }),
  })
  .openapi({ required: ['id', 'name'], example: null })
  .openapi('PublicChannel')

const CollectionResponseWithTotalPublicChannelSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicChannelSchema)
      .openapi({
        description:
          'An array containing the public channel objects. Each item in the array is a reference to a PublicChannel schema.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of public channels available. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicChannel')

const PublicChannelAccountSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is currently active.',
        example: null,
      }),
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the channel account was archived, in ISO 8601 format.',
        example: null,
      }),
    authorized: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the channel account is authorized.',
        example: null,
      }),
    channelId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the channel associated with this account, represented as a string.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the channel account was created, in ISO 8601 format.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the channel account, represented as a string.',
        example: null,
      }),
    inboxId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the inbox associated with this channel account, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the channel account, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'active',
      'archived',
      'authorized',
      'channelId',
      'createdAt',
      'id',
      'inboxId',
      'name',
    ],
    example: null,
  })
  .openapi('PublicChannelAccount')

const CollectionResponseWithTotalPublicChannelAccountSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicChannelAccountSchema)
      .openapi({
        description:
          'An array of public channel account objects, each containing details about a specific channel account.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description:
          'The total number of public channel accounts available. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicChannelAccount')

const PublicInboxSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the inbox is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the inbox was archived, in ISO 8601 format. This property is optional.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the inbox was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the inbox. It is a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the inbox. It is a string.', example: null }),
    type: z
      .enum(['HELP_DESK', 'INBOX'])
      .openapi({
        description: "The type of the inbox, which can be either 'INBOX' or 'HELP_DESK'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the inbox was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['archived', 'createdAt', 'id', 'name', 'type', 'updatedAt'],
    example: null,
  })
  .openapi('PublicInbox')

const CollectionResponseWithTotalPublicInboxSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicInboxSchema)
      .openapi({
        description:
          'An array of public inbox objects, each representing a single inbox with its details.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of public inboxes available. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicInbox')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'The error category, represented as a string.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties that are arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets. It is a string in UUID format.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Further information about the error, represented as an array of ErrorDetail objects.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps. It is an object with string properties.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error. It is a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PublicFileEggSchema = z
  .object({
    fileId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the file.',
        example: null,
      }),
    type: z
      .literal('FILE')
      .default('FILE')
      .openapi({
        description: "A string indicating the type of the component, which is always 'FILE'.",
        example: null,
      }),
  })
  .openapi({
    title: 'FILE',
    required: ['fileId', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFileEgg')

const PublicQuickRepliesEggSchema = z
  .object({
    quickReplies: z
      .array(QuickReplySchema)
      .openapi({
        description:
          'An array of QuickReply objects, each representing an individual quick reply option available to the user.',
        example: null,
      }),
    type: z
      .literal('QUICK_REPLIES')
      .default('QUICK_REPLIES')
      .openapi({
        description: "A string indicating the type of the component, which is 'QUICK_REPLIES'.",
        example: null,
      }),
  })
  .openapi({
    title: 'QUICK_REPLIES',
    required: ['quickReplies', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicQuickRepliesEgg')

const PublicSocialMediaEggSchema = z
  .object({
    socialMetadata: SocialMetadataSchema,
    type: z
      .literal('SOCIAL_MEDIA_METADATA')
      .default('SOCIAL_MEDIA_METADATA')
      .openapi({
        description:
          "A string that specifies the type of the component. The default value is 'SOCIAL_MEDIA_METADATA'.",
        example: null,
      }),
  })
  .openapi({
    title: 'SOCIAL_MEDIA_METADATA',
    required: ['socialMetadata', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSocialMediaEgg')

const PublicCommentEggSchema = z
  .object({
    attachments: z
      .array(
        z
          .xor([PublicFileEggSchema, PublicQuickRepliesEggSchema, PublicSocialMediaEggSchema])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of attachments associated with the comment. Each attachment can be a file, quick reply, or social media metadata.',
        example: null,
      }),
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing the rich text content of the comment, allowing for formatting.',
        example: null,
      }),
    text: z
      .string()
      .openapi({
        description: 'A string containing the plain text content of the comment.',
        example: null,
      }),
    type: z
      .literal('COMMENT')
      .default('COMMENT')
      .openapi({
        description: "A string indicating the type of the object, which is 'COMMENT' by default.",
        example: null,
      }),
  })
  .openapi({
    required: ['attachments', 'text', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicCommentEgg')

const PublicRecipientEggSchema = z
  .object({
    actorId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the actor, represented as a string.',
        example: null,
      }),
    deliveryIdentifier: PublicDeliveryIdentifierSchema.exactOptional(),
    deliveryIdentifiers: z
      .array(PublicDeliveryIdentifierSchema)
      .openapi({
        description:
          'An array of delivery identifiers, each represented by a PublicDeliveryIdentifier object, used to specify the methods or channels through which the recipient can receive messages.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the recipient, represented as a string.',
        example: null,
      }),
    recipientField: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A field associated with the recipient, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['deliveryIdentifiers'], example: null })
  .openapi('PublicRecipientEgg')

const PublicConversationsMessageEggSchema = z
  .object({
    attachments: z
      .array(
        z
          .xor([PublicFileEggSchema, PublicQuickRepliesEggSchema, PublicSocialMediaEggSchema])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          'An array of attachments associated with the message. Each attachment can be a file, quick reply, or social media metadata.',
        example: null,
      }),
    channelAccountId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the channel account used to send the message.',
        example: null,
      }),
    channelId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the channel through which the message is sent.',
        example: null,
      }),
    recipients: z
      .array(PublicRecipientEggSchema)
      .openapi({
        description:
          'An array of recipient objects representing the intended recipients of the message.',
        example: null,
      }),
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the rich text content of the message.',
        example: null,
      }),
    senderActorId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the sender actor.',
        example: null,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the subject of the message.', example: null }),
    text: z
      .string()
      .openapi({
        description: 'A string containing the plain text content of the message.',
        example: null,
      }),
    type: z
      .literal('MESSAGE')
      .default('MESSAGE')
      .openapi({
        description: "A string indicating the type of message. The default value is 'MESSAGE'.",
        example: null,
      }),
  })
  .openapi({
    required: [
      'attachments',
      'channelAccountId',
      'channelId',
      'recipients',
      'senderActorId',
      'text',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicConversationsMessageEgg')

const PublicMessageSchema = z
  .xor([
    PublicConversationsMessageSchema,
    PublicCommentSchema,
    PublicWelcomeMessageSchema,
    PublicAssignmentMessageSchema,
    PublicThreadStatusChangeSchema,
    PublicThreadInboxChangeSchema,
  ])
  .openapi({ example: null })
  .openapi('PublicMessage')

const PublicMessageContentSchema = z
  .object({
    richText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the rich text content of the message, which may include formatting and other rich text features.',
        example: null,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the plain text content of the message.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicMessageContent')

const PublicMessageEggSchema = z
  .xor([PublicConversationsMessageEggSchema, PublicCommentEggSchema])
  .openapi({ example: null })
  .openapi('PublicMessageEgg')

const PublicThreadAssignRequestSchema = z
  .object({
    actorId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the actor to be assigned to the thread. It is a required string property.',
        example: null,
      }),
  })
  .openapi({ required: ['actorId'], example: null })
  .openapi('PublicThreadAssignRequest')

const PublicThreadUpdateRequestSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the thread is archived.',
        example: null,
      }),
    status: z
      .enum(['CLOSED', 'OPEN'])
      .exactOptional()
      .openapi({
        description: "The current status of the thread. Valid values include 'OPEN' and 'CLOSED'.",
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicThreadUpdateRequest')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { 'conversations.read': '', 'conversations.write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postConversationsConversations202609ActorsBatchReadRoute = createRoute({
  method: 'post',
  path: '/conversations/conversations/2026-09/actors/batch/read',
  tags: ['Actors'],
  summary: 'Batch read actors',
  description:
    'Retrieve information about multiple actors in a batch operation. This endpoint is useful for obtaining details on various actors in a single request, streamlining data retrieval processes.',
  operationId:
    'post-/conversations/conversations/2026-09/actors/batch/read_/conversations/conversations/2026-09-beta/actors/batch/read',
  request: {
    query: z.object({
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description:
              'A string representing the specific property to be included in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchInputStringSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePublicActorSchema, example: null } },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': { schema: BatchResponsePublicActorWithErrorsSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ActorsActorIdRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/actors/{actorId}',
  tags: ['Actors'],
  summary: 'Retrieve actor',
  description:
    'Retrieve information about a specific actor in the conversations system using their unique actor ID. This endpoint is useful for obtaining details about a particular actor, which could be an agent, bot, or other entity involved in conversations.',
  operationId:
    'get-/conversations/conversations/2026-09/actors/{actorId}_/conversations/conversations/2026-09-beta/actors/{actorId}',
  request: {
    params: z.object({
      actorId: z
        .string()
        .openapi({
          param: {
            name: 'actorId',
            in: 'path',
            description: 'The unique identifier of the actor to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description:
              'A string representing a specific property of the actor to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicActorSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ChannelAccountsRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/channel-accounts',
  tags: ['Channel accounts'],
  summary: 'List channel accounts',
  description:
    "Retrieve a list of channel accounts associated with your HubSpot account. This endpoint allows you to filter results by channel ID, inbox ID, and other criteria. It's useful for managing and reviewing the channel accounts linked to your conversations.",
  operationId:
    'get-/conversations/conversations/2026-09/channel-accounts_/conversations/conversations/2026-09-beta/channel-accounts',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              "A cursor token for pagination. Use the value from the previous response's paging.next.after field.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      channelId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32(),
              )
              .openapi({ example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'channelId',
            in: 'query',
            description:
              'A list of channel IDs to filter the results. Each ID should be an integer.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int32', example: null },
            },
          },
          example: null,
        }),
      defaultPageLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultPageLength',
            in: 'query',
            description: 'The default number of results to display per page if not specified.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      inboxId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32(),
              )
              .openapi({ example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'inboxId',
            in: 'query',
            description: 'A list of inbox IDs to filter the results. Each ID should be an integer.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int32', example: null },
            },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'A list of fields to sort the results by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicChannelAccountSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ChannelAccountsChannelAccountIdRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/channel-accounts/{channelAccountId}',
  tags: ['Channel accounts'],
  summary: 'Retrieve Channel Account',
  description:
    'Retrieve details of a specific channel account in your HubSpot account using the unique channelAccountId. This endpoint is useful for accessing information about a particular channel account, including its archived status.',
  operationId:
    'get-/conversations/conversations/2026-09/channel-accounts/{channelAccountId}_/conversations/conversations/2026-09-beta/channel-accounts/{channelAccountId}',
  request: {
    params: z.object({
      channelAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'channelAccountId',
            in: 'path',
            description: 'The unique identifier of the channel account to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description:
              'Whether to return only results that have been archived. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicChannelAccountSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ChannelsRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/channels',
  tags: ['Channels'],
  summary: 'List channels',
  description:
    'Retrieve a list of channels in your HubSpot account. This endpoint supports pagination and sorting, allowing you to manage large sets of data effectively. Use this endpoint to get an overview of all available channels.',
  operationId:
    'get-/conversations/conversations/2026-09/channels_/conversations/conversations/2026-09-beta/channels',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      defaultPageLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultPageLength',
            in: 'query',
            description: 'An integer specifying the default number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'An array of strings specifying the sort order of the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicChannelSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ChannelsChannelIdRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/channels/{channelId}',
  tags: ['Channels'],
  summary: 'Retrieve channel',
  description:
    "Retrieve details of a specific channel in your HubSpot account using the channel's unique identifier. This endpoint is useful for accessing channel-specific information, which can be used for managing or analyzing communication channels.",
  operationId:
    'get-/conversations/conversations/2026-09/channels/{channelId}_/conversations/conversations/2026-09-beta/channels/{channelId}',
  request: {
    params: z.object({
      channelId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            description:
              'The unique identifier of the channel to retrieve. It is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicChannelSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609InboxesRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/inboxes',
  tags: ['Inboxes'],
  summary: 'List Inboxes',
  description:
    'Retrieve a list of inboxes in your HubSpot account. This endpoint allows you to paginate through results and sort them as needed. It can also filter to include only archived inboxes.',
  operationId:
    'get-/conversations/conversations/2026-09/inboxes_/conversations/conversations/2026-09-beta/inboxes',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      defaultPageLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultPageLength',
            in: 'query',
            description: 'The default number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'A list of fields to sort the results by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseWithTotalPublicInboxSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609InboxesInboxIdRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/inboxes/{inboxId}',
  tags: ['Inboxes'],
  summary: 'Retrieve inbox',
  description:
    'Retrieve details of a specific inbox within your HubSpot account using its unique identifier. This endpoint allows you to access information about the inbox, including whether it is archived. It is useful for managing and organizing conversations within different inboxes.',
  operationId:
    'get-/conversations/conversations/2026-09/inboxes/{inboxId}_/conversations/conversations/2026-09-beta/inboxes/{inboxId}',
  request: {
    params: z.object({
      inboxId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'inboxId',
            in: 'path',
            description: 'The unique identifier of the inbox to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description:
              'Whether to return only results that have been archived. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicInboxSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ThreadsRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/threads',
  tags: ['Threads'],
  summary: 'List threads',
  description:
    'Retrieve a list of conversation threads from the specified inboxes. This endpoint allows filtering by associated contact or ticket, thread status, and other parameters. It supports pagination and sorting to help manage large sets of data effectively.',
  operationId:
    'get-/conversations/conversations/2026-09/threads_/conversations/conversations/2026-09-beta/threads',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      associatedContactId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'associatedContactId',
            in: 'query',
            description: 'The unique identifier of the associated contact to filter threads.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      associatedTicketId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'associatedTicketId',
            in: 'query',
            description: 'The unique identifier of the associated ticket to filter threads.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      association: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('TICKET').openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'association',
            in: 'query',
            description:
              "A list of associations to filter the threads by. Valid values include 'TICKET'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'string', example: null, enum: ['TICKET'] },
            },
          },
          example: null,
        }),
      inboxId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.int32(),
              )
              .openapi({ example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'inboxId',
            in: 'query',
            description: 'A list of inbox IDs to filter the threads by.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int32', example: null },
            },
          },
          example: null,
        }),
      latestMessageTimestampAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'latestMessageTimestampAfter',
            in: 'query',
            description:
              'Filter threads to only include those with a latest message timestamp after this date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'A specific property to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'A list of fields to sort the results by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      threadStatus: z
        .enum(['CLOSED', 'OPEN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'threadStatus',
            in: 'query',
            description:
              "The status of the thread to filter by. Valid values are 'OPEN' and 'CLOSED'.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['CLOSED', 'OPEN'] },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicThreadForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const getConversationsConversations202609ThreadsThreadIdRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/threads/{threadId}',
  tags: ['Threads'],
  summary: 'Retrieve thread',
  description:
    'Retrieve details of a specific conversation thread using its unique identifier. This endpoint allows you to access information about the thread, including its properties and associations. It is useful for fetching thread details for further processing or display.',
  operationId:
    'get-/conversations/conversations/2026-09/threads/{threadId}_/conversations/conversations/2026-09-beta/threads/{threadId}',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description: 'The unique identifier of the thread to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      association: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('TICKET').openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'association',
            in: 'query',
            description:
              "A list of associations to include in the response. Valid values include 'TICKET'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'string', example: null, enum: ['TICKET'] },
            },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'A specific property to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicThreadSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const deleteConversationsConversations202609ThreadsThreadIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/conversations/2026-09/threads/{threadId}',
  tags: ['Threads'],
  summary: 'Delete thread',
  description:
    'Delete a specific conversation thread in your HubSpot account. This operation removes the thread identified by the threadId from the system. Use this endpoint to manage and clean up conversation threads that are no longer needed.',
  operationId:
    'delete-/conversations/conversations/2026-09/threads/{threadId}_/conversations/conversations/2026-09-beta/threads/{threadId}',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description: 'The unique identifier of the thread to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['conversations.write'] }],
})

export const patchConversationsConversations202609ThreadsThreadIdRoute = createRoute({
  method: 'patch',
  path: '/conversations/conversations/2026-09/threads/{threadId}',
  tags: ['Threads'],
  summary: 'Update thread',
  description:
    'Update the details of a specific conversation thread in your HubSpot account. This endpoint allows you to modify the status or other attributes of the thread identified by the threadId. It is useful for managing the state of conversation threads, such as marking them as open or closed.',
  operationId:
    'patch-/conversations/conversations/2026-09/threads/{threadId}_/conversations/conversations/2026-09-beta/threads/{threadId}',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description: 'The unique identifier of the conversation thread to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description:
              'Whether to return only results that have been archived. This is a boolean value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicThreadUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicThreadSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.write'] }],
})

export const putConversationsConversations202609ThreadsThreadIdAssigneeRoute = createRoute({
  method: 'put',
  path: '/conversations/conversations/2026-09/threads/{threadId}/assignee',
  tags: ['Threads'],
  summary: 'Update assignee',
  description:
    'Assign a specific actor to a conversation thread in your HubSpot account. This endpoint allows you to update the assignee for a given thread, which can be useful for managing workload distribution among team members.',
  operationId:
    'put-/conversations/conversations/2026-09/threads/{threadId}/assignee_/conversations/conversations/2026-09-beta/threads/{threadId}/assignee',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description:
              'The unique identifier of the thread for which the assignee is being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicThreadAssignRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicThreadSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.write'] }],
})

export const deleteConversationsConversations202609ThreadsThreadIdAssigneeRoute = createRoute({
  method: 'delete',
  path: '/conversations/conversations/2026-09/threads/{threadId}/assignee',
  tags: ['Threads'],
  summary: 'Delete assignee',
  description:
    'Remove the assignee from a specific conversation thread in your HubSpot account. This operation is useful when you want to unassign a thread from a user, making it available for reassignment or indicating that it no longer requires a specific assignee.',
  operationId:
    'delete-/conversations/conversations/2026-09/threads/{threadId}/assignee_/conversations/conversations/2026-09-beta/threads/{threadId}/assignee',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description:
              'The unique identifier of the thread from which the assignee will be removed.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['conversations.write'] }],
})

export const getConversationsConversations202609ThreadsThreadIdMessagesRoute = createRoute({
  method: 'get',
  path: '/conversations/conversations/2026-09/threads/{threadId}/messages',
  tags: ['Messages'],
  summary: 'Retrieve messages',
  description:
    'Retrieve messages from a specific conversation thread in your HubSpot account. This endpoint allows you to access all messages associated with a given thread, which can be useful for reviewing conversation history or analyzing communication patterns.',
  operationId:
    'get-/conversations/conversations/2026-09/threads/{threadId}/messages_/conversations/conversations/2026-09-beta/threads/{threadId}/messages',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description:
              'The unique identifier of the conversation thread to retrieve messages from.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'property',
            in: 'query',
            description: 'A specific property to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'An array of strings to specify the sorting order of the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicMessageForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.read'] }],
})

export const postConversationsConversations202609ThreadsThreadIdMessagesRoute = createRoute({
  method: 'post',
  path: '/conversations/conversations/2026-09/threads/{threadId}/messages',
  tags: ['Messages'],
  summary: 'Create message',
  description:
    'Create a new message within a specific thread in your HubSpot account. This endpoint allows you to add messages to existing conversation threads, which can be useful for continuing discussions or providing additional information. Ensure that the threadId is correctly specified to target the appropriate thread.',
  operationId:
    'post-/conversations/conversations/2026-09/threads/{threadId}/messages_/conversations/conversations/2026-09-beta/threads/{threadId}/messages',
  request: {
    params: z.object({
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description: 'The unique identifier of the thread to which the message will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicMessageEggSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicMessageSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['conversations.write'] }],
})

export const getConversationsConversations202609ThreadsThreadIdMessagesMessageIdRoute = createRoute(
  {
    method: 'get',
    path: '/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}',
    tags: ['Messages'],
    summary: 'Retrieve message',
    description:
      'Retrieve a specific message from a conversation thread in your HubSpot account. This endpoint allows you to access the details of a message identified by its messageId within a thread identified by threadId. You can specify certain properties to include in the response.',
    operationId:
      'get-/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}_/conversations/conversations/2026-09-beta/threads/{threadId}/messages/{messageId}',
    request: {
      params: z.object({
        messageId: z
          .string()
          .openapi({
            param: {
              name: 'messageId',
              in: 'path',
              description: 'The unique identifier of the message to retrieve.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        threadId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'threadId',
              in: 'path',
              description:
                'The unique identifier of the conversation thread containing the message.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        property: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'property',
              in: 'query',
              description:
                'A string specifying which properties of the message to include in the response.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PublicMessageSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['conversations.read'] }],
  },
)

export const getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentRoute =
  createRoute({
    method: 'get',
    path: '/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content',
    tags: ['Messages'],
    summary: 'Retrieve original content',
    description:
      'Retrieve the original content of a specific message within a thread. This endpoint is useful for accessing the unaltered text or rich text content of a message, which can be important for auditing or reviewing the initial communication in a conversation.',
    operationId:
      'get-/conversations/conversations/2026-09/threads/{threadId}/messages/{messageId}/original-content_/conversations/conversations/2026-09-beta/threads/{threadId}/messages/{messageId}/original-content',
    request: {
      params: z.object({
        messageId: z
          .string()
          .openapi({
            param: {
              name: 'messageId',
              in: 'path',
              description:
                'The unique identifier of the message whose original content is being retrieved.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        threadId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'threadId',
              in: 'path',
              description: 'The unique identifier of the thread containing the message.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        property: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'property',
              in: 'query',
              description:
                'A string that specifies additional properties to include in the response.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: PublicMessageContentSchema, example: null } },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['conversations.read'] }],
  })
