import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app.openapi(getV1ModelsRoute, (c) => {
  throw new Error('Not implemented')
})
