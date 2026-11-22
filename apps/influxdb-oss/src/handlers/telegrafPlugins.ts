import { OpenAPIHono } from '@hono/zod-openapi'
import { getTelegrafPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const telegrafPluginsHandler = app.openapi(getTelegrafPluginsRoute, (c) => {
  throw new Error('Not implemented')
})
