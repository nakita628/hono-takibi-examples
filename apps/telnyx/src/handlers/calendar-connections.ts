import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCalendarConnectionsIdRoute,
  getCalendarConnectionsIdMeetingsRoute,
  getCalendarConnectionsIdRoute,
  getCalendarConnectionsRoute,
  patchCalendarConnectionsIdMeetingsMeetingIdRoute,
  patchCalendarConnectionsIdRoute,
  postCalendarConnectionsRoute,
} from '../routes'

export const getCalendarConnectionsRouteHandler: RouteHandler<
  typeof getCalendarConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCalendarConnectionsRouteHandler: RouteHandler<
  typeof postCalendarConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCalendarConnectionsIdRouteHandler: RouteHandler<
  typeof deleteCalendarConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCalendarConnectionsIdRouteHandler: RouteHandler<
  typeof getCalendarConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCalendarConnectionsIdRouteHandler: RouteHandler<
  typeof patchCalendarConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCalendarConnectionsIdMeetingsRouteHandler: RouteHandler<
  typeof getCalendarConnectionsIdMeetingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCalendarConnectionsIdMeetingsMeetingIdRouteHandler: RouteHandler<
  typeof patchCalendarConnectionsIdMeetingsMeetingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
