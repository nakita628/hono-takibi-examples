import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeocodeAddressRoute, getGeocodeReverseRoute, getIpInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const geolocationHandler = app
  .openapi(getGeocodeAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeocodeReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
