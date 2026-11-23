import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteTrafficMirrorTargetRoute,
  postActionDeleteTrafficMirrorTargetRoute,
} from '../routes'

export const getActionDeleteTrafficMirrorTargetRouteHandler: RouteHandler<
  typeof getActionDeleteTrafficMirrorTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTrafficMirrorTargetRouteHandler: RouteHandler<
  typeof postActionDeleteTrafficMirrorTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
