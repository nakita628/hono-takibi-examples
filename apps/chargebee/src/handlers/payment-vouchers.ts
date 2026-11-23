import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentVouchersPaymentVoucherIdRoute, postPaymentVouchersRoute } from '../routes'

export const getPaymentVouchersPaymentVoucherIdRouteHandler: RouteHandler<
  typeof getPaymentVouchersPaymentVoucherIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentVouchersRouteHandler: RouteHandler<
  typeof postPaymentVouchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
