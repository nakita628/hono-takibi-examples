import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3ServerInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const serverInfoHandler = app.openapi(getRestApi3ServerInfoRoute, (c) => {
  throw new Error('Not implemented')
})
