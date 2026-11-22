import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerAddressCustomRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerAddressCustomHandler = app.openapi(
  getV1AttributeMetadataCustomerAddressCustomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
