import type { RouteHandler } from '@hono/zod-openapi'
import type { getCardsCardIdRoute, getCardsRoute } from '../routes'

export const getCardsRouteHandler: RouteHandler<typeof getCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardsCardIdRouteHandler: RouteHandler<typeof getCardsCardIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
