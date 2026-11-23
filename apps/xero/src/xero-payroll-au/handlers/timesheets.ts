import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTimesheetsRoute,
  getTimesheetsTimesheetIDRoute,
  postTimesheetsRoute,
  postTimesheetsTimesheetIDRoute,
} from '../routes'

export const getTimesheetsRouteHandler: RouteHandler<typeof getTimesheetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimesheetsRouteHandler: RouteHandler<typeof postTimesheetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimesheetsTimesheetIDRouteHandler: RouteHandler<
  typeof getTimesheetsTimesheetIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimesheetsTimesheetIDRouteHandler: RouteHandler<
  typeof postTimesheetsTimesheetIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
