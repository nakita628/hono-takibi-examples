import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPurchaseInvoicesGuidPackagingPackageVersionRoute,
  getPurchaseInvoicesGuidPackagingRoute,
  getPurchaseInvoicesGuidRoute,
} from '../routes'

export const getPurchaseInvoicesGuidRouteHandler: RouteHandler<
  typeof getPurchaseInvoicesGuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPurchaseInvoicesGuidPackagingRouteHandler: RouteHandler<
  typeof getPurchaseInvoicesGuidPackagingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPurchaseInvoicesGuidPackagingPackageVersionRouteHandler: RouteHandler<
  typeof getPurchaseInvoicesGuidPackagingPackageVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
