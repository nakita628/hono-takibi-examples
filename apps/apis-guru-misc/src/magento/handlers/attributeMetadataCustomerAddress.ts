import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributeMetadataCustomerAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeMetadataCustomerAddressHandler = app.openapi(
  getV1AttributeMetadataCustomerAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
