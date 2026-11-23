import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchCancelChangeSetCatalogChangeSetId(
  args: InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['CancelChangeSet#catalog&changeSetId'].$patch(args, options))
}

export async function deleteDeleteResourcePolicyResourceArn(
  args: InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['DeleteResourcePolicy#resourceArn'].$delete(args, options))
}

export async function getDescribeChangeSetCatalogChangeSetId(
  args: InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['DescribeChangeSet#catalog&changeSetId'].$get(args, options))
}

export async function getDescribeEntityCatalogEntityId(
  args: InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['DescribeEntity#catalog&entityId'].$get(args, options))
}

export async function getGetResourcePolicyResourceArn(
  args: InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetResourcePolicy#resourceArn'].$get(args, options))
}

export async function postListChangeSets(
  args: InferRequestType<typeof client.ListChangeSets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListChangeSets.$post(args, options))
}

export async function postListEntities(
  args: InferRequestType<typeof client.ListEntities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListEntities.$post(args, options))
}

export async function postListTagsForResource(
  args: InferRequestType<typeof client.ListTagsForResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTagsForResource.$post(args, options))
}

export async function postPutResourcePolicy(
  args: InferRequestType<typeof client.PutResourcePolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutResourcePolicy.$post(args, options))
}

export async function postStartChangeSet(
  args: InferRequestType<typeof client.StartChangeSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartChangeSet.$post(args, options))
}

export async function postTagResource(
  args: InferRequestType<typeof client.TagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TagResource.$post(args, options))
}

export async function postUntagResource(
  args: InferRequestType<typeof client.UntagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UntagResource.$post(args, options))
}
