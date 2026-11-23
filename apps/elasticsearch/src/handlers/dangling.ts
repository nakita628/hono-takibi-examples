import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDanglingIndexUuidRoute,
  getDanglingRoute,
  postDanglingIndexUuidRoute,
} from '../routes'

export const postDanglingIndexUuidRouteHandler: RouteHandler<
  typeof postDanglingIndexUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDanglingIndexUuidRouteHandler: RouteHandler<
  typeof deleteDanglingIndexUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDanglingRouteHandler: RouteHandler<typeof getDanglingRoute> = async (c) => {
  throw new Error('Not implemented')
}
