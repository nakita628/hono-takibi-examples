import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteActionTargetsActionTargetArnRoute,
  patchActionTargetsActionTargetArnRoute,
  postActionTargetsGetRoute,
  postActionTargetsRoute,
} from '../routes'

export const postActionTargetsRouteHandler: RouteHandler<typeof postActionTargetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteActionTargetsActionTargetArnRouteHandler: RouteHandler<
  typeof deleteActionTargetsActionTargetArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchActionTargetsActionTargetArnRouteHandler: RouteHandler<
  typeof patchActionTargetsActionTargetArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTargetsGetRouteHandler: RouteHandler<
  typeof postActionTargetsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
