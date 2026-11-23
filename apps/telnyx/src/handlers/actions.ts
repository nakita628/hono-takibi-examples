import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionsPurchaseEsimsRoute, postActionsRegisterSimCardsRoute } from '../routes'

export const postActionsPurchaseEsimsRouteHandler: RouteHandler<
  typeof postActionsPurchaseEsimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionsRegisterSimCardsRouteHandler: RouteHandler<
  typeof postActionsRegisterSimCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
