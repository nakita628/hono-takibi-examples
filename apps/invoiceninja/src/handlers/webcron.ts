import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1WebcronRoute } from '../routes'

const app = new OpenAPIHono()

export const webcronHandler = app.openapi(getApiV1WebcronRoute, (c) => {
  throw new Error('Not implemented')
})
