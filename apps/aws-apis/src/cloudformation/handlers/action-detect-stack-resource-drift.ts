import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetectStackResourceDriftRoute,
  postActionDetectStackResourceDriftRoute,
} from '../routes'

export const getActionDetectStackResourceDriftRouteHandler: RouteHandler<
  typeof getActionDetectStackResourceDriftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetectStackResourceDriftRouteHandler: RouteHandler<
  typeof postActionDetectStackResourceDriftRoute
> = async (c) => {
  throw new Error('Not implemented')
}
