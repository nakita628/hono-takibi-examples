import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnzRoute } from '../routes'

const app = new OpenAPIHono()

export const connzHandler = app.openapi(getConnzRoute, (c) => {
  throw new Error('Not implemented')
})
