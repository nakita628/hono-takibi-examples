import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2VisionModelsModelIdRoute,
  getV2VisionDatasetsDatasetIdModelsRoute,
  getV2VisionModelsModelIdLcRoute,
  getV2VisionModelsModelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const visionModelsHandler = app
  .openapi(getV2VisionDatasetsDatasetIdModelsRoute, (c) => {
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
