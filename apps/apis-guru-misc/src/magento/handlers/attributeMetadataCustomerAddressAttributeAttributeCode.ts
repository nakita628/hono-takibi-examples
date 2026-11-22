import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerAddressAttributeAttributeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerAddressAttributeAttributeCodeHandler = app.openapi(
  getV1AttributeMetadataCustomerAddressAttributeAttributeCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
