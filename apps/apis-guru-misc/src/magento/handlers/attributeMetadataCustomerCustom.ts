import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerCustomRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerCustomHandler = app.openapi(
  getV1AttributeMetadataCustomerCustomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
