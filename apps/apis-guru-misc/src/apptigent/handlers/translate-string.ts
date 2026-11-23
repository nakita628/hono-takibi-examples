import { OpenAPIHono } from '@hono/zod-openapi'
import { postTranslateStringRoute } from '../routes'

const app = new OpenAPIHono()

export const translateStringHandler = app.openapi(postTranslateStringRoute, (c) => {
  throw new Error('Not implemented')
})
