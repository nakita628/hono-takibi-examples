import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetUtcTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const getUtcTimeHandler = app.openapi(getGetUtcTimeRoute, (c) => {
  throw new Error('Not implemented')
})
