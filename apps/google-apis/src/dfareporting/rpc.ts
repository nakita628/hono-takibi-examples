import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getReportsReportIdFilesFileId(
  args: InferRequestType<(typeof client.reports)[':reportId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':reportId'].files[':fileId'].$get(args, options))
}

export async function getUserprofiles(
  args: InferRequestType<typeof client.userprofiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles.$get(args, options))
}

export async function getUserprofilesProfileId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].$get(args, options))
}

export async function getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountActiveAdSummaries'][':summaryAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountActiveAdSummaries[':summaryAccountId'].$get(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdAccountPermissionGroups(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountPermissionGroups.$get(args, options),
  )
}

export async function getUserprofilesProfileIdAccountPermissionGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissionGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountPermissionGroups[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdAccountPermissions(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountPermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountPermissions.$get(args, options),
  )
}

export async function getUserprofilesProfileIdAccountPermissionsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountPermissions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountPermissions[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdAccountUserProfiles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountUserProfiles.$get(args, options),
  )
}

export async function putUserprofilesProfileIdAccountUserProfiles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accountUserProfiles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountUserProfiles.$put(args, options),
  )
}

export async function postUserprofilesProfileIdAccountUserProfiles(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountUserProfiles.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdAccountUserProfiles(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountUserProfiles.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdAccountUserProfilesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['accountUserProfiles'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].accountUserProfiles[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdAccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].accounts.$get(args, options))
}

export async function putUserprofilesProfileIdAccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].accounts.$put(args, options))
}

export async function patchUserprofilesProfileIdAccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].accounts.$patch(args, options))
}

export async function getUserprofilesProfileIdAccountsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].accounts[':id'].$get(args, options))
}

export async function getUserprofilesProfileIdAds(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].ads.$get(args, options))
}

export async function putUserprofilesProfileIdAds(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].ads.$put(args, options))
}

export async function postUserprofilesProfileIdAds(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].ads.$post(args, options))
}

export async function patchUserprofilesProfileIdAds(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].ads.$patch(args, options))
}

export async function getUserprofilesProfileIdAdsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['ads'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].ads[':id'].$get(args, options))
}

export async function getUserprofilesProfileIdAdvertiserGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].advertiserGroups.$get(args, options))
}

export async function putUserprofilesProfileIdAdvertiserGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].advertiserGroups.$put(args, options))
}

export async function postUserprofilesProfileIdAdvertiserGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserGroups.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdAdvertiserGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertiserGroups']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserGroups.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdAdvertiserGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserGroups[':id'].$get(args, options),
  )
}

export async function deleteUserprofilesProfileIdAdvertiserGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserGroups'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserGroups[':id'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdAdvertiserLandingPages(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserLandingPages.$get(args, options),
  )
}

export async function putUserprofilesProfileIdAdvertiserLandingPages(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserLandingPages.$put(args, options),
  )
}

export async function postUserprofilesProfileIdAdvertiserLandingPages(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserLandingPages.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdAdvertiserLandingPages(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserLandingPages.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdAdvertiserLandingPagesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['advertiserLandingPages'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertiserLandingPages[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdAdvertisers(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].advertisers.$get(args, options))
}

export async function putUserprofilesProfileIdAdvertisers(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].advertisers.$put(args, options))
}

export async function postUserprofilesProfileIdAdvertisers(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].advertisers.$post(args, options))
}

export async function patchUserprofilesProfileIdAdvertisers(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].advertisers.$patch(args, options))
}

export async function getUserprofilesProfileIdAdvertisersId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['advertisers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].advertisers[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdBrowsers(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['browsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].browsers.$get(args, options))
}

export async function getUserprofilesProfileIdCampaigns(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].campaigns.$get(args, options))
}

export async function putUserprofilesProfileIdCampaigns(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].campaigns.$put(args, options))
}

export async function postUserprofilesProfileIdCampaigns(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].campaigns.$post(args, options))
}

export async function patchUserprofilesProfileIdCampaigns(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].campaigns.$patch(args, options))
}

export async function getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].campaigns[':campaignId'].campaignCreativeAssociations.$get(
      args,
      options,
    ),
  )
}

export async function postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociations(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['campaigns'][':campaignId']['campaignCreativeAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].campaigns[':campaignId'].campaignCreativeAssociations.$post(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdCampaignsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['campaigns'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].campaigns[':id'].$get(args, options))
}

export async function getUserprofilesProfileIdChangeLogs(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].changeLogs.$get(args, options))
}

export async function getUserprofilesProfileIdChangeLogsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['changeLogs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].changeLogs[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdCities(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['cities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].cities.$get(args, options))
}

export async function getUserprofilesProfileIdConnectionTypes(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['connectionTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].connectionTypes.$get(args, options))
}

export async function getUserprofilesProfileIdConnectionTypesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['connectionTypes'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].connectionTypes[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdContentCategories(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].contentCategories.$get(args, options),
  )
}

export async function putUserprofilesProfileIdContentCategories(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].contentCategories.$put(args, options),
  )
}

export async function postUserprofilesProfileIdContentCategories(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].contentCategories.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdContentCategories(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['contentCategories']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].contentCategories.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdContentCategoriesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].contentCategories[':id'].$get(args, options),
  )
}

export async function deleteUserprofilesProfileIdContentCategoriesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['contentCategories'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].contentCategories[':id'].$delete(args, options),
  )
}

export async function postUserprofilesProfileIdConversionsBatchinsert(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['conversions']['batchinsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].conversions.batchinsert.$post(args, options),
  )
}

export async function postUserprofilesProfileIdConversionsBatchupdate(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['conversions']['batchupdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].conversions.batchupdate.$post(args, options),
  )
}

export async function getUserprofilesProfileIdCountries(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['countries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].countries.$get(args, options))
}

export async function getUserprofilesProfileIdCountriesDartId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['countries'][':dartId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].countries[':dartId'].$get(args, options),
  )
}

export async function postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssets(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeAssets'][':advertiserId']['creativeAssets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeAssets[':advertiserId'].creativeAssets.$post(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdCreativeFields(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeFields.$get(args, options))
}

export async function putUserprofilesProfileIdCreativeFields(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeFields.$put(args, options))
}

export async function postUserprofilesProfileIdCreativeFields(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeFields.$post(args, options))
}

export async function patchUserprofilesProfileIdCreativeFields(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeFields']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeFields.$patch(args, options))
}

export async function getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues.$get(
      args,
      options,
    ),
  )
}

export async function putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues.$put(
      args,
      options,
    ),
  )
}

export async function postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues.$post(
      args,
      options,
    ),
  )
}

export async function patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValues(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues.$patch(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
      ':id'
    ].$get(args, options),
  )
}

export async function deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':creativeFieldId']['creativeFieldValues'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':creativeFieldId'].creativeFieldValues[
      ':id'
    ].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdCreativeFieldsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':id'].$get(args, options),
  )
}

export async function deleteUserprofilesProfileIdCreativeFieldsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeFields'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeFields[':id'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdCreativeGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeGroups.$get(args, options))
}

export async function putUserprofilesProfileIdCreativeGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeGroups.$put(args, options))
}

export async function postUserprofilesProfileIdCreativeGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeGroups.$post(args, options))
}

export async function patchUserprofilesProfileIdCreativeGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creativeGroups']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creativeGroups.$patch(args, options))
}

export async function getUserprofilesProfileIdCreativeGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['creativeGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].creativeGroups[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdCreatives(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creatives.$get(args, options))
}

export async function putUserprofilesProfileIdCreatives(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creatives.$put(args, options))
}

export async function postUserprofilesProfileIdCreatives(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creatives.$post(args, options))
}

export async function patchUserprofilesProfileIdCreatives(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creatives.$patch(args, options))
}

export async function getUserprofilesProfileIdCreativesId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['creatives'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].creatives[':id'].$get(args, options))
}

export async function postUserprofilesProfileIdCustomEventsBatchinsert(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['customEvents']['batchinsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].customEvents.batchinsert.$post(args, options),
  )
}

export async function postUserprofilesProfileIdDimensionvaluesQuery(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dimensionvalues']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].dimensionvalues.query.$post(args, options),
  )
}

export async function getUserprofilesProfileIdDirectorySites(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].directorySites.$get(args, options))
}

export async function postUserprofilesProfileIdDirectorySites(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['directorySites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].directorySites.$post(args, options))
}

export async function getUserprofilesProfileIdDirectorySitesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['directorySites'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].directorySites[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdDynamicTargetingKeys(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].dynamicTargetingKeys.$get(args, options),
  )
}

export async function postUserprofilesProfileIdDynamicTargetingKeys(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].dynamicTargetingKeys.$post(args, options),
  )
}

export async function deleteUserprofilesProfileIdDynamicTargetingKeysObjectId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['dynamicTargetingKeys'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].dynamicTargetingKeys[':objectId'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdEventTags(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].eventTags.$get(args, options))
}

export async function putUserprofilesProfileIdEventTags(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].eventTags.$put(args, options))
}

export async function postUserprofilesProfileIdEventTags(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].eventTags.$post(args, options))
}

export async function patchUserprofilesProfileIdEventTags(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].eventTags.$patch(args, options))
}

export async function getUserprofilesProfileIdEventTagsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].eventTags[':id'].$get(args, options))
}

export async function deleteUserprofilesProfileIdEventTagsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['eventTags'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].eventTags[':id'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdFiles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].files.$get(args, options))
}

export async function getUserprofilesProfileIdFloodlightActivities(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities.$get(args, options),
  )
}

export async function putUserprofilesProfileIdFloodlightActivities(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities.$put(args, options),
  )
}

export async function postUserprofilesProfileIdFloodlightActivities(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdFloodlightActivities(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities.$patch(args, options),
  )
}

export async function postUserprofilesProfileIdFloodlightActivitiesGeneratetag(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities']['generatetag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities.generatetag.$post(args, options),
  )
}

export async function getUserprofilesProfileIdFloodlightActivitiesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities[':id'].$get(args, options),
  )
}

export async function deleteUserprofilesProfileIdFloodlightActivitiesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivities'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivities[':id'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdFloodlightActivityGroups(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivityGroups.$get(args, options),
  )
}

export async function putUserprofilesProfileIdFloodlightActivityGroups(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivityGroups.$put(args, options),
  )
}

export async function postUserprofilesProfileIdFloodlightActivityGroups(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivityGroups.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdFloodlightActivityGroups(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivityGroups.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdFloodlightActivityGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightActivityGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightActivityGroups[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdFloodlightConfigurations(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightConfigurations.$get(args, options),
  )
}

export async function putUserprofilesProfileIdFloodlightConfigurations(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightConfigurations.$put(args, options),
  )
}

export async function patchUserprofilesProfileIdFloodlightConfigurations(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightConfigurations.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdFloodlightConfigurationsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['floodlightConfigurations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].floodlightConfigurations[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdLanguages(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].languages.$get(args, options))
}

export async function getUserprofilesProfileIdMetros(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['metros']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].metros.$get(args, options))
}

export async function getUserprofilesProfileIdMobileApps(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].mobileApps.$get(args, options))
}

export async function getUserprofilesProfileIdMobileAppsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileApps'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].mobileApps[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdMobileCarriers(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['mobileCarriers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].mobileCarriers.$get(args, options))
}

export async function getUserprofilesProfileIdMobileCarriersId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['mobileCarriers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].mobileCarriers[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdOperatingSystemVersions(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].operatingSystemVersions.$get(args, options),
  )
}

export async function getUserprofilesProfileIdOperatingSystemVersionsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystemVersions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].operatingSystemVersions[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdOperatingSystems(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['operatingSystems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].operatingSystems.$get(args, options))
}

export async function getUserprofilesProfileIdOperatingSystemsDartId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['operatingSystems'][':dartId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].operatingSystems[':dartId'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdPlacementGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placementGroups.$get(args, options))
}

export async function putUserprofilesProfileIdPlacementGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placementGroups.$put(args, options))
}

export async function postUserprofilesProfileIdPlacementGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placementGroups.$post(args, options))
}

export async function patchUserprofilesProfileIdPlacementGroups(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementGroups']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementGroups.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdPlacementGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementGroups[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdPlacementStrategies(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementStrategies.$get(args, options),
  )
}

export async function putUserprofilesProfileIdPlacementStrategies(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placementStrategies']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementStrategies.$put(args, options),
  )
}

export async function postUserprofilesProfileIdPlacementStrategies(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementStrategies.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdPlacementStrategies(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementStrategies.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdPlacementStrategiesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementStrategies[':id'].$get(args, options),
  )
}

export async function deleteUserprofilesProfileIdPlacementStrategiesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placementStrategies'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placementStrategies[':id'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdPlacements(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placements.$get(args, options))
}

export async function putUserprofilesProfileIdPlacements(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placements.$put(args, options))
}

export async function postUserprofilesProfileIdPlacements(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placements.$post(args, options))
}

export async function patchUserprofilesProfileIdPlacements(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].placements.$patch(args, options))
}

export async function postUserprofilesProfileIdPlacementsGeneratetags(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['placements']['generatetags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placements.generatetags.$post(args, options),
  )
}

export async function getUserprofilesProfileIdPlacementsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['placements'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].placements[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdPlatformTypes(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['platformTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].platformTypes.$get(args, options))
}

export async function getUserprofilesProfileIdPlatformTypesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['platformTypes'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].platformTypes[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdPostalCodes(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['postalCodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].postalCodes.$get(args, options))
}

export async function getUserprofilesProfileIdPostalCodesCode(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['postalCodes'][':code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].postalCodes[':code'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdProjects(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].projects.$get(args, options))
}

export async function getUserprofilesProfileIdProjectsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['projects'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].projects[':id'].$get(args, options))
}

export async function getUserprofilesProfileIdProjectsProjectIdInventoryItems(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].projects[':projectId'].inventoryItems.$get(args, options),
  )
}

export async function getUserprofilesProfileIdProjectsProjectIdInventoryItemsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['inventoryItems'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].projects[':projectId'].inventoryItems[':id'].$get(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdProjectsProjectIdOrderDocuments(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].projects[':projectId'].orderDocuments.$get(args, options),
  )
}

export async function getUserprofilesProfileIdProjectsProjectIdOrderDocumentsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orderDocuments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].projects[':projectId'].orderDocuments[':id'].$get(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdProjectsProjectIdOrders(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].projects[':projectId'].orders.$get(args, options),
  )
}

export async function getUserprofilesProfileIdProjectsProjectIdOrdersId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['projects'][':projectId']['orders'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].projects[':projectId'].orders[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdRegions(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].regions.$get(args, options))
}

export async function putUserprofilesProfileIdRemarketingListShares(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].remarketingListShares.$put(args, options),
  )
}

export async function patchUserprofilesProfileIdRemarketingListShares(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].remarketingListShares.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdRemarketingListSharesRemarketingListId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingListShares'][':remarketingListId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].remarketingListShares[':remarketingListId'].$get(
      args,
      options,
    ),
  )
}

export async function getUserprofilesProfileIdRemarketingLists(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].remarketingLists.$get(args, options))
}

export async function putUserprofilesProfileIdRemarketingLists(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].remarketingLists.$put(args, options))
}

export async function postUserprofilesProfileIdRemarketingLists(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].remarketingLists.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdRemarketingLists(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['remarketingLists']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].remarketingLists.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdRemarketingListsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['remarketingLists'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].remarketingLists[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdReports(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].reports.$get(args, options))
}

export async function postUserprofilesProfileIdReports(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].reports.$post(args, options))
}

export async function postUserprofilesProfileIdReportsCompatiblefieldsQuery(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports']['compatiblefields']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports.compatiblefields.query.$post(args, options),
  )
}

export async function getUserprofilesProfileIdReportsReportId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].$get(args, options),
  )
}

export async function putUserprofilesProfileIdReportsReportId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].$put(args, options),
  )
}

export async function deleteUserprofilesProfileIdReportsReportId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].$delete(args, options),
  )
}

export async function patchUserprofilesProfileIdReportsReportId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].$patch(args, options),
  )
}

export async function getUserprofilesProfileIdReportsReportIdFiles(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].files.$get(args, options),
  )
}

export async function getUserprofilesProfileIdReportsReportIdFilesFileId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['files'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].files[':fileId'].$get(args, options),
  )
}

export async function postUserprofilesProfileIdReportsReportIdRun(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['reports'][':reportId']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].reports[':reportId'].run.$post(args, options),
  )
}

export async function getUserprofilesProfileIdSites(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sites.$get(args, options))
}

export async function putUserprofilesProfileIdSites(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sites.$put(args, options))
}

export async function postUserprofilesProfileIdSites(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sites.$post(args, options))
}

export async function patchUserprofilesProfileIdSites(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sites.$patch(args, options))
}

export async function getUserprofilesProfileIdSitesId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sites'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sites[':id'].$get(args, options))
}

export async function getUserprofilesProfileIdSizes(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sizes.$get(args, options))
}

export async function postUserprofilesProfileIdSizes(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sizes.$post(args, options))
}

export async function getUserprofilesProfileIdSizesId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['sizes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].sizes[':id'].$get(args, options))
}

export async function getUserprofilesProfileIdSubaccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].subaccounts.$get(args, options))
}

export async function putUserprofilesProfileIdSubaccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].subaccounts.$put(args, options))
}

export async function postUserprofilesProfileIdSubaccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].subaccounts.$post(args, options))
}

export async function patchUserprofilesProfileIdSubaccounts(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].subaccounts.$patch(args, options))
}

export async function getUserprofilesProfileIdSubaccountsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['subaccounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].subaccounts[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdTargetableRemarketingLists(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetableRemarketingLists.$get(args, options),
  )
}

export async function getUserprofilesProfileIdTargetableRemarketingListsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetableRemarketingLists'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetableRemarketingLists[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdTargetingTemplates(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetingTemplates.$get(args, options),
  )
}

export async function putUserprofilesProfileIdTargetingTemplates(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetingTemplates.$put(args, options),
  )
}

export async function postUserprofilesProfileIdTargetingTemplates(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['targetingTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetingTemplates.$post(args, options),
  )
}

export async function patchUserprofilesProfileIdTargetingTemplates(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetingTemplates.$patch(args, options),
  )
}

export async function getUserprofilesProfileIdTargetingTemplatesId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['targetingTemplates'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].targetingTemplates[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdUserRolePermissionGroups(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].userRolePermissionGroups.$get(args, options),
  )
}

export async function getUserprofilesProfileIdUserRolePermissionGroupsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissionGroups'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].userRolePermissionGroups[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdUserRolePermissions(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRolePermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].userRolePermissions.$get(args, options),
  )
}

export async function getUserprofilesProfileIdUserRolePermissionsId(
  args: InferRequestType<
    (typeof client.userprofiles)[':profileId']['userRolePermissions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].userRolePermissions[':id'].$get(args, options),
  )
}

export async function getUserprofilesProfileIdUserRoles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].userRoles.$get(args, options))
}

export async function putUserprofilesProfileIdUserRoles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].userRoles.$put(args, options))
}

export async function postUserprofilesProfileIdUserRoles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].userRoles.$post(args, options))
}

export async function patchUserprofilesProfileIdUserRoles(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].userRoles.$patch(args, options))
}

export async function getUserprofilesProfileIdUserRolesId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].userRoles[':id'].$get(args, options))
}

export async function deleteUserprofilesProfileIdUserRolesId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['userRoles'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].userRoles[':id'].$delete(args, options),
  )
}

export async function getUserprofilesProfileIdVideoFormats(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userprofiles[':profileId'].videoFormats.$get(args, options))
}

export async function getUserprofilesProfileIdVideoFormatsId(
  args: InferRequestType<(typeof client.userprofiles)[':profileId']['videoFormats'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userprofiles[':profileId'].videoFormats[':id'].$get(args, options),
  )
}
