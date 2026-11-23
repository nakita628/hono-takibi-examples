import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1betaNameRoute,
  getV1betaNameLoginProfileRoute,
  getV1betaNameRoute,
  patchV1betaNameRoute,
  postV1betaParentImportSshPublicKeyRoute,
  postV1betaParentSshPublicKeysRoute,
} from '../routes'

export const deleteV1betaNameRouteHandler: RouteHandler<typeof deleteV1betaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1betaNameRouteHandler: RouteHandler<typeof patchV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaNameLoginProfileRouteHandler: RouteHandler<
  typeof getV1betaNameLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentSshPublicKeysRouteHandler: RouteHandler<
  typeof postV1betaParentSshPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentImportSshPublicKeyRouteHandler: RouteHandler<
  typeof postV1betaParentImportSshPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
