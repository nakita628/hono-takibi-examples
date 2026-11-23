import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMetadataV0KeysKeyNameRoute,
  getMetadataV0KeysKeyNameRoute,
  patchMetadataV0KeysKeyNameRoute,
  postMetadataV0KeysRoute,
  postMetadataV0ListKeysRoute,
} from '../routes'

export const postMetadataV0KeysRouteHandler: RouteHandler<typeof postMetadataV0KeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteMetadataV0KeysKeyNameRouteHandler: RouteHandler<
  typeof deleteMetadataV0KeysKeyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetadataV0KeysKeyNameRouteHandler: RouteHandler<
  typeof getMetadataV0KeysKeyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMetadataV0KeysKeyNameRouteHandler: RouteHandler<
  typeof patchMetadataV0KeysKeyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetadataV0ListKeysRouteHandler: RouteHandler<
  typeof postMetadataV0ListKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
