import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTargetsIdIndexRoute,
  deleteTargetsTargetIdAssetsIdIndexRoute,
  deleteTargetsTargetIdKeysIdIndexRoute,
  deleteTargetsTargetIdScheduledscansIdIndexRoute,
  deleteTargetsTargetIdWebhooksIdIndexRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const targetsHandler = app
  .openapi(getTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsActivateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllAverageFixTimeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllNeedsAttentionPieIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllNeedsAttentionTopIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllRiskTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllScansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllScheduledscansExpandedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllSeverityTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllTopVulnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsArchiveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsArchivedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdAssetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdAssetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdAssetsIdVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdAverageFixTimeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdEventsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdFindingsBulkReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdFindingsBulkRetestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsBulkUpdateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdFindingsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdFindingsIdRetestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsSlackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdIntegrationsSlackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdIntegrationsSlackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdRiskTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdScanNowIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansDatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansRetrievePageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdScansIdCancelIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportDefaultIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportOwaspIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScansIdReportPciIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScheduledscansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdScheduledscansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScheduledscansExpandedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdSeverityTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdSiteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdSiteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdSiteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdSiteVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdTopVulnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
