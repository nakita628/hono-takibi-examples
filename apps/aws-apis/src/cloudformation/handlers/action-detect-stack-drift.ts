import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetectStackDriftRoute, postActionDetectStackDriftRoute } from '../routes'

export const getActionDetectStackDriftRouteHandler: RouteHandler<
  typeof getActionDetectStackDriftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetectStackDriftRouteHandler: RouteHandler<
  typeof postActionDetectStackDriftRoute
> = async (c) => {
  throw new Error('Not implemented')
}
