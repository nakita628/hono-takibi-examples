import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  putRestapisRestapiIdDocumentationPartsRoute,
  putRestapisRestapiIdGatewayresponsesResponseTypeRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
  putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute,
  putRestapisRestapiIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restapisHandler = app
  .openapi(postRestapisRestapiIdAuthorizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdAuthorizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdDocumentationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdDocumentationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestapisRestapiIdDocumentationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdDocumentationVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdDocumentationVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdRequestvalidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdRequestvalidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdResourcesParentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdAuthorizersAuthorizerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdDocumentationPartsPartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdDocumentationPartsPartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdDocumentationPartsPartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdDocumentationVersionsDocVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdDocumentationVersionsDocVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdDocumentationVersionsDocVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdGatewayresponsesResponseTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdGatewayresponsesResponseTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestapisRestapiIdGatewayresponsesResponseTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdGatewayresponsesResponseTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteRestapisRestapiIdModelsModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdModelsModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdModelsModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestapisRestapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdStagesStageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdStagesStageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRestapisRestapiIdStagesStageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdStagesStageNameCacheAuthorizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestapisRestapiIdStagesStageNameCacheDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdStagesStageNameExportsExportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdGatewayresponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdModelsModelNameDefaultTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestapisRestapiIdStagesStageNameSdksSdkTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
