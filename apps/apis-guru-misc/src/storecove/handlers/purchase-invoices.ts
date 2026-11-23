import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPurchaseInvoicesGuidPackagingPackageVersionRoute,
  getPurchaseInvoicesGuidPackagingRoute,
  getPurchaseInvoicesGuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseInvoicesHandler = app
  .openapi(getPurchaseInvoicesGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseInvoicesGuidPackagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseInvoicesGuidPackagingPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
