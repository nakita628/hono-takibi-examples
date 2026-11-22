import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CashInterestAprTiersRoute } from '../routes'

const app = new OpenAPIHono()

export const cashInterestHandler = app.openapi(getV1CashInterestAprTiersRoute, (c) => {
  throw new Error('Not implemented')
})
