import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2NameRoute,
  getV2NameGetEffectivePolicyRoute,
  getV2NameRoute,
  getV2ParentConstraintsRoute,
  getV2ParentCustomConstraintsRoute,
  getV2ParentPoliciesRoute,
  patchV2NameRoute,
  postV2ParentCustomConstraintsRoute,
  postV2ParentPoliciesRoute,
} from '../routes'

export const deleteV2NameRouteHandler: RouteHandler<typeof deleteV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameRouteHandler: RouteHandler<typeof getV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2NameRouteHandler: RouteHandler<typeof patchV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameGetEffectivePolicyRouteHandler: RouteHandler<
  typeof getV2NameGetEffectivePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ParentConstraintsRouteHandler: RouteHandler<
  typeof getV2ParentConstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ParentCustomConstraintsRouteHandler: RouteHandler<
  typeof getV2ParentCustomConstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentCustomConstraintsRouteHandler: RouteHandler<
  typeof postV2ParentCustomConstraintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ParentPoliciesRouteHandler: RouteHandler<
  typeof getV2ParentPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentPoliciesRouteHandler: RouteHandler<
  typeof postV2ParentPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
