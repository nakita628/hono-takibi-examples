import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountBalancesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountBalancesHandler = app.openapi(getAccountBalancesRoute, (c) => {
  throw new Error('Not implemented')
})
