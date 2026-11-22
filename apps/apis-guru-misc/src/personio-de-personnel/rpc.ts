import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getCompanyEmployees(options?: ClientRequestOptions) {
  return await parseResponse(client.company.employees.$get(undefined, options))
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
