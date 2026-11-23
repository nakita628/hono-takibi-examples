import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpRoute } from '../routes'

const app = new OpenAPIHono()

export const ipHandler = app.openapi(getIpRoute, (c) => {
  throw new Error('Not implemented')
})
