import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609MeetingsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609MeetingsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
