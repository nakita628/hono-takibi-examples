import { OpenAPIHono } from '@hono/zod-openapi'
import { getServersRoute } from '../routes'

const app = new OpenAPIHono()

export const serversHandler = app.openapi(getServersRoute, (c) => {
  throw new Error('Not implemented')
})
