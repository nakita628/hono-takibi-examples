import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3UpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateHandler = app.openapi(getApiV3UpdateRoute, (c) => {
  throw new Error('Not implemented')
})
