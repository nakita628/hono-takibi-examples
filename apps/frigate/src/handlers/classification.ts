import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClassificationNameRoute,
  getClassificationAttributesRoute,
  getClassificationNameDatasetRoute,
  getClassificationNameTrainRoute,
  postClassificationGenerateExamplesObjectRoute,
  postClassificationGenerateExamplesStateRoute,
  postClassificationNameDatasetCategorizeRoute,
  postClassificationNameDatasetCategoryCreateRoute,
  postClassificationNameDatasetCategoryDeleteRoute,
  postClassificationNameDatasetCategoryReclassifyRoute,
  postClassificationNameTrainDeleteRoute,
  postClassificationNameTrainRoute,
  putClassificationNameDatasetOldCategoryRenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationHandler = app
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
