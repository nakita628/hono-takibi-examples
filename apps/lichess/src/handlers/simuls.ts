import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSimulRoute } from '../routes'

const app = new OpenAPIHono()

export const simulsHandler = app.openapi(getApiSimulRoute, (c) => {
  throw new Error('Not implemented')
})
