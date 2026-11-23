import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRatingsEloRoute,
  getRatingsSpConferencesRoute,
  getRatingsSpRoute,
  getRatingsSrsRoute,
} from '../routes'

export const getRatingsEloRouteHandler: RouteHandler<typeof getRatingsEloRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRatingsSpRouteHandler: RouteHandler<typeof getRatingsSpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRatingsSpConferencesRouteHandler: RouteHandler<
  typeof getRatingsSpConferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRatingsSrsRouteHandler: RouteHandler<typeof getRatingsSrsRoute> = async (c) => {
  throw new Error('Not implemented')
}
