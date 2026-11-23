import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScheduleScheduleIdRoute,
  getScheduleScheduleIdRoute,
  patchScheduleScheduleIdRoute,
} from '../routes'

export const getScheduleScheduleIdRouteHandler: RouteHandler<
  typeof getScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScheduleScheduleIdRouteHandler: RouteHandler<
  typeof patchScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScheduleScheduleIdRouteHandler: RouteHandler<
  typeof deleteScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
