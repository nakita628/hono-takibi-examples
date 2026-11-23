import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCardProfilesCardProfileIdRoute,
  getCardProfilesRoute,
  postCardProfilesRoute,
} from '../routes'

export const getCardProfilesRouteHandler: RouteHandler<typeof getCardProfilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardProfilesRouteHandler: RouteHandler<typeof postCardProfilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCardProfilesCardProfileIdRouteHandler: RouteHandler<
  typeof getCardProfilesCardProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
