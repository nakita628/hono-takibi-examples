import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app.openapi(getConfigRoute, (c) => {
  throw new Error('Not implemented')
})
