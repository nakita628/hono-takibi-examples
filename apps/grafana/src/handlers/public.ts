import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPublicDashboardsAccessTokenAnnotationsRoute,
  getPublicDashboardsAccessTokenRoute,
  postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute,
} from '../routes'

export const getPublicDashboardsAccessTokenRouteHandler: RouteHandler<
  typeof getPublicDashboardsAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublicDashboardsAccessTokenAnnotationsRouteHandler: RouteHandler<
  typeof getPublicDashboardsAccessTokenAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPublicDashboardsAccessTokenPanelsPanelIdQueryRouteHandler: RouteHandler<
  typeof postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
