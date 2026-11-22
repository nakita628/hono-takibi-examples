import { OpenAPIHono } from '@hono/zod-openapi'
import { postGwApiV1BalancesQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const thirdPartiesCashBalancesHandler = app.openapi(postGwApiV1BalancesQueryRoute, (c) => {
  throw new Error('Not implemented')
})
