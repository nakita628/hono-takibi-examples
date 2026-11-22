import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOperationCancelJobActionCancelJob(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=CancelJob&Action=CancelJob'].$get(args, options))
}

export async function postOperationCancelJobActionCancelJob(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=CancelJob&Action=CancelJob'].$post(args, options))
}

export async function getOperationCreateJobActionCreateJob(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=CreateJob&Action=CreateJob'].$get(args, options))
}

export async function postOperationCreateJobActionCreateJob(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=CreateJob&Action=CreateJob'].$post(args, options))
}

export async function getOperationGetShippingLabelActionGetShippingLabel(
  args: InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$get(args, options),
  )
}

export async function postOperationGetShippingLabelActionGetShippingLabel(
  args: InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$post(args, options),
  )
}

export async function getOperationGetStatusActionGetStatus(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=GetStatus&Action=GetStatus'].$get(args, options))
}

export async function postOperationGetStatusActionGetStatus(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=GetStatus&Action=GetStatus'].$post(args, options))
}

export async function getOperationListJobsActionListJobs(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=ListJobs&Action=ListJobs'].$get(args, options))
}

export async function postOperationListJobsActionListJobs(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=ListJobs&Action=ListJobs'].$post(args, options))
}

export async function getOperationUpdateJobActionUpdateJob(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=UpdateJob&Action=UpdateJob'].$get(args, options))
}

export async function postOperationUpdateJobActionUpdateJob(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Operation=UpdateJob&Action=UpdateJob'].$post(args, options))
}
