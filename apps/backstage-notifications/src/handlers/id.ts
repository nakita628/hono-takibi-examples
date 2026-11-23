import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdRoute } from '../routes'

const app = new OpenAPIHono()

export const idHandler = app.openapi(getIdRoute, (c) => {
  throw new Error('Not implemented')
})
