import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiOrdersPvtDocumentOrderIdRoute,
  postApiOrdersExtendsearchOrdersRoute,
  postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute,
  postApiOrdersPvtDocumentOrderIdCancelRoute,
  postApiOrdersPvtDocumentOrderIdInvoicesRoute,
  postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute,
} from '../routes'

export const postApiOrdersExtendsearchOrdersRouteHandler: RouteHandler<
  typeof postApiOrdersExtendsearchOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrdersPvtDocumentOrderIdRouteHandler: RouteHandler<
  typeof getApiOrdersPvtDocumentOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrdersPvtDocumentOrderIdActionsStartHandlingRouteHandler: RouteHandler<
  typeof postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrdersPvtDocumentOrderIdCancelRouteHandler: RouteHandler<
  typeof postApiOrdersPvtDocumentOrderIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrdersPvtDocumentOrderIdInvoicesRouteHandler: RouteHandler<
  typeof postApiOrdersPvtDocumentOrderIdInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRouteHandler: RouteHandler<
  typeof postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
