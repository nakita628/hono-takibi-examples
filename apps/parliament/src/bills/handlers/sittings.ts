import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SittingsRoute } from '../routes'

const app = new OpenAPIHono()

export const sittingsHandler = app.openapi(getApiV1SittingsRoute, (c) => {
  throw new Error('Not implemented')
})
