import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3LogRoute } from '../routes'

const app = new OpenAPIHono()

export const logHandler = app.openapi(getApiV3LogRoute, (c) => {
  throw new Error('Not implemented')
})
