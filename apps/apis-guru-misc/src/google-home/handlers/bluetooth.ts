import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBluetoothGetBondedRoute,
  getBluetoothScanResultsRoute,
  getBluetoothStatusRoute,
  postBluetoothBondRoute,
  postBluetoothConnectRoute,
  postBluetoothDiscoveryRoute,
  postBluetoothScanRoute,
} from '../routes'

export const postBluetoothBondRouteHandler: RouteHandler<typeof postBluetoothBondRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBluetoothConnectRouteHandler: RouteHandler<
  typeof postBluetoothConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBluetoothDiscoveryRouteHandler: RouteHandler<
  typeof postBluetoothDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBluetoothGetBondedRouteHandler: RouteHandler<
  typeof getBluetoothGetBondedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBluetoothScanRouteHandler: RouteHandler<typeof postBluetoothScanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBluetoothScanResultsRouteHandler: RouteHandler<
  typeof getBluetoothScanResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBluetoothStatusRouteHandler: RouteHandler<typeof getBluetoothStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
