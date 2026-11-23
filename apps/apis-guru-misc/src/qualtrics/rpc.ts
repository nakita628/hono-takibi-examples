import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDirectoriesDirectoryIdMailinglistsMailingListIdContacts(
  args: InferRequestType<
    (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.directories[':DirectoryId'].mailinglists[':MailingListId'].contacts.$post(args, options),
  )
}

export async function getDistributions(
  args: InferRequestType<typeof client.distributions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions.$get(args, options))
}

export async function postDistributions(
  args: InferRequestType<typeof client.distributions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions.$post(args, options))
}

export async function getDistributionsDistributionIdLinks(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions[':DistributionId'].links.$get(args, options))
}

export async function postEventsubscriptionsIndex(
  args: InferRequestType<typeof client.eventsubscriptions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsubscriptions.index.$post(args, options))
}

export async function deleteEventsubscriptionsIndex(
  args: InferRequestType<typeof client.eventsubscriptions.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsubscriptions.index.$delete(args, options))
}

export async function getEventsubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventsubscriptions[':SubscriptionId'].$get(args, options))
}

export async function getSurveyDefinitionsSurveyId(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['survey-definitions'][':SurveyId'].$get(args, options))
}
