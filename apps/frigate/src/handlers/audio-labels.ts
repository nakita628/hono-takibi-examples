import type { RouteHandler } from '@hono/zod-openapi'
import type { getAudioLabelsRoute } from '../routes'

export const getAudioLabelsRouteHandler: RouteHandler<typeof getAudioLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
