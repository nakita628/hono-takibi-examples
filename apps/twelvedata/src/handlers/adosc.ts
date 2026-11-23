import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdoscRoute } from '../routes'

const app = new OpenAPIHono()

export const adoscHandler = app.openapi(getAdoscRoute, (c) => {
  throw new Error('Not implemented')
})
