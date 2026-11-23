import { OpenAPIHono } from '@hono/zod-openapi'
import { putPathRoute } from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app.openapi(putPathRoute, (c) => {
  throw new Error('Not implemented')
})
