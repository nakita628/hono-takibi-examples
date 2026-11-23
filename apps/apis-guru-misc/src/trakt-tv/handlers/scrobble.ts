import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postScrobblePauseRoute,
  postScrobbleStartRoute,
  postScrobbleStopRoute,
} from '../routes'

export const postScrobblePauseRouteHandler: RouteHandler<typeof postScrobblePauseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postScrobbleStartRouteHandler: RouteHandler<typeof postScrobbleStartRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postScrobbleStopRouteHandler: RouteHandler<typeof postScrobbleStopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
