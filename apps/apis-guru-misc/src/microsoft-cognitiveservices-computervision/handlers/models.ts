import { OpenAPIHono } from '@hono/zod-openapi'
import { getModelsRoute, postModelsModelAnalyzeRoute } from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsModelAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
