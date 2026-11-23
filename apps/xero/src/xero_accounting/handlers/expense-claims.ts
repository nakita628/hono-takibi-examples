import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExpenseClaimsExpenseClaimIDHistoryRoute,
  getExpenseClaimsExpenseClaimIDRoute,
  getExpenseClaimsRoute,
  postExpenseClaimsExpenseClaimIDRoute,
  putExpenseClaimsExpenseClaimIDHistoryRoute,
  putExpenseClaimsRoute,
} from '../routes'

export const getExpenseClaimsRouteHandler: RouteHandler<typeof getExpenseClaimsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putExpenseClaimsRouteHandler: RouteHandler<typeof putExpenseClaimsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExpenseClaimsExpenseClaimIDRouteHandler: RouteHandler<
  typeof getExpenseClaimsExpenseClaimIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExpenseClaimsExpenseClaimIDRouteHandler: RouteHandler<
  typeof postExpenseClaimsExpenseClaimIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExpenseClaimsExpenseClaimIDHistoryRouteHandler: RouteHandler<
  typeof getExpenseClaimsExpenseClaimIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putExpenseClaimsExpenseClaimIDHistoryRouteHandler: RouteHandler<
  typeof putExpenseClaimsExpenseClaimIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
