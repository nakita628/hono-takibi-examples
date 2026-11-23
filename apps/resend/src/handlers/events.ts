import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsIdentifierRoute,
  getEventsIdentifierRoute,
  getEventsRoute,
  patchEventsIdentifierRoute,
  postEventsRoute,
  postEventsSendRoute,
} from '../routes'

export const postEventsRouteHandler: RouteHandler<typeof postEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsSendRouteHandler: RouteHandler<typeof postEventsSendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdentifierRouteHandler: RouteHandler<
  typeof getEventsIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventsIdentifierRouteHandler: RouteHandler<
  typeof patchEventsIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsIdentifierRouteHandler: RouteHandler<
  typeof deleteEventsIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
