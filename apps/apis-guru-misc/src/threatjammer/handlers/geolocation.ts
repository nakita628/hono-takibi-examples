import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GeoIpAddressRoute, postV1GeoCsvRoute, postV1GeoRoute } from '../routes'

const app = new OpenAPIHono()

export const geolocationHandler = app
  .openapi(postV1GeoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GeoCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GeoIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
