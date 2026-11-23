import { OpenAPIHono } from '@hono/zod-openapi'
import { getModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app.openapi(getModelsRoute, (c) => {
  throw new Error('Not implemented')
})
