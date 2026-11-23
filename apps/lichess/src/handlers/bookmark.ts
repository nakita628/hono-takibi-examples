import { OpenAPIHono } from '@hono/zod-openapi'
import { postBookmarkGameIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bookmarkHandler = app.openapi(postBookmarkGameIdRoute, (c) => {
  throw new Error('Not implemented')
})
