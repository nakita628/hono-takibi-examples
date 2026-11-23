import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEmployees(
  args: InferRequestType<typeof client.Employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees.$get(args, options))
}

export async function postEmployees(
  args: InferRequestType<typeof client.Employees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees.$post(args, options))
}

export async function getEmployeesEmployeeID(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].$get(args, options))
}

export async function putEmployeesEmployeeID(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].$put(args, options))
}

export async function postEmployeesEmployeeIDEmployment(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Employment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Employment.$post(args, options))
}

export async function getEmployeesEmployeeIDTax(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Tax.$get(args, options))
}

export async function postEmployeesEmployeeIDTax(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Tax']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Tax.$post(args, options))
}

export async function getEmployeesEmployeeIDOpeningBalances(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].OpeningBalances.$get(args, options))
}

export async function postEmployeesEmployeeIDOpeningBalances(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['OpeningBalances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].OpeningBalances.$post(args, options))
}

export async function getEmployeesEmployeeIDLeave(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Leave.$get(args, options))
}

export async function postEmployeesEmployeeIDLeave(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Leave.$post(args, options))
}

export async function putEmployeesEmployeeIDLeaveLeaveID(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Leave[':LeaveID'].$put(args, options))
}

export async function deleteEmployeesEmployeeIDLeaveLeaveID(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].Leave[':LeaveID'].$delete(args, options),
  )
}

export async function getEmployeesEmployeeIDLeaveBalances(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveBalances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].LeaveBalances.$get(args, options))
}

export async function getEmployeesEmployeeIDLeavePeriods(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].LeavePeriods.$get(args, options))
}

export async function postEmployeesEmployeeIDLeaveSetup(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveSetup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].LeaveSetup.$post(args, options))
}

export async function getEmployeesEmployeeIDLeaveTypes(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].LeaveTypes.$get(args, options))
}

export async function postEmployeesEmployeeIDLeaveTypes(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeaveTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].LeaveTypes.$post(args, options))
}

export async function getEmployeesEmployeeIDPaymentMethods(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].PaymentMethods.$get(args, options))
}

export async function postEmployeesEmployeeIDPaymentMethods(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PaymentMethods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].PaymentMethods.$post(args, options))
}

export async function getEmployeesEmployeeIDPayTemplates(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].PayTemplates.$get(args, options))
}

export async function postEmployeesEmployeeIDPayTemplatesEarnings(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplates.Earnings.$post(args, options),
  )
}

export async function putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplates.Earnings[':PayTemplateEarningID'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['PayTemplates']['Earnings'][':PayTemplateEarningID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplates.Earnings[':PayTemplateEarningID'].$delete(
      args,
      options,
    ),
  )
}

export async function postEmployeesEmployeeIDPayTemplateEarnings(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['PayTemplateEarnings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplateEarnings.$post(args, options),
  )
}

export async function getDeductions(
  args: InferRequestType<typeof client.Deductions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Deductions.$get(args, options))
}

export async function postDeductions(
  args: InferRequestType<typeof client.Deductions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Deductions.$post(args, options))
}

export async function getDeductionsDeductionId(
  args: InferRequestType<(typeof client.Deductions)[':deductionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Deductions[':deductionId'].$get(args, options))
}

export async function getStatutoryDeductions(
  args: InferRequestType<typeof client.StatutoryDeductions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StatutoryDeductions.$get(args, options))
}

export async function getStatutoryDeductionsId(
  args: InferRequestType<(typeof client.StatutoryDeductions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StatutoryDeductions[':id'].$get(args, options))
}

export async function getSuperannuations(
  args: InferRequestType<typeof client.Superannuations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superannuations.$get(args, options))
}

export async function postSuperannuations(
  args: InferRequestType<typeof client.Superannuations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superannuations.$post(args, options))
}

export async function getSuperannuationsSuperannuationID(
  args: InferRequestType<(typeof client.Superannuations)[':SuperannuationID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superannuations[':SuperannuationID'].$get(args, options))
}

export async function getEarningsRates(
  args: InferRequestType<typeof client.EarningsRates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarningsRates.$get(args, options))
}

export async function postEarningsRates(
  args: InferRequestType<typeof client.EarningsRates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarningsRates.$post(args, options))
}

export async function getEarningsRatesEarningsRateID(
  args: InferRequestType<(typeof client.EarningsRates)[':EarningsRateID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarningsRates[':EarningsRateID'].$get(args, options))
}

export async function getLeaveTypes(
  args: InferRequestType<typeof client.LeaveTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveTypes.$get(args, options))
}

export async function postLeaveTypes(
  args: InferRequestType<typeof client.LeaveTypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveTypes.$post(args, options))
}

export async function getLeaveTypesLeaveTypeID(
  args: InferRequestType<(typeof client.LeaveTypes)[':LeaveTypeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveTypes[':LeaveTypeID'].$get(args, options))
}

export async function getReimbursements(
  args: InferRequestType<typeof client.Reimbursements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reimbursements.$get(args, options))
}

export async function postReimbursements(
  args: InferRequestType<typeof client.Reimbursements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reimbursements.$post(args, options))
}

export async function getReimbursementsReimbursementID(
  args: InferRequestType<(typeof client.Reimbursements)[':ReimbursementID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reimbursements[':ReimbursementID'].$get(args, options))
}

export async function getTimesheets(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets.$get(args, options))
}

export async function postTimesheets(
  args: InferRequestType<typeof client.Timesheets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets.$post(args, options))
}

export async function getTimesheetsTimesheetID(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets[':TimesheetID'].$get(args, options))
}

export async function deleteTimesheetsTimesheetID(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets[':TimesheetID'].$delete(args, options))
}

export async function postTimesheetsTimesheetIDLines(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets[':TimesheetID'].Lines.$post(args, options))
}

export async function postTimesheetsTimesheetIDApprove(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets[':TimesheetID'].Approve.$post(args, options))
}

export async function postTimesheetsTimesheetIDRevertToDraft(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets[':TimesheetID'].RevertToDraft.$post(args, options))
}

export async function putTimesheetsTimesheetIDLinesTimesheetLineID(
  args: InferRequestType<
    (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$put(args, options),
  )
}

export async function deleteTimesheetsTimesheetIDLinesTimesheetLineID(
  args: InferRequestType<
    (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$delete(args, options),
  )
}

export async function getPayRunCalendars(
  args: InferRequestType<typeof client.PayRunCalendars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRunCalendars.$get(args, options))
}

export async function postPayRunCalendars(
  args: InferRequestType<typeof client.PayRunCalendars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRunCalendars.$post(args, options))
}

export async function getPayRunCalendarsPayrollCalendarID(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayrollCalendarID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRunCalendars[':PayrollCalendarID'].$get(args, options))
}

export async function getEmployeesEmployeeIDSalaryAndWages(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].SalaryAndWages.$get(args, options))
}

export async function postEmployeesEmployeeIDSalaryAndWages(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['SalaryAndWages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].SalaryAndWages.$post(args, options))
}

export async function getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$get(args, options),
  )
}

export async function putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$put(args, options),
  )
}

export async function deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['SalaryAndWages'][':SalaryAndWagesID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].SalaryAndWages[':SalaryAndWagesID'].$delete(args, options),
  )
}

export async function getPayRuns(
  args: InferRequestType<typeof client.PayRuns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRuns.$get(args, options))
}

export async function postPayRuns(
  args: InferRequestType<typeof client.PayRuns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRuns.$post(args, options))
}

export async function getPayRunsPayRunID(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRuns[':PayRunID'].$get(args, options))
}

export async function getPaySlips(
  args: InferRequestType<typeof client.PaySlips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PaySlips.$get(args, options))
}

export async function getPaySlipsPaySlipID(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PaySlips[':PaySlipID'].$get(args, options))
}

export async function putPaySlipsPaySlipID(
  args: InferRequestType<(typeof client.PaySlips)[':PaySlipID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PaySlips[':PaySlipID'].$put(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Settings.$get(args, options))
}

export async function getSettingsTrackingCategories(
  args: InferRequestType<typeof client.Settings.TrackingCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Settings.TrackingCategories.$get(args, options))
}

export async function getEmployeesEmployeeIDWorkingPatterns(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID']['Working-Patterns'].$get(args, options),
  )
}

export async function postEmployeesEmployeeIDWorkingPatterns(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Working-Patterns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID']['Working-Patterns'].$post(args, options),
  )
}

export async function getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID']['Working-Patterns'][':EmployeeWorkingPatternID'].$delete(
      args,
      options,
    ),
  )
}
