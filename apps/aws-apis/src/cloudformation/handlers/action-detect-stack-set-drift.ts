import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetectStackSetDriftRoute,
  postActionDetectStackSetDriftRoute,
} from '../routes'

export const getActionDetectStackSetDriftRouteHandler: RouteHandler<
  typeof getActionDetectStackSetDriftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetectStackSetDriftRouteHandler: RouteHandler<
  typeof postActionDetectStackSetDriftRoute
> = async (c) => {
  throw new Error('Not implemented')
}
