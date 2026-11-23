import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDigitalWalletTokensDigitalWalletTokenIdRoute,
  getDigitalWalletTokensRoute,
} from '../routes'

export const getDigitalWalletTokensRouteHandler: RouteHandler<
  typeof getDigitalWalletTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDigitalWalletTokensDigitalWalletTokenIdRouteHandler: RouteHandler<
  typeof getDigitalWalletTokensDigitalWalletTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
