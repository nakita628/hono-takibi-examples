import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  postV1beta1NameCancelRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

export const deleteV1beta1NameRouteHandler: RouteHandler<typeof deleteV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameLocationsRouteHandler: RouteHandler<
  typeof getV1beta1NameLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameOperationsRouteHandler: RouteHandler<
  typeof getV1beta1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameCancelRouteHandler: RouteHandler<
  typeof postV1beta1NameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof getV1beta1ResourceGetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ResourceSetIamPolicyRouteHandler: RouteHandler<
  typeof postV1beta1ResourceSetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ResourceTestIamPermissionsRouteHandler: RouteHandler<
  typeof postV1beta1ResourceTestIamPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
