import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects2026090410SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects2026090410SearchRoute, (c) => {
  throw new Error('Not implemented')
})
