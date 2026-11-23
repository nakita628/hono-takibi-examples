import { OpenAPIHono } from '@hono/zod-openapi'
import { getCarDealerInventoryActiveRoute, getCarRecallVinRoute } from '../routes'

const app = new OpenAPIHono()

export const carHandler = app
  .openapi(getCarDealerInventoryActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCarRecallVinRoute, (c) => {
    throw new Error('Not implemented')
  })
