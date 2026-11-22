import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerFormFormCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerFormFormCodeHandler = app.openapi(
  getV1AttributeMetadataCustomerFormFormCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
