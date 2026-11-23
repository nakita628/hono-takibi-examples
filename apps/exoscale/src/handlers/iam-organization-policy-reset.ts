import type { RouteHandler } from '@hono/zod-openapi'
import type { postIamOrganizationPolicyResetRoute } from '../routes'

export const postIamOrganizationPolicyResetRouteHandler: RouteHandler<
  typeof postIamOrganizationPolicyResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
