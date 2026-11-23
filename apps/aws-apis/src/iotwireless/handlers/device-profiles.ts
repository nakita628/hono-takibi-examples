import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDeviceProfilesIdRoute,
  getDeviceProfilesIdRoute,
  getDeviceProfilesRoute,
  postDeviceProfilesRoute,
} from '../routes'

export const postDeviceProfilesRouteHandler: RouteHandler<typeof postDeviceProfilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDeviceProfilesRouteHandler: RouteHandler<typeof getDeviceProfilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDeviceProfilesIdRouteHandler: RouteHandler<
  typeof deleteDeviceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeviceProfilesIdRouteHandler: RouteHandler<
  typeof getDeviceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
