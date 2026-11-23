import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscriptionsIdRoute,
  getSubscriptionsIdEventsRoute,
  getSubscriptionsIdRoute,
  getSubscriptionsRoute,
  postSubscriptionsRoute,
  putSubscriptionsIdRoute,
} from '../routes'

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsRouteHandler: RouteHandler<typeof postSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSubscriptionsIdRouteHandler: RouteHandler<
  typeof deleteSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsIdRouteHandler: RouteHandler<typeof getSubscriptionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSubscriptionsIdRouteHandler: RouteHandler<typeof putSubscriptionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsIdEventsRouteHandler: RouteHandler<
  typeof getSubscriptionsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
