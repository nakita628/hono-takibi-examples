import { OpenAPIHono } from '@hono/zod-openapi'
import { getUltoscRoute } from '../routes'

const app = new OpenAPIHono()

export const ultoscHandler = app.openapi(getUltoscRoute, (c) => {
  throw new Error('Not implemented')
})
