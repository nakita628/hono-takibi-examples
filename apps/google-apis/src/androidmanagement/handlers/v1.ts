import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1EnterprisesRoute,
  getV1NameRoute,
  getV1ParentDevicesRoute,
  getV1ParentEnrollmentTokensRoute,
  getV1ParentPoliciesRoute,
  getV1ParentWebAppsRoute,
  patchV1NameRoute,
  postV1EnterprisesRoute,
  postV1NameCancelRoute,
  postV1NameIssueCommandRoute,
  postV1ParentEnrollmentTokensRoute,
  postV1ParentWebAppsRoute,
  postV1ParentWebTokensRoute,
  postV1SignupUrlsRoute,
} from '../routes'

export const getV1EnterprisesRouteHandler: RouteHandler<typeof getV1EnterprisesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1EnterprisesRouteHandler: RouteHandler<typeof postV1EnterprisesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SignupUrlsRouteHandler: RouteHandler<typeof postV1SignupUrlsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameIssueCommandRouteHandler: RouteHandler<
  typeof postV1NameIssueCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentDevicesRouteHandler: RouteHandler<typeof getV1ParentDevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentEnrollmentTokensRouteHandler: RouteHandler<
  typeof getV1ParentEnrollmentTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentEnrollmentTokensRouteHandler: RouteHandler<
  typeof postV1ParentEnrollmentTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentPoliciesRouteHandler: RouteHandler<
  typeof getV1ParentPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentWebAppsRouteHandler: RouteHandler<typeof getV1ParentWebAppsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentWebAppsRouteHandler: RouteHandler<
  typeof postV1ParentWebAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentWebTokensRouteHandler: RouteHandler<
  typeof postV1ParentWebTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}
