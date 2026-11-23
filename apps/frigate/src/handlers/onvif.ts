import type { RouteHandler } from '@hono/zod-openapi'
import type { getOnvifProbeRoute } from '../routes'

export const getOnvifProbeRouteHandler: RouteHandler<typeof getOnvifProbeRoute> = async (c) => {
  throw new Error('Not implemented')
}
