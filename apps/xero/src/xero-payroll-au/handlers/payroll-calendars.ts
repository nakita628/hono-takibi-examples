import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPayrollCalendarsPayrollCalendarIDRoute,
  getPayrollCalendarsRoute,
  postPayrollCalendarsRoute,
} from '../routes'

export const getPayrollCalendarsRouteHandler: RouteHandler<
  typeof getPayrollCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayrollCalendarsRouteHandler: RouteHandler<
  typeof postPayrollCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayrollCalendarsPayrollCalendarIDRouteHandler: RouteHandler<
  typeof getPayrollCalendarsPayrollCalendarIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
