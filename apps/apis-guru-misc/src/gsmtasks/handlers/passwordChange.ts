import { OpenAPIHono } from '@hono/zod-openapi'
import { postPasswordChangeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordChangeHandler = app.openapi(postPasswordChangeIndexRoute, (c) => {
  throw new Error('Not implemented')
})
