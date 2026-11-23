import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoutesIdRoute,
  getRoutesIdEventsRoute,
  getRoutesIdRoute,
  putRoutesIdRoute,
} from '../routes'

export const deleteRoutesIdRouteHandler: RouteHandler<typeof deleteRoutesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoutesIdRouteHandler: RouteHandler<typeof getRoutesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRoutesIdRouteHandler: RouteHandler<typeof putRoutesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoutesIdEventsRouteHandler: RouteHandler<typeof getRoutesIdEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
