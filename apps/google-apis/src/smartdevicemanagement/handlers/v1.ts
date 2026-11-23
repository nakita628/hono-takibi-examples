import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NameRoute,
  getV1ParentDevicesRoute,
  getV1ParentRoomsRoute,
  getV1ParentStructuresRoute,
  postV1NameExecuteCommandRoute,
} from '../routes'

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameExecuteCommandRouteHandler: RouteHandler<
  typeof postV1NameExecuteCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentDevicesRouteHandler: RouteHandler<typeof getV1ParentDevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentRoomsRouteHandler: RouteHandler<typeof getV1ParentRoomsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentStructuresRouteHandler: RouteHandler<
  typeof getV1ParentStructuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}
