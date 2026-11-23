import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSoundtrackRoute,
  getSoundtrackSearchRoute,
  postSoundtrackSearchRoute,
} from '../routes'

export const getSoundtrackRouteHandler: RouteHandler<typeof getSoundtrackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSoundtrackSearchRouteHandler: RouteHandler<
  typeof getSoundtrackSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSoundtrackSearchRouteHandler: RouteHandler<
  typeof postSoundtrackSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
