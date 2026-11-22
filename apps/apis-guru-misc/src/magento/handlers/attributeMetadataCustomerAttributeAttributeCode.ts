import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerAttributeAttributeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerAttributeAttributeCodeHandler = app.openapi(
  getV1AttributeMetadataCustomerAttributeAttributeCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
