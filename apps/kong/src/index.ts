import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCaCertificatesCaCertificateIdRoute,
  deleteCacheKeyRoute,
  deleteCacheRoute,
  deleteCertificatesCertificateIdRoute,
  deleteCertificatesCertificateIdSnisSniNameOrIdRoute,
  deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  deleteConsumersConsumerUsernameOrIdRoute,
  deleteFilterChainsFilterChainIdRoute,
  deleteKeySetsKeySetIdOrNameRoute,
  deleteKeysKeyIdOrNameRoute,
  deletePluginsPluginIdRoute,
  deleteRoutesRouteIdOrNameFilterChainIdRoute,
  deleteRoutesRouteIdOrNamePluginsPluginIdRoute,
  deleteRoutesRouteIdOrNameRoute,
  deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute,
  deleteServicesServiceIdOrNamePluginsPluginIdRoute,
  deleteServicesServiceIdOrNameRoute,
  deleteServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  deleteSnisSniNameOrIdRoute,
  deleteUpstreamsUpstreamIdOrNameRoute,
  deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  deleteVaultsVaultIdOrPrefixRoute,
  getCaCertificatesCaCertificateIdRoute,
  getCaCertificatesRoute,
  getCacheKeyRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesCertificateIdSnisSniNameOrIdRoute,
  getCertificatesCertificateNameOrIdSnisRoute,
  getCertificatesRoute,
  getClusteringDataPlanesRoute,
  getClusteringStatusRoute,
  getConfigRoute,
  getConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  getConsumersConsumerUsernameOrIdPluginsRoute,
  getConsumersConsumerUsernameOrIdRoute,
  getConsumersRoute,
  getDebugNodeLogLevelRoute,
  getEndpointsRoute,
  getFilterChainsFilterChainIdRoute,
  getFilterChainsRoute,
  getKeySetsKeySetIdOrNameRoute,
  getKeySetsRoute,
  getKeysKeyIdOrNameRoute,
  getKeysRoute,
  getPluginsPluginIdRoute,
  getPluginsRoute,
  getRoute,
  getRoutesRoute,
  getRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
  getRoutesRouteIdOrNameFilterChainsRoute,
  getRoutesRouteIdOrNamePluginsPluginIdRoute,
  getRoutesRouteIdOrNamePluginsRoute,
  getRoutesRouteIdOrNameRoute,
  getSchemasEntityRoute,
  getSchemasFiltersFilterNameRoute,
  getSchemasPluginsPluginNameRoute,
  getSchemasVaultsVaultNameRoute,
  getServicesRoute,
  getServicesServiceIdOrNameFilterChainsRoute,
  getServicesServiceIdOrNamePluginsPluginIdRoute,
  getServicesServiceIdOrNamePluginsRoute,
  getServicesServiceIdOrNameRoute,
  getServicesServiceIdOrNameRoutesRoute,
  getServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  getSnisRoute,
  getSnisSniNameOrIdRoute,
  getStatusDnsRoute,
  getStatusRoute,
  getTagsRoute,
  getTagsTagsRoute,
  getTimersRoute,
  getUpstreamsRoute,
  getUpstreamsUpstreamIdOrNameRoute,
  getUpstreamsUpstreamIdOrNameTargetsRoute,
  getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  getVaultsRoute,
  getVaultsVaultIdOrPrefixRoute,
  headEndpointRoute,
  optionsEndpointRoute,
  patchCaCertificatesCaCertificateIdRoute,
  patchCertificatesCertificateIdRoute,
  patchCertificatesCertificateIdSnisSniNameOrIdRoute,
  patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  patchConsumersConsumerUsernameOrIdRoute,
  patchFilterChainsFilterChainIdRoute,
  patchKeySetsKeySetIdOrNameRoute,
  patchKeysKeyIdOrNameRoute,
  patchPluginsPluginIdRoute,
  patchRoutesRouteIdOrNameFilterChainsRoute,
  patchRoutesRouteIdOrNamePluginsPluginIdRoute,
  patchRoutesRouteIdOrNameRoute,
  patchServicesServiceIdOrNamePluginsPluginIdRoute,
  patchServicesServiceIdOrNameRoute,
  patchServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  patchSnisSniNameOrIdRoute,
  patchUpstreamsUpstreamIdOrNameRoute,
  patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  patchVaultsVaultIdOrPrefixRoute,
  postCaCertificatesRoute,
  postCertificatesCertificateNameOrIdSnisRoute,
  postCertificatesRoute,
  postConfigRoute,
  postConsumersConsumerUsernameOrIdPluginsRoute,
  postConsumersRoute,
  postFilterChainsRoute,
  postKeySetsRoute,
  postKeysRoute,
  postPluginsRoute,
  postRoutesRoute,
  postRoutesRouteIdOrNameFilterChainsRoute,
  postRoutesRouteIdOrNamePluginsRoute,
  postSchemasEntityValidateRoute,
  postSchemasPluginsValidateRoute,
  postSchemasVaultsVaultNameRoute,
  postServicesRoute,
  postServicesServiceIdOrNameFilterChainsRoute,
  postServicesServiceIdOrNamePluginsRoute,
  postServicesServiceIdOrNameRoutesRoute,
  postSnisRoute,
  postUpstreamsRoute,
  postUpstreamsUpstreamIdOrNameTargetsRoute,
  postVaultsRoute,
  putCaCertificatesCaCertificateIdRoute,
  putCertificatesCertificateIdRoute,
  putCertificatesCertificateIdSnisSniNameOrIdRoute,
  putConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  putConsumersConsumerUsernameOrIdRoute,
  putDebugClusterControlPlanesNodesLogLevelLogLevelRoute,
  putDebugClusterLogLevelLogLevelRoute,
  putDebugNodeLogLevelLogLevelRoute,
  putFilterChainsFilterChainIdRoute,
  putKeySetsKeySetIdOrNameRoute,
  putKeysKeyIdOrNameRoute,
  putPluginsPluginIdRoute,
  putRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
  putRoutesRouteIdOrNamePluginsPluginIdRoute,
  putRoutesRouteIdOrNameRoute,
  putServicesServiceIdOrNamePluginsPluginIdRoute,
  putServicesServiceIdOrNameRoute,
  putServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  putSnisSniNameOrIdRoute,
  putUpstreamsUpstreamIdOrNameRoute,
  putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  putVaultsVaultIdOrPrefixRoute,
} from './routes'
import {
  deleteCaCertificatesCaCertificateIdRouteHandler,
  deleteCacheKeyRouteHandler,
  deleteCacheRouteHandler,
  deleteCertificatesCertificateIdRouteHandler,
  deleteCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  deleteConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  deleteConsumersConsumerUsernameOrIdRouteHandler,
  deleteFilterChainsFilterChainIdRouteHandler,
  deleteKeySetsKeySetIdOrNameRouteHandler,
  deleteKeysKeyIdOrNameRouteHandler,
  deletePluginsPluginIdRouteHandler,
  deleteRoutesRouteIdOrNameFilterChainIdRouteHandler,
  deleteRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  deleteRoutesRouteIdOrNameRouteHandler,
  deleteServicesServiceIdOrNameFilterChainsFilterChainIdRouteHandler,
  deleteServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  deleteServicesServiceIdOrNameRouteHandler,
  deleteServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  deleteSnisSniNameOrIdRouteHandler,
  deleteUpstreamsUpstreamIdOrNameRouteHandler,
  deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  deleteVaultsVaultIdOrPrefixRouteHandler,
  getCaCertificatesCaCertificateIdRouteHandler,
  getCaCertificatesRouteHandler,
  getCacheKeyRouteHandler,
  getCertificatesCertificateIdRouteHandler,
  getCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  getCertificatesCertificateNameOrIdSnisRouteHandler,
  getCertificatesRouteHandler,
  getClusteringDataPlanesRouteHandler,
  getClusteringStatusRouteHandler,
  getConfigRouteHandler,
  getConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  getConsumersConsumerUsernameOrIdPluginsRouteHandler,
  getConsumersConsumerUsernameOrIdRouteHandler,
  getConsumersRouteHandler,
  getDebugNodeLogLevelRouteHandler,
  getEndpointsRouteHandler,
  getFilterChainsFilterChainIdRouteHandler,
  getFilterChainsRouteHandler,
  getKeySetsKeySetIdOrNameRouteHandler,
  getKeySetsRouteHandler,
  getKeysKeyIdOrNameRouteHandler,
  getKeysRouteHandler,
  getPluginsPluginIdRouteHandler,
  getPluginsRouteHandler,
  getRouteHandler,
  getRoutesRouteHandler,
  getRoutesRouteIdOrNameFilterChainsFilterChainIdRouteHandler,
  getRoutesRouteIdOrNameFilterChainsRouteHandler,
  getRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  getRoutesRouteIdOrNamePluginsRouteHandler,
  getRoutesRouteIdOrNameRouteHandler,
  getSchemasEntityRouteHandler,
  getSchemasFiltersFilterNameRouteHandler,
  getSchemasPluginsPluginNameRouteHandler,
  getSchemasVaultsVaultNameRouteHandler,
  getServicesRouteHandler,
  getServicesServiceIdOrNameFilterChainsRouteHandler,
  getServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  getServicesServiceIdOrNamePluginsRouteHandler,
  getServicesServiceIdOrNameRouteHandler,
  getServicesServiceIdOrNameRoutesRouteHandler,
  getServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  getSnisRouteHandler,
  getSnisSniNameOrIdRouteHandler,
  getStatusDnsRouteHandler,
  getStatusRouteHandler,
  getTagsRouteHandler,
  getTagsTagsRouteHandler,
  getTimersRouteHandler,
  getUpstreamsRouteHandler,
  getUpstreamsUpstreamIdOrNameRouteHandler,
  getUpstreamsUpstreamIdOrNameTargetsRouteHandler,
  getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  getVaultsRouteHandler,
  getVaultsVaultIdOrPrefixRouteHandler,
  headEndpointRouteHandler,
  optionsEndpointRouteHandler,
  patchCaCertificatesCaCertificateIdRouteHandler,
  patchCertificatesCertificateIdRouteHandler,
  patchCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  patchConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  patchConsumersConsumerUsernameOrIdRouteHandler,
  patchFilterChainsFilterChainIdRouteHandler,
  patchKeySetsKeySetIdOrNameRouteHandler,
  patchKeysKeyIdOrNameRouteHandler,
  patchPluginsPluginIdRouteHandler,
  patchRoutesRouteIdOrNameFilterChainsRouteHandler,
  patchRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  patchRoutesRouteIdOrNameRouteHandler,
  patchServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  patchServicesServiceIdOrNameRouteHandler,
  patchServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  patchSnisSniNameOrIdRouteHandler,
  patchUpstreamsUpstreamIdOrNameRouteHandler,
  patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  patchVaultsVaultIdOrPrefixRouteHandler,
  postCaCertificatesRouteHandler,
  postCertificatesCertificateNameOrIdSnisRouteHandler,
  postCertificatesRouteHandler,
  postConfigRouteHandler,
  postConsumersConsumerUsernameOrIdPluginsRouteHandler,
  postConsumersRouteHandler,
  postFilterChainsRouteHandler,
  postKeySetsRouteHandler,
  postKeysRouteHandler,
  postPluginsRouteHandler,
  postRoutesRouteHandler,
  postRoutesRouteIdOrNameFilterChainsRouteHandler,
  postRoutesRouteIdOrNamePluginsRouteHandler,
  postSchemasEntityValidateRouteHandler,
  postSchemasPluginsValidateRouteHandler,
  postSchemasVaultsVaultNameRouteHandler,
  postServicesRouteHandler,
  postServicesServiceIdOrNameFilterChainsRouteHandler,
  postServicesServiceIdOrNamePluginsRouteHandler,
  postServicesServiceIdOrNameRoutesRouteHandler,
  postSnisRouteHandler,
  postUpstreamsRouteHandler,
  postUpstreamsUpstreamIdOrNameTargetsRouteHandler,
  postVaultsRouteHandler,
  putCaCertificatesCaCertificateIdRouteHandler,
  putCertificatesCertificateIdRouteHandler,
  putCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  putConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  putConsumersConsumerUsernameOrIdRouteHandler,
  putDebugClusterControlPlanesNodesLogLevelLogLevelRouteHandler,
  putDebugClusterLogLevelLogLevelRouteHandler,
  putDebugNodeLogLevelLogLevelRouteHandler,
  putFilterChainsFilterChainIdRouteHandler,
  putKeySetsKeySetIdOrNameRouteHandler,
  putKeysKeyIdOrNameRouteHandler,
  putPluginsPluginIdRouteHandler,
  putRoutesRouteIdOrNameFilterChainsFilterChainIdRouteHandler,
  putRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  putRoutesRouteIdOrNameRouteHandler,
  putServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  putServicesServiceIdOrNameRouteHandler,
  putServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  putSnisSniNameOrIdRouteHandler,
  putUpstreamsUpstreamIdOrNameRouteHandler,
  putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  putVaultsVaultIdOrPrefixRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getCaCertificatesRoute, getCaCertificatesRouteHandler)
  .openapi(postCaCertificatesRoute, postCaCertificatesRouteHandler)
  .openapi(
    deleteCaCertificatesCaCertificateIdRoute,
    deleteCaCertificatesCaCertificateIdRouteHandler,
  )
  .openapi(getCaCertificatesCaCertificateIdRoute, getCaCertificatesCaCertificateIdRouteHandler)
  .openapi(patchCaCertificatesCaCertificateIdRoute, patchCaCertificatesCaCertificateIdRouteHandler)
  .openapi(putCaCertificatesCaCertificateIdRoute, putCaCertificatesCaCertificateIdRouteHandler)
  .openapi(getCertificatesRoute, getCertificatesRouteHandler)
  .openapi(postCertificatesRoute, postCertificatesRouteHandler)
  .openapi(deleteCertificatesCertificateIdRoute, deleteCertificatesCertificateIdRouteHandler)
  .openapi(getCertificatesCertificateIdRoute, getCertificatesCertificateIdRouteHandler)
  .openapi(patchCertificatesCertificateIdRoute, patchCertificatesCertificateIdRouteHandler)
  .openapi(putCertificatesCertificateIdRoute, putCertificatesCertificateIdRouteHandler)
  .openapi(
    getCertificatesCertificateNameOrIdSnisRoute,
    getCertificatesCertificateNameOrIdSnisRouteHandler,
  )
  .openapi(
    postCertificatesCertificateNameOrIdSnisRoute,
    postCertificatesCertificateNameOrIdSnisRouteHandler,
  )
  .openapi(
    deleteCertificatesCertificateIdSnisSniNameOrIdRoute,
    deleteCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  )
  .openapi(
    getCertificatesCertificateIdSnisSniNameOrIdRoute,
    getCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  )
  .openapi(
    patchCertificatesCertificateIdSnisSniNameOrIdRoute,
    patchCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  )
  .openapi(
    putCertificatesCertificateIdSnisSniNameOrIdRoute,
    putCertificatesCertificateIdSnisSniNameOrIdRouteHandler,
  )
  .openapi(getConsumersRoute, getConsumersRouteHandler)
  .openapi(postConsumersRoute, postConsumersRouteHandler)
  .openapi(
    deleteConsumersConsumerUsernameOrIdRoute,
    deleteConsumersConsumerUsernameOrIdRouteHandler,
  )
  .openapi(getConsumersConsumerUsernameOrIdRoute, getConsumersConsumerUsernameOrIdRouteHandler)
  .openapi(patchConsumersConsumerUsernameOrIdRoute, patchConsumersConsumerUsernameOrIdRouteHandler)
  .openapi(putConsumersConsumerUsernameOrIdRoute, putConsumersConsumerUsernameOrIdRouteHandler)
  .openapi(
    getConsumersConsumerUsernameOrIdPluginsRoute,
    getConsumersConsumerUsernameOrIdPluginsRouteHandler,
  )
  .openapi(
    postConsumersConsumerUsernameOrIdPluginsRoute,
    postConsumersConsumerUsernameOrIdPluginsRouteHandler,
  )
  .openapi(
    deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
    deleteConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  )
  .openapi(
    getConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
    getConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  )
  .openapi(
    patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
    patchConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  )
  .openapi(
    putConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
    putConsumersConsumerUsernameOrIdPluginsPluginIdRouteHandler,
  )
  .openapi(getKeySetsRoute, getKeySetsRouteHandler)
  .openapi(postKeySetsRoute, postKeySetsRouteHandler)
  .openapi(deleteKeySetsKeySetIdOrNameRoute, deleteKeySetsKeySetIdOrNameRouteHandler)
  .openapi(getKeySetsKeySetIdOrNameRoute, getKeySetsKeySetIdOrNameRouteHandler)
  .openapi(patchKeySetsKeySetIdOrNameRoute, patchKeySetsKeySetIdOrNameRouteHandler)
  .openapi(putKeySetsKeySetIdOrNameRoute, putKeySetsKeySetIdOrNameRouteHandler)
  .openapi(getKeysRoute, getKeysRouteHandler)
  .openapi(postKeysRoute, postKeysRouteHandler)
  .openapi(deleteKeysKeyIdOrNameRoute, deleteKeysKeyIdOrNameRouteHandler)
  .openapi(getKeysKeyIdOrNameRoute, getKeysKeyIdOrNameRouteHandler)
  .openapi(patchKeysKeyIdOrNameRoute, patchKeysKeyIdOrNameRouteHandler)
  .openapi(putKeysKeyIdOrNameRoute, putKeysKeyIdOrNameRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(postPluginsRoute, postPluginsRouteHandler)
  .openapi(deletePluginsPluginIdRoute, deletePluginsPluginIdRouteHandler)
  .openapi(getPluginsPluginIdRoute, getPluginsPluginIdRouteHandler)
  .openapi(patchPluginsPluginIdRoute, patchPluginsPluginIdRouteHandler)
  .openapi(putPluginsPluginIdRoute, putPluginsPluginIdRouteHandler)
  .openapi(getRoutesRoute, getRoutesRouteHandler)
  .openapi(postRoutesRoute, postRoutesRouteHandler)
  .openapi(deleteRoutesRouteIdOrNameRoute, deleteRoutesRouteIdOrNameRouteHandler)
  .openapi(getRoutesRouteIdOrNameRoute, getRoutesRouteIdOrNameRouteHandler)
  .openapi(patchRoutesRouteIdOrNameRoute, patchRoutesRouteIdOrNameRouteHandler)
  .openapi(putRoutesRouteIdOrNameRoute, putRoutesRouteIdOrNameRouteHandler)
  .openapi(getRoutesRouteIdOrNamePluginsRoute, getRoutesRouteIdOrNamePluginsRouteHandler)
  .openapi(postRoutesRouteIdOrNamePluginsRoute, postRoutesRouteIdOrNamePluginsRouteHandler)
  .openapi(
    deleteRoutesRouteIdOrNamePluginsPluginIdRoute,
    deleteRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(
    getRoutesRouteIdOrNamePluginsPluginIdRoute,
    getRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(
    patchRoutesRouteIdOrNamePluginsPluginIdRoute,
    patchRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(
    putRoutesRouteIdOrNamePluginsPluginIdRoute,
    putRoutesRouteIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(getServicesRoute, getServicesRouteHandler)
  .openapi(postServicesRoute, postServicesRouteHandler)
  .openapi(deleteServicesServiceIdOrNameRoute, deleteServicesServiceIdOrNameRouteHandler)
  .openapi(getServicesServiceIdOrNameRoute, getServicesServiceIdOrNameRouteHandler)
  .openapi(patchServicesServiceIdOrNameRoute, patchServicesServiceIdOrNameRouteHandler)
  .openapi(putServicesServiceIdOrNameRoute, putServicesServiceIdOrNameRouteHandler)
  .openapi(getServicesServiceIdOrNamePluginsRoute, getServicesServiceIdOrNamePluginsRouteHandler)
  .openapi(postServicesServiceIdOrNamePluginsRoute, postServicesServiceIdOrNamePluginsRouteHandler)
  .openapi(
    deleteServicesServiceIdOrNamePluginsPluginIdRoute,
    deleteServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(
    getServicesServiceIdOrNamePluginsPluginIdRoute,
    getServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(
    patchServicesServiceIdOrNamePluginsPluginIdRoute,
    patchServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(
    putServicesServiceIdOrNamePluginsPluginIdRoute,
    putServicesServiceIdOrNamePluginsPluginIdRouteHandler,
  )
  .openapi(getServicesServiceIdOrNameRoutesRoute, getServicesServiceIdOrNameRoutesRouteHandler)
  .openapi(postServicesServiceIdOrNameRoutesRoute, postServicesServiceIdOrNameRoutesRouteHandler)
  .openapi(
    deleteServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
    deleteServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  )
  .openapi(
    getServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
    getServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  )
  .openapi(
    patchServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
    patchServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  )
  .openapi(
    putServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
    putServicesServiceIdOrNameRoutesRouteIdOrNameRouteHandler,
  )
  .openapi(getSnisRoute, getSnisRouteHandler)
  .openapi(postSnisRoute, postSnisRouteHandler)
  .openapi(deleteSnisSniNameOrIdRoute, deleteSnisSniNameOrIdRouteHandler)
  .openapi(getSnisSniNameOrIdRoute, getSnisSniNameOrIdRouteHandler)
  .openapi(patchSnisSniNameOrIdRoute, patchSnisSniNameOrIdRouteHandler)
  .openapi(putSnisSniNameOrIdRoute, putSnisSniNameOrIdRouteHandler)
  .openapi(getUpstreamsRoute, getUpstreamsRouteHandler)
  .openapi(postUpstreamsRoute, postUpstreamsRouteHandler)
  .openapi(deleteUpstreamsUpstreamIdOrNameRoute, deleteUpstreamsUpstreamIdOrNameRouteHandler)
  .openapi(getUpstreamsUpstreamIdOrNameRoute, getUpstreamsUpstreamIdOrNameRouteHandler)
  .openapi(patchUpstreamsUpstreamIdOrNameRoute, patchUpstreamsUpstreamIdOrNameRouteHandler)
  .openapi(putUpstreamsUpstreamIdOrNameRoute, putUpstreamsUpstreamIdOrNameRouteHandler)
  .openapi(
    getUpstreamsUpstreamIdOrNameTargetsRoute,
    getUpstreamsUpstreamIdOrNameTargetsRouteHandler,
  )
  .openapi(
    postUpstreamsUpstreamIdOrNameTargetsRoute,
    postUpstreamsUpstreamIdOrNameTargetsRouteHandler,
  )
  .openapi(
    deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
    deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  )
  .openapi(
    getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
    getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  )
  .openapi(
    patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
    patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  )
  .openapi(
    putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
    putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRouteHandler,
  )
  .openapi(getVaultsRoute, getVaultsRouteHandler)
  .openapi(postVaultsRoute, postVaultsRouteHandler)
  .openapi(deleteVaultsVaultIdOrPrefixRoute, deleteVaultsVaultIdOrPrefixRouteHandler)
  .openapi(getVaultsVaultIdOrPrefixRoute, getVaultsVaultIdOrPrefixRouteHandler)
  .openapi(patchVaultsVaultIdOrPrefixRoute, patchVaultsVaultIdOrPrefixRouteHandler)
  .openapi(putVaultsVaultIdOrPrefixRoute, putVaultsVaultIdOrPrefixRouteHandler)
  .openapi(getEndpointsRoute, getEndpointsRouteHandler)
  .openapi(headEndpointRoute, headEndpointRouteHandler)
  .openapi(optionsEndpointRoute, optionsEndpointRouteHandler)
  .openapi(getSchemasEntityRoute, getSchemasEntityRouteHandler)
  .openapi(postSchemasEntityValidateRoute, postSchemasEntityValidateRouteHandler)
  .openapi(getSchemasFiltersFilterNameRoute, getSchemasFiltersFilterNameRouteHandler)
  .openapi(getSchemasPluginsPluginNameRoute, getSchemasPluginsPluginNameRouteHandler)
  .openapi(postSchemasPluginsValidateRoute, postSchemasPluginsValidateRouteHandler)
  .openapi(getTimersRoute, getTimersRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getStatusDnsRoute, getStatusDnsRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(getTagsTagsRoute, getTagsTagsRouteHandler)
  .openapi(
    putDebugClusterControlPlanesNodesLogLevelLogLevelRoute,
    putDebugClusterControlPlanesNodesLogLevelLogLevelRouteHandler,
  )
  .openapi(putDebugClusterLogLevelLogLevelRoute, putDebugClusterLogLevelLogLevelRouteHandler)
  .openapi(getDebugNodeLogLevelRoute, getDebugNodeLogLevelRouteHandler)
  .openapi(putDebugNodeLogLevelLogLevelRoute, putDebugNodeLogLevelLogLevelRouteHandler)
  .openapi(getSchemasVaultsVaultNameRoute, getSchemasVaultsVaultNameRouteHandler)
  .openapi(postSchemasVaultsVaultNameRoute, postSchemasVaultsVaultNameRouteHandler)
  .openapi(postFilterChainsRoute, postFilterChainsRouteHandler)
  .openapi(getFilterChainsRoute, getFilterChainsRouteHandler)
  .openapi(
    postRoutesRouteIdOrNameFilterChainsRoute,
    postRoutesRouteIdOrNameFilterChainsRouteHandler,
  )
  .openapi(getRoutesRouteIdOrNameFilterChainsRoute, getRoutesRouteIdOrNameFilterChainsRouteHandler)
  .openapi(
    patchRoutesRouteIdOrNameFilterChainsRoute,
    patchRoutesRouteIdOrNameFilterChainsRouteHandler,
  )
  .openapi(
    postServicesServiceIdOrNameFilterChainsRoute,
    postServicesServiceIdOrNameFilterChainsRouteHandler,
  )
  .openapi(
    getServicesServiceIdOrNameFilterChainsRoute,
    getServicesServiceIdOrNameFilterChainsRouteHandler,
  )
  .openapi(getFilterChainsFilterChainIdRoute, getFilterChainsFilterChainIdRouteHandler)
  .openapi(patchFilterChainsFilterChainIdRoute, patchFilterChainsFilterChainIdRouteHandler)
  .openapi(putFilterChainsFilterChainIdRoute, putFilterChainsFilterChainIdRouteHandler)
  .openapi(deleteFilterChainsFilterChainIdRoute, deleteFilterChainsFilterChainIdRouteHandler)
  .openapi(
    getRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
    getRoutesRouteIdOrNameFilterChainsFilterChainIdRouteHandler,
  )
  .openapi(
    putRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
    putRoutesRouteIdOrNameFilterChainsFilterChainIdRouteHandler,
  )
  .openapi(
    deleteRoutesRouteIdOrNameFilterChainIdRoute,
    deleteRoutesRouteIdOrNameFilterChainIdRouteHandler,
  )
  .openapi(
    deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute,
    deleteServicesServiceIdOrNameFilterChainsFilterChainIdRouteHandler,
  )
  .openapi(getClusteringDataPlanesRoute, getClusteringDataPlanesRouteHandler)
  .openapi(getClusteringStatusRoute, getClusteringStatusRouteHandler)
  .openapi(getCacheKeyRoute, getCacheKeyRouteHandler)
  .openapi(deleteCacheKeyRoute, deleteCacheKeyRouteHandler)
  .openapi(deleteCacheRoute, deleteCacheRouteHandler)
  .openapi(postConfigRoute, postConfigRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)

export default app
