import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSchoolAdminsIdRoute,
  getSchoolAdminsIdSchoolsRoute,
  getSchoolAdminsRoute,
} from '../routes'

export const getSchoolAdminsRouteHandler: RouteHandler<typeof getSchoolAdminsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchoolAdminsIdRouteHandler: RouteHandler<typeof getSchoolAdminsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSchoolAdminsIdSchoolsRouteHandler: RouteHandler<
  typeof getSchoolAdminsIdSchoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
