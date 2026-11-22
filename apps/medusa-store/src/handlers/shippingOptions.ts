import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreShippingOptionsRoute, postStoreShippingOptionsIdCalculateRoute } from '../routes'

const app = new OpenAPIHono()

export const shippingOptionsHandler = app
  .openapi(getStoreShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreShippingOptionsIdCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
