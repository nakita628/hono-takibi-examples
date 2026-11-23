import { OpenAPIHono } from '@hono/zod-openapi'
import { getReadyRoute } from '../routes'

const app = new OpenAPIHono()

export const readyHandler = app.openapi(getReadyRoute, (c) => {
  throw new Error('Not implemented')
})
