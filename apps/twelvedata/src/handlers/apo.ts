import { OpenAPIHono } from '@hono/zod-openapi'
import { getApoRoute } from '../routes'

const app = new OpenAPIHono()

export const apoHandler = app.openapi(getApoRoute, (c) => {
  throw new Error('Not implemented')
})
