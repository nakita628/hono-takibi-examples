import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1alpha2NameRoute,
  getV1alpha2NameLocationsRoute,
  getV1alpha2NameOperationsRoute,
  getV1alpha2NameRoute,
  getV1alpha2ResourceGetIamPolicyRoute,
  postV1alpha2NameCancelRoute,
  postV1alpha2ResourceSetIamPolicyRoute,
  postV1alpha2ResourceTestIamPermissionsRoute,
} from '../routes'

export const deleteV1alpha2NameRouteHandler: RouteHandler<typeof deleteV1alpha2NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha2NameRouteHandler: RouteHandler<typeof getV1alpha2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha2NameLocationsRouteHandler: RouteHandler<
  typeof getV1alpha2NameLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha2NameOperationsRouteHandler: RouteHandler<
  typeof getV1alpha2NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha2NameCancelRouteHandler: RouteHandler<
  typeof postV1alpha2NameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha2ResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof getV1alpha2ResourceGetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha2ResourceSetIamPolicyRouteHandler: RouteHandler<
  typeof postV1alpha2ResourceSetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha2ResourceTestIamPermissionsRouteHandler: RouteHandler<
  typeof postV1alpha2ResourceTestIamPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
