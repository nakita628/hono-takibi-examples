import type { RouteHandler } from '@hono/zod-openapi'
import type { getAudioFeaturesIdRoute, getAudioFeaturesRoute } from '../routes'

export const getAudioFeaturesRouteHandler: RouteHandler<typeof getAudioFeaturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAudioFeaturesIdRouteHandler: RouteHandler<typeof getAudioFeaturesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
