import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContentSourceSectionJsonRoute,
  getContentSourceSectionTimePeriodJsonRoute,
} from '../routes'

export const getContentSourceSectionJsonRouteHandler: RouteHandler<
  typeof getContentSourceSectionJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContentSourceSectionTimePeriodJsonRouteHandler: RouteHandler<
  typeof getContentSourceSectionTimePeriodJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
