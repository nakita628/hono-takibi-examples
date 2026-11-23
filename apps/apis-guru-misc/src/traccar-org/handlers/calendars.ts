import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCalendarsIdRoute,
  getCalendarsRoute,
  postCalendarsRoute,
  putCalendarsIdRoute,
} from '../routes'

export const getCalendarsRouteHandler: RouteHandler<typeof getCalendarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCalendarsRouteHandler: RouteHandler<typeof postCalendarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCalendarsIdRouteHandler: RouteHandler<typeof deleteCalendarsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCalendarsIdRouteHandler: RouteHandler<typeof putCalendarsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
