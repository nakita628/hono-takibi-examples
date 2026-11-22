import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2CustomersMyBalanceRoute,
  getV2CustomersMyBillingHistoryRoute,
  getV2CustomersMyInvoicesInvoiceUuidCsvRoute,
  getV2CustomersMyInvoicesInvoiceUuidPdfRoute,
  getV2CustomersMyInvoicesInvoiceUuidRoute,
  getV2CustomersMyInvoicesInvoiceUuidSummaryRoute,
  getV2CustomersMyInvoicesRoute,
} from '../routes'

export const getV2CustomersMyBalanceRouteHandler: RouteHandler<
  typeof getV2CustomersMyBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyBillingHistoryRouteHandler: RouteHandler<
  typeof getV2CustomersMyBillingHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidCsvRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidPdfRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidSummaryRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
