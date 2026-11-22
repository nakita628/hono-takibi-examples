import { OpenAPIHono } from '@hono/zod-openapi'
import { getTablesBordersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tablesBordersHandler = app.openapi(getTablesBordersIdRoute, (c) => {
  throw new Error('Not implemented')
})
