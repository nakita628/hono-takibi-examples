import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdRoute } from '../routes'

const app = new OpenAPIHono()

export const adHandler = app.openapi(getAdRoute, (c) => {
  throw new Error('Not implemented')
})
