import { OpenAPIHono } from '@hono/zod-openapi'
import { postCacheClearRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app.openapi(postCacheClearRoute, (c) => {
  throw new Error('Not implemented')
})
