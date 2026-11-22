import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSavingsPlanRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeSavingsPlanRatesHandler = app.openapi(
  postDescribeSavingsPlanRatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
