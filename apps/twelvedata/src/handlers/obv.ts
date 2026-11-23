import { OpenAPIHono } from '@hono/zod-openapi'
import { getObvRoute } from '../routes'

const app = new OpenAPIHono()

export const obvHandler = app.openapi(getObvRoute, (c) => {
  throw new Error('Not implemented')
})
