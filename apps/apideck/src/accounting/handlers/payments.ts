import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingPaymentsIdRoute,
  getAccountingPaymentsIdRoute,
  getAccountingPaymentsRoute,
  patchAccountingPaymentsIdRoute,
  postAccountingPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getAccountingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
