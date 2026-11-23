import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20200301GatewaysGatewayIdRoute,
  deleteAccessPoliciesAccessPolicyIdRoute,
  deleteAssetModelsAssetModelIdRoute,
  deleteAssetsAssetIdRoute,
  deleteDashboardsDashboardIdRoute,
  deletePortalsPortalIdRoute,
  deleteProjectsProjectIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceRoute,
  get20200301GatewaysGatewayIdRoute,
  get20200301GatewaysRoute,
  getAccessPoliciesAccessPolicyIdRoute,
  getAccessPoliciesRoute,
  getAssetModelsAssetModelIdPropertiesRoute,
  getAssetModelsAssetModelIdRoute,
  getAssetModelsRoute,
  getAssetsAssetIdAssetRelationshipsTraversalTypeRoute,
  getAssetsAssetIdHierarchiesRoute,
  getAssetsAssetIdPropertiesPropertyIdRoute,
  getAssetsAssetIdPropertiesRoute,
  getAssetsAssetIdRoute,
  getAssetsRoute,
  getConfigurationAccountEncryptionRoute,
  getConfigurationAccountStorageRoute,
  getDashboardsDashboardIdRoute,
  getDashboardsProjectIdRoute,
  getJobsJobIdRoute,
  getJobsRoute,
  getLoggingRoute,
  getPortalsPortalIdRoute,
  getPortalsRoute,
  getProjectsPortalIdRoute,
  getProjectsProjectIdAssetsRoute,
  getProjectsProjectIdRoute,
  getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRoute,
  getPropertiesHistoryRoute,
  getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRoute,
  getPropertiesLatestRoute,
  getTagsResourceArnRoute,
  getTimeseriesDescribeIndexRoute,
  getTimeseriesIndexRoute,
  post20200301GatewaysGatewayIdCapabilityRoute,
  post20200301GatewaysRoute,
  postAccessPoliciesRoute,
  postAssetModelsRoute,
  postAssetsAssetIdAssociateRoute,
  postAssetsAssetIdDisassociateRoute,
  postAssetsRoute,
  postConfigurationAccountEncryptionRoute,
  postConfigurationAccountStorageRoute,
  postDashboardsRoute,
  postJobsRoute,
  postPortalsRoute,
  postProjectsProjectIdAssetsAssociateRoute,
  postProjectsProjectIdAssetsDisassociateRoute,
  postProjectsRoute,
  postPropertiesBatchAggregatesRoute,
  postPropertiesBatchHistoryRoute,
  postPropertiesBatchLatestRoute,
  postPropertiesRoute,
  postTagsResourceArnRoute,
  postTimeseriesAssociateAliasAssetIdPropertyIdRoute,
  postTimeseriesDeleteIndexRoute,
  postTimeseriesDisassociateAliasAssetIdPropertyIdRoute,
  put20200301GatewaysGatewayIdRoute,
  putAccessPoliciesAccessPolicyIdRoute,
  putAssetModelsAssetModelIdRoute,
  putAssetsAssetIdPropertiesPropertyIdRoute,
  putAssetsAssetIdRoute,
  putDashboardsDashboardIdRoute,
  putLoggingRoute,
  putPortalsPortalIdRoute,
  putProjectsProjectIdRoute,
} from './routes'
import {
  delete20200301GatewaysGatewayIdRouteHandler,
  deleteAccessPoliciesAccessPolicyIdRouteHandler,
  deleteAssetModelsAssetModelIdRouteHandler,
  deleteAssetsAssetIdRouteHandler,
  deleteDashboardsDashboardIdRouteHandler,
  deletePortalsPortalIdRouteHandler,
  deleteProjectsProjectIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceRouteHandler,
  get20200301GatewaysGatewayIdRouteHandler,
  get20200301GatewaysRouteHandler,
  getAccessPoliciesAccessPolicyIdRouteHandler,
  getAccessPoliciesRouteHandler,
  getAssetModelsAssetModelIdPropertiesRouteHandler,
  getAssetModelsAssetModelIdRouteHandler,
  getAssetModelsRouteHandler,
  getAssetsAssetIdAssetRelationshipsTraversalTypeRouteHandler,
  getAssetsAssetIdHierarchiesRouteHandler,
  getAssetsAssetIdPropertiesPropertyIdRouteHandler,
  getAssetsAssetIdPropertiesRouteHandler,
  getAssetsAssetIdRouteHandler,
  getAssetsRouteHandler,
  getConfigurationAccountEncryptionRouteHandler,
  getConfigurationAccountStorageRouteHandler,
  getDashboardsDashboardIdRouteHandler,
  getDashboardsProjectIdRouteHandler,
  getJobsJobIdRouteHandler,
  getJobsRouteHandler,
  getLoggingRouteHandler,
  getPortalsPortalIdRouteHandler,
  getPortalsRouteHandler,
  getProjectsPortalIdRouteHandler,
  getProjectsProjectIdAssetsRouteHandler,
  getProjectsProjectIdRouteHandler,
  getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRouteHandler,
  getPropertiesHistoryRouteHandler,
  getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRouteHandler,
  getPropertiesLatestRouteHandler,
  getTagsResourceArnRouteHandler,
  getTimeseriesDescribeIndexRouteHandler,
  getTimeseriesIndexRouteHandler,
  post20200301GatewaysGatewayIdCapabilityRouteHandler,
  post20200301GatewaysRouteHandler,
  postAccessPoliciesRouteHandler,
  postAssetModelsRouteHandler,
  postAssetsAssetIdAssociateRouteHandler,
  postAssetsAssetIdDisassociateRouteHandler,
  postAssetsRouteHandler,
  postConfigurationAccountEncryptionRouteHandler,
  postConfigurationAccountStorageRouteHandler,
  postDashboardsRouteHandler,
  postJobsRouteHandler,
  postPortalsRouteHandler,
  postProjectsProjectIdAssetsAssociateRouteHandler,
  postProjectsProjectIdAssetsDisassociateRouteHandler,
  postProjectsRouteHandler,
  postPropertiesBatchAggregatesRouteHandler,
  postPropertiesBatchHistoryRouteHandler,
  postPropertiesBatchLatestRouteHandler,
  postPropertiesRouteHandler,
  postTagsResourceArnRouteHandler,
  postTimeseriesAssociateAliasAssetIdPropertyIdRouteHandler,
  postTimeseriesDeleteIndexRouteHandler,
  postTimeseriesDisassociateAliasAssetIdPropertyIdRouteHandler,
  put20200301GatewaysGatewayIdRouteHandler,
  putAccessPoliciesAccessPolicyIdRouteHandler,
  putAssetModelsAssetModelIdRouteHandler,
  putAssetsAssetIdPropertiesPropertyIdRouteHandler,
  putAssetsAssetIdRouteHandler,
  putDashboardsDashboardIdRouteHandler,
  putLoggingRouteHandler,
  putPortalsPortalIdRouteHandler,
  putProjectsProjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAssetsAssetIdAssociateRoute, postAssetsAssetIdAssociateRouteHandler)
  .openapi(
    postTimeseriesAssociateAliasAssetIdPropertyIdRoute,
    postTimeseriesAssociateAliasAssetIdPropertyIdRouteHandler,
  )
  .openapi(
    postProjectsProjectIdAssetsAssociateRoute,
    postProjectsProjectIdAssetsAssociateRouteHandler,
  )
  .openapi(
    postProjectsProjectIdAssetsDisassociateRoute,
    postProjectsProjectIdAssetsDisassociateRouteHandler,
  )
  .openapi(postPropertiesBatchAggregatesRoute, postPropertiesBatchAggregatesRouteHandler)
  .openapi(postPropertiesBatchLatestRoute, postPropertiesBatchLatestRouteHandler)
  .openapi(postPropertiesBatchHistoryRoute, postPropertiesBatchHistoryRouteHandler)
  .openapi(postPropertiesRoute, postPropertiesRouteHandler)
  .openapi(postAccessPoliciesRoute, postAccessPoliciesRouteHandler)
  .openapi(getAccessPoliciesRoute, getAccessPoliciesRouteHandler)
  .openapi(postAssetsRoute, postAssetsRouteHandler)
  .openapi(getAssetsRoute, getAssetsRouteHandler)
  .openapi(postAssetModelsRoute, postAssetModelsRouteHandler)
  .openapi(getAssetModelsRoute, getAssetModelsRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(postDashboardsRoute, postDashboardsRouteHandler)
  .openapi(post20200301GatewaysRoute, post20200301GatewaysRouteHandler)
  .openapi(get20200301GatewaysRoute, get20200301GatewaysRouteHandler)
  .openapi(postPortalsRoute, postPortalsRouteHandler)
  .openapi(getPortalsRoute, getPortalsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(deleteAccessPoliciesAccessPolicyIdRoute, deleteAccessPoliciesAccessPolicyIdRouteHandler)
  .openapi(getAccessPoliciesAccessPolicyIdRoute, getAccessPoliciesAccessPolicyIdRouteHandler)
  .openapi(putAccessPoliciesAccessPolicyIdRoute, putAccessPoliciesAccessPolicyIdRouteHandler)
  .openapi(deleteAssetsAssetIdRoute, deleteAssetsAssetIdRouteHandler)
  .openapi(getAssetsAssetIdRoute, getAssetsAssetIdRouteHandler)
  .openapi(putAssetsAssetIdRoute, putAssetsAssetIdRouteHandler)
  .openapi(deleteAssetModelsAssetModelIdRoute, deleteAssetModelsAssetModelIdRouteHandler)
  .openapi(getAssetModelsAssetModelIdRoute, getAssetModelsAssetModelIdRouteHandler)
  .openapi(putAssetModelsAssetModelIdRoute, putAssetModelsAssetModelIdRouteHandler)
  .openapi(deleteDashboardsDashboardIdRoute, deleteDashboardsDashboardIdRouteHandler)
  .openapi(getDashboardsDashboardIdRoute, getDashboardsDashboardIdRouteHandler)
  .openapi(putDashboardsDashboardIdRoute, putDashboardsDashboardIdRouteHandler)
  .openapi(delete20200301GatewaysGatewayIdRoute, delete20200301GatewaysGatewayIdRouteHandler)
  .openapi(get20200301GatewaysGatewayIdRoute, get20200301GatewaysGatewayIdRouteHandler)
  .openapi(put20200301GatewaysGatewayIdRoute, put20200301GatewaysGatewayIdRouteHandler)
  .openapi(deletePortalsPortalIdRoute, deletePortalsPortalIdRouteHandler)
  .openapi(getPortalsPortalIdRoute, getPortalsPortalIdRouteHandler)
  .openapi(putPortalsPortalIdRoute, putPortalsPortalIdRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(putProjectsProjectIdRoute, putProjectsProjectIdRouteHandler)
  .openapi(postTimeseriesDeleteIndexRoute, postTimeseriesDeleteIndexRouteHandler)
  .openapi(
    getAssetsAssetIdPropertiesPropertyIdRoute,
    getAssetsAssetIdPropertiesPropertyIdRouteHandler,
  )
  .openapi(
    putAssetsAssetIdPropertiesPropertyIdRoute,
    putAssetsAssetIdPropertiesPropertyIdRouteHandler,
  )
  .openapi(getJobsJobIdRoute, getJobsJobIdRouteHandler)
  .openapi(getConfigurationAccountEncryptionRoute, getConfigurationAccountEncryptionRouteHandler)
  .openapi(postConfigurationAccountEncryptionRoute, postConfigurationAccountEncryptionRouteHandler)
  .openapi(
    get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceRoute,
    get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceRouteHandler,
  )
  .openapi(getLoggingRoute, getLoggingRouteHandler)
  .openapi(putLoggingRoute, putLoggingRouteHandler)
  .openapi(getConfigurationAccountStorageRoute, getConfigurationAccountStorageRouteHandler)
  .openapi(postConfigurationAccountStorageRoute, postConfigurationAccountStorageRouteHandler)
  .openapi(getTimeseriesDescribeIndexRoute, getTimeseriesDescribeIndexRouteHandler)
  .openapi(postAssetsAssetIdDisassociateRoute, postAssetsAssetIdDisassociateRouteHandler)
  .openapi(
    postTimeseriesDisassociateAliasAssetIdPropertyIdRoute,
    postTimeseriesDisassociateAliasAssetIdPropertyIdRouteHandler,
  )
  .openapi(
    getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRoute,
    getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRouteHandler,
  )
  .openapi(getPropertiesLatestRoute, getPropertiesLatestRouteHandler)
  .openapi(getPropertiesHistoryRoute, getPropertiesHistoryRouteHandler)
  .openapi(
    getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRoute,
    getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRouteHandler,
  )
  .openapi(
    getAssetModelsAssetModelIdPropertiesRoute,
    getAssetModelsAssetModelIdPropertiesRouteHandler,
  )
  .openapi(getAssetsAssetIdPropertiesRoute, getAssetsAssetIdPropertiesRouteHandler)
  .openapi(
    getAssetsAssetIdAssetRelationshipsTraversalTypeRoute,
    getAssetsAssetIdAssetRelationshipsTraversalTypeRouteHandler,
  )
  .openapi(getAssetsAssetIdHierarchiesRoute, getAssetsAssetIdHierarchiesRouteHandler)
  .openapi(getDashboardsProjectIdRoute, getDashboardsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdAssetsRoute, getProjectsProjectIdAssetsRouteHandler)
  .openapi(getProjectsPortalIdRoute, getProjectsPortalIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(getTimeseriesIndexRoute, getTimeseriesIndexRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(
    post20200301GatewaysGatewayIdCapabilityRoute,
    post20200301GatewaysGatewayIdCapabilityRouteHandler,
  )

export default app
