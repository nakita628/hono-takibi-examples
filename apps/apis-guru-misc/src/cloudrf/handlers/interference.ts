import type { RouteHandler } from '@hono/zod-openapi'
import type { getInterferenceRoute } from '../routes'

export const getInterferenceRouteHandler: RouteHandler<typeof getInterferenceRoute> = async (c) => {
  throw new Error('Not implemented')
}
