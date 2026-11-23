import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchBoardsRoute, getSearchPartnerPinsRoute, getSearchPinsRoute } from '../routes'

export const getSearchBoardsRouteHandler: RouteHandler<typeof getSearchBoardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchPartnerPinsRouteHandler: RouteHandler<
  typeof getSearchPartnerPinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchPinsRouteHandler: RouteHandler<typeof getSearchPinsRoute> = async (c) => {
  throw new Error('Not implemented')
}
