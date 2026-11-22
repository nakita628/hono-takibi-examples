import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1AmazonBillingAddressAmazonOrderReferenceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const amazonBillingAddressAmazonOrderReferenceIdHandler = app.openapi(
  putV1AmazonBillingAddressAmazonOrderReferenceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
