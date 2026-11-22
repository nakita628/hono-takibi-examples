import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualTariffIdRoute, getApiVirtualTariffRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualTariffHandler = app
  .openapi(getApiVirtualTariffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualTariffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
