import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysIdIndexRoute,
  deleteLabelsIdIndexRoute,
  deleteTargetsIdIndexRoute,
  deleteTargetsTargetIdAssetsIdIndexRoute,
  deleteTargetsTargetIdKeysIdIndexRoute,
  deleteTargetsTargetIdScheduledscansIdIndexRoute,
  deleteTargetsTargetIdWebhooksIdIndexRoute,
  deleteUsersIdIndexRoute,
  deleteWebhooksIdIndexRoute,
  getAccountIndexRoute,
  getBillingIndexRoute,
  getEventsIdIndexRoute,
  getEventsIndexRoute,
  getFrameworksIdIndexRoute,
  getFrameworksIndexRoute,
  getIntegrationsIndexRoute,
  getIntegrationsJiraCloudProjectsIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
  getIntegrationsJiraServerProjectsIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
  getKeysIdIndexRoute,
  getKeysIndexRoute,
  getLabelsIdIndexRoute,
  getLabelsIndexRoute,
  getPlansIndexRoute,
  getProfileIndexRoute,
  getTargetsAllAverageFixTimeIndexRoute,
  getTargetsAllNeedsAttentionPieIndexRoute,
  getTargetsAllNeedsAttentionTopIndexRoute,
  getTargetsAllRiskTrendIndexRoute,
  getTargetsAllScansIndexRoute,
  getTargetsAllScheduledscansExpandedIndexRoute,
  getTargetsAllSeverityTrendIndexRoute,
  getTargetsAllTopVulnsIndexRoute,
  getTargetsIdIndexRoute,
  getTargetsIndexRoute,
  getTargetsTargetIdAssetsIdIndexRoute,
  getTargetsTargetIdAssetsIndexRoute,
  getTargetsTargetIdAverageFixTimeIndexRoute,
  getTargetsTargetIdEventsIdIndexRoute,
  getTargetsTargetIdEventsIndexRoute,
  getTargetsTargetIdFindingsIdIndexRoute,
  getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
  getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
  getTargetsTargetIdFindingsIdLogIndexRoute,
  getTargetsTargetIdFindingsIndexRoute,
  getTargetsTargetIdFindingsReportIndexRoute,
  getTargetsTargetIdIntegrationsIndexRoute,
  getTargetsTargetIdIntegrationsJiraCloudIndexRoute,
  getTargetsTargetIdIntegrationsJiraServerIndexRoute,
  getTargetsTargetIdIntegrationsSlackIndexRoute,
  getTargetsTargetIdKeysIdIndexRoute,
  getTargetsTargetIdKeysIndexRoute,
  getTargetsTargetIdRiskTrendIndexRoute,
  getTargetsTargetIdScansDatesIndexRoute,
  getTargetsTargetIdScansIdEndpointsIndexRoute,
  getTargetsTargetIdScansIdIndexRoute,
  getTargetsTargetIdScansIdReportDefaultIndexRoute,
  getTargetsTargetIdScansIdReportIndexRoute,
  getTargetsTargetIdScansIdReportOwaspIndexRoute,
  getTargetsTargetIdScansIdReportPciIndexRoute,
  getTargetsTargetIdScansIndexRoute,
  getTargetsTargetIdScansRetrievePageIndexRoute,
  getTargetsTargetIdScheduledscansExpandedIndexRoute,
  getTargetsTargetIdScheduledscansIdIndexRoute,
  getTargetsTargetIdScheduledscansIndexRoute,
  getTargetsTargetIdSeverityTrendIndexRoute,
  getTargetsTargetIdSiteIndexRoute,
  getTargetsTargetIdTopVulnsIndexRoute,
  getTargetsTargetIdWebhooksIdIndexRoute,
  getTargetsTargetIdWebhooksIndexRoute,
  getUsersIdIndexRoute,
  getUsersIndexRoute,
  getVulnerabilityDefinitionsIdIndexRoute,
  getVulnerabilityDefinitionsIndexRoute,
  getWebhooksIdIndexRoute,
  getWebhooksIndexRoute,
  patchBillingIndexRoute,
  patchLabelsIdIndexRoute,
  patchTargetsIdIndexRoute,
  patchTargetsTargetIdAssetsIdIndexRoute,
  patchTargetsTargetIdFindingsBulkUpdateIndexRoute,
  patchTargetsTargetIdFindingsIdIndexRoute,
  patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
  patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
  patchTargetsTargetIdIntegrationsJiraCloudIndexRoute,
  patchTargetsTargetIdIntegrationsJiraServerIndexRoute,
  patchTargetsTargetIdIntegrationsSlackIndexRoute,
  patchTargetsTargetIdScheduledscansIdIndexRoute,
  patchTargetsTargetIdSiteIndexRoute,
  patchTargetsTargetIdWebhooksIdIndexRoute,
  patchUsersIdIndexRoute,
  patchWebhooksIdIndexRoute,
  postAuthObtainIndexRoute,
  postAuthRefreshIndexRoute,
  postAuthRevokeIndexRoute,
  postAuthVerifyIndexRoute,
  postBillingActionsIndexRoute,
  postBillingEstimateIndexRoute,
  postBillingSubscribeIndexRoute,
  postCheckIndexRoute,
  postEnterpriseAuthObtainIndexRoute,
  postEnterpriseAuthRefreshIndexRoute,
  postEnterpriseAuthRevokeIndexRoute,
  postEnterpriseAuthVerifyIndexRoute,
  postKeysIndexRoute,
  postLabelsIndexRoute,
  postProfileChangePasswordIndexRoute,
  postResetIndexRoute,
  postSetpasswordIndexRoute,
  postTargetActionsIndexRoute,
  postTargetsActivateIndexRoute,
  postTargetsArchivedIndexRoute,
  postTargetsArchiveIndexRoute,
  postTargetsIndexRoute,
  postTargetsTargetIdAssetsIdVerifyIndexRoute,
  postTargetsTargetIdAssetsIndexRoute,
  postTargetsTargetIdFindingsBulkReportIndexRoute,
  postTargetsTargetIdFindingsBulkRetestIndexRoute,
  postTargetsTargetIdFindingsIdRetestIndexRoute,
  postTargetsTargetIdKeysIndexRoute,
  postTargetsTargetIdScanNowIndexRoute,
  postTargetsTargetIdScansIdCancelIndexRoute,
  postTargetsTargetIdScheduledscansIndexRoute,
  postTargetsTargetIdSiteVerifyIndexRoute,
  postTargetsTargetIdWebhooksIndexRoute,
  postUsersIndexRoute,
  postWebhooksIndexRoute,
  putBillingIndexRoute,
  putLabelsIdIndexRoute,
  putTargetsIdIndexRoute,
  putTargetsTargetIdAssetsIdIndexRoute,
  putTargetsTargetIdFindingsIdIndexRoute,
  putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
  putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
  putTargetsTargetIdIntegrationsJiraCloudIndexRoute,
  putTargetsTargetIdIntegrationsJiraServerIndexRoute,
  putTargetsTargetIdIntegrationsSlackIndexRoute,
  putTargetsTargetIdScheduledscansIdIndexRoute,
  putTargetsTargetIdSiteIndexRoute,
  putTargetsTargetIdWebhooksIdIndexRoute,
  putUsersIdIndexRoute,
  putWebhooksIdIndexRoute,
} from './routes'
import {
  deleteKeysIdIndexRouteHandler,
  deleteLabelsIdIndexRouteHandler,
  deleteTargetsIdIndexRouteHandler,
  deleteTargetsTargetIdAssetsIdIndexRouteHandler,
  deleteTargetsTargetIdKeysIdIndexRouteHandler,
  deleteTargetsTargetIdScheduledscansIdIndexRouteHandler,
  deleteTargetsTargetIdWebhooksIdIndexRouteHandler,
  deleteUsersIdIndexRouteHandler,
  deleteWebhooksIdIndexRouteHandler,
  getAccountIndexRouteHandler,
  getBillingIndexRouteHandler,
  getEventsIdIndexRouteHandler,
  getEventsIndexRouteHandler,
  getFrameworksIdIndexRouteHandler,
  getFrameworksIndexRouteHandler,
  getIntegrationsIndexRouteHandler,
  getIntegrationsJiraCloudProjectsIndexRouteHandler,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRouteHandler,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRouteHandler,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRouteHandler,
  getIntegrationsJiraServerProjectsIndexRouteHandler,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRouteHandler,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRouteHandler,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRouteHandler,
  getKeysIdIndexRouteHandler,
  getKeysIndexRouteHandler,
  getLabelsIdIndexRouteHandler,
  getLabelsIndexRouteHandler,
  getPlansIndexRouteHandler,
  getProfileIndexRouteHandler,
  getTargetsAllAverageFixTimeIndexRouteHandler,
  getTargetsAllNeedsAttentionPieIndexRouteHandler,
  getTargetsAllNeedsAttentionTopIndexRouteHandler,
  getTargetsAllRiskTrendIndexRouteHandler,
  getTargetsAllScansIndexRouteHandler,
  getTargetsAllScheduledscansExpandedIndexRouteHandler,
  getTargetsAllSeverityTrendIndexRouteHandler,
  getTargetsAllTopVulnsIndexRouteHandler,
  getTargetsIdIndexRouteHandler,
  getTargetsIndexRouteHandler,
  getTargetsTargetIdAssetsIdIndexRouteHandler,
  getTargetsTargetIdAssetsIndexRouteHandler,
  getTargetsTargetIdAverageFixTimeIndexRouteHandler,
  getTargetsTargetIdEventsIdIndexRouteHandler,
  getTargetsTargetIdEventsIndexRouteHandler,
  getTargetsTargetIdFindingsIdIndexRouteHandler,
  getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRouteHandler,
  getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRouteHandler,
  getTargetsTargetIdFindingsIdLogIndexRouteHandler,
  getTargetsTargetIdFindingsIndexRouteHandler,
  getTargetsTargetIdFindingsReportIndexRouteHandler,
  getTargetsTargetIdIntegrationsIndexRouteHandler,
  getTargetsTargetIdIntegrationsJiraCloudIndexRouteHandler,
  getTargetsTargetIdIntegrationsJiraServerIndexRouteHandler,
  getTargetsTargetIdIntegrationsSlackIndexRouteHandler,
  getTargetsTargetIdKeysIdIndexRouteHandler,
  getTargetsTargetIdKeysIndexRouteHandler,
  getTargetsTargetIdRiskTrendIndexRouteHandler,
  getTargetsTargetIdScansDatesIndexRouteHandler,
  getTargetsTargetIdScansIdEndpointsIndexRouteHandler,
  getTargetsTargetIdScansIdIndexRouteHandler,
  getTargetsTargetIdScansIdReportDefaultIndexRouteHandler,
  getTargetsTargetIdScansIdReportIndexRouteHandler,
  getTargetsTargetIdScansIdReportOwaspIndexRouteHandler,
  getTargetsTargetIdScansIdReportPciIndexRouteHandler,
  getTargetsTargetIdScansIndexRouteHandler,
  getTargetsTargetIdScansRetrievePageIndexRouteHandler,
  getTargetsTargetIdScheduledscansExpandedIndexRouteHandler,
  getTargetsTargetIdScheduledscansIdIndexRouteHandler,
  getTargetsTargetIdScheduledscansIndexRouteHandler,
  getTargetsTargetIdSeverityTrendIndexRouteHandler,
  getTargetsTargetIdSiteIndexRouteHandler,
  getTargetsTargetIdTopVulnsIndexRouteHandler,
  getTargetsTargetIdWebhooksIdIndexRouteHandler,
  getTargetsTargetIdWebhooksIndexRouteHandler,
  getUsersIdIndexRouteHandler,
  getUsersIndexRouteHandler,
  getVulnerabilityDefinitionsIdIndexRouteHandler,
  getVulnerabilityDefinitionsIndexRouteHandler,
  getWebhooksIdIndexRouteHandler,
  getWebhooksIndexRouteHandler,
  patchBillingIndexRouteHandler,
  patchLabelsIdIndexRouteHandler,
  patchTargetsIdIndexRouteHandler,
  patchTargetsTargetIdAssetsIdIndexRouteHandler,
  patchTargetsTargetIdFindingsBulkUpdateIndexRouteHandler,
  patchTargetsTargetIdFindingsIdIndexRouteHandler,
  patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRouteHandler,
  patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRouteHandler,
  patchTargetsTargetIdIntegrationsJiraCloudIndexRouteHandler,
  patchTargetsTargetIdIntegrationsJiraServerIndexRouteHandler,
  patchTargetsTargetIdIntegrationsSlackIndexRouteHandler,
  patchTargetsTargetIdScheduledscansIdIndexRouteHandler,
  patchTargetsTargetIdSiteIndexRouteHandler,
  patchTargetsTargetIdWebhooksIdIndexRouteHandler,
  patchUsersIdIndexRouteHandler,
  patchWebhooksIdIndexRouteHandler,
  postAuthObtainIndexRouteHandler,
  postAuthRefreshIndexRouteHandler,
  postAuthRevokeIndexRouteHandler,
  postAuthVerifyIndexRouteHandler,
  postBillingActionsIndexRouteHandler,
  postBillingEstimateIndexRouteHandler,
  postBillingSubscribeIndexRouteHandler,
  postCheckIndexRouteHandler,
  postEnterpriseAuthObtainIndexRouteHandler,
  postEnterpriseAuthRefreshIndexRouteHandler,
  postEnterpriseAuthRevokeIndexRouteHandler,
  postEnterpriseAuthVerifyIndexRouteHandler,
  postKeysIndexRouteHandler,
  postLabelsIndexRouteHandler,
  postProfileChangePasswordIndexRouteHandler,
  postResetIndexRouteHandler,
  postSetpasswordIndexRouteHandler,
  postTargetActionsIndexRouteHandler,
  postTargetsActivateIndexRouteHandler,
  postTargetsArchivedIndexRouteHandler,
  postTargetsArchiveIndexRouteHandler,
  postTargetsIndexRouteHandler,
  postTargetsTargetIdAssetsIdVerifyIndexRouteHandler,
  postTargetsTargetIdAssetsIndexRouteHandler,
  postTargetsTargetIdFindingsBulkReportIndexRouteHandler,
  postTargetsTargetIdFindingsBulkRetestIndexRouteHandler,
  postTargetsTargetIdFindingsIdRetestIndexRouteHandler,
  postTargetsTargetIdKeysIndexRouteHandler,
  postTargetsTargetIdScanNowIndexRouteHandler,
  postTargetsTargetIdScansIdCancelIndexRouteHandler,
  postTargetsTargetIdScheduledscansIndexRouteHandler,
  postTargetsTargetIdSiteVerifyIndexRouteHandler,
  postTargetsTargetIdWebhooksIndexRouteHandler,
  postUsersIndexRouteHandler,
  postWebhooksIndexRouteHandler,
  putBillingIndexRouteHandler,
  putLabelsIdIndexRouteHandler,
  putTargetsIdIndexRouteHandler,
  putTargetsTargetIdAssetsIdIndexRouteHandler,
  putTargetsTargetIdFindingsIdIndexRouteHandler,
  putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRouteHandler,
  putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRouteHandler,
  putTargetsTargetIdIntegrationsJiraCloudIndexRouteHandler,
  putTargetsTargetIdIntegrationsJiraServerIndexRouteHandler,
  putTargetsTargetIdIntegrationsSlackIndexRouteHandler,
  putTargetsTargetIdScheduledscansIdIndexRouteHandler,
  putTargetsTargetIdSiteIndexRouteHandler,
  putTargetsTargetIdWebhooksIdIndexRouteHandler,
  putUsersIdIndexRouteHandler,
  putWebhooksIdIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountIndexRoute, getAccountIndexRouteHandler)
  .openapi(postAuthObtainIndexRoute, postAuthObtainIndexRouteHandler)
  .openapi(postAuthRefreshIndexRoute, postAuthRefreshIndexRouteHandler)
  .openapi(postAuthRevokeIndexRoute, postAuthRevokeIndexRouteHandler)
  .openapi(postAuthVerifyIndexRoute, postAuthVerifyIndexRouteHandler)
  .openapi(getBillingIndexRoute, getBillingIndexRouteHandler)
  .openapi(patchBillingIndexRoute, patchBillingIndexRouteHandler)
  .openapi(putBillingIndexRoute, putBillingIndexRouteHandler)
  .openapi(postBillingActionsIndexRoute, postBillingActionsIndexRouteHandler)
  .openapi(postBillingEstimateIndexRoute, postBillingEstimateIndexRouteHandler)
  .openapi(postBillingSubscribeIndexRoute, postBillingSubscribeIndexRouteHandler)
  .openapi(postCheckIndexRoute, postCheckIndexRouteHandler)
  .openapi(postEnterpriseAuthObtainIndexRoute, postEnterpriseAuthObtainIndexRouteHandler)
  .openapi(postEnterpriseAuthRefreshIndexRoute, postEnterpriseAuthRefreshIndexRouteHandler)
  .openapi(postEnterpriseAuthRevokeIndexRoute, postEnterpriseAuthRevokeIndexRouteHandler)
  .openapi(postEnterpriseAuthVerifyIndexRoute, postEnterpriseAuthVerifyIndexRouteHandler)
  .openapi(getEventsIndexRoute, getEventsIndexRouteHandler)
  .openapi(getEventsIdIndexRoute, getEventsIdIndexRouteHandler)
  .openapi(getFrameworksIndexRoute, getFrameworksIndexRouteHandler)
  .openapi(getFrameworksIdIndexRoute, getFrameworksIdIndexRouteHandler)
  .openapi(getIntegrationsIndexRoute, getIntegrationsIndexRouteHandler)
  .openapi(
    getIntegrationsJiraCloudProjectsIndexRoute,
    getIntegrationsJiraCloudProjectsIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRoute,
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraServerProjectsIndexRoute,
    getIntegrationsJiraServerProjectsIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRoute,
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRouteHandler,
  )
  .openapi(
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRouteHandler,
  )
  .openapi(getKeysIndexRoute, getKeysIndexRouteHandler)
  .openapi(postKeysIndexRoute, postKeysIndexRouteHandler)
  .openapi(deleteKeysIdIndexRoute, deleteKeysIdIndexRouteHandler)
  .openapi(getKeysIdIndexRoute, getKeysIdIndexRouteHandler)
  .openapi(getLabelsIndexRoute, getLabelsIndexRouteHandler)
  .openapi(postLabelsIndexRoute, postLabelsIndexRouteHandler)
  .openapi(deleteLabelsIdIndexRoute, deleteLabelsIdIndexRouteHandler)
  .openapi(getLabelsIdIndexRoute, getLabelsIdIndexRouteHandler)
  .openapi(patchLabelsIdIndexRoute, patchLabelsIdIndexRouteHandler)
  .openapi(putLabelsIdIndexRoute, putLabelsIdIndexRouteHandler)
  .openapi(getPlansIndexRoute, getPlansIndexRouteHandler)
  .openapi(getProfileIndexRoute, getProfileIndexRouteHandler)
  .openapi(postProfileChangePasswordIndexRoute, postProfileChangePasswordIndexRouteHandler)
  .openapi(postResetIndexRoute, postResetIndexRouteHandler)
  .openapi(postSetpasswordIndexRoute, postSetpasswordIndexRouteHandler)
  .openapi(postTargetActionsIndexRoute, postTargetActionsIndexRouteHandler)
  .openapi(getTargetsIndexRoute, getTargetsIndexRouteHandler)
  .openapi(postTargetsIndexRoute, postTargetsIndexRouteHandler)
  .openapi(postTargetsActivateIndexRoute, postTargetsActivateIndexRouteHandler)
  .openapi(getTargetsAllAverageFixTimeIndexRoute, getTargetsAllAverageFixTimeIndexRouteHandler)
  .openapi(
    getTargetsAllNeedsAttentionPieIndexRoute,
    getTargetsAllNeedsAttentionPieIndexRouteHandler,
  )
  .openapi(
    getTargetsAllNeedsAttentionTopIndexRoute,
    getTargetsAllNeedsAttentionTopIndexRouteHandler,
  )
  .openapi(getTargetsAllRiskTrendIndexRoute, getTargetsAllRiskTrendIndexRouteHandler)
  .openapi(getTargetsAllScansIndexRoute, getTargetsAllScansIndexRouteHandler)
  .openapi(
    getTargetsAllScheduledscansExpandedIndexRoute,
    getTargetsAllScheduledscansExpandedIndexRouteHandler,
  )
  .openapi(getTargetsAllSeverityTrendIndexRoute, getTargetsAllSeverityTrendIndexRouteHandler)
  .openapi(getTargetsAllTopVulnsIndexRoute, getTargetsAllTopVulnsIndexRouteHandler)
  .openapi(postTargetsArchiveIndexRoute, postTargetsArchiveIndexRouteHandler)
  .openapi(postTargetsArchivedIndexRoute, postTargetsArchivedIndexRouteHandler)
  .openapi(deleteTargetsIdIndexRoute, deleteTargetsIdIndexRouteHandler)
  .openapi(getTargetsIdIndexRoute, getTargetsIdIndexRouteHandler)
  .openapi(patchTargetsIdIndexRoute, patchTargetsIdIndexRouteHandler)
  .openapi(putTargetsIdIndexRoute, putTargetsIdIndexRouteHandler)
  .openapi(getTargetsTargetIdAssetsIndexRoute, getTargetsTargetIdAssetsIndexRouteHandler)
  .openapi(postTargetsTargetIdAssetsIndexRoute, postTargetsTargetIdAssetsIndexRouteHandler)
  .openapi(deleteTargetsTargetIdAssetsIdIndexRoute, deleteTargetsTargetIdAssetsIdIndexRouteHandler)
  .openapi(getTargetsTargetIdAssetsIdIndexRoute, getTargetsTargetIdAssetsIdIndexRouteHandler)
  .openapi(patchTargetsTargetIdAssetsIdIndexRoute, patchTargetsTargetIdAssetsIdIndexRouteHandler)
  .openapi(putTargetsTargetIdAssetsIdIndexRoute, putTargetsTargetIdAssetsIdIndexRouteHandler)
  .openapi(
    postTargetsTargetIdAssetsIdVerifyIndexRoute,
    postTargetsTargetIdAssetsIdVerifyIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdAverageFixTimeIndexRoute,
    getTargetsTargetIdAverageFixTimeIndexRouteHandler,
  )
  .openapi(getTargetsTargetIdEventsIndexRoute, getTargetsTargetIdEventsIndexRouteHandler)
  .openapi(getTargetsTargetIdEventsIdIndexRoute, getTargetsTargetIdEventsIdIndexRouteHandler)
  .openapi(getTargetsTargetIdFindingsIndexRoute, getTargetsTargetIdFindingsIndexRouteHandler)
  .openapi(
    postTargetsTargetIdFindingsBulkReportIndexRoute,
    postTargetsTargetIdFindingsBulkReportIndexRouteHandler,
  )
  .openapi(
    postTargetsTargetIdFindingsBulkRetestIndexRoute,
    postTargetsTargetIdFindingsBulkRetestIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdFindingsBulkUpdateIndexRoute,
    patchTargetsTargetIdFindingsBulkUpdateIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdFindingsReportIndexRoute,
    getTargetsTargetIdFindingsReportIndexRouteHandler,
  )
  .openapi(getTargetsTargetIdFindingsIdIndexRoute, getTargetsTargetIdFindingsIdIndexRouteHandler)
  .openapi(
    patchTargetsTargetIdFindingsIdIndexRoute,
    patchTargetsTargetIdFindingsIdIndexRouteHandler,
  )
  .openapi(putTargetsTargetIdFindingsIdIndexRoute, putTargetsTargetIdFindingsIdIndexRouteHandler)
  .openapi(
    getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
    getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRouteHandler,
  )
  .openapi(
    putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
    putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
    getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
    patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRouteHandler,
  )
  .openapi(
    putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
    putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdFindingsIdLogIndexRoute,
    getTargetsTargetIdFindingsIdLogIndexRouteHandler,
  )
  .openapi(
    postTargetsTargetIdFindingsIdRetestIndexRoute,
    postTargetsTargetIdFindingsIdRetestIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdIntegrationsIndexRoute,
    getTargetsTargetIdIntegrationsIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdIntegrationsJiraCloudIndexRoute,
    getTargetsTargetIdIntegrationsJiraCloudIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdIntegrationsJiraCloudIndexRoute,
    patchTargetsTargetIdIntegrationsJiraCloudIndexRouteHandler,
  )
  .openapi(
    putTargetsTargetIdIntegrationsJiraCloudIndexRoute,
    putTargetsTargetIdIntegrationsJiraCloudIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdIntegrationsJiraServerIndexRoute,
    getTargetsTargetIdIntegrationsJiraServerIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdIntegrationsJiraServerIndexRoute,
    patchTargetsTargetIdIntegrationsJiraServerIndexRouteHandler,
  )
  .openapi(
    putTargetsTargetIdIntegrationsJiraServerIndexRoute,
    putTargetsTargetIdIntegrationsJiraServerIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdIntegrationsSlackIndexRoute,
    getTargetsTargetIdIntegrationsSlackIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdIntegrationsSlackIndexRoute,
    patchTargetsTargetIdIntegrationsSlackIndexRouteHandler,
  )
  .openapi(
    putTargetsTargetIdIntegrationsSlackIndexRoute,
    putTargetsTargetIdIntegrationsSlackIndexRouteHandler,
  )
  .openapi(getTargetsTargetIdKeysIndexRoute, getTargetsTargetIdKeysIndexRouteHandler)
  .openapi(postTargetsTargetIdKeysIndexRoute, postTargetsTargetIdKeysIndexRouteHandler)
  .openapi(deleteTargetsTargetIdKeysIdIndexRoute, deleteTargetsTargetIdKeysIdIndexRouteHandler)
  .openapi(getTargetsTargetIdKeysIdIndexRoute, getTargetsTargetIdKeysIdIndexRouteHandler)
  .openapi(getTargetsTargetIdRiskTrendIndexRoute, getTargetsTargetIdRiskTrendIndexRouteHandler)
  .openapi(postTargetsTargetIdScanNowIndexRoute, postTargetsTargetIdScanNowIndexRouteHandler)
  .openapi(getTargetsTargetIdScansIndexRoute, getTargetsTargetIdScansIndexRouteHandler)
  .openapi(getTargetsTargetIdScansDatesIndexRoute, getTargetsTargetIdScansDatesIndexRouteHandler)
  .openapi(
    getTargetsTargetIdScansRetrievePageIndexRoute,
    getTargetsTargetIdScansRetrievePageIndexRouteHandler,
  )
  .openapi(getTargetsTargetIdScansIdIndexRoute, getTargetsTargetIdScansIdIndexRouteHandler)
  .openapi(
    postTargetsTargetIdScansIdCancelIndexRoute,
    postTargetsTargetIdScansIdCancelIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScansIdEndpointsIndexRoute,
    getTargetsTargetIdScansIdEndpointsIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScansIdReportIndexRoute,
    getTargetsTargetIdScansIdReportIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScansIdReportDefaultIndexRoute,
    getTargetsTargetIdScansIdReportDefaultIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScansIdReportOwaspIndexRoute,
    getTargetsTargetIdScansIdReportOwaspIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScansIdReportPciIndexRoute,
    getTargetsTargetIdScansIdReportPciIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScheduledscansIndexRoute,
    getTargetsTargetIdScheduledscansIndexRouteHandler,
  )
  .openapi(
    postTargetsTargetIdScheduledscansIndexRoute,
    postTargetsTargetIdScheduledscansIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScheduledscansExpandedIndexRoute,
    getTargetsTargetIdScheduledscansExpandedIndexRouteHandler,
  )
  .openapi(
    deleteTargetsTargetIdScheduledscansIdIndexRoute,
    deleteTargetsTargetIdScheduledscansIdIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdScheduledscansIdIndexRoute,
    getTargetsTargetIdScheduledscansIdIndexRouteHandler,
  )
  .openapi(
    patchTargetsTargetIdScheduledscansIdIndexRoute,
    patchTargetsTargetIdScheduledscansIdIndexRouteHandler,
  )
  .openapi(
    putTargetsTargetIdScheduledscansIdIndexRoute,
    putTargetsTargetIdScheduledscansIdIndexRouteHandler,
  )
  .openapi(
    getTargetsTargetIdSeverityTrendIndexRoute,
    getTargetsTargetIdSeverityTrendIndexRouteHandler,
  )
  .openapi(getTargetsTargetIdSiteIndexRoute, getTargetsTargetIdSiteIndexRouteHandler)
  .openapi(patchTargetsTargetIdSiteIndexRoute, patchTargetsTargetIdSiteIndexRouteHandler)
  .openapi(putTargetsTargetIdSiteIndexRoute, putTargetsTargetIdSiteIndexRouteHandler)
  .openapi(postTargetsTargetIdSiteVerifyIndexRoute, postTargetsTargetIdSiteVerifyIndexRouteHandler)
  .openapi(getTargetsTargetIdTopVulnsIndexRoute, getTargetsTargetIdTopVulnsIndexRouteHandler)
  .openapi(getTargetsTargetIdWebhooksIndexRoute, getTargetsTargetIdWebhooksIndexRouteHandler)
  .openapi(postTargetsTargetIdWebhooksIndexRoute, postTargetsTargetIdWebhooksIndexRouteHandler)
  .openapi(
    deleteTargetsTargetIdWebhooksIdIndexRoute,
    deleteTargetsTargetIdWebhooksIdIndexRouteHandler,
  )
  .openapi(getTargetsTargetIdWebhooksIdIndexRoute, getTargetsTargetIdWebhooksIdIndexRouteHandler)
  .openapi(
    patchTargetsTargetIdWebhooksIdIndexRoute,
    patchTargetsTargetIdWebhooksIdIndexRouteHandler,
  )
  .openapi(putTargetsTargetIdWebhooksIdIndexRoute, putTargetsTargetIdWebhooksIdIndexRouteHandler)
  .openapi(getUsersIndexRoute, getUsersIndexRouteHandler)
  .openapi(postUsersIndexRoute, postUsersIndexRouteHandler)
  .openapi(deleteUsersIdIndexRoute, deleteUsersIdIndexRouteHandler)
  .openapi(getUsersIdIndexRoute, getUsersIdIndexRouteHandler)
  .openapi(patchUsersIdIndexRoute, patchUsersIdIndexRouteHandler)
  .openapi(putUsersIdIndexRoute, putUsersIdIndexRouteHandler)
  .openapi(getVulnerabilityDefinitionsIndexRoute, getVulnerabilityDefinitionsIndexRouteHandler)
  .openapi(getVulnerabilityDefinitionsIdIndexRoute, getVulnerabilityDefinitionsIdIndexRouteHandler)
  .openapi(getWebhooksIndexRoute, getWebhooksIndexRouteHandler)
  .openapi(postWebhooksIndexRoute, postWebhooksIndexRouteHandler)
  .openapi(deleteWebhooksIdIndexRoute, deleteWebhooksIdIndexRouteHandler)
  .openapi(getWebhooksIdIndexRoute, getWebhooksIdIndexRouteHandler)
  .openapi(patchWebhooksIdIndexRoute, patchWebhooksIdIndexRouteHandler)
  .openapi(putWebhooksIdIndexRoute, putWebhooksIdIndexRouteHandler)

export default app
