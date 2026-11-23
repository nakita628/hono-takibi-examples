import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const contentJsonHandler = app.openapi(getContentJsonRoute, (c) => {
  throw new Error('Not implemented')
})
