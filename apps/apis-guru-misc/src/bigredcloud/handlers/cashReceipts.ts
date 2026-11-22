import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CashReceiptsIdRoute,
  getV1CashReceiptsIdRoute,
  getV1CashReceiptsRoute,
  postV1CashReceiptsRoute,
  putV1CashReceiptsBatchRoute,
  putV1CashReceiptsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cashReceiptsHandler = app
  .openapi(getV1CashReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CashReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashReceiptsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CashReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
