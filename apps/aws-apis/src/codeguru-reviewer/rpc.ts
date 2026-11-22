import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAssociations(
  args: InferRequestType<typeof client.associations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.$get(args, options))
}

export async function postAssociations(
  args: InferRequestType<typeof client.associations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.$post(args, options))
}

export async function postCodereviews(
  args: InferRequestType<typeof client.codereviews.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.codereviews.$post(args, options))
}

export async function getCodereviewsCodeReviewArn(
  args: InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.codereviews[':CodeReviewArn'].$get(args, options))
}

export async function getFeedbackCodeReviewArnRecommendationId(
  args: InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback[':CodeReviewArn#RecommendationId'].$get(args, options))
}

export async function getAssociationsAssociationArn(
  args: InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations[':AssociationArn'].$get(args, options))
}

export async function deleteAssociationsAssociationArn(
  args: InferRequestType<(typeof client.associations)[':AssociationArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations[':AssociationArn'].$delete(args, options))
}

export async function getCodereviewsType(
  args: InferRequestType<(typeof client)['codereviews#Type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['codereviews#Type'].$get(args, options))
}

export async function getFeedbackCodeReviewArnRecommendationFeedback(
  args: InferRequestType<
    (typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.feedback[':CodeReviewArn'].RecommendationFeedback.$get(args, options),
  )
}

export async function getCodereviewsCodeReviewArnRecommendations(
  args: InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.codereviews[':CodeReviewArn'].Recommendations.$get(args, options),
  )
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

export async function putFeedback(
  args: InferRequestType<typeof client.feedback.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback.$put(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
