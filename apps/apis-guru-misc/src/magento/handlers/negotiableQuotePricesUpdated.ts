import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableQuotePricesUpdatedRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuotePricesUpdatedHandler = app.openapi(
  postV1NegotiableQuotePricesUpdatedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
