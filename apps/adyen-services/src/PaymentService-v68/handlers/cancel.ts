import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelHandler = app.openapi(postCancelRoute, (c) => {
  throw new Error('Not implemented')
})
