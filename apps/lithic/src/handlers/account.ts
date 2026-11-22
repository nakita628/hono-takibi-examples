import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1AccountsAccountTokenRoute,
  getV1AccountsAccountTokenSignalsRoute,
  getV1AccountsAccountTokenSpendLimitsRoute,
  getV1AccountsRoute,
  patchV1AccountsAccountTokenRoute,
} from '../routes'

export const getV1AccountsRouteHandler: RouteHandler<typeof getV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountTokenRouteHandler: RouteHandler<
  typeof getV1AccountsAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccountsAccountTokenRouteHandler: RouteHandler<
  typeof patchV1AccountsAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountTokenSpendLimitsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountTokenSpendLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountTokenSignalsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountTokenSignalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
