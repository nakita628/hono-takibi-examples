import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetOnboardingUrlRoute } from '../routes'

export const postGetOnboardingUrlRouteHandler: RouteHandler<
  typeof postGetOnboardingUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
