import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploymentsDeploymentOwnerDeploymentNameRoute,
  deleteFilesFileIdRoute,
  deleteModelsModelOwnerModelNameRoute,
  deleteModelsModelOwnerModelNameVersionsVersionIdRoute,
  getAccountRoute,
  getCollectionsCollectionSlugRoute,
  getCollectionsRoute,
  getDeploymentsDeploymentOwnerDeploymentNameRoute,
  getDeploymentsRoute,
  getFilesFileIdDownloadRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  getHardwareRoute,
  getModelsModelOwnerModelNameExamplesRoute,
  getModelsModelOwnerModelNameReadmeRoute,
  getModelsModelOwnerModelNameRoute,
  getModelsModelOwnerModelNameVersionsRoute,
  getModelsModelOwnerModelNameVersionsVersionIdRoute,
  getModelsRoute,
  getPredictionsPredictionIdRoute,
  getPredictionsRoute,
  getSearchRoute,
  getTrainingsRoute,
  getTrainingsTrainingIdRoute,
  getWebhooksDefaultSecretRoute,
  patchDeploymentsDeploymentOwnerDeploymentNameRoute,
  patchModelsModelOwnerModelNameRoute,
  postDeploymentsDeploymentOwnerDeploymentNamePredictionsRoute,
  postDeploymentsRoute,
  postFilesRoute,
  postModelsModelOwnerModelNamePredictionsRoute,
  postModelsModelOwnerModelNameVersionsVersionIdTrainingsRoute,
  postModelsRoute,
  postPredictionsPredictionIdCancelRoute,
  postPredictionsRoute,
  postTrainingsTrainingIdCancelRoute,
  queryModelsRoute,
} from './routes'
import {
  deleteDeploymentsDeploymentOwnerDeploymentNameRouteHandler,
  deleteFilesFileIdRouteHandler,
  deleteModelsModelOwnerModelNameRouteHandler,
  deleteModelsModelOwnerModelNameVersionsVersionIdRouteHandler,
  getAccountRouteHandler,
  getCollectionsCollectionSlugRouteHandler,
  getCollectionsRouteHandler,
  getDeploymentsDeploymentOwnerDeploymentNameRouteHandler,
  getDeploymentsRouteHandler,
  getFilesFileIdDownloadRouteHandler,
  getFilesFileIdRouteHandler,
  getFilesRouteHandler,
  getHardwareRouteHandler,
  getModelsModelOwnerModelNameExamplesRouteHandler,
  getModelsModelOwnerModelNameReadmeRouteHandler,
  getModelsModelOwnerModelNameRouteHandler,
  getModelsModelOwnerModelNameVersionsRouteHandler,
  getModelsModelOwnerModelNameVersionsVersionIdRouteHandler,
  getModelsRouteHandler,
  getPredictionsPredictionIdRouteHandler,
  getPredictionsRouteHandler,
  getSearchRouteHandler,
  getTrainingsRouteHandler,
  getTrainingsTrainingIdRouteHandler,
  getWebhooksDefaultSecretRouteHandler,
  patchDeploymentsDeploymentOwnerDeploymentNameRouteHandler,
  patchModelsModelOwnerModelNameRouteHandler,
  postDeploymentsDeploymentOwnerDeploymentNamePredictionsRouteHandler,
  postDeploymentsRouteHandler,
  postFilesRouteHandler,
  postModelsModelOwnerModelNamePredictionsRouteHandler,
  postModelsModelOwnerModelNameVersionsVersionIdTrainingsRouteHandler,
  postModelsRouteHandler,
  postPredictionsPredictionIdCancelRouteHandler,
  postPredictionsRouteHandler,
  postTrainingsTrainingIdCancelRouteHandler,
  queryModelsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(getCollectionsCollectionSlugRoute, getCollectionsCollectionSlugRouteHandler)
  .openapi(getDeploymentsRoute, getDeploymentsRouteHandler)
  .openapi(postDeploymentsRoute, postDeploymentsRouteHandler)
  .openapi(
    deleteDeploymentsDeploymentOwnerDeploymentNameRoute,
    deleteDeploymentsDeploymentOwnerDeploymentNameRouteHandler,
  )
  .openapi(
    getDeploymentsDeploymentOwnerDeploymentNameRoute,
    getDeploymentsDeploymentOwnerDeploymentNameRouteHandler,
  )
  .openapi(
    patchDeploymentsDeploymentOwnerDeploymentNameRoute,
    patchDeploymentsDeploymentOwnerDeploymentNameRouteHandler,
  )
  .openapi(
    postDeploymentsDeploymentOwnerDeploymentNamePredictionsRoute,
    postDeploymentsDeploymentOwnerDeploymentNamePredictionsRouteHandler,
  )
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(deleteFilesFileIdRoute, deleteFilesFileIdRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(getFilesFileIdDownloadRoute, getFilesFileIdDownloadRouteHandler)
  .openapi(getHardwareRoute, getHardwareRouteHandler)
  .openapi(getModelsRoute, getModelsRouteHandler)
  .openapi(postModelsRoute, postModelsRouteHandler)
  .openapi(queryModelsRoute, queryModelsRouteHandler)
  .openapi(deleteModelsModelOwnerModelNameRoute, deleteModelsModelOwnerModelNameRouteHandler)
  .openapi(getModelsModelOwnerModelNameRoute, getModelsModelOwnerModelNameRouteHandler)
  .openapi(patchModelsModelOwnerModelNameRoute, patchModelsModelOwnerModelNameRouteHandler)
  .openapi(
    getModelsModelOwnerModelNameExamplesRoute,
    getModelsModelOwnerModelNameExamplesRouteHandler,
  )
  .openapi(
    postModelsModelOwnerModelNamePredictionsRoute,
    postModelsModelOwnerModelNamePredictionsRouteHandler,
  )
  .openapi(getModelsModelOwnerModelNameReadmeRoute, getModelsModelOwnerModelNameReadmeRouteHandler)
  .openapi(
    getModelsModelOwnerModelNameVersionsRoute,
    getModelsModelOwnerModelNameVersionsRouteHandler,
  )
  .openapi(
    deleteModelsModelOwnerModelNameVersionsVersionIdRoute,
    deleteModelsModelOwnerModelNameVersionsVersionIdRouteHandler,
  )
  .openapi(
    getModelsModelOwnerModelNameVersionsVersionIdRoute,
    getModelsModelOwnerModelNameVersionsVersionIdRouteHandler,
  )
  .openapi(
    postModelsModelOwnerModelNameVersionsVersionIdTrainingsRoute,
    postModelsModelOwnerModelNameVersionsVersionIdTrainingsRouteHandler,
  )
  .openapi(getPredictionsRoute, getPredictionsRouteHandler)
  .openapi(postPredictionsRoute, postPredictionsRouteHandler)
  .openapi(getPredictionsPredictionIdRoute, getPredictionsPredictionIdRouteHandler)
  .openapi(postPredictionsPredictionIdCancelRoute, postPredictionsPredictionIdCancelRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getTrainingsRoute, getTrainingsRouteHandler)
  .openapi(getTrainingsTrainingIdRoute, getTrainingsTrainingIdRouteHandler)
  .openapi(postTrainingsTrainingIdCancelRoute, postTrainingsTrainingIdCancelRouteHandler)
  .openapi(getWebhooksDefaultSecretRoute, getWebhooksDefaultSecretRouteHandler)

export default app
