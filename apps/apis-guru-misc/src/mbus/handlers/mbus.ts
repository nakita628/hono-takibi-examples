import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMbusApiRoute,
  getMbusHatRoute,
  postMbusGetDeviceBaudrateAddressRoute,
  postMbusGetMultiDeviceBaudrateAddressMaxframesRoute,
  postMbusHatOffRoute,
  postMbusHatOnRoute,
  postMbusScanDeviceBaudrateRoute,
} from '../routes'

export const getMbusApiRouteHandler: RouteHandler<typeof getMbusApiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMbusGetDeviceBaudrateAddressRouteHandler: RouteHandler<
  typeof postMbusGetDeviceBaudrateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMbusGetMultiDeviceBaudrateAddressMaxframesRouteHandler: RouteHandler<
  typeof postMbusGetMultiDeviceBaudrateAddressMaxframesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMbusHatRouteHandler: RouteHandler<typeof getMbusHatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMbusHatOffRouteHandler: RouteHandler<typeof postMbusHatOffRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMbusHatOnRouteHandler: RouteHandler<typeof postMbusHatOnRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMbusScanDeviceBaudrateRouteHandler: RouteHandler<
  typeof postMbusScanDeviceBaudrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
