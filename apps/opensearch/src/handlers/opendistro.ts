import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOpendistroAsynchronousSearchIdRoute,
  deleteOpendistroIsmPoliciesPolicyIdRoute,
  deleteOpendistroRollupJobsIdRoute,
  deleteOpendistroSecurityApiActiongroupsActionGroupRoute,
  deleteOpendistroSecurityApiCacheRoute,
  deleteOpendistroSecurityApiInternalusersUsernameRoute,
  deleteOpendistroSecurityApiNodesdnClusterNameRoute,
  deleteOpendistroSecurityApiRolesmappingRoleRoute,
  deleteOpendistroSecurityApiRolesRoleRoute,
  deleteOpendistroSecurityApiTenantsTenantRoute,
  deleteOpendistroSecurityApiUserUsernameRoute,
  getOpendistroAsynchronousSearchIdRoute,
  getOpendistroAsynchronousSearchStatsRoute,
  getOpendistroIsmExplainIndexRoute,
  getOpendistroIsmExplainRoute,
  getOpendistroIsmPoliciesPolicyIdRoute,
  getOpendistroIsmPoliciesRoute,
  getOpendistroKnnNodeIdStatsStatRoute,
  getOpendistroKnnStatsStatRoute,
  getOpendistroKnnWarmupIndexRoute,
  getOpendistroPplStatsRoute,
  getOpendistroRollupJobsIdExplainRoute,
  getOpendistroRollupJobsIdRoute,
  getOpendistroSecurityApiAccountRoute,
  getOpendistroSecurityApiActiongroupsActionGroupRoute,
  getOpendistroSecurityApiAllowlistRoute,
  getOpendistroSecurityApiCacheRoute,
  getOpendistroSecurityApiInternalusersUsernameRoute,
  getOpendistroSecurityApiNodesdnClusterNameRoute,
  getOpendistroSecurityApiPermissionsinfoRoute,
  getOpendistroSecurityApiRolesmappingRoleRoute,
  getOpendistroSecurityApiRolesRoleRoute,
  getOpendistroSecurityApiSecurityconfigRoute,
  getOpendistroSecurityApiSslCertsRoute,
  getOpendistroSecurityApiTenancyConfigRoute,
  getOpendistroSecurityApiTenantsRoute,
  getOpendistroSecurityApiTenantsTenantRoute,
  getOpendistroSecurityApiUserRoute,
  getOpendistroSecurityApiUserUsernameRoute,
  getOpendistroSecurityApiValidateRoute,
  getOpendistroSecurityAuthinfoRoute,
  getOpendistroSecurityHealthRoute,
  getOpendistroSecurityKibanainfoRoute,
  getOpendistroSecuritySslinfoRoute,
  getOpendistroSecurityTenantinfoRoute,
  getOpendistroSqlStatsRoute,
  headOpendistroIsmPoliciesPolicyIdRoute,
  patchOpendistroSecurityApiActiongroupsActionGroupRoute,
  patchOpendistroSecurityApiAllowlistRoute,
  patchOpendistroSecurityApiInternalusersUsernameRoute,
  patchOpendistroSecurityApiNodesdnClusterNameRoute,
  patchOpendistroSecurityApiRolesmappingRoleRoute,
  patchOpendistroSecurityApiRolesRoleRoute,
  patchOpendistroSecurityApiSecurityconfigRoute,
  patchOpendistroSecurityApiTenantsRoute,
  patchOpendistroSecurityApiTenantsTenantRoute,
  postOpendistroAsynchronousSearchRoute,
  postOpendistroIsmAddIndexRoute,
  postOpendistroIsmAddRoute,
  postOpendistroIsmChangePolicyIndexRoute,
  postOpendistroIsmChangePolicyRoute,
  postOpendistroIsmExplainIndexRoute,
  postOpendistroIsmExplainRoute,
  postOpendistroIsmRemoveIndexRoute,
  postOpendistroIsmRemoveRoute,
  postOpendistroIsmRetryIndexRoute,
  postOpendistroIsmRetryRoute,
  postOpendistroPplExplainRoute,
  postOpendistroPplRoute,
  postOpendistroPplStatsRoute,
  postOpendistroRefreshSearchAnalyzersIndexRoute,
  postOpendistroRollupJobsIdStartRoute,
  postOpendistroRollupJobsIdStopRoute,
  postOpendistroSecurityApiAuthtokenRoute,
  postOpendistroSecurityApiCacheRoute,
  postOpendistroSecurityApiInternalusersUsernameAuthtokenRoute,
  postOpendistroSecurityApiMigrateRoute,
  postOpendistroSecurityApiUserUsernameAuthtokenRoute,
  postOpendistroSecurityAuthinfoRoute,
  postOpendistroSecurityHealthRoute,
  postOpendistroSecurityKibanainfoRoute,
  postOpendistroSecurityTenantinfoRoute,
  postOpendistroSqlCloseRoute,
  postOpendistroSqlExplainRoute,
  postOpendistroSqlRoute,
  postOpendistroSqlStatsRoute,
  putOpendistroIsmPoliciesPolicyIdRoute,
  putOpendistroIsmPoliciesRoute,
  putOpendistroRollupJobsIdRoute,
  putOpendistroSecurityApiAccountRoute,
  putOpendistroSecurityApiActiongroupsActionGroupRoute,
  putOpendistroSecurityApiAllowlistRoute,
  putOpendistroSecurityApiAuditConfigRoute,
  putOpendistroSecurityApiCacheRoute,
  putOpendistroSecurityApiInternalusersUsernameRoute,
  putOpendistroSecurityApiNodesdnClusterNameRoute,
  putOpendistroSecurityApiRolesmappingRoleRoute,
  putOpendistroSecurityApiRolesRoleRoute,
  putOpendistroSecurityApiSecurityconfigConfigRoute,
  putOpendistroSecurityApiSslHttpReloadcertsRoute,
  putOpendistroSecurityApiSslTransportReloadcertsRoute,
  putOpendistroSecurityApiTenancyConfigRoute,
  putOpendistroSecurityApiTenantsTenantRoute,
  putOpendistroSecurityApiUserUsernameRoute,
  putOpendistroSqlSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const opendistroHandler = app
  .openapi(getOpendistroSecuritySslinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroAsynchronousSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroAsynchronousSearchStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroAsynchronousSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroAsynchronousSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmAddIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmChangePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmChangePolicyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroIsmExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroIsmExplainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmExplainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroIsmPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroIsmPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headOpendistroIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmRemoveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroIsmRetryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroKnnStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroKnnWarmupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroKnnNodeIdStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroPplRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroPplExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroPplStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroPplStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroRefreshSearchAnalyzersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroRollupJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroRollupJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroRollupJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroRollupJobsIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroRollupJobsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroRollupJobsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiAuditConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityApiAuthtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityApiInternalusersUsernameAuthtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityApiMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiPermissionsinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiSecurityconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiSecurityconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiSecurityconfigConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiSslTransportReloadcertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiSslHttpReloadcertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiTenancyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiTenancyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOpendistroSecurityApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityApiUserUsernameAuthtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityApiAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSecurityApiAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOpendistroSecurityApiAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityKibanainfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityKibanainfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSecurityTenantinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSecurityTenantinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSqlExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSqlCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOpendistroSqlSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpendistroSqlStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpendistroSqlStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
