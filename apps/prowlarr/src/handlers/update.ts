import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1UpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateHandler = app.openapi(getApiV1UpdateRoute, (c) => {
  throw new Error('Not implemented')
})
