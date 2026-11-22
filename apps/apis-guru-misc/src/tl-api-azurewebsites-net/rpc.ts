import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putApiArticle(
  args: InferRequestType<typeof client.api.Article.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.$put(args, options))
}

export async function postApiArticle(
  args: InferRequestType<typeof client.api.Article.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.$post(args, options))
}

export async function deleteApiArticle(
  args: InferRequestType<typeof client.api.Article.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.$delete(args, options))
}

export async function putApiArticleArticleGymDetails(
  args: InferRequestType<typeof client.api.Article.ArticleGymDetails.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.ArticleGymDetails.$put(args, options))
}

export async function getApiArticleGetAddons(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.GetAddons.$get(args, options))
}

export async function getApiArticleGymArticleArticleIdGymId(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Article.GymArticle[':articleId'][':gymId'].$get(args, options),
  )
}

export async function postApiArticleMeasureUnit(
  args: InferRequestType<typeof client.api.Article.MeasureUnit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.MeasureUnit.$post(args, options))
}

export async function getApiArticleMeasureUnits(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.MeasureUnits.$get(args, options))
}

export async function getApiArticleRevenueAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Article.RevenueAccounts.$get(undefined, options))
}

export async function getApiArticleSearch(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.Search.$get(args, options))
}

export async function putApiArticleUpdateStatus(
  args: InferRequestType<typeof client.api.Article.UpdateStatus.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article.UpdateStatus.$put(args, options))
}

export async function getApiArticleArticleID(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Article[':articleID'].$get(args, options))
}

export async function postApiAuthLogin(
  args: InferRequestType<typeof client.api.Auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Auth.login.$post(args, options))
}

export async function getApiGymGymID(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Gym[':gymID'].$get(args, options))
}

export async function getApiMembership(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Membership.$get(undefined, options))
}

export async function postApiMembership(
  args: InferRequestType<typeof client.api.Membership.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Membership.$post(args, options))
}

export async function getApiPackage(
  args: InferRequestType<typeof client.api.Package.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Package.$get(args, options))
}

export async function putApiPackage(
  args: InferRequestType<typeof client.api.Package.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Package.$put(args, options))
}

export async function postApiPackage(
  args: InferRequestType<typeof client.api.Package.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Package.$post(args, options))
}

export async function deleteApiPackage(
  args: InferRequestType<typeof client.api.Package.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Package.$delete(args, options))
}

export async function getApiPackageSearch(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Package.Search.$get(args, options))
}

export async function putApiPackageUpdateStatus(
  args: InferRequestType<typeof client.api.Package.UpdateStatus.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Package.UpdateStatus.$put(args, options))
}

export async function getApiStatus(
  args: InferRequestType<typeof client.api.Status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Status.$get(args, options))
}

export async function getApiTest(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Test.$get(undefined, options))
}

export async function getApiUser(options?: ClientRequestOptions) {
  return await parseResponse(client.api.User.$get(undefined, options))
}

export async function postApiUserRegisterUser(
  args: InferRequestType<typeof client.api.User.registerUser.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.User.registerUser.$post(args, options))
}

export async function putApiUserUpdateuser(
  args: InferRequestType<typeof client.api.User.updateuser.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.User.updateuser.$put(args, options))
}
