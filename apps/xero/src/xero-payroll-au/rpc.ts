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

export async function postEmployeesEmployeeID(
  args: InferRequestType<(typeof client.Employees)[':EmployeeID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Employees[':EmployeeID'].$post(args, options))
}

export async function getLeaveApplications(
  args: InferRequestType<typeof client.LeaveApplications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveApplications.$get(args, options))
}

export async function postLeaveApplications(
  args: InferRequestType<typeof client.LeaveApplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveApplications.$post(args, options))
}

export async function getLeaveApplicationsV2(
  args: InferRequestType<typeof client.LeaveApplications.v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveApplications.v2.$get(args, options))
}

export async function getLeaveApplicationsLeaveApplicationID(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveApplications[':LeaveApplicationID'].$get(args, options))
}

export async function postLeaveApplicationsLeaveApplicationID(
  args: InferRequestType<(typeof client.LeaveApplications)[':LeaveApplicationID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LeaveApplications[':LeaveApplicationID'].$post(args, options))
}

export async function postLeaveApplicationsLeaveApplicationIDApprove(
  args: InferRequestType<
    (typeof client.LeaveApplications)[':LeaveApplicationID']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.LeaveApplications[':LeaveApplicationID'].approve.$post(args, options),
  )
}

export async function postLeaveApplicationsLeaveApplicationIDReject(
  args: InferRequestType<
    (typeof client.LeaveApplications)[':LeaveApplicationID']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.LeaveApplications[':LeaveApplicationID'].reject.$post(args, options),
  )
}

export async function getPayItems(
  args: InferRequestType<typeof client.PayItems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayItems.$get(args, options))
}

export async function postPayItems(
  args: InferRequestType<typeof client.PayItems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayItems.$post(args, options))
}

export async function getPayrollCalendars(
  args: InferRequestType<typeof client.PayrollCalendars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayrollCalendars.$get(args, options))
}

export async function postPayrollCalendars(
  args: InferRequestType<typeof client.PayrollCalendars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayrollCalendars.$post(args, options))
}

export async function getPayrollCalendarsPayrollCalendarID(
  args: InferRequestType<(typeof client.PayrollCalendars)[':PayrollCalendarID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayrollCalendars[':PayrollCalendarID'].$get(args, options))
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

export async function postPayRunsPayRunID(
  args: InferRequestType<(typeof client.PayRuns)[':PayRunID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PayRuns[':PayRunID'].$post(args, options))
}

export async function getPayslipPayslipID(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payslip[':PayslipID'].$get(args, options))
}

export async function postPayslipPayslipID(
  args: InferRequestType<(typeof client.Payslip)[':PayslipID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payslip[':PayslipID'].$post(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.Settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Settings.$get(args, options))
}

export async function getSuperfunds(
  args: InferRequestType<typeof client.Superfunds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superfunds.$get(args, options))
}

export async function postSuperfunds(
  args: InferRequestType<typeof client.Superfunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superfunds.$post(args, options))
}

export async function getSuperfundsSuperFundID(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superfunds[':SuperFundID'].$get(args, options))
}

export async function postSuperfundsSuperFundID(
  args: InferRequestType<(typeof client.Superfunds)[':SuperFundID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Superfunds[':SuperFundID'].$post(args, options))
}

export async function getSuperfundProducts(
  args: InferRequestType<typeof client.SuperfundProducts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SuperfundProducts.$get(args, options))
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

export async function postTimesheetsTimesheetID(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Timesheets[':TimesheetID'].$post(args, options))
}
