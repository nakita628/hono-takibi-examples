import { OpenAPIHono } from '@hono/zod-openapi'
import { postWidgetsTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const widgetsHandler = app.openapi(postWidgetsTokenRoute, (c) => {
  throw new Error('Not implemented')
})
