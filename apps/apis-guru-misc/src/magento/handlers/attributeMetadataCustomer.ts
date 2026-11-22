import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerHandler = app.openapi(
  getV1AttributeMetadataCustomerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
