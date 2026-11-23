import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensRoute,
  getV3VaultSetupTokensIdRoute,
  postV3VaultPaymentTokensRoute,
  postV3VaultSetupTokensRoute,
} from '../routes'

export const postV3VaultPaymentTokensRouteHandler: RouteHandler<
  typeof postV3VaultPaymentTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3VaultPaymentTokensRouteHandler: RouteHandler<
  typeof getV3VaultPaymentTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3VaultPaymentTokensIdRouteHandler: RouteHandler<
  typeof getV3VaultPaymentTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV3VaultPaymentTokensIdRouteHandler: RouteHandler<
  typeof deleteV3VaultPaymentTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3VaultSetupTokensRouteHandler: RouteHandler<
  typeof postV3VaultSetupTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3VaultSetupTokensIdRouteHandler: RouteHandler<
  typeof getV3VaultSetupTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
