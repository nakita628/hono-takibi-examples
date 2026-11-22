import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualTariffConsumptionRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualTariffConsumptionHandler = app.openapi(
  getApiVirtualTariffConsumptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
