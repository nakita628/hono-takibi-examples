import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBadgesIdsRecipientsRoute,
  getBadgesIdsRoute,
  getBadgesNameRoute,
  getBadgesRecipientsRoute,
  getBadgesRoute,
  getBadgesTagsRoute,
} from '../routes'

export const getBadgesRouteHandler: RouteHandler<typeof getBadgesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBadgesNameRouteHandler: RouteHandler<typeof getBadgesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBadgesRecipientsRouteHandler: RouteHandler<
  typeof getBadgesRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBadgesTagsRouteHandler: RouteHandler<typeof getBadgesTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBadgesIdsRouteHandler: RouteHandler<typeof getBadgesIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBadgesIdsRecipientsRouteHandler: RouteHandler<
  typeof getBadgesIdsRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
