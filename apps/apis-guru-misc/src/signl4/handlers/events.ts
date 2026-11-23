import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventsEventIdOverviewRoute,
  getEventsEventIdParametersRoute,
  postEventsPagedRoute,
} from '../routes'

export const postEventsPagedRouteHandler: RouteHandler<typeof postEventsPagedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsEventIdOverviewRouteHandler: RouteHandler<
  typeof getEventsEventIdOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsEventIdParametersRouteHandler: RouteHandler<
  typeof getEventsEventIdParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
