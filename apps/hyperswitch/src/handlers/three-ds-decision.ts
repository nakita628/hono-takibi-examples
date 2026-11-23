import type { RouteHandler } from '@hono/zod-openapi'
import type { postThreeDsDecisionExecuteRoute } from '../routes'

export const postThreeDsDecisionExecuteRouteHandler: RouteHandler<
  typeof postThreeDsDecisionExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
