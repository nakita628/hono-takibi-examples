import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinRoute } from '../routes'

const app = new OpenAPIHono()

export const minHandler = app.openapi(getMinRoute, (c) => {
  throw new Error('Not implemented')
})
