import type { RouteHandler } from '@hono/zod-openapi'
import type { getOnboardHelloRoute, postOnboardCompleteRoute } from '../routes'

export const getOnboardHelloRouteHandler: RouteHandler<typeof getOnboardHelloRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOnboardCompleteRouteHandler: RouteHandler<
  typeof postOnboardCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
