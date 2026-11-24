import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFilePaymentsFilePaymentIdPaymentDetailsRoute,
  getFilePaymentsFilePaymentIdReportFileRoute,
  getFilePaymentsFilePaymentIdRoute,
  postFilePaymentsRoute,
} from '../routes'

export const postFilePaymentsRouteHandler: RouteHandler<typeof postFilePaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilePaymentsFilePaymentIdRouteHandler: RouteHandler<
  typeof getFilePaymentsFilePaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilePaymentsFilePaymentIdPaymentDetailsRouteHandler: RouteHandler<
  typeof getFilePaymentsFilePaymentIdPaymentDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilePaymentsFilePaymentIdReportFileRouteHandler: RouteHandler<
  typeof getFilePaymentsFilePaymentIdReportFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
