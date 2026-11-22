import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSavingsPlansOfferingsRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeSavingsPlansOfferingsHandler = app.openapi(
  postDescribeSavingsPlansOfferingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
