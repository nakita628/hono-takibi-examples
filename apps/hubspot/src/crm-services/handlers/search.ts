import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects2026090162SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects2026090162SearchRoute, (c) => {
  throw new Error('Not implemented')
})
