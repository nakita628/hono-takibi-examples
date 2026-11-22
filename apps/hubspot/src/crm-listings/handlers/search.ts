import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects2026090420SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects2026090420SearchRoute, (c) => {
  throw new Error('Not implemented')
})
