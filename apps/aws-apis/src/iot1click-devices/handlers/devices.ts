import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute,
  getDevicesDeviceIdMethodsRoute,
  getDevicesDeviceIdRoute,
  getDevicesRoute,
  postDevicesDeviceIdMethodsRoute,
  putDevicesDeviceIdFinalizeClaimRoute,
  putDevicesDeviceIdInitiateClaimRoute,
  putDevicesDeviceIdStateRoute,
  putDevicesDeviceIdUnclaimRoute,
} from '../routes'

export const getDevicesDeviceIdRouteHandler: RouteHandler<typeof getDevicesDeviceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDevicesDeviceIdFinalizeClaimRouteHandler: RouteHandler<
  typeof putDevicesDeviceIdFinalizeClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdMethodsRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesDeviceIdMethodsRouteHandler: RouteHandler<
  typeof postDevicesDeviceIdMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesDeviceIdInitiateClaimRouteHandler: RouteHandler<
  typeof putDevicesDeviceIdInitiateClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesDeviceIdEventsFromTimeStampToTimeStampRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesDeviceIdUnclaimRouteHandler: RouteHandler<
  typeof putDevicesDeviceIdUnclaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesDeviceIdStateRouteHandler: RouteHandler<
  typeof putDevicesDeviceIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
