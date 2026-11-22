import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicModelsIdRoute,
  getApiPublicModelsIdRoute,
  getApiPublicModelsRoute,
  postApiPublicModelsRoute,
  putApiPublicModelsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(postApiPublicModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
