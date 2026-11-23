import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarningsOrdersIdRoute, getEarningsOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const earningsOrdersHandler = app
  .openapi(getEarningsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
