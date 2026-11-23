import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountMovementsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountMovementsHandler = app.openapi(getAccountMovementsRoute, (c) => {
  throw new Error('Not implemented')
})
