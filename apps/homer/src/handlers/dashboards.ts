import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDashboardsDashboardIdRoute,
  getDashboardsDashboardIdRoute,
  getDashboardsRoute,
  postDashboardsRoute,
  putDashboardsDashboardIdRoute,
} from '../routes'

export const getDashboardsRouteHandler: RouteHandler<typeof getDashboardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDashboardsRouteHandler: RouteHandler<typeof postDashboardsRoute> = async (c) => {
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

export const deleteDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof deleteDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
