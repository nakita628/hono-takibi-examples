import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomersAccountAnnouncementsAnnouncementIdRoute,
  getCustomersAccountAnnouncementsAnnouncementIdRoute,
  getCustomersAccountAnnouncementsRoute,
  getCustomersAccountRoute,
  getCustomersRoute,
} from '../routes'

export const getCustomersRouteHandler: RouteHandler<typeof getCustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersAccountRouteHandler: RouteHandler<
  typeof getCustomersAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersAccountAnnouncementsRouteHandler: RouteHandler<
  typeof getCustomersAccountAnnouncementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomersAccountAnnouncementsAnnouncementIdRouteHandler: RouteHandler<
  typeof deleteCustomersAccountAnnouncementsAnnouncementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersAccountAnnouncementsAnnouncementIdRouteHandler: RouteHandler<
  typeof getCustomersAccountAnnouncementsAnnouncementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
