import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomersIdTimelineMessageIdRoute,
  getCustomersIdTimelineMessageIdRoute,
  getCustomersIdTimelineRoute,
  getCustomerTimelineCustomEventsIdRoute,
  getCustomerTimelineCustomEventsRoute,
  getCustomerTimelineEventsRoute,
  postCustomersIdTimelineRoute,
} from '../routes'

export const getCustomerTimelineCustomEventsRouteHandler: RouteHandler<
  typeof getCustomerTimelineCustomEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomerTimelineCustomEventsIdRouteHandler: RouteHandler<
  typeof getCustomerTimelineCustomEventsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomerTimelineEventsRouteHandler: RouteHandler<
  typeof getCustomerTimelineEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersIdTimelineRouteHandler: RouteHandler<
  typeof getCustomersIdTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomersIdTimelineRouteHandler: RouteHandler<
  typeof postCustomersIdTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomersIdTimelineMessageIdRouteHandler: RouteHandler<
  typeof deleteCustomersIdTimelineMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersIdTimelineMessageIdRouteHandler: RouteHandler<
  typeof getCustomersIdTimelineMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
