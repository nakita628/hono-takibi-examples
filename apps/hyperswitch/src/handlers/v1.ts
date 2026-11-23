import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersReferenceMerchantReferenceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1CustomersReferenceMerchantReferenceIdRoute, (c) => {
  throw new Error('Not implemented')
})
