import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlusModelsRoute, postPlusValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const plusHandler = app
  .openapi(getPlusModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlusValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
