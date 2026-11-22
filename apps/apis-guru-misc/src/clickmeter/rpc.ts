import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function postAccount(
  args: InferRequestType<typeof client.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$post(args, options))
}

export async function getAccountDomainwhitelist(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.domainwhitelist.$get(args, options))
}

export async function postAccountDomainwhitelist(
  args: InferRequestType<typeof client.account.domainwhitelist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.domainwhitelist.$post(args, options))
}

export async function deleteAccountDomainwhitelistWhitelistId(
  args: InferRequestType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.domainwhitelist[':whitelistId'].$delete(args, options))
}

export async function getAccountGuests(
  args: InferRequestType<typeof client.account.guests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests.$get(args, options))
}

export async function postAccountGuests(
  args: InferRequestType<typeof client.account.guests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests.$post(args, options))
}

export async function getAccountGuestsCount(
  args: InferRequestType<typeof client.account.guests.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests.count.$get(args, options))
}

export async function getAccountGuestsGuestId(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests[':guestId'].$get(args, options))
}

export async function postAccountGuestsGuestId(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests[':guestId'].$post(args, options))
}

export async function deleteAccountGuestsGuestId(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests[':guestId'].$delete(args, options))
}

export async function getAccountGuestsGuestIdPermissions(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.guests[':guestId'].permissions.$get(args, options))
}

export async function getAccountGuestsGuestIdPermissionsCount(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.guests[':guestId'].permissions.count.$get(args, options),
  )
}

export async function putAccountGuestsGuestIdTypePermissionsPatch(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.guests[':guestId'][':type'].permissions.patch.$put(args, options),
  )
}

export async function postAccountGuestsGuestIdTypePermissionsPatch(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.guests[':guestId'][':type'].permissions.patch.$post(args, options),
  )
}

export async function getAccountIpblacklist(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.ipblacklist.$get(args, options))
}

export async function postAccountIpblacklist(
  args: InferRequestType<typeof client.account.ipblacklist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.ipblacklist.$post(args, options))
}

export async function deleteAccountIpblacklistBlacklistId(
  args: InferRequestType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.ipblacklist[':blacklistId'].$delete(args, options))
}

export async function getAccountPlan(options?: ClientRequestOptions) {
  return await parseResponse(client.account.plan.$get(undefined, options))
}

export async function getAggregated(
  args: InferRequestType<typeof client.aggregated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregated.$get(args, options))
}

export async function getAggregatedList(
  args: InferRequestType<typeof client.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregated.list.$get(args, options))
}

export async function getAggregatedSummaryConversions(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregated.summary.conversions.$get(args, options))
}

export async function getAggregatedSummaryDatapoints(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregated.summary.datapoints.$get(args, options))
}

export async function getAggregatedSummaryGroups(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aggregated.summary.groups.$get(args, options))
}

export async function getClickstream(
  args: InferRequestType<typeof client.clickstream.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clickstream.$get(args, options))
}

export async function getConversions(
  args: InferRequestType<typeof client.conversions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions.$get(args, options))
}

export async function postConversions(
  args: InferRequestType<typeof client.conversions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions.$post(args, options))
}

export async function getConversionsAggregatedList(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions.aggregated.list.$get(args, options))
}

export async function getConversionsCount(
  args: InferRequestType<typeof client.conversions.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions.count.$get(args, options))
}

export async function getConversionsConversionId(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].$get(args, options))
}

export async function postConversionsConversionId(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].$post(args, options))
}

export async function deleteConversionsConversionId(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].$delete(args, options))
}

export async function getConversionsConversionIdAggregated(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].aggregated.$get(args, options))
}

export async function getConversionsConversionIdAggregatedList(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversions[':conversionId'].aggregated.list.$get(args, options),
  )
}

export async function getConversionsConversionIdDatapoints(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].datapoints.$get(args, options))
}

export async function putConversionsConversionIdDatapointsBatchPatch(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversions[':conversionId'].datapoints.batch.patch.$put(args, options),
  )
}

export async function getConversionsConversionIdDatapointsCount(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversions[':conversionId'].datapoints.count.$get(args, options),
  )
}

export async function putConversionsConversionIdDatapointsPatch(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversions[':conversionId'].datapoints.patch.$put(args, options),
  )
}

export async function getConversionsConversionIdHits(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].hits.$get(args, options))
}

export async function putConversionsConversionIdNotes(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['notes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversions[':conversionId'].notes.$put(args, options))
}

export async function getDatapoints(
  args: InferRequestType<typeof client.datapoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.$get(args, options))
}

export async function postDatapoints(
  args: InferRequestType<typeof client.datapoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.$post(args, options))
}

export async function getDatapointsAggregated(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.aggregated.$get(args, options))
}

export async function getDatapointsAggregatedList(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.aggregated.list.$get(args, options))
}

export async function putDatapointsBatch(
  args: InferRequestType<typeof client.datapoints.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.batch.$put(args, options))
}

export async function postDatapointsBatch(
  args: InferRequestType<typeof client.datapoints.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.batch.$post(args, options))
}

export async function deleteDatapointsBatch(
  args: InferRequestType<typeof client.datapoints.batch.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.batch.$delete(args, options))
}

export async function getDatapointsCount(
  args: InferRequestType<typeof client.datapoints.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints.count.$get(args, options))
}

export async function getDatapointsId(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].$get(args, options))
}

export async function postDatapointsId(
  args: InferRequestType<(typeof client.datapoints)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].$post(args, options))
}

export async function deleteDatapointsId(
  args: InferRequestType<(typeof client.datapoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].$delete(args, options))
}

export async function getDatapointsIdAggregated(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].aggregated.$get(args, options))
}

export async function getDatapointsIdAggregatedList(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].aggregated.list.$get(args, options))
}

export async function putDatapointsIdFavourite(
  args: InferRequestType<(typeof client.datapoints)[':id']['favourite']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].favourite.$put(args, options))
}

export async function getDatapointsIdHits(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].hits.$get(args, options))
}

export async function putDatapointsIdNotes(
  args: InferRequestType<(typeof client.datapoints)[':id']['notes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datapoints[':id'].notes.$put(args, options))
}

export async function getDomains(
  args: InferRequestType<typeof client.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$get(args, options))
}

export async function postDomains(
  args: InferRequestType<typeof client.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$post(args, options))
}

export async function getDomainsCount(
  args: InferRequestType<typeof client.domains.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.count.$get(args, options))
}

export async function getDomainsId(
  args: InferRequestType<(typeof client.domains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':id'].$get(args, options))
}

export async function postDomainsId(
  args: InferRequestType<(typeof client.domains)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':id'].$post(args, options))
}

export async function deleteDomainsId(
  args: InferRequestType<(typeof client.domains)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':id'].$delete(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function getGroupsAggregated(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.aggregated.$get(args, options))
}

export async function getGroupsAggregatedList(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.aggregated.list.$get(args, options))
}

export async function getGroupsCount(
  args: InferRequestType<typeof client.groups.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.count.$get(args, options))
}

export async function getGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$get(args, options))
}

export async function postGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$post(args, options))
}

export async function deleteGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$delete(args, options))
}

export async function getGroupsIdAggregated(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].aggregated.$get(args, options))
}

export async function getGroupsIdAggregatedList(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].aggregated.list.$get(args, options))
}

export async function getGroupsIdAggregatedSummary(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].aggregated.summary.$get(args, options))
}

export async function getGroupsIdDatapoints(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].datapoints.$get(args, options))
}

export async function postGroupsIdDatapoints(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].datapoints.$post(args, options))
}

export async function getGroupsIdDatapointsCount(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].datapoints.count.$get(args, options))
}

export async function putGroupsIdFavourite(
  args: InferRequestType<(typeof client.groups)[':id']['favourite']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].favourite.$put(args, options))
}

export async function getGroupsIdHits(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].hits.$get(args, options))
}

export async function putGroupsIdNotes(
  args: InferRequestType<(typeof client.groups)[':id']['notes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].notes.$put(args, options))
}

export async function getHits(
  args: InferRequestType<typeof client.hits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hits.$get(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getMePlan(options?: ClientRequestOptions) {
  return await parseResponse(client.me.plan.$get(undefined, options))
}

export async function getRetargeting(
  args: InferRequestType<typeof client.retargeting.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting.$get(args, options))
}

export async function postRetargeting(
  args: InferRequestType<typeof client.retargeting.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting.$post(args, options))
}

export async function getRetargetingCount(options?: ClientRequestOptions) {
  return await parseResponse(client.retargeting.count.$get(undefined, options))
}

export async function getRetargetingId(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting[':id'].$get(args, options))
}

export async function postRetargetingId(
  args: InferRequestType<(typeof client.retargeting)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting[':id'].$post(args, options))
}

export async function deleteRetargetingId(
  args: InferRequestType<(typeof client.retargeting)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting[':id'].$delete(args, options))
}

export async function getRetargetingIdDatapoints(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting[':id'].datapoints.$get(args, options))
}

export async function getRetargetingIdDatapointsCount(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retargeting[':id'].datapoints.count.$get(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function getTagsCount(
  args: InferRequestType<typeof client.tags.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.count.$get(args, options))
}

export async function getTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].$get(args, options))
}

export async function deleteTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].$delete(args, options))
}

export async function getTagsTagIdDatapoints(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].datapoints.$get(args, options))
}

export async function deleteTagsTagIdDatapoints(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].datapoints.$delete(args, options))
}

export async function getTagsTagIdDatapointsCount(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].datapoints.count.$get(args, options))
}

export async function putTagsTagIdDatapointsPatch(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].datapoints.patch.$put(args, options))
}

export async function getTagsTagIdGroups(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].groups.$get(args, options))
}

export async function deleteTagsTagIdGroups(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].groups.$delete(args, options))
}

export async function getTagsTagIdGroupsCount(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].groups.count.$get(args, options))
}

export async function putTagsTagIdGroupsPatch(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].groups.patch.$put(args, options))
}

export async function putTagsTagIdName(
  args: InferRequestType<(typeof client.tags)[':tagId']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tagId'].name.$put(args, options))
}
