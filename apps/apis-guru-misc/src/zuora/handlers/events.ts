import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsEventTriggersIdRoute,
  getEventsEventTriggersIdRoute,
  getEventsEventTriggersRoute,
  postEventsEventTriggersRoute,
  putEventsEventTriggersIdRoute,
} from '../routes'

export const getEventsEventTriggersRouteHandler: RouteHandler<
  typeof getEventsEventTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsEventTriggersRouteHandler: RouteHandler<
  typeof postEventsEventTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsEventTriggersIdRouteHandler: RouteHandler<
  typeof deleteEventsEventTriggersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsEventTriggersIdRouteHandler: RouteHandler<
  typeof getEventsEventTriggersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEventsEventTriggersIdRouteHandler: RouteHandler<
  typeof putEventsEventTriggersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
