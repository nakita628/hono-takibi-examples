import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2SpacesKeysAccessKeyRoute,
  getV2SpacesKeysAccessKeyRoute,
  getV2SpacesKeysRoute,
  patchV2SpacesKeysAccessKeyRoute,
  postV2SpacesKeysRoute,
  putV2SpacesKeysAccessKeyRoute,
} from '../routes'

export const getV2SpacesKeysRouteHandler: RouteHandler<typeof getV2SpacesKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SpacesKeysRouteHandler: RouteHandler<typeof postV2SpacesKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2SpacesKeysAccessKeyRouteHandler: RouteHandler<
  typeof getV2SpacesKeysAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SpacesKeysAccessKeyRouteHandler: RouteHandler<
  typeof deleteV2SpacesKeysAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2SpacesKeysAccessKeyRouteHandler: RouteHandler<
  typeof putV2SpacesKeysAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2SpacesKeysAccessKeyRouteHandler: RouteHandler<
  typeof patchV2SpacesKeysAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
