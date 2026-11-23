import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentConnectorsRoute,
  patchV1NameRoute,
  postV1ParentConnectorsRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameLocationsRouteHandler: RouteHandler<typeof getV1NameLocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NameOperationsRouteHandler: RouteHandler<
  typeof getV1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentConnectorsRouteHandler: RouteHandler<
  typeof getV1ParentConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentConnectorsRouteHandler: RouteHandler<
  typeof postV1ParentConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
