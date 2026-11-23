import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedRegionsHandler = app.openapi(getSharedRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
