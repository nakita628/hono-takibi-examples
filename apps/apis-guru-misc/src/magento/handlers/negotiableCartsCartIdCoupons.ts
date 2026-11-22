import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1NegotiableCartsCartIdCouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdCouponsHandler = app.openapi(
  deleteV1NegotiableCartsCartIdCouponsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
