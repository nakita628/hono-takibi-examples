import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePartnerAccountsPartnerAccountIdPartnerTypeRoute,
  getPartnerAccountsPartnerAccountIdPartnerTypeRoute,
  getPartnerAccountsRoute,
  patchPartnerAccountsPartnerAccountIdPartnerTypeRoute,
  postPartnerAccountsRoute,
} from '../routes'

export const postPartnerAccountsRouteHandler: RouteHandler<
  typeof postPartnerAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPartnerAccountsRouteHandler: RouteHandler<typeof getPartnerAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePartnerAccountsPartnerAccountIdPartnerTypeRouteHandler: RouteHandler<
  typeof deletePartnerAccountsPartnerAccountIdPartnerTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPartnerAccountsPartnerAccountIdPartnerTypeRouteHandler: RouteHandler<
  typeof getPartnerAccountsPartnerAccountIdPartnerTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPartnerAccountsPartnerAccountIdPartnerTypeRouteHandler: RouteHandler<
  typeof patchPartnerAccountsPartnerAccountIdPartnerTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
