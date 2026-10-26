import { createRoute, z } from '@hono/zod-openapi'

const PaginationSchema = z
  .object({
    page: z.int().exactOptional().openapi({ example: 1 }),
    pageSize: z.int().exactOptional().openapi({ example: 10 }),
    pageCount: z.int().exactOptional().openapi({ example: 1 }),
    itemCount: z.int().exactOptional().openapi({ example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const InvalidFieldSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field that caused the error',
        example: 'DateOfBirth',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reason the error occurred',
        example: 'The Date of Birth is required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvalidField')

const ProblemSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error format', example: 'application/problem+json' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the error', example: 'BadRequest' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status code', example: 400 }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the error',
        example: 'Validation error occurred.',
      }),
    instance: z.string().exactOptional(),
    invalidFields: z.array(InvalidFieldSchema).exactOptional(),
  })
  .openapi({ description: 'The object returned for a bad request', required: [] })
  .openapi('Problem')

const TimesheetLineSchema = z
  .object({
    timesheetLineID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a Timesheet Line' }),
    date: z.iso
      .date()
      .openapi({
        description: 'The Date that this Timesheet Line is for (YYYY-MM-DD)',
        'x-is-date': true,
      }),
    earningsRateID: z
      .uuid()
      .openapi({
        description: 'The Xero identifier for the Earnings Rate that the Timesheet is for',
      }),
    trackingItemID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for the Tracking Item that the Timesheet is for',
      }),
    numberOfUnits: z
      .float64()
      .openapi({ description: 'The Number of Units of the Timesheet Line' }),
  })
  .openapi({ required: ['date', 'earningsRateID', 'numberOfUnits'] })
  .openapi('TimesheetLine')

const TimesheetLinesSchema = z.array(TimesheetLineSchema).openapi('TimesheetLines')

const TimesheetSchema = z
  .object({
    timesheetID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a Timesheet' }),
    payrollCalendarID: z
      .uuid()
      .openapi({
        description: 'The Xero identifier for the Payroll Calendar that the Timesheet applies to',
      }),
    employeeID: z
      .uuid()
      .openapi({ description: 'The Xero identifier for the Employee that the Timesheet is for' }),
    startDate: z.iso
      .date()
      .openapi({
        description: 'The Start Date of the Timesheet period (YYYY-MM-DD)',
        'x-is-date': true,
      }),
    endDate: z.iso
      .date()
      .openapi({
        description: 'The End Date of the Timesheet period (YYYY-MM-DD)',
        'x-is-date': true,
      }),
    status: z
      .enum(['Draft', 'Approved', 'Completed'])
      .exactOptional()
      .openapi({ description: 'Status of the timesheet' }),
    totalHours: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Total Hours of the Timesheet' }),
    updatedDateUTC: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The UTC date time that the Timesheet was last updated',
        'x-is-datetime': true,
      }),
    timesheetLines: TimesheetLinesSchema.exactOptional(),
  })
  .openapi({ required: ['payrollCalendarID', 'employeeID', 'startDate', 'endDate'] })
  .openapi('Timesheet')

const TimesheetsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    timesheets: z.array(TimesheetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Timesheets')

const TimesheetObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    timesheet: TimesheetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimesheetObject')

const TimesheetLineObjectSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    problem: ProblemSchema.exactOptional(),
    timesheetLine: TimesheetLineSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimesheetLineObject')

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
  description:
    'For more information visit https://developer.xero.com/documentation/oauth2/overview',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        'payroll.timesheets': 'Grant read-write access to payroll timesheets',
        'payroll.timesheets.read': 'Grant read-only access to payroll timesheets',
      },
    },
  },
}

export const getTimesheetsRoute = createRoute({
  method: 'get',
  path: '/Timesheets',
  tags: ['PayrollAuV2'],
  summary: 'Retrieves timesheets',
  operationId: 'getTimesheets',
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.',
            schema: { type: 'integer' },
            example: 5,
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            description: 'Filter by employeeId and/or payrollCalendarId',
            schema: { type: 'string' },
            example:
              'employeeId==00000000-0000-0000-0000-000000000000,payrollCalendarId==00000000-0000-0000-0000-000000000000',
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'filter results by any timesheets with a matching timesheet status',
            schema: { type: 'string' },
            example: 'Draft',
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            'x-snake': 'start_date',
            description:
              'filter results by any timesheets with a startDate on or after the provided date',
            schema: { type: 'string' },
            example: '2019-01-02',
            required: false,
          },
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            'x-snake': 'end_date',
            description:
              'filter results by any timesheets with a endDate on or before the provided date',
            schema: { type: 'string' },
            example: '2020-01-02',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description:
              'sort the order of timesheets returned. The default is based on the timesheets createdDate, sorted oldest to newest. Currently, the only other option is to reverse the order based on the timesheets startDate, sorted newest to oldest.',
            schema: { type: 'string' },
            example: 'startDate',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetsSchema,
          example: {
            id: 'd81c2087-3ecb-4d91-b775-73d85f593370',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-13T21:54:01.8865016',
            httpStatusCode: 'OK',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            problem: null,
            timesheets: [
              {
                timesheetID: '0c94d453-3d8c-4167-8c25-b4025121d18b',
                payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
                employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
                startDate: '2020-04-13T00:00:00',
                endDate: '2020-04-19T00:00:00',
                status: 'Approved',
                totalHours: 16,
                updatedDateUTC: '2020-04-13T21:53:39',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets', 'payroll.timesheets.read'] }],
})

export const postTimesheetsRoute = createRoute({
  method: 'post',
  path: '/Timesheets',
  tags: ['PayrollAuV2'],
  summary: 'Creates a new timesheet',
  operationId: 'createTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: TimesheetSchema,
          example: {
            payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
            employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
            startDate: '2020-04-13',
            endDate: '2020-04-19',
            timesheetLines: [
              {
                date: '2020-04-13',
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                numberOfUnits: 8,
              },
              {
                date: '2020-04-15',
                earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                numberOfUnits: 6,
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: 'ef0aa7e2-6f7f-43f6-9186-af670dce7c69',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-21T03:07:37.0148822',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '88d2038a-06f7-4b8a-bdab-809804c0aa1d',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 14,
              updatedDateUTC: '2020-04-21T03:07:36.8132834',
              timesheetLines: [
                {
                  timesheetLineID: '03060d0c-b14a-4339-aced-51cb2e5313b7',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: '53ebdb54-b604-4d15-8c42-5162a7fe88e6',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 8,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const getTimesheetsTimesheetIDRoute = createRoute({
  method: 'get',
  path: '/Timesheets/{TimesheetID}',
  tags: ['PayrollAuV2'],
  summary: 'Retrieve a specific timesheet by using a unique timesheet ID',
  operationId: 'getTimesheet',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: '504259ac-df26-482e-bd0a-d792d96453bb',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T16:41:00.5013526',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '25c59963-5df2-43c3-88f6-25a3caa63084',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 14,
              updatedDateUTC: '2020-04-14T16:31:35',
              timesheetLines: [
                {
                  timesheetLineID: '6cc1e5c3-f080-4dbc-a82b-bea256ef939f',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 8,
                },
                {
                  timesheetLineID: '3d900df1-9859-492b-9b00-155860158c0d',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets', 'payroll.timesheets.read'] }],
})

export const deleteTimesheetsTimesheetIDRoute = createRoute({
  method: 'delete',
  path: '/Timesheets/{TimesheetID}',
  tags: ['PayrollAuV2'],
  summary: 'Deletes a specific timesheet',
  operationId: 'deleteTimesheet',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: TimesheetLineSchema } },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const postTimesheetsTimesheetIDLinesRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}/Lines',
  tags: ['PayrollAuV2'],
  summary: 'Creates a new timesheet line for a specific timesheet using a unique timesheet ID',
  operationId: 'createTimesheetLine',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TimesheetLineSchema,
          example: {
            date: '2020-04-14',
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
            numberOfUnits: 1,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetLineObjectSchema,
          example: {
            id: 'cf701261-529e-47cd-8156-5ec9ab3394ff',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T17:19:22.8599292',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheetLine: {
              timesheetLineID: '56fce87e-7f0d-4c19-8f74-7f5656651c81',
              date: '2020-04-14T00:00:00',
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
              trackingItemID: null,
              numberOfUnits: 1,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const postTimesheetsTimesheetIDApproveRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}/Approve',
  tags: ['PayrollAuV2'],
  summary: 'Approves a specific timesheet',
  operationId: 'approveTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: '94c27148-2749-4d85-bc1a-986e6de230ae',
            providerName: 'provider-name',
            dateTimeUTC: '2020-06-01T20:32:19.7577043',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '62bd8b5f-8e90-4868-a0e6-62f994f7d659',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Approved',
              totalHours: 9,
              updatedDateUTC: '2020-06-01T20:32:19.9534744',
              timesheetLines: [
                {
                  timesheetLineID: 'ce6db38f-efe9-49dc-ae42-7e6bad3cb167',
                  date: '2020-04-14T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 2,
                },
                {
                  timesheetLineID: 'bc8004d2-5965-4f4e-8e46-0519040b4a05',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: 'fd00cd5a-7d0c-4cb7-85ff-66bd3ed2439a',
                  date: '2020-04-14T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 1,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const postTimesheetsTimesheetIDRevertToDraftRoute = createRoute({
  method: 'post',
  path: '/Timesheets/{TimesheetID}/RevertToDraft',
  tags: ['PayrollAuV2'],
  summary: 'Reverts a specific timesheet to draft',
  operationId: 'revertTimesheet',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetObjectSchema,
          example: {
            id: 'a774530a-a50c-4480-a094-358cf80a7d98',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T17:49:23.1119111',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheet: {
              timesheetID: '0fd483c0-3302-48c6-bbd5-7247c9a02460',
              payrollCalendarID: '216d80e6-af55-47b1-b718-9457c3f5d2fe',
              employeeID: 'aad6b292-7b94-408b-93f6-e489867e3fb0',
              startDate: '2020-04-13T00:00:00',
              endDate: '2020-04-19T00:00:00',
              status: 'Draft',
              totalHours: 15,
              updatedDateUTC: '2020-04-14T17:49:23.2188538',
              timesheetLines: [
                {
                  timesheetLineID: '17a08549-1ed1-416b-83e2-c65040119a02',
                  date: '2020-04-13T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 8,
                },
                {
                  timesheetLineID: '0e912b7d-dc3f-4b95-a466-3f0f5c8581cb',
                  date: '2020-04-15T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 6,
                },
                {
                  timesheetLineID: 'd0faac99-f2d4-42b9-ab00-9c2bc6e8fe3a',
                  date: '2020-04-14T00:00:00',
                  earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
                  trackingItemID: null,
                  numberOfUnits: 1,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const putTimesheetsTimesheetIDLinesTimesheetLineIDRoute = createRoute({
  method: 'put',
  path: '/Timesheets/{TimesheetID}/Lines/{TimesheetLineID}',
  tags: ['PayrollAuV2'],
  summary: 'Updates a specific timesheet line for a specific timesheet',
  operationId: 'updateTimesheetLine',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      TimesheetLineID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetLineID',
            'x-snake': 'timesheet_line_id',
            required: true,
            description: 'Identifier for the timesheet line',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TimesheetLineSchema,
          example: {
            date: '2020-04-14',
            earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
            numberOfUnits: 2,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: TimesheetLineObjectSchema,
          example: {
            id: '582b87a6-14f3-409b-be89-f9b9c49db983',
            providerName: 'provider-name',
            dateTimeUTC: '2020-04-14T18:07:30.718153',
            httpStatusCode: 'OK',
            pagination: null,
            problem: null,
            timesheetLine: {
              timesheetLineID: 'c88edcad-af32-4536-a682-9a4772c21c8d',
              date: '2020-04-14T00:00:00',
              earningsRateID: '87f5b43a-cf51-4b74-92de-94c819e82d27',
              trackingItemID: null,
              numberOfUnits: 2,
            },
          },
        },
      },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})

export const deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute = createRoute({
  method: 'delete',
  path: '/Timesheets/{TimesheetID}/Lines/{TimesheetLineID}',
  tags: ['PayrollAuV2'],
  summary: 'Deletes a specific timesheet line',
  operationId: 'deleteTimesheetLine',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      TimesheetID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetID',
            'x-snake': 'timesheet_id',
            required: true,
            description: 'Identifier for the timesheet',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      TimesheetLineID: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'TimesheetLineID',
            'x-snake': 'timesheet_line_id',
            required: true,
            description: 'Identifier for the timesheet line',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: { 'application/json': { schema: TimesheetLineSchema } },
    },
    400: {
      description: 'validation error for a bad request',
      content: { 'application/json': { schema: ProblemSchema } },
    },
  },
  security: [{ OAuth2: ['payroll.timesheets'] }],
})
