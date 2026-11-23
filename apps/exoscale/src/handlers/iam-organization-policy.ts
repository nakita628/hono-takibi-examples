import type { RouteHandler } from '@hono/zod-openapi'
import type { getIamOrganizationPolicyRoute, putIamOrganizationPolicyRoute } from '../routes'

export const getIamOrganizationPolicyRouteHandler: RouteHandler<
  typeof getIamOrganizationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIamOrganizationPolicyRouteHandler: RouteHandler<
  typeof putIamOrganizationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
