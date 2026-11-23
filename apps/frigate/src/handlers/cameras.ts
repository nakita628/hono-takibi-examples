import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCamerasCameraNameRoute } from '../routes'

export const deleteCamerasCameraNameRouteHandler: RouteHandler<
  typeof deleteCamerasCameraNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
