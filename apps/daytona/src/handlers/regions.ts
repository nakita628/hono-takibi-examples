import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app.openapi(getSharedRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
