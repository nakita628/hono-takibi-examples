import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTenantsTenantIdCustomNsCustomNsIdRoute,
  getTenantsTenantIdAccountsRoute,
  getTenantsTenantIdCustomNsRoute,
  postTenantsTenantIdCustomNsRoute,
} from '../routes'

export const getTenantsTenantIdAccountsRouteHandler: RouteHandler<
  typeof getTenantsTenantIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTenantsTenantIdCustomNsRouteHandler: RouteHandler<
  typeof getTenantsTenantIdCustomNsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTenantsTenantIdCustomNsRouteHandler: RouteHandler<
  typeof postTenantsTenantIdCustomNsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTenantsTenantIdCustomNsCustomNsIdRouteHandler: RouteHandler<
  typeof deleteTenantsTenantIdCustomNsCustomNsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
