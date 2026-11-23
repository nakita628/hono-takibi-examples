import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShuttleJobSchedulesShuttleJobScheduleIdRoute,
  getShuttleJobSchedulesRoute,
  getShuttleJobSchedulesShuttleJobScheduleIdRoute,
  postShuttleJobSchedulesRoute,
  putShuttleJobSchedulesShuttleJobScheduleIdRoute,
} from '../routes'

export const getShuttleJobSchedulesRouteHandler: RouteHandler<
  typeof getShuttleJobSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShuttleJobSchedulesRouteHandler: RouteHandler<
  typeof postShuttleJobSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShuttleJobSchedulesShuttleJobScheduleIdRouteHandler: RouteHandler<
  typeof getShuttleJobSchedulesShuttleJobScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShuttleJobSchedulesShuttleJobScheduleIdRouteHandler: RouteHandler<
  typeof putShuttleJobSchedulesShuttleJobScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteShuttleJobSchedulesShuttleJobScheduleIdRouteHandler: RouteHandler<
  typeof deleteShuttleJobSchedulesShuttleJobScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
