import { OpenAPIHono } from '@hono/zod-openapi'
import { postTranslateRoute } from '../routes'

const app = new OpenAPIHono()

export const translateHandler = app.openapi(postTranslateRoute, (c) => {
  throw new Error('Not implemented')
})
