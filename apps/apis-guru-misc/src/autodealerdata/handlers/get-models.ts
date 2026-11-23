import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const getModelsHandler = app.openapi(getGetModelsRoute, (c) => {
  throw new Error('Not implemented')
})
