import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountsPaymentMethodsRoute,
  getAccountsRoute,
  postAccountsPasswordRoute,
  postAccountsRoute,
  postAccountsSettingsRoute,
  postAccountsSignInRoute,
  putAccountsRoute,
  putAccountsUpdatePasswordRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsRouteHandler: RouteHandler<typeof putAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsPasswordRouteHandler: RouteHandler<
  typeof postAccountsPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsPaymentMethodsRouteHandler: RouteHandler<
  typeof getAccountsPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsSettingsRouteHandler: RouteHandler<
  typeof postAccountsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsSignInRouteHandler: RouteHandler<typeof postAccountsSignInRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putAccountsUpdatePasswordRouteHandler: RouteHandler<
  typeof putAccountsUpdatePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
