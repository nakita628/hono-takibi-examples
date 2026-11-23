import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSchedulesNameRoute,
  getSchedulesNameRoute,
  getSchedulesRoute,
  postSchedulesRoute,
  putSchedulesNameRoute,
} from '../routes'

export const postSchedulesRouteHandler: RouteHandler<typeof postSchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchedulesRouteHandler: RouteHandler<typeof getSchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSchedulesNameRouteHandler: RouteHandler<
  typeof deleteSchedulesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchedulesNameRouteHandler: RouteHandler<typeof getSchedulesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSchedulesNameRouteHandler: RouteHandler<typeof putSchedulesNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
