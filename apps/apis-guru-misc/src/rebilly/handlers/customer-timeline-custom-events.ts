import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCustomerTimelineCustomEventsIdRoute,
  getCustomerTimelineCustomEventsRoute,
  postCustomerTimelineCustomEventsRoute,
} from '../routes'

export const getCustomerTimelineCustomEventsRouteHandler: RouteHandler<
  typeof getCustomerTimelineCustomEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomerTimelineCustomEventsRouteHandler: RouteHandler<
  typeof postCustomerTimelineCustomEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomerTimelineCustomEventsIdRouteHandler: RouteHandler<
  typeof getCustomerTimelineCustomEventsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
