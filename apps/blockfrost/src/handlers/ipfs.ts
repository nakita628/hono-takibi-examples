import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIpfsGatewayIPFSPathRoute,
  getIpfsPinListIPFSPathRoute,
  getIpfsPinListRoute,
  postIpfsAddRoute,
  postIpfsPinAddIPFSPathRoute,
  postIpfsPinRemoveIPFSPathRoute,
} from '../routes'

export const postIpfsAddRouteHandler: RouteHandler<typeof postIpfsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpfsGatewayIPFSPathRouteHandler: RouteHandler<
  typeof getIpfsGatewayIPFSPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpfsPinAddIPFSPathRouteHandler: RouteHandler<
  typeof postIpfsPinAddIPFSPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpfsPinListRouteHandler: RouteHandler<typeof getIpfsPinListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpfsPinListIPFSPathRouteHandler: RouteHandler<
  typeof getIpfsPinListIPFSPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpfsPinRemoveIPFSPathRouteHandler: RouteHandler<
  typeof postIpfsPinRemoveIPFSPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
