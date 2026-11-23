import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteLegalArrangementsRoute } from '../routes'

export const postDeleteLegalArrangementsRouteHandler: RouteHandler<
  typeof postDeleteLegalArrangementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
