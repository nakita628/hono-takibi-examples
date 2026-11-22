import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1LogIpIdLogchangeIdRoute, getV1LogIpIpAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const dataLoggingHandler = app
  .openapi(getV1LogIpIdLogchangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
