import { OpenAPIHono } from '@hono/zod-openapi'
import { getRootConfigIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const rootHandler = app.openapi(getRootConfigIndexRoute, (c) => {
  throw new Error('Not implemented')
})
