import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUserCreateRoute,
  postUserFinancialDataRefreshRoute,
  postUserGetRoute,
  postUserIdentityRemoveRoute,
  postUserItemsAssociateRoute,
  postUserItemsGetRoute,
  postUserItemsRemoveRoute,
  postUserProductsTerminateRoute,
  postUserRemoveRoute,
  postUserThirdPartyTokenCreateRoute,
  postUserThirdPartyTokenRemoveRoute,
  postUserTransactionsRefreshRoute,
  postUserTransferLimitsGetRoute,
  postUserUpdateRoute,
} from '../routes'

export const postUserTransactionsRefreshRouteHandler: RouteHandler<
  typeof postUserTransactionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserFinancialDataRefreshRouteHandler: RouteHandler<
  typeof postUserFinancialDataRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCreateRouteHandler: RouteHandler<typeof postUserCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserGetRouteHandler: RouteHandler<typeof postUserGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserIdentityRemoveRouteHandler: RouteHandler<
  typeof postUserIdentityRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserUpdateRouteHandler: RouteHandler<typeof postUserUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserRemoveRouteHandler: RouteHandler<typeof postUserRemoveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserProductsTerminateRouteHandler: RouteHandler<
  typeof postUserProductsTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserTransferLimitsGetRouteHandler: RouteHandler<
  typeof postUserTransferLimitsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserItemsGetRouteHandler: RouteHandler<typeof postUserItemsGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserItemsAssociateRouteHandler: RouteHandler<
  typeof postUserItemsAssociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserItemsRemoveRouteHandler: RouteHandler<
  typeof postUserItemsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserThirdPartyTokenCreateRouteHandler: RouteHandler<
  typeof postUserThirdPartyTokenCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserThirdPartyTokenRemoveRouteHandler: RouteHandler<
  typeof postUserThirdPartyTokenRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
