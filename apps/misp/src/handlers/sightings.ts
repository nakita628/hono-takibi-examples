import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSightingsIndexEventIdRoute,
  postSightingsAddAttributeIdRoute,
  postSightingsAddRoute,
  postSightingsDeleteSightingIdRoute,
} from '../routes'

export const getSightingsIndexEventIdRouteHandler: RouteHandler<
  typeof getSightingsIndexEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSightingsAddRouteHandler: RouteHandler<typeof postSightingsAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSightingsAddAttributeIdRouteHandler: RouteHandler<
  typeof postSightingsAddAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSightingsDeleteSightingIdRouteHandler: RouteHandler<
  typeof postSightingsDeleteSightingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
