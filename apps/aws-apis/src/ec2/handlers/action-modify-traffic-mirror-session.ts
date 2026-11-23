import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyTrafficMirrorSessionRoute,
  postActionModifyTrafficMirrorSessionRoute,
} from '../routes'

export const getActionModifyTrafficMirrorSessionRouteHandler: RouteHandler<
  typeof getActionModifyTrafficMirrorSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyTrafficMirrorSessionRouteHandler: RouteHandler<
  typeof postActionModifyTrafficMirrorSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
