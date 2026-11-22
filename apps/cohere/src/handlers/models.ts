import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ModelsModelRoute, getV1ModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getV1ModelsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
