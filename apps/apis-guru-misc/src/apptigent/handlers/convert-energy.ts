import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertEnergyRoute } from '../routes'

export const postConvertEnergyRouteHandler: RouteHandler<typeof postConvertEnergyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
