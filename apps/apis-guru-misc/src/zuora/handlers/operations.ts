import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OperationsBillingPreviewRoute, postV1OperationsInvoiceCollectRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(postV1OperationsBillingPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsInvoiceCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
