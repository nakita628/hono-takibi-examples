import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSavingsPlanRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSavingsPlanRatesHandler = app.openapi(
  postDescribeSavingsPlanRatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
