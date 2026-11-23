import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTrafficMirrorSessionRoute,
  postActionCreateTrafficMirrorSessionRoute,
} from '../routes'

export const getActionCreateTrafficMirrorSessionRouteHandler: RouteHandler<
  typeof getActionCreateTrafficMirrorSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTrafficMirrorSessionRouteHandler: RouteHandler<
  typeof postActionCreateTrafficMirrorSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
