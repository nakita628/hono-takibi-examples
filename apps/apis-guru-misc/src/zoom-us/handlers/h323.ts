import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteH323DevicesDeviceIdRoute,
  getH323DevicesRoute,
  patchH323DevicesDeviceIdRoute,
  postH323DevicesRoute,
} from '../routes'

export const getH323DevicesRouteHandler: RouteHandler<typeof getH323DevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postH323DevicesRouteHandler: RouteHandler<typeof postH323DevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteH323DevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteH323DevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchH323DevicesDeviceIdRouteHandler: RouteHandler<
  typeof patchH323DevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
