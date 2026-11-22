import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1AmazonShippingAddressAmazonOrderReferenceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const amazonShippingAddressAmazonOrderReferenceIdHandler = app.openapi(
  putV1AmazonShippingAddressAmazonOrderReferenceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
