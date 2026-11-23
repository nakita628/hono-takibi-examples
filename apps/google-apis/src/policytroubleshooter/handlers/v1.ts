import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1IamTroubleshootRoute } from '../routes'

export const postV1IamTroubleshootRouteHandler: RouteHandler<
  typeof postV1IamTroubleshootRoute
> = async (c) => {
  throw new Error('Not implemented')
}
