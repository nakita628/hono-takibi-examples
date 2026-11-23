import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccessRequestsRoute,
  postAccessRequestsAccessRequestGidApproveRoute,
  postAccessRequestsAccessRequestGidRejectRoute,
  postAccessRequestsRoute,
} from '../routes'

export const getAccessRequestsRouteHandler: RouteHandler<typeof getAccessRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccessRequestsRouteHandler: RouteHandler<typeof postAccessRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccessRequestsAccessRequestGidApproveRouteHandler: RouteHandler<
  typeof postAccessRequestsAccessRequestGidApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccessRequestsAccessRequestGidRejectRouteHandler: RouteHandler<
  typeof postAccessRequestsAccessRequestGidRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
