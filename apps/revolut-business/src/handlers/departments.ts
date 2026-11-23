import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDepartmentsDepartmentIdRoute,
  getDepartmentsDepartmentIdRoute,
  getDepartmentsRoute,
  patchDepartmentsDepartmentIdRoute,
  postDepartmentsRoute,
} from '../routes'

export const postDepartmentsRouteHandler: RouteHandler<typeof postDepartmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDepartmentsRouteHandler: RouteHandler<typeof getDepartmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDepartmentsDepartmentIdRouteHandler: RouteHandler<
  typeof getDepartmentsDepartmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDepartmentsDepartmentIdRouteHandler: RouteHandler<
  typeof patchDepartmentsDepartmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDepartmentsDepartmentIdRouteHandler: RouteHandler<
  typeof deleteDepartmentsDepartmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
