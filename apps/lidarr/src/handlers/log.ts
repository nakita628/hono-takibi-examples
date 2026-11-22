import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LogRoute } from '../routes'

const app = new OpenAPIHono()

export const logHandler = app.openapi(getApiV1LogRoute, (c) => {
  throw new Error('Not implemented')
})
