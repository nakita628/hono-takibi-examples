import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIntentAddMediaRoute,
  postIntentPlayMediaRoute,
  postIntentUpdateMediaAffinityRoute,
} from '../routes'

export const postIntentAddMediaRouteHandler: RouteHandler<typeof postIntentAddMediaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIntentPlayMediaRouteHandler: RouteHandler<
  typeof postIntentPlayMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntentUpdateMediaAffinityRouteHandler: RouteHandler<
  typeof postIntentUpdateMediaAffinityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
