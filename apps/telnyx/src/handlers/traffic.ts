import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTrafficPolicyProfilesIdRoute,
  getTrafficPolicyProfilesIdRoute,
  getTrafficPolicyProfilesRoute,
  getTrafficPolicyProfilesServicesRoute,
  patchTrafficPolicyProfilesIdRoute,
  postTrafficPolicyProfilesRoute,
} from '../routes'

export const getTrafficPolicyProfilesRouteHandler: RouteHandler<
  typeof getTrafficPolicyProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTrafficPolicyProfilesRouteHandler: RouteHandler<
  typeof postTrafficPolicyProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficPolicyProfilesServicesRouteHandler: RouteHandler<
  typeof getTrafficPolicyProfilesServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTrafficPolicyProfilesIdRouteHandler: RouteHandler<
  typeof deleteTrafficPolicyProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficPolicyProfilesIdRouteHandler: RouteHandler<
  typeof getTrafficPolicyProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTrafficPolicyProfilesIdRouteHandler: RouteHandler<
  typeof patchTrafficPolicyProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
