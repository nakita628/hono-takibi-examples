import { createRoute, z } from '@hono/zod-openapi'

const RowVersionSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.',
    example: '1-12345',
    title: 'Row version',
  })
  .openapi('RowVersion')

const AddressSchema = z
  .strictObject({
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of city.', example: 'San Francisco' }),
    contact_name: z.string().nullable().exactOptional().openapi({ example: 'Elon Musk' }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'country code according to ISO 3166-1 alpha-2.', example: 'US' }),
    county: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Address field that holds a sublocality, such as a county',
        example: 'Santa Clara',
      }),
    email: z.string().nullable().exactOptional().openapi({ example: 'elon@musk.com' }),
    fax: z.string().nullable().exactOptional().openapi({ example: '122-111-1111' }),
    id: z.string().nullable().exactOptional().openapi({ example: '123' }),
    latitude: z.string().nullable().exactOptional().openapi({ example: '40.759211' }),
    line1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Line 1 of the address e.g. number, street, suite, apt #, etc.',
        example: 'Main street',
      }),
    line2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line 2 of the address', example: 'apt #' }),
    line3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line 3 of the address', example: 'Suite #' }),
    line4: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line 4 of the address', example: 'delivery instructions' }),
    longitude: z.string().nullable().exactOptional().openapi({ example: '-73.984638' }),
    name: z.string().nullable().exactOptional().openapi({ example: 'HQ US' }),
    phone_number: z.string().nullable().exactOptional().openapi({ example: '111-111-1111' }),
    postal_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Zip code or equivalent.', example: '94104' }),
    row_version: RowVersionSchema.exactOptional(),
    salutation: z.string().nullable().exactOptional().openapi({ example: 'Mr' }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of state', example: 'CA' }),
    street_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Street number', example: '25' }),
    string: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example: '25 Spring Street, Blackburn, VIC 3130',
        title: "The address string. Some APIs don't provide structured address data.",
      }),
    type: z
      .enum(['primary', 'secondary', 'home', 'office', 'shipping', 'billing', 'other'])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'addresses.type',
        'x-graphql-type-name': 'AddressType',
      }),
    website: z.string().nullable().exactOptional().openapi({ example: 'https://elonmusk.com' }),
  })
  .openapi({
    'x-apideck-schema-id': 'Address',
    'x-apideck-weights': {
      city: 'high',
      contact_name: 'edge-case',
      country: 'high',
      county: 'edge-case',
      email: 'edge-case',
      fax: 'edge-case',
      id: 'edge-case',
      latitude: 'low',
      line1: 'high',
      line2: 'low',
      line3: 'edge-case',
      line4: 'edge-case',
      longitude: 'low',
      name: 'edge-case',
      phone_number: 'edge-case',
      postal_code: 'high',
      row_version: 'edge-case',
      salutation: 'edge-case',
      state: 'high',
      street_number: 'low',
      string: 'low',
      type: 'critical',
      website: 'edge-case',
    },
    required: [],
  })
  .openapi('Address')

const AnonymizedSchema = z
  .boolean()
  .openapi({ example: true, title: 'Anonymized' })
  .openapi('Anonymized')

const ArchivedSchema = z
  .boolean()
  .openapi({ example: false, title: 'Archived' })
  .openapi('Archived')

const CreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'The date and time when the object was created.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Created at (timestamp)',
  })
  .openapi('CreatedAt')

const CreatedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who created the object.',
    example: '12345',
    readOnly: true,
    title: 'Created by',
  })
  .openapi('CreatedBy')

const CustomFieldSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'More information about the custom field',
        example: 'Employee Level',
        title: 'Description',
      }),
    id: z.string().openapi({ example: '2389328923893298', title: 'ID' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the custom field.',
        example: 'employee_level',
        title: 'Name',
      }),
    value: z
      .union([
        z.string().nullable().openapi({ example: 'Uses Salesforce and Marketo' }),
        z.number().nullable().openapi({ example: 10 }),
        z.boolean().nullable().openapi({ example: true }),
        z.array(z.string()),
      ])
      .exactOptional(),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'CustomField',
    'x-apideck-weights': {
      description: 'edge-case',
      id: 'critical',
      name: 'medium',
      value: 'critical',
    },
  })
  .openapi('CustomField')

const DeletedSchema = z
  .boolean()
  .nullable()
  .openapi({ example: true, title: 'Deleted' })
  .openapi('Deleted')

const DeletedAtSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    description: 'The time at which the object was deleted.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Deleted at (timestamp)',
  })
  .openapi('DeletedAt')

const DeletedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who deleted the object.',
    example: '12345',
    readOnly: true,
    title: 'Deleted by',
  })
  .openapi('DeletedBy')

const EmailSchema = z
  .strictObject({
    email: z.email().min(1).openapi({ example: 'elon@musk.com' }),
    id: z.string().exactOptional().openapi({ example: '123' }),
    type: z
      .enum(['primary', 'secondary', 'work', 'personal', 'billing', 'other'])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'emails.type',
        'x-graphql-type-name': 'EmailType',
      }),
  })
  .openapi({
    required: ['email'],
    'x-apideck-schema-id': 'Email',
    'x-apideck-weights': { email: 'critical', id: 'edge-case', type: 'critical' },
  })
  .openapi('Email')

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

const InitialsSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'The initials of the person, usually derived from their first, middle, and last names.',
    example: 'EM',
    title: 'Initials',
  })
  .openapi('Initials')

const LastInteractionAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Last interaction at (timestamp)',
  })
  .openapi('LastInteractionAt')

const OwnerIdSchema = z.string().openapi({ example: '54321', title: 'Owner ID' }).openapi('OwnerId')

const PhoneNumberSchema = z
  .strictObject({
    area_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '323', title: 'Area code' }),
    country_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1', title: 'Country code' }),
    extension: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '105', title: 'Phone extension' }),
    id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    number: z.string().min(1).openapi({ example: '111-111-1111', title: 'Phone number' }),
    type: z
      .enum([
        'primary',
        'secondary',
        'home',
        'work',
        'office',
        'mobile',
        'assistant',
        'fax',
        'direct-dial-in',
        'personal',
        'other',
      ])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'phone_numbers.type',
        'x-graphql-type-name': 'PhoneType',
      }),
  })
  .openapi({
    required: ['number'],
    'x-apideck-schema-id': 'PhoneNumber',
    'x-apideck-weights': {
      area_code: 'edge-case',
      country_code: 'edge-case',
      extension: 'edge-case',
      id: 'edge-case',
      number: 'critical',
      type: 'critical',
    },
  })
  .openapi('PhoneNumber')

const RecordUrlSchema = z
  .string()
  .nullable()
  .openapi({ example: 'https://app.intercom.io/contacts/12345', title: 'Record URL' })
  .openapi('RecordUrl')

const TagsSchema = z
  .array(z.string())
  .openapi({ example: ['New'], 'x-apideck-schema-id': 'Tags' })
  .openapi('Tags')

const TitleSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The job title of the person.', example: 'CEO', title: 'Job title' })
  .openapi('Title')

const UpdatedAtSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    description: 'The date and time when the object was last updated.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Updated at (timestamp)',
  })
  .openapi('UpdatedAt')

const UpdatedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who last updated the object.',
    example: '12345',
    readOnly: true,
    title: 'Updated by',
  })
  .openapi('UpdatedBy')

const ApplicantSchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    anonymized: AnonymizedSchema.exactOptional(),
    applications: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        example: ['a0d636c6-43b3-4bde-8c70-85b707d992f4', 'a98lfd96-43b3-4bde-8c70-85b707d992e6'],
      }),
    archived: ArchivedSchema.exactOptional(),
    birthday: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date of birth of the person.',
        example: '2000-08-12',
        title: 'Birth Date',
      }),
    confidential: z.boolean().exactOptional().openapi({ example: false, title: 'Confidential' }),
    coordinator_id: z
      .string()
      .exactOptional()
      .openapi({ example: '12345', title: 'Coordinator ID' }),
    cover_letter: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...',
        title: 'Cover letter',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    cv_url: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f',
        readOnly: true,
        title: 'CV URL',
      }),
    deleted: DeletedSchema.exactOptional(),
    deleted_at: DeletedAtSchema.exactOptional(),
    deleted_by: DeletedBySchema.exactOptional(),
    emails: z.array(EmailSchema).exactOptional(),
    first_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The first name of the person.',
        example: 'Elon',
        title: 'First name',
      }),
    followers: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        example: ['a0d636c6-43b3-4bde-8c70-85b707d992f4', 'a98lfd96-43b3-4bde-8c70-85b707d992e6'],
      }),
    headline: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Typically a list of previous companies where the contact has worked or schools that the contact has attended',
        example: 'PepsiCo, Inc, Central Perk',
        title: 'Headline',
      }),
    id: IdSchema.exactOptional(),
    initials: InitialsSchema.exactOptional(),
    job_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example: 'https://democompany.recruitee.com/o/example-talent-pool',
        readOnly: true,
        title: 'Job URL',
      }),
    last_interaction_at: LastInteractionAtSchema.exactOptional(),
    last_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The last name of the person.',
        example: 'Musk',
        title: 'Last name',
      }),
    middle_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Middle name of the person.', example: 'D.', title: 'Middle name' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of an applicant.', example: 'Elon Musk' }),
    owner_id: OwnerIdSchema.exactOptional(),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    photo_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL of the photo of a person.',
        example: 'https://unavatar.io/elon-musk',
        title: 'Photo URL',
      }),
    position_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PositionId the applicant applied for.', example: '123' }),
    record_url: RecordUrlSchema.exactOptional(),
    recruiter_id: z.string().exactOptional().openapi({ example: '12345', title: 'Recruiter ID' }),
    rejected_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Rejected at (timestamp)',
      }),
    social_links: z
      .array(
        z
          .strictObject({
            id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
            type: z.string().nullable().exactOptional().openapi({ example: 'twitter' }),
            url: z.string().min(1).openapi({ example: 'https://www.twitter.com/apideck-io' }),
          })
          .openapi({
            required: ['url'],
            'x-apideck-schema-id': 'SocialLink',
            'x-apideck-weights': { id: 'edge-case', type: 'critical', url: 'critical' },
          }),
      )
      .exactOptional(),
    source_id: z
      .string()
      .exactOptional()
      .openapi({ example: '12345', readOnly: true, title: 'Source ID' }),
    sourced_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '12345', readOnly: true, title: 'Sourced by' }),
    sources: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['Job site'] }),
    stage_id: z.string().exactOptional().openapi({ example: '12345', title: 'Stage' }),
    tags: TagsSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    websites: z
      .array(
        z
          .strictObject({
            id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
            type: z
              .enum(['primary', 'secondary', 'work', 'personal', 'other'])
              .exactOptional()
              .openapi({
                example: 'primary',
                'x-apideck-enum-id': 'websites.type',
                'x-graphql-type-name': 'WebsiteType',
              }),
            url: z.string().min(1).openapi({ example: 'http://example.com' }),
          })
          .openapi({
            required: ['url'],
            'x-apideck-schema-id': 'Website',
            'x-apideck-weights': { id: 'edge-case', type: 'critical', url: 'critical' },
          }),
      )
      .exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Applicant',
    'x-apideck-weights': {
      addresses: 'high',
      anonymized: 'low',
      applications: 'medium',
      archived: 'medium',
      birthday: 'high',
      confidential: 'medium',
      coordinator_id: 'medium',
      cover_letter: 'low',
      created_at: 'medium',
      created_by: 'edge-case',
      custom_fields: 'edge-case',
      cv_url: 'high',
      deleted: 'medium',
      deleted_at: 'medium',
      deleted_by: 'medium',
      emails: 'high',
      first_name: 'high',
      followers: 'low',
      headline: 'medium',
      id: 'critical',
      initials: 'low',
      job_url: 'medium',
      last_interaction_at: 'medium',
      last_name: 'high',
      middle_name: 'low',
      name: 'critical',
      owner_id: 'high',
      phone_numbers: 'high',
      photo_url: 'medium',
      position_id: 'medium',
      record_url: 'low',
      recruiter_id: 'medium',
      rejected_at: 'high',
      social_links: 'medium',
      source_id: 'low',
      sourced_by: 'high',
      sources: 'low',
      stage_id: 'low',
      tags: 'low',
      title: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
      websites: 'medium',
    },
    required: [],
  })
  .openapi('Applicant')

const ApplicantsFilterSchema = z
  .strictObject({
    job_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the job to filter on', example: '1234' }),
  })
  .openapi({
    example: { job_id: '1234' },
    'x-apideck-schema-id': 'ApplicantsFilter',
    'x-graphql-type-name': 'ApplicantsFilter',
    required: [],
  })
  .openapi('ApplicantsFilter')

const AtsActivitySchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'AtsActivity',
    'x-apideck-weights': {
      created_at: 'medium',
      created_by: 'edge-case',
      id: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    'x-graphql-type-name': 'AtsActivity',
    required: [],
  })
  .openapi('AtsActivity')

const AtsEventTypeSchema = z
  .enum([
    'ats.job.created',
    'ats.job.updated',
    'ats.job.deleted',
    'ats.applicant.created',
    'ats.applicant.updated',
    'ats.applicant.deleted',
  ])
  .openapi({ example: 'ats.job.created' })
  .openapi('AtsEventType')

const AtsWebhookEventSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The service provider's ID of the entity that triggered this event",
        example: '123456ASDF',
      }),
    entity_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type entity that triggered this event', example: 'Company' }),
    entity_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to retrieve entity detail.',
        example: 'https://unify.apideck.com/crm/contacts/123456',
      }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique reference to this request event',
        example: '9755c355-56c3-4a2f-a2da-86ff4411fccb',
      }),
    execution_attempt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The current count this request event has been attempted',
        example: 2,
      }),
    occurred_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Datetime for when the original event occurred',
        example: '2021-10-01T03:14:55.419Z',
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service provider identifier', example: 'close' }),
  })
  .openapi({ 'x-apideck-schema-id': 'WebhookEvent', required: [] })
  .and(z.object({ event_type: AtsEventTypeSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({ 'x-sdk-exclude': true })
  .openapi('AtsWebhookEvent')

const BadRequestResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing property foobar' }),
        z.object({}).openapi({ example: { missing: [{ foobar: 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestvalidationerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestValidationError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'BadRequest', required: [] })
  .openapi('BadRequestResponse')

const CodeSchema = z
  .string()
  .openapi({ description: 'The code of the job.', example: '123-OC' })
  .openapi('Code')

const UnifiedIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the resource',
        example: '12345',
        readOnly: true,
        title: 'Id',
      }),
  })
  .openapi({ required: ['id'], title: 'UnifiedId', 'x-apideck-schema-id': 'Id' })
  .openapi('UnifiedId')

const CreateApplicantResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Applicants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'lever' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateApplicantResponse',
  })
  .openapi('CreateApplicantResponse')

const CreateJobResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Jobs' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateJobResponse',
  })
  .openapi('CreateJobResponse')

const CurrencySchema = z
  .enum([
    'UNKNOWN_CURRENCY',
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BOV',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYR',
    'BZD',
    'CAD',
    'CDF',
    'CHE',
    'CHF',
    'CHW',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'COU',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LTL',
    'LVL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MXV',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STD',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRC',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'USN',
    'USS',
    'UYI',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XBA',
    'XBB',
    'XBC',
    'XBD',
    'XCD',
    'XDR',
    'XOF',
    'XPD',
    'XPF',
    'XPT',
    'XTS',
    'XXX',
    'YER',
    'ZAR',
    'ZMK',
    'ZMW',
    'BTC',
    'ETH',
  ])
  .nullable()
  .openapi({
    description:
      'Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).',
    example: 'USD',
    title: 'Currency',
    'x-apideck-enum-coverage-ignore': true,
    'x-apideck-enum-id': 'currencies',
    'x-enum-elements': [
      { description: 'Unknown currency', name: 'UNKNOWN_CURRENCY' },
      { description: 'United Arab Emirates dirham', name: 'AED' },
      { description: 'Afghan afghani', name: 'AFN' },
      { description: 'Albanian lek', name: 'ALL' },
      { description: 'Armenian dram', name: 'AMD' },
      { description: 'Netherlands Antillean guilder', name: 'ANG' },
      { description: 'Angolan kwanza', name: 'AOA' },
      { description: 'Argentine peso', name: 'ARS' },
      { description: 'Australian dollar', name: 'AUD' },
      { description: 'Aruban florin', name: 'AWG' },
      { description: 'Azerbaijani manat', name: 'AZN' },
      { description: 'Bosnia and Herzegovina convertible mark', name: 'BAM' },
      { description: 'Barbados dollar', name: 'BBD' },
      { description: 'Bangladeshi taka', name: 'BDT' },
      { description: 'Bulgarian lev', name: 'BGN' },
      { description: 'Bahraini dinar', name: 'BHD' },
      { description: 'Burundian franc', name: 'BIF' },
      { description: 'Bermudian dollar', name: 'BMD' },
      { description: 'Brunei dollar', name: 'BND' },
      { description: 'Boliviano', name: 'BOB' },
      { description: 'Bolivian Mvdol', name: 'BOV' },
      { description: 'Brazilian real', name: 'BRL' },
      { description: 'Bahamian dollar', name: 'BSD' },
      { description: 'Bhutanese ngultrum', name: 'BTN' },
      { description: 'Botswana pula', name: 'BWP' },
      { description: 'Belarusian ruble', name: 'BYR' },
      { description: 'Belize dollar', name: 'BZD' },
      { description: 'Canadian dollar', name: 'CAD' },
      { description: 'Congolese franc', name: 'CDF' },
      { description: 'WIR Euro', name: 'CHE' },
      { description: 'Swiss franc', name: 'CHF' },
      { description: 'WIR Franc', name: 'CHW' },
      { description: 'Unidad de Fomento', name: 'CLF' },
      { description: 'Chilean peso', name: 'CLP' },
      { description: 'Chinese yuan', name: 'CNY' },
      { description: 'Colombian peso', name: 'COP' },
      { description: 'Unidad de Valor Real', name: 'COU' },
      { description: 'Costa Rican colon', name: 'CRC' },
      { description: 'Cuban convertible peso', name: 'CUC' },
      { description: 'Cuban peso', name: 'CUP' },
      { description: 'Cape Verdean escudo', name: 'CVE' },
      { description: 'Czech koruna', name: 'CZK' },
      { description: 'Djiboutian franc', name: 'DJF' },
      { description: 'Danish krone', name: 'DKK' },
      { description: 'Dominican peso', name: 'DOP' },
      { description: 'Algerian dinar', name: 'DZD' },
      { description: 'Egyptian pound', name: 'EGP' },
      { description: 'Eritrean nakfa', name: 'ERN' },
      { description: 'Ethiopian birr', name: 'ETB' },
      { description: 'Euro', name: 'EUR' },
      { description: 'Fiji dollar', name: 'FJD' },
      { description: 'Falkland Islands pound', name: 'FKP' },
      { description: 'Pound sterling', name: 'GBP' },
      { description: 'Georgian lari', name: 'GEL' },
      { description: 'Ghanaian cedi', name: 'GHS' },
      { description: 'Gibraltar pound', name: 'GIP' },
      { description: 'Gambian dalasi', name: 'GMD' },
      { description: 'Guinean franc', name: 'GNF' },
      { description: 'Guatemalan quetzal', name: 'GTQ' },
      { description: 'Guyanese dollar', name: 'GYD' },
      { description: 'Hong Kong dollar', name: 'HKD' },
      { description: 'Honduran lempira', name: 'HNL' },
      { description: 'Croatian kuna', name: 'HRK' },
      { description: 'Haitian gourde', name: 'HTG' },
      { description: 'Hungarian forint', name: 'HUF' },
      { description: 'Indonesian rupiah', name: 'IDR' },
      { description: 'Israeli new shekel', name: 'ILS' },
      { description: 'Indian rupee', name: 'INR' },
      { description: 'Iraqi dinar', name: 'IQD' },
      { description: 'Iranian rial', name: 'IRR' },
      { description: 'Icelandic króna', name: 'ISK' },
      { description: 'Jamaican dollar', name: 'JMD' },
      { description: 'Jordanian dinar', name: 'JOD' },
      { description: 'Japanese yen', name: 'JPY' },
      { description: 'Kenyan shilling', name: 'KES' },
      { description: 'Kyrgyzstani som', name: 'KGS' },
      { description: 'Cambodian riel', name: 'KHR' },
      { description: 'Comoro franc', name: 'KMF' },
      { description: 'North Korean won', name: 'KPW' },
      { description: 'South Korean won', name: 'KRW' },
      { description: 'Kuwaiti dinar', name: 'KWD' },
      { description: 'Cayman Islands dollar', name: 'KYD' },
      { description: 'Kazakhstani tenge', name: 'KZT' },
      { description: 'Lao kip', name: 'LAK' },
      { description: 'Lebanese pound', name: 'LBP' },
      { description: 'Sri Lankan rupee', name: 'LKR' },
      { description: 'Liberian dollar', name: 'LRD' },
      { description: 'Lesotho loti', name: 'LSL' },
      { description: 'Lithuanian litas', name: 'LTL' },
      { description: 'Latvian lats', name: 'LVL' },
      { description: 'Libyan dinar', name: 'LYD' },
      { description: 'Moroccan dirham', name: 'MAD' },
      { description: 'Moldovan leu', name: 'MDL' },
      { description: 'Malagasy ariary', name: 'MGA' },
      { description: 'Macedonian denar', name: 'MKD' },
      { description: 'Myanmar kyat', name: 'MMK' },
      { description: 'Mongolian tögrög', name: 'MNT' },
      { description: 'Macanese pataca', name: 'MOP' },
      { description: 'Mauritanian ouguiya', name: 'MRO' },
      { description: 'Mauritian rupee', name: 'MUR' },
      { description: 'Maldivian rufiyaa', name: 'MVR' },
      { description: 'Malawian kwacha', name: 'MWK' },
      { description: 'Mexican peso', name: 'MXN' },
      { description: 'Mexican Unidad de Inversion', name: 'MXV' },
      { description: 'Malaysian ringgit', name: 'MYR' },
      { description: 'Mozambican metical', name: 'MZN' },
      { description: 'Namibian dollar', name: 'NAD' },
      { description: 'Nigerian naira', name: 'NGN' },
      { description: 'Nicaraguan córdoba', name: 'NIO' },
      { description: 'Norwegian krone', name: 'NOK' },
      { description: 'Nepalese rupee', name: 'NPR' },
      { description: 'New Zealand dollar', name: 'NZD' },
      { description: 'Omani rial', name: 'OMR' },
      { description: 'Panamanian balboa', name: 'PAB' },
      { description: 'Peruvian sol', name: 'PEN' },
      { description: 'Papua New Guinean kina', name: 'PGK' },
      { description: 'Philippine peso', name: 'PHP' },
      { description: 'Pakistani rupee', name: 'PKR' },
      { description: 'Polish złoty', name: 'PLN' },
      { description: 'Paraguayan guaraní', name: 'PYG' },
      { description: 'Qatari riyal', name: 'QAR' },
      { description: 'Romanian leu', name: 'RON' },
      { description: 'Serbian dinar', name: 'RSD' },
      { description: 'Russian ruble', name: 'RUB' },
      { description: 'Rwandan franc', name: 'RWF' },
      { description: 'Saudi riyal', name: 'SAR' },
      { description: 'Solomon Islands dollar', name: 'SBD' },
      { description: 'Seychelles rupee', name: 'SCR' },
      { description: 'Sudanese pound', name: 'SDG' },
      { description: 'Swedish krona', name: 'SEK' },
      { description: 'Singapore dollar', name: 'SGD' },
      { description: 'Saint Helena pound', name: 'SHP' },
      { description: 'Sierra Leonean leone', name: 'SLL' },
      { description: 'Somali shilling', name: 'SOS' },
      { description: 'Surinamese dollar', name: 'SRD' },
      { description: 'South Sudanese pound', name: 'SSP' },
      { description: 'São Tomé and Príncipe dobra', name: 'STD' },
      { description: 'Salvadoran colón', name: 'SVC' },
      { description: 'Syrian pound', name: 'SYP' },
      { description: 'Swazi lilangeni', name: 'SZL' },
      { description: 'Thai baht', name: 'THB' },
      { description: 'Tajikstani somoni', name: 'TJS' },
      { description: 'Turkmenistan manat', name: 'TMT' },
      { description: 'Tunisian dinar', name: 'TND' },
      { description: "Tongan pa'anga", name: 'TOP' },
      { description: 'Turkish lira', name: 'TRY' },
      { description: 'Trinidad and Tobago dollar', name: 'TTD' },
      { description: 'New Taiwan dollar', name: 'TWD' },
      { description: 'Tanzanian shilling', name: 'TZS' },
      { description: 'Ukrainian hryvnia', name: 'UAH' },
      { description: 'Ugandan shilling', name: 'UGX' },
      { description: 'United States dollar', name: 'USD' },
      { description: 'United States dollar (next day)', name: 'USN' },
      { description: 'United States dollar (same day)', name: 'USS' },
      { description: 'Uruguay Peso en Unidedades Indexadas', name: 'UYI' },
      { description: 'Uruguyan peso', name: 'UYU' },
      { description: 'Uzbekistan som', name: 'UZS' },
      { description: 'Venezuelan bolívar soberano', name: 'VEF' },
      { description: 'Vietnamese đồng', name: 'VND' },
      { description: 'Vanuatu vatu', name: 'VUV' },
      { description: 'Samoan tala', name: 'WST' },
      { description: 'CFA franc BEAC', name: 'XAF' },
      { description: 'Silver', name: 'XAG' },
      { description: 'Gold', name: 'XAU' },
      { description: 'European Composite Unit', name: 'XBA' },
      { description: 'European Monetary Unit', name: 'XBB' },
      { description: 'European Unit of Account 9', name: 'XBC' },
      { description: 'European Unit of Account 17', name: 'XBD' },
      { description: 'East Caribbean dollar', name: 'XCD' },
      { description: 'Special drawing rights (International Monetary Fund)', name: 'XDR' },
      { description: 'CFA franc BCEAO', name: 'XOF' },
      { description: 'Palladium', name: 'XPD' },
      { description: 'CFP franc', name: 'XPF' },
      { description: 'Platinum', name: 'XPT' },
      { description: 'Code reserved for testing', name: 'XTS' },
      { description: 'No currency', name: 'XXX' },
      { description: 'Yemeni rial', name: 'YER' },
      { description: 'South African rand', name: 'ZAR' },
      { description: 'Zambian kwacha', name: 'ZMK' },
      { description: 'Zambian kwacha', name: 'ZMW' },
      { description: 'Bitcoin', name: 'BTC' },
      { description: 'Ether', name: 'ETH' },
    ],
  })
  .openapi('Currency')

const DeleteJobResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Jobs' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteJobResponse',
  })
  .openapi('DeleteJobResponse')

const DepartmentSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional().openapi({ example: '2', title: 'Code' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'R&D', title: 'Description' }),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Department name', example: 'R&D', title: 'Name' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parent ID', example: '22345', readOnly: true }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Department',
    'x-apideck-weights': {
      code: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      description: 'low',
      id: 'critical',
      name: 'critical',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Department')

const DescriptionSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'A description of the object.',
    example: 'A description',
    title: 'Description',
  })
  .openapi('Description')

const GetApplicantResponseSchema = z
  .object({
    data: ApplicantSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Applicants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'lever' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetApplicantResponse',
    'x-graphql-type-name': 'Applicant',
  })
  .openapi('GetApplicantResponse')

const LinksSchema = z
  .object({
    current: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the current page through the API',
        example: 'https://unify.apideck.com/crm/companies',
      }),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM',
      }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
      }),
  })
  .openapi({
    description: 'Links to navigate to previous or next pages through the API',
    'x-apideck-schema-id': 'Links',
    required: [],
  })
  .openapi('Links')

const MetaSchema = z
  .object({
    cursors: z
      .object({
        current: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the current page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjI=',
          }),
        next: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the next page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjM=',
          }),
        previous: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the previous page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjE=',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cursors to navigate to previous or next pages through the API',
        required: [],
      }),
    items_on_page: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of items returned in the data property of the response',
        example: 50,
      }),
  })
  .openapi({ description: 'Response metadata', 'x-apideck-schema-id': 'Meta', required: [] })
  .openapi('Meta')

const GetApplicantsResponseSchema = z
  .object({
    data: z.array(ApplicantSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Applicants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'lever' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetApplicantsResponse',
    'x-graphql-type-name': 'ApplicantList',
  })
  .openapi('GetApplicantsResponse')

const LanguageSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'language code according to ISO 639-1. For the United States - EN',
    example: 'EN',
  })
  .openapi('Language')

const PublishedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Published at (timestamp)',
  })
  .openapi('PublishedAt')

const JobStatusSchema = z
  .enum(['draft', 'internal', 'published', 'completed', 'on-hold', 'private'])
  .openapi({
    description: 'The status of the job.',
    example: 'completed',
    'x-apideck-enum-id': 'jobs.status',
  })
  .openapi('JobStatus')

const JobSchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    available_to_employees: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specifies whether an employee of the organization can apply for the job.',
        example: false,
        title: 'Available to employees',
      }),
    blocks: z
      .array(
        z
          .object({ content: z.string().exactOptional(), title: z.string().exactOptional() })
          .openapi({ 'x-apideck-weights': { content: 'medium', title: 'medium' }, required: [] }),
      )
      .exactOptional()
      .openapi({ example: [{ content: 'string', title: 'string' }] }),
    branch: z
      .object({
        id: IdSchema.exactOptional(),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the branch.', example: 'HQ NY' }),
      })
      .exactOptional()
      .openapi({
        description: 'Details of the branch for which the job is created.',
        example: { id: '123', name: 'HQ NY' },
        title: 'Branch',
        'x-apideck-weights': { id: 'medium', name: 'medium' },
        required: [],
      }),
    closing: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'The closing section of the job description', title: 'Closing' }),
    closing_date: z.iso.date().nullable().exactOptional().openapi({ example: '2020-10-30' }),
    closing_html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The closing section of the job description in HTML format',
        title: 'Closing',
      }),
    code: CodeSchema.exactOptional(),
    confidential: z.boolean().exactOptional().openapi({ example: false, title: 'Confidential' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    deleted: DeletedSchema.exactOptional(),
    department: DepartmentSchema.exactOptional(),
    description: DescriptionSchema.exactOptional(),
    description_html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The job description in HTML format', title: 'Description (HTML)' }),
    employment_terms: z
      .enum([
        'full-time',
        'part-time',
        'internship',
        'contractor',
        'employee',
        'freelance',
        'temp',
        'seasonal',
        'volunteer',
        'other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ example: 'full-time', 'x-apideck-enum-id': 'jobs.employment_terms' }),
    experience: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Level of experience required for the job role.',
        example: 'Director/ Vice President',
        title: 'Experience',
      }),
    followers: z
      .array(z.string().openapi({ example: '12345', readOnly: true }))
      .nullable()
      .exactOptional()
      .openapi({
        example: ['a0d636c6-43b3-4bde-8c70-85b707d992f4', 'a98lfd96-43b3-4bde-8c70-85b707d992e6'],
      }),
    hiring_managers: z
      .array(
        z
          .object({ id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }) })
          .openapi({ 'x-apideck-weights': { id: 'medium' }, required: [] }),
      )
      .exactOptional()
      .openapi({ example: ['123456'] }),
    id: IdSchema.exactOptional(),
    job_portal_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL of the job portal', title: 'URL' }),
    language: LanguageSchema.exactOptional(),
    owner_id: OwnerIdSchema.exactOptional(),
    published_at: PublishedAtSchema.exactOptional(),
    record_url: RecordUrlSchema.exactOptional(),
    recruiters: z
      .array(z.string().openapi({ example: '12345', readOnly: true }))
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant',
        example: ['a0d636c6-43b3-4bde-8c70-85b707d992f4'],
      }),
    remote: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Specifies whether the posting is for a remote job.',
        example: true,
        title: 'Remote',
      }),
    requisition_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A job's Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company's internal processes.",
        example: 'abc123',
        title: 'Requisition ID',
      }),
    salary: z
      .object({
        currency: CurrencySchema.exactOptional(),
        max: z
          .int()
          .exactOptional()
          .openapi({ description: 'Maximum salary payable for the job role.', example: 10000 }),
        min: z
          .int()
          .exactOptional()
          .openapi({ description: 'Minimum salary payable for the job role.', example: 8000 }),
      })
      .exactOptional()
      .openapi({
        'x-apideck-weights': { currency: 'medium', max: 'medium', min: 'medium' },
        required: [],
      }),
    sequence: z
      .int()
      .exactOptional()
      .openapi({ description: 'Sequence in relation to other jobs.', example: 3 }),
    slug: z.string().nullable().exactOptional().openapi({ example: 'ceo' }),
    status: JobStatusSchema.exactOptional(),
    tags: TagsSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL of the job description', title: 'URL' }),
    visibility: z
      .enum(['public', 'internal'])
      .exactOptional()
      .openapi({
        description: 'The visibility of the job',
        example: 'internal',
        'x-apideck-enum-id': 'jobs.visibility',
      }),
  })
  .openapi({
    'x-apideck-schema-id': 'Job',
    'x-apideck-weights': {
      addresses: 'high',
      available_to_employees: 'medium',
      blocks: 'edge-case',
      branch: 'low',
      closing: 'medium',
      closing_date: 'high',
      closing_html: 'edge-case',
      code: 'low',
      confidential: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      deleted: 'medium',
      department: 'medium',
      description: 'medium',
      description_html: 'edge-case',
      employment_terms: 'low',
      experience: 'low',
      followers: 'low',
      hiring_managers: 'low',
      id: 'high',
      job_portal_url: 'low',
      language: 'medium',
      owner_id: 'high',
      published_at: 'high',
      record_url: 'low',
      recruiters: 'low',
      remote: 'low',
      requisition_id: 'medium',
      salary: 'high',
      sequence: 'low',
      slug: 'low',
      status: 'high',
      tags: 'low',
      title: 'critical',
      updated_at: 'medium',
      updated_by: 'edge-case',
      url: 'medium',
      visibility: 'low',
    },
    required: [],
  })
  .openapi('Job')

const GetJobResponseSchema = z
  .object({
    data: JobSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Jobs' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'lever' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetJobResponse',
    'x-graphql-type-name': 'Job',
  })
  .openapi('GetJobResponse')

const GetJobsResponseSchema = z
  .object({
    data: z.array(JobSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Jobs' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'lever' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetJobsResponse',
    'x-graphql-type-name': 'JobList',
  })
  .openapi('GetJobsResponse')

const JobsFilterSchema = z
  .strictObject({
    job_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the job to filter on', example: '1234' }),
  })
  .openapi({
    example: { job_id: '1234' },
    'x-apideck-schema-id': 'JobsFilter',
    'x-graphql-type-name': 'JobsFilter',
    required: [],
  })
  .openapi('JobsFilter')

const NotFoundResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: "Could not find widget with id: '123'" }),
        z.object({}).openapi({ example: { not_found: { entity: 'widget', id: '123' } } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Found',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unknown Widget',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#entitynotfounderror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 404 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'EntityNotFoundError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotFound', required: [] })
  .openapi('NotFoundResponse')

const NotImplementedResponseSchema = z
  .object({
    detail: z
      .union([
        z
          .string()
          .openapi({
            example:
              "Failed to retrieve Widget tokenUrl from 'components.securitySchemes.OAuth2.flows'",
          }),
        z.object({}),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Implemented',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unmapped Attribute',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#mappingerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 501 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'MappingError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotImplemented', required: [] })
  .openapi('NotImplementedResponse')

const OfferSchema = z
  .strictObject({
    application_id: z
      .string()
      .exactOptional()
      .openapi({ example: 'abc123', title: 'Application ID' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Offer',
    'x-apideck-weights': {
      created_at: 'medium',
      created_by: 'edge-case',
      id: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Offer')

const PaymentRequiredResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'You have reached your limit of 2000',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Payment Required',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Request Limit Reached',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestlimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 402 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'PaymentRequired', required: [] })
  .openapi('PaymentRequiredResponse')

const TooManyRequestsResponseSchema = z
  .object({
    detail: z
      .object({ context: z.string().exactOptional(), error: z.looseObject({}).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585)',
        example: 'Too Many Requests',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Connector Rate Limit Error',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#connectorratelimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 429 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'ConnectorRateLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'TooManyRequests', required: [] })
  .openapi('TooManyRequestsResponse')

const UnauthorizedResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Failed to generate valid JWT Session. Verify applicationId is correct',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unauthorized',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unauthorized Request',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 401 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'UnauthorizedError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unauthorized', required: [] })
  .openapi('UnauthorizedResponse')

const UnexpectedErrorResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing Header: x-apideck-consumer-id' }),
        z.object({}).openapi({ example: { missing: [{ 'x-apideck-consumer-id': 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of error returned',
        example: 'RequestHeadersValidationError',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Error', required: [] })
  .openapi('UnexpectedErrorResponse')

const UnprocessableResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Unprocessable request, please verify your request headers and body.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unprocessable Entity',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid State',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#invalidstateerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 422 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'InvalidStateError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unprocessable', required: [] })
  .openapi('UnprocessableResponse')

const UpdateJobResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Jobs' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateJobResponse',
  })
  .openapi('UpdateJobResponse')

const UrlSchema = z
  .url()
  .regex(/^(https?):\/\//)
  .openapi({
    description: 'The url pointing to the job.',
    example: 'https://downstreamconnector.com/job?id=123',
  })
  .openapi('Url')

const AtsActivityResponse = {
  description: 'Activities',
  content: { 'application/json': { schema: AtsActivitySchema } },
}

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateApplicantResponseResponse = {
  description: 'Applicants',
  content: { 'application/json': { schema: CreateApplicantResponseSchema } },
}

const CreateJobResponseResponse = {
  description: 'Jobs',
  content: { 'application/json': { schema: CreateJobResponseSchema } },
}

const DeleteJobResponseResponse = {
  description: 'Jobs',
  content: { 'application/json': { schema: DeleteJobResponseSchema } },
}

const GetApplicantResponseResponse = {
  description: 'Applicants',
  content: { 'application/json': { schema: GetApplicantResponseSchema } },
}

const GetApplicantsResponseResponse = {
  description: 'Applicants',
  content: { 'application/json': { schema: GetApplicantsResponseSchema } },
}

const GetJobResponseResponse = {
  description: 'Jobs',
  content: { 'application/json': { schema: GetJobResponseSchema } },
}

const GetJobsResponseResponse = {
  description: 'Jobs',
  content: { 'application/json': { schema: GetJobsResponseSchema } },
}

const JobResponse = { description: 'Jobs', content: { 'application/json': { schema: JobSchema } } }

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const NotImplementedResponseResponse = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: NotImplementedResponseSchema } },
}

const OfferResponse = {
  description: 'Offers',
  content: { 'application/json': { schema: OfferSchema } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
}

const TooManyRequestsResponseResponse = {
  description: 'Too Many Requests',
  content: { 'application/json': { schema: TooManyRequestsResponseSchema } },
}

const UnauthorizedResponseResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: UnauthorizedResponseSchema } },
}

const UnexpectedErrorResponseResponse = {
  description: 'Unexpected error',
  content: { 'application/json': { schema: UnexpectedErrorResponseSchema } },
}

const UnprocessableResponseResponse = {
  description: 'Unprocessable',
  content: { 'application/json': { schema: UnprocessableResponseSchema } },
}

const UpdateJobResponseResponse = {
  description: 'Jobs',
  content: { 'application/json': { schema: UpdateJobResponseSchema } },
}

const ApplicantsFilterParamsSchema = ApplicantsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ApplicantsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const ApplicationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of your Unify application',
      example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
      in: 'header',
      name: 'x-apideck-app-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the consumer which you want to get or push data from',
      in: 'header',
      name: 'x-apideck-consumer-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const CursorParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.',
      in: 'query',
      name: 'cursor',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.',
      example: 'id,updated_at',
      in: 'query',
      name: 'fields',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the record you are acting upon.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const JobsFilterParamsSchema = JobsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/JobsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return. Minimum 1, Maximum 200, Default 20',
      in: 'query',
      name: 'limit',
      schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const RawParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Include raw response. Mostly used for debugging purposes',
      in: 'query',
      name: 'raw',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const ServiceIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.',
      in: 'header',
      name: 'x-apideck-service-id',
      schema: { type: 'string' },
      required: false,
    },
  })

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getAtsApplicantsRoute = createRoute({
  method: 'get',
  path: '/ats/applicants',
  tags: ['Applicants'],
  summary: 'List applicants',
  description: 'List applicants',
  operationId: 'applicantsAll',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          raw: RawParamsSchema,
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: JobsFilterParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetApplicantsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAtsApplicantsRoute = createRoute({
  method: 'post',
  path: '/ats/applicants',
  tags: ['Applicants'],
  summary: 'Create applicant',
  description: 'Create applicant',
  operationId: 'applicantsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ApplicantSchema } }, required: true },
  },
  responses: {
    201: CreateApplicantResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAtsApplicantsIdRoute = createRoute({
  method: 'get',
  path: '/ats/applicants/{id}',
  tags: ['Applicants'],
  summary: 'Get applicant',
  description: 'Get applicant',
  operationId: 'applicantsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetApplicantResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAtsJobsRoute = createRoute({
  method: 'get',
  path: '/ats/jobs',
  tags: ['Jobs'],
  summary: 'List Jobs',
  description: 'List Jobs',
  operationId: 'jobsAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetJobsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAtsJobsIdRoute = createRoute({
  method: 'get',
  path: '/ats/jobs/{id}',
  tags: ['Jobs'],
  summary: 'Get Job',
  description: 'Get Job',
  operationId: 'jobsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetJobResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})
