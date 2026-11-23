import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionBatchDeleteAttributes(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDeleteAttributes'].$get(args, options))
}

export async function postActionBatchDeleteAttributes(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDeleteAttributes'].$post(args, options))
}

export async function getActionBatchPutAttributes(
  args: InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchPutAttributes'].$get(args, options))
}

export async function postActionBatchPutAttributes(
  args: InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchPutAttributes'].$post(args, options))
}

export async function getActionCreateDomain(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDomain'].$get(args, options))
}

export async function postActionCreateDomain(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDomain'].$post(args, options))
}

export async function getActionDeleteAttributes(
  args: InferRequestType<(typeof client)['#Action=DeleteAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAttributes'].$get(args, options))
}

export async function postActionDeleteAttributes(
  args: InferRequestType<(typeof client)['#Action=DeleteAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAttributes'].$post(args, options))
}

export async function getActionDeleteDomain(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDomain'].$get(args, options))
}

export async function postActionDeleteDomain(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDomain'].$post(args, options))
}

export async function getActionDomainMetadata(
  args: InferRequestType<(typeof client)['#Action=DomainMetadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DomainMetadata'].$get(args, options))
}

export async function postActionDomainMetadata(
  args: InferRequestType<(typeof client)['#Action=DomainMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DomainMetadata'].$post(args, options))
}

export async function getActionGetAttributes(
  args: InferRequestType<(typeof client)['#Action=GetAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAttributes'].$get(args, options))
}

export async function postActionGetAttributes(
  args: InferRequestType<(typeof client)['#Action=GetAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAttributes'].$post(args, options))
}

export async function getActionListDomains(
  args: InferRequestType<(typeof client)['#Action=ListDomains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDomains'].$get(args, options))
}

export async function postActionListDomains(
  args: InferRequestType<(typeof client)['#Action=ListDomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDomains'].$post(args, options))
}

export async function getActionPutAttributes(
  args: InferRequestType<(typeof client)['#Action=PutAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutAttributes'].$get(args, options))
}

export async function postActionPutAttributes(
  args: InferRequestType<(typeof client)['#Action=PutAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutAttributes'].$post(args, options))
}

export async function getActionSelect(
  args: InferRequestType<(typeof client)['#Action=Select']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Select'].$get(args, options))
}

export async function postActionSelect(
  args: InferRequestType<(typeof client)['#Action=Select']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Select'].$post(args, options))
}
