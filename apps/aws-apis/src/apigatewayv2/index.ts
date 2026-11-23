import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ApisApiIdAuthorizersAuthorizerIdRoute,
  deleteV2ApisApiIdCorsRoute,
  deleteV2ApisApiIdDeploymentsDeploymentIdRoute,
  deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
  deleteV2ApisApiIdIntegrationsIntegrationIdRoute,
  deleteV2ApisApiIdModelsModelIdRoute,
  deleteV2ApisApiIdRoute,
  deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyRoute,
  deleteV2ApisApiIdRoutesRouteIdRoute,
  deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute,
  deleteV2ApisApiIdStagesStageNameAccesslogsettingsRoute,
  deleteV2ApisApiIdStagesStageNameCacheAuthorizersRoute,
  deleteV2ApisApiIdStagesStageNameRoute,
  deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyRoute,
  deleteV2DomainnamesDomainNameApimappingsApiMappingIdRoute,
  deleteV2DomainnamesDomainNameRoute,
  deleteV2TagsResourceArnTagKeysRoute,
  deleteV2VpclinksVpcLinkIdRoute,
  getV2ApisApiIdAuthorizersAuthorizerIdRoute,
  getV2ApisApiIdAuthorizersRoute,
  getV2ApisApiIdDeploymentsDeploymentIdRoute,
  getV2ApisApiIdDeploymentsRoute,
  getV2ApisApiIdExportsSpecificationOutputTypeRoute,
  getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
  getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute,
  getV2ApisApiIdIntegrationsIntegrationIdRoute,
  getV2ApisApiIdIntegrationsRoute,
  getV2ApisApiIdModelsModelIdRoute,
  getV2ApisApiIdModelsModelIdTemplateRoute,
  getV2ApisApiIdModelsRoute,
  getV2ApisApiIdRoute,
  getV2ApisApiIdRoutesRoute,
  getV2ApisApiIdRoutesRouteIdRoute,
  getV2ApisApiIdRoutesRouteIdRouteresponsesRoute,
  getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute,
  getV2ApisApiIdStagesRoute,
  getV2ApisApiIdStagesStageNameRoute,
  getV2ApisRoute,
  getV2DomainnamesDomainNameApimappingsApiMappingIdRoute,
  getV2DomainnamesDomainNameApimappingsRoute,
  getV2DomainnamesDomainNameRoute,
  getV2DomainnamesRoute,
  getV2TagsResourceArnRoute,
  getV2VpclinksRoute,
  getV2VpclinksVpcLinkIdRoute,
  patchV2ApisApiIdAuthorizersAuthorizerIdRoute,
  patchV2ApisApiIdDeploymentsDeploymentIdRoute,
  patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
  patchV2ApisApiIdIntegrationsIntegrationIdRoute,
  patchV2ApisApiIdModelsModelIdRoute,
  patchV2ApisApiIdRoute,
  patchV2ApisApiIdRoutesRouteIdRoute,
  patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute,
  patchV2ApisApiIdStagesStageNameRoute,
  patchV2DomainnamesDomainNameApimappingsApiMappingIdRoute,
  patchV2DomainnamesDomainNameRoute,
  patchV2VpclinksVpcLinkIdRoute,
  postV2ApisApiIdAuthorizersRoute,
  postV2ApisApiIdDeploymentsRoute,
  postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute,
  postV2ApisApiIdIntegrationsRoute,
  postV2ApisApiIdModelsRoute,
  postV2ApisApiIdRoutesRoute,
  postV2ApisApiIdRoutesRouteIdRouteresponsesRoute,
  postV2ApisApiIdStagesRoute,
  postV2ApisRoute,
  postV2DomainnamesDomainNameApimappingsRoute,
  postV2DomainnamesRoute,
  postV2TagsResourceArnRoute,
  postV2VpclinksRoute,
  putV2ApisApiIdRoute,
  putV2ApisRoute,
} from './routes'
import {
  deleteV2ApisApiIdAuthorizersAuthorizerIdRouteHandler,
  deleteV2ApisApiIdCorsRouteHandler,
  deleteV2ApisApiIdDeploymentsDeploymentIdRouteHandler,
  deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRouteHandler,
  deleteV2ApisApiIdIntegrationsIntegrationIdRouteHandler,
  deleteV2ApisApiIdModelsModelIdRouteHandler,
  deleteV2ApisApiIdRouteHandler,
  deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyRouteHandler,
  deleteV2ApisApiIdRoutesRouteIdRouteHandler,
  deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRouteHandler,
  deleteV2ApisApiIdStagesStageNameAccesslogsettingsRouteHandler,
  deleteV2ApisApiIdStagesStageNameCacheAuthorizersRouteHandler,
  deleteV2ApisApiIdStagesStageNameRouteHandler,
  deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyRouteHandler,
  deleteV2DomainnamesDomainNameApimappingsApiMappingIdRouteHandler,
  deleteV2DomainnamesDomainNameRouteHandler,
  deleteV2TagsResourceArnTagKeysRouteHandler,
  deleteV2VpclinksVpcLinkIdRouteHandler,
  getV2ApisApiIdAuthorizersAuthorizerIdRouteHandler,
  getV2ApisApiIdAuthorizersRouteHandler,
  getV2ApisApiIdDeploymentsDeploymentIdRouteHandler,
  getV2ApisApiIdDeploymentsRouteHandler,
  getV2ApisApiIdExportsSpecificationOutputTypeRouteHandler,
  getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRouteHandler,
  getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRouteHandler,
  getV2ApisApiIdIntegrationsIntegrationIdRouteHandler,
  getV2ApisApiIdIntegrationsRouteHandler,
  getV2ApisApiIdModelsModelIdRouteHandler,
  getV2ApisApiIdModelsModelIdTemplateRouteHandler,
  getV2ApisApiIdModelsRouteHandler,
  getV2ApisApiIdRouteHandler,
  getV2ApisApiIdRoutesRouteHandler,
  getV2ApisApiIdRoutesRouteIdRouteHandler,
  getV2ApisApiIdRoutesRouteIdRouteresponsesRouteHandler,
  getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRouteHandler,
  getV2ApisApiIdStagesRouteHandler,
  getV2ApisApiIdStagesStageNameRouteHandler,
  getV2ApisRouteHandler,
  getV2DomainnamesDomainNameApimappingsApiMappingIdRouteHandler,
  getV2DomainnamesDomainNameApimappingsRouteHandler,
  getV2DomainnamesDomainNameRouteHandler,
  getV2DomainnamesRouteHandler,
  getV2TagsResourceArnRouteHandler,
  getV2VpclinksRouteHandler,
  getV2VpclinksVpcLinkIdRouteHandler,
  patchV2ApisApiIdAuthorizersAuthorizerIdRouteHandler,
  patchV2ApisApiIdDeploymentsDeploymentIdRouteHandler,
  patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRouteHandler,
  patchV2ApisApiIdIntegrationsIntegrationIdRouteHandler,
  patchV2ApisApiIdModelsModelIdRouteHandler,
  patchV2ApisApiIdRouteHandler,
  patchV2ApisApiIdRoutesRouteIdRouteHandler,
  patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRouteHandler,
  patchV2ApisApiIdStagesStageNameRouteHandler,
  patchV2DomainnamesDomainNameApimappingsApiMappingIdRouteHandler,
  patchV2DomainnamesDomainNameRouteHandler,
  patchV2VpclinksVpcLinkIdRouteHandler,
  postV2ApisApiIdAuthorizersRouteHandler,
  postV2ApisApiIdDeploymentsRouteHandler,
  postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRouteHandler,
  postV2ApisApiIdIntegrationsRouteHandler,
  postV2ApisApiIdModelsRouteHandler,
  postV2ApisApiIdRoutesRouteHandler,
  postV2ApisApiIdRoutesRouteIdRouteresponsesRouteHandler,
  postV2ApisApiIdStagesRouteHandler,
  postV2ApisRouteHandler,
  postV2DomainnamesDomainNameApimappingsRouteHandler,
  postV2DomainnamesRouteHandler,
  postV2TagsResourceArnRouteHandler,
  postV2VpclinksRouteHandler,
  putV2ApisApiIdRouteHandler,
  putV2ApisRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2ApisRoute, postV2ApisRouteHandler)
  .openapi(getV2ApisRoute, getV2ApisRouteHandler)
  .openapi(putV2ApisRoute, putV2ApisRouteHandler)
  .openapi(
    postV2DomainnamesDomainNameApimappingsRoute,
    postV2DomainnamesDomainNameApimappingsRouteHandler,
  )
  .openapi(
    getV2DomainnamesDomainNameApimappingsRoute,
    getV2DomainnamesDomainNameApimappingsRouteHandler,
  )
  .openapi(postV2ApisApiIdAuthorizersRoute, postV2ApisApiIdAuthorizersRouteHandler)
  .openapi(getV2ApisApiIdAuthorizersRoute, getV2ApisApiIdAuthorizersRouteHandler)
  .openapi(postV2ApisApiIdDeploymentsRoute, postV2ApisApiIdDeploymentsRouteHandler)
  .openapi(getV2ApisApiIdDeploymentsRoute, getV2ApisApiIdDeploymentsRouteHandler)
  .openapi(postV2DomainnamesRoute, postV2DomainnamesRouteHandler)
  .openapi(getV2DomainnamesRoute, getV2DomainnamesRouteHandler)
  .openapi(postV2ApisApiIdIntegrationsRoute, postV2ApisApiIdIntegrationsRouteHandler)
  .openapi(getV2ApisApiIdIntegrationsRoute, getV2ApisApiIdIntegrationsRouteHandler)
  .openapi(
    postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute,
    postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRouteHandler,
  )
  .openapi(
    getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute,
    getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRouteHandler,
  )
  .openapi(postV2ApisApiIdModelsRoute, postV2ApisApiIdModelsRouteHandler)
  .openapi(getV2ApisApiIdModelsRoute, getV2ApisApiIdModelsRouteHandler)
  .openapi(postV2ApisApiIdRoutesRoute, postV2ApisApiIdRoutesRouteHandler)
  .openapi(getV2ApisApiIdRoutesRoute, getV2ApisApiIdRoutesRouteHandler)
  .openapi(
    postV2ApisApiIdRoutesRouteIdRouteresponsesRoute,
    postV2ApisApiIdRoutesRouteIdRouteresponsesRouteHandler,
  )
  .openapi(
    getV2ApisApiIdRoutesRouteIdRouteresponsesRoute,
    getV2ApisApiIdRoutesRouteIdRouteresponsesRouteHandler,
  )
  .openapi(postV2ApisApiIdStagesRoute, postV2ApisApiIdStagesRouteHandler)
  .openapi(getV2ApisApiIdStagesRoute, getV2ApisApiIdStagesRouteHandler)
  .openapi(postV2VpclinksRoute, postV2VpclinksRouteHandler)
  .openapi(getV2VpclinksRoute, getV2VpclinksRouteHandler)
  .openapi(
    deleteV2ApisApiIdStagesStageNameAccesslogsettingsRoute,
    deleteV2ApisApiIdStagesStageNameAccesslogsettingsRouteHandler,
  )
  .openapi(deleteV2ApisApiIdRoute, deleteV2ApisApiIdRouteHandler)
  .openapi(getV2ApisApiIdRoute, getV2ApisApiIdRouteHandler)
  .openapi(putV2ApisApiIdRoute, putV2ApisApiIdRouteHandler)
  .openapi(patchV2ApisApiIdRoute, patchV2ApisApiIdRouteHandler)
  .openapi(
    deleteV2DomainnamesDomainNameApimappingsApiMappingIdRoute,
    deleteV2DomainnamesDomainNameApimappingsApiMappingIdRouteHandler,
  )
  .openapi(
    getV2DomainnamesDomainNameApimappingsApiMappingIdRoute,
    getV2DomainnamesDomainNameApimappingsApiMappingIdRouteHandler,
  )
  .openapi(
    patchV2DomainnamesDomainNameApimappingsApiMappingIdRoute,
    patchV2DomainnamesDomainNameApimappingsApiMappingIdRouteHandler,
  )
  .openapi(
    deleteV2ApisApiIdAuthorizersAuthorizerIdRoute,
    deleteV2ApisApiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(
    getV2ApisApiIdAuthorizersAuthorizerIdRoute,
    getV2ApisApiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(
    patchV2ApisApiIdAuthorizersAuthorizerIdRoute,
    patchV2ApisApiIdAuthorizersAuthorizerIdRouteHandler,
  )
  .openapi(deleteV2ApisApiIdCorsRoute, deleteV2ApisApiIdCorsRouteHandler)
  .openapi(
    deleteV2ApisApiIdDeploymentsDeploymentIdRoute,
    deleteV2ApisApiIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getV2ApisApiIdDeploymentsDeploymentIdRoute,
    getV2ApisApiIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    patchV2ApisApiIdDeploymentsDeploymentIdRoute,
    patchV2ApisApiIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(deleteV2DomainnamesDomainNameRoute, deleteV2DomainnamesDomainNameRouteHandler)
  .openapi(getV2DomainnamesDomainNameRoute, getV2DomainnamesDomainNameRouteHandler)
  .openapi(patchV2DomainnamesDomainNameRoute, patchV2DomainnamesDomainNameRouteHandler)
  .openapi(
    deleteV2ApisApiIdIntegrationsIntegrationIdRoute,
    deleteV2ApisApiIdIntegrationsIntegrationIdRouteHandler,
  )
  .openapi(
    getV2ApisApiIdIntegrationsIntegrationIdRoute,
    getV2ApisApiIdIntegrationsIntegrationIdRouteHandler,
  )
  .openapi(
    patchV2ApisApiIdIntegrationsIntegrationIdRoute,
    patchV2ApisApiIdIntegrationsIntegrationIdRouteHandler,
  )
  .openapi(
    deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
    deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRouteHandler,
  )
  .openapi(
    getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
    getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRouteHandler,
  )
  .openapi(
    patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
    patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRouteHandler,
  )
  .openapi(deleteV2ApisApiIdModelsModelIdRoute, deleteV2ApisApiIdModelsModelIdRouteHandler)
  .openapi(getV2ApisApiIdModelsModelIdRoute, getV2ApisApiIdModelsModelIdRouteHandler)
  .openapi(patchV2ApisApiIdModelsModelIdRoute, patchV2ApisApiIdModelsModelIdRouteHandler)
  .openapi(deleteV2ApisApiIdRoutesRouteIdRoute, deleteV2ApisApiIdRoutesRouteIdRouteHandler)
  .openapi(getV2ApisApiIdRoutesRouteIdRoute, getV2ApisApiIdRoutesRouteIdRouteHandler)
  .openapi(patchV2ApisApiIdRoutesRouteIdRoute, patchV2ApisApiIdRoutesRouteIdRouteHandler)
  .openapi(
    deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyRoute,
    deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyRouteHandler,
  )
  .openapi(
    deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute,
    deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRouteHandler,
  )
  .openapi(
    getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute,
    getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRouteHandler,
  )
  .openapi(
    patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute,
    patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRouteHandler,
  )
  .openapi(
    deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyRoute,
    deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyRouteHandler,
  )
  .openapi(deleteV2ApisApiIdStagesStageNameRoute, deleteV2ApisApiIdStagesStageNameRouteHandler)
  .openapi(getV2ApisApiIdStagesStageNameRoute, getV2ApisApiIdStagesStageNameRouteHandler)
  .openapi(patchV2ApisApiIdStagesStageNameRoute, patchV2ApisApiIdStagesStageNameRouteHandler)
  .openapi(deleteV2VpclinksVpcLinkIdRoute, deleteV2VpclinksVpcLinkIdRouteHandler)
  .openapi(getV2VpclinksVpcLinkIdRoute, getV2VpclinksVpcLinkIdRouteHandler)
  .openapi(patchV2VpclinksVpcLinkIdRoute, patchV2VpclinksVpcLinkIdRouteHandler)
  .openapi(
    getV2ApisApiIdExportsSpecificationOutputTypeRoute,
    getV2ApisApiIdExportsSpecificationOutputTypeRouteHandler,
  )
  .openapi(
    deleteV2ApisApiIdStagesStageNameCacheAuthorizersRoute,
    deleteV2ApisApiIdStagesStageNameCacheAuthorizersRouteHandler,
  )
  .openapi(
    getV2ApisApiIdModelsModelIdTemplateRoute,
    getV2ApisApiIdModelsModelIdTemplateRouteHandler,
  )
  .openapi(getV2TagsResourceArnRoute, getV2TagsResourceArnRouteHandler)
  .openapi(postV2TagsResourceArnRoute, postV2TagsResourceArnRouteHandler)
  .openapi(deleteV2TagsResourceArnTagKeysRoute, deleteV2TagsResourceArnTagKeysRouteHandler)

export default app
