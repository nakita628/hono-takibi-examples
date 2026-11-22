import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMiscCulturesRoute, getApiMiscRandomAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const miscHandler = app
  .openapi(getApiMiscCulturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMiscRandomAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
