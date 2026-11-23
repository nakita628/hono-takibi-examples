import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDistrictsIdAdminsRoute,
  getDistrictsIdRoute,
  getDistrictsIdSchoolsRoute,
  getDistrictsIdSectionsRoute,
  getDistrictsIdStatusRoute,
  getDistrictsIdStudentsRoute,
  getDistrictsIdTeachersRoute,
  getDistrictsRoute,
} from '../routes'

export const getDistrictsRouteHandler: RouteHandler<typeof getDistrictsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdRouteHandler: RouteHandler<typeof getDistrictsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdAdminsRouteHandler: RouteHandler<
  typeof getDistrictsIdAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdSchoolsRouteHandler: RouteHandler<
  typeof getDistrictsIdSchoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdSectionsRouteHandler: RouteHandler<
  typeof getDistrictsIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdStatusRouteHandler: RouteHandler<
  typeof getDistrictsIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdStudentsRouteHandler: RouteHandler<
  typeof getDistrictsIdStudentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistrictsIdTeachersRouteHandler: RouteHandler<
  typeof getDistrictsIdTeachersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
