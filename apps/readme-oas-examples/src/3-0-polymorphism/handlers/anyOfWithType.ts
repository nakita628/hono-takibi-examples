import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnyOfWithTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const anyOfWithTypeHandler = app.openapi(postAnyOfWithTypeRoute, (c) => {
  throw new Error('Not implemented')
})
