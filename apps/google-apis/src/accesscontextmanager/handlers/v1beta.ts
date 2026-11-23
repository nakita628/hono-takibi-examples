import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1betaNameRoute,
  getV1betaAccessPoliciesRoute,
  getV1betaNameRoute,
  getV1betaParentAccessLevelsRoute,
  getV1betaParentServicePerimetersRoute,
  patchV1betaNameRoute,
  postV1betaAccessPoliciesRoute,
  postV1betaParentAccessLevelsRoute,
  postV1betaParentServicePerimetersRoute,
} from '../routes'

export const getV1betaAccessPoliciesRouteHandler: RouteHandler<
  typeof getV1betaAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaAccessPoliciesRouteHandler: RouteHandler<
  typeof postV1betaAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

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

export const getV1betaParentAccessLevelsRouteHandler: RouteHandler<
  typeof getV1betaParentAccessLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentAccessLevelsRouteHandler: RouteHandler<
  typeof postV1betaParentAccessLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentServicePerimetersRouteHandler: RouteHandler<
  typeof getV1betaParentServicePerimetersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentServicePerimetersRouteHandler: RouteHandler<
  typeof postV1betaParentServicePerimetersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
