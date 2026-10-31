import { createRoute, z } from '@hono/zod-openapi'

const FormShowSchema = z
  .object({
    attributes: z
      .object({
        benefit_categories: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Description of the benefit category of the form',
                    example: 'VA health care',
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Name of the benefit category of the form',
                    example: 'Health care',
                  }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({ description: 'Listing of benefit categories and match' }),
        created_at: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Internal field for VA.gov use',
            example: '2021-03-30T16:28:30.338Z',
          }),
        deleted_at: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({ description: 'The timestamp at which the form was deleted', example: null }),
        first_issued_on: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The date the form first became available',
            example: '2016-07-10',
          }),
        form_details_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Location on www.va.gov of the info page for this form',
            example: 'https://www.va.gov/find-forms/about-form-10-10ez',
          }),
        form_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the VA Form', example: '10-10EZ' }),
        form_tool_intro: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Introductory text describing the VA online tool for this form',
            example: 'You can apply online instead of filling out and sending us the paper form.',
          }),
        form_tool_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Location of the online tool for this form',
            example: 'https://www.va.gov/health-care/apply/application/introduction',
          }),
        form_type: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'VA Type of the form', example: 'benefit' }),
        form_usage: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'A description of how the form is to be used',
            example:
              '<p>Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in...</p>',
          }),
        language: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Language code of the form', example: 'en' }),
        last_revision_on: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The date the form was last updated', example: '2020-01-17' }),
        pages: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of pages contained in the form', example: 5 }),
        related_forms: z
          .array(z.string().openapi({ example: '10-10EZR' }))
          .nullable()
          .exactOptional()
          .openapi({ description: 'A listing of other forms that relate to current form' }),
        sha256: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'A sha256 hash of the form contents',
            example: '5fe171299ece147e8b456961a38e17f1391026f26e9e170229317bc95d9827b7',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Title of the form as given by VA',
            example: 'Instructions and Enrollment Application for Health Benefits',
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Web location of the form',
            example: 'https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf',
          }),
        va_form_administration: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The VA organization that administers the form',
            example: 'Veterans Health Administration',
          }),
        valid_pdf: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'A flag indicating whether the form url was confirmed as a valid download',
            example: 'true',
          }),
        versions: z
          .array(
            z
              .object({
                revision_on: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description: 'The date the sha256 hash was calculated',
                    example: '2012-01-01',
                  }),
                sha256: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'A sha256 hash of the form contents for that version',
                    example: '5fe171299ece147e8b456961a38e17f1391026f26e9e170229317bc95d9827b7',
                  }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({ description: 'The version history of revisions to the form' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON API identifier', example: '10-10-EZ' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON API type specification', example: 'va_form' }),
  })
  .openapi({
    description: 'Data for a particular VA form, including form version history.',
    required: [],
  })
  .openapi('FormShow')

const FormsIndexSchema = z
  .object({
    attributes: z
      .object({
        benefit_categories: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Description of the benefit category of the form',
                    example: 'VA health care',
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Name of the benefit category of the form',
                    example: 'Health care',
                  }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({ description: 'Listing of benefit categories and match' }),
        deleted_at: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({ description: 'The timestamp at which the form was deleted', example: 'null' }),
        first_issued_on: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The date the form first became available',
            example: '2016-07-10',
          }),
        form_details_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Location on www.va.gov of the info page for this form',
            example: 'https://www.va.gov/find-forms/about-form-10-10ez',
          }),
        form_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the VA Form', example: '10-10EZ' }),
        form_tool_intro: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Introductory text describing the VA online tool for this form',
            example: 'You can apply online instead of filling out and sending us the paper form.',
          }),
        form_tool_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Location of the online tool for this form',
            example: 'https://www.va.gov/health-care/apply/application/introduction',
          }),
        form_type: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'VA Type of the form', example: 'benefit' }),
        form_usage: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'A description of how the form is to be used',
            example:
              '<p>Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in...</p>',
          }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Language code of the form', example: 'en' }),
        last_revision_on: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The date the form was last updated', example: '2020-01-17' }),
        last_sha256_change: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The date of the last sha256 hash change',
            example: '2019-05-30',
          }),
        pages: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of pages contained in the form', example: 5 }),
        related_forms: z
          .array(z.string().openapi({ example: '10-10EZR' }))
          .nullable()
          .exactOptional()
          .openapi({ description: 'A listing of other forms that relate to current form' }),
        sha256: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'A sha256 hash of the form contents',
            example: '6e6465e2e1c89225871daa9b6d86b92d1c263c7b02f98541212af7b35272372b',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Title of the form as given by VA',
            example: 'Instructions and Enrollment Application for Health Benefits',
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Web location of the form',
            example: 'https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf',
          }),
        va_form_administration: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The VA organization that administers the form',
            example: 'Veterans Health Administration',
          }),
        valid_pdf: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'A flag indicating whether the form url was confirmed as a valid download',
            example: 'true',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.string().exactOptional().openapi({ description: 'JSON API identifier', example: '5403' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON API type specification', example: 'va_form' }),
  })
  .openapi({ description: 'A listing of available VA forms and their location.', required: [] })
  .openapi('FormsIndex')

const ApikeySecurityScheme = { in: 'header', name: 'apikey', type: 'apiKey' }

export const getFormsRoute = createRoute({
  method: 'get',
  path: '/forms',
  tags: ['Forms'],
  summary: 'Returns all VA Forms and their last revision date',
  description:
    'Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.',
  operationId: 'findForms',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns form data based on entered form name.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'VA Forms index response',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(FormsIndexSchema) }).openapi({ required: ['data'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid authentication credentials' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional().openapi({ example: 'API rate limit exceeded' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ apikey: [] }],
})

export const getFormsFormNameRoute = createRoute({
  method: 'get',
  path: '/forms/{form_name}',
  tags: ['Forms'],
  summary: 'Find form by form name',
  description: 'Returns a single form and the full revision history',
  operationId: 'findFormByFormName',
  request: {
    params: z.object({
      form_name: z
        .string()
        .openapi({
          param: {
            description:
              'The VA form_name of the form being requested. The exact form name must be passed, including proper placement of prefixes and/or hyphens.',
            example: '10-10EZ',
            in: 'path',
            name: 'form_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'VA Form Show response',
      content: {
        'application/json': {
          schema: z.object({ data: FormShowSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid authentication credentials' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({
                    message: z.string().exactOptional().openapi({ example: 'Form not found' }),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional().openapi({ example: 'API rate limit exceeded' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ apikey: [] }],
})
