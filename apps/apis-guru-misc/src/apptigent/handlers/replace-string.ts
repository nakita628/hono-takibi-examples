import { OpenAPIHono } from '@hono/zod-openapi'
import { postReplaceStringRoute } from '../routes'

const app = new OpenAPIHono()

export const replaceStringHandler = app.openapi(postReplaceStringRoute, (c) => {
  throw new Error('Not implemented')
})
