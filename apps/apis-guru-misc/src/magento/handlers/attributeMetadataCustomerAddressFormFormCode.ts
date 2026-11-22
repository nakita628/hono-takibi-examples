import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerAddressFormFormCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerAddressFormFormCodeHandler = app.openapi(
  getV1AttributeMetadataCustomerAddressFormFormCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
