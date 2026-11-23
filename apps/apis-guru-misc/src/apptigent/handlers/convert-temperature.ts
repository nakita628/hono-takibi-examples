import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertTemperatureRoute } from '../routes'

export const postConvertTemperatureRouteHandler: RouteHandler<
  typeof postConvertTemperatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}
