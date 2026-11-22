import { OpenAPIHono } from '@hono/zod-openapi'
import { getMempoolAddressesAddressRoute, getMempoolHashRoute, getMempoolRoute } from '../routes'

const app = new OpenAPIHono()

export const cardanoMempoolHandler = app
  .openapi(getMempoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMempoolHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMempoolAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
