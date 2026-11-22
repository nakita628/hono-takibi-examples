import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDataGa(
  args: InferRequestType<typeof client.data.ga.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.ga.$get(args, options))
}

export async function getDataMcf(
  args: InferRequestType<typeof client.data.mcf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.mcf.$get(args, options))
}

export async function getDataRealtime(
  args: InferRequestType<typeof client.data.realtime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.realtime.$get(args, options))
}

export async function getManagementAccountSummaries(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.management.accountSummaries.$get(args, options))
}

export async function getManagementAccounts(
  args: InferRequestType<typeof client.management.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.management.accounts.$get(args, options))
}

export async function getManagementAccountsAccountIdEntityUserLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].entityUserLinks.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdEntityUserLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].entityUserLinks.$post(args, options),
  )
}

export async function putManagementAccountsAccountIdEntityUserLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].entityUserLinks[':linkId'].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdEntityUserLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].entityUserLinks[':linkId'].$delete(args, options),
  )
}

export async function getManagementAccountsAccountIdFilters(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.management.accounts[':accountId'].filters.$get(args, options))
}

export async function postManagementAccountsAccountIdFilters(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.management.accounts[':accountId'].filters.$post(args, options))
}

export async function getManagementAccountsAccountIdFiltersFilterId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].filters[':filterId'].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdFiltersFilterId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].filters[':filterId'].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdFiltersFilterId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].filters[':filterId'].$delete(args, options),
  )
}

export async function patchManagementAccountsAccountIdFiltersFilterId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].filters[':filterId'].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebproperties(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebproperties(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].$put(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSources(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources.$get(
      args,
      options,
    ),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadData(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
      ':customDataSourceId'
    ].deleteUploadData.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
      ':customDataSourceId'
    ].uploads.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
      ':customDataSourceId'
    ].uploads.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
      ':customDataSourceId'
    ].uploads[':uploadId'].$get(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions.$get(
      args,
      options,
    ),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions.$post(
      args,
      options,
    ),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
      ':customDimensionId'
    ].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
      ':customDimensionId'
    ].$put(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
      ':customDimensionId'
    ].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics.$get(
      args,
      options,
    ),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics.$post(
      args,
      options,
    ),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
      ':customMetricId'
    ].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
      ':customMetricId'
    ].$put(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
      ':customMetricId'
    ].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[
      ':webPropertyId'
    ].entityAdWordsLinks.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[
      ':webPropertyId'
    ].entityAdWordsLinks.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
      ':webPropertyAdWordsLinkId'
    ].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
      ':webPropertyAdWordsLinkId'
    ].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
      ':webPropertyAdWordsLinkId'
    ].$delete(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
      ':webPropertyAdWordsLinkId'
    ].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks.$get(
      args,
      options,
    ),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks.$post(
      args,
      options,
    ),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks[
      ':linkId'
    ].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks[
      ':linkId'
    ].$delete(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$get(
      args,
      options,
    ),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$post(
      args,
      options,
    ),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].$delete(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].entityUserLinks.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].entityUserLinks.$post(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].entityUserLinks[':linkId'].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].entityUserLinks[':linkId'].$delete(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].experiments.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].experiments.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].experiments[':experimentId'].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].experiments[':experimentId'].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].experiments[':experimentId'].$delete(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].experiments[':experimentId'].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].goals.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].goals.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].goals[':goalId'].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].goals[':goalId'].$put(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].goals[':goalId'].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].profileFilterLinks.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].profileFilterLinks.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].profileFilterLinks[':linkId'].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].profileFilterLinks[':linkId'].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].profileFilterLinks[':linkId'].$delete(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].profileFilterLinks[':linkId'].$patch(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].unsampledReports.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].unsampledReports.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].unsampledReports[':unsampledReportId'].$get(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
      ':profileId'
    ].unsampledReports[':unsampledReportId'].$delete(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[
      ':webPropertyId'
    ].remarketingAudiences.$get(args, options),
  )
}

export async function postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[
      ':webPropertyId'
    ].remarketingAudiences.$post(args, options),
  )
}

export async function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].remarketingAudiences[
      ':remarketingAudienceId'
    ].$get(args, options),
  )
}

export async function putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].remarketingAudiences[
      ':remarketingAudienceId'
    ].$put(args, options),
  )
}

export async function deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].remarketingAudiences[
      ':remarketingAudienceId'
    ].$delete(args, options),
  )
}

export async function patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.management.accounts[':accountId'].webproperties[':webPropertyId'].remarketingAudiences[
      ':remarketingAudienceId'
    ].$patch(args, options),
  )
}

export async function postManagementClientIdHashClientId(
  args: InferRequestType<(typeof client.management)['clientId:hashClientId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.management['clientId:hashClientId'].$post(args, options))
}

export async function getManagementSegments(
  args: InferRequestType<typeof client.management.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.management.segments.$get(args, options))
}

export async function getMetadataReportTypeColumns(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata[':reportType'].columns.$get(args, options))
}

export async function postProvisioningCreateAccountTicket(
  args: InferRequestType<typeof client.provisioning.createAccountTicket.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.provisioning.createAccountTicket.$post(args, options))
}

export async function postProvisioningCreateAccountTree(
  args: InferRequestType<typeof client.provisioning.createAccountTree.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.provisioning.createAccountTree.$post(args, options))
}

export async function postUserDeletionUserDeletionRequestsUpsert(
  args: InferRequestType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.userDeletion['userDeletionRequests:upsert'].$post(args, options),
  )
}
