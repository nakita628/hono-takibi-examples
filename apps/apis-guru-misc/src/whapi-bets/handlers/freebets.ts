import { OpenAPIHono } from '@hono/zod-openapi'
import { getFreebetsRoute } from '../routes'

const app = new OpenAPIHono()

export const freebetsHandler = app.openapi(getFreebetsRoute, (c) => {
  throw new Error('Not implemented')
})
