import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBoundCongressionalRecordRoute,
  getBoundCongressionalRecordYearMonthDayRoute,
  getBoundCongressionalRecordYearMonthRoute,
  getBoundCongressionalRecordYearRoute,
} from '../routes'

export const getBoundCongressionalRecordRouteHandler: RouteHandler<
  typeof getBoundCongressionalRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoundCongressionalRecordYearRouteHandler: RouteHandler<
  typeof getBoundCongressionalRecordYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoundCongressionalRecordYearMonthRouteHandler: RouteHandler<
  typeof getBoundCongressionalRecordYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoundCongressionalRecordYearMonthDayRouteHandler: RouteHandler<
  typeof getBoundCongressionalRecordYearMonthDayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
