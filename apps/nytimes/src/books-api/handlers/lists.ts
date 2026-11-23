import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getListsBestSellersHistoryJsonRoute,
  getListsDateListJsonRoute,
  getListsNamesFormatRoute,
  getListsOverviewFormatRoute,
} from '../routes'

export const getListsBestSellersHistoryJsonRouteHandler: RouteHandler<
  typeof getListsBestSellersHistoryJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsNamesFormatRouteHandler: RouteHandler<
  typeof getListsNamesFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsOverviewFormatRouteHandler: RouteHandler<
  typeof getListsOverviewFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsDateListJsonRouteHandler: RouteHandler<
  typeof getListsDateListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
