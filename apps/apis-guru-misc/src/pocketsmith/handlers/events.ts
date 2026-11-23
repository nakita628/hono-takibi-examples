import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteEventsIdRoute, getEventsIdRoute, putEventsIdRoute } from '../routes'

export const deleteEventsIdRouteHandler: RouteHandler<typeof deleteEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdRouteHandler: RouteHandler<typeof getEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putEventsIdRouteHandler: RouteHandler<typeof putEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
