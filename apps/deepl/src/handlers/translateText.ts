import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2TranslateRoute } from '../routes'

const app = new OpenAPIHono()

export const translateTextHandler = app.openapi(postV2TranslateRoute, (c) => {
  throw new Error('Not implemented')
})
