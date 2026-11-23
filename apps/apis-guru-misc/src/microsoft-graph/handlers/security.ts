import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecurityAlertsV2AlertIdRoute,
  deleteSecurityAttackSimulationRoute,
  deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  deleteSecurityAttackSimulationSimulationsSimulationIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  deleteSecurityCasesRoute,
  deleteSecurityIncidentsIncidentIdRoute,
  deleteSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute,
  deleteSecuritySecureScoresSecureScoreIdRoute,
  getSecurityAlertsAlertIdRoute,
  getSecurityAlertsCountRoute,
  getSecurityAlertsRoute,
  getSecurityAlertsV2AlertIdRoute,
  getSecurityAlertsV2CountRoute,
  getSecurityAlertsV2Route,
  getSecurityAttackSimulationRoute,
  getSecurityAttackSimulationSimulationAutomationsCountRoute,
  getSecurityAttackSimulationSimulationAutomationsRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  getSecurityAttackSimulationSimulationsCountRoute,
  getSecurityAttackSimulationSimulationsRoute,
  getSecurityAttackSimulationSimulationsSimulationIdRoute,
  getSecurityCasesEdiscoveryCasesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsEdiscoveryReviewTagId1Route,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute,
  getSecurityCasesEdiscoveryCasesRoute,
  getSecurityCasesRoute,
  getSecurityIncidentsCountRoute,
  getSecurityIncidentsIncidentIdAlertsAlertIdRoute,
  getSecurityIncidentsIncidentIdAlertsCountRoute,
  getSecurityIncidentsIncidentIdAlertsRoute,
  getSecurityIncidentsIncidentIdRoute,
  getSecurityIncidentsRoute,
  getSecurityRoute,
  getSecuritySecureScoreControlProfilesCountRoute,
  getSecuritySecureScoreControlProfilesRoute,
  getSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute,
  getSecuritySecureScoresCountRoute,
  getSecuritySecureScoresRoute,
  getSecuritySecureScoresSecureScoreIdRoute,
  patchSecurityAlertsAlertIdRoute,
  patchSecurityAlertsV2AlertIdRoute,
  patchSecurityAttackSimulationRoute,
  patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  patchSecurityAttackSimulationSimulationsSimulationIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  patchSecurityCasesRoute,
  patchSecurityIncidentsIncidentIdRoute,
  patchSecurityRoute,
  patchSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute,
  patchSecuritySecureScoresSecureScoreIdRoute,
  postSecurityAlertsRoute,
  postSecurityAlertsV2Route,
  postSecurityAttackSimulationSimulationAutomationsRoute,
  postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
  postSecurityAttackSimulationSimulationsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityActivateRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityReleaseRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityUpdateIndexRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityCloseRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityReopenRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityReleaseRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityUpdateIndexRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityAddToReviewSetRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityApplyTagsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityEstimateStatisticsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityPurgeDataRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsMicrosoftGraphSecurityResetToDefaultRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute,
  postSecurityCasesEdiscoveryCasesRoute,
  postSecurityIncidentsRoute,
  postSecurityMicrosoftGraphSecurityRunHuntingQueryRoute,
  postSecuritySecureScoreControlProfilesRoute,
  postSecuritySecureScoresRoute,
} from '../routes'

export const getSecurityRouteHandler: RouteHandler<typeof getSecurityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityRouteHandler: RouteHandler<typeof patchSecurityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAlertsRouteHandler: RouteHandler<typeof getSecurityAlertsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSecurityAlertsRouteHandler: RouteHandler<typeof postSecurityAlertsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSecurityAlertsCountRouteHandler: RouteHandler<
  typeof getSecurityAlertsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAlertsAlertIdRouteHandler: RouteHandler<
  typeof getSecurityAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityAlertsAlertIdRouteHandler: RouteHandler<
  typeof patchSecurityAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAlertsV2RouteHandler: RouteHandler<
  typeof getSecurityAlertsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityAlertsV2RouteHandler: RouteHandler<
  typeof postSecurityAlertsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAlertsV2CountRouteHandler: RouteHandler<
  typeof getSecurityAlertsV2CountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityAlertsV2AlertIdRouteHandler: RouteHandler<
  typeof deleteSecurityAlertsV2AlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAlertsV2AlertIdRouteHandler: RouteHandler<
  typeof getSecurityAlertsV2AlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityAlertsV2AlertIdRouteHandler: RouteHandler<
  typeof patchSecurityAlertsV2AlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityAttackSimulationRouteHandler: RouteHandler<
  typeof deleteSecurityAttackSimulationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityAttackSimulationRouteHandler: RouteHandler<
  typeof patchSecurityAttackSimulationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationAutomationsRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationAutomationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityAttackSimulationSimulationAutomationsRouteHandler: RouteHandler<
  typeof postSecurityAttackSimulationSimulationAutomationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationAutomationsCountRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationAutomationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRouteHandler: RouteHandler<
  typeof deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRouteHandler: RouteHandler<
  typeof patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRouteHandler: RouteHandler<
  typeof postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRouteHandler: RouteHandler<
  typeof deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRouteHandler: RouteHandler<
  typeof patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationsRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityAttackSimulationSimulationsRouteHandler: RouteHandler<
  typeof postSecurityAttackSimulationSimulationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationsCountRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityAttackSimulationSimulationsSimulationIdRouteHandler: RouteHandler<
  typeof deleteSecurityAttackSimulationSimulationsSimulationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityAttackSimulationSimulationsSimulationIdRouteHandler: RouteHandler<
  typeof getSecurityAttackSimulationSimulationsSimulationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityAttackSimulationSimulationsSimulationIdRouteHandler: RouteHandler<
  typeof patchSecurityAttackSimulationSimulationsSimulationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesRouteHandler: RouteHandler<
  typeof deleteSecurityCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesRouteHandler: RouteHandler<typeof getSecurityCasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesRouteHandler: RouteHandler<typeof patchSecurityCasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityApplyHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityApplyHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityRemoveHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityRemoveHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityActivateRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityApplyHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityApplyHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityReleaseRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityRemoveHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityRemoveHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityUpdateIndexRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityUpdateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityCloseRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityReopenRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityApplyHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityApplyHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityRemoveHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityRemoveHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityApplyHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityApplyHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityReleaseRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityRemoveHoldRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityRemoveHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityUpdateIndexRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityUpdateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityAddToReviewSetRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityAddToReviewSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityApplyTagsRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityApplyTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesDataSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityEstimateStatisticsRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityEstimateStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityPurgeDataRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityPurgeDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesEdiscoveryNoncustodialDataSourceIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesEdiscoveryNoncustodialDataSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsMicrosoftGraphSecurityResetToDefaultRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsMicrosoftGraphSecurityResetToDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRouteHandler: RouteHandler<
  typeof postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRouteHandler: RouteHandler<
  typeof deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRouteHandler: RouteHandler<
  typeof patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsEdiscoveryReviewTagId1RouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsEdiscoveryReviewTagId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRouteHandler: RouteHandler<
  typeof getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityIncidentsRouteHandler: RouteHandler<
  typeof getSecurityIncidentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityIncidentsRouteHandler: RouteHandler<
  typeof postSecurityIncidentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityIncidentsCountRouteHandler: RouteHandler<
  typeof getSecurityIncidentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecurityIncidentsIncidentIdRouteHandler: RouteHandler<
  typeof deleteSecurityIncidentsIncidentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityIncidentsIncidentIdRouteHandler: RouteHandler<
  typeof getSecurityIncidentsIncidentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecurityIncidentsIncidentIdRouteHandler: RouteHandler<
  typeof patchSecurityIncidentsIncidentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityIncidentsIncidentIdAlertsRouteHandler: RouteHandler<
  typeof getSecurityIncidentsIncidentIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityIncidentsIncidentIdAlertsCountRouteHandler: RouteHandler<
  typeof getSecurityIncidentsIncidentIdAlertsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityIncidentsIncidentIdAlertsAlertIdRouteHandler: RouteHandler<
  typeof getSecurityIncidentsIncidentIdAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityMicrosoftGraphSecurityRunHuntingQueryRouteHandler: RouteHandler<
  typeof postSecurityMicrosoftGraphSecurityRunHuntingQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecuritySecureScoreControlProfilesRouteHandler: RouteHandler<
  typeof getSecuritySecureScoreControlProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecuritySecureScoreControlProfilesRouteHandler: RouteHandler<
  typeof postSecuritySecureScoreControlProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecuritySecureScoreControlProfilesCountRouteHandler: RouteHandler<
  typeof getSecuritySecureScoreControlProfilesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRouteHandler: RouteHandler<
  typeof deleteSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRouteHandler: RouteHandler<
  typeof getSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRouteHandler: RouteHandler<
  typeof patchSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecuritySecureScoresRouteHandler: RouteHandler<
  typeof getSecuritySecureScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecuritySecureScoresRouteHandler: RouteHandler<
  typeof postSecuritySecureScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecuritySecureScoresCountRouteHandler: RouteHandler<
  typeof getSecuritySecureScoresCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecuritySecureScoresSecureScoreIdRouteHandler: RouteHandler<
  typeof deleteSecuritySecureScoresSecureScoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecuritySecureScoresSecureScoreIdRouteHandler: RouteHandler<
  typeof getSecuritySecureScoresSecureScoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecuritySecureScoresSecureScoreIdRouteHandler: RouteHandler<
  typeof patchSecuritySecureScoresSecureScoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
