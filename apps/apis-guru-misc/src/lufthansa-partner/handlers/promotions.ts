import { OpenAPIHono } from '@hono/zod-openapi'
import { getPromotionsPriceoffersFlightsOndOriginDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionsHandler = app.openapi(
  getPromotionsPriceoffersFlightsOndOriginDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
