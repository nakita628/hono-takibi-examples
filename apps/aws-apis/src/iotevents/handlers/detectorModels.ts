import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDetectorModelsDetectorModelNameRoute,
  getDetectorModelsDetectorModelNameRoute,
  getDetectorModelsDetectorModelNameVersionsRoute,
  getDetectorModelsRoute,
  postDetectorModelsDetectorModelNameRoute,
  postDetectorModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const detectorModelsHandler = app
  .openapi(postDetectorModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectorModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDetectorModelsDetectorModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectorModelsDetectorModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDetectorModelsDetectorModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectorModelsDetectorModelNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
