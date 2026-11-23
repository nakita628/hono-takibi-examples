import { createRoute, z } from '@hono/zod-openapi'

const ResponseSchema = z
  .object({ success: z.boolean(), data: z.looseObject({}) })
  .openapi({ title: 'Default response object', required: ['success', 'data'] })
  .openapi('Response')

const TypeEnumSchema = z
  .enum(['standard', 'date', 'integer', 'decimal', 'list', 'link', 'tags', 'multiline'])
  .openapi({ example: 'standard' })
  .openapi('TypeEnum')

const ShortEmployeeSchema = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'Employee' }),
    attributes: z
      .object({
        id: z
          .object({
            label: z.any().exactOptional().openapi({ example: 1 }),
            value: z.any().exactOptional().openapi({ example: 'id' }),
            type: TypeEnumSchema.exactOptional(),
            universal_id: z.any().exactOptional().openapi({ example: 'id' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        first_name: z
          .object({
            label: z.any().exactOptional().openapi({ example: 'First Name' }),
            value: z.any().exactOptional().openapi({ example: 'Michael' }),
            type: TypeEnumSchema.exactOptional(),
            universal_id: z.any().exactOptional().openapi({ example: 'first_name' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        last_name: z
          .object({
            label: z.any().exactOptional().openapi({ example: 'Last Name' }),
            value: z.any().exactOptional().openapi({ example: 'Dou' }),
            type: TypeEnumSchema.exactOptional(),
            universal_id: z.any().exactOptional().openapi({ example: 'last_name' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        email: z
          .object({
            label: z.any().exactOptional().openapi({ example: 'Email' }),
            value: z.any().exactOptional().openapi({ example: 'michael.dou@personio.de' }),
            type: TypeEnumSchema.exactOptional(),
            universal_id: z.any().exactOptional().openapi({ example: 'email' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ShortEmployee')

const SupervisorSchema = z
  .object({
    label: z.string().exactOptional().openapi({ example: 'Supervisor' }),
    value: ShortEmployeeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Supervisor')

const OfficeSchema = z
  .object({
    label: z.any().exactOptional().openapi({ example: 'Workplace' }),
    value: z
      .object({
        type: z.string().exactOptional().openapi({ example: 'Office' }),
        attributes: z
          .object({ name: z.any().exactOptional().openapi({ example: 'Munich' }) })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: TypeEnumSchema.exactOptional(),
    universal_id: z.any().exactOptional().openapi({ example: 'office' }),
  })
  .openapi({ required: [] })
  .openapi('Office')

const DepartmentSchema = z
  .object({
    label: z.any().exactOptional().openapi({ example: 'Department' }),
    value: z
      .object({
        type: z.string().exactOptional().openapi({ example: 'Department' }),
        attributes: z
          .object({
            id: z.int().openapi({ example: 1 }),
            name: z.string().openapi({ example: 'Marketing' }),
          })
          .exactOptional()
          .openapi({ required: ['id', 'name'] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: TypeEnumSchema.exactOptional(),
    universal_id: z.any().exactOptional().openapi({ example: 'department' }),
  })
  .openapi({ required: [] })
  .openapi('Department')

const CostCentersSchema = z
  .object({
    label: z.any().exactOptional().openapi({ example: 'Cost center' }),
    value: z
      .array(
        z
          .object({
            type: z.any().exactOptional().openapi({ example: 'CostCenter' }),
            attributes: z
              .object({
                name: z.any().exactOptional().openapi({ example: 'Cost Center One' }),
                id: z.number().exactOptional().openapi({ example: 1 }),
                percentage: z.number().exactOptional().openapi({ example: 50 }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    type: TypeEnumSchema.exactOptional(),
    universal_id: z.any().exactOptional().openapi({ example: 'cost_center' }),
  })
  .openapi({ required: [] })
  .openapi('CostCenters')

const HolidayCalendarSchema = z
  .object({
    label: z.any().exactOptional().openapi({ example: 'Holiday Calendar' }),
    value: z
      .object({
        type: z.any().exactOptional().openapi({ example: 'HolidayCalendar' }),
        attributes: z
          .object({
            id: z.number().exactOptional().openapi({ example: 1 }),
            name: z.any().exactOptional().openapi({ example: 'DE (Hamburg) Feiertage' }),
            country: z.any().exactOptional().openapi({ example: 'DE' }),
            state: z.any().exactOptional().openapi({ example: 'Hamburg' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: TypeEnumSchema.exactOptional(),
    universal_id: z.any().exactOptional().openapi({ example: 'holiday_calendar' }),
  })
  .openapi({ required: [] })
  .openapi('HolidayCalendar')

const WorkScheduleSchema = z
  .object({
    label: z.any().exactOptional().openapi({ example: 'WorkSchedule' }),
    value: z
      .object({
        type: z.any().exactOptional().openapi({ example: 'WorkSchedule' }),
        attributes: z
          .object({
            id: z.number().exactOptional().openapi({ example: 1 }),
            name: z.any().exactOptional().openapi({ example: 'Standard Hours' }),
            monday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '08:30' }),
            tuesday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '08:30' }),
            wednesday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '08:30' }),
            thursday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '08:30' }),
            friday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '08:30' }),
            saturday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '00:00' }),
            sunday: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'string') {
                  if (!new RegExp('^\\d\\d:\\d\\d$').test(val)) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .exactOptional()
              .openapi({ example: '00:00' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: TypeEnumSchema.exactOptional(),
    universal_id: z.any().exactOptional().openapi({ example: 'work_schedule' }),
  })
  .openapi({ required: [] })
  .openapi('WorkSchedule')

const AbsenceEntitlementSchema = z
  .object({
    label: z.any().openapi({ example: 'Absence entitlement' }),
    value: z.array(
      z
        .object({
          type: z.literal('TimeOffType').exactOptional(),
          attributes: z
            .object({
              id: z.int().exactOptional().openapi({ example: 1 }),
              name: z.any().exactOptional().openapi({ example: 'Paid Vacation' }),
              entitlement: z.any().exactOptional().openapi({ example: 30 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    ),
  })
  .openapi({ required: ['label', 'value'] })
  .openapi('AbsenceEntitlement')

const TeamSchema = z
  .object({
    label: z.any().exactOptional().openapi({ example: 'Team' }),
    value: z
      .object({
        type: z.string().exactOptional().openapi({ example: 'Team' }),
        attributes: z
          .object({ name: z.any().exactOptional().openapi({ example: 'Management' }) })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: TypeEnumSchema.exactOptional(),
    universal_id: z.any().exactOptional().openapi({ example: 'team' }),
  })
  .openapi({ required: [] })
  .openapi('Team')

const EmployeeSchema = z
  .object({
    id: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'ID' }),
        value: z.any().exactOptional().openapi({ example: 1 }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'id' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    first_name: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'First name' }),
        value: z.any().exactOptional().openapi({ example: 'Michael' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'first_name' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    last_name: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Last name' }),
        value: z.any().exactOptional().openapi({ example: 'Dou' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'last_name' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    preferred_name: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Name (preferred)' }),
        value: z.any().exactOptional().openapi({ example: 'Michael Dou' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'preferred_name' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    email: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Email' }),
        value: z.any().exactOptional().openapi({ example: 'michael.dou@personio.de' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'email' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    gender: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Gender' }),
        value: z.any().exactOptional().openapi({ example: 'male' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'gender' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    status: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Status' }),
        value: z.any().exactOptional().openapi({ example: 'active' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'status' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    position: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Position' }),
        value: z.any().exactOptional().openapi({ example: 'Online Marketing Specialist' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'position' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    supervisor: SupervisorSchema.exactOptional(),
    employment_type: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Employment type' }),
        value: z.any().exactOptional().openapi({ example: 'internal' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'employment_type' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    weekly_working_hours: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Weekly hours' }),
        value: z.any().exactOptional().openapi({ example: 40 }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'weekly_working_hours' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    hire_date: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Hire date' }),
        value: z.any().exactOptional().openapi({ example: '2012-02-01T00:00:00+0100' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'hire_date' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    contract_end_date: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Contact end date' }),
        value: z.any().exactOptional().openapi({ example: '2020-02-01T00:00:00+0100' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'contract_end_date' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    termination_date: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Termonation date' }),
        value: z.any().exactOptional().openapi({ example: '2020-02-01T00:00:00+0100' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'termination_date' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    termination_type: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Termonation type' }),
        value: z.any().exactOptional().openapi({ example: null }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'termination_type' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    termination_reason: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Termonation reason' }),
        value: z.any().exactOptional().openapi({ example: null }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'termination_reason' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    probation_period_end: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Probation period end' }),
        value: z.any().exactOptional().openapi({ example: '2020-02-01T00:00:00+0100' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'probation_period_end' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    created_at: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Created at' }),
        value: z.any().exactOptional().openapi({ example: '2018-02-01T00:00:00+0100' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'created_at' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    last_modified_at: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Last modified' }),
        value: z.any().exactOptional().openapi({ example: '2020-11-18T17:33:55+01:00' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'last_modified_at' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    subcompany: OfficeSchema.exactOptional(),
    office: OfficeSchema.exactOptional(),
    department: DepartmentSchema.exactOptional(),
    cost_centers: CostCentersSchema.exactOptional(),
    holiday_calendar: HolidayCalendarSchema.exactOptional(),
    work_schedule: WorkScheduleSchema.exactOptional(),
    absence_entitlement: AbsenceEntitlementSchema.exactOptional(),
    team: TeamSchema.exactOptional(),
    fix_salary: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Fix salary' }),
        value: z.any().exactOptional().openapi({ example: 4000 }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'fix_salary' }),
        currency: z.string().exactOptional().openapi({ example: 'EUR' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    fix_salary_interval: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Salary interval' }),
        value: z.any().exactOptional().openapi({ example: 'monthly' }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'fix_salary_interval' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    hourly_salary: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Hourly salary' }),
        value: z.any().exactOptional().openapi({ example: 0 }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'hourly_salary' }),
        currency: z.string().exactOptional().openapi({ example: 'EUR' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    last_working_day: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Last day of work' }),
        value: z.any().exactOptional().openapi({ example: null }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'last_working_day' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    profile_picture: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'Profile Picture' }),
        value: z
          .any()
          .exactOptional()
          .openapi({
            example: 'http://api.dev.personio.de/v1/company/employees/1/profile-picture',
          }),
        type: TypeEnumSchema.exactOptional(),
        universal_id: z.any().exactOptional().openapi({ example: 'profile_picture' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    dynamic_21827: z
      .object({
        label: z.any().exactOptional().openapi({ example: 'IBAN' }),
        value: z.any().exactOptional().openapi({ example: 'DE98 8989 9898 0000 8989 00' }),
        type: TypeEnumSchema.exactOptional().openapi({ description: 'The type of the field.' }),
        universal_id: z.any().exactOptional().openapi({ example: 'iban' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Employee')

type EmployeesResponseType = z.infer<typeof ResponseSchema> & {
  metadata?: { total_elements: number; total_pages: number; current_page: number }
  offset?: number
  limit?: number
  data?: { type?: unknown; attributes?: z.infer<typeof EmployeeSchema> }[]
}

const PublicReportMetaDataSchema = z
  .object({
    total_elements: z.int().exactOptional(),
    current_page: z.int().exactOptional(),
    total_pages: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicReportMetaData')

const DefaultAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'first_name' }),
    data_type: z.literal('TEXT').exactOptional(),
    value: z.string().exactOptional().openapi({ example: 'Robert' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('DefaultAttribute')

const EntityAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'department' }),
    entity_id: z.string().exactOptional().openapi({ example: 1 }),
    data_type: z.literal('ENTITY').exactOptional(),
    value: z.string().exactOptional().openapi({ example: 'IT' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('EntityAttribute')

const DurationAttributeSchema = z
  .object({
    attribute_id: z
      .string()
      .exactOptional()
      .openapi({ example: 'attendance_contractual_target_hours' }),
    data_type: z.literal('DURATION').exactOptional(),
    duration: z.int().exactOptional().openapi({ example: 10 }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('DurationAttribute')

const CostCenterSchema = z
  .object({
    cost_center_id: z.string().exactOptional().openapi({ example: 1 }),
    value: z.string().exactOptional().openapi({ example: 'Test Center' }),
    weight: z.string().exactOptional().openapi({ example: '100%' }),
  })
  .openapi({ required: [] })
  .openapi('CostCenter')

const CostCenterAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'cost_center' }),
    data_type: z.literal('COST_CENTER').exactOptional(),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    cost_centers: z.array(CostCenterSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CostCenterAttribute')

const AbsenceOverviewAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'absence_123' }),
    data_type: z.literal('ABSENCE_OVERVIEW').exactOptional(),
    start_date: z.iso.date().exactOptional().openapi({ example: '2022-03-01' }),
    end_date: z.iso.date().exactOptional().openapi({ example: '2022-03-03' }),
    duration_days: z.string().exactOptional().openapi({ example: 2 }),
    duration_hours: z.string().exactOptional().openapi({ example: 5 }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('AbsenceOverviewAttribute')

const AbsencePeriodAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'absence_123:periods' }),
    data_type: z.literal('ABSENCE_PERIOD').exactOptional(),
    start_date: z.iso.date().exactOptional().openapi({ example: '2022-03-01' }),
    end_date: z.iso.date().exactOptional().openapi({ example: '2022-03-03' }),
    half_day_at_start: z.boolean().exactOptional(),
    half_day_at_end: z.boolean().exactOptional(),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('AbsencePeriodAttribute')

const PerformanceTargetSchema = z
  .object({
    performance_target_id: z.string().exactOptional().openapi({ example: 1 }),
    performance_target_value: z.string().exactOptional().openapi({ example: 20 }),
  })
  .openapi({ required: [] })
  .openapi('PerformanceTarget')

const PerformanceTargetAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'performance_target_name' }),
    data_type: z.literal('PERFORMANCE_TARGET').exactOptional(),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    performance_targets: z.array(PerformanceTargetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PerformanceTargetAttribute')

const PerformanceKpiAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional(),
    data_type: z.literal('PERFORMANCE_KPI').exactOptional(),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    performance_target_kpis: z.array(PerformanceTargetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PerformanceKpiAttribute')

const SalaryAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'salary_123' }),
    data_type: z.literal('SALARY').exactOptional(),
    amount: z.string().exactOptional().openapi({ example: 12.2 }),
    currency_symbol: z.string().exactOptional().openapi({ example: '$' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('SalaryAttribute')

const CompensationAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'ABCXXX' }),
    data_type: z.literal('COMPENSATION').exactOptional(),
    amount: z.string().exactOptional().openapi({ example: 12.2 }),
    currency_code: z.string().exactOptional().openapi({ example: 'USD' }),
    currency_symbol: z.string().exactOptional().openapi({ example: '$' }),
    overtime_hours: z.string().exactOptional().openapi({ example: 12 }),
    bonus_type: z.string().exactOptional().openapi({ example: 'MAX' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
  })
  .openapi({ required: [] })
  .openapi('CompensationAttribute')

const PublicReportItemsAttributesSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'eb7482f3-2323-43e2-87ed-99d2399e8e22' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Employee vacations at a specific point in time' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Shows vacations of all employees on a specific date' }),
    author_first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Robert' }),
    author_last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Sirano' }),
    type: z.literal('point_in_time').exactOptional().openapi({ example: 'point_in_time' }),
    status: z
      .enum(['up_to_date', 'updating', 'update_failed'])
      .exactOptional()
      .openapi({ example: 'created' }),
    start_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: '2022-04-10' }),
    end_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: '2022-04-10' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    data_refreshed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            column: z.string().exactOptional().openapi({ example: 'office_id' }),
            comparison: z.string().exactOptional().openapi({ example: 'eq' }),
            value: z.string().exactOptional().openapi({ example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    period_type: z
      .enum([
        'fixed',
        'today',
        'yesterday',
        'last_day_of_this_week',
        'last_day_of_last_week',
        'last_day_of_this_month',
        'last_day_of_last_month',
        'last_day_of_this_quarter',
        'last_day_of_last_quarter',
        'last_day_of_this_year',
        'last_day_of_last_year',
      ])
      .exactOptional()
      .openapi({ example: 'fixed' }),
    items: z
      .array(
        z
          .object({
            employee_id: z.int().exactOptional().openapi({ example: 17 }),
            attributes: z
              .array(
                z.union([
                  DefaultAttributeSchema,
                  EntityAttributeSchema,
                  DurationAttributeSchema,
                  CostCenterAttributeSchema,
                  AbsenceOverviewAttributeSchema,
                  AbsencePeriodAttributeSchema,
                  PerformanceTargetAttributeSchema,
                  PerformanceKpiAttributeSchema,
                  SalaryAttributeSchema,
                  CompensationAttributeSchema,
                ]),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicReportItemsAttributes')

const PublicTimeframeReportItemsAttributesSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'eb7482f3-2323-43e2-87ed-99d2399e8e22' }),
    name: z.string().exactOptional().openapi({ example: 'Employee vacations past month' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Shows vacations of all employees that were taken past month' }),
    author_first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Robert' }),
    author_last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Sirano' }),
    type: z.literal('timeframe').exactOptional().openapi({ example: 'timeframe' }),
    status: z
      .enum(['up_to_date', 'updating', 'update_failed'])
      .exactOptional()
      .openapi({ example: 'created' }),
    start_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: '2022-04-01' }),
    end_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: '2022-04-10' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    data_refreshed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            column: z.string().exactOptional().openapi({ example: 'office_id' }),
            comparison: z.string().exactOptional().openapi({ example: 'eq' }),
            value: z.string().exactOptional().openapi({ example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    period_type: z
      .enum([
        'fixed',
        'today',
        'yesterday',
        'this_week',
        'last_week',
        'this_month',
        'last_month',
        'last_thirty_days',
        'next_month',
        'this_quarter',
        'last_quarter',
        'this_year',
        'year_to_date',
        'last_year',
        'next_year',
      ])
      .exactOptional()
      .openapi({ example: 'fixed' }),
    items: z
      .array(
        z
          .object({
            employee_id: z.int().exactOptional().openapi({ example: 17 }),
            attributes: z
              .array(
                z.union([
                  DefaultAttributeSchema,
                  EntityAttributeSchema,
                  DurationAttributeSchema,
                  CostCenterAttributeSchema,
                  AbsenceOverviewAttributeSchema,
                  AbsencePeriodAttributeSchema,
                  PerformanceTargetAttributeSchema,
                  PerformanceKpiAttributeSchema,
                  SalaryAttributeSchema,
                  CompensationAttributeSchema,
                ]),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicTimeframeReportItemsAttributes')

const DefaultHistoricalAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'first_name' }),
    data_type: z.literal('TEXT').exactOptional(),
    value: z.string().exactOptional().openapi({ example: 'Robert' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    effective_date: z.string().exactOptional().openapi({ example: '2021-01-01' }),
  })
  .openapi({ required: [] })
  .openapi('DefaultHistoricalAttribute')

const EntityHistoricalAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'department' }),
    entity_id: z.string().exactOptional().openapi({ example: 1 }),
    data_type: z.literal('ENTITY').exactOptional(),
    value: z.string().exactOptional().openapi({ example: 'IT' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    effective_date: z.string().exactOptional().openapi({ example: '2021-01-01' }),
  })
  .openapi({ required: [] })
  .openapi('EntityHistoricalAttribute')

const DurationHistoricalAttributeSchema = z
  .object({
    attribute_id: z
      .string()
      .exactOptional()
      .openapi({ example: 'attendance_contractual_target_hours' }),
    data_type: z.literal('DURATION').exactOptional(),
    duration: z.int().exactOptional().openapi({ example: 10 }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    effective_date: z.string().exactOptional().openapi({ example: '2021-01-01' }),
  })
  .openapi({ required: [] })
  .openapi('DurationHistoricalAttribute')

const CostCenterHistoricalAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'cost_center' }),
    data_type: z.literal('COST_CENTER').exactOptional(),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    cost_centers: z.array(CostCenterSchema).exactOptional(),
    effective_date: z.string().exactOptional().openapi({ example: '2021-01-01' }),
  })
  .openapi({ required: [] })
  .openapi('CostCenterHistoricalAttribute')

const SalaryHistoricalAttributeSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'salary_123' }),
    data_type: z.literal('SALARY').exactOptional(),
    amount: z.string().exactOptional().openapi({ example: 12.2 }),
    currency_symbol: z.string().exactOptional().openapi({ example: '$' }),
    employee_id: z.int().exactOptional().openapi({ example: 17 }),
    effective_date: z.string().exactOptional().openapi({ example: '2021-01-01' }),
  })
  .openapi({ required: [] })
  .openapi('SalaryHistoricalAttribute')

const PublicHistoricalReportItemsAttributesSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'eb7482f3-2323-43e2-87ed-99d2399e8e22' }),
    name: z.string().exactOptional().openapi({ example: 'Department changes in the past year' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Shows department changes of all employees over the past year' }),
    author_first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Robert' }),
    author_last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Sirano' }),
    type: z.literal('historical_data').exactOptional().openapi({ example: 'historical_data' }),
    status: z
      .enum(['up_to_date', 'updating', 'update_failed'])
      .exactOptional()
      .openapi({ example: 'created' }),
    start_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: '2022-01-01' }),
    end_date: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: '2022-09-30' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    data_refreshed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            column: z.string().exactOptional().openapi({ example: 'office_id' }),
            comparison: z.string().exactOptional().openapi({ example: 'eq' }),
            value: z.string().exactOptional().openapi({ example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    period_type: z
      .enum([
        'fixed',
        'today',
        'yesterday',
        'this_week',
        'last_week',
        'this_month',
        'last_month',
        'last_thirty_days',
        'next_month',
        'this_quarter',
        'last_quarter',
        'this_year',
        'year_to_date',
        'last_year',
        'next_year',
      ])
      .exactOptional()
      .openapi({ example: 'fixed' }),
    items: z
      .array(
        z
          .object({
            employee_id: z.int().exactOptional().openapi({ example: 17 }),
            historical_attributes: z
              .array(
                z.union([
                  DefaultHistoricalAttributeSchema,
                  EntityHistoricalAttributeSchema,
                  DurationHistoricalAttributeSchema,
                  CostCenterHistoricalAttributeSchema,
                  SalaryHistoricalAttributeSchema,
                ]),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicHistoricalReportItemsAttributes')

type PublicReportItemsDataType = {
  type?: string
  attributes?:
    | z.infer<typeof PublicReportItemsAttributesSchema>
    | z.infer<typeof PublicTimeframeReportItemsAttributesSchema>
    | z.infer<typeof PublicHistoricalReportItemsAttributesSchema>
}

const PublicReportItemsDataSchema: z.ZodType<PublicReportItemsDataType> = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'Report' }),
    attributes: z
      .xor([
        PublicReportItemsAttributesSchema,
        PublicTimeframeReportItemsAttributesSchema,
        PublicHistoricalReportItemsAttributesSchema,
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicReportItemsData')

type PublicReportResponseType = {
  success?: boolean
  metadata?: z.infer<typeof PublicReportMetaDataSchema>
  offset?: number
  limit?: number
  data?: z.infer<typeof PublicReportItemsDataSchema>[]
}

const DocumentUploadRequestSchema = z
  .object({
    title: z
      .string()
      .openapi({ description: 'Title of the document. Maximum length is 255 characters.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional comment that can be added to the uploaded document.' }),
    employee_id: z.int().openapi({ description: 'Employee identifier' }),
    category_id: z.int().openapi({ description: 'Document Category identifier' }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Optional date can be added to the uploaded document. Must follow the format: Y-m-d',
      }),
    file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'The document that shall be uploaded to an employees profile. Maximum file size is 30MB.',
      }),
  })
  .openapi({ required: ['title', 'employee_id', 'category_id', 'file'] })
  .openapi('DocumentUploadRequest')

const DocumentUploadFailedWithBadDocumentCategoryResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        message: z
          .string()
          .exactOptional()
          .openapi({ example: 'No query results for model [DocumentCategory] 1' }),
        code: z.int().exactOptional().openapi({ example: 0 }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DocumentUploadFailedWithBadDocumentCategoryResponse')

const DocumentUploadFailedWithUnsupportedFileTypeResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        message: z.string().exactOptional().openapi({ example: 'The given data was invalid.' }),
        code: z.int().exactOptional().openapi({ example: 0 }),
        error_data: z
          .object({
            file: z
              .array(
                z
                  .string()
                  .openapi({
                    example:
                      'The file must be a file of type: pdf, docx, doc, jpg, zip, png, txt, jpeg, odt, xlsx, rtf, htm, xls, p7s, pptx, pages, rar, ppt, gif, tif, html, msg, asc, tiff, wps, bmp, 7z, csv, ics, vcf, dotx, numbers, eps, gz, ods, otf, odp, odg, rtfd, txz, webarchive, xml, xps, md, fax.',
                  }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DocumentUploadFailedWithUnsupportedFileTypeResponse')

const DocumentEmployeeResponseObjectSchema = z
  .object({
    id: z
      .object({
        label: z.string().exactOptional().openapi({ example: 'ID' }),
        value: z.int().exactOptional().openapi({ example: 1 }),
        type: z.string().exactOptional().openapi({ example: 'standard' }),
        universal_id: z.string().exactOptional().openapi({ example: 'id' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    first_name: z
      .object({
        label: z.string().exactOptional().openapi({ example: 'First name' }),
        value: z.string().exactOptional().openapi({ example: 'Michael' }),
        type: z.string().exactOptional().openapi({ example: 'standard' }),
        universal_id: z.string().exactOptional().openapi({ example: 'first_name' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    last_name: z
      .object({
        label: z.string().exactOptional().openapi({ example: 'Last name' }),
        value: z.string().exactOptional().openapi({ example: 'Dou' }),
        type: z.string().exactOptional().openapi({ example: 'standard' }),
        universal_id: z.string().exactOptional().openapi({ example: 'last_name' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    email: z
      .object({
        label: z.string().exactOptional().openapi({ example: 'Email' }),
        value: z.string().exactOptional().openapi({ example: 'michaeldou@demo.de' }),
        type: z.string().exactOptional().openapi({ example: 'standard' }),
        universal_id: z.string().exactOptional().openapi({ example: 'email' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DocumentEmployeeResponseObject')

const DocumentCategorySchema = z
  .object({
    id: z.int().exactOptional().openapi({ example: 1 }),
    type: z.string().exactOptional().openapi({ example: 'DocumentCategory' }),
    attributes: z
      .object({
        name: z.string().exactOptional().openapi({ example: 'Certificates of employment' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DocumentCategory')

const DocumentUploadSuccessResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: true }),
    data: z
      .object({
        id: z.int().exactOptional().openapi({ example: 1 }),
        type: z.string().exactOptional().openapi({ example: 'Document' }),
        attributes: z
          .object({
            title: z.string().exactOptional().openapi({ example: 'Document Title' }),
            date: z.string().exactOptional().openapi({ example: '2022-01-01' }),
            comment: z.string().exactOptional().openapi({ example: 'Optional Test Comment' }),
            employee: DocumentEmployeeResponseObjectSchema.exactOptional(),
            category_id: DocumentCategorySchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DocumentUploadSuccessResponse')

const DocumentCategoriesResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: true }),
    data: z.array(DocumentCategorySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentCategoriesResponse')

const DeletedAbsenceResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        message: z.any().exactOptional().openapi({ example: 'The absence period was deleted.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Default response object', required: [] })
  .openapi('DeletedAbsenceResponse')

const DeletedAttendanceResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        message: z.any().exactOptional().openapi({ example: 'The attendance period was deleted' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Default response object', required: [] })
  .openapi('DeletedAttendanceResponse')

const UpdatedAttendanceResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        message: z.any().exactOptional().openapi({ example: 'The attendance period was updated.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Default response object', required: [] })
  .openapi('UpdatedAttendanceResponse')

const ErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 0 }),
        message: z.any().exactOptional().openapi({ example: 'Something went wrong' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Default error response', required: [] })
  .openapi('ErrorResponse')

const ErrorCreateAbsenceResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 0 }),
        message: z
          .any()
          .exactOptional()
          .openapi({ example: 'The given data failed to pass validation.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Default error response', required: [] })
  .openapi('ErrorCreateAbsenceResponse')

const ErrorAbsenceResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 404 }),
        message: z.any().exactOptional().openapi({ example: 'The absence period was not found.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: '404 absence error', required: [] })
  .openapi('ErrorAbsenceResponse')

const ErrorInsertingAbsenceResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 400 }),
        message: z
          .any()
          .exactOptional()
          .openapi({ example: 'Error when trying to insert absence period' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: '400 absence error', required: [] })
  .openapi('ErrorInsertingAbsenceResponse')

const AttendanceCreateUpdate400ErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 400 }),
        message: z
          .string()
          .exactOptional()
          .openapi({ example: 'Error when trying to insert Attendances periods rows' }),
        detailed_message: z
          .array(
            z
              .object({
                success: z.boolean().exactOptional().openapi({ example: false }),
                error_msg: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'Existing overlapping attendances periods' }),
                id: z.int().nullable().exactOptional().openapi({ example: null }),
                employee: z.int().exactOptional().openapi({ example: 1234 }),
                date: z.string().exactOptional().openapi({ example: '2017-01-01' }),
                start_time: z.string().exactOptional().openapi({ example: '09:00' }),
                end_time: z.string().exactOptional().openapi({ example: '18:00' }),
                break: z.int().exactOptional().openapi({ example: 60 }),
                comment: z.string().exactOptional().openapi({ example: 'Optional Test Comment' }),
                project_id: z.int().nullable().exactOptional().openapi({ example: null }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: '400 [Bad Request] Attendances Creation Error', required: [] })
  .openapi('AttendanceCreateUpdate400ErrorResponse')

const AttendanceDelete400ErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 400 }),
        message: z.any().exactOptional().openapi({ example: 'Bad Request' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: '400 [Bad Request] Attendance Error', required: [] })
  .openapi('AttendanceDelete400ErrorResponse')

const Attendance404ErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 404 }),
        message: z
          .any()
          .exactOptional()
          .openapi({ example: 'The attendance period was not found.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: '404 [Not Found] Attendance Error', required: [] })
  .openapi('Attendance404ErrorResponse')

const Employee404ErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: false }),
    error: z
      .object({
        code: z.int().exactOptional().openapi({ example: 0 }),
        message: z.any().exactOptional().openapi({ example: 'Es ist ein Problem aufgetreten' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: '404 [Not Found] Employee Error', required: [] })
  .openapi('Employee404ErrorResponse')

const EmployeeCreatedResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        id: z.number().exactOptional().openapi({ example: 1 }),
        message: z.string().exactOptional().openapi({ example: 'success' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Successfully created employee response', required: [] })
  .openapi('EmployeeCreatedResponse')

const EmployeeCreationErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    error: z
      .object({
        code: z.number().exactOptional().openapi({ example: 422 }),
        message: z.string().exactOptional().openapi({ example: 'Supervisor with ID 1 not found' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Employee creation failed due to invalid payload', required: [] })
  .openapi('EmployeeCreationErrorResponse')

const EmployeeUpdatedResponseSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ example: true }),
    data: z
      .object({ id: z.number().exactOptional().openapi({ example: 12345 }) })
      .exactOptional()
      .openapi({ required: [] }),
    meta: z.array(z.string()).default([]).exactOptional(),
  })
  .openapi({ title: 'Successfully updated employee response', required: [] })
  .openapi('EmployeeUpdatedResponse')

const EmployeeUpdateErrorResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    error: z
      .object({
        code: z.number().exactOptional().openapi({ example: 422 }),
        message: z.string().exactOptional().openapi({ example: 'Supervisor with ID 1 not found' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Employee update failed due to invalid payload', required: [] })
  .openapi('EmployeeUpdateErrorResponse')

const EmployeesResponseSchema: z.ZodType<EmployeesResponseType> = ResponseSchema.and(
  z
    .object({
      metadata: z
        .object({
          total_elements: z
            .int()
            .openapi({ description: 'The total number of items matching the query filters.' }),
          total_pages: z
            .int()
            .openapi({
              description:
                'The total number of pages distributing sets of items matching the query filters.',
            }),
          current_page: z
            .int()
            .openapi({
              description:
                'Current page number containing the returned set of items matching with the query filters. The page number range is from 0 to total_pages - 1',
            }),
        })
        .exactOptional()
        .openapi({ required: ['total_elements', 'current_page', 'total_pages'] }),
      offset: z.int().exactOptional(),
      limit: z.int().exactOptional(),
      data: z
        .array(
          z
            .object({
              type: z.any().exactOptional().openapi({ example: 'Employee' }),
              attributes: EmployeeSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'List of Employees' })
  .openapi('EmployeesResponse')

const EmployeeResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({
          type: z.any().exactOptional().openapi({ example: 'Employee' }),
          attributes: EmployeeSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Employee Response' })
  .openapi('EmployeeResponse')

const EmployeeAbsenceBalanceSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .array(
        z
          .object({
            id: z.int().exactOptional().openapi({ example: 1234 }),
            name: z.string().exactOptional().openapi({ example: 'Paid Vacation' }),
            category: z.string().exactOptional().openapi({ example: 'custom_absence' }),
            balance: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Effective balance, as of request date; not deducting any upcoming absence periods, but only what has been taken. If the absence period is currently ongoing, the effective balance only considers the part of the period until today.\n',
                example: 10.5,
              }),
            available_balance: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Available balance is what actually left to be planned (where upcoming absence periods are already deducted).',
                example: 8.5,
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ title: 'Employee Absence Balance', required: [] })
  .openapi('EmployeeAbsenceBalance')

const ProjectSchema = z
  .object({
    id: z.int().exactOptional().openapi({ example: 1 }),
    type: z.string().exactOptional().openapi({ example: 'Project' }),
    attributes: z
      .object({
        name: z.string().exactOptional().openapi({ example: 'Project name' }),
        active: z
          .boolean()
          .exactOptional()
          .openapi({
            example: true,
            description: 'Marks the availability of the project. The default value is false.',
          }),
        created_at: z.string().exactOptional().openapi({ example: '2022-02-01T12:00:00+0100' }),
        updated_at: z.string().exactOptional().openapi({ example: '2022-02-01T12:00:00+0100' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Project')

const AttendanceProjectSchema = z
  .object({
    id: z.int().exactOptional().openapi({ example: 1 }),
    type: z.string().exactOptional().openapi({ example: 'Project' }),
    attributes: z
      .object({
        name: z.string().exactOptional().openapi({ example: 'Project name' }),
        active: z
          .boolean()
          .exactOptional()
          .openapi({
            example: true,
            description:
              "Marks the availability of the project. When a new project is created, it's set by default to false.",
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AttendanceProject')

const AttendanceSchema = z
  .object({
    employee: z.int().exactOptional().openapi({ example: 1 }),
    date: z.iso.date().exactOptional(),
    start_time: z
      .string()
      .regex(/^\d\d:\d\d$/)
      .exactOptional()
      .openapi({ example: '08:00' }),
    end_time: z
      .string()
      .regex(/^\d\d:\d\d$/)
      .nullable()
      .exactOptional()
      .openapi({ example: '17:00' }),
    break: z.int().exactOptional().openapi({ example: 60 }),
    comment: z.string().exactOptional().openapi({ example: 'I was productive as hell' }),
    is_holiday: z.boolean().exactOptional().openapi({ example: false }),
    is_on_time_off: z.boolean().exactOptional().openapi({ example: false }),
    status: z.enum(['confirmed', 'pending', 'rejected']).exactOptional(),
    project: z
      .object({
        id: z.int().exactOptional().openapi({ example: 5 }),
        type: z.string().exactOptional().openapi({ example: 'Project' }),
        attributes: z
          .object({
            name: z.string().exactOptional().openapi({ example: 'A project name' }),
            active: z.boolean().exactOptional().openapi({ example: true }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Attendance')

const AttendanceCreateRequestSchema = z
  .object({
    attendances: z
      .array(
        z
          .object({
            employee: z.int().min(1).openapi({ example: 1 }),
            date: z.iso.date(),
            start_time: z
              .string()
              .regex(/^\d\d:\d\d$/)
              .openapi({ example: '08:00', description: 'Format: hh:mm' }),
            end_time: z
              .string()
              .regex(/^\d\d:\d\d$/)
              .nullable()
              .exactOptional()
              .openapi({ example: '17:00', description: 'Format: hh:mm' }),
            break: z.int().min(0).openapi({ example: 60 }),
            comment: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ example: 'I was productive as hell' }),
            project_id: z.int().nullable().exactOptional().openapi({ example: 5 }),
          })
          .openapi({ required: ['employee', 'date', 'start_time', 'break'] }),
      )
      .min(1)
      .exactOptional(),
    skip_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AttendanceCreateRequest')

const AttendanceUpdateRequestSchema = z
  .object({
    date: z.iso.date().exactOptional(),
    start_time: z
      .string()
      .regex(/^\d\d:\d\d$/)
      .exactOptional()
      .openapi({ example: '08:00', description: 'Format: hh:mm' }),
    end_time: z
      .string()
      .regex(/^\d\d:\d\d$/)
      .nullable()
      .exactOptional()
      .openapi({ example: '17:00', description: 'Format: hh:mm' }),
    break: z.int().min(0).exactOptional().openapi({ example: 60 }),
    comment: z.string().nullable().exactOptional().openapi({ example: 'I was productive as hell' }),
    project_id: z.int().nullable().exactOptional().openapi({ example: 5 }),
    skip_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AttendanceUpdateRequest')

const AttendancePeriodsResponseSchema = ResponseSchema.and(
  z
    .object({
      metadata: z
        .object({
          total_elements: z
            .int()
            .openapi({ description: 'The total number of items matching the query filters.' }),
          total_pages: z
            .int()
            .openapi({
              description:
                'The total number of pages distributing sets of items matching the query filters.',
            }),
          current_page: z
            .int()
            .openapi({
              description:
                'Current page number containing the returned set of items matching with the query filters. The page number range is from 0 to total_pages - 1',
            }),
        })
        .exactOptional()
        .openapi({ required: ['total_elements', 'current_page', 'total_pages'] }),
      offset: z.int().exactOptional(),
      limit: z.int().exactOptional(),
      data: z
        .array(
          z
            .object({
              id: z.int().openapi({ example: 1 }),
              type: z.any().openapi({ example: 'AttendancePeriod' }),
              attributes: AttendanceSchema,
            })
            .openapi({ required: ['id', 'type', 'attributes'] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'List All Attendance Periods response' })
  .openapi('AttendancePeriodsResponse')

const NewAttendancePeriodParametersRequestSchema = z
  .object({
    'attendances[][employee]': z.int().openapi({ description: 'Employee identifier' }),
    'attendances[][date]': z.iso
      .date()
      .openapi({ description: 'Attendance date. Format: yyyy-mm-dd', example: '2020-01-31' }),
    'attendances[][start_time]': z
      .string()
      .regex(/^\d\d:\d\d$/)
      .openapi({ description: 'Start time. Format: hh:mm', example: '08:00' }),
    'attendances[][end_time]': z
      .string()
      .regex(/^\d\d:\d\d$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'End time. Format: hh:mm', example: '12:00' }),
    'attendances[]break': z.int32().min(0).openapi({ description: 'Break in minutes' }),
    'attendances[][comment]': z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional comment' }),
    skip_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.',
      }),
    project_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the project', example: 5 }),
  })
  .openapi({
    title: 'Create a New Attendance Period request',
    required: [
      'attendances[][employee]',
      'attendances[][date]',
      'attendances[][start_time]',
      'attendances[]break',
    ],
  })
  .openapi('NewAttendancePeriodParametersRequest')

const NewAttendancePeriodResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({
          id: z.array(z.int().openapi({ example: 1 })).exactOptional(),
          message: z.any().exactOptional().openapi({ example: 'Success' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('NewAttendancePeriodResponse')

const TimeOffTypeResourceSchema = z
  .object({
    type: z
      .literal('TimeOffType')
      .exactOptional()
      .openapi({ description: 'Time-off type resource name' }),
    attributes: z
      .object({
        id: z.int().exactOptional().openapi({ description: 'identifier', example: 1 }),
        name: z.string().exactOptional().openapi({ example: 'Paid vacation' }),
        category: z
          .enum([
            'family_care',
            'maternity_parental_leave',
            'child_care',
            'short_time_allowance',
            'quarantine',
            'irrevocable_exemption',
            'sick_leave',
            'strike_and_lockout',
            'public_duty',
            'unpaid_suspension',
            'paid_vacation',
            'unpaid_vacation',
            'unexcused_absence',
            'offsite_work',
            'other',
            'undefined',
          ])
          .nullable()
          .exactOptional()
          .openapi({ example: 'offsite_work' }),
        unit: z.enum(['day', 'hour']).exactOptional().openapi({ example: 'day' }),
        approval_required: z.boolean().exactOptional().openapi({ example: true }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'Type of time-off resource', required: [] })
  .openapi('TimeOffTypeResource')

const CreateTimeOffPeriodRequestSchema = z
  .object({
    employee_id: z.int().openapi({ description: 'Employee identifier' }),
    time_off_type_id: z.int().openapi({ description: 'Time-off type identifier' }),
    start_date: z.iso
      .date()
      .openapi({ description: 'Absence start date. Format: yyyy-mm-dd', example: '2020-01-31' }),
    end_date: z.iso
      .date()
      .openapi({ description: 'Absence end date. Format: yyyy-mm-dd', example: '2020-01-31' }),
    half_day_start: z
      .boolean()
      .openapi({ example: false, description: 'Whether the start date is a half-day off.' }),
    half_day_end: z
      .boolean()
      .openapi({ example: false, description: 'Whether the end date is a half-day off.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ example: 'Some Comment', description: 'Optional comment' }),
    skip_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.',
      }),
  })
  .openapi({
    title: 'Create time-off periods',
    required: [
      'employee_id',
      'time_off_type_id',
      'start_date',
      'end_date',
      'half_day_start',
      'half_day_end',
    ],
  })
  .openapi('CreateTimeOffPeriodRequest')

const CreateAbsencePeriodRequestSchema = z
  .object({
    employee_id: z.int().openapi({ description: 'Employee identifier', example: 10735 }),
    time_off_type_id: z.int().openapi({ description: 'Time-off type identifier', example: 10735 }),
    start_date: z.iso
      .date()
      .openapi({ description: 'Absence start date. Format: yyyy-mm-dd', example: '2020-01-31' }),
    end_date: z.iso
      .date()
      .openapi({ description: 'Absence end date. Format: yyyy-mm-dd', example: '2020-01-31' }),
    start_time: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Absence start time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)',
        example: '03:00',
      }),
    end_time: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Absence end time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)',
        example: '15:00',
      }),
    half_day_start: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether the start date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)',
      }),
    half_day_end: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether the end date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ example: 'Some Comment', description: 'Optional comment' }),
    skip_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.',
      }),
  })
  .openapi({
    title: 'Create Absence periods with **time unit** set to **hours**',
    required: ['employee_id', 'time_off_type_id', 'start_date', 'end_date'],
  })
  .openapi('CreateAbsencePeriodRequest')

const AbsenceSchema = z
  .object({
    id: z.int().exactOptional().openapi({ example: 1 }),
    status: z.string().exactOptional().openapi({ example: 'approved' }),
    start_date: z.string().exactOptional().openapi({ example: '2017-12-27T00:00:00+0100' }),
    end_date: z.string().exactOptional().openapi({ example: '2017-12-79T00:00:00+0100' }),
    days_count: z.number().exactOptional().openapi({ example: 3 }),
    half_day_start: z.boolean().exactOptional().openapi({ example: false }),
    half_day_end: z.boolean().exactOptional().openapi({ example: false }),
    time_off_type: z
      .object({
        type: z.string().exactOptional().openapi({ example: 'TimeOffType' }),
        attributes: z
          .object({
            id: z.int().exactOptional().openapi({ example: 1 }),
            name: z.string().exactOptional().openapi({ example: 'Vacation' }),
            category: z.string().exactOptional().openapi({ example: 'offsite_work' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    employee: ShortEmployeeSchema.exactOptional(),
    certificate: z
      .object({ status: z.string().exactOptional().openapi({ example: 'not-required' }) })
      .exactOptional()
      .openapi({ required: [] }),
    created_at: z.string().exactOptional().openapi({ example: '2017-01-17T10:32:18+0100' }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({
        example: 'API',
        description:
          "API if the origin is api, otherwise returns an admin employee's name who's account is used to create the absence",
      }),
    updated_at: z.string().exactOptional().openapi({ example: '2017-01-17T10:32:18+0100' }),
  })
  .openapi({ required: [] })
  .openapi('Absence')

const AbsencePeriodsResponseSchema = ResponseSchema.and(
  z
    .object({
      metadata: z
        .object({
          total_elements: z
            .int()
            .openapi({ description: 'The total number of items matching the query filters.' }),
          total_pages: z
            .int()
            .openapi({
              description:
                'The total number of pages distributing sets of items matching the query filters.',
            }),
          current_page: z
            .int()
            .openapi({
              description:
                'Current page number containing the returned set of items matching with the query filters. The page number range is from 0 to total_pages - 1',
            }),
        })
        .exactOptional()
        .openapi({ required: ['total_elements', 'current_page', 'total_pages'] }),
      offset: z.int().exactOptional(),
      limit: z.int().exactOptional(),
      data: z
        .array(
          z
            .object({
              type: z.any().openapi({ example: 'TimeOffPeriod' }),
              attributes: AbsenceSchema,
            })
            .openapi({ required: ['type', 'attributes'] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'List All Absence Periods response' })
  .openapi('AbsencePeriodsResponse')

const AbsenceTypeSchema = z
  .object({
    id: z.uuid().openapi({ example: '61fe126b-a7b3-449a-b5ee-3865a6fcc546' }),
    name: z.string().exactOptional().openapi({ example: 'Absence Type Name' }),
    time_off_type_id: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: ['id'] })
  .openapi('AbsenceType')

const AbsencePeriodBreakdownSchema = z
  .object({
    date: z.iso.date(),
    effective_duration: z
      .int()
      .openapi({
        description: 'Number representing the value of duration in minutes.',
        example: 60,
      }),
  })
  .openapi({ required: ['date', 'effective_duration'] })
  .openapi('AbsencePeriodBreakdown')

const HourlyAbsenceSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ example: '61fe126b-a7b3-449a-b5ee-3865a6fcc546' }),
    measurement_unit: z.string().exactOptional().openapi({ example: 'hours' }),
    effective_duration: z
      .int()
      .exactOptional()
      .openapi({ example: 16, description: 'Period effective duration in minutes' }),
    employee: ShortEmployeeSchema.exactOptional(),
    absence_type: AbsenceTypeSchema.exactOptional(),
    certificate: z
      .object({ status: z.string().exactOptional().openapi({ example: 'not-required' }) })
      .exactOptional()
      .openapi({ required: [] }),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    half_day_start: z.boolean().exactOptional(),
    half_day_end: z.boolean().exactOptional(),
    comment: z.string().exactOptional(),
    origin: z.string().exactOptional().openapi({ example: 'web' }),
    status: z.string().exactOptional().openapi({ example: 'approved' }),
    timezone: z.string().exactOptional().openapi({ example: 'Europe/Berlin' }),
    created_by: z
      .int()
      .exactOptional()
      .openapi({ example: 1, description: 'ID of the employee who created the absence period.' }),
    created_at: z.string().exactOptional().openapi({ example: '2017-01-17T10:32:18+0100' }),
    updated_at: z.string().exactOptional().openapi({ example: '2017-01-17T10:32:18+0100' }),
    approved_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    breakdowns: z
      .array(AbsencePeriodBreakdownSchema)
      .exactOptional()
      .openapi({ description: 'Breakdowns of effective duration by day of absence.' }),
  })
  .openapi({ required: [] })
  .openapi('HourlyAbsence')

const HourlyAbsencePeriodsResponseSchema = ResponseSchema.and(
  z
    .object({
      metadata: z
        .object({
          total_elements: z
            .int()
            .openapi({ description: 'The total number of items matching the query filters.' }),
          total_pages: z
            .int()
            .openapi({
              description:
                'The total number of pages distributing sets of items matching the query filters.',
            }),
          current_page: z
            .int()
            .openapi({
              description:
                'Current page number containing the returned set of items matching with the query filters. The page number range is from 0 to total_pages - 1',
            }),
        })
        .exactOptional()
        .openapi({ required: ['total_elements', 'current_page', 'total_pages'] }),
      offset: z.int().exactOptional(),
      limit: z.int().exactOptional(),
      data: z
        .array(
          z
            .object({
              type: z.any().openapi({ example: 'AbsencePeriod' }),
              attributes: HourlyAbsenceSchema,
            })
            .openapi({ required: ['type', 'attributes'] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'List All Hourly Absence Periods response' })
  .openapi('HourlyAbsencePeriodsResponse')

const HourlyAbsencePeriodResponseAttributesSchema = z
  .object({
    id: z.string().openapi({ example: '9bba303f-0fbc-4514-9958-0befa21923fb' }),
    measurement_unit: z.literal('minutes').exactOptional().openapi({ example: 'minutes' }),
    effective_duration: z
      .int()
      .openapi({ example: 60, description: 'Period effective duration in minutes' }),
    employee: ShortEmployeeSchema,
    absence_type_id: AbsenceTypeSchema,
    certificate: z
      .object({ status: z.string().exactOptional().openapi({ example: 'not-required' }) })
      .openapi({ required: [] }),
    start: z.iso.datetime({ offset: true }),
    end: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    half_day_start: z.boolean(),
    half_day_end: z.boolean(),
    comment: z.string().exactOptional(),
    origin: z
      .enum(['web', 'api', 'mobile', 'slack', 'msteams'])
      .nullable()
      .openapi({ example: 'web' }),
    status: z.string().openapi({ example: 'approved' }),
    created_by: z
      .int()
      .openapi({ example: 1, description: 'ID of the employee who created the absence period.' }),
    created_at: z.iso.datetime({ offset: true }),
    updated_at: z.iso.datetime({ offset: true }),
    approved_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    breakdowns: z
      .array(AbsencePeriodBreakdownSchema)
      .openapi({ description: 'Breakdowns of effective duration by day of absence.' }),
  })
  .openapi({
    required: [
      'id',
      'employee',
      'absence_type_id',
      'start',
      'half_day_start',
      'half_day_end',
      'origin',
      'status',
      'certificate',
      'created_by',
      'effective_duration',
      'created_at',
      'updated_at',
      'breakdowns',
    ],
  })
  .openapi('HourlyAbsencePeriodResponseAttributes')

const AbsencePeriodResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({ type: z.any().openapi({ example: 'TimeOffPeriod' }), attributes: AbsenceSchema })
        .exactOptional()
        .openapi({ required: ['type', 'attributes'] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Absence Periods response' })
  .openapi('AbsencePeriodResponse')

const HourlyAbsencePeriodResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({
          type: z.any().openapi({ example: 'AbsencePeriod' }),
          attributes: HourlyAbsenceSchema,
        })
        .exactOptional()
        .openapi({ required: ['type', 'attributes'] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Absence Periods response' })
  .openapi('HourlyAbsencePeriodResponse')

const PublicReportAttributesSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'eb7482f3-2323-43e2-87ed-99d2399e8e22' }),
    name: z.string().exactOptional().openapi({ example: 'Employee vacations past month' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Shows vacations of all employees that were taken past month' }),
    author_first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Robert' }),
    author_last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report author', example: 'Sirano' }),
    type: z
      .enum(['point_in_time', 'historical_data', 'timeframe'])
      .exactOptional()
      .openapi({ example: 'point_in_time' }),
    status: z
      .enum(['up_to_date', 'updating', 'update_failed'])
      .exactOptional()
      .openapi({ example: 'up_to_date' }),
    start_date: z.iso.date().exactOptional().openapi({ example: '2022-09-01' }),
    end_date: z.iso.date().exactOptional().openapi({ example: '2022-09-30' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    data_refreshed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-04-10T17:32:28Z' }),
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            column: z.string().exactOptional().openapi({ example: 'office_id' }),
            comparison: z.string().exactOptional().openapi({ example: 'eq' }),
            value: z.string().exactOptional().openapi({ example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    period_type: z
      .enum([
        'fixed',
        'today',
        'last_day_of_this_month',
        'this_year',
        'last_month',
        'last_thirty_days',
        'this_month',
        'year_to_date',
      ])
      .exactOptional()
      .openapi({ example: 'fixed' }),
  })
  .openapi({ required: [] })
  .openapi('PublicReportAttributes')

const PublicReportDataSchema = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'Report' }),
    attributes: PublicReportAttributesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicReportData')

const PublicListReportsResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    metadata: PublicReportMetaDataSchema.exactOptional(),
    offset: z.int().exactOptional(),
    limit: z.int().exactOptional(),
    data: z.array(PublicReportDataSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicListReportsResponse')

const PublicReportResponseSchema: z.ZodType<PublicReportResponseType> = z
  .object({
    success: z.boolean().exactOptional(),
    metadata: PublicReportMetaDataSchema.exactOptional(),
    offset: z.int().exactOptional().openapi({ deprecated: true }),
    limit: z.int().exactOptional(),
    data: z.array(PublicReportItemsDataSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicReportResponse')

const PublicColumnAttributesSchema = z
  .object({
    attribute_id: z.string().exactOptional().openapi({ example: 'first_name' }),
    human_readable: z.string().exactOptional().openapi({ example: 'First Name' }),
    data_type: z.string().exactOptional().openapi({ example: 'TEXT' }),
  })
  .openapi({ required: [] })
  .openapi('PublicColumnAttributes')

const PublicColumnDataSchema = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'Column' }),
    attributes: z.array(PublicColumnAttributesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicColumnData')

const PublicListColumnsResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    metadata: PublicReportMetaDataSchema.exactOptional(),
    offset: z.int().exactOptional(),
    limit: z.int().exactOptional(),
    data: PublicColumnDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicListColumnsResponse')

const PerformanceKpiSchema = z
  .object({
    performance_kpi_id: z.string().exactOptional().openapi({ example: 'kpi_123' }),
    performance_kpi_value: z.string().exactOptional().openapi({ example: 14 }),
  })
  .openapi({ required: [] })
  .openapi('PerformanceKpi')

const PerformanceTargetKpiSchema = z
  .object({
    performance_target_id: z.string().exactOptional().openapi({ example: 'id_123' }),
    performance_kpis: z.array(PerformanceKpiSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PerformanceTargetKpi')

const ErrorMetaSchema = z
  .object({
    field: z.string().exactOptional().openapi({ example: 'ID' }),
    description: z.string().exactOptional().openapi({ example: 'Report ID not found' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorMeta')

const ErrorDetailsSchema = z
  .object({
    title: z.string().exactOptional().openapi({ example: 'Not Found' }),
    details: z.string().exactOptional().openapi({ example: 'Report not found' }),
    type: z.string().exactOptional().openapi({ example: 'search' }),
    _meta: z.array(ErrorMetaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorDetails')

const CustomReportsErrorResponseSchema = z
  .object({
    status: z.int().exactOptional().openapi({ example: 500 }),
    trace_id: z.string().exactOptional().openapi({ example: 'ABCXXX' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-01-01T00:00:00Z' }),
    errors: z.array(ErrorDetailsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomReportsErrorResponse')

const PublicAPIExceptionSchema = z
  .array(CustomReportsErrorResponseSchema)
  .openapi('PublicAPIException')

const _401UnauthorizedErrorExampleExample = {
  value: { success: false, error: { message: 'Authorization is not provided', code: 401 } },
}

const _401UnauthorizedResponseResponse = {
  description: 'Unauthorized Access',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: { response: _401UnauthorizedErrorExampleExample },
    },
  },
}

const _403ForbiddenErrorExampleExample = {
  value: { success: false, error: { message: 'Provided authorization is not valid', code: 403 } },
}

const _403ForbiddenResponseResponse = {
  description: 'Forbidden Access',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: { response: _403ForbiddenErrorExampleExample },
    },
  },
}

const XPersonioPartnerIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Personio-Partner-ID',
      in: 'header',
      required: false,
      description: 'The partner identifier',
      schema: { type: 'string' },
    },
  })

const XPersonioAppIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Personio-App-ID',
      in: 'header',
      required: false,
      description: 'The application identifier',
      schema: { type: 'string' },
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getCompanyEmployeesRoute = createRoute({
  method: 'get',
  path: '/company/employees',
  tags: ['Employees'],
  summary: 'List Employees',
  description: 'List Company Employees',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
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
          z.int().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Pagination attribute to limit the number of employees returned per page.',
            schema: { type: 'integer', minimum: 1, default: 10, example: 10 },
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
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              'Pagination attribute to identify the first item in the collection to return.',
            schema: { type: 'integer', minimum: 0, default: 0, example: 0 },
          },
          example: 0,
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            required: false,
            description:
              'Find an employee with the given email address. The response is still a list, containing only the filtered employee. NOTE: when using the updated_since filter, the email filter is ignored.',
            schema: { type: 'string' },
          },
        }),
      'attributes[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'attributes[]',
            in: 'query',
            description:
              'A list of attributes that will be returned for the employees, ie. a projection of the employee fields and relationships. In case `updated_since` query parameter is used, this list will additionally be used to exclude the employees that had none of the provided `attributes[]` updated since `updated_since`, ie. a selection filter.',
            example: '?attributes[]=first_name&attributes[]=last_name',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              example: ['first_name', 'last_name'],
            },
          },
          example: ['first_name', 'last_name'],
        }),
      updated_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_since',
            in: 'query',
            required: false,
            description:
              'Filter to select and return only the employees that have been updated after `updated_since`. When it is used together with the `attributes[]` query parameter, the filter will select only the employees that have had any of the provided `attributes[]` updated since `updated_since`. The format is `ISO 8601` (2022-12-24T08:15:30) or `YYYY-MM-DD`. NOTE: when using the `updated_since` filter, the `email`, `limit`, and `offset` parameters are ignored.\n<details> <summary><b>Examples with <code>updated_since</code> and <code>attributes[]</code>:</b></summary><br /> In an example company that has 17 employees:<br /><br /> <details>\n  <summary>\n  <code class="language-html">?updated_since=2022-12-24T08:15:30</code>\n  will yield 10 employees that were recently updated:\n  </summary>\n<p><pre class="prettyprint"><code language="json" class="language-json"> {\n  "success": true,\n  "metadata": {\n    "total_elements": 10,\n    "current_page": 0,\n    "total_pages": 10\n  },\n  "offset": 0,\n  "limit": 1,\n  "data": [\n    {\n      "type": "Employee",\n      "attributes": {\n        "id": {\n          "label": "ID",\n          "value": 1,\n          "type": "integer",\n          "universal_id": "id"\n        },\n        "first_name": {\n          "label": "First name",\n          "value": "Alexander",\n          "type": "standard",\n          "universal_id": "first_name"\n        },\n        "last_name": {\n          "label": "Last name",\n          "value": "Bergmann",\n          "type": "standard",\n          "universal_id": "last_name"\n        },\n        "email": {\n          "label": "Email",\n          "value": "alexander.bergmann@demo.com",\n          "type": "standard",\n          "universal_id": "email"\n        }\n      }\n    }, ...\n  ],\n  ...\n  ...\n} </code></pre></p> </details><br /> <details>\n  <summary>\n  <code class="language-html">?attributes[]=first_name</code>\n  will yield all 17 employees:\n  </summary>\n<p><pre class="prettyprint"><code language="json" class="language-json"> {\n  "success": true,\n  "metadata": {\n    "total_elements": 17,\n    "current_page": 0,\n    "total_pages": 17\n  },\n  "offset": 0,\n  "limit": 1,\n  "data": [\n    {\n      "type": "Employee",\n      "attributes": {\n        "id": {\n          "label": "ID",\n          "value": 1,\n          "type": "integer",\n          "universal_id": "id"\n        },\n        "first_name": {\n          "label": "First name",\n          "value": "Alexander",\n          "type": "standard",\n          "universal_id": "first_name"\n        }\n      }\n    }\n  ]\n} </code></pre></p> </details><br /> <details>\n  <summary>\n  <code class="language-html">?attributes[]=first_name&updated_since=2022-12-24T08:15:30</code>\n  will yield 3 employees, ones that had their <code>first_name</code> changed since <code>2022-12-24T08:15:30</code>:\n  </summary>\n<p><pre class="prettyprint"><code language="json" class="language-json"> {\n  "success": true,\n  "metadata": {\n    "total_elements": 3,\n    "current_page": 0,\n    "total_pages": 3\n  },\n  "offset": 0,\n  "limit": 1,\n  "data": [\n    {\n      "type": "Employee",\n      "attributes": {\n        "id": {\n          "label": "ID",\n          "value": 1,\n          "type": "integer",\n          "universal_id": "id"\n        },\n        "first_name": {\n          "label": "First name",\n          "value": "Alexander",\n          "type": "standard",\n          "universal_id": "first_name"\n        }\n      }\n    }\n  ]\n} </code></pre></p> </details> </details>',
            example: '2022-12-24T08:15:30',
            schema: { type: 'string', example: '2022-12-24T08:15:30' },
          },
          example: '2022-12-24T08:15:30',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: EmployeesResponseSchema,
          examples: {
            response: {
              value: {
                success: true,
                metadata: { total_elements: 2, current_page: 0, total_pages: 3 },
                offset: 0,
                limit: 20,
                data: [
                  {
                    type: 'Employee',
                    attributes: {
                      id: { label: 'ID', value: 1, type: 'integer', universal_id: 'id' },
                      first_name: {
                        label: 'First name',
                        value: 'Alexander',
                        type: 'standard',
                        universal_id: 'first_name',
                      },
                      last_name: {
                        label: 'Last name',
                        value: 'Bergmann',
                        type: 'standard',
                        universal_id: 'last_name',
                      },
                      preferred_name: {
                        label: 'Name (preferred)',
                        value: 'Alexander Bergmann',
                        type: 'standard',
                        universal_id: 'preferred_name',
                      },
                      email: {
                        label: 'Email',
                        value: 'alexander.bergmann@demo.email',
                        type: 'standard',
                        universal_id: 'email',
                      },
                      gender: {
                        label: 'Gender',
                        value: 'male',
                        type: 'standard',
                        universal_id: 'gender',
                      },
                      status: {
                        label: 'Status',
                        value: 'active',
                        type: 'standard',
                        universal_id: 'status',
                      },
                      position: {
                        label: 'Position',
                        value: 'CTO',
                        type: 'standard',
                        universal_id: 'position',
                      },
                      supervisor: {
                        label: 'Supervisor',
                        value: {
                          type: 'Employee',
                          attributes: {
                            id: { label: 'ID', value: 2, type: 'integer', universal_id: 'id' },
                          },
                        },
                        type: 'standard',
                        universal_id: 'supervisor',
                      },
                      employment_type: {
                        label: 'Employment type',
                        value: 'external',
                        type: 'standard',
                        universal_id: 'employment_type',
                      },
                      weekly_working_hours: {
                        label: 'Weekly hours',
                        value: '40',
                        type: 'standard',
                        universal_id: 'weekly_working_hours',
                      },
                      hire_date: {
                        label: 'Hire date',
                        value: '2014-11-09T00:00:00+01:00',
                        type: 'date',
                        universal_id: 'hire_date',
                      },
                      contract_end_date: {
                        label: 'Contract ends',
                        value: null,
                        type: 'date',
                        universal_id: 'contract_end_date',
                      },
                      termination_date: {
                        label: 'Termination date',
                        value: null,
                        type: 'date',
                        universal_id: 'termination_date',
                      },
                      termination_type: {
                        label: 'Termination type',
                        value: null,
                        type: 'standard',
                        universal_id: 'termination_type',
                      },
                      termination_reason: {
                        label: 'Termination reason',
                        value: null,
                        type: 'standard',
                        universal_id: 'termination_reason',
                      },
                      probation_period_end: {
                        label: 'Probation period end',
                        value: null,
                        type: 'date',
                        universal_id: 'probation_period_end',
                      },
                      created_at: {
                        label: 'created_at',
                        value: '2017-05-23T09:49:03+02:00',
                        type: 'date',
                        universal_id: 'created_at',
                      },
                      last_modified_at: {
                        label: 'Last modified',
                        value: '2020-11-18T17:33:55+01:00',
                        type: 'date',
                        universal_id: 'last_modified_at',
                      },
                      subcompany: {
                        label: 'Subcompany',
                        value: {
                          type: 'Subcompany',
                          attributes: { id: 7033, name: 'CS Demo GmbH' },
                        },
                        type: 'standard',
                        universal_id: 'subcompany',
                      },
                      office: {
                        label: 'Workplace',
                        value: { type: 'Office', attributes: { id: 131014, name: 'Munich' } },
                        type: 'standard',
                        universal_id: 'office',
                      },
                      department: {
                        label: 'Department',
                        value: {
                          type: 'Department',
                          attributes: { id: 281521, name: 'Customer Support' },
                        },
                        type: 'standard',
                        universal_id: 'department',
                      },
                      cost_centers: {
                        label: 'Cost center',
                        value: [
                          {
                            type: 'CostCenter',
                            attributes: { id: 82957, name: 'Cost center 1', percentage: 100 },
                          },
                        ],
                        type: 'standard',
                        universal_id: 'cost_centers',
                      },
                      holiday_calendar: {
                        label: 'Public holidays',
                        value: {
                          type: 'HolidayCalendar',
                          attributes: {
                            id: 2,
                            name: 'Deutschland (Bayern) Feiertage',
                            country: 'DE',
                            state: 'Bayern',
                          },
                        },
                        type: 'standard',
                        universal_id: 'holiday_calendar',
                      },
                      absence_entitlement: {
                        label: 'Absence entitlement',
                        value: [
                          {
                            type: 'TimeOffType',
                            attributes: {
                              id: 113437,
                              name: 'Paid vacation',
                              category: 'paid_vacation',
                              entitlement: 24,
                            },
                          },
                        ],
                        type: 'standard',
                        universal_id: 'absence_entitlement',
                      },
                      work_schedule: {
                        label: 'Work schedule',
                        value: {
                          type: 'WorkSchedule',
                          attributes: {
                            id: 97188,
                            id_str: '97188',
                            name: 'Full-time, 40 hours without time tracking, (mon,tue,wed,thu,fri)',
                            valid_from: null,
                            monday: '08:00',
                            tuesday: '08:00',
                            wednesday: '08:00',
                            thursday: '08:00',
                            friday: '08:00',
                            saturday: '00:00',
                            sunday: '00:00',
                          },
                        },
                        type: 'standard',
                        universal_id: 'work_schedule',
                      },
                      fix_salary: {
                        label: 'Fix salary',
                        value: 3000,
                        type: 'decimal',
                        universal_id: 'fix_salary',
                        currency: 'EUR',
                      },
                      fix_salary_interval: {
                        label: 'Salary interval',
                        value: 'monthly',
                        type: 'standard',
                        universal_id: 'fix_salary_interval',
                      },
                      hourly_salary: {
                        label: 'Hourly salary',
                        value: 0,
                        type: 'decimal',
                        universal_id: 'hourly_salary',
                        currency: 'EUR',
                      },
                      vacation_day_balance: {
                        label: 'Vacation day balance',
                        value: 2,
                        type: 'decimal',
                        universal_id: 'vacation_day_balance',
                      },
                      last_working_day: {
                        label: 'Last day of work',
                        value: null,
                        type: 'date',
                        universal_id: 'last_working_day',
                      },
                      profile_picture: {
                        label: 'Profile Picture',
                        value:
                          'https://api.personio.de/v1/company/employees/1132888/profile-picture',
                        type: 'standard',
                        universal_id: 'profile_picture',
                      },
                      team: {
                        label: 'Team',
                        value: { type: 'Team', attributes: { id: 59026, name: 'T_X' } },
                        type: 'standard',
                        universal_id: 'team',
                      },
                      dynamic_24407: {
                        label: 'Titel',
                        value: 'Dr',
                        universal_id: null,
                        type: 'standard',
                      },
                      dynamic_21827: {
                        label: 'IBAN',
                        value: 'DE98 8989 9898 0000 8989 00',
                        universal_id: 'iban',
                        type: 'standard',
                      },
                      dynamic_33400: {
                        label: 'Anniversary Date',
                        value: '2021-01-01',
                        universal_id: null,
                        type: 'date',
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const postCompanyEmployeesRoute = createRoute({
  method: 'post',
  path: '/company/employees',
  tags: ['Employees'],
  summary: 'Create an Employee',
  description:
    "Creates a new employee. If the employee's status is not provided, it will be set based on the `hire_date` value - if it is in the past, status will be `active`, otherwise `onboarding`. This endpoint responds with the `id` of the created employee in case of success.\n",
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              employee: z
                .object({
                  email: z
                    .string()
                    .openapi({
                      example: 'john.dou@demo.com',
                      description:
                        'The e-mail field is required for the employee creation. Updating of this field is not currently supported.',
                    }),
                  first_name: z.string().openapi({ example: 'John' }),
                  last_name: z.string().openapi({ example: 'Dou' }),
                  preferred_name: z.string().exactOptional().openapi({ example: 'John Dou' }),
                  gender: z.string().exactOptional().openapi({ example: 'male' }),
                  position: z.string().exactOptional().openapi({ example: 'developer' }),
                  subcompany: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The subcompany employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.',
                      example: 'ACME',
                    }),
                  department: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The department employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.',
                      example: 'IT',
                    }),
                  office: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The workplace employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.',
                      example: 'Madrid',
                    }),
                  hire_date: z.iso
                    .date()
                    .regex(/^\d{4}-\d{2}-\d{2}$/)
                    .exactOptional()
                    .openapi({
                      example: '2020-01-31',
                      description:
                        'Employee hire date. Format: "yyyy-mm-dd". If `status` is not provided, it will be set to `active` if the hire date is in the past, or to `onboarding` if it\'s in the future.',
                    }),
                  weekly_working_hours: z.number().exactOptional().openapi({ example: 40 }),
                  status: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Status of the employee. Overrides the status determined based on the value of `hire_date`.',
                      example: 'active',
                    }),
                  supervisor_id: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'Employee ID of the Supervisor to be assigned. It needs to belong to a current existing employee, otherwise an error will be returned. If not present, no supervisor will be assigned.',
                      example: 5,
                    }),
                  custom_attributes: z
                    .object({
                      'dynamic_{{ field uid }}': z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Dynamic field, represented by unique id.',
                          example: 'German',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: ['email', 'first_name', 'last_name'] }),
            })
            .openapi({ required: [] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'employee[email]': z.string().openapi({ description: 'Employee email' }),
              'employee[first_name]': z.string().openapi({ description: 'Employee first name' }),
              'employee[last_name]': z.string().openapi({ description: 'Employee last name' }),
              'employee[preferred_name]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee preferred name' }),
              'employee[gender]': z
                .enum(['male', 'female', 'diverse'])
                .exactOptional()
                .openapi({ description: 'Employee gender' }),
              'employee[position]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee position' }),
              'employee[department]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee department' }),
              'employee[hire_date]': z.iso
                .date()
                .regex(/^\d{4}-\d{2}-\d{2}$/)
                .exactOptional()
                .openapi({
                  example: '2020-01-31',
                  description: 'Employee hire date. Format: yyyy-mm-dd',
                }),
              'employee[weekly_working_hours]': z
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
              'employee[supervisor_id]': z
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
                  description:
                    'Employee ID of the Supervisor to be assigned. It needs to belong to a current existing employee, otherwise an error will be returned. If not present, no supervisor will be assigned.',
                }),
              'employee[status]': z
                .enum(['onboarding', 'active', 'leave', 'inactive'])
                .exactOptional()
                .openapi({ description: 'Employee status' }),
            })
            .openapi({
              required: ['employee[email]', 'employee[first_name]', 'employee[last_name]'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful creation of a employee',
      content: {
        'application/json': {
          schema: EmployeeCreatedResponseSchema,
          examples: {
            response: { value: { success: true, data: { id: 81723, message: 'success' } } },
          },
        },
      },
    },
    422: {
      description: 'Employee creation failed due to invalid payload',
      content: {
        'application/json': {
          schema: EmployeeCreationErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 422, message: 'Supervisor with ID 1 not found' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/company/employees/{employee_id}',
  tags: ['Employees'],
  summary: 'Get Employee by ID',
  description: 'Get Employee by ID',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'employee_id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the employee',
            schema: { type: 'integer', format: 'int32' },
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
                success: true,
                data: {
                  type: 'Employee',
                  attributes: {
                    id: { label: 'ID', value: 1, type: 'integer', universal_id: 'id' },
                    first_name: {
                      label: 'First name',
                      value: 'Alexander',
                      type: 'standard',
                      universal_id: 'first_name',
                    },
                    last_name: {
                      label: 'Last name',
                      value: 'Bergmann',
                      type: 'standard',
                      universal_id: 'last_name',
                    },
                    preferred_name: {
                      label: 'Name (preferred)',
                      value: 'Alexander Bergmann',
                      type: 'standard',
                      universal_id: 'preferred_name',
                    },
                    email: {
                      label: 'Email',
                      value: 'alexander.bergmann@demo.email',
                      type: 'standard',
                      universal_id: 'email',
                    },
                    gender: {
                      label: 'Gender',
                      value: 'male',
                      type: 'standard',
                      universal_id: 'gender',
                    },
                    status: {
                      label: 'Status',
                      value: 'active',
                      type: 'standard',
                      universal_id: 'status',
                    },
                    position: {
                      label: 'Position',
                      value: 'CTO',
                      type: 'standard',
                      universal_id: 'position',
                    },
                    supervisor: {
                      label: 'Supervisor',
                      value: {
                        type: 'Employee',
                        attributes: {
                          id: { label: 'ID', value: 2, type: 'integer', universal_id: 'id' },
                        },
                      },
                      type: 'standard',
                      universal_id: 'supervisor',
                    },
                    employment_type: {
                      label: 'Employment type',
                      value: 'external',
                      type: 'standard',
                      universal_id: 'employment_type',
                    },
                    weekly_working_hours: {
                      label: 'Weekly hours',
                      value: '40',
                      type: 'standard',
                      universal_id: 'weekly_working_hours',
                    },
                    hire_date: {
                      label: 'Hire date',
                      value: '2014-11-09T00:00:00+01:00',
                      type: 'date',
                      universal_id: 'hire_date',
                    },
                    contract_end_date: {
                      label: 'Contract ends',
                      value: null,
                      type: 'date',
                      universal_id: 'contract_end_date',
                    },
                    termination_date: {
                      label: 'Termination date',
                      value: null,
                      type: 'date',
                      universal_id: 'termination_date',
                    },
                    termination_type: {
                      label: 'Termination type',
                      value: null,
                      type: 'standard',
                      universal_id: 'termination_type',
                    },
                    termination_reason: {
                      label: 'Termination reason',
                      value: null,
                      type: 'standard',
                      universal_id: 'termination_reason',
                    },
                    probation_period_end: {
                      label: 'Probation period end',
                      value: null,
                      type: 'date',
                      universal_id: 'probation_period_end',
                    },
                    created_at: {
                      label: 'created_at',
                      value: '2017-05-23T09:49:03+02:00',
                      type: 'date',
                      universal_id: 'created_at',
                    },
                    last_modified_at: {
                      label: 'Last modified',
                      value: '2020-11-18T17:33:55+01:00',
                      type: 'date',
                      universal_id: 'last_modified_at',
                    },
                    subcompany: {
                      label: 'Subcompany',
                      value: { type: 'Subcompany', attributes: { id: 7033, name: 'CS Demo GmbH' } },
                      type: 'standard',
                      universal_id: 'subcompany',
                    },
                    office: {
                      label: 'Workplace',
                      value: { type: 'Office', attributes: { id: 131014, name: 'Munich' } },
                      type: 'standard',
                      universal_id: 'office',
                    },
                    department: {
                      label: 'Department',
                      value: {
                        type: 'Department',
                        attributes: { id: 281521, name: 'Customer Support' },
                      },
                      type: 'standard',
                      universal_id: 'department',
                    },
                    cost_centers: {
                      label: 'Cost center',
                      value: [
                        {
                          type: 'CostCenter',
                          attributes: { id: 82957, name: 'Cost center 1', percentage: 100 },
                        },
                      ],
                      type: 'standard',
                      universal_id: 'cost_centers',
                    },
                    holiday_calendar: {
                      label: 'Public holidays',
                      value: {
                        type: 'HolidayCalendar',
                        attributes: {
                          id: 2,
                          name: 'Deutschland (Bayern) Feiertage',
                          country: 'DE',
                          state: 'Bayern',
                        },
                      },
                      type: 'standard',
                      universal_id: 'holiday_calendar',
                    },
                    absence_entitlement: {
                      label: 'Absence entitlement',
                      value: [
                        {
                          type: 'TimeOffType',
                          attributes: {
                            id: 113437,
                            name: 'Paid vacation',
                            category: 'paid_vacation',
                            entitlement: 24,
                          },
                        },
                      ],
                      type: 'standard',
                      universal_id: 'absence_entitlement',
                    },
                    work_schedule: {
                      label: 'Work schedule',
                      value: {
                        type: 'WorkSchedule',
                        attributes: {
                          id: 97188,
                          id_str: '97188',
                          name: 'Full-time, 40 hours without time tracking, (mon,tue,wed,thu,fri)',
                          valid_from: null,
                          monday: '08:00',
                          tuesday: '08:00',
                          wednesday: '08:00',
                          thursday: '08:00',
                          friday: '08:00',
                          saturday: '00:00',
                          sunday: '00:00',
                        },
                      },
                      type: 'standard',
                      universal_id: 'work_schedule',
                    },
                    fix_salary: {
                      label: 'Fix salary',
                      value: 3000,
                      type: 'decimal',
                      universal_id: 'fix_salary',
                      currency: 'EUR',
                    },
                    fix_salary_interval: {
                      label: 'Salary interval',
                      value: 'monthly',
                      type: 'standard',
                      universal_id: 'fix_salary_interval',
                    },
                    hourly_salary: {
                      label: 'Hourly salary',
                      value: 0,
                      type: 'decimal',
                      universal_id: 'hourly_salary',
                      currency: 'EUR',
                    },
                    last_working_day: {
                      label: 'Last day of work',
                      value: null,
                      type: 'date',
                      universal_id: 'last_working_day',
                    },
                    profile_picture: {
                      label: 'Profile Picture',
                      value: 'https://api.personio.de/v1/company/employees/1132888/profile-picture',
                      type: 'standard',
                      universal_id: 'profile_picture',
                    },
                    team: {
                      label: 'Team',
                      value: { type: 'Team', attributes: { id: 59026, name: 'T_X' } },
                      type: 'standard',
                      universal_id: 'team',
                    },
                    dynamic_24407: {
                      label: 'Titel',
                      value: 'Dr',
                      universal_id: null,
                      type: 'standard',
                    },
                    dynamic_21827: {
                      label: 'IBAN',
                      value: 'DE98 8989 9898 0000 8989 00',
                      universal_id: 'iban',
                      type: 'standard',
                    },
                    dynamic_33400: {
                      label: 'Anniversary Date',
                      value: '2021-01-01',
                      universal_id: null,
                      type: 'date',
                    },
                    dynamic_180883: {
                      label: 'Birthday',
                      value: '1983-08-18',
                      universal_id: 'date_of_birth',
                      type: 'date',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: '',
      content: {
        'application/json': {
          schema: Employee404ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'Es ist ein Problem aufgetreten ' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const patchCompanyEmployeesEmployeeIdRoute = createRoute({
  method: 'patch',
  path: '/company/employees/{employee_id}',
  tags: ['Employees'],
  summary: 'Update Employee by ID',
  description:
    "Updates an existing employee. Note: Only the fields that are listed in the body example are updatable. Attributes that are not part of the sample request body but are present inside the request are ignored. It's not possible to update the Email field.\n",
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'employee_id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the employee',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              employee: z
                .object({
                  first_name: z.string().exactOptional().openapi({ example: 'John' }),
                  last_name: z.string().exactOptional().openapi({ example: 'Dou' }),
                  preferred_name: z.string().exactOptional().openapi({ example: 'John Dou' }),
                  gender: z.string().exactOptional().openapi({ example: 'male' }),
                  position: z.string().exactOptional().openapi({ example: 'developer' }),
                  subcompany: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The subcompany employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.',
                      example: 'ACME',
                    }),
                  department: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The department employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.',
                      example: 'IT',
                    }),
                  office: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The workplace employee belongs to. Should be predefined in Personio. Otherwise will be ignored with showing meta error in the response.',
                      example: 'Madrid',
                    }),
                  hire_date: z.iso
                    .date()
                    .regex(/^\d{4}-\d{2}-\d{2}$/)
                    .exactOptional()
                    .openapi({
                      example: '2020-01-31',
                      description:
                        'Employee hire date. Format: "yyyy-mm-dd". Update of the `hire_date` will not update employee status on its own (for that you\'ll need to update the `status` field)',
                    }),
                  weekly_working_hours: z.number().exactOptional().openapi({ example: 40 }),
                  status: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Status of the employee.', example: 'active' }),
                  supervisor_id: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        "Employee ID of the Supervisor to be assigned. It needs to belong to a current existing employee and not the same as the one of the employee being updated, otherwise an error will be returned. If sent as null, will unset the employee's supervisor.",
                      example: 5,
                    }),
                  custom_attributes: z
                    .object({
                      'dynamic_{{ field uid }}': z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Dynamic field, represented by unique id.',
                          example: 'German',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'employee[first_name]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee first name' }),
              'employee[last_name]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee last name' }),
              'employee[preferred_name]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee preferred name' }),
              'employee[gender]': z
                .enum(['male', 'female', 'diverse'])
                .exactOptional()
                .openapi({ description: 'Employee gender' }),
              'employee[position]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee position' }),
              'employee[department]': z
                .string()
                .exactOptional()
                .openapi({ description: 'Employee department' }),
              'employee[hire_date]': z.iso
                .date()
                .regex(/^\d{4}-\d{2}-\d{2}$/)
                .exactOptional()
                .openapi({
                  example: '2020-01-31',
                  description: 'Employee hire date. Format: yyyy-mm-dd',
                }),
              'employee[weekly_working_hours]': z
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
              'employee[supervisor_id]': z
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
                  description:
                    "Employee ID of the Supervisor to be assigned. It needs to belong to a current existing employee and not the same as the one of the employee being updated, otherwise an error will be returned. If sent as null, will unset the employee's supervisor.",
                }),
              'employee[status]': z
                .enum(['onboarding', 'active', 'leave', 'inactive'])
                .exactOptional()
                .openapi({ description: 'Employee status' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Employee is updated',
      content: { 'application/json': { schema: EmployeeUpdatedResponseSchema } },
    },
    422: {
      description: 'Employee update failed due to invalid payload',
      content: { 'application/json': { schema: EmployeeUpdateErrorResponseSchema } },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyEmployeesEmployeeIdAbsencesBalanceRoute = createRoute({
  method: 'get',
  path: '/company/employees/{employee_id}/absences/balance',
  tags: ['Employees'],
  summary: 'Get Absence Balance for Employee',
  description: 'Retrieve the absence balance for a specific employee',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'employee_id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the employee',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EmployeeAbsenceBalanceSchema } },
    },
    404: {
      description: '',
      content: {
        'application/json': {
          schema: Employee404ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'Es ist ein Problem aufgetreten ' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyEmployeesCustomAttributesRoute = createRoute({
  method: 'get',
  path: '/company/employees/custom-attributes',
  tags: ['Employees'],
  summary: 'List Allowed Custom Attributes',
  description: 'This endpoint is an alias for `/company/employees/attributes`.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
  },
  responses: { 200: { description: 'Please refer to `/company/employees/attributes`' } },
  security: [{ BearerAuth: [] }],
})

export const getCompanyEmployeesAttributesRoute = createRoute({
  method: 'get',
  path: '/company/employees/attributes',
  tags: ['Employees'],
  summary: 'List Allowed Attributes',
  description:
    'Lists all the allowed atrributes per API credentials including custom (dynamic) attributes.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
  },
  responses: { 200: { description: '' } },
  security: [{ BearerAuth: [] }],
})

export const getCompanyEmployeesEmployeeIdProfilePictureWidthRoute = createRoute({
  method: 'get',
  path: '/company/employees/{employee_id}/profile-picture/{width}',
  tags: ['Employees'],
  summary: 'Get Employee Profile Picture',
  description:
    "Show employee's profile picture. If profile picture is missing, the 404 error will be thrown. The `Profile Picture` attribute has to be whitelisted.",
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'employee_id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the employee',
            schema: { type: 'integer', format: 'int32' },
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
            name: 'width',
            in: 'path',
            required: true,
            description: 'Width of the image. Default is original size',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: {
      description:
        "When the employee doesn't exist or employee doesn't have profile picture set or Profile Picture attribute is not whitelisted, this error occurs.",
      content: {
        'application/json': {
          schema: Employee404ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'Etwas ist schiefgelaufen ...' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyAttendancesRoute = createRoute({
  method: 'get',
  path: '/company/attendances',
  tags: ['Attendances'],
  summary: 'List Attendances (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. Fetch attendance data for the company employees. The result can be `paginated` and `filtered` by period, the date and/or time they were updated, and/or specific employee/employees. The result contains a list of attendances.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    query: z.object({
      start_date: z.iso
        .date()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: true,
            description:
              'First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results',
            schema: { type: 'string', format: 'date' },
          },
        }),
      end_date: z.iso
        .date()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: true,
            description:
              'Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.',
            schema: { type: 'string', format: 'date' },
          },
        }),
      updated_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_from',
            in: 'query',
            required: false,
            description:
              'Datetime from when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_from will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.',
            schema: { type: 'string', format: 'datetime' },
          },
        }),
      updated_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_to',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'datetime' },
            description:
              'Datetime until when the queried periods have been updated. Same format as updated_at. It is inclusive, so the day specified as updated_to will also be considered on the results. Can be just the date, or the date and the time, with or without the timezone.',
          },
        }),
      includePending: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includePending',
            in: 'query',
            required: false,
            description:
              'Returns AttendancePeriods with a status of pending, rejected and confirmed. For pending periods, the end_date attribute is nullable. The status of each period is included in the response.',
            schema: { type: 'boolean' },
          },
        }),
      'employees[]': z
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
            name: 'employees[]',
            in: 'query',
            required: false,
            description:
              "A list of Personio employee ID's to filter the results. The result filters including only attendances of provided employees.",
            explode: true,
            schema: {
              type: 'array',
              items: { type: 'integer' },
              example: '?employees[]=1&employees[]=2',
            },
            allowReserved: true,
          },
          example: '?employees[]=1&employees[]=2',
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
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Pagination attribute to limit how many attendances are per page',
            schema: { type: 'integer', minimum: 1, default: 200 },
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
            name: 'offset',
            in: 'query',
            required: false,
            description:
              'The offset from the first record that would be returned. With 3 results [A, B, C] and an offset of 1, the following two results will be returned [B, C].',
            schema: { type: 'integer', minimum: 0, default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The Attendance periods matching the provided filters',
      content: {
        'application/json': {
          schema: AttendancePeriodsResponseSchema,
          examples: {
            response: {
              value: {
                success: true,
                metadata: { total_elements: 2, current_page: 0, total_pages: 3 },
                offset: 0,
                limit: 200,
                data: [
                  {
                    id: 1234,
                    type: 'AttendancePeriod',
                    attributes: {
                      employee: 325659,
                      date: '2017-01-17',
                      start_time: '09:00',
                      end_time: '18:00',
                      updated_at: '2017-01-17T16:41:08+00:00',
                      status: 'confirmed',
                      break: 50,
                      comment: 'I was super productive',
                      is_holiday: false,
                      is_on_time_off: 'false,',
                      project: {
                        id: 567,
                        type: 'Project',
                        attributes: { name: 'A project name', active: true },
                      },
                    },
                  },
                  {
                    id: 1235,
                    type: 'AttendancePeriod',
                    attributes: {
                      employee: 325660,
                      date: '2017-01-18',
                      start_time: '09:30',
                      end_time: '18:30',
                      updated_at: '2017-01-18T16:41:08+01:00',
                      status: 'pending',
                      break: 60,
                      comment: "I wasn't productive",
                      is_holiday: false,
                      is_on_time_off: true,
                      project: null,
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const postCompanyAttendancesRoute = createRoute({
  method: 'post',
  path: '/company/attendances',
  tags: ['Attendances'],
  summary: 'Create an Attendance (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. The endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    body: {
      description: 'List of attendance periods to create',
      content: {
        'application/json': { schema: AttendanceCreateRequestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'attendances[][employee]': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Employee identifier' }),
              'attendances[][date]': z.iso
                .date()
                .openapi({
                  description: 'Attendance date. Format: yyyy-mm-dd',
                  example: '2020-01-31',
                }),
              'attendances[][start_time]': z
                .string()
                .regex(/^\d\d:\d\d$/)
                .openapi({ description: 'Start time. Format: hh:mm', example: '08:00' }),
              'attendances[][end_time]': ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .string()
                  .regex(/^\d\d:\d\d$/)
                  .nullable(),
              )
                .exactOptional()
                .openapi({ description: 'End time. Format: hh:mm', example: '12:00' }),
              'attendances[]break': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(0),
                )
                .openapi({ description: 'Break in minutes' }),
              'attendances[][comment]': z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional comment' }),
              skip_approval: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.',
                }),
              project_id: z
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
                      z.int32(),
                    )
                    .nullable(),
                )
                .exactOptional()
                .openapi({ description: 'The ID of the project', example: 5 }),
            })
            .openapi({
              title: 'Create a New Attendance Period request',
              required: [
                'attendances[][employee]',
                'attendances[][date]',
                'attendances[][start_time]',
                'attendances[]break',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The attendance periods are successfully created',
      content: {
        'application/json': {
          schema: NewAttendancePeriodResponseSchema,
          examples: {
            response: { value: { success: true, data: { id: [1, 2], message: 'success' } } },
          },
        },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: AttendanceCreateUpdate400ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: {
                  code: 400,
                  message: 'Error when trying to insert Attendances periods rows',
                  detailed_message: [
                    {
                      success: true,
                      error_msg: null,
                      id: 1,
                      employee: 1234,
                      date: '2017-01-01',
                      start_time: '09:00',
                      end_time: '18:00',
                      break: 60,
                      comment: '',
                      project_id: 5,
                    },
                    {
                      success: false,
                      error_msg: 'Existing overlapping attendances periods',
                      id: null,
                      employee: 1234,
                      date: '2017-01-01',
                      start_time: '09:00',
                      end_time: '18:00',
                      break: 60,
                      comment: '',
                      project_id: null,
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const deleteCompanyAttendancesIdRoute = createRoute({
  method: 'delete',
  path: '/company/attendances/{id}',
  tags: ['Attendances'],
  summary: 'Delete Attendance by ID (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. It deletes attendance data for the company employees.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'id',
            in: 'path',
            description: 'ID of the attendance period to delete',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      skip_approval: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip_approval',
            in: 'query',
            required: false,
            description:
              'Optional, default value is true. If set to false, the approval status of the attendance period will be "pending" if an approval rule is set for the attendances type. The respective approval flow will be triggered.',
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: DeletedAttendanceResponseSchema,
          examples: {
            response: {
              value: { success: true, data: { message: 'The attendance period was deleted.' } },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: AttendanceDelete400ErrorResponseSchema,
          examples: {
            response: { value: { success: false, error: { code: 400, message: 'Bad Request' } } },
          },
        },
      },
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: Attendance404ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'The attendance period was not found.' },
              },
            },
          },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const patchCompanyAttendancesIdRoute = createRoute({
  method: 'patch',
  path: '/company/attendances/{id}',
  tags: ['Attendances'],
  summary: 'Update Attendance by ID (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. It is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'id',
            in: 'path',
            description: 'ID of the attendance period to update',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      description:
        'Attendance period data to update. At least one of the properties (`date`, `start_time`, `end_time`, `break`, `comment`, `project_id`, `skip_approval`) is required.',
      content: { 'application/json': { schema: AttendanceUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: UpdatedAttendanceResponseSchema,
          examples: {
            response: {
              value: { success: true, data: { message: 'The attendance period was updated.' } },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: AttendanceCreateUpdate400ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: {
                  code: 400,
                  message: 'Error when trying to insert Attendances periods rows.',
                },
              },
            },
          },
        },
      },
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: Attendance404ErrorResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'The attendance period was not found.' },
              },
            },
          },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const getCompanyAttendancesProjectsRoute = createRoute({
  method: 'get',
  path: '/company/attendances/projects',
  tags: ['Projects'],
  summary: 'List Projects (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. Provides a list of all company projects.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of projects returned',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              data: z.array(ProjectSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const postCompanyAttendancesProjectsRoute = createRoute({
  method: 'post',
  path: '/company/attendances/projects',
  tags: ['Projects'],
  summary: 'Create a Project (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. Creates a project into the company account',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ example: 'A project name' }),
              active: z.boolean().default(false).exactOptional().openapi({ example: true }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Project created successfully',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), data: ProjectSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid data was sent',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .object({
                  name: z
                    .array(z.string().openapi({ example: 'Project name cannot be empty' }))
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const deleteCompanyAttendancesProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/company/attendances/projects/{id}',
  tags: ['Projects'],
  summary: 'Delete Project by ID (deprecated)',
  description:
    'This endpoint is deprecated, please use v2. Deletes a project from the company account',
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the project',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Project was successfully deleted' },
    404: {
      description: 'Project does not exist',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .object({
                  code: z.int().exactOptional(),
                  message: z.string().exactOptional().openapi({ example: 'Project 5 not found' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description: 'There are existing attendances for this project',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .object({
                  code: z.int().exactOptional(),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'There are existing attendances for this project.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const patchCompanyAttendancesProjectsIdRoute = createRoute({
  method: 'patch',
  path: '/company/attendances/projects/{id}',
  tags: ['Projects'],
  summary: 'Update Project by ID (deprecated)',
  description: 'This endpoint is deprecated, please use v2. Updates a project with the given data.',
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the project',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ example: 'A project name' }),
              active: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Marks the availability of the project', example: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Project updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), data: ProjectSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid data was sent',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .object({
                  active: z
                    .array(
                      z.string().openapi({ example: 'Active field needs to be of type boolean' }),
                    )
                    .exactOptional(),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'This field would be included only if the new name is already used by another project',
                      example: 'Project name already exists',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Project not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              message: z.string().exactOptional().openapi({ example: 'Project 5 not found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const getCompanyTimeOffTypesRoute = createRoute({
  method: 'get',
  path: '/company/time-off-types',
  tags: ['Absences'],
  summary: 'List Time-Off Types',
  description:
    "Provides a list of absence types for absences **time unit** set to either **days** or **hours**. For example 'Paid vacation', 'Parental leave' or 'Home office'.",
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
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
          z.int().min(1),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Pagination attribute to limit how many records will be returned per page',
            schema: { type: 'integer', minimum: 1, default: 200 },
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
            name: 'offset',
            in: 'query',
            required: false,
            description:
              'Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.',
            schema: { type: 'integer', minimum: 0, default: 0 },
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
              success: z.boolean().exactOptional(),
              data: z.array(TimeOffTypeResourceSchema).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                success: true,
                data: [
                  {
                    type: 'TimeOffType',
                    attributes: {
                      id: 1234,
                      name: 'Paid vacation',
                      category: 'paid_vacation',
                      unit: 'day',
                      approval_required: true,
                    },
                  },
                  {
                    type: 'TimeOffType',
                    attributes: {
                      id: 1235,
                      name: 'Home office',
                      category: 'offsite_work',
                      unit: 'hour',
                      approval_required: true,
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyTimeOffsRoute = createRoute({
  method: 'get',
  path: '/company/time-offs',
  tags: ['Absences'],
  summary: 'List Time-Offs',
  description:
    'Fetches absence periods for absences with **time unit** set to **days**. The result can be `paginated` and `filtered` by period and/or specific employee/employees. The result contains a list of absence periods.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    query: z.object({
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: false,
            description:
              'First day of the period to be queried. It is inclusive, so the result starts from and including the provided `start_date`',
            schema: { type: 'string', format: 'date' },
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: false,
            description:
              'Last day of the period to be queried. It is inclusive, so the result ends on `end_date` including absences from the `end_date`',
            schema: { type: 'string', format: 'date' },
          },
        }),
      updated_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_from',
            in: 'query',
            required: false,
            description:
              'Query the periods that created or modified from the date `updated_from`. It is inclusive, so all the periods created or modified from the beginning of the `updated_from` will be included in the results',
            schema: { type: 'string', format: 'date' },
          },
        }),
      updated_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_to',
            in: 'query',
            required: false,
            description:
              'Query the periods that created or modified until the date `updated_to`. It is inclusive, so all the periods created or modified until the end of the `updated_to` will be included in the results',
            schema: { type: 'string', format: 'date' },
          },
        }),
      'employees[]': z
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
            name: 'employees[]',
            in: 'query',
            required: false,
            description:
              "A list of Personio employee ID's to filter the results. The result filters including only absences of provided employees",
            explode: true,
            schema: { type: 'array', items: { type: 'integer' } },
            allowReserved: true,
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
            name: 'limit',
            in: 'query',
            required: false,
            description: 'Pagination attribute to limit the number of absence periods per page',
            schema: { type: 'integer', minimum: 1, default: 200 },
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
            name: 'offset',
            in: 'query',
            required: false,
            description: 'Pagination attribute to identify which page number you are requesting',
            schema: { type: 'integer', minimum: 0, default: 0 },
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
                success: true,
                metadata: { total_elements: 1, current_page: 1, total_pages: 1 },
                data: [
                  {
                    type: 'TimeOffPeriod',
                    attributes: {
                      id: 12345,
                      status: 'approved',
                      start_date: '2017-12-27T00:00:00+0100',
                      end_date: '2017-12-29T00:00:00+0100',
                      days_count: 3,
                      half_day_start: false,
                      half_day_end: false,
                      time_off_type: {
                        type: 'TimeOffType',
                        attributes: { id: 54321, name: 'Vacation', category: 'offsite_work' },
                      },
                      employee: {
                        type: 'Employee',
                        attributes: {
                          id: { label: 'id', value: 4567, type: 'integer', universal_id: 'id' },
                          first_name: {
                            label: 'First name',
                            value: 'Michael',
                            type: 'standard',
                            universal_id: 'first_name',
                          },
                          last_name: {
                            label: 'Last name',
                            value: 'Miller',
                            type: 'standard',
                            universal_id: 'last_name',
                          },
                          email: {
                            label: 'Email',
                            value: 'michael.miller@demo.com',
                            type: 'standard',
                            universal_id: 'email',
                          },
                        },
                      },
                      certificate: { status: 'not-required' },
                      created_at: '2017-01-17T10:32:18+0100',
                      updated_at: '2017-01-17T10:32:18+0100',
                    },
                  },
                ],
                offset: '0,',
                limit: '200,',
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const postCompanyTimeOffsRoute = createRoute({
  method: 'post',
  path: '/company/time-offs',
  tags: ['Absences'],
  summary: 'Create a Time-Off',
  description: 'Adds absence data for absence types with **time unit** set to **days**.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    body: {
      description: 'Absence data',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              employee_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Employee identifier' }),
              time_off_type_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Time-off type identifier' }),
              start_date: z.iso
                .date()
                .openapi({
                  description: 'Absence start date. Format: yyyy-mm-dd',
                  example: '2020-01-31',
                }),
              end_date: z.iso
                .date()
                .openapi({
                  description: 'Absence end date. Format: yyyy-mm-dd',
                  example: '2020-01-31',
                }),
              half_day_start: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  example: false,
                  description: 'Whether the start date is a half-day off.',
                }),
              half_day_end: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  example: false,
                  description: 'Whether the end date is a half-day off.',
                }),
              comment: z
                .string()
                .exactOptional()
                .openapi({ example: 'Some Comment', description: 'Optional comment' }),
              skip_approval: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.',
                }),
            })
            .openapi({
              title: 'Create time-off periods',
              required: [
                'employee_id',
                'time_off_type_id',
                'start_date',
                'end_date',
                'half_day_start',
                'half_day_end',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The absence period is successfully created',
      content: {
        'application/json': {
          schema: z
            .object({ data: AbsencePeriodResponseSchema.exactOptional() })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                success: true,
                data: {
                  type: 'TimeOffPeriod',
                  attributes: {
                    id: 12345,
                    status: 'approved',
                    start_date: '2017-12-27T00:00:00+0100',
                    end_date: '2017-12-29T00:00:00+0100',
                    days_count: 3,
                    half_day_start: false,
                    half_day_end: false,
                    time_off_type: {
                      type: 'TimeOffType',
                      attributes: { id: 54321, name: 'Vacation', category: 'offsite_work' },
                    },
                    employee: {
                      type: 'Employee',
                      attributes: {
                        id: { label: 'id', value: 4567, type: 'integer', universal_id: 'id' },
                        first_name: {
                          label: 'First name',
                          value: 'Michael',
                          type: 'standard',
                          universal_id: 'first_name',
                        },
                        last_name: {
                          label: 'Last name',
                          value: 'Miller',
                          type: 'standard',
                          universal_id: 'last_name',
                        },
                        email: {
                          label: 'Email',
                          value: 'michael.miller@demo.com',
                          type: 'standard',
                          universal_id: 'email',
                        },
                      },
                    },
                    certificate: { status: 'not-required' },
                    created_at: '2017-01-17T10:32:18+0100',
                    created_by: 'API',
                    updated_at: '2017-01-17T10:32:18+0100',
                  },
                },
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
          schema: ErrorInsertingAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 400, message: 'Error when trying to insert absence period' },
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
              value: { success: false, error: { code: 0, message: 'Time-off type not found.' } },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation error',
      content: {
        'application/json': {
          schema: ErrorCreateAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: {
                  code: 0,
                  message: 'The given data failed to pass validation.',
                  error_data: '{...}',
                },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyTimeOffsIdRoute = createRoute({
  method: 'get',
  path: '/company/time-offs/{id}',
  tags: ['Absences'],
  summary: 'Get Time-Off by ID',
  description: 'Gets an absence period for absences with **time unit** set to **days**.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'Numeric `id` of the absence period',
            schema: { type: 'integer', format: 'int32' },
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
                success: true,
                data: {
                  type: 'TimeOffPeriod',
                  attributes: {
                    id: 12345,
                    status: 'approved',
                    start_date: '2017-12-27T00:00:00+0100',
                    end_date: '2017-12-29T00:00:00+0100',
                    days_count: 3,
                    half_day_start: false,
                    half_day_end: false,
                    time_off_type: {
                      type: 'TimeOffType',
                      attributes: { id: 45678, name: 'Vacation', category: 'offsite_work' },
                    },
                    employee: {
                      type: 'Employee',
                      attributes: {
                        id: { label: 'id', value: 2367, type: 'integer', universal_id: 'id' },
                        first_name: {
                          label: 'First name',
                          value: 'Michael',
                          type: 'standard',
                          universal_id: 'first_name',
                        },
                        last_name: {
                          label: 'Last name',
                          value: 'Miller',
                          type: 'standard',
                          universal_id: 'last_name',
                        },
                        email: {
                          label: 'Email',
                          value: 'michael.miller@demo.com',
                          type: 'standard',
                          universal_id: 'email',
                        },
                      },
                    },
                    certificate: { status: 'not-required' },
                    created_at: '2017-01-17T10:32:18+0100',
                    updated_at: '2017-01-17T10:32:18+0100',
                  },
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: ErrorAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'The absence period was not found.' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const deleteCompanyTimeOffsIdRoute = createRoute({
  method: 'delete',
  path: '/company/time-offs/{id}',
  tags: ['Absences'],
  summary: 'Delete Time-Off by ID',
  description: 'Deletes absence period data for absence types with **time unit** set to **days**.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
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
            name: 'id',
            in: 'path',
            description: 'ID of the absence period to delete',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: DeletedAbsenceResponseSchema,
          examples: {
            response: {
              value: { success: true, data: { message: 'The absence period was deleted.' } },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request response',
      content: {
        'application/json': {
          schema: ErrorAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 400, message: 'The absence period id is invalid.' },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: ErrorAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'The absence period was not found.' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyAbsencePeriodsRoute = createRoute({
  method: 'get',
  path: '/company/absence-periods',
  tags: ['Absences'],
  summary: 'List Absence Periods',
  description:
    'Fetches absence periods for absences with **time unit** set to **hours**. The result can be `paginated` and `filtered` by period and/or specific employee/employees. The result contains a list of hourly absence periods.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    query: z.object({
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: false,
            description:
              'When both start_date and end_date values are provided, the list of absences returned is a set that has all absences that intersects the window expressed as [start_date, end_date]. When either value is unspecified, the list of absences returned are unbounded in the direction of the unspecified value.',
            schema: { type: 'string', format: 'date' },
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: false,
            description:
              'When both start_date and end_date values are provided, the list of absences returned is a set that has all absences that intersects the window expressed as [start_date, end_date]. When either value is unspecified, the list of absences returned are unbounded in the direction of the unspecified value.',
            schema: { type: 'string', format: 'date' },
          },
        }),
      updated_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_from',
            in: 'query',
            required: false,
            description:
              'Filter by periods that were created or modified from the date updated_from. It is inclusive, so all the periods created or modified from the beginning of the updated_from will be included in the results.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      updated_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_to',
            in: 'query',
            required: false,
            description:
              'Filter by periods that were created or modified until the date updated_to. It is inclusive, so all the periods created or modified until the end of the updated_to will be included in the results.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'employees[]': z
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
            name: 'employees[]',
            in: 'query',
            required: false,
            description:
              "A list of Personio employee ID's to filter the results. The result filters including only absences of provided employees",
            explode: true,
            schema: { type: 'array', items: { type: 'integer' } },
            allowReserved: true,
          },
        }),
      'absence_types[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'absence_types[]',
            in: 'query',
            required: false,
            description:
              'A list of Personio absence type IDs to filter the results. The result filters including only absences of provided absence types.',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
            allowReserved: true,
          },
        }),
      'absence_periods[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'absence_periods[]',
            in: 'query',
            required: false,
            description:
              'A list of Personio absence period IDs to filter the results. The result filters including only absences containing the provided ids.',
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
            allowReserved: true,
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
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'Pagination attribute to limit how many absence periods are returned per page.',
            schema: { type: 'integer', minimum: 1, default: 200 },
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
            name: 'offset',
            in: 'query',
            required: false,
            description:
              'Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.',
            schema: { type: 'integer', minimum: 0, default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: HourlyAbsencePeriodsResponseSchema,
          examples: {
            response: {
              value: {
                success: true,
                metadata: { total_elements: 1, current_page: 1, total_pages: 1 },
                data: [
                  {
                    type: 'AbsencePeriod',
                    attributes: {
                      id: '9bba303f-0fbc-4514-9958-0befa21923fb',
                      measurement_unit: 'hour',
                      effective_duration: 960,
                      employee: {
                        type: 'Employee',
                        attributes: {
                          id: { label: 'id', value: 2367, type: 'integer', universal_id: 'id' },
                          first_name: {
                            label: 'First name',
                            value: 'Michael',
                            type: 'standard',
                            universal_id: 'first_name',
                          },
                          last_name: {
                            label: 'Last name',
                            value: 'Miller',
                            type: 'standard',
                            universal_id: 'last_name',
                          },
                          email: {
                            label: 'Email',
                            value: 'michael.miller@demo.com',
                            type: 'standard',
                            universal_id: 'email',
                          },
                        },
                      },
                      absence_type: {
                        type: 'AbsenceType',
                        attributes: {
                          id: '9bba303f-0fbc-4514-9958-0befa21923fb',
                          name: 'Absence Type Name',
                          time_off_type_id: 45678,
                        },
                      },
                      certificate: { status: 'not-required' },
                      start: '2022-05-31T22:00:00.0Z',
                      end: '2022-06-02T22:00:00.0Z',
                      half_day_start: true,
                      half_day_end: false,
                      comment: 'this is a comment',
                      origin: 'web',
                      status: 'approved',
                      created_by: 1,
                      created_at: '2022-06-20T14:29:56.510Z',
                      updated_at: '2022-06-20T14:29:56.510Z',
                      approved_at: '2022-06-20T14:29:56.510Z',
                      breakdowns: [
                        { date: '2022-06-01', effective_duration: 480 },
                        { date: '2022-06-02', effective_duration: 480 },
                      ],
                    },
                  },
                ],
                offset: '0,',
                limit: '200,',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: { 'problem+json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'AbsenceType Not Found',
      content: {
        'problem+json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .object({
                  code: z.int().exactOptional().openapi({ example: 404 }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'models.absence-types.not-found' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: { 'problem+json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const postCompanyAbsencePeriodsRoute = createRoute({
  method: 'post',
  path: '/company/absence-periods',
  tags: ['Absences'],
  summary: 'Create an Absence Period',
  description:
    'Adds absence data for absence types with **time unit** set to **hours**. Note that creating periods for absence types with certificate requirement enabled is not supported!',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    body: {
      description: 'Absence data',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              employee_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Employee identifier', example: 10735 }),
              time_off_type_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Time-off type identifier', example: 10735 }),
              start_date: z.iso
                .date()
                .openapi({
                  description: 'Absence start date. Format: yyyy-mm-dd',
                  example: '2020-01-31',
                }),
              end_date: z.iso
                .date()
                .openapi({
                  description: 'Absence end date. Format: yyyy-mm-dd',
                  example: '2020-01-31',
                }),
              start_time: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description:
                    'Absence start time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)',
                  example: '03:00',
                }),
              end_time: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description:
                    'Absence end time. Format: HH:mm (hours and minutes) and only required if the start_date and end_date are the same (partial-day absence)',
                  example: '15:00',
                }),
              half_day_start: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'Whether the start date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)',
                }),
              half_day_end: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'Whether the end date is a half-day off, only considered if the start_date and end_date are not the same (more than one day absence)',
                }),
              comment: z
                .string()
                .exactOptional()
                .openapi({ example: 'Some Comment', description: 'Optional comment' }),
              skip_approval: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  example: false,
                  description:
                    'Optional, default value is true. If set to false, the approval status of the absence request will be "pending" if an approval rule is set for the absence type in Personio. The respective approval flow will be triggered.',
                }),
            })
            .openapi({
              title: 'Create Absence periods with **time unit** set to **hours**',
              required: ['employee_id', 'time_off_type_id', 'start_date', 'end_date'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The absence period was successfully created',
      content: {
        'application/json': {
          schema: z
            .object({ data: HourlyAbsencePeriodResponseSchema.exactOptional() })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                success: true,
                data: [
                  {
                    type: 'AbsencePeriod',
                    attributes: {
                      id: '9bba303f-0fbc-4514-9958-0befa21923fb',
                      measurement_unit: 'hour',
                      effective_duration: 960,
                      employee: {
                        type: 'Employee',
                        attributes: {
                          id: { label: 'id', value: 2367, type: 'integer', universal_id: 'id' },
                          first_name: {
                            label: 'First name',
                            value: 'Michael',
                            type: 'standard',
                            universal_id: 'first_name',
                          },
                          last_name: {
                            label: 'Last name',
                            value: 'Miller',
                            type: 'standard',
                            universal_id: 'last_name',
                          },
                          email: {
                            label: 'Email',
                            value: 'michael.miller@demo.com',
                            type: 'standard',
                            universal_id: 'email',
                          },
                        },
                      },
                      absence_type: {
                        type: 'AbsenceType',
                        attributes: {
                          id: '9bba303f-0fbc-4514-9958-0befa21923fb',
                          name: 'Absence Type Name',
                          time_off_type_id: 45678,
                        },
                      },
                      certificate: { status: 'not-required' },
                      start: '2022-05-31T22:00:00.0Z',
                      end: '2022-06-02T22:00:00.0Z',
                      half_day_start: true,
                      half_day_end: false,
                      comment: 'this is a comment',
                      origin: 'web',
                      status: 'approved',
                      timezone: 'Europe/Berlin',
                      created_by: 1,
                      created_at: '2022-06-20T14:29:56.510Z',
                      updated_at: '2022-06-20T14:29:56.510Z',
                      approved_at: '2022-06-20T14:29:56.510Z',
                      breakdowns: [
                        { date: '2022-06-01', effective_duration: 480 },
                        { date: '2022-06-02', effective_duration: 480 },
                      ],
                    },
                  },
                ],
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
          schema: ErrorInsertingAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 400, message: 'Error when trying to insert absence period' },
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
              value: { success: false, error: { code: 0, message: 'Absence type not found.' } },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation error',
      content: {
        'application/json': {
          schema: ErrorCreateAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: {
                  code: 0,
                  message: 'The given data failed to pass validation.',
                  error_data: '{...}',
                },
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            response: {
              value: { success: false, error: { code: 0, message: 'Something went wrong' } },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const deleteCompanyAbsencePeriodsIdRoute = createRoute({
  method: 'delete',
  path: '/company/absence-periods/{id}',
  tags: ['Absences'],
  summary: 'Delete Absence Period by ID',
  description: 'Deletes absence period data for absence types with **time unit** set to **hours**.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the absence period to delete',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '61fe126b-a7b3-449a-b5ee-3865a6fcc546',
            },
          },
          example: '61fe126b-a7b3-449a-b5ee-3865a6fcc546',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: DeletedAbsenceResponseSchema,
          examples: {
            response: {
              value: { success: true, data: { message: 'The absence period was deleted.' } },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request response',
      content: {
        'application/json': {
          schema: ErrorAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 400, message: 'The absence period id is invalid.' },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found response',
      content: {
        'application/json': {
          schema: ErrorAbsenceResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { code: 404, message: 'The absence period was not found.' },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyDocumentCategoriesRoute = createRoute({
  method: 'get',
  path: '/company/document-categories',
  tags: ['Documents'],
  summary: 'List Document Categories',
  description:
    'This endpoint is responsible for fetching all document categories of the company. The result contains a list of document categories.',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: DocumentCategoriesResponseSchema,
          examples: {
            response: {
              value: {
                success: true,
                data: [
                  {
                    id: 1,
                    type: 'DocumentCategory',
                    attributes: { name: 'Certificates of employment' },
                  },
                  { id: 2, type: 'DocumentCategory', attributes: { name: 'Other documents' } },
                ],
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const postCompanyDocumentsRoute = createRoute({
  method: 'post',
  path: '/company/documents',
  tags: ['Documents'],
  summary: 'Upload Document',
  description:
    'This endpoint is responsible for uploading documents for the company employees.\nThe Documents endpoint has a rate limit of 60 requests per minute.\n',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    body: {
      description: 'Data necessary for document upload.',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              title: z
                .string()
                .openapi({
                  description: 'Title of the document. Maximum length is 255 characters.',
                }),
              comment: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional comment that can be added to the uploaded document.',
                }),
              employee_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Employee identifier' }),
              category_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Document Category identifier' }),
              date: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description:
                    'Optional date can be added to the uploaded document. Must follow the format: Y-m-d',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The document that shall be uploaded to an employees profile. Maximum file size is 30MB.',
                }),
            })
            .openapi({ required: ['title', 'employee_id', 'category_id', 'file'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The document was successfully uploaded to the employees profile',
      content: {
        'application/json': {
          schema: DocumentUploadSuccessResponseSchema,
          examples: {
            response: {
              value: {
                success: true,
                data: {
                  id: 1,
                  type: 'Document',
                  attributes: {
                    title: 'Personio',
                    date: '2022-02-02',
                    comment: 'Enable better organisations',
                    employee: {
                      type: 'Employee',
                      attributes: {
                        id: { label: 'ID', value: 1, type: 'integer', universal_id: 'id' },
                        first_name: {
                          label: 'First name',
                          value: 'Demo',
                          type: 'standard',
                          universal_id: 'first_name',
                        },
                        last_name: {
                          label: 'Last name',
                          value: 'Account',
                          type: 'standard',
                          universal_id: 'last_name',
                        },
                        email: {
                          label: 'Email',
                          value: 'demo.account@demo.de',
                          type: 'standard',
                          universal_id: 'email',
                        },
                      },
                    },
                    category: {
                      id: 1,
                      type: 'DocumentCategory',
                      attributes: { name: 'Other documents' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    404: {
      description:
        'This status code is returned if the provided employee_id or category_id are not found within the company.',
      content: {
        'application/json': {
          schema: DocumentUploadFailedWithBadDocumentCategoryResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: { message: 'No query results for model [DocumentCategory] 1', code: 0 },
              },
            },
          },
        },
      },
    },
    422: {
      description:
        'This status code is returned if the provided request parameters cannot be processed or if the parameters are invalid.',
      content: {
        'application/json': {
          schema: DocumentUploadFailedWithUnsupportedFileTypeResponseSchema,
          examples: {
            response: {
              value: {
                success: false,
                error: {
                  message: 'The given data was invalid.',
                  code: 0,
                  error_data: {
                    file: [
                      'The file must be a file of type: pdf, docx, doc, jpg, zip, png, txt, jpeg, odt, xlsx, rtf, htm, xls, p7s, pptx, pages, rar, ppt, gif, tif, html, msg, asc, tiff, wps, bmp, 7z, csv, ics, vcf, dotx, numbers, eps, gz, ods, otf, odp, odg, rtfd, txz, webarchive, xml, xps, md, fax.',
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
})

export const getCompanyCustomReportsReportsRoute = createRoute({
  method: 'get',
  path: '/company/custom-reports/reports',
  tags: ['Custom Reports'],
  summary: 'List Custom Reports',
  description:
    '> 🚧 This endpoint will be deprecated, please use [v2](https://developer.personio.de/reference/listcompanyreports). See the [deprecation announcement](https://developer.personio.de/changelog/deprecation-of-custom-reports-api-v1) for the timeline.\n\nThis endpoint provides you with metadata about existing custom reports in your Personio account, such as report name, report type, report date / timeframe.\n',
  operationId: 'listReports',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    query: z.object({
      report_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'report_ids',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            example: 'eea50309-d1b1-47d6-bc7e-27de7a3ab491, baa50309-d1b1-47d6-bc76-27de7a3ab491',
            required: false,
            description: "A list of report ID's to filter the results.",
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: { type: 'string' },
            example: 'up_to_date',
            required: false,
            description: 'The status of the report to filter the results.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: PublicListReportsResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: PublicAPIExceptionSchema } },
    },
  },
})

export const getCompanyCustomReportsReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/company/custom-reports/reports/{report_id}',
  tags: ['Custom Reports'],
  summary: 'Get Custom Report by ID',
  description:
    '> 🚧 This endpoint will be deprecated, please use [v2](https://developer.personio.de/reference/getreport). See the [deprecation announcement](https://developer.personio.de/changelog/deprecation-of-custom-reports-api-v1) for the timeline.\n\nThis endpoint provides you with the data of an existing Custom Report.\n',
  operationId: 'listReportItems',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: {
            name: 'report_id',
            in: 'path',
            schema: { type: 'string' },
            example: 'eea50309-d1b1-47d6-bc7e-27de7a3ab491',
            description: 'The ID of the report to filter the result.',
            required: true,
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            description: 'locale used to translate localized fields.',
            schema: { type: 'string' },
            example: 'de',
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
            description: 'Pagination parameter to identify the page to return.',
            schema: { type: 'integer' },
            example: 1,
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Pagination parameter to limit the number of employees returned per page.',
            schema: { type: 'integer' },
            example: 10,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: PublicReportResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: PublicAPIExceptionSchema } },
    },
    404: {
      description: 'Report not found',
      content: { 'application/json': { schema: PublicAPIExceptionSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: PublicAPIExceptionSchema } },
    },
  },
})

export const getCompanyCustomReportsColumnsRoute = createRoute({
  method: 'get',
  path: '/company/custom-reports/columns',
  tags: ['Custom Reports'],
  summary: 'List Custom Report Column Labels',
  description:
    '> 🚧 This endpoint will be deprecated, please use [v2](https://developer.personio.de/reference/listreportsattributes). See the [deprecation announcement](https://developer.personio.de/changelog/deprecation-of-custom-reports-api-v1) for the timeline.\n\nThis endpoint provides human-readable labels for report table columns. It is particularly important if you get a report with custom attributes or absence data to match the column IDs to the translation.\n',
  operationId: 'listColumns',
  request: {
    headers: z.object({
      'X-Personio-Partner-ID': XPersonioPartnerIDParamsSchema,
      'X-Personio-App-ID': XPersonioAppIDParamsSchema,
    }),
    query: z.object({
      columns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'columns',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            example: 'first_name,last_name',
            description: 'The columns to filter the results.',
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            schema: { type: 'string' },
            example: 'en',
            description: 'locale used to translate localized fields.',
            required: false,
          },
        }),
      report_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'report_id',
            in: 'query',
            schema: { type: 'string' },
            example: 'eea50309-d1b1-47d6-bc7e-27de7a3ab491',
            description:
              'The ID of the report to filter the result of the columns. If no ID is passed, all columns for the company are returned.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: PublicListColumnsResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: PublicAPIExceptionSchema } },
    },
  },
})
