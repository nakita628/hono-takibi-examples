import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeviceServerItemIdRoute,
  getDeviceServerRoute,
  postDeviceServerRoute,
} from '../routes'

export const postDeviceServerRouteHandler: RouteHandler<typeof postDeviceServerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDeviceServerRouteHandler: RouteHandler<typeof getDeviceServerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeviceServerItemIdRouteHandler: RouteHandler<
  typeof getDeviceServerItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
