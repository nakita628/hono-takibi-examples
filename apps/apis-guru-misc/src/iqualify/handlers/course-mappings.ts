import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCourseMappingsOfferingIdExternalCourseIdRoute,
  getCourseMappingsExternalcourseExternalCourseIdRoute,
  getCourseMappingsOfferingIdRoute,
  getCourseMappingsRoute,
  putCourseMappingsOfferingIdExternalCourseIdRoute,
} from '../routes'

export const getCourseMappingsRouteHandler: RouteHandler<typeof getCourseMappingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCourseMappingsExternalcourseExternalCourseIdRouteHandler: RouteHandler<
  typeof getCourseMappingsExternalcourseExternalCourseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCourseMappingsOfferingIdRouteHandler: RouteHandler<
  typeof getCourseMappingsOfferingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCourseMappingsOfferingIdExternalCourseIdRouteHandler: RouteHandler<
  typeof deleteCourseMappingsOfferingIdExternalCourseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCourseMappingsOfferingIdExternalCourseIdRouteHandler: RouteHandler<
  typeof putCourseMappingsOfferingIdExternalCourseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
