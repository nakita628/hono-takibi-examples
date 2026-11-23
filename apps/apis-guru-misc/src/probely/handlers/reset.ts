import { OpenAPIHono } from '@hono/zod-openapi'
import { postResetIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const resetHandler = app.openapi(postResetIndexRoute, (c) => {
  throw new Error('Not implemented')
})
