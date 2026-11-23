import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsubConduitsRoute,
  deleteEventsubSubscriptionsRoute,
  getEventsubConduitsRoute,
  getEventsubConduitsShardsRoute,
  getEventsubSubscriptionsRoute,
  patchEventsubConduitsRoute,
  patchEventsubConduitsShardsRoute,
  postEventsubConduitsRoute,
  postEventsubSubscriptionsRoute,
} from '../routes'

export const getEventsubConduitsRouteHandler: RouteHandler<
  typeof getEventsubConduitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsubConduitsRouteHandler: RouteHandler<
  typeof postEventsubConduitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventsubConduitsRouteHandler: RouteHandler<
  typeof patchEventsubConduitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsubConduitsRouteHandler: RouteHandler<
  typeof deleteEventsubConduitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsubConduitsShardsRouteHandler: RouteHandler<
  typeof getEventsubConduitsShardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventsubConduitsShardsRouteHandler: RouteHandler<
  typeof patchEventsubConduitsShardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsubSubscriptionsRouteHandler: RouteHandler<
  typeof postEventsubSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsubSubscriptionsRouteHandler: RouteHandler<
  typeof deleteEventsubSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsubSubscriptionsRouteHandler: RouteHandler<
  typeof getEventsubSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
