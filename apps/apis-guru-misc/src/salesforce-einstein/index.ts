import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LanguageDatasetsDatasetIdRoute,
  deleteV2LanguageModelsModelIdRoute,
  deleteV2Oauth2TokensTokenRoute,
  deleteV2VisionDatasetsDatasetIdRoute,
  deleteV2VisionModelsModelIdRoute,
  getV2ApiusageRoute,
  getV2LanguageDatasetsDatasetIdExamplesRoute,
  getV2LanguageDatasetsDatasetIdModelsRoute,
  getV2LanguageDatasetsDatasetIdRoute,
  getV2LanguageDatasetsRoute,
  getV2LanguageDeletionIdRoute,
  getV2LanguageExamplesRoute,
  getV2LanguageModelsModelIdLcRoute,
  getV2LanguageModelsModelIdRoute,
  getV2LanguageTrainModelIdRoute,
  getV2VisionDatasetsDatasetIdExamplesRoute,
  getV2VisionDatasetsDatasetIdModelsRoute,
  getV2VisionDatasetsDatasetIdRoute,
  getV2VisionDatasetsRoute,
  getV2VisionDeletionIdRoute,
  getV2VisionExamplesRoute,
  getV2VisionModelsModelIdLcRoute,
  getV2VisionModelsModelIdRoute,
  getV2VisionTrainModelIdRoute,
  postV2LanguageDatasetsUploadRoute,
  postV2LanguageDatasetsUploadSyncRoute,
  postV2LanguageFeedbackRoute,
  postV2LanguageIntentRoute,
  postV2LanguageRetrainRoute,
  postV2LanguageSentimentRoute,
  postV2LanguageTrainRoute,
  postV2Oauth2TokenRoute,
  postV2VisionDatasetsDatasetIdExamplesRoute,
  postV2VisionDatasetsRoute,
  postV2VisionDatasetsUploadRoute,
  postV2VisionDatasetsUploadSyncRoute,
  postV2VisionDetectRoute,
  postV2VisionFeedbackRoute,
  postV2VisionOcrRoute,
  postV2VisionPredictRoute,
  postV2VisionRetrainRoute,
  postV2VisionTrainRoute,
  putV2LanguageDatasetsDatasetIdUploadRoute,
  putV2VisionBulkfeedbackRoute,
  putV2VisionDatasetsDatasetIdUploadRoute,
} from './routes'
import {
  deleteV2LanguageDatasetsDatasetIdRouteHandler,
  deleteV2LanguageModelsModelIdRouteHandler,
  deleteV2Oauth2TokensTokenRouteHandler,
  deleteV2VisionDatasetsDatasetIdRouteHandler,
  deleteV2VisionModelsModelIdRouteHandler,
  getV2ApiusageRouteHandler,
  getV2LanguageDatasetsDatasetIdExamplesRouteHandler,
  getV2LanguageDatasetsDatasetIdModelsRouteHandler,
  getV2LanguageDatasetsDatasetIdRouteHandler,
  getV2LanguageDatasetsRouteHandler,
  getV2LanguageDeletionIdRouteHandler,
  getV2LanguageExamplesRouteHandler,
  getV2LanguageModelsModelIdLcRouteHandler,
  getV2LanguageModelsModelIdRouteHandler,
  getV2LanguageTrainModelIdRouteHandler,
  getV2VisionDatasetsDatasetIdExamplesRouteHandler,
  getV2VisionDatasetsDatasetIdModelsRouteHandler,
  getV2VisionDatasetsDatasetIdRouteHandler,
  getV2VisionDatasetsRouteHandler,
  getV2VisionDeletionIdRouteHandler,
  getV2VisionExamplesRouteHandler,
  getV2VisionModelsModelIdLcRouteHandler,
  getV2VisionModelsModelIdRouteHandler,
  getV2VisionTrainModelIdRouteHandler,
  postV2LanguageDatasetsUploadRouteHandler,
  postV2LanguageDatasetsUploadSyncRouteHandler,
  postV2LanguageFeedbackRouteHandler,
  postV2LanguageIntentRouteHandler,
  postV2LanguageRetrainRouteHandler,
  postV2LanguageSentimentRouteHandler,
  postV2LanguageTrainRouteHandler,
  postV2Oauth2TokenRouteHandler,
  postV2VisionDatasetsDatasetIdExamplesRouteHandler,
  postV2VisionDatasetsRouteHandler,
  postV2VisionDatasetsUploadRouteHandler,
  postV2VisionDatasetsUploadSyncRouteHandler,
  postV2VisionDetectRouteHandler,
  postV2VisionFeedbackRouteHandler,
  postV2VisionOcrRouteHandler,
  postV2VisionPredictRouteHandler,
  postV2VisionRetrainRouteHandler,
  postV2VisionTrainRouteHandler,
  putV2LanguageDatasetsDatasetIdUploadRouteHandler,
  putV2VisionBulkfeedbackRouteHandler,
  putV2VisionDatasetsDatasetIdUploadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2ApiusageRoute, getV2ApiusageRouteHandler)
  .openapi(getV2LanguageDatasetsRoute, getV2LanguageDatasetsRouteHandler)
  .openapi(postV2LanguageDatasetsUploadRoute, postV2LanguageDatasetsUploadRouteHandler)
  .openapi(postV2LanguageDatasetsUploadSyncRoute, postV2LanguageDatasetsUploadSyncRouteHandler)
  .openapi(deleteV2LanguageDatasetsDatasetIdRoute, deleteV2LanguageDatasetsDatasetIdRouteHandler)
  .openapi(getV2LanguageDatasetsDatasetIdRoute, getV2LanguageDatasetsDatasetIdRouteHandler)
  .openapi(
    getV2LanguageDatasetsDatasetIdExamplesRoute,
    getV2LanguageDatasetsDatasetIdExamplesRouteHandler,
  )
  .openapi(
    getV2LanguageDatasetsDatasetIdModelsRoute,
    getV2LanguageDatasetsDatasetIdModelsRouteHandler,
  )
  .openapi(
    putV2LanguageDatasetsDatasetIdUploadRoute,
    putV2LanguageDatasetsDatasetIdUploadRouteHandler,
  )
  .openapi(getV2LanguageDeletionIdRoute, getV2LanguageDeletionIdRouteHandler)
  .openapi(getV2LanguageExamplesRoute, getV2LanguageExamplesRouteHandler)
  .openapi(postV2LanguageFeedbackRoute, postV2LanguageFeedbackRouteHandler)
  .openapi(postV2LanguageIntentRoute, postV2LanguageIntentRouteHandler)
  .openapi(deleteV2LanguageModelsModelIdRoute, deleteV2LanguageModelsModelIdRouteHandler)
  .openapi(getV2LanguageModelsModelIdRoute, getV2LanguageModelsModelIdRouteHandler)
  .openapi(getV2LanguageModelsModelIdLcRoute, getV2LanguageModelsModelIdLcRouteHandler)
  .openapi(postV2LanguageRetrainRoute, postV2LanguageRetrainRouteHandler)
  .openapi(postV2LanguageSentimentRoute, postV2LanguageSentimentRouteHandler)
  .openapi(postV2LanguageTrainRoute, postV2LanguageTrainRouteHandler)
  .openapi(getV2LanguageTrainModelIdRoute, getV2LanguageTrainModelIdRouteHandler)
  .openapi(postV2Oauth2TokenRoute, postV2Oauth2TokenRouteHandler)
  .openapi(deleteV2Oauth2TokensTokenRoute, deleteV2Oauth2TokensTokenRouteHandler)
  .openapi(putV2VisionBulkfeedbackRoute, putV2VisionBulkfeedbackRouteHandler)
  .openapi(getV2VisionDatasetsRoute, getV2VisionDatasetsRouteHandler)
  .openapi(postV2VisionDatasetsRoute, postV2VisionDatasetsRouteHandler)
  .openapi(postV2VisionDatasetsUploadRoute, postV2VisionDatasetsUploadRouteHandler)
  .openapi(postV2VisionDatasetsUploadSyncRoute, postV2VisionDatasetsUploadSyncRouteHandler)
  .openapi(deleteV2VisionDatasetsDatasetIdRoute, deleteV2VisionDatasetsDatasetIdRouteHandler)
  .openapi(getV2VisionDatasetsDatasetIdRoute, getV2VisionDatasetsDatasetIdRouteHandler)
  .openapi(
    getV2VisionDatasetsDatasetIdExamplesRoute,
    getV2VisionDatasetsDatasetIdExamplesRouteHandler,
  )
  .openapi(
    postV2VisionDatasetsDatasetIdExamplesRoute,
    postV2VisionDatasetsDatasetIdExamplesRouteHandler,
  )
  .openapi(getV2VisionDatasetsDatasetIdModelsRoute, getV2VisionDatasetsDatasetIdModelsRouteHandler)
  .openapi(putV2VisionDatasetsDatasetIdUploadRoute, putV2VisionDatasetsDatasetIdUploadRouteHandler)
  .openapi(getV2VisionDeletionIdRoute, getV2VisionDeletionIdRouteHandler)
  .openapi(postV2VisionDetectRoute, postV2VisionDetectRouteHandler)
  .openapi(getV2VisionExamplesRoute, getV2VisionExamplesRouteHandler)
  .openapi(postV2VisionFeedbackRoute, postV2VisionFeedbackRouteHandler)
  .openapi(deleteV2VisionModelsModelIdRoute, deleteV2VisionModelsModelIdRouteHandler)
  .openapi(getV2VisionModelsModelIdRoute, getV2VisionModelsModelIdRouteHandler)
  .openapi(getV2VisionModelsModelIdLcRoute, getV2VisionModelsModelIdLcRouteHandler)
  .openapi(postV2VisionOcrRoute, postV2VisionOcrRouteHandler)
  .openapi(postV2VisionPredictRoute, postV2VisionPredictRouteHandler)
  .openapi(postV2VisionRetrainRoute, postV2VisionRetrainRouteHandler)
  .openapi(postV2VisionTrainRoute, postV2VisionTrainRouteHandler)
  .openapi(getV2VisionTrainModelIdRoute, getV2VisionTrainModelIdRouteHandler)

export default app
