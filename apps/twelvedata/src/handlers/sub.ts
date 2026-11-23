import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubRoute } from '../routes'

const app = new OpenAPIHono()

export const subHandler = app.openapi(getSubRoute, (c) => {
  throw new Error('Not implemented')
})
