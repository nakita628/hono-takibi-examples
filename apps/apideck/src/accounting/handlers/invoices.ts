import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingInvoicesIdRoute,
  getAccountingInvoicesIdRoute,
  getAccountingInvoicesRoute,
  patchAccountingInvoicesIdRoute,
  postAccountingInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getAccountingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
