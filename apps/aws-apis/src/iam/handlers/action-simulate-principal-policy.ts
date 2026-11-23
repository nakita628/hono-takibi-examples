import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSimulatePrincipalPolicyRoute,
  postActionSimulatePrincipalPolicyRoute,
} from '../routes'

export const getActionSimulatePrincipalPolicyRouteHandler: RouteHandler<
  typeof getActionSimulatePrincipalPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSimulatePrincipalPolicyRouteHandler: RouteHandler<
  typeof postActionSimulatePrincipalPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
