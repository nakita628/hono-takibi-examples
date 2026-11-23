type TypeEnum = 'standard' | 'date' | 'integer' | 'decimal' | 'list' | 'link' | 'tags' | 'multiline'
type ShortEmployee = {
  type?: string | undefined
  attributes?:
    | {
        id?:
          | {
              label?: { [x: string]: unknown } | undefined
              value?: { [x: string]: unknown } | undefined
              type?: TypeEnum | undefined
              universal_id?: { [x: string]: unknown } | undefined
            }
          | undefined
        first_name?:
          | {
              label?: { [x: string]: unknown } | undefined
              value?: { [x: string]: unknown } | undefined
              type?: TypeEnum | undefined
              universal_id?: { [x: string]: unknown } | undefined
            }
          | undefined
        last_name?:
          | {
              label?: { [x: string]: unknown } | undefined
              value?: { [x: string]: unknown } | undefined
              type?: TypeEnum | undefined
              universal_id?: { [x: string]: unknown } | undefined
            }
          | undefined
        email?:
          | {
              label?: { [x: string]: unknown } | undefined
              value?: { [x: string]: unknown } | undefined
              type?: TypeEnum | undefined
              universal_id?: { [x: string]: unknown } | undefined
            }
          | undefined
      }
    | undefined
}
type Supervisor = { label?: string | undefined; value?: ShortEmployee | undefined }
type Office = {
  label?: { [x: string]: unknown } | undefined
  value?:
    | {
        type?: string | undefined
        attributes?: { name?: { [x: string]: unknown } | undefined } | undefined
      }
    | undefined
  type?: TypeEnum | undefined
  universal_id?: { [x: string]: unknown } | undefined
}
type Department = {
  label?: { [x: string]: unknown } | undefined
  value?:
    | { type?: string | undefined; attributes?: { id: number; name: string } | undefined }
    | undefined
  type?: TypeEnum | undefined
  universal_id?: { [x: string]: unknown } | undefined
}
type CostCenters = {
  label?: { [x: string]: unknown } | undefined
  value?:
    | {
        type?: { [x: string]: unknown } | undefined
        attributes?:
          | {
              name?: { [x: string]: unknown } | undefined
              id?: number | undefined
              percentage?: number | undefined
            }
          | undefined
      }[]
    | undefined
  type?: TypeEnum | undefined
  universal_id?: { [x: string]: unknown } | undefined
}
type HolidayCalendar = {
  label?: { [x: string]: unknown } | undefined
  value?:
    | {
        type?: { [x: string]: unknown } | undefined
        attributes?:
          | {
              id?: number | undefined
              name?: { [x: string]: unknown } | undefined
              country?: { [x: string]: unknown } | undefined
              state?: { [x: string]: unknown } | undefined
            }
          | undefined
      }
    | undefined
  type?: TypeEnum | undefined
  universal_id?: { [x: string]: unknown } | undefined
}
type WorkSchedule = {
  label?: { [x: string]: unknown } | undefined
  value?:
    | {
        type?: { [x: string]: unknown } | undefined
        attributes?:
          | {
              id?: number | undefined
              name?: { [x: string]: unknown } | undefined
              monday?: { [x: string]: unknown } | undefined
              tuesday?: { [x: string]: unknown } | undefined
              wednesday?: { [x: string]: unknown } | undefined
              thursday?: { [x: string]: unknown } | undefined
              friday?: { [x: string]: unknown } | undefined
              saturday?: { [x: string]: unknown } | undefined
              sunday?: { [x: string]: unknown } | undefined
            }
          | undefined
      }
    | undefined
  type?: TypeEnum | undefined
  universal_id?: { [x: string]: unknown } | undefined
}
type AbsenceEntitlement = {
  label: { [x: string]: unknown }
  value: {
    type?: 'TimeOffType' | undefined
    attributes?:
      | {
          id?: number | undefined
          name?: { [x: string]: unknown } | undefined
          entitlement?: { [x: string]: unknown } | undefined
        }
      | undefined
  }[]
}
type Team = {
  label?: { [x: string]: unknown } | undefined
  value?:
    | {
        type?: string | undefined
        attributes?: { name?: { [x: string]: unknown } | undefined } | undefined
      }
    | undefined
  type?: TypeEnum | undefined
  universal_id?: { [x: string]: unknown } | undefined
}
type Employee = {
  id?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  first_name?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  last_name?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  preferred_name?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  email?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  gender?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  status?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  position?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  supervisor?: Supervisor | undefined
  employment_type?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  weekly_working_hours?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  hire_date?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  contract_end_date?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  termination_date?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  termination_type?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  termination_reason?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  probation_period_end?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  created_at?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  last_modified_at?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  subcompany?: Office | undefined
  office?: Office | undefined
  department?: Department | undefined
  cost_centers?: CostCenters | undefined
  holiday_calendar?: HolidayCalendar | undefined
  work_schedule?: WorkSchedule | undefined
  absence_entitlement?: AbsenceEntitlement | undefined
  team?: Team | undefined
  fix_salary?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
        currency?: string | undefined
      }
    | undefined
  fix_salary_interval?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  hourly_salary?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
        currency?: string | undefined
      }
    | undefined
  last_working_day?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  profile_picture?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
  dynamic_21827?:
    | {
        label?: { [x: string]: unknown } | undefined
        value?: { [x: string]: unknown } | undefined
        type?: TypeEnum | undefined
        universal_id?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type EmployeesResponse = {
  success: boolean
  data: { type?: { [x: string]: unknown } | undefined; attributes?: Employee | undefined }[]
  metadata?: { total_elements: number; total_pages: number; current_page: number } | undefined
  offset?: number | undefined
  limit?: number | undefined
}
type EmployeeUpdatedResponse = {
  success?: boolean | undefined
  data?: { id?: number | undefined } | undefined
  meta?: string[] | undefined
}
type EmployeeUpdateErrorResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: string | undefined } | undefined
}
type EmployeeResponse = {
  success: boolean
  data: { type?: { [x: string]: unknown } | undefined; attributes?: Employee | undefined }
}
type Employee404ErrorResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type EmployeeAbsenceBalance = {
  success?: boolean | undefined
  data?:
    | {
        id?: number | undefined
        name?: string | undefined
        category?: string | undefined
        balance?: number | undefined
        available_balance?: number | undefined
      }[]
    | undefined
}
type Attendance = {
  employee?: number | undefined
  date?: string | undefined
  start_time?: string | undefined
  end_time?: (string | null) | undefined
  break?: number | undefined
  comment?: string | undefined
  is_holiday?: boolean | undefined
  is_on_time_off?: boolean | undefined
  status?: 'confirmed' | 'pending' | 'rejected' | undefined
  project?:
    | ({
        id?: number | undefined
        type?: string | undefined
        attributes?: { name?: string | undefined; active?: boolean | undefined } | undefined
      } | null)
    | undefined
}
type AttendancePeriodsResponse = {
  success: boolean
  data: { id: number; type: { [x: string]: unknown }; attributes: Attendance }[]
  metadata?: { total_elements: number; total_pages: number; current_page: number } | undefined
  offset?: number | undefined
  limit?: number | undefined
}
type ErrorResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type NewAttendancePeriodParametersRequest = {
  'attendances[][employee]': number
  'attendances[][date]': string
  'attendances[][start_time]': string
  'attendances[][end_time]'?: (string | null) | undefined
  'attendances[]break': number
  'attendances[][comment]'?: (string | null) | undefined
  skip_approval?: boolean | undefined
  project_id?: (number | null) | undefined
}
type NewAttendancePeriodResponse = {
  success: boolean
  data: { id?: number[] | undefined; message?: { [x: string]: unknown } | undefined }
}
type AttendanceCreateUpdate400ErrorResponse = {
  success?: boolean | undefined
  error?:
    | {
        code?: number | undefined
        message?: string | undefined
        detailed_message?:
          | {
              success?: boolean | undefined
              error_msg?: string | undefined
              id?: (number | null) | undefined
              employee?: number | undefined
              date?: string | undefined
              start_time?: string | undefined
              end_time?: string | undefined
              break?: number | undefined
              comment?: string | undefined
              project_id?: (number | null) | undefined
            }[]
          | undefined
      }
    | undefined
}
type DeletedAttendanceResponse = {
  success?: boolean | undefined
  data?: { message?: { [x: string]: unknown } | undefined } | undefined
}
type AttendanceDelete400ErrorResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type Attendance404ErrorResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type AttendanceUpdateRequest = {
  date?: string | undefined
  start_time?: string | undefined
  end_time?: (string | null) | undefined
  break?: number | undefined
  comment?: (string | null) | undefined
  project_id?: (number | null) | undefined
  skip_approval?: boolean | undefined
}
type UpdatedAttendanceResponse = {
  success?: boolean | undefined
  data?: { message?: { [x: string]: unknown } | undefined } | undefined
}
type Project = {
  id?: number | undefined
  type?: string | undefined
  attributes?:
    | {
        name?: string | undefined
        active?: boolean | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
      }
    | undefined
}
type TimeOffTypeResource = {
  type?: 'TimeOffType' | undefined
  attributes?:
    | {
        id?: number | undefined
        name?: string | undefined
        category?:
          | 'family_care'
          | 'maternity_parental_leave'
          | 'child_care'
          | 'short_time_allowance'
          | 'quarantine'
          | 'irrevocable_exemption'
          | 'sick_leave'
          | 'strike_and_lockout'
          | 'public_duty'
          | 'unpaid_suspension'
          | 'paid_vacation'
          | 'unpaid_vacation'
          | 'unexcused_absence'
          | 'offsite_work'
          | 'other'
          | 'undefined'
          | undefined
        unit?: 'day' | 'hour' | undefined
        approval_required?: boolean | undefined
      }
    | undefined
}
type Absence = {
  id?: number | undefined
  status?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  days_count?: number | undefined
  half_day_start?: boolean | undefined
  half_day_end?: boolean | undefined
  time_off_type?:
    | {
        type?: string | undefined
        attributes?:
          | { id?: number | undefined; name?: string | undefined; category?: string | undefined }
          | undefined
      }
    | undefined
  employee?: ShortEmployee | undefined
  certificate?: { status?: string | undefined } | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  updated_at?: string | undefined
}
type AbsencePeriodsResponse = {
  success: boolean
  data: { type: { [x: string]: unknown }; attributes: Absence }[]
  metadata?: { total_elements: number; total_pages: number; current_page: number } | undefined
  offset?: number | undefined
  limit?: number | undefined
}
type CreateTimeOffPeriodRequest = {
  employee_id: number
  time_off_type_id: number
  start_date: string
  end_date: string
  half_day_start: boolean
  half_day_end: boolean
  comment?: string | undefined
  skip_approval?: boolean | undefined
}
type AbsencePeriodResponse = {
  success: boolean
  data: { type: { [x: string]: unknown }; attributes: Absence }
}
type ErrorInsertingAbsenceResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type ErrorCreateAbsenceResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type DeletedAbsenceResponse = {
  success?: boolean | undefined
  data?: { message?: { [x: string]: unknown } | undefined } | undefined
}
type ErrorAbsenceResponse = {
  success?: boolean | undefined
  error?: { code?: number | undefined; message?: { [x: string]: unknown } | undefined } | undefined
}
type AbsenceType = { id: string; name?: string | undefined; time_off_type_id?: number | undefined }
type AbsencePeriodBreakdown = { date: string; effective_duration: number }
type HourlyAbsence = {
  id?: string | undefined
  measurement_unit?: string | undefined
  effective_duration?: number | undefined
  employee?: ShortEmployee | undefined
  absence_type?: AbsenceType | undefined
  certificate?: { status?: string | undefined } | undefined
  start?: string | undefined
  end?: (string | null) | undefined
  half_day_start?: boolean | undefined
  half_day_end?: boolean | undefined
  comment?: string | undefined
  origin?: string | undefined
  status?: string | undefined
  timezone?: string | undefined
  created_by?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  approved_at?: (string | null) | undefined
  breakdowns?: AbsencePeriodBreakdown[] | undefined
}
type HourlyAbsencePeriodsResponse = {
  success: boolean
  data: { type: { [x: string]: unknown }; attributes: HourlyAbsence }[]
  metadata?: { total_elements: number; total_pages: number; current_page: number } | undefined
  offset?: number | undefined
  limit?: number | undefined
}
type CreateAbsencePeriodRequest = {
  employee_id: number
  time_off_type_id: number
  start_date: string
  end_date: string
  start_time?: string | undefined
  end_time?: string | undefined
  half_day_start?: boolean | undefined
  half_day_end?: boolean | undefined
  comment?: string | undefined
  skip_approval?: boolean | undefined
}
type HourlyAbsencePeriodResponse = {
  success: boolean
  data: { type: { [x: string]: unknown }; attributes: HourlyAbsence }
}
type DocumentCategory = {
  id?: number | undefined
  type?: string | undefined
  attributes?: { name?: string | undefined } | undefined
}
type DocumentCategoriesResponse = {
  success?: boolean | undefined
  data?: DocumentCategory[] | undefined
}
type DocumentUploadRequest = {
  title: string
  comment?: string | undefined
  employee_id: number
  category_id: number
  date?: string | undefined
  file: File
}
type DocumentEmployeeResponseObject = {
  id?:
    | {
        label?: string | undefined
        value?: number | undefined
        type?: string | undefined
        universal_id?: string | undefined
      }
    | undefined
  first_name?:
    | {
        label?: string | undefined
        value?: string | undefined
        type?: string | undefined
        universal_id?: string | undefined
      }
    | undefined
  last_name?:
    | {
        label?: string | undefined
        value?: string | undefined
        type?: string | undefined
        universal_id?: string | undefined
      }
    | undefined
  email?:
    | {
        label?: string | undefined
        value?: string | undefined
        type?: string | undefined
        universal_id?: string | undefined
      }
    | undefined
}
type DocumentUploadSuccessResponse = {
  success?: boolean | undefined
  data?:
    | {
        id?: number | undefined
        type?: string | undefined
        attributes?:
          | {
              title?: string | undefined
              date?: string | undefined
              comment?: string | undefined
              employee?: DocumentEmployeeResponseObject | undefined
              category_id?: DocumentCategory | undefined
            }
          | undefined
      }
    | undefined
}
type DocumentUploadFailedWithBadDocumentCategoryResponse = {
  success?: boolean | undefined
  error?: { message?: string | undefined; code?: number | undefined } | undefined
}
type DocumentUploadFailedWithUnsupportedFileTypeResponse = {
  success?: boolean | undefined
  error?:
    | {
        message?: string | undefined
        code?: number | undefined
        error_data?: { file?: string[] | undefined } | undefined
      }
    | undefined
}
type PublicReportMetaData = {
  total_elements?: number | undefined
  current_page?: number | undefined
  total_pages?: number | undefined
}
type PublicReportAttributes = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  author_first_name?: string | undefined
  author_last_name?: string | undefined
  type?: 'point_in_time' | 'historical_data' | 'timeframe' | undefined
  status?: 'up_to_date' | 'updating' | 'update_failed' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  data_refreshed_at?: string | undefined
  columns?: string[] | undefined
  filters?:
    | { column?: string | undefined; comparison?: string | undefined; value?: string | undefined }[]
    | undefined
  period_type?:
    | 'fixed'
    | 'today'
    | 'last_day_of_this_month'
    | 'this_year'
    | 'last_month'
    | 'last_thirty_days'
    | 'this_month'
    | 'year_to_date'
    | undefined
}
type PublicReportData = {
  type?: string | undefined
  attributes?: PublicReportAttributes | undefined
}
type PublicListReportsResponse = {
  success?: boolean | undefined
  metadata?: PublicReportMetaData | undefined
  offset?: number | undefined
  limit?: number | undefined
  data?: PublicReportData[] | undefined
}
type ErrorMeta = { field?: string | undefined; description?: string | undefined }
type ErrorDetails = {
  title?: string | undefined
  details?: string | undefined
  type?: string | undefined
  _meta?: ErrorMeta[] | undefined
}
type CustomReportsErrorResponse = {
  status?: number | undefined
  trace_id?: string | undefined
  timestamp?: string | undefined
  errors?: ErrorDetails[] | undefined
}
type PublicAPIException = CustomReportsErrorResponse[]
type DefaultAttribute = {
  attribute_id?: string | undefined
  data_type?: 'TEXT' | undefined
  value?: string | undefined
  employee_id?: number | undefined
}
type EntityAttribute = {
  attribute_id?: string | undefined
  entity_id?: string | undefined
  data_type?: 'ENTITY' | undefined
  value?: string | undefined
  employee_id?: number | undefined
}
type DurationAttribute = {
  attribute_id?: string | undefined
  data_type?: 'DURATION' | undefined
  duration?: number | undefined
  employee_id?: number | undefined
}
type CostCenter = {
  cost_center_id?: string | undefined
  value?: string | undefined
  weight?: string | undefined
}
type CostCenterAttribute = {
  attribute_id?: string | undefined
  data_type?: 'COST_CENTER' | undefined
  employee_id?: number | undefined
  cost_centers?: CostCenter[] | undefined
}
type AbsenceOverviewAttribute = {
  attribute_id?: string | undefined
  data_type?: 'ABSENCE_OVERVIEW' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  duration_days?: string | undefined
  duration_hours?: string | undefined
  employee_id?: number | undefined
}
type AbsencePeriodAttribute = {
  attribute_id?: string | undefined
  data_type?: 'ABSENCE_PERIOD' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  half_day_at_start?: boolean | undefined
  half_day_at_end?: boolean | undefined
  employee_id?: number | undefined
}
type PerformanceTarget = {
  performance_target_id?: string | undefined
  performance_target_value?: string | undefined
}
type PerformanceTargetAttribute = {
  attribute_id?: string | undefined
  data_type?: 'PERFORMANCE_TARGET' | undefined
  employee_id?: number | undefined
  performance_targets?: PerformanceTarget[] | undefined
}
type PerformanceKpiAttribute = {
  attribute_id?: string | undefined
  data_type?: 'PERFORMANCE_KPI' | undefined
  employee_id?: number | undefined
  performance_target_kpis?: PerformanceTarget[] | undefined
}
type SalaryAttribute = {
  attribute_id?: string | undefined
  data_type?: 'SALARY' | undefined
  amount?: string | undefined
  currency_symbol?: string | undefined
  employee_id?: number | undefined
}
type CompensationAttribute = {
  attribute_id?: string | undefined
  data_type?: 'COMPENSATION' | undefined
  amount?: string | undefined
  currency_code?: string | undefined
  currency_symbol?: string | undefined
  overtime_hours?: string | undefined
  bonus_type?: string | undefined
  employee_id?: number | undefined
}
type PublicReportItemsAttributes = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  author_first_name?: string | undefined
  author_last_name?: string | undefined
  type?: 'point_in_time' | undefined
  status?: 'up_to_date' | 'updating' | 'update_failed' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  data_refreshed_at?: string | undefined
  columns?: string[] | undefined
  filters?:
    | { column?: string | undefined; comparison?: string | undefined; value?: string | undefined }[]
    | undefined
  period_type?:
    | 'fixed'
    | 'today'
    | 'yesterday'
    | 'last_day_of_this_week'
    | 'last_day_of_last_week'
    | 'last_day_of_this_month'
    | 'last_day_of_last_month'
    | 'last_day_of_this_quarter'
    | 'last_day_of_last_quarter'
    | 'last_day_of_this_year'
    | 'last_day_of_last_year'
    | undefined
  items?:
    | {
        employee_id?: number | undefined
        attributes?:
          | (
              | DefaultAttribute
              | EntityAttribute
              | DurationAttribute
              | CostCenterAttribute
              | AbsenceOverviewAttribute
              | AbsencePeriodAttribute
              | PerformanceTargetAttribute
              | PerformanceKpiAttribute
              | SalaryAttribute
              | CompensationAttribute
            )[]
          | undefined
      }[]
    | undefined
}
type PublicTimeframeReportItemsAttributes = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  author_first_name?: string | undefined
  author_last_name?: string | undefined
  type?: 'timeframe' | undefined
  status?: 'up_to_date' | 'updating' | 'update_failed' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  data_refreshed_at?: string | undefined
  columns?: string[] | undefined
  filters?:
    | { column?: string | undefined; comparison?: string | undefined; value?: string | undefined }[]
    | undefined
  period_type?:
    | 'fixed'
    | 'today'
    | 'yesterday'
    | 'this_week'
    | 'last_week'
    | 'this_month'
    | 'last_month'
    | 'last_thirty_days'
    | 'next_month'
    | 'this_quarter'
    | 'last_quarter'
    | 'this_year'
    | 'year_to_date'
    | 'last_year'
    | 'next_year'
    | undefined
  items?:
    | {
        employee_id?: number | undefined
        attributes?:
          | (
              | DefaultAttribute
              | EntityAttribute
              | DurationAttribute
              | CostCenterAttribute
              | AbsenceOverviewAttribute
              | AbsencePeriodAttribute
              | PerformanceTargetAttribute
              | PerformanceKpiAttribute
              | SalaryAttribute
              | CompensationAttribute
            )[]
          | undefined
      }[]
    | undefined
}
type DefaultHistoricalAttribute = {
  attribute_id?: string | undefined
  data_type?: 'TEXT' | undefined
  value?: string | undefined
  employee_id?: number | undefined
  effective_date?: string | undefined
}
type EntityHistoricalAttribute = {
  attribute_id?: string | undefined
  entity_id?: string | undefined
  data_type?: 'ENTITY' | undefined
  value?: string | undefined
  employee_id?: number | undefined
  effective_date?: string | undefined
}
type DurationHistoricalAttribute = {
  attribute_id?: string | undefined
  data_type?: 'DURATION' | undefined
  duration?: number | undefined
  employee_id?: number | undefined
  effective_date?: string | undefined
}
type CostCenterHistoricalAttribute = {
  attribute_id?: string | undefined
  data_type?: 'COST_CENTER' | undefined
  employee_id?: number | undefined
  cost_centers?: CostCenter[] | undefined
  effective_date?: string | undefined
}
type SalaryHistoricalAttribute = {
  attribute_id?: string | undefined
  data_type?: 'SALARY' | undefined
  amount?: string | undefined
  currency_symbol?: string | undefined
  employee_id?: number | undefined
  effective_date?: string | undefined
}
type PublicHistoricalReportItemsAttributes = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  author_first_name?: string | undefined
  author_last_name?: string | undefined
  type?: 'historical_data' | undefined
  status?: 'up_to_date' | 'updating' | 'update_failed' | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  data_refreshed_at?: string | undefined
  columns?: string[] | undefined
  filters?:
    | { column?: string | undefined; comparison?: string | undefined; value?: string | undefined }[]
    | undefined
  period_type?:
    | 'fixed'
    | 'today'
    | 'yesterday'
    | 'this_week'
    | 'last_week'
    | 'this_month'
    | 'last_month'
    | 'last_thirty_days'
    | 'next_month'
    | 'this_quarter'
    | 'last_quarter'
    | 'this_year'
    | 'year_to_date'
    | 'last_year'
    | 'next_year'
    | undefined
  items?:
    | {
        employee_id?: number | undefined
        historical_attributes?:
          | (
              | DefaultHistoricalAttribute
              | EntityHistoricalAttribute
              | DurationHistoricalAttribute
              | CostCenterHistoricalAttribute
              | SalaryHistoricalAttribute
            )[]
          | undefined
      }[]
    | undefined
}
type PublicReportItemsData = {
  type?: string | undefined
  attributes?:
    | PublicReportItemsAttributes
    | PublicTimeframeReportItemsAttributes
    | PublicHistoricalReportItemsAttributes
    | undefined
}
type PublicReportResponse = {
  success?: boolean | undefined
  metadata?: PublicReportMetaData | undefined
  offset?: number | undefined
  limit?: number | undefined
  data?: PublicReportItemsData[] | undefined
}
type PublicColumnAttributes = {
  attribute_id?: string | undefined
  human_readable?: string | undefined
  data_type?: string | undefined
}
type PublicColumnData = {
  type?: string | undefined
  attributes?: PublicColumnAttributes[] | undefined
}
type PublicListColumnsResponse = {
  success?: boolean | undefined
  metadata?: PublicReportMetaData | undefined
  offset?: number | undefined
  limit?: number | undefined
  data?: PublicColumnData | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/company/employees': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            email?: string | undefined
            'attributes[]'?: string[] | undefined
            updated_since?: string | undefined
          }
        } & {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: EmployeesResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    employee?:
                      | {
                          email: string
                          first_name: string
                          last_name: string
                          preferred_name?: string | undefined
                          gender?: string | undefined
                          position?: string | undefined
                          subcompany?: string | undefined
                          department?: string | undefined
                          office?: string | undefined
                          hire_date?: string | undefined
                          weekly_working_hours?: number | undefined
                          status?: string | undefined
                          supervisor_id?: number | undefined
                          custom_attributes?:
                            | { 'dynamic_{{ field uid }}'?: string | undefined }
                            | undefined
                        }
                      | undefined
                  }
                | {
                    'employee[email]': string
                    'employee[first_name]': string
                    'employee[last_name]': string
                    'employee[preferred_name]'?: string | undefined
                    'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                    'employee[position]'?: string | undefined
                    'employee[department]'?: string | undefined
                    'employee[hire_date]'?: string | undefined
                    'employee[weekly_working_hours]'?: number | undefined
                    'employee[supervisor_id]'?: number | undefined
                    'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
                  }
            } & {
              form: {
                'employee[email]': string
                'employee[first_name]': string
                'employee[last_name]': string
                'employee[preferred_name]'?: string | undefined
                'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                'employee[position]'?: string | undefined
                'employee[department]'?: string | undefined
                'employee[hire_date]'?: string | undefined
                'employee[weekly_working_hours]'?: number | undefined
                'employee[supervisor_id]'?: number | undefined
                'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              data?: { id?: number | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    employee?:
                      | {
                          email: string
                          first_name: string
                          last_name: string
                          preferred_name?: string | undefined
                          gender?: string | undefined
                          position?: string | undefined
                          subcompany?: string | undefined
                          department?: string | undefined
                          office?: string | undefined
                          hire_date?: string | undefined
                          weekly_working_hours?: number | undefined
                          status?: string | undefined
                          supervisor_id?: number | undefined
                          custom_attributes?:
                            | { 'dynamic_{{ field uid }}'?: string | undefined }
                            | undefined
                        }
                      | undefined
                  }
                | {
                    'employee[email]': string
                    'employee[first_name]': string
                    'employee[last_name]': string
                    'employee[preferred_name]'?: string | undefined
                    'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                    'employee[position]'?: string | undefined
                    'employee[department]'?: string | undefined
                    'employee[hire_date]'?: string | undefined
                    'employee[weekly_working_hours]'?: number | undefined
                    'employee[supervisor_id]'?: number | undefined
                    'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
                  }
            } & {
              form: {
                'employee[email]': string
                'employee[first_name]': string
                'employee[last_name]': string
                'employee[preferred_name]'?: string | undefined
                'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                'employee[position]'?: string | undefined
                'employee[department]'?: string | undefined
                'employee[hire_date]'?: string | undefined
                'employee[weekly_working_hours]'?: number | undefined
                'employee[supervisor_id]'?: number | undefined
                'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: { code?: number | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/company/employees/:employee_id': {
      $patch:
        | {
            input: { param: { employee_id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    employee?:
                      | {
                          first_name?: string | undefined
                          last_name?: string | undefined
                          preferred_name?: string | undefined
                          gender?: string | undefined
                          position?: string | undefined
                          subcompany?: string | undefined
                          department?: string | undefined
                          office?: string | undefined
                          hire_date?: string | undefined
                          weekly_working_hours?: number | undefined
                          status?: string | undefined
                          supervisor_id?: number | undefined
                          custom_attributes?:
                            | { 'dynamic_{{ field uid }}'?: string | undefined }
                            | undefined
                        }
                      | undefined
                  }
                | {
                    'employee[first_name]'?: string | undefined
                    'employee[last_name]'?: string | undefined
                    'employee[preferred_name]'?: string | undefined
                    'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                    'employee[position]'?: string | undefined
                    'employee[department]'?: string | undefined
                    'employee[hire_date]'?: string | undefined
                    'employee[weekly_working_hours]'?: number | undefined
                    'employee[supervisor_id]'?: number | undefined
                    'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
                  }
            } & {
              form: {
                'employee[first_name]'?: string | undefined
                'employee[last_name]'?: string | undefined
                'employee[preferred_name]'?: string | undefined
                'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                'employee[position]'?: string | undefined
                'employee[department]'?: string | undefined
                'employee[hire_date]'?: string | undefined
                'employee[weekly_working_hours]'?: number | undefined
                'employee[supervisor_id]'?: number | undefined
                'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
              }
            }
            output: EmployeeUpdatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    employee?:
                      | {
                          first_name?: string | undefined
                          last_name?: string | undefined
                          preferred_name?: string | undefined
                          gender?: string | undefined
                          position?: string | undefined
                          subcompany?: string | undefined
                          department?: string | undefined
                          office?: string | undefined
                          hire_date?: string | undefined
                          weekly_working_hours?: number | undefined
                          status?: string | undefined
                          supervisor_id?: number | undefined
                          custom_attributes?:
                            | { 'dynamic_{{ field uid }}'?: string | undefined }
                            | undefined
                        }
                      | undefined
                  }
                | {
                    'employee[first_name]'?: string | undefined
                    'employee[last_name]'?: string | undefined
                    'employee[preferred_name]'?: string | undefined
                    'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                    'employee[position]'?: string | undefined
                    'employee[department]'?: string | undefined
                    'employee[hire_date]'?: string | undefined
                    'employee[weekly_working_hours]'?: number | undefined
                    'employee[supervisor_id]'?: number | undefined
                    'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
                  }
            } & {
              form: {
                'employee[first_name]'?: string | undefined
                'employee[last_name]'?: string | undefined
                'employee[preferred_name]'?: string | undefined
                'employee[gender]'?: 'male' | 'female' | 'diverse' | undefined
                'employee[position]'?: string | undefined
                'employee[department]'?: string | undefined
                'employee[hire_date]'?: string | undefined
                'employee[weekly_working_hours]'?: number | undefined
                'employee[supervisor_id]'?: number | undefined
                'employee[status]'?: 'onboarding' | 'active' | 'leave' | 'inactive' | undefined
              }
            }
            output: EmployeeUpdateErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { employee_id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: EmployeeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: Employee404ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/employees/:employee_id/absences/balance': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: EmployeeAbsenceBalance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: Employee404ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/employees/custom-attributes': {
      $get: {
        input: {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/company/employees/attributes': {
      $get: {
        input: {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/company/employees/:employee_id/profile-picture/:width': {
      $get:
        | {
            input: { param: { employee_id: number; width: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { employee_id: number; width: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: Employee404ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/attendances': {
      $get:
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                updated_from?: string | undefined
                updated_to?: string | undefined
                includePending?: boolean | undefined
                'employees[]'?: number[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: AttendancePeriodsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                updated_from?: string | undefined
                updated_to?: string | undefined
                includePending?: boolean | undefined
                'employees[]'?: number[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start_date: string
                end_date: string
                updated_from?: string | undefined
                updated_to?: string | undefined
                includePending?: boolean | undefined
                'employees[]'?: number[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    attendances?:
                      | {
                          employee: number
                          date: string
                          start_time: string
                          end_time?: (string | null) | undefined
                          break: number
                          comment?: (string | null) | undefined
                          project_id?: (number | null) | undefined
                        }[]
                      | undefined
                    skip_approval?: boolean | undefined
                  }
                | NewAttendancePeriodParametersRequest
            } & { form: NewAttendancePeriodParametersRequest }
            output: NewAttendancePeriodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    attendances?:
                      | {
                          employee: number
                          date: string
                          start_time: string
                          end_time?: (string | null) | undefined
                          break: number
                          comment?: (string | null) | undefined
                          project_id?: (number | null) | undefined
                        }[]
                      | undefined
                    skip_approval?: boolean | undefined
                  }
                | NewAttendancePeriodParametersRequest
            } & { form: NewAttendancePeriodParametersRequest }
            output: AttendanceCreateUpdate400ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    attendances?:
                      | {
                          employee: number
                          date: string
                          start_time: string
                          end_time?: (string | null) | undefined
                          break: number
                          comment?: (string | null) | undefined
                          project_id?: (number | null) | undefined
                        }[]
                      | undefined
                    skip_approval?: boolean | undefined
                  }
                | NewAttendancePeriodParametersRequest
            } & { form: NewAttendancePeriodParametersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & {
              json:
                | {
                    attendances?:
                      | {
                          employee: number
                          date: string
                          start_time: string
                          end_time?: (string | null) | undefined
                          break: number
                          comment?: (string | null) | undefined
                          project_id?: (number | null) | undefined
                        }[]
                      | undefined
                    skip_approval?: boolean | undefined
                  }
                | NewAttendancePeriodParametersRequest
            } & { form: NewAttendancePeriodParametersRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/company/attendances/:id': {
      $delete:
        | {
            input: { param: { id: number } } & {
              query: { skip_approval?: boolean | undefined }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: DeletedAttendanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { skip_approval?: boolean | undefined }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: AttendanceDelete400ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { skip_approval?: boolean | undefined }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { skip_approval?: boolean | undefined }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { skip_approval?: boolean | undefined }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: Attendance404ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: AttendanceUpdateRequest }
            output: UpdatedAttendanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: AttendanceUpdateRequest }
            output: AttendanceCreateUpdate400ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: AttendanceUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: AttendanceUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: AttendanceUpdateRequest }
            output: Attendance404ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/attendances/projects': {
      $get: {
        input: {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: { success?: boolean | undefined; data?: Project[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: { name: string; active?: boolean | undefined } }
            output: { success?: boolean | undefined; data?: Project | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: { name: string; active?: boolean | undefined } }
            output: {
              success?: boolean | undefined
              error?: { name?: string[] | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/company/attendances/projects/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: {
              success?: boolean | undefined
              error?: { code?: number | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: {
              success?: boolean | undefined
              error?: { code?: number | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { id: number } } & {
              json: { name?: string | undefined; active?: boolean | undefined }
            }
            output: { success?: boolean | undefined; data?: Project | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: { name?: string | undefined; active?: boolean | undefined }
            }
            output: {
              success?: boolean | undefined
              error?: { active?: string[] | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: { name?: string | undefined; active?: boolean | undefined }
            }
            output: { success?: boolean | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/time-off-types': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: { success?: boolean | undefined; data?: TimeOffTypeResource[] | undefined }
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
            'employees[]'?: number[] | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        } & {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: AbsencePeriodsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateTimeOffPeriodRequest } & { form: CreateTimeOffPeriodRequest }
            output: { data?: AbsencePeriodResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateTimeOffPeriodRequest } & { form: CreateTimeOffPeriodRequest }
            output: ErrorInsertingAbsenceResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateTimeOffPeriodRequest } & { form: CreateTimeOffPeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateTimeOffPeriodRequest } & { form: CreateTimeOffPeriodRequest }
            output: ErrorCreateAbsenceResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/company/time-offs/:id': {
      $delete:
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: DeletedAbsenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorAbsenceResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorAbsenceResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: AbsencePeriodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorAbsenceResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/absence-periods': {
      $get:
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                'employees[]'?: number[] | undefined
                'absence_types[]'?: string[] | undefined
                'absence_periods[]'?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: HourlyAbsencePeriodsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                'employees[]'?: number[] | undefined
                'absence_types[]'?: string[] | undefined
                'absence_periods[]'?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                'employees[]'?: number[] | undefined
                'absence_types[]'?: string[] | undefined
                'absence_periods[]'?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: { code?: number | undefined; message?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                'employees[]'?: number[] | undefined
                'absence_types[]'?: string[] | undefined
                'absence_periods[]'?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateAbsencePeriodRequest } & { form: CreateAbsencePeriodRequest }
            output: { data?: HourlyAbsencePeriodResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateAbsencePeriodRequest } & { form: CreateAbsencePeriodRequest }
            output: ErrorInsertingAbsenceResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateAbsencePeriodRequest } & { form: CreateAbsencePeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateAbsencePeriodRequest } & { form: CreateAbsencePeriodRequest }
            output: ErrorCreateAbsenceResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { json: CreateAbsencePeriodRequest } & { form: CreateAbsencePeriodRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/company/absence-periods/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: DeletedAbsenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorAbsenceResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: ErrorAbsenceResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/company/document-categories': {
      $get: {
        input: {
          header: {
            'X-Personio-Partner-ID'?: string | undefined
            'X-Personio-App-ID'?: string | undefined
          }
        }
        output: DocumentCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/company/documents': {
      $post:
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { form: DocumentUploadRequest }
            output: DocumentUploadSuccessResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { form: DocumentUploadRequest }
            output: DocumentUploadFailedWithBadDocumentCategoryResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            } & { form: DocumentUploadRequest }
            output: DocumentUploadFailedWithUnsupportedFileTypeResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/company/custom-reports/reports': {
      $get:
        | {
            input: { query: { report_ids?: string[] | undefined; status?: string | undefined } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicListReportsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { report_ids?: string[] | undefined; status?: string | undefined } } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicAPIException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/company/custom-reports/reports/:report_id': {
      $get:
        | {
            input: { param: { report_id: string } } & {
              query: {
                locale?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } } & {
              query: {
                locale?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicAPIException
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { report_id: string } } & {
              query: {
                locale?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicAPIException
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { report_id: string } } & {
              query: {
                locale?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicAPIException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/company/custom-reports/columns': {
      $get:
        | {
            input: {
              query: {
                columns?: string[] | undefined
                locale?: string | undefined
                report_id?: string | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicListColumnsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                columns?: string[] | undefined
                locale?: string | undefined
                report_id?: string | undefined
              }
            } & {
              header: {
                'X-Personio-Partner-ID'?: string | undefined
                'X-Personio-App-ID'?: string | undefined
              }
            }
            output: PublicAPIException
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
