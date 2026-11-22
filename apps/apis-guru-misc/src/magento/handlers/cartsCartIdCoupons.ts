import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsCartIdCouponsRoute, getV1CartsCartIdCouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdCouponsHandler = app
  .openapi(deleteV1CartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
