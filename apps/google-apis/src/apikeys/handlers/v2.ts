import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2NameRoute,
  getV2KeysLookupKeyRoute,
  getV2NameKeyStringRoute,
  getV2NameRoute,
  getV2ParentKeysRoute,
  patchV2NameRoute,
  postV2NameUndeleteRoute,
  postV2ParentKeysRoute,
} from '../routes'

export const getV2KeysLookupKeyRouteHandler: RouteHandler<typeof getV2KeysLookupKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2NameRouteHandler: RouteHandler<typeof deleteV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameRouteHandler: RouteHandler<typeof getV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2NameRouteHandler: RouteHandler<typeof patchV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameKeyStringRouteHandler: RouteHandler<typeof getV2NameKeyStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2NameUndeleteRouteHandler: RouteHandler<typeof postV2NameUndeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2ParentKeysRouteHandler: RouteHandler<typeof getV2ParentKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentKeysRouteHandler: RouteHandler<typeof postV2ParentKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
