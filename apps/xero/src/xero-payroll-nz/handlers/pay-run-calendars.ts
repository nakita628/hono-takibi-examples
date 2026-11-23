import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPayRunCalendarsPayrollCalendarIDRoute,
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

export const getPayRunCalendarsPayrollCalendarIDRouteHandler: RouteHandler<
  typeof getPayRunCalendarsPayrollCalendarIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
