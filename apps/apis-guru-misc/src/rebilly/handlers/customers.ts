import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomersIdLeadSourceRoute,
  deleteCustomersIdRoute,
  getCustomersIdLeadSourceRoute,
  getCustomersIdRoute,
  getCustomersRoute,
  postCustomersRoute,
  postCustomerTimelineCustomEventsRoute,
  putCustomersIdLeadSourceRoute,
  putCustomersIdRoute,
} from '../routes'

export const postCustomerTimelineCustomEventsRouteHandler: RouteHandler<
  typeof postCustomerTimelineCustomEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersRouteHandler: RouteHandler<typeof getCustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomersRouteHandler: RouteHandler<typeof postCustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomersIdRouteHandler: RouteHandler<typeof deleteCustomersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCustomersIdRouteHandler: RouteHandler<typeof getCustomersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomersIdRouteHandler: RouteHandler<typeof putCustomersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomersIdLeadSourceRouteHandler: RouteHandler<
  typeof deleteCustomersIdLeadSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersIdLeadSourceRouteHandler: RouteHandler<
  typeof getCustomersIdLeadSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomersIdLeadSourceRouteHandler: RouteHandler<
  typeof putCustomersIdLeadSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
