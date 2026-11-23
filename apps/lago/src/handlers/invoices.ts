import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInvoicesLagoIdRoute,
  getInvoicesLagoIdRoute,
  getInvoicesRoute,
  postInvoicesLagoIdDownloadRoute,
  postInvoicesLagoIdDownloadXmlRoute,
  postInvoicesLagoIdLoseDisputeRoute,
  postInvoicesLagoIdPaymentUrlRoute,
  postInvoicesLagoIdRetryPaymentRoute,
  postInvoicesLagoIdRetryRoute,
  postInvoicesLagoIdVoidRoute,
  postInvoicesPreviewRoute,
  postInvoicesRoute,
  putInvoicesLagoIdFinalizeRoute,
  putInvoicesLagoIdRefreshRoute,
  putInvoicesLagoIdRoute,
} from '../routes'

export const postInvoicesRouteHandler: RouteHandler<typeof postInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvoicesRouteHandler: RouteHandler<typeof getInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvoicesLagoIdRouteHandler: RouteHandler<typeof putInvoicesLagoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInvoicesLagoIdRouteHandler: RouteHandler<typeof getInvoicesLagoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteInvoicesLagoIdRouteHandler: RouteHandler<
  typeof deleteInvoicesLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdDownloadRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdDownloadXmlRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdDownloadXmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvoicesLagoIdFinalizeRouteHandler: RouteHandler<
  typeof putInvoicesLagoIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdLoseDisputeRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdLoseDisputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvoicesLagoIdRefreshRouteHandler: RouteHandler<
  typeof putInvoicesLagoIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdRetryRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdPaymentUrlRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdPaymentUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesPreviewRouteHandler: RouteHandler<
  typeof postInvoicesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdRetryPaymentRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdRetryPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesLagoIdVoidRouteHandler: RouteHandler<
  typeof postInvoicesLagoIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
