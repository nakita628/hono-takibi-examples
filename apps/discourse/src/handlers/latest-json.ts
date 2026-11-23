import { OpenAPIHono } from '@hono/zod-openapi'
import { getLatestJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const latestJsonHandler = app.openapi(getLatestJsonRoute, (c) => {
  throw new Error('Not implemented')
})
