import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteTrafficMirrorSessionRoute,
  postActionDeleteTrafficMirrorSessionRoute,
} from '../routes'

export const getActionDeleteTrafficMirrorSessionRouteHandler: RouteHandler<
  typeof getActionDeleteTrafficMirrorSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTrafficMirrorSessionRouteHandler: RouteHandler<
  typeof postActionDeleteTrafficMirrorSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
