import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1OrganizationDataExchangesRoute,
  getV1ParentDataExchangesRoute,
  getV1ParentListingsRoute,
  patchV1NameRoute,
  postV1NameSubscribeRoute,
  postV1ParentDataExchangesRoute,
  postV1ParentListingsRoute,
  postV1ResourceGetIamPolicyRoute,
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

export const postV1NameSubscribeRouteHandler: RouteHandler<
  typeof postV1NameSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationDataExchangesRouteHandler: RouteHandler<
  typeof getV1OrganizationDataExchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentDataExchangesRouteHandler: RouteHandler<
  typeof getV1ParentDataExchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentDataExchangesRouteHandler: RouteHandler<
  typeof postV1ParentDataExchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentListingsRouteHandler: RouteHandler<
  typeof getV1ParentListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentListingsRouteHandler: RouteHandler<
  typeof postV1ParentListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof postV1ResourceGetIamPolicyRoute
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
