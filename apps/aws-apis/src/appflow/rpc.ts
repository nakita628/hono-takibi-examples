import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateConnectorProfile(
  args: InferRequestType<(typeof client)['create-connector-profile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['create-connector-profile'].$post(args, options))
}

export async function postCreateFlow(
  args: InferRequestType<(typeof client)['create-flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['create-flow'].$post(args, options))
}

export async function postDeleteConnectorProfile(
  args: InferRequestType<(typeof client)['delete-connector-profile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['delete-connector-profile'].$post(args, options))
}

export async function postDeleteFlow(
  args: InferRequestType<(typeof client)['delete-flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['delete-flow'].$post(args, options))
}

export async function postDescribeConnector(
  args: InferRequestType<(typeof client)['describe-connector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-connector'].$post(args, options))
}

export async function postDescribeConnectorEntity(
  args: InferRequestType<(typeof client)['describe-connector-entity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-connector-entity'].$post(args, options))
}

export async function postDescribeConnectorProfiles(
  args: InferRequestType<(typeof client)['describe-connector-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-connector-profiles'].$post(args, options))
}

export async function postDescribeConnectors(
  args: InferRequestType<(typeof client)['describe-connectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-connectors'].$post(args, options))
}

export async function postDescribeFlow(
  args: InferRequestType<(typeof client)['describe-flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-flow'].$post(args, options))
}

export async function postDescribeFlowExecutionRecords(
  args: InferRequestType<(typeof client)['describe-flow-execution-records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-flow-execution-records'].$post(args, options))
}

export async function postListConnectorEntities(
  args: InferRequestType<(typeof client)['list-connector-entities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['list-connector-entities'].$post(args, options))
}

export async function postListConnectors(
  args: InferRequestType<(typeof client)['list-connectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['list-connectors'].$post(args, options))
}

export async function postListFlows(
  args: InferRequestType<(typeof client)['list-flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['list-flows'].$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postRegisterConnector(
  args: InferRequestType<(typeof client)['register-connector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['register-connector'].$post(args, options))
}

export async function postStartFlow(
  args: InferRequestType<(typeof client)['start-flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['start-flow'].$post(args, options))
}

export async function postStopFlow(
  args: InferRequestType<(typeof client)['stop-flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stop-flow'].$post(args, options))
}

export async function postUnregisterConnector(
  args: InferRequestType<(typeof client)['unregister-connector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['unregister-connector'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateConnectorProfile(
  args: InferRequestType<(typeof client)['update-connector-profile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update-connector-profile'].$post(args, options))
}

export async function postUpdateConnectorRegistration(
  args: InferRequestType<(typeof client)['update-connector-registration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update-connector-registration'].$post(args, options))
}

export async function postUpdateFlow(
  args: InferRequestType<(typeof client)['update-flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update-flow'].$post(args, options))
}
