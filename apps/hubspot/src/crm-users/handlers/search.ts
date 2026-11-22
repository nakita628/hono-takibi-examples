import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609UsersSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609UsersSearchRoute, (c) => {
  throw new Error('Not implemented')
})
