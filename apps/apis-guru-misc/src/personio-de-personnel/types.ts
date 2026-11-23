type AttendancePeriodsResponse = {
  data: {
    attributes: {
      break: number
      comment: string
      date: string
      employee: number
      end_time: string
      is_holiday: boolean
      is_on_time_off: boolean
      start_time: string
    }[]
    id: number
    type: string
  }[]
  success: boolean
  limit?: number | undefined
  offset?: number | undefined
}
type NewAttendancePeriodRequest = {
  attendances?:
    | {
        break: number
        comment: string
        date: string
        employee: number
        end_time: string
        start_time: string
      }[]
    | undefined
}
type NewAttendancePeriodResponse = {
  data: { id?: number[] | undefined; message?: string | undefined }
  success: boolean
}
type DetailedErrorResponse = {
  error: {
    code?: number | undefined
    detailed_message?:
      | {
          break?: number | undefined
          comment?: string | undefined
          date?: string | undefined
          employee?: number | undefined
          end_time?: string | undefined
          error_msg?: string | undefined
          id?: number | undefined
          start_time?: string | undefined
          success?: boolean | undefined
        }[]
      | undefined
    message?: string | undefined
  }
  success: boolean
}
type Response = { data: { [x: string]: unknown }; success: boolean }
type ErrorResponse = {
  error: { code?: number | undefined; message?: string | undefined }
  success: boolean
}
type UpdateAttendancePeriodRequest = {
  break?: number | undefined
  comment?: string | undefined
  date?: string | undefined
  end_time?: string | undefined
  start_time?: string | undefined
}
type AbsenceEntitlement = {
  label: string
  value: {
    attributes?:
      | { entitlement?: number | undefined; id?: number | undefined; name?: string | undefined }
      | undefined
    type?: 'TimeOffType' | undefined
  }[]
}
type Attribute = { label: string; value: { [x: string]: unknown } }
type CostCenters = { label: string; value: { [x: string]: unknown } }
type Department = { label: string; value: { [x: string]: unknown } }
type HolidayCalendar = { label: string; value: { [x: string]: unknown } }
type Office = { label: string; value: { [x: string]: unknown } }
type Supervisor = { label: string; value: { [x: string]: unknown } }
type WorkSchedule = { label: string; value: { [x: string]: unknown } }
type EmployeesResponse = {
  data: {
    attributes: {
      absence_entitlement?: AbsenceEntitlement | undefined
      contract_end_date?: Attribute | undefined
      cost_centers?: CostCenters | undefined
      created_at?: Attribute | undefined
      department?: Department | undefined
      email?: Attribute | undefined
      employment_type?: Attribute | undefined
      first_name?: Attribute | undefined
      fix_salary?: Attribute | undefined
      gender?: Attribute | undefined
      hire_date?: Attribute | undefined
      holiday_calendar?: HolidayCalendar | undefined
      hourly_salary?: Attribute | undefined
      id?: Attribute | undefined
      last_name?: Attribute | undefined
      office?: Office | undefined
      position?: Attribute | undefined
      probation_period_end?: Attribute | undefined
      status?: Attribute | undefined
      supervisor?: Supervisor | undefined
      termination_date?: Attribute | undefined
      termination_reason?: Attribute | undefined
      termination_type?: Attribute | undefined
      vacation_day_balance?: Attribute | undefined
      weekly_working_hours?: Attribute | undefined
      work_schedule?: WorkSchedule | undefined
    }[]
    type: string
  }[]
  success: boolean
}
type EmployeeResponse = {
  data: {
    attributes: {
      absence_entitlement?: AbsenceEntitlement | undefined
      contract_end_date?: Attribute | undefined
      cost_centers?: CostCenters | undefined
      created_at?: Attribute | undefined
      department?: Department | undefined
      email?: Attribute | undefined
      employment_type?: Attribute | undefined
      first_name?: Attribute | undefined
      fix_salary?: Attribute | undefined
      gender?: Attribute | undefined
      hire_date?: Attribute | undefined
      holiday_calendar?: HolidayCalendar | undefined
      hourly_salary?: Attribute | undefined
      id?: Attribute | undefined
      last_name?: Attribute | undefined
      office?: Office | undefined
      position?: Attribute | undefined
      probation_period_end?: Attribute | undefined
      status?: Attribute | undefined
      supervisor?: Supervisor | undefined
      termination_date?: Attribute | undefined
      termination_reason?: Attribute | undefined
      termination_type?: Attribute | undefined
      vacation_day_balance?: Attribute | undefined
      weekly_working_hours?: Attribute | undefined
      work_schedule?: WorkSchedule | undefined
    }[]
    type: string
  }
  success: boolean
}
type TimeOffTypeResource = {
  attributes?: { name?: string | undefined } | undefined
  id?: number | undefined
  type?: 'TimeOffType' | undefined
}
type AbsencePeriodsResponse = {
  data: {
    attributes: {
      certificate?: { status?: string | undefined } | undefined
      created_at?: string | undefined
      days_count?: number | undefined
      employee?:
        | {
            attributes?:
              | {
                  email?: string | undefined
                  first_name?: string | undefined
                  id?: number | undefined
                  last_name?: string | undefined
                }[]
              | undefined
            type?: string | undefined
          }
        | undefined
      end_date?: string | undefined
      half_day_end?: number | undefined
      half_day_start?: number | undefined
      id?: number | undefined
      start_date?: string | undefined
      status?: string | undefined
      time_off_type?:
        | {
            attributes?: { id?: number | undefined; name?: string | undefined }[] | undefined
            type?: string | undefined
          }
        | undefined
    }[]
    type: string
  }
  success: boolean
}
type CreateTimeOffPeriodRequest = {
  comment?: string | undefined
  employee_id: number
  end_date: string
  half_day_end: boolean
  half_day_start: boolean
  start_date: string
  time_off_type_id: number
}
type CreateTimeOffPeriodResponse = {
  data: {
    attributes?:
      | {
          certificate?: { status?: string | undefined } | undefined
          created_at?: string | undefined
          days_count?: number | undefined
          employee?:
            | {
                attributes?:
                  | {
                      email?: string | undefined
                      first_name?: string | undefined
                      id?: number | undefined
                      last_name?: string | undefined
                    }[]
                  | undefined
                type?: string | undefined
              }
            | undefined
          end_date?: string | undefined
          half_day_end?: number | undefined
          half_day_start?: number | undefined
          id?: number | undefined
          start_date?: string | undefined
          status?: string | undefined
          time_off_type?:
            | {
                attributes?: { id?: number | undefined; name?: string | undefined }[] | undefined
                type?: string | undefined
              }
            | undefined
        }
      | undefined
    type?: 'TimeOffPeriod' | undefined
  }
  success: boolean
}
type AbsencePeriodResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/company/attendances': {
      $get: {
        input: {
          query: {
            start_date: string
            end_date: string
            updated_from?: string | undefined
            updated_to?: string | undefined
            employees?: number[] | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: AttendancePeriodsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: NewAttendancePeriodRequest }
            output: NewAttendancePeriodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NewAttendancePeriodRequest }
            output: DetailedErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/company/attendances/:id': {
      $delete:
        | { input: { param: { id: number } }; output: Response; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & { json: UpdateAttendancePeriodRequest }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UpdateAttendancePeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/employees': {
      $get: { input: {}; output: EmployeesResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: {
          json: {
            'employee[department]'?: string | undefined
            'employee[email]': string
            'employee[first_name]': string
            'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
            'employee[hire_date]'?: string | undefined
            'employee[last_name]': string
            'employee[position]'?: string | undefined
            'employee[weekly_hours]'?: number | undefined
          }
        } & {
          form: {
            'employee[department]'?: string | undefined
            'employee[email]': string
            'employee[first_name]': string
            'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
            'employee[hire_date]'?: string | undefined
            'employee[last_name]': string
            'employee[position]'?: string | undefined
            'employee[weekly_hours]'?: number | undefined
          }
        }
        output: { data: { [x: string]: unknown }; success: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/company/employees/:employee_id': {
      $get: {
        input: { param: { employee_id: number } }
        output: EmployeeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/company/employees/:employee_id/profile-picture/:width': {
      $get: {
        input: { param: { employee_id: number; width: number } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/company/time-off-types': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: { data?: TimeOffTypeResource[] | undefined; success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/company/time-offs': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            updated_from?: string | undefined
            updated_to?: string | undefined
            employees?: number[] | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: AbsencePeriodsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateTimeOffPeriodRequest }
            output: { data?: CreateTimeOffPeriodResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateTimeOffPeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateTimeOffPeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateTimeOffPeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/company/time-offs/:id': {
      $delete:
        | { input: { param: { id: number } }; output: Response; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { id: number } }
        output: AbsencePeriodResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
