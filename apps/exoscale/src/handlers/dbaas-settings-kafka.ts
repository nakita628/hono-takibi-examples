import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsKafkaRoute } from '../routes'

export const getDbaasSettingsKafkaRouteHandler: RouteHandler<
  typeof getDbaasSettingsKafkaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
