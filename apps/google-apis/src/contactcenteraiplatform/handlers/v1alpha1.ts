import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentContactCentersRoute,
  getV1alpha1ParentQueryContactCenterQuotaRoute,
  patchV1alpha1NameRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1ParentContactCentersRoute,
} from '../routes'

export const deleteV1alpha1NameRouteHandler: RouteHandler<typeof deleteV1alpha1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha1NameRouteHandler: RouteHandler<typeof getV1alpha1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1alpha1NameRouteHandler: RouteHandler<typeof patchV1alpha1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha1NameLocationsRouteHandler: RouteHandler<
  typeof getV1alpha1NameLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha1NameOperationsRouteHandler: RouteHandler<
  typeof getV1alpha1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1NameCancelRouteHandler: RouteHandler<
  typeof postV1alpha1NameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha1ParentContactCentersRouteHandler: RouteHandler<
  typeof getV1alpha1ParentContactCentersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1ParentContactCentersRouteHandler: RouteHandler<
  typeof postV1alpha1ParentContactCentersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha1ParentQueryContactCenterQuotaRouteHandler: RouteHandler<
  typeof getV1alpha1ParentQueryContactCenterQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
