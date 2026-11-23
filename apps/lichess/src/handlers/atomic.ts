import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtomicRoute } from '../routes'

const app = new OpenAPIHono()

export const atomicHandler = app.openapi(getAtomicRoute, (c) => {
  throw new Error('Not implemented')
})
