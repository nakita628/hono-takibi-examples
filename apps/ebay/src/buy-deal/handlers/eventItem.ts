import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventItemRoute } from '../routes'

const app = new OpenAPIHono()

export const eventItemHandler = app.openapi(getEventItemRoute, (c) => {
  throw new Error('Not implemented')
})
