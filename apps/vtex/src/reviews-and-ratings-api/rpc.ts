import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRatingProductId(
  args: InferRequestType<(typeof client.rating)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rating[':productId'].$get(args, options))
}

export async function postReview(
  args: InferRequestType<typeof client.review.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review.$post(args, options))
}

export async function getReviewReviewId(
  args: InferRequestType<(typeof client.review)[':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':reviewId'].$get(args, options))
}

export async function deleteReviewReviewId(
  args: InferRequestType<(typeof client.review)[':reviewId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':reviewId'].$delete(args, options))
}

export async function patchReviewReviewId(
  args: InferRequestType<(typeof client.review)[':reviewId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':reviewId'].$patch(args, options))
}

export async function getReviews(
  args: InferRequestType<typeof client.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.$get(args, options))
}

export async function postReviews(
  args: InferRequestType<typeof client.reviews.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.$post(args, options))
}

export async function deleteReviews(
  args: InferRequestType<typeof client.reviews.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.$delete(args, options))
}
