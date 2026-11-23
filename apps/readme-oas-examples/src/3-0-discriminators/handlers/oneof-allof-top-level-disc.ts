import type { RouteHandler } from '@hono/zod-openapi'
import type { patchOneofAllofTopLevelDiscRoute } from '../routes'

export const patchOneofAllofTopLevelDiscRouteHandler: RouteHandler<
  typeof patchOneofAllofTopLevelDiscRoute
> = async (c) => {
  throw new Error('Not implemented')
}
