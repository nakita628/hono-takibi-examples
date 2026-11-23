import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyTargetGroupAttributesRoute,
  postActionModifyTargetGroupAttributesRoute,
} from '../routes'

export const getActionModifyTargetGroupAttributesRouteHandler: RouteHandler<
  typeof getActionModifyTargetGroupAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyTargetGroupAttributesRouteHandler: RouteHandler<
  typeof postActionModifyTargetGroupAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
