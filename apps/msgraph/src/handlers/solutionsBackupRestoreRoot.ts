import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdRoute,
  deleteSolutionsBackupRestoreDriveInclusionRulesDriveProtectionRuleIdRoute,
  deleteSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
  deleteSolutionsBackupRestoreDriveProtectionUnitsDriveProtectionUnitIdRoute,
  deleteSolutionsBackupRestoreEmailNotificationsSettingRoute,
  deleteSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdRoute,
  deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRoute,
  deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsMailboxRestoreArtifactsBulkAdditionRequestIdRoute,
  deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRoute,
  deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdRoute,
  deleteSolutionsBackupRestoreMailboxInclusionRulesMailboxProtectionRuleIdRoute,
  deleteSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
  deleteSolutionsBackupRestoreMailboxProtectionUnitsMailboxProtectionUnitIdRoute,
  deleteSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsOneDriveForBusinessBrowseSessionIdRoute,
  deleteSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdRoute,
  deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsDriveRestoreArtifactsBulkAdditionRequestIdRoute,
  deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRoute,
  deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsGranularDriveRestoreArtifactIdRoute,
  deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdRoute,
  deleteSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdRoute,
  deleteSolutionsBackupRestoreReportsRoute,
  deleteSolutionsBackupRestoreRestorePointsRestorePointIdRoute,
  deleteSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdRoute,
  deleteSolutionsBackupRestoreRoute,
  deleteSolutionsBackupRestoreServiceAppsServiceAppIdRoute,
  deleteSolutionsBackupRestoreSharePointBrowseSessionsSharePointBrowseSessionIdRoute,
  deleteSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdRoute,
  deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsGranularSiteRestoreArtifactIdRoute,
  deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdRoute,
  deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsSiteRestoreArtifactsBulkAdditionRequestIdRoute,
  deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRoute,
  deleteSolutionsBackupRestoreSiteInclusionRulesSiteProtectionRuleIdRoute,
  deleteSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
  deleteSolutionsBackupRestoreSiteProtectionUnitsSiteProtectionUnitIdRoute,
  getSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdBrowseNextFetchTokenNextFetchTokenRoute,
  getSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdRoute,
  getSolutionsBackupRestoreBrowseSessionsCountRoute,
  getSolutionsBackupRestoreBrowseSessionsRoute,
  getSolutionsBackupRestoreDriveInclusionRulesCountRoute,
  getSolutionsBackupRestoreDriveInclusionRulesDriveProtectionRuleIdRoute,
  getSolutionsBackupRestoreDriveInclusionRulesRoute,
  getSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsCountRoute,
  getSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
  getSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsRoute,
  getSolutionsBackupRestoreDriveProtectionUnitsCountRoute,
  getSolutionsBackupRestoreDriveProtectionUnitsDriveProtectionUnitIdRoute,
  getSolutionsBackupRestoreDriveProtectionUnitsRoute,
  getSolutionsBackupRestoreEmailNotificationsSettingRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesCountRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxInclusionRulesCountRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxInclusionRulesMailboxProtectionRuleIdRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxInclusionRulesRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsBulkAdditionJobsCountRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsBulkAdditionJobsRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsCountRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsMailboxProtectionUnitIdRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdRoute,
  getSolutionsBackupRestoreExchangeProtectionPoliciesRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsCountRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsCountRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRestorePointRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsCountRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsMailboxRestoreArtifactsBulkAdditionRequestIdRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsCountRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRestorePointRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdRoute,
  getSolutionsBackupRestoreExchangeRestoreSessionsRoute,
  getSolutionsBackupRestoreMailboxInclusionRulesCountRoute,
  getSolutionsBackupRestoreMailboxInclusionRulesMailboxProtectionRuleIdRoute,
  getSolutionsBackupRestoreMailboxInclusionRulesRoute,
  getSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsCountRoute,
  getSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
  getSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsRoute,
  getSolutionsBackupRestoreMailboxProtectionUnitsCountRoute,
  getSolutionsBackupRestoreMailboxProtectionUnitsMailboxProtectionUnitIdRoute,
  getSolutionsBackupRestoreMailboxProtectionUnitsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsOneDriveForBusinessBrowseSessionIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveInclusionRulesCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveInclusionRulesDriveProtectionRuleIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveInclusionRulesRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsBulkAdditionJobsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsBulkAdditionJobsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsDriveProtectionUnitIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsDriveRestoreArtifactsBulkAdditionRequestIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRestorePointRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsCountRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsGranularDriveRestoreArtifactIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdRoute,
  getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsRoute,
  getSolutionsBackupRestoreProtectionPoliciesCountRoute,
  getSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdRoute,
  getSolutionsBackupRestoreProtectionPoliciesRoute,
  getSolutionsBackupRestoreProtectionUnitsCountRoute,
  getSolutionsBackupRestoreProtectionUnitsGraphDriveProtectionUnitCountRoute,
  getSolutionsBackupRestoreProtectionUnitsGraphDriveProtectionUnitRoute,
  getSolutionsBackupRestoreProtectionUnitsGraphMailboxProtectionUnitCountRoute,
  getSolutionsBackupRestoreProtectionUnitsGraphMailboxProtectionUnitRoute,
  getSolutionsBackupRestoreProtectionUnitsGraphSiteProtectionUnitCountRoute,
  getSolutionsBackupRestoreProtectionUnitsGraphSiteProtectionUnitRoute,
  getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdGraphDriveProtectionUnitRoute,
  getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdGraphMailboxProtectionUnitRoute,
  getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdGraphSiteProtectionUnitRoute,
  getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdRoute,
  getSolutionsBackupRestoreProtectionUnitsRoute,
  getSolutionsBackupRestoreReportsGetStatisticsByPolicyPolicyIdPolicyIdRoute,
  getSolutionsBackupRestoreReportsRoute,
  getSolutionsBackupRestoreRestorePointsCountRoute,
  getSolutionsBackupRestoreRestorePointsRestorePointIdProtectionUnitRoute,
  getSolutionsBackupRestoreRestorePointsRestorePointIdRoute,
  getSolutionsBackupRestoreRestorePointsRoute,
  getSolutionsBackupRestoreRestoreSessionsCountRoute,
  getSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdRoute,
  getSolutionsBackupRestoreRestoreSessionsRoute,
  getSolutionsBackupRestoreRoute,
  getSolutionsBackupRestoreServiceAppsCountRoute,
  getSolutionsBackupRestoreServiceAppsRoute,
  getSolutionsBackupRestoreServiceAppsServiceAppIdRoute,
  getSolutionsBackupRestoreSharePointBrowseSessionsCountRoute,
  getSolutionsBackupRestoreSharePointBrowseSessionsRoute,
  getSolutionsBackupRestoreSharePointBrowseSessionsSharePointBrowseSessionIdRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesCountRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteInclusionRulesCountRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteInclusionRulesRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteInclusionRulesSiteProtectionRuleIdRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsBulkAdditionJobsCountRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsBulkAdditionJobsRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsCountRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsRoute,
  getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsSiteProtectionUnitIdRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsCountRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsCountRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsGranularSiteRestoreArtifactIdRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsCountRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsSiteRestoreArtifactsBulkAdditionRequestIdRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsCountRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRestorePointRoute,
  getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRoute,
  getSolutionsBackupRestoreSiteInclusionRulesCountRoute,
  getSolutionsBackupRestoreSiteInclusionRulesRoute,
  getSolutionsBackupRestoreSiteInclusionRulesSiteProtectionRuleIdRoute,
  getSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsCountRoute,
  getSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsRoute,
  getSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
  getSolutionsBackupRestoreSiteProtectionUnitsCountRoute,
  getSolutionsBackupRestoreSiteProtectionUnitsRoute,
  getSolutionsBackupRestoreSiteProtectionUnitsSiteProtectionUnitIdRoute,
  patchSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdRoute,
  patchSolutionsBackupRestoreDriveInclusionRulesDriveProtectionRuleIdRoute,
  patchSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
  patchSolutionsBackupRestoreDriveProtectionUnitsDriveProtectionUnitIdRoute,
  patchSolutionsBackupRestoreEmailNotificationsSettingRoute,
  patchSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdRoute,
  patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRoute,
  patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsMailboxRestoreArtifactsBulkAdditionRequestIdRoute,
  patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRoute,
  patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdRoute,
  patchSolutionsBackupRestoreMailboxInclusionRulesMailboxProtectionRuleIdRoute,
  patchSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
  patchSolutionsBackupRestoreMailboxProtectionUnitsMailboxProtectionUnitIdRoute,
  patchSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsOneDriveForBusinessBrowseSessionIdRoute,
  patchSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdRoute,
  patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsDriveRestoreArtifactsBulkAdditionRequestIdRoute,
  patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRoute,
  patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsGranularDriveRestoreArtifactIdRoute,
  patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdRoute,
  patchSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdRoute,
  patchSolutionsBackupRestoreReportsRoute,
  patchSolutionsBackupRestoreRestorePointsRestorePointIdRoute,
  patchSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdRoute,
  patchSolutionsBackupRestoreRoute,
  patchSolutionsBackupRestoreServiceAppsServiceAppIdRoute,
  patchSolutionsBackupRestoreSharePointBrowseSessionsSharePointBrowseSessionIdRoute,
  patchSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdRoute,
  patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsGranularSiteRestoreArtifactIdRoute,
  patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdRoute,
  patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsSiteRestoreArtifactsBulkAdditionRequestIdRoute,
  patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRoute,
  patchSolutionsBackupRestoreSiteInclusionRulesSiteProtectionRuleIdRoute,
  patchSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
  patchSolutionsBackupRestoreSiteProtectionUnitsSiteProtectionUnitIdRoute,
  postSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdBrowseRoute,
  postSolutionsBackupRestoreBrowseSessionsRoute,
  postSolutionsBackupRestoreDriveInclusionRulesRoute,
  postSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsRoute,
  postSolutionsBackupRestoreDriveProtectionUnitsRoute,
  postSolutionsBackupRestoreEnableRoute,
  postSolutionsBackupRestoreExchangeProtectionPoliciesRoute,
  postSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsRoute,
  postSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsRoute,
  postSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsRoute,
  postSolutionsBackupRestoreExchangeRestoreSessionsRoute,
  postSolutionsBackupRestoreMailboxInclusionRulesRoute,
  postSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsRoute,
  postSolutionsBackupRestoreMailboxProtectionUnitsRoute,
  postSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsRoute,
  postSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesRoute,
  postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsRoute,
  postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsRoute,
  postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsRoute,
  postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsRoute,
  postSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdActivateRoute,
  postSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdDeactivateRoute,
  postSolutionsBackupRestoreProtectionPoliciesRoute,
  postSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdCancelOffboardRoute,
  postSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdOffboardRoute,
  postSolutionsBackupRestoreRestorePointsRoute,
  postSolutionsBackupRestoreRestorePointsSearchRoute,
  postSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdActivateRoute,
  postSolutionsBackupRestoreRestoreSessionsRoute,
  postSolutionsBackupRestoreServiceAppsRoute,
  postSolutionsBackupRestoreServiceAppsServiceAppIdActivateRoute,
  postSolutionsBackupRestoreServiceAppsServiceAppIdDeactivateRoute,
  postSolutionsBackupRestoreSharePointBrowseSessionsRoute,
  postSolutionsBackupRestoreSharePointProtectionPoliciesRoute,
  postSolutionsBackupRestoreSharePointRestoreSessionsRoute,
  postSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsRoute,
  postSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsRoute,
  postSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsRoute,
  postSolutionsBackupRestoreSiteInclusionRulesRoute,
  postSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsRoute,
  postSolutionsBackupRestoreSiteProtectionUnitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsBackupRestoreRootHandler = app
  .openapi(getSolutionsBackupRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreBrowseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreBrowseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreBrowseSessionsBrowseSessionBaseIdBrowseNextFetchTokenNextFetchTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreBrowseSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveInclusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreDriveInclusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveInclusionRulesDriveProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreDriveInclusionRulesDriveProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreDriveInclusionRulesDriveProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveInclusionRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreDriveProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveProtectionUnitsDriveProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreDriveProtectionUnitsDriveProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreDriveProtectionUnitsDriveProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveProtectionUnitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreDriveProtectionUnitsBulkAdditionJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreEmailNotificationsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreEmailNotificationsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreEmailNotificationsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreExchangeProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreExchangeProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxInclusionRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxInclusionRulesMailboxProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxInclusionRulesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsMailboxProtectionUnitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsBulkAdditionJobsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeProtectionPoliciesExchangeProtectionPolicyIdMailboxProtectionUnitsBulkAdditionJobsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreExchangeProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreExchangeRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreExchangeRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsGranularMailboxRestoreArtifactIdRestorePointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdGranularMailboxRestoreArtifactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsMailboxRestoreArtifactIdRestorePointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsMailboxRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsMailboxRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsMailboxRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreExchangeRestoreSessionsExchangeRestoreSessionIdMailboxRestoreArtifactsBulkAdditionRequestsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreExchangeRestoreSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxInclusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreMailboxInclusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxInclusionRulesMailboxProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreMailboxInclusionRulesMailboxProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreMailboxInclusionRulesMailboxProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxInclusionRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreMailboxProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxProtectionUnitsMailboxProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreMailboxProtectionUnitsMailboxProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreMailboxProtectionUnitsMailboxProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxProtectionUnitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsMailboxProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreMailboxProtectionUnitsBulkAdditionJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsOneDriveForBusinessBrowseSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsOneDriveForBusinessBrowseSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsOneDriveForBusinessBrowseSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreOneDriveForBusinessBrowseSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveInclusionRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveInclusionRulesDriveProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveInclusionRulesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsDriveProtectionUnitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsBulkAdditionJobsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsBulkAdditionJobsDriveProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesOneDriveForBusinessProtectionPolicyIdDriveProtectionUnitsBulkAdditionJobsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreOneDriveForBusinessProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsDriveRestoreArtifactIdRestorePointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsDriveRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsDriveRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsDriveRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdDriveRestoreArtifactsBulkAdditionRequestsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsGranularDriveRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsGranularDriveRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsGranularDriveRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsOneDriveForBusinessRestoreSessionIdGranularDriveRestoreArtifactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreOneDriveForBusinessRestoreSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSolutionsBackupRestoreProtectionPoliciesProtectionPolicyBaseIdDeactivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdCancelOffboardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdGraphDriveProtectionUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdGraphMailboxProtectionUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdOffboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreProtectionUnitsProtectionUnitBaseIdGraphSiteProtectionUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreProtectionUnitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsGraphDriveProtectionUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsGraphDriveProtectionUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsGraphMailboxProtectionUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsGraphMailboxProtectionUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsGraphSiteProtectionUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreProtectionUnitsGraphSiteProtectionUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreReportsGetStatisticsByPolicyPolicyIdPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestorePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreRestorePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestorePointsRestorePointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreRestorePointsRestorePointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreRestorePointsRestorePointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestorePointsRestorePointIdProtectionUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestorePointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreRestorePointsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreRestoreSessionsRestoreSessionBaseIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreRestoreSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreServiceAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreServiceAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreServiceAppsServiceAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreServiceAppsServiceAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreServiceAppsServiceAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreServiceAppsServiceAppIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreServiceAppsServiceAppIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreServiceAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSharePointBrowseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreSharePointBrowseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSharePointBrowseSessionsSharePointBrowseSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSolutionsBackupRestoreSharePointBrowseSessionsSharePointBrowseSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSharePointBrowseSessionsSharePointBrowseSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreSharePointBrowseSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSharePointProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreSharePointProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteInclusionRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteInclusionRulesSiteProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteInclusionRulesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsSiteProtectionUnitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsBulkAdditionJobsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointProtectionPoliciesSharePointProtectionPolicyIdSiteProtectionUnitsBulkAdditionJobsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreSharePointProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSharePointRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreSharePointRestoreSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsGranularSiteRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsGranularSiteRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsGranularSiteRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdGranularSiteRestoreArtifactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsSiteRestoreArtifactIdRestorePointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsSiteRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsSiteRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsSiteRestoreArtifactsBulkAdditionRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsBackupRestoreSharePointRestoreSessionsSharePointRestoreSessionIdSiteRestoreArtifactsBulkAdditionRequestsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreSharePointRestoreSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteInclusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreSiteInclusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteInclusionRulesSiteProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreSiteInclusionRulesSiteProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreSiteInclusionRulesSiteProtectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteInclusionRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreSiteProtectionUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteProtectionUnitsSiteProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBackupRestoreSiteProtectionUnitsSiteProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBackupRestoreSiteProtectionUnitsSiteProtectionUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteProtectionUnitsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsSiteProtectionUnitsBulkAdditionJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBackupRestoreSiteProtectionUnitsBulkAdditionJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
