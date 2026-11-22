import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClassificationNameRoute,
  getClassificationAttributesRoute,
  getClassificationNameDatasetRoute,
  getClassificationNameTrainRoute,
  getFacesRoute,
  postClassificationGenerateExamplesObjectRoute,
  postClassificationGenerateExamplesStateRoute,
  postClassificationNameDatasetCategorizeRoute,
  postClassificationNameDatasetCategoryCreateRoute,
  postClassificationNameDatasetCategoryDeleteRoute,
  postClassificationNameDatasetCategoryReclassifyRoute,
  postClassificationNameTrainDeleteRoute,
  postClassificationNameTrainRoute,
  postFacesNameCreateRoute,
  postFacesNameDeleteRoute,
  postFacesNameReclassifyRoute,
  postFacesNameRegisterRoute,
  postFacesRecognizeRoute,
  postFacesReprocessRoute,
  postFacesTrainNameClassifyRoute,
  putAudioTranscribeRoute,
  putClassificationNameDatasetOldCategoryRenameRoute,
  putFacesOldNameRenameRoute,
  putLprReprocessRoute,
  putReindexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationHandler = app
  .openapi(getFacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesReprocessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesTrainNameClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesRecognizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameReclassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesNameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFacesOldNameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLprReprocessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAudioTranscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationNameDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationNameTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationNameTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationNameDatasetCategoryDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationNameDatasetCategoryReclassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClassificationNameDatasetOldCategoryRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationNameDatasetCategorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationNameDatasetCategoryCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationNameTrainDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationGenerateExamplesStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationGenerateExamplesObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClassificationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
