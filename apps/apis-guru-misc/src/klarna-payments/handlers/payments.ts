import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentsV1AuthorizationsAuthorizationTokenRoute,
  getPaymentsV1SessionsSessionIdRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute,
  postPaymentsV1SessionsRoute,
  postPaymentsV1SessionsSessionIdRoute,
} from '../routes'

export const deletePaymentsV1AuthorizationsAuthorizationTokenRouteHandler: RouteHandler<
  typeof deletePaymentsV1AuthorizationsAuthorizationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRouteHandler: RouteHandler<
  typeof postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsV1AuthorizationsAuthorizationTokenOrderRouteHandler: RouteHandler<
  typeof postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsV1SessionsRouteHandler: RouteHandler<
  typeof postPaymentsV1SessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsV1SessionsSessionIdRouteHandler: RouteHandler<
  typeof getPaymentsV1SessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsV1SessionsSessionIdRouteHandler: RouteHandler<
  typeof postPaymentsV1SessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
