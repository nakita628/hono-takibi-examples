import { OpenAPIHono } from '@hono/zod-openapi'
import { getAsyncDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const asyncHandler = app.openapi(getAsyncDownloadRoute, (c) => {
  throw new Error('Not implemented')
})
