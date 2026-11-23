import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postDepositSwitchAltCreateRoute,
  postDepositSwitchCreateRoute,
  postDepositSwitchGetRoute,
  postDepositSwitchTokenCreateRoute,
} from '../routes'

export const postDepositSwitchAltCreateRouteHandler: RouteHandler<
  typeof postDepositSwitchAltCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDepositSwitchCreateRouteHandler: RouteHandler<
  typeof postDepositSwitchCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDepositSwitchGetRouteHandler: RouteHandler<
  typeof postDepositSwitchGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDepositSwitchTokenCreateRouteHandler: RouteHandler<
  typeof postDepositSwitchTokenCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
