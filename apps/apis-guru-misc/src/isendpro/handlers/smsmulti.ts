import { OpenAPIHono } from '@hono/zod-openapi'
import { postSmsmultiRoute } from '../routes'

const app = new OpenAPIHono()

export const smsmultiHandler = app.openapi(postSmsmultiRoute, (c) => {
  throw new Error('Not implemented')
})
