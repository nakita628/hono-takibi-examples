import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SasRoute } from '../routes'

const app = new OpenAPIHono()

export const sasHandler = app.openapi(getApiV1SasRoute, (c) => {
  throw new Error('Not implemented')
})
