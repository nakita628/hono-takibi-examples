import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ResourceGetIamPolicyRoute,
  postV1NameCancelRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
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

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof getV1ResourceGetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResourceSetIamPolicyRouteHandler: RouteHandler<
  typeof postV1ResourceSetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResourceTestIamPermissionsRouteHandler: RouteHandler<
  typeof postV1ResourceTestIamPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
