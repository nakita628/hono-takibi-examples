import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteManagementAccountsAccountIdEntityUserLinksLinkIdRoute,
  deleteManagementAccountsAccountIdFiltersFilterIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  getManagementAccountsAccountIdEntityUserLinksRoute,
  getManagementAccountsAccountIdFiltersFilterIdRoute,
  getManagementAccountsAccountIdFiltersRoute,
  getManagementAccountsAccountIdWebpropertiesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute,
  getManagementAccountsRoute,
  getManagementAccountSummariesRoute,
  getManagementSegmentsRoute,
  patchManagementAccountsAccountIdFiltersFilterIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute,
  postManagementAccountsAccountIdEntityUserLinksRoute,
  postManagementAccountsAccountIdFiltersRoute,
  postManagementAccountsAccountIdWebpropertiesRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute,
  postManagementClientIdHashClientIdRoute,
  putManagementAccountsAccountIdEntityUserLinksLinkIdRoute,
  putManagementAccountsAccountIdFiltersFilterIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute,
} from '../routes'

export const getManagementAccountSummariesRouteHandler: RouteHandler<
  typeof getManagementAccountSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsRouteHandler: RouteHandler<
  typeof getManagementAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdEntityUserLinksRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdEntityUserLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdEntityUserLinksRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdEntityUserLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdEntityUserLinksLinkIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdEntityUserLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdEntityUserLinksLinkIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdEntityUserLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdFiltersRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdFiltersRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRouteHandler: RouteHandler<
  typeof postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRouteHandler: RouteHandler<
  typeof deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRouteHandler: RouteHandler<
  typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRouteHandler: RouteHandler<
  typeof patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRouteHandler: RouteHandler<
  typeof putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagementClientIdHashClientIdRouteHandler: RouteHandler<
  typeof postManagementClientIdHashClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagementSegmentsRouteHandler: RouteHandler<
  typeof getManagementSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
