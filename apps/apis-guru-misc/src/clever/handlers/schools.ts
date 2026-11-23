import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSchoolsIdDistrictRoute,
  getSchoolsIdRoute,
  getSchoolsIdSectionsRoute,
  getSchoolsIdStudentsRoute,
  getSchoolsIdTeachersRoute,
  getSchoolsRoute,
} from '../routes'

export const getSchoolsRouteHandler: RouteHandler<typeof getSchoolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchoolsIdRouteHandler: RouteHandler<typeof getSchoolsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchoolsIdDistrictRouteHandler: RouteHandler<
  typeof getSchoolsIdDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchoolsIdSectionsRouteHandler: RouteHandler<
  typeof getSchoolsIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchoolsIdStudentsRouteHandler: RouteHandler<
  typeof getSchoolsIdStudentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchoolsIdTeachersRouteHandler: RouteHandler<
  typeof getSchoolsIdTeachersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
