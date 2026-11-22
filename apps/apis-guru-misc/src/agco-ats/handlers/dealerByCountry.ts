import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DealerByCountryRoute } from '../routes'

const app = new OpenAPIHono()

export const dealerByCountryHandler = app.openapi(getApiV2DealerByCountryRoute, (c) => {
  throw new Error('Not implemented')
})
