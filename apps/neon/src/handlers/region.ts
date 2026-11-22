import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const regionHandler = app.openapi(getRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
