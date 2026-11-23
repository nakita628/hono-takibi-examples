import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalancesRoute } from '../routes'

const app = new OpenAPIHono()

export const balancesHandler = app.openapi(getBalancesRoute, (c) => {
  throw new Error('Not implemented')
})
