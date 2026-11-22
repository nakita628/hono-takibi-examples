import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBillingGroupBillingGroupIdRoute,
  getBillingGroupBillingGroupIdCreditsRoute,
  getBillingGroupBillingGroupIdEventsRoute,
  getBillingGroupBillingGroupIdInvoiceInvoiceNumberCsvRoute,
  getBillingGroupBillingGroupIdInvoiceInvoiceNumberDownloadCookieRoute,
  getBillingGroupBillingGroupIdInvoiceInvoiceNumberLinesRoute,
  getBillingGroupBillingGroupIdInvoiceInvoiceNumberRoute,
  getBillingGroupBillingGroupIdInvoiceRoute,
  getBillingGroupBillingGroupIdProjectsRoute,
  getBillingGroupBillingGroupIdRoute,
  getBillingGroupRoute,
  getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownloadRoute,
  getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownRoute,
  postBillingGroupBillingGroupIdCreditsRoute,
  postBillingGroupBillingGroupIdProjectAssignProjectRoute,
  postBillingGroupBillingGroupIdProjectsAssignRoute,
  postBillingGroupRoute,
  putBillingGroupBillingGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingGroupHandler = app
  .openapi(postBillingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupBillingGroupIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillingGroupBillingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdBillingGroupBillingGroupIdFeeBreakdownDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getBillingGroupBillingGroupIdInvoiceInvoiceNumberCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdInvoiceInvoiceNumberDownloadCookieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdInvoiceInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdInvoiceInvoiceNumberLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupBillingGroupIdProjectAssignProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupBillingGroupIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupBillingGroupIdProjectsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
