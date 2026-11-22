import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingBillsIdRoute,
  getAccountingBillsIdRoute,
  getAccountingBillsRoute,
  patchAccountingBillsIdRoute,
  postAccountingBillsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billsHandler = app
  .openapi(getAccountingBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingBillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingBillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingBillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
