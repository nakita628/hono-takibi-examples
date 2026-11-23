import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppInstanceUsersAppInstanceArnRoute } from '../routes'

export const getAppInstanceUsersAppInstanceArnRouteHandler: RouteHandler<
  typeof getAppInstanceUsersAppInstanceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
