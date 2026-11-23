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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstanceReportStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameCsrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeploymentsGenerateDeployChangeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeploymentsGenerateUndeployChangeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAdjustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameGenerateDownloadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetProjectMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameGetSyncAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameListRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSetSyncAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrgenvSecurityStatsQueryTabularStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrgenvSecurityStatsQueryTimeSeriesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrgSetAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAnalyticsDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAnalyticsDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAnalyticsDatastoresTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAnalyticsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAnalyticsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentApicategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentApicategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentApiproductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentApiproductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentArchiveDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentArchiveDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentArchiveDeploymentsGenerateUploadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCanaryevaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDatacollectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDatacollectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDebugsessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDebugsessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDevelopersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevelopersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEndpointAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEndpointAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEnvgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEnvgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentHostQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentHostQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentHostSecurityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentHostSecurityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentKeysCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentKeystoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentKeyvaluemapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentNatAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentNatAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRateplansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRateplansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentResourcefilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentResourcefilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentResourcefilesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ParentResourcefilesTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentResourcefilesTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ParentResourcefilesTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSecurityIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSecurityProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSecurityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSecurityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSharedflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSharedflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTargetserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProfileEnvironmentComputeEnvironmentScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectProvisionOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
