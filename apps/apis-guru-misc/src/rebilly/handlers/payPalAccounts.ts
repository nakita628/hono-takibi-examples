import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaypalAccountsIdRoute,
  getPaypalAccountsRoute,
  postPaypalAccountsIdDeactivationRoute,
  postPaypalAccountsRoute,
  putPaypalAccountsIdRoute,
} from '../routes'

export const getPaypalAccountsRouteHandler: RouteHandler<typeof getPaypalAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPaypalAccountsRouteHandler: RouteHandler<typeof postPaypalAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaypalAccountsIdRouteHandler: RouteHandler<
  typeof getPaypalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaypalAccountsIdRouteHandler: RouteHandler<
  typeof putPaypalAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaypalAccountsIdDeactivationRouteHandler: RouteHandler<
  typeof postPaypalAccountsIdDeactivationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
