import type { RouteHandler } from '@hono/zod-openapi'
import type { getTriggersStatusCameraNameRoute } from '../routes'

export const getTriggersStatusCameraNameRouteHandler: RouteHandler<
  typeof getTriggersStatusCameraNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
