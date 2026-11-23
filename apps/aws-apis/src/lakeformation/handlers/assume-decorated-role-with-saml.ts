import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssumeDecoratedRoleWithSAMLRoute } from '../routes'

export const postAssumeDecoratedRoleWithSAMLRouteHandler: RouteHandler<
  typeof postAssumeDecoratedRoleWithSAMLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
