import { OpenAPIHono } from '@hono/zod-openapi'
import { getEcommerceOrdersIdRoute, getEcommerceOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getEcommerceOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
