import { createRoute, z } from '@hono/zod-openapi'

const PaginationSchema = z
  .object({
    page: z
      .int()
      .exactOptional()
      .openapi({
        example: 1,
        description:
          'Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.',
      }),
    pageSize: z
      .int()
      .exactOptional()
      .openapi({
        example: 10,
        description:
          'Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.',
      }),
    pageCount: z
      .int()
      .exactOptional()
      .openapi({ example: 1, description: 'Number of pages available' }),
    itemCount: z
      .int()
      .exactOptional()
      .openapi({ example: 2, description: 'Number of items returned' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const CurrencyCodeSchema = z
  .enum([
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
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLP',
    'CNY',
    'COP',
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
    'GGP',
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
    'IMP',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JEP',
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
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
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
    'SPL',
    'SRD',
    'STN',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TVD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XDR',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW',
    'ZMK',
    'ZWD',
  ])
  .openapi({
    description: '3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.',
    example: 'AUD',
  })
  .openapi('CurrencyCode')

const AmountSchema = z
  .object({
    currency: CurrencyCodeSchema.exactOptional(),
    value: z.float64().exactOptional().openapi({ 'x-is-money': true, example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('Amount')

const ProjectStatusSchema = z
  .enum(['INPROGRESS', 'CLOSED'])
  .openapi({ description: 'Status for project', example: 'INPROGRESS' })
  .openapi('ProjectStatus')

const ProjectSchema = z
  .object({
    projectId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '254553fa-2be8-4991-bd5e-70a97ea12ef8',
        description: 'Identifier of the project.',
      }),
    contactId: z
      .uuid()
      .exactOptional()
      .openapi({
        externalDocs: { url: 'https://developer.xero.com/documentation/api/contacts' },
        example: '01234567-89ab-cdef-0123-456789abcdef',
        description: 'Identifier of the contact this project was created for.',
      }),
    name: z.string().openapi({ example: 'New Kitchen', description: 'Name of the project.' }),
    currencyCode: CurrencyCodeSchema.exactOptional(),
    minutesLogged: z
      .int()
      .exactOptional()
      .openapi({
        example: 0,
        description: 'A total of minutes logged against all tasks on the Project.',
      }),
    totalTaskAmount: AmountSchema.exactOptional(),
    totalExpenseAmount: AmountSchema.exactOptional(),
    estimateAmount: AmountSchema.exactOptional(),
    minutesToBeInvoiced: z
      .int()
      .exactOptional()
      .openapi({
        example: 0,
        description:
          'Minutes which have not been invoiced across all chargeable tasks in the project.',
      }),
    taskAmountToBeInvoiced: AmountSchema.exactOptional(),
    taskAmountInvoiced: AmountSchema.exactOptional(),
    expenseAmountToBeInvoiced: AmountSchema.exactOptional(),
    expenseAmountInvoiced: AmountSchema.exactOptional(),
    projectAmountInvoiced: AmountSchema.exactOptional(),
    deposit: AmountSchema.exactOptional(),
    depositApplied: AmountSchema.exactOptional(),
    creditNoteAmount: AmountSchema.exactOptional(),
    deadlineUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-12-10T12:59:59Z',
        description: 'Deadline for the project. UTC Date Time in ISO-8601 format.',
      }),
    totalInvoiced: AmountSchema.exactOptional(),
    totalToBeInvoiced: AmountSchema.exactOptional(),
    estimate: AmountSchema.exactOptional(),
    status: ProjectStatusSchema.exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: ['name'],
  })
  .openapi('Project')

const ProjectsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(ProjectSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: [],
  })
  .openapi('Projects')

const ProjectCreateOrUpdateSchema = z
  .object({
    contactId: z
      .uuid()
      .exactOptional()
      .openapi({
        externalDocs: { url: 'https://developer.xero.com/documentation/api/contacts' },
        example: '01234567-89ab-cdef-0123-456789abcdef',
        description: 'Identifier of the contact this project was created for.',
      }),
    name: z.string().openapi({ example: 'New Kitchen', description: 'Name of the project.' }),
    estimateAmount: z.float64().exactOptional().openapi({ 'x-is-money': true, example: 1 }),
    deadlineUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2019-12-10T12:59:59Z',
        description: 'Deadline for the project. UTC Date Time in ISO-8601 format.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: ['name'],
  })
  .openapi('ProjectCreateOrUpdate')

const ProjectPatchSchema = z
  .object({ status: ProjectStatusSchema })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: ['status'],
  })
  .openapi('ProjectPatch')

const ProjectUserSchema = z
  .object({
    userId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '254553fa-2be8-4991-bd5e-70a97ea12ef8',
        description: 'Identifier of the user of the project.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Sidney Allen', description: 'Full name of the user.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ example: 'sidneyallen@xero.com', description: 'Email address of the user.' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/users' },
    required: [],
  })
  .openapi('ProjectUser')

const ProjectUsersSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(ProjectUserSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/users' },
    required: [],
  })
  .openapi('ProjectUsers')

const ErrorSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Exception message' }),
    modelState: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Array of Elements of validation Errors' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developer.xero.com/documentation/projects/projects-response-codes',
    },
    required: [],
  })
  .openapi('Error')

const ChargeTypeSchema = z
  .enum(['TIME', 'FIXED', 'NON_CHARGEABLE'])
  .openapi({
    description:
      'Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.',
  })
  .openapi('ChargeType')

const TaskSchema = z
  .object({
    taskId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'Identifier of the task.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the task.' }),
    rate: AmountSchema.exactOptional(),
    chargeType: ChargeTypeSchema.exactOptional(),
    estimateMinutes: z
      .int()
      .exactOptional()
      .openapi({ description: 'An estimated time to perform the task' }),
    projectId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'Identifier of the project task belongs to.',
      }),
    totalMinutes: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Total minutes which have been logged against the task. Logged by assigning a time entry to a task',
      }),
    totalAmount: AmountSchema.exactOptional(),
    minutesInvoiced: z
      .int()
      .exactOptional()
      .openapi({ description: 'Minutes on this task which have been invoiced.' }),
    minutesToBeInvoiced: z
      .int()
      .exactOptional()
      .openapi({ description: 'Minutes on this task which have not been invoiced.' }),
    fixedMinutes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Minutes logged against this task if its charge type is `FIXED`.' }),
    nonChargeableMinutes: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Minutes logged against this task if its charge type is `NON_CHARGEABLE`.',
      }),
    amountToBeInvoiced: AmountSchema.exactOptional(),
    amountInvoiced: AmountSchema.exactOptional(),
    status: z
      .enum(['ACTIVE', 'INVOICED', 'LOCKED'])
      .exactOptional()
      .openapi({
        description:
          "Status of the task. When a task of ChargeType is `FIXED` and the rate amount is invoiced the status will be set to `INVOICED` and can't be modified. A task with ChargeType of `TIME` or `NON_CHARGEABLE` cannot have a status of `INVOICED`. A `LOCKED` state indicates that the task is currently changing state (for example being invoiced) and can't be modified.",
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: [],
  })
  .openapi('Task')

const TasksSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(TaskSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: [],
  })
  .openapi('Tasks')

const TaskCreateOrUpdateSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the task. Max length 100 characters.' }),
    rate: AmountSchema,
    chargeType: ChargeTypeSchema,
    estimateMinutes: z
      .int()
      .exactOptional()
      .openapi({ description: 'An estimated time to perform the task' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/projects' },
    required: ['name', 'rate', 'chargeType'],
  })
  .openapi('TaskCreateOrUpdate')

const TimeEntrySchema = z
  .object({
    timeEntryId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'Identifier of the time entry.',
      }),
    userId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'The xero user identifier of the person who logged time.',
      }),
    projectId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description:
          'Identifier of the project, that the task (which the time entry is logged against) belongs to.',
      }),
    taskId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'Identifier of the task that time entry is logged against.',
      }),
    dateUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date time that time entry is logged on. UTC Date Time in ISO-8601 format.',
      }),
    dateEnteredUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date time that time entry is created. UTC Date Time in ISO-8601 format. By default it is set to server time.',
      }),
    duration: z.int().exactOptional().openapi({ description: 'The duration of logged minutes.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the time entry.' }),
    status: z
      .enum(['ACTIVE', 'LOCKED', 'INVOICED'])
      .exactOptional()
      .openapi({
        description:
          'Status of the time entry. By default a time entry is created with status of `ACTIVE`. A `LOCKED` state indicates that the time entry is currently changing state (for example being invoiced). Updates are not allowed when in this state. It will have a status of INVOICED once it is invoiced.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/time' },
    required: [],
  })
  .openapi('TimeEntry')

const TimeEntriesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(TimeEntrySchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/time' },
    required: [],
  })
  .openapi('TimeEntries')

const TimeEntryCreateOrUpdateSchema = z
  .object({
    userId: z
      .uuid()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'The xero user identifier of the person logging the time.',
      }),
    taskId: z
      .uuid()
      .openapi({
        example: '00000000-0000-0000-000-000000000000',
        description: 'Identifier of the task that time entry is logged against.',
      }),
    dateUtc: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date time entry is logged on. UTC Date Time in ISO-8601 format.' }),
    duration: z
      .int()
      .openapi({
        description: 'Number of minutes to be logged. Duration is between 1 and 59940 inclusively.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional description of the time entry, will be set to null if not provided during update.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/projects/time' },
    required: ['userId', 'taskId', 'dateUtc', 'duration'],
  })
  .openapi('TimeEntryCreateOrUpdate')

const _400ErrorResponse = {
  description: 'A failed request due to validation error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'Xero-Tenant-Id',
      'x-snake': 'xero_tenant_id',
      description: 'Xero identifier for Tenant',
      schema: { type: 'string' },
      required: true,
    },
  })

const ChargeTypeParamsSchema = ChargeTypeSchema.openapi({
  param: {
    in: 'query',
    name: 'chargeType',
    'x-snake': 'charge_type',
    schema: { $ref: '#/components/schemas/ChargeType' },
    required: false,
  },
}).exactOptional()

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
        projects: 'Grant read-write access to projects',
        'projects.read': 'Grant read-only access to projects',
      },
    },
  },
}

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/Projects',
  tags: ['Project'],
  summary: 'Retrieves all projects',
  description: 'Allows you to retrieve, create and update projects.',
  operationId: 'getProjects',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      projectIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'projectIds',
            'x-snake': 'project_ids',
            in: 'query',
            required: false,
            description: 'Search for all projects that match a comma separated list of projectIds',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
          },
        }),
      contactID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'contactID',
            'x-snake': 'contact_id',
            in: 'query',
            required: false,
            description: 'Filter for projects for a specific contact',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      states: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            required: false,
            description: 'Filter for projects in a particular state (INPROGRESS or CLOSED)',
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            description:
              'set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.',
            schema: { type: 'integer', example: 1, default: 1 },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            'x-snake': 'page_size',
            in: 'query',
            required: false,
            description:
              'Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 50, example: 100 },
          },
          example: 100,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns a list of project objects',
      content: {
        'application/json': {
          schema: ProjectsSchema,
          example: {
            pagination: { page: 1, pageSize: 50, pageCount: 1, itemCount: 9 },
            items: [
              {
                projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
                contactId: '216830cb-9a68-487e-928b-c1a7ccc4fc81',
                name: 'FooProject28916',
                currencyCode: 'AUD',
                minutesLogged: 180,
                totalTaskAmount: { currency: 'AUD', value: 60 },
                totalExpenseAmount: { currency: 'AUD', value: 499 },
                minutesToBeInvoiced: 180,
                taskAmountToBeInvoiced: { currency: 'AUD', value: 60 },
                taskAmountInvoiced: { currency: 'AUD', value: 0 },
                expenseAmountToBeInvoiced: { currency: 'AUD', value: 499 },
                expenseAmountInvoiced: { currency: 'AUD', value: 0 },
                projectAmountInvoiced: { currency: 'AUD', value: 0 },
                deposit: { currency: 'AUD', value: 0 },
                depositApplied: { currency: 'AUD', value: 0 },
                creditNoteAmount: { currency: 'AUD', value: 0 },
                totalInvoiced: { currency: 'AUD', value: 0 },
                totalToBeInvoiced: { currency: 'AUD', value: 559 },
                deadlineUtc: '2020-03-03T15:00:00Z',
                estimate: { currency: 'AUD', value: 99.99 },
                status: 'INPROGRESS',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/Projects',
  tags: ['Project'],
  summary: 'Create one or more new projects',
  operationId: 'createProject',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Create a new project with ProjectCreateOrUpdate object',
      content: {
        'application/json': {
          schema: ProjectCreateOrUpdateSchema,
          example:
            '{ "contactId": "00000000-0000-0000-000-000000000000", "name": "New Kitchen", "deadlineUtc": "2019-12-10T12:59:59Z", "estimateAmount": "99.99" }',
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK/success, returns the new project object',
      content: {
        'application/json': {
          schema: ProjectSchema,
          example: {
            projectId: 'ed957eee-bc6f-4f52-a663-aa42e6af9620',
            contactId: '216830cb-9a68-487e-928b-c1a7ccc4fc81',
            name: 'New Kitchen',
            currencyCode: 'AUD',
            minutesLogged: 0,
            totalTaskAmount: { currency: 'AUD', value: 0 },
            totalExpenseAmount: { currency: 'AUD', value: 0 },
            minutesToBeInvoiced: 0,
            taskAmountToBeInvoiced: { currency: 'AUD', value: 0 },
            taskAmountInvoiced: { currency: 'AUD', value: 0 },
            expenseAmountToBeInvoiced: { currency: 'AUD', value: 0 },
            expenseAmountInvoiced: { currency: 'AUD', value: 0 },
            projectAmountInvoiced: { currency: 'AUD', value: 0 },
            deposit: { currency: 'AUD', value: 0 },
            depositApplied: { currency: 'AUD', value: 0 },
            creditNoteAmount: { currency: 'AUD', value: 0 },
            totalInvoiced: { currency: 'AUD', value: 0 },
            totalToBeInvoiced: { currency: 'AUD', value: 0 },
            deadlineUtc: '2020-03-03T15:00:00Z',
            estimate: { currency: 'AUD', value: 99.99 },
            status: 'INPROGRESS',
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/Projects/{projectId}',
  tags: ['Project'],
  summary: 'Retrieves a single project',
  description: 'Allows you to retrieve a specific project using the projectId',
  operationId: 'getProject',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns the specified project object',
      content: {
        'application/json': {
          schema: ProjectSchema,
          example: {
            projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
            contactId: '216830cb-9a68-487e-928b-c1a7ccc4fc81',
            name: 'Remodeling 2012',
            currencyCode: 'AUD',
            minutesLogged: 180,
            totalTaskAmount: { currency: 'AUD', value: 60 },
            totalExpenseAmount: { currency: 'AUD', value: 499 },
            minutesToBeInvoiced: 180,
            taskAmountToBeInvoiced: { currency: 'AUD', value: 60 },
            taskAmountInvoiced: { currency: 'AUD', value: 0 },
            expenseAmountToBeInvoiced: { currency: 'AUD', value: 499 },
            expenseAmountInvoiced: { currency: 'AUD', value: 0 },
            projectAmountInvoiced: { currency: 'AUD', value: 0 },
            deposit: { currency: 'AUD', value: 0 },
            depositApplied: { currency: 'AUD', value: 0 },
            creditNoteAmount: { currency: 'AUD', value: 0 },
            totalInvoiced: { currency: 'AUD', value: 0 },
            totalToBeInvoiced: { currency: 'AUD', value: 559 },
            deadlineUtc: '2020-03-03T15:00:00Z',
            estimate: { currency: 'AUD', value: 99.99 },
            status: 'INPROGRESS',
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const putProjectsProjectIdRoute = createRoute({
  method: 'put',
  path: '/Projects/{projectId}',
  tags: ['Project'],
  summary: 'Updates a specific project',
  description: 'Allows you to update a specific projects.',
  operationId: 'updateProject',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'Request of type ProjectCreateOrUpdate',
      content: {
        'application/json': {
          schema: ProjectCreateOrUpdateSchema,
          example:
            '{ "name": "New Kitchen", "deadlineUtc": "2017-04-23T18:25:43.511Z", "estimateAmount": 99.99 }',
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const patchProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/Projects/{projectId}',
  tags: ['Project'],
  summary: 'creates a project for the specified contact',
  description: 'Allows you to update a specific projects.',
  operationId: 'patchProject',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'Update the status of an existing Project',
      content: {
        'application/json': { schema: ProjectPatchSchema, example: '{ "status": "INPROGRESS" }' },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const getProjectsUsersRoute = createRoute({
  method: 'get',
  path: '/ProjectsUsers',
  tags: ['Project'],
  summary: 'Retrieves a list of all project users',
  description: 'Allows you to retrieve the users on a projects.',
  operationId: 'getProjectUsers',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            description:
              'set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.',
            schema: { type: 'integer', example: 1, default: 1 },
          },
          example: 1,
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            'x-snake': 'page_size',
            in: 'query',
            required: false,
            description:
              'Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 50, example: 100 },
          },
          example: 100,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns a list of project users',
      content: {
        'application/json': {
          schema: ProjectUsersSchema,
          example: {
            pagination: { page: 1, pageSize: 50, pageCount: 1, itemCount: 2 },
            items: [
              {
                userId: '740add2a-a703-4b8a-a670-1093919c2040',
                name: 'Test User',
                email: 'test@xero.com',
              },
              {
                userId: '00000000-0000-0000-0000-000000000000',
                name: 'API Team',
                email: 'api@xero.com',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const getProjectsProjectIdTasksRoute = createRoute({
  method: 'get',
  path: '/Projects/{projectId}/Tasks',
  tags: ['Project'],
  summary: 'Retrieves all project tasks',
  description: 'Allows you to retrieve a specific project',
  operationId: 'getTasks',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      page: z
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
            name: 'page',
            in: 'query',
            description:
              'Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.',
            schema: { type: 'integer', example: 1 },
            required: false,
          },
          example: 1,
        }),
      pageSize: z
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
            name: 'pageSize',
            'x-snake': 'page_size',
            in: 'query',
            description:
              'Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.',
            schema: { type: 'integer', example: 10 },
            required: false,
          },
          example: 10,
        }),
      taskIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskIds',
            'x-snake': 'task_ids',
            in: 'query',
            description:
              'Search for all tasks that match a comma separated list of taskIds, i.e. GET https://.../tasks?taskIds={taskID},{taskID}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      chargeType: ChargeTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns a list of task objects',
      content: {
        'application/json': {
          schema: TasksSchema,
          example: {
            pagination: { page: 1, pageSize: 50, pageCount: 1, itemCount: 1 },
            items: [
              {
                name: 'Demolition',
                rate: { currency: 'AUD', value: 20 },
                chargeType: 'TIME',
                status: 'ACTIVE',
                estimateMinutes: 12000,
                taskId: '7be77337-feec-4458-bb1b-dbaa5a4aafce',
                projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
                totalMinutes: 180,
                totalAmount: { currency: 'AUD', value: 60 },
                minutesToBeInvoiced: 180,
                minutesInvoiced: 0,
                nonChargeableMinutes: 0,
                fixedMinutes: 0,
                amountToBeInvoiced: { currency: 'AUD', value: 60 },
                amountInvoiced: { currency: 'AUD', value: 0 },
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const postProjectsProjectIdTasksRoute = createRoute({
  method: 'post',
  path: '/Projects/{projectId}/Tasks',
  tags: ['Project'],
  summary: 'Allows you to create a task',
  description: 'Allows you to create a specific task',
  operationId: 'createTask',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description: 'You can create a task on a specified projectId',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The task object you are creating',
      content: {
        'application/json': {
          schema: TaskCreateOrUpdateSchema,
          example: '{ "status": "INPROGRESS" }',
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK/success, returns the new task object',
      content: {
        'application/json': {
          schema: TaskSchema,
          example: {
            name: 'Demolition',
            rate: { currency: 'AUD', value: 20 },
            chargeType: 'TIME',
            status: 'ACTIVE',
            estimateMinutes: 12000,
            taskId: '00000000-0000-0000-0000-000000000000',
            projectId: '00000000-0000-0000-0000-000000000000',
            totalMinutes: 300,
            totalAmount: { currency: 'AUD', value: 100 },
            minutesToBeInvoiced: 300,
            minutesInvoiced: 0,
            nonChargeableMinutes: 0,
            fixedMinutes: 0,
            amountToBeInvoiced: { currency: 'AUD', value: 100 },
            amountInvoiced: { currency: 'AUD', value: 0 },
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const getProjectsProjectIdTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/Projects/{projectId}/Tasks/{taskId}',
  tags: ['Project'],
  summary: 'Retrieves a single project task',
  description: 'Allows you to retrieve a specific project',
  operationId: 'getTask',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      taskId: z
        .uuid()
        .openapi({
          param: {
            name: 'taskId',
            'x-snake': 'task_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual task by appending the taskId to the endpoint, i.e. GET https://.../tasks/{taskID}',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns the specified task object',
      content: {
        'application/json': {
          schema: TaskSchema,
          example: {
            name: 'Demolition',
            rate: { currency: 'AUD', value: 20 },
            chargeType: 'TIME',
            status: 'ACTIVE',
            estimateMinutes: 12000,
            taskId: '7be77337-feec-4458-bb1b-dbaa5a4aafce',
            projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
            totalMinutes: 300,
            totalAmount: { currency: 'AUD', value: 100 },
            minutesToBeInvoiced: 300,
            minutesInvoiced: 0,
            nonChargeableMinutes: 0,
            fixedMinutes: 0,
            amountToBeInvoiced: { currency: 'AUD', value: 100 },
            amountInvoiced: { currency: 'AUD', value: 0 },
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const putProjectsProjectIdTasksTaskIdRoute = createRoute({
  method: 'put',
  path: '/Projects/{projectId}/Tasks/{taskId}',
  tags: ['Project'],
  summary: 'Allows you to update a task',
  description: 'Allows you to update a specific task',
  operationId: 'updateTask',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      taskId: z
        .uuid()
        .openapi({
          param: {
            name: 'taskId',
            'x-snake': 'task_id',
            in: 'path',
            required: true,
            description: 'You can specify an individual task by appending the id to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The task object you are updating',
      content: { 'application/json': { schema: TaskCreateOrUpdateSchema, example: '' } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK/Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const deleteProjectsProjectIdTasksTaskIdRoute = createRoute({
  method: 'delete',
  path: '/Projects/{projectId}/Tasks/{taskId}',
  tags: ['Project'],
  summary: 'Allows you to delete a task',
  description: 'Allows you to delete a specific task',
  operationId: 'deleteTask',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      taskId: z
        .uuid()
        .openapi({
          param: {
            name: 'taskId',
            'x-snake': 'task_id',
            in: 'path',
            required: true,
            description: 'You can specify an individual task by appending the id to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const getProjectsProjectIdTimeRoute = createRoute({
  method: 'get',
  path: '/Projects/{projectId}/Time',
  tags: ['Project'],
  summary: 'Retrieves all time entries associated with a specific project',
  description: 'Allows you to retrieve the time entries associated with a specific project',
  operationId: 'getTimeEntries',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'Identifier of the project, that the task (which the time entry is logged against) belongs to.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            'x-snake': 'user_id',
            in: 'query',
            description: 'The xero user identifier of the person who logged time.',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      taskId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskId',
            'x-snake': 'task_id',
            in: 'query',
            description: 'Identifier of the task that time entry is logged against.',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      invoiceId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'invoiceId',
            'x-snake': 'invoice_id',
            in: 'query',
            description: 'Finds all time entries for this invoice.',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      contactId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'contactId',
            'x-snake': 'contact_id',
            in: 'query',
            description: 'Finds all time entries for this contact identifier.',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      page: z
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
            name: 'page',
            in: 'query',
            description:
              'Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.',
            schema: { type: 'integer', example: 1 },
            required: false,
          },
          example: 1,
        }),
      pageSize: z
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
            name: 'pageSize',
            'x-snake': 'page_size',
            in: 'query',
            description:
              'Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.',
            schema: { type: 'integer', example: 10 },
            required: false,
          },
          example: 10,
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            description:
              'Comma-separated list of states to find. Will find all time entries that are in the status of whatever is specified.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      isChargeable: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isChargeable',
            'x-snake': 'is_chargeable',
            in: 'query',
            description:
              'Finds all time entries which relate to tasks with the charge type `TIME` or `FIXED`.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      dateAfterUtc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'dateAfterUtc',
            'x-snake': 'date_after_utc',
            in: 'query',
            description:
              'ISO 8601 UTC date. Finds all time entries on or after this date filtered on the `dateUtc` field.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      dateBeforeUtc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'dateBeforeUtc',
            'x-snake': 'date_before_utc',
            in: 'query',
            description:
              'ISO 8601 UTC date. Finds all time entries on or before this date filtered on the `dateUtc` field.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns a list of time entry objects',
      content: {
        'application/json': {
          schema: TimeEntriesSchema,
          example: {
            pagination: { page: 1, pageSize: 50, pageCount: 1, itemCount: 9 },
            items: [
              {
                timeEntryId: '3cd35eca-704f-4bca-b258-236028ae8ed1',
                userId: '740add2a-a703-4b8a-a670-1093919c2040',
                projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
                taskId: '7be77337-feec-4458-bb1b-dbaa5a4aafce',
                dateUtc: '2020-02-27T15:00:00Z',
                dateEnteredUtc: '2020-02-28T03:24:29.2215641Z',
                duration: 45,
                description: 'My description',
                status: 'ACTIVE',
              },
              {
                timeEntryId: '00000000-0000-0000-0000-000000000000',
                userId: '00000000-0000-0000-0000-000000000000',
                projectId: '00000000-0000-0000-0000-000000000000',
                taskId: '00000000-0000-0000-0000-000000000000',
                dateUtc: '2020-02-26T15:00:00Z',
                dateEnteredUtc: '2020-02-28T03:24:29.2215641Z',
                duration: 30,
                description: 'My description',
                status: 'ACTIVE',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const postProjectsProjectIdTimeRoute = createRoute({
  method: 'post',
  path: '/Projects/{projectId}/Time',
  tags: ['Project'],
  summary: 'Creates a time entry for a specific project',
  description: 'Allows you to create a specific task',
  operationId: 'createTimeEntry',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The time entry object you are creating',
      content: {
        'application/json': {
          schema: TimeEntryCreateOrUpdateSchema,
          example: {
            userId: '00000000-0000-0000-0000-000000000000',
            taskId: '00000000-0000-0000-0000-000000000000',
            dateUtc: '2020-02-26T15:00:00Z',
            duration: 30,
            description: 'My description',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK/success, returns the newly created time entry',
      content: {
        'application/json': {
          schema: TimeEntrySchema,
          example: {
            timeEntryId: 'c6539534-f1d2-43a6-80df-3bd1f8aca24d',
            userId: 'c6539534-f1d2-43a6-80df-3bd1f8aca24d',
            projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
            taskId: '7be77337-feec-4458-bb1b-dbaa5a4aafce',
            dateUtc: '2020-02-26T15:00:00Z',
            dateEnteredUtc: '2020-02-28T20:37:42.8652832Z',
            duration: 30,
            description: 'My description',
            status: 'ACTIVE',
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const getProjectsProjectIdTimeTimeEntryIdRoute = createRoute({
  method: 'get',
  path: '/Projects/{projectId}/Time/{timeEntryId}',
  tags: ['Project'],
  summary: 'Retrieves a single time entry for a specific project',
  description: 'Allows you to get a single time entry in a project',
  operationId: 'getTimeEntry',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      timeEntryId: z
        .uuid()
        .openapi({
          param: {
            name: 'timeEntryId',
            'x-snake': 'time_entry_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual time entry by appending the id to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK/success, returns the specified time entry',
      content: {
        'application/json': {
          schema: TimeEntrySchema,
          example: {
            timeEntryId: '3cd35eca-704f-4bca-b258-236028ae8ed1',
            userId: '740add2a-a703-4b8a-a670-1093919c2040',
            projectId: 'b021e7cb-1903-4292-b48b-5b27b4271e3e',
            taskId: '7be77337-feec-4458-bb1b-dbaa5a4aafce',
            dateUtc: '2020-02-27T15:00:00Z',
            dateEnteredUtc: '2020-02-21T21:41:22.2642727Z',
            duration: 45,
            description: 'My description',
            status: 'ACTIVE',
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects', 'projects.read'] }],
})

export const putProjectsProjectIdTimeTimeEntryIdRoute = createRoute({
  method: 'put',
  path: '/Projects/{projectId}/Time/{timeEntryId}',
  tags: ['Project'],
  summary: 'Updates a time entry for a specific project',
  description: 'Allows you to update time entry in a project',
  operationId: 'updateTimeEntry',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      timeEntryId: z
        .uuid()
        .openapi({
          param: {
            name: 'timeEntryId',
            'x-snake': 'time_entry_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual time entry by appending the id to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The time entry object you are updating',
      content: {
        'application/json': {
          schema: TimeEntryCreateOrUpdateSchema,
          example: {
            userId: '00000000-0000-0000-0000-000000000000',
            taskId: '00000000-0000-0000-0000-000000000000',
            dateUtc: '2020-02-27T15:00:00Z',
            duration: 45,
            description: 'My UPDATED description',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})

export const deleteProjectsProjectIdTimeTimeEntryIdRoute = createRoute({
  method: 'delete',
  path: '/Projects/{projectId}/Time/{timeEntryId}',
  tags: ['Project'],
  summary: 'Deletes a time entry for a specific project',
  description: 'Allows you to delete a specific time entry',
  operationId: 'deleteTimeEntry',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            'x-snake': 'project_id',
            in: 'path',
            required: true,
            description:
              'You can specify an individual project by appending the projectId to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      timeEntryId: z
        .uuid()
        .openapi({
          param: {
            name: 'timeEntryId',
            'x-snake': 'time_entry_id',
            in: 'path',
            required: true,
            description: 'You can specify an individual task by appending the id to the endpoint',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['projects'] }],
})
