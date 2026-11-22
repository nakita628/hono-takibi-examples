import { OpenAPIHono } from '@hono/zod-openapi'
import { getPositionsRoute } from '../routes'

const app = new OpenAPIHono()

export const positionsHandler = app.openapi(getPositionsRoute, (c) => {
  throw new Error('Not implemented')
})
