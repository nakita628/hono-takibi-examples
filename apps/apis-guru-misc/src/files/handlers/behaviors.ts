import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBehaviorsIdRoute,
  getBehaviorsFoldersPathRoute,
  getBehaviorsIdRoute,
  getBehaviorsRoute,
  patchBehaviorsIdRoute,
  postBehaviorsRoute,
  postBehaviorsWebhookTestRoute,
} from '../routes'

export const getBehaviorsRouteHandler: RouteHandler<typeof getBehaviorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBehaviorsRouteHandler: RouteHandler<typeof postBehaviorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBehaviorsFoldersPathRouteHandler: RouteHandler<
  typeof getBehaviorsFoldersPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBehaviorsWebhookTestRouteHandler: RouteHandler<
  typeof postBehaviorsWebhookTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBehaviorsIdRouteHandler: RouteHandler<typeof deleteBehaviorsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBehaviorsIdRouteHandler: RouteHandler<typeof getBehaviorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBehaviorsIdRouteHandler: RouteHandler<typeof patchBehaviorsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
