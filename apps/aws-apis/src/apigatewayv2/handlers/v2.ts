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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainnamesDomainNameApimappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainnamesDomainNameApimappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdAuthorizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdAuthorizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdRoutesRouteIdRouteresponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdRoutesRouteIdRouteresponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ApisApiIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VpclinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VpclinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdStagesStageNameAccesslogsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainnamesDomainNameApimappingsApiMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainnamesDomainNameApimappingsApiMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2DomainnamesDomainNameApimappingsApiMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2DomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV2ApisApiIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdStagesStageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdStagesStageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ApisApiIdStagesStageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VpclinksVpcLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VpclinksVpcLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2VpclinksVpcLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdExportsSpecificationOutputTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ApisApiIdStagesStageNameCacheAuthorizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ApisApiIdModelsModelIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
