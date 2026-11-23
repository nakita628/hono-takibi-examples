import { OpenAPIHono } from '@hono/zod-openapi'
import { getZenRoute } from '../routes'

const app = new OpenAPIHono()

export const zenHandler = app.openapi(getZenRoute, (c) => {
  throw new Error('Not implemented')
})
