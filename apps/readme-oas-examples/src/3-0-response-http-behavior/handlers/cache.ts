import { OpenAPIHono } from '@hono/zod-openapi'
import { getCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app.openapi(getCacheRoute, (c) => {
  throw new Error('Not implemented')
})
