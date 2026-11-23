import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCustomPolicyCustomPolicyIdRoute,
  getCustomPolicyIndexRoute,
  postCustomPolicyIndexRoute,
  putCustomPolicyCustomPolicyIdRoute,
} from '../routes'

export const getCustomPolicyIndexRouteHandler: RouteHandler<
  typeof getCustomPolicyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomPolicyIndexRouteHandler: RouteHandler<
  typeof postCustomPolicyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomPolicyCustomPolicyIdRouteHandler: RouteHandler<
  typeof getCustomPolicyCustomPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomPolicyCustomPolicyIdRouteHandler: RouteHandler<
  typeof putCustomPolicyCustomPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
