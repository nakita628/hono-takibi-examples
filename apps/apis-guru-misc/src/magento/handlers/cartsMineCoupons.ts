import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsMineCouponsRoute, getV1CartsMineCouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCouponsHandler = app
  .openapi(deleteV1CartsMineCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
