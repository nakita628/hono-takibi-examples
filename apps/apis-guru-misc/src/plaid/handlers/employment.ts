import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmploymentVerificationGetRoute } from '../routes'

export const postEmploymentVerificationGetRouteHandler: RouteHandler<
  typeof postEmploymentVerificationGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
