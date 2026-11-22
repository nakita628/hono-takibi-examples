import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserCustomerStoresStoreIdRightsRoute } from '../routes'

const app = new OpenAPIHono()

export const customer__RightsHandler = app.openapi(
  getV2UserCustomerStoresStoreIdRightsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
