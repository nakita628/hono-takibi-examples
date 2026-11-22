import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSuggestions(
  args: InferRequestType<typeof client.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions.$get(args, options))
}

export async function getSuggestionsConfiguration(
  args: InferRequestType<typeof client.suggestions.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions.configuration.$get(args, options))
}

export async function putSuggestionsConfiguration(
  args: InferRequestType<typeof client.suggestions.configuration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions.configuration.$put(args, options))
}

export async function getSuggestionsConfigurationAutoapprovalToggle(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions.configuration.autoapproval.toggle.$get(args, options),
  )
}

export async function putSuggestionsConfigurationAutoapprovalToggle(
  args: InferRequestType<typeof client.suggestions.configuration.autoapproval.toggle.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions.configuration.autoapproval.toggle.$put(args, options),
  )
}

export async function putSuggestionsConfigurationAutoapprovalToggleSellerSellerId(
  args: InferRequestType<
    (typeof client.suggestions.configuration.autoapproval.toggle.seller)[':sellerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions.configuration.autoapproval.toggle.seller[':sellerId'].$put(args, options),
  )
}

export async function getSuggestionsConfigurationSellerSellerId(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions.configuration.seller[':sellerId'].$get(args, options),
  )
}

export async function putSuggestionsConfigurationSellerSellerId(
  args: InferRequestType<(typeof client.suggestions.configuration.seller)[':sellerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions.configuration.seller[':sellerId'].$put(args, options),
  )
}

export async function putSuggestionsMatchesActionActionName(
  args: InferRequestType<(typeof client.suggestions.matches.action)[':actionName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions.matches.action[':actionName'].$put(args, options))
}

export async function getSuggestionsSellerIdSellerSkuId(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$get(args, options))
}

export async function putSuggestionsSellerIdSellerSkuId(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$put(args, options))
}

export async function deleteSuggestionsSellerIdSellerSkuId(
  args: InferRequestType<(typeof client.suggestions)[':sellerId'][':sellerSkuId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suggestions[':sellerId'][':sellerSkuId'].$delete(args, options))
}

export async function getSuggestionsSellerIdSellerskuidVersions(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions[':sellerId'][':sellerskuid'].versions.$get(args, options),
  )
}

export async function getSuggestionsSellerIdSellerskuidVersionsVersion(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].$get(args, options),
  )
}

export async function putSuggestionsSellerIdSellerskuidVersionsVersionMatchesMatchid(
  args: InferRequestType<
    (typeof client.suggestions)[':sellerId'][':sellerskuid']['versions'][':version']['matches'][':matchid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.suggestions[':sellerId'][':sellerskuid'].versions[':version'].matches[':matchid'].$put(
      args,
      options,
    ),
  )
}
