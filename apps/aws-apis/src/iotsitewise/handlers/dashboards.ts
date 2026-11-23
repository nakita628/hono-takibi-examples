import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDashboardsDashboardIdRoute,
  getDashboardsDashboardIdRoute,
  postDashboardsRoute,
  putDashboardsDashboardIdRoute,
} from '../routes'

export const postDashboardsRouteHandler: RouteHandler<typeof postDashboardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof deleteDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof getDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof putDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
