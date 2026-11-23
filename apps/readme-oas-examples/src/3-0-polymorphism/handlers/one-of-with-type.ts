import { OpenAPIHono } from '@hono/zod-openapi'
import { postOneOfWithTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const oneOfWithTypeHandler = app.openapi(postOneOfWithTypeRoute, (c) => {
  throw new Error('Not implemented')
})
