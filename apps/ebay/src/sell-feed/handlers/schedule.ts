import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScheduleScheduleIdRoute,
  getScheduleRoute,
  getScheduleScheduleIdDownloadResultFileRoute,
  getScheduleScheduleIdRoute,
  postScheduleRoute,
  putScheduleScheduleIdRoute,
} from '../routes'

export const getScheduleRouteHandler: RouteHandler<typeof getScheduleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postScheduleRouteHandler: RouteHandler<typeof postScheduleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScheduleScheduleIdRouteHandler: RouteHandler<
  typeof deleteScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScheduleScheduleIdRouteHandler: RouteHandler<
  typeof getScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putScheduleScheduleIdRouteHandler: RouteHandler<
  typeof putScheduleScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScheduleScheduleIdDownloadResultFileRouteHandler: RouteHandler<
  typeof getScheduleScheduleIdDownloadResultFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
