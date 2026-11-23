import { OpenAPIHono } from '@hono/zod-openapi'
import { getShippingProvidersRoute, getShippingRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const shippingHandler = app
  .openapi(getShippingProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShippingRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
