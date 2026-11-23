import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ResourceGetIamPolicyRoute,
  postV2NameCancelRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from '../routes'

export const deleteV2NameRouteHandler: RouteHandler<typeof deleteV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameRouteHandler: RouteHandler<typeof getV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameLocationsRouteHandler: RouteHandler<typeof getV2NameLocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2NameOperationsRouteHandler: RouteHandler<
  typeof getV2NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2NameCancelRouteHandler: RouteHandler<typeof postV2NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2ResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof getV2ResourceGetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ResourceSetIamPolicyRouteHandler: RouteHandler<
  typeof postV2ResourceSetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ResourceTestIamPermissionsRouteHandler: RouteHandler<
  typeof postV2ResourceTestIamPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
