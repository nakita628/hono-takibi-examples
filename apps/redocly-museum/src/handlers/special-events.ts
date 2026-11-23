import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSpecialEventsEventIdRoute,
  getSpecialEventsEventIdRoute,
  getSpecialEventsRoute,
  patchSpecialEventsEventIdRoute,
  postSpecialEventsRoute,
} from '../routes'

export const postSpecialEventsRouteHandler: RouteHandler<typeof postSpecialEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSpecialEventsRouteHandler: RouteHandler<typeof getSpecialEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSpecialEventsEventIdRouteHandler: RouteHandler<
  typeof getSpecialEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpecialEventsEventIdRouteHandler: RouteHandler<
  typeof patchSpecialEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpecialEventsEventIdRouteHandler: RouteHandler<
  typeof deleteSpecialEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
