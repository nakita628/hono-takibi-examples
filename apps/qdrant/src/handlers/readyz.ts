import { OpenAPIHono } from '@hono/zod-openapi'
import { getReadyzRoute } from '../routes'

const app = new OpenAPIHono()

export const readyzHandler = app.openapi(getReadyzRoute, (c) => {
  throw new Error('Not implemented')
})
