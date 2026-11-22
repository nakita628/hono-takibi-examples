import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineTotalsInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineTotalsInformationHandler = app.openapi(
  postV1CartsMineTotalsInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
