import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectDebitsRoute } from '../routes'

const app = new OpenAPIHono()

export const directDebitsHandler = app.openapi(getDirectDebitsRoute, (c) => {
  throw new Error('Not implemented')
})
