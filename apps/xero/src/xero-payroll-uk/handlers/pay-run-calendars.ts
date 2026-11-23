import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPayRunCalendarsPayRunCalendarIDRoute,
  getPayRunCalendarsRoute,
  postPayRunCalendarsRoute,
} from '../routes'

export const getPayRunCalendarsRouteHandler: RouteHandler<typeof getPayRunCalendarsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPayRunCalendarsRouteHandler: RouteHandler<
  typeof postPayRunCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayRunCalendarsPayRunCalendarIDRouteHandler: RouteHandler<
  typeof getPayRunCalendarsPayRunCalendarIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
