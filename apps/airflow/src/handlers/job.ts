import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2JobsRoute } from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app.openapi(getApiV2JobsRoute, (c) => {
  throw new Error('Not implemented')
})
