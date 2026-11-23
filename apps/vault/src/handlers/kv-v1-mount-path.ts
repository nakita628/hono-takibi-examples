import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKvV1MountPathPathRoute,
  getKvV1MountPathPathIndexRoute,
  getKvV1MountPathPathRoute,
  postKvV1MountPathPathRoute,
} from '../routes'

export const getKvV1MountPathPathRouteHandler: RouteHandler<
  typeof getKvV1MountPathPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKvV1MountPathPathRouteHandler: RouteHandler<
  typeof postKvV1MountPathPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKvV1MountPathPathRouteHandler: RouteHandler<
  typeof deleteKvV1MountPathPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKvV1MountPathPathIndexRouteHandler: RouteHandler<
  typeof getKvV1MountPathPathIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
