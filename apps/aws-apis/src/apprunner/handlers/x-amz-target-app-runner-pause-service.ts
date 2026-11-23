import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetAppRunnerPauseServiceRoute } from '../routes'

export const postXAmzTargetAppRunnerPauseServiceRouteHandler: RouteHandler<
  typeof postXAmzTargetAppRunnerPauseServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
