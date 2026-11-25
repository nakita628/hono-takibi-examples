import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getThingRoute,
  patchThingRoute,
  deleteThingRoute,
  putThingRoute,
  postThingRoute,
} from '../routes'

export const getThingRouteHandler: RouteHandler<typeof getThingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchThingRouteHandler: RouteHandler<typeof patchThingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteThingRouteHandler: RouteHandler<typeof deleteThingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putThingRouteHandler: RouteHandler<typeof putThingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postThingRouteHandler: RouteHandler<typeof postThingRoute> = async (c) => {
  throw new Error('Not implemented')
}
