import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTrafficMirrorFilterRoute,
  postActionCreateTrafficMirrorFilterRoute,
} from '../routes'

export const getActionCreateTrafficMirrorFilterRouteHandler: RouteHandler<
  typeof getActionCreateTrafficMirrorFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTrafficMirrorFilterRouteHandler: RouteHandler<
  typeof postActionCreateTrafficMirrorFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
