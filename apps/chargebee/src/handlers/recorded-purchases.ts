import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRecordedPurchasesRecordedPurchaseIdRoute,
  postRecordedPurchasesRoute,
} from '../routes'

export const getRecordedPurchasesRecordedPurchaseIdRouteHandler: RouteHandler<
  typeof getRecordedPurchasesRecordedPurchaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRecordedPurchasesRouteHandler: RouteHandler<
  typeof postRecordedPurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
