import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScheduleSegmentRoute,
  getScheduleIcalendarRoute,
  getScheduleRoute,
  patchScheduleSegmentRoute,
  patchScheduleSettingsRoute,
  postScheduleSegmentRoute,
} from '../routes'

export const getScheduleRouteHandler: RouteHandler<typeof getScheduleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getScheduleIcalendarRouteHandler: RouteHandler<
  typeof getScheduleIcalendarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScheduleSettingsRouteHandler: RouteHandler<
  typeof patchScheduleSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScheduleSegmentRouteHandler: RouteHandler<
  typeof postScheduleSegmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScheduleSegmentRouteHandler: RouteHandler<
  typeof patchScheduleSegmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScheduleSegmentRouteHandler: RouteHandler<
  typeof deleteScheduleSegmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
