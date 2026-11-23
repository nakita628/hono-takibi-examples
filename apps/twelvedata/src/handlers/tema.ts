import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemaRoute } from '../routes'

const app = new OpenAPIHono()

export const temaHandler = app.openapi(getTemaRoute, (c) => {
  throw new Error('Not implemented')
})
