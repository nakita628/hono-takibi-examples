import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBillsJurisdictionSessionBillIdRoute,
  getBillsOcdBillOpenstatesBillIdRoute,
  getBillsRoute,
} from '../routes'

export const getBillsRouteHandler: RouteHandler<typeof getBillsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillsOcdBillOpenstatesBillIdRouteHandler: RouteHandler<
  typeof getBillsOcdBillOpenstatesBillIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillsJurisdictionSessionBillIdRouteHandler: RouteHandler<
  typeof getBillsJurisdictionSessionBillIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
