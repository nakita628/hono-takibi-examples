import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminConfigPropertiesPropertyNameRoute,
  deleteAdminLoggersLoggerRoute,
  deleteAdminRoleMappingsPrincipalIdRoute,
  deleteAdminRulesRoute,
  deleteAdminRulesRuleRoute,
  deleteGroupsGroupIdArtifactsArtifactIdRoute,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRoute,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  deleteGroupsGroupIdArtifactsRoute,
  deleteGroupsGroupIdRoute,
  getAdminArtifactTypesRoute,
  getAdminConfigPropertiesPropertyNameRoute,
  getAdminConfigPropertiesRoute,
  getAdminExportRoute,
  getAdminLoggersLoggerRoute,
  getAdminLoggersRoute,
  getAdminRoleMappingsPrincipalIdRoute,
  getAdminRoleMappingsRoute,
  getAdminRulesRoute,
  getAdminRulesRuleRoute,
  getGroupsGroupIdArtifactsArtifactIdMetaRoute,
  getGroupsGroupIdArtifactsArtifactIdOwnerRoute,
  getGroupsGroupIdArtifactsArtifactIdRoute,
  getGroupsGroupIdArtifactsArtifactIdRulesRoute,
  getGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute,
  getGroupsGroupIdArtifactsRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  getIdsContentHashesContentHashIndexRoute,
  getIdsContentHashesContentHashReferencesRoute,
  getIdsContentIdsContentIdIndexRoute,
  getIdsContentIdsContentIdReferencesRoute,
  getIdsGlobalIdsGlobalIdReferencesRoute,
  getIdsGlobalIdsGlobalIdRoute,
  getSearchArtifactsRoute,
  getSystemInfoRoute,
  getSystemLimitsRoute,
  getUsersMeRoute,
  postAdminImportRoute,
  postAdminRoleMappingsRoute,
  postAdminRulesRoute,
  postGroupsGroupIdArtifactsArtifactIdMetaRoute,
  postGroupsGroupIdArtifactsArtifactIdRulesRoute,
  postGroupsGroupIdArtifactsArtifactIdVersionsRoute,
  postGroupsGroupIdArtifactsRoute,
  postGroupsRoute,
  postSearchArtifactsRoute,
  putAdminConfigPropertiesPropertyNameRoute,
  putAdminLoggersLoggerRoute,
  putAdminRoleMappingsPrincipalIdRoute,
  putAdminRulesRuleRoute,
  putGroupsGroupIdArtifactsArtifactIdMetaRoute,
  putGroupsGroupIdArtifactsArtifactIdOwnerRoute,
  putGroupsGroupIdArtifactsArtifactIdRoute,
  putGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  putGroupsGroupIdArtifactsArtifactIdStateRoute,
  putGroupsGroupIdArtifactsArtifactIdTestRoute,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute,
} from './routes'
import {
  deleteAdminConfigPropertiesPropertyNameRouteHandler,
  deleteAdminLoggersLoggerRouteHandler,
  deleteAdminRoleMappingsPrincipalIdRouteHandler,
  deleteAdminRulesRouteHandler,
  deleteAdminRulesRuleRouteHandler,
  deleteGroupsGroupIdArtifactsArtifactIdRouteHandler,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRouteHandler,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRouteHandler,
  deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRouteHandler,
  deleteGroupsGroupIdArtifactsRouteHandler,
  deleteGroupsGroupIdRouteHandler,
  getAdminArtifactTypesRouteHandler,
  getAdminConfigPropertiesPropertyNameRouteHandler,
  getAdminConfigPropertiesRouteHandler,
  getAdminExportRouteHandler,
  getAdminLoggersLoggerRouteHandler,
  getAdminLoggersRouteHandler,
  getAdminRoleMappingsPrincipalIdRouteHandler,
  getAdminRoleMappingsRouteHandler,
  getAdminRulesRouteHandler,
  getAdminRulesRuleRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdMetaRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdOwnerRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdRulesRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdRulesRuleRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdVersionsRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRouteHandler,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionRouteHandler,
  getGroupsGroupIdArtifactsRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsRouteHandler,
  getIdsContentHashesContentHashIndexRouteHandler,
  getIdsContentHashesContentHashReferencesRouteHandler,
  getIdsContentIdsContentIdIndexRouteHandler,
  getIdsContentIdsContentIdReferencesRouteHandler,
  getIdsGlobalIdsGlobalIdReferencesRouteHandler,
  getIdsGlobalIdsGlobalIdRouteHandler,
  getSearchArtifactsRouteHandler,
  getSystemInfoRouteHandler,
  getSystemLimitsRouteHandler,
  getUsersMeRouteHandler,
  postAdminImportRouteHandler,
  postAdminRoleMappingsRouteHandler,
  postAdminRulesRouteHandler,
  postGroupsGroupIdArtifactsArtifactIdMetaRouteHandler,
  postGroupsGroupIdArtifactsArtifactIdRulesRouteHandler,
  postGroupsGroupIdArtifactsArtifactIdVersionsRouteHandler,
  postGroupsGroupIdArtifactsRouteHandler,
  postGroupsRouteHandler,
  postSearchArtifactsRouteHandler,
  putAdminConfigPropertiesPropertyNameRouteHandler,
  putAdminLoggersLoggerRouteHandler,
  putAdminRoleMappingsPrincipalIdRouteHandler,
  putAdminRulesRuleRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdMetaRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdOwnerRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdRulesRuleRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdStateRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdTestRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRouteHandler,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdminArtifactTypesRoute, getAdminArtifactTypesRouteHandler)
  .openapi(getAdminConfigPropertiesRoute, getAdminConfigPropertiesRouteHandler)
  .openapi(
    deleteAdminConfigPropertiesPropertyNameRoute,
    deleteAdminConfigPropertiesPropertyNameRouteHandler,
  )
  .openapi(
    getAdminConfigPropertiesPropertyNameRoute,
    getAdminConfigPropertiesPropertyNameRouteHandler,
  )
  .openapi(
    putAdminConfigPropertiesPropertyNameRoute,
    putAdminConfigPropertiesPropertyNameRouteHandler,
  )
  .openapi(getAdminExportRoute, getAdminExportRouteHandler)
  .openapi(postAdminImportRoute, postAdminImportRouteHandler)
  .openapi(getAdminLoggersRoute, getAdminLoggersRouteHandler)
  .openapi(deleteAdminLoggersLoggerRoute, deleteAdminLoggersLoggerRouteHandler)
  .openapi(getAdminLoggersLoggerRoute, getAdminLoggersLoggerRouteHandler)
  .openapi(putAdminLoggersLoggerRoute, putAdminLoggersLoggerRouteHandler)
  .openapi(getAdminRoleMappingsRoute, getAdminRoleMappingsRouteHandler)
  .openapi(postAdminRoleMappingsRoute, postAdminRoleMappingsRouteHandler)
  .openapi(deleteAdminRoleMappingsPrincipalIdRoute, deleteAdminRoleMappingsPrincipalIdRouteHandler)
  .openapi(getAdminRoleMappingsPrincipalIdRoute, getAdminRoleMappingsPrincipalIdRouteHandler)
  .openapi(putAdminRoleMappingsPrincipalIdRoute, putAdminRoleMappingsPrincipalIdRouteHandler)
  .openapi(deleteAdminRulesRoute, deleteAdminRulesRouteHandler)
  .openapi(getAdminRulesRoute, getAdminRulesRouteHandler)
  .openapi(postAdminRulesRoute, postAdminRulesRouteHandler)
  .openapi(deleteAdminRulesRuleRoute, deleteAdminRulesRuleRouteHandler)
  .openapi(getAdminRulesRuleRoute, getAdminRulesRuleRouteHandler)
  .openapi(putAdminRulesRuleRoute, putAdminRulesRuleRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(deleteGroupsGroupIdRoute, deleteGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(deleteGroupsGroupIdArtifactsRoute, deleteGroupsGroupIdArtifactsRouteHandler)
  .openapi(getGroupsGroupIdArtifactsRoute, getGroupsGroupIdArtifactsRouteHandler)
  .openapi(postGroupsGroupIdArtifactsRoute, postGroupsGroupIdArtifactsRouteHandler)
  .openapi(
    deleteGroupsGroupIdArtifactsArtifactIdRoute,
    deleteGroupsGroupIdArtifactsArtifactIdRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdRoute,
    getGroupsGroupIdArtifactsArtifactIdRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdRoute,
    putGroupsGroupIdArtifactsArtifactIdRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdMetaRoute,
    getGroupsGroupIdArtifactsArtifactIdMetaRouteHandler,
  )
  .openapi(
    postGroupsGroupIdArtifactsArtifactIdMetaRoute,
    postGroupsGroupIdArtifactsArtifactIdMetaRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdMetaRoute,
    putGroupsGroupIdArtifactsArtifactIdMetaRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdOwnerRoute,
    getGroupsGroupIdArtifactsArtifactIdOwnerRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdOwnerRoute,
    putGroupsGroupIdArtifactsArtifactIdOwnerRouteHandler,
  )
  .openapi(
    deleteGroupsGroupIdArtifactsArtifactIdRulesRoute,
    deleteGroupsGroupIdArtifactsArtifactIdRulesRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdRulesRoute,
    getGroupsGroupIdArtifactsArtifactIdRulesRouteHandler,
  )
  .openapi(
    postGroupsGroupIdArtifactsArtifactIdRulesRoute,
    postGroupsGroupIdArtifactsArtifactIdRulesRouteHandler,
  )
  .openapi(
    deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
    deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
    getGroupsGroupIdArtifactsArtifactIdRulesRuleRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
    putGroupsGroupIdArtifactsArtifactIdRulesRuleRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdStateRoute,
    putGroupsGroupIdArtifactsArtifactIdStateRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdTestRoute,
    putGroupsGroupIdArtifactsArtifactIdTestRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdVersionsRoute,
    getGroupsGroupIdArtifactsArtifactIdVersionsRouteHandler,
  )
  .openapi(
    postGroupsGroupIdArtifactsArtifactIdVersionsRoute,
    postGroupsGroupIdArtifactsArtifactIdVersionsRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute,
    getGroupsGroupIdArtifactsArtifactIdVersionsVersionRouteHandler,
  )
  .openapi(
    deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
    deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
    getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
    putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRouteHandler,
  )
  .openapi(
    getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute,
    getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRouteHandler,
  )
  .openapi(
    putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute,
    putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRouteHandler,
  )
  .openapi(
    getIdsContentHashesContentHashIndexRoute,
    getIdsContentHashesContentHashIndexRouteHandler,
  )
  .openapi(
    getIdsContentHashesContentHashReferencesRoute,
    getIdsContentHashesContentHashReferencesRouteHandler,
  )
  .openapi(getIdsContentIdsContentIdIndexRoute, getIdsContentIdsContentIdIndexRouteHandler)
  .openapi(
    getIdsContentIdsContentIdReferencesRoute,
    getIdsContentIdsContentIdReferencesRouteHandler,
  )
  .openapi(getIdsGlobalIdsGlobalIdRoute, getIdsGlobalIdsGlobalIdRouteHandler)
  .openapi(getIdsGlobalIdsGlobalIdReferencesRoute, getIdsGlobalIdsGlobalIdReferencesRouteHandler)
  .openapi(getSearchArtifactsRoute, getSearchArtifactsRouteHandler)
  .openapi(postSearchArtifactsRoute, postSearchArtifactsRouteHandler)
  .openapi(getSystemInfoRoute, getSystemInfoRouteHandler)
  .openapi(getSystemLimitsRoute, getSystemLimitsRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)

export default app
