import { OpenAPIHono } from '@hono/zod-openapi'
import { getDaysSupplyRoute, getDaysToSellRoute } from '../routes'

const app = new OpenAPIHono()

export const supplyDataHandler = app
  .openapi(getDaysSupplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDaysToSellRoute, (c) => {
    throw new Error('Not implemented')
  })
