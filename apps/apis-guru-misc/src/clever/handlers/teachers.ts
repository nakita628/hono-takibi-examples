import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeachersIdDistrictRoute,
  getTeachersIdGradeLevelsRoute,
  getTeachersIdRoute,
  getTeachersIdSchoolRoute,
  getTeachersIdSectionsRoute,
  getTeachersIdStudentsRoute,
  getTeachersRoute,
} from '../routes'

export const getTeachersRouteHandler: RouteHandler<typeof getTeachersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeachersIdRouteHandler: RouteHandler<typeof getTeachersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeachersIdDistrictRouteHandler: RouteHandler<
  typeof getTeachersIdDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeachersIdGradeLevelsRouteHandler: RouteHandler<
  typeof getTeachersIdGradeLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeachersIdSchoolRouteHandler: RouteHandler<
  typeof getTeachersIdSchoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeachersIdSectionsRouteHandler: RouteHandler<
  typeof getTeachersIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeachersIdStudentsRouteHandler: RouteHandler<
  typeof getTeachersIdStudentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
