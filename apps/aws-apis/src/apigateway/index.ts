import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApikeysApiKeyRoute,
  deleteClientcertificatesClientcertificateIdRoute,
  deleteDomainnamesDomainNameBasepathmappingsBasePathRoute,
  deleteDomainnamesDomainNameRoute,
  deleteRestapisRestapiIdAuthorizersAuthorizerIdRoute,
  deleteRestapisRestapiIdDeploymentsDeploymentIdRoute,
  deleteRestapisRestapiIdDocumentationPartsPartIdRoute,
  deleteRestapisRestapiIdDocumentationVersionsDocVersionRoute,
  deleteRestapisRestapiIdGatewayresponsesResponseTypeRoute,
  deleteRestapisRestapiIdModelsModelNameRoute,
  deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
  deleteRestapisRestapiIdResourcesResourceIdRoute,
  deleteRestapisRestapiIdRoute,
  deleteRestapisRestapiIdStagesStageNameCacheAuthorizersRoute,
  deleteRestapisRestapiIdStagesStageNameCacheDataRoute,
  deleteRestapisRestapiIdStagesStageNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  deleteUsageplansUsageplanIdKeysKeyIdRoute,
  deleteUsageplansUsageplanIdRoute,
  deleteVpclinksVpclinkIdRoute,
  getAccountRoute,
  getApikeysApiKeyRoute,
  getApikeysRoute,
  getClientcertificatesClientcertificateIdRoute,
  getClientcertificatesRoute,
  getDomainnamesDomainNameBasepathmappingsBasePathRoute,
  getDomainnamesDomainNameBasepathmappingsRoute,
  getDomainnamesDomainNameRoute,
  getDomainnamesRoute,
  getRestapisRestapiIdAuthorizersAuthorizerIdRoute,
  getRestapisRestapiIdAuthorizersRoute,
  getRestapisRestapiIdDeploymentsDeploymentIdRoute,
  getRestapisRestapiIdDeploymentsRoute,
  getRestapisRestapiIdDocumentationPartsPartIdRoute,
  getRestapisRestapiIdDocumentationPartsRoute,
  getRestapisRestapiIdDocumentationVersionsDocVersionRoute,
  getRestapisRestapiIdDocumentationVersionsRoute,
  getRestapisRestapiIdGatewayresponsesResponseTypeRoute,
  getRestapisRestapiIdGatewayresponsesRoute,
  getRestapisRestapiIdModelsModelNameDefaultTemplateRoute,
  getRestapisRestapiIdModelsModelNameRoute,
  getRestapisRestapiIdModelsRoute,
  getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute,
  getRestapisRestapiIdRequestvalidatorsRoute,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
  getRestapisRestapiIdResourcesResourceIdRoute,
  getRestapisRestapiIdResourcesRoute,
  getRestapisRestapiIdRoute,
  getRestapisRestapiIdStagesRoute,
  getRestapisRestapiIdStagesStageNameExportsExportTypeRoute,
  getRestapisRestapiIdStagesStageNameRoute,
  getRestapisRestapiIdStagesStageNameSdksSdkTypeRoute,
  getRestapisRoute,
  getSdktypesRoute,
  getSdktypesSdktypeIdRoute,
  getTagsResourceArnRoute,
  getUsageplansRoute,
  getUsageplansUsageplanIdKeysKeyIdRoute,
  getUsageplansUsageplanIdKeysRoute,
  getUsageplansUsageplanIdRoute,
  getUsageplansUsageplanIdUsageStartDateEndDateRoute,
  getVpclinksRoute,
  getVpclinksVpclinkIdRoute,
  patchAccountRoute,
  patchApikeysApiKeyRoute,
  patchClientcertificatesClientcertificateIdRoute,
  patchDomainnamesDomainNameBasepathmappingsBasePathRoute,
  patchDomainnamesDomainNameRoute,
  patchRestapisRestapiIdAuthorizersAuthorizerIdRoute,
  patchRestapisRestapiIdDeploymentsDeploymentIdRoute,
  patchRestapisRestapiIdDocumentationPartsPartIdRoute,
  patchRestapisRestapiIdDocumentationVersionsDocVersionRoute,
  patchRestapisRestapiIdGatewayresponsesResponseTypeRoute,
  patchRestapisRestapiIdModelsModelNameRoute,
  patchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
  patchRestapisRestapiIdResourcesResourceIdRoute,
  patchRestapisRestapiIdRoute,
  patchRestapisRestapiIdStagesStageNameRoute,
  patchUsageplansUsageplanIdKeysKeyIdUsageRoute,
  patchUsageplansUsageplanIdRoute,
  patchVpclinksVpclinkIdRoute,
  postApikeysModeImportFormatRoute,
  postApikeysRoute,
  postClientcertificatesRoute,
  postDomainnamesDomainNameBasepathmappingsRoute,
  postDomainnamesRoute,
  postRestapisModeImportRoute,
  postRestapisRestapiIdAuthorizersAuthorizerIdRoute,
  postRestapisRestapiIdAuthorizersRoute,
  postRestapisRestapiIdDeploymentsRoute,
  postRestapisRestapiIdDocumentationPartsRoute,
  postRestapisRestapiIdDocumentationVersionsRoute,
  postRestapisRestapiIdModelsRoute,
  postRestapisRestapiIdRequestvalidatorsRoute,
  postRestapisRestapiIdResourcesParentIdRoute,
  postRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
  postRestapisRestapiIdStagesRoute,
  postRestapisRoute,
  postUsageplansRoute,
  postUsageplansUsageplanIdKeysRoute,
  postVpclinksRoute,
  putRestapisRestapiIdDocumentationPartsRoute,
  putRestapisRestapiIdGatewayresponsesResponseTypeRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
  putRestapisRestapiIdRoute,
  putTagsResourceArnRoute,
} from './routes'
import {
  deleteApikeysApiKeyRouteHandler,
  deleteClientcertificatesClientcertificateIdRouteHandler,
  deleteDomainnamesDomainNameBasepathmappingsBasePathRouteHandler,
  deleteDomainnamesDomainNameRouteHandler,
  deleteRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  deleteRestapisRestapiIdDeploymentsDeploymentIdRouteHandler,
  deleteRestapisRestapiIdDocumentationPartsPartIdRouteHandler,
  deleteRestapisRestapiIdDocumentationVersionsDocVersionRouteHandler,
  deleteRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  deleteRestapisRestapiIdModelsModelNameRouteHandler,
  deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRouteHandler,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  deleteRestapisRestapiIdResourcesResourceIdRouteHandler,
  deleteRestapisRestapiIdRouteHandler,
  deleteRestapisRestapiIdStagesStageNameCacheAuthorizersRouteHandler,
  deleteRestapisRestapiIdStagesStageNameCacheDataRouteHandler,
  deleteRestapisRestapiIdStagesStageNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteUsageplansUsageplanIdKeysKeyIdRouteHandler,
  deleteUsageplansUsageplanIdRouteHandler,
  deleteVpclinksVpclinkIdRouteHandler,
  getAccountRouteHandler,
  getApikeysApiKeyRouteHandler,
  getApikeysRouteHandler,
  getClientcertificatesClientcertificateIdRouteHandler,
  getClientcertificatesRouteHandler,
  getDomainnamesDomainNameBasepathmappingsBasePathRouteHandler,
  getDomainnamesDomainNameBasepathmappingsRouteHandler,
  getDomainnamesDomainNameRouteHandler,
  getDomainnamesRouteHandler,
  getRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  getRestapisRestapiIdAuthorizersRouteHandler,
  getRestapisRestapiIdDeploymentsDeploymentIdRouteHandler,
  getRestapisRestapiIdDeploymentsRouteHandler,
  getRestapisRestapiIdDocumentationPartsPartIdRouteHandler,
  getRestapisRestapiIdDocumentationPartsRouteHandler,
  getRestapisRestapiIdDocumentationVersionsDocVersionRouteHandler,
  getRestapisRestapiIdDocumentationVersionsRouteHandler,
  getRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  getRestapisRestapiIdGatewayresponsesRouteHandler,
  getRestapisRestapiIdModelsModelNameDefaultTemplateRouteHandler,
  getRestapisRestapiIdModelsModelNameRouteHandler,
  getRestapisRestapiIdModelsRouteHandler,
  getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRouteHandler,
  getRestapisRestapiIdRequestvalidatorsRouteHandler,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  getRestapisRestapiIdResourcesResourceIdRouteHandler,
  getRestapisRestapiIdResourcesRouteHandler,
  getRestapisRestapiIdRouteHandler,
  getRestapisRestapiIdStagesRouteHandler,
  getRestapisRestapiIdStagesStageNameExportsExportTypeRouteHandler,
  getRestapisRestapiIdStagesStageNameRouteHandler,
  getRestapisRestapiIdStagesStageNameSdksSdkTypeRouteHandler,
  getRestapisRouteHandler,
  getSdktypesRouteHandler,
  getSdktypesSdktypeIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getUsageplansRouteHandler,
  getUsageplansUsageplanIdKeysKeyIdRouteHandler,
  getUsageplansUsageplanIdKeysRouteHandler,
  getUsageplansUsageplanIdRouteHandler,
  getUsageplansUsageplanIdUsageStartDateEndDateRouteHandler,
  getVpclinksRouteHandler,
  getVpclinksVpclinkIdRouteHandler,
  patchAccountRouteHandler,
  patchApikeysApiKeyRouteHandler,
  patchClientcertificatesClientcertificateIdRouteHandler,
  patchDomainnamesDomainNameBasepathmappingsBasePathRouteHandler,
  patchDomainnamesDomainNameRouteHandler,
  patchRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  patchRestapisRestapiIdDeploymentsDeploymentIdRouteHandler,
  patchRestapisRestapiIdDocumentationPartsPartIdRouteHandler,
  patchRestapisRestapiIdDocumentationVersionsDocVersionRouteHandler,
  patchRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  patchRestapisRestapiIdModelsModelNameRouteHandler,
  patchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRouteHandler,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  patchRestapisRestapiIdResourcesResourceIdRouteHandler,
  patchRestapisRestapiIdRouteHandler,
  patchRestapisRestapiIdStagesStageNameRouteHandler,
  patchUsageplansUsageplanIdKeysKeyIdUsageRouteHandler,
  patchUsageplansUsageplanIdRouteHandler,
  patchVpclinksVpclinkIdRouteHandler,
  postApikeysModeImportFormatRouteHandler,
  postApikeysRouteHandler,
  postClientcertificatesRouteHandler,
  postDomainnamesDomainNameBasepathmappingsRouteHandler,
  postDomainnamesRouteHandler,
  postRestapisModeImportRouteHandler,
  postRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  postRestapisRestapiIdAuthorizersRouteHandler,
  postRestapisRestapiIdDeploymentsRouteHandler,
  postRestapisRestapiIdDocumentationPartsRouteHandler,
  postRestapisRestapiIdDocumentationVersionsRouteHandler,
  postRestapisRestapiIdModelsRouteHandler,
  postRestapisRestapiIdRequestvalidatorsRouteHandler,
  postRestapisRestapiIdResourcesParentIdRouteHandler,
  postRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  postRestapisRestapiIdStagesRouteHandler,
  postRestapisRouteHandler,
  postUsageplansRouteHandler,
  postUsageplansUsageplanIdKeysRouteHandler,
  postVpclinksRouteHandler,
  putRestapisRestapiIdDocumentationPartsRouteHandler,
  putRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  putRestapisRestapiIdRouteHandler,
  putTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApikeysRoute, postApikeysRouteHandler)
  .openapi(getApikeysRoute, getApikeysRouteHandler)
  .openapi(postRestapisRestapiIdAuthorizersRoute, postRestapisRestapiIdAuthorizersRouteHandler)
  .openapi(getRestapisRestapiIdAuthorizersRoute, getRestapisRestapiIdAuthorizersRouteHandler)
  .openapi(
    postDomainnamesDomainNameBasepathmappingsRoute,
    postDomainnamesDomainNameBasepathmappingsRouteHandler,
  )
  .openapi(
    getDomainnamesDomainNameBasepathmappingsRoute,
    getDomainnamesDomainNameBasepathmappingsRouteHandler,
  )
  .openapi(postRestapisRestapiIdDeploymentsRoute, postRestapisRestapiIdDeploymentsRouteHandler)
  .openapi(getRestapisRestapiIdDeploymentsRoute, getRestapisRestapiIdDeploymentsRouteHandler)
  .openapi(
    postRestapisRestapiIdDocumentationPartsRoute,
    postRestapisRestapiIdDocumentationPartsRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdDocumentationPartsRoute,
    getRestapisRestapiIdDocumentationPartsRouteHandler,
  )
  .openapi(
    putRestapisRestapiIdDocumentationPartsRoute,
    putRestapisRestapiIdDocumentationPartsRouteHandler,
  )
  .openapi(
    postRestapisRestapiIdDocumentationVersionsRoute,
    postRestapisRestapiIdDocumentationVersionsRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdDocumentationVersionsRoute,
    getRestapisRestapiIdDocumentationVersionsRouteHandler,
  )
  .openapi(postDomainnamesRoute, postDomainnamesRouteHandler)
  .openapi(getDomainnamesRoute, getDomainnamesRouteHandler)
  .openapi(postRestapisRestapiIdModelsRoute, postRestapisRestapiIdModelsRouteHandler)
  .openapi(getRestapisRestapiIdModelsRoute, getRestapisRestapiIdModelsRouteHandler)
  .openapi(
    postRestapisRestapiIdRequestvalidatorsRoute,
    postRestapisRestapiIdRequestvalidatorsRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdRequestvalidatorsRoute,
    getRestapisRestapiIdRequestvalidatorsRouteHandler,
  )
  .openapi(
    postRestapisRestapiIdResourcesParentIdRoute,
    postRestapisRestapiIdResourcesParentIdRouteHandler,
  )
  .openapi(postRestapisRoute, postRestapisRouteHandler)
  .openapi(getRestapisRoute, getRestapisRouteHandler)
  .openapi(postRestapisRestapiIdStagesRoute, postRestapisRestapiIdStagesRouteHandler)
  .openapi(getRestapisRestapiIdStagesRoute, getRestapisRestapiIdStagesRouteHandler)
  .openapi(postUsageplansRoute, postUsageplansRouteHandler)
  .openapi(getUsageplansRoute, getUsageplansRouteHandler)
  .openapi(postUsageplansUsageplanIdKeysRoute, postUsageplansUsageplanIdKeysRouteHandler)
  .openapi(getUsageplansUsageplanIdKeysRoute, getUsageplansUsageplanIdKeysRouteHandler)
  .openapi(postVpclinksRoute, postVpclinksRouteHandler)
  .openapi(getVpclinksRoute, getVpclinksRouteHandler)
  .openapi(deleteApikeysApiKeyRoute, deleteApikeysApiKeyRouteHandler)
  .openapi(getApikeysApiKeyRoute, getApikeysApiKeyRouteHandler)
  .openapi(patchApikeysApiKeyRoute, patchApikeysApiKeyRouteHandler)
  .openapi(
    deleteRestapisRestapiIdAuthorizersAuthorizerIdRoute,
    deleteRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdAuthorizersAuthorizerIdRoute,
    getRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(
    postRestapisRestapiIdAuthorizersAuthorizerIdRoute,
    postRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdAuthorizersAuthorizerIdRoute,
    patchRestapisRestapiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(
    deleteDomainnamesDomainNameBasepathmappingsBasePathRoute,
    deleteDomainnamesDomainNameBasepathmappingsBasePathRouteHandler,
  )
  .openapi(
    getDomainnamesDomainNameBasepathmappingsBasePathRoute,
    getDomainnamesDomainNameBasepathmappingsBasePathRouteHandler,
  )
  .openapi(
    patchDomainnamesDomainNameBasepathmappingsBasePathRoute,
    patchDomainnamesDomainNameBasepathmappingsBasePathRouteHandler,
  )
  .openapi(
    deleteClientcertificatesClientcertificateIdRoute,
    deleteClientcertificatesClientcertificateIdRouteHandler,
  )
  .openapi(
    getClientcertificatesClientcertificateIdRoute,
    getClientcertificatesClientcertificateIdRouteHandler,
  )
  .openapi(
    patchClientcertificatesClientcertificateIdRoute,
    patchClientcertificatesClientcertificateIdRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdDeploymentsDeploymentIdRoute,
    deleteRestapisRestapiIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdDeploymentsDeploymentIdRoute,
    getRestapisRestapiIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdDeploymentsDeploymentIdRoute,
    patchRestapisRestapiIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdDocumentationPartsPartIdRoute,
    deleteRestapisRestapiIdDocumentationPartsPartIdRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdDocumentationPartsPartIdRoute,
    getRestapisRestapiIdDocumentationPartsPartIdRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdDocumentationPartsPartIdRoute,
    patchRestapisRestapiIdDocumentationPartsPartIdRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdDocumentationVersionsDocVersionRoute,
    deleteRestapisRestapiIdDocumentationVersionsDocVersionRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdDocumentationVersionsDocVersionRoute,
    getRestapisRestapiIdDocumentationVersionsDocVersionRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdDocumentationVersionsDocVersionRoute,
    patchRestapisRestapiIdDocumentationVersionsDocVersionRouteHandler,
  )
  .openapi(deleteDomainnamesDomainNameRoute, deleteDomainnamesDomainNameRouteHandler)
  .openapi(getDomainnamesDomainNameRoute, getDomainnamesDomainNameRouteHandler)
  .openapi(patchDomainnamesDomainNameRoute, patchDomainnamesDomainNameRouteHandler)
  .openapi(
    deleteRestapisRestapiIdGatewayresponsesResponseTypeRoute,
    deleteRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdGatewayresponsesResponseTypeRoute,
    getRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  )
  .openapi(
    putRestapisRestapiIdGatewayresponsesResponseTypeRoute,
    putRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdGatewayresponsesResponseTypeRoute,
    patchRestapisRestapiIdGatewayresponsesResponseTypeRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  )
  .openapi(
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  )
  .openapi(
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  )
  .openapi(
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  )
  .openapi(
    postRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
    postRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  )
  .openapi(
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdModelsModelNameRoute,
    deleteRestapisRestapiIdModelsModelNameRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdModelsModelNameRoute,
    getRestapisRestapiIdModelsModelNameRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdModelsModelNameRoute,
    patchRestapisRestapiIdModelsModelNameRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute,
    deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute,
    getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute,
    patchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdRoute,
    deleteRestapisRestapiIdResourcesResourceIdRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdRoute,
    getRestapisRestapiIdResourcesResourceIdRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdRoute,
    patchRestapisRestapiIdResourcesResourceIdRouteHandler,
  )
  .openapi(deleteRestapisRestapiIdRoute, deleteRestapisRestapiIdRouteHandler)
  .openapi(getRestapisRestapiIdRoute, getRestapisRestapiIdRouteHandler)
  .openapi(putRestapisRestapiIdRoute, putRestapisRestapiIdRouteHandler)
  .openapi(patchRestapisRestapiIdRoute, patchRestapisRestapiIdRouteHandler)
  .openapi(
    deleteRestapisRestapiIdStagesStageNameRoute,
    deleteRestapisRestapiIdStagesStageNameRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdStagesStageNameRoute,
    getRestapisRestapiIdStagesStageNameRouteHandler,
  )
  .openapi(
    patchRestapisRestapiIdStagesStageNameRoute,
    patchRestapisRestapiIdStagesStageNameRouteHandler,
  )
  .openapi(deleteUsageplansUsageplanIdRoute, deleteUsageplansUsageplanIdRouteHandler)
  .openapi(getUsageplansUsageplanIdRoute, getUsageplansUsageplanIdRouteHandler)
  .openapi(patchUsageplansUsageplanIdRoute, patchUsageplansUsageplanIdRouteHandler)
  .openapi(
    deleteUsageplansUsageplanIdKeysKeyIdRoute,
    deleteUsageplansUsageplanIdKeysKeyIdRouteHandler,
  )
  .openapi(getUsageplansUsageplanIdKeysKeyIdRoute, getUsageplansUsageplanIdKeysKeyIdRouteHandler)
  .openapi(deleteVpclinksVpclinkIdRoute, deleteVpclinksVpclinkIdRouteHandler)
  .openapi(getVpclinksVpclinkIdRoute, getVpclinksVpclinkIdRouteHandler)
  .openapi(patchVpclinksVpclinkIdRoute, patchVpclinksVpclinkIdRouteHandler)
  .openapi(
    deleteRestapisRestapiIdStagesStageNameCacheAuthorizersRoute,
    deleteRestapisRestapiIdStagesStageNameCacheAuthorizersRouteHandler,
  )
  .openapi(
    deleteRestapisRestapiIdStagesStageNameCacheDataRoute,
    deleteRestapisRestapiIdStagesStageNameCacheDataRouteHandler,
  )
  .openapi(postClientcertificatesRoute, postClientcertificatesRouteHandler)
  .openapi(getClientcertificatesRoute, getClientcertificatesRouteHandler)
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(patchAccountRoute, patchAccountRouteHandler)
  .openapi(
    getRestapisRestapiIdStagesStageNameExportsExportTypeRoute,
    getRestapisRestapiIdStagesStageNameExportsExportTypeRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdGatewayresponsesRoute,
    getRestapisRestapiIdGatewayresponsesRouteHandler,
  )
  .openapi(
    getRestapisRestapiIdModelsModelNameDefaultTemplateRoute,
    getRestapisRestapiIdModelsModelNameDefaultTemplateRouteHandler,
  )
  .openapi(getRestapisRestapiIdResourcesRoute, getRestapisRestapiIdResourcesRouteHandler)
  .openapi(
    getRestapisRestapiIdStagesStageNameSdksSdkTypeRoute,
    getRestapisRestapiIdStagesStageNameSdksSdkTypeRouteHandler,
  )
  .openapi(getSdktypesSdktypeIdRoute, getSdktypesSdktypeIdRouteHandler)
  .openapi(getSdktypesRoute, getSdktypesRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(putTagsResourceArnRoute, putTagsResourceArnRouteHandler)
  .openapi(
    getUsageplansUsageplanIdUsageStartDateEndDateRoute,
    getUsageplansUsageplanIdUsageStartDateEndDateRouteHandler,
  )
  .openapi(postApikeysModeImportFormatRoute, postApikeysModeImportFormatRouteHandler)
  .openapi(postRestapisModeImportRoute, postRestapisModeImportRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(
    patchUsageplansUsageplanIdKeysKeyIdUsageRoute,
    patchUsageplansUsageplanIdKeysKeyIdUsageRouteHandler,
  )

export default app
