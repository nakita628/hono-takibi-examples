import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const getRegionsHandler = app.openapi(getGetRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
