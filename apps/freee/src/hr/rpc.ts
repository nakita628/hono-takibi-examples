import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1UsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.users.me.$get(undefined, options))
}

export async function getApiV1CompaniesCompanyIdEmployees(
  args: InferRequestType<(typeof client.api.v1.companies)[':company_id']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':company_id'].employees.$get(args, options))
}

export async function getApiV1Employees(
  args: InferRequestType<typeof client.api.v1.employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.employees.$get(args, options))
}

export async function postApiV1Employees(
  args: InferRequestType<typeof client.api.v1.employees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.employees.$post(args, options))
}

export async function getApiV1EmployeesId(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.employees[':id'].$get(args, options))
}

export async function putApiV1EmployeesId(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.employees[':id'].$put(args, options))
}

export async function deleteApiV1EmployeesId(
  args: InferRequestType<(typeof client.api.v1.employees)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.employees[':id'].$delete(args, options))
}

export async function getApiV1EmployeesEmployeeIdProfileRule(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].profile_rule.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdProfileRule(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['profile_rule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].profile_rule.$put(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdHealthInsuranceRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].health_insurance_rule.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdHealthInsuranceRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['health_insurance_rule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].health_insurance_rule.$put(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdWelfarePensionInsuranceRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['welfare_pension_insurance_rule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].welfare_pension_insurance_rule.$put(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdDependentRules(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].dependent_rules.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdDependentRulesBulkUpdate(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['dependent_rules']['bulk_update']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].dependent_rules.bulk_update.$put(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdBankAccountRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].bank_account_rule.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdBankAccountRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['bank_account_rule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].bank_account_rule.$put(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdBasicPayRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].basic_pay_rule.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdBasicPayRule(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['basic_pay_rule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].basic_pay_rule.$put(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdAllowanceRules(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].allowance_rules.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdAllowanceRules(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].allowance_rules.$put(args, options),
  )
}

export async function deleteApiV1EmployeesEmployeeIdAllowanceRulesId(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['allowance_rules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].allowance_rules[':id'].$delete(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdDeductionRules(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].deduction_rules.$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdDeductionRules(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].deduction_rules.$put(args, options),
  )
}

export async function deleteApiV1EmployeesEmployeeIdDeductionRulesId(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['deduction_rules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].deduction_rules[':id'].$delete(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdProfileCustomFields(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['profile_custom_fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].profile_custom_fields.$get(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdWorkRecordsDate(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].work_records[':date'].$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdWorkRecordsDate(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].work_records[':date'].$put(args, options),
  )
}

export async function deleteApiV1EmployeesEmployeeIdWorkRecordsDate(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_records'][':date']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].work_records[':date'].$delete(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonth(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['work_record_summaries'][':year'][':month']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].work_record_summaries[':year'][':month'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV1EmployeesEmployeeIdTimeClocks(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].time_clocks.$get(args, options),
  )
}

export async function postApiV1EmployeesEmployeeIdTimeClocks(
  args: InferRequestType<(typeof client.api.v1.employees)[':employee_id']['time_clocks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].time_clocks.$post(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdTimeClocksId(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].time_clocks[':id'].$get(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdTimeClocksAvailableTypes(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['time_clocks']['available_types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].time_clocks.available_types.$get(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdSpecialHolidays(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['special_holidays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].special_holidays.$get(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonth(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tag_summaries'][':year'][':month']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].attendance_tag_summaries[':year'][':month'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV1EmployeesEmployeeIdAttendanceTags(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].attendance_tags.$get(args, options),
  )
}

export async function getApiV1EmployeesEmployeeIdAttendanceTagsDate(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].attendance_tags[':date'].$get(args, options),
  )
}

export async function putApiV1EmployeesEmployeeIdAttendanceTagsDate(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['attendance_tags'][':date']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].attendance_tags[':date'].$put(args, options),
  )
}

export async function getApiV1SalariesEmployeePayrollStatements(
  args: InferRequestType<typeof client.api.v1.salaries.employee_payroll_statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.salaries.employee_payroll_statements.$get(args, options))
}

export async function getApiV1SalariesEmployeePayrollStatementsEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.salaries.employee_payroll_statements[':employee_id'].$get(args, options),
  )
}

export async function putApiV1SalariesEmployeePayrollStatementsEmployeeIdRemark(
  args: InferRequestType<
    (typeof client.api.v1.salaries.employee_payroll_statements)[':employee_id']['remark']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.salaries.employee_payroll_statements[':employee_id'].remark.$put(args, options),
  )
}

export async function getApiV1BonusesEmployeePayrollStatements(
  args: InferRequestType<typeof client.api.v1.bonuses.employee_payroll_statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bonuses.employee_payroll_statements.$get(args, options))
}

export async function getApiV1BonusesEmployeePayrollStatementsEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.bonuses.employee_payroll_statements)[':employee_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.bonuses.employee_payroll_statements[':employee_id'].$get(args, options),
  )
}

export async function getApiV1EmployeeGroupMemberships(
  args: InferRequestType<typeof client.api.v1.employee_group_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.employee_group_memberships.$get(args, options))
}

export async function getApiV1EmployeesEmployeeIdGroupMemberships(
  args: InferRequestType<
    (typeof client.api.v1.employees)[':employee_id']['group_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.employees[':employee_id'].group_memberships.$get(args, options),
  )
}

export async function getApiV1Groups(
  args: InferRequestType<typeof client.api.v1.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.groups.$get(args, options))
}

export async function postApiV1Groups(
  args: InferRequestType<typeof client.api.v1.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.groups.$post(args, options))
}

export async function putApiV1GroupsId(
  args: InferRequestType<(typeof client.api.v1.groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.groups[':id'].$put(args, options))
}

export async function deleteApiV1GroupsId(
  args: InferRequestType<(typeof client.api.v1.groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.groups[':id'].$delete(args, options))
}

export async function getApiV1Allowances(
  args: InferRequestType<typeof client.api.v1.allowances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.allowances.$get(args, options))
}

export async function postApiV1Allowances(
  args: InferRequestType<typeof client.api.v1.allowances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.allowances.$post(args, options))
}

export async function getApiV1AllowancesId(
  args: InferRequestType<(typeof client.api.v1.allowances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.allowances[':id'].$get(args, options))
}

export async function getApiV1Deductions(
  args: InferRequestType<typeof client.api.v1.deductions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.deductions.$get(args, options))
}

export async function postApiV1Deductions(
  args: InferRequestType<typeof client.api.v1.deductions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.deductions.$post(args, options))
}

export async function getApiV1DeductionsId(
  args: InferRequestType<(typeof client.api.v1.deductions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.deductions[':id'].$get(args, options))
}

export async function getApiV1Positions(
  args: InferRequestType<typeof client.api.v1.positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.positions.$get(args, options))
}

export async function postApiV1Positions(
  args: InferRequestType<typeof client.api.v1.positions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.positions.$post(args, options))
}

export async function putApiV1PositionsId(
  args: InferRequestType<(typeof client.api.v1.positions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.positions[':id'].$put(args, options))
}

export async function deleteApiV1PositionsId(
  args: InferRequestType<(typeof client.api.v1.positions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.positions[':id'].$delete(args, options))
}

export async function getApiV1ApprovalRequestsMonthlyAttendances(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.monthly_attendances.$get(args, options),
  )
}

export async function postApiV1ApprovalRequestsMonthlyAttendances(
  args: InferRequestType<typeof client.api.v1.approval_requests.monthly_attendances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.monthly_attendances.$post(args, options),
  )
}

export async function getApiV1ApprovalRequestsMonthlyAttendancesId(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.monthly_attendances[':id'].$get(args, options),
  )
}

export async function putApiV1ApprovalRequestsMonthlyAttendancesId(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.monthly_attendances[':id'].$put(args, options),
  )
}

export async function deleteApiV1ApprovalRequestsMonthlyAttendancesId(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.monthly_attendances[':id'].$delete(args, options),
  )
}

export async function postApiV1ApprovalRequestsMonthlyAttendancesIdActions(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.monthly_attendances)[':id']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.monthly_attendances[':id'].actions.$post(args, options),
  )
}

export async function getApiV1ApprovalRequestsWorkTimes(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.work_times.$get(args, options))
}

export async function postApiV1ApprovalRequestsWorkTimes(
  args: InferRequestType<typeof client.api.v1.approval_requests.work_times.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.work_times.$post(args, options))
}

export async function getApiV1ApprovalRequestsWorkTimesId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.work_times[':id'].$get(args, options))
}

export async function putApiV1ApprovalRequestsWorkTimesId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.work_times[':id'].$put(args, options))
}

export async function deleteApiV1ApprovalRequestsWorkTimesId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.work_times)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.work_times[':id'].$delete(args, options),
  )
}

export async function postApiV1ApprovalRequestsWorkTimesIdActions(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.work_times)[':id']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.work_times[':id'].actions.$post(args, options),
  )
}

export async function getApiV1ApprovalRequestsPaidHolidays(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.paid_holidays.$get(args, options))
}

export async function postApiV1ApprovalRequestsPaidHolidays(
  args: InferRequestType<typeof client.api.v1.approval_requests.paid_holidays.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.paid_holidays.$post(args, options))
}

export async function getApiV1ApprovalRequestsPaidHolidaysId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.paid_holidays[':id'].$get(args, options),
  )
}

export async function putApiV1ApprovalRequestsPaidHolidaysId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.paid_holidays[':id'].$put(args, options),
  )
}

export async function deleteApiV1ApprovalRequestsPaidHolidaysId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.paid_holidays)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.paid_holidays[':id'].$delete(args, options),
  )
}

export async function postApiV1ApprovalRequestsPaidHolidaysIdActions(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.paid_holidays)[':id']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.paid_holidays[':id'].actions.$post(args, options),
  )
}

export async function getApiV1ApprovalRequestsSpecialHolidays(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.special_holidays.$get(args, options))
}

export async function postApiV1ApprovalRequestsSpecialHolidays(
  args: InferRequestType<typeof client.api.v1.approval_requests.special_holidays.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.special_holidays.$post(args, options))
}

export async function getApiV1ApprovalRequestsSpecialHolidaysId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.special_holidays[':id'].$get(args, options),
  )
}

export async function putApiV1ApprovalRequestsSpecialHolidaysId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.special_holidays)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.special_holidays[':id'].$put(args, options),
  )
}

export async function deleteApiV1ApprovalRequestsSpecialHolidaysId(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.special_holidays)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.special_holidays[':id'].$delete(args, options),
  )
}

export async function postApiV1ApprovalRequestsSpecialHolidaysIdActions(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.special_holidays)[':id']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.special_holidays[':id'].actions.$post(args, options),
  )
}

export async function getApiV1ApprovalRequestsOvertimeWorks(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.overtime_works.$get(args, options))
}

export async function postApiV1ApprovalRequestsOvertimeWorks(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_requests.overtime_works.$post(args, options))
}

export async function getApiV1ApprovalRequestsOvertimeWorksId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.overtime_works[':id'].$get(args, options),
  )
}

export async function putApiV1ApprovalRequestsOvertimeWorksId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.overtime_works[':id'].$put(args, options),
  )
}

export async function deleteApiV1ApprovalRequestsOvertimeWorksId(
  args: InferRequestType<(typeof client.api.v1.approval_requests.overtime_works)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.overtime_works[':id'].$delete(args, options),
  )
}

export async function postApiV1ApprovalRequestsOvertimeWorksIdActions(
  args: InferRequestType<
    (typeof client.api.v1.approval_requests.overtime_works)[':id']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.overtime_works[':id'].actions.$post(args, options),
  )
}

export async function getApiV1ApprovalRequestsOvertimeWorksSetting(
  args: InferRequestType<typeof client.api.v1.approval_requests.overtime_works.setting.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.approval_requests.overtime_works.setting.$get(args, options),
  )
}

export async function getApiV1ApprovalFlowRoutes(
  args: InferRequestType<typeof client.api.v1.approval_flow_routes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_flow_routes.$get(args, options))
}

export async function getApiV1ApprovalFlowRoutesId(
  args: InferRequestType<(typeof client.api.v1.approval_flow_routes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.approval_flow_routes[':id'].$get(args, options))
}

export async function getApiV1YearendAdjustmentsYearEmployees(
  args: InferRequestType<(typeof client.api.v1.yearend_adjustments)[':year']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].employees.$get(args, options),
  )
}

export async function getApiV1YearendAdjustmentsYearEmployeesEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$get(args, options),
  )
}

export async function putApiV1YearendAdjustmentsYearEmployeesEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['employees'][':employee_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].employees[':employee_id'].$put(args, options),
  )
}

export async function putApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['payroll_and_bonus'][':employee_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].payroll_and_bonus[':employee_id'].$put(
      args,
      options,
    ),
  )
}

export async function putApiV1YearendAdjustmentsYearDependentsEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['dependents'][':employee_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].dependents[':employee_id'].$put(args, options),
  )
}

export async function putApiV1YearendAdjustmentsYearPreviousJobsEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].previous_jobs[':employee_id'].$put(args, options),
  )
}

export async function deleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['previous_jobs'][':employee_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].previous_jobs[':employee_id'].$delete(args, options),
  )
}

export async function postApiV1YearendAdjustmentsYearInsurancesEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'].$post(args, options),
  )
}

export async function putApiV1YearendAdjustmentsYearInsurancesEmployeeIdId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'][':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['insurances'][':employee_id'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].insurances[':employee_id'][':id'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['housing_loan_deductions'][':employee_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].housing_loan_deductions[':employee_id'].$put(
      args,
      options,
    ),
  )
}

export async function postApiV1YearendAdjustmentsYearHousingLoansEmployeeId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'].$post(args, options),
  )
}

export async function putApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'][':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdId(
  args: InferRequestType<
    (typeof client.api.v1.yearend_adjustments)[':year']['housing_loans'][':employee_id'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.yearend_adjustments[':year'].housing_loans[':employee_id'][':id'].$delete(
      args,
      options,
    ),
  )
}
