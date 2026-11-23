import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWellKnownMercureRoute,
  getWellKnownMercureSubscriptionsRoute,
  getWellKnownMercureSubscriptionsTopicRoute,
  getWellKnownMercureSubscriptionsTopicSubscriberRoute,
  postWellKnownMercureRoute,
} from '../routes'

export const getWellKnownMercureRouteHandler: RouteHandler<
  typeof getWellKnownMercureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWellKnownMercureRouteHandler: RouteHandler<
  typeof postWellKnownMercureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellKnownMercureSubscriptionsRouteHandler: RouteHandler<
  typeof getWellKnownMercureSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellKnownMercureSubscriptionsTopicRouteHandler: RouteHandler<
  typeof getWellKnownMercureSubscriptionsTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellKnownMercureSubscriptionsTopicSubscriberRouteHandler: RouteHandler<
  typeof getWellKnownMercureSubscriptionsTopicSubscriberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
