import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSectionsIdDistrictRoute,
  getSectionsIdRoute,
  getSectionsIdSchoolRoute,
  getSectionsIdStudentsRoute,
  getSectionsIdTeacherRoute,
  getSectionsIdTeachersRoute,
  getSectionsRoute,
} from '../routes'

export const getSectionsRouteHandler: RouteHandler<typeof getSectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsIdRouteHandler: RouteHandler<typeof getSectionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsIdDistrictRouteHandler: RouteHandler<
  typeof getSectionsIdDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsIdSchoolRouteHandler: RouteHandler<
  typeof getSectionsIdSchoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsIdStudentsRouteHandler: RouteHandler<
  typeof getSectionsIdStudentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsIdTeacherRouteHandler: RouteHandler<
  typeof getSectionsIdTeacherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSectionsIdTeachersRouteHandler: RouteHandler<
  typeof getSectionsIdTeachersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
