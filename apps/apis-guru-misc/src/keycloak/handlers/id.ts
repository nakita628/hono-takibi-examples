import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdNameRoute } from '../routes'

const app = new OpenAPIHono()

export const idHandler = app.openapi(getIdNameRoute, (c) => {
  throw new Error('Not implemented')
})
