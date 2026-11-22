import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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
