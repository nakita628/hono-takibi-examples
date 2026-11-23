import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const topModelsHandler = app.openapi(getTopModelsRoute, (c) => {
  throw new Error('Not implemented')
})
