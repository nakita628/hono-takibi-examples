import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
