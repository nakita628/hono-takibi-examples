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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2ApiusageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageDatasetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageDatasetsUploadSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LanguageDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDatasetsDatasetIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDatasetsDatasetIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LanguageDatasetsDatasetIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDeletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LanguageModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageModelsModelIdLcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageRetrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageSentimentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageTrainModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2Oauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2Oauth2TokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2VisionBulkfeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsUploadSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VisionDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDatasetsDatasetIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsDatasetIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDatasetsDatasetIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2VisionDatasetsDatasetIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDeletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDetectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VisionModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionModelsModelIdLcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionOcrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionRetrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionTrainModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
