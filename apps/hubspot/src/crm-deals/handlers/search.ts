import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects20260903SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects20260903SearchRoute, (c) => {
  throw new Error('Not implemented')
})
