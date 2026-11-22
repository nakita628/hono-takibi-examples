import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdBillingGroupBillingGroupIdRoute,
  getOrganizationOrganizationIdBillingGroupBillingGroupIdRoute,
  getOrganizationOrganizationIdBillingGroupsRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberCsvRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberLinesRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberPdfRoute,
  getOrganizationOrganizationIdInvoiceInvoiceNumberRoute,
  getOrganizationOrganizationIdInvoicesRoute,
  postOrganizationOrganizationIdBillingGroupsRoute,
  putOrganizationOrganizationIdBillingGroupBillingGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationBillingGroupHandler = app
  .openapi(postOrganizationOrganizationIdBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdInvoiceInvoiceNumberPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
