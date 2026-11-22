import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function postV1beta1NameMove(
  args: InferRequestType<(typeof client.v1beta1)[':name:move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:move'].$post(args, options))
}

export async function postV1beta1NameSplit(
  args: InferRequestType<(typeof client.v1beta1)[':name:split']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:split'].$post(args, options))
}

export async function getV1beta1ParentAssignments(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].assignments.$get(args, options))
}

export async function postV1beta1ParentAssignments(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['assignments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].assignments.$post(args, options))
}

export async function getV1beta1ParentCapacityCommitments(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['capacityCommitments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].capacityCommitments.$get(args, options))
}

export async function postV1beta1ParentCapacityCommitments(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['capacityCommitments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].capacityCommitments.$post(args, options))
}

export async function postV1beta1ParentCapacityCommitmentsMerge(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['capacityCommitments:merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['capacityCommitments:merge'].$post(args, options),
  )
}

export async function getV1beta1ParentReservations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['reservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].reservations.$get(args, options))
}

export async function postV1beta1ParentReservations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['reservations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].reservations.$post(args, options))
}

export async function getV1beta1ParentSearchAssignments(
  args: InferRequestType<(typeof client.v1beta1)[':parent:searchAssignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:searchAssignments'].$get(args, options))
}
