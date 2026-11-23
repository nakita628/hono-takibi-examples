import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStudentsIdContactsRoute,
  getStudentsIdDistrictRoute,
  getStudentsIdRoute,
  getStudentsIdSchoolRoute,
  getStudentsIdSectionsRoute,
  getStudentsIdTeachersRoute,
  getStudentsRoute,
} from '../routes'

export const getStudentsRouteHandler: RouteHandler<typeof getStudentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudentsIdRouteHandler: RouteHandler<typeof getStudentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudentsIdContactsRouteHandler: RouteHandler<
  typeof getStudentsIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudentsIdDistrictRouteHandler: RouteHandler<
  typeof getStudentsIdDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudentsIdSchoolRouteHandler: RouteHandler<
  typeof getStudentsIdSchoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudentsIdSectionsRouteHandler: RouteHandler<
  typeof getStudentsIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudentsIdTeachersRouteHandler: RouteHandler<
  typeof getStudentsIdTeachersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
