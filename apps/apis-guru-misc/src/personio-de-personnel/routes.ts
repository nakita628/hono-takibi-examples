import { createRoute, z } from '@hono/zod-openapi'

type AbsenceEntitlementType = {
  label: string
  value: {
    attributes?: { entitlement?: number; id?: number; name?: string }
    type?: 'TimeOffType'
  }[]
}

type AttributeType = { label: string; value: { [key: string]: unknown } }

const AttributeSchema: z.ZodType<AttributeType> = z
  .object({ label: z.string(), value: z.object({}) })
  .openapi({ required: ['label', 'value'] })
  .openapi('Attribute')

type CostCentersType = z.infer<typeof AttributeSchema>

type DepartmentType = z.infer<typeof AttributeSchema>

const AbsenceEntitlementSchema: z.ZodType<AbsenceEntitlementType> = z
  .object({
    label: z.string(),
    value: z.array(
      z
        .object({
          attributes: z
            .object({
              entitlement: z.number().exactOptional(),
              id: z.int().exactOptional(),
              name: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          type: z.literal('TimeOffType').exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  })
  .openapi({ required: ['label', 'value'] })
  .openapi('AbsenceEntitlement')

const CostCentersSchema: z.ZodType<CostCentersType> = AttributeSchema.and(
  z
    .object({
      value: z
        .array(
          z
            .object({
              attributes: z
                .array(
                  z
                    .object({
                      id: z.number().exactOptional(),
                      name: z.string().exactOptional(),
                      percentage: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('CostCenters')

const DepartmentSchema: z.ZodType<DepartmentType> = AttributeSchema.and(
  z
    .object({
      value: z
        .object({
          attributes: z
            .object({ name: z.string().exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          type: z.string().exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('Department')

type HolidayCalendarType = z.infer<typeof AttributeSchema>

const HolidayCalendarSchema: z.ZodType<HolidayCalendarType> = AttributeSchema.and(
  z
    .object({
      value: z
        .object({
          attributes: z
            .object({
              country: z.string().exactOptional(),
              id: z.number().exactOptional(),
              name: z.string().exactOptional(),
              state: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          type: z.string().exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('HolidayCalendar')

type OfficeType = z.infer<typeof AttributeSchema>

const OfficeSchema: z.ZodType<OfficeType> = AttributeSchema.and(
  z
    .object({
      value: z
        .object({
          attributes: z
            .object({ name: z.string().exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          type: z.string().exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('Office')

const SupervisorSchema: z.ZodType<SupervisorType> = z
  .lazy(() =>
    AttributeSchema.and(
      z.object({ value: EmployeeSchema.exactOptional() }).openapi({ required: [] }),
    ),
  )
  .openapi('Supervisor')

type WorkScheduleType = z.infer<typeof AttributeSchema>

const WorkScheduleSchema: z.ZodType<WorkScheduleType> = AttributeSchema.and(
  z
    .object({
      value: z
        .object({
          attributes: z
            .object({
              friday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
              id: z.number().exactOptional(),
              monday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
              name: z.string().exactOptional(),
              saturday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
              sunday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
              thursday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
              tuesday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
              wednesday: z
                .string()
                .regex(/^\d\d:\d\d$/)
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          type: z.string().exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('WorkSchedule')

type EmployeeType = {
  attributes: {
    absence_entitlement?: z.infer<typeof AbsenceEntitlementSchema>
    contract_end_date?: z.infer<typeof AttributeSchema>
    cost_centers?: z.infer<typeof CostCentersSchema>
    created_at?: z.infer<typeof AttributeSchema>
    department?: z.infer<typeof DepartmentSchema>
    email?: z.infer<typeof AttributeSchema>
    employment_type?: z.infer<typeof AttributeSchema>
    first_name?: z.infer<typeof AttributeSchema>
    fix_salary?: z.infer<typeof AttributeSchema>
    gender?: z.infer<typeof AttributeSchema>
    hire_date?: z.infer<typeof AttributeSchema>
    holiday_calendar?: z.infer<typeof HolidayCalendarSchema>
    hourly_salary?: z.infer<typeof AttributeSchema>
    id?: z.infer<typeof AttributeSchema>
    last_name?: z.infer<typeof AttributeSchema>
    office?: z.infer<typeof OfficeSchema>
    position?: z.infer<typeof AttributeSchema>
    probation_period_end?: z.infer<typeof AttributeSchema>
    status?: z.infer<typeof AttributeSchema>
    supervisor?: z.infer<typeof SupervisorSchema>
    termination_date?: z.infer<typeof AttributeSchema>
    termination_reason?: z.infer<typeof AttributeSchema>
    termination_type?: z.infer<typeof AttributeSchema>
    vacation_day_balance?: z.infer<typeof AttributeSchema>
    weekly_working_hours?: z.infer<typeof AttributeSchema>
    work_schedule?: z.infer<typeof WorkScheduleSchema>
  }[]
  type: string
}

type SupervisorType = z.infer<typeof AttributeSchema>

const AbsencePeriodResponseSchema = z.object({}).openapi('AbsencePeriodResponse')

const ResponseSchema = z
  .object({ data: z.object({}), success: z.boolean() })
  .openapi({ required: ['success', 'data'], title: 'Default response object' })
  .openapi('Response')

const AbsencePeriodsResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({
          attributes: z.array(
            z
              .object({
                certificate: z
                  .object({ status: z.string().exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
                created_at: z.string().exactOptional(),
                days_count: z.number().exactOptional(),
                employee: z
                  .object({
                    attributes: z
                      .array(
                        z
                          .object({
                            email: z.string().exactOptional(),
                            first_name: z.string().exactOptional(),
                            id: z.int().exactOptional(),
                            last_name: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                    type: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                end_date: z.string().exactOptional(),
                half_day_end: z.number().exactOptional(),
                half_day_start: z.number().exactOptional(),
                id: z.int().exactOptional(),
                start_date: z.string().exactOptional(),
                status: z.string().exactOptional(),
                time_off_type: z
                  .object({
                    attributes: z
                      .array(
                        z
                          .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                    type: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
          type: z.string(),
        })
        .exactOptional()
        .openapi({ required: ['type', 'attributes'] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'List All Absence Periods response' })
  .openapi('AbsencePeriodsResponse')

const AttendancePeriodsResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .array(
          z
            .object({
              attributes: z.array(
                z
                  .object({
                    break: z.int(),
                    comment: z.string(),
                    date: z.iso.date(),
                    employee: z.int(),
                    end_time: z.string().regex(/^\d\d:\d\d$/),
                    is_holiday: z.boolean(),
                    is_on_time_off: z.boolean(),
                    start_time: z.string().regex(/^\d\d:\d\d$/),
                  })
                  .openapi({
                    required: [
                      'employee',
                      'date',
                      'start_time',
                      'end_time',
                      'break',
                      'comment',
                      'is_holiday',
                      'is_on_time_off',
                    ],
                  }),
              ),
              id: z.int(),
              type: z.string(),
            })
            .openapi({ required: ['id', 'type', 'attributes'] }),
        )
        .exactOptional(),
      limit: z.int().exactOptional(),
      offset: z.int().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'List All Attenance Periods response' })
  .openapi('AttendancePeriodsResponse')

const CreateTimeOffPeriodRequestSchema = z
  .object({
    comment: z.string().exactOptional().openapi({ description: 'Optional comment' }),
    employee_id: z.int().openapi({ description: 'Employee identifier' }),
    end_date: z.iso.date().openapi({ description: 'Absence end date as YYYY-MM-DD' }),
    half_day_end: z.boolean().openapi({ description: 'Weather the end date is a half-day off' }),
    half_day_start: z
      .boolean()
      .openapi({ description: 'Weather the start date is a half-day off' }),
    start_date: z.iso.date().openapi({ description: 'Absence start date as YYYY-MM-DD' }),
    time_off_type_id: z.int().openapi({ description: 'Time-off type identifier' }),
  })
  .openapi({
    required: [
      'employee_id',
      'time_off_type_id',
      'start_date',
      'end_date',
      'half_day_start',
      'half_day_end',
    ],
    title: 'Create time-off periods',
  })
  .openapi('CreateTimeOffPeriodRequest')

const CreateTimeOffPeriodResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({
          attributes: z
            .object({
              certificate: z
                .object({ status: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              created_at: z.string().exactOptional(),
              days_count: z.number().exactOptional(),
              employee: z
                .object({
                  attributes: z
                    .array(
                      z
                        .object({
                          email: z.string().exactOptional(),
                          first_name: z.string().exactOptional(),
                          id: z.int().exactOptional(),
                          last_name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  type: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              end_date: z.string().exactOptional(),
              half_day_end: z.number().exactOptional(),
              half_day_start: z.number().exactOptional(),
              id: z.int().exactOptional(),
              start_date: z.string().exactOptional(),
              status: z.string().exactOptional(),
              time_off_type: z
                .object({
                  attributes: z
                    .array(
                      z
                        .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  type: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          type: z
            .literal('TimeOffPeriod')
            .exactOptional()
            .openapi({ description: 'Time-off period resource name' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Time period when an employee is not available.' })
  .openapi('CreateTimeOffPeriodResponse')

const DetailedErrorResponseSchema = z
  .object({
    error: z
      .object({
        code: z.int().exactOptional(),
        detailed_message: z
          .array(
            z
              .object({
                break: z.int().exactOptional(),
                comment: z.string().exactOptional(),
                date: z.string().exactOptional(),
                employee: z.int().exactOptional(),
                end_time: z.string().exactOptional(),
                error_msg: z.string().exactOptional(),
                id: z.int().exactOptional(),
                start_time: z.string().exactOptional(),
                success: z.boolean().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        message: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    success: z.boolean(),
  })
  .openapi({ required: ['success', 'error'], title: 'Default error response' })
  .openapi('DetailedErrorResponse')

const EmployeeSchema: z.ZodType<EmployeeType> = z
  .lazy(() =>
    z
      .object({
        attributes: z.array(
          z
            .object({
              absence_entitlement: AbsenceEntitlementSchema.exactOptional(),
              contract_end_date: AttributeSchema.exactOptional(),
              cost_centers: CostCentersSchema.exactOptional(),
              created_at: AttributeSchema.exactOptional(),
              department: DepartmentSchema.exactOptional(),
              email: AttributeSchema.exactOptional(),
              employment_type: AttributeSchema.exactOptional(),
              first_name: AttributeSchema.exactOptional(),
              fix_salary: AttributeSchema.exactOptional(),
              gender: AttributeSchema.exactOptional(),
              hire_date: AttributeSchema.exactOptional(),
              holiday_calendar: HolidayCalendarSchema.exactOptional(),
              hourly_salary: AttributeSchema.exactOptional(),
              id: AttributeSchema.exactOptional(),
              last_name: AttributeSchema.exactOptional(),
              office: OfficeSchema.exactOptional(),
              position: AttributeSchema.exactOptional(),
              probation_period_end: AttributeSchema.exactOptional(),
              status: AttributeSchema.exactOptional(),
              supervisor: SupervisorSchema.exactOptional(),
              termination_date: AttributeSchema.exactOptional(),
              termination_reason: AttributeSchema.exactOptional(),
              termination_type: AttributeSchema.exactOptional(),
              vacation_day_balance: AttributeSchema.exactOptional(),
              weekly_working_hours: AttributeSchema.exactOptional(),
              work_schedule: WorkScheduleSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        ),
        type: z.string(),
      })
      .openapi({ required: ['type', 'attributes'] }),
  )
  .openapi('Employee')

const EmployeeResponseSchema = ResponseSchema.and(
  z.object({ data: EmployeeSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({ title: 'Employee' })
  .openapi('EmployeeResponse')

const EmployeesResponseSchema = ResponseSchema.and(
  z.object({ data: z.array(EmployeeSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({ title: 'List of Employees' })
  .openapi('EmployeesResponse')

const ErrorResponseSchema = z
  .object({
    error: z
      .object({ code: z.int().exactOptional(), message: z.string().exactOptional() })
      .openapi({ required: [] }),
    success: z.boolean(),
  })
  .openapi({ required: ['success', 'error'], title: 'Default error response' })
  .openapi('ErrorResponse')

const NewAttendancePeriodRequestSchema = z
  .object({
    attendances: z
      .array(
        z
          .object({
            break: z.int32().openapi({ description: 'Break in minutes' }),
            comment: z.string().openapi({ description: 'Optional comment' }),
            date: z.iso.date().openapi({ description: 'Attendance date as YYYY-MM-DD' }),
            employee: z.int().openapi({ description: 'Employee identifier' }),
            end_time: z
              .string()
              .regex(/^\d\d:\d\d$/)
              .openapi({ description: 'End time as HH:MM' }),
            start_time: z
              .string()
              .regex(/^\d\d:\d\d$/)
              .openapi({ description: 'Start time as HH:MM' }),
          })
          .openapi({
            required: ['employee', 'date', 'start_time', 'end_time', 'break', 'comment'],
          }),
      )
      .exactOptional(),
  })
  .openapi({
    example: {
      attendances: [
        {
          break: 120,
          comment: { $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment' },
          date: '2017-01-18',
          employee: 1234,
          end_time: '18:00',
          start_time: '08:00',
        },
        {
          break: 35,
          comment: 'I was productive as hell',
          date: '2017-01-17',
          employee: 1235,
          end_time: '12:00',
          start_time: '09:00',
        },
      ],
    },
    title: 'Create a New Attendance Period request',
    required: [],
  })
  .openapi('NewAttendancePeriodRequest')

const NewAttendancePeriodResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({ id: z.array(z.int()).exactOptional(), message: z.string().exactOptional() })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('NewAttendancePeriodResponse')

const TimeOffTypeResourceSchema = z
  .object({
    attributes: z
      .object({ name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.int().exactOptional().openapi({ description: 'identifier' }),
    type: z
      .literal('TimeOffType')
      .exactOptional()
      .openapi({ description: 'Time-off type resource name' }),
  })
  .openapi({ title: 'Type of time-off resource', required: [] })
  .openapi('TimeOffTypeResource')

const UpdateAttendancePeriodRequestSchema = z
  .object({
    break: z.int32().exactOptional().openapi({ description: 'Break in minutes' }),
    comment: z.string().exactOptional().openapi({ description: 'Optional comment' }),
    date: z.iso.date().exactOptional().openapi({ description: 'Attendance date as YYYY-MM-DD' }),
    end_time: z
      .string()
      .regex(/^\d\d:\d\d$/)
      .exactOptional()
      .openapi({ description: 'End time as HH:MM' }),
    start_time: z
      .string()
      .regex(/^\d\d:\d\d$/)
      .exactOptional()
      .openapi({ description: 'Start time as HH:MM' }),
  })
  .openapi({
    example: {
      break: 35,
      comment: null,
      date: '2019-03-17',
      end_time: '12:00',
      start_time: '9:00',
    },
    title: 'Update an existing attendance period',
    required: [],
  })
  .openapi('UpdateAttendancePeriodRequest')

const AuthSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getCompanyAttendancesRoute = createRoute({
  method: 'get',
  path: '/company/attendances',
  description:
    'This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.',
  request: {
    query: z.object({
      start_date: z.iso
        .date()
        .openapi({
          param: {
            description:
              'First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      end_date: z.iso
        .date()
        .openapi({
          param: {
            description:
              'Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      updated_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Datetime from when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_from will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.',
            in: 'query',
            name: 'updated_from',
            required: false,
            schema: { format: 'datetime', type: 'string' },
          },
        }),
      updated_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Datetime until when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_to will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.',
            in: 'query',
            name: 'updated_to',
            required: false,
            schema: { format: 'datetime', type: 'string' },
          },
        }),
      employees: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.',
            explode: true,
            in: 'query',
            name: 'employees',
            required: false,
            schema: { items: { type: 'integer' }, type: 'array' },
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
          z.int().min(1),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pagination attribute to limit how many attendances will be returned per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
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
            description:
              'Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: AttendancePeriodsResponseSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    attributes: {
                      break: 50,
                      comment: 'I was productive as hell',
                      date: '2017-01-17',
                      employee: 325659,
                      end_time: '18:00',
                      is_holiday: false,
                      is_on_time_off: false,
                      start_time: '9:00',
                      updated_at: '2017-01-17T16:41:08+00:00',
                    },
                    id: 1234,
                    type: 'AttendancePeriod',
                  },
                  {
                    attributes: {
                      break: 60,
                      comment: {
                        $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                      },
                      date: '2017-01-18',
                      employee: 325660,
                      end_time: '18:30',
                      is_holiday: false,
                      is_on_time_off: true,
                      start_time: '9:30',
                      updated_at: '2017-01-18T16:41:08+01:00',
                    },
                    id: 1235,
                    type: 'AttendancePeriod',
                  },
                ],
                limit: 200,
                offset: 0,
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const postCompanyAttendancesRoute = createRoute({
  method: 'post',
  path: '/company/attendances',
  description:
    'This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.',
  request: {
    body: {
      description: 'List of attendance periods to create',
      content: { 'application/json': { schema: NewAttendancePeriodRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The attendance periods were created successfully',
      content: {
        'application/json': {
          schema: NewAttendancePeriodResponseSchema,
          examples: {
            response: { value: { data: { id: [1, 2], message: 'success' }, success: true } },
          },
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: DetailedErrorResponseSchema,
          examples: {
            response: {
              value: {
                error: {
                  code: 400,
                  detailed_message: [
                    {
                      break: 60,
                      comment: '',
                      date: '2017-01-01',
                      employee: 1234,
                      end_time: '18:00',
                      error_msg: {
                        $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                      },
                      id: 1,
                      start_time: '09:00',
                      success: true,
                    },
                    {
                      break: 60,
                      comment: '',
                      date: '2017-01-01',
                      employee: 1234,
                      end_time: '18:00',
                      error_msg: 'Existing overlapping attendances periods',
                      id: {
                        $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                      },
                      start_time: '09:00',
                      success: false,
                    },
                  ],
                  message: 'Error when trying to insert Attendances periods rows',
                },
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteCompanyAttendancesIdRoute = createRoute({
  method: 'delete',
  path: '/company/attendances/{id}',
  description:
    'This endpoint is responsible for deleting attendance data for the company employees.',
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
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the attendance period to delete',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: ResponseSchema,
          examples: {
            response: {
              value: { data: { message: 'The attendance period was deleted.' }, success: true },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: {
                error: { code: 404, message: 'The attendance period was not found.' },
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

export const patchCompanyAttendancesIdRoute = createRoute({
  method: 'patch',
  path: '/company/attendances/{id}',
  description:
    'This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.',
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
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the attendance period to update',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'attendance period data to update',
      content: { 'application/json': { schema: UpdateAttendancePeriodRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: ResponseSchema,
          examples: {
            response: {
              value: { data: { message: 'The attendance period was updated.' }, success: true },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: {
                error: { code: 404, message: 'The attendance period was not found.' },
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompanyEmployeesRoute = createRoute({
  method: 'get',
  path: '/company/employees',
  description: 'List Employees',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: EmployeesResponseSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    attributes: {
                      absence_entitlement: {
                        label: 'Absence entitlement',
                        value: [
                          {
                            attributes: { entitlement: 30, id: 12345, name: 'Paid Vacation' },
                            type: 'TimeOffType',
                          },
                          {
                            attributes: { entitlement: 0, id: 12346, name: 'Parental leave' },
                            type: 'TimeOffType',
                          },
                          {
                            attributes: { entitlement: 0, id: 12347, name: 'Sick days' },
                            type: 'TimeOffType',
                          },
                        ],
                      },
                      contract_end_date: {
                        label: 'Contract ends',
                        value: {
                          $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                        },
                      },
                      cost_centers: {
                        label: 'Cost center',
                        value: [
                          {
                            attributes: { id: 320, name: 'Cost Center One', percentage: 50 },
                            type: 'CostCenter',
                          },
                          {
                            attributes: { id: 321, name: 'Cost Center Two', percentage: 50 },
                            type: 'CostCenter',
                          },
                        ],
                      },
                      created_at: { label: 'created_at', value: '2016-10-20T16:15:55+0200' },
                      department: {
                        label: 'Department',
                        value: { attributes: { name: 'Marketing' }, type: 'Department' },
                      },
                      dynamic_21827: { label: 'IBAN', value: 'DE98 8989 9898 0000 8989 00' },
                      dynamic_24407: { label: 'Titel', value: 'Dr' },
                      email: { label: 'Email', value: 'andreas.anderson@demo.com' },
                      employment_type: { label: 'Employment type', value: 'internal' },
                      first_name: { label: 'First name', value: 'Andreas' },
                      fix_salary: { label: 'Fix salary', value: 4000 },
                      gender: { label: 'Gender', value: 'male' },
                      hire_date: { label: 'Hire date', value: '2012-02-01T00:00:00+0100' },
                      holiday_calendar: {
                        label: 'Holiday Calendar',
                        value: {
                          attributes: {
                            country: 'DE',
                            id: 931,
                            name: 'DE (Hamburg) Feiertage',
                            state: 'Hamburg',
                          },
                          type: 'HolidayCalendar',
                        },
                      },
                      hourly_salary: { label: 'Hourly salary', value: 0 },
                      id: { label: 'id', value: 83752 },
                      last_modified_at: {
                        label: 'Last modified',
                        value: '2016-10-22T16:15:55+0200',
                      },
                      last_name: { label: 'Last name', value: 'Anderson' },
                      last_working_day: {
                        label: 'Last working day',
                        value: '2017-02-28T00:00:00+0200',
                      },
                      office: {
                        label: 'Office',
                        value: { attributes: { name: 'Munich' }, type: 'Office' },
                      },
                      position: { label: 'Position', value: 'Online Marketing Specialist' },
                      probation_period_end: {
                        label: 'Probation period end',
                        value: '2012-07-31T00:00:00+0200',
                      },
                      profile_picture: {
                        label: 'Profile Picture',
                        value: 'http://api.dev.personio.de/v1/company/employees/2/profile-picture',
                      },
                      status: { label: 'Status', value: 'active' },
                      supervisor: {
                        label: 'Supervisor',
                        value: {
                          attributes: {
                            email: { label: 'Email', value: 'max.mustermann@example.org' },
                            first_name: { label: 'First name', value: 'Max' },
                            id: { label: 'id', value: 423506 },
                            last_name: { label: 'Last name', value: 'Mustermann' },
                          },
                          type: 'Employee',
                        },
                      },
                      termination_date: {
                        label: 'Termination date',
                        value: {
                          $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                        },
                      },
                      termination_reason: { label: 'Termination reason', value: '' },
                      termination_type: { label: 'Termination type', value: '' },
                      vacation_day_balance: { label: 'Vacation day balance', value: 28.5 },
                      weekly_working_hours: { label: 'Weekly hours', value: '40' },
                      work_schedule: {
                        label: 'Work Schedule',
                        value: {
                          attributes: {
                            friday: '06:00',
                            id: 123,
                            monday: '08:30',
                            name: 'Standard Hours',
                            saturday: '00:00',
                            sunday: '00:00',
                            thursday: '08:30',
                            tuesday: '08:30',
                            wednesday: '08:30',
                          },
                          type: 'WorkSchedule',
                        },
                      },
                    },
                    type: 'Employee',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const postCompanyEmployeesRoute = createRoute({
  method: 'post',
  path: '/company/employees',
  summary: 'Create an employee',
  description:
    'Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.\n',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'employee[department]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee department' }),
              'employee[email]': z.string().openapi({ description: 'Employee email' }),
              'employee[first_name]': z.string().openapi({ description: 'Employee first name' }),
              'employee[gender]': z
                .enum(['male', 'female', 'diverse'])
                .exactOptional()
                .openapi({ description: 'Employee gender' }),
              'employee[hire_date]': z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Employee hire date' }),
              'employee[last_name]': z.string().openapi({ description: 'Employee last name' }),
              'employee[position]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee position' }),
              'employee[weekly_hours]': z
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
                .openapi({ description: 'Employee weekly working hours' }),
            })
            .openapi({
              required: ['employee[email]', 'employee[first_name]', 'employee[last_name]'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful creation of a employee',
      content: {
        'application/json': {
          schema: ResponseSchema,
          examples: {
            response: { value: { data: { id: 81723, message: 'success' }, success: true } },
          },
        },
      },
    },
  },
})

export const getCompanyEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/company/employees/{employee_id}',
  description: 'Show employee by ID',
  request: {
    params: z.object({
      employee_id: z
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
            description: 'Numeric `id` of the employee',
            in: 'path',
            name: 'employee_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: EmployeeResponseSchema,
          examples: {
            response: {
              value: {
                data: {
                  attributes: {
                    absence_entitlement: {
                      label: 'Absence entitlement',
                      value: [
                        {
                          attributes: { entitlement: 30, id: 12345, name: 'Paid Vacation' },
                          type: 'TimeOffType',
                        },
                        {
                          attributes: { entitlement: 0, id: 12346, name: 'Parental leave' },
                          type: 'TimeOffType',
                        },
                        {
                          attributes: { entitlement: 0, id: 12347, name: 'Sick days' },
                          type: 'TimeOffType',
                        },
                      ],
                    },
                    contract_end_date: {
                      label: 'Contract ends',
                      value: {
                        $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                      },
                    },
                    cost_centers: {
                      label: 'Cost center',
                      value: [
                        {
                          attributes: { id: 320, name: 'Cost Center One', percentage: 50 },
                          type: 'CostCenter',
                        },
                        {
                          attributes: { id: 321, name: 'Cost Center Two', percentage: 50 },
                          type: 'CostCenter',
                        },
                      ],
                    },
                    created_at: { label: 'created_at', value: '2016-10-20T16:15:55+0200' },
                    department: {
                      label: 'Department',
                      value: { attributes: { name: 'Marketing' }, type: 'Department' },
                    },
                    dynamic_21827: { label: 'IBAN', value: 'DE98 8989 9898 0000 8989 00' },
                    dynamic_24407: { label: 'Titel', value: 'Dr' },
                    email: { label: 'Email', value: 'andreas.anderson@demo.com' },
                    employment_type: { label: 'Employment type', value: 'internal' },
                    first_name: { label: 'First name', value: 'Andreas' },
                    fix_salary: { label: 'Fix salary', value: 4000 },
                    gender: { label: 'Gender', value: 'male' },
                    hire_date: { label: 'Hire date', value: '2012-02-01T00:00:00+0100' },
                    holiday_calendar: {
                      label: 'Holiday Calendar',
                      value: {
                        attributes: {
                          country: 'DE',
                          id: 931,
                          name: 'DE (Hamburg) Feiertage',
                          state: 'Hamburg',
                        },
                        type: 'HolidayCalendar',
                      },
                    },
                    hourly_salary: { label: 'Hourly salary', value: 0 },
                    id: { label: 'id', value: 83752 },
                    last_modified_at: { label: 'Last modified', value: '2016-10-22T16:15:55+0200' },
                    last_name: { label: 'Last name', value: 'Anderson' },
                    last_working_day: {
                      label: 'Last working day',
                      value: '2017-02-28T00:00:00+0200',
                    },
                    office: {
                      label: 'Office',
                      value: { attributes: { name: 'Munich' }, type: 'Office' },
                    },
                    position: { label: 'Position', value: 'Online Marketing Specialist' },
                    probation_period_end: {
                      label: 'Probation period end',
                      value: '2012-07-31T00:00:00+0200',
                    },
                    status: { label: 'Status', value: 'active' },
                    supervisor: {
                      label: 'Supervisor',
                      value: {
                        attributes: {
                          email: { label: 'Email', value: 'max.mustermann@example.org' },
                          first_name: { label: 'First name', value: 'Max' },
                          id: { label: 'id', value: 423506 },
                          last_name: { label: 'Last name', value: 'Mustermann' },
                        },
                        type: 'Employee',
                      },
                    },
                    termination_date: {
                      label: 'Termination date',
                      value: {
                        $ref: '#/components/schemas/UpdateAttendancePeriodRequest/example/comment',
                      },
                    },
                    termination_reason: { label: 'Termination reason', value: '' },
                    termination_type: { label: 'Termination type', value: '' },
                    vacation_day_balance: { label: 'Vacation day balance', value: 28.5 },
                    weekly_working_hours: { label: 'Weekly hours', value: '40' },
                    work_schedule: {
                      label: 'Work Schedule',
                      value: {
                        attributes: {
                          friday: '06:00',
                          id: 123,
                          monday: '08:30',
                          name: 'Standard Hours',
                          saturday: '00:00',
                          sunday: '00:00',
                          thursday: '08:30',
                          tuesday: '08:30',
                          wednesday: '08:30',
                        },
                        type: 'WorkSchedule',
                      },
                    },
                  },
                  type: 'Employee',
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompanyEmployeesEmployeeIdProfilePictureWidthRoute = createRoute({
  method: 'get',
  path: '/company/employees/{employee_id}/profile-picture/{width}',
  description: 'Show employee profile picture',
  request: {
    params: z.object({
      employee_id: z
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
            description: 'Numeric `id` of the employee',
            in: 'path',
            name: 'employee_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      width: z
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
            description: 'Width of the image. Default 75x75',
            in: 'path',
            name: 'width',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const getCompanyTimeOffTypesRoute = createRoute({
  method: 'get',
  path: '/company/time-off-types',
  description:
    "Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'",
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination attribute to limit how many records will be returned per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
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
            description:
              'Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TimeOffTypeResourceSchema).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                data: [
                  { attributes: { name: 'Paid vacation' }, id: 1234, type: 'TimeOffType' },
                  { attributes: { name: 'Home office' }, id: 1235, type: 'TimeOffType' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompanyTimeOffsRoute = createRoute({
  method: 'get',
  path: '/company/time-offs',
  description:
    'This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.',
  request: {
    query: z.object({
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      updated_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Datetime from when the queried periods have been updated. It is inclusive, so the day specified as updated_from will also be considered on the results.',
            in: 'query',
            name: 'updated_from',
            required: false,
            schema: { format: 'datetime', type: 'string' },
          },
        }),
      updated_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Datetime until when the queried periods have been updated. It is inclusive, so the day specified as updated_to will also be considered on the results.',
            in: 'query',
            name: 'updated_to',
            required: false,
            schema: { format: 'datetime', type: 'string' },
          },
        }),
      employees: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.',
            explode: true,
            in: 'query',
            name: 'employees',
            required: false,
            schema: { items: { type: 'integer' }, type: 'array' },
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
          z.int().min(1),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pagination attribute to limit how many attendances will be returned per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
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
            description:
              'Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: AbsencePeriodsResponseSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    attributes: {
                      certificate: { status: 'not-required' },
                      created_at: '2017-01-17T10:32:18+0100',
                      days_count: 3,
                      employee: {
                        attributes: {
                          email: { label: 'Email', value: 'michael.miller@demo.com' },
                          first_name: { label: 'First name', value: 'Michael' },
                          id: { label: 'id', value: 4567 },
                          last_name: { label: 'Last name', value: 'Miller' },
                        },
                        type: 'Employee',
                      },
                      end_date: '2017-12-29T00:00:00+0100',
                      half_day_end: 0,
                      half_day_start: 0,
                      id: 12345,
                      start_date: '2017-12-27T00:00:00+0100',
                      status: 'approved',
                      time_off_type: {
                        attributes: { id: 54321, name: 'Vacation' },
                        type: 'TimeOffType',
                      },
                    },
                    type: 'TimeOffPeriod',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const postCompanyTimeOffsRoute = createRoute({
  method: 'post',
  path: '/company/time-offs',
  description: 'This endpoint is responsible for adding absence data for the company employees.',
  request: {
    body: {
      description: 'Absence period to create',
      content: { 'application/json': { schema: CreateTimeOffPeriodRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The absence period was created successfully',
      content: {
        'application/json': {
          schema: z
            .object({ data: CreateTimeOffPeriodResponseSchema.exactOptional() })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                data: {
                  attributes: {
                    certificate: { status: 'not-required' },
                    created_at: '2017-01-17T10:32:18+0100',
                    days_count: 3,
                    employee: {
                      attributes: {
                        email: { label: 'Email', value: 'michael.miller@demo.com' },
                        first_name: { label: 'First name', value: 'Michael' },
                        id: { label: 'id', value: 4567 },
                        last_name: { label: 'Last name', value: 'Miller' },
                      },
                      type: 'Employee',
                    },
                    end_date: '2017-12-29T00:00:00+0100',
                    half_day_end: 0,
                    half_day_start: 0,
                    id: 12345,
                    start_date: '2017-12-27T00:00:00+0100',
                    status: 'approved',
                    time_off_type: {
                      attributes: { id: 54321, name: 'Vacation' },
                      type: 'TimeOffType',
                    },
                  },
                  type: 'TimeOffPeriod',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: {
                error: { code: 400, message: 'Error when trying to insert absence period' },
                success: false,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Employee or Absence type not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: { error: { code: 0, message: 'Something went wrong' }, success: false },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: {
                error: {
                  code: 0,
                  error_data: '{...}',
                  message: 'The given data failed to pass validation.',
                },
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

export const getCompanyTimeOffsIdRoute = createRoute({
  method: 'get',
  path: '/company/time-offs/{id}',
  description: 'Absence Period',
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
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of the absence period',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: AbsencePeriodResponseSchema,
          examples: {
            response: {
              value: {
                data: {
                  attributes: {
                    certificate: { status: 'not-required' },
                    created_at: '2017-01-17T10:32:18+0100',
                    days_count: 3,
                    employee: {
                      attributes: {
                        email: { label: 'Email', value: 'michael.miller@demo.com' },
                        first_name: { label: 'First name', value: 'Michael' },
                        id: { label: 'id', value: 2367 },
                        last_name: { label: 'Last name', value: 'Miller' },
                      },
                      type: 'Employee',
                    },
                    end_date: '2017-12-29T00:00:00+0100',
                    half_day_end: 0,
                    half_day_start: 0,
                    id: 12345,
                    start_date: '2017-12-27T00:00:00+0100',
                    status: 'approved',
                    time_off_type: {
                      attributes: { id: 45678, name: 'Vacation' },
                      type: 'TimeOffType',
                    },
                  },
                  type: 'TimeOffPeriod',
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteCompanyTimeOffsIdRoute = createRoute({
  method: 'delete',
  path: '/company/time-offs/{id}',
  description:
    'This endpoint is responsible for deleting absence period data for the company employees.',
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
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the absence period to delete',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: ResponseSchema,
          examples: {
            response: {
              value: { data: { message: 'The absence period was deleted.' }, success: true },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: {
                error: { code: 404, message: 'The absence period was not found.' },
                success: false,
              },
            },
          },
        },
      },
    },
  },
})
