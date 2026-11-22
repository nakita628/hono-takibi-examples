import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCreditsConsumptionIdRoute, getApiCreditsConsumptionRoute } from '../routes'

const app = new OpenAPIHono()

export const creditsConsumptionHandler = app
  .openapi(getApiCreditsConsumptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditsConsumptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
