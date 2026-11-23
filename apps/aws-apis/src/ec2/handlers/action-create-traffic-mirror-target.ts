import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTrafficMirrorTargetRoute,
  postActionCreateTrafficMirrorTargetRoute,
} from '../routes'

export const getActionCreateTrafficMirrorTargetRouteHandler: RouteHandler<
  typeof getActionCreateTrafficMirrorTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTrafficMirrorTargetRouteHandler: RouteHandler<
  typeof postActionCreateTrafficMirrorTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
