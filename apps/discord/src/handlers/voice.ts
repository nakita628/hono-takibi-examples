import type { RouteHandler } from '@hono/zod-openapi'
import type { getVoiceRegionsRoute } from '../routes'

export const getVoiceRegionsRouteHandler: RouteHandler<typeof getVoiceRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
