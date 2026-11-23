import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const queryJsonHandler = app.openapi(getQueryJsonRoute, (c) => {
  throw new Error('Not implemented')
})
