import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteTrafficMirrorFilterRoute,
  postActionDeleteTrafficMirrorFilterRoute,
} from '../routes'

export const getActionDeleteTrafficMirrorFilterRouteHandler: RouteHandler<
  typeof getActionDeleteTrafficMirrorFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTrafficMirrorFilterRouteHandler: RouteHandler<
  typeof postActionDeleteTrafficMirrorFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
