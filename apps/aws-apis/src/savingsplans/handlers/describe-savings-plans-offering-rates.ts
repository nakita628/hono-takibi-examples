import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSavingsPlansOfferingRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSavingsPlansOfferingRatesHandler = app.openapi(
  postDescribeSavingsPlansOfferingRatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
