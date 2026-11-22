import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NegotiableCartsCartIdTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdTotalsHandler = app.openapi(
  getV1NegotiableCartsCartIdTotalsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
