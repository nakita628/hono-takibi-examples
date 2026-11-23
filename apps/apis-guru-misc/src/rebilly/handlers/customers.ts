import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomersIdLeadSourceRoute,
  deleteCustomersIdRoute,
  deleteCustomersIdTimelineMessageIdRoute,
  getCustomersIdLeadSourceRoute,
  getCustomersIdRoute,
  getCustomersIdTimelineMessageIdRoute,
  getCustomersIdTimelineRoute,
  getCustomersIdUpcomingInvoicesRoute,
  getCustomersRoute,
  postCustomersIdTimelineRoute,
  postCustomersRoute,
  putCustomersIdLeadSourceRoute,
  putCustomersIdRoute,
} from '../routes'

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

export const getCustomersIdUpcomingInvoicesRouteHandler: RouteHandler<
  typeof getCustomersIdUpcomingInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
