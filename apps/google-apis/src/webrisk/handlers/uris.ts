import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UrisSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const urisHandler = app.openapi(getV1UrisSearchRoute, (c) => {
  throw new Error('Not implemented')
})
