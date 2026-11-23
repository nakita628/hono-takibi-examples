import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameConfigRoute,
  getV1NameReposRoute,
  getV1NameRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameConfigRoute,
  patchV1NameRoute,
  postV1NameSyncRoute,
  postV1ParentReposRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
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

export const getV1NameConfigRouteHandler: RouteHandler<typeof getV1NameConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameConfigRouteHandler: RouteHandler<typeof patchV1NameConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NameReposRouteHandler: RouteHandler<typeof getV1NameReposRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameSyncRouteHandler: RouteHandler<typeof postV1NameSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentReposRouteHandler: RouteHandler<typeof postV1ParentReposRoute> = async (
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
