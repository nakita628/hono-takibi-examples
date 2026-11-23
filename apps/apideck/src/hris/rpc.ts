import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHrisCompanies(
  args: InferRequestType<typeof client.hris.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.companies.$get(args, options))
}

export async function postHrisCompanies(
  args: InferRequestType<typeof client.hris.companies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.companies.$post(args, options))
}

export async function getHrisCompaniesId(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.companies[':id'].$get(args, options))
}

export async function deleteHrisCompaniesId(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.companies[':id'].$delete(args, options))
}

export async function patchHrisCompaniesId(
  args: InferRequestType<(typeof client.hris.companies)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.companies[':id'].$patch(args, options))
}

export async function getHrisDepartments(
  args: InferRequestType<typeof client.hris.departments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.departments.$get(args, options))
}

export async function postHrisDepartments(
  args: InferRequestType<typeof client.hris.departments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.departments.$post(args, options))
}

export async function getHrisDepartmentsId(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.departments[':id'].$get(args, options))
}

export async function deleteHrisDepartmentsId(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.departments[':id'].$delete(args, options))
}

export async function patchHrisDepartmentsId(
  args: InferRequestType<(typeof client.hris.departments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.departments[':id'].$patch(args, options))
}

export async function getHrisEmployees(
  args: InferRequestType<typeof client.hris.employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.employees.$get(args, options))
}

export async function postHrisEmployees(
  args: InferRequestType<typeof client.hris.employees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.employees.$post(args, options))
}

export async function getHrisEmployeesId(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.employees[':id'].$get(args, options))
}

export async function deleteHrisEmployeesId(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.employees[':id'].$delete(args, options))
}

export async function patchHrisEmployeesId(
  args: InferRequestType<(typeof client.hris.employees)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.employees[':id'].$patch(args, options))
}

export async function getHrisJobsEmployeesEmployeeId(
  args: InferRequestType<(typeof client.hris.jobs.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.jobs.employees[':employee_id'].$get(args, options))
}

export async function getHrisJobsEmployeesEmployeeIdJobsJobId(
  args: InferRequestType<
    (typeof client.hris.jobs.employees)[':employee_id']['jobs'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hris.jobs.employees[':employee_id'].jobs[':job_id'].$get(args, options),
  )
}

export async function getHrisPayrolls(
  args: InferRequestType<typeof client.hris.payrolls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.payrolls.$get(args, options))
}

export async function getHrisPayrollsEmployeesEmployeeId(
  args: InferRequestType<(typeof client.hris.payrolls.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.payrolls.employees[':employee_id'].$get(args, options))
}

export async function getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollId(
  args: InferRequestType<
    (typeof client.hris.payrolls.employees)[':employee_id']['payrolls'][':payroll_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hris.payrolls.employees[':employee_id'].payrolls[':payroll_id'].$get(args, options),
  )
}

export async function getHrisPayrollsPayrollId(
  args: InferRequestType<(typeof client.hris.payrolls)[':payroll_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.payrolls[':payroll_id'].$get(args, options))
}

export async function getHrisSchedulesEmployeesEmployeeId(
  args: InferRequestType<(typeof client.hris.schedules.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris.schedules.employees[':employee_id'].$get(args, options))
}

export async function getHrisTimeOffRequests(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris['time-off-requests'].$get(args, options))
}

export async function postHrisTimeOffRequests(
  args: InferRequestType<(typeof client.hris)['time-off-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris['time-off-requests'].$post(args, options))
}

export async function getHrisTimeOffRequestsId(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris['time-off-requests'][':id'].$get(args, options))
}

export async function deleteHrisTimeOffRequestsId(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris['time-off-requests'][':id'].$delete(args, options))
}

export async function patchHrisTimeOffRequestsId(
  args: InferRequestType<(typeof client.hris)['time-off-requests'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hris['time-off-requests'][':id'].$patch(args, options))
}
