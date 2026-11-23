import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsEventIdRoute,
  deleteEventsRoute,
  getEventsEventIdRoute,
  getEventsRoute,
} from '../routes'

export const deleteEventsRouteHandler: RouteHandler<typeof deleteEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsEventIdRouteHandler: RouteHandler<
  typeof deleteEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsEventIdRouteHandler: RouteHandler<typeof getEventsEventIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
