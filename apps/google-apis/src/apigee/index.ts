import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameDataRoute,
  deleteV1NameDeploymentsRoute,
  deleteV1NameRoute,
  deleteV1ParentResourcefilesTypeNameRoute,
  getV1NameCertificateRoute,
  getV1NameCsrRoute,
  getV1NameDeploymentsRoute,
  getV1NameGetProjectMappingRoute,
  getV1NameListRevisionsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentAnalyticsDatastoresRoute,
  getV1ParentAnalyticsExportsRoute,
  getV1ParentApicategoriesRoute,
  getV1ParentApiproductsRoute,
  getV1ParentApisRoute,
  getV1ParentAppsRoute,
  getV1ParentArchiveDeploymentsRoute,
  getV1ParentAttachmentsRoute,
  getV1ParentAttributesRoute,
  getV1ParentDatacollectorsRoute,
  getV1ParentDebugsessionsRoute,
  getV1ParentDeploymentsRoute,
  getV1ParentDevelopersRoute,
  getV1ParentEndpointAttachmentsRoute,
  getV1ParentEntriesRoute,
  getV1ParentEnvgroupsRoute,
  getV1ParentHostQueriesRoute,
  getV1ParentHostSecurityReportsRoute,
  getV1ParentInstancesRoute,
  getV1ParentNatAddressesRoute,
  getV1ParentOverridesRoute,
  getV1ParentQueriesRoute,
  getV1ParentRateplansRoute,
  getV1ParentReportsRoute,
  getV1ParentResourcefilesRoute,
  getV1ParentResourcefilesTypeNameRoute,
  getV1ParentResourcefilesTypeRoute,
  getV1ParentRoute,
  getV1ParentSecurityIncidentsRoute,
  getV1ParentSecurityProfilesRoute,
  getV1ParentSecurityReportsRoute,
  getV1ParentSharedflowsRoute,
  getV1ParentSubscriptionsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1InstanceReportStatusRoute,
  postV1NameActivateRoute,
  postV1NameAdjustRoute,
  postV1NameAttributesRoute,
  postV1NameCreditRoute,
  postV1NameDeploymentsGenerateDeployChangeReportRoute,
  postV1NameDeploymentsGenerateUndeployChangeReportRoute,
  postV1NameDeploymentsRoute,
  postV1NameExpireRoute,
  postV1NameGenerateDownloadUrlRoute,
  postV1NameGetSyncAuthorizationRoute,
  postV1NameRoute,
  postV1NameSetSyncAuthorizationRoute,
  postV1OrganizationsRoute,
  postV1OrgenvSecurityStatsQueryTabularStatsRoute,
  postV1OrgenvSecurityStatsQueryTimeSeriesStatsRoute,
  postV1OrgSetAddonsRoute,
  postV1ParentAliasesRoute,
  postV1ParentAnalyticsDatastoresRoute,
  postV1ParentAnalyticsDatastoresTestRoute,
  postV1ParentAnalyticsExportsRoute,
  postV1ParentApicategoriesRoute,
  postV1ParentApiproductsRoute,
  postV1ParentApisRoute,
  postV1ParentAppsRoute,
  postV1ParentArchiveDeploymentsGenerateUploadUrlRoute,
  postV1ParentArchiveDeploymentsRoute,
  postV1ParentAttachmentsRoute,
  postV1ParentAttributesRoute,
  postV1ParentCanaryevaluationsRoute,
  postV1ParentDatacollectorsRoute,
  postV1ParentDebugsessionsRoute,
  postV1ParentDevelopersRoute,
  postV1ParentEndpointAttachmentsRoute,
  postV1ParentEntriesRoute,
  postV1ParentEnvgroupsRoute,
  postV1ParentEnvironmentsRoute,
  postV1ParentHostQueriesRoute,
  postV1ParentHostSecurityReportsRoute,
  postV1ParentInstancesRoute,
  postV1ParentKeysCreateRoute,
  postV1ParentKeysRoute,
  postV1ParentKeystoresRoute,
  postV1ParentKeyvaluemapsRoute,
  postV1ParentNatAddressesRoute,
  postV1ParentOverridesRoute,
  postV1ParentQueriesRoute,
  postV1ParentRateplansRoute,
  postV1ParentReferencesRoute,
  postV1ParentReportsRoute,
  postV1ParentResourcefilesRoute,
  postV1ParentSecurityReportsRoute,
  postV1ParentSharedflowsRoute,
  postV1ParentSubscribeRoute,
  postV1ParentSubscriptionsRoute,
  postV1ParentTargetserversRoute,
  postV1ParentUnsubscribeRoute,
  postV1ProfileEnvironmentComputeEnvironmentScoresRoute,
  postV1ProjectProvisionOrganizationRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  putV1NameRoute,
  putV1ParentResourcefilesTypeNameRoute,
} from './routes'
import {
  deleteV1NameDataRouteHandler,
  deleteV1NameDeploymentsRouteHandler,
  deleteV1NameRouteHandler,
  deleteV1ParentResourcefilesTypeNameRouteHandler,
  getV1NameCertificateRouteHandler,
  getV1NameCsrRouteHandler,
  getV1NameDeploymentsRouteHandler,
  getV1NameGetProjectMappingRouteHandler,
  getV1NameListRevisionsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAnalyticsDatastoresRouteHandler,
  getV1ParentAnalyticsExportsRouteHandler,
  getV1ParentApicategoriesRouteHandler,
  getV1ParentApiproductsRouteHandler,
  getV1ParentApisRouteHandler,
  getV1ParentAppsRouteHandler,
  getV1ParentArchiveDeploymentsRouteHandler,
  getV1ParentAttachmentsRouteHandler,
  getV1ParentAttributesRouteHandler,
  getV1ParentDatacollectorsRouteHandler,
  getV1ParentDebugsessionsRouteHandler,
  getV1ParentDeploymentsRouteHandler,
  getV1ParentDevelopersRouteHandler,
  getV1ParentEndpointAttachmentsRouteHandler,
  getV1ParentEntriesRouteHandler,
  getV1ParentEnvgroupsRouteHandler,
  getV1ParentHostQueriesRouteHandler,
  getV1ParentHostSecurityReportsRouteHandler,
  getV1ParentInstancesRouteHandler,
  getV1ParentNatAddressesRouteHandler,
  getV1ParentOverridesRouteHandler,
  getV1ParentQueriesRouteHandler,
  getV1ParentRateplansRouteHandler,
  getV1ParentReportsRouteHandler,
  getV1ParentResourcefilesRouteHandler,
  getV1ParentResourcefilesTypeNameRouteHandler,
  getV1ParentResourcefilesTypeRouteHandler,
  getV1ParentRouteHandler,
  getV1ParentSecurityIncidentsRouteHandler,
  getV1ParentSecurityProfilesRouteHandler,
  getV1ParentSecurityReportsRouteHandler,
  getV1ParentSharedflowsRouteHandler,
  getV1ParentSubscriptionsRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1InstanceReportStatusRouteHandler,
  postV1NameActivateRouteHandler,
  postV1NameAdjustRouteHandler,
  postV1NameAttributesRouteHandler,
  postV1NameCreditRouteHandler,
  postV1NameDeploymentsGenerateDeployChangeReportRouteHandler,
  postV1NameDeploymentsGenerateUndeployChangeReportRouteHandler,
  postV1NameDeploymentsRouteHandler,
  postV1NameExpireRouteHandler,
  postV1NameGenerateDownloadUrlRouteHandler,
  postV1NameGetSyncAuthorizationRouteHandler,
  postV1NameRouteHandler,
  postV1NameSetSyncAuthorizationRouteHandler,
  postV1OrganizationsRouteHandler,
  postV1OrgenvSecurityStatsQueryTabularStatsRouteHandler,
  postV1OrgenvSecurityStatsQueryTimeSeriesStatsRouteHandler,
  postV1OrgSetAddonsRouteHandler,
  postV1ParentAliasesRouteHandler,
  postV1ParentAnalyticsDatastoresRouteHandler,
  postV1ParentAnalyticsDatastoresTestRouteHandler,
  postV1ParentAnalyticsExportsRouteHandler,
  postV1ParentApicategoriesRouteHandler,
  postV1ParentApiproductsRouteHandler,
  postV1ParentApisRouteHandler,
  postV1ParentAppsRouteHandler,
  postV1ParentArchiveDeploymentsGenerateUploadUrlRouteHandler,
  postV1ParentArchiveDeploymentsRouteHandler,
  postV1ParentAttachmentsRouteHandler,
  postV1ParentAttributesRouteHandler,
  postV1ParentCanaryevaluationsRouteHandler,
  postV1ParentDatacollectorsRouteHandler,
  postV1ParentDebugsessionsRouteHandler,
  postV1ParentDevelopersRouteHandler,
  postV1ParentEndpointAttachmentsRouteHandler,
  postV1ParentEntriesRouteHandler,
  postV1ParentEnvgroupsRouteHandler,
  postV1ParentEnvironmentsRouteHandler,
  postV1ParentHostQueriesRouteHandler,
  postV1ParentHostSecurityReportsRouteHandler,
  postV1ParentInstancesRouteHandler,
  postV1ParentKeysCreateRouteHandler,
  postV1ParentKeysRouteHandler,
  postV1ParentKeystoresRouteHandler,
  postV1ParentKeyvaluemapsRouteHandler,
  postV1ParentNatAddressesRouteHandler,
  postV1ParentOverridesRouteHandler,
  postV1ParentQueriesRouteHandler,
  postV1ParentRateplansRouteHandler,
  postV1ParentReferencesRouteHandler,
  postV1ParentReportsRouteHandler,
  postV1ParentResourcefilesRouteHandler,
  postV1ParentSecurityReportsRouteHandler,
  postV1ParentSharedflowsRouteHandler,
  postV1ParentSubscribeRouteHandler,
  postV1ParentSubscriptionsRouteHandler,
  postV1ParentTargetserversRouteHandler,
  postV1ParentUnsubscribeRouteHandler,
  postV1ProfileEnvironmentComputeEnvironmentScoresRouteHandler,
  postV1ProjectProvisionOrganizationRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  putV1NameRouteHandler,
  putV1ParentResourcefilesTypeNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1OrganizationsRoute, postV1OrganizationsRouteHandler)
  .openapi(postV1InstanceReportStatusRoute, postV1InstanceReportStatusRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameRoute, postV1NameRouteHandler)
  .openapi(putV1NameRoute, putV1NameRouteHandler)
  .openapi(postV1NameAttributesRoute, postV1NameAttributesRouteHandler)
  .openapi(getV1NameCertificateRoute, getV1NameCertificateRouteHandler)
  .openapi(getV1NameCsrRoute, getV1NameCsrRouteHandler)
  .openapi(deleteV1NameDataRoute, deleteV1NameDataRouteHandler)
  .openapi(deleteV1NameDeploymentsRoute, deleteV1NameDeploymentsRouteHandler)
  .openapi(getV1NameDeploymentsRoute, getV1NameDeploymentsRouteHandler)
  .openapi(postV1NameDeploymentsRoute, postV1NameDeploymentsRouteHandler)
  .openapi(
    postV1NameDeploymentsGenerateDeployChangeReportRoute,
    postV1NameDeploymentsGenerateDeployChangeReportRouteHandler,
  )
  .openapi(
    postV1NameDeploymentsGenerateUndeployChangeReportRoute,
    postV1NameDeploymentsGenerateUndeployChangeReportRouteHandler,
  )
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameActivateRoute, postV1NameActivateRouteHandler)
  .openapi(postV1NameAdjustRoute, postV1NameAdjustRouteHandler)
  .openapi(postV1NameCreditRoute, postV1NameCreditRouteHandler)
  .openapi(postV1NameExpireRoute, postV1NameExpireRouteHandler)
  .openapi(postV1NameGenerateDownloadUrlRoute, postV1NameGenerateDownloadUrlRouteHandler)
  .openapi(getV1NameGetProjectMappingRoute, getV1NameGetProjectMappingRouteHandler)
  .openapi(postV1NameGetSyncAuthorizationRoute, postV1NameGetSyncAuthorizationRouteHandler)
  .openapi(getV1NameListRevisionsRoute, getV1NameListRevisionsRouteHandler)
  .openapi(postV1NameSetSyncAuthorizationRoute, postV1NameSetSyncAuthorizationRouteHandler)
  .openapi(
    postV1OrgenvSecurityStatsQueryTabularStatsRoute,
    postV1OrgenvSecurityStatsQueryTabularStatsRouteHandler,
  )
  .openapi(
    postV1OrgenvSecurityStatsQueryTimeSeriesStatsRoute,
    postV1OrgenvSecurityStatsQueryTimeSeriesStatsRouteHandler,
  )
  .openapi(postV1OrgSetAddonsRoute, postV1OrgSetAddonsRouteHandler)
  .openapi(getV1ParentRoute, getV1ParentRouteHandler)
  .openapi(postV1ParentAliasesRoute, postV1ParentAliasesRouteHandler)
  .openapi(getV1ParentAnalyticsDatastoresRoute, getV1ParentAnalyticsDatastoresRouteHandler)
  .openapi(postV1ParentAnalyticsDatastoresRoute, postV1ParentAnalyticsDatastoresRouteHandler)
  .openapi(
    postV1ParentAnalyticsDatastoresTestRoute,
    postV1ParentAnalyticsDatastoresTestRouteHandler,
  )
  .openapi(getV1ParentAnalyticsExportsRoute, getV1ParentAnalyticsExportsRouteHandler)
  .openapi(postV1ParentAnalyticsExportsRoute, postV1ParentAnalyticsExportsRouteHandler)
  .openapi(getV1ParentApicategoriesRoute, getV1ParentApicategoriesRouteHandler)
  .openapi(postV1ParentApicategoriesRoute, postV1ParentApicategoriesRouteHandler)
  .openapi(getV1ParentApiproductsRoute, getV1ParentApiproductsRouteHandler)
  .openapi(postV1ParentApiproductsRoute, postV1ParentApiproductsRouteHandler)
  .openapi(getV1ParentApisRoute, getV1ParentApisRouteHandler)
  .openapi(postV1ParentApisRoute, postV1ParentApisRouteHandler)
  .openapi(getV1ParentAppsRoute, getV1ParentAppsRouteHandler)
  .openapi(postV1ParentAppsRoute, postV1ParentAppsRouteHandler)
  .openapi(getV1ParentArchiveDeploymentsRoute, getV1ParentArchiveDeploymentsRouteHandler)
  .openapi(postV1ParentArchiveDeploymentsRoute, postV1ParentArchiveDeploymentsRouteHandler)
  .openapi(
    postV1ParentArchiveDeploymentsGenerateUploadUrlRoute,
    postV1ParentArchiveDeploymentsGenerateUploadUrlRouteHandler,
  )
  .openapi(getV1ParentAttachmentsRoute, getV1ParentAttachmentsRouteHandler)
  .openapi(postV1ParentAttachmentsRoute, postV1ParentAttachmentsRouteHandler)
  .openapi(getV1ParentAttributesRoute, getV1ParentAttributesRouteHandler)
  .openapi(postV1ParentAttributesRoute, postV1ParentAttributesRouteHandler)
  .openapi(postV1ParentCanaryevaluationsRoute, postV1ParentCanaryevaluationsRouteHandler)
  .openapi(getV1ParentDatacollectorsRoute, getV1ParentDatacollectorsRouteHandler)
  .openapi(postV1ParentDatacollectorsRoute, postV1ParentDatacollectorsRouteHandler)
  .openapi(getV1ParentDebugsessionsRoute, getV1ParentDebugsessionsRouteHandler)
  .openapi(postV1ParentDebugsessionsRoute, postV1ParentDebugsessionsRouteHandler)
  .openapi(getV1ParentDeploymentsRoute, getV1ParentDeploymentsRouteHandler)
  .openapi(getV1ParentDevelopersRoute, getV1ParentDevelopersRouteHandler)
  .openapi(postV1ParentDevelopersRoute, postV1ParentDevelopersRouteHandler)
  .openapi(getV1ParentEndpointAttachmentsRoute, getV1ParentEndpointAttachmentsRouteHandler)
  .openapi(postV1ParentEndpointAttachmentsRoute, postV1ParentEndpointAttachmentsRouteHandler)
  .openapi(getV1ParentEntriesRoute, getV1ParentEntriesRouteHandler)
  .openapi(postV1ParentEntriesRoute, postV1ParentEntriesRouteHandler)
  .openapi(getV1ParentEnvgroupsRoute, getV1ParentEnvgroupsRouteHandler)
  .openapi(postV1ParentEnvgroupsRoute, postV1ParentEnvgroupsRouteHandler)
  .openapi(postV1ParentEnvironmentsRoute, postV1ParentEnvironmentsRouteHandler)
  .openapi(getV1ParentHostQueriesRoute, getV1ParentHostQueriesRouteHandler)
  .openapi(postV1ParentHostQueriesRoute, postV1ParentHostQueriesRouteHandler)
  .openapi(getV1ParentHostSecurityReportsRoute, getV1ParentHostSecurityReportsRouteHandler)
  .openapi(postV1ParentHostSecurityReportsRoute, postV1ParentHostSecurityReportsRouteHandler)
  .openapi(getV1ParentInstancesRoute, getV1ParentInstancesRouteHandler)
  .openapi(postV1ParentInstancesRoute, postV1ParentInstancesRouteHandler)
  .openapi(postV1ParentKeysRoute, postV1ParentKeysRouteHandler)
  .openapi(postV1ParentKeysCreateRoute, postV1ParentKeysCreateRouteHandler)
  .openapi(postV1ParentKeystoresRoute, postV1ParentKeystoresRouteHandler)
  .openapi(postV1ParentKeyvaluemapsRoute, postV1ParentKeyvaluemapsRouteHandler)
  .openapi(getV1ParentNatAddressesRoute, getV1ParentNatAddressesRouteHandler)
  .openapi(postV1ParentNatAddressesRoute, postV1ParentNatAddressesRouteHandler)
  .openapi(getV1ParentOverridesRoute, getV1ParentOverridesRouteHandler)
  .openapi(postV1ParentOverridesRoute, postV1ParentOverridesRouteHandler)
  .openapi(getV1ParentQueriesRoute, getV1ParentQueriesRouteHandler)
  .openapi(postV1ParentQueriesRoute, postV1ParentQueriesRouteHandler)
  .openapi(getV1ParentRateplansRoute, getV1ParentRateplansRouteHandler)
  .openapi(postV1ParentRateplansRoute, postV1ParentRateplansRouteHandler)
  .openapi(postV1ParentReferencesRoute, postV1ParentReferencesRouteHandler)
  .openapi(getV1ParentReportsRoute, getV1ParentReportsRouteHandler)
  .openapi(postV1ParentReportsRoute, postV1ParentReportsRouteHandler)
  .openapi(getV1ParentResourcefilesRoute, getV1ParentResourcefilesRouteHandler)
  .openapi(postV1ParentResourcefilesRoute, postV1ParentResourcefilesRouteHandler)
  .openapi(getV1ParentResourcefilesTypeRoute, getV1ParentResourcefilesTypeRouteHandler)
  .openapi(
    deleteV1ParentResourcefilesTypeNameRoute,
    deleteV1ParentResourcefilesTypeNameRouteHandler,
  )
  .openapi(getV1ParentResourcefilesTypeNameRoute, getV1ParentResourcefilesTypeNameRouteHandler)
  .openapi(putV1ParentResourcefilesTypeNameRoute, putV1ParentResourcefilesTypeNameRouteHandler)
  .openapi(getV1ParentSecurityIncidentsRoute, getV1ParentSecurityIncidentsRouteHandler)
  .openapi(getV1ParentSecurityProfilesRoute, getV1ParentSecurityProfilesRouteHandler)
  .openapi(getV1ParentSecurityReportsRoute, getV1ParentSecurityReportsRouteHandler)
  .openapi(postV1ParentSecurityReportsRoute, postV1ParentSecurityReportsRouteHandler)
  .openapi(getV1ParentSharedflowsRoute, getV1ParentSharedflowsRouteHandler)
  .openapi(postV1ParentSharedflowsRoute, postV1ParentSharedflowsRouteHandler)
  .openapi(getV1ParentSubscriptionsRoute, getV1ParentSubscriptionsRouteHandler)
  .openapi(postV1ParentSubscriptionsRoute, postV1ParentSubscriptionsRouteHandler)
  .openapi(postV1ParentTargetserversRoute, postV1ParentTargetserversRouteHandler)
  .openapi(postV1ParentSubscribeRoute, postV1ParentSubscribeRouteHandler)
  .openapi(postV1ParentUnsubscribeRoute, postV1ParentUnsubscribeRouteHandler)
  .openapi(
    postV1ProfileEnvironmentComputeEnvironmentScoresRoute,
    postV1ProfileEnvironmentComputeEnvironmentScoresRouteHandler,
  )
  .openapi(postV1ProjectProvisionOrganizationRoute, postV1ProjectProvisionOrganizationRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
