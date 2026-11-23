import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompanyEmployees(
  args: InferRequestType<typeof client.company.employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.employees.$get(args, options))
}

export async function postCompanyEmployees(
  args: InferRequestType<typeof client.company.employees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.employees.$post(args, options))
}

export async function getCompanyEmployeesEmployeeId(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.employees[':employee_id'].$get(args, options))
}

export async function patchCompanyEmployeesEmployeeId(
  args: InferRequestType<(typeof client.company.employees)[':employee_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.employees[':employee_id'].$patch(args, options))
}

export async function getCompanyEmployeesEmployeeIdAbsencesBalance(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['absences']['balance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.company.employees[':employee_id'].absences.balance.$get(args, options),
  )
}

export async function getCompanyEmployeesCustomAttributes(
  args: InferRequestType<(typeof client.company.employees)['custom-attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.employees['custom-attributes'].$get(args, options))
}

export async function getCompanyEmployeesAttributes(
  args: InferRequestType<typeof client.company.employees.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.employees.attributes.$get(args, options))
}

export async function getCompanyEmployeesEmployeeIdProfilePictureWidth(
  args: InferRequestType<
    (typeof client.company.employees)[':employee_id']['profile-picture'][':width']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.company.employees[':employee_id']['profile-picture'][':width'].$get(args, options),
  )
}

export async function getCompanyAttendances(
  args: InferRequestType<typeof client.company.attendances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances.$get(args, options))
}

export async function postCompanyAttendances(
  args: InferRequestType<typeof client.company.attendances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances.$post(args, options))
}

export async function deleteCompanyAttendancesId(
  args: InferRequestType<(typeof client.company.attendances)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances[':id'].$delete(args, options))
}

export async function patchCompanyAttendancesId(
  args: InferRequestType<(typeof client.company.attendances)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances[':id'].$patch(args, options))
}

export async function getCompanyAttendancesProjects(
  args: InferRequestType<typeof client.company.attendances.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances.projects.$get(args, options))
}

export async function postCompanyAttendancesProjects(
  args: InferRequestType<typeof client.company.attendances.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances.projects.$post(args, options))
}

export async function deleteCompanyAttendancesProjectsId(
  args: InferRequestType<(typeof client.company.attendances.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances.projects[':id'].$delete(args, options))
}

export async function patchCompanyAttendancesProjectsId(
  args: InferRequestType<(typeof client.company.attendances.projects)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.attendances.projects[':id'].$patch(args, options))
}

export async function getCompanyTimeOffTypes(
  args: InferRequestType<(typeof client.company)['time-off-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['time-off-types'].$get(args, options))
}

export async function getCompanyTimeOffs(
  args: InferRequestType<(typeof client.company)['time-offs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['time-offs'].$get(args, options))
}

export async function postCompanyTimeOffs(
  args: InferRequestType<(typeof client.company)['time-offs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['time-offs'].$post(args, options))
}

export async function getCompanyTimeOffsId(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['time-offs'][':id'].$get(args, options))
}

export async function deleteCompanyTimeOffsId(
  args: InferRequestType<(typeof client.company)['time-offs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['time-offs'][':id'].$delete(args, options))
}

export async function getCompanyAbsencePeriods(
  args: InferRequestType<(typeof client.company)['absence-periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['absence-periods'].$get(args, options))
}

export async function postCompanyAbsencePeriods(
  args: InferRequestType<(typeof client.company)['absence-periods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['absence-periods'].$post(args, options))
}

export async function deleteCompanyAbsencePeriodsId(
  args: InferRequestType<(typeof client.company)['absence-periods'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['absence-periods'][':id'].$delete(args, options))
}

export async function getCompanyDocumentCategories(
  args: InferRequestType<(typeof client.company)['document-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['document-categories'].$get(args, options))
}

export async function postCompanyDocuments(
  args: InferRequestType<typeof client.company.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.documents.$post(args, options))
}

export async function getCompanyCustomReportsReports(
  args: InferRequestType<(typeof client.company)['custom-reports']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['custom-reports'].reports.$get(args, options))
}

export async function getCompanyCustomReportsReportsReportId(
  args: InferRequestType<
    (typeof client.company)['custom-reports']['reports'][':report_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.company['custom-reports'].reports[':report_id'].$get(args, options),
  )
}

export async function getCompanyCustomReportsColumns(
  args: InferRequestType<(typeof client.company)['custom-reports']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company['custom-reports'].columns.$get(args, options))
}
