import { OpenAPIHono } from '@hono/zod-openapi'
import { getEstimatesPriceRoute, getEstimatesTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const estimatesHandler = app
  .openapi(getEstimatesPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEstimatesTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
