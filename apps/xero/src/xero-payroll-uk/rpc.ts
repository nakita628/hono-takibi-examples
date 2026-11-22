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

export async function getEmployeesEmployeeIDUkopeningbalances(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].ukopeningbalances.$get(args, options))
}

export async function putEmployeesEmployeeIDUkopeningbalances(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].ukopeningbalances.$put(args, options))
}

export async function postEmployeesEmployeeIDUkopeningbalances(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['ukopeningbalances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].ukopeningbalances.$post(args, options))
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

export async function getEmployeesEmployeeIDLeaveLeaveID(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['Leave'][':LeaveID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].Leave[':LeaveID'].$get(args, options))
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

export async function getEmployeesEmployeeIDStatutoryLeaveBalance(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['StatutoryLeaveBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].StatutoryLeaveBalance.$get(args, options),
  )
}

export async function getStatutoryLeavesSummaryEmployeeID(
  args: InferRequestType<(typeof client.StatutoryLeaves.Summary)[':EmployeeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StatutoryLeaves.Summary[':EmployeeID'].$get(args, options))
}

export async function postStatutoryLeavesSick(
  args: InferRequestType<typeof client.StatutoryLeaves.Sick.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StatutoryLeaves.Sick.$post(args, options))
}

export async function getStatutoryLeavesSickStatutorySickLeaveID(
  args: InferRequestType<(typeof client.StatutoryLeaves.Sick)[':StatutorySickLeaveID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.StatutoryLeaves.Sick[':StatutorySickLeaveID'].$get(args, options),
  )
}

export async function getEmployeesEmployeeIDLeavePeriods(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['LeavePeriods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].LeavePeriods.$get(args, options))
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
    (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplates.earnings.$post(args, options),
  )
}

export async function putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplates.earnings[':PayTemplateEarningID'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningID(
  args: InferRequestType<
    (typeof client.Employees)[':EmployeeID']['PayTemplates']['earnings'][':PayTemplateEarningID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].PayTemplates.earnings[':PayTemplateEarningID'].$delete(
      args,
      options,
    ),
  )
}

export async function postEmployeesEmployeeIDPaytemplateearnings(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['paytemplateearnings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Employees[':EmployeeID'].paytemplateearnings.$post(args, options),
  )
}

export async function getBenefits(
  args: InferRequestType<typeof client.Benefits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Benefits.$get(args, options))
}

export async function postBenefits(
  args: InferRequestType<typeof client.Benefits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Benefits.$post(args, options))
}

export async function getBenefitsId(
  args: InferRequestType<(typeof client.Benefits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Benefits[':id'].$get(args, options))
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

export async function getEarningsOrders(
  args: InferRequestType<typeof client.EarningsOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarningsOrders.$get(args, options))
}

export async function getEarningsOrdersId(
  args: InferRequestType<(typeof client.EarningsOrders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EarningsOrders[':id'].$get(args, options))
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

export async function getPayRunCalendarsPayRunCalendarID(
  args: InferRequestType<(typeof client.PayRunCalendars)[':PayRunCalendarID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRunCalendars[':PayRunCalendarID'].$get(args, options))
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

export async function getPayRunsPayRunID(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRuns[':PayRunID'].$get(args, options))
}

export async function getPayslips(
  args: InferRequestType<typeof client.Payslips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payslips.$get(args, options))
}

export async function getPayslipsPayslipID(
  args: InferRequestType<(typeof client.Payslips)[':PayslipID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payslips[':PayslipID'].$get(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Settings.$get(args, options))
}

export async function getSettingsTrackingCategories(
  args: InferRequestType<typeof client.Settings.trackingCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Settings.trackingCategories.$get(args, options))
}
