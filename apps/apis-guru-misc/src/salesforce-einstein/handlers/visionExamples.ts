import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2VisionDatasetsDatasetIdExamplesRoute,
  getV2VisionExamplesRoute,
  postV2VisionDatasetsDatasetIdExamplesRoute,
  postV2VisionFeedbackRoute,
  putV2VisionBulkfeedbackRoute,
  putV2VisionDatasetsDatasetIdUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const visionExamplesHandler = app
  .openapi(putV2VisionBulkfeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDatasetsDatasetIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsDatasetIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2VisionDatasetsDatasetIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
