import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountInfo202609ApiUsageDailyPrivateAppsRoute,
  getAccountInfo202609DetailsRoute,
} from '../routes'

export const getAccountInfo202609ApiUsageDailyPrivateAppsRouteHandler: RouteHandler<
  typeof getAccountInfo202609ApiUsageDailyPrivateAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountInfo202609DetailsRouteHandler: RouteHandler<
  typeof getAccountInfo202609DetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
