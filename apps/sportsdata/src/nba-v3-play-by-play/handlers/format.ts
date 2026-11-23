import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFormatPlayByPlayDeltaDateMinutesRoute,
  getFormatPlayByPlayGameidRoute,
} from '../routes'

export const getFormatPlayByPlayGameidRouteHandler: RouteHandler<
  typeof getFormatPlayByPlayGameidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatPlayByPlayDeltaDateMinutesRouteHandler: RouteHandler<
  typeof getFormatPlayByPlayDeltaDateMinutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
