import { OpenAPIHono } from '@hono/zod-openapi'
import { getBopRoute } from '../routes'

const app = new OpenAPIHono()

export const bopHandler = app.openapi(getBopRoute, (c) => {
  throw new Error('Not implemented')
})
