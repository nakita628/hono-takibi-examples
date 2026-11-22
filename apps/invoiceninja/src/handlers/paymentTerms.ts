import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PaymentTermsCreateRoute,
  getApiV1PaymentTermsIdEditRoute,
  getApiV1PaymentTermsIdRoute,
  getApiV1PaymentTermsRoute,
  postApiV1PaymentTermsBulkRoute,
  postApiV1PaymentTermsRoute,
  putApiV1PaymentTermsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentTermsHandler = app
  .openapi(getApiV1PaymentTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PaymentTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentTermsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentTermsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
