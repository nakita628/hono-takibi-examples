import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContactsIdDistrictRoute,
  getContactsIdRoute,
  getContactsIdStudentRoute,
  getContactsRoute,
} from '../routes'

export const getContactsRouteHandler: RouteHandler<typeof getContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsIdRouteHandler: RouteHandler<typeof getContactsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsIdDistrictRouteHandler: RouteHandler<
  typeof getContactsIdDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsIdStudentRouteHandler: RouteHandler<
  typeof getContactsIdStudentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
