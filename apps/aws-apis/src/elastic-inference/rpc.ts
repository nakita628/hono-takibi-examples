import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDescribeAcceleratorOfferings(
  args: InferRequestType<(typeof client)['describe-accelerator-offerings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-accelerator-offerings'].$post(args, options))
}

export async function getDescribeAcceleratorTypes(
  args: InferRequestType<(typeof client)['describe-accelerator-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-accelerator-types'].$get(args, options))
}

export async function postDescribeAccelerators(
  args: InferRequestType<(typeof client)['describe-accelerators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['describe-accelerators'].$post(args, options))
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

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
